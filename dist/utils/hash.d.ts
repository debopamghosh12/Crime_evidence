/**
 * SHA-256 hash utilities for evidence integrity verification.
 */
/** Compute SHA-256 hash of a buffer */
export declare function computeSHA256(data: Buffer): string;
/** Compute SHA-256 hash of a string */
export declare function computeSHA256String(data: string): string;
/** Verify that a buffer matches an expected SHA-256 hash */
export declare function verifyHash(data: Buffer, expectedHash: string): boolean;
/** Generate a signature hash from a custody event state (for chain integrity) */
export declare function generateCustodySignature(params: {
    evidenceId: string;
    fromUserId: string;
    toUserId: string;
    timestamp: string;
    previousSignature?: string;
}): string;
//# sourceMappingURL=hash.d.ts.map