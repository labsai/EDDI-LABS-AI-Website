---
title: Secure EDDI with Keycloak and OIDC
description: >-
  Put authentication in front of an EDDI deployment, map your identity provider's groups onto EDDI's roles, and stop running an open management API.
persona: platform-operator
level: intermediate
timeMinutes: 25
publishDate: 2026-08-26
order: 20
tags: [keycloak, oidc, sso, rbac, authentication, security]
docsLinks:
  - label: Security and compliance reference
    href: https://docs.labs.ai/security-and-compliance/secrets-vault
  - label: Docker deployment reference
    href: https://docs.labs.ai/deployment-and-infrastructure/docker.md
  - label: Architecture and concepts
    href: https://docs.labs.ai/architecture-and-concepts/architecture.md
faq:
  - question: Do I have to use Keycloak specifically?
    answer: >-
      No. Keycloak is what the installer provisions because it is open source and self-hostable, which suits the same audience that self-hosts EDDI. Any OIDC-compliant provider works, including Okta, Auth0, Microsoft Entra ID, and Google Workspace. What changes is where you configure the client and how group claims are named.
  - question: Can I enable auth on a deployment that is already running?
    answer: >-
      Yes, and it is a configuration change rather than a reinstall. The ordering is just less pleasant than enabling it up front, because you have to reconcile existing agents and any scripts that were calling the API unauthenticated.
  - question: What happens to API clients when auth is on?
    answer: >-
      They need a token. Machine-to-machine callers should use the OIDC client credentials flow against a dedicated service account rather than a human user's credentials, so that access can be revoked without locking a person out.
  - question: Does RBAC cover the MCP server too?
    answer: >-
      The MCP endpoint sits behind the same authentication layer as the REST API. Treat an MCP connection with admin scope exactly as you would an admin API token, because that is what it is.
---

EDDI ships with OIDC and role-based access control, but a default install does not turn them on. That is a reasonable default for a laptop and a bad one for anything with a network route to it, because the management API can create agents, read conversations, and reach the secrets vault.

This guide gets authentication in front of a deployment and maps your existing identity groups onto EDDI's roles.

## What you are protecting

Worth being concrete about the exposure, because it motivates the work. An unauthenticated EDDI deployment lets anyone who can reach it create and modify agents, which means changing what prompts get sent and which tools get called. It also lets them read conversation history, which is wherever your users' data ended up, and reach the administration API surface generally.

The vault encrypts secrets at rest, so an attacker does not trivially walk away with your provider keys. They can, however, create an agent that uses those keys. Encryption at rest is not an access control.

## Before you start

You need a running EDDI deployment (see the Docker Compose guide) and either a Keycloak instance or another OIDC provider you can create a client in. If you have neither, the EDDI installer provisions Keycloak for you.

## Option A: let the installer provision Keycloak

On a fresh install, the flag does the work:

```bash
curl -fsSL https://raw.githubusercontent.com/labsai/EDDI/main/install.sh | bash -s -- --with-auth
```

Or `--full`, which brings up the database, authentication, and monitoring together. This is the path worth taking if you do not already have an identity provider you are required to use, because it gets you a working realm, client, and role mapping without hand-assembly.

## Option B: connect an existing identity provider

If your organization already runs Okta, Entra ID, Auth0, or a Keycloak you do not control, you are registering EDDI as a client rather than standing up a new provider.

The shape of the work is the same in every provider:

1. **Create a confidential client** for EDDI. It needs a client ID, a client secret, and the redirect URI for your EDDI host.
2. **Add a groups or roles claim** to the token. EDDI reads roles from the token, so if your provider does not include group membership by default you have to add the claim mapper. This is the step people most often miss, and the symptom is a successful login with no permissions.
3. **Create three groups** matching EDDI's roles, described below.
4. **Point EDDI at the provider** through its OIDC environment configuration: issuer URL, client ID, and client secret. Put the secret in the vault rather than in the compose file.

The exact environment variable names and the full OIDC configuration surface are in the deployment reference linked at the end. They change more often than the concepts do, which is why this guide does not reproduce them.

## The three roles

EDDI's RBAC is deliberately small, which makes it easy to map onto whatever group structure you already have:

| Role | Can do | Give it to |
| --- | --- | --- |
| `admin` | Everything, including vault access and user management | Platform owners, a short list |
| `editor` | Create and modify agents, prompts, and tools; deploy changes | Prompt engineers, developers |
| `viewer` | Read agents, conversations, and metrics; change nothing | Analysts, support, auditors |

Two things worth deciding deliberately rather than by default.

**Vault access follows `admin`.** If a prompt engineer needs to reference a secret, they reference it by vault key; they do not need to read its value. Resist the pull to hand out `admin` so someone can check whether a key is set.

**`viewer` sees conversations.** That is the point of the role for support and audit work, but conversations contain whatever users typed. Treat `viewer` as data access, not as a harmless read-only tier, and scope it the way your data policy requires.

## Verify it actually works

The check that matters is negative: confirm the unauthenticated path is closed.

```bash
curl -i http://localhost:7070/administration/agents/setup
```

You want a 401. If you get anything that looks like a normal API response, authentication is not applied to the administration surface, and you should stop and fix that before going further.

Then confirm the positive path: log in through the browser, and confirm each of the three roles behaves as it should. The useful test is not that `admin` works, it is that `viewer` is genuinely unable to modify an agent. Role mappings that silently grant more than intended are the common failure, and they only show up if you test for refusal rather than for success.

## Machine clients

Anything calling EDDI programmatically, CI jobs, backend services, scheduled tasks, needs its own service account using the client credentials flow. Not a human's token.

This matters more than it sounds. A pipeline authenticating as a departed employee is a pipeline that breaks on offboarding, and a shared token is one nobody can rotate without finding every consumer first.

## Once this is done

Every authenticated action lands in the immutable audit ledger with an identity attached, which is what makes the ledger useful as evidence rather than as a log. Before authentication, the ledger can tell you what happened; after it, the ledger can tell you who.

If this deployment handles regulated data, the compliance page covers which frameworks the platform addresses and what remains your responsibility. Authentication is a precondition for most of them, not a nice-to-have.
