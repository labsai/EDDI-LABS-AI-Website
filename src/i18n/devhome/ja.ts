import type { DevHomeCopy } from './en';

const copy: DevHomeCopy = {
	quickstart: {
		label: 'EDDI をローカルで実行',
		tabBash: 'macOS / Linux',
		tabPowershell: 'Windows PowerShell',
		copy: 'コピー',
		copied: 'コピーしました',
		other: 'その他のインストール方法 →',
	},
	sbs: {
		title: '設定と UI を並べて見る',
		subtitle: 'エージェントの動作は、読んで、差分を取って、バージョン管理できる JSON ドキュメントで表されます。Manager も同じドキュメントを編集します。',
		tabsLabel: '設定の例',
		tabs: { rule: 'Behavior rule', llm: 'LLM task', approval: '人による承認' },
		captions: {
			rule: 'Behavior Rule は素の JSON です。解析された入力が trigger(current_weather) に一致すると、アクション ask_for_city を発行します。task と output はそのアクションを待ち受けます。Manager には、エージェントとそのルールを実行する workflow が表示されます。',
			llm: 'LLM task も JSON です。プロバイダーの種類、生の API キーの代わりの vault 参照、モデル、システムメッセージを指定します。Manager は同じドキュメントを編集します。',
			approval: '人の判断を待つには、ルールが PAUSE_CONVERSATION を発行します。会話は、オーナー、eddi-admin、または eddi-approver が Manager か Slack で判断するまで AWAITING_HUMAN 状態で待機します。ツール呼び出しやグループのフェーズも同じ方法で制御できます。',
		},
		shotLabel: 'Manager のスクリーンショット',
		shotAlts: {
			rule: 'EDDI Manager：環境と workflow を含むエージェントの詳細ページ',
			llm: 'EDDI Manager：プロバイダー、トリガーアクション、システムプロンプトを含む LLM task エディタ',
		},
		example: '説明用の例',
		card: {
			title: '承認が必要です',
			pausedBy: '会話を一時停止したルール',
			state: 'AWAITING_HUMAN',
			approve: '承認',
			reject: '却下',
			foot: 'すべての判断は hitl.approval エントリとして監査ledgerに記録されます。',
		},
	},
};

export default copy;
