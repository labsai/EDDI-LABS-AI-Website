/**
 * Translate the 4 new feature page content blocks + multiAgent items2
 * for ja, ko, zh, ar, hi, th locales.
 *
 * Run with: node scripts/translate-pages.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const LOCALES_DIR = join(process.cwd(), 'src', 'i18n', 'locales');

// Full page block replacements per locale
const pageBlocks = {
  ja: {
    multiAgentItems2: [
      "'<strong>5つの議論スタイル</strong> — ラウンドテーブル、ピアレビュー、悪魔の代弁者（Devil\\'s Advocate）、デルファイ、ディベート',",
      "'<strong>ネストグループ</strong> — トーナメント形式、レッドチーム vs ブルーチーム、パネルレビューのためのグループのグループを構成',",
      "'<strong>Agent Father</strong> — 会話を通じて他のエージェントを作成するメタエージェント（すぐに利用可能）',",
      "'<strong>A2Aプロトコル</strong> — Agent Cardsとクロスプラットフォームスキル発見による完全なAgent-to-Agentプロトコル実装',",
      "'<strong>能力マッチング</strong> — スキル、コンフィデンススコア、カスタム属性でエージェントを発見しルーティング',",
    ],
    multiAgentHeading3: "heading3: 'グループ会話＆高度なオーケストレーション',",
    multiAgentPara2: "para2: 'EDDIは5つの組み込み議論スタイル、ネストグループ構造、会話を通じて他のエージェントを作成するメタエージェントによる<strong>マルチエージェントグループ会話</strong>をサポートします：',",
    memory: {
      title: "'メモリ＆コンテキスト管理',",
      description: "'永続的なユーザーメモリ、ドリーム統合、ローリングサマリー、トークン対応コンテキストウィンドウ — 知的に記憶し、学習し、忘れるエージェント。',",
      heading1: "'記憶するエージェント',",
      para1: "'EDDIは、エージェントが会話を跨いで事実、設定、コンテキストを記憶できる包括的な<strong>永続メモリシステム</strong>を提供します。メモリエントリーは可視性スコーピング付きの構造化キー・バリューペアで、適切なタイミングで適切なコンテキストをエージェントに提供します。',",
      heading2: "'メモリ機能',",
      items: [
        "'<strong>永続ユーザーメモリ</strong> — 会話を跨いだ<code>global</code>、<code>agent</code>、<code>group</code>可視性スコーピング付きのキー・バリューエントリー',",
        "'<strong>LLMメモリツール</strong> — エージェントが自身の永続メモリを読み取り、書き込み、検索するための組み込みツール',",
        "'<strong>ドリーム統合</strong> — バックグラウンドメモリメンテナンス：古いエントリーの整理、矛盾の検出、事実の要約',",
        "'<strong>トークン対応ウィンドウ</strong> — モデル固有のトークナイザーサポートとアンカー付きオープニングステップによるインテリジェントなコンテキストパッキング',",
        "'<strong>ローリングサマリー</strong> — 会話リコールツールによるドリルバック付きの古いターンのインクリメンタルLLM駆動要約',",
        "'<strong>プロパティ抽出</strong> — <code>longTerm</code> / <code>conversation</code> / <code>step</code>スコーピングによる設定駆動型スロット充填',",
        "'<strong>会話状態</strong> — 元に戻す/やり直しサポート付きの完全な履歴',",
      ],
      heading3: "'ドリーム統合の仕組み',",
      para2: "\"Anthropicのバックグラウンドメモリ統合研究に着想を得て、EDDIのドリームサイクルはメモリ品質を維持するために<strong>設定可能なスケジュール</strong>で実行されます。古いエントリーが整理され、矛盾が検出・解決され、事実が要約されます — すべて実行ごとのコスト上限付き。\"",
    },
    rag: {
      title: "'RAG — 検索拡張生成',",
      description: "'7つの埋め込みプロバイダー、5つのベクトルストア、httpCall RAG、非同期ドキュメント取り込み — AIエージェント向けエンタープライズ知識検索。',",
      heading1: "'エンタープライズ知識検索',",
      para1: "'EDDIは複数の埋め込みプロバイダー、ベクトルストア、HTTP呼び出しによるゼロインフラRAGオプションをネイティブサポートする完全な<strong>検索拡張生成</strong>パイプラインを提供します。',",
      heading2: "'RAG機能',",
      items: [
        "'<strong>7つの埋め込みプロバイダー</strong> — OpenAI、Ollama、Azure OpenAI、Mistral、Amazon Bedrock、Cohere、Google Vertex AI',",
        "'<strong>5つのベクトルストア</strong> — pgvector、インメモリ、MongoDB Atlas、Elasticsearch、Qdrant',",
        "'<strong>httpCall RAG</strong> — 任意の検索API（BM25、Elasticsearch、カスタムエンドポイント）によるゼロインフラRAG',",
        "'<strong>REST取り込みAPI</strong> — ステータス追跡とバッチ処理による非同期ドキュメント取り込み',",
        "'<strong>ハイブリッド検索</strong> — 最適なリコールのためのデンスベクトル検索とスパースキーワードマッチングの組み合わせ',",
      ],
      heading3: "'柔軟なデプロイメント',",
      para2: "'RAGは完全に設定駆動です。JSON設定でお好みの埋め込みプロバイダーとベクトルストアを選択 — コード変更不要。<code>httpCall RAG</code>オプションにより、別途ベクトルデータベースをデプロイせずに<strong>既存の検索インフラ</strong>（Elasticsearch、Solr、カスタムAPI）を利用できます。'",
    },
    modelCascading: {
      title: "'インテリジェントモデルカスケード',",
      description: "'コスト最適化マルチモデルルーティング — 安価なモデルを先に試し、低コンフィデンスでエスカレーション。会話ごとのバジェットとテナントコスト上限。',",
      heading1: "'インテリジェントなコスト最適化',",
      para1: "\"EDDIのモデルカスケードシステムは<strong>コスト重視のマルチモデルルーティング</strong>を実現します。高速で安価なモデルから開始し、コンフィデンスが低い場合にのみ自動的により強力な（高価な）モデルにエスカレーション — 品質を犠牲にせずにAIコストを削減。\"",
      heading2: "'カスケード機能',",
      items: [
        "'<strong>コスト最適化</strong> — 安価/高速モデルを先に試し、コンフィデンスが低い場合にのみ強力なモデルにエスカレーション',",
        "'<strong>4つのコンフィデンス戦略</strong> — 構造化出力、ヒューリスティック、ジャッジモデル、またはなし — ユースケースに合った評価方法を選択',",
        "'<strong>会話ごとのバジェット</strong> — バジェット上限と超過時の会話終了による自動コスト追跡',",
        "'<strong>テナントコスト上限</strong> — マルチテナントデプロイメントでの自動適用によるテナントごとの月次コストバジェット',",
        "'<strong>12のLLMプロバイダー</strong> — OpenAI、Anthropic、Google Gemini、Mistral、Azure OpenAI、Amazon Bedrock、Oracle GenAI、Vertex AI、Ollama、Jlama、Hugging Face、およびOpenAI互換エンドポイント',",
      ],
      heading3: "'仕組み',",
      para2: "'コスト順に並べたモデルのカスケードチェーンを設定。各ユーザーメッセージに対して、EDDIは最も安価なモデルを最初に試し、コンフィデンスを評価。コンフィデンスが閾値を下回ると、チェーン内の次のモデルに自動エスカレーション。このアプローチにより、ほとんどのクエリが小さなモデルで十分な一般的なワークロードでは<strong>LLMコストを60-80%削減</strong>できます。'",
    },
    scheduling: {
      title: "'スケジューリング＆ハートビート',",
      description: "'Cronトリガーのエージェント実行、プロアクティブ動作のためのハートビートウェイクアップ、メモリメンテナンスのためのドリームサイクル、完全な実行ログ。',",
      heading1: "'プロアクティブなエージェント動作',",
      para1: "\"EDDIエージェントはメッセージに応答するだけではなく、<strong>スケジュールに基づいてプロアクティブに実行</strong>できます。ハートビートトリガーが設定可能な間隔でエージェントを起動し、cron式が正確なタイミングを提供し、ドリームサイクルがバックグラウンドでメモリ品質を維持します。\"",
      heading2: "'スケジューリング機能',",
      items: [
        "'<strong>ハートビートトリガー</strong> — プロアクティブ動作のための設定可能な間隔での定期的なエージェントウェイクアップ（例：毎日のチェックイン、定期的な要約）',",
        "'<strong>Cronスケジューリング</strong> — 正確な時限エージェント実行のための標準cron式',",
        "'<strong>会話戦略</strong> — <code>persistent</code>（実行間で同じ会話を再利用）または<code>new</code>（毎回フレッシュなコンテキスト）',",
        "'<strong>実行ログ</strong> — ステータス、所要時間、コスト追跡、リトライロジック付きの完全な実行履歴',",
        "'<strong>ドリームサイクル</strong> — 実行ごとのコスト上限付きのスケジュールされたバックグラウンドメモリ統合',",
      ],
      heading3: "'ユースケース',",
      para2: "'スケジュールエージェントは強力なプロアクティブワークフローを実現：<strong>毎日のレポート要約</strong>、定期的なデータ品質チェック、自動顧客フォローアップ、ドリーム統合によるメモリメンテナンス、時間トリガーのエスカレーションワークフロー。各スケジュール実行はコスト追跡とリトライサポート付きで完全にログ記録されます。'",
    },
  },

  ko: {
    multiAgentItems2: [
      "'<strong>5가지 토론 스타일</strong> — 라운드 테이블, 피어 리뷰, 악마의 대변인(Devil\\'s Advocate), 델파이, 디베이트',",
      "'<strong>중첩 그룹</strong> — 토너먼트 대진, 레드팀 vs 블루팀, 패널 리뷰를 위한 그룹의 그룹 구성',",
      "'<strong>Agent Father</strong> — 대화를 통해 다른 에이전트를 생성하는 메타 에이전트 (기본 제공)',",
      "'<strong>A2A 프로토콜</strong> — Agent Cards와 크로스 플랫폼 스킬 발견을 통한 완전한 Agent-to-Agent 프로토콜 구현',",
      "'<strong>능력 매칭</strong> — 스킬, 신뢰도 점수, 사용자 정의 속성으로 에이전트를 발견하고 라우팅',",
    ],
    multiAgentHeading3: "heading3: '그룹 대화 & 고급 오케스트레이션',",
    multiAgentPara2: "para2: 'EDDI는 5가지 내장 토론 스타일, 중첩 그룹 구조, 대화를 통해 다른 에이전트를 생성하는 메타 에이전트를 통한 <strong>멀티 에이전트 그룹 대화</strong>를 지원합니다:',",
    memory: {
      title: "'메모리 & 컨텍스트 관리',",
      description: "'영구 사용자 메모리, 드림 통합, 롤링 요약, 토큰 인식 컨텍스트 윈도잉 — 지능적으로 기억하고, 학습하고, 잊는 에이전트.',",
      heading1: "'기억하는 에이전트',",
      para1: "'EDDI는 에이전트가 대화 간에 사실, 선호도, 컨텍스트를 기억할 수 있는 포괄적인 <strong>영구 메모리 시스템</strong>을 제공합니다. 메모리 항목은 가시성 범위가 지정된 구조화된 키-값 쌍으로, 적절한 시점에 적절한 컨텍스트를 에이전트에 제공합니다.',",
      heading2: "'메모리 기능',",
      items: [
        "'<strong>영구 사용자 메모리</strong> — 대화 간 <code>global</code>, <code>agent</code>, <code>group</code> 가시성 범위의 키-값 항목',",
        "'<strong>LLM 메모리 도구</strong> — 에이전트가 자신의 영구 메모리를 읽고, 쓰고, 검색할 수 있는 내장 도구',",
        "'<strong>드림 통합</strong> — 백그라운드 메모리 유지보수: 오래된 항목 정리, 모순 감지, 사실 요약',",
        "'<strong>토큰 인식 윈도잉</strong> — 모델별 토크나이저 지원과 고정 오프닝 스텝을 통한 지능적 컨텍스트 패킹',",
        "'<strong>롤링 요약</strong> — 대화 리콜 도구를 통한 드릴백이 가능한 이전 턴의 점진적 LLM 기반 요약',",
        "'<strong>속성 추출</strong> — <code>longTerm</code> / <code>conversation</code> / <code>step</code> 범위의 구성 기반 슬롯 채우기',",
        "'<strong>대화 상태</strong> — 실행 취소/다시 실행 지원이 있는 전체 히스토리',",
      ],
      heading3: "'드림 통합 작동 방식',",
      para2: "\"Anthropic의 백그라운드 메모리 통합 연구에서 영감을 받아, EDDI의 드림 사이클은 메모리 품질을 유지하기 위해 <strong>구성 가능한 일정</strong>으로 실행됩니다. 오래된 항목이 정리되고, 모순이 감지 및 해결되며, 사실이 요약됩니다 — 모두 실행당 비용 상한선 포함.\"",
    },
    rag: {
      title: "'RAG — 검색 증강 생성',",
      description: "'7개 임베딩 제공자, 5개 벡터 스토어, httpCall RAG, 비동기 문서 수집 — AI 에이전트를 위한 엔터프라이즈급 지식 검색.',",
      heading1: "'엔터프라이즈 지식 검색',",
      para1: "'EDDI는 다양한 임베딩 제공자, 벡터 스토어, HTTP 호출을 통한 제로 인프라 RAG 옵션을 기본 지원하는 완전한 <strong>검색 증강 생성</strong> 파이프라인을 제공합니다.',",
      heading2: "'RAG 기능',",
      items: [
        "'<strong>7개 임베딩 제공자</strong> — OpenAI, Ollama, Azure OpenAI, Mistral, Amazon Bedrock, Cohere, Google Vertex AI',",
        "'<strong>5개 벡터 스토어</strong> — pgvector, 인메모리, MongoDB Atlas, Elasticsearch, Qdrant',",
        "'<strong>httpCall RAG</strong> — 모든 검색 API(BM25, Elasticsearch, 사용자 정의 엔드포인트)를 통한 제로 인프라 RAG',",
        "'<strong>REST 수집 API</strong> — 상태 추적 및 배치 처리가 가능한 비동기 문서 수집',",
        "'<strong>하이브리드 검색</strong> — 최적의 리콜을 위해 밀집 벡터 검색과 희소 키워드 매칭 결합',",
      ],
      heading3: "'유연한 배포',",
      para2: "'RAG는 완전히 구성 기반입니다. JSON 구성으로 임베딩 제공자와 벡터 스토어를 선택 — 코드 변경 불필요. <code>httpCall RAG</code> 옵션을 사용하면 별도의 벡터 데이터베이스를 배포하지 않고 <strong>기존 검색 인프라</strong>(Elasticsearch, Solr, 사용자 정의 API)를 사용할 수 있습니다.'",
    },
    modelCascading: {
      title: "'스마트 모델 캐스케이딩',",
      description: "'비용 최적화 멀티모델 라우팅 — 저렴한 모델 먼저, 낮은 신뢰도 시 에스컬레이션. 대화당 예산 및 테넌트 비용 상한.',",
      heading1: "'지능적 비용 최적화',",
      para1: "\"EDDI의 모델 캐스케이딩 시스템은 <strong>비용 인식 멀티모델 라우팅</strong>을 가능하게 합니다. 빠르고 저렴한 모델부터 시작하여 신뢰도가 낮을 때만 자동으로 더 강력한(더 비싼) 모델로 에스컬레이션 — 품질 저하 없이 AI 비용을 절감합니다.\"",
      heading2: "'캐스케이딩 기능',",
      items: [
        "'<strong>비용 최적화</strong> — 저렴/빠른 모델 먼저, 신뢰도가 낮을 때만 강력한 모델로 에스컬레이션',",
        "'<strong>4가지 신뢰도 전략</strong> — 구조화된 출력, 휴리스틱, 판정 모델, 없음 — 사용 사례에 맞는 평가 방법 선택',",
        "'<strong>대화당 예산</strong> — 예산 한도 및 초과 시 대화 종료를 통한 자동 비용 추적',",
        "'<strong>테넌트 비용 상한</strong> — 멀티테넌트 배포에서 자동 적용되는 테넌트별 월별 비용 예산',",
        "'<strong>12개 LLM 제공자</strong> — OpenAI, Anthropic, Google Gemini, Mistral, Azure OpenAI, Amazon Bedrock, Oracle GenAI, Vertex AI, Ollama, Jlama, Hugging Face 및 모든 OpenAI 호환 엔드포인트',",
      ],
      heading3: "'작동 방식',",
      para2: "'비용 순서로 정렬된 모델 캐스케이드 체인을 구성합니다. 각 사용자 메시지에 대해 EDDI는 가장 저렴한 모델을 먼저 시도하고 신뢰도를 평가합니다. 신뢰도가 임계값 아래로 떨어지면 체인의 다음 모델로 자동 에스컬레이션됩니다. 이 방식은 대부분의 쿼리가 작은 모델로 충분한 일반 워크로드에서 <strong>LLM 비용을 60-80% 절감</strong>할 수 있습니다.'",
    },
    scheduling: {
      title: "'스케줄링 & 하트비트',",
      description: "'크론 트리거 에이전트 실행, 프로액티브 동작을 위한 하트비트 웨이크업, 메모리 유지를 위한 드림 사이클, 완전한 실행 로깅.',",
      heading1: "'프로액티브 에이전트 동작',",
      para1: "\"EDDI 에이전트는 메시지에 응답하는 것뿐만 아니라 <strong>스케줄에 따라 프로액티브하게 실행</strong>할 수 있습니다. 하트비트 트리거가 구성 가능한 간격으로 에이전트를 깨우고, 크론 표현식이 정밀한 타이밍을 제공하며, 드림 사이클이 백그라운드에서 메모리 품질을 유지합니다.\"",
      heading2: "'스케줄링 기능',",
      items: [
        "'<strong>하트비트 트리거</strong> — 프로액티브 동작을 위한 구성 가능한 간격의 주기적 에이전트 웨이크업 (예: 일일 체크인, 주기적 요약)',",
        "'<strong>크론 스케줄링</strong> — 정밀한 시간 기반 에이전트 실행을 위한 표준 크론 표현식',",
        "'<strong>대화 전략</strong> — <code>persistent</code> (실행 간 동일 대화 재사용) 또는 <code>new</code> (매번 새로운 컨텍스트)',",
        "'<strong>실행 로깅</strong> — 상태, 기간, 비용 추적, 재시도 로직을 포함한 완전한 실행 히스토리',",
        "'<strong>드림 사이클</strong> — 실행당 비용 상한이 있는 예약된 백그라운드 메모리 통합',",
      ],
      heading3: "'사용 사례',",
      para2: "'예약된 에이전트는 강력한 프로액티브 워크플로를 가능하게 합니다: <strong>일일 보고서 요약</strong>, 주기적 데이터 품질 검사, 자동화된 고객 후속 조치, 드림 통합을 통한 메모리 유지보수, 시간 트리거 에스컬레이션 워크플로. 각 예약 실행은 비용 추적과 재시도 지원을 포함하여 완전히 로깅됩니다.'",
    },
  },

  zh: {
    multiAgentItems2: [
      "'<strong>5种讨论风格</strong> — 圆桌讨论、同行评审、魔鬼代言人（Devil\\'s Advocate）、德尔菲法和辩论',",
      "'<strong>嵌套群组</strong> — 为锦标赛对阵、红队 vs 蓝队和专家评审组合群组',",
      "'<strong>Agent Father</strong> — 通过对话创建其他代理的元代理（开箱即用）',",
      "'<strong>A2A协议</strong> — 完整的Agent-to-Agent协议实现，包括Agent Cards和跨平台技能发现',",
      "'<strong>能力匹配</strong> — 按技能、置信度评分和自定义属性发现和路由代理',",
    ],
    multiAgentHeading3: "heading3: '群组对话与高级编排',",
    multiAgentPara2: "para2: 'EDDI支持<strong>多代理群组对话</strong>，提供5种内置讨论风格、嵌套群组结构，以及通过对话创建其他代理的元代理：',",
    memory: {
      title: "'记忆与上下文管理',",
      description: "'持久用户记忆、梦境整合、滚动摘要和令牌感知上下文窗口 — 智能记忆、学习和遗忘的代理。',",
      heading1: "'会记忆的代理',",
      para1: "'EDDI提供全面的<strong>持久记忆系统</strong>，使代理能够跨对话记住事实、偏好和上下文。记忆条目是带有可见性范围的结构化键值对 — 在正确的时间为代理提供正确的上下文。',",
      heading2: "'记忆能力',",
      items: [
        "'<strong>持久用户记忆</strong> — 跨对话的<code>global</code>、<code>agent</code>和<code>group</code>可见性范围的键值条目',",
        "'<strong>LLM记忆工具</strong> — 代理可调用的内置工具，用于读取、写入和搜索自身的持久记忆',",
        "'<strong>梦境整合</strong> — 后台记忆维护：过时条目清理、矛盾检测和事实摘要',",
        "'<strong>令牌感知窗口</strong> — 使用模型特定分词器支持和锚定开头步骤的智能上下文打包',",
        "'<strong>滚动摘要</strong> — 使用对话回忆工具进行回溯的旧轮次增量LLM驱动摘要',",
        "'<strong>属性提取</strong> — 使用<code>longTerm</code> / <code>conversation</code> / <code>step</code>范围的配置驱动插槽填充',",
        "'<strong>对话状态</strong> — 支持撤销/重做的完整历史记录',",
      ],
      heading3: "'梦境整合工作原理',",
      para2: "\"受Anthropic后台记忆整合研究的启发，EDDI的梦境周期按<strong>可配置的计划</strong>运行以维护记忆质量。过时条目被清理，矛盾被检测和解决，事实被摘要 — 每次运行都有成本上限。\"",
    },
    rag: {
      title: "'RAG — 检索增强生成',",
      description: "'7个嵌入提供商、5个向量存储、httpCall RAG和异步文档摄取 — 面向AI代理的企业级知识检索。',",
      heading1: "'企业知识检索',",
      para1: "'EDDI提供完整的<strong>检索增强生成</strong>管道，原生支持多个嵌入提供商、向量存储和通过HTTP调用的零基础设施RAG选项。',",
      heading2: "'RAG能力',",
      items: [
        "'<strong>7个嵌入提供商</strong> — OpenAI、Ollama、Azure OpenAI、Mistral、Amazon Bedrock、Cohere、Google Vertex AI',",
        "'<strong>5个向量存储</strong> — pgvector、内存、MongoDB Atlas、Elasticsearch、Qdrant',",
        "'<strong>httpCall RAG</strong> — 通过任意搜索API（BM25、Elasticsearch、自定义端点）实现零基础设施RAG',",
        "'<strong>REST摄取API</strong> — 支持状态跟踪和批量处理的异步文档摄取',",
        "'<strong>混合搜索</strong> — 结合稠密向量检索和稀疏关键词匹配以获得最佳召回率',",
      ],
      heading3: "'灵活部署',",
      para2: "'RAG完全由配置驱动。通过JSON配置选择嵌入提供商和向量存储 — 无需代码更改。<code>httpCall RAG</code>选项让您无需部署单独的向量数据库即可使用<strong>任何现有搜索基础设施</strong>（Elasticsearch、Solr、自定义API）。'",
    },
    modelCascading: {
      title: "'智能模型级联',",
      description: "'成本优化的多模型路由 — 先尝试便宜的模型，置信度低时升级。每对话预算和租户成本上限。',",
      heading1: "'智能成本优化',",
      para1: "\"EDDI的模型级联系统实现<strong>成本感知的多模型路由</strong>。从快速、便宜的模型开始，仅在置信度低时自动升级到更强大（更昂贵）的模型 — 在不牺牲质量的情况下降低AI成本。\"",
      heading2: "'级联功能',",
      items: [
        "'<strong>成本优化</strong> — 先尝试便宜/快速模型，仅在置信度低时升级到强大模型',",
        "'<strong>4种置信策略</strong> — 结构化输出、启发式、评判模型或无 — 选择适合您用例的评估方法',",
        "'<strong>每对话预算</strong> — 带预算上限的自动成本跟踪，超出时终止对话',",
        "'<strong>租户成本上限</strong> — 多租户部署中自动执行的每租户月度成本预算',",
        "'<strong>12个LLM提供商</strong> — OpenAI、Anthropic、Google Gemini、Mistral、Azure OpenAI、Amazon Bedrock、Oracle GenAI、Vertex AI、Ollama、Jlama、Hugging Face及任何OpenAI兼容端点',",
      ],
      heading3: "'工作原理',",
      para2: "'配置按成本排序的模型级联链。对于每条用户消息，EDDI先尝试最便宜的模型并评估置信度。如果置信度低于阈值，自动升级到链中的下一个模型。这种方法对于大多数查询足以由小型模型处理的典型工作负载，可<strong>降低LLM成本60-80%</strong>。'",
    },
    scheduling: {
      title: "'调度与心跳',",
      description: "'定时触发代理执行、用于主动行为的心跳唤醒、用于记忆维护的梦境周期和完整的执行日志。',",
      heading1: "'主动代理行为',",
      para1: "\"EDDI代理不仅响应消息 — 还能<strong>按计划主动执行</strong>。心跳触发器以可配置的间隔唤醒代理，cron表达式提供精确的定时，梦境周期在后台维护记忆质量。\"",
      heading2: "'调度功能',",
      items: [
        "'<strong>心跳触发</strong> — 以可配置间隔定期唤醒代理以实现主动行为（如：每日签到、定期摘要）',",
        "'<strong>Cron调度</strong> — 用于精确定时代理执行的标准cron表达式',",
        "'<strong>对话策略</strong> — <code>persistent</code>（跨执行复用同一对话）或<code>new</code>（每次新的上下文）',",
        "'<strong>执行日志</strong> — 包含状态、持续时间、成本跟踪和重试逻辑的完整执行历史',",
        "'<strong>梦境周期</strong> — 每次运行有成本上限的计划后台记忆整合',",
      ],
      heading3: "'使用场景',",
      para2: "'计划代理实现强大的主动工作流：<strong>每日报告摘要</strong>、定期数据质量检查、自动客户跟进、通过梦境整合进行记忆维护、基于时间触发的升级工作流。每次计划执行都包含成本跟踪和重试支持的完整日志。'",
    },
  },

  ar: {
    multiAgentItems2: [
      "'<strong>5 أنماط نقاش</strong> — طاولة مستديرة، مراجعة الأقران، محامي الشيطان (Devil\\'s Advocate)، دلفي، ومناظرة',",
      "'<strong>مجموعات متداخلة</strong> — تكوين مجموعات من مجموعات للبطولات، فريق أحمر مقابل أزرق، ومراجعات اللجان',",
      "'<strong>Agent Father</strong> — وكيل أعلى ينشئ وكلاء آخرين من خلال المحادثة (جاهز للاستخدام)',",
      "'<strong>بروتوكول A2A</strong> — تنفيذ كامل لبروتوكول وكيل-لوكيل مع بطاقات الوكيل واكتشاف المهارات عبر المنصات',",
      "'<strong>مطابقة القدرات</strong> — اكتشاف وتوجيه الوكلاء حسب المهارة ودرجة الثقة والسمات المخصصة',",
    ],
    multiAgentHeading3: "heading3: 'المحادثات الجماعية والتنسيق المتقدم',",
    multiAgentPara2: "para2: 'يدعم EDDI <strong>محادثات جماعية متعددة الوكلاء</strong> مع 5 أنماط نقاش مدمجة وهياكل مجموعات متداخلة ووكيل أعلى ينشئ وكلاء آخرين من خلال المحادثة:',",
    memory: {
      title: "'إدارة الذاكرة والسياق',",
      description: "'ذاكرة مستخدم مستمرة، توحيد الأحلام، ملخصات متجددة ونوافذ سياق واعية بالرموز — وكلاء يتذكرون ويتعلمون وينسون بذكاء.',",
      heading1: "'وكلاء يتذكرون',",
      para1: "'يوفر EDDI <strong>نظام ذاكرة مستمر</strong> شامل يمكّن الوكلاء من تذكر الحقائق والتفضيلات والسياق عبر المحادثات. إدخالات الذاكرة هي أزواج مفتاح-قيمة منظمة مع نطاق رؤية — توفر للوكلاء السياق المناسب في الوقت المناسب.',",
      heading2: "'قدرات الذاكرة',",
      heading3: "'كيف يعمل توحيد الأحلام',",
    },
    rag: {
      title: "'RAG — التوليد المعزز بالاسترجاع',",
      description: "'7 مزودي تضمين، 5 مخازن متجهات، httpCall RAG واستيعاب مستندات غير متزامن — استرجاع معرفة على مستوى المؤسسات لوكلاء الذكاء الاصطناعي.',",
      heading1: "'استرجاع معرفة المؤسسات',",
      heading2: "'قدرات RAG',",
      heading3: "'نشر مرن',",
    },
    modelCascading: {
      title: "'تتابع نماذج ذكي',",
      description: "'توجيه متعدد النماذج محسّن للتكلفة — جرب النماذج الرخيصة أولاً، صعّد عند انخفاض الثقة. ميزانيات لكل محادثة وحدود تكلفة للمستأجرين.',",
      heading1: "'تحسين ذكي للتكاليف',",
      heading2: "'ميزات التتابع',",
      heading3: "'كيف يعمل',",
    },
    scheduling: {
      title: "'الجدولة والنبضات',",
      description: "'تنفيذ وكلاء مجدول بـ Cron، إيقاظ بالنبضات للسلوك الاستباقي، دورات أحلام لصيانة الذاكرة، وتسجيل تنفيذ كامل.',",
      heading1: "'سلوك استباقي للوكلاء',",
      heading2: "'ميزات الجدولة',",
      heading3: "'حالات الاستخدام',",
    },
  },

  hi: {
    multiAgentItems2: [
      "'<strong>5 चर्चा शैलियाँ</strong> — गोल मेज, सहकर्मी समीक्षा, शैतान का वकील (Devil\\'s Advocate), डेल्फी, और वाद-विवाद',",
      "'<strong>नेस्टेड समूह</strong> — टूर्नामेंट ब्रैकेट, रेड-टीम vs ब्लू-टीम, और पैनल समीक्षा के लिए समूहों के समूह बनाएं',",
      "'<strong>Agent Father</strong> — एक मेटा-एजेंट जो बातचीत के माध्यम से अन्य एजेंट बनाता है (डिफ़ॉल्ट रूप से उपलब्ध)',",
      "'<strong>A2A प्रोटोकॉल</strong> — Agent Cards और क्रॉस-प्लेटफ़ॉर्म स्किल खोज के साथ पूर्ण Agent-to-Agent प्रोटोकॉल कार्यान्वयन',",
      "'<strong>क्षमता मिलान</strong> — स्किल, विश्वास स्कोर और कस्टम विशेषताओं के अनुसार एजेंटों को खोजें और रूट करें',",
    ],
    multiAgentHeading3: "heading3: 'समूह वार्तालाप और उन्नत ऑर्केस्ट्रेशन',",
    multiAgentPara2: "para2: 'EDDI 5 अंतर्निहित चर्चा शैलियों, नेस्टेड समूह संरचनाओं और बातचीत के माध्यम से अन्य एजेंट बनाने वाले मेटा-एजेंट के साथ <strong>मल्टी-एजेंट समूह वार्तालाप</strong> का समर्थन करता है:',",
    memory: {
      title: "'मेमोरी और संदर्भ प्रबंधन',",
      description: "'स्थायी उपयोगकर्ता मेमोरी, ड्रीम समेकन, रोलिंग सारांश और टोकन-जागरूक संदर्भ विंडोइंग — बुद्धिमानी से याद रखने, सीखने और भूलने वाले एजेंट।',",
      heading1: "'याद रखने वाले एजेंट',",
      heading2: "'मेमोरी क्षमताएँ',",
      heading3: "'ड्रीम समेकन कैसे काम करता है',",
    },
    rag: {
      title: "'RAG — पुनर्प्राप्ति-संवर्धित उत्पादन',",
      heading1: "'एंटरप्राइज़ ज्ञान पुनर्प्राप्ति',",
      heading2: "'RAG क्षमताएँ',",
      heading3: "'लचीला परिनियोजन',",
    },
    modelCascading: {
      title: "'स्मार्ट मॉडल कैस्केडिंग',",
      heading1: "'बुद्धिमान लागत अनुकूलन',",
      heading2: "'कैस्केडिंग सुविधाएँ',",
      heading3: "'यह कैसे काम करता है',",
    },
    scheduling: {
      title: "'शेड्यूलिंग और हार्टबीट',",
      heading1: "'सक्रिय एजेंट व्यवहार',",
      heading2: "'शेड्यूलिंग सुविधाएँ',",
      heading3: "'उपयोग के मामले',",
    },
  },

  th: {
    multiAgentItems2: [
      "'<strong>5 รูปแบบการอภิปราย</strong> — โต๊ะกลม, การทบทวนโดยเพื่อนร่วมงาน, ผู้คัดค้าน (Devil\\'s Advocate), เดลฟี และการโต้วาที',",
      "'<strong>กลุ่มซ้อน</strong> — จัดกลุ่มของกลุ่มสำหรับรูปแบบทัวร์นาเมนต์, ทีมแดง vs ทีมน้ำเงิน และการทบทวนโดยคณะกรรมการ',",
      "'<strong>Agent Father</strong> — เมตาเอเจนต์ที่สร้างเอเจนต์อื่นผ่านการสนทนา (พร้อมใช้งานทันที)',",
      "'<strong>โปรโตคอล A2A</strong> — การใช้งานโปรโตคอล Agent-to-Agent แบบสมบูรณ์พร้อม Agent Cards และการค้นหาทักษะข้ามแพลตฟอร์ม',",
      "'<strong>การจับคู่ความสามารถ</strong> — ค้นหาและกำหนดเส้นทางไปยังเอเจนต์ตามทักษะ คะแนนความเชื่อมั่น และแอตทริบิวต์ที่กำหนดเอง',",
    ],
    multiAgentHeading3: "heading3: 'การสนทนากลุ่มและการประสานงานขั้นสูง',",
    multiAgentPara2: "para2: 'EDDI รองรับ<strong>การสนทนากลุ่มหลายเอเจนต์</strong>ด้วย 5 รูปแบบการอภิปรายในตัว โครงสร้างกลุ่มซ้อน และเมตาเอเจนต์ที่สร้างเอเจนต์อื่นผ่านการสนทนา:',",
    memory: {
      title: "'การจัดการหน่วยความจำและบริบท',",
      heading1: "'เอเจนต์ที่จำได้',",
      heading2: "'ความสามารถด้านหน่วยความจำ',",
      heading3: "'การรวม Dream ทำงานอย่างไร',",
    },
    rag: {
      title: "'RAG — การสร้างเนื้อหาเสริมด้วยการค้นหา',",
      heading1: "'การค้นหาความรู้ระดับองค์กร',",
      heading2: "'ความสามารถ RAG',",
      heading3: "'การปรับใช้แบบยืดหยุ่น',",
    },
    modelCascading: {
      title: "'การเรียงซ้อนโมเดลอัจฉริยะ',",
      heading1: "'การเพิ่มประสิทธิภาพต้นทุนอัจฉริยะ',",
      heading2: "'ฟีเจอร์การเรียงซ้อน',",
      heading3: "'วิธีการทำงาน',",
    },
    scheduling: {
      title: "'การจัดตารางและ Heartbeats',",
      heading1: "'พฤติกรรมเชิงรุกของเอเจนต์',",
      heading2: "'ฟีเจอร์การจัดตาราง',",
      heading3: "'กรณีการใช้งาน',",
    },
  },
};

// ── Apply page block translations ──────────────────────────────

function replacePageBlocks(content, pages) {
  let count = 0;

  // Replace multiAgent items2 lines
  if (pages.multiAgentItems2) {
    const engItems = [
      "'<strong>5 Discussion Styles</strong>",
      "'<strong>Nested Groups</strong>",
      "'<strong>Agent Father</strong>",
      "'<strong>A2A Protocol</strong>",
      "'<strong>Capability Matching</strong>",
    ];
    for (let i = 0; i < engItems.length; i++) {
      const engLine = content.split('\n').find(l => l.includes(engItems[i]) && l.includes("Round Table") === (i === 0));
      if (!engLine) continue;
      // Find the actual line and replace
      const engPattern = engItems[i];
      const lines = content.split('\n');
      for (let j = 0; j < lines.length; j++) {
        if (lines[j].includes(engPattern.slice(1)) && !lines[j].match(/[^\x00-\x7F].*Discussion|[^\x00-\x7F].*Nested|[^\x00-\x7F].*Father|[^\x00-\x7F].*A2A|[^\x00-\x7F].*Capability/)) {
          // Only replace if line is still in English
          if (lines[j].match(/Discussion Styles|Nested Groups|Agent Father.*meta-agent|A2A Protocol.*Full Agent|Capability Matching.*Discover/)) {
            lines[j] = '\t\t\t' + pages.multiAgentItems2[i];
            count++;
          }
        }
      }
      content = lines.join('\n');
    }
  }

  // Replace feature page headings/titles that are page-specific
  for (const pageKey of ['memory', 'rag', 'modelCascading', 'scheduling']) {
    const page = pages[pageKey];
    if (!page) continue;

    // Heading/title replacements are handled in the line-by-line pass below
  }

  return { content, count };
}

for (const [locale, pages] of Object.entries(pageBlocks)) {
  const file = join(LOCALES_DIR, `${locale}.ts`);
  let content = readFileSync(file, 'utf-8');
  const { content: newContent, count } = replacePageBlocks(content, pages);
  content = newContent;

  // Now do line-by-line heading replacements for each page block
  // These are unique within their page context
  const lines = content.split('\n');
  let currentPage = null;
  let replCount = 0;

  for (let i = 0; i < lines.length; i++) {
    // Track which page block we're in
    if (lines[i].match(/^\t\tmemory:\s*\{/)) currentPage = 'memory';
    else if (lines[i].match(/^\t\trag:\s*\{/) && i > 300) currentPage = 'rag';
    else if (lines[i].match(/^\t\tmodelCascading:\s*\{/)) currentPage = 'modelCascading';
    else if (lines[i].match(/^\t\tscheduling:\s*\{/) && i > 300) currentPage = 'scheduling';
    else if (lines[i].match(/^\t\t\},/) || lines[i].match(/^\t\t\}$/)) currentPage = null;

    if (!currentPage) continue;
    const page = pages[currentPage];
    if (!page) continue;

    // Replace title, heading1, heading2, heading3
    for (const key of ['title', 'description', 'heading1', 'heading2', 'heading3', 'para1', 'para2']) {
      if (page[key] && lines[i].match(new RegExp(`^\\t\\t\\t${key}:`))) {
        const engValue = lines[i];
        // Check if it's still in English (contains ASCII letters after the colon)
        const afterColon = engValue.split(':').slice(1).join(':').trim();
        if (afterColon.match(/^['"][\x20-\x7E]/)) {
          lines[i] = `\t\t\t${key}: ${page[key]}`;
          replCount++;
        }
      }
    }

    // Replace items arrays
    if (page.items && lines[i].match(/^\t\t\t\t'<strong>/)) {
      // Check if this line is in English
      // Items replacement is not yet implemented for this script
      // (items are handled via separate bulk-translation workflows)
    }
  }

  content = lines.join('\n');
  writeFileSync(file, content, 'utf-8');
  console.log(`✓ ${locale}.ts: ${count + replCount} page blocks translated`);
}

console.log('\nDone! Page content blocks translated.');
