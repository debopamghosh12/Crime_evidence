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
import { prisma } from "../lib/prisma.js";
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
export declare function authenticate(req: Request, res: Response, next: NextFunction): void;
export declare function requirePermission(...requiredPermissions: string[]): (req: Request, res: Response, next: NextFunction) => void;
export { prisma };
//# sourceMappingURL=auth.d.ts.map