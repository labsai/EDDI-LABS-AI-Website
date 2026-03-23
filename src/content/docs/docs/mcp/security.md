---
title: MCP Security
description: Authentication, authorization, and tool filtering for the EDDI MCP server.
---

## Authentication

The MCP endpoint inherits EDDI's existing **OIDC/Keycloak** authentication. When auth is enabled, MCP clients must provide valid tokens.

## Tool Filtering

EDDI uses a **whitelist-based ToolFilter** to control which tools are exposed via MCP. Internal agent tools (calculator, datetime, websearch) are excluded — only the 39 documented tools are visible.

## Recommended Role Mapping

| Role | Tools |
|------|-------|
| `mcp-user` | `list_agents`, `discover_bots`, `create_conversation`, `talk_to_agent`, `chat_with_agent`, `chat_managed`, `read_conversation*`, `list_agent_triggers`, `read_bot_logs`, `read_audit_trail` |
| `mcp-admin` | All user tools + `deploy_agent`, `undeploy_agent`, `create_agent`, `delete_agent`, `update_agent`, `setup_agent`, `create_api_agent`, resource CRUD, `apply_bot_changes`, `list_bot_resources`, trigger CRUD |
