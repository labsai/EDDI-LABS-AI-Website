---
title: Migrate a chatflow from Flowise to EDDI
description: >-
  When a Flowise prototype has outgrown its origins, what carries over cleanly, what has to be rebuilt, and how to move without taking the prototype down.
persona: technical-buyer
level: intermediate
timeMinutes: 30
publishDate: 2026-08-26
order: 20
tags: [flowise, migration, rag, chatflow, evaluation]
docsLinks:
  - label: Developer quickstart
    href: https://docs.labs.ai/getting-started/developer-quickstart.md
  - label: RAG configuration reference
    href: https://docs.labs.ai/agent-configuration/langchain.md
  - label: Architecture and concepts
    href: https://docs.labs.ai/architecture-and-concepts/architecture.md
faq:
  - question: Is this migration easier than the n8n one?
    answer: >-
      Usually yes. Flowise chatflows are LLM-native, so the concepts line up almost one for one: loaders, splitters, embeddings, vector stores, memory, and chains all have direct counterparts. The n8n migration has to reconcile a general automation model with an agent model; this one does not.
  - question: Do we have to re-embed the documents?
    answer: >-
      Only if you change vector store or embedding model. If you keep both, the existing index is reusable, since it is the same store holding the same vectors. If you change either, plan an embedding run, which is the main cost and the main scheduling constraint of the move.
  - question: What about our Custom Function nodes?
    answer: >-
      They do not port directly. EDDI does not evaluate code at runtime, so each one becomes configuration, a declared tool behind an endpoint, or nothing at all. In practice most Custom Function nodes in a chatflow are doing output shaping that structured tool calling handles natively.
  - question: Can we keep the Flowise prototype running?
    answer: >-
      Yes, and it is the sensible approach. Run both against the same corpus, compare answers on real questions, and switch the frontend only once EDDI is at least as good. Nothing about this migration requires downtime.
  - question: Should we migrate at all?
    answer: >-
      Only if the prototype has acquired production requirements: tenancy, audit, approval gates, SLAs, or people who need to change prompts without touching the canvas. If it is still an internal tool for one team, Flowise is doing its job and moving costs you velocity for governance you do not need.
---

Flowise is very good at the first two weeks of a project. The migration question comes later, when the demo acquired users, the users acquired expectations, and somebody started asking about audit trails.

This guide covers whether that moment has arrived, what carries over, and how to move without taking the prototype down.

## First, decide whether to migrate

If the chatflow is still an internal tool for one team, leave it. Flowise is faster to iterate in, and swapping it for a platform you do not yet need costs velocity and buys nothing.

Move when the prototype has picked up production requirements:

- **Several teams or customers share it** and need isolation, quotas, or cost attribution.
- **Conversations must be reconstructable** months later, for a regulator or an incident review.
- **Prompt engineers need to iterate** without a redeploy, while operations keeps control of what ships.
- **A human must approve specific actions** before the agent takes them.
- **It needs an SLA**, which means it needs someone accountable for changes and a way to know what changed.

The [comparison page](/compare/eddi-vs-flowise/) has the fuller version of this trade-off. Note that both projects are Apache 2.0, so this is not a licensing decision; it is about operating surface.

## What carries over

This is the friendlier of the two migrations, because Flowise chatflows are already LLM-native. The concepts line up:

| Flowise | EDDI |
| --- | --- |
| Chatflow | Package, exportable as a ZIP with secrets automatically scrubbed |
| Document Loaders | RAG document ingestion configuration |
| Text Splitters | Chunking configuration |
| Embeddings node | One of 7 embedding providers |
| Vector Store node | One of 6 vector stores, selected by configuration |
| Chat Model node | LLM configuration across 12 providers, with model cascading available |
| Memory node | Persistent memory, rolling summaries, dream consolidation |
| Chain / Agent | Pipeline configuration and agent definition |
| Tool node | MCP tool or `httpCall` declaration |
| Prompt template | Versioned prompt snippet |
| Credentials | Secrets Vault (AES-256-GCM), referenced by vault key |
| Prediction API | Built-in REST API, OpenAPI 3.1, and SSE streaming |
| **Custom Function node** | **No direct equivalent, by design. See below.** |

### The index question

This is the one that determines your schedule.

**If you keep the same vector store and embedding model**, the existing index is reusable. Same store, same vectors, same collection. Point EDDI at it and move on.

**If you change either**, you are re-embedding the corpus. That is the real cost of this migration and the reason to decide early rather than discover it late. Embedding a large corpus is slow, and on a hosted provider it is billed.

A migration is a reasonable moment to reconsider the store, since the [Chroma guide](/guides/build-a-rag-agent-with-chroma/) covers the six options and the usual answer is "whichever you already operate". Just make that decision before you start, not after.

### Custom Function nodes

EDDI does not evaluate code at runtime, which is the security position the platform rests on. Custom Function nodes therefore become one of three things:

1. **Nothing.** Most Custom Function nodes in a chatflow are shaping output into a format the next node wanted. Structured tool calling and behavior rules usually cover it.
2. **Configuration.** Filtering, formatting, and field mapping are behavior rules and prompt snippets.
3. **A declared tool.** If it genuinely computes something, put it behind an endpoint and declare it as an `httpCall` tool. The logic survives; it moves out of the orchestrator into a service you own.

Read each one before porting. Category one is more common than teams expect.

## Move the chatflow

**1. Stand up EDDI.** See the [Docker Compose guide](/guides/self-host-eddi-with-docker-compose/).

**2. Decide the index question** above, before anything else.

**3. Re-enter credentials into the vault.** Do not export them from Flowise. A migration is a good moment to rotate.

**4. Rebuild the retrieval configuration.** The [Chroma guide](/guides/build-a-rag-agent-with-chroma/) covers the decisions. The mapping from a Flowise chatflow is direct: loader, splitter, embedding, store, in the same order, as configuration instead of nodes.

**5. Port the prompt.** Take the system prompt from the chatflow as a starting point and expect to revise it. Prompts written around a specific chain often encode assumptions about what the chain did before and after them.

**6. Declare the tools.** See the [OpenAPI guide](/guides/connect-any-api-with-openapi/).

**7. Add the governance you migrated for.** Authentication, approval gates on consequential calls, tenancy. Skipping this makes the whole exercise a lateral move.

## Run both against the same corpus

Keep the Flowise chatflow running and point both at the same documents. Then compare on real questions, which is easy here because both are answering from the same source.

Three comparisons worth making, in this order:

**Questions the corpus answers.** Both should get these right. If EDDI does not, retrieval configuration is wrong, and chunking is the first thing to vary.

**Questions the corpus does not answer.** Both should decline. This is where prototypes usually fail and nobody notices, because nobody tests it. An agent that confabulates confidently is worse than one that has no documents at all.

**The questions that made you migrate.** If you moved for approval gates, exercise a rejection. If you moved for audit, pull the trail and check an identity is attached to each entry.

Switch the frontend only once EDDI is at least as good on all three. Nothing here requires downtime.

## What it costs, honestly

**Keeping the store and embedding model:** a day or two, most of it prompt revision and tool declaration rather than migration mechanics.

**Changing either:** add the embedding run, which is the schedule-driving item and the only part that is expensive rather than merely fiddly.

**Custom Function nodes:** budget per node, not per chatflow, and read them before estimating. The decision about what each one should become is where the time goes, and it is also where the value is: it converts implicit behavior into something a reviewer can see.
