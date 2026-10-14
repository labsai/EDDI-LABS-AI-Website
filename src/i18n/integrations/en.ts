/**
 * Integration catalog copy, English (source of truth for the other locales).
 * Keys match src/data/integrations.ts. Facts come from the EDDI documentation;
 * keep claims in step with the data file. Strings marked HTML are rendered with
 * set:html, so only <code> and <a> appear in them.
 */
import type { IntegrationCategory } from '../../data/integrations';
import { MCP_TOOLS, VECTOR_STORES } from '../stats';

export interface IntegrationCopy {
	summary: string;
	/** What you get (plain text). */
	gets: string[];
	/** How it works in EDDI, 3 to 5 steps (HTML). */
	steps: string[];
	/** One caption per snippet, same order as the data file (plain text). */
	captions: string[];
	/** Governance notes (HTML). */
	governance: string[];
	/** Honest limits and things to know (HTML). */
	goodToKnow?: string[];
}

export interface IntegrationsUi {
	title: string;
	metaTitle: string;
	description: string;
	heroTitle: string;
	heroHighlight: string;
	/** HTML. */
	heroDesc: string;
	filterLabel: string;
	filterAll: string;
	searchLabel: string;
	searchPlaceholder: string;
	noResults: string;
	/** HTML. */
	notCoveredNote: string;
	backToCatalog: string;
	whatYouGet: string;
	howItWorks: string;
	configTitle: string;
	configDesc: string;
	governanceTitle: string;
	goodToKnowTitle: string;
	linksTitle: string;
	docsLink: string;
	guidesLabel: string;
	relatedTitle: string;
	getStarted: string;
	modelsLinkText: string;
	solutionsTitle: string;
	solutionsDesc: string;
	solutionsBtn: string;
	sourcesDesc: string;
	copy: string;
	copied: string;
	/** Used as `{name} in EDDI` for the structured data headline and the meta title. */
	pageTitle: string;
	/** Short meta description template, {name} and {summary}. */
	pageDescription: string;
	ctaTitle: string;
	/** HTML. */
	ctaDesc: string;
}

export interface IntegrationsCopy {
	ui: IntegrationsUi;
	categories: Record<IntegrationCategory, string>;
	integrations: Record<string, IntegrationCopy>;
}

