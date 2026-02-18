
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

async function verifyLogin() {
    console.log("Attempting login for 'harsh' with 'password123'...");
    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, {
            username: 'harsh',
            password: 'password123'
        });
        console.log("✅ Login successful!");
        console.log("Token:", res.data.token ? "RECEIVED" : "MISSING");
        console.log("User Role:", res.data.user.role);
    } catch (err: any) {
        console.error("❌ Login failed:", err.response?.data || err.message);
    }
}

verifyLogin();
