/**
 * Head-to-head comparison copy, English. Keys match src/data/comparisons.ts.
 * Competitor facts are dated "as of October 2026"; sources are listed in the
 * header of src/data/comparisons.ts.
 */
import { MCP_TOOLS, FRAMEWORKS, LLM_PROVIDERS, TESTS, EMBEDDING_PROVIDERS, VECTOR_STORES } from '../stats';

export interface ComparisonCopy {
	title: string;
	description: string;
	/** One line for listings. */
	summary: string;
	/** Short answer, rendered first. Written to be quotable on its own. HTML allowed. */
	verdict: string;
	whatItIsTitle: string;
	whatItIs: string;
	archetypeTitle: string;
	archetype: string;
	tableTitle: string;
	tableHeaders: { dimension: string; them: string; eddi: string };
	rows: { dimension: string; them: string; eddi: string }[];
	betterThemTitle: string;
	betterThem: string[];
	betterEddiTitle: string;
	betterEddi: string[];
	migrationTitle: string;
	migrationIntro: string;
	migrationSteps: { from: string; to: string }[];
	migrationGuideLabel?: string;
	faq: { question: string; answer: string }[];
}

export interface CompareUi {
	shortAnswer: string;
	chooseTitle: string;
	faqTitle: string;
	otherTitle: string;
	allAlternatives: string;
	asOfNote: string;
	backToHub: string;
	hubTitle: string;
	hubMetaTitle: string;
	hubDescription: string;
	hubIntro: string;
	hubReadMore: string;
	hubLandscapeTitle: string;
	hubLandscapeDesc: string;
	headToHeadTitle: string;
	headToHeadIntro: string;
	navLabel: string;
}

export interface CompareCopy {
	ui: CompareUi;
	comparisons: Record<string, ComparisonCopy>;
}

const EDDI_LICENSE = 'Apache 2.0, OSI approved';

