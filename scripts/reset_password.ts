
import { prisma } from '../src/lib/prisma.js';
import bcrypt from 'bcryptjs';

async function resetPassword(username: string, newPass: string) {
    console.log(`Resetting password for ${username}...`);

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPass, salt);

    try {
        const user = await prisma.user.update({
            where: { username },
            data: { passwordHash: hash }
        });
        console.log(`✅ Password for '${username}' updated successfully.`);
        console.log(`New Hash: ${hash}`);
    } catch (e) {
        console.error(`❌ Failed to update password for '${username}':`, e);
    }
}

// modifying to run immediately for 'harsh'
resetPassword('harsh', 'password123');
