/**
 * Catalogue des intégrations, textes français. Les clés et la structure suivent en.ts.
 * Les chaînes marquées HTML sont rendues avec set:html.
 */
import { MCP_TOOLS, VECTOR_STORES } from '../stats';
import type { IntegrationsCopy } from './en';

const copy: IntegrationsCopy = {
	ui: {
		title: 'Intégrations',
		metaTitle: 'Intégrations EDDI : Slack, MCP, OpenAPI, SAP, bases vectorielles et Kubernetes',
		description:
			'Comment EDDI se connecte à Slack, Open WebUI, Keycloak, MCP et A2A, à toute API REST via OpenAPI, à SAP par ses API, à six bases vectorielles, à Kubernetes, OpenShift et Ollama. Chaque page présente la configuration réelle.',
		heroTitle: 'EDDI',
		heroHighlight: 'Intégrations',
		heroDesc:
			'Canaux, identité, protocoles d\'agents, systèmes d\'entreprise, bases vectorielles et infrastructure. Chaque page montre ce que vous obtenez, comment cela fonctionne dans EDDI, la configuration réelle et la façon dont l\'intégration est gouvernée : validations, journal d\'audit et coffre de secrets.',
		filterLabel: 'Filtrer les intégrations par catégorie',
		filterAll: 'Toutes',
		searchLabel: 'Rechercher une intégration',
		searchPlaceholder: 'Rechercher, par exemple Slack, SAP ou pgvector',
		noResults: 'Aucune intégration ne correspond. Essayez un autre mot ou réinitialisez le filtre.',
		notCoveredNote:
			'EDDI ne fournit pas de canaux Microsoft Teams, Telegram, WhatsApp ou Discord, n\'envoie pas d\'e-mails lui-même et n\'a pas de webhooks entrants génériques. Tout système doté d\'une API reste accessible par l\'<a href="/integrations/openapi/">import OpenAPI</a>, des appels HTTP ou <a href="/integrations/mcp-client/">MCP</a>.',
		backToCatalog: 'Toutes les intégrations',
		whatYouGet: 'Ce que vous obtenez',
		howItWorks: 'Fonctionnement dans EDDI',
		configTitle: 'Configuration',
		configDesc: 'Tirée de la documentation d\'EDDI. Les espaces réservés comme your-agent-id sont à remplacer par vos propres valeurs.',
		governanceTitle: 'Gouvernance',
		goodToKnowTitle: 'Bon à savoir',
		linksTitle: 'Documentation et guides',
		docsLink: 'Doc',
		guidesLabel: 'Guide',
		relatedTitle: 'Intégrations associées',
		getStarted: 'Commencer',
		modelsLinkText: 'Parcourir le catalogue de modèles',
		solutionsTitle: 'Vous voulez qu\'on le construise et l\'exploite pour vous ?',
		solutionsDesc: 'EDDI Solutions construit et maintient des connecteurs, exploite EDDI en instance managée ou co-exploitée, et vous accompagne dans votre propre cloud ou sur site.',
		solutionsBtn: 'Contacter EDDI Solutions',
		sourcesDesc: 'La configuration et le comportement décrits sur cette page suivent la documentation d\'EDDI, vérifiée le {date}. Les noms de champs et les valeurs par défaut peuvent changer d\'une version à l\'autre : confirmez-les dans la documentation de votre version.',
		copy: 'Copier',
		copied: 'Copié',
		pageTitle: '{name} dans EDDI',
		pageDescription: '{name} : {summary}',
		ctaTitle: 'Vous ne voyez pas votre système ?',
		ctaDesc: 'Décrivez-le-nous ou partez de la voie <a href="/integrations/openapi/">OpenAPI</a>. S\'il a une API, un agent peut l\'appeler, avec validations et piste d\'audit.',
	},
	categories: {
		channels: 'Canaux',
		identity: 'Identité et sécurité',
		protocols: 'Protocoles d\'agents',
		enterprise: 'Systèmes d\'entreprise',
		data: 'Données et RAG',
		infrastructure: 'Infrastructure',
	},
	integrations: {
		slack: {
			summary: 'Des agents IA gouvernés dans Slack : mentions, messages directs, fils de discussion, discussions de groupe diffusées dans un fil et cartes de validation Block Kit avec les boutons Approve et Reject.',
			gets: [
				'Des agents qui répondent aux @mentions et aux messages directs, avec les relances conservées dans le fil',
				'Des mots-clés déclencheurs qui orientent un message vers un agent précis ou vers une discussion de groupe multi-agents',
				'Des discussions de groupe diffusées dans un fil au fil de l\'eau',
				'Des cartes de validation dans Slack pour les tours en pause, les appels d\'outils et les phases de groupe, avec une liste d\'approbateurs autorisés',
				'Plusieurs espaces de travail Slack sur une seule instance EDDI',
			],
			steps: [
				'Créer une application Slack et ajouter les scopes du jeton de bot indiqués dans la doc (<code>chat:write</code>, <code>app_mentions:read</code>, les scopes <code>history</code> et <code>im:*</code>).',
				'Stocker le jeton du bot et le signing secret dans le coffre de secrets d\'EDDI, puis les référencer avec <code>${vault:...}</code>.',
				'Créer une intégration de canal qui associe le canal Slack à un agent par défaut et, en option, à des groupes derrière des mots-clés déclencheurs comme <code>panel:</code>.',
				'Définir la Request URL sur <code>https://&lt;your-eddi-host&gt;/integrations/slack/events</code> et s\'abonner à <code>app_mention</code>, <code>message.im</code> et <code>message.channels</code>. À faire en dernier : Slack vérifie l\'URL immédiatement.',
				'Pour les validations, définir l\'Interactivity Request URL sur <code>/integrations/slack/interactive</code> et lister les approbateurs dans <code>hitlApproverUserIds</code>.',
			],
			captions: [
				'Les identifiants vont dans le coffre, pas dans la configuration de l\'agent ou du canal.',
				'Une intégration de canal avec un agent par défaut, un groupe derrière des mots-clés déclencheurs et les réglages de validation dans platformConfig.',
			],
			governance: [
				'Les cartes de validation portent les boutons Approve et Reject. Seuls les utilisateurs Slack listés dans <code>hitlApproverUserIds</code> peuvent décider. Sans cette liste, aucun bouton n\'est affiché et les décisions interactives sont rejetées (fail-closed).',
				'Une carte d\'appel d\'outil affiche le nom de l\'outil et ses arguments masqués et tronqués, de sorte que l\'approbateur voit ce qu\'il valide. Dans la version 1, les boutons approuvent ou rejettent le lot entier.',
				'Chaque décision est attribuée à <code>slack:&lt;userId&gt;</code> et consignée dans le journal d\'audit.',
				'Les événements entrants sont vérifiés avec le signing secret (HMAC-SHA256) et une protection contre le rejeu, et les secrets eux-mêmes restent dans le coffre.',
			],
			goodToKnow: [
				'Slack est la seule plateforme de messagerie tierce pour laquelle EDDI fournit un canal. Voir la note de la page du catalogue pour ce qui n\'est pas inclus.',
				'Un mode d\'observation optionnel permet à une cible de voir le trafic ordinaire d\'un canal, derrière un déclencheur, un temps de pause et des plafonds quotidiens de réponses et de coûts. Ces plafonds s\'appliquent par nœud EDDI.',
			],
		},
		'open-webui': {
			summary: 'EDDI expose une API /v1 compatible OpenAI qui présente les agents déployés comme des modèles, afin que Open WebUI, les SDK OpenAI, LangChain et LiteLLM puissent leur parler.',
			gets: [
				'Les agents EDDI déployés dans la liste déroulante des modèles d\'Open WebUI',
				'Chat Completions avec streaming et suivi de l\'utilisation des tokens',
				'Une conversation EDDI par discussion, de sorte que la mémoire et les Behavior Rules persistent d\'un tour à l\'autre',
				'Une variante sans état (un identifiant de modèle avec <code>:stateless</code>) pour les appels uniques comme la génération de titres',
			],
			steps: [
				'Activer l\'adaptateur avec <code>EDDI_OPENAI_COMPAT_ENABLED=true</code> et définir une clé d\'API. Il est désactivé par défaut.',
				'Déployer un agent dans EDDI. Il apparaît dans <code>GET /v1/models</code>.',
				'Pointer Open WebUI (ou un SDK) vers <code>http://&lt;eddi&gt;:7070/v1</code> avec la même clé d\'API.',
				'Activer <code>ENABLE_FORWARD_USER_INFO_HEADERS</code> dans Open WebUI. Sans cela, toutes les fenêtres de discussion partagent une seule conversation EDDI.',
				'Choisir l\'agent dans la liste des modèles et discuter.',
			],
			captions: [
				'Un extrait de compose proche de la production, tiré de la doc d\'EDDI. Changez la clé d\'API d\'exemple.',
				'Vérifier le point d\'accès depuis le shell. Définir EDDI_API_KEY à la même valeur que dans le fichier compose.',
			],
			governance: [
				'L\'API a sa propre authentification par clé d\'API et reste désactivée tant que vous ne l\'activez pas. EDDI refuse de démarrer dans l\'unique combinaison qui laisserait la création de conversations ouverte à quiconque atteint le port.',
				'L\'agent conserve ses propres garde-fous de validation et sa piste d\'audit. Une requête passant par /v1 est une conversation EDDI ordinaire.',
				'Une clé d\'API partagée associée à des en-têtes utilisateur délègue l\'identité à Open WebUI en tant que proxy de confiance. Traitez la clé comme tout secret partagé et faites-la tourner.',
			],
			goodToKnow: [
				'Seuls les agents individuels apparaissent comme modèles, pas les groupes multi-agents.',
				'Les réponses rapides et les boutons sont rendus sous forme de texte Markdown, pas comme des contrôles interactifs.',
				'Les appels d\'outils ne sont pas renvoyés au client. EDDI exécute ses outils dans son propre pipeline, et l\'activité des outils reste visible dans le journal d\'audit.',
			],
		},
		'web-chat': {
			summary: 'Une interface de chat React personnalisable, servie par EDDI lui-même, avec réponses en streaming, Markdown, réponses rapides et annulation, que vous pouvez ouvrir directement ou intégrer dans une page.',
			gets: [
				'Une page de chat pour chaque agent déployé à /chat/{environment}/{agentId}',
				'Streaming token par token, Markdown riche, coloration du code et formules LaTeX',
				'Thèmes sombre et clair, boutons de réponse rapide, annuler et rétablir',
				'Des paramètres d\'URL pour masquer des contrôles et définir le titre, pour un widget intégré épuré',
				'Un mode démo qui ne nécessite aucun backend',
			],
			steps: [
				'Lancer EDDI. L\'interface de chat est fournie dans l\'image d\'EDDI et incluse dans l\'installateur.',
				'Ouvrir <code>/chat/&lt;environment&gt;/&lt;agentId&gt;</code> sur votre hôte EDDI.',
				'L\'ajuster avec des paramètres d\'URL comme <code>theme</code>, <code>title</code>, <code>hideUndo</code> et <code>hideNewConversation</code>.',
				'Pour l\'intégrer, placer la même URL dans un iframe sur votre page.',
			],
			captions: [
				'Les modèles d\'URL servis par l\'interface de chat.',
				'Un widget intégré tiré du README de l\'interface de chat. Combinez les paramètres d\'affichage selon vos besoins.',
			],
			governance: [
				'Le chat utilise la même API de conversation que tout autre client : les Behavior Rules, les garde-fous de validation et le journal d\'audit s\'appliquent donc sans changement.',
				'Lorsque l\'authentification est activée, le widget a besoin d\'un jeton d\'accès pour l\'utilisateur connecté, et le backend le vérifie à chaque appel.',
				'Traitez tout texte produit par un agent comme une sortie non fiable. L\'interface de chat rend le Markdown fourni par l\'agent.',
			],
			goodToKnow: [
				'Par défaut, EDDI répond avec une politique qui interdit l\'intégration dans un cadre : un navigateur n\'affichera donc pas le chat dans un autre site tant que l\'exploitant n\'a pas autorisé cette origine. Consultez le README de l\'interface de chat pour les réglages d\'intégration de votre version.',
			],
		},
		'keycloak-oidc': {
			summary: 'Placer une authentification OpenID Connect devant EDDI avec Keycloak ou un autre fournisseur OIDC, avec des rôles pour les administrateurs, éditeurs, utilisateurs, lecteurs et approbateurs.',
			gets: [
				'Une connexion au Manager et à l\'API via votre fournisseur d\'identité',
				'Des rôles : <code>eddi-admin</code>, <code>eddi-editor</code>, <code>eddi-user</code>, <code>eddi-viewer</code> et <code>eddi-approver</code> pour les décisions de validation',
				'Un realm <code>eddi</code> prêt à l\'emploi que l\'installateur importe dans Keycloak',
				'Des appels effectués au nom de l\'utilisateur connecté, de sorte que la piste d\'audit désigne une personne réelle',
			],
			steps: [
				'Lancer l\'installateur avec <code>--with-auth</code>. Il démarre Keycloak et importe le realm <code>eddi</code> au premier démarrage.',
				'Définir un mot de passe pour l\'utilisateur <code>eddi</code> dans la console d\'administration de Keycloak. Le realm fourni n\'en a pas.',
				'Se connecter au Manager. Donner aux personnes les rôles dont elles ont besoin et ajouter les approbateurs à <code>eddi-approver</code>.',
				'Pour un fournisseur d\'identité existant, définir les variables <code>QUARKUS_OIDC_*</code> (tenant activé, URL du serveur d\'authentification, identifiant client, secret client).',
				'Dans un appel HTTP, utiliser <code>${caller:token}</code> pour appeler une API avec le jeton propre à l\'utilisateur connecté plutôt qu\'avec un identifiant partagé.',
			],
			captions: [
				'Option de l\'installateur qui ajoute Keycloak.',
				'Variables d\'environnement pour un fournisseur OIDC externe, tirées de la doc d\'EDDI.',
			],
			governance: [
				'En mode de lancement production, EDDI refuse de démarrer avec OIDC désactivé sauf renoncement explicite : une API de gestion ouverte est donc une décision, pas un accident.',
				'Les points d\'accès de validation exigent le rôle <code>eddi-approver</code>, ou bien le propriétaire ou un <code>eddi-admin</code>.',
				'Avec <code>${caller:token}</code>, la piste d\'audit enregistre l\'utilisateur réel. Un identifiant statique partagé ferait converger toutes les actions vers un seul principal.',
			],
			goodToKnow: [
				'L\'authentification est facultative et désactivée par défaut. Keycloak est ce que l\'installateur provisionne. Les autres fournisseurs OIDC utilisent les mêmes réglages, et certains détails (par exemple le point d\'accès de jeton annoncé pour A2A) supposent des chemins Keycloak tant que vous ne les définissez pas.',
				'L\'import du realm fourni est ponctuel. Les modifications ultérieures du JSON n\'atteignent pas un Keycloak en cours d\'exécution.',
			],
		},
		'secrets-vault': {
			summary: 'Un coffre de secrets intégré, à chiffrement par enveloppe. La configuration référence les secrets sous la forme ${vault:keyName}, et la valeur n\'atterrit jamais dans les configurations d\'agents, les exports ou les journaux.',
			gets: [
				'Des références <code>${vault:keyName}</code> dans la configuration des LLM, des appels HTTP, de MCP et du RAG',
				'Un chiffrement par enveloppe AES-256-GCM avec une clé de données par tenant',
				'Des autorisations par agent : quels agents peuvent utiliser quel secret',
				'Des secrets retirés des exports de configuration et masqués dans les journaux',
			],
			steps: [
				'Définir la clé maître du coffre (<code>EDDI_VAULT_MASTER_KEY</code>). L\'installateur en génère une pour vous. Sans clé, le coffre est désactivé.',
				'Stocker un secret avec <code>PUT /secretstore/secrets/{tenantId}/{keyName}</code> ou via le Manager.',
				'Le référencer dans la configuration avec <code>${vault:keyName}</code>.',
				'EDDI résout la référence à l\'exécution. Le texte en clair n\'est pas stocké dans la mémoire de conversation.',
				'Restreindre <code>allowedAgents</code> aux agents qui ont besoin du secret. La vérification s\'exécute au déploiement d\'un agent.',
			],
			captions: [
				'Stocker un secret. La réponse ne renvoie jamais la valeur.',
				'Référencer le secret par son nom depuis une tâche LLM.',
				'Modifier qui peut utiliser un secret sans toucher à sa valeur.',
			],
			governance: [
				'Les autorisations sont appliquées au déploiement par défaut : un agent qui référence un secret qu\'il n\'a pas le droit d\'utiliser n\'est pas déployé.',
				'Une référence au coffre qui arrive par les données de conversation, comme une saisie utilisateur ou une réponse du modèle, est refusée au lieu d\'être résolue.',
				'Le texte en clair est masqué dans l\'enregistrement de la requête, dans l\'aperçu de validation et dans la ligne de journal de la requête.',
				'Lorsque l\'authentification est activée, les points d\'accès du coffre sont protégés par le rôle <code>eddi-admin</code>.',
			],
			goodToKnow: [
				'EDDI n\'a pas de client natif pour HashiCorp Vault, AWS ou Azure. Sous Kubernetes, l\'External Secrets Operator peut synchroniser le Secret Kubernetes <code>eddi-secrets</code> (qui contient la clé maître du coffre) depuis HashiCorp Vault, AWS Secrets Manager ou Azure Key Vault. Les secrets individuels restent dans le coffre d\'EDDI.',
				'Si la clé maître est perdue, les secrets chiffrés sont irrécupérables. Sauvegardez-la.',
			],
		},
		'mcp-server': {
			summary: `Piloter EDDI depuis Claude Desktop, Cursor, VS Code et d'autres clients MCP. EDDI expose ${MCP_TOOLS} outils MCP via Streamable HTTP pour les conversations et l'administration.`,
			gets: [
				`${MCP_TOOLS} outils : lister les agents et leur parler, les créer et les déployer, gérer les groupes, les planifications et plus encore`,
				'Un seul point d\'accès, <code>/mcp</code>, en Streamable HTTP',
				'Compatible avec les clients qui parlent HTTP directement et, via un pont, avec les clients stdio uniquement',
				'Un accès par rôles lorsque l\'authentification est activée',
			],
			steps: [
				'Lancer EDDI. Le point d\'accès MCP est <code>http://localhost:7070/mcp</code>.',
				'Ajouter EDDI à votre client MCP. Les clients compatibles HTTP utilisent directement l\'URL.',
				'Pour les clients stdio uniquement comme Claude Desktop, utiliser le pont <code>mcp-remote</code> comme indiqué.',
				'Demander à l\'assistant de lister les agents, de démarrer une conversation ou de créer un agent. Le flux documenté est <code>list_agents</code>, <code>create_conversation</code>, <code>talk_to_agent</code>.',
				'Avec OIDC activé, fournir un jeton Bearer au client.',
			],
			captions: [
				'Pour les clients avec transport HTTP natif.',
				'Pour les clients stdio uniquement. Sous Windows, encapsuler la commande avec cmd /c si npx n\'est pas dans le PATH.',
			],
			governance: [
				'Les outils d\'écriture comme <code>setup_agent</code> et <code>create_api_agent</code> exigent le rôle <code>eddi-editor</code>.',
				'L\'outil MCP <code>create_api_agent</code> ne peut volontairement pas définir de garde-fou de validation. Provisionner un agent protégé passe par REST avec <code>eddi-admin</code>.',
				'Les phases de groupe en attente de validation peuvent être approuvées via MCP comme via le Manager, REST et Slack, et chaque décision est auditée.',
			],
			goodToKnow: [
				'Le démarrage en production refuse de s\'exécuter avec OIDC désactivé sauf renoncement explicite, et une instance ayant renoncé laisse <code>/mcp</code> ouvert à quiconque atteint le port.',
			],
		},
		'mcp-client': {
			summary: 'Donner aux agents EDDI les outils de serveurs MCP externes. Les outils d\'un serveur deviennent ceux de l\'agent, derrière les mêmes garde-fous de validation et la même piste d\'audit que tout autre outil.',
			gets: [
				'Les outils de tout serveur MCP qui parle Streamable HTTP',
				'Des listes d\'autorisation et de refus par nom pour garder la liste d\'outils courte',
				'Un listage et une lecture de ressources en option',
				'Un circuit breaker qui cesse d\'appeler un serveur défaillant',
			],
			steps: [
				'Créer une configuration <code>mcpcalls</code> avec l\'URL du serveur, le transport <code>http</code> et une clé d\'API sous forme de référence <code>${vault:...}</code>.',
				'La référencer comme étape de workflow (<code>eddi://ai.labs.mcpcalls</code>).',
				'La tâche LLM de l\'agent récupère automatiquement les outils du serveur (<code>enableMcpCallTools</code> vaut true par défaut).',
				'Ajouter les outils à <code>toolApprovals</code> pour que les appels à conséquences attendent un humain.',
				'Pour un serveur stdio uniquement, l\'exécuter dans son propre conteneur derrière un pont HTTP et pointer EDDI vers ce pont.',
			],
			captions: [
				'Une configuration mcpcalls. Le jeton est une référence au coffre.',
				'Protéger chaque outil MCP sauf ceux en lecture seule.',
			],
			governance: [
				'Les appels d\'outils MCP relèvent du même garde-fou de validation human-in-the-loop que toute autre source d\'outils.',
				'Les descriptions d\'outils sont expurgées du texte de forme directive et limitées en longueur. Les résultats d\'outils sont enveloppés avec leur provenance et, par défaut, le contenu de forme directive est masqué.',
				'Une liste blanche d\'outils sert à gérer le contexte, pas à la sécurité. La frontière, c\'est l\'identifiant que vous donnez à la connexion plus le garde-fou de validation.',
				'Chaque décision protégée est écrite dans le journal d\'audit.',
			],
			goodToKnow: [
				'EDDI implémente un seul transport MCP, Streamable HTTP. Il ne lance pas lui-même de serveurs stdio, car une commande modifiable par configuration reviendrait à une exécution de code arbitraire sous l\'utilisateur du processus EDDI. Utilisez un conteneur sidecar faisant office de pont.',
				'Un circuit breaker s\'ouvre après 3 échecs en 60 secondes : un outil manquant signifie donc généralement que le serveur est défaillant.',
			],
		},
		a2a: {
			summary: 'Exposer les agents EDDI à d\'autres agents via des Agent Cards et JSON-RPC, et utiliser des agents A2A distants comme outils dans vos propres agents.',
			gets: [
				'Une Agent Card pour chaque agent que vous activez, listant ses compétences',
				'Un point d\'accès JSON-RPC 2.0 avec <code>tasks/send</code>, <code>tasks/get</code> et <code>tasks/cancel</code>',
				'Des agents A2A distants intégrés à la boucle d\'appel d\'outils aux côtés des outils intégrés, MCP et HTTP',
				'Des filtres de compétences pour n\'exposer qu\'une partie d\'un agent distant',
			],
			steps: [
				'Activer un agent avec <code>a2aEnabled: true</code>, une description et les compétences à annoncer.',
				'Les pairs récupèrent sa carte sur <code>/a2a/agents/{agentId}/agent.json</code> et appellent <code>POST /a2a/agents/{agentId}</code>.',
				'Pour consommer un agent distant, le lister sous <code>a2aAgents</code> dans une tâche LLM avec son URL et une clé d\'API référencée dans le coffre.',
				'EDDI lit la carte distante, transforme chaque compétence en un outil nommé <code>{agentName}_{skillId}</code> et l\'appelle avec <code>tasks/send</code>.',
			],
			captions: [
				'Exposer un agent. A2A s\'active agent par agent.',
				'Consommer un agent distant. La clé d\'API doit être une référence au coffre.',
			],
			governance: [
				'Les Agent Cards sont anonymes par conception, afin qu\'un pair puisse découvrir un agent avant de détenir des identifiants. Lorsque l\'authentification est activée, le listage des agents et le point d\'accès JSON-RPC exigent tous deux un jeton.',
				'Les outils d\'un agent distant passent par les mêmes garde-fous de validation et de protection des résultats d\'outils que les autres sources d\'outils, et la clé d\'API reste dans le coffre.',
				'<code>tasks/send</code> exécute une conversation sur votre budget LLM, c\'est pourquoi il n\'est pas anonyme.',
			],
			goodToKnow: [
				'Lorsque l\'authentification est activée, la carte annonce un point d\'accès de jeton. EDDI en déduit un chemin de type Keycloak tant que vous ne définissez pas <code>eddi.a2a.public-token-endpoint</code> : définissez-le pour les autres fournisseurs d\'identité.',
			],
		},
		openapi: {
			summary: 'Transformer toute API REST décrite en OpenAPI 3.0 ou 3.1 en agent doté d\'outils, sans écrire de code, et placer les appels à conséquences derrière une validation humaine.',
			gets: [
				'Un agent appelant l\'API, généré à partir de la spécification : configurations d\'appels HTTP regroupées par tag, le pipeline et le déploiement',
				'Un filtrage des endpoints, un remplacement de l\'URL de base et la propagation de l\'en-tête d\'authentification',
				'La possibilité d\'ajouter les outils d\'un serveur MCP à côté de ceux générés',
				'Des outils que vous pouvez relire, comparer et versionner, car ce sont des configurations',
			],
			steps: [
				'Fournir la spécification OpenAPI à EDDI via l\'outil MCP <code>create_api_agent</code> ou <code>POST /administration/agents/setup-api</code>.',
				'Placer sur liste d\'autorisation les opérations que l\'agent doit avoir. Un endpoint non déclaré ne peut pas être appelé.',
				'EDDI génère les configurations d\'appels HTTP, construit le pipeline complet et déploie l\'agent.',
				'Conserver les identifiants sous forme de références <code>${vault:...}</code>.',
				'Protéger les écritures avec <code>http.*:*</code> et exempter les lectures avec <code>http.get:*</code>.',
			],
			captions: [
				'Le modèle httpCalls à partir duquel les outils générés sont construits. Écrit ici à la main pour montrer les champs.',
				'Valider chaque appel qui modifie l\'état, laisser passer les lectures.',
			],
			governance: [
				'Les motifs de validation peuvent cibler ce qu\'un outil appelle (<code>http.post:*</code>), ce qui reste correct lorsqu\'un operationId change.',
				'Les appels sortants sont protégés par la plateforme contre le SSRF et le path traversal.',
				'Via REST, <code>setup-api</code> accepte une <code>hitlConfig</code> : un agent peut ainsi être provisionné avec ses outils d\'écriture protégés dès la première version. L\'outil MCP ne peut pas la définir.',
				'Les décisions sont consignées dans le journal d\'audit.',
			],
			goodToKnow: [
				'Un outil d\'écriture généré prend l\'ensemble du corps de la requête dans un seul paramètre <code>requestBody</code>.',
			],
		},
		sap: {
			summary: 'EDDI n\'a pas de connecteur SAP natif. Vous accédez à SAP par ses API OData et REST, avec l\'import OpenAPI ou des appels HTTP, ou via un serveur MCP, sous validations et journal d\'audit.',
			gets: [
				'Des agents qui lisent dans SAP et, avec validation, y écrivent via ses API publiées',
				'La même gouvernance que tout autre outil : validations, journal d\'audit, identifiants conservés dans le coffre',
				'Aucun code dans l\'agent. La connexion est une configuration que vous pouvez relire',
			],
			steps: [
				'Choisir la voie. L\'import OpenAPI si le service SAP publie une description OpenAPI. Les appels HTTP pour déclarer des requêtes OData ou REST individuelles. MCP si vous exploitez déjà un serveur MCP devant SAP.',
				'Stocker l\'identifiant ou le jeton SAP dans le coffre de secrets et le référencer avec <code>${vault:...}</code>.',
				'Déclarer d\'abord uniquement les opérations de lecture dont l\'agent a besoin, comme lister ou lire des objets métier.',
				'Protéger chaque écriture avec <code>http.*:*</code> et exempter les lectures avec <code>http.get:*</code>. Les approbateurs décident dans le Manager ou dans Slack.',
				'Vérifier le journal d\'audit pour chaque appel avant d\'élargir ce que l\'agent peut faire.',
			],
			captions: [
				'Un exemple de lecture sur un service OData SAP. L\'hôte, le chemin du service et l\'authentification dépendent de votre système SAP.',
				'Les écritures attendent un humain. Les lectures passent.',
			],
			governance: [
				'Les écritures sont retenues pour validation, et la décision est consignée dans le journal d\'audit en ajout seul, signé par HMAC.',
				'Les identifiants restent dans le coffre et n\'apparaissent ni dans la configuration de l\'agent ni dans les exports.',
				'La liste d\'autorisation des endpoints signifie qu\'une opération SAP non déclarée ne peut pas être appelée, quoi que saisisse un utilisateur.',
			],
			goodToKnow: [
				'C\'est un schéma d\'intégration, pas un connecteur SAP certifié. La façon dont vous vous authentifiez auprès de SAP, et les API qu\'il expose, dépendent de votre paysage applicatif.',
				'EDDI Solutions peut construire et maintenir la connexion pour vous, y compris des outils MCP sur mesure, et l\'exploiter dans votre cloud ou sur site.',
			],
		},
		chroma: {
			summary: 'Chroma comme base vectorielle pour une base de connaissances EDDI. L\'option la plus simple à mettre en place lorsque vous n\'avez pas d\'infrastructure existante à réutiliser.',
			gets: [
				'Des réponses enrichies par récupération à partir de vos propres documents',
				`Une des ${VECTOR_STORES} bases vectorielles, choisie par configuration plutôt que par code`,
				'Des sources d\'ingestion : exploration de sites web et fichiers téléversés, avec planifications et historique d\'exécution',
			],
			steps: [
				'Lancer un serveur Chroma et noter son URL et un nom de collection.',
				'Créer une RagConfiguration avec <code>storeType: "chroma"</code> et les paramètres de la base, plus le fournisseur d\'embeddings.',
				'La lier à l\'agent avec une étape de workflow <code>eddi://ai.labs.rag</code>.',
				'La sélectionner dans la tâche LLM par son nom sous <code>knowledgeBases</code>, puis ingérer des documents.',
			],
			captions: [
				'La base de connaissances. Chroma prend une URL de base et un nom de collection.',
				'L\'étape qui la lie à l\'agent et la tâche qui l\'utilise. Oublier l\'étape de workflow est l\'erreur la plus fréquente.',
			],
			governance: [
				'Les clés d\'API d\'embeddings sont des références au coffre : le corpus de documents et les identifiants restent donc séparés.',
				'Les appels d\'embeddings envoient le texte des documents à un fournisseur d\'embeddings hébergé. Si les données ne doivent pas quitter votre infrastructure, utilisez un modèle d\'embeddings auto-hébergé.',
				'Une base vectorielle ouverte est une copie de votre corpus. Exécutez Chroma avec authentification et hors des interfaces publiques.',
			],
			goodToKnow: [
				'Le remplacement des fragments d\'un document est vérifié pour la base en mémoire et pgvector. Pour Chroma, il devrait fonctionner mais n\'est pas couvert par des tests : des documents ré-ingérés peuvent donc laisser des fragments obsolètes.',
			],
		},
		pgvector: {
			summary: 'PostgreSQL avec pgvector comme base vectorielle pour une base de connaissances EDDI. Le choix persistant recommandé lorsque vous exploitez déjà PostgreSQL.',
			gets: [
				'Une base de connaissances dans une base de données que vous sauvegardez et exploitez déjà',
				'Un remplacement de document vérifié lors de la ré-ingestion',
				'La même configuration d\'agent que pour toute autre base, seuls les paramètres de la base changent',
			],
			steps: [
				'Activer l\'extension pgvector dans PostgreSQL et créer une base de données et un utilisateur.',
				'Créer une RagConfiguration avec <code>storeType: "pgvector"</code>, les détails de connexion, une table et la <code>dimension</code> des vecteurs.',
				'La lier avec une étape de workflow <code>eddi://ai.labs.rag</code>.',
				'La sélectionner par son nom dans la tâche LLM et ingérer des documents.',
			],
			captions: [
				'La dimension doit correspondre à votre modèle d\'embeddings. 1536 correspond à text-embedding-3-small.',
				'Lier la base de connaissances à l\'agent et l\'utiliser dans une tâche.',
			],
			governance: [
				'Le mot de passe de la base de données est un paramètre obligatoire. Conservez-le sous forme de référence au coffre.',
				'Votre contrôle d\'accès PostgreSQL et vos sauvegardes existants s\'appliquent aux vecteurs.',
				'Les appels d\'embeddings envoient le texte des documents au fournisseur d\'embeddings que vous configurez.',
			],
			goodToKnow: [
				'La base en mémoire est destinée au développement : elle se vide après 30 minutes sans requête et au redémarrage. Une base persistante comme pgvector est le choix pour la production.',
			],
		},
		qdrant: {
			summary: 'Qdrant comme base vectorielle pour une base de connaissances EDDI, une base de données vectorielle conçue à cet effet, avec de la marge pour évoluer.',
			gets: [
				'Une base de données vectorielle dédiée derrière votre base de connaissances',
				'Clé d\'API et TLS en option',
				'La même configuration d\'agent que pour toute autre base',
			],
			steps: [
				'Lancer un serveur Qdrant et noter son hôte et son port gRPC (la valeur par défaut d\'EDDI est 6334).',
				'Créer une RagConfiguration avec <code>storeType: "qdrant"</code> et un <code>collectionName</code>.',
				'La lier avec une étape de workflow <code>eddi://ai.labs.rag</code>.',
				'La sélectionner par son nom dans la tâche LLM et ingérer des documents.',
			],
			captions: [
				'Qdrant prend un hôte, un port et un nom de collection. apiKey et useTls sont facultatifs.',
				'Lier la base de connaissances à l\'agent et l\'utiliser dans une tâche.',
			],
			governance: [
				'Si Qdrant exige une clé d\'API, référencez-la depuis le coffre.',
				'Les appels d\'embeddings envoient le texte des documents au fournisseur d\'embeddings que vous configurez.',
				'Une base vectorielle ouverte est une copie de votre corpus. Gardez-la hors des interfaces publiques.',
			],
			goodToKnow: [
				'Le remplacement des fragments d\'un document devrait fonctionner avec Qdrant mais n\'est pas couvert par des tests. Sans lui, des documents ré-ingérés peuvent laisser des fragments obsolètes.',
			],
		},
		elasticsearch: {
			summary: 'Elasticsearch comme base vectorielle pour une base de connaissances EDDI, utile lorsque vous l\'exploitez déjà et souhaitez réunir recherche par mots-clés et recherche vectorielle au même endroit.',
			gets: [
				'Une base de connaissances dans un cluster que vous exploitez déjà',
				'Une authentification par clé d\'API ou par nom d\'utilisateur et mot de passe',
				'La même configuration d\'agent que pour toute autre base',
			],
			steps: [
				'S\'assurer qu\'un cluster Elasticsearch est joignable et choisir un nom d\'index.',
				'Créer une RagConfiguration avec <code>storeType: "elasticsearch"</code>, le <code>serverUrl</code> et le <code>indexName</code>.',
				'La lier avec une étape de workflow <code>eddi://ai.labs.rag</code>.',
				'La sélectionner par son nom dans la tâche LLM et ingérer des documents.',
			],
			captions: [
				'Le serverUrl par défaut est localhost:9200. Ajoutez une apiKey, ou un userName et un password, pour un cluster sécurisé.',
				'Lier la base de connaissances à l\'agent et l\'utiliser dans une tâche.',
			],
			governance: [
				'Référencer la clé d\'API ou le mot de passe depuis le coffre.',
				'Les appels d\'embeddings envoient le texte des documents au fournisseur d\'embeddings que vous configurez.',
				'Le contrôle d\'accès existant de votre cluster s\'applique aux vecteurs.',
			],
			goodToKnow: [
				'Le remplacement des fragments d\'un document devrait fonctionner avec Elasticsearch mais n\'est pas couvert par des tests. Sans lui, des documents ré-ingérés peuvent laisser des fragments obsolètes.',
			],
		},
		'mongodb-atlas-vector-search': {
			summary: 'MongoDB Atlas Vector Search comme base vectorielle pour une base de connaissances EDDI, un choix naturel si vous êtes déjà sur Atlas.',
			gets: [
				'Une base de connaissances dans le cluster Atlas que vous exploitez déjà',
				'Une configuration par chaîne de connexion, base de données, collection et nom d\'index',
				'La même configuration d\'agent que pour toute autre base',
			],
			steps: [
				'Créer un index de recherche vectorielle dans Atlas et noter les noms de la base de données, de la collection et de l\'index.',
				'Créer une RagConfiguration avec <code>storeType: "mongodb-atlas"</code> et les paramètres de la base.',
				'La lier avec une étape de workflow <code>eddi://ai.labs.rag</code>.',
				'La sélectionner par son nom dans la tâche LLM et ingérer des documents.',
			],
			captions: [
				'La chaîne de connexion contient des identifiants, c\'est pourquoi c\'est ici une référence au coffre.',
				'Lier la base de connaissances à l\'agent et l\'utiliser dans une tâche.',
			],
			governance: [
				'Gardez la chaîne de connexion dans le coffre, pas dans la configuration.',
				'Les appels d\'embeddings envoient le texte des documents au fournisseur d\'embeddings que vous configurez.',
				'Le contrôle d\'accès et les règles réseau d\'Atlas s\'appliquent aux vecteurs.',
			],
			goodToKnow: [
				'Le remplacement des fragments d\'un document devrait fonctionner avec Atlas mais n\'est pas couvert par des tests. Sans lui, des documents ré-ingérés peuvent laisser des fragments obsolètes.',
			],
		},
		'kubernetes-helm': {
			summary: 'Exécuter EDDI sur tout cluster Kubernetes conforme, avec un démarrage rapide en un seul fichier, un chart Helm ou des overlays Kustomize, avec MongoDB ou PostgreSQL.',
			gets: [
				'Un manifeste de démarrage rapide qui déploie EDDI et MongoDB',
				'Un chart Helm et des overlays Kustomize pour les profils de production',
				'Des composants facultatifs : authentification Keycloak, NATS JetStream, supervision, ingress, pod disruption budget et network policy',
				'MongoDB ou PostgreSQL comme magasin de données',
			],
			steps: [
				'Appliquer le manifeste de démarrage rapide, ou installer le chart Helm avec une clé maître du coffre.',
				'Créer le Secret <code>eddi-secrets</code> qui contient la clé maître du coffre. Aucun manifeste ne l\'écrit, volontairement.',
				'Choisir l\'overlay de base de données ou les valeurs Helm pour MongoDB ou PostgreSQL.',
				'Ajouter les composants facultatifs dont vous avez besoin, comme Keycloak et l\'ingress.',
				'Pour les secrets de production, synchroniser <code>eddi-secrets</code> avec l\'External Secrets Operator.',
			],
			captions: [
				'EDDI et MongoDB en une seule commande. Le pod attend que le Secret eddi-secrets existe.',
				'Installation Helm avec une clé maître du coffre générée.',
				'Les valeurs Helm qui basculent le magasin de données sur PostgreSQL.',
			],
			governance: [
				'Aucun manifeste n\'écrit jamais le Secret de la clé maître : une nouvelle application ne peut donc pas remplacer une clé active et rendre les secrets existants indéchiffrables.',
				'Le realm Keycloak fourni pour Helm et Kustomize ne définit aucun mot de passe par défaut pour les comptes privilégiés.',
				'Le profil de production ajoute un pod disruption budget et une network policy.',
			],
			goodToKnow: [
				'L\'External Secrets Operator peut synchroniser le Secret <code>eddi-secrets</code> depuis AWS Secrets Manager, HashiCorp Vault, Azure Key Vault et services similaires. EDDI lui-même n\'a pas de client natif pour ceux-ci.',
				'EDDI Solutions peut exploiter EDDI pour vous dans votre propre cloud, sur site ou en instance managée dédiée.',
			],
		},
		openshift: {
			summary: 'EDDI fournit une image de conteneur certifiée Red Hat, basée sur UBI 10, qui s\'exécute sans droits root sur OpenShift 4.12 ou ultérieur, ainsi qu\'un Operator pour OperatorHub.',
			gets: [
				'Une image certifiée Red Hat, listée dans le Red Hat Ecosystem Catalog',
				'Une exécution sans droits root avec l\'UID 185 sur une base UBI 10 avec OpenJDK 25',
				'Un Operator qui crée une instance EDDI et une route à partir d\'une ressource personnalisée',
				'Une certification vérifiée en CI avec Red Hat preflight',
			],
			steps: [
				'Sur OpenShift 4.12 ou ultérieur, ouvrir OperatorHub et installer l\'Operator EDDI.',
				'Créer une instance <code>Eddi</code> depuis Installed Operators, avec la taille et le stockage pour MongoDB.',
				'L\'Operator crée automatiquement la route.',
				'Ajouter l\'authentification et les secrets comme sur n\'importe quel cluster.',
			],
			captions: ['Une ressource personnalisée Eddi tirée de la doc.'],
			governance: [
				'Le conteneur s\'exécute avec un utilisateur non root, et l\'image embarque les fichiers de licence des composants tiers.',
				'Les versions sont vérifiées en CI par rapport aux exigences de certification de Red Hat.',
				'Le démarrage en production exige toujours OIDC sauf renoncement explicite.',
			],
			goodToKnow: [
				'L\'Operator est en cours de mise à jour pour EDDI 6 afin de prendre en charge MongoDB et PostgreSQL. La voie Kubernetes générique fonctionne sur tout cluster conforme.',
				'Un hôte RHEL 8 n\'est pas pris en charge pour l\'image UBI 10. RHEL 9 ou ultérieur l\'est.',
			],
		},
		ollama: {
			summary: 'Exécuter des modèles en local avec Ollama et garder les prompts et les documents sur votre propre matériel, pour les environnements sur site et isolés du réseau (air-gapped).',
			gets: [
				'Une tâche LLM de type <code>ollama</code> qui parle à votre serveur Ollama',
				'Aucune clé d\'API de fournisseur et aucune donnée envoyée à un modèle hébergé',
				'Un overlay compose qui démarre Ollama à côté d\'EDDI',
				'Jlama en processus comme alternative pour de petits modèles quantifiés',
			],
			steps: [
				'Démarrer EDDI avec l\'overlay compose Ollama, ou exécuter Ollama vous-même et noter son URL.',
				'Télécharger un modèle dans Ollama. Utiliser le tag du modèle exactement tel qu\'affiché par <code>ollama list</code>.',
				'Définir le <code>type</code> de la tâche sur <code>ollama</code> avec la <code>baseUrl</code> et le <code>model</code>.',
				'Dans un conteneur, <code>localhost</code> désigne le conteneur lui-même. Utiliser le nom du service compose ou <code>host.docker.internal</code>.',
			],
			captions: [
				'Démarre Ollama sur le même réseau, accessible à http://ollama:11434.',
				'Une tâche Ollama tirée de la doc d\'EDDI.',
			],
			governance: [
				'Les prompts, le contexte récupéré et les réponses restent sur votre réseau, ce qui est tout l\'intérêt d\'un modèle local.',
				'Les validations, les Behavior Rules et le journal d\'audit s\'appliquent de la même manière qu\'avec un modèle hébergé.',
				'Aucun identifiant n\'est en jeu : il n\'y a donc rien à placer dans le coffre pour le modèle lui-même.',
			],
			goodToKnow: [
				'Une installation totalement isolée du réseau nécessite un Ollama local ou un cache Jlama pré-alimenté, car EDDI ne peut pas télécharger de modèle sans réseau.',
				'Les modèles locaux varient en fiabilité pour l\'appel d\'outils et le JSON. Testez le comportement dont vous dépendez.',
			],
		},
	},
};

export default copy;
