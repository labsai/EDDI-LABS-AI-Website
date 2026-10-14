/**
 * Integration catalog: the language-neutral facts behind /integrations/ and
 * /integrations/{slug}/.
 *
 * Localized copy (summary, what you get, steps, governance notes, captions) lives in
 * src/i18n/integrations/{locale}.ts, keyed by the same slugs.
 *
 * Editorial rules:
 * - Every snippet is taken from the EDDI documentation (docs/*.md in labsai/EDDI) or from
 *   the repository's own compose and install files. Where a value is a placeholder it is
 *   written as one (`your-agent-id`, `example.com`).
 * - No claims beyond what the documentation states. EDDI has no native SAP connector,
 *   no native HashiCorp Vault client, no Microsoft Teams, Telegram, WhatsApp or Discord
 *   channel, no email sending and no generic inbound webhooks. Pages say so where relevant.
 * - Docs links point at docs.labs.ai paths that were fetched and resolve.
 */

export const CHECKED_ON = '2026-10-14';

export type IntegrationCategory = 'channels' | 'identity' | 'protocols' | 'enterprise' | 'data' | 'infrastructure';

export const CATEGORY_ORDER: IntegrationCategory[] = ['channels', 'identity', 'protocols', 'enterprise', 'data', 'infrastructure'];

export type SnippetLang = 'json' | 'bash' | 'yaml' | 'html';

export interface Snippet {
	lang: SnippetLang;
	/** Where the snippet lives (file name or endpoint). Not translated. */
	label: string;
	code: string;
}

export interface DocLink {
	/** English title of the docs page (the docs are English only). */
	label: string;
	href: string;
}

export interface Integration {
	slug: string;
	/** Product or protocol name. Not translated. */
	name: string;
	category: IntegrationCategory;
	/** Short mono tag shown on cards, e.g. the protocol or transport. Not translated. */
	tag: string;
	snippets: Snippet[];
	docs: DocLink[];
	/** English-only guides on this site, linked as `/guides/{slug}/`. */
	guides: { slug: string; title: string }[];
	/** Other integration slugs. */
	related: string[];
	/** Show a link to the /models/ catalog. */
	modelsLink?: boolean;
	/** Show the secondary "built and run for you" call to action (EDDI Solutions). */
	solutionsCta?: boolean;
	/** Extra search terms, lower case. */
	keywords: string[];
}

const DOCS = 'https://docs.labs.ai';

const doc = {
	slack: { label: 'Slack Integration', href: `${DOCS}/protocols-and-integration/slack-integration.md` },
	openWebui: { label: 'OpenAI-Compatible API (Open WebUI)', href: `${DOCS}/protocols-and-integration/open-webui-integration.md` },
	mcpServer: { label: 'MCP Server', href: `${DOCS}/protocols-and-integration/mcp-server.md` },
	mcpClient: { label: 'MCP Client', href: `${DOCS}/protocols-and-integration/mcp-client.md` },
	a2a: { label: 'A2A Protocol', href: `${DOCS}/protocols-and-integration/a2a-protocol.md` },
	secrets: { label: 'Secrets Vault', href: `${DOCS}/security-and-compliance/secrets-vault` },
	security: { label: 'Security', href: `${DOCS}/security-and-compliance/security.md` },
	audit: { label: 'Audit Ledger', href: `${DOCS}/security-and-compliance/audit-ledger.md` },
	hitl: { label: 'Human-in-the-Loop (HITL)', href: `${DOCS}/conversations-and-orchestration/hitl.md` },
	httpcalls: { label: 'HTTP Calls / API Calls', href: `${DOCS}/agent-configuration/httpcalls.md` },
	rag: { label: 'RAG (Retrieval-Augmented Generation)', href: `${DOCS}/agent-configuration/rag.md` },
	langchain: { label: 'LLM Integration', href: `${DOCS}/agent-configuration/langchain.md` },
	kubernetes: { label: 'Kubernetes', href: `${DOCS}/deployment-and-infrastructure/kubernetes.md` },
	openshift: { label: 'RedHat OpenShift', href: `${DOCS}/deployment-and-infrastructure/redhat-openshift.md` },
	chatUi: { label: 'Chat UI README (GitHub)', href: 'https://github.com/labsai/EDDI/tree/main/ui/chat' },
};

