---
title: REST API
description: EDDI exposes comprehensive REST APIs for agent management, conversations, and resource CRUD.
---

EDDI provides a full REST API alongside the MCP tools. The REST API is auto-documented via OpenAPI.

## Base URL

```
http://localhost:7070
```

## Key Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/botstore/agents` | List all agents |
| POST | `/botstore/agents` | Create an agent |
| PUT | `/botstore/agents/{id}` | Update an agent |
| DELETE | `/botstore/agents/{id}` | Delete an agent |
| POST | `/agents/{env}/{agentId}` | Create a conversation |
| POST | `/agents/{env}/{agentId}/{convId}` | Send a message |
| GET | `/conversationstore/conversations/{id}` | Read conversation |

## OpenAPI Spec

The full OpenAPI specification is available at:

```
http://localhost:7070/q/openapi
```
