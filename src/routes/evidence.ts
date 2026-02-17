/**
 * Evidence management routes — CRUD, search, integrity verification.
 *
 * Evidence statuses are ALWAYS validated against demo_config.json.
 * If a status is renamed in the config, the API immediately accepts
 * the new name and rejects the old one.
 */

import { Router, Request, Response } from "express";
import { authenticate, requirePermission, prisma } from "../middleware/auth.js";
import { getValidStatuses, isValidStatus } from "../utils/config.js";
import { computeSHA256String, verifyHash } from "../utils/hash.js";

const router = Router();

// ---------------------------------------------------------------------------
// POST /api/v1/evidence — register new evidence
// ---------------------------------------------------------------------------
router.post(
    "/",
    authenticate,
    requirePermission("register_evidence"),
    async (req: Request, res: Response) => {
        try {
            const {
                caseId,
                type,
                description,
                collectionDate,
                location,
                tags,
                status,
                fileHash,
                ipfsCid,
                officerNotes,
            } = req.body;

            // Validate required fields
            if (!caseId || !type || !description || !collectionDate || !location) {
                res.status(400).json({
                    error: "Missing required fields",
                    required: ["caseId", "type", "description", "collectionDate", "location"],
                });
                return;
            }

            // Validate type
            const validTypes = ["Physical", "Digital", "Testimonial"];
            if (!validTypes.includes(type)) {
                res.status(400).json({
                    error: `Invalid evidence type "${type}"`,
                    valid_types: validTypes,
                });
                return;
            }

            // Validate status against config (ZERO-HARDCODING!)
            const validStatuses = getValidStatuses();
            const evidenceStatus = status ?? validStatuses[0]; // default to first status
            if (!isValidStatus(evidenceStatus)) {
                res.status(400).json({
                    error: `Invalid status "${evidenceStatus}". Status must be one of the currently configured values.`,
                    valid_statuses: validStatuses,
                    hint: "Statuses are defined in demo_config.json → evidence_lifecycle.statuses",
                });
                return;
            }

            const evidence = await prisma.evidence.create({
                data: {
                    caseId,
                    type,
                    description,
                    collectionDate: new Date(collectionDate),
                    location,
                    tags: tags ? JSON.stringify(tags) : null,
                    status: evidenceStatus,
                    fileHash: fileHash ?? null,
                    ipfsCid: ipfsCid ?? null,
                    officerNotes: officerNotes ?? null,
                    collectedById: req.user!.id,
                    currentCustodianId: req.user!.id,
                },
                include: {
                    collectedBy: {
                        select: { id: true, username: true, fullName: true, role: true },
                    },
                },
            });

            // Log the action
            await prisma.accessLog.create({
                data: {
                    evidenceId: evidence.id,
                    userId: req.user!.id,
                    action: "register",
                    result: "success",
                    ipAddress: req.ip ?? null,
                    userAgent: req.headers["user-agent"] ?? null,
                },
            });

            res.status(201).json({ success: true, evidence });
        } catch (err: any) {
            res.status(500).json({ error: "Failed to register evidence", details: err.message });
        }
    }
);

// ---------------------------------------------------------------------------
// GET /api/v1/evidence — search/filter evidence
// ---------------------------------------------------------------------------
router.get("/", authenticate, async (req: Request, res: Response) => {
    try {
        const { caseId, type, status, search, page = "1", limit = "20" } = req.query;

        const where: any = {};
        if (caseId) where.caseId = caseId as string;
        if (type) where.type = type as string;
        if (status) {
            // Validate status against config
            if (!isValidStatus(status as string)) {
                res.status(400).json({
                    error: `Invalid status filter "${status}"`,
                    valid_statuses: getValidStatuses(),
                });
                return;
            }
            where.status = status as string;
        }
        if (search) {
            where.OR = [
                { description: { contains: search as string } },
                { caseId: { contains: search as string } },
            ];
        }

        const pageNum = Math.max(1, parseInt(page as string, 10));
        const pageSize = Math.min(100, Math.max(1, parseInt(limit as string, 10)));
        const skip = (pageNum - 1) * pageSize;

        const [evidence, total] = await Promise.all([
            prisma.evidence.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { createdAt: "desc" },
                include: {
                    collectedBy: {
                        select: { id: true, username: true, fullName: true },
                    },
                    currentCustodian: {
                        select: { id: true, username: true, fullName: true },
                    },
                    _count: { select: { files: true, custodyEvents: true } },
                },
            }),
            prisma.evidence.count({ where }),
        ]);

        res.json({
            evidence,
            pagination: {
                page: pageNum,
                limit: pageSize,
                total,
                totalPages: Math.ceil(total / pageSize),
            },
        });
    } catch (err: any) {
        res.status(500).json({ error: "Failed to search evidence", details: err.message });
    }
});

