import "dotenv/config";
import { prisma } from "./lib/prisma.js";
async function test() {
    try {
        console.log("Testing shared prisma module...");
        const count = await prisma.user.count();
        console.log("User count:", count);
        await prisma.$disconnect();
        console.log("SUCCESS!");
    }
    catch (e) {
        console.error("ERROR:", e.message);
    }
}
test();
//# sourceMappingURL=test_prisma.js.map