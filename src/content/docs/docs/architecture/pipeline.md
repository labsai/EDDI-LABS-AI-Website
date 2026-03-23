---
title: Lifecycle Pipeline
description: How EDDI processes every conversation turn through a configurable pipeline of pre-processing, LLM execution, and post-processing tasks.
---

EDDI processes every inbound message through a **lifecycle pipeline** — an ordered sequence of configurable tasks that run before, during, and after the LLM call.

## Pipeline Stages

```
Input → Pre-Processing → Main Processing (LangChain) → Post-Processing → Output
```

### Pre-Processing
Tasks that run **before** the LLM call:
- Input normalization
- Property extraction
- Context injection
- rule evaluation

### Main Processing
The **LangChain Task** — the core LLM interaction:
- System prompt injection
- Conversation memory management
- Tool calling (MCP client)
- Response generation

### Post-Processing
Tasks that run **after** the LLM response:
- Output parsing (JSON extraction)
- Property mapping
- Sentiment analysis
- Action resolution (quick replies, redirects)

## Configuration

Each pipeline stage is defined in a **workflow** configuration — a JSON document that lists the tasks (called "extensions") to execute in order:

```json
{
  "packageExtensions": [
    {
      "type": "eddi://ai.labs.rules",
      "config": { "$ref": "eddi://ai.labs.rules/behaviorsets/<id>?version=1" }
    },
    {
      "type": "eddi://ai.labs.langchain",
      "config": { "$ref": "eddi://ai.labs.langchain/langchainconfiguration/<id>?version=1" }
    },
    {
      "type": "eddi://ai.labs.output",
      "config": { "$ref": "eddi://ai.labs.output/outputsets/<id>?version=1" }
    }
  ]
}
```

Each extension references a versioned configuration resource. This means you can update individual pipeline components independently, roll back to previous versions, and audit every change.
