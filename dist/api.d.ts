/**
 * Express REST API layer for the Crime Evidence Management System.
 *
 * Provides HTTP endpoints that read/write the same `demo_config.json`
 * used by the MCP server. This allows the frontend (and other HTTP
 * consumers) to access and mutate the configuration at runtime.
 */
import express from "express";
export declare function createApp(): express.Express;
export declare function startApiServer(port?: number): void;
//# sourceMappingURL=api.d.ts.map