const copy: CompareCopy = {
	ui: {
		shortAnswer: 'Short answer',
		chooseTitle: 'Choosing between them',
		faqTitle: 'Frequently asked',
		otherTitle: 'Other comparisons',
		allAlternatives: 'All alternatives: builders, libraries, and cloud platforms',
		asOfNote: 'Details about the other tool were checked against its official documentation and repository in October 2026. These projects change quickly, so confirm current behavior with the vendor before you decide.',
		backToHub: 'All comparisons',
		hubTitle: 'EDDI Compared: Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n and More',
		hubMetaTitle: 'EDDI vs. Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n, Flowise, Rasa',
		hubDescription: 'Balanced head-to-head comparisons of EDDI with Dify, CrewAI, LangChain and LangGraph, Microsoft Agent Framework (AutoGen and Semantic Kernel), n8n, Flowise and Rasa, including where the other tool is the better choice.',
		hubIntro: 'Each page compares EDDI with one alternative on the same dimensions: architecture, governance, licensing and operations. Each one says plainly where the other tool is the better choice and how to migrate if you decide to move.',
		hubReadMore: 'Read the comparison',
		hubLandscapeTitle: 'Looking for the wider landscape?',
		hubLandscapeDesc: 'The alternatives overview groups the field by archetype: visual builders, code libraries, and cloud AI platforms.',
		headToHeadTitle: 'Head-to-head comparisons',
		headToHeadIntro: 'This page maps the landscape by archetype. For a direct comparison against a specific alternative, including where that alternative is the better choice and how to migrate an existing project, see:',
		navLabel: 'Compare',
	},
	comparisons: {
		// ─── LangChain and LangGraph ──────────────────────────────────
		'eddi-vs-langchain': {
			title: 'EDDI vs. LangChain and LangGraph',
			description:
				'How EDDI compares with LangChain and LangGraph: library versus deployable platform, code-defined graphs versus config-as-code, human-in-the-loop, the Day 2 operations gap, and when writing the orchestration yourself is the right call.',
			summary: 'Library and code-defined graphs versus a deployable platform; the Day 2 operations gap.',
			verdict:
				'<strong>Pick LangChain or LangGraph</strong> when the orchestration logic is the differentiated part of your product and you want it in code, under review, in your repository. <strong>Pick EDDI</strong> when the orchestration is undifferentiated infrastructure you would rather deploy than maintain.',
			whatItIsTitle: 'What LangChain and LangGraph are',
			whatItIs:
				'LangChain is an MIT licensed Python and JavaScript framework for building LLM applications. LangGraph, from the same team, is a low-level orchestration framework for stateful agents: you define a graph in code, and it adds durable execution that resumes after failures and human-in-the-loop checkpoints where you can inspect and modify agent state. LangSmith is the commercial product for tracing, evaluation and observability, and LangSmith Deployment hosts long-running agents. The integration surface is the widest in the ecosystem.',
			archetypeTitle: 'This is a library versus platform question',
			archetype:
				'EDDI is not a competing framework. EDDI uses <a href="https://docs.langchain4j.dev/" target="_blank" rel="noopener">LangChain4j</a>, the Java sibling of LangChain, internally. The real question is not which abstraction is better. It is whether the control flow lives in code you write, as a LangGraph graph, or in declarative configuration you deploy, and who builds and owns everything around it: the REST layer, authentication, tenancy, state, audit, and the interface non-developers use.',
			tableTitle: 'What you build versus what you deploy',
			tableHeaders: { dimension: 'Dimension', them: 'LangChain / LangGraph', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Form factor', them: 'A library imported into your application', eddi: 'Deployable middleware; runs wherever Docker runs' },
				{ dimension: 'Orchestration logic', them: 'Python or TypeScript graphs in your repository', eddi: 'JSON configuration and deterministic behavior rules, changed without redeployment' },
				{ dimension: 'Human in the loop', them: 'Interrupts let you inspect and modify state; the approval UI and policy are yours to build', eddi: 'Gates on turns, tool calls and group phases, with timeout policies, Manager and Slack approvals' },
				{ dimension: 'Durability', them: 'Durable execution with persistence you configure', eddi: 'Conversation memory persisted by the platform, with explicit states such as AWAITING_HUMAN' },
				{ dimension: 'REST API and routing', them: 'You build it, or host on LangSmith Deployment', eddi: 'Included, plus OpenAPI 3.1, A2A protocol, and SSE streaming' },
				{ dimension: 'Authentication and RBAC', them: 'You build it', eddi: 'Optional OIDC/Keycloak with eddi-admin and eddi-approver roles' },
				{ dimension: 'Non-developer interface', them: 'You build it (LangSmith Studio is aimed at developers)', eddi: 'EDDI Manager, a production React UI in 11 languages' },
				{ dimension: 'Secret management', them: 'You build it, or bring a vault', eddi: 'Built-in AES-256-GCM Secrets Vault, referenced as ${vault:key}' },
				{ dimension: 'Observability', them: 'LangSmith (commercial) or your own instrumentation', eddi: 'Prometheus metrics and auto-provisioned Grafana dashboards' },
				{ dimension: 'Audit and compliance', them: 'You build it', eddi: `HMAC-signed, append-only, sequence-checked audit ledger, data subject rights API, ${FRAMEWORKS} frameworks addressed` },
				{ dimension: 'Iteration loop', them: 'Change code, review, test, deploy', eddi: 'Change configuration in the UI or API; effective immediately' },
				{ dimension: 'Ceiling on control', them: 'None. Anything expressible in code is available', eddi: 'Bounded by what configuration can express, by design' },
			],
			betterThemTitle: 'Where LangChain and LangGraph are the better choice',
			betterThem: [
				'The orchestration itself is your competitive advantage and belongs in your codebase, not in a config store.',
				'You need control flow that declarative configuration cannot express: custom graph topologies, bespoke retry semantics, unusual state machines.',
				'You are a Python or TypeScript shop and want the agent to live inside an existing service rather than beside it.',
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
			migrationTitle: 'Moving an application from LangChain or LangGraph',
			migrationIntro:
				'The logic usually survives; the surrounding infrastructure is what you stop maintaining. Work outward from the chain or graph definition. Control flow that depends on arbitrary Python will need to become behavior rules or a declared tool.',
			migrationSteps: [
				{ from: 'Chain or LangGraph graph', to: 'EDDI pipeline configuration and behavior rules' },
				{ from: 'Tools and function calling', to: 'MCP tool definitions or httpCall declarations' },
				{ from: 'Interrupt for human review', to: 'PAUSE_CONVERSATION rule or toolApprovals globs, approved in the Manager or Slack' },
				{ from: 'Checkpointer and memory classes', to: 'Conversation memory with step, conversation and longTerm scopes' },
				{ from: 'Retriever and vector store setup', to: `RAG configuration across ${EMBEDDING_PROVIDERS} embedding providers and ${VECTOR_STORES} vector stores` },
				{ from: 'Prompt templates', to: 'Versioned prompt snippets, referenced by name' },
				{ from: 'FastAPI wrapper', to: 'Built-in REST API, OpenAPI 3.1, and SSE streaming' },
				{ from: 'LangSmith tracing', to: 'Prometheus metrics, Grafana dashboards, and the audit ledger' },
			],
			faq: [
				{
					question: 'Does EDDI use LangChain?',
					answer:
						'EDDI uses LangChain4j, the Java implementation, internally. This is not a competing abstraction. EDDI is the deployable platform built around that kind of library, providing the API layer, authentication, state management, management UI, and compliance infrastructure that a library deliberately leaves to you.',
				},
				{
					question: 'What is the difference between LangChain and LangGraph?',
					answer:
						'LangChain provides components and integrations for LLM applications. LangGraph is the lower-level layer for stateful, long-running agents defined as graphs, with durable execution and human-in-the-loop checkpoints. Both are libraries you embed in your own service. The comparison with EDDI applies to both.',
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

		// ─── Microsoft Agent Framework ────────────────────────────────
		'eddi-vs-microsoft-agent-framework': {
			title: 'EDDI vs. Microsoft Agent Framework (AutoGen and Semantic Kernel)',
			description:
				'How EDDI compares with Microsoft Agent Framework, the successor to AutoGen and Semantic Kernel: code-defined workflows versus config-as-code, human-in-the-loop, audit, hosting, and when the Microsoft stack is the better fit.',
			summary: 'Microsoft Agent Framework, the successor to AutoGen and Semantic Kernel, versus a deployable agent platform.',
			verdict:
				'<strong>Pick Microsoft Agent Framework</strong> when you are a .NET or Python team, you build on Azure, and you want agent workflows as code in your own service. <strong>Pick EDDI</strong> when you want agents defined as reviewable configuration on a JVM platform you can run anywhere, with approval gates and an audit ledger built in rather than assembled.',
			whatItIsTitle: 'What Microsoft Agent Framework is',
			whatItIs:
				'Microsoft Agent Framework is an MIT licensed, open-source SDK and runtime for building and orchestrating agents and multi-agent workflows in .NET and Python. It comes from the teams behind Semantic Kernel and AutoGen and reached its 1.0 release in April 2026. Workflows are graphs with sequential, concurrent, handoff and group collaboration patterns, with checkpointing, streaming, human-in-the-loop control, OpenTelemetry tracing and a middleware system. Agents can also be declared in YAML, and Microsoft documents hosting on Foundry. As of October 2026, Semantic Kernel receives fixes while new feature work happens in Agent Framework, and AutoGen is in maintenance mode, with migration guides for both.',
			archetypeTitle: 'Code-defined workflows versus declared configuration',
			archetype:
				'If you came here searching for AutoGen or Semantic Kernel, the practical comparison today is with Agent Framework, because that is where Microsoft points new projects. It is an SDK: your workflow is code in your service, in your language, and you choose how to host, secure and audit it, with strong support for Azure. EDDI makes the opposite trade. The agent is JSON configuration interpreted by a deployed platform, so behavior can be diffed, reviewed and changed without a rebuild, and the platform supplies the API, Manager UI, secrets vault and audit ledger.',
			tableTitle: 'SDK for your service versus platform you deploy',
			tableHeaders: { dimension: 'Dimension', them: 'Microsoft Agent Framework', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Form factor', them: 'SDK and runtime embedded in your .NET or Python service', eddi: 'Deployable middleware on a JVM (Quarkus); runs wherever Docker or Kubernetes runs' },
				{ dimension: 'How agents are defined', them: 'Code-defined agents and graph workflows; agents can also be declared in YAML', eddi: 'JSON configuration; deterministic behavior rules decide the next action, LLM calls happen in declared tasks' },
				{ dimension: 'Languages', them: '.NET and Python (Go in a separate repository)', eddi: 'Any language through REST, MCP and the OpenAI-compatible API; the agent itself needs no code' },
				{ dimension: 'License', them: 'MIT', eddi: EDDI_LICENSE },
				{ dimension: 'Custom logic at runtime', them: 'Your code and tool functions run in your process', eddi: 'No runtime eval() or code execution; logic is declared, or lives behind an MCP tool or HTTP call' },
				{ dimension: 'Human in the loop', them: 'Workflow-level human-in-the-loop control', eddi: 'Gates at three levels: turns (PAUSE_CONVERSATION), tool calls (toolApprovals) and group phases, with timeout policies' },
				{ dimension: 'Multi-agent patterns', them: 'Sequential, concurrent, handoff and group collaboration in code', eddi: 'Group discussions with 7 styles (round table, peer review, devil\'s advocate, Delphi, debate, task force, negotiation), recorded decisions and dissent' },
				{ dimension: 'State and recovery', them: 'Checkpointing and time-travel in the workflow runtime', eddi: 'Conversation memory persisted by the platform; explicit states such as AWAITING_HUMAN' },
				{ dimension: 'Observability and audit', them: 'OpenTelemetry tracing and middleware hooks; where the data goes is up to you', eddi: 'Prometheus metrics plus an HMAC-signed, append-only, sequence-checked audit ledger with a verify endpoint' },
				{ dimension: 'Secrets and identity', them: 'Your platform\'s mechanisms, for example Azure services', eddi: 'Built-in AES-256-GCM Secrets Vault; optional Keycloak/OIDC with eddi-admin and eddi-approver roles' },
				{ dimension: 'Ecosystem fit', them: 'Deep Microsoft and Azure integration, including Foundry hosted agents', eddi: `Vendor-neutral: ${LLM_PROVIDERS} LLM providers, local models through Ollama or Jlama, ${MCP_TOOLS} MCP tools` },
			],
			betterThemTitle: 'Where Microsoft Agent Framework is the better choice',
			betterThem: [
				'Your team writes .NET, and the agents belong inside an existing C# service with its own deployment and tests.',
				'You build on Azure and want first-class integration with Foundry and the surrounding Microsoft services.',
				'You have Semantic Kernel plugins or AutoGen code, and the supported migration path is cheaper than a platform change.',
				'The workflow needs control flow that configuration cannot express, such as bespoke graph topologies, checkpoint branching or time-travel debugging.',
				'You want a developer SDK and prefer to decide for yourself how to host, secure and observe it.',
			],
			betterEddiTitle: 'Where EDDI is the better choice',
			betterEddi: [
				'Agent behavior must be configuration that reviewers can read and promote between environments, with no rebuild.',
				'A security review will ask what code runs at inference time, and you want the answer to be none in the platform.',
				'Approvals must exist at the turn, tool call and group-phase level, with a signed record of who decided what.',
				'You need a ready Manager UI, secrets vault, API and audit ledger instead of assembling them around an SDK.',
				'You want to stay cloud-neutral: Kubernetes, OpenShift, on-premises or air-gapped with local models.',
			],
			migrationTitle: 'Moving from AutoGen, Semantic Kernel or Agent Framework',
			migrationIntro:
				'Expect a translation of intent rather than of code. Roles and tools carry over; graph logic becomes behavior rules, and anything that needs real code moves behind an MCP tool or an OpenAPI endpoint.',
			migrationSteps: [
				{ from: 'Agent with instructions', to: 'EDDI agent with an LLM task and a system message' },
				{ from: 'Semantic Kernel plugin or function', to: 'MCP tool, or an httpCall or OpenAPI-imported API' },
				{ from: 'Workflow graph or AutoGen team', to: 'Behavior rules for routing, or a group discussion style for multi-agent work' },
				{ from: 'Human-in-the-loop step', to: 'PAUSE_CONVERSATION rule, toolApprovals globs, or requiresApproval on a group phase' },
				{ from: 'Checkpoint store', to: 'Conversation memory with step, conversation and longTerm scopes' },
				{ from: 'Middleware and filters', to: 'Behavior rules and tool approval policies' },
				{ from: 'OpenTelemetry traces', to: 'Prometheus metrics and the audit ledger' },
			],
			faq: [
				{
					question: 'Is Microsoft Agent Framework the replacement for AutoGen and Semantic Kernel?',
					answer:
						'Microsoft presents it as the successor to both and publishes migration guides. As of October 2026, Semantic Kernel receives fixes while new features land in Agent Framework, and AutoGen is in maintenance mode. If you are starting a new Microsoft-stack project, Agent Framework is the one to evaluate against EDDI.',
				},
				{
					question: 'Can EDDI replace AutoGen for multi-agent conversations?',
					answer:
						'For many cases, yes. EDDI group discussions cover round table, peer review, devil\'s advocate, Delphi, debate, task force and negotiation styles, with phases that can require human approval and a recorded decision with dissent. If your agents need free-form code-level coordination, an SDK is the better fit.',
				},
				{
					question: 'Do I have to give up Azure to use EDDI?',
					answer:
						'No. EDDI supports Azure OpenAI as a provider and runs on Kubernetes, including AKS. It does not provide the deep Azure and Foundry integration that Agent Framework does, so weigh that if you are committed to the Microsoft ecosystem.',
				},
				{
					question: 'Can the two work together?',
					answer:
						'Yes. EDDI exposes an MCP server, a REST API and an OpenAI-compatible API, and it can consume MCP servers and A2A agents. A .NET service can call EDDI agents as tools, and EDDI can call your service through httpCall.',
				},
			],
		},

		// ─── CrewAI ───────────────────────────────────────────────────
		'eddi-vs-crewai': {
			title: 'EDDI vs. CrewAI',
			description:
				'How EDDI compares with CrewAI for multi-agent systems: role-based crews and flows in Python versus config-as-code on a deployable platform, code execution, human-in-the-loop, governance, and when CrewAI is the better tool.',
			summary: 'Role-based crews and flows in Python versus governed multi-agent configuration on a platform.',
			verdict:
				'<strong>Pick CrewAI</strong> when you are a Python team that wants role-playing agents collaborating on a task, defined and tuned in code. <strong>Pick EDDI</strong> when multi-agent work has to run as a governed service: deterministic rules around the LLM, approval gates, and a signed audit trail, configured rather than coded.',
			whatItIsTitle: 'What CrewAI is',
			whatItIs:
				'CrewAI is an MIT licensed, standalone Python framework with its own primitives for agents, tasks, crews, flows and tools. Crews are teams of role-based agents that collaborate autonomously on a task. Flows are event-driven workflows that give precise control over execution paths, state and branching. The project supports human input during execution, and the commercial CrewAI AMP Suite adds a control plane for managed deployment, observability, governance and support.',
			archetypeTitle: 'Autonomous crews versus governed configuration',
			archetype:
				'CrewAI leans into agent autonomy: you describe roles, goals and tasks, and the crew figures out how to collaborate, with Flows when you need tighter control. EDDI leans into control: deterministic behavior rules decide which action runs next, the LLM is called inside declared tasks, and multi-agent work follows named group discussion styles with explicit phases. Both can build a multi-agent system. They differ in how much you decide up front versus how much the model decides at runtime.',
			tableTitle: 'Agents in code versus agents as configuration',
			tableHeaders: { dimension: 'Dimension', them: 'CrewAI', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Primary abstraction', them: 'Crews of role-based agents with tasks, plus event-driven Flows', eddi: 'Agent configuration: pipeline, behavior rules, LLM tasks and tools as versioned JSON' },
				{ dimension: 'Language and runtime', them: 'Python library embedded in your application', eddi: 'JVM (Quarkus) platform with virtual threads; agents need no code' },
				{ dimension: 'License', them: 'MIT (open-source framework); commercial AMP Suite on top', eddi: EDDI_LICENSE },
				{ dimension: 'Control flow', them: 'Agents decide collaboration at runtime; Flows add explicit branching in code', eddi: 'Deterministic behavior rules choose the next action; group styles define the phases' },
				{ dimension: 'Code execution', them: 'The code interpreter tool has been removed from crewai-tools and agent-level code execution is deprecated; the docs recommend a dedicated sandbox such as E2B or Modal', eddi: 'No runtime eval() or code execution in the platform; logic is declared, or sits behind an MCP tool or HTTP call' },
				{ dimension: 'Human in the loop', them: 'Human input supported during execution', eddi: 'Gates on turns, tool calls and group phases, timeout policies, approvals in the Manager, REST, MCP or Slack' },
				{ dimension: 'Multi-agent patterns', them: 'Crew processes and Flows in code', eddi: 'Group discussions with 7 styles plus custom, recorded decisions, tallies and dissent, signed transcript entries' },
				{ dimension: 'Management and governance', them: 'Control plane with tracing and governance in the commercial AMP Suite', eddi: 'Manager UI, secrets vault, optional Keycloak/OIDC and the audit ledger in the open-source build' },
				{ dimension: 'Audit trail', them: 'Tracing and observability through the control plane or your own tooling', eddi: 'HMAC-signed, append-only, sequence-checked ledger; GET /auditstore/verify/{conversationId}' },
				{ dimension: 'Models', them: 'Many providers from Python', eddi: `${LLM_PROVIDERS} LLM providers plus local models through Ollama or Jlama` },
			],
			betterThemTitle: 'Where CrewAI is the better choice',
			betterThem: [
				'Your team is Python-first and wants agents, tools and crew logic in the same repository as the rest of the code.',
				'You want to prototype autonomous role-playing collaboration quickly and tune it by editing code.',
				'You need custom Python tools with arbitrary logic that configuration cannot express.',
				'You prefer a library you embed over a platform you operate.',
				'The commercial AMP Suite control plane fits how your organization wants to deploy and monitor crews.',
			],
			betterEddiTitle: 'Where EDDI is the better choice',
			betterEddi: [
				'Multi-agent behavior must be predictable enough to review: named phases, recorded decisions, and rules rather than free-form autonomy.',
				'A human must approve certain tool calls or group phases, and the decision has to be recorded in a signed ledger.',
				'You want governance, a management UI and audit in the open-source build, not in a separate commercial tier.',
				'A security review will ask what code runs at inference time, and you want the platform to run none.',
				'Non-engineers need to change agent behavior without a pull request.',
			],
			migrationTitle: 'Moving a crew from CrewAI',
			migrationIntro:
				'Roles and goals translate to prompts and group phases. The part that changes most is autonomy: what a crew decided at runtime becomes a rule, a phase, or an approval gate that you write down.',
			migrationSteps: [
				{ from: 'Agent (role, goal, backstory)', to: 'EDDI agent with a system message in an LLM task' },
				{ from: 'Task', to: 'Pipeline task, or a phase in a group discussion' },
				{ from: 'Crew process', to: 'Group discussion style, for example task force or round table' },
				{ from: 'Flow with routers', to: 'Behavior rules with condition types such as inputmatcher and actionmatcher' },
				{ from: 'Custom Python tool', to: 'MCP tool, httpCall, or an OpenAPI-imported API' },
				{ from: 'Human input', to: 'PAUSE_CONVERSATION rule, toolApprovals, or requiresApproval on a phase' },
				{ from: 'Memory and knowledge sources', to: 'Conversation memory scopes and RAG knowledge bases' },
			],
			faq: [
				{
					question: 'Is EDDI a CrewAI alternative for multi-agent systems?',
					answer:
						'Yes, for teams that want multi-agent collaboration as a governed service. EDDI group discussions run named styles with explicit phases and record decisions and dissent. CrewAI gives agents more autonomy and is defined in Python, which suits teams that want to stay in code.',
				},
				{
					question: 'Does EDDI have autonomous agents like CrewAI?',
					answer:
						'EDDI agents can call tools and collaborate in group discussions, but the control flow is set by behavior rules and phases that you configure, not left to the agents to improvise. That is a deliberate trade of autonomy for predictability.',
				},
				{
					question: 'Why does code execution matter here?',
					answer:
						'Agents that run generated code need isolation. CrewAI has moved away from its built-in code interpreter and recommends a dedicated sandbox service. EDDI sidesteps the question inside the platform by not evaluating code at runtime, so anything that needs real logic sits behind a tool you declare and can approve.',
				},
				{
					question: 'Can we use both?',
					answer:
						'Yes. A CrewAI service can call EDDI through its REST API, MCP server or OpenAI-compatible API, and EDDI can call a CrewAI endpoint through httpCall. Using CrewAI for code-level experiments and EDDI for governed production agents is a reasonable split.',
				},
			],
		},

		// ─── Dify ─────────────────────────────────────────────────────
		'eddi-vs-dify': {
			title: 'EDDI vs. Dify',
			description:
				'How EDDI compares with Dify for building and operating LLM agents: visual workflow builder and code node versus config-as-code, licensing and multi-tenancy terms, human input, audit, and when Dify is the right tool.',
			summary: 'Visual workflow builder and app platform versus config-as-code with governance built in.',
			verdict:
				'<strong>Pick Dify</strong> when you want a polished visual builder, a plugin marketplace and a fast route to LLM apps your team or customers can use this week. <strong>Pick EDDI</strong> when agents must run under an unambiguous Apache 2.0 license, with no code nodes, approval gates at several levels, and an audit ledger built for evidence.',
			whatItIsTitle: 'What Dify is',
			whatItIs:
				'Dify is an open-source platform for building LLM applications. It offers a visual workflow canvas, a RAG pipeline from ingestion to retrieval, agents with tools from its marketplace, MCP servers or custom APIs, a prompt IDE, backend-as-a-service APIs, and integrations with observability tools such as Langfuse, Opik and Arize Phoenix. You can use Dify Cloud, self-host the Community Edition with Docker Compose, or ask about Dify Enterprise, which adds SSO, RBAC and support SLAs. Its Code node runs Python or JavaScript in a sandbox, and its Human Input node pauses a workflow for a person to respond.',
			archetypeTitle: 'App builder versus governed agent platform',
			archetype:
				'Dify and EDDI overlap on RAG, tools and agents, but they optimise for different people. Dify optimises for builders who want to assemble applications visually and ship them quickly, with a code node as the escape hatch. EDDI optimises for operators who need agent behavior to be declarative, reviewable configuration with governance around it. Many teams reasonably start in Dify, and some move once tenancy, licensing or audit requirements arrive.',
			tableTitle: 'Builder convenience versus operating surface',
			tableHeaders: { dimension: 'Dimension', them: 'Dify', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Primary abstraction', them: 'Visual workflow and chatflow canvas, with a prompt IDE', eddi: 'Config-as-code: JSON resources authored in the Manager or API, versioned like source' },
				{ dimension: 'License', them: 'Dify Open Source License: Apache 2.0 plus conditions. Multi-tenant operation of the source needs written authorization, and the frontend logo and copyright must stay', eddi: EDDI_LICENSE },
				{ dimension: 'Custom logic', them: 'Code node runs Python or JavaScript in a sandbox that blocks file system, outbound network and system commands, with a fixed package set', eddi: 'No runtime code evaluation; logic is declared, or sits behind an MCP tool or HTTP call' },
				{ dimension: 'Human in the loop', them: 'Human Input node pauses a workflow for a form answered in the web app or by email; default wait of 3 days, then a timeout branch', eddi: 'Gates on turns, tool calls and group phases; timeout policies include WAIT_INDEFINITELY, AUTO_APPROVE, AUTO_REJECT and ABORT; Manager and Slack approvals' },
				{ dimension: 'Tools and integrations', them: 'Marketplace, MCP servers and custom APIs', eddi: `${MCP_TOOLS} MCP tools, an MCP client, OpenAPI import, httpCall, A2A` },
				{ dimension: 'RAG', them: 'Built-in knowledge pipeline with document extraction', eddi: `${EMBEDDING_PROVIDERS} embedding providers, ${VECTOR_STORES} vector stores, plus zero-infrastructure httpCall RAG` },
				{ dimension: 'Multi-agent', them: 'Agents and workflow nodes composed on the canvas', eddi: 'Group discussions with 7 styles, recorded decisions and dissent, optional human approval per phase' },
				{ dimension: 'Identity and access', them: 'Workspaces; SSO and RBAC through Dify Enterprise', eddi: 'Optional Keycloak/OIDC with eddi-admin and eddi-approver roles in the open-source build' },
				{ dimension: 'Observability and audit', them: 'Logs and monitoring, integrations with Langfuse, Opik and Arize Phoenix', eddi: 'Prometheus metrics plus an HMAC-signed, append-only, sequence-checked audit ledger' },
				{ dimension: 'Deployment', them: 'Dify Cloud, Docker Compose, Enterprise on request', eddi: 'Docker, Helm, Kustomize, OpenShift (Red Hat certified image, Operator via OperatorHub)' },
			],
			betterThemTitle: 'Where Dify is the better choice',
			betterThem: [
				'You want a visual canvas that non-engineers can read and extend, with quick feedback while building.',
				'A plugin marketplace and ready workflow templates save you real integration time.',
				'You want a hosted option (Dify Cloud) and do not want to operate anything yourself.',
				'A Code node is a feature you want: small data transforms in Python or JavaScript inside the workflow.',
				'You run one internal deployment for your own team, so the multi-tenant license condition does not apply to you.',
			],
			betterEddiTitle: 'Where EDDI is the better choice',
			betterEddi: [
				'Your legal team needs a plain Apache 2.0 license, including for serving many tenants or customers from one deployment.',
				'The security review forbids code execution inside the automation platform, sandboxed or not.',
				'Specific tool calls or group phases need a human decision, recorded in a signed ledger.',
				'Agent behavior must be versioned, diffed and promoted between environments as configuration.',
				'You need Kubernetes, OpenShift or air-gapped deployment with local models.',
			],
			migrationTitle: 'Moving an app from Dify',
			migrationIntro:
				'Dify apps are visual graphs and EDDI agents are configuration, so this is a translation rather than an import. The parts that need the most thought are Code nodes, which become configuration or a declared tool.',
			migrationSteps: [
				{ from: 'Chatflow or workflow', to: 'EDDI agent: pipeline plus behavior rules' },
				{ from: 'LLM node and prompt', to: 'LLM task with a system message and versioned prompt snippets' },
				{ from: 'Knowledge base', to: 'EDDI RAG knowledge base with an embedding provider and vector store' },
				{ from: 'Tool, plugin or MCP server', to: 'MCP client connection, httpCall, or OpenAPI-imported API' },
				{ from: 'Code node', to: 'Behavior rules and prompt logic, or an MCP tool if it needs real code' },
				{ from: 'Human Input node', to: 'PAUSE_CONVERSATION rule or toolApprovals, with a timeout policy' },
				{ from: 'Provider API keys', to: 'Secrets Vault entries, referenced as ${vault:key}' },
			],
			faq: [
				{
					question: 'Is Dify open source?',
					answer:
						'Dify publishes its source under the Dify Open Source License, which is Apache 2.0 with additional conditions: you may not use the source to run a multi-tenant environment without written authorization, and you may not remove the logo or copyright information from the frontend. That is not the plain Apache 2.0 that EDDI uses, so read it with your legal team if either condition could apply.',
				},
				{
					question: 'Does EDDI have a visual builder like Dify?',
					answer:
						'EDDI Manager is a production React UI for building, deploying and monitoring agents, available in 11 languages. It is a management interface rather than a node canvas: you configure agents, prompts, tools and pipelines, and every change is a versioned resource rather than a diagram.',
				},
				{
					question: 'Why does EDDI avoid a code node?',
					answer:
						'A sandboxed code node is a reasonable feature, and Dify restricts what it can reach. But any code execution inside the platform is an attack surface that a security review has to examine. EDDI keeps agent behavior declarative, so what a tool can do is what you declare and approve.',
				},
				{
					question: 'Can we use Dify and EDDI together?',
					answer:
						'Yes. Dify can use MCP servers and custom APIs, and EDDI exposes an MCP server and REST API, so a Dify workflow can call an EDDI agent as a governed step. EDDI can call the Dify API through httpCall.',
				},
			],
		},

		// ─── n8n ──────────────────────────────────────────────────────
		'eddi-vs-n8n': {
			title: 'EDDI vs. n8n',
			description:
				'How EDDI compares with n8n for AI agent orchestration: runtime and concurrency model, code execution and security posture, licensing, governance, and when n8n remains the better tool.',
			summary: 'Workflow automation platform versus AI orchestration middleware.',
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
				{ dimension: 'Runtime', them: 'Node.js single-threaded event loop', eddi: 'JVM with virtual threads (Project Loom), true parallelism for I/O-bound LLM calls' },
				{ dimension: 'Custom logic', them: 'Code nodes execute JavaScript or Python at runtime', eddi: 'Zero runtime code evaluation, agent behavior is declarative JSON only' },
				{ dimension: 'License', them: 'Sustainable Use License (fair-code), not OSI approved; separate terms for some commercial uses', eddi: EDDI_LICENSE },
				{ dimension: 'Integration breadth', them: 'Hundreds of prebuilt SaaS connectors, its strongest asset', eddi: `${MCP_TOOLS} MCP tools plus any OpenAPI or REST endpoint via httpCall` },
				{ dimension: 'Authentication', them: 'Built-in user management; SSO on paid tiers', eddi: 'Optional Keycloak/OIDC with eddi-admin and eddi-approver roles in the open-source build' },
				{ dimension: 'Audit trail', them: 'Execution history and application logs', eddi: 'HMAC-signed, append-only, sequence-checked audit ledger' },
				{ dimension: 'Human approval', them: 'Wait nodes and manual triggers inside a workflow', eddi: 'Turn-level pause, per-tool-call sign-off, timeout policies, Slack approvals, all logged' },
				{ dimension: 'Compliance posture', them: 'Implemented per deployment', eddi: `GDPR, HIPAA, and EU AI Act infrastructure built in, ${FRAMEWORKS} frameworks addressed` },
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
				'A human has to approve individual tool calls before they execute, with the approval recorded in a signed ledger.',
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
			migrationGuideLabel: 'Full playbook: migrate an AI workflow from n8n to EDDI',
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

		// ─── Flowise ──────────────────────────────────────────────────
		'eddi-vs-flowise': {
			title: 'EDDI vs. Flowise',
			description:
				'How EDDI compares with Flowise for building and operating LLM agents: prototyping speed versus production governance, RAG architecture, multi-tenancy, and when Flowise is the right tool.',
			summary: 'Prototype velocity versus production operating surface.',
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
				{ dimension: 'Primary abstraction', them: 'Visual chatflow canvas, node graph serialized to JSON', eddi: 'Config-as-code: JSON resources authored in a UI or API, versioned like source' },
				{ dimension: 'Runtime', them: 'Node.js event loop', eddi: 'JVM with virtual threads, built for many concurrent I/O-bound conversations' },
				{ dimension: 'License', them: 'Apache 2.0, the same as EDDI', eddi: EDDI_LICENSE },
				{ dimension: 'RAG', them: 'Broad loader and vector store selection, configured per flow', eddi: `${EMBEDDING_PROVIDERS} embedding providers, ${VECTOR_STORES} vector stores, plus zero-infrastructure httpCall RAG` },
				{ dimension: 'Custom logic', them: 'Custom Function and Tool nodes execute JavaScript at runtime', eddi: 'Zero runtime code evaluation; logic is declared, not executed' },
				{ dimension: 'Multi-tenancy', them: 'Workspaces on the enterprise edition', eddi: 'Per-tenant quotas, cost attribution, and data isolation in the open-source build' },
				{ dimension: 'Memory', them: 'Conversation buffers and external store integrations', eddi: 'Persistent user memory, dream consolidation, rolling summaries, token-aware windowing' },
				{ dimension: 'Audit trail', them: 'Execution traces, aimed at debugging', eddi: 'HMAC-signed, append-only ledger, aimed at evidence' },
				{ dimension: 'Deployment', them: 'Docker, typically a single instance', eddi: 'Docker, Helm, Kustomize, and OpenShift (Red Hat certified image, Operator via OperatorHub)' },
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
				{ from: 'Vector store node', to: `One of ${VECTOR_STORES} supported vector stores, selected by configuration` },
				{ from: 'Embedding node', to: `One of ${EMBEDDING_PROVIDERS} embedding providers` },
				{ from: 'Chat model node', to: `LLM configuration across ${LLM_PROVIDERS} providers, with model cascading available` },
				{ from: 'Custom Function node', to: 'Behavior rules, prompt snippets, or a declared MCP tool' },
				{ from: 'Memory node', to: 'EDDI persistent memory with commit-flag memory policy' },
			],
			migrationGuideLabel: 'Full playbook: migrate a chatflow from Flowise to EDDI',
			faq: [
				{
					question: 'Should we prototype in Flowise and then move to EDDI?',
					answer:
						'That is a defensible path and a common one. Flowise answers whether a retrieval strategy works; EDDI answers whether you can operate it safely for three years. Plan the move before the prototype has production users attached, because the migration is easier than the conversation about downtime.',
				},
				{
					question: 'Both are Apache 2.0. What actually differs?',
					answer:
						'The license is the same; the operating surface is not. EDDI ships optional OIDC/Keycloak, a signed audit ledger, per-tenant quotas, and human-in-the-loop approval gating in the open-source build rather than behind an enterprise tier.',
				},
				{
					question: 'Does EDDI have a visual builder?',
					answer:
						'EDDI Manager is a production React UI for building, deploying, and monitoring agents, available in 11 languages. It is a management interface rather than a node canvas: you configure agents, prompts, tools, and pipelines, and every change is a versioned resource rather than a diagram.',
				},
			],
		},

		// ─── Rasa ─────────────────────────────────────────────────────
		'eddi-vs-rasa': {
			title: 'EDDI vs. Rasa',
			description:
				'How EDDI compares with Rasa for conversational AI: trained NLU and deterministic dialogue versus LLM orchestration, config-as-code, multi-agent collaboration, and when Rasa is the better fit.',
			summary: 'Trained NLU and deterministic dialogue versus LLM orchestration with config-as-code.',
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
				{ dimension: 'Understanding', them: 'Trained NLU: intent classification and entity extraction from labeled data', eddi: 'LLM comprehension plus intent-based agent discovery and routing' },
				{ dimension: 'Changing behavior', them: 'Update training data, retrain, evaluate, redeploy', eddi: 'Edit JSON configuration; no retraining and no redeployment' },
				{ dimension: 'Determinism', them: 'High. Rules and policies make flows repeatable and testable', eddi: 'Lower by nature, recovered through behavior rules and approval gates' },
				{ dimension: 'Language', them: 'Python; custom actions are Python code', eddi: 'JVM runtime; agent logic is configuration, tools are declared' },
				{ dimension: 'Tool ecosystem', them: 'A custom action server you build and host', eddi: `${MCP_TOOLS} MCP tools, built-in agent tools, plus any OpenAPI endpoint` },
				{ dimension: 'Multi-agent', them: 'One assistant per deployment is the common pattern', eddi: 'Coordinator-based orchestration and 7 group discussion styles' },
				{ dimension: 'Licensing', them: 'Community edition plus commercially licensed Rasa Pro tiers; verify current terms', eddi: EDDI_LICENSE },
				{ dimension: 'Compliance', them: 'Self-hosting supports data residency; frameworks implemented per deployment', eddi: `Audit ledger, data subject rights API, and ${FRAMEWORKS} frameworks addressed in the platform` },
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
				'You want LLM flexibility, but a compliance officer requires approval gates and signed logs before it goes live.',
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
						'Not necessarily, but the trade should be explicit. LLM output is not deterministic. EDDI addresses this with behavior rules that constrain responses, human approval gates on consequential actions, and a signed audit ledger recording what was decided and why. If your requirement is that no language model participates in the decision at all, Rasa is the better answer.',
				},
				{
					question: 'Can we run both during a transition?',
					answer:
						'Yes. A common pattern routes known high-volume intents to the existing Rasa assistant while EDDI handles open-ended queries and system integration, then shifts traffic as confidence grows. EDDI can call a Rasa endpoint through httpCall.',
				},
			],
		},
	},
};

export default copy;
