/**
 * Developer-homepage copy (hero quickstart and the "Config and UI, side by side"
 * section), English, source of truth for the other locales. Commands, JSON and
 * identifiers are not translated; they live in the components and src/data.
 */
export interface DevHomeCopy {
	quickstart: {
		label: string;
		tabBash: string;
		tabPowershell: string;
		copy: string;
		copied: string;
		other: string;
	};
	sbs: {
		title: string;
		subtitle: string;
		tabsLabel: string;
		tabs: { rule: string; llm: string; approval: string };
		captions: { rule: string; llm: string; approval: string };
		shotLabel: string;
		shotAlts: { rule: string; llm: string };
		example: string;
		card: {
			title: string;
			pausedBy: string;
			state: string;
			approve: string;
			reject: string;
			foot: string;
		};
	};
}

const copy: DevHomeCopy = {
	quickstart: {
		label: 'Run EDDI locally',
		tabBash: 'macOS / Linux',
		tabPowershell: 'Windows PowerShell',
		copy: 'Copy',
		copied: 'Copied',
		other: 'Other ways to install →',
	},
	sbs: {
		title: 'Config and UI, side by side',
		subtitle: 'What an agent does is a set of JSON documents you can read, diff and version. The Manager edits the same documents.',
		tabsLabel: 'Configuration examples',
		tabs: { rule: 'Behavior rule', llm: 'LLM task', approval: 'Human approval' },
		captions: {
			rule: 'A Behavior Rule is plain JSON: when the parsed input matches trigger(current_weather), emit the action ask_for_city. Tasks and output listen for that action. The Manager shows an agent and the workflow that runs its rules.',
			llm: 'An LLM task is JSON too: the provider type, a vault reference instead of a raw API key, the model and the system message. The Manager edits the same document.',
			approval: 'To pause for a human, a rule emits PAUSE_CONVERSATION. The conversation waits in state AWAITING_HUMAN until the owner, an eddi-admin or an eddi-approver decides, in the Manager or in Slack. Tool calls and group phases can be gated the same way.',
		},
		shotLabel: 'Manager screenshot',
		shotAlts: {
			rule: 'EDDI Manager: the detail page of an agent with its environments and workflow',
			llm: 'EDDI Manager: the LLM task editor with provider, trigger actions and system prompt',
		},
		example: 'Illustrative example',
		card: {
			title: 'Approval needed',
			pausedBy: 'Conversation paused by rule',
			state: 'AWAITING_HUMAN',
			approve: 'Approve',
			reject: 'Reject',
			foot: 'Every decision is written to the audit ledger as a hitl.approval entry.',
		},
	},
};

export default copy;
