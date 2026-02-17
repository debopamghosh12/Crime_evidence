/**
 * Authentication routes — register, login, profile.
 */
import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authenticate, requirePermission, prisma } from "../middleware/auth.js";
import { getValidRoleNames, getJwtSecret, getSessionTimeout, } from "../utils/config.js";
const router = Router();
// ---------------------------------------------------------------------------
// POST /api/v1/auth/register — create a new user (requires user_management)
// ---------------------------------------------------------------------------
router.post("/register", authenticate, requirePermission("user_management"), async (req, res) => {
    try {
        const { username, email, fullName, badgeNumber, department, role, password } = req.body;
        // Validate required fields
        if (!username || !email || !fullName || !role || !password) {
            res.status(400).json({
                error: "Missing required fields",
                required: ["username", "email", "fullName", "role", "password"],
            });
            return;
        }
        // Validate role against config (zero-hardcoding)
        const validRoles = getValidRoleNames();
        if (!validRoles.includes(role)) {
            res.status(400).json({
                error: `Invalid role "${role}"`,
                valid_roles: validRoles,
            });
            return;
        }
        // Check for duplicate username/email
        const existing = await prisma.user.findFirst({
            where: { OR: [{ username }, { email }] },
        });
        if (existing) {
            res.status(409).json({ error: "Username or email already exists." });
            return;
        }
        // Hash password
        const passwordHash = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                username,
                email,
                fullName,
                badgeNumber: badgeNumber ?? null,
                department: department ?? null,
                role,
                passwordHash,
            },
            select: {
                id: true,
                username: true,
                email: true,
                fullName: true,
                role: true,
                department: true,
                createdAt: true,
            },
        });
        res.status(201).json({ success: true, user });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to create user", details: err.message });
    }
});
// ---------------------------------------------------------------------------
// POST /api/v1/auth/login — authenticate and receive JWT
// ---------------------------------------------------------------------------
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400).json({ error: "Username and password are required." });
            return;
        }
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user || !user.isActive) {
            res.status(401).json({ error: "Invalid credentials." });
            return;
        }
        const passwordValid = await bcrypt.compare(password, user.passwordHash);
        if (!passwordValid) {
            res.status(401).json({ error: "Invalid credentials." });
            return;
        }
        // Generate JWT with timeout from config
        const secret = getJwtSecret();
        const timeoutMin = getSessionTimeout();
        const token = jwt.sign({ userId: user.id, username: user.username, role: user.role }, secret, { expiresIn: `${timeoutMin}m` });
        res.json({
            success: true,
            token,
            expires_in: `${timeoutMin} minutes`,
            user: {
                id: user.id,
                username: user.username,
                fullName: user.fullName,
                role: user.role,
                department: user.department,
            },
        });
    }
    catch (err) {
        res.status(500).json({ error: "Login failed", details: err.message });
    }
});
// ---------------------------------------------------------------------------
// GET /api/v1/auth/me — get current user profile
// ---------------------------------------------------------------------------
router.get("/me", authenticate, async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                username: true,
                email: true,
                fullName: true,
                badgeNumber: true,
                department: true,
                role: true,
                mfaEnabled: true,
                isActive: true,
                createdAt: true,
            },
        });
        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        res.json({ user });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch profile", details: err.message });
    }
});
// ---------------------------------------------------------------------------
// POST /api/v1/auth/seed — create initial admin user (only if no users exist)
// ---------------------------------------------------------------------------
router.post("/seed", async (req, res) => {
    try {
        const count = await prisma.user.count();
        if (count > 0) {
            res.status(400).json({ error: "Users already exist. Seed is only for initial setup." });
            return;
        }
        const passwordHash = await bcrypt.hash("admin123", 12);
        const admin = await prisma.user.create({
            data: {
                username: "admin",
                email: "admin@crimeevidence.gov",
                fullName: "System Administrator",
                role: "admin",
                department: "IT Administration",
                passwordHash,
            },
            select: {
                id: true,
                username: true,
                email: true,
                fullName: true,
                role: true,
            },
        });
        res.status(201).json({
            success: true,
            message: "Initial admin user created. Login with username: admin, password: admin123",
            user: admin,
        });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to seed", details: err.message });
    }
});
export default router;
//# sourceMappingURL=auth.js.map