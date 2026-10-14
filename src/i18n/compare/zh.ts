/**
 * Head-to-head comparison copy, Simplified Chinese. Keys match src/data/comparisons.ts.
 * Competitor facts are dated "as of October 2026"; sources are listed in the
 * header of src/data/comparisons.ts.
 */
import type { CompareCopy } from './en';
import { MCP_TOOLS, FRAMEWORKS, LLM_PROVIDERS, TESTS, EMBEDDING_PROVIDERS, VECTOR_STORES } from '../stats';

const EDDI_LICENSE = 'Apache 2.0，OSI 认证';

const copy: CompareCopy = {
	ui: {
		shortAnswer: '简短回答',
		chooseTitle: '如何在两者之间选择',
		faqTitle: '常见问题',
		otherTitle: '其他对比',
		allAlternatives: '所有替代方案：构建器、代码库与云平台',
		asOfNote: '关于对方工具的信息，已于 2026 年 10 月对照其官方文档和代码仓库核实。这些项目更新很快，决策前请向厂商确认当前行为。',
		backToHub: '全部对比',
		hubTitle: 'EDDI 对比：Dify、CrewAI、LangGraph、Microsoft Agent Framework、n8n 等',
		hubMetaTitle: 'EDDI vs. Dify、CrewAI、LangGraph、Microsoft Agent Framework、n8n、Flowise、Rasa',
		hubDescription: 'EDDI 与 Dify、CrewAI、LangChain 和 LangGraph、Microsoft Agent Framework（AutoGen 和 Semantic Kernel）、n8n、Flowise 以及 Rasa 的客观一对一对比，包括对方工具更合适的场景。',
		hubIntro: '每个页面都在相同维度上将 EDDI 与一个替代方案进行比较：架构、治理、许可证和运维。每页都会坦率说明对方工具在哪些情况下是更好的选择，以及决定迁移时该如何操作。',
		hubReadMore: '阅读对比',
		hubLandscapeTitle: '想了解更广泛的格局？',
		hubLandscapeDesc: '替代方案概览按类型对整个领域分组：可视化构建器、代码库和云端 AI 平台。',
		headToHeadTitle: '一对一对比',
		headToHeadIntro: '本页按类型梳理整体格局。若想与某个具体的替代方案直接对比，包括该方案更合适的场景以及如何迁移现有项目，请参阅：',
		navLabel: '对比',
	},
	comparisons: {
		// ─── LangChain and LangGraph ──────────────────────────────────
		'eddi-vs-langchain': {
			title: 'EDDI vs. LangChain 和 LangGraph',
			description:
				'EDDI 与 LangChain 和 LangGraph 的对比：代码库与可部署平台、代码定义的图与配置即代码、人工介入、Day 2 运营差距，以及何时应该自己编写编排逻辑。',
			summary: '代码库与代码定义的图，对比可部署平台；Day 2 运营差距。',
			verdict:
				'当编排逻辑本身就是产品的差异化部分，并且你希望它以代码形式存放在自己的代码仓库中接受评审时，<strong>选择 LangChain 或 LangGraph</strong>。当编排只是你宁愿部署而不愿维护的通用基础设施时，<strong>选择 EDDI</strong>。',
			whatItIsTitle: 'LangChain 和 LangGraph 是什么',
			whatItIs:
				'LangChain 是采用 MIT 许可证的 Python 和 JavaScript 框架，用于构建 LLM 应用。LangGraph 出自同一团队，是面向有状态智能体的底层编排框架：你用代码定义图，它提供可在故障后恢复的持久化执行，以及可检查和修改智能体状态的人工介入检查点。LangSmith 是用于追踪、评估和可观测性的商业产品，LangSmith Deployment 则托管长时间运行的智能体。其集成范围是整个生态中最广的。',
			archetypeTitle: '这是代码库与平台之间的取舍',
			archetype:
				'EDDI 并不是竞争性的框架。EDDI 内部使用 <a href="https://docs.langchain4j.dev/" target="_blank" rel="noopener">LangChain4j</a>，即 LangChain 的 Java 对应项目。真正的问题不是哪种抽象更好，而是控制流究竟存在于你编写的代码中（即 LangGraph 图），还是存在于你部署的声明式配置中，以及由谁来构建并负责其周边的一切：REST 层、身份认证、多租户、状态、审计，以及非开发人员使用的界面。',
			tableTitle: '自行构建与直接部署',
			tableHeaders: { dimension: '维度', them: 'LangChain / LangGraph', eddi: 'EDDI' },
			rows: [
				{ dimension: '形态', them: '导入到你的应用中的代码库', eddi: '可部署的中间件；能运行 Docker 的地方就能运行' },
				{ dimension: '编排逻辑', them: '位于你代码仓库中的 Python 或 TypeScript 图', eddi: 'JSON 配置和确定性的行为规则（behavior rules），无需重新部署即可修改' },
				{ dimension: '人工介入', them: '中断机制可让你检查和修改状态；审批界面和策略需要自行构建', eddi: '对话轮次、工具调用和群组阶段均可设置审批关卡，带超时策略，并支持 Manager 和 Slack 审批' },
				{ dimension: '持久性', them: '持久化执行，持久化方案由你配置', eddi: '对话记忆由平台持久化，并带有 AWAITING_HUMAN 等明确的状态' },
				{ dimension: 'REST API 与路由', them: '自行构建，或托管在 LangSmith Deployment', eddi: '内置，另含 OpenAPI 3.1、A2A 协议和 SSE 流式传输' },
				{ dimension: '身份认证与 RBAC', them: '自行构建', eddi: '可选的 OIDC/Keycloak，含 eddi-admin 和 eddi-approver 角色' },
				{ dimension: '面向非开发人员的界面', them: '自行构建（LangSmith Studio 面向开发者）', eddi: 'EDDI Manager，支持 11 种语言的生产级 React 界面' },
				{ dimension: '密钥管理', them: '自行构建，或接入外部保险库', eddi: '内置 AES-256-GCM Secrets Vault，以 ${vault:key} 引用' },
				{ dimension: '可观测性', them: 'LangSmith（商业产品）或自行埋点', eddi: 'Prometheus 指标和自动配置的 Grafana 仪表盘' },
				{ dimension: '审计与合规', them: '自行构建', eddi: `HMAC 签名、仅追加、带序号校验的审计账本，数据主体权利 API，涵盖 ${FRAMEWORKS} 个合规框架` },
				{ dimension: '迭代流程', them: '修改代码、评审、测试、部署', eddi: '在界面或 API 中修改配置，即时生效' },
				{ dimension: '控制能力上限', them: '没有上限。凡是代码能表达的都可以实现', eddi: '设计上受限于配置所能表达的范围' },
			],
			betterThemTitle: 'LangChain 和 LangGraph 更合适的场景',
			betterThem: [
				'编排本身就是你的竞争优势，应当放在你的代码库中，而不是配置存储里。',
				'你需要声明式配置无法表达的控制流：自定义图拓扑、定制的重试语义、特殊的状态机。',
				'你们是 Python 或 TypeScript 团队，希望智能体运行在现有服务内部，而不是旁边。',
				'你需要在新集成出现的当周就用上它。LangChain 的更新速度快于任何平台。',
				'团队只有一两名工程师，没有合规官，没有多租户需求，也没有需要访问的非开发人员。',
			],
			betterEddiTitle: 'EDDI 更合适的场景',
			betterEddi: [
				'你发现 Day 2 运营清单上的事项，正在占用团队本该用于交付产品的时间。',
				'提示词工程师和运营人员需要在不提交 pull request 的情况下修改智能体行为。',
				'多个团队或客户共用一套部署，并需要隔离、配额和成本归属。',
				'采购方要求在上线前就审计追踪、数据驻留和框架覆盖范围给出答复。',
				'你希望编排层是一个可以升级的依赖，而不是需要自己维护的代码库。',
			],
			migrationTitle: '从 LangChain 或 LangGraph 迁移应用',
			migrationIntro:
				'逻辑通常可以保留；你不再需要维护的是周边的基础设施。请从链或图的定义开始，由内向外推进。依赖任意 Python 代码的控制流，需要改写为行为规则或声明式工具。',
			migrationSteps: [
				{ from: '链或 LangGraph 图', to: 'EDDI 管道配置和行为规则' },
				{ from: '工具和函数调用', to: 'MCP 工具定义或 httpCall 声明' },
				{ from: '用于人工审核的中断', to: 'PAUSE_CONVERSATION 规则或 toolApprovals glob 模式，在 Manager 或 Slack 中审批' },
				{ from: '检查点器和记忆类', to: '具有 step、conversation 和 longTerm 作用域的对话记忆' },
				{ from: '检索器和向量存储设置', to: `涵盖 ${EMBEDDING_PROVIDERS} 个嵌入提供商和 ${VECTOR_STORES} 个向量存储的 RAG 配置` },
				{ from: '提示词模板', to: '带版本的提示词片段，按名称引用' },
				{ from: 'FastAPI 封装', to: '内置 REST API、OpenAPI 3.1 和 SSE 流式传输' },
				{ from: 'LangSmith 追踪', to: 'Prometheus 指标、Grafana 仪表盘和审计账本' },
			],
			faq: [
				{
					question: 'EDDI 使用 LangChain 吗？',
					answer:
						'EDDI 内部使用 LangChain4j，即其 Java 实现。这并不是竞争性的抽象。EDDI 是围绕这类代码库构建的可部署平台，提供代码库有意留给你自行解决的 API 层、身份认证、状态管理、管理界面和合规基础设施。',
				},
				{
					question: 'LangChain 和 LangGraph 有什么区别？',
					answer:
						'LangChain 为 LLM 应用提供组件和集成。LangGraph 是更底层的一层，用于以图的形式定义有状态、长时间运行的智能体，具备持久化执行和人工介入检查点。两者都是嵌入到你自己服务中的代码库。与 EDDI 的对比对两者都适用。',
				},
				{
					question: '什么是 Day 2 运营差距？',
					answer:
						'Day 1 是让智能体给出正确的响应，代码库在这方面做得很好。Day 2 则是之后的一切：身份认证、多租户、跨重启的对话状态、审计日志、密钥轮换、水平扩展、成本跟踪，以及面向不写 Python 的人员的界面。团队在 Day 2 上花费的时间往往超过智能体本身。',
				},
				{
					question: '配置的能力比代码弱吗？',
					answer:
						'是的，而且这是有意为之的取舍。配置无法表达代码能表达的一切。作为交换，你可以无需重新部署即可修改，非工程师也能评审行为，并且在安全评审中无需为运行时代码执行辩护。如果你需要代码提供的控制上限，请使用代码库。',
				},
				{
					question: '我们能在保留 LangChain 的同时使用 EDDI 吗？',
					answer:
						'可以。EDDI 提供 MCP 服务器和 REST API，因此 LangChain 应用可以把 EDDI 智能体当作工具调用，EDDI 也可以通过 httpCall 调用你的 LangChain 服务。按“差异化部分”与“基础设施部分”的界线来拆分，是合理的设计。',
				},
			],
		},

		// ─── Microsoft Agent Framework ────────────────────────────────
		'eddi-vs-microsoft-agent-framework': {
			title: 'EDDI vs. Microsoft Agent Framework（AutoGen 和 Semantic Kernel）',
			description:
				'EDDI 与 Microsoft Agent Framework（AutoGen 和 Semantic Kernel 的继任者）的对比：代码定义的工作流与配置即代码、人工介入、审计、托管方式，以及何时 Microsoft 技术栈更合适。',
			summary: 'Microsoft Agent Framework（AutoGen 和 Semantic Kernel 的继任者）与可部署的智能体平台对比。',
			verdict:
				'如果你是 .NET 或 Python 团队，在 Azure 上构建，并希望把智能体工作流作为代码放在自己的服务里，<strong>选择 Microsoft Agent Framework</strong>。如果你希望智能体以可评审的配置形式定义，运行在可部署到任何地方的 JVM 平台上，并且审批关卡和审计账本是内置的而不是自行拼装的，<strong>选择 EDDI</strong>。',
			whatItIsTitle: 'Microsoft Agent Framework 是什么',
			whatItIs:
				'Microsoft Agent Framework 是采用 MIT 许可证的开源 SDK 和运行时，用于在 .NET 和 Python 中构建和编排智能体及多智能体工作流。它出自 Semantic Kernel 和 AutoGen 背后的团队，于 2026 年 4 月发布 1.0 版本。工作流是图，支持顺序、并发、交接和群组协作模式，并具备检查点、流式传输、人工介入控制、OpenTelemetry 追踪和中间件系统。智能体也可以用 YAML 声明，Microsoft 还提供了在 Foundry 上托管的文档。截至 2026 年 10 月，Semantic Kernel 仅接收缺陷修复，新功能开发在 Agent Framework 中进行，AutoGen 处于维护模式，两者都有迁移指南。',
			archetypeTitle: '代码定义的工作流与声明式配置',
			archetype:
				'如果你是为了搜索 AutoGen 或 Semantic Kernel 而来，如今实际可比的对象是 Agent Framework，因为 Microsoft 将新项目引导至那里。它是一个 SDK：你的工作流是服务中以你所用语言编写的代码，由你选择如何托管、保护和审计，并对 Azure 提供强力支持。EDDI 做出相反的取舍。智能体是由已部署平台解释执行的 JSON 配置，因此行为可以做差异比较、评审，并且无需重新构建即可修改，而平台提供 API、Manager 界面、密钥保险库和审计账本。',
			tableTitle: '嵌入你服务的 SDK 与自行部署的平台',
			tableHeaders: { dimension: '维度', them: 'Microsoft Agent Framework', eddi: 'EDDI' },
			rows: [
				{ dimension: '形态', them: '嵌入你的 .NET 或 Python 服务的 SDK 和运行时', eddi: '基于 JVM（Quarkus）的可部署中间件；能运行 Docker 或 Kubernetes 的地方就能运行' },
				{ dimension: '智能体的定义方式', them: '代码定义的智能体和图工作流；智能体也可以用 YAML 声明', eddi: 'JSON 配置；确定性的行为规则决定下一步动作，LLM 调用发生在已声明的任务中' },
				{ dimension: '语言', them: '.NET 和 Python（Go 在单独的代码仓库中）', eddi: '可通过 REST、MCP 和 OpenAI 兼容 API 使用任何语言；智能体本身无需代码' },
				{ dimension: '许可证', them: 'MIT', eddi: EDDI_LICENSE },
				{ dimension: '运行时的自定义逻辑', them: '你的代码和工具函数在你的进程中运行', eddi: '没有运行时 eval() 或代码执行；逻辑通过声明实现，或放在 MCP 工具或 HTTP 调用之后' },
				{ dimension: '人工介入', them: '工作流层面的人工介入控制', eddi: '三个层级的关卡：对话轮次（PAUSE_CONVERSATION）、工具调用（toolApprovals）和群组阶段，带超时策略' },
				{ dimension: '多智能体模式', them: '以代码实现的顺序、并发、交接和群组协作', eddi: '支持 7 种风格的群组讨论（圆桌会议、同行评审、魔鬼代言人、德尔菲法、辩论、专项小组、谈判），并记录决策与异议' },
				{ dimension: '状态与恢复', them: '工作流运行时中的检查点和时间回溯', eddi: '对话记忆由平台持久化；带有 AWAITING_HUMAN 等明确状态' },
				{ dimension: '可观测性与审计', them: 'OpenTelemetry 追踪和中间件钩子；数据流向由你决定', eddi: 'Prometheus 指标，外加 HMAC 签名、仅追加、带序号校验并提供验证端点的审计账本' },
				{ dimension: '密钥与身份', them: '使用你所在平台的机制，例如 Azure 服务', eddi: '内置 AES-256-GCM Secrets Vault；可选的 Keycloak/OIDC，含 eddi-admin 和 eddi-approver 角色' },
				{ dimension: '生态契合度', them: '与 Microsoft 和 Azure 深度集成，包括 Foundry 托管智能体', eddi: `厂商中立：${LLM_PROVIDERS} 个 LLM 提供商，可通过 Ollama 或 Jlama 使用本地模型，${MCP_TOOLS} 个 MCP 工具` },
			],
			betterThemTitle: 'Microsoft Agent Framework 更合适的场景',
			betterThem: [
				'你的团队使用 .NET，智能体应当放在已有的 C# 服务内部，由该服务自行部署和测试。',
				'你在 Azure 上构建，希望与 Foundry 及周边 Microsoft 服务实现一流的集成。',
				'你已有 Semantic Kernel 插件或 AutoGen 代码，受支持的迁移路径比更换平台成本更低。',
				'工作流需要配置无法表达的控制流，例如定制的图拓扑、检查点分支或时间回溯调试。',
				'你想要的是开发者 SDK，并希望自己决定如何托管、保护和观测。',
			],
			betterEddiTitle: 'EDDI 更合适的场景',
			betterEddi: [
				'智能体行为必须是评审人员可以阅读、并能在各环境之间推进的配置，无需重新构建。',
				'安全评审会询问推理时运行了什么代码，而你希望平台给出的答案是“没有”。',
				'审批必须存在于对话轮次、工具调用和群组阶段层面，并有谁做出了什么决定的签名记录。',
				'你需要现成的 Manager 界面、密钥保险库、API 和审计账本，而不是围绕 SDK 自行拼装。',
				'你希望保持云中立：Kubernetes、OpenShift、本地部署，或搭配本地模型的离线隔离环境。',
			],
			migrationTitle: '从 AutoGen、Semantic Kernel 或 Agent Framework 迁移',
			migrationIntro:
				'预期这是意图的转换，而不是代码的转换。角色和工具可以沿用；图逻辑变为行为规则，任何需要真正代码的部分则移到 MCP 工具或 OpenAPI 端点之后。',
			migrationSteps: [
				{ from: '带指令的智能体', to: '带 LLM 任务和系统消息的 EDDI 智能体' },
				{ from: 'Semantic Kernel 插件或函数', to: 'MCP 工具，或 httpCall，或通过 OpenAPI 导入的 API' },
				{ from: '工作流图或 AutoGen 团队', to: '用于路由的行为规则，或用于多智能体协作的群组讨论风格' },
				{ from: '人工介入步骤', to: 'PAUSE_CONVERSATION 规则、toolApprovals glob 模式，或群组阶段上的 requiresApproval' },
				{ from: '检查点存储', to: '具有 step、conversation 和 longTerm 作用域的对话记忆' },
				{ from: '中间件和过滤器', to: '行为规则和工具审批策略' },
				{ from: 'OpenTelemetry 追踪', to: 'Prometheus 指标和审计账本' },
			],
			faq: [
				{
					question: 'Microsoft Agent Framework 是 AutoGen 和 Semantic Kernel 的替代品吗？',
					answer:
						'Microsoft 将其定位为两者的继任者，并发布了迁移指南。截至 2026 年 10 月，Semantic Kernel 仅接收缺陷修复，新功能进入 Agent Framework，AutoGen 处于维护模式。如果你要启动新的 Microsoft 技术栈项目，应当拿来与 EDDI 对比评估的是 Agent Framework。',
				},
				{
					question: 'EDDI 可以替代 AutoGen 进行多智能体对话吗？',
					answer:
						'在许多情况下可以。EDDI 的群组讨论涵盖圆桌会议、同行评审、魔鬼代言人、德尔菲法、辩论、专项小组和谈判等风格，其阶段可要求人工审批，并记录决策及异议。如果你的智能体需要代码层面的自由协调，SDK 更合适。',
				},
				{
					question: '使用 EDDI 就必须放弃 Azure 吗？',
					answer:
						'不需要。EDDI 支持将 Azure OpenAI 作为提供商，并可运行在包括 AKS 在内的 Kubernetes 上。它不提供 Agent Framework 那样深度的 Azure 和 Foundry 集成，所以如果你已深度投入 Microsoft 生态，请权衡这一点。',
				},
				{
					question: '两者可以协同工作吗？',
					answer:
						'可以。EDDI 提供 MCP 服务器、REST API 和 OpenAI 兼容 API，并且可以使用 MCP 服务器和 A2A 智能体。.NET 服务可以把 EDDI 智能体当作工具调用，EDDI 也可以通过 httpCall 调用你的服务。',
				},
			],
		},

		// ─── CrewAI ───────────────────────────────────────────────────
		'eddi-vs-crewai': {
			title: 'EDDI vs. CrewAI',
			description:
				'EDDI 与 CrewAI 在多智能体系统方面的对比：Python 中基于角色的 crew 和 flow，与可部署平台上的配置即代码；代码执行、人工介入、治理，以及何时 CrewAI 是更好的工具。',
			summary: 'Python 中基于角色的 crew 和 flow，对比平台上受治理的多智能体配置。',
			verdict:
				'如果你是 Python 团队，希望角色扮演式的智能体围绕任务协作，并以代码定义和调优，<strong>选择 CrewAI</strong>。如果多智能体工作必须作为受治理的服务运行：LLM 周围有确定性规则、审批关卡和签名审计轨迹，且通过配置而非编码实现，<strong>选择 EDDI</strong>。',
			whatItIsTitle: 'CrewAI 是什么',
			whatItIs:
				'CrewAI 是采用 MIT 许可证的独立 Python 框架，拥有自己的智能体、任务、crew、flow 和工具原语。Crew 是由基于角色的智能体组成的团队，围绕一项任务自主协作。Flow 是事件驱动的工作流，可精确控制执行路径、状态和分支。该项目支持执行期间的人工输入，商业版 CrewAI AMP Suite 则增加了用于托管部署、可观测性、治理和支持的控制平面。',
			archetypeTitle: '自主 crew 与受治理的配置',
			archetype:
				'CrewAI 倾向于智能体自主：你描述角色、目标和任务，crew 自行决定如何协作，需要更严格控制时使用 Flow。EDDI 倾向于控制：确定性的行为规则决定下一步执行哪个动作，LLM 在已声明的任务内被调用，多智能体工作遵循带有明确阶段的命名群组讨论风格。两者都能构建多智能体系统。区别在于，你预先决定多少，与模型在运行时决定多少。',
			tableTitle: '代码中的智能体与配置形式的智能体',
			tableHeaders: { dimension: '维度', them: 'CrewAI', eddi: 'EDDI' },
			rows: [
				{ dimension: '核心抽象', them: '由带任务的基于角色智能体组成的 crew，外加事件驱动的 Flow', eddi: '智能体配置：管道、行为规则、LLM 任务和工具，均为带版本的 JSON' },
				{ dimension: '语言与运行时', them: '嵌入你应用的 Python 库', eddi: '基于 JVM（Quarkus）并使用虚拟线程的平台；智能体无需代码' },
				{ dimension: '许可证', them: 'MIT（开源框架）；之上有商业版 AMP Suite', eddi: EDDI_LICENSE },
				{ dimension: '控制流', them: '智能体在运行时决定如何协作；Flow 在代码中增加显式分支', eddi: '确定性的行为规则选择下一步动作；群组风格定义各阶段' },
				{ dimension: '代码执行', them: '代码解释器工具已从 crewai-tools 中移除，智能体级别的代码执行已被弃用；文档建议使用 E2B 或 Modal 等专用沙箱', eddi: '平台内没有运行时 eval() 或代码执行；逻辑通过声明实现，或放在 MCP 工具或 HTTP 调用之后' },
				{ dimension: '人工介入', them: '支持执行期间的人工输入', eddi: '对话轮次、工具调用和群组阶段均有关卡，带超时策略，可在 Manager、REST、MCP 或 Slack 中审批' },
				{ dimension: '多智能体模式', them: '代码中的 crew 流程和 Flow', eddi: '支持 7 种风格外加自定义的群组讨论，记录决策、计票和异议，转录条目带签名' },
				{ dimension: '管理与治理', them: '追踪和治理由商业版 AMP Suite 中的控制平面提供', eddi: 'Manager 界面、密钥保险库、可选的 Keycloak/OIDC 和审计账本均包含在开源版本中' },
				{ dimension: '审计轨迹', them: '通过控制平面或你自己的工具实现追踪和可观测性', eddi: 'HMAC 签名、仅追加、带序号校验的账本；GET /auditstore/verify/{conversationId}' },
				{ dimension: '模型', them: '可从 Python 使用多种提供商', eddi: `${LLM_PROVIDERS} 个 LLM 提供商，外加通过 Ollama 或 Jlama 使用的本地模型` },
			],
			betterThemTitle: 'CrewAI 更合适的场景',
			betterThem: [
				'你的团队以 Python 为主，希望智能体、工具和 crew 逻辑与其他代码放在同一个代码仓库中。',
				'你想快速原型验证自主的角色扮演式协作，并通过编辑代码来调优。',
				'你需要带有任意逻辑的自定义 Python 工具，这是配置无法表达的。',
				'你更倾向于嵌入使用的代码库，而不是需要自行运维的平台。',
				'商业版 AMP Suite 控制平面符合你的组织部署和监控 crew 的方式。',
			],
			betterEddiTitle: 'EDDI 更合适的场景',
			betterEddi: [
				'多智能体行为必须可预测到足以评审：有命名的阶段、记录在案的决策，以及规则，而不是自由发挥的自主性。',
				'某些工具调用或群组阶段必须由人工批准，且决策必须记录在带签名的账本中。',
				'你希望治理、管理界面和审计包含在开源版本中，而不是放在单独的商业层级里。',
				'安全评审会询问推理时运行了什么代码，而你希望平台不运行任何代码。',
				'非工程师需要在不提交 pull request 的情况下修改智能体行为。',
			],
			migrationTitle: '从 CrewAI 迁移 crew',
			migrationIntro:
				'角色和目标可转换为提示词和群组阶段。变化最大的部分是自主性：crew 过去在运行时决定的事情，会变成你写下来的规则、阶段或审批关卡。',
			migrationSteps: [
				{ from: '智能体（角色、目标、背景故事）', to: '在 LLM 任务中带系统消息的 EDDI 智能体' },
				{ from: '任务', to: '管道任务，或群组讨论中的一个阶段' },
				{ from: 'Crew 流程', to: '群组讨论风格，例如专项小组或圆桌会议' },
				{ from: '带路由器的 Flow', to: '使用 inputmatcher 和 actionmatcher 等条件类型的行为规则' },
				{ from: '自定义 Python 工具', to: 'MCP 工具、httpCall，或通过 OpenAPI 导入的 API' },
				{ from: '人工输入', to: 'PAUSE_CONVERSATION 规则、toolApprovals，或阶段上的 requiresApproval' },
				{ from: '记忆和知识来源', to: '对话记忆作用域和 RAG 知识库' },
			],
			faq: [
				{
					question: 'EDDI 是 CrewAI 在多智能体系统方面的替代方案吗？',
					answer:
						'是的，适用于希望把多智能体协作作为受治理服务的团队。EDDI 的群组讨论按命名风格运行，具有明确的阶段，并记录决策和异议。CrewAI 给予智能体更多自主权，并以 Python 定义，适合希望留在代码中的团队。',
				},
				{
					question: 'EDDI 有像 CrewAI 那样的自主智能体吗？',
					answer:
						'EDDI 的智能体可以调用工具并在群组讨论中协作，但控制流由你配置的行为规则和阶段决定，而不是交给智能体即兴发挥。这是用自主性换取可预测性的有意取舍。',
				},
				{
					question: '为什么代码执行在这里很重要？',
					answer:
						'运行生成代码的智能体需要隔离。CrewAI 已经放弃了内置的代码解释器，转而建议使用专用的沙箱服务。EDDI 在平台内部通过不在运行时求值代码来回避这个问题，因此任何需要真正逻辑的部分，都放在你声明并可以审批的工具之后。',
				},
				{
					question: '我们可以两者都用吗？',
					answer:
						'可以。CrewAI 服务可以通过 REST API、MCP 服务器或 OpenAI 兼容 API 调用 EDDI，EDDI 也可以通过 httpCall 调用 CrewAI 端点。用 CrewAI 做代码层面的实验，用 EDDI 运行受治理的生产智能体，是合理的分工。',
				},
			],
		},

		// ─── Dify ─────────────────────────────────────────────────────
		'eddi-vs-dify': {
			title: 'EDDI vs. Dify',
			description:
				'EDDI 与 Dify 在构建和运营 LLM 智能体方面的对比：可视化工作流构建器和 Code node 与配置即代码、许可证和多租户条款、人工输入、审计，以及何时 Dify 是合适的工具。',
			summary: '可视化工作流构建器和应用平台，对比内置治理的配置即代码。',
			verdict:
				'如果你想要精致的可视化构建器、插件市场，以及让团队或客户本周就能用上 LLM 应用的快速路径，<strong>选择 Dify</strong>。如果智能体必须在明确的 Apache 2.0 许可证下运行，没有代码节点，具备多层级的审批关卡，以及为留存证据而设计的审计账本，<strong>选择 EDDI</strong>。',
			whatItIsTitle: 'Dify 是什么',
			whatItIs:
				'Dify 是用于构建 LLM 应用的开源平台。它提供可视化工作流画布、从摄取到检索的 RAG 管道、可使用其市场、MCP 服务器或自定义 API 中工具的智能体、提示词 IDE、后端即服务 API，以及与 Langfuse、Opik 和 Arize Phoenix 等可观测性工具的集成。你可以使用 Dify Cloud，也可以用 Docker Compose 自行托管社区版，或咨询 Dify Enterprise，后者增加了 SSO、RBAC 和支持 SLA。它的 Code node 在沙箱中运行 Python 或 JavaScript，Human Input node 则会暂停工作流，等待人员响应。',
			archetypeTitle: '应用构建器与受治理的智能体平台',
			archetype:
				'Dify 和 EDDI 在 RAG、工具和智能体方面有重叠，但它们优化的对象不同。Dify 优化的是希望以可视化方式组装应用并快速上线的构建者，以 Code node 作为应急出口。EDDI 优化的是需要让智能体行为成为声明式、可评审配置并带有治理保障的运营者。许多团队理所当然地从 Dify 起步，一些团队在出现多租户、许可证或审计要求后会转向别处。',
			tableTitle: '构建便利性与运营能力',
			tableHeaders: { dimension: '维度', them: 'Dify', eddi: 'EDDI' },
			rows: [
				{ dimension: '核心抽象', them: '可视化工作流和 chatflow 画布，外加提示词 IDE', eddi: '配置即代码：在 Manager 或 API 中编写的 JSON 资源，像源代码一样做版本管理' },
				{ dimension: '许可证', them: 'Dify Open Source License：Apache 2.0 加附加条件。对源代码进行多租户运营需要书面授权，且前端的徽标和版权信息必须保留', eddi: EDDI_LICENSE },
				{ dimension: '自定义逻辑', them: 'Code node 在沙箱中运行 Python 或 JavaScript，沙箱会阻止文件系统访问、出站网络和系统命令，并使用固定的软件包集合', eddi: '没有运行时代码求值；逻辑通过声明实现，或放在 MCP 工具或 HTTP 调用之后' },
				{ dimension: '人工介入', them: 'Human Input node 会暂停工作流，等待在 Web 应用中或通过电子邮件回答的表单；默认等待 3 天，然后进入超时分支', eddi: '对话轮次、工具调用和群组阶段均有关卡；超时策略包括 WAIT_INDEFINITELY、AUTO_APPROVE、AUTO_REJECT 和 ABORT；支持 Manager 和 Slack 审批' },
				{ dimension: '工具与集成', them: '市场、MCP 服务器和自定义 API', eddi: `${MCP_TOOLS} 个 MCP 工具、MCP 客户端、OpenAPI 导入、httpCall、A2A` },
				{ dimension: 'RAG', them: '内置知识管道，含文档提取', eddi: `${EMBEDDING_PROVIDERS} 个嵌入提供商、${VECTOR_STORES} 个向量存储，外加零基础设施的 httpCall RAG` },
				{ dimension: '多智能体', them: '在画布上组合智能体和工作流节点', eddi: '支持 7 种风格的群组讨论，记录决策和异议，每个阶段可选人工审批' },
				{ dimension: '身份与访问', them: '工作空间；SSO 和 RBAC 通过 Dify Enterprise 提供', eddi: '开源版本中提供可选的 Keycloak/OIDC，含 eddi-admin 和 eddi-approver 角色' },
				{ dimension: '可观测性与审计', them: '日志和监控，与 Langfuse、Opik 和 Arize Phoenix 集成', eddi: 'Prometheus 指标，外加 HMAC 签名、仅追加、带序号校验的审计账本' },
				{ dimension: '部署', them: 'Dify Cloud、Docker Compose，企业版按需提供', eddi: 'Docker、Helm、Kustomize、OpenShift（Red Hat 认证镜像，通过 OperatorHub 提供 Operator）' },
			],
			betterThemTitle: 'Dify 更合适的场景',
			betterThem: [
				'你想要非工程师也能读懂并扩展的可视化画布，并在构建时获得快速反馈。',
				'插件市场和现成的工作流模板能为你节省实实在在的集成时间。',
				'你想要托管选项（Dify Cloud），不想自己运维任何东西。',
				'Code node 正是你想要的功能：在工作流内部用 Python 或 JavaScript 做小型数据转换。',
				'你只为自己的团队运行一套内部部署，因此多租户的许可证条件对你不适用。',
			],
			betterEddiTitle: 'EDDI 更合适的场景',
			betterEddi: [
				'你的法务团队需要一份明确的 Apache 2.0 许可证，包括在一套部署中服务众多租户或客户的情形。',
				'安全评审禁止在自动化平台内部执行代码，无论是否有沙箱。',
				'特定的工具调用或群组阶段需要人工决策，并记录在带签名的账本中。',
				'智能体行为必须作为配置进行版本管理、差异比较，并在各环境之间推进。',
				'你需要 Kubernetes、OpenShift 或搭配本地模型的离线隔离部署。',
			],
			migrationTitle: '从 Dify 迁移应用',
			migrationIntro:
				'Dify 应用是可视化的图，而 EDDI 智能体是配置，因此这是转换而不是导入。最需要斟酌的是 Code node，它们将变为配置或已声明的工具。',
			migrationSteps: [
				{ from: 'Chatflow 或工作流', to: 'EDDI 智能体：管道加行为规则' },
				{ from: 'LLM 节点和提示词', to: '带系统消息和带版本提示词片段的 LLM 任务' },
				{ from: '知识库', to: '带嵌入提供商和向量存储的 EDDI RAG 知识库' },
				{ from: '工具、插件或 MCP 服务器', to: 'MCP 客户端连接、httpCall，或通过 OpenAPI 导入的 API' },
				{ from: 'Code node', to: '行为规则和提示词逻辑；如果需要真正的代码，则使用 MCP 工具' },
				{ from: 'Human Input node', to: '带超时策略的 PAUSE_CONVERSATION 规则或 toolApprovals' },
				{ from: '提供商 API 密钥', to: 'Secrets Vault 条目，以 ${vault:key} 引用' },
			],
			faq: [
				{
					question: 'Dify 是开源的吗？',
					answer:
						'Dify 以 Dify Open Source License 发布源代码，这是带有附加条件的 Apache 2.0：未经书面授权，不得使用该源代码运行多租户环境，也不得移除前端的徽标或版权信息。这与 EDDI 使用的纯 Apache 2.0 不同，因此如果这两项条件可能适用于你，请与你的法务团队一起阅读。',
				},
				{
					question: 'EDDI 有像 Dify 那样的可视化构建器吗？',
					answer:
						'EDDI Manager 是用于构建、部署和监控智能体的生产级 React 界面，支持 11 种语言。它是一个管理界面，而不是节点画布：你配置智能体、提示词、工具和管道，每一次变更都是带版本的资源，而不是一张图。',
				},
				{
					question: '为什么 EDDI 不提供代码节点？',
					answer:
						'沙箱化的代码节点是合理的功能，Dify 也限制了它能访问的范围。但平台内的任何代码执行都是安全评审必须检查的攻击面。EDDI 让智能体行为保持声明式，因此工具能做的事，就是你声明并批准的事。',
				},
				{
					question: '我们可以同时使用 Dify 和 EDDI 吗？',
					answer:
						'可以。Dify 可以使用 MCP 服务器和自定义 API，而 EDDI 提供 MCP 服务器和 REST API，因此 Dify 工作流可以把 EDDI 智能体作为受治理的步骤来调用。EDDI 也可以通过 httpCall 调用 Dify API。',
				},
			],
		},

		// ─── n8n ──────────────────────────────────────────────────────
		'eddi-vs-n8n': {
			title: 'EDDI vs. n8n',
			description:
				'EDDI 与 n8n 在 AI 智能体编排方面的对比：运行时和并发模型、代码执行与安全态势、许可证、治理，以及何时 n8n 仍是更好的工具。',
			summary: '工作流自动化平台，对比 AI 编排中间件。',
			verdict:
				'如果任务是连接 SaaS 系统并自动化业务流程，AI 只是更大工作流中的一个步骤，<strong>选择 n8n</strong>。如果 AI 智能体<em>本身就是</em>产品，并且必须通过企业安全评审：受监管的数据、审计义务、按租户隔离，以及对智能体可执行操作的审批关卡，<strong>选择 EDDI</strong>。',
			whatItIsTitle: 'n8n 是什么',
			whatItIs:
				'n8n 是基于 Node.js 构建的工作流自动化平台，拥有可视化画布和数百个预置集成。它可以自行托管，社区庞大且确实活跃，其基于 LangChain 的节点可以让你把 LLM 调用放入任何工作流。它是把各系统连接起来最快的方式之一。',
			archetypeTitle: '不同的类别，重叠的用例',
			archetype:
				'这两个工具并不属于同一类型。n8n 是<strong>工作流自动化平台</strong>，AI 只是众多节点类型之一。EDDI 是 <strong>AI 编排中间件</strong>，智能体、它的记忆、工具和治理就是产品本身。两者确有重叠，团队确实会在 n8n 中构建智能体，但一旦智能体处理受监管数据，两者会做出相反的取舍。',
			tableTitle: '架构与治理',
			tableHeaders: { dimension: '维度', them: 'n8n', eddi: 'EDDI' },
			rows: [
				{ dimension: '运行时', them: 'Node.js 单线程事件循环', eddi: '带虚拟线程（Project Loom）的 JVM，为受 I/O 限制的 LLM 调用提供真正的并行' },
				{ dimension: '自定义逻辑', them: 'Code node 在运行时执行 JavaScript 或 Python', eddi: '零运行时代码求值，智能体行为仅为声明式 JSON' },
				{ dimension: '许可证', them: 'Sustainable Use License（fair-code），未获 OSI 认证；部分商业用途适用单独条款', eddi: EDDI_LICENSE },
				{ dimension: '集成广度', them: '数百个预置 SaaS 连接器，这是它最强的资产', eddi: `${MCP_TOOLS} 个 MCP 工具，外加通过 httpCall 接入的任何 OpenAPI 或 REST 端点` },
				{ dimension: '身份认证', them: '内置用户管理；SSO 在付费层级提供', eddi: '开源版本中提供可选的 Keycloak/OIDC，含 eddi-admin 和 eddi-approver 角色' },
				{ dimension: '审计轨迹', them: '执行历史和应用日志', eddi: 'HMAC 签名、仅追加、带序号校验的审计账本' },
				{ dimension: '人工审批', them: '工作流内的等待节点和手动触发器', eddi: '对话轮次级暂停、逐个工具调用的签核、超时策略、Slack 审批，全部有记录' },
				{ dimension: '合规态势', them: '按部署各自实现', eddi: `内置 GDPR、HIPAA 和欧盟 AI 法案基础设施，涵盖 ${FRAMEWORKS} 个合规框架` },
			],
			betterThemTitle: 'n8n 更合适的场景',
			betterThem: [
				'工作负载是通用的业务自动化而非 AI：同步 CRM、移动文件、响应 webhook。',
				'你更需要 SaaS 连接器的广度，而不是智能体治理的深度。在这一点上 n8n 完胜。',
				'由非工程团队负责工作流，需要可视化画布来理解它们。',
				'你想在今天下午就跑起来，而且涉及的数据不受监管。',
			],
			betterEddiTitle: 'EDDI 更合适的场景',
			betterEddi: [
				'智能体接触受监管数据，安全评审会询问推理时运行了什么代码。EDDI 的回答是：没有。',
				'你需要在一套部署中，对众多客户实现按租户隔离、配额和成本归属。',
				'人工必须在单个工具调用执行之前批准它，且批准记录在带签名的账本中。',
				'智能体行为必须作为配置进行版本控制、差异比较，并在各环境之间推进。',
				`在再分发或离线隔离部署方面，许可证必须明确无疑：${EDDI_LICENSE}。`,
			],
			migrationTitle: '从 n8n 迁移工作流',
			migrationIntro:
				'大多数偏智能体型的 n8n 工作流都能顺利映射。无法映射的部分通常是 Code node，这恰恰是关键所在：它们所做的事情必须变为配置或已声明的工具。',
			migrationSteps: [
				{ from: '工作流', to: 'EDDI package：由管道、提示词和工具绑定组成的带版本捆绑包' },
				{ from: 'HTTP Request node', to: 'httpCall 工具定义，并应用 SSRF 防护和路径遍历防护' },
				{ from: 'Code node', to: '行为规则和提示词片段；如果需要真正的逻辑，则使用 MCP 工具' },
				{ from: '凭据存储', to: 'EDDI Secrets Vault（AES-256-GCM），通过保险库键引用' },
				{ from: 'AI Agent node', to: '具备持久记忆、意图路由和模型级联的 EDDI 智能体' },
				{ from: '等待或手动触发器', to: '带超时策略的人工介入审批关卡' },
			],
			migrationGuideLabel: '完整指南：将 AI 工作流从 n8n 迁移到 EDDI',
			faq: [
				{
					question: 'EDDI 可以直接替代 n8n 吗？',
					answer:
						'不可以，它也无意如此。n8n 覆盖数百种 SaaS 工具之间的通用工作流自动化。EDDI 覆盖具备企业级治理的 AI 智能体编排。团队通常两者并用：n8n 负责业务流程的管道衔接，EDDI 负责需要审计轨迹和审批关卡的智能体。',
				},
				{
					question: 'EDDI 可以调用 n8n，或反过来吗？',
					answer:
						'两者都可以。EDDI 提供 MCP 服务器和 REST API，因此 n8n 工作流可以把 EDDI 智能体作为一个步骤调用。EDDI 也可以通过 httpCall 工具调用 n8n webhook。让各自做自己擅长的事，是合理的架构。',
				},
				{
					question: '为什么运行时代码执行如此重要？',
					answer:
						'Code node 是在你的自动化平台内部运行的任意代码。这很方便，但也带来一整类漏洞：沙箱逃逸、通过不可信输入的注入以及权限提升都由此而起。EDDI 明确禁止运行时代码求值，因此智能体行为是 JSON 配置，可在上线前评审、做差异比较并获得批准。',
				},
				{
					question: 'n8n 是开源的吗？',
					answer:
						'n8n 是 fair-code，以 Sustainable Use License 发布。源代码可获取，并允许为内部使用而自行托管，但它不是 OSI 认证的开源许可证，部分商业用途需要单独的条款。EDDI 采用 Apache 2.0。如果你的法务团队需要对再分发给出明确答案，这一差异就很重要。',
				},
			],
		},

		// ─── Flowise ──────────────────────────────────────────────────
		'eddi-vs-flowise': {
			title: 'EDDI vs. Flowise',
			description:
				'EDDI 与 Flowise 在构建和运营 LLM 智能体方面的对比：原型速度与生产治理、RAG 架构、多租户，以及何时 Flowise 是合适的工具。',
			summary: '原型开发速度，对比生产运营能力。',
			verdict:
				'想在本周就把可运行的 RAG 聊天机器人展示给相关方，<strong>选择 Flowise</strong>。当这个原型必须变成多个团队共同运营、合规官需要签字确认、客户依赖其运行的系统时，<strong>选择 EDDI</strong>。',
			whatItIsTitle: 'Flowise 是什么',
			whatItIs:
				'Flowise 是采用 Apache 2.0 许可证的 LLM 应用可视化构建器，基于 Node.js 和 React 构建，封装了 LangChain 和 LlamaIndex。你通过拖拽节点来组装 chatflow：加载器、分割器、嵌入模型、向量存储、链。要从零开始得到一个可用的检索聊天机器人，几乎没有什么比它更快。',
			archetypeTitle: '原型速度与运营能力',
			archetype:
				'Flowise 和 EDDI 面向项目的不同阶段。Flowise 优化的是第一周：可视化组装、即时反馈、覆盖多数常见模式的模板。EDDI 优化的是此后的一切：谁可以修改智能体、它被允许做什么、重启时会发生什么，以及如何向审计人员证明这一切。许多团队确实应当从 Flowise 起步。',
			tableTitle: '从原型到生产',
			tableHeaders: { dimension: '维度', them: 'Flowise', eddi: 'EDDI' },
			rows: [
				{ dimension: '核心抽象', them: '可视化 chatflow 画布，节点图序列化为 JSON', eddi: '配置即代码：在界面或 API 中编写的 JSON 资源，像源代码一样做版本管理' },
				{ dimension: '运行时', them: 'Node.js 事件循环', eddi: '带虚拟线程的 JVM，为大量并发的受 I/O 限制的对话而构建' },
				{ dimension: '许可证', them: 'Apache 2.0，与 EDDI 相同', eddi: EDDI_LICENSE },
				{ dimension: 'RAG', them: '丰富的加载器和向量存储选择，按流程配置', eddi: `${EMBEDDING_PROVIDERS} 个嵌入提供商、${VECTOR_STORES} 个向量存储，外加零基础设施的 httpCall RAG` },
				{ dimension: '自定义逻辑', them: 'Custom Function 和 Tool 节点在运行时执行 JavaScript', eddi: '零运行时代码求值；逻辑是声明的，而非执行的' },
				{ dimension: '多租户', them: '企业版提供工作空间', eddi: '开源版本中提供按租户的配额、成本归属和数据隔离' },
				{ dimension: '记忆', them: '对话缓冲区和外部存储集成', eddi: '持久化的用户记忆、dream consolidation、滚动摘要、感知 token 的窗口管理' },
				{ dimension: '审计轨迹', them: '执行追踪，面向调试', eddi: 'HMAC 签名、仅追加的账本，面向留存证据' },
				{ dimension: '部署', them: 'Docker，通常是单实例', eddi: 'Docker、Helm、Kustomize 和 OpenShift（Red Hat 认证镜像，通过 OperatorHub 提供 Operator）' },
			],
			betterThemTitle: 'Flowise 更合适的场景',
			betterThem: [
				'你正在验证一个想法究竟是否可行。对于探索，可视化组装胜过编写配置。',
				'团队习惯用图来思考，希望以空间布局的方式看到检索管道。',
				'这是供一个团队使用的内部工具，没有多租户、审计或审批要求。',
				'你想在午饭前尝试五种检索策略。',
			],
			betterEddiTitle: 'EDDI 更合适的场景',
			betterEddi: [
				'聊天机器人已成为产品，现在需要 SLA、多租户，以及对变更负责的人。',
				'提示词工程师必须无需重新部署即可迭代，同时运维人员保有对上线内容的控制。',
				'对话必须能在重启后保留，并在数月之后仍可为监管机构重建。',
				'人工必须在智能体据此行动之前批准特定的工具调用。',
				`部署目标是 Kubernetes 或离线隔离的基础设施，并且必须可证明地可复现。每次合并都会运行 ${TESTS} 项测试。`,
			],
			migrationTitle: '从 Flowise 迁移 chatflow',
			migrationIntro:
				'Flowise 的 chatflow 本身就是 JSON，且概念高度对应，因此这通常是所有迁移中最机械的一种。',
			migrationSteps: [
				{ from: 'Chatflow', to: 'EDDI package，可导出为 ZIP，密钥会被自动清除' },
				{ from: '文档加载器和分割器', to: 'EDDI RAG 文档摄取配置' },
				{ from: '向量存储节点', to: `${VECTOR_STORES} 个受支持向量存储之一，通过配置选择` },
				{ from: '嵌入节点', to: `${EMBEDDING_PROVIDERS} 个嵌入提供商之一` },
				{ from: '聊天模型节点', to: `涵盖 ${LLM_PROVIDERS} 个提供商的 LLM 配置，可使用模型级联` },
				{ from: 'Custom Function 节点', to: '行为规则、提示词片段，或已声明的 MCP 工具' },
				{ from: '记忆节点', to: '采用 commit-flag 记忆策略的 EDDI 持久化记忆' },
			],
			migrationGuideLabel: '完整指南：将 chatflow 从 Flowise 迁移到 EDDI',
			faq: [
				{
					question: '我们应该先用 Flowise 做原型，然后再迁移到 EDDI 吗？',
					answer:
						'这是站得住脚且常见的路径。Flowise 回答某种检索策略是否有效；EDDI 回答你能否在三年内安全地运营它。请在原型尚未接入生产用户之前就规划好迁移，因为迁移比关于停机时间的沟通更容易。',
				},
				{
					question: '两者都是 Apache 2.0。实际区别在哪里？',
					answer:
						'许可证相同；运营能力不同。EDDI 在开源版本中提供可选的 OIDC/Keycloak、带签名的审计账本、按租户的配额，以及人工介入的审批关卡，而不是放在企业版之后。',
				},
				{
					question: 'EDDI 有可视化构建器吗？',
					answer:
						'EDDI Manager 是用于构建、部署和监控智能体的生产级 React 界面，支持 11 种语言。它是一个管理界面，而不是节点画布：你配置智能体、提示词、工具和管道，每一次变更都是带版本的资源，而不是一张图。',
				},
			],
		},

		// ─── Rasa ─────────────────────────────────────────────────────
		'eddi-vs-rasa': {
			title: 'EDDI vs. Rasa',
			description:
				'EDDI 与 Rasa 在对话式 AI 方面的对比：训练式 NLU 与确定性对话和 LLM 编排、配置即代码、多智能体协作，以及何时 Rasa 更合适。',
			summary: '训练式 NLU 与确定性对话，对比基于配置即代码的 LLM 编排。',
			verdict:
				'如果你需要对固定意图集进行严格受控的对话，拥有标注好的训练数据，并有 Python 机器学习团队来负责，<strong>选择 Rasa</strong>。如果助手必须基于变化速度快于重新训练周期的知识进行推理，调用企业系统，并通过配置而非重新训练来治理，<strong>选择 EDDI</strong>。',
			whatItIsTitle: 'Rasa 是什么',
			whatItIs:
				'Rasa 是成熟的对话式 AI 框架：通过训练式 NLU 管道完成意图分类和实体提取，并通过规则、故事（stories）和策略完成对话管理。它原生基于 Python，可自行托管，多年来一直是大规模脚本化客服助手的默认选择。Rasa Pro 增加了商业层级，包括由 LLM 驱动的对话。',
			archetypeTitle: '相同的问题，不同世代的解法',
			archetype:
				'EDDI 和 Rasa 都源自对话式 AI 领域，EDDI 自 2006 年起就作为对话平台持续开发。区别在于智能位于何处。Rasa 把它放在你用自己的标注数据训练的模型中，从而获得精确、可重复的控制。EDDI 把它放在由声明式配置治理的、经过编排的 LLM 中，以部分确定性换取覆盖范围和变更速度。',
			tableTitle: '对话、工具与变更成本',
			tableHeaders: { dimension: '维度', them: 'Rasa', eddi: 'EDDI' },
			rows: [
				{ dimension: '理解方式', them: '训练式 NLU：基于标注数据的意图分类和实体提取', eddi: 'LLM 理解，外加基于意图的智能体发现与路由' },
				{ dimension: '修改行为', them: '更新训练数据、重新训练、评估、重新部署', eddi: '编辑 JSON 配置；无需重新训练，也无需重新部署' },
				{ dimension: '确定性', them: '高。规则和策略让流程可重复、可测试', eddi: '本质上较低，通过行为规则和审批关卡予以弥补' },
				{ dimension: '语言', them: 'Python；自定义动作是 Python 代码', eddi: 'JVM 运行时；智能体逻辑是配置，工具是声明式的' },
				{ dimension: '工具生态', them: '需要你自行构建和托管的自定义动作服务器', eddi: `${MCP_TOOLS} 个 MCP 工具、内置智能体工具，外加任何 OpenAPI 端点` },
				{ dimension: '多智能体', them: '每套部署一个助手是常见模式', eddi: '基于协调者的编排和 7 种群组讨论风格' },
				{ dimension: '许可', them: '社区版，外加商业授权的 Rasa Pro 层级；请核实当前条款', eddi: EDDI_LICENSE },
				{ dimension: '合规', them: '自行托管支持数据驻留；合规框架按部署各自实现', eddi: `审计账本、数据主体权利 API，平台内涵盖 ${FRAMEWORKS} 个合规框架` },
			],
			betterThemTitle: 'Rasa 更合适的场景',
			betterThem: [
				'你已经拥有标注好的对话数据，以及能维护 NLU 管道的机器学习团队。',
				'监管或品牌方面的约束要求助手具备确定性，且决策路径可审计、不涉及语言模型。',
				'针对狭窄意图集的超大规模流量，此时每轮 LLM 成本会占主导。',
				'你需要对分类置信度阈值和回退行为进行细粒度控制。',
			],
			betterEddiTitle: 'EDDI 更合适的场景',
			betterEddi: [
				'助手必须基于变化速度快于重新训练周期的文档和系统来回答。',
				'业务人员需要在没有机器学习工程师、没有训练运行、也没有部署的情况下修改行为。',
				'问题需要多个专业智能体协作，而不是一棵扁平的意图树。',
				'你想要 LLM 的灵活性，但合规官要求在上线前具备审批关卡和带签名的日志。',
				`你想避免模型层的锁定：${LLM_PROVIDERS} 个提供商，或通过 Ollama 或 Jlama 使用的本地模型。`,
			],
			migrationTitle: '从 Rasa 迁移助手',
			migrationIntro:
				'这种映射是概念层面的而非机械的，因为两者把智能放在不同的位置。预期你需要把意图结构转换为路由和提示词，而不是转换文件。',
			migrationSteps: [
				{ from: '意图和训练样例', to: '基于意图的智能体发现；标注数据变为评估材料，而不再是训练输入' },
				{ from: '实体和槽位', to: '结构化提取，外加持久化的用户记忆' },
				{ from: '故事和规则', to: '行为规则和管道配置' },
				{ from: '自定义动作服务器', to: 'MCP 工具或 httpCall 工具定义' },
				{ from: '响应和领域文件', to: '提示词片段，可复用且带版本' },
				{ from: '回退策略', to: '带超时策略的人工介入升级' },
			],
			faq: [
				{
					question: 'EDDI 只是又一个取代训练式 NLU 的 LLM 封装吗？',
					answer:
						'EDDI 自 2006 年起就作为对话平台开发，远早于当前这一代 LLM，并保留了真正重要的部分：基于意图的路由、受管理的对话状态和管道架构。LLM 取代的是理解层，而不是其周围的编排。',
				},
				{
					question: '我们出于合规需要确定性的答案。这是否排除了 EDDI？',
					answer:
						'不一定，但这一取舍应当明确。LLM 的输出不是确定性的。EDDI 的应对方式是：用行为规则约束响应，对重大操作设置人工审批关卡，并用带签名的审计账本记录做出了什么决定以及原因。如果你的要求是决策中完全不能有语言模型参与，Rasa 是更好的答案。',
				},
				{
					question: '过渡期间可以同时运行两者吗？',
					answer:
						'可以。常见的模式是，将已知的高流量意图路由到现有的 Rasa 助手，同时由 EDDI 处理开放式查询和系统集成，然后随着信心增强逐步转移流量。EDDI 可以通过 httpCall 调用 Rasa 端点。',
				},
			],
		},
	},
};

export default copy;
