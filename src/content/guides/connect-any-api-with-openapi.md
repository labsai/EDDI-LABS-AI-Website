---
title: Give an agent tools with OpenAPI and httpCall
description: >-
  Connect an EDDI agent to your own APIs without writing code, and put the right guardrails on what it is allowed to call.
persona: ml-engineer
level: intermediate
timeMinutes: 25
publishDate: 2026-08-26
order: 20
tags: [openapi, httpcall, tools, mcp, integration, human-in-the-loop]
docsLinks:
  - label: MCP tools reference
    href: https://docs.labs.ai/protocols-and-integration/mcp-server.md
  - label: Agent configuration reference
    href: https://docs.labs.ai/agent-configuration/langchain.md
  - label: Secrets Vault
    href: https://docs.labs.ai/security-and-compliance/secrets-vault
faq:
  - question: What is the difference between httpCall and an MCP tool?
    answer: >-
      httpCall is a declared HTTP request that EDDI makes on the agent's behalf, configured entirely in JSON. An MCP tool is a capability exposed over the Model Context Protocol, either one of EDDI's built-in tools or one from an external MCP server. Use httpCall for your own REST endpoints, MCP when a server already speaks the protocol.
  - question: Do I need to write any code?
    answer: >-
      No. Tool definitions are configuration, which is the point: they can be reviewed, diffed, and approved before they ship, and there is no runtime code evaluation to defend in a security review.
  - question: How do I stop the agent calling something destructive?
    answer: >-
      Two layers. Only declare the tools it should have, since an undeclared endpoint is not reachable. Then put human-in-the-loop approval on the consequential ones, so a write requires sign-off before it executes and the approval lands in the audit ledger.
  - question: Can the agent call an API that needs authentication?
    answer: >-
      Yes. Store the credential in the Secrets Vault and reference it by vault key in the tool definition. The literal value never lands in the agent configuration, so exports and environment promotions stay safe.
---

An agent that can only talk is a chatbot. An agent that can call your systems is useful. In EDDI both the calling and the constraining are configuration, so this guide is as much about the guardrails as the wiring.

## Two ways to give an agent a tool

**httpCall** declares an HTTP request that EDDI makes on the agent's behalf: method, URL, headers, body, and how the response maps back into the conversation. Use it for your own REST endpoints and anything with an OpenAPI description.

**MCP tools** are capabilities exposed over the Model Context Protocol. EDDI ships 84 of them covering the platform itself, plus 12 built-in agent tools for common jobs like web search, calculation, scraping, and PDF reading. External MCP servers plug in the same way.

The rule of thumb: httpCall for your APIs, MCP when something already speaks the protocol. Do not build an MCP server to expose a REST endpoint you could declare directly.

## Before you start

A running EDDI deployment with an agent (see the Docker Compose guide), and an API you want it to reach. An OpenAPI 3.1 description makes this faster but is not required.

## Start with the read-only endpoint

Whatever the eventual goal, connect a read-only endpoint first. A `GET` that looks something up is the right first tool, because when it misbehaves you get a wrong answer rather than a wrong write.

Order the work: get the agent calling the endpoint, confirm it passes sensible parameters, confirm it interprets the response, and only then add anything that changes state.

## Declaring the tool

A tool definition tells EDDI three things: how to make the request, what the agent needs to supply, and what the agent should understand about the result.

The exact schema for `httpCall` definitions lives in the agent configuration reference, and it versions with the platform, so this guide points you there rather than reproducing fields that will drift. What is worth understanding before you open that page:

**The description is a prompt, not a comment.** The model decides whether to call a tool based on its description. "Fetches order data" produces an agent that calls it at odd moments; "Look up the status and shipping details of a customer order by its order ID. Use when the user asks about a specific existing order." produces one that calls it when it should. Most tool-calling problems that look like model failures are description failures.

**Parameters need types and constraints.** The tighter the parameter schema, the less room there is for the model to invent a plausible value. An enum beats a free-text string every time the set is actually closed.

**Credentials go in the vault.** Reference them by vault key in the tool definition, never as a literal. Beyond the obvious, this is what keeps configuration exports and environment promotions safe, because EDDI scrubs vault references and cannot scrub a pasted string.

## The guardrails that matter

EDDI applies SSRF protection and path traversal guards to outbound calls, which handles a category of attack where a crafted input turns your agent into a proxy into your internal network. That is platform-level and automatic.

The part that is yours to configure:

**Declare only what the agent should have.** This is the strongest control available and the easiest to get lazy about. An endpoint that is not declared cannot be called, no matter what a user types. Resist declaring a general-purpose "call any URL" tool, which discards the entire boundary.

**Gate the consequential calls.** EDDI supports per-tool-call human approval: the agent proposes the call, a human approves or rejects it, and the decision is recorded in the immutable audit ledger. Timeout policies decide what happens when nobody responds, and the options include auto-reject and abort, not just auto-approve.

The line worth drawing is reads versus writes, or more precisely reversible versus not. Looking up an order needs no gate. Issuing a refund does.

**Approvals can go to Slack**, with sensitive fields redacted, which matters because an approval workflow nobody sees is an approval workflow that gets rubber-stamped or times out.

## Verify it

Three checks, in order.

Ask something that should trigger the tool and confirm it fires with sensible arguments. Then ask something adjacent that should *not* trigger it, and confirm it stays quiet. An agent that calls its tool on every turn has a description problem, and you will not notice from happy-path testing alone.

Finally, if you configured approval gating, confirm the rejection path. Reject a proposed call and check that the agent handles the refusal gracefully rather than retrying in a loop, and that the rejection appears in the audit trail.

## When the agent will not call the tool

In order of likelihood: the description does not make the trigger condition clear; the parameter schema demands something the agent cannot infer from the conversation; or the tool is not attached to the agent configuration you are actually talking to, which happens more often than anyone admits after a few iterations.

## When it calls the wrong one

Overlapping descriptions. If two tools could plausibly answer the same request, the model will pick unpredictably. Make the boundary explicit in both descriptions, including what each one is *not* for.

## Next

If the agent should answer from your documents as well as call your systems, the Chroma guide covers retrieval. And before this reaches production, the Keycloak guide covers authentication, because an agent with write access to your systems is a very good reason not to run an open management API.
