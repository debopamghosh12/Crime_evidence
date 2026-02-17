/**
 * Evidence management routes — CRUD, search, integrity verification.
 *
 * Evidence statuses are ALWAYS validated against demo_config.json.
 * If a status is renamed in the config, the API immediately accepts
 * the new name and rejects the old one.
 */
declare const router: import("express-serve-static-core").Router;
export default router;
//# sourceMappingURL=evidence.d.ts.map