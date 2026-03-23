---
title: Setup Tools
description: "Create fully configured agents in a single MCP call: setup_agent and create_api_agent."
---

## setup_agent

Create a fully working agent in one call — creates rules, LLM config, optional output/greeting, workflow, agent, and deploys.

**Default:** `anthropic` / `claude-sonnet-4-6`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Agent display name |
| `systemPrompt` | string | Yes | System prompt for the LLM |
| `provider` | string | No | LLM provider (default: `anthropic`) |
| `modelId` | string | No | Model ID (default: `claude-sonnet-4-6`) |
| `enableSentimentAnalysis` | boolean | No | Include sentiment data in responses |
| `quickReplies` | array | No | Suggested reply buttons |

## create_api_agent

Create an agent from an **OpenAPI 3.0/3.1 spec**. Parses the spec, generates HttpCalls configs (grouped by API tag), creates the full pipeline, and deploys.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `specUrl` | string | Yes | URL to the OpenAPI spec |
| `baseUrlOverride` | string | No | Override the API base URL |
| `tagFilter` | string | No | Only include endpoints matching this tag |
| `authHeader` | string | No | Authorization header to propagate |
