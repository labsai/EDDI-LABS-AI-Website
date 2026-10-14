/**
 * Integration catalog copy, Korean. Keys match ./en.ts; facts must stay in sync with it.
 */
import { MCP_TOOLS, VECTOR_STORES } from '../stats';
import type { IntegrationsCopy } from './en';

const copy: IntegrationsCopy = {
	ui: {
		title: '통합',
		metaTitle: 'EDDI 통합: Slack, MCP, OpenAPI, SAP, 벡터 스토어, Kubernetes',
		description:
			'EDDI가 Slack, Open WebUI, Keycloak, MCP와 A2A, OpenAPI를 통한 모든 REST API, API를 통한 SAP, 여섯 가지 벡터 스토어, Kubernetes, OpenShift, Ollama와 어떻게 연결되는지 설명합니다. 각 페이지에 실제 설정 예시가 있습니다.',
		heroTitle: 'EDDI',
		heroHighlight: '통합',
		heroDesc:
			'채널, 신원, 에이전트 프로토콜, 엔터프라이즈 시스템, 벡터 스토어, 인프라를 다룹니다. 각 페이지에서 제공되는 기능, EDDI에서의 동작 방식, 실제 설정, 그리고 통합의 거버넌스(승인, 감사 원장, 시크릿 볼트)를 확인할 수 있습니다.',
		filterLabel: '카테고리별 통합 필터',
		filterAll: '전체',
		searchLabel: '통합 검색',
		searchPlaceholder: '검색 예: Slack, SAP, pgvector',
		noResults: '일치하는 통합이 없습니다. 다른 단어로 검색하거나 필터를 해제해 보세요.',
		notCoveredNote:
			'EDDI는 Microsoft Teams, Telegram, WhatsApp, Discord 채널을 제공하지 않으며, 이메일을 직접 보내지 않고, 범용 인바운드 웹훅도 없습니다. 그래도 API가 있는 시스템이라면 <a href="/integrations/openapi/">OpenAPI 가져오기</a>, HTTP 호출 또는 <a href="/integrations/mcp-client/">MCP</a>로 연결할 수 있습니다.',
		backToCatalog: '모든 통합',
		whatYouGet: '제공되는 기능',
		howItWorks: 'EDDI에서의 동작 방식',
		configTitle: '설정',
		configDesc: 'EDDI 문서를 기준으로 합니다. your-agent-id 같은 플레이스홀더는 직접 바꿔서 사용하세요.',
		governanceTitle: '거버넌스',
		goodToKnowTitle: '알아 두면 좋은 점',
		linksTitle: '문서 및 가이드',
		docsLink: '문서',
		guidesLabel: '가이드',
		relatedTitle: '관련 통합',
		getStarted: '시작하기',
		modelsLinkText: '모델 카탈로그 보기',
		solutionsTitle: '구축과 운영을 맡기고 싶으신가요?',
		solutionsDesc: 'EDDI Solutions는 커넥터를 구축하고 유지 관리하며, EDDI를 관리형 또는 공동 운영 인스턴스로 운영하고, 고객사의 클라우드나 온프레미스 환경도 지원합니다.',
		solutionsBtn: 'EDDI Solutions에 문의하기',
		sourcesDesc: '이 페이지의 설정과 동작은 {date}에 확인한 EDDI 문서를 따릅니다. 필드 이름과 기본값은 릴리스마다 달라질 수 있으므로, 사용 중인 버전의 문서에서 확인하세요.',
		copy: '복사',
		copied: '복사됨',
		pageTitle: 'EDDI의 {name}',
		pageDescription: '{name}: {summary}',
		ctaTitle: '사용 중인 시스템이 보이지 않나요?',
		ctaDesc: '어떤 시스템인지 알려 주시거나 <a href="/integrations/openapi/">OpenAPI</a> 방식으로 시작해 보세요. API가 있다면 에이전트가 승인과 감사 추적 아래에서 호출할 수 있습니다.',
	},
	categories: {
		channels: '채널',
		identity: '신원 및 보안',
		protocols: '에이전트 프로토콜',
		enterprise: '엔터프라이즈 시스템',
		data: '데이터 및 RAG',
		infrastructure: '인프라',
	},
	integrations: {
		slack: {
			summary: 'Slack에서 거버넌스가 적용된 AI 에이전트를 사용합니다. 멘션, 다이렉트 메시지, 스레드, 스레드로 스트리밍되는 그룹 토론, 승인 및 거부 버튼이 있는 Block Kit 승인 카드를 지원합니다.',
			gets: [
				'@멘션과 다이렉트 메시지에 응답하고 후속 대화를 스레드에 유지하는 에이전트',
				'메시지를 특정 에이전트나 멀티 에이전트 그룹 토론으로 보내는 트리거 키워드',
				'진행 중인 그룹 토론을 스레드로 스트리밍',
				'일시 중지된 턴, 도구 호출, 그룹 단계에 대한 Slack 승인 카드와 승인자 허용 목록',
				'하나의 EDDI에 여러 Slack 워크스페이스 연결',
			],
			steps: [
				'Slack 앱을 만들고 문서에 나온 봇 토큰 스코프(<code>chat:write</code>, <code>app_mentions:read</code>, <code>history</code> 계열과 <code>im:*</code> 계열 스코프)를 추가합니다.',
				'봇 토큰과 서명 시크릿을 EDDI 시크릿 볼트에 저장한 뒤 <code>${vault:...}</code>로 참조합니다.',
				'Slack 채널을 기본 에이전트에 연결하고, 필요하면 <code>panel:</code> 같은 트리거 키워드 뒤의 그룹에도 연결하는 채널 통합을 만듭니다.',
				'Request URL을 <code>https://&lt;your-eddi-host&gt;/integrations/slack/events</code>로 설정하고 <code>app_mention</code>, <code>message.im</code>, <code>message.channels</code>를 구독합니다. Slack이 URL을 즉시 검증하므로 이 단계는 마지막에 하세요.',
				'승인을 사용하려면 Interactivity Request URL을 <code>/integrations/slack/interactive</code>로 설정하고 승인자를 <code>hitlApproverUserIds</code>에 나열합니다.',
			],
			captions: [
				'자격 증명은 에이전트나 채널 설정이 아니라 볼트에 저장합니다.',
				'기본 에이전트, 트리거 키워드 뒤의 그룹, platformConfig의 승인 설정이 있는 채널 통합입니다.',
			],
			governance: [
				'승인 카드에는 승인(Approve) 버튼과 거부(Reject) 버튼이 있습니다. <code>hitlApproverUserIds</code>에 나열된 Slack 사용자만 결정할 수 있습니다. 이 목록이 없으면 버튼이 표시되지 않고 대화형 결정은 거부됩니다(fail-closed).',
				'도구 호출 카드에는 도구 이름과, 마스킹되고 잘린 인자가 표시되므로 승인자는 무엇을 승인하는지 확인할 수 있습니다. 버전 1에서는 버튼이 일괄 처리 전체를 승인하거나 거부합니다.',
				'각 결정은 <code>slack:&lt;userId&gt;</code>의 이름으로 기록되며 감사 원장에 남습니다.',
				'수신 이벤트는 서명 시크릿(HMAC-SHA256)과 리플레이 방지로 검증하며, 시크릿 자체는 볼트에만 보관됩니다.',
			],
			goodToKnow: [
				'Slack은 EDDI가 채널을 제공하는 유일한 서드파티 채팅 플랫폼입니다. 포함되지 않는 항목은 카탈로그 페이지의 안내를 참고하세요.',
				'선택 사항인 관찰 모드에서는 대상이 일반 채널 대화를 볼 수 있으며, 트리거, 쿨다운, 일일 응답 및 비용 한도가 적용됩니다. 이 한도는 EDDI 노드별로 적용됩니다.',
			],
		},
		'open-webui': {
			summary: 'EDDI는 배포된 에이전트를 모델로 제공하는 OpenAI 호환 /v1 API를 제공하므로 Open WebUI, OpenAI SDK, LangChain, LiteLLM이 에이전트와 대화할 수 있습니다.',
			gets: [
				'Open WebUI 모델 드롭다운에 표시되는 배포된 EDDI 에이전트',
				'스트리밍과 토큰 사용량 보고를 지원하는 Chat Completions',
				'채팅 하나당 EDDI 대화 하나를 사용하므로 메모리와 behavior rules가 턴을 넘어 유지됨',
				'제목 생성 같은 단일 턴 호출을 위한 무상태 변형(<code>:stateless</code> 모델 ID)',
			],
			steps: [
				'<code>EDDI_OPENAI_COMPAT_ENABLED=true</code>로 어댑터를 활성화하고 API 키를 설정합니다. 기본적으로 비활성화되어 있습니다.',
				'EDDI에서 에이전트를 배포합니다. 에이전트는 <code>GET /v1/models</code>에 나타납니다.',
				'Open WebUI(또는 SDK)가 같은 API 키로 <code>http://&lt;eddi&gt;:7070/v1</code>을 가리키도록 설정합니다.',
				'Open WebUI에서 <code>ENABLE_FORWARD_USER_INFO_HEADERS</code>를 켭니다. 켜지 않으면 모든 채팅 창이 하나의 EDDI 대화를 공유합니다.',
				'모델 목록에서 에이전트를 선택하고 대화합니다.',
			],
			captions: [
				'EDDI 문서의 운영 환경용 compose 발췌입니다. 예시 API 키는 반드시 변경하세요.',
				'셸에서 엔드포인트를 확인합니다. EDDI_API_KEY는 compose 파일과 같은 값으로 설정하세요.',
			],
			governance: [
				'이 API는 자체 API 키 인증을 사용하며 활성화하기 전까지는 꺼져 있습니다. 포트에 접근할 수 있는 누구에게나 대화 생성이 열리게 되는 조합에서는 EDDI가 시작을 거부합니다.',
				'에이전트는 자체 승인 게이트와 감사 추적을 그대로 유지합니다. /v1을 통한 요청도 일반적인 EDDI 대화입니다.',
				'공유 API 키와 사용자 헤더를 함께 쓰면 신뢰할 수 있는 프록시인 Open WebUI에 신원 확인을 위임하게 됩니다. 키를 다른 공유 시크릿과 똑같이 취급하고 주기적으로 교체하세요.',
			],
			goodToKnow: [
				'개별 에이전트만 모델로 표시되며, 멀티 에이전트 그룹은 표시되지 않습니다.',
				'빠른 답장과 버튼은 대화형 컨트롤이 아니라 Markdown 텍스트로 렌더링됩니다.',
				'도구 호출은 클라이언트로 반환되지 않습니다. EDDI는 도구를 자체 파이프라인 안에서 실행하며, 도구 활동은 감사 원장에서 확인할 수 있습니다.',
			],
		},
		'web-chat': {
			summary: 'EDDI가 직접 제공하는 테마 적용 가능한 React 채팅 UI입니다. 스트리밍 응답, Markdown, 빠른 답장, 실행 취소를 지원하며 직접 열거나 페이지에 임베드할 수 있습니다.',
			gets: [
				'배포된 모든 에이전트를 위한 /chat/{environment}/{agentId} 채팅 페이지',
				'토큰 단위 스트리밍, 풍부한 Markdown, 코드 하이라이트, LaTeX 수식',
				'다크 및 라이트 테마, 빠른 답장 버튼, 실행 취소와 다시 실행',
				'임베드 위젯에 집중할 수 있도록 컨트롤을 숨기고 제목을 설정하는 URL 매개변수',
				'백엔드가 필요 없는 데모 모드',
			],
			steps: [
				'EDDI를 실행합니다. 채팅 UI는 EDDI 이미지에 포함되어 있으며 설치 프로그램에도 들어 있습니다.',
				'EDDI 호스트에서 <code>/chat/&lt;environment&gt;/&lt;agentId&gt;</code>를 엽니다.',
				'<code>theme</code>, <code>title</code>, <code>hideUndo</code>, <code>hideNewConversation</code> 같은 URL 매개변수로 조정합니다.',
				'임베드하려면 같은 URL을 페이지의 iframe에 넣습니다.',
			],
			captions: [
				'채팅 UI가 제공하는 URL 패턴입니다.',
				'채팅 UI README의 임베드 위젯 예시입니다. 표시 매개변수는 필요에 따라 조합하세요.',
			],
			governance: [
				'채팅은 다른 모든 클라이언트와 같은 대화 API를 사용하므로 behavior rules, 승인 게이트, 감사 원장이 그대로 적용됩니다.',
				'인증이 켜져 있으면 위젯에는 로그인한 사용자의 액세스 토큰이 필요하며, 백엔드가 모든 호출에서 이를 검증합니다.',
				'에이전트가 생성한 텍스트는 모두 신뢰할 수 없는 출력으로 취급하세요. 채팅 UI는 에이전트가 보낸 Markdown을 렌더링합니다.',
			],
			goodToKnow: [
				'EDDI는 기본적으로 프레임 삽입을 금지하는 정책으로 응답하므로, 운영자가 해당 오리진을 허용하기 전에는 브라우저가 다른 사이트 안에 채팅을 표시하지 않습니다. 사용 중인 버전의 프레임 설정은 채팅 UI README를 확인하세요.',
			],
		},
		'keycloak-oidc': {
			summary: 'Keycloak 또는 다른 OIDC 공급자로 EDDI 앞에 OpenID Connect 인증을 적용합니다. 관리자, 편집자, 사용자, 뷰어, 승인자 역할을 제공합니다.',
			gets: [
				'ID 공급자를 통한 Manager 및 API 로그인',
				'역할: <code>eddi-admin</code>, <code>eddi-editor</code>, <code>eddi-user</code>, <code>eddi-viewer</code>, 그리고 승인 결정을 위한 <code>eddi-approver</code>',
				'설치 프로그램이 Keycloak으로 가져오는 준비된 <code>eddi</code> 렐름',
				'로그인한 사용자로 실행되는 호출이므로 감사 추적에 실제 사용자가 기록됨',
			],
			steps: [
				'설치 프로그램을 <code>--with-auth</code>와 함께 실행합니다. Keycloak이 시작되고 첫 부팅 때 <code>eddi</code> 렐름을 가져옵니다.',
				'Keycloak 관리 콘솔에서 <code>eddi</code> 사용자의 비밀번호를 설정합니다. 포함된 렐름에는 비밀번호가 없습니다.',
				'Manager에 로그인합니다. 사용자에게 필요한 역할을 부여하고 승인자를 <code>eddi-approver</code>에 추가합니다.',
				'기존 ID 공급자를 사용하려면 <code>QUARKUS_OIDC_*</code> 변수(테넌트 활성화, 인증 서버 URL, 클라이언트 ID, 클라이언트 시크릿)를 설정합니다.',
				'HTTP 호출에서는 <code>${caller:token}</code>을 사용해 하나의 공유 자격 증명 대신 로그인한 사용자 본인의 토큰으로 API를 호출합니다.',
			],
			captions: [
				'Keycloak을 추가하는 설치 프로그램 옵션입니다.',
				'외부 OIDC 공급자용 환경 변수입니다(EDDI 문서 기준).',
			],
			governance: [
				'프로덕션 시작 모드에서는 명시적으로 옵트아웃하지 않는 한 OIDC가 꺼진 상태로는 EDDI가 시작을 거부합니다. 따라서 관리 API가 열려 있다면 실수가 아니라 의도적인 결정입니다.',
				'승인 엔드포인트에는 <code>eddi-approver</code> 역할이 필요하며, 소유자나 <code>eddi-admin</code>도 사용할 수 있습니다.',
				'<code>${caller:token}</code>을 사용하면 감사 추적에 실제 사용자가 기록됩니다. 공유 정적 자격 증명을 쓰면 모든 작업이 하나의 주체로 뭉뚱그려집니다.',
			],
			goodToKnow: [
				'인증은 선택 사항이며 기본적으로 꺼져 있습니다. 설치 프로그램이 프로비저닝하는 것은 Keycloak입니다. 다른 OIDC 공급자도 같은 설정을 사용하지만, 일부 세부 사항(예: A2A에서 공개하는 토큰 엔드포인트)은 설정하지 않으면 Keycloak 경로를 가정합니다.',
				'포함된 렐름 가져오기는 한 번만 수행됩니다. 이후 JSON을 수정해도 실행 중인 Keycloak에는 반영되지 않습니다.',
			],
		},
		'secrets-vault': {
			summary: '봉투 암호화를 사용하는 내장 시크릿 볼트입니다. 설정에서는 시크릿을 ${vault:keyName}으로 참조하며, 값은 에이전트 설정, 내보내기, 로그에 남지 않습니다.',
			gets: [
				'LLM, HTTP 호출, MCP, RAG 설정에서 쓰는 <code>${vault:keyName}</code> 참조',
				'테넌트별 데이터 키를 사용하는 AES-256-GCM 봉투 암호화',
				'에이전트별 권한 부여: 어떤 에이전트가 어떤 시크릿을 사용할 수 있는지 지정',
				'설정 내보내기에서는 시크릿이 제거되고 로그에서는 마스킹됨',
			],
			steps: [
				'볼트 마스터 키(<code>EDDI_VAULT_MASTER_KEY</code>)를 설정합니다. 설치 프로그램이 자동으로 생성합니다. 키가 없으면 볼트는 비활성화됩니다.',
				'<code>PUT /secretstore/secrets/{tenantId}/{keyName}</code> 또는 Manager를 통해 시크릿을 저장합니다.',
				'설정에서 <code>${vault:keyName}</code>으로 참조합니다.',
				'EDDI는 런타임에 참조를 해석합니다. 평문은 대화 메모리에 저장되지 않습니다.',
				'<code>allowedAgents</code>를 해당 시크릿이 필요한 에이전트로만 좁힙니다. 이 검사는 에이전트를 배포할 때 실행됩니다.',
			],
			captions: [
				'시크릿을 저장합니다. 응답에는 값이 반환되지 않습니다.',
				'LLM 태스크에서 이름으로 시크릿을 참조합니다.',
				'값을 건드리지 않고 시크릿을 사용할 수 있는 대상을 변경합니다.',
			],
			governance: [
				'권한 부여는 기본적으로 배포 시점에 강제됩니다. 권한이 없는 시크릿을 참조하는 에이전트는 배포되지 않습니다.',
				'사용자 입력이나 모델 응답처럼 대화 데이터를 통해 들어온 볼트 참조는 해석되지 않고 거부됩니다.',
				'평문은 요청 기록, 승인 미리 보기, 요청 로그 행에서 마스킹됩니다.',
				'인증이 켜져 있으면 볼트 엔드포인트는 <code>eddi-admin</code> 역할로 보호됩니다.',
			],
			goodToKnow: [
				'EDDI에는 HashiCorp Vault, AWS, Azure용 네이티브 클라이언트가 없습니다. Kubernetes에서는 External Secrets Operator가 볼트 마스터 키를 담은 <code>eddi-secrets</code> Kubernetes Secret을 HashiCorp Vault, AWS Secrets Manager, Azure Key Vault에서 동기화할 수 있습니다. 개별 시크릿은 여전히 EDDI 볼트에 저장됩니다.',
				'마스터 키를 잃어버리면 암호화된 시크릿을 복구할 수 없습니다. 반드시 백업하세요.',
			],
		},
		'mcp-server': {
			summary: `Claude Desktop, Cursor, VS Code 등의 MCP 클라이언트에서 EDDI를 제어합니다. EDDI는 대화와 관리를 위한 MCP 도구 ${MCP_TOOLS}개를 Streamable HTTP로 제공합니다.`,
			gets: [
				`도구 ${MCP_TOOLS}개: 에이전트 목록 조회와 대화, 생성과 배포, 그룹과 스케줄 관리 등`,
				'Streamable HTTP를 사용하는 단일 엔드포인트 <code>/mcp</code>',
				'HTTP를 직접 사용하는 클라이언트를 지원하며, 브리지를 통해 stdio 전용 클라이언트도 지원',
				'인증이 켜져 있을 때 역할 기반 접근 제어',
			],
			steps: [
				'EDDI를 실행합니다. MCP 엔드포인트는 <code>http://localhost:7070/mcp</code>입니다.',
				'MCP 클라이언트에 EDDI를 추가합니다. HTTP를 지원하는 클라이언트는 URL을 직접 사용합니다.',
				'Claude Desktop 같은 stdio 전용 클라이언트는 예시처럼 <code>mcp-remote</code> 브리지를 사용합니다.',
				'어시스턴트에게 에이전트 목록 조회, 대화 시작, 에이전트 생성을 요청합니다. 문서에 나온 흐름은 <code>list_agents</code>, <code>create_conversation</code>, <code>talk_to_agent</code>입니다.',
				'OIDC가 켜져 있으면 클라이언트에 베어러 토큰을 제공합니다.',
			],
			captions: [
				'네이티브 HTTP 전송을 지원하는 클라이언트용입니다.',
				'stdio 전용 클라이언트용입니다. Windows에서 npx가 PATH에 없다면 명령을 cmd /c로 감싸세요.',
			],
			governance: [
				'<code>setup_agent</code>, <code>create_api_agent</code> 같은 쓰기 도구에는 <code>eddi-editor</code> 역할이 필요합니다.',
				'MCP의 <code>create_api_agent</code> 도구는 의도적으로 승인 게이트를 설정할 수 없게 되어 있습니다. 게이트가 적용된 에이전트의 프로비저닝은 <code>eddi-admin</code> 권한으로 REST를 통해 수행합니다.',
				'승인을 기다리는 그룹 단계는 Manager, REST, Slack뿐 아니라 MCP로도 승인할 수 있으며, 모든 결정은 감사됩니다.',
			],
			goodToKnow: [
				'프로덕션 시작은 옵트아웃하지 않는 한 OIDC가 꺼진 상태로는 실행을 거부합니다. 옵트아웃한 인스턴스에서는 포트에 접근할 수 있는 누구에게나 <code>/mcp</code>가 열려 있게 됩니다.',
			],
		},
		'mcp-client': {
			summary: '외부 MCP 서버의 도구를 EDDI 에이전트에 제공합니다. 서버의 도구는 에이전트의 도구가 되며, 다른 모든 도구와 같은 승인 게이트와 감사 추적을 거칩니다.',
			gets: [
				'Streamable HTTP를 지원하는 모든 MCP 서버의 도구',
				'도구 목록을 간결하게 유지하기 위한 이름 기반 허용 및 거부 목록',
				'선택 사항인 리소스 목록 조회 및 읽기',
				'실패하는 서버에 대한 호출을 중단하는 서킷 브레이커',
			],
			steps: [
				'서버 URL, 전송 방식 <code>http</code>, <code>${vault:...}</code> 참조 형태의 API 키를 포함해 <code>mcpcalls</code> 설정을 만듭니다.',
				'워크플로 단계(<code>eddi://ai.labs.mcpcalls</code>)로 참조합니다.',
				'에이전트의 LLM 태스크가 서버의 도구를 자동으로 가져옵니다(<code>enableMcpCallTools</code>의 기본값은 true입니다).',
				'중요한 호출이 사람의 판단을 기다리도록 해당 도구를 <code>toolApprovals</code>에 추가합니다.',
				'stdio 전용 서버는 자체 컨테이너에서 HTTP 브리지 뒤에 두고 실행한 다음, EDDI가 그 브리지를 가리키게 합니다.',
			],
			captions: [
				'mcpcalls 설정입니다. 토큰은 볼트 참조입니다.',
				'읽기 전용 도구를 제외한 모든 MCP 도구에 게이트를 적용합니다.',
			],
			governance: [
				'MCP 도구 호출은 다른 모든 도구 소스와 같은 휴먼 인 더 루프 승인 게이트에 참여합니다.',
				'도구 설명에서는 지시문 형태의 텍스트가 마스킹되고 길이가 제한됩니다. 도구 결과에는 출처 정보가 덧붙으며, 기본적으로 지시문 형태의 내용은 마스킹됩니다.',
				'도구 화이트리스트는 컨텍스트 관리일 뿐 보안 경계가 아닙니다. 경계는 연결에 부여하는 자격 증명과 승인 게이트입니다.',
				'게이트를 거친 모든 결정은 감사 원장에 기록됩니다.',
			],
			goodToKnow: [
				'EDDI가 구현한 MCP 전송 방식은 Streamable HTTP 하나뿐입니다. 설정에서 편집할 수 있는 명령은 EDDI 프로세스 사용자 권한의 임의 코드 실행이 되므로, EDDI는 stdio 서버를 직접 실행하지 않습니다. 브리지 사이드카를 사용하세요.',
				'서킷 브레이커는 60초 안에 3번 실패하면 열리므로, 도구가 보이지 않는다면 대개 서버가 실패하고 있다는 뜻입니다.',
			],
		},
		a2a: {
			summary: 'Agent Card와 JSON-RPC를 통해 EDDI 에이전트를 다른 에이전트에 공개하고, 원격 A2A 에이전트를 자신의 에이전트 안에서 도구로 사용합니다.',
			gets: [
				'옵트인한 각 에이전트의 스킬을 나열하는 Agent Card',
				'<code>tasks/send</code>, <code>tasks/get</code>, <code>tasks/cancel</code>을 제공하는 JSON-RPC 2.0 엔드포인트',
				'기본 제공, MCP, HTTP 도구와 나란히 도구 호출 루프에 통합되는 원격 A2A 에이전트',
				'원격 에이전트의 일부만 공개하는 스킬 필터',
			],
			steps: [
				'<code>a2aEnabled: true</code>, 설명, 공개할 스킬을 지정해 에이전트를 옵트인합니다.',
				'피어는 <code>/a2a/agents/{agentId}/agent.json</code>에서 카드를 가져오고 <code>POST /a2a/agents/{agentId}</code>를 호출합니다.',
				'원격 에이전트를 사용하려면 LLM 태스크의 <code>a2aAgents</code>에 URL과 볼트로 참조하는 API 키를 지정해 나열합니다.',
				'EDDI는 원격 카드를 읽고 각 스킬을 <code>{agentName}_{skillId}</code>라는 이름의 도구로 만들어 <code>tasks/send</code>로 호출합니다.',
			],
			captions: [
				'에이전트를 공개합니다. A2A는 에이전트별 옵트인입니다.',
				'원격 에이전트를 사용합니다. API 키는 볼트 참조여야 합니다.',
			],
			governance: [
				'Agent Card는 설계상 익명이므로, 피어가 자격 증명을 갖기 전에도 에이전트를 발견할 수 있습니다. 인증이 켜져 있으면 에이전트 목록 조회와 JSON-RPC 엔드포인트 모두 토큰이 필요합니다.',
				'원격 에이전트의 도구도 다른 도구 소스와 같은 승인 게이트와 도구 결과 가드레일을 거치며, API 키는 볼트에 보관됩니다.',
				'<code>tasks/send</code>는 사용자의 LLM 예산으로 대화를 실행하므로 익명으로 사용할 수 없습니다.',
			],
			goodToKnow: [
				'인증이 켜져 있으면 카드가 토큰 엔드포인트를 공개합니다. <code>eddi.a2a.public-token-endpoint</code>를 설정하지 않으면 EDDI가 Keycloak 형식의 경로를 도출하므로, 다른 ID 공급자를 사용한다면 이 값을 설정하세요.',
			],
		},
		openapi: {
			summary: 'OpenAPI 3.0 또는 3.1 명세가 있는 모든 REST API를 코드 작성 없이 도구를 갖춘 에이전트로 바꾸고, 중요한 호출은 사람의 승인 뒤에 두세요.',
			gets: [
				'명세에서 생성되는 API 호출 에이전트: 태그별로 묶인 HTTP 호출 설정, 파이프라인, 배포',
				'엔드포인트 필터링, 기본 URL 재정의, 인증 헤더 전달',
				'생성된 도구와 함께 MCP 서버의 도구를 추가하는 옵션',
				'설정이므로 검토, 비교, 버전 관리가 가능한 도구',
			],
			steps: [
				'<code>create_api_agent</code> MCP 도구 또는 <code>POST /administration/agents/setup-api</code>로 EDDI에 OpenAPI 명세를 전달합니다.',
				'에이전트가 사용할 오퍼레이션을 허용 목록에 등록합니다. 선언되지 않은 엔드포인트는 호출할 수 없습니다.',
				'EDDI가 HTTP 호출 설정을 생성하고, 전체 파이프라인을 구성한 뒤 에이전트를 배포합니다.',
				'자격 증명은 <code>${vault:...}</code> 참조로 유지합니다.',
				'쓰기는 <code>http.*:*</code>로 게이트를 적용하고, 읽기는 <code>http.get:*</code>로 제외합니다.',
			],
			captions: [
				'생성된 도구의 바탕이 되는 httpCalls 모델입니다. 필드를 보여 주기 위해 여기서는 직접 작성했습니다.',
				'상태를 변경하는 모든 호출은 승인을 받고, 읽기는 통과시킵니다.',
			],
			governance: [
				'승인 패턴은 도구가 호출하는 대상(<code>http.post:*</code>)을 지정할 수 있어, operationId가 바뀌어도 정확하게 유지됩니다.',
				'아웃바운드 호출은 플랫폼이 SSRF와 경로 순회로부터 보호합니다.',
				'REST에서는 <code>setup-api</code>가 <code>hitlConfig</code>를 받으므로, 첫 버전부터 쓰기 도구에 게이트가 적용된 에이전트를 프로비저닝할 수 있습니다. MCP 도구에서는 이 값을 설정할 수 없습니다.',
				'결정은 감사 원장에 기록됩니다.',
			],
			goodToKnow: [
				'생성된 쓰기 도구는 요청 본문 전체를 하나의 <code>requestBody</code> 매개변수로 받습니다.',
			],
		},
		sap: {
			summary: 'EDDI에는 네이티브 SAP 커넥터가 없습니다. SAP에는 OpenAPI 가져오기나 HTTP 호출로 OData 및 REST API를 통해, 또는 MCP 서버를 통해 연결하며, 승인과 감사 원장이 적용됩니다.',
			gets: [
				'공개된 API를 통해 SAP에서 읽고, 승인을 받아 쓰는 에이전트',
				'다른 도구와 같은 거버넌스: 승인, 감사 원장, 볼트에 보관되는 자격 증명',
				'에이전트에 코드가 필요 없습니다. 연결은 검토할 수 있는 설정입니다',
			],
			steps: [
				'방식을 선택합니다. SAP 서비스가 OpenAPI 명세를 공개한다면 OpenAPI 가져오기를 사용합니다. 개별 OData 또는 REST 요청을 선언하려면 HTTP 호출을 사용합니다. 이미 SAP 앞단에서 MCP 서버를 운영하고 있다면 MCP를 사용합니다.',
				'SAP 자격 증명이나 토큰을 시크릿 볼트에 저장하고 <code>${vault:...}</code>로 참조합니다.',
				'먼저 비즈니스 객체 목록 조회나 읽기처럼 에이전트에 필요한 읽기 오퍼레이션만 선언합니다.',
				'모든 쓰기에 <code>http.*:*</code>로 게이트를 적용하고 읽기는 <code>http.get:*</code>로 제외합니다. 승인자는 Manager 또는 Slack에서 결정합니다.',
				'에이전트가 할 수 있는 범위를 넓히기 전에 각 호출에 대한 감사 원장을 확인합니다.',
			],
			captions: [
				'SAP OData 서비스에서 읽는 예시입니다. 호스트, 서비스 경로, 인증 방식은 SAP 시스템에 따라 달라집니다.',
				'쓰기는 사람의 판단을 기다리고, 읽기는 통과합니다.',
			],
			governance: [
				'쓰기는 승인 대기 상태로 보류되며, 그 결정은 HMAC 서명이 된 추가 전용 감사 원장에 기록됩니다.',
				'자격 증명은 볼트에 보관되며 에이전트 설정이나 내보내기에는 나타나지 않습니다.',
				'엔드포인트 허용 목록 덕분에, 사용자가 무엇을 입력하든 선언되지 않은 SAP 오퍼레이션은 호출할 수 없습니다.',
			],
			goodToKnow: [
				'이것은 통합 패턴이지 인증받은 SAP 커넥터가 아닙니다. SAP에 인증하는 방식과 SAP가 노출하는 API는 고객사의 시스템 환경에 따라 달라집니다.',
				'EDDI Solutions는 맞춤형 MCP 도구를 포함해 연결을 구축하고 유지 관리하며, 고객사의 클라우드나 온프레미스에서 운영할 수 있습니다.',
			],
		},
		chroma: {
			summary: 'EDDI 지식 베이스의 벡터 스토어로 사용하는 Chroma입니다. 재사용할 기존 인프라가 없을 때 가장 부담이 적은 선택입니다.',
			gets: [
				'보유한 문서를 기반으로 한 검색 증강 답변',
				`${VECTOR_STORES}가지 벡터 스토어 중 하나로, 코드가 아닌 설정으로 선택`,
				'수집 소스: 일정과 실행 이력을 갖춘 웹사이트 크롤링 및 업로드한 파일',
			],
			steps: [
				'Chroma 서버를 실행하고 URL과 컬렉션 이름을 메모해 둡니다.',
				'<code>storeType: "chroma"</code>, 스토어 매개변수, 임베딩 공급자를 지정해 RagConfiguration을 만듭니다.',
				'<code>eddi://ai.labs.rag</code> 워크플로 단계로 에이전트에 연결합니다.',
				'LLM 태스크의 <code>knowledgeBases</code>에서 이름으로 선택한 뒤 문서를 수집합니다.',
			],
			captions: [
				'지식 베이스입니다. Chroma는 기본 URL과 컬렉션 이름을 받습니다.',
				'에이전트에 연결하는 단계와 이를 사용하는 태스크입니다. 워크플로 단계를 빠뜨리는 것이 가장 흔한 실수입니다.',
			],
			governance: [
				'임베딩 API 키는 볼트 참조이므로 문서 코퍼스와 자격 증명이 분리된 상태로 유지됩니다.',
				'임베딩 호출은 문서 텍스트를 호스팅형 임베딩 공급자에게 보냅니다. 데이터가 인프라 밖으로 나가면 안 된다면 자체 호스팅 임베딩 모델을 사용하세요.',
				'공개된 벡터 스토어는 코퍼스의 사본이 노출된 것과 같습니다. Chroma는 인증을 켜고 공개 인터페이스에서 분리해 운영하세요.',
			],
			goodToKnow: [
				'문서 청크 교체는 인메모리와 pgvector에서 검증되었습니다. Chroma에서는 동작할 것으로 예상되지만 테스트로 검증되지 않았으므로, 다시 수집한 문서에 오래된 청크가 남을 수 있습니다.',
			],
		},
		pgvector: {
			summary: 'EDDI 지식 베이스의 벡터 스토어로 사용하는 PostgreSQL과 pgvector입니다. 이미 PostgreSQL을 운영하고 있다면 권장되는 영속 스토어 선택입니다.',
			gets: [
				'이미 백업하고 운영하는 데이터베이스 안의 지식 베이스',
				'재수집 시 검증된 문서 교체',
				'다른 모든 스토어와 동일한 에이전트 설정이며, 스토어 매개변수만 달라짐',
			],
			steps: [
				'PostgreSQL에서 pgvector 확장을 활성화하고 데이터베이스와 사용자를 만듭니다.',
				'<code>storeType: "pgvector"</code>, 연결 정보, 테이블, 벡터 <code>dimension</code>을 지정해 RagConfiguration을 만듭니다.',
				'<code>eddi://ai.labs.rag</code> 워크플로 단계로 연결합니다.',
				'LLM 태스크에서 이름으로 선택하고 문서를 수집합니다.',
			],
			captions: [
				'dimension은 임베딩 모델과 일치해야 합니다. 1536은 text-embedding-3-small에 해당합니다.',
				'지식 베이스를 에이전트에 연결하고 태스크에서 사용합니다.',
			],
			governance: [
				'데이터베이스 비밀번호는 필수 매개변수입니다. 볼트 참조로 유지하세요.',
				'기존 PostgreSQL 접근 제어와 백업이 벡터에도 그대로 적용됩니다.',
				'임베딩 호출은 문서 텍스트를 사용자가 설정한 임베딩 공급자에게 보냅니다.',
			],
			goodToKnow: [
				'인메모리 스토어는 개발용입니다. 30분 동안 쿼리가 없거나 재시작하면 비워집니다. 프로덕션에서는 pgvector 같은 영속 스토어를 선택하세요.',
			],
		},
		qdrant: {
			summary: 'EDDI 지식 베이스의 벡터 스토어로 사용하는 Qdrant입니다. 확장 여지가 있는 벡터 전용 데이터베이스입니다.',
			gets: [
				'지식 베이스 뒤에 두는 전용 벡터 데이터베이스',
				'선택 사항인 API 키와 TLS',
				'다른 모든 스토어와 동일한 에이전트 설정',
			],
			steps: [
				'Qdrant 서버를 실행하고 호스트와 gRPC 포트(EDDI 기본값은 6334)를 메모해 둡니다.',
				'<code>storeType: "qdrant"</code>와 <code>collectionName</code>을 지정해 RagConfiguration을 만듭니다.',
				'<code>eddi://ai.labs.rag</code> 워크플로 단계로 연결합니다.',
				'LLM 태스크에서 이름으로 선택하고 문서를 수집합니다.',
			],
			captions: [
				'Qdrant는 호스트, 포트, 컬렉션 이름을 받습니다. apiKey와 useTls는 선택 사항입니다.',
				'지식 베이스를 에이전트에 연결하고 태스크에서 사용합니다.',
			],
			governance: [
				'Qdrant에 API 키가 필요하다면 볼트에서 참조하세요.',
				'임베딩 호출은 문서 텍스트를 사용자가 설정한 임베딩 공급자에게 보냅니다.',
				'공개된 벡터 스토어는 코퍼스의 사본이 노출된 것과 같습니다. 공개 인터페이스에서 분리해 두세요.',
			],
			goodToKnow: [
				'문서 청크 교체는 Qdrant에서도 동작할 것으로 예상되지만 테스트로 검증되지 않았습니다. 이 기능이 없으면 다시 수집한 문서에 오래된 청크가 남을 수 있습니다.',
			],
		},
		elasticsearch: {
			summary: 'EDDI 지식 베이스의 벡터 스토어로 사용하는 Elasticsearch입니다. 이미 운영 중이며 키워드 검색과 벡터 검색을 한곳에서 하고 싶을 때 유용합니다.',
			gets: [
				'이미 운영하는 클러스터 안의 지식 베이스',
				'API 키 또는 사용자 이름과 비밀번호 인증',
				'다른 모든 스토어와 동일한 에이전트 설정',
			],
			steps: [
				'Elasticsearch 클러스터에 접근할 수 있는지 확인하고 인덱스 이름을 정합니다.',
				'<code>storeType: "elasticsearch"</code>, <code>serverUrl</code>, <code>indexName</code>을 지정해 RagConfiguration을 만듭니다.',
				'<code>eddi://ai.labs.rag</code> 워크플로 단계로 연결합니다.',
				'LLM 태스크에서 이름으로 선택하고 문서를 수집합니다.',
			],
			captions: [
				'serverUrl의 기본값은 localhost:9200입니다. 보안이 설정된 클러스터에서는 apiKey 또는 userName과 password를 추가하세요.',
				'지식 베이스를 에이전트에 연결하고 태스크에서 사용합니다.',
			],
			governance: [
				'API 키나 비밀번호는 볼트에서 참조하세요.',
				'임베딩 호출은 문서 텍스트를 사용자가 설정한 임베딩 공급자에게 보냅니다.',
				'기존 클러스터의 접근 제어가 벡터에도 그대로 적용됩니다.',
			],
			goodToKnow: [
				'문서 청크 교체는 Elasticsearch에서도 동작할 것으로 예상되지만 테스트로 검증되지 않았습니다. 이 기능이 없으면 다시 수집한 문서에 오래된 청크가 남을 수 있습니다.',
			],
		},
		'mongodb-atlas-vector-search': {
			summary: 'EDDI 지식 베이스의 벡터 스토어로 사용하는 MongoDB Atlas Vector Search입니다. 이미 Atlas에서 운영 중이라면 자연스러운 선택입니다.',
			gets: [
				'이미 운영하는 Atlas 클러스터 안의 지식 베이스',
				'연결 문자열, 데이터베이스, 컬렉션, 인덱스 이름으로 설정',
				'다른 모든 스토어와 동일한 에이전트 설정',
			],
			steps: [
				'Atlas에서 벡터 검색 인덱스를 만들고 데이터베이스, 컬렉션, 인덱스 이름을 메모해 둡니다.',
				'<code>storeType: "mongodb-atlas"</code>와 스토어 매개변수를 지정해 RagConfiguration을 만듭니다.',
				'<code>eddi://ai.labs.rag</code> 워크플로 단계로 연결합니다.',
				'LLM 태스크에서 이름으로 선택하고 문서를 수집합니다.',
			],
			captions: [
				'연결 문자열에는 자격 증명이 포함되므로 여기서는 볼트 참조로 사용합니다.',
				'지식 베이스를 에이전트에 연결하고 태스크에서 사용합니다.',
			],
			governance: [
				'연결 문자열은 설정이 아니라 볼트에 보관하세요.',
				'임베딩 호출은 문서 텍스트를 사용자가 설정한 임베딩 공급자에게 보냅니다.',
				'Atlas의 접근 제어와 네트워크 규칙이 벡터에도 그대로 적용됩니다.',
			],
			goodToKnow: [
				'문서 청크 교체는 Atlas에서도 동작할 것으로 예상되지만 테스트로 검증되지 않았습니다. 이 기능이 없으면 다시 수집한 문서에 오래된 청크가 남을 수 있습니다.',
			],
		},
		'kubernetes-helm': {
			summary: '단일 파일 퀵스타트, Helm 차트 또는 Kustomize 오버레이로 표준을 준수하는 모든 Kubernetes 클러스터에서 MongoDB 또는 PostgreSQL과 함께 EDDI를 실행합니다.',
			gets: [
				'EDDI와 MongoDB를 배포하는 퀵스타트 매니페스트',
				'프로덕션 프로필을 위한 Helm 차트와 Kustomize 오버레이',
				'선택 구성 요소: Keycloak 인증, NATS JetStream, 모니터링, 인그레스, 파드 중단 예산, 네트워크 정책',
				'데이터 저장소로 MongoDB 또는 PostgreSQL 사용',
			],
			steps: [
				'퀵스타트 매니페스트를 적용하거나, 볼트 마스터 키를 지정해 Helm 차트를 설치합니다.',
				'볼트 마스터 키를 담는 <code>eddi-secrets</code> Secret을 만듭니다. 어떤 매니페스트도 이 Secret을 작성하지 않는데, 의도된 동작입니다.',
				'MongoDB 또는 PostgreSQL용 데이터베이스 오버레이나 Helm values를 선택합니다.',
				'Keycloak, 인그레스 등 필요한 선택 구성 요소를 추가합니다.',
				'프로덕션 시크릿은 External Secrets Operator로 <code>eddi-secrets</code>를 동기화합니다.',
			],
			captions: [
				'명령 하나로 EDDI와 MongoDB를 실행합니다. 파드는 eddi-secrets Secret이 생길 때까지 대기합니다.',
				'생성한 볼트 마스터 키로 수행하는 Helm 설치입니다.',
				'데이터 저장소를 PostgreSQL로 전환하는 Helm values입니다.',
			],
			governance: [
				'어떤 매니페스트도 마스터 키 Secret을 작성하지 않으므로, 다시 적용해도 사용 중인 키가 교체되어 기존 시크릿을 복호화할 수 없게 되는 일이 없습니다.',
				'Helm과 Kustomize용으로 포함된 Keycloak 렐름은 권한이 높은 계정에 기본 비밀번호를 설정하지 않습니다.',
				'프로덕션 프로필에는 파드 중단 예산과 네트워크 정책이 추가됩니다.',
			],
			goodToKnow: [
				'External Secrets Operator는 <code>eddi-secrets</code> Secret을 AWS Secrets Manager, HashiCorp Vault, Azure Key Vault 등에서 동기화할 수 있습니다. EDDI 자체에는 이들을 위한 네이티브 클라이언트가 없습니다.',
				'EDDI Solutions는 고객사의 클라우드, 온프레미스 또는 전용 관리형 인스턴스로 EDDI를 운영해 드릴 수 있습니다.',
			],
		},
		openshift: {
			summary: 'EDDI는 UBI 10 기반의 Red Hat 인증 컨테이너 이미지를 제공하며, OpenShift 4.12 이상에서 비루트로 실행됩니다. OperatorHub용 Operator도 제공합니다.',
			gets: [
				'Red Hat Ecosystem Catalog에 등재된 Red Hat 인증 이미지',
				'OpenJDK 25가 포함된 UBI 10 기반에서 UID 185로 비루트 실행',
				'사용자 정의 리소스로 EDDI 인스턴스와 라우트를 만드는 Operator',
				'Red Hat preflight로 CI에서 인증 확인',
			],
			steps: [
				'OpenShift 4.12 이상에서 OperatorHub를 열고 EDDI Operator를 설치합니다.',
				'Installed Operators에서 MongoDB의 크기와 스토리지를 지정해 <code>Eddi</code> 인스턴스를 만듭니다.',
				'Operator가 라우트를 자동으로 만듭니다.',
				'다른 클러스터와 마찬가지로 인증과 시크릿을 추가합니다.',
			],
			captions: ['문서에 나온 Eddi 사용자 정의 리소스 예시입니다.'],
			governance: [
				'컨테이너는 비루트 사용자로 실행되며, 이미지에는 서드파티 라이선스 파일이 포함되어 있습니다.',
				'릴리스는 CI에서 Red Hat 인증 요건에 맞춰 검사됩니다.',
				'프로덕션 시작에는 명시적으로 옵트아웃하지 않는 한 여전히 OIDC가 필요합니다.',
			],
			goodToKnow: [
				'Operator는 MongoDB와 PostgreSQL을 모두 지원하도록 EDDI 6용으로 업데이트하고 있습니다. 일반 Kubernetes 방식은 표준을 준수하는 모든 클러스터에서 동작합니다.',
				'UBI 10 이미지는 RHEL 8 호스트를 지원하지 않습니다. RHEL 9 이상을 사용하세요.',
			],
		},
		ollama: {
			summary: 'Ollama로 모델을 로컬에서 실행해 프롬프트와 문서를 자체 하드웨어에 두세요. 온프레미스 및 폐쇄망 환경에 적합합니다.',
			gets: [
				'Ollama 서버와 통신하는 <code>ollama</code> 유형의 LLM 태스크',
				'공급자 API 키가 필요 없고 호스팅 모델로 데이터를 보내지 않음',
				'EDDI 옆에서 Ollama를 시작하는 compose 오버레이',
				'작은 양자화 모델을 위한 대안으로 프로세스 내 Jlama 제공',
			],
			steps: [
				'Ollama compose 오버레이로 EDDI를 시작하거나, Ollama를 직접 실행하고 URL을 메모해 둡니다.',
				'Ollama에 모델을 pull합니다. 모델 태그는 <code>ollama list</code>에 표시되는 그대로 사용하세요.',
				'태스크의 <code>type</code>을 <code>ollama</code>로 설정하고 <code>baseUrl</code>과 <code>model</code>을 지정합니다.',
				'컨테이너 안에서 <code>localhost</code>는 그 컨테이너 자신을 가리킵니다. compose 서비스 이름이나 <code>host.docker.internal</code>을 사용하세요.',
			],
			captions: [
				'같은 네트워크에서 http://ollama:11434로 Ollama를 실행합니다.',
				'EDDI 문서의 Ollama 태스크 예시입니다.',
			],
			governance: [
				'프롬프트, 검색된 컨텍스트, 답변이 사용자의 네트워크 안에 머뭅니다. 이것이 로컬 모델을 쓰는 이유입니다.',
				'승인, behavior rules, 감사 원장은 호스팅 모델을 쓸 때와 똑같이 적용됩니다.',
				'자격 증명이 필요 없으므로 모델 자체를 위해 볼트에 넣을 것이 없습니다.',
			],
			goodToKnow: [
				'완전한 폐쇄망 환경에는 로컬 Ollama나 미리 채워 둔 Jlama 캐시가 필요합니다. 네트워크가 없으면 EDDI가 모델을 내려받을 수 없기 때문입니다.',
				'로컬 모델은 도구 호출과 JSON 신뢰도가 제각각입니다. 의존하는 동작은 직접 테스트하세요.',
			],
		},
	},
};

export default copy;