const guide = {
	keycloak: { slug: 'secure-eddi-with-keycloak-oidc', title: 'Secure EDDI with Keycloak and OIDC' },
	openapi: { slug: 'connect-any-api-with-openapi', title: 'Give an agent tools with OpenAPI and httpCall' },
	chroma: { slug: 'build-a-rag-agent-with-chroma', title: 'Build a RAG agent with Chroma' },
	kubernetes: { slug: 'deploy-eddi-on-kubernetes', title: 'Deploy EDDI on Kubernetes' },
	compose: { slug: 'self-host-eddi-with-docker-compose', title: 'Self-host EDDI with Docker Compose' },
};

const HTTP_WRITES = ['http.post:*', 'http.put:*', 'http.patch:*', 'http.delete:*'];

/** Tool approvals as documented in hitl.md (agent-level `hitlConfig.toolApprovals`). */
const toolApprovals = (patterns: string[], exempt: string[] | null, label = 'agent configuration (hitlConfig)'): Snippet => ({
	lang: 'json',
	label,
	code: JSON.stringify(
		{
			hitlConfig: {
				toolApprovals: {
					requireApproval: patterns,
					...(exempt ? { exempt } : {}),
					approvalTimeout: 'PT30M',
					timeoutPolicy: 'AUTO_REJECT',
				},
			},
		},
		null,
		2,
	),
});

/** Binding a knowledge base to an agent and selecting it in an LLM task (rag.md, options 1). */
const ragBinding: Snippet = {
	lang: 'json',
	label: 'workflow step + langchain.json task',
	code: `// 1. workflow step: binds the knowledge base to the agent
{ "type": "eddi://ai.labs.rag",
  "extensions": {},
  "config": { "uri": "eddi://ai.labs.rag/ragstore/rags/{ragId}?version=1" } }

// 2. LLM task: selects it by the "name" of the RagConfiguration
{ "tasks": [{
    "actions": ["*"],
    "type": "openai",
    "knowledgeBases": [{ "name": "product-docs", "maxResults": 5, "minScore": 0.7 }],
    "parameters": { "systemMessage": "You are a helpful assistant." }
} ] }`,
};

const ragConfig = (storeType: string, storeParameters: Record<string, unknown>): Snippet => ({
	lang: 'json',
	label: 'RagConfiguration (POST /ragstore/rags)',
	code: JSON.stringify(
		{
			name: 'product-docs',
			embeddingProvider: 'openai',
			embeddingParameters: { model: 'text-embedding-3-small', apiKey: '${vault:openai-key}' },
			storeType,
			storeParameters,
			chunkStrategy: 'recursive',
			chunkSize: 512,
			chunkOverlap: 64,
			maxResults: 5,
			minScore: 0.6,
		},
		null,
		2,
	),
});

