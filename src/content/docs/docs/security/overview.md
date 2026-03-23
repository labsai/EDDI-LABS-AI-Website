---
title: Security Architecture
description: "EDDI's security-first approach: no eval, no sandbox escapes, vault integration, and EU AI Act compliance."
---

Security in EDDI is not a feature — it is a **structural property** of the architecture.

## Core Security Principles

### No Dynamic Code Execution
EDDI does not offer JavaScript/Python code blocks inside workflows. This eliminates the #1 cause of CVSS 10.0 Remote Code Execution vulnerabilities in AI platforms.

**The MCP Escape Hatch:** If custom code execution is needed, EDDI's answer is: *"Spin up an external MCP server in an isolated Docker container. EDDI will call it as a tool."* This pushes the RCE risk entirely outside the EDDI perimeter.

### Vault Integration
Secrets are never stored in agent configurations. API keys and credentials are managed through Quarkus Vault/Secrets Manager and referenced via vault URIs.

### URL Validation
All external URLs referenced in configurations are validated against allowlists, preventing SSRF attacks.

### Path Traversal Protection
File operations in MCP documentation resources are sandboxed with strict path validation.

### OIDC / Keycloak
Enterprise authentication is built into the architecture — not bolted on. EDDI supports complex OAuth2/OIDC topologies and integrates natively with Keycloak.

## EU AI Act Compliance

EDDI's architecture supports EU AI Act requirements through:

- **Immutable audit trails** — every LLM interaction is logged with tokens, cost, timing, and tool calls
- **CQRS telemetry** — execution state is separated from observability data
- **Deterministic governance** — budget caps, circuit breakers, and execution hashes prevent uncontrolled AI rules
- **Cryptographic integrity** — audit entries are tamper-evident
