import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'src', 'i18n', 'locales');

const translated = `\tcompliance: {
			title: 'グローバルプライバシーと規制コンプライアンス',
			description:
				'EDDIは、GDPR、CCPA、EU AI Act、HIPAA、PIPEDA、LGPD、APPI、POPIA、PDPAおよびその他6つのフレームワークに対する組み込みコンプライアンスを提供します。カスケードデータ削除、暗号化監査追跡、統一APIを備えています。',
			heading1: 'アーキテクチャによるコンプライアンス',
			para1: '規制対象業界は、AI システムに事後的にコンプライアンスを追加することはできません。EDDIは、<strong>グローバルな規制コンプライアンスのための技術基盤</strong>をプラットフォームアーキテクチャに直接組み込んでいます。不変の監査追跡、カスケードデータ削除、処理制限、暗号化整合性、ロールベースのアクセス制御はコア機能であり、アドオンではありません。統一APIがすべての管轄区域のデータ主体の権利をカバーします。',
			aiGovHeading: 'AIガバナンスフレームワーク',
			aiGovIntro: '世界中の政府がAI固有の法律を導入する中、組織は初日から<strong>透明性、トレーサビリティ、人間による監視</strong>を提供するプラットフォームを必要としています。EDDIのアーキテクチャは、主要なAIガバナンスフレームワークの中核的な技術要件に対応しています。',
			euAiActHeading: 'EU AI Act — 欧州連合',
			euAiActPara: 'EU AI Act（規則2024/1689）は世界初の包括的AI法であり、AIシステムにリスクベースの要件を確立しています。EDDIは高リスクAIシステム要件へのコンプライアンスのための<strong>技術基盤</strong>を提供します：',
			euAiActItems: [
				'<strong>不変の監査追跡</strong> — すべての操作がHMAC-SHA256暗号化整合性で記録されます（第12条 — 記録保持）',
				'<strong>意思決定の透明性</strong> — 完全なパイプライントレースがAI決定の方法を示します（第13条 — 透明性）',
				'<strong>人間による監視</strong> — 管理UIが人間によるレビュー、介入、緊急停止を可能にします（第14条 — 人間による監視）',
				'<strong>リスク分類</strong> — アーキテクチャが構成可能な制御で高リスクAIシステム要件をサポート（第9条 — リスク管理）',
				'<strong>再現性</strong> — Configuration-as-codeが規制監査のためのAI動作の正確な再現を可能にします（第17条 — 品質管理）',
				'<strong>データガバナンス</strong> — OIDC/Keycloak RBAC、Vaultベースの秘密管理、入出力ログ（第10条 — データガバナンス）',
			],
			nistHeading: 'NIST AIリスク管理フレームワーク — 米国',
			nistPara: 'NIST AI RMF（AI 100-1）は、4つの機能を通じてAIリスクを管理する自主的なフレームワークを提供します。EDDIのアーキテクチャはNIST AI RMF整合を追求する組織を支援する技術的能力を提供します：',
			nistItems: [
				'<strong>Govern</strong> — RBACロール（eddi-admin、eddi-editor、eddi-viewer）、不変の監査台帳、文書化されたデータフロー',
				'<strong>Map</strong> — パイプライントレースと会話ログが包括的なAIリスク特定と文書化を可能に',
				'<strong>Measure</strong> — Prometheusメトリクス、トークン/コスト追跡、エージェントごとの使用分析',
				'<strong>Manage</strong> — 処理制限API、管理UIによる人間の監視、構成可能な保持ポリシー',
			],
			isoHeading: 'ISO/IEC 42001 — AI管理システム',
			isoPara: 'ISO/IEC 42001:2023はAI管理システム（AIMS）の要件を確立しています。EDDIはISO 42001認証を追求する組織を支援する技術的能力を提供します：',
			isoItems: [
				'<strong>文書化されたAIポリシー</strong> — Configuration-as-codeにより、すべてのエージェント動作が監査可能なJSONで定義されます',
				'<strong>リスク評価</strong> — 監査追跡がリスク評価と影響分析のための完全な意思決定履歴を記録',
				'<strong>運用制御</strong> — RBAC、Vaultベースの秘密管理、処理制限が運用ガバナンスを提供',
				'<strong>パフォーマンス監視</strong> — Prometheusメトリクス、Grafanaダッシュボード、CQRSテレメトリが継続的なAIパフォーマンス評価を可能に',
			],
			privacyHeading: 'データプライバシー規制',
			privacyIntro: 'EDDIは、世界のすべての主要なプライバシー規制の技術要件を満たす<strong>統一されたデータ主体の権利エンドポイント</strong>を提供します。1つのAPIがカスケード削除、完全なデータエクスポート、処理制限をカバーします。',
			gdprHeading: 'GDPR — EU / EEA',
			gdprPara: '一般データ保護規則（EU 2016/679）はデータプライバシーのゴールドスタンダードです。EDDIはGDPRデータ主体の権利を、5つのデータストアにわたるカスケード操作に支えられた<strong>ファーストクラスのAPIエンドポイント</strong>として実装します：',
			gdprItems: [
				'<strong>消去権（第17条）</strong> — <code>DELETE /admin/gdpr/{userId}</code>がユーザーメモリ、会話、管理された会話マッピング、データベースログ（SHA-256仮名化）、監査台帳（SHA-256仮名化）にわたってカスケード',
				'<strong>アクセス権/ポータビリティ（第15/20条）</strong> — <code>GET /admin/gdpr/{userId}/export</code>がすべてのユーザーデータを構造化された機械可読JSONとして返します',
				'<strong>制限権（第18条）</strong> — <code>POST /admin/gdpr/{userId}/restrict</code>がデータを保持しながら処理を凍結し、新しい会話とメッセージ処理をブロック',
				'<strong>PII安全ログ</strong> — GDPR操作はSHA-256仮名を記録し、生のユーザーIDは決して記録しません',
				'<strong>構成可能な保持</strong> — カテゴリごとの保持ポリシー：会話（デフォルト365日）、ユーザーメモリ（手動）、監査エントリ（EU AI Act用に無期限）',
				'<strong>MCPツール</strong> — <code>delete_user_data</code>と<code>export_user_data</code>がAIオーケストレーションのコンプライアンスワークフローを可能に',
			],
			ccpaHeading: 'CCPA / CPRA — 米国カリフォルニア州',
			ccpaPara: 'カリフォルニア消費者プライバシー法とカリフォルニアプライバシー権法は消費者に知る権利、削除する権利、データ販売からのオプトアウト権を付与します。EDDIはGDPR互換APIを通じてCCPAの技術要件を満たします：',
			ccpaItems: [
				'<strong>知る権利（§1798.100）</strong> — GDPRエクスポートエンドポイントが構造化された機械可読形式ですべての個人情報を提供',
				'<strong>削除する権利（§1798.105）</strong> — GDPR消去エンドポイントがすべてのデータストアにわたるカスケード削除を提供',
				'<strong>販売禁止（§1798.120）</strong> — EDDIはアーキテクチャ上個人情報を販売できません — デプロイヤーに代わってのみデータを処理するミドルウェアインフラストラクチャです',
			],
			pipedaHeading: 'PIPEDA — カナダ',
			pipedaPara: 'カナダの個人情報保護および電子文書法（2000年、2023年改正）は10の公正情報原則を通じて商業データ処理を規制します：',
			pipedaItems: [
				'<strong>説明責任</strong> — 不変のHMAC署名監査台帳がすべての操作を追跡',
				'<strong>収集制限</strong> — トークン対応のウィンドウイングがLLMに送信されるデータを制限；構成可能な保持が古い会話を自動削除',
				'<strong>使用/開示制限</strong> — データは構成されたエージェントインタラクションにのみ使用；監査追跡がすべてのLLM呼び出しを記録',
				'<strong>セーフガード</strong> — AES-256-GCMエンベロープ暗号化（Secrets Vault）、HMAC-SHA256監査整合性、Keycloak OIDC、RBAC',
				'<strong>個人アクセス</strong> — REST APIによる完全なデータエクスポートがすべてのメモリ、会話、マッピングをJSONとして返します',
				'<strong>コンプライアンスへの異議</strong> — 5つのデータストアにわたるカスケード削除；監査追跡は法的保持義務のため仮名化（削除ではなく）',
			],
			lgpdHeading: 'LGPD — ブラジル',
			lgpdPara: 'ブラジルの一般データ保護法（2018年、2020年施行）はGDPRに近い広範なデータ主体の権利を付与します。EDDIは第18条のすべての権利を内蔵の技術的能力でカバーします：',
			lgpdItems: [
				'<strong>データアクセス（第18条II）</strong> — 完全なJSONデータエクスポート',
				'<strong>修正（第18条III）</strong> — ユーザーメモリは<code>PUT /usermemorystore/memories</code>で更新可能',
				'<strong>匿名化/削除（第18条IV）</strong> — 監査記録のSHA-256仮名化を伴うカスケード削除',
				'<strong>データポータビリティ（第18条V）</strong> — 機械可読JSONエクスポートにすべてのユーザーデータを含む',
				'<strong>不要なデータの削除（第18条VI）</strong> — 自動クリーンアップ付きの構成可能な保持ポリシー',
				'<strong>同意の撤回（第18条IX）</strong> — 会話終了とカスケード削除エンドポイントが技術的メカニズムを提供',
			],
			appiHeading: 'APPI — 日本',
			appiPara: '日本の個人情報保護法（2003年、2022年大幅改正）はアジアで最も成熟したデータ保護法の1つです。日本はEUの十分性認定を保持しています。EDDIは以下を提供します：',
			appiItems: [
				'<strong>安全管理措置（第23条）</strong> — AES-256-GCM Vault暗号化、HMAC-SHA256監査整合性、Keycloak OIDC、RBAC、SSRF保護',
				'<strong>本人への開示（第33条）</strong> — REST APIによる完全なデータエクスポート',
				'<strong>訂正および削除（第34-35条）</strong> — 訂正のためのメモリ更新；消去のためのカスケード削除',
				'<strong>仮名加工情報（2022年改正）</strong> — GDPR消去はSHA-256仮名化を使用し、APPIの仮名加工情報カテゴリを満たす',
				'<strong>越境移転の記録（第28条）</strong> — LLMプロバイダーのデータフローが文書化；監査追跡がどのモデル/プロバイダーが各ターンを処理したかを記録',
			],
			popiaHeading: 'POPIA — 南アフリカ',
			popiaPara: '南アフリカの個人情報保護法（2013年、2021年施行）はEU基準に合致した8つのデータ処理条件を確立します。EDDIは各条件に対して内蔵の技術的能力を提供します：',
			popiaItems: [
				'<strong>説明責任（条件1）</strong> — HMAC署名監査台帳、文書化されたデータフロー、Apache 2.0オープンソースコード',
				'<strong>処理制限（条件2）</strong> — トークン対応のウィンドウイング、構成可能な保持、アイドル会話の自動終了',
				'<strong>情報品質（条件5）</strong> — タイムスタンプ付きバージョン管理された会話状態；REST APIで更新可能なユーザーメモリ',
				'<strong>セキュリティセーフガード（条件7）</strong> — AES-256-GCM暗号化、HMAC整合性、Keycloak OIDC、RBAC、SSRF保護',
				'<strong>データ主体の参加（条件8）</strong> — 完全なデータエクスポートとカスケード削除エンドポイント',
			],
			pdpaHeading: 'PDPA — シンガポール＆タイ',
			pdpaPara: 'シンガポール（2012年、2021年改正）およびタイ（2019年、2022年施行）の個人データ保護法は東南アジアで最も成熟したプライバシーフレームワークです。EDDIは両管轄区域の技術的義務をカバーします：',
			pdpaItems: [
				'<strong>アクセス義務</strong> — REST APIとMCPツールによる完全なデータエクスポート',
				'<strong>修正義務</strong> — REST APIで更新可能なユーザーメモリ',
				'<strong>保護義務</strong> — AES-256-GCM暗号化、HMAC監査整合性、Keycloak OIDC、RBAC',
				'<strong>保持制限</strong> — アイドル会話タイムアウト付きの構成可能な自動クリーンアップ',
				'<strong>データ侵害通知</strong> — EDDIドキュメントにインシデント対応ランブックテンプレートを含む',
			],
			otherRegionsHeading: '追加の管轄区域',
			otherRegionsPara: 'EDDIのデータ保護インフラストラクチャは国際基準を満たします。以下の管轄区域も同じ統一APIを通じてサポートされます：',
			otherRegionsItems: [
				'<strong>UK GDPR</strong>（英国）— EU GDPRを実質的に反映。EDDIのGDPRエンドポイントはすべてのUK GDPRデータ主体の権利を満たします。ICO監督。',
				'<strong>PIPA</strong>（韓国）— 厳格な同意要件、義務的DPO、72時間侵害通知。EDDIは技術的な監査と消去インフラストラクチャを提供。',
				'<strong>DPDPA</strong>（インド、2023年）— 同意ベースのフレームワーク、越境制限あり。EDDIのエクスポートと消去エンドポイントがDPDPA要件を満たします。',
				'<strong>Privacy Act + APPs</strong>（オーストラリア）— 13のオーストラリアプライバシー原則。EDDIの監査追跡とデータエクスポートが技術的義務をカバー。',
				'<strong>CCPA型州法</strong>（バージニアVCDPA、コロラドCPA、コネチカットCTDPAなど）— GDPR/CCPA互換APIがすべての新興米国州プライバシー法を満たします。',
			],
			industryHeading: '業界固有のコンプライアンス',
			hipaaHeading: 'HIPAA — 米国ヘルスケア',
			hipaaPara: 'HIPAAは保護対象医療情報（PHI）の安全措置を確立します。EDDIはHIPAA準拠のAIデプロイメントのための技術インフラストラクチャを提供します：',
			hipaaItems: [
				'<strong>アクセス制御（§164.312(a)）</strong> — ロールベースアクセスのKeycloak OIDC（eddi-admin、eddi-editor、eddi-viewer）',
				'<strong>監査制御（§164.312(b)）</strong> — HMAC署名の不変監査台帳がタイムスタンプ、ユーザーID、結果とともにすべての操作を記録',
				'<strong>整合性制御（§164.312(c)）</strong> — すべての監査エントリに対するHMAC-SHA256改ざん検出',
				'<strong>転送セキュリティ（§164.312(e)）</strong> — 転送にはTLS；Secrets Vault経由で静止時にAES-256-GCM',
				'<strong>データ廃棄（§164.310(d)(2)(i)）</strong> — GDPRカスケード削除エンドポイントがすべてのデータストアからPHIを永久に削除',
				'<strong>BAAテンプレート</strong> — ヘルスケアデプロイメント用のBusiness Associate AgreementテンプレートをEDDIドキュメントに含む',
			],
			soc2Heading: 'SOC 2準備',
			soc2Para: 'SOC 2 Type IIはTrust Services Criteriaに対してシステムを評価します。EDDIのアーキテクチャはSOC 2認証を追求する組織を支援する技術的制御を提供します：',
			soc2Items: [
				'<strong>セキュリティ</strong> — OIDC/Keycloak認証、RBAC、Secrets Vault（AES-256-GCM）、ゼロeval()、パストラバーサル保護、URL検証',
				'<strong>可用性</strong> — NATS JetStreamによる水平スケーリング、デュアルデータベースサポート（MongoDB/PostgreSQL）、Kubernetesネイティブデプロイメント',
				'<strong>処理整合性</strong> — 操作ごとの暗号化整合性検証を備えた不変のHMAC署名監査台帳',
				'<strong>機密性</strong> — シークレット編集フィルターが監査エントリからAPIキーとVault参照を除去；SHA-256仮名によるPII安全ログ',
				'<strong>プライバシー</strong> — 完全なデータ主体の権利API（消去、エクスポート、制限）、構成可能な保持、処理制限制御',
			],
			apiHeading: 'グローバルコンプライアンスのための1つのAPI',
			apiPara: '上記のすべてのプライバシー規制は<strong>同じ統一REST APIとMCPツール</strong>で対応されます。ドイツでのGDPR消去リクエスト、カリフォルニアでのCCPA削除リクエスト、シンガポールでのPDPAアクセスリクエストに対応する場合でも、同じエンドポイントがすべてを処理します：',
			apiItems: [
				'<strong><code>DELETE /admin/gdpr/{userId}</code></strong> — 5つのデータストアにわたるカスケード削除（ユーザーメモリ、会話、管理マッピング、ログ、監査エントリ）',
				'<strong><code>GET /admin/gdpr/{userId}/export</code></strong> — 構造化JSONとしての完全なユーザーデータエクスポート',
				'<strong><code>POST /admin/gdpr/{userId}/restrict</code></strong> — 紛争解決のためにデータを保持しながら処理を凍結',
				'<strong>MCP: <code>delete_user_data</code></strong> — AIオーケストレーションのカスケード削除（明示的な確認が必要）',
				'<strong>MCP: <code>export_user_data</code></strong> — 自動化DSARワークフローのためのAIオーケストレーションデータエクスポート',
			],
			heading3: '世界中の規制対象業界のために構築',
			para2: 'ヘルスケア、金融サービス、政府、製造業、その他の規制対象セクターは、自信を持ってEDDIを導入できます。プラットフォームは、欧州のEU AI ActとGDPRから米国のHIPAA、カナダのPIPEDA、ブラジルのLGPD、日本のAPPI、南アフリカのPOPIA、東南アジアのPDPAまで、15以上の規制フレームワークが要求する透明性、監査可能性、制御メカニズムを提供します。コンプライアンスは後付けではなく、アーキテクチャの基盤です。',
		},`;

const filePath = join(ROOT, 'ja.ts');
let content = readFileSync(filePath, 'utf-8');
const startMatch = content.match(/\tcompliance:\s*\{/);
if (!startMatch) { console.error('not found'); process.exit(1); }
const startIdx = startMatch.index;
const afterStart = content.slice(startIdx);
const closingMatch = afterStart.match(/\t\t\tpara2:.*?\n\t\t\},/s);
if (!closingMatch) { console.error('closing not found'); process.exit(1); }
const endIdx = startIdx + closingMatch.index + closingMatch[0].length;
content = content.slice(0, startIdx) + translated + content.slice(endIdx);
writeFileSync(filePath, content, 'utf-8');
console.log('ja: ✓ translated');
