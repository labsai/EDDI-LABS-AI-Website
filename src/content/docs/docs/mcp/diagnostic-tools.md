---
title: Diagnostic Tools
description: Read pipeline logs and audit trails for debugging and compliance.
---

## read_bot_logs

Read server-side pipeline logs (errors, LLM timeouts) filtered by agent/conversation/level.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agentId` | string | No | Filter by agent |
| `conversationId` | string | No | Filter by conversation |
| `level` | string | No | Log level filter |

## read_audit_trail

Read per-task audit entries with LLM details, timing, cost, and tool calls.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversationId` | string | No | Filter by conversation |
| `agentId` | string | No | Filter by agent |
