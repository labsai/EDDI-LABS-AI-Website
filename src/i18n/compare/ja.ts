/**
 * Head-to-head comparison copy, Japanese. Keys match src/data/comparisons.ts.
 * Competitor facts are dated "as of October 2026"; sources are listed in the
 * header of src/data/comparisons.ts.
 */
import type { CompareCopy } from './en';
import { MCP_TOOLS, FRAMEWORKS, LLM_PROVIDERS, TESTS, EMBEDDING_PROVIDERS, VECTOR_STORES } from '../stats';

const EDDI_LICENSE = 'Apache 2.0（OSI承認）';

const copy: CompareCopy = {
	ui: {
		shortAnswer: '結論',
		chooseTitle: '選び方',
		faqTitle: 'よくある質問',
		otherTitle: 'その他の比較',
		allAlternatives: 'すべての代替手段：ビルダー、ライブラリ、クラウドプラットフォーム',
		asOfNote: '他ツールに関する内容は、2026年10月時点の公式ドキュメントとリポジトリで確認しています。これらのプロジェクトは変化が速いため、判断する前にベンダーに最新の挙動をご確認ください。',
		backToHub: 'すべての比較',
		hubTitle: 'EDDI 比較：Dify、CrewAI、LangGraph、Microsoft Agent Framework、n8n ほか',
		hubMetaTitle: 'EDDI vs. Dify、CrewAI、LangGraph、Microsoft Agent Framework、n8n、Flowise、Rasa',
		hubDescription: 'EDDIと、Dify、CrewAI、LangChain および LangGraph、Microsoft Agent Framework（AutoGen と Semantic Kernel）、n8n、Flowise、Rasa との公平な1対1比較。相手のツールのほうが適している場面も含みます。',
		hubIntro: '各ページでは、EDDIと1つの代替手段を同じ観点（アーキテクチャ、ガバナンス、ライセンス、運用）で比較します。相手のツールのほうが適している場面と、移行を決めた場合の進め方を、率直に述べます。',
		hubReadMore: '比較を読む',
		hubLandscapeTitle: '全体像をお探しですか？',
		hubLandscapeDesc: '代替手段の概要ページでは、ビジュアルビルダー、コードライブラリ、クラウドAIプラットフォームというタイプ別に全体を整理しています。',
		headToHeadTitle: '1対1の比較',
		headToHeadIntro: 'このページではタイプ別に全体像を整理しています。特定の代替手段との直接比較（その代替手段が適している場面や、既存プロジェクトの移行方法を含む）は、次のページをご覧ください。',
		navLabel: '比較',
	},
	comparisons: {
		// ─── LangChain and LangGraph ──────────────────────────────────
		'eddi-vs-langchain': {
			title: 'EDDI vs. LangChain と LangGraph',
			description:
				'EDDIとLangChain、LangGraphの比較：ライブラリとデプロイ可能なプラットフォーム、コードで定義するグラフとConfig-as-Code、ヒューマン・イン・ザ・ループ、Day 2オペレーションのギャップ、そしてオーケストレーションを自作するほうが適している場面。',
			summary: 'ライブラリとコード定義のグラフ、対、デプロイ可能なプラットフォーム。Day 2オペレーションのギャップ。',
			verdict:
				'オーケストレーションのロジックが製品の差別化要素であり、コードとしてリポジトリ内でレビューしたい場合は、<strong>LangChain または LangGraph を選びましょう</strong>。オーケストレーションが差別化にならない基盤であり、保守するよりデプロイしたい場合は、<strong>EDDIを選びましょう</strong>。',
			whatItIsTitle: 'LangChain と LangGraph とは',
			whatItIs:
				'LangChainは、LLMアプリケーションを構築するための、MITライセンスのPythonおよびJavaScriptフレームワークです。同じチームによるLangGraphは、ステートフルなエージェント向けの低レベルなオーケストレーションフレームワークで、グラフをコードで定義します。障害後に再開できる永続的な実行と、エージェントの状態を確認・変更できるヒューマン・イン・ザ・ループのチェックポイントを備えます。LangSmithはトレーシング、評価、オブザーバビリティのための商用製品で、LangSmith Deploymentは長時間稼働するエージェントをホストします。連携の範囲はエコシステム内で最も広いものです。',
			archetypeTitle: 'ライブラリかプラットフォームか、という問題です',
			archetype:
				'EDDIは競合するフレームワークではありません。EDDIは内部で、LangChainのJava版である<a href="https://docs.langchain4j.dev/" target="_blank" rel="noopener">LangChain4j</a>を使用しています。本当の問いは、どちらの抽象化が優れているかではありません。制御フローを、LangGraphのグラフとして自分で書くコードに置くのか、デプロイする宣言的な設定に置くのか、そしてその周辺（REST層、認証、テナンシー、状態、監査、非開発者が使うインターフェース）を誰が構築し所有するのか、という点です。',
			tableTitle: '構築するものとデプロイするもの',
			tableHeaders: { dimension: '観点', them: 'LangChain / LangGraph', eddi: 'EDDI' },
			rows: [
				{ dimension: '提供形態', them: 'アプリケーションにインポートするライブラリ', eddi: 'デプロイ可能なミドルウェア。Dockerが動く場所ならどこでも稼働' },
				{ dimension: 'オーケストレーションのロジック', them: 'リポジトリ内のPythonまたはTypeScriptのグラフ', eddi: 'JSON設定と決定論的なBehavior Rules。再デプロイなしで変更可能' },
				{ dimension: 'ヒューマン・イン・ザ・ループ', them: 'インタラプトで状態を確認・変更できる。承認UIとポリシーは自分で構築', eddi: 'ターン、ツール呼び出し、グループのフェーズにゲートを設け、タイムアウトポリシー、ManagerとSlackでの承認を備える' },
				{ dimension: '耐久性', them: '設定した永続化による永続的な実行', eddi: 'プラットフォームが永続化する会話メモリ。AWAITING_HUMANなどの明示的な状態' },
				{ dimension: 'REST APIとルーティング', them: '自分で構築、またはLangSmith Deploymentでホスト', eddi: '標準搭載。OpenAPI 3.1、A2Aプロトコル、SSEストリーミングにも対応' },
				{ dimension: '認証とRBAC', them: '自分で構築', eddi: 'オプションのOIDC/Keycloakと、eddi-adminおよびeddi-approverロール' },
				{ dimension: '非開発者向けインターフェース', them: '自分で構築（LangSmith Studioは開発者向け）', eddi: 'EDDI Manager。11言語に対応した本番品質のReact UI' },
				{ dimension: 'シークレット管理', them: '自分で構築、またはVaultを持ち込む', eddi: '組み込みのAES-256-GCM Secrets Vault。${vault:key}として参照' },
				{ dimension: 'オブザーバビリティ', them: 'LangSmith（商用）または独自の計装', eddi: 'Prometheusメトリクスと、自動プロビジョニングされるGrafanaダッシュボード' },
				{ dimension: '監査とコンプライアンス', them: '自分で構築', eddi: `HMAC署名付き、追記専用、連番検証付きの監査台帳、データ主体の権利API、${FRAMEWORKS}のフレームワークに対応` },
				{ dimension: '反復のサイクル', them: 'コードを変更し、レビューし、テストし、デプロイする', eddi: 'UIまたはAPIで設定を変更。即時に反映' },
				{ dimension: '制御の上限', them: '上限なし。コードで表現できることはすべて可能', eddi: '設計上、設定で表現できる範囲に限られる' },
			],
			betterThemTitle: 'LangChain と LangGraph が適している場面',
			betterThem: [
				'オーケストレーションそのものが競争優位であり、設定ストアではなくコードベースに置くべき場合。',
				'カスタムのグラフ構造、独自のリトライ動作、特殊なステートマシンなど、宣言的な設定では表現できない制御フローが必要な場合。',
				'PythonまたはTypeScriptのチームで、エージェントを既存サービスの外ではなく内部に置きたい場合。',
				'新しい連携が登場したその週に使いたい場合。LangChainはどのプラットフォームよりも速く進化します。',
				'チームが1、2名のエンジニアで、コンプライアンス担当者もテナンシーの要件も、アクセスを必要とする非開発者もいない場合。',
			],
			betterEddiTitle: 'EDDIが適している場面',
			betterEddi: [
				'Day 2オペレーションの項目が、チームが製品開発の代わりに行っている作業だと感じる場合。',
				'プロンプトエンジニアや運用担当者が、プルリクエストなしでエージェントの挙動を変更する必要がある場合。',
				'複数のチームや顧客が1つのデプロイを共有し、分離、クォータ、コストの帰属が必要な場合。',
				'出荷前に、調達部門が監査証跡、データ所在地、フレームワークのカバレッジについての回答を求める場合。',
				'オーケストレーション層を、保守するコードベースではなく、アップグレードする依存関係にしたい場合。',
			],
			migrationTitle: 'LangChain または LangGraph からのアプリケーション移行',
			migrationIntro:
				'ロジックは多くの場合そのまま活かせます。保守しなくて済むようになるのは、その周辺のインフラです。チェーンまたはグラフの定義から外側に向かって作業を進めます。任意のPythonに依存する制御フローは、Behavior Rulesまたは宣言したツールに置き換える必要があります。',
			migrationSteps: [
				{ from: 'チェーンまたはLangGraphのグラフ', to: 'EDDIのパイプライン設定とBehavior Rules' },
				{ from: 'ツールと関数呼び出し', to: 'MCPツール定義またはhttpCall宣言' },
				{ from: '人手レビューのためのインタラプト', to: 'PAUSE_CONVERSATIONルール、またはtoolApprovalsのglob。ManagerまたはSlackで承認' },
				{ from: 'チェックポインターとメモリのクラス', to: 'step、conversation、longTermの各スコープを持つ会話メモリ' },
				{ from: 'リトリーバーとベクトルストアの設定', to: `${EMBEDDING_PROVIDERS}の埋め込みプロバイダーと${VECTOR_STORES}のベクトルストアにまたがるRAG設定` },
				{ from: 'プロンプトテンプレート', to: 'バージョン管理されたプロンプトスニペット。名前で参照' },
				{ from: 'FastAPIラッパー', to: '組み込みのREST API、OpenAPI 3.1、SSEストリーミング' },
				{ from: 'LangSmithのトレーシング', to: 'Prometheusメトリクス、Grafanaダッシュボード、監査台帳' },
			],
			faq: [
				{
					question: 'EDDIはLangChainを使っていますか？',
					answer:
						'EDDIは内部でJava実装のLangChain4jを使用しています。これは競合する抽象化ではありません。EDDIは、この種のライブラリを中心に構築されたデプロイ可能なプラットフォームであり、ライブラリが意図的に利用者に委ねているAPI層、認証、状態管理、管理UI、コンプライアンス基盤を提供します。',
				},
				{
					question: 'LangChainとLangGraphの違いは何ですか？',
					answer:
						'LangChainは、LLMアプリケーション向けのコンポーネントと連携を提供します。LangGraphは、グラフとして定義するステートフルで長時間稼働するエージェント向けの、より低レベルの層で、永続的な実行とヒューマン・イン・ザ・ループのチェックポイントを備えます。どちらも自社のサービスに組み込むライブラリです。EDDIとの比較は両方に当てはまります。',
				},
				{
					question: 'Day 2オペレーションのギャップとは何ですか？',
					answer:
						'Day 1は、エージェントが正しく応答するようにすることで、ライブラリはこれをうまく扱います。Day 2はその後のすべてです。認証、マルチテナンシー、再起動をまたぐ会話状態、監査ログ、シークレットのローテーション、水平スケーリング、コスト追跡、そしてPythonを書かない人のためのインターフェースがあります。チームは、エージェント本体よりもDay 2に多くの時間を費やすのが常です。',
				},
				{
					question: '設定はコードより表現力が低いのですか？',
					answer:
						'はい。そしてこのトレードオフは意図的です。設定は、コードにできるすべてを表現することはできません。その代わりに、再デプロイなしの変更、非エンジニアでもレビューできる挙動が得られ、セキュリティレビューで守るべき実行時のコード実行もありません。コードが提供する上限が必要なら、ライブラリを使ってください。',
				},
				{
					question: 'LangChainを使い続けながらEDDIも使えますか？',
					answer:
						'はい。EDDIはMCPサーバーとREST APIを公開しているため、LangChainアプリケーションはEDDIのエージェントをツールとして呼び出せます。また、EDDIはhttpCall経由でLangChainのサービスを呼び出せます。差別化の源泉となる部分とインフラの部分で分担する設計は、妥当な選択です。',
				},
			],
		},

		// ─── Microsoft Agent Framework ────────────────────────────────
		'eddi-vs-microsoft-agent-framework': {
			title: 'EDDI vs. Microsoft Agent Framework（AutoGen と Semantic Kernel）',
			description:
				'EDDIと、AutoGenおよびSemantic Kernelの後継であるMicrosoft Agent Frameworkの比較：コード定義のワークフローとConfig-as-Code、ヒューマン・イン・ザ・ループ、監査、ホスティング、そしてMicrosoftのスタックが適している場面。',
			summary: 'AutoGenとSemantic Kernelの後継であるMicrosoft Agent Framework、対、デプロイ可能なエージェントプラットフォーム。',
			verdict:
				'.NETまたはPythonのチームで、Azure上で構築し、エージェントのワークフローを自社サービス内のコードとして持ちたい場合は、<strong>Microsoft Agent Frameworkを選びましょう</strong>。エージェントを、どこでも動かせるJVMプラットフォーム上のレビュー可能な設定として定義し、承認ゲートと監査台帳を組み立てるのではなく最初から備えたい場合は、<strong>EDDIを選びましょう</strong>。',
			whatItIsTitle: 'Microsoft Agent Framework とは',
			whatItIs:
				'Microsoft Agent Frameworkは、.NETとPythonでエージェントとマルチエージェントのワークフローを構築・オーケストレーションするための、MITライセンスのオープンソースSDKおよびランタイムです。Semantic KernelとAutoGenを手がけたチームによるもので、2026年4月に1.0をリリースしました。ワークフローは、逐次、並行、ハンドオフ、グループ協調のパターンを持つグラフで、チェックポイント、ストリーミング、ヒューマン・イン・ザ・ループの制御、OpenTelemetryトレーシング、ミドルウェアの仕組みを備えます。エージェントはYAMLで宣言することもでき、MicrosoftはFoundry上でのホスティングを文書化しています。2026年10月時点では、Semantic Kernelは修正のみが提供され、新機能の開発はAgent Frameworkで行われています。AutoGenはメンテナンスモードで、両方に移行ガイドがあります。',
			archetypeTitle: 'コード定義のワークフローと宣言された設定',
			archetype:
				'AutoGenやSemantic Kernelを探してこのページに来た場合、現在の実際の比較対象はAgent Frameworkです。Microsoftが新規プロジェクトに案内しているのがこちらだからです。これはSDKであり、ワークフローは自社サービス内の、自社の言語によるコードです。ホスティング、セキュリティ、監査の方法は利用者が選び、Azureへの対応が充実しています。EDDIは逆のトレードオフを取ります。エージェントはデプロイ済みのプラットフォームが解釈するJSON設定であり、挙動の差分確認、レビュー、再ビルドなしの変更ができます。API、Manager UI、シークレットVault、監査台帳はプラットフォームが提供します。',
			tableTitle: '自社サービス向けのSDKとデプロイするプラットフォーム',
			tableHeaders: { dimension: '観点', them: 'Microsoft Agent Framework', eddi: 'EDDI' },
			rows: [
				{ dimension: '提供形態', them: '.NETまたはPythonのサービスに組み込むSDKとランタイム', eddi: 'JVM（Quarkus）上のデプロイ可能なミドルウェア。DockerまたはKubernetesが動く場所ならどこでも稼働' },
				{ dimension: 'エージェントの定義方法', them: 'コード定義のエージェントとグラフワークフロー。エージェントはYAMLでも宣言可能', eddi: 'JSON設定。決定論的なBehavior Rulesが次のアクションを決め、LLM呼び出しは宣言されたタスク内で行われる' },
				{ dimension: '言語', them: '.NETとPython（Goは別リポジトリ）', eddi: 'REST、MCP、OpenAI互換APIを通じてあらゆる言語から利用可能。エージェント自体にコードは不要' },
				{ dimension: 'ライセンス', them: 'MIT', eddi: EDDI_LICENSE },
				{ dimension: '実行時のカスタムロジック', them: '自社のコードとツール関数が自社のプロセス内で実行される', eddi: '実行時のeval()やコード実行はない。ロジックは宣言するか、MCPツールやHTTP呼び出しの先に置く' },
				{ dimension: 'ヒューマン・イン・ザ・ループ', them: 'ワークフロー単位のヒューマン・イン・ザ・ループ制御', eddi: '3つのレベルのゲート：ターン（PAUSE_CONVERSATION）、ツール呼び出し（toolApprovals）、グループのフェーズ。タイムアウトポリシー付き' },
				{ dimension: 'マルチエージェントのパターン', them: '逐次、並行、ハンドオフ、グループ協調をコードで実装', eddi: '7つのスタイル（ラウンドテーブル、ピアレビュー、悪魔の代弁者、デルファイ法、ディベート、タスクフォース、交渉）のグループディスカッション。決定事項と反対意見を記録' },
				{ dimension: '状態と復旧', them: 'ワークフローランタイムでのチェックポイントとタイムトラベル', eddi: 'プラットフォームが永続化する会話メモリ。AWAITING_HUMANなどの明示的な状態' },
				{ dimension: 'オブザーバビリティと監査', them: 'OpenTelemetryトレーシングとミドルウェアのフック。データの送り先は利用者次第', eddi: 'Prometheusメトリクスに加え、HMAC署名付き、追記専用、連番検証付きの監査台帳と検証エンドポイント' },
				{ dimension: 'シークレットとID管理', them: '利用するプラットフォームの仕組み（例：Azureのサービス）', eddi: '組み込みのAES-256-GCM Secrets Vault。オプションのKeycloak/OIDCと、eddi-adminおよびeddi-approverロール' },
				{ dimension: 'エコシステムとの適合', them: 'MicrosoftおよびAzureとの深い連携（Foundryでホストされるエージェントを含む）', eddi: `ベンダー中立：${LLM_PROVIDERS}のLLMプロバイダー、OllamaまたはJlama経由のローカルモデル、${MCP_TOOLS}のMCPツール` },
			],
			betterThemTitle: 'Microsoft Agent Framework が適している場面',
			betterThem: [
				'チームが.NETを書いており、エージェントを、独自のデプロイとテストを持つ既存のC#サービスの内部に置く場合。',
				'Azure上で構築しており、Foundryや周辺のMicrosoftサービスとの一級の連携を求める場合。',
				'Semantic KernelのプラグインやAutoGenのコードがあり、サポートされている移行パスのほうがプラットフォームの変更より安価な場合。',
				'ワークフローに、カスタムのグラフ構造、チェックポイントの分岐、タイムトラベルデバッグなど、設定では表現できない制御フローが必要な場合。',
				'開発者向けのSDKが欲しく、ホスティング、セキュリティ、オブザーバビリティの方法を自分で決めたい場合。',
			],
			betterEddiTitle: 'EDDIが適している場面',
			betterEddi: [
				'エージェントの挙動を、レビュアーが読めて、再ビルドなしで環境間を昇格できる設定にする必要がある場合。',
				'セキュリティレビューで推論時にどのようなコードが実行されるかを問われ、プラットフォーム内では何も実行されないと答えたい場合。',
				'ターン、ツール呼び出し、グループのフェーズの各レベルで承認が必要で、誰が何を決めたかの署名付き記録が必要な場合。',
				'SDKの周りに組み立てるのではなく、すぐに使えるManager UI、シークレットVault、API、監査台帳が必要な場合。',
				'クラウド中立を保ちたい場合：Kubernetes、OpenShift、オンプレミス、またはローカルモデルを使ったエアギャップ環境。',
			],
			migrationTitle: 'AutoGen、Semantic Kernel、Agent Framework からの移行',
			migrationIntro:
				'コードの変換ではなく、意図の変換になると考えてください。ロールとツールは引き継げます。グラフのロジックはBehavior Rulesになり、実際のコードが必要なものはMCPツールまたはOpenAPIエンドポイントの先に移します。',
			migrationSteps: [
				{ from: '指示を持つエージェント', to: 'LLMタスクとシステムメッセージを持つEDDIエージェント' },
				{ from: 'Semantic Kernelのプラグインまたは関数', to: 'MCPツール、またはhttpCallもしくはOpenAPIからインポートしたAPI' },
				{ from: 'ワークフローグラフまたはAutoGenのチーム', to: 'ルーティング用のBehavior Rules、またはマルチエージェント作業用のグループディスカッションスタイル' },
				{ from: 'ヒューマン・イン・ザ・ループのステップ', to: 'PAUSE_CONVERSATIONルール、toolApprovalsのglob、またはグループのフェーズのrequiresApproval' },
				{ from: 'チェックポイントストア', to: 'step、conversation、longTermの各スコープを持つ会話メモリ' },
				{ from: 'ミドルウェアとフィルター', to: 'Behavior Rulesとツール承認ポリシー' },
				{ from: 'OpenTelemetryのトレース', to: 'Prometheusメトリクスと監査台帳' },
			],
			faq: [
				{
					question: 'Microsoft Agent Frameworkは、AutoGenとSemantic Kernelの後継ですか？',
					answer:
						'Microsoftはこれを両者の後継と位置づけ、移行ガイドを公開しています。2026年10月時点では、Semantic Kernelは修正のみが提供され、新機能はAgent Frameworkに追加されます。AutoGenはメンテナンスモードです。Microsoftスタックで新規プロジェクトを始めるなら、EDDIと比較して評価すべきはAgent Frameworkです。',
				},
				{
					question: 'EDDIはマルチエージェント会話でAutoGenの代わりになりますか？',
					answer:
						'多くのケースではなります。EDDIのグループディスカッションは、ラウンドテーブル、ピアレビュー、悪魔の代弁者、デルファイ法、ディベート、タスクフォース、交渉のスタイルをカバーし、人間の承認を求められるフェーズと、反対意見を含む決定の記録を備えます。エージェント同士にコードレベルの自由な連携が必要な場合は、SDKのほうが適しています。',
				},
				{
					question: 'EDDIを使うにはAzureを諦める必要がありますか？',
					answer:
						'いいえ。EDDIはAzure OpenAIをプロバイダーとしてサポートし、AKSを含むKubernetes上で動作します。ただし、Agent Frameworkのような深いAzureおよびFoundryとの連携は提供しないため、Microsoftのエコシステムに全面的に取り組んでいる場合はその点を考慮してください。',
				},
				{
					question: '両者を併用できますか？',
					answer:
						'はい。EDDIはMCPサーバー、REST API、OpenAI互換APIを公開し、MCPサーバーやA2Aエージェントを利用することもできます。.NETのサービスはEDDIのエージェントをツールとして呼び出せ、EDDIはhttpCall経由で自社のサービスを呼び出せます。',
				},
			],
		},

		// ─── CrewAI ───────────────────────────────────────────────────
		'eddi-vs-crewai': {
			title: 'EDDI vs. CrewAI',
			description:
				'マルチエージェントシステムにおけるEDDIとCrewAIの比較：Pythonのロールベースのクルーとフロー、対、デプロイ可能なプラットフォーム上のConfig-as-Code。コード実行、ヒューマン・イン・ザ・ループ、ガバナンス、そしてCrewAIが適している場面。',
			summary: 'Pythonのロールベースのクルーとフロー、対、プラットフォーム上のガバナンス付きマルチエージェント設定。',
			verdict:
				'ロールを持つエージェントがタスクで協調する仕組みを、コードで定義して調整したいPythonチームは、<strong>CrewAIを選びましょう</strong>。マルチエージェントの処理を、ガバナンスの効いたサービスとして運用する必要がある場合、つまりLLMの周りに決定論的なルールを置き、承認ゲートと署名付きの監査証跡を備え、コーディングではなく設定で構成したい場合は、<strong>EDDIを選びましょう</strong>。',
			whatItIsTitle: 'CrewAI とは',
			whatItIs:
				'CrewAIは、エージェント、タスク、クルー、フロー、ツールという独自のプリミティブを持つ、MITライセンスのスタンドアロンなPythonフレームワークです。クルーは、ロールを持つエージェントのチームで、タスクに自律的に協調して取り組みます。フローは、実行パス、状態、分岐を精密に制御できるイベント駆動のワークフローです。プロジェクトは実行中の人間の入力をサポートしており、商用のCrewAI AMP Suiteは、マネージドなデプロイ、オブザーバビリティ、ガバナンス、サポートのためのコントロールプレーンを追加します。',
			archetypeTitle: '自律的なクルーとガバナンスの効いた設定',
			archetype:
				'CrewAIはエージェントの自律性を重視します。ロール、目標、タスクを記述すると、クルーが協調の方法を考え出し、より厳密な制御が必要な場面ではフローを使います。EDDIは制御を重視します。決定論的なBehavior Rulesが次に実行するアクションを決め、LLMは宣言されたタスク内で呼び出され、マルチエージェントの作業は明確なフェーズを持つ名前付きのグループディスカッションスタイルに従います。どちらもマルチエージェントシステムを構築できます。違いは、事前にどこまで自分で決め、実行時にどこまでモデルに決めさせるかです。',
			tableTitle: 'コードで書くエージェントと設定としてのエージェント',
			tableHeaders: { dimension: '観点', them: 'CrewAI', eddi: 'EDDI' },
			rows: [
				{ dimension: '主要な抽象化', them: 'タスクを持つロールベースのエージェントのクルーと、イベント駆動のフロー', eddi: 'エージェント設定：パイプライン、Behavior Rules、LLMタスク、ツールをバージョン管理されたJSONとして定義' },
				{ dimension: '言語とランタイム', them: 'アプリケーションに組み込むPythonライブラリ', eddi: '仮想スレッドを使うJVM（Quarkus）プラットフォーム。エージェントにコードは不要' },
				{ dimension: 'ライセンス', them: 'MIT（オープンソースのフレームワーク）。その上に商用のAMP Suite', eddi: EDDI_LICENSE },
				{ dimension: '制御フロー', them: '協調の方法は実行時にエージェントが決定。フローはコードで明示的な分岐を追加', eddi: '決定論的なBehavior Rulesが次のアクションを選択。グループのスタイルがフェーズを定義' },
				{ dimension: 'コード実行', them: 'コードインタープリターツールはcrewai-toolsから削除され、エージェントレベルのコード実行は非推奨。ドキュメントはE2BやModalなどの専用サンドボックスを推奨', eddi: 'プラットフォーム内に実行時のeval()やコード実行はない。ロジックは宣言するか、MCPツールやHTTP呼び出しの先に置く' },
				{ dimension: 'ヒューマン・イン・ザ・ループ', them: '実行中の人間の入力をサポート', eddi: 'ターン、ツール呼び出し、グループのフェーズにゲート、タイムアウトポリシー。Manager、REST、MCP、Slackで承認' },
				{ dimension: 'マルチエージェントのパターン', them: 'クルーのプロセスとフローをコードで実装', eddi: '7つのスタイルとカスタムのグループディスカッション。決定事項、集計、反対意見の記録、署名付きのトランスクリプトエントリ' },
				{ dimension: '管理とガバナンス', them: 'トレーシングとガバナンスを備えたコントロールプレーンは商用のAMP Suiteに含まれる', eddi: 'Manager UI、シークレットVault、オプションのKeycloak/OIDC、監査台帳をオープンソース版に搭載' },
				{ dimension: '監査証跡', them: 'コントロールプレーンまたは独自のツールによるトレーシングとオブザーバビリティ', eddi: 'HMAC署名付き、追記専用、連番検証付きの台帳。GET /auditstore/verify/{conversationId}' },
				{ dimension: 'モデル', them: 'Pythonから多数のプロバイダーを利用可能', eddi: `${LLM_PROVIDERS}のLLMプロバイダーに加え、OllamaまたはJlama経由のローカルモデル` },
			],
			betterThemTitle: 'CrewAI が適している場面',
			betterThem: [
				'チームがPython中心で、エージェント、ツール、クルーのロジックを、他のコードと同じリポジトリに置きたい場合。',
				'ロールを持つエージェントの自律的な協調を素早くプロトタイプし、コードを編集して調整したい場合。',
				'設定では表現できない任意のロジックを持つ、カスタムのPythonツールが必要な場合。',
				'運用するプラットフォームよりも、組み込むライブラリを好む場合。',
				'商用のAMP Suiteのコントロールプレーンが、組織のクルーのデプロイと監視の方法に合っている場合。',
			],
			betterEddiTitle: 'EDDIが適している場面',
			betterEddi: [
				'マルチエージェントの挙動を、レビューできる程度に予測可能にする必要がある場合：自由な自律性ではなく、名前付きのフェーズ、記録された決定、ルールによる制御。',
				'特定のツール呼び出しやグループのフェーズに人間の承認が必要で、その決定を署名付き台帳に記録する必要がある場合。',
				'ガバナンス、管理UI、監査を、別の商用ティアではなくオープンソース版で利用したい場合。',
				'セキュリティレビューで推論時にどのようなコードが実行されるかを問われ、プラットフォームでは何も実行させたくない場合。',
				'非エンジニアが、プルリクエストなしでエージェントの挙動を変更する必要がある場合。',
			],
			migrationTitle: 'CrewAI からのクルーの移行',
			migrationIntro:
				'ロールと目標は、プロンプトとグループのフェーズに置き換わります。最も大きく変わるのは自律性です。クルーが実行時に決めていたことは、ルール、フェーズ、承認ゲートとして明文化することになります。',
			migrationSteps: [
				{ from: 'エージェント（ロール、目標、バックストーリー）', to: 'LLMタスク内のシステムメッセージを持つEDDIエージェント' },
				{ from: 'タスク', to: 'パイプラインのタスク、またはグループディスカッションのフェーズ' },
				{ from: 'クルーのプロセス', to: 'グループディスカッションスタイル（例：タスクフォースやラウンドテーブル）' },
				{ from: 'ルーターを持つフロー', to: 'inputmatcherやactionmatcherなどの条件タイプを使ったBehavior Rules' },
				{ from: 'カスタムのPythonツール', to: 'MCPツール、httpCall、またはOpenAPIからインポートしたAPI' },
				{ from: '人間の入力', to: 'PAUSE_CONVERSATIONルール、toolApprovals、またはフェーズのrequiresApproval' },
				{ from: 'メモリとナレッジソース', to: '会話メモリのスコープとRAGナレッジベース' },
			],
			faq: [
				{
					question: 'EDDIはマルチエージェントシステム向けのCrewAIの代替になりますか？',
					answer:
						'はい。マルチエージェントの協調を、ガバナンスの効いたサービスとして運用したいチームには適しています。EDDIのグループディスカッションは、明確なフェーズを持つ名前付きのスタイルで実行され、決定と反対意見を記録します。CrewAIはエージェントにより多くの自律性を与え、Pythonで定義するため、コードの中にとどまりたいチームに向いています。',
				},
				{
					question: 'EDDIにはCrewAIのような自律エージェントがありますか？',
					answer:
						'EDDIのエージェントはツールを呼び出し、グループディスカッションで協調できますが、制御フローはエージェントの即興に任せず、利用者が設定するBehavior Rulesとフェーズによって決まります。これは、自律性と引き換えに予測可能性を得る意図的なトレードオフです。',
				},
				{
					question: 'ここでコード実行が重要なのはなぜですか？',
					answer:
						'生成されたコードを実行するエージェントには、分離が必要です。CrewAIは組み込みのコードインタープリターから離れ、専用のサンドボックスサービスを推奨しています。EDDIはプラットフォーム内で実行時にコードを評価しないことで、この問題を回避します。実際のロジックが必要なものは、宣言して承認できるツールの先に置かれます。',
				},
				{
					question: '両方を使えますか？',
					answer:
						'はい。CrewAIのサービスは、REST API、MCPサーバー、OpenAI互換API経由でEDDIを呼び出せ、EDDIはhttpCall経由でCrewAIのエンドポイントを呼び出せます。コードレベルの実験にCrewAI、ガバナンスの効いた本番エージェントにEDDIという使い分けは、妥当な分担です。',
				},
			],
		},

		// ─── Dify ─────────────────────────────────────────────────────
		'eddi-vs-dify': {
			title: 'EDDI vs. Dify',
			description:
				'LLMエージェントの構築と運用におけるEDDIとDifyの比較：ビジュアルワークフロービルダーとCodeノード、対、Config-as-Code。ライセンスとマルチテナンシーの条件、人間の入力、監査、そしてDifyが適したツールとなる場面。',
			summary: 'ビジュアルワークフロービルダーとアプリプラットフォーム、対、ガバナンスを組み込んだConfig-as-Code。',
			verdict:
				'洗練されたビジュアルビルダーとプラグインマーケットプレイスがあり、チームや顧客が今週使えるLLMアプリに最短で到達したい場合は、<strong>Difyを選びましょう</strong>。エージェントを曖昧さのないApache 2.0ライセンスの下で、コードノードなしで動かし、複数のレベルに承認ゲートを設け、証拠のために作られた監査台帳を備えたい場合は、<strong>EDDIを選びましょう</strong>。',
			whatItIsTitle: 'Dify とは',
			whatItIs:
				'Difyは、LLMアプリケーションを構築するためのオープンソースのプラットフォームです。ビジュアルなワークフローキャンバス、取り込みから検索までのRAGパイプライン、マーケットプレイス、MCPサーバー、カスタムAPIのツールを使えるエージェント、プロンプトIDE、バックエンド・アズ・ア・サービスのAPI、Langfuse、Opik、Arize Phoenixなどのオブザーバビリティツールとの連携を提供します。Dify Cloudを利用するか、Docker ComposeでCommunity Editionをセルフホストするか、SSO、RBAC、サポートSLAを追加するDify Enterpriseについて問い合わせることができます。CodeノードはサンドボックスでPythonまたはJavaScriptを実行し、Human Inputノードはワークフローを一時停止して、人間の応答を待ちます。',
			archetypeTitle: 'アプリビルダーとガバナンスの効いたエージェントプラットフォーム',
			archetype:
				'DifyとEDDIはRAG、ツール、エージェントの面で重なりますが、最適化している対象の人が異なります。Difyは、アプリケーションをビジュアルに組み立てて素早く出荷したいビルダーに向けて最適化されており、コードノードが逃げ道になります。EDDIは、エージェントの挙動を、ガバナンスに囲まれた宣言的でレビュー可能な設定にする必要があるオペレーターに向けて最適化されています。多くのチームがDifyから始めるのは妥当であり、テナンシー、ライセンス、監査の要件が出てきた段階で移行するチームもあります。',
			tableTitle: 'ビルダーの利便性と運用面',
			tableHeaders: { dimension: '観点', them: 'Dify', eddi: 'EDDI' },
			rows: [
				{ dimension: '主要な抽象化', them: 'ビジュアルなワークフローおよびチャットフローのキャンバスと、プロンプトIDE', eddi: 'Config-as-Code：ManagerまたはAPIで作成するJSONリソース。ソースコードのようにバージョン管理' },
				{ dimension: 'ライセンス', them: 'Dify Open Source License：Apache 2.0に条件を追加したもの。ソースをマルチテナントで運用するには書面による許可が必要で、フロントエンドのロゴと著作権表示を残す必要がある', eddi: EDDI_LICENSE },
				{ dimension: 'カスタムロジック', them: 'Codeノードは、ファイルシステム、外向きのネットワーク、システムコマンドをブロックし、パッケージが固定されたサンドボックスでPythonまたはJavaScriptを実行', eddi: '実行時のコード評価はない。ロジックは宣言するか、MCPツールやHTTP呼び出しの先に置く' },
				{ dimension: 'ヒューマン・イン・ザ・ループ', them: 'Human Inputノードはワークフローを一時停止し、Webアプリまたはメールで回答するフォームを提示。デフォルトの待機は3日間で、その後タイムアウト分岐', eddi: 'ターン、ツール呼び出し、グループのフェーズにゲート。タイムアウトポリシーはWAIT_INDEFINITELY、AUTO_APPROVE、AUTO_REJECT、ABORT。ManagerとSlackでの承認' },
				{ dimension: 'ツールと連携', them: 'マーケットプレイス、MCPサーバー、カスタムAPI', eddi: `${MCP_TOOLS}のMCPツール、MCPクライアント、OpenAPIインポート、httpCall、A2A` },
				{ dimension: 'RAG', them: 'ドキュメント抽出を備えた組み込みのナレッジパイプライン', eddi: `${EMBEDDING_PROVIDERS}の埋め込みプロバイダー、${VECTOR_STORES}のベクトルストア、およびインフラ不要のhttpCall RAG` },
				{ dimension: 'マルチエージェント', them: 'エージェントとワークフローのノードをキャンバス上で組み合わせる', eddi: '7つのスタイルのグループディスカッション。決定事項と反対意見を記録し、フェーズごとに任意で人間の承認' },
				{ dimension: 'IDとアクセス', them: 'ワークスペース。SSOとRBACはDify Enterpriseで提供', eddi: 'オープンソース版で、オプションのKeycloak/OIDCと、eddi-adminおよびeddi-approverロール' },
				{ dimension: 'オブザーバビリティと監査', them: 'ログとモニタリング、Langfuse、Opik、Arize Phoenixとの連携', eddi: 'Prometheusメトリクスに加え、HMAC署名付き、追記専用、連番検証付きの監査台帳' },
				{ dimension: 'デプロイ', them: 'Dify Cloud、Docker Compose、Enterpriseは要問い合わせ', eddi: 'Docker、Helm、Kustomize、OpenShift（Red Hat認定イメージ、OperatorHub経由のOperator）' },
			],
			betterThemTitle: 'Dify が適している場面',
			betterThem: [
				'非エンジニアが読んで拡張でき、構築中にすぐフィードバックを得られるビジュアルキャンバスが欲しい場合。',
				'プラグインマーケットプレイスと既成のワークフローテンプレートが、連携にかかる時間を実際に節約してくれる場合。',
				'ホスト型の選択肢（Dify Cloud）が欲しく、自分では何も運用したくない場合。',
				'Codeノードが欲しい機能である場合：ワークフロー内でPythonまたはJavaScriptによる小さなデータ変換を行いたい。',
				'自チーム向けに社内で1つのデプロイを運用しており、マルチテナントというライセンス条件が該当しない場合。',
			],
			betterEddiTitle: 'EDDIが適している場面',
			betterEddi: [
				'法務チームが、1つのデプロイから多数のテナントや顧客にサービスを提供する場合も含めて、素のApache 2.0ライセンスを必要とする場合。',
				'セキュリティレビューが、サンドボックス化されているかどうかにかかわらず、自動化プラットフォーム内でのコード実行を禁じている場合。',
				'特定のツール呼び出しやグループのフェーズに人間の判断が必要で、署名付き台帳に記録する場合。',
				'エージェントの挙動を、設定としてバージョン管理し、差分を確認し、環境間で昇格する必要がある場合。',
				'Kubernetes、OpenShift、またはローカルモデルを使ったエアギャップ環境でのデプロイが必要な場合。',
			],
			migrationTitle: 'Dify からのアプリの移行',
			migrationIntro:
				'Difyのアプリはビジュアルなグラフで、EDDIのエージェントは設定であるため、インポートではなく変換になります。最も検討が必要なのはCodeノードで、これは設定または宣言したツールに置き換わります。',
			migrationSteps: [
				{ from: 'チャットフローまたはワークフロー', to: 'EDDIエージェント：パイプラインとBehavior Rules' },
				{ from: 'LLMノードとプロンプト', to: 'システムメッセージと、バージョン管理されたプロンプトスニペットを持つLLMタスク' },
				{ from: 'ナレッジベース', to: '埋め込みプロバイダーとベクトルストアを持つEDDIのRAGナレッジベース' },
				{ from: 'ツール、プラグイン、またはMCPサーバー', to: 'MCPクライアント接続、httpCall、またはOpenAPIからインポートしたAPI' },
				{ from: 'Code node', to: 'Behavior Rulesとプロンプトのロジック。実際のコードが必要ならMCPツール' },
				{ from: 'Human Input node', to: 'PAUSE_CONVERSATIONルールまたはtoolApprovals。タイムアウトポリシー付き' },
				{ from: 'プロバイダーのAPIキー', to: 'Secrets Vaultのエントリ。${vault:key}として参照' },
			],
			faq: [
				{
					question: 'Difyはオープンソースですか？',
					answer:
						'Difyはソースを、Apache 2.0に追加条件を加えたDify Open Source Licenseの下で公開しています。書面による許可なくソースを使ってマルチテナント環境を運用することはできず、フロントエンドからロゴや著作権情報を削除することもできません。これはEDDIが採用している素のApache 2.0ではないため、どちらかの条件が該当しうる場合は、法務チームと一緒にお読みください。',
				},
				{
					question: 'EDDIにはDifyのようなビジュアルビルダーがありますか？',
					answer:
						'EDDI Managerは、エージェントの構築、デプロイ、監視のための本番品質のReact UIで、11言語に対応しています。ノードキャンバスではなく管理インターフェースです。エージェント、プロンプト、ツール、パイプラインを設定し、すべての変更は図ではなくバージョン管理されたリソースになります。',
				},
				{
					question: 'EDDIがコードノードを避けるのはなぜですか？',
					answer:
						'サンドボックス化されたコードノードは妥当な機能であり、Difyもアクセスできる範囲を制限しています。しかし、プラットフォーム内でのあらゆるコード実行は、セキュリティレビューで検討すべき攻撃対象領域です。EDDIはエージェントの挙動を宣言的に保つため、ツールにできることは、宣言して承認したことだけになります。',
				},
				{
					question: 'DifyとEDDIを併用できますか？',
					answer:
						'はい。DifyはMCPサーバーとカスタムAPIを利用でき、EDDIはMCPサーバーとREST APIを公開しているため、DifyのワークフローからEDDIのエージェントを、ガバナンスの効いたステップとして呼び出せます。EDDIはhttpCall経由でDify APIを呼び出せます。',
				},
			],
		},

		// ─── n8n ──────────────────────────────────────────────────────
		'eddi-vs-n8n': {
			title: 'EDDI vs. n8n',
			description:
				'AIエージェントのオーケストレーションにおけるEDDIとn8nの比較：ランタイムと並行処理のモデル、コード実行とセキュリティ態勢、ライセンス、ガバナンス、そしてn8nが引き続き適したツールとなる場面。',
			summary: 'ワークフロー自動化プラットフォーム、対、AIオーケストレーションミドルウェア。',
			verdict:
				'SaaSシステムの接続とビジネスプロセスの自動化が目的で、AIはより大きなワークフローの中の1ステップにすぎない場合は、<strong>n8nを選びましょう</strong>。AIエージェント<em>そのもの</em>が製品であり、エンタープライズのセキュリティレビューを通過する必要がある場合、つまり規制対象データ、監査義務、テナントごとの分離、エージェントに許可する操作への承認ゲートが求められる場合は、<strong>EDDIを選びましょう</strong>。',
			whatItIsTitle: 'n8n とは',
			whatItIs:
				'n8nは、Node.js上に構築されたワークフロー自動化プラットフォームで、ビジュアルキャンバスと数百の既成の連携を備えます。セルフホストが可能で、大規模かつ本当に活発なコミュニティがあり、LangChainベースのノードを使うと、あらゆるワークフローにLLM呼び出しを組み込めます。システム同士をつなぐ最速の手段の1つです。',
			archetypeTitle: 'カテゴリは異なるが、ユースケースは重なる',
			archetype:
				'これらのツールは同じタイプではありません。n8nは<strong>ワークフロー自動化プラットフォーム</strong>で、AIは数あるノードタイプの1つです。EDDIは<strong>AIオーケストレーションミドルウェア</strong>で、エージェント、そのメモリ、ツール、ガバナンスが製品です。重なりは実際にあり、n8nでエージェントを構築するチームもいますが、エージェントが規制対象データを扱うようになると、両者は正反対のトレードオフを取ります。',
			tableTitle: 'アーキテクチャとガバナンス',
			tableHeaders: { dimension: '観点', them: 'n8n', eddi: 'EDDI' },
			rows: [
				{ dimension: 'ランタイム', them: 'Node.jsのシングルスレッドのイベントループ', eddi: '仮想スレッド（Project Loom）を使うJVM。I/OバウンドなLLM呼び出しに対する真の並列性' },
				{ dimension: 'カスタムロジック', them: 'Codeノードが実行時にJavaScriptまたはPythonを実行', eddi: '実行時のコード評価はゼロ。エージェントの挙動は宣言的なJSONのみ' },
				{ dimension: 'ライセンス', them: 'Sustainable Use License（フェアコード）。OSI承認ではなく、一部の商用利用には別途条件がある', eddi: EDDI_LICENSE },
				{ dimension: '連携の幅', them: '数百の既成のSaaSコネクタ。最大の強み', eddi: `${MCP_TOOLS}のMCPツールに加え、httpCall経由で任意のOpenAPIまたはRESTエンドポイント` },
				{ dimension: '認証', them: '組み込みのユーザー管理。SSOは有料ティア', eddi: 'オープンソース版で、オプションのKeycloak/OIDCと、eddi-adminおよびeddi-approverロール' },
				{ dimension: '監査証跡', them: '実行履歴とアプリケーションログ', eddi: 'HMAC署名付き、追記専用、連番検証付きの監査台帳' },
				{ dimension: '人間による承認', them: 'ワークフロー内のWaitノードと手動トリガー', eddi: 'ターン単位の一時停止、ツール呼び出しごとの承認、タイムアウトポリシー、Slackでの承認。すべて記録される' },
				{ dimension: 'コンプライアンス態勢', them: 'デプロイごとに実装', eddi: `GDPR、HIPAA、EU AI Actの基盤を組み込み済み。${FRAMEWORKS}のフレームワークに対応` },
			],
			betterThemTitle: 'n8n が適している場面',
			betterThem: [
				'ワークロードがAIではなく一般的な業務の自動化である場合：CRMの同期、ファイルの移動、Webhookへの反応。',
				'エージェントのガバナンスの深さよりも、SaaSコネクタの幅が必要な場合。ここではn8nが圧倒的に優れています。',
				'非エンジニアのチームがワークフローを所有し、それを把握するためにビジュアルキャンバスが必要な場合。',
				'今日の午後には動かしたく、扱うデータが規制対象ではない場合。',
			],
			betterEddiTitle: 'EDDIが適している場面',
			betterEddi: [
				'エージェントが規制対象データに触れ、セキュリティレビューで推論時にどのようなコードが実行されるかを問われる場合。EDDIの答えは「なし」です。',
				'1つのデプロイ上で、多数の顧客にまたがるテナントごとの分離、クォータ、コストの帰属が必要な場合。',
				'個々のツール呼び出しを実行前に人間が承認する必要があり、その承認を署名付き台帳に記録する場合。',
				'エージェントの挙動を、設定としてバージョン管理し、差分を確認し、環境間で昇格する必要がある場合。',
				`再配布やエアギャップ環境でのデプロイに向けて、ライセンスが明確である必要がある場合：${EDDI_LICENSE}。`,
			],
			migrationTitle: 'n8n からのワークフローの移行',
			migrationIntro:
				'エージェント型のn8nワークフローの多くは、きれいに対応づけられます。対応づけられないのは通常Codeノードで、それがまさに要点です。Codeノードが行っていたことは、設定か、宣言したツールのどちらかに置き換える必要があります。',
			migrationSteps: [
				{ from: 'ワークフロー', to: 'EDDIパッケージ：パイプライン、プロンプト、ツールバインディングをまとめたバージョン管理されたバンドル' },
				{ from: 'HTTP Request node', to: 'httpCallツール定義。SSRF対策とパストラバーサル防御を適用' },
				{ from: 'Code node', to: 'Behavior Rulesとプロンプトスニペット。実際のロジックが必要ならMCPツール' },
				{ from: '認証情報ストア', to: 'EDDI Secrets Vault（AES-256-GCM）。Vaultのキーで参照' },
				{ from: 'AI Agent node', to: '永続メモリ、インテントルーティング、モデルカスケードを備えたEDDIエージェント' },
				{ from: 'Waitまたは手動トリガー', to: 'タイムアウトポリシー付きのヒューマン・イン・ザ・ループの承認ゲート' },
			],
			migrationGuideLabel: '完全ガイド：AIワークフローをn8nからEDDIへ移行する',
			faq: [
				{
					question: 'EDDIはn8nをそのまま置き換えられますか？',
					answer:
						'いいえ。そして、そうなることを目指してもいません。n8nは、数百のSaaSツールにまたがる一般的なワークフロー自動化をカバーします。EDDIは、エンタープライズのガバナンスを備えたAIエージェントのオーケストレーションをカバーします。多くのチームは両方を運用しています。業務プロセスの配線にn8n、監査証跡と承認ゲートが必要なエージェントにEDDIです。',
				},
				{
					question: 'EDDIからn8nを、またはその逆を呼び出せますか？',
					answer:
						'どちらも可能です。EDDIはMCPサーバーとREST APIを公開しているため、n8nのワークフローからEDDIのエージェントをステップとして呼び出せます。EDDIはhttpCallツール経由でn8nのWebhookを呼び出せます。それぞれの得意分野に使うのは、妥当なアーキテクチャです。',
				},
				{
					question: '実行時のコード実行がそれほど重要なのはなぜですか？',
					answer:
						'Codeノードは、自動化プラットフォームの内部で動く任意のコードです。便利ですが、同時に脆弱性のクラス全体の入口でもあります。サンドボックスからの脱出、信頼できない入力を通じたインジェクション、権限昇格は、すべてそこから始まります。EDDIは実行時のコード評価を例外なく禁止しているため、エージェントの挙動は、出荷前にレビュー、差分確認、承認ができるJSON設定になります。',
				},
				{
					question: 'n8nはオープンソースですか？',
					answer:
						'n8nはフェアコードで、Sustainable Use Licenseの下で配布されています。ソースは利用可能で、社内利用でのセルフホストは許可されていますが、OSI承認のオープンソースライセンスではなく、一部の商用利用には別途条件が必要です。EDDIはApache 2.0です。再配布について法務チームが明確な答えを必要とする場合、この違いは重要です。',
				},
			],
		},

		// ─── Flowise ──────────────────────────────────────────────────
		'eddi-vs-flowise': {
			title: 'EDDI vs. Flowise',
			description:
				'LLMエージェントの構築と運用におけるEDDIとFlowiseの比較：プロトタイピングの速さと本番のガバナンス、RAGアーキテクチャ、マルチテナンシー、そしてFlowiseが適したツールとなる場面。',
			summary: 'プロトタイプの速度、対、本番の運用面。',
			verdict:
				'動作するRAGチャットボットを今週中にステークホルダーに見せたい場合は、<strong>Flowiseを選びましょう</strong>。そのプロトタイプを、複数のチームが運用し、コンプライアンス担当者が承認し、顧客が頼るシステムにする必要がある場合は、<strong>EDDIを選びましょう</strong>。',
			whatItIsTitle: 'Flowise とは',
			whatItIs:
				'Flowiseは、Node.jsとReactで構築され、LangChainとLlamaIndexをラップした、Apache 2.0ライセンスのLLMアプリケーション向けビジュアルビルダーです。ローダー、スプリッター、埋め込みモデル、ベクトルストア、チェーンといったノードをドラッグして、チャットフローを組み立てます。何もない状態から動作する検索チャットボットまでたどり着く速さでは、これに勝るものはほとんどありません。',
			archetypeTitle: 'プロトタイプの速度と運用面',
			archetype:
				'FlowiseとEDDIは、プロジェクトの異なる段階を狙っています。Flowiseは最初の1週間に最適化されています：ビジュアルな組み立て、即時のフィードバック、よくあるパターンの多くに対応するテンプレート。EDDIはその後のすべてに最適化されています：誰がエージェントを変更できるか、何が許可されるか、再起動したときに何が起こるか、そしてそれらを監査人にどう証明するか。多くのチームは、実際にFlowiseから始めるべきです。',
			tableTitle: 'プロトタイプから本番へ',
			tableHeaders: { dimension: '観点', them: 'Flowise', eddi: 'EDDI' },
			rows: [
				{ dimension: '主要な抽象化', them: 'ビジュアルなチャットフローのキャンバス。ノードグラフをJSONにシリアライズ', eddi: 'Config-as-Code：UIまたはAPIで作成するJSONリソース。ソースコードのようにバージョン管理' },
				{ dimension: 'ランタイム', them: 'Node.jsのイベントループ', eddi: '仮想スレッドを使うJVM。多数の同時並行でI/Oバウンドな会話向けに構築' },
				{ dimension: 'ライセンス', them: 'Apache 2.0。EDDIと同じ', eddi: EDDI_LICENSE },
				{ dimension: 'RAG', them: '幅広いローダーとベクトルストアの選択肢。フローごとに設定', eddi: `${EMBEDDING_PROVIDERS}の埋め込みプロバイダー、${VECTOR_STORES}のベクトルストア、およびインフラ不要のhttpCall RAG` },
				{ dimension: 'カスタムロジック', them: 'Custom FunctionノードとToolノードが実行時にJavaScriptを実行', eddi: '実行時のコード評価はゼロ。ロジックは実行されるのではなく、宣言される' },
				{ dimension: 'マルチテナンシー', them: 'エンタープライズ版のワークスペース', eddi: 'オープンソース版で、テナントごとのクォータ、コストの帰属、データ分離' },
				{ dimension: 'メモリ', them: '会話バッファと外部ストアとの連携', eddi: '永続的なユーザーメモリ、ドリーム統合、ローリング要約、トークンを考慮したウィンドウ処理' },
				{ dimension: '監査証跡', them: '実行トレース。デバッグが目的', eddi: 'HMAC署名付き、追記専用の台帳。証拠が目的' },
				{ dimension: 'デプロイ', them: 'Docker。通常は単一インスタンス', eddi: 'Docker、Helm、Kustomize、OpenShift（Red Hat認定イメージ、OperatorHub経由のOperator）' },
			],
			betterThemTitle: 'Flowise が適している場面',
			betterThem: [
				'アイデアがそもそも機能するかを検証している場合。探索には、設定の記述よりビジュアルな組み立てのほうが優れています。',
				'チームが図で考え、検索パイプラインを空間的に並べて見たい場合。',
				'1つのチーム向けの社内ツールで、テナンシー、監査、承認の要件がない場合。',
				'昼食前に5つの検索戦略を試したい場合。',
			],
			betterEddiTitle: 'EDDIが適している場面',
			betterEddi: [
				'チャットボットが製品になり、SLA、テナンシー、変更に責任を持つ担当者が必要になった場合。',
				'プロンプトエンジニアが再デプロイなしで反復でき、出荷内容の管理は運用担当者が握る必要がある場合。',
				'会話が再起動をまたいで保持され、数か月後に規制当局向けに再構成できる必要がある場合。',
				'エージェントが実行する前に、特定のツール呼び出しを人間が承認する必要がある場合。',
				`デプロイ先がKubernetesまたはエアギャップのインフラで、再現性を証明できる必要がある場合。マージのたびに${TESTS}のテストが実行されます。`,
			],
			migrationTitle: 'Flowise からのチャットフローの移行',
			migrationIntro:
				'FlowiseのチャットフローはすでにJSONであり、概念も近いため、通常は移行の中で最も機械的な作業になります。',
			migrationSteps: [
				{ from: 'チャットフロー', to: 'EDDIパッケージ。シークレットを自動的に除去したZIPとしてエクスポート可能' },
				{ from: 'ドキュメントローダーとスプリッター', to: 'EDDIのRAGドキュメント取り込み設定' },
				{ from: 'ベクトルストアノード', to: `サポートされる${VECTOR_STORES}のベクトルストアのうちの1つ。設定で選択` },
				{ from: '埋め込みノード', to: `${EMBEDDING_PROVIDERS}の埋め込みプロバイダーのうちの1つ` },
				{ from: 'チャットモデルノード', to: `${LLM_PROVIDERS}のプロバイダーにまたがるLLM設定。モデルカスケードも利用可能` },
				{ from: 'Custom Functionノード', to: 'Behavior Rules、プロンプトスニペット、または宣言したMCPツール' },
				{ from: 'メモリノード', to: 'コミットフラグ型のメモリポリシーを持つEDDIの永続メモリ' },
			],
			migrationGuideLabel: '完全ガイド：チャットフローをFlowiseからEDDIへ移行する',
			faq: [
				{
					question: 'Flowiseでプロトタイプを作り、その後EDDIに移行すべきですか？',
					answer:
						'それは筋の通った、よくある進め方です。Flowiseは、検索戦略が機能するかどうかに答えます。EDDIは、それを3年間安全に運用できるかどうかに答えます。プロトタイプに本番ユーザーが付く前に移行を計画してください。移行そのものは、ダウンタイムをめぐる話し合いよりも簡単です。',
				},
				{
					question: 'どちらもApache 2.0です。実際には何が違うのですか？',
					answer:
						'ライセンスは同じですが、運用面は同じではありません。EDDIは、オプションのOIDC/Keycloak、署名付き監査台帳、テナントごとのクォータ、ヒューマン・イン・ザ・ループの承認ゲートを、エンタープライズティアの背後ではなくオープンソース版に同梱しています。',
				},
				{
					question: 'EDDIにはビジュアルビルダーがありますか？',
					answer:
						'EDDI Managerは、エージェントの構築、デプロイ、監視のための本番品質のReact UIで、11言語に対応しています。ノードキャンバスではなく管理インターフェースです。エージェント、プロンプト、ツール、パイプラインを設定し、すべての変更は図ではなくバージョン管理されたリソースになります。',
				},
			],
		},

		// ─── Rasa ─────────────────────────────────────────────────────
		'eddi-vs-rasa': {
			title: 'EDDI vs. Rasa',
			description:
				'会話型AIにおけるEDDIとRasaの比較：学習済みNLUと決定論的な対話、対、LLMオーケストレーション。Config-as-Code、マルチエージェントの協調、そしてRasaが適している場面。',
			summary: '学習済みNLUと決定論的な対話、対、Config-as-CodeによるLLMオーケストレーション。',
			verdict:
				'固定のインテントセットに対して厳密に制御された対話が必要で、ラベル付きの学習データがあり、それを担当するPythonのMLチームがいる場合は、<strong>Rasaを選びましょう</strong>。アシスタントが、再学習のサイクルより速く変わる知識を基に推論し、エンタープライズのシステムを呼び出し、再学習ではなく設定によって統制される必要がある場合は、<strong>EDDIを選びましょう</strong>。',
			whatItIsTitle: 'Rasa とは',
			whatItIs:
				'Rasaは成熟した会話型AIフレームワークで、学習済みのNLUパイプラインによるインテント分類とエンティティ抽出と、ルール、ストーリー、ポリシーによる対話管理を備えます。Pythonネイティブでセルフホストが可能であり、大量処理のシナリオ型カスタマーサービスアシスタントの定番として長年使われてきました。Rasa Proは、LLM駆動の対話を含む商用ティアを追加します。',
			archetypeTitle: '共通の課題、異なる世代の解決策',
			archetype:
				'EDDIとRasaはどちらも会話型AIの世界から生まれており、EDDIは2006年から会話型プラットフォームとして継続的に開発されてきました。違いは、知性がどこにあるかです。Rasaは、自社のラベル付きデータで学習するモデルに知性を置き、正確で再現可能な制御を実現します。EDDIは、宣言的な設定で統制されたオーケストレーション済みのLLMに知性を置き、ある程度の決定性と引き換えに、対応範囲と変更の速さを得ます。',
			tableTitle: '対話、ツール、変更のコスト',
			tableHeaders: { dimension: '観点', them: 'Rasa', eddi: 'EDDI' },
			rows: [
				{ dimension: '理解', them: '学習済みNLU：ラベル付きデータからのインテント分類とエンティティ抽出', eddi: 'LLMによる理解と、インテントベースのエージェント検出およびルーティング' },
				{ dimension: '挙動の変更', them: '学習データを更新し、再学習し、評価し、再デプロイする', eddi: 'JSON設定を編集。再学習も再デプロイも不要' },
				{ dimension: '決定性', them: '高い。ルールとポリシーによりフローが再現可能でテスト可能', eddi: '性質上は低い。Behavior Rulesと承認ゲートで補う' },
				{ dimension: '言語', them: 'Python。カスタムアクションはPythonコード', eddi: 'JVMランタイム。エージェントのロジックは設定で、ツールは宣言する' },
				{ dimension: 'ツールのエコシステム', them: '自分で構築してホストするカスタムアクションサーバー', eddi: `${MCP_TOOLS}のMCPツール、組み込みのエージェントツール、および任意のOpenAPIエンドポイント` },
				{ dimension: 'マルチエージェント', them: 'デプロイごとに1つのアシスタントが一般的なパターン', eddi: 'コーディネーターベースのオーケストレーションと、7つのグループディスカッションスタイル' },
				{ dimension: 'ライセンス', them: 'コミュニティ版と、商用ライセンスのRasa Proティア。最新の条件は要確認', eddi: EDDI_LICENSE },
				{ dimension: 'コンプライアンス', them: 'セルフホストでデータ所在地に対応。フレームワークはデプロイごとに実装', eddi: `監査台帳、データ主体の権利API、${FRAMEWORKS}のフレームワークにプラットフォームで対応` },
			],
			betterThemTitle: 'Rasa が適している場面',
			betterThem: [
				'ラベル付きの会話データがすでにあり、NLUパイプラインを保守できるMLチームがいる場合。',
				'規制またはブランド上の制約により、言語モデルが関与しない、監査可能な判断経路を持つ決定論的なアシスタントが必要な場合。',
				'対象のインテントが限られた非常に大量の処理で、ターンごとのLLMコストが支配的になる場合。',
				'分類の信頼度しきい値とフォールバックの挙動を、きめ細かく制御する必要がある場合。',
			],
			betterEddiTitle: 'EDDIが適している場面',
			betterEddi: [
				'アシスタントが、再学習のサイクルより速く変わるドキュメントやシステムを基に回答する必要がある場合。',
				'ビジネスユーザーが、MLエンジニア、学習の実行、デプロイなしで挙動を変更する必要がある場合。',
				'1つのフラットなインテントツリーではなく、複数の専門エージェントが協調する必要がある課題の場合。',
				'LLMの柔軟性は欲しいが、本番稼働の前にコンプライアンス担当者が承認ゲートと署名付きログを求める場合。',
				`モデル層でのロックインを避けたい場合：${LLM_PROVIDERS}のプロバイダー、またはOllamaやJlama経由のローカルモデル。`,
			],
			migrationTitle: 'Rasa からのアシスタントの移行',
			migrationIntro:
				'両者は知性を置く場所が異なるため、対応づけは機械的ではなく概念的です。ファイルを変換するのではなく、インテントの構造をルーティングとプロンプトに置き換えることになります。',
			migrationSteps: [
				{ from: 'インテントと学習例', to: 'インテントベースのエージェント検出。ラベル付きデータは学習の入力ではなく評価用の素材になる' },
				{ from: 'エンティティとスロット', to: '構造化された抽出と永続的なユーザーメモリ' },
				{ from: 'ストーリーとルール', to: 'Behavior Rulesとパイプライン設定' },
				{ from: 'カスタムアクションサーバー', to: 'MCPツールまたはhttpCallツール定義' },
				{ from: 'レスポンスとドメインファイル', to: '再利用可能でバージョン管理されたプロンプトスニペット' },
				{ from: 'フォールバックポリシー', to: 'タイムアウトポリシー付きのヒューマン・イン・ザ・ループによるエスカレーション' },
			],
			faq: [
				{
					question: 'EDDIは、学習済みNLUを置き換えるだけの、もう一つのLLMラッパーですか？',
					answer:
						'EDDIは2006年から会話型プラットフォームとして開発されてきました。現在のLLMの世代よりずっと前のことで、重要な部分は維持されています：インテントベースのルーティング、管理された会話状態、パイプラインアーキテクチャです。LLMが置き換えたのは理解の層であり、その周りのオーケストレーションではありません。',
				},
				{
					question: 'コンプライアンスのために決定論的な回答が必要です。それはEDDIの除外理由になりますか？',
					answer:
						'必ずしもそうではありませんが、トレードオフは明示すべきです。LLMの出力は決定論的ではありません。EDDIは、応答を制約するBehavior Rules、重大なアクションに対する人間の承認ゲート、何がなぜ決定されたかを記録する署名付き監査台帳でこれに対処します。判断に言語モデルが一切関与しないことが要件であれば、Rasaのほうが適した答えです。',
				},
				{
					question: '移行期間中に両方を稼働させられますか？',
					answer:
						'はい。よくあるパターンは、既知の大量処理のインテントを既存のRasaアシスタントにルーティングし、自由形式の問い合わせとシステム連携をEDDIが処理して、確信が高まるにつれてトラフィックを移していく方法です。EDDIはhttpCall経由でRasaのエンドポイントを呼び出せます。',
				},
			],
		},
	},
};

export default copy;
