/**
 * Model catalog copy, Simplified Chinese. Keys match ./en.ts; facts and numbers must stay in sync with it.
 */
import type { ModelsCopy } from './en';

const copy: ModelsCopy = {
	models: {
		'claude-fable-5-1': {
			summary: 'Anthropic 目前全面开放的最强模型，专为高要求的推理和长时间运行的代理工作而打造。',
			strengths: ['可持续运行数小时的代理会话', '多步骤研究', '文档、电子表格和幻灯片工作', '1M 令牌上下文，128K 输出'],
			bestFor: ['长周期代理', '深度研究', '一直推进到成品文档的分析工作'],
		},
		'claude-opus-5-5': {
			summary: 'Anthropic 为高要求工作推荐的默认模型：长时间运行的代理式编码和知识工作，自适应思考始终开启。',
			strengths: ['可自主运行数小时的编码代理', '大规模重构', '以视觉为主的工作流和计算机操作', '1M 令牌上下文，128K 输出'],
			bestFor: ['复杂的代理式编码', '企业知识工作', '系统工程'],
		},
		'claude-sonnet-5-5': {
			summary: 'Anthropic 兼顾速度与智能的模型，适用于日常编码、代理和企业工作，默认开启自适应思考。',
			strengths: ['响应迅速', '1M 令牌上下文，128K 输出', '可将思考限定在工具调用之间', '可靠的工具使用'],
			bestFor: ['代码生成', '数据分析', '内容创作', '使用工具的代理'],
		},
		'claude-haiku-4-5': {
			summary: 'Anthropic 当前速度最快、成本最低的模型，拥有 200K 上下文窗口，可选扩展思考。',
			strengths: ['Claude 系列中延迟最低', '按令牌预算进行扩展思考', '文本和图像输入', '非常适合子代理任务'],
			bestFor: ['实时应用', '大批量处理', '级联的第一层'],
		},
		'gpt-6': {
			summary: 'OpenAI 当前的推理模型家族，分为三个层级：Astra 用于最困难的工作，Sol 以更低成本达到接近 Astra 的效果，Luna 用于大批量任务。',
			strengths: ['每个层级都有 1.05M 令牌上下文和 128K 输出', '函数调用和结构化输出', '推理强度最高可达 max', '文本和图像输入'],
			bestFor: ['Astra：高要求的推理和研究', 'Sol：复杂编码和专业工作', 'Luna：目标明确的大批量任务'],
		},
		'gpt-5-6': {
			summary: 'OpenAI 的上一代模型，引入了 Sol、Terra 和 Luna 三个层级：旗舰、均衡和最低成本。',
			strengths: ['1.05M 令牌上下文和 128K 输出', '推理强度从 none 到 max', '文本和图像输入'],
			bestFor: ['Sol：复杂的专业工作', 'Terra：能力与成本的平衡', 'Luna：对成本敏感的大批量任务'],
		},
		'gpt-oss': {
			summary: 'OpenAI 基于 Apache 2.0 的开放权重混合专家推理模型：120b 可装入一块 80 GB GPU，20b 可在 16 GB 设备上运行。',
			strengths: ['Apache 2.0 许可证', '函数调用和结构化输出', '可调节的推理强度', '可微调'],
			bestFor: ['自托管和本地部署', '在 Groq 上快速推理', '使用工具的代理'],
		},
		'gemini-3-8-flash': {
			summary: 'Google 当前全面开放的 Flash 模型，以 Flash 级的速度和成本面向长周期工程、自主代理和企业工作流。',
			strengths: ['文本、图像、视频、音频和 PDF 输入', '函数调用和结构化输出', '思考级别 low、medium 和 high', '1M 令牌上下文'],
			bestFor: ['自主代理', '企业工作流', '多模态文档'],
		},
		'gemini-3-1-pro': {
			summary: 'Google 当前的 Pro 模型，在 Gemini API 上处于预览阶段，针对复杂推理、软件工程和精确的多步骤工具使用进行了优化。',
			strengths: ['文本、图像、视频、音频和 PDF 输入', '高效思考', '可靠的多步骤工具执行', '1M 令牌上下文'],
			bestFor: ['复杂问题求解', '代理式编码', '多模态理解'],
		},
		'gemini-3-5-flash-lite': {
			summary: 'Google 3.5 系列中成本最低、延迟最低的模型，专为高吞吐量的子代理工作、文档解析和简单抽取而打造。',
			strengths: ['低延迟、低成本', '文本、图像、视频、音频和 PDF 输入', '函数调用和思考', '1M 令牌上下文'],
			bestFor: ['大批量子代理', '文档解析和抽取', '翻译'],
		},
		gemma: {
			summary: 'Google 的开放权重模型家族，从边缘设备规模的模型，到 Gemma 4 中的 31B 稠密模型和 26B 混合专家模型。',
			strengths: ['开放权重，Gemma 4 采用 Apache 2.0', '面向代理的函数调用', '所有尺寸都支持图像输入', '可在普通硬件上运行'],
			bestFor: ['设备端和边缘部署', '自托管代理', '问答和摘要'],
		},
		'grok-4-7': {
			summary: 'xAI 面向编码、代理任务和知识工作的前沿模型，支持文本和图像输入，可选择推理强度。',
			strengths: ['500K 令牌上下文', '函数调用和结构化输出', '推理强度从 low 到 xhigh', '美国数据驻留端点'],
			bestFor: ['软件工程', '长时间的代理任务', '专业知识工作'],
		},
		'deepseek-flash': {
			summary: 'DeepSeek 当前的 Flash 模型，具备原生图像理解能力、1M 令牌上下文，默认开启思考；权重采用 MIT 许可证。',
			strengths: ['1M 令牌上下文，最多 384K 输出', '工具调用和 JSON 输出', '图像和文本输入', 'MIT 许可的开放权重'],
			bestFor: ['高性价比的代理', '编码代理', '输入量大的长任务'],
		},
		'deepseek-v4-pro': {
			summary: 'DeepSeek 的大型 V4 Pro 模型：通过 API 仅支持文本，拥有 1M 令牌上下文、工具调用和可选的思考强度；权重采用 MIT 许可证。',
			strengths: ['1M 令牌上下文，最多 384K 输出', '思考强度 low、high 或 max', '工具调用和 JSON 输出', 'MIT 许可的开放权重'],
			bestFor: ['代码代理', '工具使用和任务自动化'],
		},
		'deepseek-r1-distill': {
			summary: '一个小型开放推理模型：用 DeepSeek-R1 的思维链训练的 Qwen3-8B，适合本地使用。',
			strengths: ['逐步推理', '就其规模而言数学能力强', 'MIT 许可的权重'],
			bestFor: ['本地推理任务', '数学和逻辑', '离线实验'],
		},
		'kimi-k3': {
			summary: 'Moonshot AI 的旗舰模型，拥有 1M 令牌上下文、原生图像和视频理解能力，思考始终开启；权重已公开。',
			strengths: ['1M 令牌上下文', '文本、图像和视频输入', '工具调用', '权重已公开'],
			bestFor: ['长周期编码', '知识工作', '深度推理和代理工作流'],
		},
		'kimi-k2-7-code': {
			summary: 'Moonshot AI 的专用编码模型，拥有 256K 上下文、始终开启的思考、工具调用，另有一个独立的高速版本。',
			strengths: ['256K 令牌上下文', '文本、图像和视频输入', '多步骤工具调用', '高速版本约每秒 180 个令牌'],
			bestFor: ['长时间编码任务', '代理式编码', '数学和推理'],
		},
		'qwen-3-8': {
			summary: '阿里巴巴的 Qwen 3.8 系列：Max 是旗舰，Max 和 Flash 都提供 1M 令牌上下文、图像和视频输入以及混合思考。',
			strengths: ['1M 令牌上下文，131K 输出', '文本、图像和视频输入', '函数调用和结构化输出', '区域包括法兰克福和弗吉尼亚'],
			bestFor: ['长周期编码', '法律、金融和设计领域的专业工作', '多模态代理'],
		},
		'qwen-3-7-plus': {
			summary: 'Qwen 3.7 Plus 和 Flash 提供 1M 令牌上下文、图像和视频输入、混合思考以及函数调用，适合多模态代理工作。',
			strengths: ['1M 令牌上下文，131K 输出', '文本、图像和视频输入', '函数调用', '屏幕和 GUI 理解（Plus）'],
			bestFor: ['多模态代理', '可视化代码生成', '搜索代理（Flash）'],
		},
		'glm-5-3': {
			summary: 'Z.ai 面向软件工程和代理工作的旗舰模型，拥有 1M 令牌上下文、最多 128K 输出，权重已公开；Flash 版本增加了图像和视频输入。',
			strengths: ['1M 令牌上下文，128K 输出', '支持工具流式传输的函数调用', '思考强度 low、high 或 max', '权重已公开'],
			bestFor: ['编码代理', '长时间的代理任务', '代码安全审查'],
		},
		'minimax-m3': {
			summary: 'MiniMax 的原生多模态编码与代理模型，上下文最多 1M 令牌，思考穿插在工具调用之间；权重已公开。',
			strengths: ['最多 1M 令牌上下文（保证 512K）', '在工具调用之间思考', '文本、图像和视频输入', '权重已公开'],
			bestFor: ['编码助手', '长时间的代理任务和工作流自动化', '长视频分析'],
		},
		'mistral-large': {
			summary: 'Mistral 基于 Apache 2.0 的开放权重混合专家旗舰模型（41B 激活参数，675B 总参数），具备图像理解能力。',
			strengths: ['Apache 2.0 许可证', '图像理解', '支持 40 多种语言', '函数调用和结构化输出'],
			bestFor: ['多语言助手', '文档分析', '工具使用工作流'],
		},
		'mistral-medium': {
			summary: '一个 128B 稠密多模态模型，融合了指令遵循、推理和编码能力，可按请求设置推理强度。',
			strengths: ['按请求设置推理强度', '为代理和编码而打造', '函数调用和 JSON 输出', '可在四块 GPU 上自托管'],
			bestFor: ['代理式工作流', '编码代理', '长文档'],
		},
		'mistral-small': {
			summary: '一个开放权重混合专家模型（约 6B 激活参数），融合了指令、推理和编码能力，支持图像输入。',
			strengths: ['指令、推理和编码集于一个模型', '可开启的推理', '图像输入', 'Apache 2.0 许可证'],
			bestFor: ['对成本敏感的代理', '带可选推理的通用聊天', '图像理解'],
		},
		ministral: {
			summary: '三种尺寸的小型开放权重模型，每种都有基础、指令和推理版本，并具备图像理解能力，适合本地和边缘使用。',
			strengths: ['为本地部署而打造', '每种尺寸都有推理版本', '图像理解', 'Apache 2.0 许可证'],
			bestFor: ['边缘和本地部署', '低成本、大批量任务', '本地代理'],
		},
		codestral: {
			summary: 'Mistral 的编码模型，面向低延迟、高频率的任务，例如中间填充（fill-in-the-middle）和代码生成。',
			strengths: ['中间填充', '低延迟补全', '函数调用', '结构化输出'],
			bestFor: ['代码补全', '代码生成'],
		},
		'llama-4': {
			summary: 'Meta 的原生多模态混合专家模型，激活参数为 17B：Scout（总参数 109B）和 Maverick（总参数 400B）。',
			strengths: ['文本和图像输入', '混合专家架构的高效率', '12 种语言', '长上下文（Bedrock 上的 Maverick 为 1M）'],
			bestFor: ['多模态助手', '视觉推理', '长文档'],
		},
		'llama-3-3-70b': {
			summary: 'Meta 的 70B 文本模型，面向八种语言的多语言对话，支持工具使用。',
			strengths: ['八种语言', '工具使用', '128K 上下文'],
			bestFor: ['自托管的通用聊天', '多语言助手', '合成数据生成'],
		},
		'llama-3-2-1b': {
			summary: '一个 1.2B 参数的多语言模型，面向资源受限和设备端环境，小到可以在 EDDI JVM 内运行。',
			strengths: ['可在 CPU 上运行', '128K 上下文', '八种语言'],
			bestFor: ['进程内离线推理', '查询和提示词改写', '简短摘要'],
		},
		'amazon-nova': {
			summary: 'Amazon 在 Bedrock 上的多模态模型，接受文本、图像和视频：Pro 是均衡层级，Lite 是低成本层级。',
			strengths: ['文本、图像和视频输入', '300K 令牌上下文', '工具使用', '提示词缓存'],
			bestFor: ['文档和视觉问答', '视频理解', '始终留在 AWS 内的代理'],
		},
		'cohere-command-a': {
			summary: 'Cohere 的 111B 企业模型，专注于工具使用、检索和 23 种语言；Oracle 还提供推理和视觉版本。',
			strengths: ['多步骤工具使用', '检索增强生成', '23 种语言', '256K 令牌上下文'],
			bestFor: ['企业 RAG', '多语言代理', '在 Oracle Cloud 上部署'],
		},
		'phi-4-mini': {
			summary: 'Microsoft 的 3.8B 开放模型，面向内存受限、对延迟敏感的工作，以及数学和逻辑推理。',
			strengths: ['可在受限环境中运行', '数学和逻辑', '函数调用', 'MIT 许可证'],
			bestFor: ['本地和边缘推理', '对延迟敏感的应用', '轻量级工具调用'],
		},
	},
	hosts: {
		bedrock: { name: 'Amazon Bedrock', summary: '通过 AWS 托管访问 Anthropic、Meta、Amazon、OpenAI、Mistral 等厂商的模型。', why: ['模型提供商看不到客户的提示词和补全内容', '通过 VPC 和 PrivateLink 进行私有网络连接', '区域内和跨区域推理，满足数据驻留要求'] },
		vertex: { name: 'Google Vertex AI', summary: 'Google Cloud 的 AI 平台，现也称为 Gemini Enterprise Agent Platform，提供 Gemini 和 Model Garden 中的模型。', why: ['区域端点将处理限定在一个司法管辖区内', 'VPC Service Controls 实现网络隔离', '通过 Google Cloud 凭据进行身份验证'] },
		azure: { name: 'Azure OpenAI', summary: '托管在您的 Azure 订阅中的 OpenAI 模型，现为 Microsoft Foundry 的一部分，按部署名称调用。', why: ['Data Zone 部署将处理限定在欧盟、美国或亚太地区', 'Azure 骨干网上的专用端点', '预配吞吐量，预留容量'] },
		oracle: { name: 'Oracle OCI Generative AI', summary: 'Oracle Cloud 的托管服务，提供 Cohere、Meta Llama 等模型，可按需使用或运行在专用集群上。', why: ['专用 AI 集群', '专用端点和数据隔离', '受 OCI IAM 策略管控'] },
		groq: { name: 'Groq', summary: '一个在 Groq 自研 LPU 芯片上运行开放模型的推理云，提供 OpenAI 兼容 API。', why: ['极低延迟', 'gpt-oss 和 Qwen 等开放模型', '一个密钥，无需基础设施'] },
		openrouter: { name: 'OpenRouter', summary: '一个 API 访问众多提供商的数百个模型，自动路由器会为每个请求选择模型。', why: ['一个密钥对应多个厂商', '提供商之间自动回退', 'openrouter/auto 为每个任务选择模型'] },
		ollama: { name: 'Ollama', summary: '在您自己的硬件上通过本地 API 运行开放模型，也可以与 EDDI 部署在同一个 Docker 网络中。', why: ['无需云连接', '数据从不离开您的机器', '一条命令即可拉取模型'] },
		huggingface: { name: 'Hugging Face', summary: '按仓库 ID 为开放模型提供托管推理，用一个令牌路由到各合作提供商。', why: ['按仓库 ID 使用开放模型', '一个令牌通用于各提供商', '无需运维基础设施'] },
		jlama: { name: 'Jlama', summary: '一个纯 Java 推理引擎，在 EDDI JVM 内运行小型模型，完全不需要模型服务器。', why: ['无需额外部署任何组件', '量化模型，占用资源少', '权重缓存后可在离线环境中使用'] },
	},
	tips: {
		anthropicNoTemperature: '不要设置 <code>temperature</code>。当前的 Claude 模型会拒绝非默认的温度值，EDDI 的设置工具已经将其省略。',
		openaiResponsesTools: 'OpenAI 的文档说明 Astra 和 6.1 Sol 使用 Responses API 进行工具调用，而 EDDI 的 <code>openai</code> 类型使用 Chat Completions。请在投入生产前测试这些模型上使用工具的代理。',
		geminiSignature: 'Gemini 3 在工具调用期间需要回传其思考签名。EDDI 默认会这样做（<code>gemini</code> 类型的 <code>returnThinking</code> 和 <code>sendThinking</code> 默认开启）；请保持开启。',
		geminiVertexTools: '在使用工具的 Gemini 3 上请使用 <code>type: gemini</code>，而不是 <code>gemini-vertex</code>：Vertex 路径无法携带思考签名。不使用工具时，<code>gemini-vertex</code> 没有问题。',
		xaiUsRegion: '设置 <code>"region": "us"</code> 可使用 xAI 的美国数据驻留端点。该端点仅提供 grok-4.7 和 grok-4.6。',
		thinkingEcho: '此提供商要求在工具循环期间回传模型的推理内容。EDDI 的预设会替您完成：请将 <code>returnThinking</code> 和 <code>sendThinking</code> 保持为默认值。',
		kimiTemperature: 'Moonshot 固定了 kimi-k2.7-code 和 kimi-k2.6 的温度，因此不要在这两个模型上设置 <code>temperature</code>。',
		qwenRegions: '通过 <code>"region": "intl"</code>、<code>"cn"</code> 或 <code>"us"</code> 选择区域。如需使用工作空间专属的阿里巴巴主机，请改为设置 <code>baseUrl</code>。',
		minimaxNoJson: 'EDDI 从不向 MiniMax 发送 JSON 响应格式。需要 JSON 时，请设置 <code>convertToObject</code> 并在提示词中描述结构。',
		groqPreview: 'Groq 将部分模型（包括 qwen3.8-27b）标记为 Preview：仅供评估，可能会在短时间内下线。',
		bedrockGeo: '部分 Bedrock 模型（包括 Llama 4 Maverick）只能通过跨区域推理配置文件访问，例如 <code>us.meta.llama4-maverick-17b-instruct-v1:0</code>。',
		ollamaThink: '推理模型会先思考再回答，在流式聊天中看起来可能像卡住了。设置 <code>"think": "false"</code> 可立即获得回答，并为任务设置充足的 <code>timeout</code>。',
		jlamaCache: 'Jlama 在 EDDI JVM 内运行。请将 <code>modelCachePath</code> 指向已挂载的卷，使权重在重启后仍然保留，并按模型加上 EDDI 堆内存的总量来规划 Pod 资源。',
		localAirGap: '模型下载后即可完全离线运行，因此适合离线（air-gapped）部署。',
		cascadeTier: '<a href="/features/model-cascading/">模型级联</a>中理想的第一层：快速且低成本，仅在置信度较低时才升级到更大的模型。',
		cascadeTop: '<a href="/features/model-cascading/">模型级联</a>中强大的最后一层，只有较便宜模型没有把握的请求才会到达这里。',
		azureDeployment: '在 Azure OpenAI 上，<code>deploymentName</code> 是您在 Azure 资源中为部署起的名称，而不是模型名称。',
	},
};

export default copy;
