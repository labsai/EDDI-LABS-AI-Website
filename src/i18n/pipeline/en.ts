/**
 * Interactive turn pipeline copy, English (source of truth for the other locales).
 * Stage names (Input, Parser, Behavior Rules, Tasks, Tool boundary, Output,
 * Conversation memory), field names and JSON stay in English in every locale.
 */
import type { StageId } from '../../data/pipeline';

export interface PipelineCopy {
	ui: {
		svgLabel: string;
		hint: string;
		what: string;
		config: string;
		memory: string;
		audit: string;
		auditNote: string;
		example: string;
	};
	stages: Record<StageId, string>;
}

const copy: PipelineCopy = {
	ui: {
		svgLabel: 'Conversation turn pipeline: Input, Parser, Behavior Rules, Tasks and Output in sequence, with a governed Tool boundary above Tasks and Conversation memory underneath. Each stage is a button that shows its details below.',
		hint: 'Select a stage to see what it does, its config and what it writes.',
		what: 'What happens here',
		config: 'Config',
		memory: 'Conversation memory',
		audit: 'Example audit entry',
		auditNote: 'Each pipeline task writes one entry: HMAC-signed, append-only, sequence-checked.',
		example: 'Illustrative example values',
	},
	stages: {
		input: 'A message arrives from chat, Slack, the API or an MCP client. The raw text becomes the first entry of a new step in conversation memory. No task has run yet, so this stage shows the memory step rather than an audit entry.',
		parser: 'The parser normalizes the text and looks it up in the agent\'s dictionaries, turning words and phrases into semantic expressions such as trigger(current_weather). It is a lookup, not a model call, so the same text always yields the same expressions.',
		rules: 'Behavior Rules are IF-THEN conditions over the expressions and the conversation memory. Every matching rule emits actions. Routing is configuration rather than code, so the same input takes the same path every time.',
		tasks: 'Tasks listen for actions: an LLM call, an HTTP call, an MCP tool or a knowledge-base lookup. Each task writes one signed audit entry with what it read, what it produced, and any model and tool details.',
		tools: 'Every tool call, whatever its source, crosses the same boundary. Calls that match a toolApprovals pattern pause until a human decides, and the decision is written to the ledger as a hitl.approval entry. Credentials come from the vault as ${vault:keyName} references.',
		output: 'Output templates turn the emitted actions into the reply: text and quick replies. The reply is stored in memory and returned to the channel the message came from.',
		memory: 'Conversation memory keeps every step (input, expressions, actions, output) and properties scoped to the step, the conversation or the user (longTerm). The conversation state (READY, IN_PROGRESS, ENDED, AWAITING_HUMAN or ERROR) is stored with it.',
	},
};

export default copy;
