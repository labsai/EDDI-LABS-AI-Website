import type { PipelineCopy } from './en';

const copy: PipelineCopy = {
	ui: {
		svgLabel: '会話ターンのパイプライン：Input、Parser、Behavior Rules、Tasks、Output が順に並び、Tasks の上に管理された Tool boundary、下に Conversation memory があります。各ステージはボタンで、詳細が下に表示されます。',
		hint: 'ステージを選ぶと、その処理内容、設定、書き込む内容が表示されます。',
		what: 'ここで起きること',
		config: '設定',
		memory: 'Conversation memory',
		audit: '監査エントリの例',
		auditNote: 'パイプラインの各 task は 1 件のエントリを書き込みます。HMAC 署名付き、追記専用、シーケンス検査付きです。',
		example: '説明用のサンプル値',
	},
	stages: {
		input: 'チャット、Slack、API、MCP クライアントからメッセージが届きます。元のテキストは Conversation memory の新しいステップの最初のエントリになります。まだ task は実行されていないため、このステージでは監査エントリではなくメモリのステップを示します。',
		parser: 'parser はテキストを正規化し、エージェントの辞書で照合して、単語やフレーズを trigger(current_weather) のような意味表現に変換します。モデル呼び出しではなく辞書の照合なので、同じテキストからは常に同じ表現が得られます。',
		rules: 'Behavior Rules は、表現と Conversation memory に対する IF-THEN の条件です。一致したルールがアクションを発行します。ルーティングはコードではなく設定なので、同じ入力は毎回同じ経路をたどります。',
		tasks: 'task はアクションを待ち受けます。LLM 呼び出し、HTTP 呼び出し、MCP ツール、ナレッジベース検索などです。各 task は、読み取った内容、生成した内容、モデルとツールの詳細を含む署名付き監査エントリを 1 件書き込みます。',
		tools: 'ツール呼び出しは、どこから来ても同じ境界を通ります。toolApprovals のパターンに一致する呼び出しは人間が判断するまで一時停止し、その判断は hitl.approval エントリとして ledger に記録されます。認証情報は ${vault:keyName} 参照として vault から取得されます。',
		output: 'Output テンプレートは、発行されたアクションを返信（テキストとクイックリプライ）に変換します。返信はメモリに保存され、メッセージの送信元チャネルに返されます。',
		memory: 'Conversation memory は、すべてのステップ（input、expressions、actions、output）と、ステップ、会話、ユーザー（longTerm）のスコープを持つプロパティを保持します。会話の状態（READY、IN_PROGRESS、ENDED、AWAITING_HUMAN、ERROR）も一緒に保存されます。',
	},
};

export default copy;
