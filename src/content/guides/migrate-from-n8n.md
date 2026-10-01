---
title: Migrate an AI workflow from n8n to EDDI
description: >-
  Work out whether a migration is worth it, what maps cleanly, what does not, and how to move one n8n workflow to EDDI without a big-bang cutover.
persona: technical-buyer
level: intermediate
timeMinutes: 35
publishDate: 2026-08-26
order: 10
tags: [n8n, migration, workflow, evaluation, config-as-code]
docsLinks:
  - label: Developer quickstart
    href: https://docs.labs.ai/getting-started/developer-quickstart.md
  - label: Architecture and concepts
    href: https://docs.labs.ai/architecture-and-concepts/architecture.md
  - label: Secrets Vault
    href: https://docs.labs.ai/security-and-compliance/secrets-vault
faq:
  - question: Should we move everything off n8n?
    answer: >-
      Almost certainly not. n8n is better than EDDI at general business automation across SaaS connectors, and that is most of what a typical n8n instance is doing. The workflows worth moving are the agent-shaped ones that have picked up governance requirements. Running both is a normal end state, not a failure to finish.
  - question: How long does one workflow take?
    answer: >-
      A simple agent-shaped workflow is an afternoon. One with several Code nodes is longer, because that logic has to be re-expressed as configuration or as declared tools rather than translated line by line. Budget by Code node count, not by total node count.
  - question: Can we run both during the transition?
    answer: >-
      Yes, and you should. EDDI exposes an MCP server and a REST API, so an n8n workflow can call an EDDI agent as a single step. That lets you move the agent while leaving the surrounding automation in place, which is a much smaller change than porting the whole workflow at once.
  - question: What about our credentials?
    answer: >-
      Re-enter them into EDDI's Secrets Vault rather than exporting them from n8n. A migration is a good moment to rotate keys anyway, and exporting decrypted credentials creates a plaintext copy of every secret you own, which is a worse problem than the typing.
  - question: Does anything not migrate?
    answer: >-
      Code nodes are the main one, by design: EDDI does not evaluate code at runtime, so that logic becomes configuration, a declared tool, or a service EDDI calls. Deep SaaS connector chains are the other. If a workflow is mostly n8n connectors with one LLM call in the middle, it belongs in n8n.
---

Most n8n instances contain a lot of workflows and a few agents. This guide is about the agents, specifically the ones that have quietly acquired requirements n8n was not built to satisfy: audit obligations, approval gates, per-tenant isolation, or a security review asking what code runs at inference time.

It covers whether to migrate at all, what maps and what does not, and how to move one workflow without a cutover.

## First, decide whether to migrate

The honest answer for most workflows is no. n8n is genuinely better at what it is for, and a migration that trades hundreds of working SaaS connectors for governance you do not need is a bad trade.

A workflow is worth moving when at least one of these is true:

- **It handles regulated data**, and someone will eventually ask what code executed and who approved it.
- **Non-developers need to change its behavior**, and they currently cannot, because the logic lives in Code nodes.
- **It needs approval gates on individual actions** rather than a wait step that pauses the whole run.
- **Several teams or customers share it** and need isolation, quotas, or cost attribution.
- **Conversation state matters** across sessions, rather than each run being independent.

If none of those apply, keep it in n8n. The [comparison page](/compare/eddi-vs-n8n/) covers the trade-off in more detail.

## Inventory what you actually have

Export the workflows so you are reading JSON rather than a canvas:

```bash
n8n export:workflow --all --output=./n8n-workflows.json
```

Then count, per workflow, the things that predict effort:

**Code nodes.** This is the number that matters. Everything else maps mechanically; Code nodes need a decision each. A workflow with zero is an afternoon. A workflow with six is a week.

**HTTP Request nodes.** These map cleanly to `httpCall` tool definitions, roughly one for one.

**Connector nodes** (Slack, Google Sheets, Salesforce, and so on). Each is either an `httpCall` against that vendor's API, an MCP tool, or a reason to leave this workflow in n8n.

**Sub-workflows.** Execute Workflow nodes mean the real boundary is bigger than the workflow you are looking at. Trace them before estimating.

Do not export credentials. Re-enter them into EDDI's vault instead. A migration is a natural moment to rotate keys, and a decrypted credentials export is a plaintext file containing every secret you own.

## What maps, and what does not

