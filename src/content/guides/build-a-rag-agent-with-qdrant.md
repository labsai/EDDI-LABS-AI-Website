---
title: Build a RAG agent with Qdrant
description: >-
  Give an EDDI agent access to your own documents, from choosing an embedding model through to the retrieval quality problems nobody warns you about.
persona: ml-engineer
level: intermediate
timeMinutes: 30
publishDate: 2026-08-26
order: 10
tags: [rag, qdrant, vector-store, embeddings, retrieval]
docsLinks:
  - label: RAG configuration reference
    href: https://docs.labs.ai/agent-configuration/langchain.md
  - label: Architecture and concepts
    href: https://docs.labs.ai/architecture-and-concepts/architecture.md
  - label: MCP tools reference
    href: https://docs.labs.ai/protocols-and-integration/mcp-server.md
faq:
  - question: Why Qdrant rather than one of the others?
    answer: >-
      EDDI supports 5 vector stores and Qdrant is a reasonable default rather than a required choice: it self-hosts cleanly in Docker, which matters if the reason you are running EDDI is that the data cannot leave your infrastructure. If you already operate a different store, use that one. Switching is a configuration change, not a rewrite.
  - question: Do I need a vector store at all?
    answer: >-
      Not always. EDDI supports httpCall RAG, which retrieves from an existing search API rather than from a vector store you operate. If your organization already has a search system that works, wrapping it is often better than building a parallel index that immediately starts drifting out of date.
  - question: Which embedding model should I use?
    answer: >-
      Start with whatever your existing LLM provider offers, since it needs no new credentials or infrastructure. Move to a self-hosted embedding model when data residency requires it, because embedding calls send your document text to the provider exactly like completion calls do.
  - question: Why does retrieval return the wrong thing?
    answer: >-
      Usually chunking. Chunks that are too large dilute the embedding until everything looks vaguely similar to everything; chunks too small lose the context that made the passage meaningful. It is the first thing to vary when quality is poor, ahead of swapping models.
---

Retrieval-augmented generation is how an agent answers from your documents instead of from what the model happened to memorize. EDDI supports 7 embedding providers and 5 vector stores, so most of this guide is about the decisions rather than the wiring.

This one uses Qdrant, because it self-hosts in a container and keeps document text inside your infrastructure, which is usually why people are running EDDI in the first place.

## Before you start

A working EDDI deployment (see the Docker Compose guide), Docker for the Qdrant container, and some documents worth retrieving from. A few dozen pages is enough to see whether retrieval works; a handful is not, because everything matches when there is nothing to distinguish.

## Decide these first

**Do you need a vector store?** EDDI supports httpCall RAG, which queries an existing search API rather than an index you maintain. If your organization already has working search over these documents, wrapping it usually beats building a second index, because the second index starts going stale the moment you build it and nobody owns re-ingestion.

Use a vector store when there is no existing search, when you need semantic rather than keyword matching, or when the corpus is stable enough that re-ingestion is a scheduled job rather than a constant concern.

**Where do embeddings get computed?** This is a data residency question wearing a technical costume. Calling a hosted embedding API sends your document text to that provider, exactly like a completion call does. If the reason you self-host EDDI is that this data cannot leave your infrastructure, then a hosted embedding provider undoes that, quietly, at ingestion time.

Self-hosted embedding models are slower and need a GPU to be pleasant. That is the trade.

## Run Qdrant

```bash
docker run -d --name qdrant \
  -p 6333:6333 -p 6334:6334 \
  -v "$(pwd)/qdrant_storage:/qdrant/storage" \
  qdrant/qdrant
```

The volume mount matters: without it the index disappears with the container, and you get to re-embed everything. Confirm it is up at `http://localhost:6333/dashboard`.

For anything beyond a local trial, run Qdrant with authentication enabled and not published on a public interface. An open vector store is a full copy of your document corpus available to anyone who can reach the port.

## Connect it to EDDI

EDDI's RAG configuration selects the vector store, the embedding provider, and the ingestion settings as configuration rather than code. In the Manager UI this lives with the agent's resources; over the API it is part of the agent configuration you `PUT`.

The exact field names for the Qdrant connection and the embedding provider block are in the RAG configuration reference linked at the end. They are versioned with the platform, and a guide that reproduced them would be wrong within a release, so it is worth having that page open alongside this one.

What matters conceptually, and does not change:

- **The collection** is the Qdrant-side namespace for this agent's documents. One collection per corpus, not per agent, if several agents share the same documents.
- **The embedding model must match between ingestion and query.** Embedding a corpus with one model and querying with another produces confident nonsense, because the vectors are in different spaces. This is the single most common way to get a RAG setup that runs cleanly and retrieves garbage.
- **Chunk size and overlap** are the levers you will actually spend time on. More below.

## Ingest documents

Once the configuration is in place, ingestion pushes documents through the embedding model and into the collection. EDDI handles the loading, splitting, and embedding as part of the RAG pipeline.

Start with a subset. Embedding is the slow and, on hosted providers, the expensive part of this process, and discovering a chunking problem after embedding the full corpus means paying for it twice.

## Verify retrieval before you trust it

Ask the agent something whose answer is unambiguously in the documents and nowhere in general model knowledge. An internal process, a specific policy, a product detail. If the agent answers correctly, retrieval is working. If it answers plausibly but generically, it is falling back on the model and retrieval is not reaching it.

The second test matters more: ask something the documents do not cover and see whether the agent says so. An agent that confabulates on out-of-corpus questions is worse than no agent, because it is wrong in a register that sounds authoritative.

## When retrieval is poor

Almost always chunking, and almost always in this order:

**Chunks too large.** The embedding averages out across too much content, so every chunk looks moderately similar to every query and ranking becomes noise. Symptom: retrieval returns something on-topic but not the passage that actually answers the question.

**Chunks too small.** The passage loses the context that gave it meaning. A chunk saying "this must be approved by the regional lead" is useless when the sentence naming what "this" refers to is in the previous chunk. Symptom: retrieved fragments are individually correct and collectively incoherent.

**Overlap too low.** Content that straddles a boundary is in neither chunk properly. Some overlap is cheap insurance.

Vary chunking before swapping embedding models. Model choice matters far less than most people expect, and chunking matters far more.

The other frequent cause is a corpus that genuinely does not contain the answer, which no amount of retrieval tuning fixes. Check that before spending a day on parameters.

## Keeping it current

An index built once is accurate once. Decide now how re-ingestion happens: EDDI's scheduling supports cron triggers, so a periodic re-ingest of changed documents is a configuration rather than a script somebody has to remember.

The failure mode to design against is not the index being wrong, it is the index being confidently out of date while everyone assumes it is live.

## Next

If the agent should also act on what it retrieves rather than only summarizing it, the OpenAPI guide covers giving it tools that call your systems.
