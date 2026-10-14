import type { DevHomeCopy } from './en';

const copy: DevHomeCopy = {
	quickstart: {
		label: 'Lancer EDDI en local',
		tabBash: 'macOS / Linux',
		tabPowershell: 'Windows PowerShell',
		copy: 'Copier',
		copied: 'Copié',
		other: 'Autres façons d\'installer →',
	},
	sbs: {
		title: 'Configuration et interface, côte à côte',
		subtitle: 'Ce que fait un agent tient dans des documents JSON que vous pouvez lire, comparer et versionner. Le Manager modifie ces mêmes documents.',
		tabsLabel: 'Exemples de configuration',
		tabs: { rule: 'Behavior rule', llm: 'Task LLM', approval: 'Validation humaine' },
		captions: {
			rule: 'Une Behavior Rule est du JSON simple : quand l\'entrée analysée correspond à trigger(current_weather), elle émet l\'action ask_for_city. Les tasks et l\'output écoutent cette action. Le Manager montre un agent et le workflow qui exécute ses règles.',
			llm: 'Un task LLM est lui aussi du JSON : le type de fournisseur, une référence au vault plutôt qu\'une clé d\'API en clair, le modèle et le message système. Le Manager modifie le même document.',
			approval: 'Pour attendre un humain, une règle émet PAUSE_CONVERSATION. La conversation reste à l\'état AWAITING_HUMAN jusqu\'à la décision du propriétaire, d\'un eddi-admin ou d\'un eddi-approver, dans le Manager ou dans Slack. Les appels d\'outils et les phases de groupe peuvent être contrôlés de la même façon.',
		},
		shotLabel: 'Capture du Manager',
		shotAlts: {
			rule: 'EDDI Manager : page de détail d\'un agent avec ses environnements et son workflow',
			llm: 'EDDI Manager : l\'éditeur de task LLM avec fournisseur, actions de déclenchement et prompt système',
		},
		example: 'Exemple à titre d\'illustration',
		card: {
			title: 'Validation requise',
			pausedBy: 'Conversation suspendue par la règle',
			state: 'AWAITING_HUMAN',
			approve: 'Approuver',
			reject: 'Rejeter',
			foot: 'Chaque décision est écrite dans le ledger d\'audit sous forme d\'entrée hitl.approval.',
		},
	},
};

export default copy;
