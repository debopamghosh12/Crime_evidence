/**
 * MCP Server for Crime Evidence Management System
 *
 * Exposes a `demo_configuration` Resource at `config://demo-values`
 * and provides tools to mutate values and append dynamic sections.
 *
 * The codebase remains decoupled from config values — everything
 * is read from `demo_config.json` at runtime.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
export declare function readConfig(): Record<string, any>;
export declare function writeConfig(config: Record<string, any>): void;
export declare function createMcpServer(): McpServer;
export declare function startMcpServer(): Promise<void>;
//# sourceMappingURL=server.d.ts.map