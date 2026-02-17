/**
 * Authentication & Dynamic RBAC middleware.
 *
 * - authenticate: verifies JWT, attaches req.user
 * - requirePermission: looks up permissions from demo_config.json at runtime
 *
 * Permissions are NOT hardcoded — if you remove a permission from
 * a role in the config, it takes effect immediately.
 */

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";
import { getPermissions, findRole, getJwtSecret } from "../utils/config.js";

// ---------------------------------------------------------------------------
// Extend Express Request with user info
// ---------------------------------------------------------------------------
export interface AuthenticatedUser {
    id: string;
    username: string;
    role: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: AuthenticatedUser;
        }
    }
}

// ---------------------------------------------------------------------------
// authenticate — verify JWT token
// ---------------------------------------------------------------------------
export function authenticate(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ error: "Authentication required. Provide a Bearer token." });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const secret = getJwtSecret();
        const decoded = jwt.verify(token, secret) as { userId: string; username: string; role: string };

        req.user = {
            id: decoded.userId,
            username: decoded.username,
            role: decoded.role,
        };

        next();
    } catch (err) {
        res.status(401).json({ error: "Invalid or expired token." });
        return;
    }
}

// ---------------------------------------------------------------------------
// requirePermission — dynamic RBAC from config
//
// Instead of checking role === 'admin', we look up the user's role
// in demo_config.json and check if its permissions array includes
// ALL of the required permissions.
//
// If a permission is removed from the config JSON, access is
// immediately revoked — no code change needed.
// ---------------------------------------------------------------------------
export function requirePermission(...requiredPermissions: string[]) {
    return (req: Request, res: Response, next: NextFunction): void => {
        if (!req.user) {
            res.status(401).json({ error: "Authentication required." });
            return;
        }

        const userRole = req.user.role;
        const roleConfig = findRole(userRole);

        // Role doesn't exist in config (maybe renamed or removed)
        if (!roleConfig) {
            res.status(403).json({
                error: `Role "${userRole}" is not defined in the current system configuration.`,
                hint: "The role may have been renamed or removed. Contact an administrator.",
            });
            return;
        }

        // Check if the role has ALL required permissions
        const rolePermissions = roleConfig.permissions;
        const missingPermissions = requiredPermissions.filter((p) => !rolePermissions.includes(p));

        if (missingPermissions.length > 0) {
            res.status(403).json({
                error: "Insufficient permissions.",
                required: requiredPermissions,
                missing: missingPermissions,
                your_role: roleConfig.display_name,
                your_permissions: rolePermissions,
            });
            return;
        }

        next();
    };
}

export { prisma };
