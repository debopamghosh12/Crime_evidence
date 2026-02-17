
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const username = process.argv[2];
    if (!username) {
        console.error("Please provide a username");
        process.exit(1);
    }
    const user = await prisma.user.findFirst({
        where: { username: username }
    });
    console.log(user);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
