/**
 * English translations — Source of truth.
 * All other locale files must export the same shape.
 */
const en = {
	// ─── Site Meta ──────────────────────────────────────────────
	meta: {
		siteTitle: 'EDDI',
		siteDescription:
			'EDDI — The Enterprise AI Orchestrator. Configuration-driven, Java-native AI middleware built on Quarkus (v6.0.0-RC1 Preview).',
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
		mcpServerDesc: '48 tools for AI-native control',
		configAsCode: 'Config-as-Code',
		configAsCodeDesc: 'JSON config, not compiled Java',
		securityFirst: 'Security-First',
		securityFirstDesc: 'Vault, audit trails, no eval()',
		performance: 'Performance',
		performanceDesc: 'Java 25 Virtual Threads',
		multiAgent: 'Multi-Agent',
		multiAgentDesc: 'Intent routing & discovery',
		observability: 'Observability',
		observabilityDesc: 'Pipeline logs & audit trails',
		codeQuality: 'Code Quality',
		codeQualityDesc: '1,500+ tests, zero failures',
		aiReady: 'AI-Ready',
		aiReadyDesc: 'Built for coding agents',
		viewAllFeatures: 'View all features →',
		// Solutions dropdown
		whyEddi: 'Why EDDI?',
		whyEddiDesc: 'The only JVM-native visual AI middleware',
		vsAlternatives: 'vs. Alternatives',
		vsAlternativesDesc: 'Compare with Spring AI, Flowise, n8n',
		euAiAct: 'EU AI Act',
		euAiActDesc: 'Compliance & governance',
		useCases: 'Use Cases',
		useCasesDesc: 'Real-world deployment patterns',
		// Mobile
		allFeatures: 'All Features',
		mcpServerMobile: 'MCP Server (48 Tools)',
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
	},

	// ─── Footer ─────────────────────────────────────────────────
	footer: {
		tagline: 'The Enterprise AI Orchestrator',
		subtitle: 'Configuration-driven. Java-native. Production-ready.',
		// Trust bar
		redHatCertified: 'Red Hat Certified Container',
		apache2: 'Apache 2.0 Licensed',
		tests: '1,500+ Tests · Zero Failures',
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
		// Develop links
		gettingStarted: 'Getting Started',
		documentation: 'Documentation ↗',
		githubLink: 'GitHub ↗',
		// Resources links
		whyEddi: 'Why EDDI?',
		vsAlternatives: 'vs. Alternatives',
		euAiAct: 'EU AI Act',
		useCases: 'Use Cases',
		// Bottom
		initiated: 'Initiated in Vienna. Developed with ❤️ in Europe. Made for the World.',
	},

	// ─── Newsletter ─────────────────────────────────────────────
	newsletter: {
		title: 'Stay in the Loop',
		description:
			'Get updates on new releases, features, and enterprise AI orchestration best practices. No spam — just signal.',
		compactTitle: 'Newsletter',
		compactDescription: 'Stay updated on EDDI releases and AI orchestration insights.',
	},

	// ─── Homepage ───────────────────────────────────────────────
	home: {
		title: 'The Enterprise AI Orchestrator',
		heroTitle: 'The Enterprise',
		heroHighlight: 'AI Orchestrator',
		heroTagline:
			'Configuration-driven. Java-native. Visually managed. The only AI middleware built natively on the JVM — currently in <strong>v6.0.0-RC1 Preview</strong>.',
		// The Problem
		problemTitle: 'The Problem',
		problemDesc:
			'Enterprise Java has <strong>no visual AI orchestration middleware</strong>. Teams are stuck in a painful, fractured lifecycle:',
		problemCard1Title: 'The Prototype Trap',
		problemCard1Desc:
			'Teams prototype with Python/Flowise/n8n — then <strong>rewrite everything from scratch</strong> in Java for production. Visual prototypes are discarded entirely.',
		problemCard2Title: 'Boilerplate Fatigue',
		problemCard2Desc:
			'Using Spring AI or LangChain4j means building REST controllers, auth layers, and state management <strong>from scratch</strong>. Every prompt tweak requires recompilation.',
		problemCard3Title: 'BPMN Friction',
		problemCard3Desc:
			'Forcing non-deterministic AI agents into deterministic Camunda/Temporal workflows creates <strong>severe impedance mismatches</strong> and brittle architectures.',
		// The Solution
		solutionTitle: 'The Solution',
		solutionDesc:
			'EDDI fills an <strong>absolute void</strong> in the Java ecosystem — a deployable middleware platform with a visual management UI:',
		sol1Title: 'Configuration-as-Code',
		sol1Desc:
			'Agent logic, pipelines, and tool definitions are <strong>JSON configurations</strong> — not compiled Java. Prompt engineers iterate instantly via the React UI or REST API, without touching Java code.',
		sol2Title: '48 MCP Tools',
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
			'Java 25 Virtual Threads on Quarkus. <strong>Millions of lightweight threads</strong> for I/O-bound LLM workloads. No event loop blocking, no single-threaded bottlenecks.',
		sol6Title: 'Multi-Agent Orchestration',
		sol6Desc:
			'Intent-based agent discovery, managed conversations, agent triggers, and A/B routing. <strong>One conversation per intent+user</strong>, auto-created and auto-managed.',
		// Trusted & Certified
		trustedTitle: 'Trusted & Certified',
		trustRedHat: 'Red Hat Certified Container',
		trustRedHatDesc: 'Docker image certified by IBM',
		trustApache: 'Apache 2.0 Licensed',
		trustApacheDesc: '100% open-source & enterprise-ready',
		trustTests: '1,500+ Tests · 0 Failures',
		trustTestsDesc: 'Rigorous CI/CD & code coverage',
		// Built on Proven Technology
		techTitle: 'Built on Proven Technology',
		techJava: 'Java 25',
		techJavaDesc: 'Enterprise runtime',
		techQuarkus: 'Quarkus',
		techQuarkusDesc: 'Cloud-native, fast',
		techLangchain: 'LangChain4j',
		techLangchainDesc: '20+ LLM providers',
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
		faq1A: 'EDDI is an open-source, JVM-native AI orchestration middleware built on Quarkus and Java 25. It enables enterprise teams to build, configure, and deploy AI-powered agents using JSON configuration rather than compiled code. EDDI provides a complete platform with a <strong>production-ready React management UI</strong> (the EDDI Manager), built-in REST APIs, conversation state management, security (OIDC/Keycloak), immutable audit trails, and 48 MCP tools — all deployable via Docker or Kubernetes.',
		faq2Q: 'How is EDDI different from Spring AI or LangChain4j?',
		faq2A: 'Spring AI and LangChain4j are excellent <strong>libraries</strong> — EDDI actually uses LangChain4j internally. The key difference is that EDDI is a <strong>deployable middleware platform</strong>, not a library. With Spring AI, you still need to build REST controllers, authentication, conversation state management, audit logging, and management UIs yourself. EDDI provides all of this out of the box.',
		faq3Q: 'Is EDDI production-ready for enterprise use?',
		faq3A: 'Yes. EDDI runs on Java 25 with Quarkus, leveraging Virtual Threads for massive I/O-bound concurrency. It supports MongoDB and PostgreSQL, includes built-in OIDC/Keycloak authentication, provides immutable cryptographic audit trails for compliance (including EU AI Act), and scales horizontally via NATS JetStream.',
		faq4Q: 'What is the Model Context Protocol (MCP)?',
		faq4A: 'The Model Context Protocol (MCP) is an open standard that allows AI assistants like Claude Desktop, IDE plugins, and custom clients to interact with external tools programmatically. EDDI exposes 48 MCP tools spanning conversation management, agent administration, setup automation, schedule management, and diagnostics.',
		faq5Q: 'Can EDDI replace Flowise or n8n for production workloads?',
		faq5A: 'EDDI serves a similar visual-building purpose but on the JVM instead of Node.js. Unlike Flowise and n8n, EDDI uses no <code>eval()</code> or code blocks, runs Java 25 Virtual Threads for enterprise-grade concurrency, supports OIDC/Keycloak authentication, and stores data in MongoDB or PostgreSQL. It is designed for regulated industries.',
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
		step1Title: '1. Start EDDI with Docker',
		step1Desc: 'The fastest way to run EDDI:',
		step1After: 'EDDI will be available at <code>http://localhost:7070</code>.',
		step2Title: '2. Connect via MCP',
		step2Desc:
			'If you use <strong>Claude Desktop</strong> or any MCP-compatible client, add EDDI as an MCP server:',
		step2After: "Now you can interact with EDDI's 48 MCP tools directly from your AI assistant.",
		step3Title: '3. Create Your First Agent',
		step3Desc: 'Use the <code>setup_agent</code> MCP tool to create a fully working agent in one call:',
		step3After: 'This creates the rules, LLM config, workflow, agent, and deploys it — all in one step.',
		step4Title: '4. Chat with Your Agent',
		step5Title: '5. Open the Manager UI',
		step5Desc:
			'Navigate to <code>http://localhost:7070</code> to visually manage your agents, workflows, and conversations with the EDDI Manager.',
		managerImageAlt: 'EDDI Manager UI Dashboard Preview',
		whatsNextTitle: "What's Next?",
		nextAllFeatures: 'All Features',
		nextAllFeaturesDesc: 'Explore everything EDDI offers',
		nextMcpServer: 'MCP Server',
		nextMcpServerDesc: 'Browse all 48 MCP tools',
		nextDocs: 'Documentation ↗',
		nextDocsDesc: 'Deep-dive into architecture & APIs',
		nextWhyEddi: 'Why EDDI?',
		nextWhyEddiDesc: 'The enterprise case for EDDI',
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
			'Every capability that makes EDDI the enterprise AI orchestrator — EDDI Manager UI, config-as-code, 48 MCP tools, security-first architecture, and more.',
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
			'Agent logic is JSON configuration, not compiled code. Prompt engineers iterate instantly — <strong>no recompilation needed</strong>.',
		mcpCardTitle: '🔌 MCP Server (48 Tools)',
		mcpCardDesc:
			'Full AI-native control via the <strong>Model Context Protocol</strong>. Claude Desktop, Cursor, and custom clients manage agents programmatically.',
		securityCardTitle: '🔐 Security-First',
		securityCardDesc:
			'No <code>eval()</code>, vault integration, path traversal protection, OIDC/Keycloak, <strong>cryptographic audit trails</strong>.',
		perfCardTitle: '🚀 Performance',
		perfCardDesc:
			'Java 25 Virtual Threads on Quarkus — <strong>millions of lightweight threads</strong> for I/O-bound LLM workloads.',
		multiCardTitle: '🤖 Multi-Agent',
		multiCardDesc:
			'Intent-based agent discovery, managed conversations, agent triggers, and <strong>A/B routing</strong> across multiple agents.',
		// Engineering section
		engTitle: 'Engineering Excellence',
		obsCardTitle: '📊 Observability',
		obsCardDesc:
			'Every pipeline step logged with <strong>immutable audit trails</strong> — tokens, cost, timing, and tool calls.',
		cqCardTitle: '🧪 Code Quality',
		cqCardDesc:
			'<strong>1,500+ tests with zero failures.</strong> Checkstyle reduced from 697 to 81 warnings. CI/CD enforced on every merge.',
		aiCardTitle: '🧩 AI-Ready',
		aiCardDesc:
			'48 MCP tools, predictable CRUD patterns, self-documenting APIs. <strong>Built for coding agents</strong> to work with.',
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
			para2: 'The Manager enables non-developers to iterate on agent behavior without touching Java code. Prompt engineers can modify rules, test conversations, and deploy changes — all from the browser.',
		},
		mcpServer: {
			title: 'MCP Server — 48 Tools',
			description:
				'EDDI exposes its full capabilities via the Model Context Protocol, enabling Claude Desktop, Cursor, and custom AI clients to manage agents programmatically.',
			heading1: 'AI-Native Control Plane',
			para1: 'The Model Context Protocol (MCP) is an open standard that allows AI assistants to interact with external tools. EDDI implements a comprehensive MCP server with <strong>48 tools</strong> spanning every aspect of the platform.',
			heading2: 'Tool Categories',
			items: [
				'<strong>Conversation Tools</strong> — Chat with agents, manage conversations, read history',
				'<strong>Admin Tools</strong> — List, inspect, and manage deployed agents',
				'<strong>Setup Tools</strong> — Create complete agents in a single call with <code>setup_agent</code>',
				'<strong>Resource CRUD</strong> — Full create/read/update/delete for rules, workflows, LLM configs, connectors',
				'<strong>Diagnostic Tools</strong> — Health checks, configuration inspection, environment diagnostics',
				'<strong>Schedule Management</strong> — Manage periodic agent tasks and triggers',
			],
			heading3: 'MCP Client Support',
			para2: 'EDDI agents can also <strong>consume external MCP tools</strong> during conversations. Configure MCP server endpoints, and agents auto-discover and invoke tools based on conversation context — powered by LangChain4j\'s MCP client integration.',
		},
		configAsCode: {
			title: 'Configuration-as-Code',
			description:
				'Agent logic, pipelines, and tool definitions are JSON configurations — not compiled Java. Iterate instantly without recompilation.',
			heading1: 'JSON-Driven Agent Logic',
			para1: "In EDDI, everything that defines an agent's behavior is a <strong>JSON configuration resource</strong>: rules (system prompts), LLM connector settings, workflow pipelines, tool configurations, and deployment descriptors.",
			heading2: 'Why This Matters',
			items: [
				'<strong>No recompilation</strong> — Change agent behavior by updating JSON, not Java code',
				'<strong>Prompt engineer friendly</strong> — Non-developers modify rules via UI or REST API',
				'<strong>Version controlled</strong> — JSON configs live in Git alongside infrastructure-as-code',
				'<strong>Hot-reloadable</strong> — Changes take effect immediately, no server restart needed',
				'<strong>Auditable</strong> — Every configuration change is tracked in the immutable audit trail',
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
				'<strong>GraalVM Native Image</strong> — Sub-second boot times, minimal memory footprint',
				'<strong>Quarkus Runtime</strong> — Cloud-native, dev-mode hot reload, optimized for containers',
				'<strong>NATS JetStream</strong> — Horizontal scaling with event-driven architecture',
				'<strong>Dual Database</strong> — MongoDB or PostgreSQL with database abstraction layer',
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
				'1,500+ tests with zero failures. Checkstyle warnings reduced from 697 to 81. CI/CD enforced quality gates on every merge.',
			heading1: 'Engineering Rigor',
			para1: 'EDDI maintains <strong>exceptional code quality</strong> through comprehensive testing, static analysis, and CI/CD quality gates. Every pull request must pass the full test suite before merge.',
			heading2: 'Quality Metrics',
			items: [
				'<strong>1,500+ Tests</strong> — Unit, integration, and end-to-end coverage',
				'<strong>Zero Failures</strong> — Clean CI on every build',
				'<strong>Checkstyle Enforcement</strong> — Reduced from 697 to 81 warnings',
				'<strong>MCP Tool Tests</strong> — Comprehensive coverage of all 48 MCP tools',
				'<strong>CI/CD Quality Gates</strong> — Automated checks prevent regressions',
			],
		},
		aiReady: {
			title: 'AI-Ready Architecture',
			description:
				'48 MCP tools, predictable CRUD patterns, self-documenting APIs. Built from the ground up for coding agents to work with.',
			heading1: 'Designed for AI Collaboration',
			para1: 'EDDI is built with the assumption that <strong>coding agents will manage it</strong>. Every API follows predictable patterns, every resource has consistent CRUD operations, and the MCP server enables full programmatic control.',
			heading2: 'AI-Friendly Design',
			items: [
				'<strong>Predictable Patterns</strong> — Consistent resource naming, CRUD conventions, and error handling',
				'<strong>Self-Documenting APIs</strong> — OpenAPI specs and MCP tool descriptions auto-generated',
				'<strong>LLMs.txt Support</strong> — AI-discoverable site content via llms.txt and llms-full.txt',
				'<strong>MCP-First</strong> — 48 tools designed for AI assistant integration',
				'<strong>Setup Automation</strong> — Single-call agent creation with <code>setup_agent</code>',
			],
		},
		// Enterprise pages
		whyEddi: {
			title: 'Why EDDI?',
			description:
				'The only JVM-native visual AI orchestration middleware. Configuration-driven agent logic, a complete management UI, and enterprise-grade security — all in one deployable platform.',
			heading1: 'The Gap in Enterprise Java',
			para1: 'Enterprise Java has <strong>no visual AI orchestration middleware</strong>. Teams either prototype with Python/Node.js tools and rewrite for production, or build everything from scratch using libraries like Spring AI or LangChain4j.',
			heading2: 'EDDI Fills This Void',
			para2: 'EDDI is a <strong>deployable middleware platform</strong>, not a library. It provides everything teams need out of the box:',
			items: [
				'<strong>Visual Management UI</strong> — The EDDI Manager for building and monitoring agents',
				'<strong>Configuration-as-Code</strong> — Agent logic is JSON, not compiled Java',
				'<strong>48 MCP Tools</strong> — Full AI-native control via Model Context Protocol',
				'<strong>Enterprise Security</strong> — OIDC, vault, audit trails, no eval()',
				'<strong>Production Infrastructure</strong> — REST APIs, conversation state management, Prometheus metrics',
				'<strong>Horizontal Scaling</strong> — NATS JetStream for distributed architectures',
			],
			heading3: 'Who Should Use EDDI?',
			items2: [
				'<strong>Enterprise Java teams</strong> who need AI orchestration without leaving the JVM',
				'<strong>Prompt engineers</strong> who want to iterate without recompiling Java',
				'<strong>Regulated industries</strong> that require audit trails and EU AI Act compliance',
				'<strong>Platform teams</strong> building internal AI services for multiple departments',
			],
		},
		vsAlternatives: {
			title: 'EDDI vs. Alternatives',
			description:
				'How EDDI compares with Spring AI, LangChain4j, Flowise, n8n, and other AI orchestration approaches.',
			heading1: 'Platform vs. Library',
			para1: 'The fundamental difference: EDDI is a <strong>deployable middleware platform</strong>, not a library. While libraries give you building blocks, EDDI gives you the entire building — ready to deploy.',
			heading2: 'Comparison',
			heading3a: 'vs. Spring AI / LangChain4j',
			para2: 'Spring AI and LangChain4j are excellent <strong>libraries</strong> (EDDI uses LangChain4j internally). But with libraries, you still need to build REST controllers, authentication, conversation management, audit logging, and management UIs yourself. EDDI provides all of this out of the box.',
			heading3b: 'vs. Flowise / n8n',
			para3: 'Flowise and n8n are Node.js-based visual builders. EDDI serves a similar purpose but on the JVM:',
			vsItems: [
				'<strong>No eval()</strong> — Eliminates CVSS 10.0 remote code execution risks',
				'<strong>Java 25 Virtual Threads</strong> — Enterprise-grade concurrency vs. single-threaded Node.js',
				'<strong>OIDC/Keycloak</strong> — Enterprise authentication vs. basic auth',
				'<strong>MongoDB/PostgreSQL</strong> — Production databases vs. SQLite',
			],
			heading3c: 'vs. AWS Bedrock / Azure AI Studio',
			para4: 'Cloud AI platforms offer managed infrastructure but create <strong>vendor lock-in</strong>. EDDI runs anywhere Docker runs — on-premises, in any cloud, or in air-gapped environments.',
		},
		compliance: {
			title: 'EU AI Act Compliance',
			description:
				'Built-in governance capabilities for regulatory compliance — immutable audit trails, transparent decision logging, and human oversight mechanisms.',
			heading1: 'Regulatory-Ready Architecture',
			para1: "The EU AI Act establishes comprehensive requirements for AI systems. EDDI's architecture provides the <strong>technical foundations</strong> needed for compliance, built in from day one rather than bolted on.",
			heading2: 'Compliance Capabilities',
			items: [
				'<strong>Immutable Audit Trails</strong> — Every operation recorded with cryptographic integrity',
				'<strong>Decision Transparency</strong> — Full pipeline tracing shows how AI decisions were made',
				'<strong>Human Oversight</strong> — Management UI enables human review and intervention',
				'<strong>Data Governance</strong> — OIDC/Keycloak for access control, vault for secrets',
				'<strong>Risk Classification</strong> — Architecture supports high-risk AI system requirements',
				'<strong>Reproducibility</strong> — Configuration-as-code enables exact reproduction of AI behavior',
			],
			heading3: 'Built for Regulated Industries',
			para2: 'Healthcare, financial services, government, and other regulated sectors can deploy EDDI with confidence that the platform provides the transparency, auditability, and control mechanisms required by the EU AI Act and similar regulations worldwide.',
		},
	},
};

export type TranslationSchema = typeof en;
export default en;
