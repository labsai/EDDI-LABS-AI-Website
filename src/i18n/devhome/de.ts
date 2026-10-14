import type { DevHomeCopy } from './en';

const copy: DevHomeCopy = {
	quickstart: {
		label: 'EDDI lokal starten',
		tabBash: 'macOS / Linux',
		tabPowershell: 'Windows PowerShell',
		copy: 'Kopieren',
		copied: 'Kopiert',
		other: 'Weitere Installationswege →',
	},
	sbs: {
		title: 'Konfiguration und Oberfläche, nebeneinander',
		subtitle: 'Was ein Agent tut, steht in JSON-Dokumenten, die Sie lesen, vergleichen und versionieren können. Der Manager bearbeitet dieselben Dokumente.',
		tabsLabel: 'Konfigurationsbeispiele',
		tabs: { rule: 'Behavior rule', llm: 'LLM-Task', approval: 'Menschliche Freigabe' },
		captions: {
			rule: 'Eine Behavior Rule ist schlichtes JSON: Passt die geparste Eingabe auf trigger(current_weather), löst sie die Aktion ask_for_city aus. Tasks und Output reagieren auf diese Aktion. Der Manager zeigt einen Agent und den Workflow, der seine Regeln ausführt.',
			llm: 'Auch ein LLM-Task ist JSON: der Anbietertyp, eine Vault-Referenz statt eines Klartext-API-Schlüssels, das Modell und die Systemnachricht. Der Manager bearbeitet dasselbe Dokument.',
			approval: 'Um für einen Menschen zu pausieren, löst eine Regel PAUSE_CONVERSATION aus. Das Gespräch wartet im Zustand AWAITING_HUMAN, bis der Eigentümer, ein eddi-admin oder ein eddi-approver im Manager oder in Slack entscheidet. Tool-Aufrufe und Gruppenphasen lassen sich genauso absichern.',
		},
		shotLabel: 'Manager-Screenshot',
		shotAlts: {
			rule: 'EDDI Manager: Detailseite eines Agents mit Umgebungen und Workflow',
			llm: 'EDDI Manager: der LLM-Task-Editor mit Anbieter, Auslöse-Aktionen und System-Prompt',
		},
		example: 'Beispiel zur Veranschaulichung',
		card: {
			title: 'Freigabe erforderlich',
			pausedBy: 'Gespräch pausiert durch Regel',
			state: 'AWAITING_HUMAN',
			approve: 'Freigeben',
			reject: 'Ablehnen',
			foot: 'Jede Entscheidung wird als hitl.approval-Eintrag im Audit-Ledger festgehalten.',
		},
	},
};

export default copy;