export const INTEGRATIONS: Integration[] = [
	// ─── Channels ───────────────────────────────────────────────
	{
		slug: 'slack',
		name: 'Slack',
		category: 'channels',
		tag: 'Events API',
		keywords: ['chat', 'bot', 'approval', 'block kit', 'threads', 'workspace'],
		snippets: [
			{
				lang: 'bash',
				label: 'Store the credentials in the vault',
				code: `curl -X PUT http://localhost:7070/secretstore/secrets/default/slack-bot-token \\
  -H "Content-Type: application/json" \\
  -d '{"value":"xoxb-your-token-here","description":"Slack bot token"}'

curl -X PUT http://localhost:7070/secretstore/secrets/default/slack-signing-secret \\
  -H "Content-Type: application/json" \\
  -d '{"value":"your-signing-secret","description":"Slack signing secret"}'`,
			},
			{
				lang: 'bash',
				label: 'POST /channelstore/channels',
				code: `curl -X POST http://localhost:7070/channelstore/channels \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Main Slack Channel",
    "channelType": "slack",
    "platformConfig": {
      "channelId": "C0123ABCDEF",
      "botToken": "\${vault:slack-bot-token}",
      "signingSecret": "\${vault:slack-signing-secret}",
      "hitlApprovalChannel": "C0123ABCDEF",
      "hitlApproverUserIds": "U0123ABCDE,U0456FGHIJ"
    },
    "defaultTargetName": "default",
    "targets": [
      { "name": "default", "type": "AGENT", "targetId": "your-agent-id", "triggers": [] },
      { "name": "panel", "type": "GROUP", "targetId": "your-group-id", "triggers": ["panel", "discuss"] }
    ]
  }'`,
			},
		],
		docs: [doc.slack, doc.hitl],
		guides: [],
		related: ['secrets-vault', 'mcp-server', 'open-webui'],
		solutionsCta: true,
	},
	{
		slug: 'open-webui',
		name: 'Open WebUI',
		category: 'channels',
		tag: '/v1',
		keywords: ['openai', 'compatible', 'litellm', 'sdk', 'chat completions', 'api'],
		snippets: [
			{
				lang: 'yaml',
				label: 'docker-compose.yml (excerpt)',
				code: `services:
  eddi:
    image: labsai/eddi:latest
    ports: ["7070:7070"]
    environment:
      EDDI_OPENAI_COMPAT_ENABLED: "true"
      EDDI_OPENAI_COMPAT_API_KEY: "sk-eddi-change-me"

  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    ports: ["3000:8080"]
    environment:
      OPENAI_API_BASE_URL: http://eddi:7070/v1
      OPENAI_API_KEY: "sk-eddi-change-me"
      ENABLE_OLLAMA_API: "false"
      ENABLE_FORWARD_USER_INFO_HEADERS: "true"`,
			},
			{
				lang: 'bash',
				label: 'Check the endpoint',
				code: `curl -H "Authorization: Bearer $EDDI_API_KEY" http://localhost:7070/v1/models

curl -X POST http://localhost:7070/v1/chat/completions \\
  -H "Authorization: Bearer $EDDI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -H "X-OpenWebUI-Chat-Id: chat-1" \\
  -H "X-OpenWebUI-User-Id: alice" \\
  -d '{"model":"my-agent-a3f9c1","messages":[{"role":"user","content":"Hello"}]}'`,
			},
		],
		docs: [doc.openWebui],
		guides: [],
		related: ['web-chat', 'slack', 'ollama'],
	},
	{
		slug: 'web-chat',
		name: 'Web chat',
		category: 'channels',
		tag: 'React + SSE',
		keywords: ['chat ui', 'widget', 'iframe', 'embed', 'streaming', 'react'],
		snippets: [
			{
				lang: 'bash',
				label: 'URL patterns served by EDDI',
				code: `# an agent in an environment
http://localhost:7070/chat/{environment}/{agentId}

# with an explicit user id
http://localhost:7070/chat/{environment}/{agentId}/{userId}

# a showcase with mock data, no backend needed
http://localhost:7070/chat/demo/showcase`,
			},
			{
				lang: 'html',
				label: 'Embed in a page',
				code: `<iframe
  src="https://your-eddi-server/chat/production/your-agent-id?hideNewConversation=true&theme=dark"
  style="width: 400px; height: 600px; border: none; border-radius: 12px;"
></iframe>`,
			},
			{
				lang: 'bash',
				label: 'application.properties (or EDDI_CHAT_FRAME_ANCESTORS)',
				code: `eddi.chat.frame-ancestors=https://portal.example.com`,
			},
		],
		docs: [doc.chatUi],
		guides: [guide.compose],
		related: ['open-webui', 'slack', 'keycloak-oidc'],
	},

	// ─── Identity & security ────────────────────────────────────
	{
		slug: 'keycloak-oidc',
		name: 'Keycloak / OIDC',
		category: 'identity',
		tag: 'OIDC',
		keywords: ['sso', 'authentication', 'rbac', 'roles', 'okta', 'auth0', 'entra', 'identity provider'],
		snippets: [
			{
				lang: 'bash',
				label: 'Install with Keycloak',
				code: `bash install.sh --with-auth`,
			},
			{
				lang: 'bash',
				label: 'Point EDDI at your identity provider',
				code: `docker run -d \\
  -p 7070:7070 \\
  -e MONGODB_CONNECTIONSTRING='mongodb://mongo:27017/eddi?retryWrites=true&w=majority' \\
  -e QUARKUS_OIDC_TENANT_ENABLED=true \\
  -e QUARKUS_OIDC_AUTH_SERVER_URL='https://keycloak.example.com/realms/eddi' \\
  -e QUARKUS_OIDC_CLIENT_ID=eddi \\
  -e QUARKUS_OIDC_CREDENTIALS_SECRET="$OIDC_CLIENT_SECRET" \\
  labsai/eddi:6.4.0`,
			},
		],
		docs: [doc.security, doc.hitl],
		guides: [guide.keycloak],
		related: ['secrets-vault', 'mcp-server', 'kubernetes-helm'],
	},
	{
		slug: 'secrets-vault',
		name: 'Secrets Vault',
		category: 'identity',
		tag: '${vault:}',
		keywords: ['secrets', 'api keys', 'encryption', 'external secrets', 'hashicorp', 'aws', 'azure', 'key vault'],
		snippets: [
			{
				lang: 'bash',
				label: 'Store a secret',
				code: `curl -X PUT http://localhost:7070/secretstore/secrets/default/openai-key \\
  -H "Content-Type: application/json" \\
  -d '{"value":"sk-your-key","description":"OpenAI key"}'`,
			},
			{
				lang: 'json',
				label: 'langchain.json (reference it, never paste it)',
				code: `{
  "tasks": [{
    "actions": ["send_message"],
    "id": "simpleChat",
    "type": "openai",
    "description": "Simple chat",
    "parameters": {
      "apiKey": "\${vault:openai-key}",
      "modelName": "your-model-id",
      "systemMessage": "You are a helpful assistant",
      "addToOutput": "true"
    }
  }]
}`,
			},
			{
				lang: 'bash',
				label: 'Grant one secret to specific agents',
				code: `curl -X PUT "$EDDI/secretstore/secrets/default/openai-key/grant" \\
  -H 'Content-Type: application/json' \\
  -d '{"allowedAgents": ["0123456789abcdef01234567", "89abcdef0123456789abcdef"]}'`,
			},
		],
		docs: [doc.secrets, doc.kubernetes],
		guides: [guide.openapi],
		related: ['keycloak-oidc', 'kubernetes-helm', 'slack'],
	},

	// ─── Agent protocols ────────────────────────────────────────
	{
		slug: 'mcp-server',
		name: 'MCP Server',
		category: 'protocols',
		tag: 'Streamable HTTP',
		keywords: ['model context protocol', 'claude desktop', 'cursor', 'vs code', 'windsurf', 'tools', 'ide'],
		snippets: [
			{
				lang: 'json',
				label: 'Clients with HTTP transport',
				code: `{
  "mcpServers": {
    "eddi": {
      "url": "http://localhost:7070/mcp"
    }
  }
}`,
			},
			{
				lang: 'json',
				label: 'stdio-only clients (for example claude_desktop_config.json)',
				code: `{
  "mcpServers": {
    "eddi": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "http://localhost:7070/mcp"]
    }
  }
}`,
			},
		],
		docs: [doc.mcpServer, doc.security],
		guides: [guide.openapi],
		related: ['mcp-client', 'a2a', 'openapi'],
	},
	{
		slug: 'mcp-client',
		name: 'MCP Client',
		category: 'protocols',
		tag: 'mcpcalls',
		keywords: ['model context protocol', 'external tools', 'sidecar', 'stdio', 'bridge', 'tool approval'],
		snippets: [
			{
				lang: 'json',
				label: 'mcpcalls configuration',
				code: `{
  "mcpServerUrl": "https://mcp.example.com/mcp",
  "name": "example",
  "transport": "http",
  "apiKey": "\${vault:example-mcp-token}",
  "timeoutMs": 30000
}`,
			},
			toolApprovals(['mcp:*'], ['mcp:read_*']),
		],
		docs: [doc.mcpClient, doc.hitl],
		guides: [guide.openapi],
		related: ['mcp-server', 'a2a', 'secrets-vault'],
	},
	{
		slug: 'a2a',
		name: 'A2A',
		category: 'protocols',
		tag: 'JSON-RPC 2.0',
		keywords: ['agent to agent', 'agent card', 'peer', 'remote agents', 'multi-agent'],
		snippets: [
			{
				lang: 'json',
				label: 'Expose an agent (agent configuration)',
				code: `{
  "a2aEnabled": true,
  "description": "Customer support agent specializing in order tracking",
  "a2aSkills": ["order-tracking", "refund-processing"]
}`,
			},
			{
				lang: 'json',
				label: 'Consume a remote agent (LLM task)',
				code: `{
  "systemMessage": "You are an orchestrator agent...",
  "a2aAgents": [
    {
      "url": "https://remote-eddi.example.com/a2a/agents/support-agent",
      "name": "support-agent",
      "apiKey": "\${vault:remote-agent-key}",
      "timeoutMs": 30000,
      "skillsFilter": ["order-tracking"]
    }
  ]
}`,
			},
		],
		docs: [doc.a2a, doc.security],
		guides: [],
		related: ['mcp-server', 'mcp-client', 'keycloak-oidc'],
	},

	// ─── Enterprise systems ─────────────────────────────────────
	{
		slug: 'openapi',
		name: 'OpenAPI',
		category: 'enterprise',
		tag: 'OpenAPI 3.0 / 3.1',
		keywords: ['rest', 'swagger', 'api agent', 'httpcall', 'tools', 'create_api_agent', 'crm', 'erp'],
		snippets: [
			{
				lang: 'json',
				label: 'httpCalls configuration (the model the generated tools use)',
				code: `{
  "targetServerUrl": "https://api.example.com/v1",
  "httpCalls": [
    {
      "name": "list-open-orders",
      "saveResponse": true,
      "responseObjectName": "order",
      "request": {
        "method": "GET",
        "path": "/orders",
        "queryParams": { "status": "open" },
        "headers": { "Authorization": "Bearer \${vault:orders-api-token}" }
      }
    }
  ]
}`,
			},
			toolApprovals(HTTP_WRITES, ['http.get:*']),
		],
		docs: [doc.httpcalls, doc.mcpServer, doc.hitl],
		guides: [guide.openapi],
		related: ['sap', 'mcp-client', 'secrets-vault'],
		solutionsCta: true,
	},
	{
		slug: 'sap',
		name: 'SAP',
		category: 'enterprise',
		tag: 'OData / REST',
		keywords: ['erp', 's/4hana', 'odata', 'enterprise', 'integration', 'sales order', 'bapi'],
		snippets: [
			{
				lang: 'json',
				label: 'httpCalls configuration: read from an SAP OData service (example)',
				code: `{
  "targetServerUrl": "https://sap.example.com/sap/opu/odata/sap/API_SALES_ORDER_SRV",
  "httpCalls": [
    {
      "name": "list-sales-orders",
      "saveResponse": true,
      "responseObjectName": "salesOrders",
      "request": {
        "method": "GET",
        "path": "/A_SalesOrder",
        "queryParams": { "$top": "10", "$format": "json" },
        "headers": { "Authorization": "Bearer \${vault:sap-api-token}" }
      }
    }
  ]
}`,
			},
			toolApprovals(HTTP_WRITES, ['http.get:*']),
		],
		docs: [doc.httpcalls, doc.mcpClient, doc.hitl, doc.audit],
		guides: [guide.openapi],
		related: ['openapi', 'mcp-client', 'secrets-vault'],
		solutionsCta: true,
	},

	// ─── Data & RAG ─────────────────────────────────────────────
	{
		slug: 'chroma',
		name: 'Chroma',
		category: 'data',
		tag: 'storeType: chroma',
		keywords: ['vector store', 'rag', 'embeddings', 'knowledge base', 'retrieval'],
		snippets: [ragConfig('chroma', { baseUrl: 'http://localhost:8000', collectionName: 'product-docs' }), ragBinding],
		docs: [doc.rag, doc.langchain],
		guides: [guide.chroma],
		related: ['pgvector', 'qdrant', 'ollama'],
	},
	{
		slug: 'pgvector',
		name: 'pgvector',
		category: 'data',
		tag: 'storeType: pgvector',
		keywords: ['postgresql', 'postgres', 'vector store', 'rag', 'embeddings', 'knowledge base'],
		snippets: [
			ragConfig('pgvector', {
				host: 'localhost',
				port: 5432,
				database: 'eddi',
				user: 'eddi',
				password: '${vault:pg-password}',
				table: 'product_docs',
				dimension: 1536,
			}),
			ragBinding,
		],
		docs: [doc.rag, doc.langchain],
		guides: [guide.chroma],
		related: ['chroma', 'elasticsearch', 'mongodb-atlas-vector-search'],
	},
	{
		slug: 'qdrant',
		name: 'Qdrant',
		category: 'data',
		tag: 'storeType: qdrant',
		keywords: ['vector store', 'rag', 'embeddings', 'knowledge base', 'retrieval'],
		snippets: [ragConfig('qdrant', { host: 'localhost', port: 6334, collectionName: 'product-docs', useTls: false }), ragBinding],
		docs: [doc.rag, doc.langchain],
		guides: [guide.chroma],
		related: ['chroma', 'pgvector', 'elasticsearch'],
	},
	{
		slug: 'elasticsearch',
		name: 'Elasticsearch',
		category: 'data',
		tag: 'storeType: elasticsearch',
		keywords: ['elastic', 'opensearch', 'vector store', 'rag', 'embeddings', 'knowledge base', 'search'],
		snippets: [ragConfig('elasticsearch', { serverUrl: 'localhost:9200', indexName: 'product-docs' }), ragBinding],
		docs: [doc.rag, doc.langchain],
		guides: [guide.chroma],
		related: ['pgvector', 'qdrant', 'mongodb-atlas-vector-search'],
	},
	{
		slug: 'mongodb-atlas-vector-search',
		name: 'MongoDB Atlas Vector Search',
		category: 'data',
		tag: 'storeType: mongodb-atlas',
		keywords: ['mongodb', 'atlas', 'vector store', 'rag', 'embeddings', 'knowledge base'],
		snippets: [
			ragConfig('mongodb-atlas', {
				connectionString: '${vault:atlas-connection-string}',
				databaseName: 'eddi',
				collectionName: 'product_docs',
				indexName: 'vector_index',
			}),
			ragBinding,
		],
		docs: [doc.rag, doc.langchain],
		guides: [guide.chroma],
		related: ['pgvector', 'elasticsearch', 'chroma'],
	},

	// ─── Infrastructure ─────────────────────────────────────────
	{
		slug: 'kubernetes-helm',
		name: 'Kubernetes and Helm',
		category: 'infrastructure',
		tag: 'k8s / Helm / Kustomize',
		keywords: ['k8s', 'kubectl', 'helm chart', 'kustomize', 'ingress', 'cluster', 'external secrets', 'deployment'],
		snippets: [
			{
				lang: 'bash',
				label: 'Quickstart manifest (EDDI + MongoDB)',
				code: `kubectl apply -f https://raw.githubusercontent.com/labsai/EDDI/main/k8s/quickstart.yaml`,
			},
			{
				lang: 'bash',
				label: 'Helm',
				code: `helm install eddi ./helm/eddi \\
  --set eddi.vaultMasterKey="$(openssl rand -base64 24)" \\
  --namespace eddi --create-namespace`,
			},
			{
				lang: 'bash',
				label: 'Helm: PostgreSQL instead of MongoDB',
				code: `--set postgres.enabled=true --set mongodb.enabled=false --set eddi.datastoreType=postgres`,
			},
		],
		docs: [doc.kubernetes, doc.secrets],
		guides: [guide.kubernetes, guide.keycloak],
		related: ['openshift', 'secrets-vault', 'keycloak-oidc'],
		solutionsCta: true,
	},
	{
		slug: 'openshift',
		name: 'Red Hat OpenShift',
		category: 'infrastructure',
		tag: 'UBI 10 / Operator',
		keywords: ['red hat', 'rhel', 'operatorhub', 'operator', 'ubi', 'certified', 'ocp'],
		snippets: [
			{
				lang: 'yaml',
				label: 'Eddi custom resource (OperatorHub operator)',
				code: `apiVersion: labs.ai/v1alpha1
kind: Eddi
metadata:
  name: eddi
spec:
  size: 1
  mongodb:
    environment: prod
    storageclass_name: managed-nfs-storage
    storage_size: 20G`,
			},
		],
		docs: [doc.openshift, doc.kubernetes],
		guides: [guide.kubernetes],
		related: ['kubernetes-helm', 'secrets-vault', 'keycloak-oidc'],
		solutionsCta: true,
	},
	{
		slug: 'ollama',
		name: 'Ollama',
		category: 'infrastructure',
		tag: 'type: ollama',
		keywords: ['local models', 'on-premises', 'air-gapped', 'jlama', 'self-hosted', 'llm', 'gpu'],
		snippets: [
			{
				lang: 'bash',
				label: 'Start EDDI with Ollama on the same network',
				code: `docker compose -f docker-compose.yml -f docker-compose.ollama.yml up -d`,
			},
			{
				lang: 'json',
				label: 'langchain.json',
				code: `{
  "tasks": [
    {
      "actions": ["send_message"],
      "id": "ollamaChat",
      "type": "ollama",
      "description": "Ollama local model chat",
      "parameters": {
        "baseUrl": "http://ollama:11434",
        "model": "llama3.2:3b",
        "timeout": "120000",
        "think": "false",
        "systemMessage": "You are a helpful assistant",
        "addToOutput": "true"
      }
    }
  ]
}`,
			},
		],
		docs: [doc.langchain],
		guides: [],
		related: ['chroma', 'kubernetes-helm', 'open-webui'],
		modelsLink: true,
		solutionsCta: true,
	},
];

export const INTEGRATION_BY_SLUG: Record<string, Integration> = Object.fromEntries(INTEGRATIONS.map((i) => [i.slug, i]));
