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
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
// ---------------------------------------------------------------------------
// Resolve config file path relative to project root
// ---------------------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONFIG_PATH = path.resolve(__dirname, "..", "demo_config.json");
// ---------------------------------------------------------------------------
// Config helpers — always read/write from disk (never cached)
// ---------------------------------------------------------------------------
export function readConfig() {
    const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
    return JSON.parse(raw);
}
export function writeConfig(config) {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
}
// ---------------------------------------------------------------------------
// MCP Server
// ---------------------------------------------------------------------------
export function createMcpServer() {
    const server = new McpServer({
        name: "crime-evidence-config",
        version: "1.0.0",
    });
    // -------------------------------------------------------------------------
    // Resource: config://demo-values
    // Reads the config file from disk on every access — fully decoupled.
    // -------------------------------------------------------------------------
    server.registerResource("demo_configuration", "config://demo-values", {
        description: "Crime Evidence Management System demo configuration. Contains blockchain, storage, security, roles, evidence lifecycle settings, and any dynamically-added sections.",
        mimeType: "application/json",
    }, async () => {
        const config = readConfig();
        return {
            contents: [
                {
                    uri: "config://demo-values",
                    mimeType: "application/json",
                    text: JSON.stringify(config, null, 2),
                },
            ],
        };
    });
    // -------------------------------------------------------------------------
    // Tool: update_demo_resource
    // Mutates an existing key within a top-level section of the config.
    // -------------------------------------------------------------------------
    server.registerTool("update_demo_resource", {
        description: "Update a specific value in the Crime Evidence system demo configuration. " +
            "Specify the top-level section (e.g. 'security', 'blockchain'), the key to update, " +
            "and the new value. The value can be a string, number, boolean, or JSON object/array.",
        inputSchema: {
            section: z
                .string()
                .describe("Top-level section name in the config (e.g. 'security', 'blockchain', 'storage', 'database', 'roles', 'evidence_lifecycle', 'performance', 'notifications', 'system')"),
            key: z
                .string()
                .describe("Key within the section to update (e.g. 'session_timeout_min', 'mfa_enabled')"),
            value: z
                .any()
                .describe("New value. Can be string, number, boolean, object, or array."),
        },
    }, async ({ section, key, value }) => {
        const config = readConfig();
        // Validate section exists
        if (!(section in config)) {
            return {
                content: [
                    {
                        type: "text",
                        text: `Error: Section "${section}" does not exist in the configuration. Available sections: ${Object.keys(config).join(", ")}`,
                    },
                ],
                isError: true,
            };
        }
        const sectionData = config[section];
        // Handle array sections (like 'roles') — not directly key-updatable
        if (Array.isArray(sectionData)) {
            return {
                content: [
                    {
                        type: "text",
                        text: `Error: Section "${section}" is an array. Use a specific index or restructure the update. Current items: ${sectionData.length}`,
                    },
                ],
                isError: true,
            };
        }
        // Update the value
        const oldValue = sectionData[key];
        sectionData[key] = value;
        config[section] = sectionData;
        writeConfig(config);
        return {
            content: [
                {
                    type: "text",
                    text: `Successfully updated config.${section}.${key}\n\nOld value: ${JSON.stringify(oldValue, null, 2)}\nNew value: ${JSON.stringify(value, null, 2)}`,
                },
            ],
        };
    });
    // -------------------------------------------------------------------------
    // Tool: add_dynamic_section
    // Appends a new named section under config.dynamic_sections.
    // -------------------------------------------------------------------------
    server.registerTool("add_dynamic_section", {
        description: "Add a new dynamic section to the Crime Evidence system configuration. " +
            "The section is stored under 'dynamic_sections' in the config. " +
            "Use this to extend the schema with new configuration areas at runtime " +
            "without modifying the core config structure.",
        inputSchema: {
            section_name: z
                .string()
                .min(1)
                .describe("Name for the new dynamic section (e.g. 'audit_settings', 'mobile_config')"),
            schema: z
                .record(z.any())
                .describe("Key-value object defining the section's initial configuration"),
            overwrite: z
                .boolean()
                .optional()
                .default(false)
                .describe("If true, overwrites an existing dynamic section with the same name. Default: false."),
        },
    }, async ({ section_name, schema, overwrite }) => {
        const config = readConfig();
        // Ensure dynamic_sections exists
        if (!config.dynamic_sections) {
            config.dynamic_sections = {};
        }
        // Check for existing section
        if (config.dynamic_sections[section_name] && !overwrite) {
            return {
                content: [
                    {
                        type: "text",
                        text: `Error: Dynamic section "${section_name}" already exists. Set overwrite=true to replace it.\n\nExisting content: ${JSON.stringify(config.dynamic_sections[section_name], null, 2)}`,
                    },
                ],
                isError: true,
            };
        }
        config.dynamic_sections[section_name] = schema;
        writeConfig(config);
        return {
            content: [
                {
                    type: "text",
                    text: `Successfully added dynamic section "${section_name}".\n\nContent: ${JSON.stringify(schema, null, 2)}\n\nAccess via config.dynamic_sections.${section_name}`,
                },
            ],
        };
    });
    return server;
}
// ---------------------------------------------------------------------------
// Standalone MCP entry point (stdio transport)
// ---------------------------------------------------------------------------
export async function startMcpServer() {
    const server = createMcpServer();
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Crime Evidence MCP Server running on stdio");
}
//# sourceMappingURL=server.js.map