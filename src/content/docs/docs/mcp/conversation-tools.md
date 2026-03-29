---
title: Conversation Tools
description: Reference for EDDI's 11 MCP conversation tools.
---

## list_agents

List all deployed agents with status, version, and name.

## list_bot_configs

List all agent configurations (including undeployed).

## create_conversation

Start a new conversation with a deployed agent.

**Parameters:** `agentId` (required), `environment` (optional, default: `production`)

## talk_to_agent

Send a message and get the agent's response.

**Parameters:** `agentId`, `conversationId`, `message` (all required)

## chat_with_agent

Create a conversation and send a message in one call.

**Parameters:** `agentId`, `message` (required)

## read_conversation

Read conversation history, memory, and quick replies.

## read_conversation_log

Read conversation log as formatted text.

## list_conversations

List all conversations for a specific agent.

## get_agent

Get a agent's full configuration (workflows, name, description).

## discover_bots

Discover deployed agents enriched with intent mappings from Agent Triggers. **Best way to find agents by purpose.**

**Parameters:** `filter` (optional), `environment` (optional)

## chat_managed

Send a message using intent-based managed conversations (one conversation per intent+userId, auto-creates on first message).

**Parameters:** `intent`, `userId`, `message` (required), `environment` (optional)
