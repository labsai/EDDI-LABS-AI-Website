import type { PipelineCopy } from './en';

const copy: PipelineCopy = {
	ui: {
		svgLabel: '대화 턴 파이프라인: Input, Parser, Behavior Rules, Tasks, Output이 순서대로 이어지고, Tasks 위에는 통제되는 Tool boundary가, 아래에는 Conversation memory가 있습니다. 각 단계는 버튼이며 아래에 세부 정보를 보여 줍니다.',
		hint: '단계를 선택하면 그 단계가 하는 일, 설정, 기록하는 내용을 볼 수 있습니다.',
		what: '이 단계에서 일어나는 일',
		config: '설정',
		memory: 'Conversation memory',
		audit: '감사 항목 예시',
		auditNote: '파이프라인의 각 task는 항목을 하나씩 기록합니다. HMAC 서명, 추가 전용, 시퀀스 검사가 적용됩니다.',
		example: '설명을 위한 예시 값',
	},
	stages: {
		input: '채팅, Slack, API 또는 MCP 클라이언트에서 메시지가 도착합니다. 원본 텍스트는 Conversation memory의 새 스텝의 첫 항목이 됩니다. 아직 task가 실행되지 않았으므로 이 단계는 감사 항목 대신 메모리 스텝을 보여 줍니다.',
		parser: 'parser는 텍스트를 정규화하고 에이전트의 사전에서 찾아 단어와 구문을 trigger(current_weather) 같은 의미 표현으로 바꿉니다. 모델 호출이 아니라 조회이므로 같은 텍스트는 항상 같은 표현이 됩니다.',
		rules: 'Behavior Rules는 표현과 Conversation memory에 대한 IF-THEN 조건입니다. 일치하는 규칙마다 액션을 내보냅니다. 라우팅은 코드가 아니라 설정이므로 같은 입력은 매번 같은 경로를 따릅니다.',
		tasks: 'task는 액션을 기다립니다. LLM 호출, HTTP 호출, MCP 도구, 지식 베이스 조회 등이 있습니다. 각 task는 읽은 내용, 만든 결과, 모델과 도구 세부 정보를 담은 서명된 감사 항목을 하나 기록합니다.',
		tools: '출처와 관계없이 모든 도구 호출은 같은 경계를 지납니다. toolApprovals 패턴과 일치하는 호출은 사람이 결정할 때까지 일시 중지되고, 그 결정은 hitl.approval 항목으로 ledger에 기록됩니다. 자격 증명은 ${vault:keyName} 참조로 vault에서 가져옵니다.',
		output: 'Output 템플릿은 내보낸 액션을 답변(텍스트와 빠른 답장)으로 바꿉니다. 답변은 메모리에 저장되고 메시지가 온 채널로 반환됩니다.',
		memory: 'Conversation memory는 모든 스텝(input, expressions, actions, output)과 스텝, 대화, 사용자(longTerm) 범위의 속성을 보관합니다. 대화 상태(READY, IN_PROGRESS, ENDED, AWAITING_HUMAN, ERROR)도 함께 저장됩니다.',
	},
};

export default copy;
