---
title: Self-host EDDI with Docker Compose
description: >-
  Get a working EDDI deployment running locally or on a server, with your choice of database, and a first agent answering questions.
persona: platform-operator
level: beginner
timeMinutes: 15
publishDate: 2026-08-26
order: 10
tags: [docker, docker-compose, self-hosting, deployment, mongodb, postgresql]
docsLinks:
  - label: Docker deployment reference
    href: https://docs.labs.ai/deployment-and-infrastructure/docker.md
  - label: Developer quickstart
    href: https://docs.labs.ai/getting-started/developer-quickstart.md
  - label: Secrets Vault
    href: https://docs.labs.ai/security-and-compliance/secrets-vault
faq:
  - question: Do I need Java installed?
    answer: >-
      Not for the Docker path. The container ships its own JVM. You only need a local Java 25+ installation if you are building EDDI from source or running it outside a container.
  - question: MongoDB or PostgreSQL?
    answer: >-
      Either works and the choice is a single environment variable, so it is not a decision you are locked into. Pick whichever your team already operates. If you have no preference and no existing database expertise on the team, MongoDB is the default the installer uses.
  - question: Can I run this on a server rather than my laptop?
    answer: >-
      Yes, the process is identical. Two things change for anything reachable beyond localhost, put EDDI behind a reverse proxy with TLS, and enable authentication rather than running the default open configuration. See the Keycloak guide.
  - question: How do I upgrade later?
    answer: >-
      The installer creates an `eddi` CLI wrapper that pulls the latest image and restarts. Without it, run `docker compose pull` followed by `docker compose up -d` from your install directory.
---

EDDI runs as a container, so a working deployment is a Docker Compose file and a database. This guide covers both the scripted path and the manual one, then gets a first agent answering questions so you know the install actually works.

By the end you will have EDDI serving on port 7070, a database behind it, an API key stored in the encrypted vault rather than in a config file, and one agent you can talk to.

## Before you start

You need Docker with the Compose plugin (`docker compose version` should print something), roughly 4 GB of free memory, and an API key from an LLM provider. Any of OpenAI, Anthropic, or Google Gemini works. If you would rather not use a hosted provider at all, EDDI can talk to a local Ollama instance, though that path needs the model pulled first and is slower to verify.

Nothing in this guide requires a Java installation. The container brings its own.

## Option A: the install script

The fastest route sets up EDDI and a database together, and walks you through the configuration choices:

```bash
curl -fsSL https://raw.githubusercontent.com/labsai/EDDI/main/install.sh | bash
```

Piping a script into a shell deserves a moment of thought on a machine you care about. Read it first if that is your policy:

```bash
curl -fsSL https://raw.githubusercontent.com/labsai/EDDI/main/install.sh -o install.sh
less install.sh
bash install.sh
```

The script takes flags for unattended and customized setups:

| Flag | Effect |
| --- | --- |
| `--defaults` | Accept every default, no prompts |
| `--db=postgres` | Use PostgreSQL instead of MongoDB |
| `--with-auth` | Enable Keycloak authentication |
| `--full` | Database, auth, and monitoring together |
| `--local` | Build the image from local source, for contributors |

For a first look, `--defaults` is enough. For anything that will outlive the afternoon, `--full` saves you from retrofitting auth and monitoring later, which is the more annoying order to do it in.

The installer writes its files to `~/.eddi` and creates an `eddi` CLI wrapper for starting, stopping, and upgrading.

## Option B: Docker Compose directly

If you want the compose file under your own version control from the start, skip the installer:

```bash
git clone https://github.com/labsai/EDDI.git
cd EDDI
docker compose up
```

This is the path to take when the deployment will be managed by your existing infrastructure tooling, because the compose file is then yours to edit and commit rather than something generated into a home directory.

Either way, EDDI comes up at `http://localhost:7070`.

## Verify it is running

Open `http://localhost:7070` and you should get the EDDI Manager UI. If the page loads but looks unpopulated, that is expected: there are no agents yet.

If it does not load, check the containers first:

```bash
docker compose ps
docker compose logs -f eddi
```

The most common first-run failure is the database not being ready before EDDI tries to connect. Compose handles the ordering, but on a slow machine the first boot can still take a minute or two. Watch the logs rather than restarting.

## Store your API key in the vault

Put the provider key in EDDI's Secrets Vault rather than pasting it into an agent configuration. The vault is AES-256-GCM encrypted, and its master key is generated for you by the installer:

```bash
curl -X PUT http://localhost:7070/secretstore/secrets/default/my-anthropic-key \
  -H "Content-Type: application/json" \
  -d '{"value": "sk-ant-your-actual-key", "description": "Anthropic API key"}'
```

You can do the same thing in the Manager UI under **Secrets Vault** if you prefer clicking to curling.

The reason this matters beyond tidiness: configurations get exported, shared between environments, and committed. EDDI scrubs secrets automatically on export, but only for values that are vault references rather than literals. A key pasted directly into an agent is a key that travels with the ZIP.

## Create an agent

`setup_agent` builds the rules, LLM configuration, workflow, and agent, then deploys the result, in one call. Over REST:

```bash
curl -X POST http://localhost:7070/administration/agents/setup \
  -H "Content-Type: application/json" \
  -d '{
    "agentName": "My first agent",
    "systemPrompt": "You are a helpful assistant that answers questions clearly.",
    "provider": "anthropic",
    "model": "claude-sonnet-4-6",
    "apiKey": "${vault:my-anthropic-key}"
  }'
```

The `${vault:my-anthropic-key}` syntax is the reference form described above. Substitute your own provider and model if you are not using Anthropic.

## Talk to it

Take the agent ID from the previous response and start a conversation:

```bash
curl -X POST http://localhost:7070/agents/<your-agent-id>/start \
  -H "Content-Type: application/json" \
  -d '{"input": "Hello! What can you do?"}'
```

A coherent reply means the whole chain is working: container, database, vault, provider credentials, and agent configuration. That is the install verified.

## What to do next

The default configuration has no authentication, which is correct for a laptop and wrong for anything else. Before this deployment is reachable by anyone but you, work through the Keycloak guide.

If the destination is a cluster rather than a single host, the Kubernetes guide covers the same deployment with Helm, Kustomize overlays, and production hardening.

And if you want the agent to answer from your own documents rather than from model knowledge alone, the Qdrant guide covers retrieval.
