/**
 * Integrationskatalog, deutsche Texte. Schlüssel und Struktur folgen en.ts.
 * Mit HTML markierte Strings werden per set:html gerendert.
 */
import type { IntegrationCategory } from '../../data/integrations';
import { MCP_TOOLS, VECTOR_STORES } from '../stats';
import type { IntegrationsCopy } from './en';

const copy: IntegrationsCopy = {
	ui: {
		title: 'Integrationen',
		metaTitle: 'EDDI-Integrationen: Slack, MCP, OpenAPI, SAP, Vektorspeicher und Kubernetes',
		description:
			'Wie EDDI sich mit Slack, Open WebUI, Keycloak, MCP und A2A, jeder REST-API über OpenAPI, SAP über dessen APIs, sechs Vektorspeichern, Kubernetes, OpenShift und Ollama verbindet. Jede Seite zeigt die echte Konfiguration.',
		heroTitle: 'EDDI',
		heroHighlight: 'Integrationen',
		heroDesc:
			'Kanäle, Identität, Agentenprotokolle, Unternehmenssysteme, Vektorspeicher und Infrastruktur. Jede Seite zeigt, was Sie bekommen, wie es in EDDI funktioniert, die echte Konfiguration und wie die Integration gesteuert wird: Freigaben, das Audit-Protokoll und der Secrets Vault.',
		filterLabel: 'Integrationen nach Kategorie filtern',
		filterAll: 'Alle',
		searchLabel: 'Integrationen durchsuchen',
		searchPlaceholder: 'Suchen, zum Beispiel Slack, SAP oder pgvector',
		noResults: 'Keine passende Integration. Versuchen Sie einen anderen Begriff oder setzen Sie den Filter zurück.',
		notCoveredNote:
			'EDDI liefert keine Kanäle für Microsoft Teams, Telegram, WhatsApp oder Discord, versendet selbst keine E-Mails und hat keine generischen eingehenden Webhooks. Alles mit einer API ist trotzdem erreichbar, über den <a href="/integrations/openapi/">OpenAPI-Import</a>, HTTP-Aufrufe oder <a href="/integrations/mcp-client/">MCP</a>.',
		backToCatalog: 'Alle Integrationen',
		whatYouGet: 'Was Sie bekommen',
		howItWorks: 'So funktioniert es in EDDI',
		configTitle: 'Konfiguration',
		configDesc: 'Aus der EDDI-Dokumentation übernommen. Platzhalter wie your-agent-id ersetzen Sie durch Ihre eigenen Werte.',
		governanceTitle: 'Governance',
		goodToKnowTitle: 'Gut zu wissen',
		linksTitle: 'Dokumentation und Leitfäden',
		docsLink: 'Doku',
		guidesLabel: 'Leitfaden',
		relatedTitle: 'Verwandte Integrationen',
		getStarted: 'Loslegen',
		modelsLinkText: 'Modellkatalog durchsuchen',
		solutionsTitle: 'Sie möchten es gebaut und betrieben haben?',
		solutionsDesc: 'EDDI Solutions baut und pflegt Konnektoren, betreibt EDDI als verwaltete oder gemeinsam betriebene Instanz und unterstützt Sie in Ihrer eigenen Cloud oder On-Premises.',
		solutionsBtn: 'EDDI Solutions kontaktieren',
		sourcesDesc: 'Konfiguration und Verhalten auf dieser Seite folgen der EDDI-Dokumentation, geprüft am {date}. Feldnamen und Standardwerte können sich zwischen Releases ändern. Bestätigen Sie sie daher in der Dokumentation Ihrer Version.',
		copy: 'Kopieren',
		copied: 'Kopiert',
		pageTitle: '{name} in EDDI',
		pageDescription: '{name}: {summary}',
		ctaTitle: 'Ihr System fehlt?',
		ctaDesc: 'Beschreiben Sie es uns oder starten Sie über den <a href="/integrations/openapi/">OpenAPI</a>-Weg. Wenn es eine API hat, kann ein Agent sie aufrufen, mit Freigaben und Audit-Trail.',
	},
	categories: {
		channels: 'Kanäle',
		identity: 'Identität und Sicherheit',
		protocols: 'Agentenprotokolle',
		enterprise: 'Unternehmenssysteme',
		data: 'Daten und RAG',
		infrastructure: 'Infrastruktur',
	},
	integrations: {
		slack: {
			summary: 'Gesteuerte KI-Agenten in Slack: Erwähnungen, Direktnachrichten, Threads, Gruppendiskussionen als Stream in einem Thread und Block-Kit-Freigabekarten mit den Schaltflächen Approve und Reject.',
			gets: [
				'Agenten, die auf @-Erwähnungen und Direktnachrichten antworten, mit Folgefragen im Thread',
				'Trigger-Schlüsselwörter, die eine Nachricht an einen bestimmten Agenten oder an eine Multi-Agenten-Gruppendiskussion leiten',
				'Gruppendiskussionen, die live in einen Thread gestreamt werden',
				'Freigabekarten in Slack für pausierte Turns, Tool-Aufrufe und Gruppenphasen, mit einer Freigeber-Allowlist',
				'Mehrere Slack-Workspaces an einer EDDI-Instanz',
			],
			steps: [
				'Eine Slack-App anlegen und die in der Doku genannten Bot-Token-Scopes hinzufügen (<code>chat:write</code>, <code>app_mentions:read</code>, die <code>history</code>- und <code>im:*</code>-Scopes).',
				'Bot-Token und Signing Secret im EDDI Secrets Vault ablegen und als <code>${vault:...}</code> referenzieren.',
				'Eine Kanal-Integration anlegen, die den Slack-Kanal einem Standard-Agenten zuordnet und optional Gruppen hinter Trigger-Schlüsselwörtern wie <code>panel:</code>.',
				'Die Request URL auf <code>https://&lt;your-eddi-host&gt;/integrations/slack/events</code> setzen und <code>app_mention</code>, <code>message.im</code> und <code>message.channels</code> abonnieren. Das als Letztes tun: Slack prüft die URL sofort.',
				'Für Freigaben die Interactivity Request URL auf <code>/integrations/slack/interactive</code> setzen und die Freigeber in <code>hitlApproverUserIds</code> eintragen.',
			],
			captions: [
				'Zugangsdaten gehören in den Vault, nicht in die Agenten- oder Kanalkonfiguration.',
				'Eine Kanal-Integration mit Standard-Agent, einer Gruppe hinter Trigger-Schlüsselwörtern und den Freigabe-Einstellungen in platformConfig.',
			],
			governance: [
				'Freigabekarten tragen die Schaltflächen Approve und Reject. Nur Slack-Nutzer aus <code>hitlApproverUserIds</code> können entscheiden. Ohne diese Liste werden keine Schaltflächen angezeigt und interaktive Entscheidungen abgelehnt (fail-closed).',
				'Eine Tool-Aufruf-Karte zeigt den Tool-Namen und seine geschwärzten, gekürzten Argumente, sodass die freigebende Person sieht, was sie freigibt. In Version 1 genehmigen oder lehnen die Schaltflächen den gesamten Stapel ab.',
				'Jede Entscheidung wird <code>slack:&lt;userId&gt;</code> zugeordnet und im Audit-Protokoll festgehalten.',
				'Eingehende Ereignisse werden mit dem Signing Secret (HMAC-SHA256) und Replay-Schutz geprüft. Die Secrets selbst bleiben im Vault.',
			],
			goodToKnow: [
				'Slack ist die einzige Chat-Plattform eines Drittanbieters, für die EDDI einen Kanal mitliefert. Was nicht enthalten ist, steht im Hinweis auf der Katalogseite.',
				'Ein optionaler Beobachtungsmodus lässt ein Ziel normalen Kanalverkehr sehen, hinter einem Trigger, einer Abkühlzeit und täglichen Antwort- und Kostenobergrenzen. Diese Obergrenzen gelten pro EDDI-Knoten.',
			],
		},
		'open-webui': {
			summary: 'EDDI stellt eine OpenAI-kompatible /v1-API bereit, die deployte Agenten als Modelle darstellt, sodass Open WebUI, die OpenAI-SDKs, LangChain und LiteLLM mit ihnen sprechen können.',
			gets: [
				'Deployte EDDI-Agenten im Modell-Dropdown von Open WebUI',
				'Chat Completions mit Streaming und Angabe der Token-Nutzung',
				'Eine EDDI-Konversation pro Chat, sodass Gedächtnis und Behavior Rules über alle Turns bestehen bleiben',
				'Eine zustandslose Variante (eine Modell-ID mit <code>:stateless</code>) für Einzelaufrufe wie die Titelgenerierung',
			],
			steps: [
				'Den Adapter mit <code>EDDI_OPENAI_COMPAT_ENABLED=true</code> aktivieren und einen API-Schlüssel setzen. Standardmäßig ist er deaktiviert.',
				'Einen Agenten in EDDI deployen. Er erscheint in <code>GET /v1/models</code>.',
				'Open WebUI (oder ein SDK) mit demselben API-Schlüssel auf <code>http://&lt;eddi&gt;:7070/v1</code> zeigen lassen.',
				'In Open WebUI <code>ENABLE_FORWARD_USER_INFO_HEADERS</code> einschalten. Ohne diese Option teilen sich alle Chatfenster eine EDDI-Konversation.',
				'Den Agenten in der Modellliste auswählen und chatten.',
			],
			captions: [
				'Ein produktionsnaher Compose-Auszug aus der EDDI-Doku. Den Beispiel-API-Schlüssel ändern.',
				'Den Endpunkt von der Shell aus prüfen. EDDI_API_KEY auf denselben Wert wie in der Compose-Datei setzen.',
			],
			governance: [
				'Die API hat eine eigene API-Schlüssel-Authentifizierung und ist aus, bis Sie sie aktivieren. EDDI verweigert den Start in der einen Kombination, die das Anlegen von Konversationen für jeden offen ließe, der den Port erreicht.',
				'Der Agent behält seine eigenen Freigabe-Schranken und seinen Audit-Trail. Eine Anfrage über /v1 ist eine gewöhnliche EDDI-Konversation.',
				'Ein gemeinsamer API-Schlüssel plus Nutzer-Header delegiert die Identität an Open WebUI als vertrauenswürdigen Proxy. Behandeln Sie den Schlüssel wie jedes geteilte Secret und rotieren Sie ihn.',
			],
			goodToKnow: [
				'Nur einzelne Agenten erscheinen als Modelle, keine Multi-Agenten-Gruppen.',
				'Quick Replies und Schaltflächen werden als Markdown-Text dargestellt, nicht als interaktive Bedienelemente.',
				'Tool-Aufrufe werden nicht an den Client zurückgegeben. EDDI führt seine Tools in der eigenen Pipeline aus, und die Tool-Aktivität bleibt im Audit-Protokoll sichtbar.',
			],
		},
		'web-chat': {
			summary: 'Eine anpassbare React-Chat-Oberfläche, die EDDI selbst ausliefert, mit Streaming-Antworten, Markdown, Quick Replies und Rückgängig, die Sie direkt öffnen oder in eine Seite einbetten können.',
			gets: [
				'Eine Chat-Seite für jeden deployten Agenten unter /chat/{environment}/{agentId}',
				'Token-weises Streaming, reichhaltiges Markdown, Code-Hervorhebung und LaTeX-Formeln',
				'Dunkles und helles Design, Quick-Reply-Schaltflächen sowie Rückgängig und Wiederholen',
				'URL-Parameter zum Ausblenden von Bedienelementen und zum Setzen des Titels, für ein schlankes eingebettetes Widget',
				'Ein Demo-Modus, der kein Backend braucht',
			],
			steps: [
				'EDDI starten. Die Chat-Oberfläche steckt im EDDI-Image und ist im Installer enthalten.',
				'<code>/chat/&lt;environment&gt;/&lt;agentId&gt;</code> auf Ihrem EDDI-Host öffnen.',
				'Mit URL-Parametern wie <code>theme</code>, <code>title</code>, <code>hideUndo</code> und <code>hideNewConversation</code> anpassen.',
				'Zum Einbetten dieselbe URL in einem iframe auf Ihrer Seite verwenden.',
			],
			captions: [
				'Die URL-Muster, die die Chat-Oberfläche bedient.',
				'Ein eingebettetes Widget aus der README der Chat-Oberfläche. Die Anzeigeparameter nach Bedarf kombinieren.',
			],
			governance: [
				'Der Chat nutzt dieselbe Konversations-API wie jeder andere Client, sodass Behavior Rules, Freigabe-Schranken und das Audit-Protokoll unverändert gelten.',
				'Bei aktiver Authentifizierung braucht das Widget ein Access Token für den angemeldeten Nutzer, und das Backend prüft es bei jedem Aufruf.',
				'Behandeln Sie jeden von einem Agenten erzeugten Text als nicht vertrauenswürdige Ausgabe. Die Chat-Oberfläche rendert Markdown vom Agenten.',
			],
			goodToKnow: [
				'Standardmäßig antwortet EDDI mit einer Richtlinie, die das Einbetten in Frames verbietet. Ein Browser zeigt den Chat daher nicht in einer anderen Seite an, bis der Betreiber diesen Origin erlaubt. Die Frame-Einstellungen Ihrer Version stehen in der README der Chat-Oberfläche.',
			],
		},
		'keycloak-oidc': {
			summary: 'OpenID-Connect-Authentifizierung vor EDDI schalten, mit Keycloak oder einem anderen OIDC-Anbieter, mit Rollen für Admins, Editoren, Nutzer, Betrachter und Freigeber.',
			gets: [
				'Anmeldung am Manager und an der API über Ihren Identity Provider',
				'Rollen: <code>eddi-admin</code>, <code>eddi-editor</code>, <code>eddi-user</code>, <code>eddi-viewer</code> und <code>eddi-approver</code> für Freigabeentscheidungen',
				'Ein fertiger <code>eddi</code>-Realm, den der Installer in Keycloak importiert',
				'Aufrufe im Namen des angemeldeten Nutzers, sodass der Audit-Trail eine echte Person nennt',
			],
			steps: [
				'Den Installer mit <code>--with-auth</code> ausführen. Er startet Keycloak und importiert beim ersten Start den <code>eddi</code>-Realm.',
				'In der Keycloak-Admin-Konsole ein Passwort für den Nutzer <code>eddi</code> setzen. Der mitgelieferte Realm hat keines.',
				'Am Manager anmelden. Den Personen die nötigen Rollen geben und Freigeber zu <code>eddi-approver</code> hinzufügen.',
				'Bei einem bestehenden Identity Provider die <code>QUARKUS_OIDC_*</code>-Variablen setzen (Tenant aktiviert, Auth-Server-URL, Client-ID, Client Secret).',
				'In einem HTTP-Aufruf <code>${caller:token}</code> verwenden, um eine API mit dem eigenen Token des angemeldeten Nutzers statt mit einem gemeinsamen Credential aufzurufen.',
			],
			captions: [
				'Installer-Option, die Keycloak hinzufügt.',
				'Umgebungsvariablen für einen externen OIDC-Anbieter, aus der EDDI-Doku.',
			],
			governance: [
				'Im Produktionsmodus verweigert EDDI den Start mit deaktiviertem OIDC, sofern Sie nicht ausdrücklich verzichten. Eine offene Management-API ist also eine Entscheidung, kein Versehen.',
				'Freigabe-Endpunkte erfordern die Rolle <code>eddi-approver</code> oder den Eigentümer bzw. einen <code>eddi-admin</code>.',
				'Mit <code>${caller:token}</code> erfasst der Audit-Trail den echten Nutzer. Ein gemeinsames statisches Credential würde jede Aktion in einem einzigen Principal zusammenfallen lassen.',
			],
			goodToKnow: [
				'Die Authentifizierung ist optional und standardmäßig aus. Keycloak ist das, was der Installer bereitstellt. Andere OIDC-Anbieter nutzen dieselben Einstellungen, und manche Details (etwa der angegebene Token-Endpunkt für A2A) setzen Keycloak-Pfade voraus, sofern Sie sie nicht festlegen.',
				'Der mitgelieferte Realm-Import läuft nur einmal. Spätere Änderungen am JSON erreichen ein laufendes Keycloak nicht.',
			],
		},
		'secrets-vault': {
			summary: 'Ein eingebauter Secrets Vault mit Envelope-Verschlüsselung. Die Konfiguration referenziert Secrets als ${vault:keyName}, und der Wert landet nie in Agentenkonfigurationen, Exporten oder Logs.',
			gets: [
				'<code>${vault:keyName}</code>-Referenzen in der Konfiguration für LLM, HTTP-Aufrufe, MCP und RAG',
				'AES-256-GCM-Envelope-Verschlüsselung mit einem Datenschlüssel pro Tenant',
				'Grants pro Agent: welche Agenten welches Secret verwenden dürfen',
				'Secrets werden aus Konfigurationsexporten entfernt und in Logs geschwärzt',
			],
			steps: [
				'Den Master-Key des Vaults setzen (<code>EDDI_VAULT_MASTER_KEY</code>). Der Installer erzeugt einen für Sie. Ohne Schlüssel ist der Vault deaktiviert.',
				'Ein Secret mit <code>PUT /secretstore/secrets/{tenantId}/{keyName}</code> oder über den Manager speichern.',
				'In der Konfiguration als <code>${vault:keyName}</code> referenzieren.',
				'EDDI löst die Referenz zur Laufzeit auf. Der Klartext wird nicht im Konversationsgedächtnis gespeichert.',
				'<code>allowedAgents</code> auf die Agenten eingrenzen, die das Secret brauchen. Die Prüfung läuft beim Deployment eines Agenten.',
			],
			captions: [
				'Ein Secret speichern. Die Antwort gibt den Wert nie zurück.',
				'Das Secret in einer LLM-Task per Namen referenzieren.',
				'Ändern, wer ein Secret verwenden darf, ohne seinen Wert anzufassen.',
			],
			governance: [
				'Grants werden standardmäßig beim Deployment durchgesetzt: Ein Agent, der ein Secret referenziert, für das er keinen Grant hat, wird nicht deployt.',
				'Eine Vault-Referenz, die über Konversationsdaten eintrifft, etwa als Nutzereingabe oder Modellantwort, wird abgelehnt statt aufgelöst.',
				'Klartext wird im Anfragedatensatz, in der Freigabe-Vorschau und in der Request-Logzeile geschwärzt.',
				'Bei aktiver Authentifizierung liegen die Vault-Endpunkte hinter der Rolle <code>eddi-admin</code>.',
			],
			goodToKnow: [
				'EDDI hat keinen nativen Client für HashiCorp Vault, AWS oder Azure. Unter Kubernetes kann der External Secrets Operator das Kubernetes-Secret <code>eddi-secrets</code> (das den Vault-Master-Key enthält) aus HashiCorp Vault, AWS Secrets Manager oder Azure Key Vault synchronisieren. Die einzelnen Secrets liegen weiterhin im EDDI-Vault.',
				'Geht der Master-Key verloren, sind die verschlüsselten Secrets nicht wiederherstellbar. Sichern Sie ihn.',
			],
		},
		'mcp-server': {
			summary: `EDDI aus Claude Desktop, Cursor, VS Code und anderen MCP-Clients steuern. EDDI stellt ${MCP_TOOLS} MCP-Tools über Streamable HTTP für Konversationen und Administration bereit.`,
			gets: [
				`${MCP_TOOLS} Tools: Agenten auflisten und ansprechen, anlegen und deployen, Gruppen und Zeitpläne verwalten und mehr`,
				'Ein einziger Endpunkt, <code>/mcp</code>, über Streamable HTTP',
				'Funktioniert mit Clients, die direkt HTTP sprechen, und über eine Bridge auch mit reinen stdio-Clients',
				'Rollenbasierter Zugriff bei aktiver Authentifizierung',
			],
			steps: [
				'EDDI starten. Der MCP-Endpunkt ist <code>http://localhost:7070/mcp</code>.',
				'EDDI zu Ihrem MCP-Client hinzufügen. HTTP-fähige Clients verwenden die URL direkt.',
				'Für reine stdio-Clients wie Claude Desktop die <code>mcp-remote</code>-Bridge wie gezeigt verwenden.',
				'Den Assistenten bitten, Agenten aufzulisten, eine Konversation zu starten oder einen Agenten anzulegen. Der dokumentierte Ablauf ist <code>list_agents</code>, <code>create_conversation</code>, <code>talk_to_agent</code>.',
				'Bei aktivem OIDC dem Client ein Bearer-Token geben.',
			],
			captions: [
				'Für Clients mit nativem HTTP-Transport.',
				'Für reine stdio-Clients. Unter Windows den Befehl mit cmd /c umschließen, falls npx nicht im PATH liegt.',
			],
			governance: [
				'Schreibende Tools wie <code>setup_agent</code> und <code>create_api_agent</code> brauchen die Rolle <code>eddi-editor</code>.',
				'Das MCP-Tool <code>create_api_agent</code> kann bewusst keine Freigabe-Schranke setzen. Einen geschützten Agenten legen Sie per REST mit <code>eddi-admin</code> an.',
				'Gruppenphasen, die auf Freigabe warten, lassen sich über MCP ebenso freigeben wie über den Manager, REST und Slack, und jede Entscheidung wird protokolliert.',
			],
			goodToKnow: [
				'Der Produktionsstart verweigert den Betrieb ohne OIDC, sofern Sie nicht ausdrücklich verzichten. Eine Instanz mit diesem Verzicht lässt <code>/mcp</code> für jeden offen, der den Port erreicht.',
			],
		},
		'mcp-client': {
			summary: 'EDDI-Agenten die Tools externer MCP-Server geben. Die Tools eines Servers werden zu den Tools des Agenten, hinter denselben Freigabe-Schranken und demselben Audit-Trail wie jedes andere Tool.',
			gets: [
				'Tools von jedem MCP-Server, der Streamable HTTP spricht',
				'Allow- und Deny-Listen für Namen, um die Tool-Liste klein zu halten',
				'Optionales Auflisten und Lesen von Ressourcen',
				'Ein Circuit Breaker, der Aufrufe an einen ausfallenden Server stoppt',
			],
			steps: [
				'Eine <code>mcpcalls</code>-Konfiguration mit der Server-URL, dem Transport <code>http</code> und einem API-Schlüssel als <code>${vault:...}</code>-Referenz anlegen.',
				'Sie als Workflow-Schritt referenzieren (<code>eddi://ai.labs.mcpcalls</code>).',
				'Die LLM-Task des Agenten übernimmt die Tools des Servers automatisch (<code>enableMcpCallTools</code> ist standardmäßig true).',
				'Die Tools zu <code>toolApprovals</code> hinzufügen, damit folgenreiche Aufrufe auf einen Menschen warten.',
				'Für einen reinen stdio-Server ihn in einem eigenen Container hinter einer HTTP-Bridge betreiben und EDDI auf die Bridge zeigen lassen.',
			],
			captions: [
				'Eine mcpcalls-Konfiguration. Das Token ist eine Vault-Referenz.',
				'Jedes MCP-Tool schützen, außer den rein lesenden.',
			],
			governance: [
				'MCP-Tool-Aufrufe unterliegen derselben Human-in-the-Loop-Freigabe-Schranke wie jede andere Tool-Quelle.',
				'Tool-Beschreibungen werden von anweisungsartigem Text bereinigt und in der Länge begrenzt. Tool-Ergebnisse werden mit Herkunftsangabe umhüllt, und anweisungsartiger Inhalt wird standardmäßig geschwärzt.',
				'Eine Tool-Whitelist dient der Kontextverwaltung, nicht der Sicherheit. Die Grenze bilden das Credential, das Sie der Verbindung geben, und die Freigabe-Schranke.',
				'Jede geschützte Entscheidung wird ins Audit-Protokoll geschrieben.',
			],
			goodToKnow: [
				'EDDI implementiert einen MCP-Transport, Streamable HTTP. Es startet keine stdio-Server selbst, weil ein per Konfiguration editierbarer Befehl beliebige Codeausführung mit dem Nutzer des EDDI-Prozesses bedeuten würde. Verwenden Sie einen Bridge-Sidecar.',
				'Ein Circuit Breaker öffnet nach 3 Fehlern in 60 Sekunden. Ein fehlendes Tool bedeutet daher meist, dass der Server ausfällt.',
			],
		},
		a2a: {
			summary: 'EDDI-Agenten anderen Agenten über Agent Cards und JSON-RPC bereitstellen und entfernte A2A-Agenten als Tools in den eigenen Agenten nutzen.',
			gets: [
				'Eine Agent Card für jeden freigeschalteten Agenten, die seine Skills auflistet',
				'Ein JSON-RPC-2.0-Endpunkt mit <code>tasks/send</code>, <code>tasks/get</code> und <code>tasks/cancel</code>',
				'Entfernte A2A-Agenten, die neben eingebauten, MCP- und HTTP-Tools in die Tool-Calling-Schleife einfließen',
				'Skill-Filter, um nur einen Teil eines entfernten Agenten bereitzustellen',
			],
			steps: [
				'Einen Agenten mit <code>a2aEnabled: true</code>, einer Beschreibung und den zu bewerbenden Skills freischalten.',
				'Peers holen seine Card von <code>/a2a/agents/{agentId}/agent.json</code> und rufen <code>POST /a2a/agents/{agentId}</code> auf.',
				'Um einen entfernten Agenten zu nutzen, ihn in einer LLM-Task unter <code>a2aAgents</code> mit seiner URL und einem per Vault referenzierten API-Schlüssel aufführen.',
				'EDDI liest die entfernte Card, macht aus jedem Skill ein Tool namens <code>{agentName}_{skillId}</code> und ruft es mit <code>tasks/send</code> auf.',
			],
			captions: [
				'Einen Agenten bereitstellen. A2A ist pro Agent ein Opt-in.',
				'Einen entfernten Agenten nutzen. Der API-Schlüssel muss eine Vault-Referenz sein.',
			],
			governance: [
				'Agent Cards sind absichtlich anonym, damit ein Peer einen Agenten entdecken kann, bevor er Zugangsdaten hat. Bei aktiver Authentifizierung erfordern das Auflisten von Agenten und der JSON-RPC-Endpunkt jeweils ein Token.',
				'Die Tools eines entfernten Agenten durchlaufen dieselben Freigabe-Schranken und Guardrails für Tool-Ergebnisse wie andere Tool-Quellen, und der API-Schlüssel bleibt im Vault.',
				'<code>tasks/send</code> führt eine Konversation auf Ihrem LLM-Budget aus, weshalb es nicht anonym ist.',
			],
			goodToKnow: [
				'Bei aktiver Authentifizierung gibt die Card einen Token-Endpunkt an. EDDI leitet einen Pfad im Keycloak-Stil ab, sofern Sie <code>eddi.a2a.public-token-endpoint</code> nicht setzen. Setzen Sie ihn daher für andere Identity Provider.',
			],
		},
		openapi: {
			summary: 'Jede REST-API mit OpenAPI-3.0- oder 3.1-Beschreibung ohne Code in einen Agenten mit Tools verwandeln und folgenreiche Aufrufe hinter eine menschliche Freigabe stellen.',
			gets: [
				'Ein aus der Spezifikation generierter API-Agent: HTTP-Call-Konfigurationen nach Tag gruppiert, die Pipeline und das Deployment',
				'Endpunkt-Filter, eine Überschreibung der Basis-URL und Weitergabe des Auth-Headers',
				'Die Möglichkeit, die Tools eines MCP-Servers neben den generierten hinzuzufügen',
				'Tools, die Sie prüfen, vergleichen und versionieren können, weil sie Konfiguration sind',
			],
			steps: [
				'EDDI die OpenAPI-Spezifikation über das MCP-Tool <code>create_api_agent</code> oder <code>POST /administration/agents/setup-api</code> übergeben.',
				'Die Operationen, die der Agent haben soll, auf die Allowlist setzen. Ein nicht deklarierter Endpunkt kann nicht aufgerufen werden.',
				'EDDI generiert die HTTP-Call-Konfigurationen, baut die vollständige Pipeline und deployt den Agenten.',
				'Zugangsdaten als <code>${vault:...}</code>-Referenzen halten.',
				'Schreibzugriffe mit <code>http.*:*</code> schützen und lesende Zugriffe mit <code>http.get:*</code> ausnehmen.',
			],
			captions: [
				'Das httpCalls-Modell, aus dem generierte Tools gebaut werden. Hier von Hand ausgeschrieben, um die Felder zu zeigen.',
				'Jeden zustandsändernden Aufruf freigeben lassen, Lesezugriffe durchlassen.',
			],
			governance: [
				'Freigabemuster können adressieren, was ein Tool aufruft (<code>http.post:*</code>), und bleiben korrekt, wenn sich eine operationId ändert.',
				'Ausgehende Aufrufe sind von der Plattform gegen SSRF und Path Traversal geschützt.',
				'Über REST akzeptiert <code>setup-api</code> eine <code>hitlConfig</code>, sodass ein Agent von der ersten Version an mit geschützten Schreib-Tools bereitgestellt werden kann. Das MCP-Tool kann sie nicht setzen.',
				'Entscheidungen landen im Audit-Protokoll.',
			],
			goodToKnow: [
				'Ein generiertes Schreib-Tool nimmt den gesamten Request-Body als einen <code>requestBody</code>-Parameter entgegen.',
			],
		},
		sap: {
			summary: 'EDDI hat keinen nativen SAP-Konnektor. Sie erreichen SAP über dessen OData- und REST-APIs mit OpenAPI-Import oder HTTP-Aufrufen oder über einen MCP-Server, unter Freigaben und Audit-Protokoll.',
			gets: [
				'Agenten, die über die veröffentlichten APIs aus SAP lesen und, mit Freigabe, dorthin schreiben',
				'Dieselbe Governance wie bei jedem anderen Tool: Freigaben, Audit-Protokoll, im Vault gehaltene Zugangsdaten',
				'Kein Code im Agenten. Die Verbindung ist Konfiguration, die Sie prüfen können',
			],
			steps: [
				'Den Weg wählen. OpenAPI-Import, wenn der SAP-Dienst eine OpenAPI-Beschreibung veröffentlicht. HTTP-Aufrufe, um einzelne OData- oder REST-Anfragen zu deklarieren. MCP, wenn Sie bereits einen MCP-Server vor SAP betreiben.',
				'Das SAP-Credential oder -Token im Secrets Vault speichern und als <code>${vault:...}</code> referenzieren.',
				'Zuerst nur die lesenden Operationen deklarieren, die der Agent braucht, etwa das Auflisten oder Lesen von Geschäftsobjekten.',
				'Jeden Schreibzugriff mit <code>http.*:*</code> schützen und lesende mit <code>http.get:*</code> ausnehmen. Freigeber entscheiden im Manager oder in Slack.',
				'Das Audit-Protokoll für jeden Aufruf prüfen, bevor Sie erweitern, was der Agent darf.',
			],
			captions: [
				'Ein Beispiel für einen Lesezugriff auf einen SAP-OData-Dienst. Host, Dienstpfad und Authentifizierung hängen von Ihrem SAP-System ab.',
				'Schreibzugriffe warten auf einen Menschen. Lesezugriffe laufen durch.',
			],
			governance: [
				'Schreibzugriffe werden zur Freigabe zurückgehalten, die Entscheidung wird im HMAC-signierten, nur anhängenden Audit-Protokoll festgehalten.',
				'Zugangsdaten bleiben im Vault und erscheinen weder in der Agentenkonfiguration noch in Exporten.',
				'Die Endpunkt-Allowlist sorgt dafür, dass eine nicht deklarierte SAP-Operation nicht aufgerufen werden kann, was auch immer ein Nutzer eingibt.',
			],
			goodToKnow: [
				'Dies ist ein Integrationsmuster, kein zertifizierter SAP-Konnektor. Wie Sie sich bei SAP authentifizieren und welche APIs es bereitstellt, hängt von Ihrer Systemlandschaft ab.',
				'EDDI Solutions kann die Verbindung für Sie bauen und pflegen, einschließlich eigener MCP-Tools, und sie in Ihrer Cloud oder On-Premises betreiben.',
			],
		},
		chroma: {
			summary: 'Chroma als Vektorspeicher für eine EDDI-Wissensbasis. Die Option mit der geringsten Einstiegshürde, wenn Sie keine bestehende Infrastruktur wiederverwenden können.',
			gets: [
				'Antworten mit Retrieval-Augmentation aus Ihren eigenen Dokumenten',
				`Einer von ${VECTOR_STORES} Vektorspeichern, per Konfiguration statt per Code gewählt`,
				'Quellen für die Aufnahme: Website-Crawling und hochgeladene Dateien, mit Zeitplänen und Laufhistorie',
			],
			steps: [
				'Einen Chroma-Server starten und seine URL sowie einen Collection-Namen notieren.',
				'Eine RagConfiguration mit <code>storeType: "chroma"</code> und den Speicherparametern anlegen, dazu den Embedding-Anbieter.',
				'Sie mit einem <code>eddi://ai.labs.rag</code>-Workflow-Schritt an den Agenten binden.',
				'In der LLM-Task per Namen unter <code>knowledgeBases</code> auswählen und danach Dokumente aufnehmen.',
			],
			captions: [
				'Die Wissensbasis. Chroma braucht eine Basis-URL und einen Collection-Namen.',
				'Der Schritt, der sie an den Agenten bindet, und die Task, die sie nutzt. Den Workflow-Schritt zu vergessen ist der häufigste Fehler.',
			],
			governance: [
				'Embedding-API-Schlüssel sind Vault-Referenzen, sodass Dokumentenkorpus und Zugangsdaten getrennt bleiben.',
				'Embedding-Aufrufe senden Dokumenttext an einen gehosteten Embedding-Anbieter. Wenn die Daten Ihre Infrastruktur nicht verlassen dürfen, nutzen Sie ein selbst gehostetes Embedding-Modell.',
				'Ein offener Vektorspeicher ist eine Kopie Ihres Korpus. Betreiben Sie Chroma mit Authentifizierung und nicht an öffentlichen Schnittstellen.',
			],
			goodToKnow: [
				'Das Ersetzen der Chunks eines Dokuments ist für In-Memory und pgvector verifiziert. Für Chroma wird erwartet, dass es funktioniert, es ist aber nicht durch Tests abgedeckt, sodass erneut aufgenommene Dokumente veraltete Chunks hinterlassen können.',
			],
		},
		pgvector: {
			summary: 'PostgreSQL mit pgvector als Vektorspeicher für eine EDDI-Wissensbasis. Die empfohlene persistente Wahl, wenn Sie ohnehin PostgreSQL betreiben.',
			gets: [
				'Eine Wissensbasis in einer Datenbank, die Sie bereits sichern und betreiben',
				'Verifizierter Dokumentersatz bei erneuter Aufnahme',
				'Dieselbe Agentenkonfiguration wie bei jedem anderen Speicher, nur die Speicherparameter ändern sich',
			],
			steps: [
				'Die pgvector-Erweiterung in PostgreSQL aktivieren und eine Datenbank samt Nutzer anlegen.',
				'Eine RagConfiguration mit <code>storeType: "pgvector"</code>, den Verbindungsdaten, einer Tabelle und der Vektor-<code>dimension</code> anlegen.',
				'Sie mit einem <code>eddi://ai.labs.rag</code>-Workflow-Schritt binden.',
				'In der LLM-Task per Namen auswählen und Dokumente aufnehmen.',
			],
			captions: [
				'Die Dimension muss zu Ihrem Embedding-Modell passen. 1536 passt zu text-embedding-3-small.',
				'Die Wissensbasis an den Agenten binden und in einer Task verwenden.',
			],
			governance: [
				'Das Datenbankpasswort ist ein Pflichtparameter. Halten Sie es als Vault-Referenz.',
				'Ihre bestehende PostgreSQL-Zugriffskontrolle und Ihre Backups gelten auch für die Vektoren.',
				'Embedding-Aufrufe senden Dokumenttext an den von Ihnen konfigurierten Embedding-Anbieter.',
			],
			goodToKnow: [
				'Der In-Memory-Speicher ist für die Entwicklung gedacht: Er leert sich nach 30 Minuten ohne Abfrage und bei einem Neustart. Ein persistenter Speicher wie pgvector ist die Wahl für die Produktion.',
			],
		},
		qdrant: {
			summary: 'Qdrant als Vektorspeicher für eine EDDI-Wissensbasis, eine speziell für Vektoren gebaute Datenbank mit Spielraum zum Wachsen.',
			gets: [
				'Eine dedizierte Vektordatenbank hinter Ihrer Wissensbasis',
				'Optionaler API-Schlüssel und TLS',
				'Dieselbe Agentenkonfiguration wie bei jedem anderen Speicher',
			],
			steps: [
				'Einen Qdrant-Server starten und Host sowie gRPC-Port notieren (der EDDI-Standard ist 6334).',
				'Eine RagConfiguration mit <code>storeType: "qdrant"</code> und einem <code>collectionName</code> anlegen.',
				'Sie mit einem <code>eddi://ai.labs.rag</code>-Workflow-Schritt binden.',
				'In der LLM-Task per Namen auswählen und Dokumente aufnehmen.',
			],
			captions: [
				'Qdrant braucht einen Host, einen Port und einen Collection-Namen. apiKey und useTls sind optional.',
				'Die Wissensbasis an den Agenten binden und in einer Task verwenden.',
			],
			governance: [
				'Wenn Qdrant einen API-Schlüssel braucht, referenzieren Sie ihn aus dem Vault.',
				'Embedding-Aufrufe senden Dokumenttext an den von Ihnen konfigurierten Embedding-Anbieter.',
				'Ein offener Vektorspeicher ist eine Kopie Ihres Korpus. Halten Sie ihn von öffentlichen Schnittstellen fern.',
			],
			goodToKnow: [
				'Das Ersetzen der Chunks eines Dokuments sollte mit Qdrant funktionieren, ist aber nicht durch Tests abgedeckt. Ohne es können erneut aufgenommene Dokumente veraltete Chunks hinterlassen.',
			],
		},
		elasticsearch: {
			summary: 'Elasticsearch als Vektorspeicher für eine EDDI-Wissensbasis, nützlich, wenn Sie es bereits betreiben und Stichwort- und Vektorsuche an einem Ort wollen.',
			gets: [
				'Eine Wissensbasis in einem Cluster, den Sie bereits betreiben',
				'Authentifizierung per API-Schlüssel oder mit Benutzername und Passwort',
				'Dieselbe Agentenkonfiguration wie bei jedem anderen Speicher',
			],
			steps: [
				'Sicherstellen, dass ein Elasticsearch-Cluster erreichbar ist, und einen Indexnamen wählen.',
				'Eine RagConfiguration mit <code>storeType: "elasticsearch"</code>, der <code>serverUrl</code> und dem <code>indexName</code> anlegen.',
				'Sie mit einem <code>eddi://ai.labs.rag</code>-Workflow-Schritt binden.',
				'In der LLM-Task per Namen auswählen und Dokumente aufnehmen.',
			],
			captions: [
				'Die Standard-serverUrl ist localhost:9200. Für einen gesicherten Cluster einen apiKey oder userName und password ergänzen.',
				'Die Wissensbasis an den Agenten binden und in einer Task verwenden.',
			],
			governance: [
				'API-Schlüssel oder Passwort aus dem Vault referenzieren.',
				'Embedding-Aufrufe senden Dokumenttext an den von Ihnen konfigurierten Embedding-Anbieter.',
				'Die bestehende Zugriffskontrolle Ihres Clusters gilt auch für die Vektoren.',
			],
			goodToKnow: [
				'Das Ersetzen der Chunks eines Dokuments sollte mit Elasticsearch funktionieren, ist aber nicht durch Tests abgedeckt. Ohne es können erneut aufgenommene Dokumente veraltete Chunks hinterlassen.',
			],
		},
		'mongodb-atlas-vector-search': {
			summary: 'MongoDB Atlas Vector Search als Vektorspeicher für eine EDDI-Wissensbasis, eine naheliegende Wahl, wenn Sie bereits auf Atlas laufen.',
			gets: [
				'Eine Wissensbasis im Atlas-Cluster, den Sie bereits betreiben',
				'Konfiguration über Connection String, Datenbank, Collection und Indexnamen',
				'Dieselbe Agentenkonfiguration wie bei jedem anderen Speicher',
			],
			steps: [
				'Einen Vector-Search-Index in Atlas anlegen und Datenbank-, Collection- und Indexnamen notieren.',
				'Eine RagConfiguration mit <code>storeType: "mongodb-atlas"</code> und den Speicherparametern anlegen.',
				'Sie mit einem <code>eddi://ai.labs.rag</code>-Workflow-Schritt binden.',
				'In der LLM-Task per Namen auswählen und Dokumente aufnehmen.',
			],
			captions: [
				'Der Connection String enthält Zugangsdaten, daher ist er hier eine Vault-Referenz.',
				'Die Wissensbasis an den Agenten binden und in einer Task verwenden.',
			],
			governance: [
				'Halten Sie den Connection String im Vault, nicht in der Konfiguration.',
				'Embedding-Aufrufe senden Dokumenttext an den von Ihnen konfigurierten Embedding-Anbieter.',
				'Die Zugriffskontrolle und Netzwerkregeln von Atlas gelten auch für die Vektoren.',
			],
			goodToKnow: [
				'Das Ersetzen der Chunks eines Dokuments sollte mit Atlas funktionieren, ist aber nicht durch Tests abgedeckt. Ohne es können erneut aufgenommene Dokumente veraltete Chunks hinterlassen.',
			],
		},
		'kubernetes-helm': {
			summary: 'EDDI auf jedem konformen Kubernetes-Cluster betreiben, mit einem Ein-Datei-Quickstart, einem Helm-Chart oder Kustomize-Overlays, mit MongoDB oder PostgreSQL.',
			gets: [
				'Ein Quickstart-Manifest, das EDDI und MongoDB deployt',
				'Ein Helm-Chart und Kustomize-Overlays für Produktionsprofile',
				'Optionale Komponenten: Keycloak-Authentifizierung, NATS JetStream, Monitoring, Ingress, Pod Disruption Budget und Network Policy',
				'MongoDB oder PostgreSQL als Datenspeicher',
			],
			steps: [
				'Das Quickstart-Manifest anwenden oder das Helm-Chart mit einem Vault-Master-Key installieren.',
				'Das Secret <code>eddi-secrets</code> anlegen, das den Vault-Master-Key enthält. Kein Manifest schreibt es, mit Absicht.',
				'Das Datenbank-Overlay oder die Helm-Values für MongoDB oder PostgreSQL wählen.',
				'Die benötigten optionalen Komponenten hinzufügen, etwa Keycloak und Ingress.',
				'Für Produktions-Secrets <code>eddi-secrets</code> mit dem External Secrets Operator synchronisieren.',
			],
			captions: [
				'EDDI und MongoDB mit einem Befehl. Der Pod wartet, bis das Secret eddi-secrets existiert.',
				'Helm-Installation mit einem generierten Vault-Master-Key.',
				'Die Helm-Values, die den Datenspeicher auf PostgreSQL umstellen.',
			],
			governance: [
				'Kein Manifest schreibt jemals das Master-Key-Secret, sodass ein erneutes Anwenden keinen laufenden Schlüssel ersetzen und bestehende Secrets unentschlüsselbar machen kann.',
				'Der mitgelieferte Keycloak-Realm für Helm und Kustomize setzt kein Standardpasswort für die privilegierten Konten.',
				'Das Produktionsprofil fügt ein Pod Disruption Budget und eine Network Policy hinzu.',
			],
			goodToKnow: [
				'Der External Secrets Operator kann das Secret <code>eddi-secrets</code> aus AWS Secrets Manager, HashiCorp Vault, Azure Key Vault und Ähnlichem synchronisieren. EDDI selbst hat dafür keinen nativen Client.',
				'EDDI Solutions kann EDDI für Sie in Ihrer eigenen Cloud, On-Premises oder als dedizierte verwaltete Instanz betreiben.',
			],
		},
		openshift: {
			summary: 'EDDI liefert ein von Red Hat zertifiziertes Container-Image auf Basis von UBI 10, das ohne Root-Rechte auf OpenShift 4.12 oder neuer läuft, sowie einen Operator für OperatorHub.',
			gets: [
				'Ein von Red Hat zertifiziertes Image, gelistet im Red Hat Ecosystem Catalog',
				'Ausführung ohne Root-Rechte als UID 185 auf einer UBI-10-Basis mit OpenJDK 25',
				'Ein Operator, der aus einer Custom Resource eine EDDI-Instanz und eine Route erstellt',
				'Zertifizierung, die in der CI mit Red Hat preflight geprüft wird',
			],
			steps: [
				'Unter OpenShift 4.12 oder neuer OperatorHub öffnen und den EDDI Operator installieren.',
				'Unter Installed Operators eine <code>Eddi</code>-Instanz anlegen, mit Größe und Speicher für MongoDB.',
				'Der Operator erstellt die Route automatisch.',
				'Authentifizierung und Secrets wie auf jedem Cluster hinzufügen.',
			],
			captions: ['Eine Eddi-Custom-Resource aus der Doku.'],
			governance: [
				'Der Container läuft als Nicht-Root-Nutzer, und das Image enthält die Lizenzdateien von Drittanbietern.',
				'Releases werden in der CI gegen die Zertifizierungsanforderungen von Red Hat geprüft.',
				'Der Produktionsstart erfordert weiterhin OIDC, sofern Sie nicht ausdrücklich verzichten.',
			],
			goodToKnow: [
				'Der Operator wird für EDDI 6 aktualisiert, um sowohl MongoDB als auch PostgreSQL zu unterstützen. Der generische Kubernetes-Weg funktioniert auf jedem konformen Cluster.',
				'Ein RHEL-8-Host wird für das UBI-10-Image nicht unterstützt. RHEL 9 oder neuer schon.',
			],
		},
		ollama: {
			summary: 'Modelle lokal mit Ollama betreiben und Prompts und Dokumente auf der eigenen Hardware halten, für On-Premises- und Air-Gap-Umgebungen.',
			gets: [
				'Eine LLM-Task vom Typ <code>ollama</code>, die mit Ihrem Ollama-Server spricht',
				'Kein API-Schlüssel eines Anbieters und keine Daten an ein gehostetes Modell',
				'Ein Compose-Overlay, das Ollama neben EDDI startet',
				'In-Process-Jlama als Alternative für kleine quantisierte Modelle',
			],
			steps: [
				'EDDI mit dem Ollama-Compose-Overlay starten oder Ollama selbst betreiben und seine URL notieren.',
				'Ein Modell in Ollama laden. Den Modell-Tag genau so verwenden, wie ihn <code>ollama list</code> anzeigt.',
				'Den Task-<code>type</code> auf <code>ollama</code> setzen, mit <code>baseUrl</code> und <code>model</code>.',
				'In einem Container ist <code>localhost</code> der Container selbst. Den Compose-Servicenamen oder <code>host.docker.internal</code> verwenden.',
			],
			captions: [
				'Startet Ollama im selben Netzwerk unter http://ollama:11434.',
				'Eine Ollama-Task aus der EDDI-Doku.',
			],
			governance: [
				'Prompts, abgerufener Kontext und Antworten bleiben in Ihrem Netzwerk, was der Sinn eines lokalen Modells ist.',
				'Freigaben, Behavior Rules und das Audit-Protokoll gelten genauso wie bei einem gehosteten Modell.',
				'Es ist kein Credential beteiligt, sodass für das Modell selbst nichts im Vault abzulegen ist.',
			],
			goodToKnow: [
				'Ein vollständig abgeschotteter Betrieb braucht ein lokales Ollama oder einen vorab befüllten Jlama-Cache, weil EDDI ohne Netzwerk kein Modell herunterladen kann.',
				'Lokale Modelle unterscheiden sich in der Zuverlässigkeit bei Tool-Calling und JSON. Testen Sie das Verhalten, auf das Sie sich verlassen.',
			],
		},
	},
};

export default copy;
