import type { PipelineCopy } from './en';

const copy: PipelineCopy = {
	ui: {
		svgLabel: 'Pipeline d\'un tour de conversation : Input, Parser, Behavior Rules, Tasks et Output en séquence, avec une Tool boundary contrôlée au-dessus de Tasks et la Conversation memory en dessous. Chaque étape est un bouton qui affiche ses détails plus bas.',
		hint: 'Sélectionnez une étape pour voir ce qu\'elle fait, sa configuration et ce qu\'elle écrit.',
		what: 'Ce qui se passe ici',
		config: 'Configuration',
		memory: 'Conversation memory',
		audit: 'Exemple d\'entrée d\'audit',
		auditNote: 'Chaque task du pipeline écrit une entrée : signée par HMAC, en ajout seul, avec contrôle de séquence.',
		example: 'Valeurs d\'exemple à titre d\'illustration',
	},
	stages: {
		input: 'Un message arrive depuis le chat, Slack, l\'API ou un client MCP. Le texte brut devient la première entrée d\'une nouvelle étape dans la Conversation memory. Aucun task n\'a encore été exécuté : cette étape montre donc l\'étape de mémoire et non une entrée d\'audit.',
		parser: 'Le parser normalise le texte et le cherche dans les dictionnaires de l\'agent, transformant mots et phrases en expressions sémantiques comme trigger(current_weather). C\'est une recherche, pas un appel à un modèle : le même texte donne toujours les mêmes expressions.',
		rules: 'Les Behavior Rules sont des conditions SI-ALORS portant sur les expressions et la Conversation memory. Chaque règle qui correspond émet des actions. Le routage relève de la configuration et non du code : la même entrée suit donc toujours le même chemin.',
		tasks: 'Les tasks écoutent les actions : un appel à un LLM, un appel HTTP, un outil MCP ou une recherche dans une base de connaissances. Chaque task écrit une entrée d\'audit signée avec ce qu\'il a lu, ce qu\'il a produit, ainsi que les détails du modèle et des outils.',
		tools: 'Tout appel d\'outil, quelle que soit sa source, franchit la même frontière. Les appels qui correspondent à un motif de toolApprovals sont mis en pause jusqu\'à la décision d\'un humain, et cette décision est écrite dans le ledger sous forme d\'entrée hitl.approval. Les identifiants viennent du vault sous forme de références ${vault:keyName}.',
		output: 'Les modèles d\'Output transforment les actions émises en réponse : texte et quick replies. La réponse est stockée en mémoire et renvoyée au canal d\'où venait le message.',
		memory: 'La Conversation memory conserve chaque étape (input, expressions, actions, output) et des propriétés limitées à l\'étape, à la conversation ou à l\'utilisateur (longTerm). L\'état de la conversation (READY, IN_PROGRESS, ENDED, AWAITING_HUMAN ou ERROR) y est enregistré.',
	},
};

export default copy;
