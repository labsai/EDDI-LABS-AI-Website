/**
 * Head-to-head comparison pages (English only).
 *
 * Deliberately NOT in src/i18n/locales: TranslationSchema is `typeof en`, so
 * adding these there would force all 10 non-English locale files to implement
 * the same shape. Comparison intent ("eddi vs n8n") is overwhelmingly
 * English-language search, so these pages ship untranslated and the routes
 * that render them pass `localized={false}`.
 *
 * Editorial rule: every page states plainly where the alternative is the
 * better choice. Balanced comparisons get cited by search engines and LLM
 * answer engines alike; one-sided ones get discounted.
 *
 * Stats come from src/i18n/stats.ts so `npm run check:stats` guards them.
 */
import { MCP_TOOLS, FRAMEWORKS, LLM_PROVIDERS, TESTS } from '../i18n/stats';

export interface ComparisonRow {
	dimension: string;
	them: string;
	eddi: string;
}

export interface MigrationStep {
	from: string;
	to: string;
}

export interface Comparison {
	/** URL segment under /compare/ */
	slug: string;
	competitor: string;
	title: string;
	description: string;
	/** Short answer, rendered first. Written to be quotable on its own. */
	verdict: string;
	whatItIsTitle: string;
	whatItIs: string;
	archetypeTitle: string;
	archetype: string;
	tableTitle: string;
	tableHeaders: { dimension: string; them: string; eddi: string };
	rows: ComparisonRow[];
	betterThemTitle: string;
	betterThem: string[];
	betterEddiTitle: string;
	betterEddi: string[];
	migrationTitle: string;
	migrationIntro: string;
	migrationSteps: MigrationStep[];
	/** Full migration playbook under /guides/, when one exists. */
	migrationGuide?: { label: string; href: string };
	faq: { question: string; answer: string }[];
}

const EDDI_LICENSE = 'Apache 2.0, OSI approved';

