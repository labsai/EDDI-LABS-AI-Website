---
title: Configuration-as-Code
description: "EDDI's defining paradigm: Logic is Configuration, Java is the Engine."
---

## The Core Paradigm

In traditional AI platforms, agent rules is defined in compiled code. Every change — from tweaking a system prompt to adding a new tool — requires:

1. A Java developer to edit source code
2. Recompilation
3. Automated testing
4. A CI/CD deployment cycle

**EDDI eliminates this entire overhead.** agent logic, lifecycle tasks, pipeline definitions, and tool configurations exist as **JSON documents** stored in the database. They can be created, updated, and version-controlled via REST API or the Manager UI — with zero Java code changes.

## What's Configurable?

| Resource Type | What It Controls | Example |
|--------------|-----------------|---------|
| **rules** | Conditional response logic | "If user mentions billing, set action to `redirect_billing`" |
| **LLM config** | LLM provider, model, temperature, tools | Provider: `anthropic`, Model: `claude-sonnet-4-6`, Temperature: `0.7` |
| **Output Sets** | Response templates and formatting | HTML templates, quick replies, action buttons |
| **HTTP Calls** | External API integrations | REST calls to your backend, webhooks, third-party APIs |
| **workflows** | Pipeline composition | Which tasks run, in what order |
| **Agent Triggers** | Intent-to-agent routing | Route `customer_support` intent to Agent A in production |

## The Power of Versioning

Every resource in EDDI is **immutably versioned**. When you update a LLM config, EDDI creates version 2 while preserving version 1. This enables:

- **Instant rollback** — revert to any previous version via a single API call
- **A/B testing** — run two agent versions simultaneously with different configs
- **Audit compliance** — every change is tracked with its full history

## Example: Updating an agent Without Code

```bash
# 1. Read the current LLM config
read_resource(resourceType: "langchain", resourceId: "lc-456")

# 2. Update it (creates version 2)
update_resource("langchain", "lc-456", version: 1, config: {
  "provider": "anthropic",
  "modelId": "claude-sonnet-4-6",
  "temperature": 0.5  # ← Changed from 0.7 to 0.5
})

# 3. Cascade the change through the pipeline and redeploy
apply_bot_changes(agentId, agentVersion, [
  { oldUri: "...?version=1", newUri: "...?version=2" }
], redeploy: true)
```

the agent is now running with the updated temperature — **no recompilation, no redeployment of Java code**.
