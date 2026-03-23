---
title: Admin Tools
description: Reference for EDDI's 13 MCP admin tools for agent deployment and management.
---

## deploy_agent
Deploy a agent version to an environment.

## undeploy_agent
Undeploy an agent from an environment.

## get_deployment_status
Get deployment status of a specific agent version.

## list_workflows
List all workflows (workflow configurations).

## create_agent
Create a new agent.

## delete_agent
Delete an agent (with optional cascade).

## update_agent
Update a agent's name/description and optionally redeploy.

## read_workflow
Read a workflow's full pipeline configuration.

## read_resource
Read any resource config by type (rules, langchain, httpcalls, output, etc.).

## list_agent_triggers
List all Agent Triggers (intent→agent mappings) for managed conversations.

## create_agent_trigger
Create a agent trigger mapping an intent to one or more agent deployments.

## update_agent_trigger
Update an existing agent trigger.

## delete_agent_trigger
Delete a agent trigger for a given intent.
