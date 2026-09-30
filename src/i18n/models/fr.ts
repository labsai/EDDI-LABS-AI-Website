/**
 * Model catalog copy, French. Keys match ./en.ts and src/data/models.ts.
 */
import type { ModelsCopy } from './en';

const copy: ModelsCopy = {
	models: {
		'claude-fable-5-1': {
			summary: 'Le modèle le plus performant d\'Anthropic en disponibilité générale, conçu pour le raisonnement exigeant et le travail d\'agent de longue durée.',
			strengths: ['Sessions d\'agent qui durent des heures', 'Recherche en plusieurs étapes', 'Travail sur documents, tableurs et présentations', 'Contexte de 1M tokens avec 128K en sortie'],
			bestFor: ['Agents à long horizon', 'Recherche approfondie', 'Analyse menée jusqu\'au document final'],
		},
		'claude-opus-5-5': {
			summary: 'Le choix par défaut recommandé par Anthropic pour le travail exigeant : programmation agentique et travail intellectuel de longue durée, avec la réflexion adaptative toujours active.',
			strengths: ['Agents de programmation autonomes sur plusieurs heures', 'Refactorisation à grande échelle', 'Workflows riches en images et computer use', 'Contexte de 1M tokens avec 128K en sortie'],
			bestFor: ['Programmation agentique complexe', 'Travail intellectuel en entreprise', 'Ingénierie système'],
		},
		'claude-sonnet-5-5': {
			summary: 'L\'équilibre entre vitesse et intelligence d\'Anthropic pour la programmation, les agents et le travail en entreprise au quotidien, avec la réflexion adaptative active par défaut.',
			strengths: ['Réponses rapides', 'Contexte de 1M tokens avec 128K en sortie', 'La réflexion peut être limitée aux intervalles entre appels d\'outils', 'Utilisation fiable des outils'],
			bestFor: ['Génération de code', 'Analyse de données', 'Création de contenu', 'Agents dotés d\'outils'],
		},
		'claude-haiku-4-5': {
			summary: 'Le modèle actuel le plus rapide et le moins coûteux d\'Anthropic, avec une fenêtre de contexte de 200K et une réflexion étendue optionnelle.',
			strengths: ['La latence la plus faible de la gamme Claude', 'Réflexion étendue avec budget de tokens', 'Entrée texte et image', 'Bien adapté aux tâches de sous-agent'],
			bestFor: ['Applications temps réel', 'Traitement à fort volume', 'Le premier niveau d\'une cascade'],
		},
		'gpt-6': {
			summary: 'La famille de raisonnement actuelle d\'OpenAI en trois niveaux : Astra pour le travail le plus difficile, Sol pour des résultats proches d\'Astra à moindre coût, Luna pour les forts volumes.',
			strengths: ['Contexte de 1,05M tokens et 128K en sortie à chaque niveau', 'Function calling et sorties structurées', 'Effort de raisonnement jusqu\'à max', 'Entrée texte et image'],
			bestFor: ['Astra : raisonnement et recherche exigeants', 'Sol : programmation complexe et travail professionnel', 'Luna : tâches ciblées à fort volume'],
		},
		'gpt-5-6': {
			summary: 'La génération précédente d\'OpenAI, qui a introduit les niveaux Sol, Terra et Luna : phare, équilibré et le moins coûteux.',
			strengths: ['Contexte de 1,05M tokens et 128K en sortie', 'Effort de raisonnement de none à max', 'Entrée texte et image'],
			bestFor: ['Sol : travail professionnel complexe', 'Terra : équilibre entre capacités et coût', 'Luna : volumes sensibles au coût'],
		},
		'gpt-oss': {
			summary: 'Les modèles de raisonnement à poids ouverts d\'OpenAI, en mixture-of-experts sous Apache 2.0 : 120b tient sur un GPU de 80 Go, 20b tourne sur des appareils de 16 Go.',
			strengths: ['Licence Apache 2.0', 'Function calling et sorties structurées', 'Effort de raisonnement réglable', 'Peut être affiné (fine-tuning)'],
			bestFor: ['Déploiement auto-hébergé et sur site', 'Inférence rapide sur Groq', 'Agents utilisant des outils'],
		},
		'gemini-3-8-flash': {
			summary: 'Le modèle Flash actuel de Google en disponibilité générale, destiné à l\'ingénierie à long horizon, aux agents autonomes et aux workflows d\'entreprise, à la vitesse et au coût de Flash.',
			strengths: ['Entrée texte, image, vidéo, audio et PDF', 'Function calling et sorties structurées', 'Niveaux de réflexion low, medium et high', 'Contexte de 1M tokens'],
			bestFor: ['Agents autonomes', 'Workflows d\'entreprise', 'Documents multimodaux'],
		},
		'gemini-3-1-pro': {
			summary: 'Le modèle Pro actuel de Google, en preview sur l\'API Gemini, optimisé pour le raisonnement complexe, l\'ingénierie logicielle et l\'utilisation précise d\'outils en plusieurs étapes.',
			strengths: ['Entrée texte, image, vidéo, audio et PDF', 'Réflexion efficace', 'Exécution fiable d\'outils en plusieurs étapes', 'Contexte de 1M tokens'],
			bestFor: ['Résolution de problèmes complexes', 'Programmation agentique', 'Compréhension multimodale'],
		},
		'gemini-3-5-flash-lite': {
			summary: 'Le modèle 3.5 de Google au coût et à la latence les plus bas, conçu pour le travail de sous-agent à haut débit, l\'analyse de documents et l\'extraction simple.',
			strengths: ['Latence et coût faibles', 'Entrée texte, image, vidéo, audio et PDF', 'Function calling et réflexion', 'Contexte de 1M tokens'],
			bestFor: ['Sous-agents à fort volume', 'Analyse et extraction de documents', 'Traduction'],
		},
		gemma: {
			summary: 'La famille à poids ouverts de Google, des modèles pour l\'edge jusqu\'à un modèle dense de 31B et un modèle mixture-of-experts de 26B dans Gemma 4.',
			strengths: ['Poids ouverts, Gemma 4 sous Apache 2.0', 'Function calling pour les agents', 'Entrée image dans toutes les tailles', 'Tourne sur du matériel modeste'],
			bestFor: ['Déploiement sur appareil et en edge', 'Agents auto-hébergés', 'Questions-réponses et résumés'],
		},
		'grok-4-7': {
			summary: 'Le modèle frontier de xAI pour la programmation, les tâches agentiques et le travail intellectuel, avec entrée texte et image et effort de raisonnement au choix.',
			strengths: ['Contexte de 500K tokens', 'Function calling et sorties structurées', 'Effort de raisonnement de low à xhigh', 'Endpoint avec résidence des données aux États-Unis'],
			bestFor: ['Ingénierie logicielle', 'Longues tâches agentiques', 'Travail intellectuel professionnel'],
		},
		'deepseek-flash': {
			summary: 'Le modèle Flash actuel de DeepSeek, avec compréhension native des images, un contexte de 1M tokens et la réflexion active par défaut ; les poids sont sous licence MIT.',
			strengths: ['Contexte de 1M tokens, jusqu\'à 384K en sortie', 'Appels d\'outils et sortie JSON', 'Entrée image et texte', 'Poids ouverts sous MIT'],
			bestFor: ['Agents économiques', 'Agents de programmation', 'Charges longues et riches en entrée'],
		},
		'deepseek-v4-pro': {
			summary: 'Le grand modèle V4 Pro de DeepSeek : texte uniquement via l\'API, avec un contexte de 1M tokens, des appels d\'outils et un effort de réflexion au choix ; les poids sont sous licence MIT.',
			strengths: ['Contexte de 1M tokens, jusqu\'à 384K en sortie', 'Effort de réflexion low, high ou max', 'Appels d\'outils et sortie JSON', 'Poids ouverts sous MIT'],
			bestFor: ['Agents de code', 'Utilisation d\'outils et automatisation de tâches'],
		},
		'deepseek-r1-distill': {
			summary: 'Un petit modèle de raisonnement ouvert : Qwen3-8B entraîné sur la chaîne de pensée de DeepSeek-R1, pour un usage local.',
			strengths: ['Raisonnement étape par étape', 'Solide en mathématiques pour sa taille', 'Poids sous licence MIT'],
			bestFor: ['Tâches de raisonnement locales', 'Mathématiques et logique', 'Expériences hors ligne'],
		},
		'kimi-k3': {
			summary: 'Le modèle phare de Moonshot AI, avec un contexte de 1M tokens, une compréhension native des images et des vidéos et une réflexion toujours active ; les poids sont publiés.',
			strengths: ['Contexte de 1M tokens', 'Entrée texte, image et vidéo', 'Appel d\'outils', 'Poids publiés'],
			bestFor: ['Programmation à long horizon', 'Travail intellectuel', 'Raisonnement approfondi et workflows d\'agents'],
		},
		'kimi-k2-7-code': {
			summary: 'Le modèle dédié à la programmation de Moonshot AI, avec un contexte de 256K, une réflexion toujours active, l\'appel d\'outils et une variante haute vitesse distincte.',
			strengths: ['Contexte de 256K tokens', 'Entrée texte, image et vidéo', 'Appel d\'outils en plusieurs étapes', 'Variante haute vitesse à environ 180 tokens par seconde'],
			bestFor: ['Longues tâches de programmation', 'Programmation agentique', 'Mathématiques et raisonnement'],
		},
		'qwen-3-8': {
			summary: 'La gamme Qwen 3.8 d\'Alibaba : Max est le modèle phare, et Max comme Flash offrent un contexte de 1M tokens, l\'entrée image et vidéo et une réflexion hybride.',
			strengths: ['Contexte de 1M tokens, 131K en sortie', 'Entrée texte, image et vidéo', 'Function calling et sorties structurées', 'Régions dont Francfort et la Virginie'],
			bestFor: ['Programmation à long horizon', 'Travail professionnel en droit, finance et design', 'Agents multimodaux'],
		},
		'qwen-3-7-plus': {
			summary: 'Qwen 3.7 Plus et Flash offrent un contexte de 1M tokens, l\'entrée image et vidéo, une réflexion hybride et le function calling pour le travail d\'agents multimodaux.',
			strengths: ['Contexte de 1M tokens, 131K en sortie', 'Entrée texte, image et vidéo', 'Function calling', 'Compréhension d\'écrans et d\'interfaces graphiques (Plus)'],
			bestFor: ['Agents multimodaux', 'Génération de code visuelle', 'Agents de recherche (Flash)'],
		},
		'glm-5-3': {
			summary: 'Le modèle phare de Z.ai pour l\'ingénierie logicielle et le travail d\'agent, avec un contexte de 1M tokens, jusqu\'à 128K en sortie et des poids publiés ; les variantes Flash ajoutent l\'entrée image et vidéo.',
			strengths: ['Contexte de 1M tokens, 128K en sortie', 'Function calling avec streaming des outils', 'Effort de réflexion low, high ou max', 'Poids publiés'],
			bestFor: ['Agents de programmation', 'Longues tâches agentiques', 'Revue de sécurité du code'],
		},
		'minimax-m3': {
			summary: 'Le modèle de programmation et d\'agent nativement multimodal de MiniMax, avec jusqu\'à 1M tokens de contexte et une réflexion intercalée entre les appels d\'outils ; les poids sont publiés.',
			strengths: ['Contexte jusqu\'à 1M tokens (512K garantis)', 'Réflexion entre les appels d\'outils', 'Entrée texte, image et vidéo', 'Poids publiés'],
			bestFor: ['Assistants de programmation', 'Longues tâches d\'agent et automatisation de workflows', 'Analyse de longues vidéos'],
		},
		'mistral-large': {
			summary: 'Le modèle phare à poids ouverts de Mistral, en mixture-of-experts (41B de paramètres actifs, 675B au total) avec compréhension des images, sous Apache 2.0.',
			strengths: ['Licence Apache 2.0', 'Compréhension des images', 'Plus de 40 langues', 'Function calling et sorties structurées'],
			bestFor: ['Assistants multilingues', 'Analyse de documents', 'Workflows utilisant des outils'],
		},
		'mistral-medium': {
			summary: 'Un modèle multimodal dense de 128B qui réunit suivi d\'instructions, raisonnement et programmation, avec un effort de raisonnement réglé par requête.',
			strengths: ['Effort de raisonnement par requête', 'Conçu pour les agents et la programmation', 'Function calling et sortie JSON', 'Auto-hébergeable sur quatre GPU'],
			bestFor: ['Workflows agentiques', 'Agents de programmation', 'Longs documents'],
		},
		'mistral-small': {
			summary: 'Un modèle à poids ouverts en mixture-of-experts (environ 6B de paramètres actifs) qui réunit instruct, raisonnement et programmation, avec entrée image.',
			strengths: ['Instruct, raisonnement et programmation dans un seul modèle', 'Raisonnement activable', 'Entrée image', 'Licence Apache 2.0'],
			bestFor: ['Agents sensibles au coût', 'Chat généraliste avec raisonnement optionnel', 'Compréhension des images'],
		},
		ministral: {
			summary: 'De petits modèles à poids ouverts en trois tailles, chacun avec des variantes base, instruct et raisonnement et la compréhension des images, pour un usage local et en edge.',
			strengths: ['Conçus pour le déploiement local', 'Variantes de raisonnement dans chaque taille', 'Compréhension des images', 'Licence Apache 2.0'],
			bestFor: ['Déploiement en edge et sur site', 'Tâches à fort volume et faible coût', 'Agents locaux'],
		},
		codestral: {
			summary: 'Le modèle de programmation de Mistral pour les tâches à faible latence et haute fréquence, comme le fill-in-the-middle et la génération de code.',
			strengths: ['Fill-in-the-middle', 'Complétion à faible latence', 'Function calling', 'Sorties structurées'],
			bestFor: ['Complétion de code', 'Génération de code'],
		},
		'llama-4': {
			summary: 'Les modèles mixture-of-experts nativement multimodaux de Meta, avec 17B de paramètres actifs : Scout (109B au total) et Maverick (400B au total).',
			strengths: ['Entrée texte et image', 'Efficacité du mixture-of-experts', '12 langues', 'Contexte long (1M pour Maverick sur Bedrock)'],
			bestFor: ['Assistants multimodaux', 'Raisonnement visuel', 'Longs documents'],
		},
		'llama-3-3-70b': {
			summary: 'Le modèle texte de 70B de Meta pour le dialogue multilingue en huit langues, avec utilisation d\'outils.',
			strengths: ['Huit langues', 'Utilisation d\'outils', 'Contexte de 128K'],
			bestFor: ['Chat généraliste auto-hébergé', 'Assistants multilingues', 'Génération de données synthétiques'],
		},
		'llama-3-2-1b': {
			summary: 'Un modèle multilingue de 1,2B de paramètres pour les environnements contraints et les appareils, assez petit pour tourner dans la JVM d\'EDDI.',
			strengths: ['Tourne sur un CPU', 'Contexte de 128K', 'Huit langues'],
			bestFor: ['Inférence hors ligne dans le même processus', 'Réécriture de requêtes et de prompts', 'Résumés courts'],
		},
		'amazon-nova': {
			summary: 'Les modèles multimodaux d\'Amazon sur Bedrock, qui acceptent texte, image et vidéo : Pro est le niveau équilibré, Lite le niveau économique.',
			strengths: ['Entrée texte, image et vidéo', 'Contexte de 300K tokens', 'Utilisation d\'outils', 'Mise en cache des prompts'],
			bestFor: ['Questions-réponses sur documents et images', 'Compréhension vidéo', 'Agents qui restent dans AWS'],
		},
		'cohere-command-a': {
			summary: 'Le modèle d\'entreprise de 111B de Cohere, axé sur l\'utilisation d\'outils, la recherche documentaire et 23 langues ; Oracle propose aussi des variantes raisonnement et vision.',
			strengths: ['Utilisation d\'outils en plusieurs étapes', 'Génération augmentée par récupération', '23 langues', 'Contexte de 256K tokens'],
			bestFor: ['RAG d\'entreprise', 'Agents multilingues', 'Déploiements sur Oracle Cloud'],
		},
		'phi-4-mini': {
			summary: 'Le modèle ouvert de 3,8B de Microsoft pour le travail contraint en mémoire et sensible à la latence, ainsi que le raisonnement mathématique et logique.',
			strengths: ['Tourne dans des environnements contraints', 'Mathématiques et logique', 'Function calling', 'Licence MIT'],
			bestFor: ['Inférence locale et en edge', 'Applications sensibles à la latence', 'Appels d\'outils légers'],
		},
	},
	hosts: {
		bedrock: { name: 'Amazon Bedrock', summary: 'Accès AWS géré aux modèles d\'Anthropic, Meta, Amazon, OpenAI, Mistral et d\'autres.', why: ['Les fournisseurs ne voient ni les prompts ni les réponses des clients', 'Réseau privé via VPC et PrivateLink', 'Inférence dans la région ou inter-régions pour la résidence des données'] },
		vertex: { name: 'Google Vertex AI', summary: 'La plateforme d\'IA de Google Cloud, désormais aussi appelée Gemini Enterprise Agent Platform, qui sert les modèles Gemini et Model Garden.', why: ['Des endpoints régionaux maintiennent le traitement dans une seule juridiction', 'VPC Service Controls pour l\'isolation réseau', 'Authentification via les identifiants Google Cloud'] },
		azure: { name: 'Azure OpenAI', summary: 'Les modèles OpenAI hébergés dans votre abonnement Azure, désormais intégrés à Microsoft Foundry, appelés par nom de déploiement.', why: ['Les déploiements Data Zone maintiennent le traitement dans l\'UE, aux États-Unis ou en APAC', 'Endpoints privés sur le backbone Azure', 'Débit provisionné pour une capacité réservée'] },
		oracle: { name: 'Oracle OCI Generative AI', summary: 'Service Oracle Cloud géré pour Cohere, Meta Llama et d\'autres modèles, à la demande ou sur des clusters dédiés.', why: ['Clusters d\'IA dédiés', 'Endpoints privés et isolation des données', 'Gouverné par les politiques OCI IAM'] },
		groq: { name: 'Groq', summary: 'Un cloud d\'inférence qui exécute des modèles ouverts sur les puces LPU de Groq, via une API compatible OpenAI.', why: ['Latence très faible', 'Modèles ouverts comme gpt-oss et Qwen', 'Une clé, aucune infrastructure'] },
		openrouter: { name: 'OpenRouter', summary: 'Une seule API vers des centaines de modèles de nombreux fournisseurs, avec un routeur automatique qui choisit un modèle par requête.', why: ['Une clé pour de nombreux éditeurs', 'Bascule automatique entre fournisseurs', 'openrouter/auto choisit un modèle pour chaque tâche'] },
		ollama: { name: 'Ollama', summary: 'Exécute des modèles ouverts sur votre propre matériel derrière une API locale, sur le même réseau Docker qu\'EDDI si vous le souhaitez.', why: ['Aucune connexion cloud nécessaire', 'Les données ne quittent jamais vos machines', 'Une commande pour télécharger un modèle'] },
		huggingface: { name: 'Hugging Face', summary: 'Inférence hébergée pour les modèles ouverts par identifiant de dépôt, acheminée vers des fournisseurs partenaires avec un seul token.', why: ['Modèles ouverts par identifiant de dépôt', 'Un seul token pour tous les fournisseurs', 'Aucune infrastructure à exploiter'] },
		jlama: { name: 'Jlama', summary: 'Un moteur d\'inférence en pur Java qui exécute de petits modèles dans la JVM d\'EDDI, sans aucun serveur de modèles.', why: ['Rien d\'autre à déployer', 'Modèles quantifiés pour une empreinte réduite', 'Fonctionne en air-gap une fois les poids en cache'] },
	},
	tips: {
		anthropicNoTemperature: 'Ne définissez pas <code>temperature</code>. Les modèles Claude actuels refusent une température autre que celle par défaut, et les outils de configuration d\'EDDI l\'omettent déjà.',
		openaiResponsesTools: 'OpenAI documente la Responses API pour l\'appel d\'outils sur Astra et 6.1 Sol, alors que le type <code>openai</code> d\'EDDI utilise Chat Completions. Testez les agents utilisant des outils sur ces modèles avant la production.',
		geminiSignature: 'Gemini 3 a besoin que sa thought signature lui soit renvoyée lors des appels d\'outils. EDDI le fait par défaut (<code>returnThinking</code> et <code>sendThinking</code> sont actifs pour le type <code>gemini</code>) ; laissez-les activés.',
		geminiVertexTools: 'Pour Gemini 3 avec des outils, utilisez <code>type: gemini</code> et non <code>gemini-vertex</code> : le chemin Vertex ne peut pas transporter la thought signature. <code>gemini-vertex</code> convient sans outils.',
		xaiUsRegion: 'Définissez <code>"region": "us"</code> pour l\'endpoint de xAI avec résidence des données aux États-Unis. Il ne sert que grok-4.7 et grok-4.6.',
		thinkingEcho: 'Ce fournisseur exige que le raisonnement du modèle soit renvoyé pendant les boucles d\'outils. Le preset d\'EDDI s\'en charge : laissez <code>returnThinking</code> et <code>sendThinking</code> à leurs valeurs par défaut.',
		kimiTemperature: 'Moonshot fixe la température de kimi-k2.7-code et kimi-k2.6 : ne définissez donc pas <code>temperature</code> pour ces modèles.',
		qwenRegions: 'Choisissez une région avec <code>"region": "intl"</code>, <code>"cn"</code> ou <code>"us"</code>. Pour un hôte Alibaba propre à un espace de travail, définissez plutôt <code>baseUrl</code>.',
		minimaxNoJson: 'EDDI n\'envoie jamais de format de réponse JSON à MiniMax. Si vous avez besoin de JSON, définissez <code>convertToObject</code> et décrivez la structure dans le prompt.',
		groqPreview: 'Groq classe certains modèles, dont qwen3.8-27b, en Preview : destinés à l\'évaluation et susceptibles d\'être retirés à bref délai.',
		bedrockGeo: 'Certains modèles Bedrock, dont Llama 4 Maverick, ne sont accessibles que via un profil d\'inférence inter-régions tel que <code>us.meta.llama4-maverick-17b-instruct-v1:0</code>.',
		ollamaThink: 'Les modèles de raisonnement réfléchissent avant de répondre, ce qui peut ressembler à un blocage dans un chat en streaming. Définissez <code>"think": "false"</code> pour des réponses immédiates, et donnez à la tâche un <code>timeout</code> généreux.',
		jlamaCache: 'Jlama s\'exécute dans la JVM d\'EDDI. Faites pointer <code>modelCachePath</code> vers un volume monté pour que les poids survivent aux redémarrages, et dimensionnez le pod pour le modèle plus le heap d\'EDDI.',
		localAirGap: 'Fonctionne entièrement hors ligne une fois le modèle téléchargé, ce qui convient aux déploiements isolés (air-gap).',
		cascadeTier: 'Un bon premier niveau dans une <a href="/features/model-cascading/">cascade de modèles</a> : rapide et peu coûteux, avec escalade vers un modèle plus grand uniquement lorsque la confiance est faible.',
		cascadeTop: 'Un dernier niveau solide pour une <a href="/features/model-cascading/">cascade de modèles</a>, atteint uniquement par les requêtes sur lesquelles un modèle moins cher hésite.',
		azureDeployment: 'Sur Azure OpenAI, <code>deploymentName</code> est le nom que vous avez donné au déploiement dans votre ressource Azure, et non le nom du modèle.',
	},
};

export default copy;