export const COMPARISONS: Comparison[] = [
	// ─── n8n ──────────────────────────────────────────────────────────
	{
		slug: 'eddi-vs-n8n',
		competitor: 'n8n',
		title: 'EDDI vs. n8n',
		description:
			'How EDDI compares with n8n for AI agent orchestration: runtime and concurrency model, code execution and security posture, licensing, governance, and when n8n remains the better tool.',
		verdict:
			'<strong>Pick n8n</strong> when the job is connecting SaaS systems and automating business processes, and AI is one step inside a larger workflow. <strong>Pick EDDI</strong> when the AI agent <em>is</em> the product and it has to survive an enterprise security review: regulated data, audit obligations, per-tenant isolation, and approval gates on what the agent is allowed to do.',
		whatItIsTitle: 'What n8n is',
		whatItIs:
			'n8n is a workflow automation platform built on Node.js, with a visual canvas and hundreds of prebuilt integrations. It can be self-hosted, it has a large and genuinely active community, and its LangChain based nodes let you drop LLM calls into any workflow. It is one of the fastest ways to wire systems together.',
		archetypeTitle: 'Different category, overlapping use case',
		archetype:
			'These tools are not the same archetype. n8n is a <strong>workflow automation platform</strong> where AI is one node type among many. EDDI is <strong>AI orchestration middleware</strong> where the agent, its memory, its tools, and its governance are the product. The overlap is real, teams do build agents in n8n, but the two make opposite trade-offs once an agent handles regulated data.',
		tableTitle: 'Architecture and governance',
		tableHeaders: { dimension: 'Dimension', them: 'n8n', eddi: 'EDDI' },
		rows: [
			{
				dimension: 'Runtime',
				them: 'Node.js single-threaded event loop',
				eddi: 'JVM with virtual threads (Project Loom), true parallelism for I/O-bound LLM calls',
			},
			{
				dimension: 'Custom logic',
				them: 'Code nodes execute JavaScript or Python at runtime',
				eddi: 'Zero runtime code evaluation, agent behavior is declarative JSON only',
			},
			{
				dimension: 'License',
				them: 'Sustainable Use License (fair-code), not OSI approved; separate terms for some commercial uses',
				eddi: EDDI_LICENSE,
			},
			{
				dimension: 'Integration breadth',
				them: 'Hundreds of prebuilt SaaS connectors, its strongest asset',
				eddi: `${MCP_TOOLS} MCP tools plus any OpenAPI or REST endpoint via httpCall`,
			},
			{
				dimension: 'Authentication',
				them: 'Built-in user management; SSO on paid tiers',
				eddi: 'OIDC/Keycloak with RBAC (admin, editor, viewer) in the open-source build',
			},
			{
				dimension: 'Audit trail',
				them: 'Execution history and application logs',
				eddi: 'HMAC-SHA256 immutable cryptographic audit ledger',
			},
			{
				dimension: 'Human approval',
				them: 'Wait nodes and manual triggers inside a workflow',
				eddi: 'Turn-level pause, per-tool-call sign-off, timeout policies, Slack approvals, all logged',
			},
			{
				dimension: 'Compliance posture',
				them: 'Implemented per deployment',
				eddi: `GDPR, HIPAA, and EU AI Act infrastructure built in, ${FRAMEWORKS} frameworks addressed`,
			},
		],
		betterThemTitle: 'Where n8n is the better choice',
		betterThem: [
			'The workload is general business automation rather than AI: syncing CRMs, moving files, reacting to webhooks.',
			'You need breadth of SaaS connectors more than depth of agent governance. n8n wins this outright.',
			'A non-engineering team owns the workflows and needs a visual canvas to reason about them.',
			'You want something running this afternoon and the data involved is not regulated.',
		],
		betterEddiTitle: 'Where EDDI is the better choice',
		betterEddi: [
			'The agent touches regulated data and a security review will ask what code runs at inference time. EDDI answers: none.',
			'You need per-tenant isolation, quotas, and cost attribution across many customers on one deployment.',
			'A human has to approve individual tool calls before they execute, with the approval recorded immutably.',
			'Agent behavior must be version-controlled, diffed, and promoted between environments as configuration.',
			`Licensing has to be unambiguous for redistribution or air-gapped deployment: ${EDDI_LICENSE}.`,
		],
		migrationTitle: 'Moving a workflow from n8n',
		migrationIntro:
			'Most agent-shaped n8n workflows map cleanly. The parts that do not are usually Code nodes, which is rather the point: what they do has to become either configuration or a declared tool.',
		migrationSteps: [
			{ from: 'Workflow', to: 'EDDI package: a versioned bundle of pipeline, prompts, and tool bindings' },
			{ from: 'HTTP Request node', to: 'httpCall tool definition, with SSRF protection and path traversal guards applied' },
			{ from: 'Code node', to: 'Behavior rules and prompt snippets, or an MCP tool if it needs real logic' },
			{ from: 'Credentials store', to: 'EDDI Secrets Vault (AES-256-GCM), referenced by vault key' },
			{ from: 'AI Agent node', to: 'EDDI agent with persistent memory, intent routing, and model cascading' },
			{ from: 'Wait or manual trigger', to: 'Human-in-the-loop approval gate with a timeout policy' },
		],
		migrationGuide: {
			label: 'Full playbook: migrate an AI workflow from n8n to EDDI',
			href: '/guides/migrate-from-n8n/',
		},
		faq: [
			{
				question: 'Is EDDI a drop-in replacement for n8n?',
				answer:
					'No, and it is not trying to be. n8n covers general workflow automation across hundreds of SaaS tools. EDDI covers AI agent orchestration with enterprise governance. Teams commonly run both: n8n for business process plumbing, EDDI for the agents that need audit trails and approval gates.',
			},
			{
				question: 'Can EDDI call n8n, or the other way round?',
				answer:
					'Both. EDDI exposes an MCP server and a REST API, so an n8n workflow can invoke an EDDI agent as a step. EDDI can call an n8n webhook through its httpCall tool. Using each for what it is good at is a reasonable architecture.',
			},
			{
				question: 'Why does runtime code execution matter so much?',
				answer:
					'A Code node is arbitrary code running inside your automation platform. That is convenient, and it is also an entire class of vulnerability: sandbox escapes, injection through untrusted input, and privilege escalation all start there. EDDI forbids runtime code evaluation categorically, so agent behavior is JSON configuration that can be reviewed, diffed, and approved before it ships.',
			},
			{
				question: 'Is n8n open source?',
				answer:
					'n8n is fair-code, distributed under the Sustainable Use License. The source is available and self-hosting is permitted for internal use, but it is not an OSI-approved open-source license and some commercial uses require separate terms. EDDI is Apache 2.0. If your legal team needs an unambiguous answer on redistribution, that difference matters.',
			},
		],
	},

	// ─── Flowise ──────────────────────────────────────────────────────
	{
		slug: 'eddi-vs-flowise',
		competitor: 'Flowise',
		title: 'EDDI vs. Flowise',
		description:
			'How EDDI compares with Flowise for building and operating LLM agents: prototyping speed versus production governance, RAG architecture, multi-tenancy, and when Flowise is the right tool.',
		verdict:
			'<strong>Pick Flowise</strong> to get a working RAG chatbot in front of stakeholders this week. <strong>Pick EDDI</strong> when that prototype has to become a system several teams operate, a compliance officer signs off on, and a customer depends on.',
		whatItIsTitle: 'What Flowise is',
		whatItIs:
			'Flowise is an Apache 2.0 licensed visual builder for LLM applications, built on Node.js and React and wrapping LangChain and LlamaIndex. You assemble chatflows by dragging nodes: a loader, a splitter, an embedding model, a vector store, a chain. For getting from nothing to a working retrieval chatbot, very little is faster.',
		archetypeTitle: 'Prototype velocity versus operating surface',
		archetype:
			'Flowise and EDDI are aimed at different points in a project. Flowise optimizes the first week: visual assembly, immediate feedback, a template for most common patterns. EDDI optimizes everything after that: who may change the agent, what it is allowed to do, what happens when it restarts, and how you prove any of it to an auditor. Many teams genuinely should start in Flowise.',
		tableTitle: 'Prototype to production',
		tableHeaders: { dimension: 'Dimension', them: 'Flowise', eddi: 'EDDI' },
		rows: [
			{
				dimension: 'Primary abstraction',
				them: 'Visual chatflow canvas, node graph serialized to JSON',
				eddi: 'Config-as-code: JSON resources authored in a UI or API, versioned like source',
			},
			{
				dimension: 'Runtime',
				them: 'Node.js event loop',
				eddi: 'JVM with virtual threads, built for many concurrent I/O-bound conversations',
			},
			{
				dimension: 'License',
				them: 'Apache 2.0, the same as EDDI',
				eddi: EDDI_LICENSE,
			},
			{
				dimension: 'RAG',
				them: 'Broad loader and vector store selection, configured per flow',
				eddi: '8 embedding providers, 6 vector stores, plus zero-infrastructure httpCall RAG',
			},
			{
				dimension: 'Custom logic',
				them: 'Custom Function and Tool nodes execute JavaScript at runtime',
				eddi: 'Zero runtime code evaluation; logic is declared, not executed',
			},
			{
				dimension: 'Multi-tenancy',
				them: 'Workspaces on the enterprise edition',
				eddi: 'Per-tenant quotas, cost attribution, and data isolation in the open-source build',
			},
			{
				dimension: 'Memory',
				them: 'Conversation buffers and external store integrations',
				eddi: 'Persistent user memory, dream consolidation, rolling summaries, token-aware windowing',
			},
			{
				dimension: 'Audit trail',
				them: 'Execution traces, aimed at debugging',
				eddi: 'HMAC-SHA256 immutable ledger, aimed at evidence',
			},
			{
				dimension: 'Deployment',
				them: 'Docker, typically a single instance',
				eddi: 'Docker, Helm, a Kubernetes Operator, and a Red Hat Certified container',
			},
		],
		betterThemTitle: 'Where Flowise is the better choice',
		betterThem: [
			'You are validating whether an idea works at all. Visual assembly beats configuration authoring for exploration.',
			'The team thinks in diagrams and wants to see the retrieval pipeline laid out spatially.',
			'It is an internal tool for one team, with no tenancy, audit, or approval requirements.',
			'You want to try five retrieval strategies before lunch.',
		],
		betterEddiTitle: 'Where EDDI is the better choice',
		betterEddi: [
			'The chatbot became a product and now needs SLAs, tenancy, and someone accountable for changes.',
			'Prompt engineers must iterate without a redeploy, while operations keeps control of what ships.',
			'Conversations must survive restarts and be reconstructable months later for a regulator.',
			'A human must approve specific tool calls before the agent acts on them.',
			`The deployment target is Kubernetes or air-gapped infrastructure and has to be provably reproducible. ${TESTS} tests run on every merge.`,
		],
		migrationTitle: 'Moving a chatflow from Flowise',
		migrationIntro:
			'Flowise chatflows are already JSON and the concepts line up closely, so this is usually the most mechanical of the migrations.',
		migrationSteps: [
			{ from: 'Chatflow', to: 'EDDI package, exportable as a ZIP with secrets automatically scrubbed' },
			{ from: 'Document loaders and splitters', to: 'EDDI RAG document ingestion configuration' },
			{ from: 'Vector store node', to: 'One of 6 supported vector stores, selected by configuration' },
			{ from: 'Embedding node', to: 'One of 8 embedding providers' },
			{ from: 'Chat model node', to: `LLM configuration across ${LLM_PROVIDERS} providers, with model cascading available` },
			{ from: 'Custom Function node', to: 'Behavior rules, prompt snippets, or a declared MCP tool' },
			{ from: 'Memory node', to: 'EDDI persistent memory with commit-flag memory policy' },
		],
		migrationGuide: {
			label: 'Full playbook: migrate a chatflow from Flowise to EDDI',
			href: '/guides/migrate-from-flowise/',
		},
		faq: [
			{
				question: 'Should we prototype in Flowise and then move to EDDI?',
				answer:
					'That is a defensible path and a common one. Flowise answers whether a retrieval strategy works; EDDI answers whether you can operate it safely for three years. Plan the move before the prototype has production users attached, because the migration is easier than the conversation about downtime.',
			},
			{
				question: 'Both are Apache 2.0. What actually differs?',
				answer:
					'The license is the same; the operating surface is not. EDDI ships OIDC/Keycloak RBAC, an immutable audit ledger, per-tenant quotas, human-in-the-loop approval gating, and a Kubernetes Operator in the open-source build rather than behind an enterprise tier.',
			},
			{
				question: 'Does EDDI have a visual builder?',
				answer:
					'EDDI Manager is a production React UI for building, deploying, and monitoring agents, available in 11 languages. It is a management interface rather than a node canvas: you configure agents, prompts, tools, and pipelines, and every change is a versioned resource rather than a diagram.',
			},
		],
	},

	// ─── Rasa ─────────────────────────────────────────────────────────
	{
		slug: 'eddi-vs-rasa',
		competitor: 'Rasa',
		title: 'EDDI vs. Rasa',
		description:
			'How EDDI compares with Rasa for conversational AI: trained NLU and deterministic dialogue versus LLM orchestration, config-as-code, multi-agent collaboration, and when Rasa is the better fit.',
		verdict:
			'<strong>Pick Rasa</strong> when you need tightly controlled dialogue over a fixed intent set, you have labeled training data, and a Python ML team to own it. <strong>Pick EDDI</strong> when the assistant must reason over knowledge that changes faster than a retraining cycle, call enterprise systems, and be governed by configuration rather than retrained.',
		whatItIsTitle: 'What Rasa is',
		whatItIs:
			'Rasa is a mature conversational AI framework: intent classification and entity extraction through a trained NLU pipeline, plus dialogue management through rules, stories, and policies. It is Python-native, self-hostable, and has been the default answer for high-volume scripted customer service assistants for years. Rasa Pro adds commercial tiers, including LLM-driven dialogue.',
		archetypeTitle: 'Shared problem, different generation of solution',
		archetype:
			'EDDI and Rasa both come out of the conversational AI world, and EDDI has been in continuous development as a conversational platform since 2006. The difference is where the intelligence sits. Rasa puts it in a model you train on your own labeled data, which gives precise, repeatable control. EDDI puts it in orchestrated LLMs governed by declarative configuration, trading some determinism for reach and speed of change.',
		tableTitle: 'Dialogue, tooling, and the cost of change',
		tableHeaders: { dimension: 'Dimension', them: 'Rasa', eddi: 'EDDI' },
		rows: [
			{
				dimension: 'Understanding',
				them: 'Trained NLU: intent classification and entity extraction from labeled data',
				eddi: 'LLM comprehension plus intent-based agent discovery and routing',
			},
			{
				dimension: 'Changing behavior',
				them: 'Update training data, retrain, evaluate, redeploy',
				eddi: 'Edit JSON configuration; no retraining and no redeployment',
			},
			{
				dimension: 'Determinism',
				them: 'High. Rules and policies make flows repeatable and testable',
				eddi: 'Lower by nature, recovered through behavior rules and approval gates',
			},
			{
				dimension: 'Language',
				them: 'Python; custom actions are Python code',
				eddi: 'JVM runtime; agent logic is configuration, tools are declared',
			},
			{
				dimension: 'Tool ecosystem',
				them: 'A custom action server you build and host',
				eddi: `${MCP_TOOLS} MCP tools, 12 built-in agent tools, plus any OpenAPI endpoint`,
			},
			{
				dimension: 'Multi-agent',
				them: 'One assistant per deployment is the common pattern',
				eddi: 'Coordinator-based orchestration and 7 group discussion styles',
			},
			{
				dimension: 'Licensing',
				them: 'Community edition plus commercially licensed Rasa Pro tiers; verify current terms',
				eddi: EDDI_LICENSE,
			},
			{
				dimension: 'Compliance',
				them: 'Self-hosting supports data residency; frameworks implemented per deployment',
				eddi: `Audit ledger, data subject rights API, and ${FRAMEWORKS} frameworks addressed in the platform`,
			},
		],
		betterThemTitle: 'Where Rasa is the better choice',
		betterThem: [
			'You already have labeled conversational data and an ML team who can maintain an NLU pipeline.',
			'Regulatory or brand constraints require a deterministic assistant with an auditable decision path that does not involve a language model.',
			'Very high volume over a narrow intent set, where per-turn LLM cost would dominate.',
			'You need fine-grained control over classification confidence thresholds and fallback behavior.',
		],
		betterEddiTitle: 'Where EDDI is the better choice',
		betterEddi: [
			'The assistant must answer from documents and systems that change faster than a retraining cycle.',
			'Business users need to change behavior without an ML engineer, a training run, or a deployment.',
			'The problem needs several specialized agents to collaborate rather than one flat intent tree.',
			'You want LLM flexibility, but a compliance officer requires approval gates and immutable logs before it goes live.',
			`You want to avoid lock-in at the model layer: ${LLM_PROVIDERS} providers, or a local model through Ollama or Jlama.`,
		],
		migrationTitle: 'Moving an assistant from Rasa',
		migrationIntro:
			'The mapping is conceptual rather than mechanical, because the two locate intelligence in different places. Expect to translate intent structure into routing and prompts rather than to convert files.',
		migrationSteps: [
			{ from: 'Intents and training examples', to: 'Intent-based agent discovery; the labeled data becomes evaluation material rather than training input' },
			{ from: 'Entities and slots', to: 'Structured extraction plus persistent user memory' },
			{ from: 'Stories and rules', to: 'Behavior rules and pipeline configuration' },
			{ from: 'Custom action server', to: 'MCP tools or httpCall tool definitions' },
			{ from: 'Responses and domain file', to: 'Prompt snippets, reusable and versioned' },
			{ from: 'Fallback policy', to: 'Human-in-the-loop escalation with a timeout policy' },
		],
		faq: [
			{
				question: 'Is EDDI just another LLM wrapper replacing trained NLU?',
				answer:
					'EDDI has been developed as a conversational platform since 2006, well before the current LLM generation, and it kept the parts that mattered: intent-based routing, managed conversation state, and pipeline architecture. LLMs replaced the comprehension layer, not the orchestration around it.',
			},
			{
				question: 'We need deterministic answers for compliance. Does that rule out EDDI?',
				answer:
					'Not necessarily, but the trade should be explicit. LLM output is not deterministic. EDDI addresses this with behavior rules that constrain responses, human approval gates on consequential actions, and an immutable audit ledger recording what was decided and why. If your requirement is that no language model participates in the decision at all, Rasa is the better answer.',
			},
			{
				question: 'Can we run both during a transition?',
				answer:
					'Yes. A common pattern routes known high-volume intents to the existing Rasa assistant while EDDI handles open-ended queries and system integration, then shifts traffic as confidence grows. EDDI can call a Rasa endpoint through httpCall.',
			},
		],
	},

	// ─── LangChain ────────────────────────────────────────────────────
	{
		slug: 'eddi-vs-langchain',
		competitor: 'LangChain',
		title: 'EDDI vs. LangChain',
		description:
			'How EDDI compares with LangChain and LangGraph: library versus deployable platform, the Day 2 operations gap, observability, and when writing the orchestration yourself is the right call.',
		verdict:
			'<strong>Pick LangChain</strong> when the orchestration logic is the differentiated part of your product and you want it in code, under review, in your repository. <strong>Pick EDDI</strong> when the orchestration is undifferentiated infrastructure you would rather deploy than maintain.',
		whatItIsTitle: 'What LangChain is',
		whatItIs:
			'LangChain is an MIT licensed Python and JavaScript framework for building LLM applications, with LangGraph for stateful agent graphs and LangSmith as a commercial observability product. Its integration surface is the widest in the ecosystem, and its documentation is where most engineers meet these concepts for the first time.',
		archetypeTitle: 'This is a library versus platform question',
		archetype:
			'EDDI is not a competing framework. EDDI uses <a href="https://docs.langchain4j.dev/" target="_blank" rel="noopener">LangChain4j</a>, the Java sibling of LangChain, internally. The real question is not which abstraction is better, it is who builds and owns everything that surrounds it: the REST layer, authentication, tenancy, state, audit, and the interface non-developers use.',
		tableTitle: 'What you build versus what you deploy',
		tableHeaders: { dimension: 'Dimension', them: 'LangChain / LangGraph', eddi: 'EDDI' },
		rows: [
			{ dimension: 'Form factor', them: 'A library imported into your application', eddi: 'Deployable middleware; runs wherever Docker runs' },
			{ dimension: 'Orchestration logic', them: 'Python or TypeScript in your repository', eddi: 'JSON configuration, changed without redeployment' },
			{ dimension: 'REST API and routing', them: 'You build it', eddi: 'Included, plus OpenAPI 3.1, A2A protocol, and SSE streaming' },
			{ dimension: 'Authentication and RBAC', them: 'You build it', eddi: 'OIDC/Keycloak with admin, editor, and viewer roles' },
			{ dimension: 'Non-developer interface', them: 'You build it', eddi: 'EDDI Manager, a production React UI in 11 languages' },
			{ dimension: 'Secret management', them: 'You build it, or bring a vault', eddi: 'Built-in AES-256-GCM Secrets Vault with rotation' },
			{ dimension: 'Observability', them: 'LangSmith (commercial) or your own instrumentation', eddi: 'Prometheus metrics and auto-provisioned Grafana dashboards' },
			{ dimension: 'Audit and compliance', them: 'You build it', eddi: `Immutable HMAC-SHA256 ledger, data subject rights API, ${FRAMEWORKS} frameworks` },
			{ dimension: 'Iteration loop', them: 'Change code, review, test, deploy', eddi: 'Change configuration in the UI or API; effective immediately' },
			{ dimension: 'Ceiling on control', them: 'None. Anything expressible in code is available', eddi: 'Bounded by what configuration can express, by design' },
		],
		betterThemTitle: 'Where LangChain is the better choice',
		betterThem: [
			'The orchestration itself is your competitive advantage and belongs in your codebase, not in a config store.',
			'You need control flow that declarative configuration cannot express: custom graph topologies, bespoke retry semantics, unusual state machines.',
			'You are a Python shop and want the agent to live inside an existing service rather than beside it.',
			'You need a brand-new integration the week it appears. LangChain moves faster than any platform can.',
			'The team is one or two engineers, with no compliance officer, no tenancy requirement, and no non-developer who needs access.',
		],
		betterEddiTitle: 'Where EDDI is the better choice',
		betterEddi: [
			'You recognise the Day 2 operations list as work your team is doing instead of shipping product.',
			'Prompt engineers and operations staff need to change agent behavior without a pull request.',
			'Several teams or customers share one deployment and need isolation, quotas, and cost attribution.',
			'Procurement wants an answer on audit trails, data residency, and framework coverage before anything ships.',
			'You want the orchestration layer to be a dependency you upgrade, not a codebase you maintain.',
		],
		migrationTitle: 'Moving an application from LangChain',
		migrationIntro:
			'The logic usually survives; the surrounding infrastructure is what you stop maintaining. Work outward from the chain definition.',
		migrationSteps: [
			{ from: 'Chain or LangGraph graph', to: 'EDDI pipeline configuration' },
			{ from: 'Tools and function calling', to: 'MCP tool definitions or httpCall declarations' },
			{ from: 'Memory classes', to: 'Persistent user memory, rolling summaries, and dream consolidation' },
			{ from: 'Retriever and vector store setup', to: 'RAG configuration across 8 embedding providers and 6 vector stores' },
			{ from: 'Prompt templates', to: 'Versioned prompt snippets, referenced by name' },
			{ from: 'FastAPI wrapper', to: 'Built-in REST API, OpenAPI 3.1, and SSE streaming' },
			{ from: 'LangSmith tracing', to: 'Prometheus metrics, Grafana dashboards, and the immutable audit ledger' },
		],
		faq: [
			{
				question: 'Does EDDI use LangChain?',
				answer:
					'EDDI uses LangChain4j, the Java implementation, internally. This is not a competing abstraction. EDDI is the deployable platform built around that kind of library, providing the API layer, authentication, state management, management UI, and compliance infrastructure that a library deliberately leaves to you.',
			},
			{
				question: 'What is the Day 2 operations gap?',
				answer:
					'Day 1 is getting an agent to respond correctly, which a library handles well. Day 2 is everything after: authentication, multi-tenancy, conversation state across restarts, audit logging, secret rotation, horizontal scaling, cost tracking, and an interface for people who do not write Python. Teams routinely spend more time on Day 2 than on the agent itself.',
			},
			{
				question: 'Is configuration less powerful than code?',
				answer:
					'Yes, and that trade is deliberate. Configuration cannot express everything code can. In exchange you get changes without redeployment, behavior that non-engineers can review, and no runtime code execution to defend in a security review. If you need the ceiling that code provides, use the library.',
			},
			{
				question: 'Can we keep LangChain and still use EDDI?',
				answer:
					'Yes. EDDI exposes an MCP server and a REST API, so a LangChain application can call EDDI agents as tools, and EDDI can call your LangChain service through httpCall. Splitting along the line of what is differentiated versus what is infrastructure is a reasonable design.',
			},
		],
	},
];

/** Look up a comparison by slug. */
export function getComparison(slug: string): Comparison | undefined {
	return COMPARISONS.find((c) => c.slug === slug);
}
