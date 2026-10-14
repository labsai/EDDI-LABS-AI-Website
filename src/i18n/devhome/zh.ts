import type { DevHomeCopy } from './en';

const copy: DevHomeCopy = {
	quickstart: {
		label: '在本地运行 EDDI',
		tabBash: 'macOS / Linux',
		tabPowershell: 'Windows PowerShell',
		copy: '复制',
		copied: '已复制',
		other: '其他安装方式 →',
	},
	sbs: {
		title: '配置与界面，并排对照',
		subtitle: '智能体的行为是一组可以阅读、比对和做版本管理的 JSON 文档。Manager 编辑的是同样的文档。',
		tabsLabel: '配置示例',
		tabs: { rule: 'Behavior rule', llm: 'LLM task', approval: '人工审批' },
		captions: {
			rule: 'Behavior Rule 就是普通的 JSON：当解析后的输入匹配 trigger(current_weather) 时，发出动作 ask_for_city。task 和 output 监听这个动作。Manager 展示智能体以及运行其规则的 workflow。',
			llm: 'LLM task 同样是 JSON：提供商类型、用 vault 引用代替明文 API 密钥、模型和系统消息。Manager 编辑的是同一份文档。',
			approval: '要等待人工，规则会发出 PAUSE_CONVERSATION。对话保持在 AWAITING_HUMAN 状态，直到所有者、eddi-admin 或 eddi-approver 在 Manager 或 Slack 中做出决定。工具调用和群组阶段也可以用同样的方式管控。',
		},
		shotLabel: 'Manager 截图',
		shotAlts: {
			rule: 'EDDI Manager：智能体详情页，显示环境和 workflow',
			llm: 'EDDI Manager：LLM task 编辑器，显示提供商、触发动作和系统提示词',
		},
		example: '示意性示例',
		card: {
			title: '需要审批',
			pausedBy: '对话被以下规则暂停',
			state: 'AWAITING_HUMAN',
			approve: '批准',
			reject: '拒绝',
			foot: '每个决定都会作为 hitl.approval 条目写入审计 ledger。',
		},
	},
};

export default copy;
