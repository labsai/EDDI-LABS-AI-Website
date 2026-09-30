/**
 * Model catalog copy, Korean. Keys match ./en.ts; facts and numbers must stay in sync with it.
 */
import type { ModelsCopy } from './en';

const copy: ModelsCopy = {
	models: {
		'claude-fable-5-1': {
			summary: 'Anthropic이 정식 제공하는 모델 중 가장 강력한 모델로, 까다로운 추론과 장시간 실행되는 에이전트 작업을 위해 만들어졌습니다.',
			strengths: ['몇 시간씩 이어지는 에이전트 세션', '다단계 리서치', '문서, 스프레드시트, 슬라이드 작업', '1M 토큰 컨텍스트와 128K 출력'],
			bestFor: ['장기 과제를 수행하는 에이전트', '심층 리서치', '완성된 문서까지 이어지는 분석'],
		},
		'claude-opus-5-5': {
			summary: 'Anthropic이 까다로운 작업에 권장하는 기본 모델: 장시간 실행되는 에이전트형 코딩과 지식 작업에 적합하며, 적응형 사고가 항상 켜져 있습니다.',
			strengths: ['몇 시간 동안 자율적으로 동작하는 코딩 에이전트', '대규모 리팩터링', '시각 정보 중심의 워크플로와 컴퓨터 사용', '1M 토큰 컨텍스트와 128K 출력'],
			bestFor: ['복잡한 에이전트형 코딩', '엔터프라이즈 지식 작업', '시스템 엔지니어링'],
		},
		'claude-sonnet-5-5': {
			summary: '일상적인 코딩, 에이전트, 엔터프라이즈 작업을 위해 속도와 지능의 균형을 맞춘 Anthropic 모델로, 적응형 사고가 기본으로 켜져 있습니다.',
			strengths: ['빠른 응답', '1M 토큰 컨텍스트와 128K 출력', '사고를 도구 호출 사이로 한정 가능', '안정적인 도구 사용'],
			bestFor: ['코드 생성', '데이터 분석', '콘텐츠 제작', '도구를 사용하는 에이전트'],
		},
		'claude-haiku-4-5': {
			summary: 'Anthropic의 현행 모델 중 가장 빠르고 비용이 낮은 모델로, 200K 컨텍스트 윈도우와 선택형 확장 사고를 제공합니다.',
			strengths: ['Claude 라인업 중 가장 낮은 지연 시간', '토큰 예산을 둔 확장 사고', '텍스트와 이미지 입력', '서브 에이전트 작업에 적합'],
			bestFor: ['실시간 애플리케이션', '대량 처리', '캐스케이드의 첫 번째 계층'],
		},
		'gpt-6': {
			summary: 'OpenAI의 현행 추론 모델 패밀리로 세 계층이 있습니다: Astra는 가장 어려운 작업용, Sol은 더 낮은 비용으로 Astra에 가까운 결과를, Luna는 대량 작업용입니다.',
			strengths: ['모든 계층에서 1.05M 토큰 컨텍스트와 128K 출력', '함수 호출과 구조화된 출력', '최대 max까지의 추론 강도', '텍스트와 이미지 입력'],
			bestFor: ['Astra: 까다로운 추론과 리서치', 'Sol: 복잡한 코딩과 전문 업무', 'Luna: 범위가 명확한 대량 작업'],
		},
		'gpt-5-6': {
			summary: 'OpenAI의 이전 세대로, Sol, Terra, Luna 계층(플래그십, 균형형, 최저 비용)을 도입했습니다.',
			strengths: ['1.05M 토큰 컨텍스트와 128K 출력', 'none부터 max까지의 추론 강도', '텍스트와 이미지 입력'],
			bestFor: ['Sol: 복잡한 전문 업무', 'Terra: 성능과 비용의 균형', 'Luna: 비용에 민감한 대량 작업'],
		},
		'gpt-oss': {
			summary: 'Apache 2.0으로 제공되는 OpenAI의 오픈 웨이트 전문가 혼합(MoE) 추론 모델: 120b는 80 GB GPU 한 장에 들어가고, 20b는 16 GB 기기에서 실행됩니다.',
			strengths: ['Apache 2.0 라이선스', '함수 호출과 구조화된 출력', '조절 가능한 추론 강도', '파인튜닝 가능'],
			bestFor: ['셀프 호스팅 및 온프레미스 배포', 'Groq에서의 빠른 추론', '도구를 사용하는 에이전트'],
		},
		'gemini-3-8-flash': {
			summary: 'Google이 현재 정식 제공하는 Flash 모델로, Flash 수준의 속도와 비용으로 장기 엔지니어링, 자율 에이전트, 엔터프라이즈 워크플로를 겨냥합니다.',
			strengths: ['텍스트, 이미지, 비디오, 오디오, PDF 입력', '함수 호출과 구조화된 출력', '사고 수준 low, medium, high', '1M 토큰 컨텍스트'],
			bestFor: ['자율 에이전트', '엔터프라이즈 워크플로', '멀티모달 문서'],
		},
		'gemini-3-1-pro': {
			summary: 'Google의 현행 Pro 모델로, Gemini API에서 프리뷰로 제공되며 복잡한 추론, 소프트웨어 엔지니어링, 정확한 다단계 도구 사용에 맞게 조정되었습니다.',
			strengths: ['텍스트, 이미지, 비디오, 오디오, PDF 입력', '효율적인 사고', '안정적인 다단계 도구 실행', '1M 토큰 컨텍스트'],
			bestFor: ['복잡한 문제 해결', '에이전트형 코딩', '멀티모달 이해'],
		},
		'gemini-3-5-flash-lite': {
			summary: 'Google의 3.5 모델 중 비용과 지연 시간이 가장 낮은 모델로, 고처리량 서브 에이전트 작업, 문서 파싱, 간단한 추출을 위해 만들어졌습니다.',
			strengths: ['낮은 지연 시간과 비용', '텍스트, 이미지, 비디오, 오디오, PDF 입력', '함수 호출과 사고', '1M 토큰 컨텍스트'],
			bestFor: ['대량의 서브 에이전트', '문서 파싱과 추출', '번역'],
		},
		gemma: {
			summary: 'Google의 오픈 웨이트 모델 패밀리로, 엣지 규모의 모델부터 Gemma 4의 31B 덴스 모델과 26B 전문가 혼합 모델까지 갖추고 있습니다.',
			strengths: ['오픈 웨이트, Gemma 4는 Apache 2.0', '에이전트를 위한 함수 호출', '모든 크기에서 이미지 입력', '평범한 하드웨어에서도 실행'],
			bestFor: ['온디바이스 및 엣지 배포', '셀프 호스팅 에이전트', '질의응답과 요약'],
		},
		'grok-4-7': {
			summary: '코딩, 에이전트 작업, 지식 작업을 위한 xAI의 프런티어 모델로, 텍스트와 이미지 입력을 지원하고 추론 강도를 선택할 수 있습니다.',
			strengths: ['500K 토큰 컨텍스트', '함수 호출과 구조화된 출력', 'low부터 xhigh까지의 추론 강도', '미국 데이터 레지던시 엔드포인트'],
			bestFor: ['소프트웨어 엔지니어링', '긴 에이전트 작업', '전문 지식 작업'],
		},
		'deepseek-flash': {
			summary: '네이티브 이미지 이해, 1M 토큰 컨텍스트, 기본으로 켜진 사고를 갖춘 DeepSeek의 현행 Flash 모델이며, 웨이트는 MIT 라이선스입니다.',
			strengths: ['1M 토큰 컨텍스트, 최대 384K 출력', '도구 호출과 JSON 출력', '이미지와 텍스트 입력', 'MIT 라이선스 오픈 웨이트'],
			bestFor: ['비용 효율적인 에이전트', '코딩 에이전트', '입력이 많은 긴 워크로드'],
		},
		'deepseek-v4-pro': {
			summary: 'DeepSeek의 대형 V4 Pro 모델: API에서는 텍스트 전용이며 1M 토큰 컨텍스트, 도구 호출, 선택 가능한 사고 강도를 제공합니다. 웨이트는 MIT 라이선스입니다.',
			strengths: ['1M 토큰 컨텍스트, 최대 384K 출력', '사고 강도 low, high 또는 max', '도구 호출과 JSON 출력', 'MIT 라이선스 오픈 웨이트'],
			bestFor: ['코드 에이전트', '도구 사용과 작업 자동화'],
		},
		'deepseek-r1-distill': {
			summary: '작은 오픈 추론 모델: DeepSeek-R1의 사고 사슬로 학습한 Qwen3-8B로, 로컬 사용을 위한 모델입니다.',
			strengths: ['단계별 추론', '크기에 비해 뛰어난 수학 능력', 'MIT 라이선스 웨이트'],
			bestFor: ['로컬 추론 작업', '수학과 논리', '오프라인 실험'],
		},
		'kimi-k3': {
			summary: '1M 토큰 컨텍스트, 네이티브 이미지·비디오 이해, 항상 켜진 사고를 갖춘 Moonshot AI의 플래그십 모델이며, 웨이트가 공개되어 있습니다.',
			strengths: ['1M 토큰 컨텍스트', '텍스트, 이미지, 비디오 입력', '도구 호출', '공개된 웨이트'],
			bestFor: ['장기 코딩', '지식 작업', '심층 추론과 에이전트 워크플로'],
		},
		'kimi-k2-7-code': {
			summary: '256K 컨텍스트, 항상 켜진 사고, 도구 호출을 갖춘 Moonshot AI의 코딩 전용 모델로, 별도의 고속 버전도 있습니다.',
			strengths: ['256K 토큰 컨텍스트', '텍스트, 이미지, 비디오 입력', '다단계 도구 호출', '초당 약 180토큰의 고속 버전'],
			bestFor: ['긴 코딩 작업', '에이전트형 코딩', '수학과 추론'],
		},
		'qwen-3-8': {
			summary: 'Alibaba의 Qwen 3.8 라인: Max가 플래그십이며, Max와 Flash 모두 1M 토큰 컨텍스트, 이미지와 비디오 입력, 하이브리드 사고를 제공합니다.',
			strengths: ['1M 토큰 컨텍스트, 131K 출력', '텍스트, 이미지, 비디오 입력', '함수 호출과 구조화된 출력', '프랑크푸르트와 버지니아를 포함한 리전'],
			bestFor: ['장기 코딩', '법률, 금융, 디자인 분야의 전문 업무', '멀티모달 에이전트'],
		},
		'qwen-3-7-plus': {
			summary: 'Qwen 3.7 Plus와 Flash는 1M 토큰 컨텍스트, 이미지와 비디오 입력, 하이브리드 사고, 함수 호출을 제공해 멀티모달 에이전트 작업에 적합합니다.',
			strengths: ['1M 토큰 컨텍스트, 131K 출력', '텍스트, 이미지, 비디오 입력', '함수 호출', '화면과 GUI 이해(Plus)'],
			bestFor: ['멀티모달 에이전트', '시각 자료 기반 코드 생성', '검색 에이전트(Flash)'],
		},
		'glm-5-3': {
			summary: '소프트웨어 엔지니어링과 에이전트 작업을 위한 Z.ai의 플래그십으로, 1M 토큰 컨텍스트, 최대 128K 출력, 공개된 웨이트를 갖추었으며 Flash 버전은 이미지와 비디오 입력을 추가합니다.',
			strengths: ['1M 토큰 컨텍스트, 128K 출력', '도구 스트리밍을 지원하는 함수 호출', '사고 강도 low, high 또는 max', '공개된 웨이트'],
			bestFor: ['코딩 에이전트', '긴 에이전트 작업', '코드 보안 검토'],
		},
		'minimax-m3': {
			summary: '최대 1M 토큰 컨텍스트와 도구 호출 사이에 끼워 넣는 사고를 갖춘 MiniMax의 네이티브 멀티모달 코딩·에이전트 모델이며, 웨이트가 공개되어 있습니다.',
			strengths: ['최대 1M 토큰 컨텍스트(512K 보장)', '도구 호출 사이의 사고', '텍스트, 이미지, 비디오 입력', '공개된 웨이트'],
			bestFor: ['코딩 어시스턴트', '긴 에이전트 작업과 워크플로 자동화', '긴 영상 분석'],
		},
		'mistral-large': {
			summary: 'Apache 2.0으로 제공되는 Mistral의 오픈 웨이트 전문가 혼합 플래그십(활성 41B, 전체 675B 파라미터)으로, 이미지 이해를 지원합니다.',
			strengths: ['Apache 2.0 라이선스', '이미지 이해', '40개 이상의 언어', '함수 호출과 구조화된 출력'],
			bestFor: ['다국어 어시스턴트', '문서 분석', '도구 사용 워크플로'],
		},
		'mistral-medium': {
			summary: '지시 수행, 추론, 코딩을 결합한 128B 덴스 멀티모달 모델로, 추론 강도를 요청마다 설정할 수 있습니다.',
			strengths: ['요청별 추론 강도', '에이전트와 코딩을 위해 설계', '함수 호출과 JSON 출력', 'GPU 4장으로 셀프 호스팅 가능'],
			bestFor: ['에이전트형 워크플로', '코딩 에이전트', '긴 문서'],
		},
		'mistral-small': {
			summary: '지시 수행, 추론, 코딩을 결합한 오픈 웨이트 전문가 혼합 모델(활성 파라미터 약 6B)로, 이미지 입력을 지원합니다.',
			strengths: ['지시 수행, 추론, 코딩을 하나의 모델에', '켤 수 있는 추론', '이미지 입력', 'Apache 2.0 라이선스'],
			bestFor: ['비용에 민감한 에이전트', '선택형 추론을 갖춘 범용 채팅', '이미지 이해'],
		},
		ministral: {
			summary: '세 가지 크기의 작은 오픈 웨이트 모델로, 각각 베이스, 인스트럭트, 추론 버전과 이미지 이해를 갖추었으며 로컬과 엣지 사용에 적합합니다.',
			strengths: ['로컬 배포를 위해 설계', '모든 크기에 추론 버전', '이미지 이해', 'Apache 2.0 라이선스'],
			bestFor: ['엣지 및 온프레미스 배포', '저비용 대량 작업', '로컬 에이전트'],
		},
		codestral: {
			summary: 'fill-in-the-middle과 코드 생성처럼 지연 시간이 짧고 빈도가 높은 작업을 위한 Mistral의 코딩 모델입니다.',
			strengths: ['Fill-in-the-middle', '저지연 자동 완성', '함수 호출', '구조화된 출력'],
			bestFor: ['코드 자동 완성', '코드 생성'],
		},
		'llama-4': {
			summary: '활성 파라미터 17B의 Meta 네이티브 멀티모달 전문가 혼합 모델: Scout(전체 109B)와 Maverick(전체 400B).',
			strengths: ['텍스트와 이미지 입력', '전문가 혼합 구조의 효율성', '12개 언어', '긴 컨텍스트(Bedrock의 Maverick은 1M)'],
			bestFor: ['멀티모달 어시스턴트', '시각적 추론', '긴 문서'],
		},
		'llama-3-3-70b': {
			summary: '8개 언어의 다국어 대화를 위한 Meta의 70B 텍스트 모델로, 도구 사용을 지원합니다.',
			strengths: ['8개 언어', '도구 사용', '128K 컨텍스트'],
			bestFor: ['셀프 호스팅 범용 채팅', '다국어 어시스턴트', '합성 데이터 생성'],
		},
		'llama-3-2-1b': {
			summary: '제약이 있는 환경과 온디바이스를 위한 1.2B 파라미터 다국어 모델로, EDDI JVM 안에서 실행할 수 있을 만큼 작습니다.',
			strengths: ['CPU에서 실행', '128K 컨텍스트', '8개 언어'],
			bestFor: ['프로세스 내 오프라인 추론', '쿼리와 프롬프트 재작성', '짧은 요약'],
		},
		'amazon-nova': {
			summary: '텍스트, 이미지, 비디오를 받는 Bedrock의 Amazon 멀티모달 모델: Pro는 균형형 계층, Lite는 저비용 계층입니다.',
			strengths: ['텍스트, 이미지, 비디오 입력', '300K 토큰 컨텍스트', '도구 사용', '프롬프트 캐싱'],
			bestFor: ['문서와 시각 자료 Q&A', '비디오 이해', 'AWS 안에서만 동작하는 에이전트'],
		},
		'cohere-command-a': {
			summary: '도구 사용, 검색, 23개 언어에 초점을 맞춘 Cohere의 111B 엔터프라이즈 모델이며, Oracle은 추론 버전과 비전 버전도 제공합니다.',
			strengths: ['다단계 도구 사용', '검색 증강 생성', '23개 언어', '256K 토큰 컨텍스트'],
			bestFor: ['엔터프라이즈 RAG', '다국어 에이전트', 'Oracle Cloud 배포'],
		},
		'phi-4-mini': {
			summary: '메모리 제약이 있고 지연 시간에 민감한 작업, 그리고 수학과 논리 추론을 위한 Microsoft의 3.8B 오픈 모델입니다.',
			strengths: ['제약이 있는 환경에서 실행', '수학과 논리', '함수 호출', 'MIT 라이선스'],
			bestFor: ['로컬 및 엣지 추론', '지연 시간에 민감한 앱', '가벼운 도구 호출'],
		},
	},
	hosts: {
		bedrock: { name: 'Amazon Bedrock', summary: 'Anthropic, Meta, Amazon, OpenAI, Mistral 등의 모델에 AWS 관리형 서비스로 접근합니다.', why: ['모델 제공업체는 고객의 프롬프트나 응답을 볼 수 없음', 'VPC와 PrivateLink를 통한 프라이빗 네트워킹', '데이터 레지던시를 위한 리전 내 및 교차 리전 추론'] },
		vertex: { name: 'Google Vertex AI', summary: 'Gemini와 Model Garden 모델을 제공하는 Google Cloud의 AI 플랫폼으로, 지금은 Gemini Enterprise Agent Platform이라고도 불립니다.', why: ['리전 엔드포인트로 처리를 하나의 관할권 안에 유지', '네트워크 격리를 위한 VPC Service Controls', 'Google Cloud 자격 증명을 통한 인증'] },
		azure: { name: 'Azure OpenAI', summary: '고객의 Azure 구독에서 호스팅되는 OpenAI 모델로, 지금은 Microsoft Foundry의 일부이며 배포 이름으로 호출합니다.', why: ['Data Zone 배포로 처리를 EU, 미국 또는 APAC 안에 유지', 'Azure 백본의 프라이빗 엔드포인트', '예약 용량을 위한 프로비저닝된 처리량'] },
		oracle: { name: 'Oracle OCI Generative AI', summary: 'Cohere, Meta Llama 등의 모델을 온디맨드 또는 전용 클러스터로 제공하는 Oracle Cloud의 관리형 서비스입니다.', why: ['전용 AI 클러스터', '프라이빗 엔드포인트와 데이터 격리', 'OCI IAM 정책으로 통제'] },
		groq: { name: 'Groq', summary: 'Groq 자체 LPU 칩에서 오픈 모델을 실행하는 추론 클라우드로, OpenAI 호환 API를 제공합니다.', why: ['매우 낮은 지연 시간', 'gpt-oss와 Qwen 같은 오픈 모델', '키 하나, 인프라 불필요'] },
		openrouter: { name: 'OpenRouter', summary: '하나의 API로 여러 프로바이더의 수백 개 모델에 접근하며, 요청마다 모델을 고르는 자동 라우터를 제공합니다.', why: ['키 하나로 여러 벤더', '프로바이더 간 자동 폴백', 'openrouter/auto가 작업마다 모델 선택'] },
		ollama: { name: 'Ollama', summary: '로컬 API 뒤에서 자체 하드웨어로 오픈 모델을 실행하며, 원한다면 EDDI와 같은 Docker 네트워크에 둘 수 있습니다.', why: ['클라우드 연결 불필요', '데이터가 자사 머신 밖으로 나가지 않음', '명령 하나로 모델 받기'] },
		huggingface: { name: 'Hugging Face', summary: '저장소 ID로 오픈 모델의 호스팅 추론을 제공하며, 토큰 하나로 파트너 프로바이더에 라우팅됩니다.', why: ['저장소 ID로 오픈 모델 사용', '여러 프로바이더에 걸쳐 토큰 하나', '운영할 인프라 없음'] },
		jlama: { name: 'Jlama', summary: 'EDDI JVM 안에서 작은 모델을 실행하는 순수 Java 추론 엔진으로, 모델 서버가 전혀 필요 없습니다.', why: ['추가로 배포할 것이 없음', '작은 자원 사용량을 위한 양자화 모델', '웨이트를 캐시하면 에어갭 환경에서도 동작'] },
	},
	tips: {
		anthropicNoTemperature: '<code>temperature</code>는 설정하지 마세요. 현행 Claude 모델은 기본값이 아닌 temperature를 거부하며, EDDI의 설정 도구는 이미 이를 생략합니다.',
		openaiResponsesTools: 'OpenAI 문서는 Astra와 6.1 Sol의 도구 호출에 Responses API를 안내하지만, EDDI의 <code>openai</code> 타입은 Chat Completions를 사용합니다. 프로덕션 전에 이 모델들에서 도구를 사용하는 에이전트를 테스트하세요.',
		geminiSignature: 'Gemini 3는 도구 호출 중에 사고 서명을 다시 돌려받아야 합니다. EDDI는 기본적으로 이를 처리합니다(<code>gemini</code> 타입에서 <code>returnThinking</code>과 <code>sendThinking</code>이 켜져 있음). 켜 둔 상태로 두세요.',
		geminiVertexTools: '도구를 사용하는 Gemini 3에는 <code>gemini-vertex</code>가 아니라 <code>type: gemini</code>를 사용하세요: Vertex 경로는 사고 서명을 전달할 수 없습니다. 도구 없이 쓸 때는 <code>gemini-vertex</code>도 괜찮습니다.',
		xaiUsRegion: 'xAI의 미국 데이터 레지던시 엔드포인트를 쓰려면 <code>"region": "us"</code>를 설정하세요. 이 엔드포인트는 grok-4.7과 grok-4.6만 제공합니다.',
		thinkingEcho: '이 프로바이더는 도구 루프 동안 모델의 추론 내용을 다시 보내야 합니다. EDDI의 프리셋이 이를 대신 처리하므로 <code>returnThinking</code>과 <code>sendThinking</code>은 기본값으로 두세요.',
		kimiTemperature: 'Moonshot은 kimi-k2.7-code와 kimi-k2.6의 temperature를 고정하므로, 이 모델들에서는 <code>temperature</code>를 설정하지 마세요.',
		qwenRegions: '<code>"region": "intl"</code>, <code>"cn"</code> 또는 <code>"us"</code>로 리전을 선택하세요. 워크스페이스 전용 Alibaba 호스트를 쓰려면 대신 <code>baseUrl</code>을 설정하세요.',
		minimaxNoJson: 'EDDI는 MiniMax에 JSON 응답 형식을 보내지 않습니다. JSON이 필요하면 <code>convertToObject</code>를 설정하고 프롬프트에서 구조를 설명하세요.',
		groqPreview: 'Groq는 qwen3.8-27b를 포함한 일부 모델을 Preview로 표시합니다: 평가용이며, 짧은 예고 후 중단될 수 있습니다.',
		bedrockGeo: 'Llama 4 Maverick을 포함한 일부 Bedrock 모델은 <code>us.meta.llama4-maverick-17b-instruct-v1:0</code> 같은 교차 리전 추론 프로필을 통해서만 사용할 수 있습니다.',
		ollamaThink: '추론 모델은 답하기 전에 사고하므로 스트리밍 채팅에서는 멈춘 것처럼 보일 수 있습니다. 즉시 답을 받으려면 <code>"think": "false"</code>를 설정하고, 태스크에 넉넉한 <code>timeout</code>을 주세요.',
		jlamaCache: 'Jlama는 EDDI JVM 안에서 실행됩니다. 재시작 후에도 웨이트가 남도록 <code>modelCachePath</code>를 마운트된 볼륨으로 지정하고, Pod 크기는 모델과 EDDI 힙을 합쳐 잡으세요.',
		localAirGap: '모델을 다운로드한 뒤에는 완전히 오프라인으로 실행되므로 에어갭 배포에 적합합니다.',
		cascadeTier: '<a href="/features/model-cascading/">모델 캐스케이드</a>의 첫 번째 계층으로 좋습니다: 빠르고 저렴하며, 신뢰도가 낮을 때만 더 큰 모델로 에스컬레이션합니다.',
		cascadeTop: '<a href="/features/model-cascading/">모델 캐스케이드</a>의 강력한 마지막 계층으로, 더 저렴한 모델이 확신하지 못한 요청만 이곳에 도달합니다.',
		azureDeployment: 'Azure OpenAI에서 <code>deploymentName</code>은 모델 이름이 아니라 Azure 리소스에서 배포에 붙인 이름입니다.',
	},
};

export default copy;
