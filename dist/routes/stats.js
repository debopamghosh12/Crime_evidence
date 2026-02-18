import { Router } from "express";
import { authenticate, prisma } from "../middleware/auth.js";
const router = Router();
// ---------------------------------------------------------------------------
// GET /api/v1/stats — fetch dashboard statistics
// ---------------------------------------------------------------------------
router.get("/", authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        const [totalEvidence, pendingTransfers] = await Promise.all([
            prisma.evidence.count(),
            prisma.custodyEvent.count({
                where: {
                    toUserId: userId,
                    status: "pending",
                },
            }),
        ]);
        res.json({
            totalEvidence,
            pendingTransfers,
        });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch stats", details: err.message });
    }
});
export default router;
//# sourceMappingURL=stats.js.map