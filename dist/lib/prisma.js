/**
 * Shared Prisma client instance.
 *
 * Prisma 7 requires a Driver Adapter — direct database URLs are no longer
 * accepted by PrismaClient. We use @prisma/adapter-better-sqlite3 to
 * connect to the SQLite database.
 */
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";
// Resolve the database path from DATABASE_URL env or use default.
// DATABASE_URL format for SQLite: "file:./dev.db"
const dbUrl = process.env.DATABASE_URL ?? "file:./dev.db";
const relativePath = dbUrl.replace(/^file:/, "");
const absolutePath = path.resolve(relativePath);
console.log("[prisma.ts] DATABASE_URL:", process.env.DATABASE_URL);
console.log("[prisma.ts] Resolved DB path:", absolutePath);
const adapter = new PrismaBetterSqlite3({ url: `file:${absolutePath}` });
export const prisma = new PrismaClient({ adapter });
//# sourceMappingURL=prisma.js.map