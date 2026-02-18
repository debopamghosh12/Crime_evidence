
import { prisma } from '../src/lib/prisma.js';

async function checkUser() {
    console.log("Checking for user 'harsh'...");
    const user = await prisma.user.findUnique({
        where: { username: 'harsh' }
    });

    if (user) {
        console.log("User found:", user.username);
        console.log("Is Active:", user.isActive);
        console.log("Password Hash:", user.passwordHash);
    } else {
        console.log("User 'harsh' NOT FOUND.");
    }
}

checkUser();
