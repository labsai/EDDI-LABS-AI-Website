/**
 * Head-to-head comparison copy, Korean. Keys match src/data/comparisons.ts.
 * Competitor facts are dated "as of October 2026"; sources are listed in the
 * header of src/data/comparisons.ts.
 */
import type { CompareCopy } from './en';
import { MCP_TOOLS, FRAMEWORKS, LLM_PROVIDERS, TESTS, EMBEDDING_PROVIDERS, VECTOR_STORES } from '../stats';

const EDDI_LICENSE = 'Apache 2.0, OSI 승인';

const copy: CompareCopy = {
	ui: {
		shortAnswer: '짧은 답',
		chooseTitle: '둘 사이에서 고르기',
		faqTitle: '자주 묻는 질문',
		otherTitle: '다른 비교',
		allAlternatives: '모든 대안: 빌더, 라이브러리, 클라우드 플랫폼',
		asOfNote: '다른 도구에 대한 내용은 2026년 10월 기준으로 공식 문서와 저장소를 확인한 것입니다. 이러한 프로젝트는 변화가 빠르므로, 결정하기 전에 해당 벤더에서 최신 동작을 확인하세요.',
		backToHub: '전체 비교',
		hubTitle: 'EDDI 비교: Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n 등',
		hubMetaTitle: 'EDDI vs. Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n, Flowise, Rasa',
		hubDescription: 'EDDI와 Dify, CrewAI, LangChain 및 LangGraph, Microsoft Agent Framework(AutoGen 및 Semantic Kernel), n8n, Flowise, Rasa를 일대일로 균형 있게 비교합니다. 상대 도구가 더 나은 선택인 경우도 포함합니다.',
		hubIntro: '각 페이지는 EDDI를 하나의 대안과 동일한 기준(아키텍처, 거버넌스, 라이선스, 운영)으로 비교합니다. 상대 도구가 더 나은 선택인 경우와, 옮기기로 결정했을 때의 마이그레이션 방법을 솔직하게 설명합니다.',
		hubReadMore: '비교 읽기',
		hubLandscapeTitle: '더 넓은 지형을 찾고 계신가요?',
		hubLandscapeDesc: '대안 개요는 이 분야를 비주얼 빌더, 코드 라이브러리, 클라우드 AI 플랫폼이라는 유형별로 묶어 보여줍니다.',
		headToHeadTitle: '일대일 비교',
		headToHeadIntro: '이 페이지는 유형별로 지형을 정리합니다. 특정 대안과의 직접 비교, 즉 그 대안이 더 나은 선택인 경우와 기존 프로젝트를 마이그레이션하는 방법은 다음을 참고하세요.',
		navLabel: '비교',
		navDesc: 'Dify, CrewAI, LangGraph 등과의 직접 비교',
	},
	comparisons: {
		// ─── LangChain and LangGraph ──────────────────────────────────
		'eddi-vs-langchain': {
			title: 'EDDI vs. LangChain 및 LangGraph',
			description:
				'EDDI와 LangChain 및 LangGraph의 비교: 라이브러리 대 배포 가능한 플랫폼, 코드로 정의한 그래프 대 Config-as-Code, Human-in-the-Loop, Day 2 운영 격차, 그리고 오케스트레이션을 직접 작성하는 것이 맞는 경우.',
			summary: '라이브러리와 코드로 정의한 그래프 대 배포 가능한 플랫폼, 그리고 Day 2 운영 격차.',
			verdict:
				'오케스트레이션 로직이 제품의 차별화 요소이고 이를 저장소의 코드로 두고 리뷰받고 싶다면 <strong>LangChain 또는 LangGraph</strong>를 고르세요. 오케스트레이션이 차별화되지 않은 인프라이고 직접 유지하기보다 배포해서 쓰고 싶다면 <strong>EDDI</strong>를 고르세요.',
			whatItIsTitle: 'LangChain과 LangGraph란',
			whatItIs:
				'LangChain은 LLM 애플리케이션을 구축하기 위한 MIT 라이선스의 Python 및 JavaScript 프레임워크입니다. 같은 팀의 LangGraph는 상태를 가진 에이전트를 위한 저수준 오케스트레이션 프레임워크로, 그래프를 코드로 정의하며 장애 후 재개되는 내구성 있는 실행과 에이전트 상태를 검사하고 수정할 수 있는 human-in-the-loop 체크포인트를 더합니다. LangSmith는 추적, 평가, 관측성을 위한 상용 제품이고, LangSmith Deployment는 장시간 실행되는 에이전트를 호스팅합니다. 통합 범위는 생태계에서 가장 넓습니다.',
			archetypeTitle: '라이브러리 대 플랫폼의 문제입니다',
			archetype:
				'EDDI는 경쟁하는 프레임워크가 아닙니다. EDDI는 내부적으로 LangChain의 Java 계열인 <a href="https://docs.langchain4j.dev/" target="_blank" rel="noopener">LangChain4j</a>를 사용합니다. 진짜 질문은 어떤 추상화가 더 나은가가 아닙니다. 제어 흐름이 직접 작성하는 코드(LangGraph 그래프)에 있는지, 배포하는 선언적 구성에 있는지, 그리고 그 주변의 모든 것, 즉 REST 계층, 인증, 테넌시, 상태, 감사, 비개발자가 쓰는 인터페이스를 누가 만들고 소유하는지입니다.',
			tableTitle: '직접 만드는 것과 배포하는 것',
			tableHeaders: { dimension: '항목', them: 'LangChain / LangGraph', eddi: 'EDDI' },
			rows: [
				{ dimension: '형태', them: '애플리케이션에 가져와 쓰는 라이브러리', eddi: '배포 가능한 미들웨어, Docker가 동작하는 곳이면 어디서나 실행' },
				{ dimension: '오케스트레이션 로직', them: '저장소에 있는 Python 또는 TypeScript 그래프', eddi: 'JSON 구성과 결정론적 behavior rules, 재배포 없이 변경' },
				{ dimension: 'Human in the loop', them: 'Interrupt로 상태를 검사하고 수정할 수 있으며, 승인 UI와 정책은 직접 구축', eddi: '턴, 도구 호출, 그룹 단계에 대한 게이트와 타임아웃 정책, Manager 및 Slack 승인' },
				{ dimension: '내구성', them: '직접 구성하는 영속성을 갖춘 내구성 있는 실행', eddi: '플랫폼이 영속화하는 대화 메모리와 AWAITING_HUMAN 같은 명시적 상태' },
				{ dimension: 'REST API와 라우팅', them: '직접 구축하거나 LangSmith Deployment에서 호스팅', eddi: '기본 제공, 그리고 OpenAPI 3.1, A2A 프로토콜, SSE 스트리밍' },
				{ dimension: '인증과 RBAC', them: '직접 구축', eddi: 'eddi-admin 및 eddi-approver 역할을 갖춘 선택적 OIDC/Keycloak' },
				{ dimension: '비개발자용 인터페이스', them: '직접 구축 (LangSmith Studio는 개발자를 대상으로 함)', eddi: 'EDDI Manager, 11개 언어를 지원하는 프로덕션급 React UI' },
				{ dimension: '시크릿 관리', them: '직접 구축하거나 vault를 가져옴', eddi: '내장 AES-256-GCM Secrets Vault, ${vault:key}로 참조' },
				{ dimension: '관측성', them: 'LangSmith(상용) 또는 직접 구성한 계측', eddi: 'Prometheus 메트릭과 자동 프로비저닝되는 Grafana 대시보드' },
				{ dimension: '감사 및 규정 준수', them: '직접 구축', eddi: `HMAC 서명, 추가 전용, 순번 검증을 거치는 감사 원장, 정보 주체 권리 API, ${FRAMEWORKS}개 프레임워크 대응` },
				{ dimension: '반복 개선 루프', them: '코드 변경, 리뷰, 테스트, 배포', eddi: 'UI 또는 API에서 구성 변경, 즉시 적용' },
				{ dimension: '제어의 상한', them: '없음. 코드로 표현할 수 있는 것은 모두 가능', eddi: '구성이 표현할 수 있는 범위로 제한됨, 의도된 설계' },
			],
			betterThemTitle: 'LangChain과 LangGraph가 더 나은 선택인 경우',
			betterThem: [
				'오케스트레이션 자체가 경쟁 우위이며, 구성 저장소가 아니라 코드베이스에 있어야 합니다.',
				'사용자 정의 그래프 토폴로지, 맞춤형 재시도 의미론, 특이한 상태 머신처럼 선언적 구성으로 표현할 수 없는 제어 흐름이 필요합니다.',
				'Python 또는 TypeScript 중심 조직이며, 에이전트가 옆에 별도로 있기보다 기존 서비스 안에 있기를 원합니다.',
				'새로운 통합이 나오는 바로 그 주에 필요합니다. LangChain은 어떤 플랫폼보다 빠르게 움직입니다.',
				'팀이 한두 명의 엔지니어이고, 규정 준수 담당자도, 테넌시 요구사항도, 접근이 필요한 비개발자도 없습니다.',
			],
			betterEddiTitle: 'EDDI가 더 나은 선택인 경우',
			betterEddi: [
				'Day 2 운영 목록이 제품을 만드는 대신 팀이 하고 있는 작업이라는 점이 눈에 들어옵니다.',
				'프롬프트 엔지니어와 운영 담당자가 풀 리퀘스트 없이 에이전트 동작을 바꿔야 합니다.',
				'여러 팀이나 고객이 하나의 배포를 공유하며 격리, 쿼터, 비용 귀속이 필요합니다.',
				'조달 부서가 출시 전에 감사 추적, 데이터 레지던시, 프레임워크 적용 범위에 대한 답을 요구합니다.',
				'오케스트레이션 계층이 직접 유지하는 코드베이스가 아니라 업그레이드하는 의존성이기를 원합니다.',
			],
			migrationTitle: 'LangChain 또는 LangGraph 애플리케이션 옮기기',
			migrationIntro:
				'로직은 대개 그대로 살아남고, 주변 인프라를 더 이상 유지하지 않게 됩니다. 체인 또는 그래프 정의에서 바깥쪽으로 작업하세요. 임의의 Python에 의존하는 제어 흐름은 behavior rules 또는 선언된 도구로 바꿔야 합니다.',
			migrationSteps: [
				{ from: '체인 또는 LangGraph 그래프', to: 'EDDI 파이프라인 구성과 behavior rules' },
				{ from: '도구와 함수 호출', to: 'MCP 도구 정의 또는 httpCall 선언' },
				{ from: '사람 검토를 위한 Interrupt', to: 'PAUSE_CONVERSATION 규칙 또는 toolApprovals glob, Manager 또는 Slack에서 승인' },
				{ from: 'Checkpointer와 메모리 클래스', to: 'step, conversation, longTerm 범위를 갖춘 대화 메모리' },
				{ from: 'Retriever 및 벡터 스토어 설정', to: `${EMBEDDING_PROVIDERS}개 임베딩 제공자와 ${VECTOR_STORES}개 벡터 스토어에 걸친 RAG 구성` },
				{ from: '프롬프트 템플릿', to: '버전 관리되는 프롬프트 스니펫, 이름으로 참조' },
				{ from: 'FastAPI 래퍼', to: '내장 REST API, OpenAPI 3.1, SSE 스트리밍' },
				{ from: 'LangSmith 추적', to: 'Prometheus 메트릭, Grafana 대시보드, 감사 원장' },
			],
			faq: [
				{
					question: 'EDDI는 LangChain을 사용하나요?',
					answer:
						'EDDI는 내부적으로 Java 구현인 LangChain4j를 사용합니다. 경쟁하는 추상화가 아닙니다. EDDI는 그런 종류의 라이브러리를 중심으로 구축된 배포 가능한 플랫폼으로, 라이브러리가 의도적으로 사용자에게 맡기는 API 계층, 인증, 상태 관리, 관리 UI, 규정 준수 인프라를 제공합니다.',
				},
				{
					question: 'LangChain과 LangGraph의 차이는 무엇인가요?',
					answer:
						'LangChain은 LLM 애플리케이션을 위한 구성 요소와 통합을 제공합니다. LangGraph는 그래프로 정의되는, 상태를 가진 장시간 실행 에이전트를 위한 더 낮은 수준의 계층이며, 내구성 있는 실행과 human-in-the-loop 체크포인트를 갖춥니다. 둘 다 자체 서비스에 내장하는 라이브러리입니다. EDDI와의 비교는 둘 모두에 적용됩니다.',
				},
				{
					question: 'Day 2 운영 격차란 무엇인가요?',
					answer:
						'Day 1은 에이전트가 올바르게 응답하도록 만드는 것이며, 라이브러리가 이를 잘 처리합니다. Day 2는 그 이후의 모든 것입니다: 인증, 멀티 테넌시, 재시작 후에도 유지되는 대화 상태, 감사 로깅, 시크릿 교체, 수평 확장, 비용 추적, 그리고 Python을 쓰지 않는 사람들을 위한 인터페이스. 팀은 에이전트 자체보다 Day 2에 더 많은 시간을 쓰는 일이 흔합니다.',
				},
				{
					question: '구성은 코드보다 덜 강력한가요?',
					answer:
						'그렇습니다. 그리고 이 거래는 의도된 것입니다. 구성은 코드가 표현할 수 있는 모든 것을 표현할 수 없습니다. 그 대가로 재배포 없는 변경, 비엔지니어도 검토할 수 있는 동작, 보안 리뷰에서 방어해야 할 런타임 코드 실행이 없다는 점을 얻습니다. 코드가 제공하는 상한이 필요하다면 라이브러리를 사용하세요.',
				},
				{
					question: 'LangChain을 유지하면서 EDDI도 쓸 수 있나요?',
					answer:
						'네. EDDI는 MCP 서버와 REST API를 제공하므로 LangChain 애플리케이션이 EDDI 에이전트를 도구로 호출할 수 있고, EDDI도 httpCall을 통해 LangChain 서비스를 호출할 수 있습니다. 차별화되는 부분과 인프라인 부분의 경계를 따라 나누는 것은 합리적인 설계입니다.',
				},
			],
		},

		// ─── Microsoft Agent Framework ────────────────────────────────
		'eddi-vs-microsoft-agent-framework': {
			title: 'EDDI vs. Microsoft Agent Framework (AutoGen 및 Semantic Kernel)',
			description:
				'EDDI와 AutoGen 및 Semantic Kernel의 후속인 Microsoft Agent Framework의 비교: 코드로 정의한 워크플로 대 Config-as-Code, Human-in-the-Loop, 감사, 호스팅, 그리고 Microsoft 스택이 더 잘 맞는 경우.',
			summary: 'AutoGen 및 Semantic Kernel의 후속인 Microsoft Agent Framework 대 배포 가능한 에이전트 플랫폼.',
			verdict:
				'.NET 또는 Python 팀이고 Azure 위에서 구축하며 에이전트 워크플로를 자체 서비스의 코드로 두고 싶다면 <strong>Microsoft Agent Framework</strong>를 고르세요. 어디서나 실행할 수 있는 JVM 플랫폼에서 에이전트를 검토 가능한 구성으로 정의하고, 승인 게이트와 감사 원장을 조립하는 대신 기본으로 갖추고 싶다면 <strong>EDDI</strong>를 고르세요.',
			whatItIsTitle: 'Microsoft Agent Framework란',
			whatItIs:
				'Microsoft Agent Framework는 .NET과 Python에서 에이전트와 멀티 에이전트 워크플로를 구축하고 오케스트레이션하기 위한 MIT 라이선스의 오픈소스 SDK 및 런타임입니다. Semantic Kernel과 AutoGen을 만든 팀에서 나왔으며 2026년 4월에 1.0 릴리스에 도달했습니다. 워크플로는 순차, 동시, 핸드오프, 그룹 협업 패턴을 갖춘 그래프이며, 체크포인팅, 스트리밍, human-in-the-loop 제어, OpenTelemetry 추적, 미들웨어 시스템을 제공합니다. 에이전트를 YAML로 선언할 수도 있고, Microsoft는 Foundry에서의 호스팅을 문서화하고 있습니다. 2026년 10월 기준으로 Semantic Kernel은 수정만 받고 새 기능 작업은 Agent Framework에서 이루어지며, AutoGen은 유지보수 모드이고 둘 모두에 대한 마이그레이션 가이드가 있습니다.',
			archetypeTitle: '코드로 정의한 워크플로 대 선언된 구성',
			archetype:
				'AutoGen이나 Semantic Kernel을 찾아 오셨다면, 오늘날 현실적인 비교 대상은 Agent Framework입니다. Microsoft가 신규 프로젝트를 안내하는 곳이기 때문입니다. 이것은 SDK입니다. 워크플로는 사용자 언어로 작성한 서비스 내부의 코드이고, 호스팅, 보안, 감사 방식은 직접 선택하며, Azure에 대한 지원이 탄탄합니다. EDDI는 반대의 선택을 합니다. 에이전트는 배포된 플랫폼이 해석하는 JSON 구성이므로 재빌드 없이 동작을 diff하고 검토하고 변경할 수 있으며, 플랫폼이 API, Manager UI, 시크릿 vault, 감사 원장을 제공합니다.',
			tableTitle: '내 서비스용 SDK 대 배포하는 플랫폼',
			tableHeaders: { dimension: '항목', them: 'Microsoft Agent Framework', eddi: 'EDDI' },
			rows: [
				{ dimension: '형태', them: '.NET 또는 Python 서비스에 내장되는 SDK와 런타임', eddi: 'JVM(Quarkus) 기반의 배포 가능한 미들웨어, Docker 또는 Kubernetes가 동작하는 곳이면 어디서나 실행' },
				{ dimension: '에이전트 정의 방식', them: '코드로 정의한 에이전트와 그래프 워크플로, 에이전트를 YAML로 선언할 수도 있음', eddi: 'JSON 구성, 결정론적 behavior rules가 다음 동작을 결정하고 LLM 호출은 선언된 태스크 안에서 일어남' },
				{ dimension: '언어', them: '.NET과 Python (Go는 별도 저장소)', eddi: 'REST, MCP, OpenAI 호환 API를 통해 모든 언어 지원, 에이전트 자체에는 코드가 필요 없음' },
				{ dimension: '라이선스', them: 'MIT', eddi: EDDI_LICENSE },
				{ dimension: '런타임 사용자 정의 로직', them: '사용자의 코드와 도구 함수가 사용자 프로세스에서 실행됨', eddi: '런타임 eval() 또는 코드 실행 없음, 로직은 선언되거나 MCP 도구 또는 HTTP 호출 뒤에 있음' },
				{ dimension: 'Human in the loop', them: '워크플로 수준의 human-in-the-loop 제어', eddi: '세 수준의 게이트: 턴(PAUSE_CONVERSATION), 도구 호출(toolApprovals), 그룹 단계, 타임아웃 정책 포함' },
				{ dimension: '멀티 에이전트 패턴', them: '코드로 구현하는 순차, 동시, 핸드오프, 그룹 협업', eddi: '7가지 스타일(라운드 테이블, 동료 검토, devil\'s advocate, Delphi, 토론, 태스크 포스, 협상)의 그룹 토론, 기록되는 결정과 반대 의견' },
				{ dimension: '상태와 복구', them: '워크플로 런타임의 체크포인팅과 타임 트래블', eddi: '플랫폼이 영속화하는 대화 메모리, AWAITING_HUMAN 같은 명시적 상태' },
				{ dimension: '관측성과 감사', them: 'OpenTelemetry 추적과 미들웨어 훅, 데이터를 어디로 보낼지는 사용자에게 달려 있음', eddi: 'Prometheus 메트릭과 검증 엔드포인트를 갖춘 HMAC 서명, 추가 전용, 순번 검증 감사 원장' },
				{ dimension: '시크릿과 ID', them: '사용 중인 플랫폼의 메커니즘(예: Azure 서비스)', eddi: '내장 AES-256-GCM Secrets Vault, eddi-admin 및 eddi-approver 역할을 갖춘 선택적 Keycloak/OIDC' },
				{ dimension: '생태계 적합성', them: 'Foundry 호스팅 에이전트를 포함한 Microsoft 및 Azure와의 깊은 통합', eddi: `벤더 중립: ${LLM_PROVIDERS}개 LLM 제공자, Ollama 또는 Jlama를 통한 로컬 모델, ${MCP_TOOLS}개 MCP 도구` },
			],
			betterThemTitle: 'Microsoft Agent Framework가 더 나은 선택인 경우',
			betterThem: [
				'팀이 .NET을 쓰고, 에이전트가 자체 배포와 테스트를 갖춘 기존 C# 서비스 안에 있어야 합니다.',
				'Azure 위에서 구축하며 Foundry 및 주변 Microsoft 서비스와의 일급 통합을 원합니다.',
				'Semantic Kernel 플러그인이나 AutoGen 코드가 있고, 지원되는 마이그레이션 경로가 플랫폼 교체보다 저렴합니다.',
				'워크플로에 사용자 정의 그래프 토폴로지, 체크포인트 분기, 타임 트래블 디버깅처럼 구성으로 표현할 수 없는 제어 흐름이 필요합니다.',
				'개발자 SDK를 원하며, 호스팅, 보안, 관측 방식을 직접 결정하는 쪽을 선호합니다.',
			],
			betterEddiTitle: 'EDDI가 더 나은 선택인 경우',
			betterEddi: [
				'에이전트 동작이 검토자가 읽고 재빌드 없이 환경 간에 승격할 수 있는 구성이어야 합니다.',
				'보안 리뷰에서 추론 시점에 어떤 코드가 실행되는지 물을 것이고, 플랫폼에는 없다는 답을 원합니다.',
				'턴, 도구 호출, 그룹 단계 수준에서 승인이 존재해야 하며, 누가 무엇을 결정했는지 서명된 기록이 있어야 합니다.',
				'SDK를 중심으로 조립하는 대신 바로 쓸 수 있는 Manager UI, 시크릿 vault, API, 감사 원장이 필요합니다.',
				'클라우드 중립을 유지하고 싶습니다: Kubernetes, OpenShift, 온프레미스 또는 로컬 모델을 쓰는 에어갭 환경.',
			],
			migrationTitle: 'AutoGen, Semantic Kernel 또는 Agent Framework에서 옮기기',
			migrationIntro:
				'코드의 번역이 아니라 의도의 번역을 예상하세요. 역할과 도구는 그대로 옮겨지고, 그래프 로직은 behavior rules가 되며, 실제 코드가 필요한 것은 MCP 도구 또는 OpenAPI 엔드포인트 뒤로 옮겨집니다.',
			migrationSteps: [
				{ from: '지침을 가진 에이전트', to: 'LLM 태스크와 시스템 메시지를 갖춘 EDDI 에이전트' },
				{ from: 'Semantic Kernel 플러그인 또는 함수', to: 'MCP 도구, 또는 httpCall이나 OpenAPI에서 가져온 API' },
				{ from: '워크플로 그래프 또는 AutoGen 팀', to: '라우팅을 위한 behavior rules, 또는 멀티 에이전트 작업을 위한 그룹 토론 스타일' },
				{ from: 'Human-in-the-loop 단계', to: 'PAUSE_CONVERSATION 규칙, toolApprovals glob, 또는 그룹 단계의 requiresApproval' },
				{ from: '체크포인트 저장소', to: 'step, conversation, longTerm 범위를 갖춘 대화 메모리' },
				{ from: '미들웨어와 필터', to: 'Behavior rules와 도구 승인 정책' },
				{ from: 'OpenTelemetry 추적', to: 'Prometheus 메트릭과 감사 원장' },
			],
			faq: [
				{
					question: 'Microsoft Agent Framework는 AutoGen과 Semantic Kernel의 대체재인가요?',
					answer:
						'Microsoft는 이를 둘의 후속으로 소개하며 마이그레이션 가이드를 게시합니다. 2026년 10월 기준으로 Semantic Kernel은 수정을 받고 새 기능은 Agent Framework에 들어가며, AutoGen은 유지보수 모드입니다. Microsoft 스택에서 새 프로젝트를 시작한다면 EDDI와 비교해 평가할 대상은 Agent Framework입니다.',
				},
				{
					question: 'EDDI가 멀티 에이전트 대화에서 AutoGen을 대체할 수 있나요?',
					answer:
						'많은 경우 가능합니다. EDDI 그룹 토론은 라운드 테이블, 동료 검토, devil\'s advocate, Delphi, 토론, 태스크 포스, 협상 스타일을 지원하며, 사람의 승인을 요구할 수 있는 단계와 반대 의견이 포함된 기록된 결정을 제공합니다. 에이전트에 자유로운 코드 수준의 조율이 필요하다면 SDK가 더 잘 맞습니다.',
				},
				{
					question: 'EDDI를 쓰려면 Azure를 포기해야 하나요?',
					answer:
						'아니요. EDDI는 Azure OpenAI를 제공자로 지원하며 AKS를 포함한 Kubernetes에서 실행됩니다. 다만 Agent Framework가 제공하는 깊은 Azure 및 Foundry 통합은 제공하지 않으므로, Microsoft 생태계에 전념하고 있다면 이 점을 따져 보세요.',
				},
				{
					question: '둘을 함께 사용할 수 있나요?',
					answer:
						'네. EDDI는 MCP 서버, REST API, OpenAI 호환 API를 제공하며 MCP 서버와 A2A 에이전트를 사용할 수 있습니다. .NET 서비스가 EDDI 에이전트를 도구로 호출할 수 있고, EDDI도 httpCall을 통해 사용자의 서비스를 호출할 수 있습니다.',
				},
			],
		},

		// ─── CrewAI ───────────────────────────────────────────────────
		'eddi-vs-crewai': {
			title: 'EDDI vs. CrewAI',
			description:
				'멀티 에이전트 시스템에서 EDDI와 CrewAI의 비교: Python의 역할 기반 crew와 flow 대 배포 가능한 플랫폼의 Config-as-Code, 코드 실행, Human-in-the-Loop, 거버넌스, 그리고 CrewAI가 더 나은 도구인 경우.',
			summary: 'Python의 역할 기반 crew와 flow 대 플랫폼에서 통제되는 멀티 에이전트 구성.',
			verdict:
				'역할을 맡은 에이전트들이 하나의 작업에서 협업하도록 코드로 정의하고 조정하려는 Python 팀이라면 <strong>CrewAI</strong>를 고르세요. 멀티 에이전트 작업이 통제된 서비스로 실행되어야 한다면, 즉 LLM 주위의 결정론적 규칙, 승인 게이트, 서명된 감사 추적을 코딩이 아닌 구성으로 갖추어야 한다면 <strong>EDDI</strong>를 고르세요.',
			whatItIsTitle: 'CrewAI란',
			whatItIs:
				'CrewAI는 에이전트, 태스크, crew, flow, 도구를 위한 자체 기본 요소를 갖춘 MIT 라이선스의 독립형 Python 프레임워크입니다. Crew는 하나의 작업에서 자율적으로 협업하는 역할 기반 에이전트 팀입니다. Flow는 실행 경로, 상태, 분기를 정밀하게 제어할 수 있는 이벤트 기반 워크플로입니다. 이 프로젝트는 실행 중 사람의 입력을 지원하며, 상용 CrewAI AMP Suite는 관리형 배포, 관측성, 거버넌스, 지원을 위한 컨트롤 플레인을 더합니다.',
			archetypeTitle: '자율적인 crew 대 통제된 구성',
			archetype:
				'CrewAI는 에이전트의 자율성에 기대어, 역할, 목표, 태스크를 설명하면 crew가 협업 방식을 스스로 찾아내며, 더 엄격한 제어가 필요할 때 Flow를 씁니다. EDDI는 통제에 기댑니다. 결정론적 behavior rules가 다음에 실행할 동작을 결정하고, LLM은 선언된 태스크 안에서 호출되며, 멀티 에이전트 작업은 명시적 단계를 가진 이름 있는 그룹 토론 스타일을 따릅니다. 둘 다 멀티 에이전트 시스템을 만들 수 있습니다. 차이는 사전에 사람이 얼마나 결정하는지와 런타임에 모델이 얼마나 결정하는지에 있습니다.',
			tableTitle: '코드 속의 에이전트 대 구성으로서의 에이전트',
			tableHeaders: { dimension: '항목', them: 'CrewAI', eddi: 'EDDI' },
			rows: [
				{ dimension: '핵심 추상화', them: '태스크를 가진 역할 기반 에이전트의 crew, 그리고 이벤트 기반 Flow', eddi: '에이전트 구성: 파이프라인, behavior rules, LLM 태스크, 도구를 버전 관리되는 JSON으로' },
				{ dimension: '언어와 런타임', them: '애플리케이션에 내장되는 Python 라이브러리', eddi: '가상 스레드를 사용하는 JVM(Quarkus) 플랫폼, 에이전트에는 코드가 필요 없음' },
				{ dimension: '라이선스', them: 'MIT(오픈소스 프레임워크), 그 위에 상용 AMP Suite', eddi: EDDI_LICENSE },
				{ dimension: '제어 흐름', them: '에이전트가 런타임에 협업을 결정하며, Flow가 코드로 명시적 분기를 추가', eddi: '결정론적 behavior rules가 다음 동작을 선택하고, 그룹 스타일이 단계를 정의' },
				{ dimension: '코드 실행', them: 'crewai-tools에서 코드 인터프리터 도구가 제거되었고 에이전트 수준 코드 실행은 더 이상 권장되지 않으며, 문서는 E2B나 Modal 같은 전용 샌드박스를 권장', eddi: '플랫폼에 런타임 eval() 또는 코드 실행 없음, 로직은 선언되거나 MCP 도구 또는 HTTP 호출 뒤에 있음' },
				{ dimension: 'Human in the loop', them: '실행 중 사람의 입력 지원', eddi: '턴, 도구 호출, 그룹 단계에 대한 게이트, 타임아웃 정책, Manager, REST, MCP 또는 Slack에서의 승인' },
				{ dimension: '멀티 에이전트 패턴', them: '코드로 구현하는 Crew 프로세스와 Flow', eddi: '7가지 스타일과 사용자 정의 스타일의 그룹 토론, 기록되는 결정, 집계, 반대 의견, 서명된 트랜스크립트 항목' },
				{ dimension: '관리와 거버넌스', them: '상용 AMP Suite의 추적 및 거버넌스를 갖춘 컨트롤 플레인', eddi: '오픈소스 빌드에 포함된 Manager UI, 시크릿 vault, 선택적 Keycloak/OIDC, 감사 원장' },
				{ dimension: '감사 추적', them: '컨트롤 플레인 또는 자체 도구를 통한 추적과 관측성', eddi: 'HMAC 서명, 추가 전용, 순번 검증 원장, GET /auditstore/verify/{conversationId}' },
				{ dimension: '모델', them: 'Python에서 다양한 제공자 지원', eddi: `${LLM_PROVIDERS}개 LLM 제공자와 Ollama 또는 Jlama를 통한 로컬 모델` },
			],
			betterThemTitle: 'CrewAI가 더 나은 선택인 경우',
			betterThem: [
				'팀이 Python 우선이며 에이전트, 도구, crew 로직을 나머지 코드와 같은 저장소에 두고 싶습니다.',
				'자율적인 역할 수행형 협업을 빠르게 프로토타이핑하고 코드를 편집해 조정하고 싶습니다.',
				'구성으로 표현할 수 없는 임의의 로직을 가진 사용자 정의 Python 도구가 필요합니다.',
				'운영하는 플랫폼보다 내장하는 라이브러리를 선호합니다.',
				'상용 AMP Suite 컨트롤 플레인이 조직이 crew를 배포하고 모니터링하려는 방식에 맞습니다.',
			],
			betterEddiTitle: 'EDDI가 더 나은 선택인 경우',
			betterEddi: [
				'멀티 에이전트 동작이 검토할 수 있을 만큼 예측 가능해야 합니다: 자유로운 자율성이 아니라 이름 있는 단계, 기록된 결정, 규칙.',
				'사람이 특정 도구 호출이나 그룹 단계를 승인해야 하고, 그 결정이 서명된 원장에 기록되어야 합니다.',
				'거버넌스, 관리 UI, 감사를 별도의 상용 티어가 아니라 오픈소스 빌드에서 쓰고 싶습니다.',
				'보안 리뷰에서 추론 시점에 어떤 코드가 실행되는지 물을 것이고, 플랫폼이 아무것도 실행하지 않기를 원합니다.',
				'비엔지니어가 풀 리퀘스트 없이 에이전트 동작을 바꿔야 합니다.',
			],
			migrationTitle: 'CrewAI에서 crew 옮기기',
			migrationIntro:
				'역할과 목표는 프롬프트와 그룹 단계로 옮겨집니다. 가장 많이 바뀌는 부분은 자율성입니다. crew가 런타임에 결정하던 것은 직접 명시적으로 작성하는 규칙, 단계 또는 승인 게이트가 됩니다.',
			migrationSteps: [
				{ from: '에이전트(역할, 목표, 배경 이야기)', to: 'LLM 태스크의 시스템 메시지를 갖춘 EDDI 에이전트' },
				{ from: '태스크', to: '파이프라인 태스크, 또는 그룹 토론의 단계' },
				{ from: 'Crew 프로세스', to: '그룹 토론 스타일, 예를 들어 태스크 포스 또는 라운드 테이블' },
				{ from: '라우터가 있는 Flow', to: 'inputmatcher, actionmatcher 같은 조건 유형을 쓰는 behavior rules' },
				{ from: '사용자 정의 Python 도구', to: 'MCP 도구, httpCall, 또는 OpenAPI에서 가져온 API' },
				{ from: '사람의 입력', to: 'PAUSE_CONVERSATION 규칙, toolApprovals, 또는 단계의 requiresApproval' },
				{ from: '메모리와 지식 소스', to: '대화 메모리 범위와 RAG 지식 베이스' },
			],
			faq: [
				{
					question: 'EDDI는 멀티 에이전트 시스템에서 CrewAI의 대안인가요?',
					answer:
						'네, 멀티 에이전트 협업을 통제된 서비스로 원하는 팀에게는 그렇습니다. EDDI 그룹 토론은 명시적 단계를 가진 이름 있는 스타일로 실행되며 결정과 반대 의견을 기록합니다. CrewAI는 에이전트에 더 많은 자율성을 주고 Python으로 정의되므로, 코드에 머물고 싶은 팀에 적합합니다.',
				},
				{
					question: 'EDDI에도 CrewAI 같은 자율 에이전트가 있나요?',
					answer:
						'EDDI 에이전트는 도구를 호출하고 그룹 토론에서 협업할 수 있지만, 제어 흐름은 에이전트가 즉흥적으로 정하도록 두지 않고 사용자가 구성한 behavior rules와 단계로 정해집니다. 이는 자율성을 예측 가능성과 맞바꾸는 의도적인 선택입니다.',
				},
				{
					question: '여기서 코드 실행이 왜 중요한가요?',
					answer:
						'생성된 코드를 실행하는 에이전트에는 격리가 필요합니다. CrewAI는 내장 코드 인터프리터에서 벗어났으며 전용 샌드박스 서비스를 권장합니다. EDDI는 런타임에 코드를 평가하지 않음으로써 플랫폼 내부에서는 이 문제를 피하며, 실제 로직이 필요한 것은 사용자가 선언하고 승인할 수 있는 도구 뒤에 놓입니다.',
				},
				{
					question: '둘 다 사용할 수 있나요?',
					answer:
						'네. CrewAI 서비스가 REST API, MCP 서버 또는 OpenAI 호환 API로 EDDI를 호출할 수 있고, EDDI도 httpCall로 CrewAI 엔드포인트를 호출할 수 있습니다. 코드 수준 실험에는 CrewAI를, 통제된 프로덕션 에이전트에는 EDDI를 쓰는 것은 합리적인 분담입니다.',
				},
			],
		},

		// ─── Dify ─────────────────────────────────────────────────────
		'eddi-vs-dify': {
			title: 'EDDI vs. Dify',
			description:
				'LLM 에이전트를 구축하고 운영하는 측면에서 EDDI와 Dify의 비교: 비주얼 워크플로 빌더와 코드 노드 대 Config-as-Code, 라이선스와 멀티 테넌시 조건, 사람 입력, 감사, 그리고 Dify가 맞는 도구인 경우.',
			summary: '비주얼 워크플로 빌더 및 앱 플랫폼 대 거버넌스를 내장한 Config-as-Code.',
			verdict:
				'세련된 비주얼 빌더, 플러그인 마켓플레이스, 팀이나 고객이 이번 주에 쓸 수 있는 LLM 앱으로 가는 빠른 길을 원한다면 <strong>Dify</strong>를 고르세요. 에이전트가 명확한 Apache 2.0 라이선스 아래에서 코드 노드 없이, 여러 수준의 승인 게이트와 증거를 위해 만들어진 감사 원장과 함께 실행되어야 한다면 <strong>EDDI</strong>를 고르세요.',
			whatItIsTitle: 'Dify란',
			whatItIs:
				'Dify는 LLM 애플리케이션을 구축하기 위한 오픈소스 플랫폼입니다. 비주얼 워크플로 캔버스, 수집부터 검색까지의 RAG 파이프라인, 마켓플레이스, MCP 서버 또는 사용자 정의 API의 도구를 쓰는 에이전트, 프롬프트 IDE, 백엔드 서비스형 API, Langfuse, Opik, Arize Phoenix 같은 관측성 도구와의 통합을 제공합니다. Dify Cloud를 쓰거나, Docker Compose로 Community Edition을 자체 호스팅하거나, SSO, RBAC, 지원 SLA를 더하는 Dify Enterprise를 문의할 수 있습니다. Code 노드는 샌드박스에서 Python 또는 JavaScript를 실행하고, Human Input 노드는 사람이 응답할 수 있도록 워크플로를 일시 중지합니다.',
			archetypeTitle: '앱 빌더 대 통제되는 에이전트 플랫폼',
			archetype:
				'Dify와 EDDI는 RAG, 도구, 에이전트에서 겹치지만 서로 다른 사람들을 위해 최적화되어 있습니다. Dify는 애플리케이션을 시각적으로 조립해 빠르게 출시하려는 빌더를 위해 최적화되어 있으며, 코드 노드가 탈출구입니다. EDDI는 에이전트 동작이 선언적이고 검토 가능한 구성이며 그 주위에 거버넌스가 있어야 하는 운영자를 위해 최적화되어 있습니다. 많은 팀이 Dify에서 시작하는 것은 합리적이며, 테넌시, 라이선스 또는 감사 요구사항이 생기면 옮기는 팀도 있습니다.',
			tableTitle: '빌더의 편의성 대 운영 표면',
			tableHeaders: { dimension: '항목', them: 'Dify', eddi: 'EDDI' },
			rows: [
				{ dimension: '핵심 추상화', them: '프롬프트 IDE를 갖춘 비주얼 워크플로 및 챗플로 캔버스', eddi: 'Config-as-code: Manager 또는 API에서 작성하고 소스처럼 버전 관리되는 JSON 리소스' },
				{ dimension: '라이선스', them: 'Dify Open Source License: 조건이 붙은 Apache 2.0. 소스를 이용한 멀티 테넌트 운영에는 서면 승인이 필요하고, 프론트엔드의 로고와 저작권 표시를 유지해야 함', eddi: EDDI_LICENSE },
				{ dimension: '사용자 정의 로직', them: 'Code 노드가 파일 시스템, 외부 네트워크, 시스템 명령을 차단하고 패키지 집합이 고정된 샌드박스에서 Python 또는 JavaScript를 실행', eddi: '런타임 코드 평가 없음, 로직은 선언되거나 MCP 도구 또는 HTTP 호출 뒤에 있음' },
				{ dimension: 'Human in the loop', them: 'Human Input 노드가 웹 앱 또는 이메일로 답하는 양식을 위해 워크플로를 일시 중지, 기본 대기 3일 후 타임아웃 분기', eddi: '턴, 도구 호출, 그룹 단계에 대한 게이트, 타임아웃 정책으로 WAIT_INDEFINITELY, AUTO_APPROVE, AUTO_REJECT, ABORT 제공, Manager 및 Slack 승인' },
				{ dimension: '도구와 통합', them: '마켓플레이스, MCP 서버, 사용자 정의 API', eddi: `${MCP_TOOLS}개 MCP 도구, MCP 클라이언트, OpenAPI 가져오기, httpCall, A2A` },
				{ dimension: 'RAG', them: '문서 추출을 갖춘 내장 지식 파이프라인', eddi: `${EMBEDDING_PROVIDERS}개 임베딩 제공자, ${VECTOR_STORES}개 벡터 스토어, 그리고 인프라가 필요 없는 httpCall RAG` },
				{ dimension: '멀티 에이전트', them: '캔버스에서 에이전트와 워크플로 노드를 조합', eddi: '7가지 스타일의 그룹 토론, 기록되는 결정과 반대 의견, 단계별 선택적 사람 승인' },
				{ dimension: 'ID와 접근', them: '워크스페이스, Dify Enterprise를 통한 SSO와 RBAC', eddi: '오픈소스 빌드에서 eddi-admin 및 eddi-approver 역할을 갖춘 선택적 Keycloak/OIDC' },
				{ dimension: '관측성과 감사', them: '로그와 모니터링, Langfuse, Opik, Arize Phoenix와의 통합', eddi: 'Prometheus 메트릭과 HMAC 서명, 추가 전용, 순번 검증 감사 원장' },
				{ dimension: '배포', them: 'Dify Cloud, Docker Compose, 요청 시 Enterprise', eddi: 'Docker, Helm, Kustomize, OpenShift (Red Hat 인증 이미지, OperatorHub를 통한 Operator)' },
			],
			betterThemTitle: 'Dify가 더 나은 선택인 경우',
			betterThem: [
				'비엔지니어가 읽고 확장할 수 있으며 만들면서 빠르게 피드백을 받을 수 있는 비주얼 캔버스를 원합니다.',
				'플러그인 마켓플레이스와 준비된 워크플로 템플릿이 실제 통합 시간을 절약해 줍니다.',
				'호스팅 옵션(Dify Cloud)을 원하며 직접 아무것도 운영하고 싶지 않습니다.',
				'Code 노드가 원하는 기능입니다: 워크플로 안에서 Python 또는 JavaScript로 하는 작은 데이터 변환.',
				'자기 팀을 위한 하나의 내부 배포를 운영하므로 멀티 테넌트 라이선스 조건이 해당되지 않습니다.',
			],
			betterEddiTitle: 'EDDI가 더 나은 선택인 경우',
			betterEddi: [
				'법무팀이 하나의 배포에서 많은 테넌트나 고객에게 서비스하는 경우를 포함해 조건 없는 Apache 2.0 라이선스를 요구합니다.',
				'보안 리뷰가 샌드박스 여부와 관계없이 자동화 플랫폼 내부의 코드 실행을 금지합니다.',
				'특정 도구 호출이나 그룹 단계에 사람의 결정이 필요하며, 이를 서명된 원장에 기록해야 합니다.',
				'에이전트 동작을 구성으로서 버전 관리하고, diff하고, 환경 간에 승격해야 합니다.',
				'Kubernetes, OpenShift 또는 로컬 모델을 쓰는 에어갭 배포가 필요합니다.',
			],
			migrationTitle: 'Dify에서 앱 옮기기',
			migrationIntro:
				'Dify 앱은 비주얼 그래프이고 EDDI 에이전트는 구성이므로, 이는 가져오기가 아니라 번역입니다. 가장 많은 고민이 필요한 부분은 Code 노드이며, 이는 구성 또는 선언된 도구가 됩니다.',
			migrationSteps: [
				{ from: '챗플로 또는 워크플로', to: 'EDDI 에이전트: 파이프라인과 behavior rules' },
				{ from: 'LLM 노드와 프롬프트', to: '시스템 메시지와 버전 관리되는 프롬프트 스니펫을 갖춘 LLM 태스크' },
				{ from: '지식 베이스', to: '임베딩 제공자와 벡터 스토어를 갖춘 EDDI RAG 지식 베이스' },
				{ from: '도구, 플러그인 또는 MCP 서버', to: 'MCP 클라이언트 연결, httpCall, 또는 OpenAPI에서 가져온 API' },
				{ from: 'Code node', to: 'Behavior rules와 프롬프트 로직, 실제 코드가 필요하면 MCP 도구' },
				{ from: 'Human Input node', to: '타임아웃 정책을 갖춘 PAUSE_CONVERSATION 규칙 또는 toolApprovals' },
				{ from: '제공자 API 키', to: 'Secrets Vault 항목, ${vault:key}로 참조' },
			],
			faq: [
				{
					question: 'Dify는 오픈소스인가요?',
					answer:
						'Dify는 소스를 Dify Open Source License로 공개하며, 이는 추가 조건이 붙은 Apache 2.0입니다. 서면 승인 없이 소스로 멀티 테넌트 환경을 운영할 수 없고, 프론트엔드의 로고나 저작권 정보를 제거할 수 없습니다. 이는 EDDI가 사용하는 조건 없는 Apache 2.0과 다르므로, 두 조건 중 하나라도 해당될 수 있다면 법무팀과 함께 읽어 보세요.',
				},
				{
					question: 'EDDI에도 Dify 같은 비주얼 빌더가 있나요?',
					answer:
						'EDDI Manager는 에이전트를 구축, 배포, 모니터링하기 위한 프로덕션급 React UI이며 11개 언어로 제공됩니다. 노드 캔버스가 아니라 관리 인터페이스입니다. 에이전트, 프롬프트, 도구, 파이프라인을 구성하며, 모든 변경은 다이어그램이 아니라 버전 관리되는 리소스입니다.',
				},
				{
					question: 'EDDI는 왜 코드 노드를 두지 않나요?',
					answer:
						'샌드박스된 코드 노드는 합리적인 기능이며 Dify는 접근 가능한 범위를 제한합니다. 하지만 플랫폼 내부의 모든 코드 실행은 보안 리뷰가 검토해야 하는 공격 표면입니다. EDDI는 에이전트 동작을 선언적으로 유지하므로, 도구가 할 수 있는 일은 사용자가 선언하고 승인한 것입니다.',
				},
				{
					question: 'Dify와 EDDI를 함께 사용할 수 있나요?',
					answer:
						'네. Dify는 MCP 서버와 사용자 정의 API를 쓸 수 있고 EDDI는 MCP 서버와 REST API를 제공하므로, Dify 워크플로가 EDDI 에이전트를 통제되는 단계로 호출할 수 있습니다. EDDI도 httpCall로 Dify API를 호출할 수 있습니다.',
				},
			],
		},

		// ─── n8n ──────────────────────────────────────────────────────
		'eddi-vs-n8n': {
			title: 'EDDI vs. n8n',
			description:
				'AI 에이전트 오케스트레이션에서 EDDI와 n8n의 비교: 런타임과 동시성 모델, 코드 실행과 보안 태세, 라이선스, 거버넌스, 그리고 n8n이 여전히 더 나은 도구인 경우.',
			summary: '워크플로 자동화 플랫폼 대 AI 오케스트레이션 미들웨어.',
			verdict:
				'SaaS 시스템을 연결하고 업무 프로세스를 자동화하는 것이 일이고 AI가 더 큰 워크플로 안의 한 단계라면 <strong>n8n</strong>을 고르세요. AI 에이전트 <em>자체</em>가 제품이고 규제 데이터, 감사 의무, 테넌트별 격리, 에이전트가 할 수 있는 일에 대한 승인 게이트처럼 엔터프라이즈 보안 리뷰를 통과해야 한다면 <strong>EDDI</strong>를 고르세요.',
			whatItIsTitle: 'n8n이란',
			whatItIs:
				'n8n은 Node.js 기반의 워크플로 자동화 플랫폼으로, 비주얼 캔버스와 수백 개의 사전 구축된 통합을 갖추고 있습니다. 자체 호스팅이 가능하고, 크고 실제로 활발한 커뮤니티가 있으며, LangChain 기반 노드로 어떤 워크플로에든 LLM 호출을 넣을 수 있습니다. 시스템을 연결하는 가장 빠른 방법 중 하나입니다.',
			archetypeTitle: '다른 범주, 겹치는 사용 사례',
			archetype:
				'이 도구들은 같은 유형이 아닙니다. n8n은 AI가 여러 노드 유형 중 하나인 <strong>워크플로 자동화 플랫폼</strong>입니다. EDDI는 에이전트, 메모리, 도구, 거버넌스가 곧 제품인 <strong>AI 오케스트레이션 미들웨어</strong>입니다. 겹침은 실제로 있고 팀들이 n8n에서 에이전트를 만들기도 하지만, 에이전트가 규제 데이터를 다루게 되면 둘은 정반대의 선택을 합니다.',
			tableTitle: '아키텍처와 거버넌스',
			tableHeaders: { dimension: '항목', them: 'n8n', eddi: 'EDDI' },
			rows: [
				{ dimension: '런타임', them: 'Node.js 단일 스레드 이벤트 루프', eddi: '가상 스레드(Project Loom)를 쓰는 JVM, I/O 바운드 LLM 호출을 위한 진정한 병렬성' },
				{ dimension: '사용자 정의 로직', them: 'Code 노드가 런타임에 JavaScript 또는 Python을 실행', eddi: '런타임 코드 평가 전혀 없음, 에이전트 동작은 선언적 JSON뿐' },
				{ dimension: '라이선스', them: 'Sustainable Use License(fair-code), OSI 미승인, 일부 상업적 사용에는 별도 조건', eddi: EDDI_LICENSE },
				{ dimension: '통합 범위', them: '수백 개의 사전 구축된 SaaS 커넥터, 가장 강력한 자산', eddi: `${MCP_TOOLS}개 MCP 도구와 httpCall을 통한 모든 OpenAPI 또는 REST 엔드포인트` },
				{ dimension: '인증', them: '내장 사용자 관리, SSO는 유료 티어', eddi: '오픈소스 빌드에서 eddi-admin 및 eddi-approver 역할을 갖춘 선택적 Keycloak/OIDC' },
				{ dimension: '감사 추적', them: '실행 이력과 애플리케이션 로그', eddi: 'HMAC 서명, 추가 전용, 순번 검증 감사 원장' },
				{ dimension: '사람 승인', them: '워크플로 내부의 Wait 노드와 수동 트리거', eddi: '턴 수준 일시 중지, 도구 호출별 승인, 타임아웃 정책, Slack 승인, 모두 기록됨' },
				{ dimension: '규정 준수 태세', them: '배포마다 구현', eddi: `GDPR, HIPAA, EU AI법 인프라 내장, ${FRAMEWORKS}개 프레임워크 대응` },
			],
			betterThemTitle: 'n8n이 더 나은 선택인 경우',
			betterThem: [
				'작업이 AI가 아니라 일반적인 업무 자동화입니다: CRM 동기화, 파일 이동, 웹훅 대응.',
				'에이전트 거버넌스의 깊이보다 SaaS 커넥터의 폭이 더 필요합니다. 이 부분은 n8n이 확실히 앞섭니다.',
				'비엔지니어링 팀이 워크플로를 소유하며 이를 파악하기 위해 비주얼 캔버스가 필요합니다.',
				'오늘 오후에 돌아가는 무언가를 원하며 관련 데이터가 규제 대상이 아닙니다.',
			],
			betterEddiTitle: 'EDDI가 더 나은 선택인 경우',
			betterEddi: [
				'에이전트가 규제 데이터를 다루며 보안 리뷰에서 추론 시점에 어떤 코드가 실행되는지 물을 것입니다. EDDI의 답은 없다는 것입니다.',
				'하나의 배포에서 여러 고객에 걸친 테넌트별 격리, 쿼터, 비용 귀속이 필요합니다.',
				'사람이 개별 도구 호출을 실행 전에 승인해야 하며, 승인이 서명된 원장에 기록되어야 합니다.',
				'에이전트 동작을 버전 관리하고, diff하고, 환경 간에 구성으로 승격해야 합니다.',
				`재배포나 에어갭 배포를 위해 라이선스가 명확해야 합니다: ${EDDI_LICENSE}.`,
			],
			migrationTitle: 'n8n에서 워크플로 옮기기',
			migrationIntro:
				'에이전트 형태의 n8n 워크플로 대부분은 깔끔하게 매핑됩니다. 그렇지 않은 부분은 대개 Code 노드이며, 이것이 바로 핵심입니다. 그들이 하는 일은 구성이나 선언된 도구가 되어야 합니다.',
			migrationSteps: [
				{ from: '워크플로', to: 'EDDI 패키지: 파이프라인, 프롬프트, 도구 바인딩의 버전 관리되는 번들' },
				{ from: 'HTTP Request node', to: 'SSRF 보호와 경로 탐색 방어가 적용되는 httpCall 도구 정의' },
				{ from: 'Code node', to: 'Behavior rules와 프롬프트 스니펫, 실제 로직이 필요하면 MCP 도구' },
				{ from: '자격 증명 저장소', to: 'EDDI Secrets Vault(AES-256-GCM), vault 키로 참조' },
				{ from: 'AI Agent node', to: '영속 메모리, 인텐트 라우팅, 모델 캐스케이딩을 갖춘 EDDI 에이전트' },
				{ from: 'Wait 또는 수동 트리거', to: '타임아웃 정책을 갖춘 Human-in-the-Loop 승인 게이트' },
			],
			migrationGuideLabel: '전체 플레이북: AI 워크플로를 n8n에서 EDDI로 마이그레이션',
			faq: [
				{
					question: 'EDDI는 n8n을 그대로 대체할 수 있나요?',
					answer:
						'아니요, 그럴 의도도 없습니다. n8n은 수백 개 SaaS 도구에 걸친 일반 워크플로 자동화를 다룹니다. EDDI는 엔터프라이즈 거버넌스를 갖춘 AI 에이전트 오케스트레이션을 다룹니다. 팀들은 흔히 둘 다 운영합니다. 업무 프로세스 연결에는 n8n, 감사 추적과 승인 게이트가 필요한 에이전트에는 EDDI를 씁니다.',
				},
				{
					question: 'EDDI가 n8n을 호출할 수 있나요, 아니면 그 반대인가요?',
					answer:
						'둘 다 가능합니다. EDDI는 MCP 서버와 REST API를 제공하므로 n8n 워크플로가 EDDI 에이전트를 한 단계로 호출할 수 있습니다. EDDI도 httpCall 도구로 n8n 웹훅을 호출할 수 있습니다. 각각 잘하는 일에 쓰는 것은 합리적인 아키텍처입니다.',
				},
				{
					question: '런타임 코드 실행이 왜 그렇게 중요한가요?',
					answer:
						'Code 노드는 자동화 플랫폼 내부에서 실행되는 임의의 코드입니다. 편리하지만 동시에 취약점의 한 부류 전체이기도 합니다. 샌드박스 탈출, 신뢰할 수 없는 입력을 통한 인젝션, 권한 상승이 모두 여기서 시작됩니다. EDDI는 런타임 코드 평가를 전면 금지하므로, 에이전트 동작은 출시 전에 검토하고, diff하고, 승인할 수 있는 JSON 구성입니다.',
				},
				{
					question: 'n8n은 오픈소스인가요?',
					answer:
						'n8n은 fair-code이며 Sustainable Use License로 배포됩니다. 소스는 공개되어 있고 내부 용도의 자체 호스팅은 허용되지만, OSI 승인 오픈소스 라이선스는 아니며 일부 상업적 사용에는 별도 조건이 필요합니다. EDDI는 Apache 2.0입니다. 법무팀이 재배포에 대해 명확한 답을 필요로 한다면 이 차이가 중요합니다.',
				},
			],
		},

		// ─── Flowise ──────────────────────────────────────────────────
		'eddi-vs-flowise': {
			title: 'EDDI vs. Flowise',
			description:
				'LLM 에이전트를 구축하고 운영하는 측면에서 EDDI와 Flowise의 비교: 프로토타이핑 속도 대 프로덕션 거버넌스, RAG 아키텍처, 멀티 테넌시, 그리고 Flowise가 맞는 도구인 경우.',
			summary: '프로토타입 속도 대 프로덕션 운영 표면.',
			verdict:
				'이번 주에 동작하는 RAG 챗봇을 이해관계자에게 보여주고 싶다면 <strong>Flowise</strong>를 고르세요. 그 프로토타입이 여러 팀이 운영하고, 규정 준수 담당자가 승인하고, 고객이 의존하는 시스템이 되어야 한다면 <strong>EDDI</strong>를 고르세요.',
			whatItIsTitle: 'Flowise란',
			whatItIs:
				'Flowise는 Node.js와 React로 만들어지고 LangChain과 LlamaIndex를 감싼, LLM 애플리케이션용 Apache 2.0 라이선스의 비주얼 빌더입니다. 로더, 스플리터, 임베딩 모델, 벡터 스토어, 체인 같은 노드를 끌어다 놓아 챗플로를 조립합니다. 아무것도 없는 상태에서 동작하는 검색 챗봇까지 가는 데에는 이보다 빠른 것이 거의 없습니다.',
			archetypeTitle: '프로토타입 속도 대 운영 표면',
			archetype:
				'Flowise와 EDDI는 프로젝트의 서로 다른 시점을 겨냥합니다. Flowise는 첫 주를 최적화합니다: 비주얼 조립, 즉각적인 피드백, 대부분의 일반 패턴을 위한 템플릿. EDDI는 그 이후의 모든 것을 최적화합니다: 누가 에이전트를 바꿀 수 있는지, 에이전트가 무엇을 해도 되는지, 재시작하면 어떻게 되는지, 그리고 이 모든 것을 감사인에게 어떻게 증명하는지. 많은 팀은 실제로 Flowise에서 시작하는 것이 맞습니다.',
			tableTitle: '프로토타입에서 프로덕션으로',
			tableHeaders: { dimension: '항목', them: 'Flowise', eddi: 'EDDI' },
			rows: [
				{ dimension: '핵심 추상화', them: '비주얼 챗플로 캔버스, JSON으로 직렬화되는 노드 그래프', eddi: 'Config-as-code: UI 또는 API에서 작성하고 소스처럼 버전 관리되는 JSON 리소스' },
				{ dimension: '런타임', them: 'Node.js 이벤트 루프', eddi: '가상 스레드를 쓰는 JVM, 다수의 동시 I/O 바운드 대화를 위해 구축' },
				{ dimension: '라이선스', them: 'Apache 2.0, EDDI와 동일', eddi: EDDI_LICENSE },
				{ dimension: 'RAG', them: '폭넓은 로더와 벡터 스토어 선택, 플로마다 구성', eddi: `${EMBEDDING_PROVIDERS}개 임베딩 제공자, ${VECTOR_STORES}개 벡터 스토어, 그리고 인프라가 필요 없는 httpCall RAG` },
				{ dimension: '사용자 정의 로직', them: 'Custom Function 및 Tool 노드가 런타임에 JavaScript를 실행', eddi: '런타임 코드 평가 전혀 없음, 로직은 실행되는 것이 아니라 선언됨' },
				{ dimension: '멀티 테넌시', them: '엔터프라이즈 에디션의 워크스페이스', eddi: '오픈소스 빌드의 테넌트별 쿼터, 비용 귀속, 데이터 격리' },
				{ dimension: '메모리', them: '대화 버퍼와 외부 저장소 통합', eddi: '영속 사용자 메모리, 드림 통합, 롤링 요약, 토큰 인식 윈도잉' },
				{ dimension: '감사 추적', them: '디버깅을 목적으로 한 실행 추적', eddi: '증거를 목적으로 한 HMAC 서명, 추가 전용 원장' },
				{ dimension: '배포', them: 'Docker, 보통 단일 인스턴스', eddi: 'Docker, Helm, Kustomize, OpenShift (Red Hat 인증 이미지, OperatorHub를 통한 Operator)' },
			],
			betterThemTitle: 'Flowise가 더 나은 선택인 경우',
			betterThem: [
				'아이디어가 애초에 통하는지 검증하는 중입니다. 탐색에는 구성을 작성하는 것보다 비주얼 조립이 낫습니다.',
				'팀이 다이어그램으로 사고하며 검색 파이프라인이 공간적으로 펼쳐진 모습을 보고 싶어 합니다.',
				'테넌시, 감사, 승인 요구사항이 없는 한 팀을 위한 내부 도구입니다.',
				'점심 전에 다섯 가지 검색 전략을 시험해 보고 싶습니다.',
			],
			betterEddiTitle: 'EDDI가 더 나은 선택인 경우',
			betterEddi: [
				'챗봇이 제품이 되었고 이제 SLA, 테넌시, 변경에 책임지는 사람이 필요합니다.',
				'프롬프트 엔지니어가 재배포 없이 반복 개선해야 하고, 무엇이 출시되는지는 운영 부서가 통제합니다.',
				'대화가 재시작을 견뎌야 하고 몇 달 뒤 규제 기관을 위해 재구성할 수 있어야 합니다.',
				'에이전트가 실행하기 전에 사람이 특정 도구 호출을 승인해야 합니다.',
				`배포 대상이 Kubernetes 또는 에어갭 인프라이며 재현 가능함을 증명할 수 있어야 합니다. 병합할 때마다 ${TESTS}개의 테스트가 실행됩니다.`,
			],
			migrationTitle: 'Flowise에서 챗플로 옮기기',
			migrationIntro:
				'Flowise 챗플로는 이미 JSON이고 개념이 거의 일치하므로, 이는 대개 마이그레이션 중 가장 기계적인 경우입니다.',
			migrationSteps: [
				{ from: '챗플로', to: '시크릿이 자동으로 제거된 ZIP으로 내보낼 수 있는 EDDI 패키지' },
				{ from: '문서 로더와 스플리터', to: 'EDDI RAG 문서 수집 구성' },
				{ from: '벡터 스토어 노드', to: `지원되는 ${VECTOR_STORES}개 벡터 스토어 중 하나, 구성으로 선택` },
				{ from: '임베딩 노드', to: `${EMBEDDING_PROVIDERS}개 임베딩 제공자 중 하나` },
				{ from: '챗 모델 노드', to: `${LLM_PROVIDERS}개 제공자에 걸친 LLM 구성, 모델 캐스케이딩 사용 가능` },
				{ from: 'Custom Function 노드', to: 'Behavior rules, 프롬프트 스니펫, 또는 선언된 MCP 도구' },
				{ from: '메모리 노드', to: '커밋 플래그 메모리 정책을 갖춘 EDDI 영속 메모리' },
			],
			migrationGuideLabel: '전체 플레이북: 챗플로를 Flowise에서 EDDI로 마이그레이션',
			faq: [
				{
					question: 'Flowise에서 프로토타입을 만든 뒤 EDDI로 옮겨야 하나요?',
					answer:
						'방어할 수 있는 경로이며 흔한 경로입니다. Flowise는 검색 전략이 통하는지에 답하고, EDDI는 그것을 3년 동안 안전하게 운영할 수 있는지에 답합니다. 프로토타입에 프로덕션 사용자가 붙기 전에 이전을 계획하세요. 마이그레이션이 다운타임에 대한 논의보다 쉽습니다.',
				},
				{
					question: '둘 다 Apache 2.0입니다. 실제로 무엇이 다른가요?',
					answer:
						'라이선스는 같지만 운영 표면은 같지 않습니다. EDDI는 선택적 OIDC/Keycloak, 서명된 감사 원장, 테넌트별 쿼터, human-in-the-loop 승인 게이트를 엔터프라이즈 티어 뒤가 아니라 오픈소스 빌드에 포함해 제공합니다.',
				},
				{
					question: 'EDDI에도 비주얼 빌더가 있나요?',
					answer:
						'EDDI Manager는 에이전트를 구축, 배포, 모니터링하기 위한 프로덕션급 React UI이며 11개 언어로 제공됩니다. 노드 캔버스가 아니라 관리 인터페이스입니다. 에이전트, 프롬프트, 도구, 파이프라인을 구성하며, 모든 변경은 다이어그램이 아니라 버전 관리되는 리소스입니다.',
				},
			],
		},

		// ─── Rasa ─────────────────────────────────────────────────────
		'eddi-vs-rasa': {
			title: 'EDDI vs. Rasa',
			description:
				'대화형 AI에서 EDDI와 Rasa의 비교: 학습된 NLU와 결정론적 대화 대 LLM 오케스트레이션, Config-as-Code, 멀티 에이전트 협업, 그리고 Rasa가 더 잘 맞는 경우.',
			summary: '학습된 NLU와 결정론적 대화 대 Config-as-Code를 쓰는 LLM 오케스트레이션.',
			verdict:
				'고정된 인텐트 집합에 대해 엄격하게 통제되는 대화가 필요하고, 레이블이 붙은 학습 데이터가 있으며, 이를 맡을 Python ML 팀이 있다면 <strong>Rasa</strong>를 고르세요. 어시스턴트가 재학습 주기보다 빠르게 바뀌는 지식을 바탕으로 추론하고, 엔터프라이즈 시스템을 호출하며, 재학습이 아닌 구성으로 통제되어야 한다면 <strong>EDDI</strong>를 고르세요.',
			whatItIsTitle: 'Rasa란',
			whatItIs:
				'Rasa는 성숙한 대화형 AI 프레임워크로, 학습된 NLU 파이프라인을 통한 인텐트 분류와 엔터티 추출, 그리고 규칙, 스토리, 정책을 통한 대화 관리를 제공합니다. Python 네이티브이고 자체 호스팅이 가능하며, 수년간 대량의 스크립트형 고객 서비스 어시스턴트에 대한 기본 답이었습니다. Rasa Pro는 LLM 기반 대화를 포함한 상용 티어를 더합니다.',
			archetypeTitle: '같은 문제, 다른 세대의 해법',
			archetype:
				'EDDI와 Rasa는 모두 대화형 AI 세계에서 나왔으며, EDDI는 2006년부터 대화형 플랫폼으로 지속적으로 개발되어 왔습니다. 차이는 지능이 어디에 있느냐입니다. Rasa는 이를 자신의 레이블 데이터로 학습시키는 모델에 두며, 정밀하고 반복 가능한 제어를 얻습니다. EDDI는 이를 선언적 구성으로 통제되는 오케스트레이션된 LLM에 두며, 어느 정도의 결정론을 범위와 변경 속도와 맞바꿉니다.',
			tableTitle: '대화, 도구, 그리고 변경 비용',
			tableHeaders: { dimension: '항목', them: 'Rasa', eddi: 'EDDI' },
			rows: [
				{ dimension: '이해', them: '학습된 NLU: 레이블 데이터에서 인텐트 분류와 엔터티 추출', eddi: 'LLM 이해와 인텐트 기반 에이전트 탐색 및 라우팅' },
				{ dimension: '동작 변경', them: '학습 데이터 업데이트, 재학습, 평가, 재배포', eddi: 'JSON 구성 편집, 재학습도 재배포도 없음' },
				{ dimension: '결정론', them: '높음. 규칙과 정책이 플로를 반복 가능하고 테스트 가능하게 만듦', eddi: '본질적으로 낮음, behavior rules와 승인 게이트로 보완' },
				{ dimension: '언어', them: 'Python, 사용자 정의 액션은 Python 코드', eddi: 'JVM 런타임, 에이전트 로직은 구성이고 도구는 선언됨' },
				{ dimension: '도구 생태계', them: '직접 구축하고 호스팅하는 사용자 정의 액션 서버', eddi: `${MCP_TOOLS}개 MCP 도구, 내장 에이전트 도구, 그리고 모든 OpenAPI 엔드포인트` },
				{ dimension: '멀티 에이전트', them: '배포당 하나의 어시스턴트가 일반적인 패턴', eddi: '코디네이터 기반 오케스트레이션과 7가지 그룹 토론 스타일' },
				{ dimension: '라이선스', them: '커뮤니티 에디션과 상용 라이선스의 Rasa Pro 티어, 최신 조건을 확인할 것', eddi: EDDI_LICENSE },
				{ dimension: '규정 준수', them: '자체 호스팅으로 데이터 레지던시 지원, 프레임워크는 배포마다 구현', eddi: `플랫폼에서 감사 원장, 정보 주체 권리 API, ${FRAMEWORKS}개 프레임워크 대응` },
			],
			betterThemTitle: 'Rasa가 더 나은 선택인 경우',
			betterThem: [
				'이미 레이블이 붙은 대화 데이터가 있고 NLU 파이프라인을 유지할 수 있는 ML 팀이 있습니다.',
				'규제 또는 브랜드 제약상 언어 모델이 관여하지 않는, 감사 가능한 의사결정 경로를 가진 결정론적 어시스턴트가 필요합니다.',
				'좁은 인텐트 집합에 대한 매우 높은 물량으로, 턴당 LLM 비용이 지배적일 것입니다.',
				'분류 신뢰도 임계값과 폴백 동작에 대한 세밀한 제어가 필요합니다.',
			],
			betterEddiTitle: 'EDDI가 더 나은 선택인 경우',
			betterEddi: [
				'어시스턴트가 재학습 주기보다 빠르게 바뀌는 문서와 시스템을 바탕으로 답해야 합니다.',
				'비즈니스 사용자가 ML 엔지니어, 학습 실행, 배포 없이 동작을 바꿔야 합니다.',
				'하나의 평평한 인텐트 트리가 아니라 여러 전문 에이전트가 협업해야 하는 문제입니다.',
				'LLM의 유연성을 원하지만, 출시 전에 규정 준수 담당자가 승인 게이트와 서명된 로그를 요구합니다.',
				`모델 계층의 종속을 피하고 싶습니다: ${LLM_PROVIDERS}개 제공자, 또는 Ollama나 Jlama를 통한 로컬 모델.`,
			],
			migrationTitle: 'Rasa에서 어시스턴트 옮기기',
			migrationIntro:
				'둘은 지능을 서로 다른 곳에 두므로 매핑은 기계적이 아니라 개념적입니다. 파일을 변환하기보다 인텐트 구조를 라우팅과 프롬프트로 번역하게 된다고 예상하세요.',
			migrationSteps: [
				{ from: '인텐트와 학습 예시', to: '인텐트 기반 에이전트 탐색, 레이블 데이터는 학습 입력이 아니라 평가 자료가 됨' },
				{ from: '엔터티와 슬롯', to: '구조화된 추출과 영속 사용자 메모리' },
				{ from: '스토리와 규칙', to: 'Behavior rules와 파이프라인 구성' },
				{ from: '사용자 정의 액션 서버', to: 'MCP 도구 또는 httpCall 도구 정의' },
				{ from: '응답과 도메인 파일', to: '재사용 가능하고 버전 관리되는 프롬프트 스니펫' },
				{ from: '폴백 정책', to: '타임아웃 정책을 갖춘 Human-in-the-Loop 에스컬레이션' },
			],
			faq: [
				{
					question: 'EDDI는 학습된 NLU를 대체하는 또 하나의 LLM 래퍼일 뿐인가요?',
					answer:
						'EDDI는 현재의 LLM 세대보다 훨씬 이전인 2006년부터 대화형 플랫폼으로 개발되어 왔으며, 중요했던 부분인 인텐트 기반 라우팅, 관리되는 대화 상태, 파이프라인 아키텍처를 유지했습니다. LLM이 대체한 것은 이해 계층이지, 그 주위의 오케스트레이션이 아닙니다.',
				},
				{
					question: '규정 준수를 위해 결정론적 답변이 필요합니다. 그렇다면 EDDI는 제외되나요?',
					answer:
						'꼭 그렇지는 않지만, 이 거래는 명시적이어야 합니다. LLM 출력은 결정론적이지 않습니다. EDDI는 응답을 제약하는 behavior rules, 중대한 동작에 대한 사람 승인 게이트, 무엇을 왜 결정했는지 기록하는 서명된 감사 원장으로 이를 다룹니다. 의사결정에 언어 모델이 전혀 관여하지 않아야 한다는 것이 요구사항이라면 Rasa가 더 나은 답입니다.',
				},
				{
					question: '전환 기간에 둘 다 운영할 수 있나요?',
					answer:
						'네. 흔한 패턴은 알려진 대량 인텐트를 기존 Rasa 어시스턴트로 라우팅하고 EDDI가 개방형 질의와 시스템 통합을 처리하다가, 확신이 쌓이면 트래픽을 옮기는 것입니다. EDDI는 httpCall로 Rasa 엔드포인트를 호출할 수 있습니다.',
				},
			],
		},
	},
};

export default copy;
