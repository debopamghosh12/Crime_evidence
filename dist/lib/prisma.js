import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";
const createPrismaClient = () => {
    try {
        // Resolve the database path from DATABASE_URL env or use default.
        // DATABASE_URL format for SQLite: "file:./dev.db"
        const dbUrl = process.env.DATABASE_URL ?? "file:./dev.db";
        const relativePath = dbUrl.replace(/^file:/, "");
        const absolutePath = path.resolve(relativePath);
        console.log(`[Antigravity-Engine] Connecting to: ${absolutePath}`);
        // 1. Setup the Prisma 7 Adapter
        // Note: In @prisma/adapter-better-sqlite3 v7.4.0, the constructor expects
        // a configuration object with 'url', not a Database instance.
        const adapter = new PrismaBetterSqlite3({
            url: `file:${absolutePath}`,
        });
        // 2. Instantiate Client with verbose logging for debugging
        return new PrismaClient({
            adapter,
            log: ["query", "info", "warn", "error"],
        });
    }
    catch (err) {
        console.error("🚀 ANTIGRAVITY ENGINE FAILURE:");
        console.error(`ERROR_CODE: ${err.code || "UNKNOWN"}`);
        console.error(`MESSAGE: ${err.message}`);
        // Diagnostic Hints
        if (err.message.includes("native") || err.message.includes("better-sqlite3")) {
            console.error('FIX: Try running "npm rebuild better-sqlite3"');
        }
        if (err.message.includes("adapter")) {
            console.error('FIX: Ensure you ran "npx prisma generate" after adding the adapter.');
        }
        process.exit(1); // Stop the server; don't allow a zombie state
    }
};
export const prisma = createPrismaClient();
//# sourceMappingURL=prisma.js.map