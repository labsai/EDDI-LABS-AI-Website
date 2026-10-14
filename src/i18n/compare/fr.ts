/**
 * Comparatifs détaillés, français. Les clés correspondent à src/data/comparisons.ts.
 * Les faits sur les concurrents sont datés « octobre 2026 ».
 */
import type { CompareCopy } from './en';
import { MCP_TOOLS, FRAMEWORKS, LLM_PROVIDERS, TESTS, EMBEDDING_PROVIDERS, VECTOR_STORES } from '../stats';

const EDDI_LICENSE = 'Apache 2.0, approuvée par l\'OSI';

const copy: CompareCopy = {
	ui: {
		shortAnswer: 'Réponse courte',
		chooseTitle: 'Choisir entre les deux',
		faqTitle: 'Questions fréquentes',
		otherTitle: 'Autres comparatifs',
		allAlternatives: 'Toutes les alternatives : constructeurs, bibliothèques et plateformes cloud',
		asOfNote: 'Les informations sur l\'autre outil ont été vérifiées dans sa documentation officielle et son dépôt en octobre 2026. Ces projets évoluent vite : confirmez le comportement actuel auprès de l\'éditeur avant de décider.',
		backToHub: 'Tous les comparatifs',
		hubTitle: 'EDDI comparé : Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n et plus',
		hubMetaTitle: 'EDDI vs. Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n, Flowise, Rasa',
		hubDescription: 'Comparatifs équilibrés d\'EDDI avec Dify, CrewAI, LangChain et LangGraph, Microsoft Agent Framework (AutoGen et Semantic Kernel), n8n, Flowise et Rasa, y compris les cas où l\'autre outil est le meilleur choix.',
		hubIntro: 'Chaque page compare EDDI à une alternative sur les mêmes dimensions : architecture, gouvernance, licence et exploitation. Chacune dit clairement quand l\'autre outil est le meilleur choix et comment migrer si vous décidez de changer.',
		hubReadMore: 'Lire le comparatif',
		hubLandscapeTitle: 'Vous cherchez une vue d\'ensemble ?',
		hubLandscapeDesc: 'L\'aperçu des alternatives classe le domaine par archétype : constructeurs visuels, bibliothèques de code et plateformes d\'IA cloud.',
		headToHeadTitle: 'Comparatifs en face-à-face',
		headToHeadIntro: 'Cette page cartographie le paysage par archétype. Pour une comparaison directe avec une alternative précise, y compris les cas où cette alternative est le meilleur choix et la façon de migrer un projet existant, consultez :',
		navLabel: 'Comparer',
		navDesc: "Dify, CrewAI, LangGraph et d'autres, face à face",
	},
	comparisons: {
		// ─── LangChain et LangGraph ───────────────────────────────────
		'eddi-vs-langchain': {
			title: 'EDDI vs. LangChain et LangGraph',
			description:
				'Comparaison d\'EDDI avec LangChain et LangGraph : bibliothèque ou plateforme déployable, graphes définis en code ou config-as-code, Humain dans la boucle, écart des opérations Day 2, et cas où écrire soi-même l\'orchestration est le bon choix.',
			summary: 'Bibliothèque et graphes définis en code face à une plateforme déployable ; l\'écart des opérations Day 2.',
			verdict:
				'<strong>Choisissez LangChain ou LangGraph</strong> lorsque la logique d\'orchestration est la partie différenciante de votre produit et que vous la voulez en code, relue, dans votre dépôt. <strong>Choisissez EDDI</strong> lorsque l\'orchestration est une infrastructure non différenciante que vous préférez déployer plutôt que maintenir.',
			whatItIsTitle: 'Ce que sont LangChain et LangGraph',
			whatItIs:
				'LangChain est un framework Python et JavaScript sous licence MIT pour créer des applications LLM. LangGraph, de la même équipe, est un framework d\'orchestration de bas niveau pour agents avec état : vous définissez un graphe en code, et il ajoute une exécution durable qui reprend après les pannes ainsi que des points de contrôle Humain dans la boucle où vous pouvez inspecter et modifier l\'état de l\'agent. LangSmith est le produit commercial de traçage, d\'évaluation et d\'observabilité, et LangSmith Deployment héberge les agents de longue durée. La surface d\'intégration est la plus large de l\'écosystème.',
			archetypeTitle: 'C\'est une question de bibliothèque ou de plateforme',
			archetype:
				'EDDI n\'est pas un framework concurrent. EDDI utilise en interne <a href="https://docs.langchain4j.dev/" target="_blank" rel="noopener">LangChain4j</a>, le cousin Java de LangChain. La vraie question n\'est pas de savoir quelle abstraction est meilleure. Il s\'agit de savoir si le flux de contrôle vit dans du code que vous écrivez, sous forme de graphe LangGraph, ou dans une configuration déclarative que vous déployez, et qui construit et possède tout ce qui l\'entoure : la couche REST, l\'authentification, la multi-location, l\'état, l\'audit et l\'interface utilisée par les non-développeurs.',
			tableTitle: 'Ce que vous construisez face à ce que vous déployez',
			tableHeaders: { dimension: 'Dimension', them: 'LangChain / LangGraph', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Forme', them: 'Une bibliothèque importée dans votre application', eddi: 'Middleware déployable ; s\'exécute partout où Docker fonctionne' },
				{ dimension: 'Logique d\'orchestration', them: 'Graphes Python ou TypeScript dans votre dépôt', eddi: 'Configuration JSON et règles de comportement déterministes, modifiées sans redéploiement' },
				{ dimension: 'Humain dans la boucle', them: 'Les interruptions permettent d\'inspecter et de modifier l\'état ; l\'interface d\'approbation et la politique sont à construire', eddi: 'Points de validation sur les tours, les appels d\'outils et les phases de groupe, avec politiques de délai, approbations dans le Manager et Slack' },
				{ dimension: 'Durabilité', them: 'Exécution durable avec une persistance que vous configurez', eddi: 'Mémoire de conversation persistée par la plateforme, avec des états explicites tels que AWAITING_HUMAN' },
				{ dimension: 'API REST et routage', them: 'À construire, ou hébergement sur LangSmith Deployment', eddi: 'Inclus, avec OpenAPI 3.1, protocole A2A et streaming SSE' },
				{ dimension: 'Authentification et RBAC', them: 'À construire', eddi: 'OIDC/Keycloak optionnel avec les rôles eddi-admin et eddi-approver' },
				{ dimension: 'Interface pour non-développeurs', them: 'À construire (LangSmith Studio s\'adresse aux développeurs)', eddi: 'EDDI Manager, une interface React de production en 11 langues' },
				{ dimension: 'Gestion des secrets', them: 'À construire, ou à brancher sur un coffre-fort', eddi: 'Secrets Vault intégré en AES-256-GCM, référencé par ${vault:key}' },
				{ dimension: 'Observabilité', them: 'LangSmith (commercial) ou votre propre instrumentation', eddi: 'Métriques Prometheus et tableaux de bord Grafana provisionnés automatiquement' },
				{ dimension: 'Audit et conformité', them: 'À construire', eddi: `Registre d\'audit signé HMAC, en ajout seul, à séquence vérifiée, API des droits des personnes concernées, ${FRAMEWORKS} référentiels couverts` },
				{ dimension: 'Boucle d\'itération', them: 'Modifier le code, relire, tester, déployer', eddi: 'Modifier la configuration dans l\'interface ou l\'API ; effet immédiat' },
				{ dimension: 'Plafond de contrôle', them: 'Aucun. Tout ce qui s\'exprime en code est disponible', eddi: 'Limité par ce que la configuration peut exprimer, par conception' },
			],
			betterThemTitle: 'Quand LangChain et LangGraph sont le meilleur choix',
			betterThem: [
				'L\'orchestration elle-même est votre avantage concurrentiel et doit vivre dans votre base de code, pas dans un magasin de configuration.',
				'Vous avez besoin d\'un flux de contrôle que la configuration déclarative ne sait pas exprimer : topologies de graphe sur mesure, sémantiques de nouvelle tentative spécifiques, machines à états inhabituelles.',
				'Vous êtes une équipe Python ou TypeScript et voulez que l\'agent vive dans un service existant plutôt qu\'à côté.',
				'Vous avez besoin d\'une toute nouvelle intégration la semaine même de sa sortie. LangChain avance plus vite que n\'importe quelle plateforme.',
				'L\'équipe compte un ou deux ingénieurs, sans responsable conformité, sans exigence de multi-location et sans non-développeur ayant besoin d\'un accès.',
			],
			betterEddiTitle: 'Quand EDDI est le meilleur choix',
			betterEddi: [
				'Vous reconnaissez la liste des opérations Day 2 comme du travail que votre équipe fait au lieu de livrer le produit.',
				'Les prompt engineers et les équipes d\'exploitation doivent changer le comportement de l\'agent sans pull request.',
				'Plusieurs équipes ou clients partagent un même déploiement et ont besoin d\'isolation, de quotas et d\'imputation des coûts.',
				'Les achats exigent une réponse sur les pistes d\'audit, la résidence des données et la couverture des référentiels avant toute mise en production.',
				'Vous voulez que la couche d\'orchestration soit une dépendance que vous mettez à jour, pas une base de code que vous maintenez.',
			],
			migrationTitle: 'Migrer une application depuis LangChain ou LangGraph',
			migrationIntro:
				'La logique survit en général ; c\'est l\'infrastructure environnante que vous cessez de maintenir. Partez de la définition de la chaîne ou du graphe. Un flux de contrôle qui dépend de Python arbitraire devra devenir des règles de comportement ou un outil déclaré.',
			migrationSteps: [
				{ from: 'Chaîne ou graphe LangGraph', to: 'Configuration de pipeline EDDI et règles de comportement' },
				{ from: 'Outils et appel de fonctions', to: 'Définitions d\'outils MCP ou déclarations httpCall' },
				{ from: 'Interruption pour relecture humaine', to: 'Règle PAUSE_CONVERSATION ou globs toolApprovals, approuvés dans le Manager ou Slack' },
				{ from: 'Classes de checkpointer et de mémoire', to: 'Mémoire de conversation avec les portées step, conversation et longTerm' },
				{ from: 'Configuration du retriever et du magasin vectoriel', to: `Configuration RAG parmi ${EMBEDDING_PROVIDERS} fournisseurs d\'embeddings et ${VECTOR_STORES} magasins vectoriels` },
				{ from: 'Modèles de prompts', to: 'Extraits de prompts versionnés, référencés par nom' },
				{ from: 'Surcouche FastAPI', to: 'API REST intégrée, OpenAPI 3.1 et streaming SSE' },
				{ from: 'Traçage LangSmith', to: 'Métriques Prometheus, tableaux de bord Grafana et registre d\'audit' },
			],
			faq: [
				{
					question: 'EDDI utilise-t-il LangChain ?',
					answer:
						'EDDI utilise en interne LangChain4j, l\'implémentation Java. Ce n\'est pas une abstraction concurrente. EDDI est la plateforme déployable construite autour de ce type de bibliothèque : elle fournit la couche API, l\'authentification, la gestion d\'état, l\'interface de gestion et l\'infrastructure de conformité qu\'une bibliothèque laisse volontairement à votre charge.',
				},
				{
					question: 'Quelle est la différence entre LangChain et LangGraph ?',
					answer:
						'LangChain fournit des composants et des intégrations pour les applications LLM. LangGraph est la couche de plus bas niveau pour les agents avec état et de longue durée définis sous forme de graphes, avec exécution durable et points de contrôle Humain dans la boucle. Ce sont deux bibliothèques que vous intégrez à votre propre service. La comparaison avec EDDI s\'applique aux deux.',
				},
				{
					question: 'Qu\'est-ce que l\'écart des opérations Day 2 ?',
					answer:
						'Le Day 1, c\'est faire répondre correctement un agent, ce qu\'une bibliothèque gère bien. Le Day 2, c\'est tout ce qui suit : authentification, multi-location, état des conversations entre redémarrages, journal d\'audit, rotation des secrets, mise à l\'échelle horizontale, suivi des coûts et interface pour les personnes qui n\'écrivent pas de Python. Les équipes passent régulièrement plus de temps sur le Day 2 que sur l\'agent lui-même.',
				},
				{
					question: 'La configuration est-elle moins puissante que le code ?',
					answer:
						'Oui, et ce compromis est délibéré. La configuration ne peut pas tout exprimer comme le code. En échange, vous obtenez des changements sans redéploiement, un comportement que des non-ingénieurs peuvent relire, et aucune exécution de code à l\'exécution à défendre lors d\'une revue de sécurité. Si vous avez besoin du plafond qu\'offre le code, utilisez la bibliothèque.',
				},
				{
					question: 'Peut-on garder LangChain et utiliser quand même EDDI ?',
					answer:
						'Oui. EDDI expose un serveur MCP et une API REST : une application LangChain peut donc appeler des agents EDDI comme outils, et EDDI peut appeler votre service LangChain via httpCall. Séparer ce qui est différenciant de ce qui est de l\'infrastructure est une conception raisonnable.',
				},
			],
		},

		// ─── Microsoft Agent Framework ────────────────────────────────
		'eddi-vs-microsoft-agent-framework': {
			title: 'EDDI vs. Microsoft Agent Framework (AutoGen et Semantic Kernel)',
			description:
				'Comparaison d\'EDDI avec Microsoft Agent Framework, successeur d\'AutoGen et de Semantic Kernel : workflows définis en code ou config-as-code, Humain dans la boucle, audit, hébergement, et cas où la pile Microsoft convient mieux.',
			summary: 'Microsoft Agent Framework, successeur d\'AutoGen et de Semantic Kernel, face à une plateforme d\'agents déployable.',
			verdict:
				'<strong>Choisissez Microsoft Agent Framework</strong> si vous êtes une équipe .NET ou Python, développez sur Azure et voulez des workflows d\'agents sous forme de code dans votre propre service. <strong>Choisissez EDDI</strong> si vous voulez des agents définis comme une configuration relisible sur une plateforme JVM exécutable n\'importe où, avec des points d\'approbation et un registre d\'audit intégrés plutôt qu\'assemblés.',
			whatItIsTitle: 'Ce qu\'est Microsoft Agent Framework',
			whatItIs:
				'Microsoft Agent Framework est un SDK et un runtime open source sous licence MIT pour créer et orchestrer des agents et des workflows multi-agents en .NET et Python. Il est issu des équipes de Semantic Kernel et d\'AutoGen et a atteint sa version 1.0 en avril 2026. Les workflows sont des graphes avec des modèles de collaboration séquentiels, concurrents, de passation (handoff) et de groupe, avec points de contrôle, streaming, contrôle Humain dans la boucle, traçage OpenTelemetry et un système de middleware. Les agents peuvent aussi être déclarés en YAML, et Microsoft documente l\'hébergement sur Foundry. En octobre 2026, Semantic Kernel reçoit des correctifs tandis que le développement de nouvelles fonctionnalités se fait dans Agent Framework, et AutoGen est en mode maintenance, avec des guides de migration pour les deux.',
			archetypeTitle: 'Workflows définis en code ou configuration déclarée',
			archetype:
				'Si vous êtes arrivé ici en cherchant AutoGen ou Semantic Kernel, la comparaison pertinente aujourd\'hui est avec Agent Framework, car c\'est là que Microsoft oriente les nouveaux projets. C\'est un SDK : votre workflow est du code dans votre service, dans votre langage, et vous choisissez comment l\'héberger, le sécuriser et l\'auditer, avec un solide support d\'Azure. EDDI fait le compromis inverse. L\'agent est une configuration JSON interprétée par une plateforme déployée : son comportement peut être comparé, relu et modifié sans reconstruction, et la plateforme fournit l\'API, l\'interface Manager, le coffre-fort de secrets et le registre d\'audit.',
			tableTitle: 'SDK pour votre service ou plateforme que vous déployez',
			tableHeaders: { dimension: 'Dimension', them: 'Microsoft Agent Framework', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Forme', them: 'SDK et runtime intégrés à votre service .NET ou Python', eddi: 'Middleware déployable sur JVM (Quarkus) ; s\'exécute partout où Docker ou Kubernetes fonctionne' },
				{ dimension: 'Définition des agents', them: 'Agents et workflows de graphes définis en code ; les agents peuvent aussi être déclarés en YAML', eddi: 'Configuration JSON ; des règles de comportement déterministes décident de l\'action suivante, les appels LLM ont lieu dans des tâches déclarées' },
				{ dimension: 'Langages', them: '.NET et Python (Go dans un dépôt séparé)', eddi: 'Tout langage via REST, MCP et l\'API compatible OpenAI ; l\'agent lui-même ne nécessite aucun code' },
				{ dimension: 'Licence', them: 'MIT', eddi: EDDI_LICENSE },
				{ dimension: 'Logique personnalisée à l\'exécution', them: 'Votre code et vos fonctions d\'outils s\'exécutent dans votre processus', eddi: 'Aucun eval() ni exécution de code à l\'exécution ; la logique est déclarée, ou se trouve derrière un outil MCP ou un appel HTTP' },
				{ dimension: 'Humain dans la boucle', them: 'Contrôle Humain dans la boucle au niveau du workflow', eddi: 'Points de validation à trois niveaux : tours (PAUSE_CONVERSATION), appels d\'outils (toolApprovals) et phases de groupe, avec politiques de délai' },
				{ dimension: 'Modèles multi-agents', them: 'Collaboration séquentielle, concurrente, de passation et de groupe en code', eddi: 'Discussions de groupe avec 7 styles (table ronde, revue par les pairs, avocat du diable, Delphi, débat, task force, négociation), décisions et désaccords consignés' },
				{ dimension: 'État et reprise', them: 'Points de contrôle et retour dans le temps dans le runtime de workflow', eddi: 'Mémoire de conversation persistée par la plateforme ; états explicites tels que AWAITING_HUMAN' },
				{ dimension: 'Observabilité et audit', them: 'Traçage OpenTelemetry et hooks de middleware ; la destination des données vous appartient', eddi: 'Métriques Prometheus et registre d\'audit signé HMAC, en ajout seul, à séquence vérifiée, avec un point de terminaison de vérification' },
				{ dimension: 'Secrets et identité', them: 'Les mécanismes de votre plateforme, par exemple les services Azure', eddi: 'Secrets Vault intégré en AES-256-GCM ; Keycloak/OIDC optionnel avec les rôles eddi-admin et eddi-approver' },
				{ dimension: 'Adéquation à l\'écosystème', them: 'Intégration poussée avec Microsoft et Azure, y compris les agents hébergés sur Foundry', eddi: `Neutre vis-à-vis des éditeurs : ${LLM_PROVIDERS} fournisseurs LLM, modèles locaux via Ollama ou Jlama, ${MCP_TOOLS} outils MCP` },
			],
			betterThemTitle: 'Quand Microsoft Agent Framework est le meilleur choix',
			betterThem: [
				'Votre équipe écrit du .NET et les agents appartiennent à un service C# existant, avec son propre déploiement et ses propres tests.',
				'Vous développez sur Azure et voulez une intégration de premier ordre avec Foundry et les services Microsoft environnants.',
				'Vous avez des plugins Semantic Kernel ou du code AutoGen, et le chemin de migration pris en charge coûte moins cher qu\'un changement de plateforme.',
				'Le workflow exige un flux de contrôle que la configuration ne peut pas exprimer, comme des topologies de graphe sur mesure, des branches de points de contrôle ou le débogage par retour dans le temps.',
				'Vous voulez un SDK pour développeurs et préférez décider vous-même comment l\'héberger, le sécuriser et l\'observer.',
			],
			betterEddiTitle: 'Quand EDDI est le meilleur choix',
			betterEddi: [
				'Le comportement des agents doit être une configuration que les relecteurs peuvent lire et promouvoir entre environnements, sans reconstruction.',
				'Une revue de sécurité demandera quel code s\'exécute au moment de l\'inférence, et vous voulez que la réponse soit : aucun dans la plateforme.',
				'Des approbations doivent exister au niveau du tour, de l\'appel d\'outil et de la phase de groupe, avec une trace signée de qui a décidé quoi.',
				'Vous avez besoin d\'une interface Manager, d\'un coffre-fort de secrets, d\'une API et d\'un registre d\'audit prêts à l\'emploi plutôt que de les assembler autour d\'un SDK.',
				'Vous voulez rester neutre vis-à-vis du cloud : Kubernetes, OpenShift, sur site ou isolé du réseau (air-gapped) avec des modèles locaux.',
			],
			migrationTitle: 'Migrer depuis AutoGen, Semantic Kernel ou Agent Framework',
			migrationIntro:
				'Attendez-vous à une traduction d\'intention plutôt que de code. Les rôles et les outils se transposent ; la logique de graphe devient des règles de comportement, et tout ce qui exige du vrai code passe derrière un outil MCP ou un point de terminaison OpenAPI.',
			migrationSteps: [
				{ from: 'Agent avec instructions', to: 'Agent EDDI avec une tâche LLM et un message système' },
				{ from: 'Plugin ou fonction Semantic Kernel', to: 'Outil MCP, ou httpCall ou API importée depuis OpenAPI' },
				{ from: 'Graphe de workflow ou équipe AutoGen', to: 'Règles de comportement pour le routage, ou un style de discussion de groupe pour le travail multi-agents' },
				{ from: 'Étape Humain dans la boucle', to: 'Règle PAUSE_CONVERSATION, globs toolApprovals, ou requiresApproval sur une phase de groupe' },
				{ from: 'Magasin de points de contrôle', to: 'Mémoire de conversation avec les portées step, conversation et longTerm' },
				{ from: 'Middleware et filtres', to: 'Règles de comportement et politiques d\'approbation des outils' },
				{ from: 'Traces OpenTelemetry', to: 'Métriques Prometheus et registre d\'audit' },
			],
			faq: [
				{
					question: 'Microsoft Agent Framework remplace-t-il AutoGen et Semantic Kernel ?',
					answer:
						'Microsoft le présente comme le successeur des deux et publie des guides de migration. En octobre 2026, Semantic Kernel reçoit des correctifs tandis que les nouvelles fonctionnalités arrivent dans Agent Framework, et AutoGen est en mode maintenance. Si vous démarrez un nouveau projet sur la pile Microsoft, c\'est Agent Framework qu\'il faut évaluer face à EDDI.',
				},
				{
					question: 'EDDI peut-il remplacer AutoGen pour les conversations multi-agents ?',
					answer:
						'Dans de nombreux cas, oui. Les discussions de groupe d\'EDDI couvrent les styles table ronde, revue par les pairs, avocat du diable, Delphi, débat, task force et négociation, avec des phases pouvant exiger une approbation humaine et une décision consignée avec les désaccords. Si vos agents ont besoin d\'une coordination libre au niveau du code, un SDK convient mieux.',
				},
				{
					question: 'Dois-je renoncer à Azure pour utiliser EDDI ?',
					answer:
						'Non. EDDI prend en charge Azure OpenAI comme fournisseur et s\'exécute sur Kubernetes, y compris AKS. Il ne propose pas l\'intégration poussée avec Azure et Foundry qu\'offre Agent Framework : pesez ce point si vous êtes engagé dans l\'écosystème Microsoft.',
				},
				{
					question: 'Les deux peuvent-ils fonctionner ensemble ?',
					answer:
						'Oui. EDDI expose un serveur MCP, une API REST et une API compatible OpenAI, et peut consommer des serveurs MCP et des agents A2A. Un service .NET peut appeler des agents EDDI comme outils, et EDDI peut appeler votre service via httpCall.',
				},
			],
		},

		// ─── CrewAI ───────────────────────────────────────────────────
		'eddi-vs-crewai': {
			title: 'EDDI vs. CrewAI',
			description:
				'Comparaison d\'EDDI avec CrewAI pour les systèmes multi-agents : équipes (crews) et flows par rôles en Python ou config-as-code sur une plateforme déployable, exécution de code, Humain dans la boucle, gouvernance, et cas où CrewAI est le meilleur outil.',
			summary: 'Équipes et flows par rôles en Python face à une configuration multi-agents gouvernée sur une plateforme.',
			verdict:
				'<strong>Choisissez CrewAI</strong> si vous êtes une équipe Python qui veut des agents jouant des rôles et collaborant sur une tâche, définis et ajustés en code. <strong>Choisissez EDDI</strong> lorsque le travail multi-agents doit s\'exécuter comme un service gouverné : règles déterministes autour du LLM, points d\'approbation et piste d\'audit signée, configurés plutôt que codés.',
			whatItIsTitle: 'Ce qu\'est CrewAI',
			whatItIs:
				'CrewAI est un framework Python autonome sous licence MIT, avec ses propres primitives pour les agents, les tâches, les crews, les flows et les outils. Les crews sont des équipes d\'agents à rôles qui collaborent de façon autonome sur une tâche. Les flows sont des workflows pilotés par événements qui offrent un contrôle précis des chemins d\'exécution, de l\'état et des embranchements. Le projet prend en charge la saisie humaine pendant l\'exécution, et la suite commerciale CrewAI AMP Suite ajoute un plan de contrôle pour le déploiement géré, l\'observabilité, la gouvernance et le support.',
			archetypeTitle: 'Équipes autonomes ou configuration gouvernée',
			archetype:
				'CrewAI mise sur l\'autonomie des agents : vous décrivez des rôles, des objectifs et des tâches, et l\'équipe détermine comment collaborer, avec les Flows quand il faut un contrôle plus serré. EDDI mise sur le contrôle : des règles de comportement déterministes décident de l\'action suivante, le LLM est appelé dans des tâches déclarées, et le travail multi-agents suit des styles de discussion de groupe nommés avec des phases explicites. Les deux permettent de construire un système multi-agents. Ils diffèrent par ce que vous décidez à l\'avance et ce que le modèle décide à l\'exécution.',
			tableTitle: 'Agents en code ou agents en configuration',
			tableHeaders: { dimension: 'Dimension', them: 'CrewAI', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Abstraction principale', them: 'Crews d\'agents à rôles avec tâches, plus Flows pilotés par événements', eddi: 'Configuration d\'agent : pipeline, règles de comportement, tâches LLM et outils sous forme de JSON versionné' },
				{ dimension: 'Langage et runtime', them: 'Bibliothèque Python intégrée à votre application', eddi: 'Plateforme JVM (Quarkus) avec threads virtuels ; les agents ne nécessitent aucun code' },
				{ dimension: 'Licence', them: 'MIT (framework open source) ; AMP Suite commerciale par-dessus', eddi: EDDI_LICENSE },
				{ dimension: 'Flux de contrôle', them: 'Les agents décident de la collaboration à l\'exécution ; les Flows ajoutent des embranchements explicites en code', eddi: 'Des règles de comportement déterministes choisissent l\'action suivante ; les styles de groupe définissent les phases' },
				{ dimension: 'Exécution de code', them: 'L\'outil d\'interpréteur de code a été retiré de crewai-tools et l\'exécution de code au niveau de l\'agent est dépréciée ; la documentation recommande un bac à sable dédié comme E2B ou Modal', eddi: 'Aucun eval() ni exécution de code à l\'exécution dans la plateforme ; la logique est déclarée, ou se trouve derrière un outil MCP ou un appel HTTP' },
				{ dimension: 'Humain dans la boucle', them: 'Saisie humaine prise en charge pendant l\'exécution', eddi: 'Points de validation sur les tours, les appels d\'outils et les phases de groupe, politiques de délai, approbations dans le Manager, REST, MCP ou Slack' },
				{ dimension: 'Modèles multi-agents', them: 'Processus de crew et Flows en code', eddi: 'Discussions de groupe avec 7 styles plus personnalisé, décisions consignées, décomptes et désaccords, entrées de transcription signées' },
				{ dimension: 'Gestion et gouvernance', them: 'Plan de contrôle avec traçage et gouvernance dans l\'AMP Suite commerciale', eddi: 'Interface Manager, coffre-fort de secrets, Keycloak/OIDC optionnel et registre d\'audit dans la version open source' },
				{ dimension: 'Piste d\'audit', them: 'Traçage et observabilité via le plan de contrôle ou vos propres outils', eddi: 'Registre signé HMAC, en ajout seul, à séquence vérifiée ; GET /auditstore/verify/{conversationId}' },
				{ dimension: 'Modèles', them: 'De nombreux fournisseurs depuis Python', eddi: `${LLM_PROVIDERS} fournisseurs LLM, plus des modèles locaux via Ollama ou Jlama` },
			],
			betterThemTitle: 'Quand CrewAI est le meilleur choix',
			betterThem: [
				'Votre équipe est Python d\'abord et veut les agents, les outils et la logique des crews dans le même dépôt que le reste du code.',
				'Vous voulez prototyper rapidement une collaboration autonome par rôles et l\'ajuster en modifiant le code.',
				'Vous avez besoin d\'outils Python personnalisés à la logique arbitraire que la configuration ne peut pas exprimer.',
				'Vous préférez une bibliothèque que vous intégrez à une plateforme que vous exploitez.',
				'Le plan de contrôle de l\'AMP Suite commerciale correspond à la façon dont votre organisation veut déployer et superviser les crews.',
			],
			betterEddiTitle: 'Quand EDDI est le meilleur choix',
			betterEddi: [
				'Le comportement multi-agents doit être assez prévisible pour être relu : phases nommées, décisions consignées et règles plutôt qu\'une autonomie libre.',
				'Un humain doit approuver certains appels d\'outils ou certaines phases de groupe, et la décision doit être consignée dans un registre signé.',
				'Vous voulez la gouvernance, une interface de gestion et l\'audit dans la version open source, pas dans une offre commerciale distincte.',
				'Une revue de sécurité demandera quel code s\'exécute au moment de l\'inférence, et vous voulez que la plateforme n\'en exécute aucun.',
				'Des non-ingénieurs doivent modifier le comportement des agents sans pull request.',
			],
			migrationTitle: 'Migrer un crew depuis CrewAI',
			migrationIntro:
				'Les rôles et les objectifs se traduisent en prompts et en phases de groupe. Ce qui change le plus, c\'est l\'autonomie : ce qu\'un crew décidait à l\'exécution devient une règle, une phase ou un point d\'approbation que vous écrivez explicitement.',
			migrationSteps: [
				{ from: 'Agent (rôle, objectif, historique)', to: 'Agent EDDI avec un message système dans une tâche LLM' },
				{ from: 'Tâche', to: 'Tâche de pipeline, ou phase d\'une discussion de groupe' },
				{ from: 'Processus de crew', to: 'Style de discussion de groupe, par exemple task force ou table ronde' },
				{ from: 'Flow avec routeurs', to: 'Règles de comportement avec des types de condition tels que inputmatcher et actionmatcher' },
				{ from: 'Outil Python personnalisé', to: 'Outil MCP, httpCall, ou API importée depuis OpenAPI' },
				{ from: 'Saisie humaine', to: 'Règle PAUSE_CONVERSATION, toolApprovals, ou requiresApproval sur une phase' },
				{ from: 'Mémoire et sources de connaissances', to: 'Portées de la mémoire de conversation et bases de connaissances RAG' },
			],
			faq: [
				{
					question: 'EDDI est-il une alternative à CrewAI pour les systèmes multi-agents ?',
					answer:
						'Oui, pour les équipes qui veulent la collaboration multi-agents comme un service gouverné. Les discussions de groupe d\'EDDI appliquent des styles nommés avec des phases explicites et consignent les décisions et les désaccords. CrewAI donne plus d\'autonomie aux agents et se définit en Python, ce qui convient aux équipes qui veulent rester dans le code.',
				},
				{
					question: 'EDDI propose-t-il des agents autonomes comme CrewAI ?',
					answer:
						'Les agents EDDI peuvent appeler des outils et collaborer dans des discussions de groupe, mais le flux de contrôle est fixé par des règles de comportement et des phases que vous configurez, et non laissé à l\'improvisation des agents. C\'est un échange délibéré d\'autonomie contre de la prévisibilité.',
				},
				{
					question: 'Pourquoi l\'exécution de code importe-t-elle ici ?',
					answer:
						'Les agents qui exécutent du code généré ont besoin d\'isolation. CrewAI s\'est éloigné de son interpréteur de code intégré et recommande un service de bac à sable dédié. EDDI contourne la question dans la plateforme en n\'évaluant pas de code à l\'exécution : tout ce qui exige une vraie logique se place derrière un outil que vous déclarez et pouvez approuver.',
				},
				{
					question: 'Peut-on utiliser les deux ?',
					answer:
						'Oui. Un service CrewAI peut appeler EDDI via son API REST, son serveur MCP ou son API compatible OpenAI, et EDDI peut appeler un point de terminaison CrewAI via httpCall. Utiliser CrewAI pour les expériences au niveau du code et EDDI pour les agents de production gouvernés est une répartition raisonnable.',
				},
			],
		},

		// ─── Dify ─────────────────────────────────────────────────────
		'eddi-vs-dify': {
			title: 'EDDI vs. Dify',
			description:
				'Comparaison d\'EDDI avec Dify pour créer et exploiter des agents LLM : constructeur de workflows visuel et nœud de code face à config-as-code, conditions de licence et de multi-location, saisie humaine, audit, et cas où Dify est le bon outil.',
			summary: 'Constructeur de workflows visuel et plateforme d\'applications face à du config-as-code avec gouvernance intégrée.',
			verdict:
				'<strong>Choisissez Dify</strong> si vous voulez un constructeur visuel soigné, une place de marché de plugins et un chemin rapide vers des applications LLM utilisables cette semaine par votre équipe ou vos clients. <strong>Choisissez EDDI</strong> lorsque les agents doivent fonctionner sous une licence Apache 2.0 sans ambiguïté, sans nœuds de code, avec des points d\'approbation à plusieurs niveaux et un registre d\'audit conçu pour servir de preuve.',
			whatItIsTitle: 'Ce qu\'est Dify',
			whatItIs:
				'Dify est une plateforme open source pour créer des applications LLM. Elle propose un canevas de workflows visuel, un pipeline RAG de l\'ingestion à la récupération, des agents avec des outils issus de sa place de marché, de serveurs MCP ou d\'API personnalisées, un IDE de prompts, des API de type backend-as-a-service et des intégrations avec des outils d\'observabilité comme Langfuse, Opik et Arize Phoenix. Vous pouvez utiliser Dify Cloud, auto-héberger la Community Edition avec Docker Compose, ou vous renseigner sur Dify Enterprise, qui ajoute le SSO, le RBAC et des SLA de support. Son nœud Code exécute du Python ou du JavaScript dans un bac à sable, et son nœud Human Input met un workflow en pause pour qu\'une personne réponde.',
			archetypeTitle: 'Constructeur d\'applications ou plateforme d\'agents gouvernée',
			archetype:
				'Dify et EDDI se recoupent sur le RAG, les outils et les agents, mais ils optimisent pour des personnes différentes. Dify optimise pour les concepteurs qui veulent assembler des applications visuellement et les livrer vite, avec un nœud de code comme échappatoire. EDDI optimise pour les opérateurs qui ont besoin que le comportement des agents soit une configuration déclarative, relisible, entourée de gouvernance. Beaucoup d\'équipes commencent raisonnablement dans Dify, et certaines migrent quand arrivent des exigences de multi-location, de licence ou d\'audit.',
			tableTitle: 'Confort du constructeur ou surface d\'exploitation',
			tableHeaders: { dimension: 'Dimension', them: 'Dify', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Abstraction principale', them: 'Canevas visuel de workflows et de chatflows, avec un IDE de prompts', eddi: 'Config-as-code : ressources JSON rédigées dans le Manager ou l\'API, versionnées comme du code source' },
				{ dimension: 'Licence', them: 'Dify Open Source License : Apache 2.0 plus des conditions. L\'exploitation multi-locataire du code source nécessite une autorisation écrite, et le logo et le copyright du frontend doivent être conservés', eddi: EDDI_LICENSE },
				{ dimension: 'Logique personnalisée', them: 'Le nœud Code exécute du Python ou du JavaScript dans un bac à sable qui bloque le système de fichiers, le réseau sortant et les commandes système, avec un ensemble de paquets figé', eddi: 'Aucune évaluation de code à l\'exécution ; la logique est déclarée, ou se trouve derrière un outil MCP ou un appel HTTP' },
				{ dimension: 'Humain dans la boucle', them: 'Le nœud Human Input met un workflow en pause pour un formulaire auquel on répond dans l\'application web ou par e-mail ; attente par défaut de 3 jours, puis branche de délai dépassé', eddi: 'Points de validation sur les tours, les appels d\'outils et les phases de groupe ; les politiques de délai incluent WAIT_INDEFINITELY, AUTO_APPROVE, AUTO_REJECT et ABORT ; approbations dans le Manager et Slack' },
				{ dimension: 'Outils et intégrations', them: 'Place de marché, serveurs MCP et API personnalisées', eddi: `${MCP_TOOLS} outils MCP, un client MCP, import OpenAPI, httpCall, A2A` },
				{ dimension: 'RAG', them: 'Pipeline de connaissances intégré avec extraction de documents', eddi: `${EMBEDDING_PROVIDERS} fournisseurs d\'embeddings, ${VECTOR_STORES} magasins vectoriels, plus RAG httpCall sans infrastructure` },
				{ dimension: 'Multi-agents', them: 'Agents et nœuds de workflow composés sur le canevas', eddi: 'Discussions de groupe avec 7 styles, décisions et désaccords consignés, approbation humaine optionnelle par phase' },
				{ dimension: 'Identité et accès', them: 'Espaces de travail ; SSO et RBAC via Dify Enterprise', eddi: 'Keycloak/OIDC optionnel avec les rôles eddi-admin et eddi-approver dans la version open source' },
				{ dimension: 'Observabilité et audit', them: 'Journaux et supervision, intégrations avec Langfuse, Opik et Arize Phoenix', eddi: 'Métriques Prometheus et registre d\'audit signé HMAC, en ajout seul, à séquence vérifiée' },
				{ dimension: 'Déploiement', them: 'Dify Cloud, Docker Compose, Enterprise sur demande', eddi: 'Docker, Helm, Kustomize, OpenShift (image certifiée Red Hat, Operator via OperatorHub)' },
			],
			betterThemTitle: 'Quand Dify est le meilleur choix',
			betterThem: [
				'Vous voulez un canevas visuel que des non-ingénieurs peuvent lire et étendre, avec un retour rapide pendant la construction.',
				'Une place de marché de plugins et des modèles de workflows prêts à l\'emploi vous font gagner un vrai temps d\'intégration.',
				'Vous voulez une option hébergée (Dify Cloud) et ne souhaitez rien exploiter vous-même.',
				'Un nœud Code est une fonctionnalité que vous voulez : de petites transformations de données en Python ou JavaScript dans le workflow.',
				'Vous exploitez un déploiement interne unique pour votre propre équipe : la condition de licence multi-locataire ne vous concerne donc pas.',
			],
			betterEddiTitle: 'Quand EDDI est le meilleur choix',
			betterEddi: [
				'Votre service juridique exige une licence Apache 2.0 simple, y compris pour servir de nombreux locataires ou clients depuis un seul déploiement.',
				'La revue de sécurité interdit toute exécution de code dans la plateforme d\'automatisation, avec ou sans bac à sable.',
				'Certains appels d\'outils ou phases de groupe exigent une décision humaine, consignée dans un registre signé.',
				'Le comportement des agents doit être versionné, comparé et promu entre environnements sous forme de configuration.',
				'Vous avez besoin d\'un déploiement Kubernetes, OpenShift ou isolé du réseau (air-gapped) avec des modèles locaux.',
			],
			migrationTitle: 'Migrer une application depuis Dify',
			migrationIntro:
				'Les applications Dify sont des graphes visuels et les agents EDDI sont de la configuration : il s\'agit donc d\'une traduction et non d\'un import. Ce qui demande le plus de réflexion, ce sont les nœuds Code, qui deviennent de la configuration ou un outil déclaré.',
			migrationSteps: [
				{ from: 'Chatflow ou workflow', to: 'Agent EDDI : pipeline plus règles de comportement' },
				{ from: 'Nœud LLM et prompt', to: 'Tâche LLM avec un message système et des extraits de prompts versionnés' },
				{ from: 'Base de connaissances', to: 'Base de connaissances RAG EDDI avec un fournisseur d\'embeddings et un magasin vectoriel' },
				{ from: 'Outil, plugin ou serveur MCP', to: 'Connexion client MCP, httpCall, ou API importée depuis OpenAPI' },
				{ from: 'Code node', to: 'Règles de comportement et logique de prompt, ou un outil MCP si du vrai code est nécessaire' },
				{ from: 'Human Input node', to: 'Règle PAUSE_CONVERSATION ou toolApprovals, avec une politique de délai' },
				{ from: 'Clés API des fournisseurs', to: 'Entrées du Secrets Vault, référencées par ${vault:key}' },
			],
			faq: [
				{
					question: 'Dify est-il open source ?',
					answer:
						'Dify publie son code source sous la Dify Open Source License, qui est l\'Apache 2.0 assortie de conditions supplémentaires : vous ne pouvez pas utiliser le code source pour exploiter un environnement multi-locataire sans autorisation écrite, et vous ne pouvez pas retirer le logo ni les informations de copyright du frontend. Ce n\'est pas l\'Apache 2.0 simple qu\'utilise EDDI : lisez-la avec votre service juridique si l\'une de ces conditions peut s\'appliquer.',
				},
				{
					question: 'EDDI dispose-t-il d\'un constructeur visuel comme Dify ?',
					answer:
						'EDDI Manager est une interface React de production pour créer, déployer et superviser des agents, disponible en 11 langues. C\'est une interface de gestion plutôt qu\'un canevas de nœuds : vous configurez des agents, des prompts, des outils et des pipelines, et chaque modification est une ressource versionnée plutôt qu\'un diagramme.',
				},
				{
					question: 'Pourquoi EDDI évite-t-il un nœud de code ?',
					answer:
						'Un nœud de code en bac à sable est une fonctionnalité raisonnable, et Dify restreint ce qu\'il peut atteindre. Mais toute exécution de code dans la plateforme est une surface d\'attaque qu\'une revue de sécurité doit examiner. EDDI garde le comportement des agents déclaratif : ce qu\'un outil peut faire est ce que vous déclarez et approuvez.',
				},
				{
					question: 'Peut-on utiliser Dify et EDDI ensemble ?',
					answer:
						'Oui. Dify peut utiliser des serveurs MCP et des API personnalisées, et EDDI expose un serveur MCP et une API REST : un workflow Dify peut donc appeler un agent EDDI comme étape gouvernée. EDDI peut appeler l\'API Dify via httpCall.',
				},
			],
		},

		// ─── n8n ──────────────────────────────────────────────────────
		'eddi-vs-n8n': {
			title: 'EDDI vs. n8n',
			description:
				'Comparaison d\'EDDI avec n8n pour l\'orchestration d\'agents IA : modèle d\'exécution et de concurrence, exécution de code et posture de sécurité, licence, gouvernance, et cas où n8n reste le meilleur outil.',
			summary: 'Plateforme d\'automatisation de workflows face à un middleware d\'orchestration IA.',
			verdict:
				'<strong>Choisissez n8n</strong> lorsque la tâche consiste à relier des systèmes SaaS et à automatiser des processus métier, l\'IA n\'étant qu\'une étape d\'un workflow plus large. <strong>Choisissez EDDI</strong> lorsque l\'agent IA <em>est</em> le produit et doit passer une revue de sécurité d\'entreprise : données réglementées, obligations d\'audit, isolation par locataire et points d\'approbation sur ce que l\'agent a le droit de faire.',
			whatItIsTitle: 'Ce qu\'est n8n',
			whatItIs:
				'n8n est une plateforme d\'automatisation de workflows construite sur Node.js, avec un canevas visuel et des centaines d\'intégrations prêtes à l\'emploi. Elle peut être auto-hébergée, dispose d\'une communauté nombreuse et réellement active, et ses nœuds basés sur LangChain permettent d\'insérer des appels LLM dans n\'importe quel workflow. C\'est l\'un des moyens les plus rapides de relier des systèmes entre eux.',
			archetypeTitle: 'Catégorie différente, cas d\'usage qui se recoupent',
			archetype:
				'Ces outils ne sont pas du même archétype. n8n est une <strong>plateforme d\'automatisation de workflows</strong> où l\'IA est un type de nœud parmi d\'autres. EDDI est un <strong>middleware d\'orchestration IA</strong> où l\'agent, sa mémoire, ses outils et sa gouvernance sont le produit. Le recoupement est réel, des équipes construisent bien des agents dans n8n, mais les deux font des compromis opposés dès qu\'un agent traite des données réglementées.',
			tableTitle: 'Architecture et gouvernance',
			tableHeaders: { dimension: 'Dimension', them: 'n8n', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Runtime', them: 'Boucle d\'événements Node.js monothread', eddi: 'JVM avec threads virtuels (Project Loom), vrai parallélisme pour les appels LLM limités par les E/S' },
				{ dimension: 'Logique personnalisée', them: 'Les nœuds Code exécutent du JavaScript ou du Python à l\'exécution', eddi: 'Zéro évaluation de code à l\'exécution, le comportement des agents est uniquement du JSON déclaratif' },
				{ dimension: 'Licence', them: 'Sustainable Use License (fair-code), non approuvée par l\'OSI ; conditions séparées pour certains usages commerciaux', eddi: EDDI_LICENSE },
				{ dimension: 'Étendue des intégrations', them: 'Des centaines de connecteurs SaaS prêts à l\'emploi, son principal atout', eddi: `${MCP_TOOLS} outils MCP plus tout point de terminaison OpenAPI ou REST via httpCall` },
				{ dimension: 'Authentification', them: 'Gestion des utilisateurs intégrée ; SSO dans les offres payantes', eddi: 'Keycloak/OIDC optionnel avec les rôles eddi-admin et eddi-approver dans la version open source' },
				{ dimension: 'Piste d\'audit', them: 'Historique d\'exécution et journaux applicatifs', eddi: 'Registre d\'audit signé HMAC, en ajout seul, à séquence vérifiée' },
				{ dimension: 'Approbation humaine', them: 'Nœuds Wait et déclencheurs manuels dans un workflow', eddi: 'Pause au niveau du tour, validation par appel d\'outil, politiques de délai, approbations Slack, le tout journalisé' },
				{ dimension: 'Posture de conformité', them: 'Mise en œuvre par déploiement', eddi: `Infrastructure RGPD, HIPAA et AI Act de l\'UE intégrée, ${FRAMEWORKS} référentiels couverts` },
			],
			betterThemTitle: 'Quand n8n est le meilleur choix',
			betterThem: [
				'La charge de travail est de l\'automatisation métier générale plutôt que de l\'IA : synchroniser des CRM, déplacer des fichiers, réagir à des webhooks.',
				'Vous avez besoin de l\'étendue des connecteurs SaaS plus que de la profondeur de gouvernance des agents. n8n l\'emporte nettement sur ce point.',
				'Une équipe non technique possède les workflows et a besoin d\'un canevas visuel pour les raisonner.',
				'Vous voulez quelque chose qui tourne cet après-midi et les données concernées ne sont pas réglementées.',
			],
			betterEddiTitle: 'Quand EDDI est le meilleur choix',
			betterEddi: [
				'L\'agent touche à des données réglementées et une revue de sécurité demandera quel code s\'exécute au moment de l\'inférence. EDDI répond : aucun.',
				'Vous avez besoin d\'isolation par locataire, de quotas et d\'imputation des coûts entre de nombreux clients sur un même déploiement.',
				'Un humain doit approuver chaque appel d\'outil avant son exécution, avec l\'approbation consignée dans un registre signé.',
				'Le comportement des agents doit être versionné, comparé et promu entre environnements sous forme de configuration.',
				`La licence doit être sans ambiguïté pour la redistribution ou le déploiement isolé du réseau (air-gapped) : ${EDDI_LICENSE}.`,
			],
			migrationTitle: 'Migrer un workflow depuis n8n',
			migrationIntro:
				'La plupart des workflows n8n en forme d\'agent se transposent proprement. Les parties qui ne le font pas sont généralement les nœuds Code, ce qui est précisément le but : ce qu\'ils font doit devenir soit de la configuration, soit un outil déclaré.',
			migrationSteps: [
				{ from: 'Workflow', to: 'Package EDDI : un lot versionné de pipeline, de prompts et de liaisons d\'outils' },
				{ from: 'HTTP Request node', to: 'Définition d\'outil httpCall, avec protection SSRF et garde-fous contre le path traversal appliqués' },
				{ from: 'Code node', to: 'Règles de comportement et extraits de prompts, ou un outil MCP si une vraie logique est nécessaire' },
				{ from: 'Magasin d\'identifiants', to: 'EDDI Secrets Vault (AES-256-GCM), référencé par clé de coffre-fort' },
				{ from: 'AI Agent node', to: 'Agent EDDI avec mémoire persistante, routage par intention et cascade de modèles' },
				{ from: 'Wait ou déclencheur manuel', to: 'Point d\'approbation Humain dans la boucle avec une politique de délai' },
			],
			migrationGuideLabel: 'Guide complet : migrer un workflow IA de n8n vers EDDI',
			faq: [
				{
					question: 'EDDI est-il un remplaçant direct de n8n ?',
					answer:
						'Non, et il ne cherche pas à l\'être. n8n couvre l\'automatisation générale de workflows à travers des centaines d\'outils SaaS. EDDI couvre l\'orchestration d\'agents IA avec une gouvernance d\'entreprise. Les équipes utilisent couramment les deux : n8n pour la plomberie des processus métier, EDDI pour les agents qui exigent des pistes d\'audit et des points d\'approbation.',
				},
				{
					question: 'EDDI peut-il appeler n8n, ou l\'inverse ?',
					answer:
						'Les deux. EDDI expose un serveur MCP et une API REST : un workflow n8n peut donc invoquer un agent EDDI comme étape. EDDI peut appeler un webhook n8n via son outil httpCall. Utiliser chacun pour ce qu\'il fait de mieux est une architecture raisonnable.',
				},
				{
					question: 'Pourquoi l\'exécution de code à l\'exécution est-elle si importante ?',
					answer:
						'Un nœud Code est du code arbitraire qui s\'exécute dans votre plateforme d\'automatisation. C\'est pratique, et c\'est aussi toute une classe de vulnérabilités : évasions de bac à sable, injections via des entrées non fiables et élévations de privilèges commencent toutes là. EDDI interdit catégoriquement l\'évaluation de code à l\'exécution : le comportement des agents est une configuration JSON qui peut être relue, comparée et approuvée avant sa mise en production.',
				},
				{
					question: 'n8n est-il open source ?',
					answer:
						'n8n est fair-code, distribué sous la Sustainable Use License. Le code source est disponible et l\'auto-hébergement est autorisé pour un usage interne, mais ce n\'est pas une licence open source approuvée par l\'OSI et certains usages commerciaux nécessitent des conditions séparées. EDDI est sous Apache 2.0. Si votre service juridique exige une réponse sans ambiguïté sur la redistribution, cette différence compte.',
				},
			],
		},

		// ─── Flowise ──────────────────────────────────────────────────
		'eddi-vs-flowise': {
			title: 'EDDI vs. Flowise',
			description:
				'Comparaison d\'EDDI avec Flowise pour créer et exploiter des agents LLM : rapidité de prototypage face à gouvernance de production, architecture RAG, multi-location, et cas où Flowise est le bon outil.',
			summary: 'Vélocité de prototypage face à surface d\'exploitation en production.',
			verdict:
				'<strong>Choisissez Flowise</strong> pour présenter cette semaine un chatbot RAG fonctionnel aux parties prenantes. <strong>Choisissez EDDI</strong> lorsque ce prototype doit devenir un système exploité par plusieurs équipes, validé par un responsable conformité et dont un client dépend.',
			whatItIsTitle: 'Ce qu\'est Flowise',
			whatItIs:
				'Flowise est un constructeur visuel d\'applications LLM sous licence Apache 2.0, construit sur Node.js et React et qui enveloppe LangChain et LlamaIndex. Vous assemblez des chatflows en glissant des nœuds : un chargeur, un découpeur, un modèle d\'embeddings, un magasin vectoriel, une chaîne. Pour passer de rien à un chatbot de recherche fonctionnel, très peu d\'outils sont plus rapides.',
			archetypeTitle: 'Vélocité de prototypage ou surface d\'exploitation',
			archetype:
				'Flowise et EDDI visent des moments différents d\'un projet. Flowise optimise la première semaine : assemblage visuel, retour immédiat, un modèle pour la plupart des schémas courants. EDDI optimise tout ce qui suit : qui peut modifier l\'agent, ce qu\'il a le droit de faire, ce qui se passe à son redémarrage, et comment prouver tout cela à un auditeur. Beaucoup d\'équipes devraient réellement commencer dans Flowise.',
			tableTitle: 'Du prototype à la production',
			tableHeaders: { dimension: 'Dimension', them: 'Flowise', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Abstraction principale', them: 'Canevas visuel de chatflows, graphe de nœuds sérialisé en JSON', eddi: 'Config-as-code : ressources JSON rédigées dans une interface ou une API, versionnées comme du code source' },
				{ dimension: 'Runtime', them: 'Boucle d\'événements Node.js', eddi: 'JVM avec threads virtuels, conçue pour de nombreuses conversations simultanées limitées par les E/S' },
				{ dimension: 'Licence', them: 'Apache 2.0, comme EDDI', eddi: EDDI_LICENSE },
				{ dimension: 'RAG', them: 'Large choix de chargeurs et de magasins vectoriels, configurés par flow', eddi: `${EMBEDDING_PROVIDERS} fournisseurs d\'embeddings, ${VECTOR_STORES} magasins vectoriels, plus RAG httpCall sans infrastructure` },
				{ dimension: 'Logique personnalisée', them: 'Les nœuds Custom Function et Tool exécutent du JavaScript à l\'exécution', eddi: 'Zéro évaluation de code à l\'exécution ; la logique est déclarée, pas exécutée' },
				{ dimension: 'Multi-location', them: 'Espaces de travail dans l\'édition entreprise', eddi: 'Quotas par locataire, imputation des coûts et isolation des données dans la version open source' },
				{ dimension: 'Mémoire', them: 'Tampons de conversation et intégrations de magasins externes', eddi: 'Mémoire utilisateur persistante, consolidation onirique, résumés continus, fenêtrage tenant compte des tokens' },
				{ dimension: 'Piste d\'audit', them: 'Traces d\'exécution, orientées débogage', eddi: 'Registre signé HMAC, en ajout seul, orienté preuve' },
				{ dimension: 'Déploiement', them: 'Docker, en général une instance unique', eddi: 'Docker, Helm, Kustomize et OpenShift (image certifiée Red Hat, Operator via OperatorHub)' },
			],
			betterThemTitle: 'Quand Flowise est le meilleur choix',
			betterThem: [
				'Vous vérifiez si une idée fonctionne tout court. Pour explorer, l\'assemblage visuel l\'emporte sur la rédaction de configuration.',
				'L\'équipe pense en diagrammes et veut voir le pipeline de recherche disposé dans l\'espace.',
				'C\'est un outil interne pour une seule équipe, sans exigence de multi-location, d\'audit ou d\'approbation.',
				'Vous voulez essayer cinq stratégies de recherche avant le déjeuner.',
			],
			betterEddiTitle: 'Quand EDDI est le meilleur choix',
			betterEddi: [
				'Le chatbot est devenu un produit et exige désormais des SLA, de la multi-location et un responsable des modifications.',
				'Les prompt engineers doivent itérer sans redéploiement, tandis que l\'exploitation garde la maîtrise de ce qui est livré.',
				'Les conversations doivent survivre aux redémarrages et pouvoir être reconstituées des mois plus tard pour un régulateur.',
				'Un humain doit approuver certains appels d\'outils avant que l\'agent n\'agisse.',
				`La cible de déploiement est Kubernetes ou une infrastructure isolée du réseau (air-gapped) et doit être reproductible de façon démontrable. ${TESTS} tests s\'exécutent à chaque fusion.`,
			],
			migrationTitle: 'Migrer un chatflow depuis Flowise',
			migrationIntro:
				'Les chatflows Flowise sont déjà du JSON et les concepts correspondent de près : c\'est donc généralement la plus mécanique des migrations.',
			migrationSteps: [
				{ from: 'Chatflow', to: 'Package EDDI, exportable en ZIP avec les secrets automatiquement purgés' },
				{ from: 'Chargeurs de documents et découpeurs', to: 'Configuration d\'ingestion de documents RAG d\'EDDI' },
				{ from: 'Nœud de magasin vectoriel', to: `L\'un des ${VECTOR_STORES} magasins vectoriels pris en charge, sélectionné par configuration` },
				{ from: 'Nœud d\'embeddings', to: `L\'un des ${EMBEDDING_PROVIDERS} fournisseurs d\'embeddings` },
				{ from: 'Nœud de modèle de chat', to: `Configuration LLM parmi ${LLM_PROVIDERS} fournisseurs, avec cascade de modèles disponible` },
				{ from: 'Custom Function node', to: 'Règles de comportement, extraits de prompts, ou un outil MCP déclaré' },
				{ from: 'Nœud de mémoire', to: 'Mémoire persistante EDDI avec politique de mémoire à indicateur de validation' },
			],
			migrationGuideLabel: 'Guide complet : migrer un chatflow de Flowise vers EDDI',
			faq: [
				{
					question: 'Faut-il prototyper dans Flowise puis passer à EDDI ?',
					answer:
						'C\'est un parcours défendable et courant. Flowise répond à la question de savoir si une stratégie de recherche fonctionne ; EDDI répond à celle de savoir si vous pouvez l\'exploiter en toute sécurité pendant trois ans. Planifiez la migration avant que le prototype n\'ait des utilisateurs en production, car la migration est plus facile que la discussion sur l\'indisponibilité.',
				},
				{
					question: 'Les deux sont sous Apache 2.0. Qu\'est-ce qui diffère réellement ?',
					answer:
						'La licence est la même ; la surface d\'exploitation ne l\'est pas. EDDI fournit OIDC/Keycloak optionnel, un registre d\'audit signé, des quotas par locataire et une validation d\'approbation Humain dans la boucle dans la version open source plutôt que derrière une offre entreprise.',
				},
				{
					question: 'EDDI dispose-t-il d\'un constructeur visuel ?',
					answer:
						'EDDI Manager est une interface React de production pour créer, déployer et superviser des agents, disponible en 11 langues. C\'est une interface de gestion plutôt qu\'un canevas de nœuds : vous configurez des agents, des prompts, des outils et des pipelines, et chaque modification est une ressource versionnée plutôt qu\'un diagramme.',
				},
			],
		},

		// ─── Rasa ─────────────────────────────────────────────────────
		'eddi-vs-rasa': {
			title: 'EDDI vs. Rasa',
			description:
				'Comparaison d\'EDDI avec Rasa pour l\'IA conversationnelle : NLU entraîné et dialogue déterministe face à l\'orchestration de LLM, config-as-code, collaboration multi-agents, et cas où Rasa convient mieux.',
			summary: 'NLU entraîné et dialogue déterministe face à l\'orchestration de LLM avec config-as-code.',
			verdict:
				'<strong>Choisissez Rasa</strong> si vous avez besoin d\'un dialogue strictement maîtrisé sur un ensemble d\'intentions fixe, disposez de données d\'entraînement étiquetées et d\'une équipe ML Python pour s\'en charger. <strong>Choisissez EDDI</strong> lorsque l\'assistant doit raisonner sur des connaissances qui changent plus vite qu\'un cycle de réentraînement, appeler des systèmes d\'entreprise et être gouverné par la configuration plutôt que réentraîné.',
			whatItIsTitle: 'Ce qu\'est Rasa',
			whatItIs:
				'Rasa est un framework d\'IA conversationnelle mature : classification des intentions et extraction d\'entités par un pipeline NLU entraîné, plus gestion du dialogue par des règles, des stories et des politiques. Il est natif Python, auto-hébergeable, et constitue depuis des années la réponse par défaut pour les assistants de service client scénarisés à fort volume. Rasa Pro ajoute des offres commerciales, dont un dialogue piloté par LLM.',
			archetypeTitle: 'Un problème commun, une autre génération de solution',
			archetype:
				'EDDI et Rasa viennent tous deux du monde de l\'IA conversationnelle, et EDDI est en développement continu comme plateforme conversationnelle depuis 2006. La différence tient à l\'endroit où se situe l\'intelligence. Rasa la place dans un modèle que vous entraînez sur vos propres données étiquetées, ce qui donne un contrôle précis et reproductible. EDDI la place dans des LLM orchestrés et gouvernés par une configuration déclarative, sacrifiant un peu de déterminisme au profit de la portée et de la rapidité de changement.',
			tableTitle: 'Dialogue, outillage et coût du changement',
			tableHeaders: { dimension: 'Dimension', them: 'Rasa', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Compréhension', them: 'NLU entraîné : classification des intentions et extraction d\'entités à partir de données étiquetées', eddi: 'Compréhension par LLM plus découverte et routage d\'agents par intention' },
				{ dimension: 'Modifier le comportement', them: 'Mettre à jour les données d\'entraînement, réentraîner, évaluer, redéployer', eddi: 'Modifier la configuration JSON ; ni réentraînement ni redéploiement' },
				{ dimension: 'Déterminisme', them: 'Élevé. Les règles et les politiques rendent les flux reproductibles et testables', eddi: 'Plus faible par nature, compensé par les règles de comportement et les points d\'approbation' },
				{ dimension: 'Langage', them: 'Python ; les actions personnalisées sont du code Python', eddi: 'Runtime JVM ; la logique des agents est de la configuration, les outils sont déclarés' },
				{ dimension: 'Écosystème d\'outils', them: 'Un serveur d\'actions personnalisé que vous construisez et hébergez', eddi: `${MCP_TOOLS} outils MCP, outils d\'agent intégrés, plus tout point de terminaison OpenAPI` },
				{ dimension: 'Multi-agents', them: 'Un assistant par déploiement est le schéma courant', eddi: 'Orchestration par coordinateur et 7 styles de discussion de groupe' },
				{ dimension: 'Licence', them: 'Édition communautaire plus offres Rasa Pro sous licence commerciale ; vérifiez les conditions actuelles', eddi: EDDI_LICENSE },
				{ dimension: 'Conformité', them: 'L\'auto-hébergement permet la résidence des données ; référentiels mis en œuvre par déploiement', eddi: `Registre d\'audit, API des droits des personnes concernées et ${FRAMEWORKS} référentiels couverts dans la plateforme` },
			],
			betterThemTitle: 'Quand Rasa est le meilleur choix',
			betterThem: [
				'Vous avez déjà des données conversationnelles étiquetées et une équipe ML capable de maintenir un pipeline NLU.',
				'Des contraintes réglementaires ou de marque exigent un assistant déterministe avec un chemin de décision auditable qui n\'implique pas de modèle de langage.',
				'Très fort volume sur un ensemble d\'intentions restreint, où le coût d\'un LLM à chaque tour dominerait.',
				'Vous avez besoin d\'un contrôle fin sur les seuils de confiance de classification et le comportement de repli.',
			],
			betterEddiTitle: 'Quand EDDI est le meilleur choix',
			betterEddi: [
				'L\'assistant doit répondre à partir de documents et de systèmes qui changent plus vite qu\'un cycle de réentraînement.',
				'Les utilisateurs métier doivent changer le comportement sans ingénieur ML, sans entraînement ni déploiement.',
				'Le problème exige que plusieurs agents spécialisés collaborent plutôt qu\'un arbre d\'intentions plat.',
				'Vous voulez la souplesse d\'un LLM, mais un responsable conformité exige des points d\'approbation et des journaux signés avant la mise en production.',
				`Vous voulez éviter l\'enfermement au niveau du modèle : ${LLM_PROVIDERS} fournisseurs, ou un modèle local via Ollama ou Jlama.`,
			],
			migrationTitle: 'Migrer un assistant depuis Rasa',
			migrationIntro:
				'La correspondance est conceptuelle plutôt que mécanique, car les deux placent l\'intelligence à des endroits différents. Attendez-vous à traduire la structure des intentions en routage et en prompts plutôt qu\'à convertir des fichiers.',
			migrationSteps: [
				{ from: 'Intentions et exemples d\'entraînement', to: 'Découverte d\'agents par intention ; les données étiquetées deviennent du matériel d\'évaluation plutôt que d\'entraînement' },
				{ from: 'Entités et slots', to: 'Extraction structurée plus mémoire utilisateur persistante' },
				{ from: 'Stories et règles', to: 'Règles de comportement et configuration du pipeline' },
				{ from: 'Serveur d\'actions personnalisé', to: 'Outils MCP ou définitions d\'outils httpCall' },
				{ from: 'Réponses et fichier de domaine', to: 'Extraits de prompts, réutilisables et versionnés' },
				{ from: 'Politique de repli', to: 'Escalade Humain dans la boucle avec une politique de délai' },
			],
			faq: [
				{
					question: 'EDDI n\'est-il qu\'une énième surcouche LLM qui remplace le NLU entraîné ?',
					answer:
						'EDDI est développé comme plateforme conversationnelle depuis 2006, bien avant la génération actuelle de LLM, et il a conservé ce qui comptait : le routage par intention, l\'état de conversation géré et l\'architecture en pipeline. Les LLM ont remplacé la couche de compréhension, pas l\'orchestration autour.',
				},
				{
					question: 'Nous avons besoin de réponses déterministes pour la conformité. Cela exclut-il EDDI ?',
					answer:
						'Pas nécessairement, mais le compromis doit être explicite. La sortie d\'un LLM n\'est pas déterministe. EDDI y répond par des règles de comportement qui contraignent les réponses, des points d\'approbation humaine sur les actions importantes et un registre d\'audit signé qui consigne ce qui a été décidé et pourquoi. Si votre exigence est qu\'aucun modèle de langage ne participe à la décision, Rasa est la meilleure réponse.',
				},
				{
					question: 'Peut-on faire tourner les deux pendant une transition ?',
					answer:
						'Oui. Un schéma courant achemine les intentions connues à fort volume vers l\'assistant Rasa existant pendant qu\'EDDI traite les requêtes ouvertes et l\'intégration aux systèmes, puis fait basculer le trafic à mesure que la confiance grandit. EDDI peut appeler un point de terminaison Rasa via httpCall.',
				},
			],
		},
	},
};

export default copy;
