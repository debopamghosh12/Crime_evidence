/**
 * SHA-256 hash utilities for evidence integrity verification.
 */

import crypto from "node:crypto";

/** Compute SHA-256 hash of a buffer */
export function computeSHA256(data: Buffer): string {
    return crypto.createHash("sha256").update(data).digest("hex");
}

/** Compute SHA-256 hash of a string */
export function computeSHA256String(data: string): string {
    return crypto.createHash("sha256").update(data, "utf-8").digest("hex");
}

/** Verify that a buffer matches an expected SHA-256 hash */
export function verifyHash(data: Buffer, expectedHash: string): boolean {
    const actualHash = computeSHA256(data);
    return actualHash === expectedHash;
}

/** Generate a signature hash from a custody event state (for chain integrity) */
export function generateCustodySignature(params: {
    evidenceId: string;
    fromUserId: string;
    toUserId: string;
    timestamp: string;
    previousSignature?: string;
}): string {
    const payload = [
        params.evidenceId,
        params.fromUserId,
        params.toUserId,
        params.timestamp,
        params.previousSignature ?? "genesis",
    ].join("|");
    return computeSHA256String(payload);
}
