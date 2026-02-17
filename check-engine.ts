import Database from 'better-sqlite3';

try {
    console.log("Checking native SQLite driver...");
    const db = new Database(':memory:'); // Use message memory for speed and less I/O
    db.prepare('CREATE TABLE IF NOT EXISTS test (id INTEGER)').run();
    console.log("✅ Native SQLite Driver: Working");
    process.exit(0);
} catch (e: any) {
    console.error("❌ Native SQLite Driver: FAILED. Check C++ build tools.");
    console.error(e.message);
    process.exit(1);
}
