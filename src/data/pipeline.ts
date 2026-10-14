/**
 * Language-neutral data for the interactive turn pipeline (ArchitectureDiagram).
 * Config shapes come from the EDDI repo (test resources, docs/langchain.md,
 * docs/hitl.md, docs/audit-ledger.md, docs/conversation-memory.md). All values are
 * examples; the diagram labels them as such. Prose lives in src/i18n/pipeline/.
 */
import { toJson } from './highlight';

export type StageId = 'input' | 'parser' | 'rules' | 'tasks' | 'tools' | 'output' | 'memory';
export type BlockKind = 'config' | 'memory' | 'audit';

export interface StageBlock {
	kind: BlockKind;
	code: string;
}

export const DEFAULT_STAGE: StageId = 'rules';

// Example identifiers shared by every audit entry below.
const CONVERSATION_ID = '6650f1c2a7b94e0012ab34cd';
const AGENT_ID = 'support-agent';

/** Example HMAC and signature values: the format is real ("v4:" + 64 hex), the bytes are not. */
const EXAMPLE_HMAC = 'v4:' + 'a3f1c09e5b7d2468'.repeat(4);
const EXAMPLE_SIGNATURE = 'MEUCIQDk3x…9fQ==';

function auditEntry(fields: Record<string, unknown>, sequence: number, stepIndex = 0) {
	return {
		id: '0b5e9a0c-6f3d-4b1e-9d57-2c1f8a7e4d10',
		conversationId: CONVERSATION_ID,
		agentId: AGENT_ID,
		agentVersion: 1,
		userId: 'user-4711',
		environment: 'production',
		stepIndex,
		...fields,
		timestamp: '2026-10-14T09:12:41.208Z',
		hmac: EXAMPLE_HMAC,
		agentSignature: EXAMPLE_SIGNATURE,
		sequence,
	};
}

const parserConfig = {
	words: [{ word: 'weather', expressions: 'trigger(current_weather)', frequency: 0 }],
	phrases: [{ phrase: 'what is the weather', expressions: 'trigger(current_weather)' }],
};

const rulesConfig = {
	behaviorGroups: [
		{
			name: '',
			behaviorRules: [
				{
					name: 'Ask for City',
					actions: ['ask_for_city'],
					conditions: [{ type: 'inputmatcher', configs: { expressions: 'trigger(current_weather)' }, conditions: [] }],
				},
			],
		},
	],
};

const llmConfig = {
	tasks: [
		{
			actions: ['send_message'],
			id: 'simpleChat',
			type: 'anthropic',
			description: 'Answers weather questions',
			parameters: {
				apiKey: '${vault:anthropic-key}',
				modelName: 'claude-sonnet-5-5',
				systemMessage: 'You are a helpful assistant',
				addToOutput: 'true',
			},
		},
	],
};

const toolApprovals = {
	hitlConfig: {
		toolApprovals: {
			requireApproval: ['mcp:*', 'delete_*', 'transfer_funds'],
			exempt: ['mcp:read_*'],
			approvalTimeout: 'PT30M',
			timeoutPolicy: 'AUTO_REJECT',
			pauseReason: 'Approval required for {toolNames}',
		},
	},
};

const outputConfig = {
	outputSet: [
		{
			action: 'ask_for_city',
			timesOccurred: 0,
			outputs: [{ valueAlternatives: [{ type: 'text', text: 'Which city would you like to know the weather of?' }] }],
			quickReplies: [],
		},
	],
};

export const STAGE_BLOCKS: Record<StageId, StageBlock[]> = {
	input: [
		{
			kind: 'memory',
			code: toJson({ key: 'input', value: 'What is the weather?' }),
		},
	],
	parser: [
		{ kind: 'config', code: toJson(parserConfig) },
		{
			kind: 'audit',
			code: toJson(
				auditEntry(
					{
						taskId: 'ai.labs.parser',
						taskType: 'expressions',
						taskIndex: 0,
						durationMs: 3,
						input: { input: 'What is the weather?' },
						output: { expressions: ['trigger(current_weather)'] },
						actions: [],
						cost: 0.0,
					},
					0,
				),
			),
		},
	],
	rules: [
		{ kind: 'config', code: toJson(rulesConfig) },
		{
			kind: 'audit',
			code: toJson(
				auditEntry(
					{
						taskId: 'ai.labs.behavior',
						taskType: 'behavior_rules',
						taskIndex: 1,
						durationMs: 1,
						input: { expressions: ['trigger(current_weather)'] },
						output: { 'behavior_rules:success': ['Ask for City'] },
						actions: ['ask_for_city'],
						cost: 0.0,
					},
					1,
				),
			),
		},
	],
	tasks: [
		{ kind: 'config', code: toJson(llmConfig) },
		{
			kind: 'audit',
			code: toJson(
				auditEntry(
					{
						taskId: 'ai.labs.llm',
						taskType: 'langchain',
						taskIndex: 2,
						durationMs: 1840,
						input: { input: 'What is the weather in Vienna?', actions: ['send_message'] },
						output: { text: 'Vienna: 14 °C, light rain.' },
						llmDetail: { modelName: 'claude-sonnet-5-5', inputTokens: 412, outputTokens: 18 },
						toolCalls: { name: 'get_weather', args: { city: 'Vienna' }, result: '14 °C, light rain' },
						actions: ['send_message'],
						cost: 0.0016,
					},
					2,
				),
			),
		},
	],
	tools: [
		{ kind: 'config', code: toJson(toolApprovals) },
		{
			kind: 'audit',
			code: toJson(
				auditEntry(
					{
						taskId: 'hitl.approval',
						taskType: 'hitl',
						taskIndex: -1,
						durationMs: 0,
						input: {},
						output: {
							verdict: 'APPROVED',
							decidedBy: 'slack:U04EXAMPLE',
							automated: false,
							pauseType: 'TOOL_CALL',
							toolDecisions: [{ callId: 'call_01', toolName: 'transfer_funds', verdict: 'APPROVED', amended: false, argsDigest: 'sha256:9c1d…e407' }],
						},
						actions: [],
						cost: 0.0,
					},
					3,
					-1,
				),
			),
		},
	],
	output: [
		{ kind: 'config', code: toJson(outputConfig) },
		{
			kind: 'memory',
			code: toJson({ key: 'output', value: ['Which city would you like to know the weather of?'] }),
		},
	],
	memory: [
		{
			kind: 'memory',
			code: toJson({
				conversationState: 'READY',
				conversationSteps: [
					{
						data: [
							{ key: 'input', value: 'What is the weather?' },
							{ key: 'expressions', value: ['trigger(current_weather)'] },
							{ key: 'actions', value: ['ask_for_city'] },
							{ key: 'output', value: ['Which city would you like to know the weather of?'] },
						],
					},
				],
				conversationProperties: { chosenCity: 'Vienna' },
			}),
		},
	],
};
