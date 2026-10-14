import type { DevHomeCopy } from './en';

const copy: DevHomeCopy = {
	quickstart: {
		label: 'EDDI를 로컬에서 실행',
		tabBash: 'macOS / Linux',
		tabPowershell: 'Windows PowerShell',
		copy: '복사',
		copied: '복사됨',
		other: '다른 설치 방법 →',
	},
	sbs: {
		title: '설정과 UI를 나란히',
		subtitle: '에이전트의 동작은 읽고, 비교하고, 버전 관리할 수 있는 JSON 문서입니다. Manager는 같은 문서를 편집합니다.',
		tabsLabel: '설정 예시',
		tabs: { rule: 'Behavior rule', llm: 'LLM task', approval: '사람의 승인' },
		captions: {
			rule: 'Behavior Rule은 평범한 JSON입니다. 파싱된 입력이 trigger(current_weather)와 일치하면 ask_for_city 액션을 내보냅니다. task와 output이 그 액션을 기다립니다. Manager에서는 에이전트와 그 규칙을 실행하는 workflow를 볼 수 있습니다.',
			llm: 'LLM task도 JSON입니다. 제공자 유형, 평문 API 키 대신 vault 참조, 모델, 시스템 메시지를 지정합니다. Manager는 같은 문서를 편집합니다.',
			approval: '사람을 기다리려면 규칙이 PAUSE_CONVERSATION을 내보냅니다. 소유자, eddi-admin 또는 eddi-approver가 Manager나 Slack에서 결정할 때까지 대화는 AWAITING_HUMAN 상태로 대기합니다. 도구 호출과 그룹 단계도 같은 방식으로 제어할 수 있습니다.',
		},
		shotLabel: 'Manager 스크린샷',
		shotAlts: {
			rule: 'EDDI Manager: 환경과 workflow가 보이는 에이전트 상세 페이지',
			llm: 'EDDI Manager: 제공자, 트리거 액션, 시스템 프롬프트가 보이는 LLM task 편집기',
		},
		example: '설명을 위한 예시',
		card: {
			title: '승인 필요',
			pausedBy: '대화를 일시 중지한 규칙',
			state: 'AWAITING_HUMAN',
			approve: '승인',
			reject: '거부',
			foot: '모든 결정은 hitl.approval 항목으로 감사 ledger에 기록됩니다.',
		},
	},
};

export default copy;
