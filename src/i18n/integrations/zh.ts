/**
 * Integration catalog copy, Simplified Chinese. Keys match ./en.ts; facts must stay in sync with it.
 */
import { MCP_TOOLS, VECTOR_STORES } from '../stats';
import type { IntegrationsCopy } from './en';

const copy: IntegrationsCopy = {
	ui: {
		title: '集成',
		metaTitle: 'EDDI 集成：Slack、MCP、OpenAPI、SAP、向量库与 Kubernetes',
		description:
			'了解 EDDI 如何连接 Slack、Open WebUI、Keycloak、MCP 与 A2A，通过 OpenAPI 接入任意 REST API，通过 API 接入 SAP，并支持六种向量库、Kubernetes、OpenShift 和 Ollama。每个页面都附有真实配置。',
		heroTitle: 'EDDI',
		heroHighlight: '集成',
		heroDesc:
			'渠道、身份、代理协议、企业系统、向量库和基础设施。每个页面都会说明你能获得什么、在 EDDI 中如何工作、真实的配置，以及这项集成如何受到治理：审批、审计账本和密钥保管库。',
		filterLabel: '按类别筛选集成',
		filterAll: '全部',
		searchLabel: '搜索集成',
		searchPlaceholder: '搜索，例如 Slack、SAP 或 pgvector',
		noResults: '没有匹配的集成。请换一个关键词，或清除筛选。',
		notCoveredNote:
			'EDDI 不提供 Microsoft Teams、Telegram、WhatsApp 或 Discord 渠道，自身也不发送电子邮件，且没有通用的入站 Webhook。任何提供 API 的系统仍可通过 <a href="/integrations/openapi/">OpenAPI 导入</a>、HTTP 调用或 <a href="/integrations/mcp-client/">MCP</a> 接入。',
		backToCatalog: '所有集成',
		whatYouGet: '你将获得',
		howItWorks: '在 EDDI 中如何工作',
		configTitle: '配置',
		configDesc: '摘自 EDDI 文档。诸如 your-agent-id 之类的占位符需要你自行替换。',
		governanceTitle: '治理',
		goodToKnowTitle: '须知',
		linksTitle: '文档与指南',
		docsLink: '文档',
		guidesLabel: '指南',
		relatedTitle: '相关集成',
		getStarted: '开始使用',
		modelsLinkText: '浏览模型目录',
		solutionsTitle: '需要有人为你构建并运行吗？',
		solutionsDesc: 'EDDI Solutions 负责构建和维护连接器，以托管或联合运维的方式运行 EDDI，并支持你在自有云或本地环境中部署。',
		solutionsBtn: '联系 EDDI Solutions',
		sourcesDesc: '本页的配置和行为依据 EDDI 文档，核对日期为 {date}。字段名称和默认值可能随版本变化，请在所用版本的文档中确认。',
		copy: '复制',
		copied: '已复制',
		pageTitle: 'EDDI 中的 {name}',
		pageDescription: '{name}：{summary}',
		ctaTitle: '没有找到你的系统？',
		ctaDesc: '请向我们描述它，或从 <a href="/integrations/openapi/">OpenAPI</a> 途径入手。只要它有 API，代理就能调用，并带有审批和审计记录。',
	},
	categories: {
		channels: '渠道',
		identity: '身份与安全',
		protocols: '代理协议',
		enterprise: '企业系统',
		data: '数据与 RAG',
		infrastructure: '基础设施',
	},
	integrations: {
		slack: {
			summary: '在 Slack 中使用受治理的 AI 代理：支持 @提及、私信、线程、串流到线程中的小组讨论，以及带有“批准”和“拒绝”按钮的 Block Kit 审批卡片。',
			gets: [
				'代理可回复 @提及和私信，后续追问保留在同一线程中',
				'通过触发关键词，把消息路由到指定代理或多代理小组讨论',
				'小组讨论实时串流到线程中',
				'在 Slack 中为暂停的回合、工具调用和小组阶段提供审批卡片，并带有审批人白名单',
				'一个 EDDI 可对接多个 Slack 工作区',
			],
			steps: [
				'创建一个 Slack 应用，并添加文档中列出的机器人令牌权限范围（<code>chat:write</code>、<code>app_mentions:read</code>、<code>history</code> 和 <code>im:*</code> 系列权限）。',
				'把机器人令牌和签名密钥存入 EDDI 密钥保管库，然后以 <code>${vault:...}</code> 的形式引用。',
				'创建一个渠道集成，把 Slack 频道映射到默认代理，并可按需通过 <code>panel:</code> 之类的触发关键词映射到小组。',
				'把请求 URL 设为 <code>https://&lt;your-eddi-host&gt;/integrations/slack/events</code>，并订阅 <code>app_mention</code>、<code>message.im</code> 和 <code>message.channels</code>。请把这一步放在最后：Slack 会立即验证该 URL。',
				'如需审批，把交互请求 URL 设为 <code>/integrations/slack/interactive</code>，并在 <code>hitlApproverUserIds</code> 中列出审批人。',
			],
			captions: [
				'凭据放进保管库，而不是代理或渠道配置中。',
				'一个渠道集成示例：包含默认代理、置于触发关键词之后的小组，以及 platformConfig 中的审批设置。',
			],
			governance: [
				'审批卡片带有“批准”和“拒绝”按钮。只有列在 <code>hitlApproverUserIds</code> 中的 Slack 用户才能做出决定。没有这份列表时不会渲染按钮，交互式决定也会被拒绝（失败即关闭）。',
				'工具调用卡片会显示工具名称及其经过脱敏和截断的参数，因此审批人清楚自己批准的是什么。在第 1 版中，按钮会对整批调用统一批准或拒绝。',
				'每个决定都归属于 <code>slack:&lt;userId&gt;</code>，并记录在审计账本中。',
				'传入事件会通过签名密钥（HMAC-SHA256）和重放保护进行验证，密钥本身始终留在保管库中。',
			],
			goodToKnow: [
				'Slack 是 EDDI 唯一提供渠道的第三方聊天平台。未包含的平台请见目录页上的说明。',
				'可选的观察模式让目标能够看到普通频道流量，并受触发条件、冷却时间以及每日响应和成本上限的约束。这些上限按每个 EDDI 节点计算。',
			],
		},
		'open-webui': {
			summary: 'EDDI 提供与 OpenAI 兼容的 /v1 API，把已部署的代理呈现为模型，因此 Open WebUI、OpenAI SDK、LangChain 和 LiteLLM 都可以与之对话。',
			gets: [
				'已部署的 EDDI 代理出现在 Open WebUI 的模型下拉列表中',
				'支持流式输出和令牌用量报告的 Chat Completions',
				'每个聊天对应一个 EDDI 对话，因此记忆和行为规则可跨回合保持',
				'无状态变体（<code>:stateless</code> 模型 ID），适用于生成标题等单轮调用',
			],
			steps: [
				'用 <code>EDDI_OPENAI_COMPAT_ENABLED=true</code> 启用适配器，并设置 API 密钥。它默认处于禁用状态。',
				'在 EDDI 中部署一个代理，它会出现在 <code>GET /v1/models</code> 中。',
				'把 Open WebUI（或 SDK）指向 <code>http://&lt;eddi&gt;:7070/v1</code>，并使用相同的 API 密钥。',
				'在 Open WebUI 中开启 <code>ENABLE_FORWARD_USER_INFO_HEADERS</code>。否则所有聊天窗口会共用同一个 EDDI 对话。',
				'从模型列表中选择该代理，开始聊天。',
			],
			captions: [
				'摘自 EDDI 文档的生产形态 compose 片段。请修改示例中的 API 密钥。',
				'在 shell 中验证该端点。把 EDDI_API_KEY 设为与 compose 文件中相同的值。',
			],
			governance: [
				'该 API 有自己的 API 密钥认证，在你启用之前保持关闭。EDDI 会拒绝在一种组合下启动：该组合会让任何能访问该端口的人都可以创建对话。',
				'代理保留自己的审批关口和审计记录。经由 /v1 的请求就是一次普通的 EDDI 对话。',
				'共享 API 密钥加用户请求头，意味着把身份委托给作为受信代理的 Open WebUI。请像对待任何共享密钥一样对待它，并定期轮换。',
			],
			goodToKnow: [
				'只有单个代理会作为模型出现，多代理小组不会。',
				'快捷回复和按钮会渲染为 Markdown 文本，而不是交互式控件。',
				'工具调用不会返回给客户端。EDDI 在自己的管道内运行工具，工具活动仍可在审计账本中查看。',
			],
		},
		'web-chat': {
			summary: '由 EDDI 自身提供的可主题化 React 聊天界面，支持流式响应、Markdown、快捷回复和撤销，可以直接打开，也可以嵌入页面。',
			gets: [
				'为每个已部署的代理提供位于 /chat/{environment}/{agentId} 的聊天页面',
				'逐令牌流式输出、丰富的 Markdown、代码高亮和 LaTeX 数学公式',
				'深色和浅色主题、快捷回复按钮，以及撤销和重做',
				'通过 URL 参数隐藏控件并设置标题，得到专注的嵌入式小组件',
				'无需后端的演示模式',
			],
			steps: [
				'运行 EDDI。聊天界面随 EDDI 镜像一起发布，安装程序也包含它。',
				'在你的 EDDI 主机上打开 <code>/chat/&lt;environment&gt;/&lt;agentId&gt;</code>。',
				'通过 <code>theme</code>、<code>title</code>、<code>hideUndo</code> 和 <code>hideNewConversation</code> 等 URL 参数进行调整。',
				'如需嵌入，把相同的 URL 放进页面的 iframe 中。',
			],
			captions: [
				'聊天界面提供的 URL 模式。',
				'摘自聊天界面 README 的嵌入式小组件。可按需组合显示参数。',
			],
			governance: [
				'聊天界面与其他所有客户端使用同一套对话 API，因此行为规则、审批关口和审计账本原样适用。',
				'开启认证后，小组件需要已登录用户的访问令牌，后端会在每次调用时进行验证。',
				'请把代理生成的任何文本视为不受信任的输出。聊天界面会渲染来自代理的 Markdown。',
			],
			goodToKnow: [
				'默认情况下，EDDI 返回的策略禁止被嵌入框架，因此在运维人员允许该来源之前，浏览器不会在其他站点内渲染聊天界面。请查阅聊天界面 README，了解你所用版本的框架嵌入设置。',
			],
		},
		'keycloak-oidc': {
			summary: '使用 Keycloak 或其他 OIDC 提供方，在 EDDI 前面加上 OpenID Connect 认证，并提供管理员、编辑者、用户、查看者和审批人等角色。',
			gets: [
				'Manager 和 API 通过你的身份提供方登录',
				'角色：<code>eddi-admin</code>、<code>eddi-editor</code>、<code>eddi-user</code>、<code>eddi-viewer</code>，以及用于审批决定的 <code>eddi-approver</code>',
				'安装程序会导入 Keycloak 的现成 <code>eddi</code> realm',
				'以已登录用户身份发起的调用，使审计记录指向真实的人',
			],
			steps: [
				'使用 <code>--with-auth</code> 运行安装程序。它会启动 Keycloak，并在首次启动时导入 <code>eddi</code> realm。',
				'在 Keycloak 管理控制台中为 <code>eddi</code> 用户设置密码。随附的 realm 没有预设密码。',
				'登录 Manager。为人员分配所需角色，并把审批人加入 <code>eddi-approver</code>。',
				'对于已有的身份提供方，设置 <code>QUARKUS_OIDC_*</code> 变量（启用租户、授权服务器 URL、客户端 ID、客户端密钥）。',
				'在 HTTP 调用中，使用 <code>${caller:token}</code>，以已登录用户自己的令牌调用 API，而不是共用一个凭据。',
			],
			captions: [
				'添加 Keycloak 的安装程序选项。',
				'外部 OIDC 提供方的环境变量，摘自 EDDI 文档。',
			],
			governance: [
				'在生产启动模式下，除非你明确选择退出，否则 EDDI 会拒绝在 OIDC 被禁用时启动，因此开放的管理 API 是一项决定，而不是一次意外。',
				'审批端点需要 <code>eddi-approver</code> 角色，或者所有者，或 <code>eddi-admin</code>。',
				'使用 <code>${caller:token}</code> 时，审计记录里是真实的用户。共用的静态凭据会让所有操作都归并到同一个主体。',
			],
			goodToKnow: [
				'认证是可选的，默认关闭。安装程序配置的是 Keycloak。其他 OIDC 提供方使用相同的设置，但某些细节（例如为 A2A 公布的令牌端点）在你未设置时会假定 Keycloak 的路径。',
				'随附的 realm 导入只执行一次。之后对 JSON 的修改不会同步到正在运行的 Keycloak。',
			],
		},
		'secrets-vault': {
			summary: '内置的信封加密密钥保管库。配置以 ${vault:keyName} 的形式引用密钥，其值不会出现在代理配置、导出文件或日志中。',
			gets: [
				'在 LLM、HTTP 调用、MCP 和 RAG 配置中使用 <code>${vault:keyName}</code> 引用',
				'AES-256-GCM 信封加密，每个租户使用独立的数据密钥',
				'按代理授权：哪些代理可以使用哪些密钥',
				'密钥会从配置导出中清除，并在日志中被脱敏',
			],
			steps: [
				'设置保管库主密钥（<code>EDDI_VAULT_MASTER_KEY</code>）。安装程序会为你生成一个。没有密钥时保管库处于禁用状态。',
				'用 <code>PUT /secretstore/secrets/{tenantId}/{keyName}</code> 或通过 Manager 存入密钥。',
				'在配置中以 <code>${vault:keyName}</code> 引用它。',
				'EDDI 在运行时解析该引用。明文不会存储在对话记忆中。',
				'把 <code>allowedAgents</code> 收窄到确实需要该密钥的代理。检查在代理部署时执行。',
			],
			captions: [
				'存入密钥。响应绝不会返回其值。',
				'在 LLM 任务中按名称引用该密钥。',
				'在不改动密钥值的前提下，更改谁可以使用它。',
			],
			governance: [
				'授权默认在部署时强制执行：引用了未获授权密钥的代理不会被部署。',
				'通过对话数据传入的保管库引用，例如用户输入或模型回复，会被拒绝，而不是被解析。',
				'明文会从请求记录、审批预览和请求日志行中被脱敏。',
				'开启认证后，保管库端点受 <code>eddi-admin</code> 角色保护。',
			],
			goodToKnow: [
				'EDDI 没有原生的 HashiCorp Vault、AWS 或 Azure 客户端。在 Kubernetes 上，External Secrets Operator 可以从 HashiCorp Vault、AWS Secrets Manager 或 Azure Key Vault 同步 <code>eddi-secrets</code> Kubernetes Secret（其中存放保管库主密钥）。各个具体密钥仍然保存在 EDDI 保管库中。',
				'如果主密钥丢失，加密的密钥将无法恢复。请做好备份。',
			],
		},
		'mcp-server': {
			summary: `通过 Claude Desktop、Cursor、VS Code 和其他 MCP 客户端控制 EDDI。EDDI 通过 Streamable HTTP 提供 ${MCP_TOOLS} 个 MCP 工具，用于对话和管理。`,
			gets: [
				`${MCP_TOOLS} 个工具：列出代理并与之对话，创建和部署代理，管理小组、计划任务等`,
				'单一端点 <code>/mcp</code>，使用 Streamable HTTP',
				'可直接用于支持 HTTP 的客户端，并可通过桥接用于仅支持 stdio 的客户端',
				'开启认证后支持基于角色的访问控制',
			],
			steps: [
				'运行 EDDI。MCP 端点为 <code>http://localhost:7070/mcp</code>。',
				'把 EDDI 添加到你的 MCP 客户端。支持 HTTP 的客户端直接使用该 URL。',
				'对于 Claude Desktop 等仅支持 stdio 的客户端，按示例使用 <code>mcp-remote</code> 桥接。',
				'让助手列出代理、开始对话或创建代理。文档中的流程是 <code>list_agents</code>、<code>create_conversation</code>、<code>talk_to_agent</code>。',
				'开启 OIDC 后，为客户端提供一个 bearer 令牌。',
			],
			captions: [
				'适用于具有原生 HTTP 传输的客户端。',
				'适用于仅支持 stdio 的客户端。在 Windows 上，如果 npx 不在 PATH 中，请用 cmd /c 包装该命令。',
			],
			governance: [
				'<code>setup_agent</code> 和 <code>create_api_agent</code> 等写入工具需要 <code>eddi-editor</code> 角色。',
				'MCP 的 <code>create_api_agent</code> 工具有意设计为无法设置审批关口。配置带审批关口的代理需要通过 REST 并使用 <code>eddi-admin</code>。',
				'等待审批的小组阶段，既可以在 Manager、REST 和 Slack 中批准，也可以通过 MCP 批准，每个决定都会被审计。',
			],
			goodToKnow: [
				'除非你选择退出，生产环境启动时会拒绝在 OIDC 关闭的情况下运行；而选择退出的实例会让任何能访问该端口的人都可以使用 <code>/mcp</code>。',
			],
		},
		'mcp-client': {
			summary: '让 EDDI 代理使用外部 MCP 服务器的工具。服务器的工具会成为代理的工具，并与其他所有工具一样受到相同的审批关口和审计记录约束。',
			gets: [
				'来自任何支持 Streamable HTTP 的 MCP 服务器的工具',
				'名称允许列表和拒绝列表，用于精简工具清单',
				'可选的资源列出与读取',
				'断路器，在服务器持续失败时停止调用',
			],
			steps: [
				'创建一个 <code>mcpcalls</code> 配置，填入服务器 URL、传输方式 <code>http</code>，以及以 <code>${vault:...}</code> 引用形式提供的 API 密钥。',
				'把它作为工作流步骤引用（<code>eddi://ai.labs.mcpcalls</code>）。',
				'代理的 LLM 任务会自动获取该服务器的工具（<code>enableMcpCallTools</code> 默认为 true）。',
				'把这些工具加入 <code>toolApprovals</code>，使影响重大的调用等待人工审批。',
				'对于仅支持 stdio 的服务器，把它放在自己的容器中，经由 HTTP 桥接对外提供，并让 EDDI 指向该桥接。',
			],
			captions: [
				'一个 mcpcalls 配置。令牌是保管库引用。',
				'除只读工具外，为所有 MCP 工具设置审批。',
			],
			governance: [
				'MCP 工具调用与其他所有工具来源一样，参与同一套人工介入审批关口。',
				'工具描述中带有指令特征的文本会被脱敏，并限制长度。工具结果会附带来源信息，且默认会对带有指令特征的内容进行脱敏。',
				'工具白名单属于上下文管理，不是安全边界。真正的边界是你赋予该连接的凭据，加上审批关口。',
				'每一个受控决定都会写入审计账本。',
			],
			goodToKnow: [
				'EDDI 只实现一种 MCP 传输方式，即 Streamable HTTP。它不会自行启动 stdio 服务器，因为可通过配置编辑的命令，等同于以 EDDI 进程用户身份执行任意代码。请使用桥接 sidecar。',
				'断路器会在 60 秒内失败 3 次后打开，因此工具缺失通常意味着服务器正在出错。',
			],
		},
		a2a: {
			summary: '通过 Agent Card 和 JSON-RPC 向其他代理开放 EDDI 代理，并在你自己的代理中把远程 A2A 代理当作工具使用。',
			gets: [
				'为每个你选择开放的代理提供一份 Agent Card，列出其技能',
				'JSON-RPC 2.0 端点，支持 <code>tasks/send</code>、<code>tasks/get</code> 和 <code>tasks/cancel</code>',
				'远程 A2A 代理与内置工具、MCP 工具和 HTTP 工具一起并入工具调用循环',
				'技能过滤器，可只开放远程代理的一部分',
			],
			steps: [
				'用 <code>a2aEnabled: true</code> 为代理选择开放，并填写描述和要公布的技能。',
				'对等方从 <code>/a2a/agents/{agentId}/agent.json</code> 获取其卡片，并调用 <code>POST /a2a/agents/{agentId}</code>。',
				'如需使用远程代理，在 LLM 任务的 <code>a2aAgents</code> 下列出它，并填写其 URL 和以保管库引用形式提供的 API 密钥。',
				'EDDI 读取远程卡片，把每项技能转换为名为 <code>{agentName}_{skillId}</code> 的工具，并通过 <code>tasks/send</code> 调用它。',
			],
			captions: [
				'开放一个代理。A2A 按代理单独选择开启。',
				'使用远程代理。API 密钥必须是保管库引用。',
			],
			governance: [
				'Agent Card 在设计上允许匿名访问，使对等方在持有凭据之前就能发现代理。开启认证后，列出代理和 JSON-RPC 端点都需要令牌。',
				'远程代理的工具与其他工具来源一样，经过相同的审批关口和工具结果护栏，API 密钥则保留在保管库中。',
				'<code>tasks/send</code> 会消耗你的 LLM 预算来运行对话，因此它不是匿名的。',
			],
			goodToKnow: [
				'开启认证后，卡片会公布一个令牌端点。除非你设置 <code>eddi.a2a.public-token-endpoint</code>，EDDI 会推导出 Keycloak 风格的路径，因此使用其他身份提供方时请设置它。',
			],
		},
		openapi: {
			summary: '无需编写代码，即可把任何带有 OpenAPI 3.0 或 3.1 描述的 REST API 变成带工具的代理，并让影响重大的调用经过人工审批。',
			gets: [
				'根据规范生成的 API 调用代理：按标签分组的 HTTP 调用配置、管道和部署',
				'端点过滤、基础 URL 覆盖，以及认证请求头透传',
				'可在生成的工具之外再添加 MCP 服务器的工具',
				'工具本身就是配置，因此可以审阅、对比差异并进行版本管理',
			],
			steps: [
				'通过 <code>create_api_agent</code> MCP 工具或 <code>POST /administration/agents/setup-api</code>，把 OpenAPI 规范提供给 EDDI。',
				'用允许列表列出代理应具备的操作。未声明的端点无法被调用。',
				'EDDI 生成 HTTP 调用配置，构建完整的管道并部署代理。',
				'凭据以 <code>${vault:...}</code> 引用的形式保存。',
				'用 <code>http.*:*</code> 为写操作设置审批，并用 <code>http.get:*</code> 豁免读操作。',
			],
			captions: [
				'生成的工具所基于的 httpCalls 模型。此处手工写出，以展示各字段。',
				'审批每一个会改变状态的调用，读操作直接放行。',
			],
			governance: [
				'审批模式可以针对工具所调用的对象（<code>http.post:*</code>），因此在 operationId 变化后仍然有效。',
				'平台会保护出站调用，防范 SSRF 和路径遍历。',
				'通过 REST，<code>setup-api</code> 接受 <code>hitlConfig</code>，因此可以在配置代理时，从第一个版本起就为其写入工具设置审批。MCP 工具无法设置它。',
				'决定会记录到审计账本中。',
			],
			goodToKnow: [
				'生成的写入工具会把整个请求体作为一个 <code>requestBody</code> 参数。',
			],
		},
		sap: {
			summary: 'EDDI 没有原生的 SAP 连接器。你可以通过 OpenAPI 导入或 HTTP 调用，经由 SAP 的 OData 和 REST API 访问 SAP，或通过 MCP 服务器访问，并受审批和审计账本约束。',
			gets: [
				'代理通过 SAP 公开的 API 读取数据，并在获得审批后写入',
				'与其他工具相同的治理：审批、审计账本、保管库中的凭据',
				'代理中没有代码。连接本身就是可以审阅的配置',
			],
			steps: [
				'选择途径。如果 SAP 服务发布了 OpenAPI 描述，就使用 OpenAPI 导入。要声明单个 OData 或 REST 请求，就使用 HTTP 调用。如果你已经在 SAP 前面运行了 MCP 服务器，就使用 MCP。',
				'把 SAP 凭据或令牌存入密钥保管库，并以 <code>${vault:...}</code> 的形式引用。',
				'先只声明代理需要的读操作，例如列出或读取业务对象。',
				'用 <code>http.*:*</code> 为每个写操作设置审批，并用 <code>http.get:*</code> 豁免读操作。审批人在 Manager 或 Slack 中做出决定。',
				'在放宽代理的权限之前，先在审计账本中检查每一次调用。',
			],
			captions: [
				'从 SAP OData 服务读取数据的示例。主机、服务路径和认证方式取决于你的 SAP 系统。',
				'写操作等待人工审批，读操作直接通过。',
			],
			governance: [
				'写操作会被拦下等待审批，决定记录在带 HMAC 签名、仅可追加的审计账本中。',
				'凭据始终保存在保管库中，绝不会出现在代理配置或导出文件里。',
				'端点允许列表意味着，无论用户输入什么，未声明的 SAP 操作都无法被调用。',
			],
			goodToKnow: [
				'这是一种集成模式，而不是经过认证的 SAP 连接器。如何向 SAP 认证，以及它开放哪些 API，取决于你的系统环境。',
				'EDDI Solutions 可以为你构建并维护这一连接（包括自定义 MCP 工具），并在你的云端或本地环境中运行。',
			],
		},
		chroma: {
			summary: '把 Chroma 用作 EDDI 知识库的向量库。当你没有现成的基础设施可复用时，这是阻力最小的选择。',
			gets: [
				'基于你自己文档的检索增强回答',
				`${VECTOR_STORES} 种向量库之一，通过配置而不是代码来选择`,
				'摄取来源：网站抓取和上传文件，支持计划任务和运行历史',
			],
			steps: [
				'运行一个 Chroma 服务器，记下它的 URL 和集合名称。',
				'创建一个 RagConfiguration，设置 <code>storeType: "chroma"</code> 和向量库参数，并指定嵌入提供方。',
				'用 <code>eddi://ai.labs.rag</code> 工作流步骤把它绑定到代理。',
				'在 LLM 任务的 <code>knowledgeBases</code> 下按名称选择它，然后摄取文档。',
			],
			captions: [
				'知识库。Chroma 需要一个基础 URL 和一个集合名称。',
				'把它绑定到代理的步骤，以及使用它的任务。漏掉工作流步骤是最常见的错误。',
			],
			governance: [
				'嵌入 API 密钥是保管库引用，因此文档语料和凭据彼此分离。',
				'嵌入调用会把文档文本发送给托管的嵌入提供方。如果数据不得离开你的基础设施，请使用自托管的嵌入模型。',
				'开放的向量库就是你语料的一份副本。请为 Chroma 启用认证，并避免暴露在公共接口上。',
			],
			goodToKnow: [
				'替换文档分块的行为已在内存模式和 pgvector 上验证。对 Chroma 预计可用，但没有测试覆盖，因此重新摄取的文档可能会留下过期的分块。',
			],
		},
		pgvector: {
			summary: '把带 pgvector 的 PostgreSQL 用作 EDDI 知识库的向量库。如果你已经在运行 PostgreSQL，这是推荐的持久化选择。',
			gets: [
				'知识库位于你已经在备份和运维的数据库中',
				'重新摄取时经过验证的文档替换',
				'与其他所有向量库相同的代理配置，只需更改向量库参数',
			],
			steps: [
				'在 PostgreSQL 中启用 pgvector 扩展，并创建数据库和用户。',
				'创建一个 RagConfiguration，设置 <code>storeType: "pgvector"</code>、连接信息、表名以及向量 <code>dimension</code>。',
				'用 <code>eddi://ai.labs.rag</code> 工作流步骤绑定它。',
				'在 LLM 任务中按名称选择它，然后摄取文档。',
			],
			captions: [
				'维度必须与你的嵌入模型一致。1536 对应 text-embedding-3-small。',
				'把知识库绑定到代理，并在任务中使用它。',
			],
			governance: [
				'数据库密码是必填参数。请以保管库引用的形式保存。',
				'你现有的 PostgreSQL 访问控制和备份同样适用于这些向量。',
				'嵌入调用会把文档文本发送给你所配置的嵌入提供方。',
			],
			goodToKnow: [
				'内存模式的向量库仅用于开发：30 分钟没有查询或重启后会被清空。生产环境应选择 pgvector 这样的持久化向量库。',
			],
		},
		qdrant: {
			summary: '把 Qdrant 用作 EDDI 知识库的向量库，这是一款专为向量设计的数据库，扩展空间充裕。',
			gets: [
				'知识库背后是一个专用的向量数据库',
				'可选的 API 密钥和 TLS',
				'与其他所有向量库相同的代理配置',
			],
			steps: [
				'运行一个 Qdrant 服务器，记下它的主机和 gRPC 端口（EDDI 默认为 6334）。',
				'创建一个 RagConfiguration，设置 <code>storeType: "qdrant"</code> 和 <code>collectionName</code>。',
				'用 <code>eddi://ai.labs.rag</code> 工作流步骤绑定它。',
				'在 LLM 任务中按名称选择它，然后摄取文档。',
			],
			captions: [
				'Qdrant 需要主机、端口和集合名称。apiKey 和 useTls 是可选的。',
				'把知识库绑定到代理，并在任务中使用它。',
			],
			governance: [
				'如果 Qdrant 需要 API 密钥，请从保管库引用。',
				'嵌入调用会把文档文本发送给你所配置的嵌入提供方。',
				'开放的向量库就是你语料的一份副本。请避免暴露在公共接口上。',
			],
			goodToKnow: [
				'替换文档分块的行为预计在 Qdrant 上可用，但没有测试覆盖。缺少这一点时，重新摄取的文档可能会留下过期的分块。',
			],
		},
		elasticsearch: {
			summary: '把 Elasticsearch 用作 EDDI 知识库的向量库，适合你已经在运行它、并希望在同一处同时进行关键词搜索和向量搜索的情况。',
			gets: [
				'知识库位于你已经在运维的集群中',
				'支持 API 密钥或用户名加密码认证',
				'与其他所有向量库相同的代理配置',
			],
			steps: [
				'确保 Elasticsearch 集群可以访问，并选定一个索引名称。',
				'创建一个 RagConfiguration，设置 <code>storeType: "elasticsearch"</code>、<code>serverUrl</code> 和 <code>indexName</code>。',
				'用 <code>eddi://ai.labs.rag</code> 工作流步骤绑定它。',
				'在 LLM 任务中按名称选择它，然后摄取文档。',
			],
			captions: [
				'默认的 serverUrl 是 localhost:9200。对于受保护的集群，请添加 apiKey，或 userName 和 password。',
				'把知识库绑定到代理，并在任务中使用它。',
			],
			governance: [
				'请从保管库引用 API 密钥或密码。',
				'嵌入调用会把文档文本发送给你所配置的嵌入提供方。',
				'你现有的集群访问控制同样适用于这些向量。',
			],
			goodToKnow: [
				'替换文档分块的行为预计在 Elasticsearch 上可用，但没有测试覆盖。缺少这一点时，重新摄取的文档可能会留下过期的分块。',
			],
		},
		'mongodb-atlas-vector-search': {
			summary: '把 MongoDB Atlas Vector Search 用作 EDDI 知识库的向量库，如果你已经在 Atlas 上运行，这是自然的选择。',
			gets: [
				'知识库位于你已经在运维的 Atlas 集群中',
				'通过连接字符串、数据库、集合和索引名称进行配置',
				'与其他所有向量库相同的代理配置',
			],
			steps: [
				'在 Atlas 中创建向量搜索索引，并记下数据库、集合和索引名称。',
				'创建一个 RagConfiguration，设置 <code>storeType: "mongodb-atlas"</code> 和向量库参数。',
				'用 <code>eddi://ai.labs.rag</code> 工作流步骤绑定它。',
				'在 LLM 任务中按名称选择它，然后摄取文档。',
			],
			captions: [
				'连接字符串包含凭据，因此这里使用保管库引用。',
				'把知识库绑定到代理，并在任务中使用它。',
			],
			governance: [
				'请把连接字符串保存在保管库中，而不是配置里。',
				'嵌入调用会把文档文本发送给你所配置的嵌入提供方。',
				'Atlas 的访问控制和网络规则同样适用于这些向量。',
			],
			goodToKnow: [
				'替换文档分块的行为预计在 Atlas 上可用，但没有测试覆盖。缺少这一点时，重新摄取的文档可能会留下过期的分块。',
			],
		},
		'kubernetes-helm': {
			summary: '在任何符合标准的 Kubernetes 集群上运行 EDDI，可使用单文件快速入门、Helm chart 或 Kustomize overlay，并支持 MongoDB 或 PostgreSQL。',
			gets: [
				'部署 EDDI 和 MongoDB 的快速入门清单',
				'面向生产配置的 Helm chart 和 Kustomize overlay',
				'可选组件：Keycloak 认证、NATS JetStream、监控、入口、Pod 中断预算和网络策略',
				'以 MongoDB 或 PostgreSQL 作为数据存储',
			],
			steps: [
				'应用快速入门清单，或在提供保管库主密钥的情况下安装 Helm chart。',
				'创建存放保管库主密钥的 <code>eddi-secrets</code> Secret。任何清单都不会写入它，这是有意为之。',
				'为 MongoDB 或 PostgreSQL 选择数据库 overlay 或 Helm values。',
				'添加你需要的可选组件，例如 Keycloak 和入口。',
				'对于生产环境的密钥，使用 External Secrets Operator 同步 <code>eddi-secrets</code>。',
			],
			captions: [
				'一条命令部署 EDDI 和 MongoDB。Pod 会一直等到 eddi-secrets Secret 存在。',
				'使用生成的保管库主密钥执行 Helm 安装。',
				'把数据存储切换为 PostgreSQL 的 Helm values。',
			],
			governance: [
				'没有任何清单会写入主密钥 Secret，因此重新应用不会替换正在使用的密钥，也就不会导致现有密钥无法解密。',
				'Helm 和 Kustomize 随附的 Keycloak realm 没有为特权账户设置默认密码。',
				'生产配置会增加 Pod 中断预算和网络策略。',
			],
			goodToKnow: [
				'External Secrets Operator 可以从 AWS Secrets Manager、HashiCorp Vault、Azure Key Vault 等同步 <code>eddi-secrets</code> Secret。EDDI 本身没有这些服务的原生客户端。',
				'EDDI Solutions 可以在你自己的云端、本地环境，或以专属托管实例的方式为你运行 EDDI。',
			],
		},
		openshift: {
			summary: 'EDDI 提供基于 UBI 10 构建、通过 Red Hat 认证的容器镜像，可在 OpenShift 4.12 或更高版本上以非 root 身份运行，并提供面向 OperatorHub 的 Operator。',
			gets: [
				'通过 Red Hat 认证的镜像，已列入 Red Hat Ecosystem Catalog',
				'以 UID 185 非 root 运行，基于 UBI 10 和 OpenJDK 25',
				'一个 Operator，可根据自定义资源创建 EDDI 实例和路由',
				'在 CI 中使用 Red Hat preflight 检查认证',
			],
			steps: [
				'在 OpenShift 4.12 或更高版本上，打开 OperatorHub 并安装 EDDI Operator。',
				'在已安装的 Operator 中创建一个 <code>Eddi</code> 实例，并设置 MongoDB 的规模和存储。',
				'Operator 会自动创建路由。',
				'像在任何集群上一样添加认证和密钥。',
			],
			captions: ['文档中的 Eddi 自定义资源示例。'],
			governance: [
				'容器以非 root 用户运行，镜像附带第三方许可证文件。',
				'每个版本都会在 CI 中对照 Red Hat 认证要求进行检查。',
				'除非你明确选择退出，生产环境启动仍然要求 OIDC。',
			],
			goodToKnow: [
				'Operator 正在针对 EDDI 6 更新，以同时支持 MongoDB 和 PostgreSQL。通用的 Kubernetes 途径适用于任何符合标准的集群。',
				'UBI 10 镜像不支持 RHEL 8 主机，需要 RHEL 9 或更高版本。',
			],
		},
		ollama: {
			summary: '使用 Ollama 在本地运行模型，让提示词和文档保留在你自己的硬件上，适用于本地部署和气隙环境。',
			gets: [
				'类型为 <code>ollama</code> 的 LLM 任务，与你的 Ollama 服务器通信',
				'无需提供方 API 密钥，也不会向托管模型发送数据',
				'一个 compose overlay，可在 EDDI 旁边启动 Ollama',
				'进程内的 Jlama，可作为小型量化模型的替代方案',
			],
			steps: [
				'使用 Ollama compose overlay 启动 EDDI，或自行运行 Ollama 并记下它的 URL。',
				'把模型拉取到 Ollama 中。模型标签请完全按 <code>ollama list</code> 显示的内容填写。',
				'把任务的 <code>type</code> 设为 <code>ollama</code>，并填写 <code>baseUrl</code> 和 <code>model</code>。',
				'在容器内，<code>localhost</code> 指的是容器自身。请使用 compose 服务名称或 <code>host.docker.internal</code>。',
			],
			captions: [
				'让 Ollama 在同一网络中启动，地址为 http://ollama:11434。',
				'摘自 EDDI 文档的 Ollama 任务。',
			],
			governance: [
				'提示词、检索到的上下文和回答都留在你的网络内，这正是本地模型的意义所在。',
				'审批、行为规则和审计账本的适用方式与托管模型相同。',
				'不涉及任何凭据，因此模型本身没有需要放进保管库的内容。',
			],
			goodToKnow: [
				'完全气隙的环境需要本地 Ollama 或预先填充的 Jlama 缓存，因为 EDDI 在没有网络时无法下载模型。',
				'本地模型在工具调用和 JSON 的可靠性上各不相同。请测试你所依赖的行为。',
			],
		},
	},
};

export default copy;