// ---------------------------------------------------------------------------
// GET /api/v1/evidence/:id — get evidence detail
// ---------------------------------------------------------------------------
router.get("/:id", authenticate, async (req: Request, res: Response) => {
    try {
        const evidence = await prisma.evidence.findUnique({
            where: { id: req.params.id as string },
            include: {
                collectedBy: {
                    select: { id: true, username: true, fullName: true, role: true, department: true },
                },
                currentCustodian: {
                    select: { id: true, username: true, fullName: true, role: true, department: true },
                },
                files: true,
                custodyEvents: {
                    orderBy: { timestamp: "asc" },
                    include: {
                        fromUser: { select: { id: true, username: true, fullName: true } },
                        toUser: { select: { id: true, username: true, fullName: true } },
                    },
                },
            },
        });

        if (!evidence) {
            res.status(404).json({ error: "Evidence not found." });
            return;
        }

        // Log access
        await prisma.accessLog.create({
            data: {
                evidenceId: evidence.id,
                userId: req.user!.id,
                action: "view",
                result: "success",
                ipAddress: req.ip ?? null,
                userAgent: req.headers["user-agent"] ?? null,
            },
        });

        res.json({ evidence });
    } catch (err: any) {
        res.status(500).json({ error: "Failed to fetch evidence", details: err.message });
    }
});

// ---------------------------------------------------------------------------
// PUT /api/v1/evidence/:id — update evidence metadata
// ---------------------------------------------------------------------------
router.put(
    "/:id",
    authenticate,
    requirePermission("register_evidence"),
    async (req: Request, res: Response) => {
        try {
            const evidence = await prisma.evidence.findUnique({ where: { id: req.params.id as string } });

            if (!evidence) {
                res.status(404).json({ error: "Evidence not found." });
                return;
            }

            if (evidence.locked) {
                res.status(409).json({
                    error: "Evidence is locked due to a pending custody transfer.",
                    hint: "Resolve the pending transfer before modifying evidence.",
                });
                return;
            }

            const { description, tags, status, officerNotes, location } = req.body;

            // Validate status if provided
            if (status && !isValidStatus(status)) {
                res.status(400).json({
                    error: `Invalid status "${status}"`,
                    valid_statuses: getValidStatuses(),
                });
                return;
            }

            const updated = await prisma.evidence.update({
                where: { id: req.params.id as string },
                data: {
                    ...(description !== undefined && { description }),
                    ...(tags !== undefined && { tags: JSON.stringify(tags) }),
                    ...(status !== undefined && { status }),
                    ...(officerNotes !== undefined && { officerNotes }),
                    ...(location !== undefined && { location }),
                },
            });

            // Log modification
            await prisma.accessLog.create({
                data: {
                    evidenceId: evidence.id,
                    userId: req.user!.id,
                    action: "modify",
                    result: "success",
                    ipAddress: req.ip ?? null,
                    userAgent: req.headers["user-agent"] ?? null,
                },
            });

            res.json({ success: true, evidence: updated });
        } catch (err: any) {
            res.status(500).json({ error: "Failed to update evidence", details: err.message });
        }
    }
);

// ---------------------------------------------------------------------------
// POST /api/v1/evidence/:id/verify — verify file integrity
// ---------------------------------------------------------------------------
router.post("/:id/verify", authenticate, async (req: Request, res: Response) => {
    try {
        const evidence = await prisma.evidence.findUnique({
            where: { id: req.params.id as string },
            include: { files: true },
        });

        if (!evidence) {
            res.status(404).json({ error: "Evidence not found." });
            return;
        }

        const { fileContent } = req.body; // base64 encoded file for verification

        let integrityResult;
        if (fileContent && evidence.fileHash) {
            const buffer = Buffer.from(fileContent, "base64");
            const matches = verifyHash(buffer, evidence.fileHash);
            integrityResult = {
                status: matches ? "PASS" : "FAIL",
                expectedHash: evidence.fileHash,
                actualHash: computeSHA256String(fileContent),
                verified: matches,
            };
        } else {
            integrityResult = {
                status: evidence.fileHash ? "NO_FILE_PROVIDED" : "NO_HASH_RECORDED",
                expectedHash: evidence.fileHash,
                message: evidence.fileHash
                    ? "Provide fileContent (base64) to verify against stored hash."
                    : "No file hash was recorded for this evidence.",
            };
        }

        res.json({
            evidenceId: evidence.id,
            caseId: evidence.caseId,
            integrity: integrityResult,
            files: evidence.files.map((f: any) => ({
                id: f.id,
                fileName: f.fileName,
                sha256Hash: f.sha256Hash,
            })),
        });
    } catch (err: any) {
        res.status(500).json({ error: "Failed to verify integrity", details: err.message });
    }
});

export default router;