| n8n | EDDI |
| --- | --- |
| Workflow | Package: a versioned bundle of pipeline, prompts, and tool bindings |
| AI Agent node | Agent, with persistent memory, intent routing, and model cascading |
| Chat Model node | LLM configuration, switchable across 12 providers |
| HTTP Request node | `httpCall` tool definition, with SSRF and path traversal guards applied |
| Connector node | `httpCall` against the vendor API, or an MCP tool |
| Credentials store | Secrets Vault (AES-256-GCM), referenced by vault key |
| Memory node | Persistent user memory with commit-flag memory policy |
| Vector Store node | One of 6 vector stores, selected by configuration |
| Wait or manual trigger | Human-in-the-loop approval gate with a timeout policy |
| Schedule Trigger | Cron trigger in EDDI scheduling |
| Webhook Trigger | REST endpoint, or the MCP server |
| IF / Switch | Behavior rules |
| **Code node** | **No direct equivalent, by design. See below.** |

### The Code node question

EDDI does not evaluate code at runtime. That is the security position the whole platform rests on, and it is the reason a security review can be answered with "none" rather than with a sandbox architecture. It also means Code nodes do not port.

Each one becomes one of three things:

1. **Configuration.** Most Code nodes are doing data shaping: renaming fields, filtering an array, formatting a string. Behavior rules and prompt snippets usually cover this.
2. **A declared tool.** If it is genuinely computing something, put it behind an endpoint and declare it as an `httpCall` tool. The logic still exists; it lives in a service you own rather than inside the orchestrator.
3. **Nothing.** A surprising share of Code nodes exist to work around a limitation that does not apply once the agent has real memory and structured tool calling. Read each one before porting it.

Category three is more common than people expect, which is why the estimate should come after reading the Code nodes rather than counting them.

## Move one workflow

Pick the simplest agent-shaped workflow you have, not the most important one. The goal of the first migration is to learn the mapping, and that goes better when nothing depends on the outcome.

**1. Stand up EDDI.** See the [Docker Compose guide](/guides/self-host-eddi-with-docker-compose/). Fifteen minutes.

**2. Put the credentials in the vault.** Freshly rotated, not exported.

**3. Create the agent** with the system prompt from the n8n AI Agent node as a starting point. Expect to rewrite it: prompts written for a node that had Code nodes doing cleanup around it usually assume that cleanup.

**4. Declare the tools.** Take the HTTP Request nodes one at a time. The [OpenAPI guide](/guides/connect-any-api-with-openapi/) covers this, including the part people get wrong: a tool description is a prompt, not a comment, and it determines whether the agent calls the tool at the right moment.

**5. Handle the Code nodes** using the three categories above.

**6. Add the governance you migrated for.** Approval gates on consequential tool calls, and authentication in front of the deployment. If you skip this step you have done a lateral move rather than a migration.

## Run both, then shift

Do not cut over. EDDI exposes an MCP server and a REST API, so the existing n8n workflow can call the new EDDI agent as a single step.

That gives you a much smaller first change: the surrounding automation, triggers, and connectors stay exactly where they are, and only the agent moves. You can compare outputs on real traffic, and rolling back is deleting one node rather than restoring a workflow.

Shift the surrounding steps later, if you shift them at all. Plenty of teams stop here permanently, with n8n doing business process plumbing and EDDI running the governed agent, which is a sensible architecture rather than an unfinished migration.

## Verify before you trust it

Run the same inputs through both and compare. Not the happy path, which will match: the cases that used to fail, the malformed inputs, the ones that hit the Code node's edge handling.

Then check the things you migrated for, because these are easy to assume and easy to get wrong:

- Reject a proposed tool call and confirm the agent handles refusal gracefully rather than retrying in a loop.
- Confirm the approval and the rejection both appear in the audit ledger with an identity attached.
- Confirm the unauthenticated path to the administration API returns 401. See the [Keycloak guide](/guides/secure-eddi-with-keycloak-oidc/).

## What it costs, honestly

A zero-Code-node agent workflow: an afternoon, most of it prompt tuning rather than migration.

A workflow with several Code nodes: days, and the time goes into deciding what that logic should become, not into translation. That decision work is the actual value of the migration, because it turns implicit behavior into something reviewable, but it is not fast.

A workflow that is mostly SaaS connectors with one LLM call: do not migrate it. It is an n8n workflow that happens to use AI, and n8n is the right tool for it.