const copy: IntegrationsCopy = {
	ui: {
		title: 'Integrations',
		metaTitle: 'EDDI Integrations: Slack, MCP, OpenAPI, SAP, vector stores and Kubernetes',
		description:
			'How EDDI connects to Slack, Open WebUI, Keycloak, MCP and A2A, any REST API through OpenAPI, SAP through its APIs, six vector stores, Kubernetes, OpenShift and Ollama. Each page has the real configuration.',
		heroTitle: 'EDDI',
		heroHighlight: 'Integrations',
		heroDesc:
			'Channels, identity, agent protocols, enterprise systems, vector stores and infrastructure. Every page shows what you get, how it works in EDDI, the real configuration, and how the integration is governed: approvals, the audit ledger and the secrets vault.',
		filterLabel: 'Filter integrations by category',
		filterAll: 'All',
		searchLabel: 'Search integrations',
		searchPlaceholder: 'Search, for example Slack, SAP or pgvector',
		noResults: 'No integration matches. Try a different word or clear the filter.',
		notCoveredNote:
			'EDDI does not ship Microsoft Teams, Telegram, WhatsApp or Discord channels, does not send email itself, and has no generic inbound webhooks. Anything with an API can still be reached through <a href="/integrations/openapi/">OpenAPI import</a>, HTTP calls or <a href="/integrations/mcp-client/">MCP</a>.',
		backToCatalog: 'All integrations',
		whatYouGet: 'What you get',
		howItWorks: 'How it works in EDDI',
		configTitle: 'Configuration',
		configDesc: 'Taken from the EDDI documentation. Placeholders such as your-agent-id are yours to replace.',
		governanceTitle: 'Governance',
		goodToKnowTitle: 'Good to know',
		linksTitle: 'Documentation and guides',
		docsLink: 'Docs',
		guidesLabel: 'Guide',
		relatedTitle: 'Related integrations',
		getStarted: 'Get started',
		modelsLinkText: 'Browse the model catalog',
		solutionsTitle: 'Need it built and run for you?',
		solutionsDesc: 'EDDI Solutions builds and maintains connectors, runs EDDI as a managed or co-operated instance, and supports you in your own cloud or on-premises.',
		solutionsBtn: 'Talk to EDDI Solutions',
		sourcesDesc: 'Configuration and behavior on this page follow the EDDI documentation, checked on {date}. Field names and defaults can change between releases, so confirm them in the docs for your version.',
		copy: 'Copy',
		copied: 'Copied',
		pageTitle: '{name} in EDDI',
		pageDescription: '{name}: {summary}',
		ctaTitle: 'Do not see your system?',
		ctaDesc: 'Describe it to us or start from the <a href="/integrations/openapi/">OpenAPI</a> route. If it has an API, an agent can call it, with approvals and an audit trail.',
	},
	categories: {
		channels: 'Channels',
		identity: 'Identity and security',
		protocols: 'Agent protocols',
		enterprise: 'Enterprise systems',
		data: 'Data and RAG',
		infrastructure: 'Infrastructure',
	},
	integrations: {
		slack: {
			summary: 'Governed AI agents in Slack: mentions, direct messages, threads, group discussions streamed into a thread, and Block Kit approval cards with Approve and Reject buttons.',
			gets: [
				'Agents that answer @mentions and direct messages, with follow-ups kept in the thread',
				'Trigger keywords that route a message to a specific agent or to a multi-agent group discussion',
				'Group discussions streamed into a thread as they happen',
				'Approval cards in Slack for paused turns, tool calls and group phases, with an approver allow-list',
				'Several Slack workspaces against one EDDI',
			],
			steps: [
				'Create a Slack app and add the bot token scopes listed in the docs (<code>chat:write</code>, <code>app_mentions:read</code>, the <code>history</code> and <code>im:*</code> scopes).',
				'Store the bot token and the signing secret in the EDDI Secrets Vault, then reference them as <code>${vault:...}</code>.',
				'Create a channel integration that maps the Slack channel to a default agent and, optionally, to groups behind trigger keywords such as <code>panel:</code>.',
				'Set the Request URL to <code>https://&lt;your-eddi-host&gt;/integrations/slack/events</code> and subscribe to <code>app_mention</code>, <code>message.im</code> and <code>message.channels</code>. Do this last: Slack verifies the URL immediately.',
				'For approvals, set the Interactivity Request URL to <code>/integrations/slack/interactive</code> and list the approvers in <code>hitlApproverUserIds</code>.',
			],
			captions: [
				'Credentials go into the vault, not into the agent or channel configuration.',
				'A channel integration with a default agent, a group behind trigger keywords, and the approval settings in platformConfig.',
			],
			governance: [
				'Approval cards carry Approve and Reject buttons. Only Slack users listed in <code>hitlApproverUserIds</code> can decide. Without that list no buttons are rendered and interactive decisions are rejected (fail-closed).',
				'A tool-call card shows the tool name and its redacted, truncated arguments, so the approver sees what they are approving. In version 1 the buttons approve or reject the whole batch.',
				'Each decision is attributed to <code>slack:&lt;userId&gt;</code> and recorded in the audit ledger.',
				'Incoming events are verified with the signing secret (HMAC-SHA256) and replay protection, and the secrets themselves stay in the vault.',
			],
			goodToKnow: [
				'Slack is the only third-party chat platform EDDI ships a channel for. See the note on the catalog page for what is not included.',
				'An optional observe mode lets a target see plain channel traffic, behind a trigger, a cooldown and daily response and cost caps. Those caps are per EDDI node.',
			],
		},
		'open-webui': {
			summary: 'EDDI serves an OpenAI-compatible /v1 API that presents deployed agents as models, so Open WebUI, the OpenAI SDKs, LangChain and LiteLLM can talk to them.',
			gets: [
				'Deployed EDDI agents in the Open WebUI model dropdown',
				'Chat Completions with streaming and token usage reporting',
				'One EDDI conversation per chat, so memory and behavior rules persist across turns',
				'A stateless variant (a <code>:stateless</code> model id) for single-turn calls such as title generation',
			],
			steps: [
				'Enable the adapter with <code>EDDI_OPENAI_COMPAT_ENABLED=true</code> and set an API key. It is disabled by default.',
				'Deploy an agent in EDDI. It appears in <code>GET /v1/models</code>.',
				'Point Open WebUI (or an SDK) at <code>http://&lt;eddi&gt;:7070/v1</code> with the same API key.',
				'Turn on <code>ENABLE_FORWARD_USER_INFO_HEADERS</code> in Open WebUI. Without it every chat window shares one EDDI conversation.',
				'Pick the agent from the model list and chat.',
			],
			captions: [
				'A production-shaped compose excerpt from the EDDI docs. Change the example API key.',
				'Verify the endpoint from the shell. Set EDDI_API_KEY to the same value as in the compose file.',
			],
			governance: [
				'The API has its own API-key authentication and is off until you enable it. EDDI refuses to start in the one combination that would leave conversation creation open to anyone who can reach the port.',
				'The agent keeps its own approval gates and its audit trail. A request through /v1 is an ordinary EDDI conversation.',
				'A shared API key plus user headers delegates identity to Open WebUI as a trusted proxy. Treat the key like any shared secret and rotate it.',
			],
			goodToKnow: [
				'Only individual agents appear as models, not multi-agent groups.',
				'Quick replies and buttons are rendered as Markdown text, not as interactive controls.',
				'Tool calls are not returned to the client. EDDI runs its tools inside its own pipeline, and tool activity stays visible in the audit ledger.',
			],
		},
		'web-chat': {
			summary: 'A themeable React chat UI served by EDDI itself, with streaming responses, Markdown, quick replies and undo, that you can open directly or embed in a page.',
			gets: [
				'A chat page for every deployed agent at /chat/{environment}/{agentId}',
				'Token-by-token streaming, rich Markdown, code highlighting and LaTeX math',
				'Dark and light themes, quick-reply buttons and undo and redo',
				'URL parameters to hide controls and set the title, for a focused embedded widget',
				'A demo mode that needs no backend',
			],
			steps: [
				'Run EDDI. The Chat UI ships inside the EDDI image and the installer includes it.',
				'Open <code>/chat/&lt;environment&gt;/&lt;agentId&gt;</code> on your EDDI host.',
				'Adjust it with URL parameters such as <code>theme</code>, <code>title</code>, <code>hideUndo</code> and <code>hideNewConversation</code>.',
				'To embed it, put the same URL in an iframe on your page.',
			],
			captions: [
				'The URL patterns the Chat UI serves.',
				'An embedded widget from the Chat UI README. Combine the display parameters as needed.',
			],
			governance: [
				'The chat talks to the same conversation API as every other client, so behavior rules, approval gates and the audit ledger apply unchanged.',
				'With authentication on, the widget needs an access token for the signed-in user, and the backend verifies it on every call.',
				'Treat any text an agent produces as untrusted output. The Chat UI renders Markdown from the agent.',
			],
			goodToKnow: [
				'By default EDDI answers with a policy that forbids framing, so a browser will not render the chat inside another site until the operator allows that origin. Check the Chat UI README for the framing settings of your version.',
			],
		},
		'keycloak-oidc': {
			summary: 'Put OpenID Connect authentication in front of EDDI with Keycloak or another OIDC provider, with roles for admins, editors, users, viewers and approvers.',
			gets: [
				'Login for the Manager and the API through your identity provider',
				'Roles: <code>eddi-admin</code>, <code>eddi-editor</code>, <code>eddi-user</code>, <code>eddi-viewer</code> and <code>eddi-approver</code> for approval decisions',
				'A ready-made <code>eddi</code> realm that the installer imports into Keycloak',
				'Calls that act as the signed-in user, so the audit trail names a real person',
			],
			steps: [
				'Run the installer with <code>--with-auth</code>. It starts Keycloak and imports the <code>eddi</code> realm on first boot.',
				'Set a password for the <code>eddi</code> user in the Keycloak admin console. The shipped realm has none.',
				'Sign in to the Manager. Give people the roles they need and add approvers to <code>eddi-approver</code>.',
				'For an existing identity provider, set the <code>QUARKUS_OIDC_*</code> variables (tenant enabled, auth server URL, client id, client secret).',
				'In an HTTP call, use <code>${caller:token}</code> to call an API with the signed-in user\'s own token instead of one shared credential.',
			],
			captions: [
				'Installer option that adds Keycloak.',
				'Environment variables for an external OIDC provider, from the EDDI docs.',
			],
			governance: [
				'In production launch mode EDDI refuses to start with OIDC disabled unless you opt out explicitly, so an open management API is a decision, not an accident.',
				'Approval endpoints require the <code>eddi-approver</code> role, or the owner or an <code>eddi-admin</code>.',
				'With <code>${caller:token}</code> the audit trail records the real user. A shared static credential would collapse every action into one principal.',
			],
			goodToKnow: [
				'Authentication is optional and off by default. Keycloak is what the installer provisions. Other OIDC providers use the same settings, and some details (for example the advertised token endpoint for A2A) assume Keycloak paths unless you set them.',
				'The shipped realm import is one-shot. Later edits to the JSON do not reach a running Keycloak.',
			],
		},
		'secrets-vault': {
			summary: 'A built-in, envelope-encrypted secrets vault. Configuration references secrets as ${vault:keyName}, and the value never lands in agent configs, exports or logs.',
			gets: [
				'<code>${vault:keyName}</code> references in LLM, HTTP call, MCP and RAG configuration',
				'AES-256-GCM envelope encryption with a per-tenant data key',
				'Per-agent grants: which agents may use which secret',
				'Secrets scrubbed from configuration exports and redacted in logs',
			],
			steps: [
				'Set the vault master key (<code>EDDI_VAULT_MASTER_KEY</code>). The installer generates one for you. Without a key the vault is disabled.',
				'Store a secret with <code>PUT /secretstore/secrets/{tenantId}/{keyName}</code> or through the Manager.',
				'Reference it in configuration as <code>${vault:keyName}</code>.',
				'EDDI resolves the reference at runtime. The plaintext is not stored in conversation memory.',
				'Narrow <code>allowedAgents</code> to the agents that need the secret. The check runs when an agent is deployed.',
			],
			captions: [
				'Store a secret. The response never returns the value.',
				'Reference the secret by name from an LLM task.',
				'Change who may use a secret without touching its value.',
			],
			governance: [
				'Grants are enforced at deploy time by default: an agent that references a secret it is not granted is not deployed.',
				'A vault reference that arrives through conversation data, such as user input or a model reply, is refused instead of being resolved.',
				'Plaintext is redacted from the request record, the approval preview and the request log line.',
				'The vault endpoints sit behind the <code>eddi-admin</code> role when authentication is on.',
			],
			goodToKnow: [
				'EDDI has no native HashiCorp Vault, AWS or Azure client. On Kubernetes, the External Secrets Operator can sync the <code>eddi-secrets</code> Kubernetes Secret (which holds the vault master key) from HashiCorp Vault, AWS Secrets Manager or Azure Key Vault. The individual secrets still live in the EDDI vault.',
				'If the master key is lost, the encrypted secrets are unrecoverable. Back it up.',
			],
		},
		'mcp-server': {
			summary: `Control EDDI from Claude Desktop, Cursor, VS Code and other MCP clients. EDDI exposes ${MCP_TOOLS} MCP tools over Streamable HTTP for conversations and administration.`,
			gets: [
				`${MCP_TOOLS} tools: list and talk to agents, create and deploy them, manage groups, schedules and more`,
				'A single endpoint, <code>/mcp</code>, using Streamable HTTP',
				'Works with clients that speak HTTP directly and, through a bridge, with stdio-only clients',
				'Role-based access when authentication is on',
			],
			steps: [
				'Run EDDI. The MCP endpoint is <code>http://localhost:7070/mcp</code>.',
				'Add EDDI to your MCP client. HTTP-capable clients use the URL directly.',
				'For stdio-only clients such as Claude Desktop, use the <code>mcp-remote</code> bridge as shown.',
				'Ask the assistant to list agents, start a conversation or create an agent. The documented flow is <code>list_agents</code>, <code>create_conversation</code>, <code>talk_to_agent</code>.',
				'With OIDC on, give the client a bearer token.',
			],
			captions: [
				'For clients with native HTTP transport.',
				'For stdio-only clients. On Windows, wrap the command with cmd /c if npx is not on the PATH.',
			],
			governance: [
				'Write tools such as <code>setup_agent</code> and <code>create_api_agent</code> need the <code>eddi-editor</code> role.',
				'The MCP <code>create_api_agent</code> tool deliberately cannot set an approval gate. Provisioning a gated agent goes through REST with <code>eddi-admin</code>.',
				'Group phases that wait for approval can be approved through MCP as well as the Manager, REST and Slack, and every decision is audited.',
			],
			goodToKnow: [
				'Production start refuses to run with OIDC off unless you opt out, and an opted-out instance leaves <code>/mcp</code> open to anyone who can reach the port.',
			],
		},
		'mcp-client': {
			summary: 'Give EDDI agents the tools of external MCP servers. A server\'s tools become the agent\'s tools, behind the same approval gates and audit trail as every other tool.',
			gets: [
				'Tools from any MCP server that speaks Streamable HTTP',
				'Name allow and deny lists to keep the tool list small',
				'Optional resource listing and reading',
				'A circuit breaker that stops calling a failing server',
			],
			steps: [
				'Create an <code>mcpcalls</code> configuration with the server URL, the transport <code>http</code> and an API key as a <code>${vault:...}</code> reference.',
				'Reference it as a workflow step (<code>eddi://ai.labs.mcpcalls</code>).',
				'The agent\'s LLM task picks up the server\'s tools automatically (<code>enableMcpCallTools</code> defaults to true).',
				'Add the tools to <code>toolApprovals</code> so consequential calls wait for a human.',
				'For a stdio-only server, run it in its own container behind an HTTP bridge and point EDDI at the bridge.',
			],
			captions: [
				'An mcpcalls configuration. The token is a vault reference.',
				'Gate every MCP tool except the read-only ones.',
			],
			governance: [
				'MCP tool calls take part in the same human-in-the-loop approval gate as every other tool source.',
				'Tool descriptions are redacted for directive-shaped text and length-capped. Tool results are wrapped with provenance and, by default, directive-shaped content is redacted.',
				'A tool whitelist is context management, not a security boundary. The boundary is the credential you give the connection plus the approval gate.',
				'Every gated decision is written to the audit ledger.',
			],
			goodToKnow: [
				'EDDI implements one MCP transport, Streamable HTTP. It does not spawn stdio servers itself, because a configuration-editable command would be arbitrary code execution as the EDDI process user. Use a bridge sidecar.',
				'A circuit breaker opens after 3 failures in 60 seconds, so a missing tool usually means the server is failing.',
			],
		},
		a2a: {
			summary: 'Expose EDDI agents to other agents through Agent Cards and JSON-RPC, and use remote A2A agents as tools inside your own agents.',
			gets: [
				'An Agent Card for each agent you opt in, listing its skills',
				'A JSON-RPC 2.0 endpoint with <code>tasks/send</code>, <code>tasks/get</code> and <code>tasks/cancel</code>',
				'Remote A2A agents merged into the tool-calling loop next to built-in, MCP and HTTP tools',
				'Skill filters to expose only part of a remote agent',
			],
			steps: [
				'Opt an agent in with <code>a2aEnabled: true</code>, a description and the skills to advertise.',
				'Peers fetch its card from <code>/a2a/agents/{agentId}/agent.json</code> and call <code>POST /a2a/agents/{agentId}</code>.',
				'To consume a remote agent, list it under <code>a2aAgents</code> in an LLM task with its URL and a vault-referenced API key.',
				'EDDI reads the remote card, turns each skill into a tool named <code>{agentName}_{skillId}</code> and calls it with <code>tasks/send</code>.',
			],
			captions: [
				'Expose an agent. A2A is opt-in per agent.',
				'Consume a remote agent. The API key must be a vault reference.',
			],
			governance: [
				'Agent Cards are anonymous by design, so a peer can discover an agent before it holds credentials. With authentication on, listing agents and the JSON-RPC endpoint both require a token.',
				'A remote agent\'s tools pass through the same approval gates and tool-result guardrails as other tool sources, and the API key stays in the vault.',
				'<code>tasks/send</code> runs a conversation on your LLM budget, which is why it is not anonymous.',
			],
			goodToKnow: [
				'When authentication is on, the card advertises a token endpoint. EDDI derives a Keycloak-style path unless you set <code>eddi.a2a.public-token-endpoint</code>, so set it for other identity providers.',
			],
		},
		openapi: {
			summary: 'Turn any REST API with an OpenAPI 3.0 or 3.1 description into an agent with tools, without writing code, and gate the consequential calls behind human approval.',
			gets: [
				'An API-calling agent generated from the spec: HTTP call configurations grouped by tag, the pipeline, and deployment',
				'Endpoint filtering, a base URL override and auth header propagation',
				'The option to add an MCP server\'s tools next to the generated ones',
				'Tools you can review, diff and version, because they are configuration',
			],
			steps: [
				'Give EDDI the OpenAPI spec through the <code>create_api_agent</code> MCP tool or <code>POST /administration/agents/setup-api</code>.',
				'Allow-list the operations the agent should have. An endpoint that is not declared cannot be called.',
				'EDDI generates the HTTP call configurations, builds the full pipeline and deploys the agent.',
				'Keep credentials as <code>${vault:...}</code> references.',
				'Gate writes with <code>http.*:*</code> and exempt reads with <code>http.get:*</code>.',
			],
			captions: [
				'The httpCalls model that generated tools are built from. Written out by hand here to show the fields.',
				'Approve every call that changes state, let reads through.',
			],
			governance: [
				'Approval patterns can address what a tool calls (<code>http.post:*</code>), which stays correct when an operationId changes.',
				'Outbound calls are protected against SSRF and path traversal by the platform.',
				'Through REST, <code>setup-api</code> accepts a <code>hitlConfig</code>, so an agent can be provisioned with its write tools gated from the first version. The MCP tool cannot set it.',
				'Decisions land in the audit ledger.',
			],
			goodToKnow: [
				'A generated write tool takes the whole request body as one <code>requestBody</code> parameter.',
			],
		},
		sap: {
			summary: 'EDDI has no native SAP connector. You reach SAP through its OData and REST APIs with OpenAPI import or HTTP calls, or through an MCP server, under approvals and the audit ledger.',
			gets: [
				'Agents that read from and, with approval, write to SAP through its published APIs',
				'The same governance as any other tool: approvals, audit ledger, vault-held credentials',
				'No code in the agent. The connection is configuration you can review',
			],
			steps: [
				'Pick the route. Use OpenAPI import if the SAP service publishes an OpenAPI description. Use HTTP calls to declare individual OData or REST requests. Use MCP if you already run an MCP server in front of SAP.',
				'Store the SAP credential or token in the Secrets Vault and reference it as <code>${vault:...}</code>.',
				'Declare only the read operations the agent needs first, such as listing or reading business objects.',
				'Gate every write with <code>http.*:*</code> and exempt reads with <code>http.get:*</code>. Approvers decide in the Manager or in Slack.',
				'Check the audit ledger for each call before you widen what the agent may do.',
			],
			captions: [
				'An example read from an SAP OData service. Host, service path and authentication depend on your SAP system.',
				'Writes wait for a human. Reads go through.',
			],
			governance: [
				'Writes are held for approval, with the decision recorded in the HMAC-signed, append-only audit ledger.',
				'Credentials stay in the vault and never appear in the agent configuration or in exports.',
				'The endpoint allow-list means an undeclared SAP operation cannot be called, whatever a user types.',
			],
			goodToKnow: [
				'This is an integration pattern, not a certified SAP connector. How you authenticate to SAP, and which APIs it exposes, depends on your landscape.',
				'EDDI Solutions can build and maintain the connection for you, including custom MCP tools, and run it in your cloud or on-premises.',
			],
		},
		chroma: {
			summary: 'Chroma as the vector store for an EDDI knowledge base. The lowest-friction option when you have no existing infrastructure to reuse.',
			gets: [
				'Retrieval-augmented answers from your own documents',
				`One of ${VECTOR_STORES} vector stores, chosen by configuration rather than code`,
				'Ingestion sources: website crawling and uploaded files, with schedules and run history',
			],
			steps: [
				'Run a Chroma server and note its URL and a collection name.',
				'Create a RagConfiguration with <code>storeType: "chroma"</code> and the store parameters, plus the embedding provider.',
				'Bind it to the agent with an <code>eddi://ai.labs.rag</code> workflow step.',
				'Select it in the LLM task by name under <code>knowledgeBases</code>, then ingest documents.',
			],
			captions: [
				'The knowledge base. Chroma takes a base URL and a collection name.',
				'The step that binds it to the agent and the task that uses it. Skipping the workflow step is the most common mistake.',
			],
			governance: [
				'Embedding API keys are vault references, so the document corpus and the credentials stay separate.',
				'Embedding calls send document text to a hosted embedding provider. If the data may not leave your infrastructure, use a self-hosted embedding model.',
				'An open vector store is a copy of your corpus. Run Chroma with authentication and off public interfaces.',
			],
			goodToKnow: [
				'Replacing a document\'s chunks is verified for in-memory and pgvector. For Chroma it is expected to work but not covered by tests, so re-ingested documents may leave stale chunks.',
			],
		},
		pgvector: {
			summary: 'PostgreSQL with pgvector as the vector store for an EDDI knowledge base. The recommended persistent choice when you already run PostgreSQL.',
			gets: [
				'A knowledge base inside a database you already back up and operate',
				'Verified document replacement on re-ingestion',
				'The same agent configuration as every other store, with only the store parameters changing',
			],
			steps: [
				'Enable the pgvector extension in PostgreSQL and create a database and user.',
				'Create a RagConfiguration with <code>storeType: "pgvector"</code>, the connection details, a table and the vector <code>dimension</code>.',
				'Bind it with an <code>eddi://ai.labs.rag</code> workflow step.',
				'Select it by name in the LLM task and ingest documents.',
			],
			captions: [
				'The dimension must match your embedding model. 1536 matches text-embedding-3-small.',
				'Binding the knowledge base to the agent and using it in a task.',
			],
			governance: [
				'The database password is a required parameter. Keep it as a vault reference.',
				'Your existing PostgreSQL access control and backups apply to the vectors.',
				'Embedding calls send document text to the embedding provider you configure.',
			],
			goodToKnow: [
				'The in-memory store is for development: it empties after 30 minutes without a query and on restart. A persistent store such as pgvector is the production choice.',
			],
		},
		qdrant: {
			summary: 'Qdrant as the vector store for an EDDI knowledge base, a purpose-built vector database with room to grow.',
			gets: [
				'A dedicated vector database behind your knowledge base',
				'Optional API key and TLS',
				'The same agent configuration as every other store',
			],
			steps: [
				'Run a Qdrant server and note its host and gRPC port (the EDDI default is 6334).',
				'Create a RagConfiguration with <code>storeType: "qdrant"</code> and a <code>collectionName</code>.',
				'Bind it with an <code>eddi://ai.labs.rag</code> workflow step.',
				'Select it by name in the LLM task and ingest documents.',
			],
			captions: [
				'Qdrant takes a host, a port and a collection name. apiKey and useTls are optional.',
				'Binding the knowledge base to the agent and using it in a task.',
			],
			governance: [
				'If Qdrant needs an API key, reference it from the vault.',
				'Embedding calls send document text to the embedding provider you configure.',
				'An open vector store is a copy of your corpus. Keep it off public interfaces.',
			],
			goodToKnow: [
				'Replacing a document\'s chunks is expected to work with Qdrant but is not covered by tests. Without it, re-ingested documents can leave stale chunks.',
			],
		},
		elasticsearch: {
			summary: 'Elasticsearch as the vector store for an EDDI knowledge base, useful when you already run it and want keyword and vector search in one place.',
			gets: [
				'A knowledge base in a cluster you already operate',
				'API key or user name and password authentication',
				'The same agent configuration as every other store',
			],
			steps: [
				'Make sure an Elasticsearch cluster is reachable and pick an index name.',
				'Create a RagConfiguration with <code>storeType: "elasticsearch"</code>, the <code>serverUrl</code> and the <code>indexName</code>.',
				'Bind it with an <code>eddi://ai.labs.rag</code> workflow step.',
				'Select it by name in the LLM task and ingest documents.',
			],
			captions: [
				'The default serverUrl is localhost:9200. Add an apiKey, or a userName and password, for a secured cluster.',
				'Binding the knowledge base to the agent and using it in a task.',
			],
			governance: [
				'Reference the API key or password from the vault.',
				'Embedding calls send document text to the embedding provider you configure.',
				'Your existing cluster access control applies to the vectors.',
			],
			goodToKnow: [
				'Replacing a document\'s chunks is expected to work with Elasticsearch but is not covered by tests. Without it, re-ingested documents can leave stale chunks.',
			],
		},
		'mongodb-atlas-vector-search': {
			summary: 'MongoDB Atlas Vector Search as the vector store for an EDDI knowledge base, a natural fit if you already run on Atlas.',
			gets: [
				'A knowledge base in the Atlas cluster you already operate',
				'Configuration by connection string, database, collection and index name',
				'The same agent configuration as every other store',
			],
			steps: [
				'Create a vector search index in Atlas and note the database, collection and index names.',
				'Create a RagConfiguration with <code>storeType: "mongodb-atlas"</code> and the store parameters.',
				'Bind it with an <code>eddi://ai.labs.rag</code> workflow step.',
				'Select it by name in the LLM task and ingest documents.',
			],
			captions: [
				'The connection string carries credentials, so it is a vault reference here.',
				'Binding the knowledge base to the agent and using it in a task.',
			],
			governance: [
				'Keep the connection string in the vault, not in the configuration.',
				'Embedding calls send document text to the embedding provider you configure.',
				'Atlas access control and network rules apply to the vectors.',
			],
			goodToKnow: [
				'Replacing a document\'s chunks is expected to work with Atlas but is not covered by tests. Without it, re-ingested documents can leave stale chunks.',
			],
		},
		'kubernetes-helm': {
			summary: 'Run EDDI on any conformant Kubernetes cluster with a single-file quickstart, a Helm chart or Kustomize overlays, with MongoDB or PostgreSQL.',
			gets: [
				'A quickstart manifest that deploys EDDI and MongoDB',
				'A Helm chart and Kustomize overlays for production profiles',
				'Optional components: Keycloak authentication, NATS JetStream, monitoring, ingress, pod disruption budget and network policy',
				'MongoDB or PostgreSQL as the datastore',
			],
			steps: [
				'Apply the quickstart manifest, or install the Helm chart with a vault master key.',
				'Create the <code>eddi-secrets</code> Secret that holds the vault master key. No manifest writes it, on purpose.',
				'Choose the database overlay or Helm values for MongoDB or PostgreSQL.',
				'Add the optional components you need, such as Keycloak and ingress.',
				'For production secrets, sync <code>eddi-secrets</code> with the External Secrets Operator.',
			],
			captions: [
				'EDDI and MongoDB in one command. The pod waits until the eddi-secrets Secret exists.',
				'Helm install with a generated vault master key.',
				'The Helm values that switch the datastore to PostgreSQL.',
			],
			governance: [
				'No manifest ever writes the master-key Secret, so a re-apply cannot replace a live key and make existing secrets undecryptable.',
				'The shipped Keycloak realm for Helm and Kustomize sets no default password for the privileged accounts.',
				'The production profile adds a pod disruption budget and a network policy.',
			],
			goodToKnow: [
				'The External Secrets Operator can sync the <code>eddi-secrets</code> Secret from AWS Secrets Manager, HashiCorp Vault, Azure Key Vault and similar. EDDI itself has no native client for those.',
				'EDDI Solutions can run EDDI for you in your own cloud, on-premises or as a dedicated managed instance.',
			],
		},
		openshift: {
			summary: 'EDDI ships a Red Hat certified container image built on UBI 10 that runs non-root on OpenShift 4.12 or newer, plus an Operator for OperatorHub.',
			gets: [
				'A Red Hat certified image, listed in the Red Hat Ecosystem Catalog',
				'Non-root execution as UID 185 on a UBI 10 base with OpenJDK 25',
				'An Operator that creates an EDDI instance and a route from a custom resource',
				'Certification checked in CI with Red Hat preflight',
			],
			steps: [
				'On OpenShift 4.12 or newer, open OperatorHub and install the EDDI Operator.',
				'Create an <code>Eddi</code> instance from Installed Operators, with the size and storage for MongoDB.',
				'The Operator creates the route automatically.',
				'Add authentication and secrets as you would on any cluster.',
			],
			captions: ['An Eddi custom resource from the docs.'],
			governance: [
				'The container runs as a non-root user, and the image carries third-party license files.',
				'Releases are checked against Red Hat certification requirements in CI.',
				'Production start still requires OIDC unless you opt out explicitly.',
			],
			goodToKnow: [
				'The Operator is being updated for EDDI 6 to support both MongoDB and PostgreSQL. The generic Kubernetes route works on any conformant cluster.',
				'A RHEL 8 host is not supported for the UBI 10 image. RHEL 9 or newer is.',
			],
		},
		ollama: {
			summary: 'Run models locally with Ollama and keep prompts and documents on your own hardware, for on-premises and air-gapped setups.',
			gets: [
				'An LLM task of type <code>ollama</code> that talks to your Ollama server',
				'No provider API key and no data sent to a hosted model',
				'A compose overlay that starts Ollama next to EDDI',
				'In-process Jlama as an alternative for small quantized models',
			],
			steps: [
				'Start EDDI with the Ollama compose overlay, or run Ollama yourself and note its URL.',
				'Pull a model into Ollama. Use the model tag exactly as <code>ollama list</code> shows it.',
				'Set the task <code>type</code> to <code>ollama</code> with the <code>baseUrl</code> and <code>model</code>.',
				'Inside a container, <code>localhost</code> is the container. Use the compose service name or <code>host.docker.internal</code>.',
			],
			captions: [
				'Brings Ollama up on the same network as http://ollama:11434.',
				'An Ollama task from the EDDI docs.',
			],
			governance: [
				'Prompts, retrieved context and answers stay on your network, which is the point of a local model.',
				'Approvals, behavior rules and the audit ledger apply the same as with a hosted model.',
				'No credential is involved, so there is nothing to put in the vault for the model itself.',
			],
			goodToKnow: [
				'A fully air-gapped setup needs a local Ollama or a pre-seeded Jlama cache, because EDDI cannot download a model with no network.',
				'Local models vary in tool-calling and JSON reliability. Test the behavior you depend on.',
			],
		},
	},
};

export default copy;
