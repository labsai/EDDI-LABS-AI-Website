import type { PipelineCopy } from './en';

const copy: PipelineCopy = {
	ui: {
		svgLabel: '对话回合的流水线：Input、Parser、Behavior Rules、Tasks、Output 依次执行，Tasks 上方是受控的 Tool boundary，下方是 Conversation memory。每个阶段都是一个按钮，详情显示在下方。',
		hint: '选择一个阶段，查看它做什么、如何配置以及写入什么。',
		what: '这一阶段发生什么',
		config: '配置',
		memory: 'Conversation memory',
		audit: '审计条目示例',
		auditNote: '流水线中的每个 task 写入一条条目：HMAC 签名、仅追加、带序列检查。',
		example: '仅为说明用的示例值',
	},
	stages: {
		input: '消息从聊天、Slack、API 或 MCP 客户端到达。原始文本成为 Conversation memory 中新一步的第一个条目。此时还没有 task 运行，所以这一阶段展示的是内存步骤，而不是审计条目。',
		parser: 'parser 对文本做规范化，并在智能体的词典中查找，把词和短语转换为 trigger(current_weather) 这样的语义表达式。这是查表而不是调用模型，所以相同的文本总是得到相同的表达式。',
		rules: 'Behavior Rules 是针对表达式和 Conversation memory 的 IF-THEN 条件。每条匹配的规则都会发出动作。路由由配置而非代码决定，因此相同的输入每次都走相同的路径。',
		tasks: 'task 监听动作：LLM 调用、HTTP 调用、MCP 工具或知识库检索。每个 task 写入一条带签名的审计条目，记录它读取了什么、产出了什么，以及模型和工具的细节。',
		tools: '无论来源如何，每次工具调用都要经过同一道边界。匹配 toolApprovals 模式的调用会暂停，等待人工决定，决定会作为 hitl.approval 条目写入 ledger。凭据以 ${vault:keyName} 引用的形式从 vault 获取。',
		output: 'Output 模板把发出的动作转换为回复：文本和快捷回复。回复保存到内存，并返回给消息来源的渠道。',
		memory: 'Conversation memory 保存每一步（input、expressions、actions、output），以及作用域为步骤、对话或用户（longTerm）的属性。对话状态（READY、IN_PROGRESS、ENDED、AWAITING_HUMAN 或 ERROR）也一并保存。',
	},
};

export default copy;
