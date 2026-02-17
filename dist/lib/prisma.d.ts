/**
 * Shared Prisma client instance.
 *
 * Prisma 7 requires a Driver Adapter — direct database URLs are no longer
 * accepted by PrismaClient. We use @prisma/adapter-better-sqlite3 to
 * connect to the SQLite database.
 */
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
export declare const prisma: PrismaClient<{
    adapter: PrismaBetterSqlite3;
}, never, import("@prisma/client/runtime/client").DefaultArgs>;
//# sourceMappingURL=prisma.d.ts.map