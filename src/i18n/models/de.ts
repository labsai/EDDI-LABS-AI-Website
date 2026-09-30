/**
 * Model catalog copy, German. Keys match ./en.ts and src/data/models.ts.
 */
import type { ModelsCopy } from './en';

const copy: ModelsCopy = {
	models: {
		'claude-fable-5-1': {
			summary: 'Das leistungsfähigste allgemein verfügbare Modell von Anthropic, gebaut für anspruchsvolles Reasoning und lang laufende Agentenarbeit.',
			strengths: ['Agenten-Sessions, die stundenlang laufen', 'Mehrstufige Recherche', 'Arbeit mit Dokumenten, Tabellen und Folien', '1M-Token-Kontext mit 128K Ausgabe'],
			bestFor: ['Agenten mit langem Horizont', 'Tiefgehende Recherche', 'Analysen bis zum fertigen Dokument'],
		},
		'claude-opus-5-5': {
			summary: 'Die empfohlene Standardwahl von Anthropic für anspruchsvolle Arbeit: lang laufendes agentisches Programmieren und Wissensarbeit, mit stets aktivem adaptivem Denken.',
			strengths: ['Autonome Coding-Agenten über mehrere Stunden', 'Umfangreiches Refactoring', 'Bildlastige Workflows und Computer Use', '1M-Token-Kontext mit 128K Ausgabe'],
			bestFor: ['Komplexes agentisches Programmieren', 'Wissensarbeit im Unternehmen', 'Systems Engineering'],
		},
		'claude-sonnet-5-5': {
			summary: 'Die Balance aus Geschwindigkeit und Intelligenz von Anthropic für alltägliche Programmier-, Agenten- und Unternehmensarbeit, mit standardmäßig aktivem adaptivem Denken.',
			strengths: ['Schnelle Antworten', '1M-Token-Kontext mit 128K Ausgabe', 'Denken lässt sich auf die Zeit zwischen Tool-Aufrufen beschränken', 'Zuverlässige Tool-Nutzung'],
			bestFor: ['Codegenerierung', 'Datenanalyse', 'Content-Erstellung', 'Agenten mit Tools'],
		},
		'claude-haiku-4-5': {
			summary: 'Das schnellste und günstigste aktuelle Modell von Anthropic, mit einem 200K-Kontextfenster und optionalem Extended Thinking.',
			strengths: ['Geringste Latenz im Claude-Portfolio', 'Extended Thinking mit Token-Budget', 'Text- und Bildeingabe', 'Gut geeignet für Sub-Agenten-Aufgaben'],
			bestFor: ['Echtzeitanwendungen', 'Verarbeitung großer Volumen', 'Die erste Stufe einer Kaskade'],
		},
		'gpt-6': {
			summary: 'Die aktuelle Reasoning-Familie von OpenAI in drei Stufen: Astra für die schwierigste Arbeit, Sol für nahezu Astra-Ergebnisse zu geringeren Kosten, Luna für hohe Volumen.',
			strengths: ['1,05M-Token-Kontext und 128K Ausgabe auf jeder Stufe', 'Function Calling und strukturierte Ausgaben', 'Reasoning-Aufwand bis max', 'Text- und Bildeingabe'],
			bestFor: ['Astra: anspruchsvolles Reasoning und Recherche', 'Sol: komplexes Programmieren und professionelle Arbeit', 'Luna: fokussierte Aufgaben mit hohem Volumen'],
		},
		'gpt-5-6': {
			summary: 'Die vorherige Generation von OpenAI, die die Stufen Sol, Terra und Luna einführte: Flaggschiff, ausgewogen und am günstigsten.',
			strengths: ['1,05M-Token-Kontext und 128K Ausgabe', 'Reasoning-Aufwand von none bis max', 'Text- und Bildeingabe'],
			bestFor: ['Sol: komplexe professionelle Arbeit', 'Terra: Balance aus Leistung und Kosten', 'Luna: kostensensible Volumen'],
		},
		'gpt-oss': {
			summary: 'Die Open-Weight-Reasoning-Modelle von OpenAI mit Mixture-of-Experts-Architektur unter Apache 2.0: 120b passt auf eine 80-GB-GPU, 20b läuft auf Geräten mit 16 GB.',
			strengths: ['Apache-2.0-Lizenz', 'Function Calling und strukturierte Ausgaben', 'Einstellbarer Reasoning-Aufwand', 'Fine-Tuning möglich'],
			bestFor: ['Selbst gehosteter und On-Premises-Betrieb', 'Schnelle Inferenz auf Groq', 'Agenten mit Tool-Nutzung'],
		},
		'gemini-3-8-flash': {
			summary: 'Das aktuelle allgemein verfügbare Flash-Modell von Google, ausgerichtet auf Engineering mit langem Horizont, autonome Agenten und Unternehmens-Workflows bei Flash-Geschwindigkeit und -Kosten.',
			strengths: ['Text-, Bild-, Video-, Audio- und PDF-Eingabe', 'Function Calling und strukturierte Ausgaben', 'Denkstufen low, medium und high', '1M-Token-Kontext'],
			bestFor: ['Autonome Agenten', 'Unternehmens-Workflows', 'Multimodale Dokumente'],
		},
		'gemini-3-1-pro': {
			summary: 'Das aktuelle Pro-Modell von Google, in der Gemini API als Preview verfügbar, abgestimmt auf komplexes Reasoning, Software-Engineering und präzise mehrstufige Tool-Nutzung.',
			strengths: ['Text-, Bild-, Video-, Audio- und PDF-Eingabe', 'Effizientes Denken', 'Zuverlässige mehrstufige Tool-Ausführung', '1M-Token-Kontext'],
			bestFor: ['Komplexe Problemlösung', 'Agentisches Programmieren', 'Multimodales Verständnis'],
		},
		'gemini-3-5-flash-lite': {
			summary: 'Das günstigste 3.5-Modell von Google mit der geringsten Latenz, gebaut für Sub-Agenten-Arbeit mit hohem Durchsatz, Dokumenten-Parsing und einfache Extraktion.',
			strengths: ['Geringe Latenz und Kosten', 'Text-, Bild-, Video-, Audio- und PDF-Eingabe', 'Function Calling und Denken', '1M-Token-Kontext'],
			bestFor: ['Sub-Agenten mit hohem Volumen', 'Dokumenten-Parsing und Extraktion', 'Übersetzung'],
		},
		gemma: {
			summary: 'Die Open-Weight-Familie von Google, von Edge-Modellen bis zu einem dichten 31B- und einem 26B-Mixture-of-Experts-Modell in Gemma 4.',
			strengths: ['Offene Gewichte, Gemma 4 unter Apache 2.0', 'Function Calling für Agenten', 'Bildeingabe in jeder Größe', 'Läuft auf bescheidener Hardware'],
			bestFor: ['Betrieb auf Geräten und am Edge', 'Selbst gehostete Agenten', 'Fragebeantwortung und Zusammenfassungen'],
		},
		'grok-4-7': {
			summary: 'Das Frontier-Modell von xAI für Programmierung, agentische Aufgaben und Wissensarbeit, mit Text- und Bildeingabe und wählbarem Reasoning-Aufwand.',
			strengths: ['500K-Token-Kontext', 'Function Calling und strukturierte Ausgaben', 'Reasoning-Aufwand von low bis xhigh', 'Endpunkt mit Datenresidenz in den USA'],
			bestFor: ['Software-Engineering', 'Lange agentische Aufgaben', 'Professionelle Wissensarbeit'],
		},
		'deepseek-flash': {
			summary: 'Das aktuelle Flash-Modell von DeepSeek mit nativem Bildverständnis, einem 1M-Token-Kontext und standardmäßig aktivem Denken; die Gewichte stehen unter MIT-Lizenz.',
			strengths: ['1M-Token-Kontext, bis zu 384K Ausgabe', 'Tool-Aufrufe und JSON-Ausgabe', 'Bild- und Texteingabe', 'Offene Gewichte unter MIT'],
			bestFor: ['Kosteneffiziente Agenten', 'Coding-Agenten', 'Lange, eingabelastige Workloads'],
		},
		'deepseek-v4-pro': {
			summary: 'Das große V4-Pro-Modell von DeepSeek: über die API nur Text, mit 1M-Token-Kontext, Tool-Aufrufen und wählbarem Denkaufwand; die Gewichte stehen unter MIT-Lizenz.',
			strengths: ['1M-Token-Kontext, bis zu 384K Ausgabe', 'Denkaufwand low, high oder max', 'Tool-Aufrufe und JSON-Ausgabe', 'Offene Gewichte unter MIT'],
			bestFor: ['Code-Agenten', 'Tool-Nutzung und Aufgabenautomatisierung'],
		},
		'deepseek-r1-distill': {
			summary: 'Ein kleines offenes Reasoning-Modell: Qwen3-8B, trainiert auf der Chain of Thought von DeepSeek-R1, für den lokalen Einsatz.',
			strengths: ['Schrittweises Reasoning', 'Stark in Mathematik für seine Größe', 'Gewichte unter MIT-Lizenz'],
			bestFor: ['Lokale Reasoning-Aufgaben', 'Mathematik und Logik', 'Offline-Experimente'],
		},
		'kimi-k3': {
			summary: 'Das Flaggschiff von Moonshot AI mit 1M-Token-Kontext, nativem Bild- und Videoverständnis und stets aktivem Denken; die Gewichte sind veröffentlicht.',
			strengths: ['1M-Token-Kontext', 'Text-, Bild- und Videoeingabe', 'Tool Calling', 'Veröffentlichte Gewichte'],
			bestFor: ['Programmieren mit langem Horizont', 'Wissensarbeit', 'Tiefes Reasoning und Agenten-Workflows'],
		},
		'kimi-k2-7-code': {
			summary: 'Das spezialisierte Coding-Modell von Moonshot AI mit 256K-Kontext, stets aktivem Denken, Tool Calling und einer separaten Hochgeschwindigkeitsvariante.',
			strengths: ['256K-Token-Kontext', 'Text-, Bild- und Videoeingabe', 'Mehrstufiges Tool Calling', 'Hochgeschwindigkeitsvariante mit rund 180 Tokens pro Sekunde'],
			bestFor: ['Lange Programmieraufgaben', 'Agentisches Programmieren', 'Mathematik und Reasoning'],
		},
		'qwen-3-8': {
			summary: 'Die Qwen-3.8-Linie von Alibaba: Max ist das Flaggschiff, und Max wie Flash bieten 1M-Token-Kontext, Bild- und Videoeingabe sowie hybrides Denken.',
			strengths: ['1M-Token-Kontext, 131K Ausgabe', 'Text-, Bild- und Videoeingabe', 'Function Calling und strukturierte Ausgaben', 'Regionen u. a. Frankfurt und Virginia'],
			bestFor: ['Programmieren mit langem Horizont', 'Professionelle Arbeit in Recht, Finanzen und Design', 'Multimodale Agenten'],
		},
		'qwen-3-7-plus': {
			summary: 'Qwen 3.7 Plus und Flash bieten 1M-Token-Kontext, Bild- und Videoeingabe, hybrides Denken und Function Calling für multimodale Agentenarbeit.',
			strengths: ['1M-Token-Kontext, 131K Ausgabe', 'Text-, Bild- und Videoeingabe', 'Function Calling', 'Bildschirm- und GUI-Verständnis (Plus)'],
			bestFor: ['Multimodale Agenten', 'Visuelle Codegenerierung', 'Such-Agenten (Flash)'],
		},
		'glm-5-3': {
			summary: 'Das Flaggschiff von Z.ai für Software-Engineering und Agentenarbeit, mit 1M-Token-Kontext, bis zu 128K Ausgabe und veröffentlichten Gewichten; die Flash-Varianten ergänzen Bild- und Videoeingabe.',
			strengths: ['1M-Token-Kontext, 128K Ausgabe', 'Function Calling mit Tool-Streaming', 'Denkaufwand low, high oder max', 'Veröffentlichte Gewichte'],
			bestFor: ['Coding-Agenten', 'Lange agentische Aufgaben', 'Sicherheitsreview von Code'],
		},
		'minimax-m3': {
			summary: 'Das nativ multimodale Coding- und Agentenmodell von MiniMax, mit bis zu 1M Tokens Kontext und Denken zwischen den Tool-Aufrufen; die Gewichte sind veröffentlicht.',
			strengths: ['Bis zu 1M-Token-Kontext (512K garantiert)', 'Denken zwischen Tool-Aufrufen', 'Text-, Bild- und Videoeingabe', 'Veröffentlichte Gewichte'],
			bestFor: ['Coding-Assistenten', 'Lange Agentenaufgaben und Workflow-Automatisierung', 'Analyse langer Videos'],
		},
		'mistral-large': {
			summary: 'Das Open-Weight-Flaggschiff von Mistral mit Mixture-of-Experts-Architektur (41B aktive, 675B Parameter insgesamt) und Bildverständnis, unter Apache 2.0.',
			strengths: ['Apache-2.0-Lizenz', 'Bildverständnis', 'Mehr als 40 Sprachen', 'Function Calling und strukturierte Ausgaben'],
			bestFor: ['Mehrsprachige Assistenten', 'Dokumentenanalyse', 'Workflows mit Tool-Nutzung'],
		},
		'mistral-medium': {
			summary: 'Ein dichtes multimodales 128B-Modell, das Instruktionsbefolgung, Reasoning und Programmierung vereint, mit pro Anfrage einstellbarem Reasoning-Aufwand.',
			strengths: ['Reasoning-Aufwand pro Anfrage', 'Gebaut für Agenten und Programmierung', 'Function Calling und JSON-Ausgabe', 'Auf vier GPUs selbst hostbar'],
			bestFor: ['Agentische Workflows', 'Coding-Agenten', 'Lange Dokumente'],
		},
		'mistral-small': {
			summary: 'Ein Open-Weight-Modell mit Mixture-of-Experts-Architektur (rund 6B aktive Parameter), das Instruct, Reasoning und Programmierung vereint, mit Bildeingabe.',
			strengths: ['Instruct, Reasoning und Programmierung in einem Modell', 'Zuschaltbares Reasoning', 'Bildeingabe', 'Apache-2.0-Lizenz'],
			bestFor: ['Kostensensible Agenten', 'Allgemeiner Chat mit optionalem Reasoning', 'Bildverständnis'],
		},
		ministral: {
			summary: 'Kleine Open-Weight-Modelle in drei Größen, jeweils mit Base-, Instruct- und Reasoning-Variante und Bildverständnis, für den lokalen und Edge-Einsatz.',
			strengths: ['Gebaut für den lokalen Betrieb', 'Reasoning-Varianten in jeder Größe', 'Bildverständnis', 'Apache-2.0-Lizenz'],
			bestFor: ['Edge- und On-Premises-Betrieb', 'Günstige Aufgaben mit hohem Volumen', 'Lokale Agenten'],
		},
		codestral: {
			summary: 'Das Coding-Modell von Mistral für Aufgaben mit geringer Latenz und hoher Frequenz wie Fill-in-the-Middle und Codegenerierung.',
			strengths: ['Fill-in-the-Middle', 'Vervollständigung mit geringer Latenz', 'Function Calling', 'Strukturierte Ausgaben'],
			bestFor: ['Code-Vervollständigung', 'Codegenerierung'],
		},
		'llama-4': {
			summary: 'Die nativ multimodalen Mixture-of-Experts-Modelle von Meta mit 17B aktiven Parametern: Scout (109B insgesamt) und Maverick (400B insgesamt).',
			strengths: ['Text- und Bildeingabe', 'Effizienz durch Mixture-of-Experts', '12 Sprachen', 'Langer Kontext (1M für Maverick auf Bedrock)'],
			bestFor: ['Multimodale Assistenten', 'Visuelles Reasoning', 'Lange Dokumente'],
		},
		'llama-3-3-70b': {
			summary: 'Das 70B-Textmodell von Meta für mehrsprachige Dialoge in acht Sprachen, mit Tool-Nutzung.',
			strengths: ['Acht Sprachen', 'Tool-Nutzung', '128K Kontext'],
			bestFor: ['Selbst gehosteter allgemeiner Chat', 'Mehrsprachige Assistenten', 'Generierung synthetischer Daten'],
		},
		'llama-3-2-1b': {
			summary: 'Ein mehrsprachiges Modell mit 1,2B Parametern für eingeschränkte Umgebungen und Geräte, klein genug, um innerhalb der EDDI-JVM zu laufen.',
			strengths: ['Läuft auf einer CPU', '128K Kontext', 'Acht Sprachen'],
			bestFor: ['Offline-Inferenz im selben Prozess', 'Umschreiben von Anfragen und Prompts', 'Kurze Zusammenfassungen'],
		},
		'amazon-nova': {
			summary: 'Die multimodalen Modelle von Amazon auf Bedrock für Text-, Bild- und Videoeingabe: Pro ist die ausgewogene Stufe, Lite die günstige.',
			strengths: ['Text-, Bild- und Videoeingabe', '300K-Token-Kontext', 'Tool-Nutzung', 'Prompt Caching'],
			bestFor: ['Fragen und Antworten zu Dokumenten und Bildern', 'Videoverständnis', 'Agenten, die innerhalb von AWS bleiben'],
		},
		'cohere-command-a': {
			summary: 'Das 111B-Unternehmensmodell von Cohere mit Fokus auf Tool-Nutzung, Retrieval und 23 Sprachen; Oracle bietet zudem Reasoning- und Vision-Varianten an.',
			strengths: ['Mehrstufige Tool-Nutzung', 'Retrieval-Augmented Generation', '23 Sprachen', '256K-Token-Kontext'],
			bestFor: ['Enterprise-RAG', 'Mehrsprachige Agenten', 'Betrieb auf Oracle Cloud'],
		},
		'phi-4-mini': {
			summary: 'Das offene 3,8B-Modell von Microsoft für speicherbeschränkte, latenzkritische Arbeit sowie mathematisches und logisches Reasoning.',
			strengths: ['Läuft in eingeschränkten Umgebungen', 'Mathematik und Logik', 'Function Calling', 'MIT-Lizenz'],
			bestFor: ['Lokale und Edge-Inferenz', 'Latenzkritische Anwendungen', 'Leichtes Tool Calling'],
		},
	},
	hosts: {
		bedrock: { name: 'Amazon Bedrock', summary: 'Verwalteter AWS-Zugang zu Modellen von Anthropic, Meta, Amazon, OpenAI, Mistral und weiteren.', why: ['Anbieter sehen keine Prompts oder Antworten von Kunden', 'Privates Netzwerk über VPC und PrivateLink', 'Inferenz innerhalb einer Region oder regionsübergreifend für Datenresidenz'] },
		vertex: { name: 'Google Vertex AI', summary: 'Die KI-Plattform von Google Cloud, inzwischen auch Gemini Enterprise Agent Platform genannt, für Gemini- und Model-Garden-Modelle.', why: ['Regionale Endpunkte halten die Verarbeitung in einer Jurisdiktion', 'VPC Service Controls zur Netzwerkisolation', 'Authentifizierung über Google-Cloud-Zugangsdaten'] },
		azure: { name: 'Azure OpenAI', summary: 'OpenAI-Modelle in Ihrem Azure-Abonnement, inzwischen Teil von Microsoft Foundry, aufgerufen über den Deployment-Namen.', why: ['Data-Zone-Deployments halten die Verarbeitung in der EU, den USA oder APAC', 'Private Endpunkte im Azure-Backbone', 'Provisioned Throughput für reservierte Kapazität'] },
		oracle: { name: 'Oracle OCI Generative AI', summary: 'Verwalteter Oracle-Cloud-Dienst für Cohere, Meta Llama und weitere Modelle, on demand oder auf dedizierten Clustern.', why: ['Dedizierte KI-Cluster', 'Private Endpunkte und Datenisolation', 'Gesteuert über OCI-IAM-Richtlinien'] },
		groq: { name: 'Groq', summary: 'Eine Inferenz-Cloud, die offene Modelle auf Groqs eigenen LPU-Chips ausführt, über eine OpenAI-kompatible API.', why: ['Sehr geringe Latenz', 'Offene Modelle wie gpt-oss und Qwen', 'Ein Schlüssel, keine Infrastruktur'] },
		openrouter: { name: 'OpenRouter', summary: 'Eine API für Hunderte Modelle vieler Anbieter, mit einem Auto-Router, der pro Anfrage ein Modell wählt.', why: ['Ein Schlüssel für viele Hersteller', 'Automatischer Fallback zwischen Anbietern', 'openrouter/auto wählt für jede Aufgabe ein Modell'] },
		ollama: { name: 'Ollama', summary: 'Führt offene Modelle auf Ihrer eigenen Hardware hinter einer lokalen API aus, auf Wunsch im selben Docker-Netzwerk wie EDDI.', why: ['Keine Cloud-Verbindung nötig', 'Daten verlassen Ihre Maschinen nie', 'Ein Befehl, um ein Modell zu laden'] },
		huggingface: { name: 'Hugging Face', summary: 'Gehostete Inferenz für offene Modelle über die Repository-ID, weitergeleitet an Partneranbieter mit einem einzigen Token.', why: ['Offene Modelle über die Repository-ID', 'Ein Token für alle Anbieter', 'Keine Infrastruktur zu betreiben'] },
		jlama: { name: 'Jlama', summary: 'Eine reine Java-Inferenz-Engine, die kleine Modelle innerhalb der EDDI-JVM ausführt, ganz ohne Modellserver.', why: ['Nichts weiter zu deployen', 'Quantisierte Modelle für einen kleinen Footprint', 'Funktioniert air-gapped, sobald die Gewichte zwischengespeichert sind'] },
	},
	tips: {
		anthropicNoTemperature: 'Lassen Sie <code>temperature</code> ungesetzt. Aktuelle Claude-Modelle lehnen eine vom Standard abweichende Temperatur ab, und die Setup-Tools von EDDI lassen sie bereits weg.',
		openaiResponsesTools: 'OpenAI dokumentiert für Tool Calling auf Astra und 6.1 Sol die Responses API, während der <code>openai</code>-Typ von EDDI Chat Completions verwendet. Testen Sie Agenten mit Tools auf diesen Modellen vor dem Produktiveinsatz.',
		geminiSignature: 'Gemini 3 benötigt bei Tool-Aufrufen die Rückgabe seiner Thought Signature. EDDI erledigt das standardmäßig (<code>returnThinking</code> und <code>sendThinking</code> sind für den <code>gemini</code>-Typ aktiv); lassen Sie beide aktiviert.',
		geminiVertexTools: 'Verwenden Sie für Gemini 3 mit Tools <code>type: gemini</code>, nicht <code>gemini-vertex</code>: Der Vertex-Pfad kann die Thought Signature nicht übertragen. Ohne Tools ist <code>gemini-vertex</code> unproblematisch.',
		xaiUsRegion: 'Setzen Sie <code>"region": "us"</code> für den US-Endpunkt von xAI mit Datenresidenz. Er bedient nur grok-4.7 und grok-4.6.',
		thinkingEcho: 'Dieser Anbieter verlangt, dass das Reasoning des Modells in Tool-Schleifen zurückgesendet wird. Das Preset von EDDI erledigt das für Sie: Lassen Sie <code>returnThinking</code> und <code>sendThinking</code> auf ihren Standardwerten.',
		kimiTemperature: 'Moonshot legt die Temperatur bei kimi-k2.7-code und kimi-k2.6 fest, setzen Sie dort also kein <code>temperature</code>.',
		qwenRegions: 'Wählen Sie eine Region mit <code>"region": "intl"</code>, <code>"cn"</code> oder <code>"us"</code>. Für einen workspace-spezifischen Alibaba-Host setzen Sie stattdessen <code>baseUrl</code>.',
		minimaxNoJson: 'EDDI sendet nie ein JSON-Antwortformat an MiniMax. Wenn Sie JSON benötigen, setzen Sie <code>convertToObject</code> und beschreiben Sie die Struktur im Prompt.',
		groqPreview: 'Groq kennzeichnet einige Modelle, darunter qwen3.8-27b, als Preview: zur Evaluierung gedacht und möglicherweise kurzfristig zurückgezogen.',
		bedrockGeo: 'Einige Bedrock-Modelle, darunter Llama 4 Maverick, sind nur über ein regionsübergreifendes Inferenzprofil wie <code>us.meta.llama4-maverick-17b-instruct-v1:0</code> erreichbar.',
		ollamaThink: 'Reasoning-Modelle denken nach, bevor sie antworten, was in einem Streaming-Chat wie ein Hänger wirken kann. Setzen Sie <code>"think": "false"</code> für sofortige Antworten und geben Sie dem Task einen großzügigen <code>timeout</code>.',
		jlamaCache: 'Jlama läuft innerhalb der EDDI-JVM. Richten Sie <code>modelCachePath</code> auf ein eingebundenes Volume, damit die Gewichte Neustarts überstehen, und dimensionieren Sie den Pod für das Modell plus den Heap von EDDI.',
		localAirGap: 'Läuft nach dem Download des Modells vollständig offline und eignet sich daher für Air-Gapped-Umgebungen.',
		cascadeTier: 'Eine gute erste Stufe in einer <a href="/features/model-cascading/">Modell-Kaskade</a>: schnell und günstig, mit Eskalation an ein größeres Modell nur bei niedriger Konfidenz.',
		cascadeTop: 'Eine starke letzte Stufe für eine <a href="/features/model-cascading/">Modell-Kaskade</a>, die nur die Anfragen erreichen, bei denen sich ein günstigeres Modell unsicher ist.',
		azureDeployment: 'Bei Azure OpenAI ist <code>deploymentName</code> der Name, den Sie dem Deployment in Ihrer Azure-Ressource gegeben haben, nicht der Modellname.',
	},
};

export default copy;
