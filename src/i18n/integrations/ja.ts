/**
 * Integration catalog copy, Japanese. Keys match ./en.ts; facts must stay in sync with it.
 */
import { MCP_TOOLS, VECTOR_STORES } from '../stats';
import type { IntegrationsCopy } from './en';

const copy: IntegrationsCopy = {
	ui: {
		title: 'インテグレーション',
		metaTitle: 'EDDIインテグレーション: Slack、MCP、OpenAPI、SAP、ベクターストア、Kubernetes',
		description:
			'EDDIが Slack、Open WebUI、Keycloak、MCP と A2A、OpenAPI 経由の任意の REST API、API 経由の SAP、6種類のベクターストア、Kubernetes、OpenShift、Ollama にどのように接続するかを紹介します。各ページには実際の設定例を掲載しています。',
		heroTitle: 'EDDI',
		heroHighlight: 'インテグレーション',
		heroDesc:
			'チャネル、ID管理、エージェントプロトコル、エンタープライズシステム、ベクターストア、インフラストラクチャを扱います。各ページでは、得られるもの、EDDIでの仕組み、実際の設定、そしてインテグレーションのガバナンス(承認、監査台帳、シークレットボルト)を説明します。',
		filterLabel: 'カテゴリでインテグレーションを絞り込む',
		filterAll: 'すべて',
		searchLabel: 'インテグレーションを検索',
		searchPlaceholder: '検索例: Slack、SAP、pgvector',
		noResults: '一致するインテグレーションがありません。別のキーワードを試すか、絞り込みを解除してください。',
		notCoveredNote:
			'EDDIには Microsoft Teams、Telegram、WhatsApp、Discord のチャネルは含まれず、EDDI自体がメールを送信することもなく、汎用の受信Webhookもありません。それでもAPIを持つものであれば、<a href="/integrations/openapi/">OpenAPIインポート</a>、HTTP呼び出し、または<a href="/integrations/mcp-client/">MCP</a>で接続できます。',
		backToCatalog: 'すべてのインテグレーション',
		whatYouGet: '得られるもの',
		howItWorks: 'EDDIでの仕組み',
		configTitle: '設定',
		configDesc: 'EDDIのドキュメントに基づいています。your-agent-id のようなプレースホルダーは、ご自身の値に置き換えてください。',
		governanceTitle: 'ガバナンス',
		goodToKnowTitle: '知っておくべきこと',
		linksTitle: 'ドキュメントとガイド',
		docsLink: 'ドキュメント',
		guidesLabel: 'ガイド',
		relatedTitle: '関連するインテグレーション',
		getStarted: '始める',
		modelsLinkText: 'モデルカタログを見る',
		solutionsTitle: '構築と運用を任せたいですか?',
		solutionsDesc: 'EDDI Solutionsは、コネクタの構築と保守、マネージドまたは共同運用でのEDDIの運用、お客様のクラウドやオンプレミスでの支援を提供します。',
		solutionsBtn: 'EDDI Solutionsに相談する',
		sourcesDesc: 'このページの設定と動作は、{date}に確認したEDDIのドキュメントに基づいています。フィールド名やデフォルト値はリリースによって変わることがあるため、お使いのバージョンのドキュメントで確認してください。',
		copy: 'コピー',
		copied: 'コピーしました',
		pageTitle: 'EDDIでの{name}',
		pageDescription: '{name}: {summary}',
		ctaTitle: 'お使いのシステムが見つかりませんか?',
		ctaDesc: 'どのようなシステムかお知らせいただくか、<a href="/integrations/openapi/">OpenAPI</a>の方法から始めてください。APIがあれば、エージェントは承認と監査証跡のもとでそれを呼び出せます。',
	},
	categories: {
		channels: 'チャネル',
		identity: 'IDとセキュリティ',
		protocols: 'エージェントプロトコル',
		enterprise: 'エンタープライズシステム',
		data: 'データとRAG',
		infrastructure: 'インフラストラクチャ',
	},
	integrations: {
		slack: {
			summary: 'Slack上のガバナンスされたAIエージェント。メンション、ダイレクトメッセージ、スレッド、スレッドにストリーミングされるグループディスカッション、ApproveとRejectのボタンを備えた Block Kit の承認カードに対応します。',
			gets: [
				'@メンションとダイレクトメッセージに応答し、フォローアップをスレッド内に保つエージェント',
				'メッセージを特定のエージェントやマルチエージェントのグループディスカッションに振り分けるトリガーキーワード',
				'進行中のグループディスカッションをスレッドへストリーミング',
				'一時停止されたターン、ツール呼び出し、グループのフェーズに対する Slack 上の承認カード(承認者の許可リスト付き)',
				'1つのEDDIに対して複数のSlackワークスペースを接続',
			],
			steps: [
				'Slackアプリを作成し、ドキュメントに記載のボットトークンスコープ(<code>chat:write</code>、<code>app_mentions:read</code>、<code>history</code> 系と <code>im:*</code> 系のスコープ)を追加します。',
				'ボットトークンと署名シークレットをEDDIのシークレットボルトに保存し、<code>${vault:...}</code> として参照します。',
				'Slackチャネルをデフォルトのエージェントに対応付け、必要に応じて <code>panel:</code> などのトリガーキーワードの背後にあるグループにも対応付けるチャネルインテグレーションを作成します。',
				'Request URL を <code>https://&lt;your-eddi-host&gt;/integrations/slack/events</code> に設定し、<code>app_mention</code>、<code>message.im</code>、<code>message.channels</code> をサブスクライブします。Slack は URL をすぐに検証するため、この手順は最後に行ってください。',
				'承認を使う場合は、Interactivity の Request URL を <code>/integrations/slack/interactive</code> に設定し、承認者を <code>hitlApproverUserIds</code> に列挙します。',
			],
			captions: [
				'認証情報はエージェントやチャネルの設定ではなく、ボルトに保存します。',
				'デフォルトのエージェント、トリガーキーワードの背後にあるグループ、platformConfig 内の承認設定を持つチャネルインテグレーションです。',
			],
			governance: [
				'承認カードには Approve ボタンと Reject ボタンが付きます。判断できるのは <code>hitlApproverUserIds</code> に列挙された Slack ユーザーだけです。このリストがない場合、ボタンは表示されず、対話的な判断は拒否されます(フェイルクローズ)。',
				'ツール呼び出しのカードには、ツール名と、マスキングおよび切り詰めを施した引数が表示されるため、承認者は何を承認するのかを確認できます。バージョン1では、ボタンはバッチ全体を承認または拒否します。',
				'各判断は <code>slack:&lt;userId&gt;</code> に帰属し、監査台帳に記録されます。',
				'受信イベントは署名シークレット(HMAC-SHA256)とリプレイ防止で検証され、シークレット自体はボルト内にとどまります。',
			],
			goodToKnow: [
				'Slackは、EDDIがチャネルを提供している唯一のサードパーティ製チャットプラットフォームです。含まれないものについては、カタログページの注記を参照してください。',
				'オプションのオブザーブモードでは、トリガー、クールダウン、1日あたりの応答数とコストの上限のもとで、対象がチャネルの通常のやり取りを参照できます。これらの上限はEDDIノードごとに適用されます。',
			],
		},
		'open-webui': {
			summary: 'EDDIは、デプロイ済みのエージェントをモデルとして提示する OpenAI 互換の /v1 API を提供します。これにより Open WebUI、OpenAI SDK、LangChain、LiteLLM からエージェントと対話できます。',
			gets: [
				'Open WebUIのモデルのドロップダウンに表示されるデプロイ済みEDDIエージェント',
				'ストリーミングとトークン使用量の報告に対応した Chat Completions',
				'チャット1件につきEDDIの会話を1つ割り当てるため、メモリと behavior rules がターンをまたいで保持される',
				'タイトル生成のような単発の呼び出し向けのステートレス版(<code>:stateless</code> のモデルID)',
			],
			steps: [
				'<code>EDDI_OPENAI_COMPAT_ENABLED=true</code> でアダプターを有効にし、APIキーを設定します。デフォルトでは無効です。',
				'EDDIでエージェントをデプロイします。エージェントは <code>GET /v1/models</code> に表示されます。',
				'Open WebUI(またはSDK)を、同じAPIキーを使って <code>http://&lt;eddi&gt;:7070/v1</code> に向けます。',
				'Open WebUIで <code>ENABLE_FORWARD_USER_INFO_HEADERS</code> を有効にします。無効のままだと、すべてのチャットウィンドウが1つのEDDI会話を共有します。',
				'モデル一覧からエージェントを選んでチャットします。',
			],
			captions: [
				'EDDIドキュメントにある、本番を想定したcomposeの抜粋です。サンプルのAPIキーは変更してください。',
				'シェルからエンドポイントを確認します。EDDI_API_KEY には compose ファイルと同じ値を設定してください。',
			],
			governance: [
				'このAPIには独自のAPIキー認証があり、有効にするまでオフです。ポートに到達できる誰にでも会話の作成を許してしまう組み合わせでは、EDDIは起動を拒否します。',
				'エージェントは独自の承認ゲートと監査証跡を保ちます。/v1 経由のリクエストも通常のEDDI会話です。',
				'共有APIキーとユーザーヘッダーの組み合わせは、信頼するプロキシとしての Open WebUI にIDを委任します。キーは他の共有シークレットと同様に扱い、ローテーションしてください。',
			],
			goodToKnow: [
				'モデルとして表示されるのは個々のエージェントのみで、マルチエージェントのグループは表示されません。',
				'クイックリプライとボタンは、インタラクティブなコントロールではなく Markdown テキストとして表示されます。',
				'ツール呼び出しはクライアントには返されません。EDDIはツールを自身のパイプライン内で実行し、ツールの動作は監査台帳で確認できます。',
			],
		},
		'web-chat': {
			summary: 'EDDI自身が提供する、テーマ変更可能なReactチャットUI。ストリーミング応答、Markdown、クイックリプライ、元に戻す操作に対応し、直接開くことも、ページに埋め込むこともできます。',
			gets: [
				'デプロイ済みのすべてのエージェント向けのチャットページ(/chat/{environment}/{agentId})',
				'トークン単位のストリーミング、リッチな Markdown、コードのハイライト、LaTeX 数式',
				'ダークテーマとライトテーマ、クイックリプライボタン、元に戻す・やり直し',
				'コントロールを非表示にしたりタイトルを設定したりして、埋め込み用ウィジェットに集中させるURLパラメーター',
				'バックエンド不要のデモモード',
			],
			steps: [
				'EDDIを起動します。チャットUIはEDDIイメージに同梱されており、インストーラーにも含まれています。',
				'EDDIホストで <code>/chat/&lt;environment&gt;/&lt;agentId&gt;</code> を開きます。',
				'<code>theme</code>、<code>title</code>、<code>hideUndo</code>、<code>hideNewConversation</code> などのURLパラメーターで調整します。',
				'埋め込むには、<code>eddi.chat.frame-ancestors</code>（デフォルトは <code>\'none\'</code>）で自社サイトのオリジンを許可し、同じ URL をページ内の iframe に置きます。',
			],
			captions: [
				'チャットUIが提供するURLパターンです。',
				'チャットUIのREADMEにある埋め込みウィジェットの例です。表示用のパラメーターは必要に応じて組み合わせてください。',
				'デフォルトでは、チャットはフレーム内での表示を拒否します。このプロパティ、または環境変数 EDDI_CHAT_FRAME_ANCESTORS に、埋め込み元サイトのオリジンを設定します（複数ある場合はスペースで区切ります）。',
			],
			governance: [
				'チャットは他のすべてのクライアントと同じ会話APIを使用するため、behavior rules、承認ゲート、監査台帳はそのまま適用されます。',
				'認証が有効な場合、ウィジェットにはサインイン中のユーザーのアクセストークンが必要で、バックエンドはすべての呼び出しでそれを検証します。',
				'エージェントが生成するテキストは、すべて信頼できない出力として扱ってください。チャットUIはエージェントからの Markdown を表示します。',
			],
			goodToKnow: [
				'別のサイトにチャットを埋め込むには、<code>eddi.chat.frame-ancestors</code> をそのサイトのオリジンに設定する必要があります。設定するまで、ブラウザーはフレーム内での表示を拒否します。EDDI が配信するそれ以外のものは、フレームへの埋め込みを拒否します。',
			],
		},
		'keycloak-oidc': {
			summary: 'Keycloak などの OIDC プロバイダーを使って、EDDIの前段に OpenID Connect 認証を置きます。管理者、編集者、ユーザー、閲覧者、承認者のロールを備えています。',
			gets: [
				'ID プロバイダー経由での Manager と API へのログイン',
				'ロール: <code>eddi-admin</code>、<code>eddi-editor</code>、<code>eddi-user</code>、<code>eddi-viewer</code>、および承認の判断を行う <code>eddi-approver</code>',
				'インストーラーが Keycloak にインポートする、構成済みの <code>eddi</code> レルム',
				'サインイン中のユーザーとして実行される呼び出しにより、監査証跡に実在の人物が記録される',
			],
			steps: [
				'インストーラーを <code>--with-auth</code> 付きで実行します。Keycloak が起動し、初回起動時に <code>eddi</code> レルムがインポートされます。',
				'Keycloak の管理コンソールで <code>eddi</code> ユーザーのパスワードを設定します。同梱のレルムにはパスワードが設定されていません。',
				'Manager にサインインします。必要なロールをメンバーに付与し、承認者を <code>eddi-approver</code> に追加します。',
				'既存の ID プロバイダーを使う場合は、<code>QUARKUS_OIDC_*</code> 変数(テナントの有効化、認証サーバーのURL、クライアントID、クライアントシークレット)を設定します。',
				'HTTP 呼び出しでは、共有の認証情報の代わりに <code>${caller:token}</code> を使い、サインイン中のユーザー自身のトークンで API を呼び出します。',
			],
			captions: [
				'Keycloak を追加するインストーラーのオプションです。',
				'外部 OIDC プロバイダー用の環境変数です(EDDIドキュメントより)。',
			],
			governance: [
				'本番の起動モードでは、明示的にオプトアウトしない限り、OIDC が無効のままではEDDIは起動を拒否します。そのため、管理 API が公開された状態になるのは、偶然ではなく意図した判断の結果です。',
				'承認のエンドポイントには、<code>eddi-approver</code> ロール、またはオーナーか <code>eddi-admin</code> が必要です。',
				'<code>${caller:token}</code> を使うと、監査証跡には実際のユーザーが記録されます。共有の固定認証情報を使うと、すべての操作が1つのプリンシパルにまとまってしまいます。',
			],
			goodToKnow: [
				'認証はオプションで、デフォルトではオフです。インストーラーがプロビジョニングするのは Keycloak です。他の OIDC プロバイダーも同じ設定を使用しますが、一部の詳細(たとえば A2A で公開されるトークンエンドポイント)は、設定しない限り Keycloak のパスを前提とします。',
				'同梱のレルムのインポートは1回限りです。その後に JSON を編集しても、稼働中の Keycloak には反映されません。',
			],
		},
		'secrets-vault': {
			summary: '組み込みのエンベロープ暗号化シークレットボルト。設定ではシークレットを ${vault:keyName} として参照し、値がエージェントの設定、エクスポート、ログに残ることはありません。',
			gets: [
				'LLM、HTTP 呼び出し、MCP、RAG の設定で使える <code>${vault:keyName}</code> 参照',
				'テナントごとのデータキーを用いた AES-256-GCM エンベロープ暗号化',
				'エージェントごとのグラント: どのエージェントがどのシークレットを使えるか',
				'設定のエクスポートからはシークレットが除去され、ログではマスキングされる',
			],
			steps: [
				'ボルトのマスターキー(<code>EDDI_VAULT_MASTER_KEY</code>)を設定します。インストーラーが自動的に生成します。キーがない場合、ボルトは無効になります。',
				'<code>PUT /secretstore/secrets/{tenantId}/{keyName}</code> または Manager からシークレットを保存します。',
				'設定内で <code>${vault:keyName}</code> として参照します。',
				'EDDIは実行時に参照を解決します。平文は会話メモリには保存されません。',
				'<code>allowedAgents</code> を、そのシークレットが必要なエージェントだけに絞り込みます。このチェックはエージェントのデプロイ時に実行されます。',
			],
			captions: [
				'シークレットを保存します。レスポンスに値が返ることはありません。',
				'LLM タスクから名前でシークレットを参照します。',
				'値に触れずに、シークレットを使用できる対象を変更します。',
			],
			governance: [
				'グラントはデフォルトでデプロイ時に強制されます。許可されていないシークレットを参照するエージェントはデプロイされません。',
				'ユーザー入力やモデルの返信など、会話データ経由で届いたボルト参照は、解決されずに拒否されます。',
				'平文は、リクエストの記録、承認プレビュー、リクエストのログ行でマスキングされます。',
				'認証が有効な場合、ボルトのエンドポイントは <code>eddi-admin</code> ロールで保護されます。',
			],
			goodToKnow: [
				'EDDIには、HashiCorp Vault、AWS、Azure のネイティブクライアントはありません。Kubernetes では、External Secrets Operator により、<code>eddi-secrets</code> Kubernetes Secret(ボルトのマスターキーを保持)を HashiCorp Vault、AWS Secrets Manager、Azure Key Vault から同期できます。個々のシークレット自体は引き続きEDDIのボルトに保存されます。',
				'マスターキーを紛失すると、暗号化されたシークレットは復元できません。バックアップを取ってください。',
			],
		},
		'mcp-server': {
			summary: `Claude Desktop、Cursor、VS Code などの MCP クライアントからEDDIを操作できます。EDDIは会話と管理のための ${MCP_TOOLS} 個の MCP ツールを Streamable HTTP で公開します。`,
			gets: [
				`${MCP_TOOLS} 個のツール: エージェントの一覧表示と対話、作成とデプロイ、グループやスケジュールの管理など`,
				'Streamable HTTP を使用する単一のエンドポイント <code>/mcp</code>',
				'HTTP を直接扱えるクライアントに対応し、ブリッジ経由で stdio のみのクライアントにも対応',
				'認証が有効な場合のロールベースのアクセス',
			],
			steps: [
				'EDDIを起動します。MCP エンドポイントは <code>http://localhost:7070/mcp</code> です。',
				'EDDIを MCP クライアントに追加します。HTTP に対応したクライアントは URL を直接使用します。',
				'Claude Desktop のような stdio のみのクライアントでは、例のとおり <code>mcp-remote</code> ブリッジを使用します。',
				'アシスタントに、エージェントの一覧表示、会話の開始、エージェントの作成を依頼します。ドキュメントに記載のフローは <code>list_agents</code>、<code>create_conversation</code>、<code>talk_to_agent</code> です。',
				'OIDC が有効な場合は、クライアントにベアラートークンを渡します。',
			],
			captions: [
				'ネイティブ HTTP トランスポートを持つクライアント向けです。',
				'stdio のみのクライアント向けです。Windows で npx が PATH にない場合は、コマンドを cmd /c でラップしてください。',
			],
			governance: [
				'<code>setup_agent</code> や <code>create_api_agent</code> などの書き込みツールには、<code>eddi-editor</code> ロールが必要です。',
				'MCP の <code>create_api_agent</code> ツールは、意図的に承認ゲートを設定できないようになっています。ゲート付きのエージェントのプロビジョニングは、<code>eddi-admin</code> を用いた REST 経由で行います。',
				'承認待ちのグループのフェーズは、Manager、REST、Slack に加えて MCP からも承認でき、すべての判断が監査されます。',
			],
			goodToKnow: [
				'本番での起動は、オプトアウトしない限り OIDC がオフの状態では実行を拒否します。オプトアウトしたインスタンスでは、ポートに到達できる誰にでも <code>/mcp</code> が開放された状態になります。',
			],
		},
		'mcp-client': {
			summary: 'EDDIのエージェントに外部 MCP サーバーのツールを使わせます。サーバーのツールはエージェントのツールとなり、他のすべてのツールと同じ承認ゲートと監査証跡の下に置かれます。',
			gets: [
				'Streamable HTTP に対応した任意の MCP サーバーのツール',
				'ツール一覧を絞り込むための、名前による許可リストと拒否リスト',
				'リソースの一覧取得と読み取り(オプション)',
				'失敗しているサーバーへの呼び出しを止めるサーキットブレーカー',
			],
			steps: [
				'サーバーの URL、トランスポート <code>http</code>、<code>${vault:...}</code> 参照としての API キーを指定して、<code>mcpcalls</code> の設定を作成します。',
				'ワークフローのステップ(<code>eddi://ai.labs.mcpcalls</code>)として参照します。',
				'エージェントの LLM タスクが、サーバーのツールを自動的に取得します(<code>enableMcpCallTools</code> のデフォルトは true です)。',
				'影響の大きい呼び出しが人の判断を待つように、ツールを <code>toolApprovals</code> に追加します。',
				'stdio のみのサーバーは、専用のコンテナで HTTP ブリッジの背後に置いて実行し、EDDIをそのブリッジに向けます。',
			],
			captions: [
				'mcpcalls の設定です。トークンはボルト参照です。',
				'読み取り専用のものを除く、すべての MCP ツールをゲートの対象にします。',
			],
			governance: [
				'MCP ツールの呼び出しは、他のすべてのツールソースと同じヒューマンインザループの承認ゲートの対象です。',
				'ツールの説明は、指示の形をしたテキストをマスキングし、長さを制限します。ツールの結果は出所情報で包まれ、デフォルトでは指示の形をした内容がマスキングされます。',
				'ツールのホワイトリストはコンテキスト管理であり、セキュリティ境界ではありません。境界となるのは、接続に与える認証情報と承認ゲートです。',
				'ゲートを通したすべての判断は、監査台帳に書き込まれます。',
			],
			goodToKnow: [
				'EDDIが実装している MCP トランスポートは Streamable HTTP の1つだけです。設定で編集できるコマンドはEDDIのプロセスユーザーとしての任意のコード実行につながるため、EDDI自身が stdio サーバーを起動することはありません。ブリッジのサイドカーを使用してください。',
				'サーキットブレーカーは60秒間に3回失敗すると開くため、ツールが見つからない場合は、たいていサーバーが失敗しています。',
			],
		},
		a2a: {
			summary: 'Agent Card と JSON-RPC を通じてEDDIのエージェントを他のエージェントに公開し、リモートの A2A エージェントを自分のエージェント内でツールとして使用します。',
			gets: [
				'オプトインした各エージェントのスキルを一覧にした Agent Card',
				'<code>tasks/send</code>、<code>tasks/get</code>、<code>tasks/cancel</code> を備えた JSON-RPC 2.0 エンドポイント',
				'組み込み、MCP、HTTP のツールと並んで、ツール呼び出しのループに統合されるリモートの A2A エージェント',
				'リモートエージェントの一部だけを公開するスキルフィルター',
			],
			steps: [
				'<code>a2aEnabled: true</code>、説明、公開するスキルを指定して、エージェントをオプトインします。',
				'ピアは <code>/a2a/agents/{agentId}/agent.json</code> からカードを取得し、<code>POST /a2a/agents/{agentId}</code> を呼び出します。',
				'リモートエージェントを利用するには、LLM タスクの <code>a2aAgents</code> に、その URL とボルト参照の API キーを指定して列挙します。',
				'EDDIはリモートのカードを読み取り、各スキルを <code>{agentName}_{skillId}</code> という名前のツールに変換して、<code>tasks/send</code> で呼び出します。',
			],
			captions: [
				'エージェントを公開します。A2A はエージェントごとのオプトインです。',
				'リモートエージェントを利用します。API キーはボルト参照でなければなりません。',
			],
			governance: [
				'Agent Card は設計上匿名で、ピアは認証情報を持つ前にエージェントを発見できます。認証が有効な場合、エージェントの一覧表示と JSON-RPC エンドポイントの両方にトークンが必要です。',
				'リモートエージェントのツールは、他のツールソースと同じ承認ゲートとツール結果のガードレールを通過し、API キーはボルトにとどまります。',
				'<code>tasks/send</code> はお客様の LLM 予算で会話を実行するため、匿名では利用できません。',
			],
			goodToKnow: [
				'認証が有効な場合、カードはトークンエンドポイントを公開します。<code>eddi.a2a.public-token-endpoint</code> を設定しない限り、EDDIは Keycloak 形式のパスを導出します。他の ID プロバイダーでは、この設定を行ってください。',
			],
		},
		openapi: {
			summary: 'OpenAPI 3.0 または 3.1 の記述を持つ任意の REST API を、コードを書かずにツール付きのエージェントに変換し、影響の大きい呼び出しを人による承認の背後に置きます。',
			gets: [
				'仕様から生成される API 呼び出しエージェント: タグごとにまとめられた HTTP 呼び出しの設定、パイプライン、デプロイ',
				'エンドポイントのフィルタリング、ベース URL の上書き、認証ヘッダーの引き継ぎ',
				'生成されたツールと並べて MCP サーバーのツールを追加するオプション',
				'設定であるため、レビュー、差分確認、バージョン管理ができるツール',
			],
			steps: [
				'<code>create_api_agent</code> MCP ツール、または <code>POST /administration/agents/setup-api</code> で、EDDIに OpenAPI 仕様を渡します。',
				'エージェントに持たせるオペレーションを許可リストに登録します。宣言されていないエンドポイントは呼び出せません。',
				'EDDIが HTTP 呼び出しの設定を生成し、完全なパイプラインを構築して、エージェントをデプロイします。',
				'認証情報は <code>${vault:...}</code> 参照として保管します。',
				'書き込みは <code>http.post:*</code>, <code>http.put:*</code>, <code>http.patch:*</code>, <code>http.delete:*</code> でゲートし、読み取りは <code>http.get:*</code> で除外します。',
			],
			captions: [
				'生成されるツールの元になる httpCalls モデルです。フィールドを示すため、ここでは手書きで記載しています。',
				'状態を変更するすべての呼び出しを承認の対象にし、読み取りは通します。',
			],
			governance: [
				'承認パターンはツールの呼び出し先(<code>http.post:*</code>)を指定できるため、operationId が変わっても正しく機能し続けます。',
				'外部への呼び出しは、プラットフォームによって SSRF とパストラバーサルから保護されます。',
				'REST では、<code>setup-api</code> が <code>hitlConfig</code> を受け付けるため、最初のバージョンから書き込みツールがゲートされた状態でエージェントをプロビジョニングできます。MCP ツールでは設定できません。',
				'判断は監査台帳に記録されます。',
			],
			goodToKnow: [
				'生成された書き込みツールは、リクエストボディ全体を1つの <code>requestBody</code> パラメーターとして受け取ります。',
			],
		},
		sap: {
			summary: 'EDDIにはネイティブの SAP コネクタはありません。SAP へは、OpenAPI インポートまたは HTTP 呼び出しによる OData と REST の API、あるいは MCP サーバーを通じて、承認と監査台帳のもとで接続します。',
			gets: [
				'公開されている API を通じて SAP から読み取り、承認を得て書き込むエージェント',
				'他のツールと同じガバナンス: 承認、監査台帳、ボルトで保管される認証情報',
				'エージェントにコードは不要です。接続はレビューできる設定です',
			],
			steps: [
				'接続方法を選びます。SAP のサービスが OpenAPI の記述を公開している場合は OpenAPI インポートを使用します。個々の OData や REST のリクエストを宣言するには HTTP 呼び出しを使用します。すでに SAP の前段で MCP サーバーを運用している場合は MCP を使用します。',
				'SAP の認証情報またはトークンをシークレットボルトに保存し、<code>${vault:...}</code> として参照します。',
				'まず、ビジネスオブジェクトの一覧取得や読み取りなど、エージェントに必要な読み取りオペレーションだけを宣言します。',
				'すべての書き込みを <code>http.post:*</code>, <code>http.put:*</code>, <code>http.patch:*</code>, <code>http.delete:*</code> でゲートし、読み取りは <code>http.get:*</code> で除外します。承認者は Manager または Slack で判断します。',
				'エージェントに許可する範囲を広げる前に、各呼び出しについて監査台帳を確認します。',
			],
			captions: [
				'SAP の OData サービスからの読み取り例です。ホスト、サービスパス、認証方式は、お使いの SAP システムによって異なります。',
				'書き込みは人の判断を待ち、読み取りは通過します。',
			],
			governance: [
				'書き込みは承認のために保留され、その判断は HMAC 署名付きの追記専用の監査台帳に記録されます。',
				'認証情報はボルトにとどまり、エージェントの設定やエクスポートに現れることはありません。',
				'エンドポイントの許可リストにより、宣言されていない SAP のオペレーションは、ユーザーが何を入力しても呼び出せません。',
			],
			goodToKnow: [
				'これは統合のパターンであり、認定された SAP コネクタではありません。SAP への認証方法や公開されている API は、お客様のシステム構成によって異なります。',
				'EDDI Solutionsは、カスタム MCP ツールを含めて接続を構築・保守し、お客様のクラウドやオンプレミスで運用することができます。',
			],
		},
		chroma: {
			summary: 'EDDIのナレッジベース用ベクターストアとしての Chroma。再利用できる既存のインフラがない場合に、最も手間の少ない選択肢です。',
			gets: [
				'ご自身のドキュメントに基づく検索拡張型の回答',
				`${VECTOR_STORES} 種類のベクターストアの1つで、コードではなく設定で選択`,
				'取り込みソース: スケジュールと実行履歴を備えた、Webサイトのクロールとアップロードされたファイル',
			],
			steps: [
				'Chroma サーバーを起動し、その URL とコレクション名を控えます。',
				'<code>storeType: "chroma"</code>、ストアのパラメーター、埋め込みプロバイダーを指定して RagConfiguration を作成します。',
				'<code>eddi://ai.labs.rag</code> のワークフローステップでエージェントに紐付けます。',
				'LLM タスクの <code>knowledgeBases</code> で名前を指定して選択し、ドキュメントを取り込みます。',
			],
			captions: [
				'ナレッジベースです。Chroma はベース URL とコレクション名を受け取ります。',
				'エージェントに紐付けるステップと、それを使用するタスクです。ワークフローのステップを省略するのが最もよくある間違いです。',
			],
			governance: [
				'埋め込みの API キーはボルト参照のため、ドキュメントのコーパスと認証情報は分離されたままです。',
				'埋め込みの呼び出しでは、ドキュメントのテキストがホスト型の埋め込みプロバイダーに送信されます。データをインフラの外に出せない場合は、セルフホストの埋め込みモデルを使用してください。',
				'公開されたベクターストアは、コーパスのコピーを公開しているのと同じです。Chroma は認証を有効にして、パブリックなインターフェースから切り離して運用してください。',
			],
			goodToKnow: [
				'ドキュメントのチャンクの置き換えは、インメモリと pgvector で検証されています。Chroma では動作する見込みですがテストの対象外のため、再取り込みしたドキュメントに古いチャンクが残る場合があります。',
			],
		},
		pgvector: {
			summary: 'EDDIのナレッジベース用ベクターストアとしての PostgreSQL と pgvector。すでに PostgreSQL を運用している場合に推奨される永続的な選択肢です。',
			gets: [
				'すでにバックアップと運用を行っているデータベース内にナレッジベースを構築',
				'再取り込み時に検証済みのドキュメント置き換え',
				'他のすべてのストアと同じエージェント設定で、変わるのはストアのパラメーターだけ',
			],
			steps: [
				'PostgreSQL で pgvector 拡張を有効にし、データベースとユーザーを作成します。',
				'<code>storeType: "pgvector"</code>、接続の詳細、テーブル、ベクターの <code>dimension</code> を指定して RagConfiguration を作成します。',
				'<code>eddi://ai.labs.rag</code> のワークフローステップで紐付けます。',
				'LLM タスクで名前を指定して選択し、ドキュメントを取り込みます。',
			],
			captions: [
				'dimension は埋め込みモデルと一致している必要があります。1536 は text-embedding-3-small に対応します。',
				'ナレッジベースをエージェントに紐付け、タスクで使用します。',
			],
			governance: [
				'データベースのパスワードは必須のパラメーターです。ボルト参照として保管してください。',
				'既存の PostgreSQL のアクセス制御とバックアップが、そのままベクターにも適用されます。',
				'埋め込みの呼び出しでは、ドキュメントのテキストが、設定した埋め込みプロバイダーに送信されます。',
			],
			goodToKnow: [
				'インメモリストアは開発用です。30分間クエリがないと、また再起動すると空になります。本番では pgvector のような永続ストアを選択してください。',
			],
		},
		qdrant: {
			summary: 'EDDIのナレッジベース用ベクターストアとしての Qdrant。拡張の余地がある、ベクター専用に作られたデータベースです。',
			gets: [
				'ナレッジベースの背後にある専用のベクターデータベース',
				'API キーと TLS(オプション)',
				'他のすべてのストアと同じエージェント設定',
			],
			steps: [
				'Qdrant サーバーを起動し、そのホストと gRPC ポート(EDDIのデフォルトは 6334)を控えます。',
				'<code>storeType: "qdrant"</code> と <code>collectionName</code> を指定して RagConfiguration を作成します。',
				'<code>eddi://ai.labs.rag</code> のワークフローステップで紐付けます。',
				'LLM タスクで名前を指定して選択し、ドキュメントを取り込みます。',
			],
			captions: [
				'Qdrant はホスト、ポート、コレクション名を受け取ります。apiKey と useTls はオプションです。',
				'ナレッジベースをエージェントに紐付け、タスクで使用します。',
			],
			governance: [
				'Qdrant に API キーが必要な場合は、ボルトから参照してください。',
				'埋め込みの呼び出しでは、ドキュメントのテキストが、設定した埋め込みプロバイダーに送信されます。',
				'公開されたベクターストアは、コーパスのコピーを公開しているのと同じです。パブリックなインターフェースから切り離してください。',
			],
			goodToKnow: [
				'ドキュメントのチャンクの置き換えは Qdrant でも動作する見込みですが、テストの対象外です。この機能がない場合、再取り込みしたドキュメントに古いチャンクが残ることがあります。',
			],
		},
		elasticsearch: {
			summary: 'EDDIのナレッジベース用ベクターストアとしての Elasticsearch。すでに運用しており、キーワード検索とベクター検索を1か所にまとめたい場合に役立ちます。',
			gets: [
				'すでに運用しているクラスター内のナレッジベース',
				'API キー、またはユーザー名とパスワードによる認証',
				'他のすべてのストアと同じエージェント設定',
			],
			steps: [
				'Elasticsearch クラスターに到達できることを確認し、インデックス名を決めます。',
				'<code>storeType: "elasticsearch"</code>、<code>serverUrl</code>、<code>indexName</code> を指定して RagConfiguration を作成します。',
				'<code>eddi://ai.labs.rag</code> のワークフローステップで紐付けます。',
				'LLM タスクで名前を指定して選択し、ドキュメントを取り込みます。',
			],
			captions: [
				'serverUrl のデフォルトは localhost:9200 です。セキュリティが有効なクラスターでは、apiKey、または userName と password を追加してください。',
				'ナレッジベースをエージェントに紐付け、タスクで使用します。',
			],
			governance: [
				'API キーまたはパスワードはボルトから参照してください。',
				'埋め込みの呼び出しでは、ドキュメントのテキストが、設定した埋め込みプロバイダーに送信されます。',
				'既存のクラスターのアクセス制御が、そのままベクターにも適用されます。',
			],
			goodToKnow: [
				'ドキュメントのチャンクの置き換えは Elasticsearch でも動作する見込みですが、テストの対象外です。この機能がない場合、再取り込みしたドキュメントに古いチャンクが残ることがあります。',
			],
		},
		'mongodb-atlas-vector-search': {
			summary: 'EDDIのナレッジベース用ベクターストアとしての MongoDB Atlas Vector Search。すでに Atlas 上で運用している場合に自然な選択です。',
			gets: [
				'すでに運用している Atlas クラスター内のナレッジベース',
				'接続文字列、データベース、コレクション、インデックス名による設定',
				'他のすべてのストアと同じエージェント設定',
			],
			steps: [
				'Atlas でベクター検索インデックスを作成し、データベース、コレクション、インデックスの名前を控えます。',
				'<code>storeType: "mongodb-atlas"</code> とストアのパラメーターを指定して RagConfiguration を作成します。',
				'<code>eddi://ai.labs.rag</code> のワークフローステップで紐付けます。',
				'LLM タスクで名前を指定して選択し、ドキュメントを取り込みます。',
			],
			captions: [
				'接続文字列には認証情報が含まれるため、ここではボルト参照にしています。',
				'ナレッジベースをエージェントに紐付け、タスクで使用します。',
			],
			governance: [
				'接続文字列は、設定ではなくボルトに保管してください。',
				'埋め込みの呼び出しでは、ドキュメントのテキストが、設定した埋め込みプロバイダーに送信されます。',
				'Atlas のアクセス制御とネットワークルールが、そのままベクターにも適用されます。',
			],
			goodToKnow: [
				'ドキュメントのチャンクの置き換えは Atlas でも動作する見込みですが、テストの対象外です。この機能がない場合、再取り込みしたドキュメントに古いチャンクが残ることがあります。',
			],
		},
		'kubernetes-helm': {
			summary: '単一ファイルのクイックスタート、Helm チャート、Kustomize オーバーレイを使って、準拠する任意の Kubernetes クラスター上で、MongoDB または PostgreSQL とともにEDDIを実行します。',
			gets: [
				'EDDIと MongoDB をデプロイするクイックスタートのマニフェスト',
				'本番プロファイル向けの Helm チャートと Kustomize オーバーレイ',
				'オプションのコンポーネント: Keycloak 認証、NATS JetStream、モニタリング、Ingress、Pod Disruption Budget、ネットワークポリシー',
				'データストアとしての MongoDB または PostgreSQL',
			],
			steps: [
				'クイックスタートのマニフェストを適用するか、ボルトのマスターキーを指定して Helm チャートをインストールします。',
				'ボルトのマスターキーを保持する <code>eddi-secrets</code> Secret を作成します。マニフェストがこれを書き込むことは、意図的にありません。',
				'MongoDB または PostgreSQL 用のデータベースオーバーレイ、または Helm の values を選択します。',
				'Keycloak や Ingress など、必要なオプションのコンポーネントを追加します。',
				'本番環境のシークレットには、External Secrets Operator で <code>eddi-secrets</code> を同期します。',
			],
			captions: [
				'1つのコマンドでEDDIと MongoDB を起動します。Pod は eddi-secrets Secret が存在するまで待機します。',
				'生成したボルトのマスターキーを使った Helm インストールです。',
				'データストアを PostgreSQL に切り替える Helm の values です。',
			],
			governance: [
				'マスターキーの Secret を書き込むマニフェストはないため、再適用によって稼働中のキーが置き換わり、既存のシークレットが復号できなくなることはありません。',
				'Helm と Kustomize 向けに同梱されている Keycloak レルムでは、特権アカウントにデフォルトのパスワードを設定していません。',
				'本番プロファイルでは、Pod Disruption Budget とネットワークポリシーが追加されます。',
			],
			goodToKnow: [
				'External Secrets Operator は、<code>eddi-secrets</code> Secret を AWS Secrets Manager、HashiCorp Vault、Azure Key Vault などから同期できます。EDDI自体には、これらのネイティブクライアントはありません。',
				'EDDI Solutionsは、お客様のクラウド、オンプレミス、または専用のマネージドインスタンスとして、EDDIを運用できます。',
			],
		},
		openshift: {
			summary: 'EDDIは、UBI 10 をベースにした Red Hat 認定のコンテナイメージを提供します。OpenShift 4.12 以降で非 root として動作し、OperatorHub 向けの Operator も用意されています。',
			gets: [
				'Red Hat Ecosystem Catalog に掲載されている Red Hat 認定イメージ',
				'OpenJDK 25 を搭載した UBI 10 ベースでの、UID 185 による非 root 実行',
				'カスタムリソースからEDDIのインスタンスとルートを作成する Operator',
				'Red Hat preflight による CI での認定チェック',
			],
			steps: [
				'OpenShift 4.12 以降で OperatorHub を開き、EDDI Operator をインストールします。',
				'Installed Operators から、MongoDB のサイズとストレージを指定して <code>Eddi</code> インスタンスを作成します。',
				'Operator がルートを自動的に作成します。',
				'他のクラスターと同様に、認証とシークレットを追加します。',
			],
			captions: ['ドキュメントにある Eddi カスタムリソースの例です。'],
			governance: [
				'コンテナは非 root ユーザーとして実行され、イメージにはサードパーティのライセンスファイルが含まれています。',
				'リリースは CI で Red Hat の認定要件に照らして検証されます。',
				'本番での起動では、明示的にオプトアウトしない限り、引き続き OIDC が必要です。',
			],
			goodToKnow: [
				'Operator は、MongoDB と PostgreSQL の両方をサポートするため、EDDI 6 向けに更新中です。汎用の Kubernetes の方法は、準拠する任意のクラスターで動作します。',
				'UBI 10 イメージは RHEL 8 ホストではサポートされません。RHEL 9 以降が対象です。',
			],
		},
		ollama: {
			summary: 'Ollama でモデルをローカル実行し、プロンプトとドキュメントを自社のハードウェア上にとどめます。オンプレミスやエアギャップ環境向けです。',
			gets: [
				'Ollama サーバーと通信する、タイプが <code>ollama</code> の LLM タスク',
				'プロバイダーの API キーは不要で、ホスト型モデルへのデータ送信もありません',
				'EDDIの隣で Ollama を起動する compose オーバーレイ',
				'小さな量子化モデル向けの代替手段としての、プロセス内 Jlama',
			],
			steps: [
				'Ollama の compose オーバーレイでEDDIを起動するか、Ollama を自分で実行してその URL を控えます。',
				'Ollama にモデルを pull します。モデルタグは <code>ollama list</code> に表示されるとおりに指定してください。',
				'タスクの <code>type</code> を <code>ollama</code> に設定し、<code>baseUrl</code> と <code>model</code> を指定します。',
				'コンテナの中では、<code>localhost</code> はそのコンテナ自身を指します。compose のサービス名または <code>host.docker.internal</code> を使用してください。',
			],
			captions: [
				'Ollama を同じネットワーク上で http://ollama:11434 として起動します。',
				'EDDIドキュメントにある Ollama タスクの例です。',
			],
			governance: [
				'プロンプト、取得したコンテキスト、回答はネットワーク内にとどまります。これがローカルモデルの目的です。',
				'承認、behavior rules、監査台帳は、ホスト型モデルの場合と同じように適用されます。',
				'認証情報が関与しないため、モデル自体のためにボルトに保管するものはありません。',
			],
			goodToKnow: [
				'完全なエアギャップ環境では、ローカルの Ollama か、事前に用意した Jlama のキャッシュが必要です。ネットワークがないと、EDDIはモデルをダウンロードできないためです。',
				'ローカルモデルは、ツール呼び出しや JSON の信頼性にばらつきがあります。依存する動作はテストしてください。',
			],
		},
	},
};

export default copy;
