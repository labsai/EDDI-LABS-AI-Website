/**
 * English translations — Source of truth.
 * All other locale files must export the same shape.
 */
import { EDDI_VERSION } from '../version';

const en = {
	// ─── Site Meta ──────────────────────────────────────────────
	meta: {
		siteTitle: 'EDDI',
		siteDescription:
			`EDDI ${EDDI_VERSION} — The Enterprise AI Orchestrator. Configuration-driven, self-hosted AI agent platform with visual management, security-first architecture, and built-in compliance.`,
	},

	// ─── Navigation ─────────────────────────────────────────────
	nav: {
		features: 'Features',
		docs: 'Docs',
		solutions: 'Solutions',
		getStarted: 'Get Started',
		// Features dropdown
		eddiManager: 'EDDI Manager',
		eddiManagerDesc: 'Visual agent management UI',
		mcpServer: 'MCP Server',
		mcpServerDesc: '42 tools for AI-native control',
		configAsCode: 'Config-as-Code',
		configAsCodeDesc: 'JSON config, zero boilerplate',
		securityFirst: 'Security-First',
		securityFirstDesc: 'Vault, audit trails, no eval()',
		performance: 'Performance',
		performanceDesc: 'Millions of concurrent threads',
		multiAgent: 'Multi-Agent',
		multiAgentDesc: 'Intent routing & discovery',
		observability: 'Observability',
		observabilityDesc: 'Pipeline logs & audit trails',
		codeQuality: 'Code Quality',
		codeQualityDesc: '2,000+ tests, zero failures',
		aiReady: 'AI-Ready',
		aiReadyDesc: 'Built for coding agents',
		memory: 'Memory & Context',
		memoryDesc: 'Persistent memory & dream consolidation',
		rag: 'RAG',
		ragDesc: '7 embedding providers, 5 vector stores',
		modelCascading: 'Model Cascading',
		modelCascadingDesc: 'Cost-optimized multi-model routing',
		scheduling: 'Scheduling',
		schedulingDesc: 'Heartbeats, cron & dream cycles',
		viewAllFeatures: 'View all features →',
		// Solutions dropdown
		whyEddi: 'Why EDDI?',
		whyEddiDesc: 'The self-hosted enterprise AI platform',
		vsAlternatives: 'vs. Alternatives',
		vsAlternativesDesc: 'Compare with Spring AI, Flowise, n8n',
		euAiAct: 'Compliance',
		euAiActDesc: 'GDPR, CCPA, PIPEDA & more',
		trackRecord: 'Track Record',
		trackRecordDesc: 'Institutional backing & real deployments',
		useCases: 'Use Cases',
		useCasesDesc: 'Real-world deployment patterns',
		// Mobile
		allFeatures: 'All Features',
		mcpServerMobile: 'MCP Server (42 Tools)',
		resources: 'Resources',
		documentation: 'Documentation ↗',
		github: 'GitHub ↗',
		// Theme
		switchToLightMode: 'Switch to Light Mode',
		switchToDarkMode: 'Switch to Dark Mode',
	},

	// ─── Common / Shared ────────────────────────────────────────
	common: {
		getStartedCta: 'Get Started →',
		viewOnGithub: 'View on GitHub ↗',
		// Announcement Banner
		bannerBadge: 'New',
		bannerText: `EDDI ${EDDI_VERSION} has been released!`,
		bannerLink: 'Read the story',
		// 404 Page
		notFoundTitle: 'Page Not Found',
		notFoundDesc: 'The AI orchestration route you are looking for has been disconnected or relocated.',
		notFoundCta: 'Return to System Core',
	},

	// ─── Footer ─────────────────────────────────────────────────
	footer: {
		tagline: 'The Enterprise AI Orchestrator',
		subtitle: 'Configuration-driven. Self-hosted. Production-ready.',
		// Trust bar
		redHatCertified: 'Red Hat Certified Container',
		apache2: 'Apache 2.0 Licensed',
		tests: '2,000+ Tests · Zero Failures',
		techStack: 'Java 25 · Quarkus · LangChain4j',
		// Column headers
		platform: 'Platform',
		develop: 'Develop',
		resourcesCol: 'Resources',
		// Platform links
		featuresOverview: 'Features Overview',
		mcpServer: 'MCP Server',
		configAsCode: 'Config-as-Code',
		securityFirst: 'Security-First',
		performanceLink: 'Performance',
		multiAgent: 'Multi-Agent',
		memoryLink: 'Memory & Context',
		ragLink: 'RAG',
		modelCascadingLink: 'Model Cascading',
		schedulingLink: 'Scheduling',
		// Develop links
		gettingStarted: 'Getting Started',
		documentation: 'Documentation ↗',
		githubLink: 'GitHub ↗',
		// Resources links
		whyEddi: 'Why EDDI?',
		vsAlternatives: 'vs. Alternatives',
		euAiAct: 'Compliance',
		trackRecord: 'Track Record',
		useCases: 'Use Cases',
		// Community column
		communityCol: 'Community',
		contributing: 'Contributing ↗',
		reportBug: 'Report a Bug ↗',
		securityPolicy: 'Security Policy ↗',
		codeOfConduct: 'Code of Conduct ↗',
		discussions: 'Discussions ↗',
		contactLink: 'Contact',
		// Bottom
		initiated: 'Initiated in Vienna. Developed with ❤️ in Europe. Made for the World.',
	},

	// ─── Newsletter ─────────────────────────────────────────────
	newsletter: {
		title: 'Stay in the Loop',
		description:
			'Get updates on new releases, features, and enterprise AI orchestration best practices. No spam — just signal.',
	},

	// ─── Homepage ───────────────────────────────────────────────
	home: {
		title: 'The Enterprise AI Orchestrator',
		heroTitle: 'The Enterprise',
		heroHighlight: 'AI Orchestrator',
		heroTagline:
			`Build, deploy, and manage AI agents — without writing code. Configuration-driven, self-hosted, and compliance-ready out of the box. Now available as <strong>${EDDI_VERSION}</strong>.`,
		// The Problem
		problemTitle: 'The Problem',
		problemDesc:
			'Enterprise AI orchestration is <strong>fragmented and painful</strong>. Teams are stuck in a broken lifecycle:',
		problemCard1Title: 'The Prototype Trap',
		problemCard1Desc:
			'Teams prototype with Flowise, n8n, or scripts — then <strong>rewrite everything from scratch</strong> for production. Visual prototypes are discarded entirely.',
		problemCard2Title: 'Boilerplate Fatigue',
		problemCard2Desc:
			'Using AI libraries means building REST controllers, auth layers, and state management <strong>from scratch</strong>. Every prompt tweak requires redeployment.',
		problemCard3Title: 'BPMN Friction',
		problemCard3Desc:
			'Forcing non-deterministic AI agents into deterministic Camunda/Temporal workflows creates <strong>severe impedance mismatches</strong> and brittle architectures.',
		// The Solution
		solutionTitle: 'The Solution',
		solutionDesc:
			'EDDI is a <strong>deployable AI orchestration platform</strong> — not a library. Visual management, config-as-code, and enterprise security, out of the box:',
		sol1Title: 'Configuration-as-Code',
		sol1Desc:
			'Agent logic, pipelines, and tool definitions are <strong>JSON configurations</strong> — not compiled code. Prompt engineers iterate instantly via the React UI or REST API, without redeployment.',
		sol2Title: '42 MCP Tools',
		sol2Desc:
			'EDDI exposes its capabilities via the <strong>Model Context Protocol</strong> — enabling Claude Desktop to interact. Agents can also <strong>consume external MCP tools</strong>.',
		sol3Title: 'Security-First',
		sol3Desc:
			'No <code>eval()</code>, no escapes. Vault integration, URL validation, and cryptographic audit trails are <strong>architectural foundations</strong>.',
		sol4Title: 'Observability',
		sol4Desc:
			'Every pipeline step is logged with an <strong>immutable audit trail</strong> — tokens, cost, timing, tool calls. Full CQRS telemetry ledger.',
		sol5Title: 'Enterprise Concurrency',
		sol5Desc:
			'Built on an enterprise-grade runtime with <strong>millions of lightweight threads</strong> for I/O-bound LLM workloads. No event loop blocking, no single-threaded bottlenecks.',
		sol6Title: 'Multi-Agent Orchestration',
		sol6Desc:
			'Intent-based agent discovery, managed conversations, agent triggers, and A/B routing. <strong>One conversation per intent+user</strong>, auto-created and auto-managed.',
		// Trusted & Certified
		trustedTitle: 'Trusted & Certified',
		trustRedHat: 'Red Hat Certified Container',
		trustRedHatDesc: 'Docker image certified by IBM',
		trustApache: 'Apache 2.0 Licensed',
		trustApacheDesc: '100% open-source & enterprise-ready',
		trustTests: '2,000+ Tests · 0 Failures',
		trustTestsDesc: 'Rigorous CI/CD & code coverage',
		trustDocker: 'Docker Hub',
		trustDockerDesc: 'Container pulls from Docker Hub',
		trustCI: 'CI Passing · CodeQL Clean',
		trustCIDesc: 'Automated builds, security scanning & code analysis',
		// Built on Proven Technology
		techTitle: 'Built on Proven Technology',
		techJava: 'Java 25',
		techJavaDesc: 'Enterprise runtime',
		techQuarkus: 'Quarkus',
		techQuarkusDesc: 'Cloud-native, fast',
		techLangchain: 'LangChain4j',
		techLangchainDesc: 'Multi-provider LLM support',
		techMongo: 'MongoDB',
		techMongoDesc: 'Document store',
		techPostgres: 'PostgreSQL',
		techPostgresDesc: 'Relational store',
		techDocker: 'Docker',
		techDockerDesc: 'Container-ready',
		techK8s: 'Kubernetes',
		techK8sDesc: 'Orchestration',
		techOpenshift: 'OpenShift',
		techOpenshiftDesc: 'Red Hat certified',
		// Next Steps
		nextStepsTitle: 'Next Steps',
		nextGetStartedTitle: 'Get Started in 5 Minutes',
		nextGetStartedDesc: 'Install EDDI, create your first agent, and start a conversation.',
		nextFeaturesTitle: 'Explore All Features',
		nextFeaturesDesc: 'Config-as-Code, MCP tools, security, observability, and more.',
		nextWhyTitle: 'Why EDDI?',
		nextWhyDesc: 'Learn why configuration-driven AI orchestration beats code-first approaches.',
		nextDocsTitle: 'Browse Documentation ↗',
		nextDocsDesc: 'Architecture, MCP tools, REST API, deployment guides, and more.',
		// FAQ
		faqTitle: 'Frequently Asked Questions',
		faq1Q: 'What is EDDI?',
		faq1A: 'EDDI is an open-source, enterprise-grade AI orchestration platform. It enables teams to build, configure, and deploy AI-powered agents using JSON configuration rather than compiled code. EDDI provides a complete platform with a <strong>production-ready React management UI</strong> (the EDDI Manager), built-in REST APIs, conversation state management, security (OIDC/Keycloak), immutable audit trails, and 42 MCP tools — all deployable via Docker or Kubernetes.',
		faq2Q: 'How is EDDI different from AI libraries and frameworks?',
		faq2A: 'AI libraries like LangChain, Spring AI, and LangChain4j give you building blocks — but you still need to build REST controllers, authentication, conversation state management, audit logging, and management UIs yourself. EDDI is a <strong>deployable middleware platform</strong>, not a library. It provides all of this out of the box, ready to deploy via Docker.',
		faq3Q: 'Is EDDI production-ready for enterprise use?',
		faq3A: 'Yes. EDDI is built on an enterprise-grade runtime with lightweight virtual threads for massive I/O-bound concurrency. It supports MongoDB and PostgreSQL, includes built-in OIDC/Keycloak authentication, provides immutable cryptographic audit trails for compliance (including EU AI Act), and scales horizontally via NATS JetStream.',
		faq4Q: 'What is the Model Context Protocol (MCP)?',
		faq4A: 'The Model Context Protocol (MCP) is an open standard that allows AI assistants like Claude Desktop, IDE plugins, and custom clients to interact with external tools programmatically. EDDI exposes 42 MCP tools spanning conversation management, agent administration, setup automation, schedule management, and diagnostics.',
		faq5Q: 'Can EDDI replace Flowise or n8n for production workloads?',
		faq5A: 'EDDI serves a similar visual-building purpose but with enterprise-grade architecture. Unlike Flowise and n8n, EDDI uses no <code>eval()</code> or code blocks, runs millions of lightweight virtual threads for enterprise-grade concurrency, supports OIDC/Keycloak authentication, and stores data in MongoDB or PostgreSQL. It is designed for regulated industries.',
	},

	// ─── Getting Started ────────────────────────────────────────
	gettingStarted: {
		title: 'Getting Started',
		description: 'Install EDDI, create your first agent, and start chatting in 5 minutes.',
		heroTitle: 'Get Started with EDDI',
		heroSubtitle: 'Install EDDI, create your first agent, and start chatting in 5 minutes.',
		prerequisitesTitle: 'Prerequisites',
		prereq1: '<strong>Docker</strong> (recommended) or Java 25+',
		prereq2: 'An LLM provider API key (OpenAI, Anthropic, Google Gemini, or a local Ollama instance)',
		step1Title: '1. Install & Start EDDI',
		step1Desc: 'The fastest way to get EDDI running is the <strong>one-command installer</strong>. It sets up EDDI + your choice of database via Docker Compose, deploys a starter agent, and walks you through configuration:',
		step1TabInstaller: 'Install Script (Recommended)',
		step1TabCompose: 'Docker Compose',
		step1ComposeDesc: 'If you prefer manual control, clone the repo and use Docker Compose directly:',
		step1After: 'EDDI will be available at <code>http://localhost:7070</code>.',
		step2Title: '2. Connect via MCP',
		step2Desc:
			'If you use <strong>Claude Desktop</strong> or any MCP-compatible client, add EDDI as an MCP server:',
		step2After: "Now you can interact with EDDI's 42 MCP tools directly from your AI assistant.",
		step3Title: '3. Store Your API Key',
		step3VaultIntro: 'Before creating an agent, securely store your LLM provider API key in EDDI\'s <a href="https://docs.labs.ai/security-and-compliance/secrets-vault" target="_blank" rel="noopener">Secrets Vault</a> (AES-256-GCM encrypted):',
		step3VaultUiDesc: 'Open the Manager UI at <code>http://localhost:7070</code>, navigate to <strong>Secrets Vault</strong>, and add a new secret with key name <code>my-anthropic-key</code>.',
		step3VaultTip: '<strong>💡 Tip:</strong> The <code>${eddivault:my-anthropic-key}</code> syntax references EDDI\'s built-in <a href="https://docs.labs.ai/security-and-compliance/secrets-vault" target="_blank" rel="noopener">Secrets Vault</a>. The vault master key is auto-generated by the installer. For quick testing, you can also pass API keys directly: <code>apiKey: "sk-ant-..."</code>.',
		step4Title: '4. Create Your First Agent',
		step4Desc: 'Use <code>setup_agent</code> to create a fully working agent in one call — via MCP or REST API:',
		step4After: 'This creates the rules, LLM config, workflow, agent, and deploys it — all in one step.',
		step5Title: '5. Chat with Your Agent',
		step6Title: '6. Open the Manager UI',
		step6Desc:
			'Navigate to <code>http://localhost:7070</code> to visually manage your agents, workflows, and conversations with the EDDI Manager.',
		managerImageAlt: 'EDDI Manager UI Dashboard Preview',
		whatsNextTitle: "What's Next?",
		nextAllFeatures: 'All Features',
		nextAllFeaturesDesc: 'Explore everything EDDI offers',
		nextMcpServer: 'MCP Server',
		nextMcpServerDesc: 'Browse all 42 MCP tools',
		nextDocs: 'Documentation ↗',
		nextDocsDesc: 'Deep-dive into architecture & APIs',
		nextWhyEddi: 'Why EDDI?',
		nextWhyEddiDesc: 'The enterprise case for EDDI',
		// Installer Options
		installerOptionsTitle: 'Installer Options',
		installerOptionsDesc: 'The install script supports flags for automated and customized setups:',
		installerFlags: [
			'<code>--defaults</code> — All defaults, no prompts',
			'<code>--db=postgres</code> — Use PostgreSQL instead of MongoDB',
			'<code>--with-auth</code> — Enable Keycloak authentication',
			'<code>--full</code> — Everything enabled (database + auth + monitoring)',
			'<code>--local</code> — Build Docker image from local source (for contributors)',
		],
		// Update CLI
		updateTitle: 'Updating EDDI',
		updateDesc: 'The installer creates an <code>eddi</code> CLI wrapper. To pull the latest image and restart:',
		updateFallback: 'If the CLI is not available, run from your install directory (<code>~/.eddi</code>):',
		// Kubernetes
		k8sTitle: 'Kubernetes Deployment',
		k8sDesc: 'Deploy to Kubernetes with a single command:',
		k8sOptions: 'Kustomize overlays and Helm charts are also available for MongoDB, PostgreSQL, auth, monitoring, and production hardening (HPA, PDB, NetworkPolicy). See the <a href="https://docs.labs.ai/deployment/kubernetes" target="_blank" rel="noopener">Kubernetes Guide</a>.',
		// Quarkus SDK
		sdkTitle: 'Quarkus SDK',
		sdkDesc: 'Building a Quarkus app? Use the <strong><a href="https://github.com/quarkiverse/quarkus-eddi" target="_blank" rel="noopener">quarkus-eddi</a></strong> extension for Dev Services, fluent API, SSE streaming, and MCP bridge:',
	},

	// ─── Use Cases ──────────────────────────────────────────────
	useCases: {
		title: 'Use Cases',
		description: 'Real-world deployment patterns and use cases for the EDDI AI orchestration platform.',
		heroTitle: 'Use Cases',
		heroSubtitle: 'Real-world deployment patterns for the EDDI platform.',
		healthcare: 'Healthcare',
		healthcareDesc:
			'Patient intake agents, medical FAQ bots, appointment scheduling — with full audit trails for HIPAA compliance and EU AI Act readiness.',
		finance: 'Financial Services',
		financeDesc:
			'Customer support agents with compliance logging, fraud detection assistants, and internal knowledge base chatbots with cryptographic audit trails.',
		ecommerce: 'E-Commerce',
		ecommerceDesc:
			'Product recommendation agents, order support bots, and multi-language customer service — with intent-based routing across specialized agents.',
		manufacturing: 'Manufacturing',
		manufacturingDesc:
			'Equipment maintenance assistants, quality control agents, and supply chain optimization — running on-premises or in private clouds.',
		government: 'Government',
		governmentDesc:
			'Citizen inquiry agents, internal process automation, and document analysis — in air-gapped environments with no cloud dependency.',
		devPlatforms: 'Developer Platforms',
		devPlatformsDesc:
			'Internal AI services for engineering teams — API-accessible agents that integrate into CI/CD pipelines, code review, and documentation workflows.',
	},

	// ─── Features Overview ──────────────────────────────────────
	featuresOverview: {
		title: 'Features at a Glance',
		description:
			'Every capability that makes EDDI the enterprise AI orchestrator — EDDI Manager UI, config-as-code, 42 MCP tools, security-first architecture, and more.',
		heroTitle: 'Everything You Need to',
		heroHighlight: 'Orchestrate AI',
		heroDesc:
			'EDDI provides a complete, production-ready platform for building, deploying, and managing AI agents — without writing boilerplate.',
		coreTitle: 'Core Platform',
		coreDesc:
			'The essential capabilities that make EDDI a <strong>complete AI orchestration platform</strong>.',
		// Core cards
		managerCardTitle: '🖥️ EDDI Manager',
		managerCardDesc:
			'A <strong>production-ready React UI</strong> for building, deploying, and monitoring agents visually — with 11-locale i18n, live chat debugging, and audit dashboards.',
		configCardTitle: '⚙️ Config-as-Code',
		configCardDesc:
			'Agent logic is JSON configuration, not compiled code. Prompt engineers iterate instantly — <strong>no redeployment needed</strong>.',
		mcpCardTitle: '🔌 MCP Server (42 Tools)',
		mcpCardDesc:
			'Full AI-native control via the <strong>Model Context Protocol</strong>. Claude Desktop, Cursor, and custom clients manage agents programmatically.',
		securityCardTitle: '🔐 Security-First',
		securityCardDesc:
			'No <code>eval()</code>, vault integration, path traversal protection, OIDC/Keycloak, <strong>cryptographic audit trails</strong>.',
		perfCardTitle: '🚀 Performance',
		perfCardDesc:
			'Enterprise-grade runtime with <strong>millions of lightweight threads</strong> for I/O-bound LLM workloads.',
		multiCardTitle: '🤖 Multi-Agent',
		multiCardDesc:
			'Intent-based agent discovery, managed conversations, agent triggers, and <strong>A/B routing</strong> across multiple agents.',
		// AI Capabilities section
		aiCapTitle: 'AI Capabilities',
		aiCapDesc: 'Advanced AI features that make EDDI agents <strong>smarter, faster, and more cost-efficient</strong>.',
		memoryCardTitle: '🧠 Memory & Context',
		memoryCardDesc:
			'Persistent memory, dream consolidation, rolling summaries, and token-aware windowing. <strong>Agents that remember</strong>.',
		ragCardTitle: '📚 RAG',
		ragCardDesc:
			'7 embedding providers, 5 vector stores, httpCall RAG. <strong>Enterprise knowledge retrieval</strong> out of the box.',
		cascadingCardTitle: '📈 Model Cascading',
		cascadingCardDesc:
			'Cost-optimized multi-model routing with confidence strategies. <strong>Reduce LLM costs 60-80%</strong>.',
		schedulingCardTitle: '⏰ Scheduling & Heartbeats',
		schedulingCardDesc:
			'Cron triggers, heartbeat wake-ups, dream cycles. <strong>Proactive agents</strong> that act on their own.',
		// Built-In Agent Tools section
		toolsTitle: 'Built-In Agent Tools',
		toolsDesc:
			'EDDI ships with <strong>12 ready-to-use tools</strong> that agents can call during conversations — no external setup required.',
		tools: [
			{ icon: '🔍', name: 'Web Search', desc: 'DuckDuckGo or Google Custom Search' },
			{ icon: '🧮', name: 'Calculator', desc: 'Sandboxed math parser (no eval())' },
			{ icon: '🌐', name: 'Web Scraper', desc: 'SSRF-protected content extraction' },
			{ icon: '📄', name: 'PDF Reader', desc: 'SSRF-protected document extraction' },
			{ icon: '☁️', name: 'Weather', desc: 'Real-time weather data' },
			{ icon: '🕐', name: 'DateTime', desc: 'Current date and time' },
			{ icon: '📊', name: 'Data Formatter', desc: 'Structured data transformation' },
			{ icon: '📝', name: 'Text Summarizer', desc: 'LLM-powered summarization' },
			{ icon: '🔌', name: 'HTTP Calls', desc: 'Expose REST APIs as LLM tools' },
			{ icon: '🧠', name: 'User Memory', desc: 'Read/write/search persistent memory' },
			{ icon: '🔙', name: 'Conversation Recall', desc: 'Drill into summarized history' },
			{ icon: '📎', name: 'Multimodal Input', desc: 'Image, PDF, audio, video via MIME routing' },
		],
		// Config & Portability section
		portTitle: 'Config & Portability',
		portDesc:
			'Agent configurations are portable, composable, and sync-ready — move agents between environments without friction.',
		portItems: [
			{ title: '📤 Import / Export', desc: 'Agents portable as ZIP files with automatic secret scrubbing. Import merges or overwrites — no version conflicts.' },
			{ title: '🔄 Agent Sync', desc: 'Live instance-to-instance sync with structural matching, content diffing, and selective resource picking.' },
			{ title: '📝 Prompt Snippets', desc: 'Reusable, versioned system prompt building blocks. Reference as <code>{{snippets.safety_rules}}</code>.' },
		],
		// Engineering section
		engTitle: 'Engineering Excellence',
		obsCardTitle: '📊 Observability',
		obsCardDesc:
			'Every pipeline step logged with <strong>immutable audit trails</strong> — tokens, cost, timing, and tool calls.',
		cqCardTitle: '🧪 Code Quality',
		cqCardDesc:
			'<strong>2,000+ tests with zero failures.</strong> Zero Checkstyle warnings. CI/CD enforced on every merge.',
		aiCardTitle: '🧩 AI-Ready',
		aiCardDesc:
			'42 MCP tools, predictable CRUD patterns, self-documenting APIs. <strong>Built for coding agents</strong> to work with.',
	},

	// ─── Feature Pages (FeaturePage layout) ─────────────────────
	pages: {
		manager: {
			title: 'EDDI Manager',
			description:
				'A production-ready React management UI for building, deploying, and monitoring AI agents visually — with 11-locale i18n, live chat debugging, and audit dashboards.',
			heading1: 'Visual Agent Management',
			para1: 'The EDDI Manager is a comprehensive React-based management interface that provides visual control over every aspect of the EDDI platform — from agent configuration to real-time conversation monitoring.',
			heading2: 'Key Capabilities',
			items: [
				'<strong>Visual Agent Builder</strong> — Create and configure agents through an intuitive drag-and-drop interface',
				'<strong>Live Chat Debugging</strong> — Test agents in real-time with full conversation inspection',
				'<strong>Audit Dashboards</strong> — Monitor token usage, costs, and performance across all agents',
				'<strong>11-Locale i18n</strong> — Full internationalization with RTL support for Arabic',
				'<strong>Interactive Onboarding</strong> — Guided tours that introduce new users to the platform',
				'<strong>Resource Management</strong> — CRUD operations for rules, workflows, LLM configs, and connectors',
				'<strong>Secrets Vault</strong> — Secure API key management with masked display',
			],
			heading3: 'Built for Teams',
			para2: 'The Manager enables non-developers to iterate on agent behavior without touching source code. Prompt engineers can modify rules, test conversations, and deploy changes — all from the browser.',
		},
		mcpServer: {
			title: 'MCP Server — 42 tools',
			description:
				'EDDI exposes its full capabilities via the Model Context Protocol, enabling Claude Desktop, Cursor, and custom AI clients to manage agents programmatically.',
			heading1: 'AI-Native Control Plane',
			para1: 'The Model Context Protocol (MCP) is an open standard that allows AI assistants to interact with external tools. EDDI implements a comprehensive MCP server with <strong>42 tools</strong> spanning every aspect of the platform.',
			heading2: 'Tool Categories',
			items: [
				'<strong>Conversation Tools</strong> — Chat with agents, manage conversations, read history',
				'<strong>Admin Tools</strong> — List, inspect, and manage deployed agents',
				'<strong>Setup Tools</strong> — Create complete agents in a single call with <code>setup_agent</code>',
				'<strong>Resource CRUD</strong> — Full create/read/update/delete for rules, workflows, LLM configs, connectors',
				'<strong>Diagnostic Tools</strong> — Health checks, configuration inspection, environment diagnostics',
				'<strong>Schedule Management</strong> — Manage periodic agent tasks and triggers',
				'<strong>OpenAPI 3.1</strong> — Auto-generated OpenAPI spec. Paste any external OpenAPI spec into EDDI → get a fully deployed API-calling agent',
			],
			heading3: 'Open Standards — Not Proprietary APIs',
			para2: 'EDDI agents can also <strong>consume external MCP tools</strong> during conversations. Configure MCP server endpoints, and agents auto-discover and invoke tools based on conversation context. Beyond MCP, EDDI implements <strong>A2A</strong> (Agent-to-Agent Protocol) for cross-platform agent communication, <strong>OpenAPI 3.1</strong> for native spec generation and consumption, <strong>OAuth 2.0 / OIDC</strong> via Keycloak, and <strong>SSE</strong> for real-time streaming — all open standards, zero vendor lock-in.',
		},
		configAsCode: {
			title: 'Configuration-as-Code',
			description:
				'Agent logic, pipelines, and tool definitions are JSON configurations — not compiled code. Iterate instantly without redeployment.',
			heading1: 'JSON-Driven Agent Logic',
			para1: "In EDDI, everything that defines an agent's behavior is a <strong>JSON configuration resource</strong>: rules (system prompts), LLM connector settings, workflow pipelines, tool configurations, and deployment descriptors. No code changes, no redeployment.",
			heading2: 'Why This Matters',
			items: [
				'<strong>No redeployment</strong> — Change agent behavior by updating JSON, not source code',
				'<strong>Prompt engineer friendly</strong> — Non-developers modify rules via UI or REST API',
				'<strong>Version controlled</strong> — JSON configs live in Git alongside infrastructure-as-code',
				'<strong>Hot-reloadable</strong> — Changes take effect immediately, no server restart needed',
				'<strong>Auditable</strong> — Every configuration change is tracked in the immutable audit trail',
				'<strong>Import / Export</strong> — Agents are portable as ZIP files with automatic secret scrubbing on export. Import merges or overwrites — no version conflicts',
				'<strong>Agent Sync</strong> — Live instance-to-instance sync with structural matching, content diffing, and selective resource picking — no ZIP intermediary needed',
				'<strong>Prompt Snippets</strong> — Reusable, versioned system prompt building blocks referenced as <code>{{snippets.safety_rules}}</code> — compose prompts from shared libraries',
				'<strong>Behavior Rules</strong> — IF-THEN logic engine for routing, orchestration, and business logic decisions without code',
			],
			heading3: 'Resource Types',
			para2: 'EDDI manages these configuration resources: <strong>Rules</strong> (system prompts), <strong>Workflows</strong> (pipeline definitions), <strong>LLM Connectors</strong> (provider settings), <strong>HTTP Connectors</strong> (external API integrations), <strong>Agents</strong> (deployment descriptors), and <strong>Environments</strong> (deployment targets).',
		},
		security: {
			title: 'Security-First Architecture',
			description:
				'No eval(), no code execution blocks. Vault integration, cryptographic audit trails, and OIDC/Keycloak authentication — security is an architectural foundation.',
			heading1: 'Enterprise Security by Design',
			para1: 'EDDI eliminates entire classes of security vulnerabilities by design. There is <strong>no eval()</strong>, no code execution blocks, and no dynamic code injection — agent behavior is defined through declarative JSON configuration only.',
			heading2: 'Security Features',
			items: [
				'<strong>Zero eval()</strong> — No dynamic code execution (eliminates CVSS 10.0 RCE risks)',
				'<strong>OIDC/Keycloak</strong> — Enterprise authentication and authorization',
				'<strong>Vault Integration</strong> — Secure secret management for API keys',
				'<strong>Path Traversal Protection</strong> — Input validation at every boundary',
				'<strong>URL Validation</strong> — Prevent SSRF and redirect attacks',
				'<strong>Cryptographic Audit Trails</strong> — Immutable, tamper-evident operation logs',
				'<strong>EU AI Act Ready</strong> — Built-in governance capabilities for regulatory compliance',
			],
		},
		performance: {
			title: 'Enterprise Performance',
			description:
				'Java 25 Virtual Threads on Quarkus — millions of lightweight threads for I/O-bound LLM workloads with sub-second boot times.',
			heading1: 'Built for Scale',
			para1: 'EDDI runs on <strong>Java 25 with Quarkus</strong>, leveraging Virtual Threads (Project Loom) for massive I/O-bound concurrency. Unlike Node.js event loops, Virtual Threads provide genuine multi-threaded parallelism with minimal overhead.',
			heading2: 'Performance Highlights',
			items: [
				'<strong>Virtual Threads</strong> — Millions of lightweight threads for concurrent LLM calls',
				'<strong>Quarkus Runtime</strong> — Cloud-native, dev-mode hot reload, optimized for containers',
				'<strong>NATS JetStream</strong> — Horizontal scaling with event-driven architecture',
				'<strong>Dual Database</strong> — MongoDB or PostgreSQL, switch with one env var. Single Docker image for both',
				'<strong>SSE Streaming</strong> — Real-time chat responses, group discussion feeds, and live log streaming via Server-Sent Events',
				'<strong>One-Command Install</strong> — Interactive wizard deploys EDDI + database + starter agent via Docker Compose',
				'<strong>Red Hat Certified</strong> — Container certification with automated preflight checks in CI/CD',
			],
		},
		multiAgent: {
			title: 'Multi-Agent Orchestration',
			description:
				'Intent-based agent discovery, managed conversations, agent triggers, and A/B routing — one conversation per intent+user, auto-created and auto-managed.',
			heading1: 'Intelligent Agent Routing',
			para1: "EDDI's multi-agent system goes beyond simple load balancing. It provides <strong>intent-based agent discovery</strong> that automatically routes user requests to the most appropriate agent based on declared capabilities.",
			heading2: 'Orchestration Features',
			items: [
				'<strong>Agent Discovery</strong> — Agents declare intents and are auto-matched to user requests',
				'<strong>Managed Conversations</strong> — One conversation per intent+user, auto-created',
				'<strong>Agent Triggers</strong> — Automated agent activation based on events',
				'<strong>A/B Routing</strong> — Test different agents against the same traffic',
				'<strong>Coordinator Pattern</strong> — Agents delegate to specialized sub-agents',
			],
			heading3: 'Group Conversations & Advanced Orchestration',
			para2: 'EDDI supports <strong>multi-agent group conversations</strong> with 5 built-in discussion styles, nested group structures, and a meta-agent that creates other agents through conversation:',
			items2: [
				'<strong>5 Discussion Styles</strong> — Round Table, Peer Review, Devil\'s Advocate, Delphi, and Debate',
				'<strong>Nested Groups</strong> — Compose groups of groups for tournament brackets, red-team vs blue-team, and panel reviews',
				'<strong>Agent Father</strong> — A meta-agent that creates other agents through conversation (ships out of the box)',
				'<strong>A2A Protocol</strong> — Full Agent-to-Agent protocol implementation with Agent Cards and cross-platform skill discovery',
				'<strong>Capability Matching</strong> — Discover and route to agents by skill, confidence score, and custom attributes',
			],
		},
		observability: {
			title: 'Observability & Audit Trails',
			description:
				'Every pipeline step is logged with an immutable audit trail — tokens, cost, timing, tool calls. Full CQRS telemetry with Prometheus and Grafana integration.',
			heading1: 'Complete Visibility',
			para1: 'EDDI provides <strong>end-to-end observability</strong> across every conversation, pipeline step, and tool invocation. The immutable audit trail captures tokens used, latency, costs, and outcomes — enabling both operational monitoring and regulatory compliance.',
			heading2: 'Observability Features',
			items: [
				'<strong>Immutable Audit Trail</strong> — Cryptographically signed, tamper-evident operation logs',
				'<strong>Token & Cost Tracking</strong> — Per-conversation and per-agent usage metrics',
				'<strong>Pipeline Tracing</strong> — Full visibility into every step of the processing pipeline',
				'<strong>Prometheus Metrics</strong> — Standard metrics endpoint for monitoring infrastructure',
				'<strong>Grafana Dashboards</strong> — Pre-built dashboards for operations teams',
				'<strong>CQRS Telemetry</strong> — Event-sourced ledger of all system operations',
			],
		},
		codeQuality: {
			title: 'Code Quality',
			description:
				'2,000+ tests with zero failures. Zero Checkstyle warnings. CI/CD enforced quality gates on every merge.',
			heading1: 'Engineering Rigor',
			para1: 'EDDI maintains <strong>exceptional code quality</strong> through comprehensive testing, static analysis, and CI/CD quality gates. Every pull request must pass the full test suite before merge.',
			heading2: 'Quality Metrics',
			items: [
				'<strong>2,000+ Tests</strong> — Unit, integration, and end-to-end coverage',
				'<strong>Zero Failures</strong> — Clean CI on every build',
				'<strong>Checkstyle Enforcement</strong> — Zero warnings, strict rules enforced on every build',
				'<strong>MCP Tool Tests</strong> — Comprehensive coverage of all 42 MCP tools',
				'<strong>CI/CD Quality Gates</strong> — Automated checks prevent regressions',
			],
		},
		aiReady: {
			title: 'AI-Ready Architecture',
			description:
				'42 MCP tools, predictable CRUD patterns, self-documenting APIs. Built from the ground up for coding agents to work with.',
			heading1: 'Designed for AI Collaboration',
			para1: 'EDDI is built with the assumption that <strong>coding agents will manage it</strong>. Every API follows predictable patterns, every resource has consistent CRUD operations, and the MCP server enables full programmatic control.',
			heading2: 'AI-Friendly Design',
			items: [
				'<strong>Predictable Patterns</strong> — Consistent resource naming, CRUD conventions, and error handling',
				'<strong>Self-Documenting APIs</strong> — OpenAPI specs and MCP tool descriptions auto-generated',
				'<strong>LLMs.txt Support</strong> — AI-discoverable site content via llms.txt and llms-full.txt',
				'<strong>MCP-First</strong> — 42 tools designed for AI assistant integration',
				'<strong>Setup Automation</strong> — Single-call agent creation with <code>setup_agent</code>',
			],
		},
		// ─── New Feature Pages ────────────────────────────────────
		memory: {
			title: 'Memory & Context Management',
			description:
				'Persistent user memory, dream consolidation, rolling summaries, and token-aware context windowing — agents that remember, learn, and forget intelligently.',
			heading1: 'Agents That Remember',
			para1: 'EDDI provides a comprehensive <strong>persistent memory system</strong> that enables agents to remember facts, preferences, and context across conversations. Memory entries are structured key-value pairs with visibility scoping — giving agents the right context at the right time.',
			heading2: 'Memory Capabilities',
			items: [
				'<strong>Persistent User Memory</strong> — Key-value entries with <code>global</code>, <code>agent</code>, and <code>group</code> visibility scoping across conversations',
				'<strong>LLM Memory Tools</strong> — Built-in tools agents can call to read, write, and search their own persistent memory',
				'<strong>Dream Consolidation</strong> — Background memory maintenance: stale entry pruning, contradiction detection, and fact summarization',
				'<strong>Token-Aware Windowing</strong> — Intelligent context packing with model-specific tokenizer support and anchored opening steps',
				'<strong>Rolling Summary</strong> — Incremental LLM-powered summarization of older turns with a Conversation Recall Tool for drill-back',
				'<strong>Property Extraction</strong> — Config-driven slot-filling with <code>longTerm</code> / <code>conversation</code> / <code>step</code> scoping',
				'<strong>Memory Policy (Commit Flags)</strong> — Strict write discipline marks failed task output as uncommitted (hidden from LLM context) and injects concise error digests for graceful degradation',
				'<strong>Conversation State</strong> — Full history with undo/redo support',
			],
			heading3: 'How Dream Consolidation Works',
			para2: 'Inspired by Anthropic\'s research on background memory consolidation, EDDI\'s Dream Cycles run on a <strong>configurable schedule</strong> to maintain memory quality. Stale entries are pruned, contradictions are detected and resolved, and facts are summarized — all with cost ceilings per run. Dreams are scheduled via cron expressions and can use persistent or fresh conversation strategies.',
		},
		rag: {
			title: 'RAG — Retrieval-Augmented Generation',
			description:
				'7 embedding providers, 5 vector stores, httpCall RAG, and async document ingestion — enterprise-grade knowledge retrieval for AI agents.',
			heading1: 'Enterprise Knowledge Retrieval',
			para1: 'EDDI provides a complete <strong>Retrieval-Augmented Generation</strong> pipeline with native support for multiple embedding providers, vector stores, and a zero-infrastructure RAG option via HTTP calls.',
			heading2: 'RAG Capabilities',
			items: [
				'<strong>7 Embedding Providers</strong> — OpenAI, Ollama, Azure OpenAI, Mistral, Amazon Bedrock, Cohere, Google Vertex AI',
				'<strong>5 Vector Stores</strong> — pgvector, In-Memory, MongoDB Atlas, Elasticsearch, Qdrant',
				'<strong>httpCall RAG</strong> — Zero-infrastructure RAG via any search API (BM25, Elasticsearch, custom endpoints)',
				'<strong>REST Ingestion API</strong> — Async document ingestion with status tracking and batch processing',
				'<strong>Hybrid Search</strong> — Combine dense vector retrieval with sparse keyword matching for optimal recall',
			],
			heading3: 'Flexible Deployment',
			para2: 'RAG is fully configuration-driven. Choose your embedding provider and vector store via JSON configuration — no code changes needed. The <code>httpCall RAG</code> option lets you use <strong>any existing search infrastructure</strong> (Elasticsearch, Solr, custom APIs) without deploying a separate vector database.',
		},
		modelCascading: {
			title: 'Smart Model Cascading',
			description:
				'Cost-optimized multi-model routing — try cheap models first, escalate on low confidence. Per-conversation budgets and tenant cost ceilings.',
			heading1: 'Intelligent Cost Optimization',
			para1: 'EDDI\'s Model Cascading system enables <strong>cost-aware multi-model routing</strong>. Start with fast, inexpensive models and automatically escalate to more powerful (and expensive) models only when confidence is low — reducing AI costs without sacrificing quality.',
			heading2: 'Cascading Features',
			items: [
				'<strong>Cost Optimization</strong> — Try cheap/fast models first, escalate to powerful models only when confidence is low',
				'<strong>4 Confidence Strategies</strong> — Structured output, heuristic, judge model, or none — choose the evaluation method that fits your use case',
				'<strong>Per-Conversation Budgets</strong> — Automatic cost tracking with budget caps and conversation eviction when exceeded',
				'<strong>Tenant Cost Ceilings</strong> — Monthly cost budgets per tenant with automatic enforcement in multi-tenant deployments',
				'<strong>12 LLM Providers</strong> — OpenAI, Anthropic, Google Gemini, Mistral, Azure OpenAI, Amazon Bedrock, Oracle GenAI, Vertex AI, Ollama, Jlama, Hugging Face, and any OpenAI-compatible endpoint',
			],
			heading3: 'How It Works',
			para2: 'Configure a cascade chain of models ordered by cost. For each user message, EDDI tries the cheapest model first and evaluates confidence. If confidence falls below the threshold, it automatically escalates to the next model in the chain. This approach can <strong>reduce LLM costs by 60-80%</strong> for typical workloads where most queries are simple enough for smaller models.',
		},
		scheduling: {
			title: 'Scheduling & Heartbeats',
			description:
				'Cron-triggered agent execution, heartbeat wake-ups for proactive behavior, dream cycles for memory maintenance, and complete fire logging.',
			heading1: 'Proactive Agent Behavior',
			para1: 'EDDI agents don\'t just respond to messages — they can <strong>proactively execute on schedules</strong>. Heartbeat triggers wake agents at configurable intervals, cron expressions provide precise timing, and dream cycles maintain memory quality in the background.',
			heading2: 'Scheduling Features',
			items: [
				'<strong>Heartbeat Triggers</strong> — Periodic agent wake-ups at configurable intervals for proactive behavior (e.g., daily check-ins, periodic summaries)',
				'<strong>Cron Scheduling</strong> — Standard cron expressions for precise timed agent execution',
				'<strong>Conversation Strategies</strong> — <code>persistent</code> (reuse same conversation across fires) or <code>new</code> (fresh context each time)',
				'<strong>Fire Logging</strong> — Complete execution history with status, duration, cost tracking, and retry logic',
				'<strong>Dream Cycles</strong> — Scheduled background memory consolidation with cost ceilings per run',
			],
			heading3: 'Use Cases',
			para2: 'Scheduled agents enable powerful proactive workflows: <strong>daily report summaries</strong>, periodic data quality checks, automated customer follow-ups, memory maintenance via dream consolidation, and time-triggered escalation workflows. Each scheduled execution is fully logged with cost tracking and retry support.',
		},
		// Enterprise pages
		whyEddi: {
			title: 'Why EDDI?',
			description:
				'The self-hosted enterprise AI orchestration platform. Configuration-driven agent logic, a complete management UI, and enterprise-grade security — all in one deployable platform.',
			heading1: 'The Gap in Enterprise AI',
			para1: 'Enterprise AI orchestration has <strong>no middle ground</strong>. Teams either prototype with fragile low-code tools and rewrite for production, or build everything from scratch using AI libraries and frameworks.',
			heading2: 'EDDI Fills This Void',
			para2: 'EDDI is a <strong>deployable middleware platform</strong>, not a library. It provides everything teams need out of the box:',
			items: [
				'<strong>Visual Management UI</strong> — The EDDI Manager for building and monitoring agents',
				'<strong>Configuration-as-Code</strong> — Agent logic is JSON, not compiled code',
				'<strong>42 MCP Tools</strong> — Full AI-native control via Model Context Protocol',
				'<strong>Enterprise Security</strong> — OIDC, vault, audit trails, no eval()',
				'<strong>Production Infrastructure</strong> — REST APIs, conversation state management, Prometheus metrics',
				'<strong>Horizontal Scaling</strong> — NATS JetStream for distributed architectures',
			],
			heading3: 'Who Should Use EDDI?',
			items2: [
				'<strong>Enterprise teams</strong> who need a production-ready AI orchestration platform',
				'<strong>Prompt engineers</strong> who want to iterate without redeployment',
				'<strong>Regulated industries</strong> that require audit trails and EU AI Act compliance',
				'<strong>Platform teams</strong> — building internal AI services for multiple departments',
			],
			// Comparison table
			comparisonTitle: 'EDDI vs. Typical Agent Frameworks',
			comparisonHeaders: { dimension: 'Dimension', frameworks: 'Python/Node Frameworks', eddi: 'EDDI' },
			comparisonRows: [
				{ dimension: 'Concurrency', frameworks: 'GIL or single-threaded event loop', eddi: 'Java 25 Virtual Threads — true OS-level parallelism' },
				{ dimension: 'Agent Logic', frameworks: 'Embedded in application code', eddi: 'Versioned JSON configs — update behavior without redeployment' },
				{ dimension: 'Security Model', frameworks: 'Relies on sandboxed code execution', eddi: 'No dynamic code execution; envelope-encrypted vault, SSRF protection' },
				{ dimension: 'Compliance', frameworks: 'Requires custom implementation', eddi: 'GDPR, HIPAA, EU AI Act infrastructure built-in' },
				{ dimension: 'Audit Trail', frameworks: 'Application-level logging', eddi: 'HMAC-SHA256 immutable ledger with cryptographic agent signing' },
				{ dimension: 'Deployment', frameworks: 'pip/npm + manual infrastructure', eddi: 'One-command Docker install, Kubernetes/OpenShift-ready' },
			],
			// LLM Providers
			llmTitle: '12 LLM Providers Supported',
			llmDesc: 'Connect to any major LLM provider — or bring your own via any OpenAI-compatible endpoint.',
			llmCategories: [
				{ category: 'Cloud APIs', providers: 'OpenAI · Anthropic Claude · Google Gemini · Mistral AI' },
				{ category: 'Enterprise Cloud', providers: 'Azure OpenAI · Amazon Bedrock · Oracle GenAI · Google Vertex AI' },
				{ category: 'Self-Hosted', providers: 'Ollama · Jlama · Hugging Face' },
				{ category: 'Compatible', providers: 'Any OpenAI-compatible endpoint (DeepSeek, Cohere, etc.) via baseUrl' },
			],
			// Quarkus SDK
			sdkTitle: 'Quarkus SDK',
			sdkDesc: 'Building a Quarkus app that talks to EDDI? Use the <strong><a href="https://github.com/quarkiverse/quarkus-eddi" target="_blank" rel="noopener">quarkus-eddi</a></strong> extension — Dev Services (auto-starts EDDI in dev mode), fluent API, SSE streaming, <code>@EddiAgent</code> endpoint wiring, and <code>@EddiTool</code> MCP bridge.',
		},
		vsAlternatives: {
			title: 'EDDI vs. Alternatives',
			description:
				'How EDDI compares with Spring AI, LangChain4j, Flowise, n8n, and other AI orchestration approaches.',
			heading1: 'Platform vs. Library',
			para1: 'The fundamental difference: EDDI is a <strong>deployable middleware platform</strong>, not a library. While libraries give you building blocks, EDDI gives you the entire building — ready to deploy.',
			heading2: 'Comparison',
			heading3a: 'vs. AI Libraries (Spring AI, LangChain, etc.)',
			para2: 'AI libraries like Spring AI, LangChain, and LangChain4j are excellent <strong>building blocks</strong> (EDDI uses LangChain4j internally). But with libraries, you still need to build REST controllers, authentication, conversation management, audit logging, and management UIs yourself. EDDI provides all of this out of the box.',
			heading3b: 'vs. Flowise / n8n',
			para3: 'Flowise and n8n are Node.js-based visual builders. EDDI serves a similar purpose but with enterprise-grade architecture:',
			vsItems: [
				'<strong>No eval()</strong> — Eliminates CVSS 10.0 remote code execution risks',
				'<strong>Millions of virtual threads</strong> — Enterprise-grade concurrency vs. single-threaded event loops',
				'<strong>OIDC/Keycloak</strong> — Enterprise authentication vs. basic auth',
				'<strong>MongoDB/PostgreSQL</strong> — Production databases vs. SQLite',
			],
			heading3c: 'vs. AWS Bedrock / Azure AI Studio',
			para4: 'Cloud AI platforms offer managed infrastructure but create <strong>vendor lock-in</strong>. EDDI runs anywhere Docker runs — on-premises, in any cloud, or in air-gapped environments.',
		},
		compliance: {
			title: 'Global Privacy & Regulatory Compliance',
			description:
				'EDDI provides built-in compliance for GDPR, CCPA, EU AI Act, HIPAA, PIPEDA, LGPD, APPI, POPIA, PDPA, Malaysia PDPA, PIPL, and more — with cascade data erasure, cryptographic audit trails, and one unified API.',

			// ── Section 1: Intro ─────────────────────────────────
			heading1: 'Compliance by Architecture',
			para1: 'Regulated industries cannot bolt compliance onto AI systems after the fact. EDDI embeds the <strong>technical foundations for global regulatory compliance</strong> into the platform architecture itself — immutable audit trails, cascade data erasure, processing restrictions, cryptographic integrity, and role-based access control are core capabilities, not add-ons. One unified API covers data subject rights for every jurisdiction.',

			// ── Section 2: AI Governance Frameworks ──────────────
			aiGovHeading: 'AI Governance Frameworks',
			aiGovIntro: 'As governments worldwide introduce AI-specific legislation, organizations need platforms that provide <strong>transparency, traceability, and human oversight</strong> from day one. EDDI\'s architecture addresses the core technical requirements of major AI governance frameworks.',

			euAiActHeading: 'EU AI Act — European Union',
			euAiActPara: 'The EU AI Act (Regulation 2024/1689) is the world\'s first comprehensive AI law, establishing risk-based requirements for AI systems. EDDI provides the <strong>technical foundations</strong> for compliance with its high-risk AI system requirements:',
			euAiActItems: [
				'<strong>Immutable Audit Trails</strong> — Every operation recorded with HMAC-SHA256 cryptographic integrity (Art. 12 — Record-Keeping)',
				'<strong>Decision Transparency</strong> — Full pipeline tracing shows how AI decisions were made, including model name, prompt, and response (Art. 13 — Transparency)',
				'<strong>Human Oversight</strong> — Management UI enables human review, intervention, and emergency stop (Art. 14 — Human Oversight)',
				'<strong>Risk Classification</strong> — Architecture supports high-risk AI system requirements with configurable controls (Art. 9 — Risk Management)',
				'<strong>Reproducibility</strong> — Configuration-as-code enables exact reproduction of AI behavior for regulatory audits (Art. 17 — Quality Management)',
				'<strong>Data Governance</strong> — OIDC/Keycloak RBAC, vault-based secret management, input/output logging (Art. 10 — Data Governance)',
			],

			nistHeading: 'NIST AI Risk Management Framework — United States',
			nistPara: 'The NIST AI RMF (AI 100-1) provides a voluntary framework for managing AI risks across four functions: Govern, Map, Measure, and Manage. EDDI\'s architecture provides technical capabilities that support organizations pursuing NIST AI RMF alignment:',
			nistItems: [
				'<strong>Govern</strong> — RBAC roles (eddi-admin, eddi-editor, eddi-viewer), immutable audit ledger, and documented data flows support AI governance structures',
				'<strong>Map</strong> — Pipeline tracing and conversation logging enable comprehensive AI risk identification and documentation',
				'<strong>Measure</strong> — Prometheus metrics, token/cost tracking, and per-agent usage analytics provide measurable AI performance and risk indicators',
				'<strong>Manage</strong> — Processing restriction API, human oversight via Manager UI, and configurable retention policies enable risk mitigation controls',
			],

			isoHeading: 'ISO/IEC 42001 — AI Management Systems',
			isoPara: 'ISO/IEC 42001:2023 establishes requirements for an AI Management System (AIMS). EDDI provides technical capabilities that support organizations pursuing ISO 42001 certification:',
			isoItems: [
				'<strong>Documented AI Policies</strong> — Configuration-as-code means all agent behavior is defined in auditable JSON — rules, workflows, LLM configurations, and deployment descriptors',
				'<strong>Risk Assessment</strong> — Audit trails capture complete decision histories for risk evaluation and impact assessments',
				'<strong>Operational Controls</strong> — RBAC, vault-based secret management, and processing restrictions provide operational governance',
				'<strong>Performance Monitoring</strong> — Prometheus metrics, Grafana dashboards, and CQRS telemetry enable continuous AI performance evaluation',
			],

			// ── Section 3: Data Privacy Regulations ──────────────
			privacyHeading: 'Data Privacy Regulations',
			privacyIntro: 'EDDI provides <strong>unified data subject rights endpoints</strong> that satisfy the technical requirements of every major privacy regulation worldwide. One API covers cascade erasure, full data export, and processing restriction — regardless of jurisdiction.',

			gdprHeading: 'GDPR — European Union / EEA',
			gdprPara: 'The General Data Protection Regulation (EU 2016/679) is the gold standard for data privacy. EDDI implements GDPR data subject rights as <strong>first-class API endpoints</strong> backed by cascade operations across all 5 data stores:',
			gdprItems: [
				'<strong>Right to Erasure (Art. 17)</strong> — <code>DELETE /admin/gdpr/{userId}</code> cascades across user memories, conversations, managed conversation mappings, database logs (SHA-256 pseudonymized), and audit ledger (SHA-256 pseudonymized)',
				'<strong>Right of Access / Portability (Art. 15/20)</strong> — <code>GET /admin/gdpr/{userId}/export</code> returns all user data as structured, machine-readable JSON',
				'<strong>Right to Restriction (Art. 18)</strong> — <code>POST /admin/gdpr/{userId}/restrict</code> freezes processing while preserving data, blocking new conversations and message processing',
				'<strong>PII-Safe Logging</strong> — GDPR operations log SHA-256 pseudonyms, never raw user IDs',
				'<strong>Configurable Retention</strong> — Per-category retention policies for conversations (365 days default), user memories (manual), and audit entries (indefinite for EU AI Act)',
				'<strong>MCP Tools</strong> — <code>delete_user_data</code> and <code>export_user_data</code> enable AI-orchestrated compliance workflows',
			],

			ccpaHeading: 'CCPA / CPRA — California, United States',
			ccpaPara: 'The California Consumer Privacy Act and California Privacy Rights Act grant consumers rights to know, delete, and opt out of data sales. EDDI satisfies CCPA\'s technical requirements through its GDPR-compatible API:',
			ccpaItems: [
				'<strong>Right to Know (§1798.100)</strong> — The GDPR export endpoint provides all personal information in a structured, machine-readable format',
				'<strong>Right to Delete (§1798.105)</strong> — The GDPR erasure endpoint provides cascade deletion across all data stores',
				'<strong>Do Not Sell (§1798.120)</strong> — EDDI architecturally cannot sell personal information — it is middleware infrastructure that processes data exclusively on behalf of the deployer',
			],

			pipedaHeading: 'PIPEDA — Canada',
			pipedaPara: 'Canada\'s Personal Information Protection and Electronic Documents Act (2000, amended 2023) governs commercial data processing through 10 Fair Information Principles. EDDI\'s architecture maps directly to each principle:',
			pipedaItems: [
				'<strong>Accountability</strong> — Immutable HMAC-signed audit ledger traces all operations',
				'<strong>Limiting Collection</strong> — Token-aware windowing limits data sent to LLMs; configurable retention auto-deletes old conversations',
				'<strong>Limiting Use/Disclosure</strong> — Data used only for configured agent interactions; audit trail logs every LLM invocation',
				'<strong>Safeguards</strong> — AES-256-GCM envelope encryption (Secrets Vault), HMAC-SHA256 audit integrity, Keycloak OIDC, RBAC',
				'<strong>Individual Access</strong> — Full data export via REST API returns all memories, conversations, and managed conversation mappings as JSON',
				'<strong>Challenging Compliance</strong> — Cascade deletion across all 5 data stores; audit trail pseudonymized (not deleted) for legal retention obligations',
			],

			lgpdHeading: 'LGPD — Brazil',
			lgpdPara: 'Brazil\'s Lei Geral de Proteção de Dados (2018, effective 2020) grants extensive data subject rights closely mirroring GDPR. EDDI covers all Article 18 rights with built-in technical capabilities:',
			lgpdItems: [
				'<strong>Access to Data (Art. 18, II)</strong> — Full JSON data export',
				'<strong>Correction (Art. 18, III)</strong> — User memories updatable via <code>PUT /usermemorystore/memories</code>',
				'<strong>Anonymization/Deletion (Art. 18, IV)</strong> — Cascade deletion with SHA-256 pseudonymization of audit records',
				'<strong>Data Portability (Art. 18, V)</strong> — Machine-readable JSON export includes all user data',
				'<strong>Deletion of Unnecessary Data (Art. 18, VI)</strong> — Configurable retention policies with automatic cleanup',
				'<strong>Consent Revocation (Art. 18, IX)</strong> — End conversation and cascade delete endpoints provide the technical mechanism',
			],

			appiHeading: 'APPI — Japan',
			appiPara: 'Japan\'s Act on the Protection of Personal Information (2003, significantly amended 2022) is one of Asia\'s most mature data protection laws. Japan holds an EU adequacy decision, facilitating cross-border data flows. EDDI provides:',
			appiItems: [
				'<strong>Security Measures (Art. 23)</strong> — AES-256-GCM vault encryption, HMAC-SHA256 audit integrity, Keycloak OIDC, RBAC, SSRF protection',
				'<strong>Disclosure to Data Subjects (Art. 33)</strong> — Full data export via REST API',
				'<strong>Correction and Deletion (Art. 34-35)</strong> — Memory updates for correction; cascade deletion for erasure',
				'<strong>Pseudonymized Information (2022 amendment)</strong> — GDPR erasure uses SHA-256 pseudonymization, satisfying APPI\'s pseudonymized information category',
				'<strong>Cross-Border Transfer Documentation (Art. 28)</strong> — LLM provider data flows documented; audit trail records which model/provider processed each turn',
			],

			popiaHeading: 'POPIA — South Africa',
			popiaPara: 'South Africa\'s Protection of Personal Information Act (2013, effective 2021) establishes 8 data processing conditions aligned with EU standards. EDDI provides built-in technical capabilities for each condition:',
			popiaItems: [
				'<strong>Accountability (Condition 1)</strong> — HMAC-signed audit ledger, documented data flows, Apache 2.0 open-source code',
				'<strong>Processing Limitation (Condition 2)</strong> — Token-aware windowing, configurable retention, idle conversation auto-end',
				'<strong>Information Quality (Condition 5)</strong> — Timestamped, versioned conversation state; user memories updatable via REST API',
				'<strong>Security Safeguards (Condition 7)</strong> — AES-256-GCM encryption, HMAC integrity, Keycloak OIDC, RBAC, SSRF protection',
				'<strong>Data Subject Participation (Condition 8)</strong> — Full data export and cascade deletion endpoints',
			],

			pdpaHeading: 'PDPA — Singapore & Thailand',
			pdpaPara: 'The Personal Data Protection Acts in Singapore (2012, amended 2021) and Thailand (2019, effective 2022) are Southeast Asia\'s most mature privacy frameworks. EDDI covers the technical obligations of both jurisdictions:',
			pdpaItems: [
				'<strong>Access Obligation</strong> — Full data export via REST API and MCP tools',
				'<strong>Correction Obligation</strong> — User memories updatable via REST API',
				'<strong>Protection Obligation</strong> — AES-256-GCM encryption, HMAC audit integrity, Keycloak OIDC, RBAC',
				'<strong>Retention Limitation</strong> — Configurable auto-cleanup with idle conversation timeout',
				'<strong>Data Breach Notification</strong> — Incident response runbook template included in EDDI documentation',
			],

			pdpaMYHeading: 'PDPA — Malaysia',
			pdpaMYPara: 'Malaysia\'s Personal Data Protection Act 2010 (Act 709, amended 2024) governs commercial processing of personal data through 7 data protection principles. EDDI provides the technical controls to support deployer compliance:',
			pdpaMYItems: [
				'<strong>General Principle (§6)</strong> — Configurable retention policies and processing-restriction endpoint support purpose-limited, consent-based processing',
				'<strong>Security Principle (§9)</strong> — AES-256-GCM vault encryption, HMAC-SHA256 audit integrity, Keycloak OIDC, RBAC, SSRF protection',
				'<strong>Retention Principle (§10)</strong> — Configurable per-category retention with automatic cleanup; idle conversation auto-end',
				'<strong>Data Integrity Principle (§11)</strong> — Timestamped, versioned conversation state; user memories updatable via REST API',
				'<strong>Access Principle (§12)</strong> — Full data export via <code>GET /admin/gdpr/{userId}/export</code> returns all user data as structured JSON',
				'<strong>Cross-Border Transfers (§129)</strong> — Self-hosted architecture enables deployers to control data residency; audit trail documents all LLM provider data flows',
			],

			piplHeading: 'PIPL — China',
			piplPara: 'China\'s Personal Information Protection Law (2021) is one of the world\'s most comprehensive data protection laws, governing the processing of personal information of individuals within China. EDDI provides the technical infrastructure for PIPL-compliant deployments:',
			piplItems: [
				'<strong>Lawful Processing (Art. 13)</strong> — Configuration-driven agent behavior ensures processing stays within defined purposes; processing restriction API freezes activity on demand',
				'<strong>Individual Rights (Art. 44–49)</strong> — Full data export, cascade deletion, and processing restriction endpoints cover right to know, copy, correct, delete, and restrict',
				'<strong>Data Security (Art. 51)</strong> — AES-256-GCM vault encryption, HMAC-SHA256 audit integrity, Keycloak OIDC, RBAC, zero <code>eval()</code>',
				'<strong>Cross-Border Transfers (Art. 38–39)</strong> — Self-hosted architecture enables on-premises deployment within China; audit trail documents all external data flows for security assessments',
				'<strong>Automated Decision-Making (Art. 24)</strong> — Immutable audit trails with full pipeline tracing provide transparency into AI decision-making; human oversight via Management UI',
				'<strong>Data Retention (Art. 19)</strong> — Configurable retention policies with automatic cleanup enforce minimum-necessary storage periods',
			],

			otherRegionsHeading: 'Additional Jurisdictions',
			otherRegionsPara: 'EDDI\'s data protection infrastructure meets international standards. The following jurisdictions are also supported through the same unified API:',
			otherRegionsItems: [
				'<strong>UK GDPR</strong> (United Kingdom) — Substantially mirrors EU GDPR; EDDI\'s GDPR endpoints satisfy all UK GDPR data subject rights. ICO oversight.',
				'<strong>PIPA</strong> (South Korea) — Strict consent requirements, mandatory DPO, 72-hour breach notification. EDDI provides the technical audit and erasure infrastructure.',
				'<strong>DPDPA</strong> (India, 2023) — Consent-based framework with cross-border restrictions. EDDI\'s export and erasure endpoints satisfy the Digital Personal Data Protection Act requirements.',
				'<strong>Privacy Act + APPs</strong> (Australia) — 13 Australian Privacy Principles; notifiable data breach scheme. EDDI\'s audit trail and data export cover the technical obligations.',
				'<strong>CCPA-style state laws</strong> (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, etc.) — The GDPR/CCPA-compatible API satisfies all emerging US state privacy laws.',
			],

			// ── Section 4: Industry-Specific Compliance ──────────
			industryHeading: 'Industry-Specific Compliance',

			hipaaHeading: 'HIPAA — US Healthcare',
			hipaaPara: 'The Health Insurance Portability and Accountability Act establishes safeguards for Protected Health Information (PHI). EDDI provides the technical infrastructure for HIPAA-compliant AI deployments:',
			hipaaItems: [
				'<strong>Access Controls (§164.312(a))</strong> — Keycloak OIDC with role-based access (eddi-admin, eddi-editor, eddi-viewer)',
				'<strong>Audit Controls (§164.312(b))</strong> — HMAC-signed, immutable audit ledger records every operation with timestamps, user IDs, and outcomes',
				'<strong>Integrity Controls (§164.312(c))</strong> — HMAC-SHA256 tamper detection on all audit entries',
				'<strong>Transmission Security (§164.312(e))</strong> — TLS for transit; AES-256-GCM for secrets at rest via Secrets Vault',
				'<strong>Data Disposal (§164.310(d)(2)(i))</strong> — GDPR cascade deletion endpoint permanently removes PHI across all data stores',
				'<strong>BAA Template</strong> — Business Associate Agreement template included in EDDI documentation for healthcare deployments',
			],

			soc2Heading: 'SOC 2 Readiness',
			soc2Para: 'SOC 2 Type II evaluates systems against Trust Services Criteria. EDDI\'s architecture provides technical controls that support organizations pursuing SOC 2 attestation:',
			soc2Items: [
				'<strong>Security</strong> — OIDC/Keycloak authentication, RBAC, Secrets Vault (AES-256-GCM), zero eval(), path traversal protection, URL validation',
				'<strong>Availability</strong> — Horizontal scaling via NATS JetStream, dual database support (MongoDB/PostgreSQL), Kubernetes-native deployment',
				'<strong>Processing Integrity</strong> — Immutable HMAC-signed audit ledger with per-operation cryptographic integrity verification',
				'<strong>Confidentiality</strong> — Secret redaction filter scrubs API keys and vault references from audit entries; PII-safe logging with SHA-256 pseudonyms',
				'<strong>Privacy</strong> — Full data subject rights API (erasure, export, restriction), configurable retention, processing restriction controls',
			],

			// ── Section 5: Unified API ───────────────────────────
			apiHeading: 'One API for Global Compliance',
			apiPara: 'Every privacy regulation listed above is served by the <strong>same unified REST API and MCP tools</strong>. Whether you are responding to a GDPR erasure request in Germany, a CCPA deletion request in California, or a PDPA access request in Singapore — the same endpoints handle it all:',
			apiItems: [
				'<strong><code>DELETE /admin/gdpr/{userId}</code></strong> — Cascade erasure across 5 data stores (user memories, conversations, managed mappings, logs, audit entries)',
				'<strong><code>GET /admin/gdpr/{userId}/export</code></strong> — Full user data export as structured JSON (memories, conversations, audit records)',
				'<strong><code>POST /admin/gdpr/{userId}/restrict</code></strong> — Freeze processing while preserving data for dispute resolution',
				'<strong>MCP: <code>delete_user_data</code></strong> — AI-orchestrated cascade erasure (requires explicit confirmation)',
				'<strong>MCP: <code>export_user_data</code></strong> — AI-orchestrated data export for automated DSAR workflows',
			],

			// ── Section 6: Closing ───────────────────────────────
			heading3: 'Built for Regulated Industries Worldwide',
			para2: 'Healthcare, financial services, government, manufacturing, and other regulated sectors can deploy EDDI with confidence. The platform provides the transparency, auditability, and control mechanisms required by 17+ regulatory frameworks — from the EU AI Act and GDPR in Europe to HIPAA in the United States, PIPEDA in Canada, LGPD in Brazil, APPI in Japan, POPIA in South Africa, PDPA in Southeast Asia, Malaysia\'s PDPA, and China\'s PIPL. Compliance is not an afterthought — it is an architectural foundation.',
		},
		// ─── Track Record ─────────────────────────────────────
		trust: {
			title: 'Track Record',
			description:
				'EDDI is backed by government-funded research, deployed in enterprise production, and validated by academic institutions — with OpenSSF, Codacy, and Red Hat certifications.',

			// Hero
			heroTitle: 'Enterprise-Grade.',
			heroHighlight: 'Community-Proven.',
			heroDesc:
				'EDDI is not a weekend project. It is backed by <strong>government-funded research</strong>, deployed in <strong>enterprise production</strong>, and validated by <strong>academic institutions and industry partners</strong>.',

			// Stats bar
			statPulls: 'Docker Pulls',
			statTests: 'Tests · 0 Failures',
			statProviders: 'LLM Providers',
			statCertified: 'Red Hat Certified',

			// Timeline
			timelineTitle: 'Two Decades of Engineering',
			timelineDesc: 'Almost twenty years of continuous development — long before the LLM era.',
			timeline: [
				{ year: '2006', text: '<strong>Project founded</strong> in Vienna (Europe) — early research into dialogue management and conversational state.' },
				{ year: '2008', text: 'Incubated at <strong>inits.at</strong> (a university business incubator) with academic oversight, focusing on research-grade engineering and sustainable product development.' },
				{ year: '2018', text: 'Selected for <strong>weXelerate</strong> (a top-tier European accelerator program) · Launched as open source under Apache 2.0.' },
				{ year: '2018', text: 'First <strong>EDDI Chatbot Hackathon</strong> at weXelerate — co-sponsored by an accelerator and a major telecom provider.' },
				{ year: '2019', text: '<strong>NYC Chatbot Hackathon</strong> at Deutsche Bank Innovation Labs — co-sponsored by Google and MongoDB. EDDI teams place as runners-up.' },
				{ year: '2020', text: 'EU-funded <strong>YouTwinDi</strong> digital twin research project via the European Language Grid.' },
				{ year: '2020', text: 'Online Chatbot Hackathon — community-driven event expanding EDDI\'s open-source reach.' },
				{ year: '2021', text: 'EU Erasmus+ <strong>EDUBOTS</strong> program — EDDI powers multi-country chatbot research and deployment across universities.' },
				{ year: '2021', text: 'Online Chatbot Hackathon — virtual event for pedagogical chatbot development.' },
				{ year: '2023', text: 'EDDI adapts <strong>LLM integrations</strong> — connecting to modern large language models via LangChain4j.' },
				{ year: '2025', text: 'EDDI adapts to <strong>agent flows</strong> — intent-based routing, managed conversations, and multi-agent orchestration.' },
				{ year: '2026', text: '<strong>v6</strong> — 42 MCP tools, A2A protocol, group discussions, visual management UI, model cascading.' },
			],

			// Institutional backing
			institutionsTitle: 'Backed by Institutions',
			institutionsDesc: 'Government-funded research and institutional validation — not just marketing claims.',
			instFFGTitle: 'FFG Government Research Grant',
			instFFGDesc: 'EDDI was deployed in <strong>SecLearn</strong>, a national cybersecurity training initiative funded by the FFG (government research agency), in collaboration with the AIT (national technology research institute).',
			instEUTitle: 'EU-Funded Research — European Language Grid',
			instEUDesc: 'EU-funded <strong>YouTwinDi</strong> digital twin research project (2020–2021), exploring autonomous virtual assistants with persistent memory and multi-language support.',
			instEdubotsTitle: 'EU Erasmus+ EDUBOTS Program',
			instEdubotsDesc: 'EDDI powered student engagement chatbots across <strong>multiple European universities</strong> as part of the Erasmus+ EDUBOTS Knowledge Alliance — used by EdTech Foundry (differ.chat) for multi-country deployments.',
			instWexTitle: 'weXelerate European Accelerator',
			instWexDesc: 'Selected for <strong>weXelerate</strong> (a leading European innovation accelerator), connecting LABS.AI with corporate partners and validating the platform\'s commercial viability.',
			instInitsTitle: 'inits.at University Incubator',
			instInitsDesc: 'Incubated at the <strong>inits.at</strong> university business incubator, with early-stage institutional support prioritizing academic rigor and sustainable business modeling.',
			instRedHatTitle: 'Red Hat Certified Container',
			instRedHatDesc: 'EDDI\'s Docker image is <strong>IBM/Red Hat certified</strong>, passing automated preflight checks for security, stability, and enterprise deployment readiness.',

			// Enterprise deployment
			enterpriseTitle: 'Deployed in Enterprise Production',
			enterpriseDesc: 'EDDI powers the <strong>conversational AI experiences</strong> at <a href="https://www.gnowbe.com" target="_blank" rel="noopener">Gnowbe</a> — an enterprise enablement platform. EDDI handles the real-time chat interactions with learners and content creators, managing concurrency, multi-model routing, and conversation state at production scale.',
			enterpriseLinkText: 'Learn more about Gnowbe →',
			enterpriseLinkUrl: 'https://www.gnowbe.com',

			// Developer trust
			devTrustTitle: 'Verified by the Community',
			devTrustDesc: 'Every trust signal is live, automated, and independently verifiable.',
			devOpenSSF: 'OpenSSF Best Practices',
			devOpenSSFDesc: 'Linux Foundation security and quality certification',
			devCodacy: 'Codacy Code Quality',
			devCodacyDesc: 'Automated third-party code analysis',
			devDocker: 'Docker Hub',
			devDockerDesc: 'Container adoption metric',
			devCI: 'CI Passing',
			devCIDesc: 'Automated build verification on every commit',
			devCodeQL: 'CodeQL Clean',
			devCodeQLDesc: 'GitHub security vulnerability scanning',
			devTests: '2,000+ Tests',
			devTestsDesc: 'Zero failures, enforced on every merge',
			devIntegration: '42 Integration Tests',
			devIntegrationDesc: 'Full-stack REST API verification with real database',
			devE2E: '21 E2E Test Suites',
			devE2EDesc: 'Browser-based Playwright tests for the Manager UI',
			devApache: 'Apache 2.0 License',
			devApacheDesc: 'Fully open source — no vendor lock-in',

			// CTA
			ctaTitle: 'Ready to Deploy?',
			ctaGetStarted: 'Get Started in 5 Minutes',
			ctaGetStartedDesc: 'Install EDDI, create your first agent, and start a conversation.',
			ctaDocs: 'Browse Documentation ↗',
			ctaDocsDesc: 'Architecture, MCP tools, REST API, deployment guides, and more.',
		},
	},

	// ─── Cookie Consent Banner ──────────────────────────────────
	cookieBanner: {
		title: 'We Value Your Privacy',
		text: 'We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
		privacyNote: 'For more information, see our',
		acceptAll: 'Accept All',
		manageCookies: 'Manage Cookies',
		modalTitle: 'Manage Your Preferences',
		modalDesc: 'You can adjust your cookie settings below. Necessary cookies cannot be disabled.',
		necessaryLabel: 'Necessary Cookies',
		necessaryDesc: 'Required for the website to function properly.',
		analyticsLabel: 'Analytics & Performance',
		analyticsDesc: 'Help us understand how visitors interact with our website.',
		marketingLabel: 'Marketing Cookies',
		marketingDesc: 'Used to track visitors across websites to display relevant advertisements.',
		rejectAll: 'Reject All',
		savePreferences: 'Save Preferences',
	},

	// ─── Contact Page ───────────────────────────────────────────
	contact: {
		title: 'Contact Us',
		description: 'Get in touch with the EDDI team — stay informed about releases, features, and enterprise AI orchestration.',
		heading: 'Get in Touch',
		subheading: 'Have questions? Want to learn more about EDDI for your organization? Reach out to us.',
		newsletterTitle: 'Stay in the Loop',
		newsletterDesc: 'Get updates on new releases, features, and enterprise AI orchestration best practices. No spam — just signal.',
		directContactTitle: 'Direct Contact',
		directContactDesc: 'Prefer email? Reach us directly at:',
		email: 'contact@labs.ai',
		githubTitle: 'Open Source Community',
		githubDesc: 'Join the conversation on GitHub — report issues, request features, or contribute code.',
		githubLink: 'Visit EDDI on GitHub',
	},

	// ─── Legal Pages ────────────────────────────────────────────
	legal: {
		// Footer links
		imprintLink: 'Imprint',
		privacyLink: 'Privacy Policy',

		// Cookie banner
		cookiePrivacyNote: 'For more information, see our <a href="{privacyUrl}">Privacy Policy</a>.',

		// ── Imprint (Impressum) ──────────────────────────────────
		imprint: {
			title: 'Imprint',
			description: 'Legal notice and company information for EDDI by LABS.AI.',
			heading: 'Imprint',
			subheading: 'Information pursuant to §5 ECG (E-Commerce-Gesetz) and §25 MedienG (Mediengesetz)',

			companyHeading: 'Company Information',
			companyName: 'LABS.AI',
			companyLegalForm: 'Ing. Gregor Jarisch',
			address: 'Lindengasse 58/6, 1070 Vienna, Austria',
			vatId: 'ATU65272778',

			contactHeading: 'Contact',
			emailLabel: 'Email',
			email: 'contact@labs.ai',

			projectHeading: 'Open Source Project',
			projectMaintainers: 'EDDI is maintained by Gregor Jarisch (Project Management & Development) and Franz Weber (Cyber Security & Partner Management).',
			projectLicense: 'Licensed under <a href="https://github.com/labsai/EDDI/blob/main/LICENSE" target="_blank" rel="noopener">Apache License 2.0</a>.',

			vatHeading: 'VAT Identification Number',
			vatNote: 'VAT ID pursuant to §27a UStG (Umsatzsteuergesetz)',

			authorityHeading: 'Supervisory Authority',
			authorityNote: 'Member of the Austrian Economic Chamber (WKÖ)',

			disputeHeading: 'EU Dispute Resolution',
			disputeText: 'The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>. We are neither obligated nor willing to participate in a dispute resolution procedure before a consumer arbitration board.',

			liabilityHeading: 'Liability for Content',
			liabilityText: 'The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages according to §7 (1) ECG. However, according to §§8 to 10 ECG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',

			linksHeading: 'Liability for Links',
			linksText: 'Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.',

			copyrightHeading: 'Copyright',
			copyrightText: 'The content and works created by the site operators on these pages are subject to Austrian copyright law. The reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected.',
		},

		// ── Privacy Policy ──────────────────────────────────────
		privacy: {
			title: 'Privacy Policy',
			description: 'Privacy Policy for EDDI by LABS.AI — how we handle your data.',
			heading: 'Privacy Policy',
			lastUpdated: 'Last updated: April 11, 2026',
			intro: 'At LABS.AI, we are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our EDDI website (<a href="https://eddi.labs.ai">eddi.labs.ai</a>).',

			// 1. Data Controller
			controllerHeading: '1. Data Controller',
			controllerText: 'The data controller responsible for data processing on this website is:',
			controllerName: 'LABS.AI, Ing. Gregor Jarisch',
			controllerAddress: 'Lindengasse 58/6, 1070 Vienna, Austria',
			controllerEmail: 'contact@labs.ai',
			controllerVat: 'ATU65272778',

			// 2. Data Collection
			collectionHeading: '2. What Data We Collect',
			collectionProvidedHeading: '2.1 Information You Provide',
			collectionProvidedItems: [
				'Contact information (name, email) when you subscribe to our newsletter via HubSpot',
				'Information you provide when contacting us',
			],
			collectionAutoHeading: '2.2 Information Collected Automatically',
			collectionAutoItems: [
				'Technical information: IP address (anonymized), browser type, operating system, referring URL',
				'Usage data: pages viewed, time spent, navigation paths',
				'This data is collected only with your consent via cookies, or without cookies via privacy-friendly analytics (Umami)',
			],

			// 3. Purpose and Legal Basis
			purposeHeading: '3. Purpose and Legal Basis',
			purposeConsentHeading: '3.1 Based on Consent (Art. 6(1)(a) GDPR)',
			purposeConsentItems: [
				'Google Analytics: website usage analysis (only after explicit cookie consent)',
				'Newsletter: marketing communications via HubSpot (only after opt-in)',
			],
			purposeLegitHeading: '3.2 Based on Legitimate Interests (Art. 6(1)(f) GDPR)',
			purposeLegitItems: [
				'Umami Analytics: cookieless, privacy-friendly website analytics to improve our website (no personal data is stored)',
				'Ensuring the security and functionality of our website',
			],

			// 4. Cookies
			cookieHeading: '4. Cookies and Tracking Technologies',
			cookieIntro: 'We use the following categories of cookies and tracking technologies:',
			cookieNecessaryHeading: 'Necessary',
			cookieNecessaryDesc: 'Essential for the website to function properly (e.g., cookie consent preference stored in localStorage). Cannot be disabled.',
			cookieAnalyticsHeading: 'Analytics & Performance',
			cookieAnalyticsDesc: 'Google Analytics (G-L1011GL1PY): Tracks website usage with cookies. Only activated after you explicitly consent via the cookie banner. Data is processed by Google LLC (USA) under Standard Contractual Clauses.',
			cookieMarketingHeading: 'Marketing',
			cookieMarketingDesc: 'Currently not used. The toggle is reserved for future use.',
			cookieCookielessHeading: 'Cookieless Analytics',
			cookieCookielessDesc: 'Umami Analytics: Privacy-friendly analytics that does not use cookies and does not collect personal data. Loaded without consent as it is GDPR-safe by design.',
			cookieManage: 'You can manage your cookie preferences at any time via the "Manage Cookies" option in our cookie banner.',

			// 5. Third-Party Services
			thirdPartyHeading: '5. Third-Party Services and Data Processors',
			thirdPartyIntro: 'We use the following third-party services to operate this website:',
			thirdPartyItems: [
				'<strong>Google Analytics</strong> (Google LLC, USA) — Website analytics. Data is transferred to the USA under Standard Contractual Clauses (Art. 46(2)(c) GDPR). Only activated with your consent.',
				'<strong>Umami Analytics</strong> (Umami Software Inc.) — Privacy-friendly, cookieless analytics. No personal data is collected or stored.',
				'<strong>HubSpot</strong> (HubSpot Inc., USA) — Newsletter signup form and contact management. Data is transferred to the USA under Standard Contractual Clauses. Only activated with your consent.',
				'<strong>GitHub Pages</strong> (GitHub Inc., USA) — Website hosting. Access logs may be processed by GitHub.',
			],

			// 6. International Transfers
			transferHeading: '6. International Data Transfers',
			transferText: 'Some of our service providers are based outside the European Economic Area (EEA). When personal data is transferred to countries outside the EEA, we ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission or adequacy decisions.',

			// 7. Data Retention
			retentionHeading: '7. Data Retention',
			retentionText: 'We retain your personal data only as long as necessary for the purposes for which it was collected. Newsletter subscriber data is retained until you unsubscribe. Analytics data is retained according to the respective service provider\'s retention policies (Google Analytics: 14 months; Umami: aggregated, non-personal).',

			// 8. Your Rights
			rightsHeading: '8. Your Rights',
			rightsIntro: 'Under the GDPR, you have the following rights regarding your personal data:',
			rightsItems: [
				'<strong>Right of access</strong> (Art. 15) — Request a copy of your personal data',
				'<strong>Right to rectification</strong> (Art. 16) — Request correction of inaccurate data',
				'<strong>Right to erasure</strong> (Art. 17) — Request deletion of your personal data',
				'<strong>Right to restrict processing</strong> (Art. 18) — Request restriction of processing',
				'<strong>Right to data portability</strong> (Art. 20) — Receive your data in a machine-readable format',
				'<strong>Right to object</strong> (Art. 21) — Object to processing based on legitimate interests',
				'<strong>Right to withdraw consent</strong> (Art. 7(3)) — Withdraw consent at any time (e.g., via cookie settings)',
			],
			rightsContact: 'To exercise any of these rights, please contact us at <a href="mailto:contact@labs.ai">contact@labs.ai</a>. We will respond to your request within one month.',

			// 9. Data Security
			securityHeading: '9. Data Security',
			securityText: 'We implement appropriate technical and organizational measures to protect your personal data, including HTTPS encryption for all data in transit, and access controls for administrative systems.',

			// 10. Children
			childrenHeading: '10. Children\'s Privacy',
			childrenText: 'Our website is not intended for children under the age of 16. We do not knowingly collect personal data from children.',

			// 11. Changes
			changesHeading: '11. Changes to This Privacy Policy',
			changesText: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on this page and updating the "Last updated" date.',

			// 12. Supervisory Authority
			authorityHeading: '12. Supervisory Authority',
			authorityText: 'You have the right to lodge a complaint with the competent supervisory authority. In Austria, this is:',
			authorityName: 'Austrian Data Protection Authority (Datenschutzbehörde)',
			authorityUrl: 'https://www.dsb.gv.at',

			// 13. Contact
			contactHeading: '13. Contact',
			contactText: 'If you have questions about this Privacy Policy or our data practices, please contact us:',
			contactDetails: 'LABS.AI — Data Protection<br>Vienna, Austria<br>Email: <a href="mailto:contact@labs.ai">contact@labs.ai</a>',
		},
	},
};

export type TranslationSchema = typeof en;
export default en;
