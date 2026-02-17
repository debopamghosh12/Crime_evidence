/**
 * SHA-256 hash utilities for evidence integrity verification.
 */
import crypto from "node:crypto";
/** Compute SHA-256 hash of a buffer */
export function computeSHA256(data) {
    return crypto.createHash("sha256").update(data).digest("hex");
}
/** Compute SHA-256 hash of a string */
export function computeSHA256String(data) {
    return crypto.createHash("sha256").update(data, "utf-8").digest("hex");
}
/** Verify that a buffer matches an expected SHA-256 hash */
export function verifyHash(data, expectedHash) {
    const actualHash = computeSHA256(data);
    return actualHash === expectedHash;
}
/** Generate a signature hash from a custody event state (for chain integrity) */
export function generateCustodySignature(params) {
    const payload = [
        params.evidenceId,
        params.fromUserId,
        params.toUserId,
        params.timestamp,
        params.previousSignature ?? "genesis",
    ].join("|");
    return computeSHA256String(payload);
}
//# sourceMappingURL=hash.js.map