/**
 * Custody transfer routes with evidence locking.
 *
 * Flow:
 * 1. Initiate → evidence.locked = true, event.status = 'pending'
 * 2. Approve  → evidence.locked = false, custody transferred, signature required
 * 3. Reject   → evidence.locked = false, no custody change
 *
 * Attempting a second transfer while locked → 409 Conflict
 */
declare const router: import("express-serve-static-core").Router;
export default router;
//# sourceMappingURL=custody.d.ts.map