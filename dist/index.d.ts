/**
 * Entry point for the Crime Evidence MCP Server.
 *
 * Supports three startup modes via --mode flag:
 *   --mode mcp   → MCP server only (stdio transport)
 *   --mode api   → Express REST API only (port 3000)
 *   (default)    → Express REST API on port 3000
 *
 * The MCP stdio transport and Express can't easily run in the same
 * process (stdio is consumed by the MCP protocol), so the default
 * mode starts the REST API. Use --mode mcp for LLM client connections.
 */
import "dotenv/config";
//# sourceMappingURL=index.d.ts.map