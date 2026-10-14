/**
 * Head-to-head comparison copy, German. Keys match src/data/comparisons.ts.
 * Competitor facts are dated "Stand Oktober 2026"; sources are listed in the
 * header of src/data/comparisons.ts.
 */
import type { CompareCopy } from './en';
import { MCP_TOOLS, FRAMEWORKS, LLM_PROVIDERS, TESTS, EMBEDDING_PROVIDERS, VECTOR_STORES } from '../stats';

const EDDI_LICENSE = 'Apache 2.0, OSI-zertifiziert';

const copy: CompareCopy = {
	ui: {
		shortAnswer: 'Kurze Antwort',
		chooseTitle: 'Die Wahl zwischen beiden',
		faqTitle: 'Häufige Fragen',
		otherTitle: 'Weitere Vergleiche',
		allAlternatives: 'Alle Alternativen: Builder, Bibliotheken und Cloud-Plattformen',
		asOfNote: 'Die Angaben zum jeweils anderen Tool wurden im Oktober 2026 anhand der offiziellen Dokumentation und des Repositorys geprüft. Diese Projekte ändern sich schnell. Bestätigen Sie das aktuelle Verhalten daher beim Anbieter, bevor Sie sich entscheiden.',
		backToHub: 'Alle Vergleiche',
		hubTitle: 'EDDI im Vergleich: Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n und mehr',
		hubMetaTitle: 'EDDI vs. Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n, Flowise, Rasa',
		hubDescription: 'Ausgewogene Direktvergleiche von EDDI mit Dify, CrewAI, LangChain und LangGraph, Microsoft Agent Framework (AutoGen und Semantic Kernel), n8n, Flowise und Rasa, einschließlich der Fälle, in denen das andere Tool die bessere Wahl ist.',
		hubIntro: 'Jede Seite vergleicht EDDI mit einer Alternative anhand derselben Dimensionen: Architektur, Governance, Lizenzierung und Betrieb. Jede Seite sagt klar, wo das andere Tool die bessere Wahl ist und wie Sie migrieren, wenn Sie sich für einen Wechsel entscheiden.',
		hubReadMore: 'Vergleich lesen',
		hubLandscapeTitle: 'Sie suchen den größeren Überblick?',
		hubLandscapeDesc: 'Die Übersicht der Alternativen gruppiert das Feld nach Archetyp: visuelle Builder, Code-Bibliotheken und Cloud-KI-Plattformen.',
		headToHeadTitle: 'Direktvergleiche',
		headToHeadIntro: 'Diese Seite ordnet die Landschaft nach Archetypen. Für einen direkten Vergleich mit einer bestimmten Alternative, einschließlich der Fälle, in denen diese Alternative die bessere Wahl ist, und der Migration eines bestehenden Projekts, siehe:',
		navLabel: 'Vergleich',
		navDesc: 'Dify, CrewAI, LangGraph und mehr im direkten Vergleich',
	},
	comparisons: {
		// ─── LangChain and LangGraph ──────────────────────────────────
		'eddi-vs-langchain': {
			title: 'EDDI vs. LangChain und LangGraph',
			description:
				'Wie sich EDDI zu LangChain und LangGraph verhält: Bibliothek versus deploybare Plattform, im Code definierte Graphen versus Config-as-Code, Human-in-the-Loop, die Day-2-Betriebslücke und wann es richtig ist, die Orchestrierung selbst zu schreiben.',
			summary: 'Bibliothek und im Code definierte Graphen versus deploybare Plattform; die Day-2-Betriebslücke.',
			verdict:
				'<strong>Wählen Sie LangChain oder LangGraph</strong>, wenn die Orchestrierungslogik der differenzierende Teil Ihres Produkts ist und Sie sie als Code, unter Review, in Ihrem Repository haben möchten. <strong>Wählen Sie EDDI</strong>, wenn die Orchestrierung undifferenzierte Infrastruktur ist, die Sie lieber deployen als warten möchten.',
			whatItIsTitle: 'Was LangChain und LangGraph sind',
			whatItIs:
				'LangChain ist ein MIT-lizenziertes Python- und JavaScript-Framework zum Bau von LLM-Anwendungen. LangGraph vom selben Team ist ein Low-Level-Orchestrierungsframework für zustandsbehaftete Agents: Sie definieren einen Graphen im Code, und LangGraph ergänzt dauerhafte Ausführung, die nach Fehlern fortgesetzt wird, sowie Human-in-the-Loop-Checkpoints, an denen Sie den Agent-Zustand einsehen und ändern können. LangSmith ist das kommerzielle Produkt für Tracing, Evaluation und Observability, und LangSmith Deployment hostet langlaufende Agents. Die Integrationsbreite ist die größte im gesamten Ökosystem.',
			archetypeTitle: 'Dies ist eine Frage von Bibliothek versus Plattform',
			archetype:
				'EDDI ist kein konkurrierendes Framework. EDDI verwendet intern <a href="https://docs.langchain4j.dev/" target="_blank" rel="noopener">LangChain4j</a>, das Java-Pendant zu LangChain. Die eigentliche Frage ist nicht, welche Abstraktion besser ist. Es geht darum, ob der Kontrollfluss in Code liegt, den Sie schreiben, als LangGraph-Graph, oder in deklarativer Konfiguration, die Sie deployen, und wer alles drumherum baut und verantwortet: die REST-Schicht, Authentifizierung, Mandantenfähigkeit, Zustand, Audit und die Oberfläche für Nicht-Entwickler.',
			tableTitle: 'Was Sie bauen versus was Sie deployen',
			tableHeaders: { dimension: 'Dimension', them: 'LangChain / LangGraph', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Bauform', them: 'Eine Bibliothek, die in Ihre Anwendung importiert wird', eddi: 'Deploybare Middleware; läuft überall, wo Docker läuft' },
				{ dimension: 'Orchestrierungslogik', them: 'Python- oder TypeScript-Graphen in Ihrem Repository', eddi: 'JSON-Konfiguration und deterministische Behavior Rules, änderbar ohne Redeployment' },
				{ dimension: 'Human in the Loop', them: 'Interrupts erlauben, den Zustand einzusehen und zu ändern; Freigabe-UI und Richtlinie müssen Sie selbst bauen', eddi: 'Gates auf Turns, Tool-Aufrufen und Gruppenphasen, mit Timeout-Richtlinien sowie Freigaben im Manager und in Slack' },
				{ dimension: 'Dauerhaftigkeit', them: 'Dauerhafte Ausführung mit Persistenz, die Sie konfigurieren', eddi: 'Von der Plattform persistierter Konversationsspeicher, mit expliziten Zuständen wie AWAITING_HUMAN' },
				{ dimension: 'REST-API und Routing', them: 'Sie bauen es selbst oder hosten auf LangSmith Deployment', eddi: 'Enthalten, dazu OpenAPI 3.1, A2A-Protokoll und SSE-Streaming' },
				{ dimension: 'Authentifizierung und RBAC', them: 'Sie bauen es selbst', eddi: 'Optionales OIDC/Keycloak mit den Rollen eddi-admin und eddi-approver' },
				{ dimension: 'Oberfläche für Nicht-Entwickler', them: 'Sie bauen sie selbst (LangSmith Studio richtet sich an Entwickler)', eddi: 'EDDI Manager, eine produktionsreife React-UI in 11 Sprachen' },
				{ dimension: 'Secret-Verwaltung', them: 'Sie bauen sie selbst oder binden einen Vault an', eddi: 'Integrierter AES-256-GCM Secrets Vault, referenziert als ${vault:key}' },
				{ dimension: 'Observability', them: 'LangSmith (kommerziell) oder eigene Instrumentierung', eddi: 'Prometheus-Metriken und automatisch bereitgestellte Grafana-Dashboards' },
				{ dimension: 'Audit und Compliance', them: 'Sie bauen es selbst', eddi: `HMAC-signiertes, append-only geführtes, sequenzgeprüftes Audit-Ledger, API für Betroffenenrechte, ${FRAMEWORKS} Frameworks adressiert` },
				{ dimension: 'Iterationszyklus', them: 'Code ändern, reviewen, testen, deployen', eddi: 'Konfiguration in der UI oder API ändern; sofort wirksam' },
				{ dimension: 'Obergrenze der Kontrolle', them: 'Keine. Alles, was sich im Code ausdrücken lässt, ist verfügbar', eddi: 'Bewusst begrenzt auf das, was Konfiguration ausdrücken kann' },
			],
			betterThemTitle: 'Wo LangChain und LangGraph die bessere Wahl sind',
			betterThem: [
				'Die Orchestrierung selbst ist Ihr Wettbewerbsvorteil und gehört in Ihre Codebasis, nicht in einen Konfigurationsspeicher.',
				'Sie brauchen Kontrollfluss, den deklarative Konfiguration nicht ausdrücken kann: eigene Graph-Topologien, maßgeschneiderte Retry-Semantik, ungewöhnliche Zustandsautomaten.',
				'Sie sind ein Python- oder TypeScript-Team und möchten, dass der Agent in einem bestehenden Service lebt statt daneben.',
				'Sie brauchen eine brandneue Integration in der Woche, in der sie erscheint. LangChain bewegt sich schneller, als es jede Plattform kann.',
				'Das Team besteht aus ein bis zwei Entwicklern, ohne Compliance-Beauftragten, ohne Mandantenanforderung und ohne Nicht-Entwickler, der Zugriff braucht.',
			],
			betterEddiTitle: 'Wo EDDI die bessere Wahl ist',
			betterEddi: [
				'Sie erkennen die Day-2-Betriebsliste als Arbeit wieder, die Ihr Team erledigt, statt Produkt auszuliefern.',
				'Prompt Engineers und Betriebsmitarbeitende müssen das Agent-Verhalten ohne Pull Request ändern können.',
				'Mehrere Teams oder Kunden teilen sich ein Deployment und brauchen Isolation, Kontingente und Kostenzuordnung.',
				'Der Einkauf will vor der Auslieferung Antworten zu Audit-Trails, Datenresidenz und Framework-Abdeckung.',
				'Die Orchestrierungsschicht soll eine Abhängigkeit sein, die Sie aktualisieren, keine Codebasis, die Sie pflegen.',
			],
			migrationTitle: 'Eine Anwendung von LangChain oder LangGraph umziehen',
			migrationIntro:
				'Die Logik bleibt meist erhalten; die umgebende Infrastruktur ist das, was Sie nicht mehr pflegen. Arbeiten Sie sich von der Chain- oder Graph-Definition nach außen. Kontrollfluss, der von beliebigem Python abhängt, muss zu Behavior Rules oder einem deklarierten Tool werden.',
			migrationSteps: [
				{ from: 'Chain oder LangGraph-Graph', to: 'EDDI-Pipeline-Konfiguration und Behavior Rules' },
				{ from: 'Tools und Function Calling', to: 'MCP-Tool-Definitionen oder httpCall-Deklarationen' },
				{ from: 'Interrupt für menschliche Prüfung', to: 'PAUSE_CONVERSATION-Regel oder toolApprovals-Globs, freigegeben im Manager oder in Slack' },
				{ from: 'Checkpointer- und Memory-Klassen', to: 'Konversationsspeicher mit den Scopes step, conversation und longTerm' },
				{ from: 'Retriever- und Vector-Store-Setup', to: `RAG-Konfiguration über ${EMBEDDING_PROVIDERS} Embedding-Anbieter und ${VECTOR_STORES} Vector Stores` },
				{ from: 'Prompt-Templates', to: 'Versionierte Prompt-Snippets, per Name referenziert' },
				{ from: 'FastAPI-Wrapper', to: 'Integrierte REST-API, OpenAPI 3.1 und SSE-Streaming' },
				{ from: 'LangSmith-Tracing', to: 'Prometheus-Metriken, Grafana-Dashboards und das Audit-Ledger' },
			],
			faq: [
				{
					question: 'Verwendet EDDI LangChain?',
					answer:
						'EDDI verwendet intern LangChain4j, die Java-Implementierung. Das ist keine konkurrierende Abstraktion. EDDI ist die deploybare Plattform rund um eine solche Bibliothek und liefert die API-Schicht, Authentifizierung, Zustandsverwaltung, Management-UI und Compliance-Infrastruktur, die eine Bibliothek bewusst Ihnen überlässt.',
				},
				{
					question: 'Was ist der Unterschied zwischen LangChain und LangGraph?',
					answer:
						'LangChain liefert Komponenten und Integrationen für LLM-Anwendungen. LangGraph ist die tiefere Schicht für zustandsbehaftete, langlaufende Agents, die als Graphen definiert werden, mit dauerhafter Ausführung und Human-in-the-Loop-Checkpoints. Beides sind Bibliotheken, die Sie in Ihren eigenen Service einbetten. Der Vergleich mit EDDI gilt für beide.',
				},
				{
					question: 'Was ist die Day-2-Betriebslücke?',
					answer:
						'Day 1 heißt, einen Agent korrekt antworten zu lassen, was eine Bibliothek gut leistet. Day 2 ist alles danach: Authentifizierung, Mandantenfähigkeit, Konversationszustand über Neustarts hinweg, Audit-Logging, Rotation von Secrets, horizontale Skalierung, Kostenverfolgung und eine Oberfläche für Menschen, die kein Python schreiben. Teams verbringen regelmäßig mehr Zeit mit Day 2 als mit dem Agent selbst.',
				},
				{
					question: 'Ist Konfiguration weniger mächtig als Code?',
					answer:
						'Ja, und dieser Kompromiss ist gewollt. Konfiguration kann nicht alles ausdrücken, was Code kann. Im Gegenzug erhalten Sie Änderungen ohne Redeployment, Verhalten, das Nicht-Entwickler prüfen können, und keine Codeausführung zur Laufzeit, die Sie in einem Security-Review verteidigen müssen. Wenn Sie die Obergrenze brauchen, die Code bietet, nutzen Sie die Bibliothek.',
				},
				{
					question: 'Können wir LangChain behalten und trotzdem EDDI nutzen?',
					answer:
						'Ja. EDDI stellt einen MCP-Server und eine REST-API bereit, sodass eine LangChain-Anwendung EDDI-Agents als Tools aufrufen kann und EDDI Ihren LangChain-Service über httpCall aufrufen kann. Die Aufteilung entlang der Grenze zwischen Differenzierendem und Infrastruktur ist ein vernünftiges Design.',
				},
			],
		},

		// ─── Microsoft Agent Framework ────────────────────────────────
		'eddi-vs-microsoft-agent-framework': {
			title: 'EDDI vs. Microsoft Agent Framework (AutoGen und Semantic Kernel)',
			description:
				'Wie sich EDDI zu Microsoft Agent Framework verhält, dem Nachfolger von AutoGen und Semantic Kernel: im Code definierte Workflows versus Config-as-Code, Human-in-the-Loop, Audit, Hosting und wann der Microsoft-Stack besser passt.',
			summary: 'Microsoft Agent Framework, der Nachfolger von AutoGen und Semantic Kernel, versus eine deploybare Agent-Plattform.',
			verdict:
				'<strong>Wählen Sie Microsoft Agent Framework</strong>, wenn Sie ein .NET- oder Python-Team sind, auf Azure bauen und Agent-Workflows als Code in Ihrem eigenen Service haben möchten. <strong>Wählen Sie EDDI</strong>, wenn Agents als prüfbare Konfiguration auf einer JVM-Plattform definiert sein sollen, die Sie überall betreiben können, mit Freigabe-Gates und einem Audit-Ledger, die eingebaut sind statt zusammengesetzt.',
			whatItIsTitle: 'Was Microsoft Agent Framework ist',
			whatItIs:
				'Microsoft Agent Framework ist ein MIT-lizenziertes Open-Source-SDK samt Runtime zum Bau und zur Orchestrierung von Agents und Multi-Agent-Workflows in .NET und Python. Es stammt von den Teams hinter Semantic Kernel und AutoGen und erreichte im April 2026 sein 1.0-Release. Workflows sind Graphen mit sequenziellen, nebenläufigen, Handoff- und Gruppen-Kollaborationsmustern, mit Checkpointing, Streaming, Human-in-the-Loop-Steuerung, OpenTelemetry-Tracing und einem Middleware-System. Agents lassen sich auch in YAML deklarieren, und Microsoft dokumentiert das Hosting auf Foundry. Stand Oktober 2026 erhält Semantic Kernel Fixes, während neue Funktionen in Agent Framework entstehen, und AutoGen befindet sich im Wartungsmodus, mit Migrationsleitfäden für beide.',
			archetypeTitle: 'Im Code definierte Workflows versus deklarierte Konfiguration',
			archetype:
				'Wenn Sie über die Suche nach AutoGen oder Semantic Kernel hierher gekommen sind: Der praktische Vergleich ist heute der mit Agent Framework, denn dorthin verweist Microsoft neue Projekte. Es ist ein SDK: Ihr Workflow ist Code in Ihrem Service, in Ihrer Sprache, und Sie entscheiden, wie Sie ihn hosten, absichern und auditieren, mit starker Unterstützung für Azure. EDDI geht den umgekehrten Kompromiss ein. Der Agent ist JSON-Konfiguration, die eine deployte Plattform interpretiert, sodass sich das Verhalten diffen, prüfen und ohne Rebuild ändern lässt, und die Plattform liefert API, Manager-UI, Secrets Vault und Audit-Ledger.',
			tableTitle: 'SDK für Ihren Service versus Plattform, die Sie deployen',
			tableHeaders: { dimension: 'Dimension', them: 'Microsoft Agent Framework', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Bauform', them: 'SDK und Runtime, eingebettet in Ihren .NET- oder Python-Service', eddi: 'Deploybare Middleware auf einer JVM (Quarkus); läuft überall, wo Docker oder Kubernetes läuft' },
				{ dimension: 'Wie Agents definiert werden', them: 'Im Code definierte Agents und Graph-Workflows; Agents lassen sich auch in YAML deklarieren', eddi: 'JSON-Konfiguration; deterministische Behavior Rules bestimmen die nächste Aktion, LLM-Aufrufe finden in deklarierten Tasks statt' },
				{ dimension: 'Sprachen', them: '.NET und Python (Go in einem separaten Repository)', eddi: 'Jede Sprache über REST, MCP und die OpenAI-kompatible API; der Agent selbst braucht keinen Code' },
				{ dimension: 'Lizenz', them: 'MIT', eddi: EDDI_LICENSE },
				{ dimension: 'Eigene Logik zur Laufzeit', them: 'Ihr Code und Ihre Tool-Funktionen laufen in Ihrem Prozess', eddi: 'Kein eval() und keine Codeausführung zur Laufzeit; Logik wird deklariert oder liegt hinter einem MCP-Tool oder HTTP-Aufruf' },
				{ dimension: 'Human in the Loop', them: 'Human-in-the-Loop-Steuerung auf Workflow-Ebene', eddi: 'Gates auf drei Ebenen: Turns (PAUSE_CONVERSATION), Tool-Aufrufe (toolApprovals) und Gruppenphasen, mit Timeout-Richtlinien' },
				{ dimension: 'Multi-Agent-Muster', them: 'Sequenzielle, nebenläufige, Handoff- und Gruppen-Kollaboration im Code', eddi: 'Gruppendiskussionen mit 7 Stilen (Round Table, Peer Review, Advocatus Diaboli, Delphi, Debatte, Task Force, Verhandlung), dokumentierte Entscheidungen und abweichende Meinungen' },
				{ dimension: 'Zustand und Wiederherstellung', them: 'Checkpointing und Time-Travel in der Workflow-Runtime', eddi: 'Von der Plattform persistierter Konversationsspeicher; explizite Zustände wie AWAITING_HUMAN' },
				{ dimension: 'Observability und Audit', them: 'OpenTelemetry-Tracing und Middleware-Hooks; wohin die Daten gehen, liegt bei Ihnen', eddi: 'Prometheus-Metriken plus ein HMAC-signiertes, append-only geführtes, sequenzgeprüftes Audit-Ledger mit Verify-Endpunkt' },
				{ dimension: 'Secrets und Identität', them: 'Die Mechanismen Ihrer Plattform, zum Beispiel Azure-Dienste', eddi: 'Integrierter AES-256-GCM Secrets Vault; optionales Keycloak/OIDC mit den Rollen eddi-admin und eddi-approver' },
				{ dimension: 'Ökosystem-Passung', them: 'Tiefe Integration in Microsoft und Azure, einschließlich Foundry-gehosteter Agents', eddi: `Herstellerneutral: ${LLM_PROVIDERS} LLM-Anbieter, lokale Modelle über Ollama oder Jlama, ${MCP_TOOLS} MCP-Tools` },
			],
			betterThemTitle: 'Wo Microsoft Agent Framework die bessere Wahl ist',
			betterThem: [
				'Ihr Team schreibt .NET, und die Agents gehören in einen bestehenden C#-Service mit eigenem Deployment und eigenen Tests.',
				'Sie bauen auf Azure und möchten erstklassige Integration mit Foundry und den umgebenden Microsoft-Diensten.',
				'Sie haben Semantic-Kernel-Plugins oder AutoGen-Code, und der unterstützte Migrationspfad ist günstiger als ein Plattformwechsel.',
				'Der Workflow braucht Kontrollfluss, den Konfiguration nicht ausdrücken kann, etwa eigene Graph-Topologien, Checkpoint-Verzweigung oder Time-Travel-Debugging.',
				'Sie möchten ein Entwickler-SDK und selbst entscheiden, wie Sie es hosten, absichern und beobachten.',
			],
			betterEddiTitle: 'Wo EDDI die bessere Wahl ist',
			betterEddi: [
				'Agent-Verhalten muss Konfiguration sein, die Reviewer lesen und ohne Rebuild zwischen Umgebungen promoten können.',
				'Ein Security-Review wird fragen, welcher Code zur Inferenzzeit läuft, und die Antwort soll lauten: in der Plattform keiner.',
				'Freigaben müssen auf Ebene von Turn, Tool-Aufruf und Gruppenphase existieren, mit einem signierten Nachweis, wer was entschieden hat.',
				'Sie brauchen eine fertige Manager-UI, einen Secrets Vault, eine API und ein Audit-Ledger, statt sie um ein SDK herum zusammenzusetzen.',
				'Sie möchten cloudneutral bleiben: Kubernetes, OpenShift, On-Premises oder Air-Gapped mit lokalen Modellen.',
			],
			migrationTitle: 'Umzug von AutoGen, Semantic Kernel oder Agent Framework',
			migrationIntro:
				'Rechnen Sie mit einer Übersetzung der Absicht, nicht des Codes. Rollen und Tools lassen sich übertragen; Graph-Logik wird zu Behavior Rules, und alles, was echten Code braucht, wandert hinter ein MCP-Tool oder einen OpenAPI-Endpunkt.',
			migrationSteps: [
				{ from: 'Agent mit Instructions', to: 'EDDI-Agent mit einem LLM-Task und einer System-Nachricht' },
				{ from: 'Semantic-Kernel-Plugin oder -Funktion', to: 'MCP-Tool oder eine per httpCall oder OpenAPI-Import eingebundene API' },
				{ from: 'Workflow-Graph oder AutoGen-Team', to: 'Behavior Rules für das Routing oder ein Gruppendiskussionsstil für Multi-Agent-Arbeit' },
				{ from: 'Human-in-the-Loop-Schritt', to: 'PAUSE_CONVERSATION-Regel, toolApprovals-Globs oder requiresApproval auf einer Gruppenphase' },
				{ from: 'Checkpoint-Store', to: 'Konversationsspeicher mit den Scopes step, conversation und longTerm' },
				{ from: 'Middleware und Filter', to: 'Behavior Rules und Tool-Freigaberichtlinien' },
				{ from: 'OpenTelemetry-Traces', to: 'Prometheus-Metriken und das Audit-Ledger' },
			],
			faq: [
				{
					question: 'Ist Microsoft Agent Framework der Ersatz für AutoGen und Semantic Kernel?',
					answer:
						'Microsoft stellt es als Nachfolger beider vor und veröffentlicht Migrationsleitfäden. Stand Oktober 2026 erhält Semantic Kernel Fixes, während neue Funktionen in Agent Framework landen, und AutoGen befindet sich im Wartungsmodus. Wenn Sie ein neues Projekt auf dem Microsoft-Stack starten, ist Agent Framework das, was Sie gegen EDDI evaluieren sollten.',
				},
				{
					question: 'Kann EDDI AutoGen für Multi-Agent-Konversationen ersetzen?',
					answer:
						'In vielen Fällen ja. Die EDDI-Gruppendiskussionen decken die Stile Round Table, Peer Review, Advocatus Diaboli, Delphi, Debatte, Task Force und Verhandlung ab, mit Phasen, die eine menschliche Freigabe verlangen können, und einer dokumentierten Entscheidung samt abweichender Meinung. Wenn Ihre Agents freie Koordination auf Code-Ebene brauchen, passt ein SDK besser.',
				},
				{
					question: 'Muss ich Azure aufgeben, um EDDI zu nutzen?',
					answer:
						'Nein. EDDI unterstützt Azure OpenAI als Anbieter und läuft auf Kubernetes, einschließlich AKS. Die tiefe Azure- und Foundry-Integration von Agent Framework bietet es nicht. Wägen Sie das ab, wenn Sie auf das Microsoft-Ökosystem festgelegt sind.',
				},
				{
					question: 'Können beide zusammenarbeiten?',
					answer:
						'Ja. EDDI stellt einen MCP-Server, eine REST-API und eine OpenAI-kompatible API bereit und kann MCP-Server und A2A-Agents nutzen. Ein .NET-Service kann EDDI-Agents als Tools aufrufen, und EDDI kann Ihren Service über httpCall aufrufen.',
				},
			],
		},

		// ─── CrewAI ───────────────────────────────────────────────────
		'eddi-vs-crewai': {
			title: 'EDDI vs. CrewAI',
			description:
				'Wie sich EDDI zu CrewAI für Multi-Agent-Systeme verhält: rollenbasierte Crews und Flows in Python versus Config-as-Code auf einer deploybaren Plattform, Codeausführung, Human-in-the-Loop, Governance und wann CrewAI das bessere Tool ist.',
			summary: 'Rollenbasierte Crews und Flows in Python versus gesteuerte Multi-Agent-Konfiguration auf einer Plattform.',
			verdict:
				'<strong>Wählen Sie CrewAI</strong>, wenn Sie ein Python-Team sind und rollenspielende Agents wollen, die gemeinsam an einer Aufgabe arbeiten, definiert und abgestimmt im Code. <strong>Wählen Sie EDDI</strong>, wenn Multi-Agent-Arbeit als gesteuerter Service laufen muss: deterministische Regeln um das LLM, Freigabe-Gates und ein signierter Audit-Trail, konfiguriert statt programmiert.',
			whatItIsTitle: 'Was CrewAI ist',
			whatItIs:
				'CrewAI ist ein MIT-lizenziertes, eigenständiges Python-Framework mit eigenen Primitiven für Agents, Tasks, Crews, Flows und Tools. Crews sind Teams rollenbasierter Agents, die autonom an einer Aufgabe zusammenarbeiten. Flows sind ereignisgesteuerte Workflows, die präzise Kontrolle über Ausführungspfade, Zustand und Verzweigungen geben. Das Projekt unterstützt menschliche Eingaben während der Ausführung, und die kommerzielle CrewAI AMP Suite ergänzt eine Control Plane für verwaltetes Deployment, Observability, Governance und Support.',
			archetypeTitle: 'Autonome Crews versus gesteuerte Konfiguration',
			archetype:
				'CrewAI setzt auf Agent-Autonomie: Sie beschreiben Rollen, Ziele und Tasks, und die Crew findet selbst heraus, wie sie zusammenarbeitet, mit Flows, wenn Sie engere Kontrolle brauchen. EDDI setzt auf Kontrolle: Deterministische Behavior Rules entscheiden, welche Aktion als Nächstes läuft, das LLM wird in deklarierten Tasks aufgerufen, und Multi-Agent-Arbeit folgt benannten Gruppendiskussionsstilen mit expliziten Phasen. Mit beiden lässt sich ein Multi-Agent-System bauen. Sie unterscheiden sich darin, wie viel Sie vorab festlegen und wie viel das Modell zur Laufzeit entscheidet.',
			tableTitle: 'Agents im Code versus Agents als Konfiguration',
			tableHeaders: { dimension: 'Dimension', them: 'CrewAI', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Zentrale Abstraktion', them: 'Crews rollenbasierter Agents mit Tasks, plus ereignisgesteuerte Flows', eddi: 'Agent-Konfiguration: Pipeline, Behavior Rules, LLM-Tasks und Tools als versioniertes JSON' },
				{ dimension: 'Sprache und Runtime', them: 'Python-Bibliothek, eingebettet in Ihre Anwendung', eddi: 'JVM-Plattform (Quarkus) mit Virtual Threads; Agents brauchen keinen Code' },
				{ dimension: 'Lizenz', them: 'MIT (Open-Source-Framework); kommerzielle AMP Suite obendrauf', eddi: EDDI_LICENSE },
				{ dimension: 'Kontrollfluss', them: 'Agents entscheiden die Zusammenarbeit zur Laufzeit; Flows ergänzen explizite Verzweigungen im Code', eddi: 'Deterministische Behavior Rules wählen die nächste Aktion; Gruppenstile definieren die Phasen' },
				{ dimension: 'Codeausführung', them: 'Das Code-Interpreter-Tool wurde aus crewai-tools entfernt, und Codeausführung auf Agent-Ebene ist veraltet (deprecated); die Dokumentation empfiehlt eine dedizierte Sandbox wie E2B oder Modal', eddi: 'Kein eval() und keine Codeausführung zur Laufzeit in der Plattform; Logik wird deklariert oder liegt hinter einem MCP-Tool oder HTTP-Aufruf' },
				{ dimension: 'Human in the Loop', them: 'Menschliche Eingabe während der Ausführung unterstützt', eddi: 'Gates auf Turns, Tool-Aufrufen und Gruppenphasen, Timeout-Richtlinien, Freigaben im Manager, per REST, MCP oder Slack' },
				{ dimension: 'Multi-Agent-Muster', them: 'Crew-Prozesse und Flows im Code', eddi: 'Gruppendiskussionen mit 7 Stilen plus eigenen, dokumentierte Entscheidungen, Stimmenauszählungen und abweichende Meinungen, signierte Transkript-Einträge' },
				{ dimension: 'Verwaltung und Governance', them: 'Control Plane mit Tracing und Governance in der kommerziellen AMP Suite', eddi: 'Manager-UI, Secrets Vault, optionales Keycloak/OIDC und das Audit-Ledger im Open-Source-Build' },
				{ dimension: 'Audit-Trail', them: 'Tracing und Observability über die Control Plane oder Ihre eigenen Werkzeuge', eddi: 'HMAC-signiertes, append-only geführtes, sequenzgeprüftes Ledger; GET /auditstore/verify/{conversationId}' },
				{ dimension: 'Modelle', them: 'Viele Anbieter aus Python', eddi: `${LLM_PROVIDERS} LLM-Anbieter plus lokale Modelle über Ollama oder Jlama` },
			],
			betterThemTitle: 'Wo CrewAI die bessere Wahl ist',
			betterThem: [
				'Ihr Team arbeitet Python-first und möchte Agents, Tools und Crew-Logik im selben Repository wie den restlichen Code.',
				'Sie möchten autonome, rollenspielende Zusammenarbeit schnell prototypen und durch Code-Änderungen abstimmen.',
				'Sie brauchen eigene Python-Tools mit beliebiger Logik, die Konfiguration nicht ausdrücken kann.',
				'Sie bevorzugen eine Bibliothek, die Sie einbetten, gegenüber einer Plattform, die Sie betreiben.',
				'Die Control Plane der kommerziellen AMP Suite passt dazu, wie Ihre Organisation Crews deployen und überwachen will.',
			],
			betterEddiTitle: 'Wo EDDI die bessere Wahl ist',
			betterEddi: [
				'Multi-Agent-Verhalten muss vorhersagbar genug zum Prüfen sein: benannte Phasen, dokumentierte Entscheidungen und Regeln statt freier Autonomie.',
				'Ein Mensch muss bestimmte Tool-Aufrufe oder Gruppenphasen freigeben, und die Entscheidung muss in einem signierten Ledger festgehalten werden.',
				'Sie möchten Governance, eine Management-UI und Audit im Open-Source-Build, nicht in einer separaten kommerziellen Stufe.',
				'Ein Security-Review wird fragen, welcher Code zur Inferenzzeit läuft, und die Plattform soll keinen ausführen.',
				'Nicht-Entwickler müssen das Agent-Verhalten ohne Pull Request ändern können.',
			],
			migrationTitle: 'Eine Crew von CrewAI umziehen',
			migrationIntro:
				'Rollen und Ziele übersetzen sich in Prompts und Gruppenphasen. Am stärksten ändert sich die Autonomie: Was eine Crew zur Laufzeit entschieden hat, wird zu einer Regel, einer Phase oder einem Freigabe-Gate, das Sie festschreiben.',
			migrationSteps: [
				{ from: 'Agent (Rolle, Ziel, Backstory)', to: 'EDDI-Agent mit einer System-Nachricht in einem LLM-Task' },
				{ from: 'Task', to: 'Pipeline-Task oder eine Phase in einer Gruppendiskussion' },
				{ from: 'Crew-Prozess', to: 'Gruppendiskussionsstil, zum Beispiel Task Force oder Round Table' },
				{ from: 'Flow mit Routern', to: 'Behavior Rules mit Bedingungstypen wie inputmatcher und actionmatcher' },
				{ from: 'Eigenes Python-Tool', to: 'MCP-Tool, httpCall oder eine per OpenAPI-Import eingebundene API' },
				{ from: 'Menschliche Eingabe', to: 'PAUSE_CONVERSATION-Regel, toolApprovals oder requiresApproval auf einer Phase' },
				{ from: 'Memory und Wissensquellen', to: 'Scopes des Konversationsspeichers und RAG-Wissensbasen' },
			],
			faq: [
				{
					question: 'Ist EDDI eine CrewAI-Alternative für Multi-Agent-Systeme?',
					answer:
						'Ja, für Teams, die Multi-Agent-Zusammenarbeit als gesteuerten Service wollen. Die EDDI-Gruppendiskussionen laufen in benannten Stilen mit expliziten Phasen und dokumentieren Entscheidungen und abweichende Meinungen. CrewAI gibt Agents mehr Autonomie und wird in Python definiert, was zu Teams passt, die im Code bleiben wollen.',
				},
				{
					question: 'Hat EDDI autonome Agents wie CrewAI?',
					answer:
						'EDDI-Agents können Tools aufrufen und in Gruppendiskussionen zusammenarbeiten, aber der Kontrollfluss wird von Behavior Rules und Phasen bestimmt, die Sie konfigurieren, und nicht den Agents zum Improvisieren überlassen. Das ist ein bewusster Tausch von Autonomie gegen Vorhersagbarkeit.',
				},
				{
					question: 'Warum ist Codeausführung hier relevant?',
					answer:
						'Agents, die generierten Code ausführen, brauchen Isolation. CrewAI ist von seinem integrierten Code-Interpreter abgerückt und empfiehlt einen dedizierten Sandbox-Dienst. EDDI umgeht die Frage innerhalb der Plattform, indem es zur Laufzeit keinen Code auswertet. Alles, was echte Logik braucht, liegt hinter einem Tool, das Sie deklarieren und freigeben können.',
				},
				{
					question: 'Können wir beides nutzen?',
					answer:
						'Ja. Ein CrewAI-Service kann EDDI über die REST-API, den MCP-Server oder die OpenAI-kompatible API aufrufen, und EDDI kann einen CrewAI-Endpunkt über httpCall aufrufen. CrewAI für Experimente auf Code-Ebene und EDDI für gesteuerte Produktions-Agents zu nutzen, ist eine vernünftige Aufteilung.',
				},
			],
		},

		// ─── Dify ─────────────────────────────────────────────────────
		'eddi-vs-dify': {
			title: 'EDDI vs. Dify',
			description:
				'Wie sich EDDI zu Dify beim Bau und Betrieb von LLM-Agents verhält: visueller Workflow-Builder und Code-Node versus Config-as-Code, Lizenz- und Mandantenbedingungen, menschliche Eingabe, Audit und wann Dify das richtige Tool ist.',
			summary: 'Visueller Workflow-Builder und App-Plattform versus Config-as-Code mit eingebauter Governance.',
			verdict:
				'<strong>Wählen Sie Dify</strong>, wenn Sie einen ausgereiften visuellen Builder, einen Plugin-Marktplatz und einen schnellen Weg zu LLM-Apps wollen, die Ihr Team oder Ihre Kunden noch diese Woche nutzen können. <strong>Wählen Sie EDDI</strong>, wenn Agents unter einer eindeutigen Apache 2.0 Lizenz laufen müssen, ohne Code-Nodes, mit Freigabe-Gates auf mehreren Ebenen und einem Audit-Ledger, das auf Nachweise ausgelegt ist.',
			whatItIsTitle: 'Was Dify ist',
			whatItIs:
				'Dify ist eine Open-Source-Plattform zum Bau von LLM-Anwendungen. Sie bietet eine visuelle Workflow-Oberfläche, eine RAG-Pipeline von der Aufnahme bis zum Retrieval, Agents mit Tools aus dem Marktplatz, von MCP-Servern oder eigenen APIs, eine Prompt-IDE, Backend-as-a-Service-APIs und Integrationen mit Observability-Tools wie Langfuse, Opik und Arize Phoenix. Sie können Dify Cloud nutzen, die Community Edition mit Docker Compose selbst hosten oder Dify Enterprise anfragen, das SSO, RBAC und Support-SLAs ergänzt. Der Code-Node führt Python oder JavaScript in einer Sandbox aus, und der Human-Input-Node pausiert einen Workflow, bis eine Person antwortet.',
			archetypeTitle: 'App-Builder versus gesteuerte Agent-Plattform',
			archetype:
				'Dify und EDDI überschneiden sich bei RAG, Tools und Agents, optimieren aber für unterschiedliche Menschen. Dify optimiert für Builder, die Anwendungen visuell zusammenstellen und schnell ausliefern wollen, mit dem Code-Node als Notausgang. EDDI optimiert für Betreiber, die deklaratives, prüfbares Agent-Verhalten als Konfiguration mit Governance darum herum brauchen. Viele Teams beginnen sinnvollerweise in Dify, und manche wechseln, sobald Anforderungen an Mandantenfähigkeit, Lizenzierung oder Audit aufkommen.',
			tableTitle: 'Komfort für Builder versus Betriebsfläche',
			tableHeaders: { dimension: 'Dimension', them: 'Dify', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Zentrale Abstraktion', them: 'Visuelle Workflow- und Chatflow-Oberfläche, mit einer Prompt-IDE', eddi: 'Config-as-Code: JSON-Ressourcen, erstellt im Manager oder per API, versioniert wie Quellcode' },
				{ dimension: 'Lizenz', them: 'Dify Open Source License: Apache 2.0 plus Bedingungen. Der mandantenfähige Betrieb des Quellcodes braucht eine schriftliche Genehmigung, und Logo und Copyright im Frontend müssen erhalten bleiben', eddi: EDDI_LICENSE },
				{ dimension: 'Eigene Logik', them: 'Der Code-Node führt Python oder JavaScript in einer Sandbox aus, die Dateisystem, ausgehendes Netzwerk und Systembefehle blockiert, mit festem Paketsatz', eddi: 'Keine Codeauswertung zur Laufzeit; Logik wird deklariert oder liegt hinter einem MCP-Tool oder HTTP-Aufruf' },
				{ dimension: 'Human in the Loop', them: 'Der Human-Input-Node pausiert einen Workflow für ein Formular, das in der Web-App oder per E-Mail beantwortet wird; Standardwartezeit 3 Tage, danach ein Timeout-Zweig', eddi: 'Gates auf Turns, Tool-Aufrufen und Gruppenphasen; Timeout-Richtlinien umfassen WAIT_INDEFINITELY, AUTO_APPROVE, AUTO_REJECT und ABORT; Freigaben im Manager und in Slack' },
				{ dimension: 'Tools und Integrationen', them: 'Marktplatz, MCP-Server und eigene APIs', eddi: `${MCP_TOOLS} MCP-Tools, ein MCP-Client, OpenAPI-Import, httpCall, A2A` },
				{ dimension: 'RAG', them: 'Integrierte Wissens-Pipeline mit Dokumentextraktion', eddi: `${EMBEDDING_PROVIDERS} Embedding-Anbieter, ${VECTOR_STORES} Vector Stores, plus httpCall-RAG ohne zusätzliche Infrastruktur` },
				{ dimension: 'Multi-Agent', them: 'Agents und Workflow-Nodes, auf der Oberfläche zusammengesetzt', eddi: 'Gruppendiskussionen mit 7 Stilen, dokumentierte Entscheidungen und abweichende Meinungen, optionale menschliche Freigabe pro Phase' },
				{ dimension: 'Identität und Zugriff', them: 'Workspaces; SSO und RBAC über Dify Enterprise', eddi: 'Optionales Keycloak/OIDC mit den Rollen eddi-admin und eddi-approver im Open-Source-Build' },
				{ dimension: 'Observability und Audit', them: 'Logs und Monitoring, Integrationen mit Langfuse, Opik und Arize Phoenix', eddi: 'Prometheus-Metriken plus ein HMAC-signiertes, append-only geführtes, sequenzgeprüftes Audit-Ledger' },
				{ dimension: 'Deployment', them: 'Dify Cloud, Docker Compose, Enterprise auf Anfrage', eddi: 'Docker, Helm, Kustomize, OpenShift (von Red Hat zertifiziertes Image, Operator über OperatorHub)' },
			],
			betterThemTitle: 'Wo Dify die bessere Wahl ist',
			betterThem: [
				'Sie möchten eine visuelle Oberfläche, die Nicht-Entwickler lesen und erweitern können, mit schnellem Feedback beim Bauen.',
				'Ein Plugin-Marktplatz und fertige Workflow-Vorlagen sparen Ihnen echte Integrationszeit.',
				'Sie möchten eine gehostete Option (Dify Cloud) und nichts selbst betreiben.',
				'Ein Code-Node ist eine Funktion, die Sie wollen: kleine Datentransformationen in Python oder JavaScript innerhalb des Workflows.',
				'Sie betreiben ein internes Deployment für Ihr eigenes Team, sodass die Lizenzbedingung zur Mandantenfähigkeit für Sie nicht greift.',
			],
			betterEddiTitle: 'Wo EDDI die bessere Wahl ist',
			betterEddi: [
				'Ihre Rechtsabteilung braucht eine schlichte Apache 2.0 Lizenz, auch für den Betrieb vieler Mandanten oder Kunden aus einem Deployment.',
				'Der Security-Review verbietet Codeausführung innerhalb der Automatisierungsplattform, ob in einer Sandbox oder nicht.',
				'Bestimmte Tool-Aufrufe oder Gruppenphasen brauchen eine menschliche Entscheidung, festgehalten in einem signierten Ledger.',
				'Agent-Verhalten muss als Konfiguration versioniert, gediffed und zwischen Umgebungen promotet werden.',
				'Sie brauchen Kubernetes, OpenShift oder Air-Gapped-Deployment mit lokalen Modellen.',
			],
			migrationTitle: 'Eine App von Dify umziehen',
			migrationIntro:
				'Dify-Apps sind visuelle Graphen und EDDI-Agents sind Konfiguration, daher ist dies eine Übersetzung und kein Import. Am meisten Überlegung verlangen die Code-Nodes, die zu Konfiguration oder einem deklarierten Tool werden.',
			migrationSteps: [
				{ from: 'Chatflow oder Workflow', to: 'EDDI-Agent: Pipeline plus Behavior Rules' },
				{ from: 'LLM-Node und Prompt', to: 'LLM-Task mit einer System-Nachricht und versionierten Prompt-Snippets' },
				{ from: 'Wissensbasis', to: 'EDDI-RAG-Wissensbasis mit einem Embedding-Anbieter und einem Vector Store' },
				{ from: 'Tool, Plugin oder MCP-Server', to: 'MCP-Client-Verbindung, httpCall oder eine per OpenAPI-Import eingebundene API' },
				{ from: 'Code node', to: 'Behavior Rules und Prompt-Logik oder ein MCP-Tool, falls echter Code nötig ist' },
				{ from: 'Human Input node', to: 'PAUSE_CONVERSATION-Regel oder toolApprovals, mit einer Timeout-Richtlinie' },
				{ from: 'API-Schlüssel der Anbieter', to: 'Secrets-Vault-Einträge, referenziert als ${vault:key}' },
			],
			faq: [
				{
					question: 'Ist Dify Open Source?',
					answer:
						'Dify veröffentlicht seinen Quellcode unter der Dify Open Source License, die Apache 2.0 mit zusätzlichen Bedingungen ist: Sie dürfen den Quellcode nicht ohne schriftliche Genehmigung zum Betrieb einer mandantenfähigen Umgebung verwenden, und Sie dürfen Logo oder Copyright-Hinweise nicht aus dem Frontend entfernen. Das ist nicht die schlichte Apache 2.0 Lizenz, die EDDI verwendet. Lesen Sie sie daher mit Ihrer Rechtsabteilung, falls eine der beiden Bedingungen zutreffen könnte.',
				},
				{
					question: 'Hat EDDI einen visuellen Builder wie Dify?',
					answer:
						'Der EDDI Manager ist eine produktionsreife React-UI zum Bauen, Deployen und Überwachen von Agents, verfügbar in 11 Sprachen. Er ist eine Verwaltungsoberfläche und keine Node-Oberfläche: Sie konfigurieren Agents, Prompts, Tools und Pipelines, und jede Änderung ist eine versionierte Ressource statt eines Diagramms.',
				},
				{
					question: 'Warum verzichtet EDDI auf einen Code-Node?',
					answer:
						'Ein Code-Node in einer Sandbox ist eine vernünftige Funktion, und Dify schränkt ein, was er erreichen kann. Aber jede Codeausführung innerhalb der Plattform ist eine Angriffsfläche, die ein Security-Review prüfen muss. EDDI hält das Agent-Verhalten deklarativ, sodass ein Tool genau das kann, was Sie deklarieren und freigeben.',
				},
				{
					question: 'Können wir Dify und EDDI gemeinsam nutzen?',
					answer:
						'Ja. Dify kann MCP-Server und eigene APIs nutzen, und EDDI stellt einen MCP-Server und eine REST-API bereit, sodass ein Dify-Workflow einen EDDI-Agent als gesteuerten Schritt aufrufen kann. EDDI kann die Dify-API über httpCall aufrufen.',
				},
			],
		},

		// ─── n8n ──────────────────────────────────────────────────────
		'eddi-vs-n8n': {
			title: 'EDDI vs. n8n',
			description:
				'Wie sich EDDI zu n8n bei der Orchestrierung von KI-Agents verhält: Runtime- und Nebenläufigkeitsmodell, Codeausführung und Sicherheitslage, Lizenzierung, Governance und wann n8n das bessere Tool bleibt.',
			summary: 'Workflow-Automatisierungsplattform versus KI-Orchestrierungs-Middleware.',
			verdict:
				'<strong>Wählen Sie n8n</strong>, wenn es darum geht, SaaS-Systeme zu verbinden und Geschäftsprozesse zu automatisieren, und KI nur ein Schritt in einem größeren Workflow ist. <strong>Wählen Sie EDDI</strong>, wenn der KI-Agent <em>das</em> Produkt ist und einen Enterprise-Security-Review bestehen muss: regulierte Daten, Audit-Pflichten, Isolation pro Mandant und Freigabe-Gates für das, was der Agent tun darf.',
			whatItIsTitle: 'Was n8n ist',
			whatItIs:
				'n8n ist eine auf Node.js aufbauende Workflow-Automatisierungsplattform mit visueller Oberfläche und Hunderten vorgefertigter Integrationen. Sie lässt sich selbst hosten, hat eine große und tatsächlich aktive Community, und ihre auf LangChain basierenden Nodes erlauben es, LLM-Aufrufe in jeden Workflow einzubauen. Sie ist einer der schnellsten Wege, Systeme miteinander zu verbinden.',
			archetypeTitle: 'Andere Kategorie, überlappender Anwendungsfall',
			archetype:
				'Diese Tools sind nicht derselbe Archetyp. n8n ist eine <strong>Workflow-Automatisierungsplattform</strong>, in der KI ein Node-Typ unter vielen ist. EDDI ist <strong>KI-Orchestrierungs-Middleware</strong>, in der der Agent, sein Gedächtnis, seine Tools und seine Governance das Produkt sind. Die Überschneidung ist real, Teams bauen tatsächlich Agents in n8n, aber beide gehen gegensätzliche Kompromisse ein, sobald ein Agent regulierte Daten verarbeitet.',
			tableTitle: 'Architektur und Governance',
			tableHeaders: { dimension: 'Dimension', them: 'n8n', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Runtime', them: 'Node.js, Event Loop mit einem Thread', eddi: 'JVM mit Virtual Threads (Project Loom), echte Parallelität für I/O-gebundene LLM-Aufrufe' },
				{ dimension: 'Eigene Logik', them: 'Code-Nodes führen JavaScript oder Python zur Laufzeit aus', eddi: 'Keine Codeauswertung zur Laufzeit, Agent-Verhalten ist ausschließlich deklaratives JSON' },
				{ dimension: 'Lizenz', them: 'Sustainable Use License (Fair-Code), nicht OSI-zertifiziert; separate Bedingungen für einige kommerzielle Nutzungen', eddi: EDDI_LICENSE },
				{ dimension: 'Integrationsbreite', them: 'Hunderte vorgefertigte SaaS-Konnektoren, ihr stärkstes Argument', eddi: `${MCP_TOOLS} MCP-Tools plus jeder OpenAPI- oder REST-Endpunkt über httpCall` },
				{ dimension: 'Authentifizierung', them: 'Integrierte Benutzerverwaltung; SSO in kostenpflichtigen Stufen', eddi: 'Optionales Keycloak/OIDC mit den Rollen eddi-admin und eddi-approver im Open-Source-Build' },
				{ dimension: 'Audit-Trail', them: 'Ausführungsverlauf und Anwendungslogs', eddi: 'HMAC-signiertes, append-only geführtes, sequenzgeprüftes Audit-Ledger' },
				{ dimension: 'Menschliche Freigabe', them: 'Wait-Nodes und manuelle Trigger innerhalb eines Workflows', eddi: 'Pause auf Turn-Ebene, Freigabe pro Tool-Aufruf, Timeout-Richtlinien, Slack-Freigaben, alles protokolliert' },
				{ dimension: 'Compliance-Lage', them: 'Pro Deployment umgesetzt', eddi: `Infrastruktur für DSGVO, HIPAA und EU AI Act eingebaut, ${FRAMEWORKS} Frameworks adressiert` },
			],
			betterThemTitle: 'Wo n8n die bessere Wahl ist',
			betterThem: [
				'Die Last ist allgemeine Geschäftsautomatisierung statt KI: CRMs synchronisieren, Dateien verschieben, auf Webhooks reagieren.',
				'Sie brauchen mehr Breite bei SaaS-Konnektoren als Tiefe bei Agent-Governance. Hier gewinnt n8n eindeutig.',
				'Ein Nicht-Entwickler-Team verantwortet die Workflows und braucht eine visuelle Oberfläche, um darüber nachzudenken.',
				'Sie wollen heute Nachmittag etwas laufen haben, und die beteiligten Daten sind nicht reguliert.',
			],
			betterEddiTitle: 'Wo EDDI die bessere Wahl ist',
			betterEddi: [
				'Der Agent berührt regulierte Daten, und ein Security-Review wird fragen, welcher Code zur Inferenzzeit läuft. EDDI antwortet: keiner.',
				'Sie brauchen Isolation pro Mandant, Kontingente und Kostenzuordnung über viele Kunden in einem Deployment.',
				'Ein Mensch muss einzelne Tool-Aufrufe vor der Ausführung freigeben, und die Freigabe wird in einem signierten Ledger festgehalten.',
				'Agent-Verhalten muss versionskontrolliert, gediffed und als Konfiguration zwischen Umgebungen promotet werden.',
				`Die Lizenzierung muss für Weiterverbreitung oder Air-Gapped-Deployment eindeutig sein: ${EDDI_LICENSE}.`,
			],
			migrationTitle: 'Einen Workflow von n8n umziehen',
			migrationIntro:
				'Die meisten agentenartigen n8n-Workflows lassen sich sauber abbilden. Die Teile, bei denen das nicht gilt, sind meist Code-Nodes, und das ist durchaus gewollt: Was sie tun, muss entweder zu Konfiguration oder zu einem deklarierten Tool werden.',
			migrationSteps: [
				{ from: 'Workflow', to: 'EDDI-Package: ein versioniertes Bündel aus Pipeline, Prompts und Tool-Bindungen' },
				{ from: 'HTTP Request node', to: 'httpCall-Tool-Definition, mit SSRF-Schutz und Path-Traversal-Absicherung' },
				{ from: 'Code node', to: 'Behavior Rules und Prompt-Snippets oder ein MCP-Tool, falls echte Logik nötig ist' },
				{ from: 'Credentials-Speicher', to: 'EDDI Secrets Vault (AES-256-GCM), referenziert über den Vault-Schlüssel' },
				{ from: 'AI Agent node', to: 'EDDI-Agent mit persistentem Gedächtnis, Intent-Routing und Modell-Kaskadierung' },
				{ from: 'Wait oder manueller Trigger', to: 'Human-in-the-Loop-Freigabe-Gate mit einer Timeout-Richtlinie' },
			],
			migrationGuideLabel: 'Vollständiges Playbook: einen KI-Workflow von n8n zu EDDI migrieren',
			faq: [
				{
					question: 'Ist EDDI ein direkter Ersatz für n8n?',
					answer:
						'Nein, und das will es auch nicht sein. n8n deckt allgemeine Workflow-Automatisierung über Hunderte von SaaS-Tools ab. EDDI deckt die Orchestrierung von KI-Agents mit Enterprise-Governance ab. Teams betreiben häufig beides: n8n für die Verkabelung von Geschäftsprozessen, EDDI für die Agents, die Audit-Trails und Freigabe-Gates brauchen.',
				},
				{
					question: 'Kann EDDI n8n aufrufen oder umgekehrt?',
					answer:
						'Beides. EDDI stellt einen MCP-Server und eine REST-API bereit, sodass ein n8n-Workflow einen EDDI-Agent als Schritt aufrufen kann. EDDI kann über sein httpCall-Tool einen n8n-Webhook aufrufen. Jedes Tool für das einzusetzen, was es gut kann, ist eine vernünftige Architektur.',
				},
				{
					question: 'Warum ist Codeausführung zur Laufzeit so wichtig?',
					answer:
						'Ein Code-Node ist beliebiger Code, der innerhalb Ihrer Automatisierungsplattform läuft. Das ist bequem, und es ist zugleich eine ganze Klasse von Schwachstellen: Sandbox-Ausbrüche, Injection über nicht vertrauenswürdige Eingaben und Rechteausweitung beginnen alle dort. EDDI verbietet die Codeauswertung zur Laufzeit kategorisch, sodass Agent-Verhalten JSON-Konfiguration ist, die vor der Auslieferung geprüft, gediffed und freigegeben werden kann.',
				},
				{
					question: 'Ist n8n Open Source?',
					answer:
						'n8n ist Fair-Code und wird unter der Sustainable Use License verbreitet. Der Quellcode ist verfügbar, und Selbst-Hosting für interne Nutzung ist erlaubt, aber es ist keine von der OSI zertifizierte Open-Source-Lizenz, und einige kommerzielle Nutzungen erfordern separate Bedingungen. EDDI steht unter Apache 2.0. Wenn Ihre Rechtsabteilung eine eindeutige Antwort zur Weiterverbreitung braucht, ist dieser Unterschied relevant.',
				},
			],
		},

		// ─── Flowise ──────────────────────────────────────────────────
		'eddi-vs-flowise': {
			title: 'EDDI vs. Flowise',
			description:
				'Wie sich EDDI zu Flowise beim Bau und Betrieb von LLM-Agents verhält: Prototyping-Tempo versus Produktions-Governance, RAG-Architektur, Mandantenfähigkeit und wann Flowise das richtige Tool ist.',
			summary: 'Prototyping-Tempo versus Betriebsfläche für die Produktion.',
			verdict:
				'<strong>Wählen Sie Flowise</strong>, um diese Woche einen funktionierenden RAG-Chatbot vor Stakeholder zu bringen. <strong>Wählen Sie EDDI</strong>, wenn aus diesem Prototyp ein System werden muss, das mehrere Teams betreiben, das ein Compliance-Beauftragter freigibt und von dem ein Kunde abhängt.',
			whatItIsTitle: 'Was Flowise ist',
			whatItIs:
				'Flowise ist ein Apache 2.0 lizenzierter visueller Builder für LLM-Anwendungen, gebaut auf Node.js und React und als Hülle um LangChain und LlamaIndex. Sie setzen Chatflows per Drag-and-drop aus Nodes zusammen: ein Loader, ein Splitter, ein Embedding-Modell, ein Vector Store, eine Chain. Um von null zu einem funktionierenden Retrieval-Chatbot zu kommen, geht kaum etwas schneller.',
			archetypeTitle: 'Prototyping-Tempo versus Betriebsfläche',
			archetype:
				'Flowise und EDDI zielen auf unterschiedliche Punkte in einem Projekt. Flowise optimiert die erste Woche: visuelles Zusammenstellen, sofortiges Feedback, eine Vorlage für die meisten gängigen Muster. EDDI optimiert alles danach: wer den Agent ändern darf, was er tun darf, was bei einem Neustart passiert und wie Sie einem Auditor etwas davon nachweisen. Viele Teams sollten tatsächlich in Flowise beginnen.',
			tableTitle: 'Vom Prototyp zur Produktion',
			tableHeaders: { dimension: 'Dimension', them: 'Flowise', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Zentrale Abstraktion', them: 'Visuelle Chatflow-Oberfläche, Node-Graph als JSON serialisiert', eddi: 'Config-as-Code: JSON-Ressourcen, erstellt in einer UI oder per API, versioniert wie Quellcode' },
				{ dimension: 'Runtime', them: 'Node.js Event Loop', eddi: 'JVM mit Virtual Threads, gebaut für viele nebenläufige, I/O-gebundene Konversationen' },
				{ dimension: 'Lizenz', them: 'Apache 2.0, wie bei EDDI', eddi: EDDI_LICENSE },
				{ dimension: 'RAG', them: 'Große Auswahl an Loadern und Vector Stores, pro Flow konfiguriert', eddi: `${EMBEDDING_PROVIDERS} Embedding-Anbieter, ${VECTOR_STORES} Vector Stores, plus httpCall-RAG ohne zusätzliche Infrastruktur` },
				{ dimension: 'Eigene Logik', them: 'Custom-Function- und Tool-Nodes führen JavaScript zur Laufzeit aus', eddi: 'Keine Codeauswertung zur Laufzeit; Logik wird deklariert, nicht ausgeführt' },
				{ dimension: 'Mandantenfähigkeit', them: 'Workspaces in der Enterprise-Edition', eddi: 'Kontingente pro Mandant, Kostenzuordnung und Datenisolation im Open-Source-Build' },
				{ dimension: 'Gedächtnis', them: 'Konversationspuffer und Integrationen externer Speicher', eddi: 'Persistentes Benutzergedächtnis, Dream-Konsolidierung, fortlaufende Zusammenfassungen, tokenbewusstes Fenstern' },
				{ dimension: 'Audit-Trail', them: 'Ausführungs-Traces, auf Debugging ausgelegt', eddi: 'HMAC-signiertes, append-only geführtes Ledger, auf Nachweise ausgelegt' },
				{ dimension: 'Deployment', them: 'Docker, typischerweise eine einzelne Instanz', eddi: 'Docker, Helm, Kustomize und OpenShift (von Red Hat zertifiziertes Image, Operator über OperatorHub)' },
			],
			betterThemTitle: 'Wo Flowise die bessere Wahl ist',
			betterThem: [
				'Sie validieren, ob eine Idee überhaupt funktioniert. Visuelles Zusammenstellen schlägt das Verfassen von Konfiguration, wenn es ums Erkunden geht.',
				'Das Team denkt in Diagrammen und möchte die Retrieval-Pipeline räumlich ausgelegt sehen.',
				'Es ist ein internes Werkzeug für ein Team, ohne Anforderungen an Mandantenfähigkeit, Audit oder Freigaben.',
				'Sie wollen vor dem Mittagessen fünf Retrieval-Strategien ausprobieren.',
			],
			betterEddiTitle: 'Wo EDDI die bessere Wahl ist',
			betterEddi: [
				'Der Chatbot wurde zum Produkt und braucht jetzt SLAs, Mandantenfähigkeit und jemanden, der für Änderungen verantwortlich ist.',
				'Prompt Engineers müssen ohne Redeployment iterieren können, während der Betrieb die Kontrolle darüber behält, was ausgeliefert wird.',
				'Konversationen müssen Neustarts überstehen und Monate später für eine Aufsichtsbehörde rekonstruierbar sein.',
				'Ein Mensch muss bestimmte Tool-Aufrufe freigeben, bevor der Agent darauf handelt.',
				`Das Deployment-Ziel ist Kubernetes oder Air-Gapped-Infrastruktur und muss nachweislich reproduzierbar sein. ${TESTS} Tests laufen bei jedem Merge.`,
			],
			migrationTitle: 'Einen Chatflow von Flowise umziehen',
			migrationIntro:
				'Flowise-Chatflows sind bereits JSON, und die Konzepte passen eng zusammen, daher ist dies meist die mechanischste aller Migrationen.',
			migrationSteps: [
				{ from: 'Chatflow', to: 'EDDI-Package, exportierbar als ZIP mit automatisch entfernten Secrets' },
				{ from: 'Document Loader und Splitter', to: 'EDDI-Konfiguration zur RAG-Dokumentaufnahme' },
				{ from: 'Vector-Store-Node', to: `Einer von ${VECTOR_STORES} unterstützten Vector Stores, per Konfiguration gewählt` },
				{ from: 'Embedding-Node', to: `Einer von ${EMBEDDING_PROVIDERS} Embedding-Anbietern` },
				{ from: 'Chat-Model-Node', to: `LLM-Konfiguration über ${LLM_PROVIDERS} Anbieter, mit verfügbarer Modell-Kaskadierung` },
				{ from: 'Custom-Function-Node', to: 'Behavior Rules, Prompt-Snippets oder ein deklariertes MCP-Tool' },
				{ from: 'Memory-Node', to: 'EDDI Persistent Memory mit Commit-Flag-Speicherrichtlinie' },
			],
			migrationGuideLabel: 'Vollständiges Playbook: einen Chatflow von Flowise zu EDDI migrieren',
			faq: [
				{
					question: 'Sollten wir in Flowise prototypen und dann zu EDDI wechseln?',
					answer:
						'Das ist ein vertretbarer und verbreiteter Weg. Flowise beantwortet, ob eine Retrieval-Strategie funktioniert; EDDI beantwortet, ob Sie sie drei Jahre lang sicher betreiben können. Planen Sie den Wechsel, bevor am Prototyp Produktivnutzer hängen, denn die Migration ist leichter als das Gespräch über Ausfallzeiten.',
				},
				{
					question: 'Beide stehen unter Apache 2.0. Was unterscheidet sich tatsächlich?',
					answer:
						'Die Lizenz ist dieselbe; die Betriebsfläche nicht. EDDI liefert optionales OIDC/Keycloak, ein signiertes Audit-Ledger, Kontingente pro Mandant und Human-in-the-Loop-Freigaben im Open-Source-Build statt hinter einer Enterprise-Stufe.',
				},
				{
					question: 'Hat EDDI einen visuellen Builder?',
					answer:
						'Der EDDI Manager ist eine produktionsreife React-UI zum Bauen, Deployen und Überwachen von Agents, verfügbar in 11 Sprachen. Er ist eine Verwaltungsoberfläche und keine Node-Oberfläche: Sie konfigurieren Agents, Prompts, Tools und Pipelines, und jede Änderung ist eine versionierte Ressource statt eines Diagramms.',
				},
			],
		},

		// ─── Rasa ─────────────────────────────────────────────────────
		'eddi-vs-rasa': {
			title: 'EDDI vs. Rasa',
			description:
				'Wie sich EDDI zu Rasa für Conversational AI verhält: trainiertes NLU und deterministischer Dialog versus LLM-Orchestrierung, Config-as-Code, Multi-Agent-Zusammenarbeit und wann Rasa besser passt.',
			summary: 'Trainiertes NLU und deterministischer Dialog versus LLM-Orchestrierung mit Config-as-Code.',
			verdict:
				'<strong>Wählen Sie Rasa</strong>, wenn Sie streng kontrollierten Dialog über einen festen Intent-Satz brauchen, gelabelte Trainingsdaten haben und ein Python-ML-Team, das es verantwortet. <strong>Wählen Sie EDDI</strong>, wenn der Assistent über Wissen schlussfolgern muss, das sich schneller ändert als ein Retraining-Zyklus, Unternehmenssysteme aufrufen soll und per Konfiguration gesteuert werden soll, statt neu trainiert zu werden.',
			whatItIsTitle: 'Was Rasa ist',
			whatItIs:
				'Rasa ist ein ausgereiftes Conversational-AI-Framework: Intent-Klassifikation und Entity-Extraktion über eine trainierte NLU-Pipeline, dazu Dialogmanagement über Regeln, Stories und Policies. Es ist Python-nativ, selbst hostbar und seit Jahren die Standardantwort für hochvolumige, geskriptete Kundenservice-Assistenten. Rasa Pro ergänzt kommerzielle Stufen, darunter LLM-gesteuerten Dialog.',
			archetypeTitle: 'Gleiches Problem, andere Lösungsgeneration',
			archetype:
				'EDDI und Rasa stammen beide aus der Welt der Conversational AI, und EDDI wird seit 2006 durchgehend als Konversationsplattform entwickelt. Der Unterschied liegt darin, wo die Intelligenz sitzt. Rasa legt sie in ein Modell, das Sie mit Ihren eigenen gelabelten Daten trainieren, was präzise, wiederholbare Kontrolle gibt. EDDI legt sie in orchestrierte LLMs, gesteuert durch deklarative Konfiguration, und tauscht etwas Determinismus gegen Reichweite und Änderungsgeschwindigkeit.',
			tableTitle: 'Dialog, Werkzeuge und die Kosten von Änderungen',
			tableHeaders: { dimension: 'Dimension', them: 'Rasa', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Verstehen', them: 'Trainiertes NLU: Intent-Klassifikation und Entity-Extraktion aus gelabelten Daten', eddi: 'LLM-Verständnis plus intentbasierte Agent-Erkennung und Routing' },
				{ dimension: 'Verhalten ändern', them: 'Trainingsdaten aktualisieren, neu trainieren, evaluieren, neu deployen', eddi: 'JSON-Konfiguration bearbeiten; kein Retraining und kein Redeployment' },
				{ dimension: 'Determinismus', them: 'Hoch. Regeln und Policies machen Abläufe wiederholbar und testbar', eddi: 'Naturgemäß geringer, wiedergewonnen durch Behavior Rules und Freigabe-Gates' },
				{ dimension: 'Sprache', them: 'Python; Custom Actions sind Python-Code', eddi: 'JVM-Runtime; Agent-Logik ist Konfiguration, Tools werden deklariert' },
				{ dimension: 'Tool-Ökosystem', them: 'Ein Custom-Action-Server, den Sie selbst bauen und hosten', eddi: `${MCP_TOOLS} MCP-Tools, integrierte Agent-Tools, plus jeder OpenAPI-Endpunkt` },
				{ dimension: 'Multi-Agent', them: 'Ein Assistent pro Deployment ist das übliche Muster', eddi: 'Koordinatorbasierte Orchestrierung und 7 Gruppendiskussionsstile' },
				{ dimension: 'Lizenzierung', them: 'Community Edition plus kommerziell lizenzierte Rasa-Pro-Stufen; aktuelle Bedingungen prüfen', eddi: EDDI_LICENSE },
				{ dimension: 'Compliance', them: 'Selbst-Hosting unterstützt Datenresidenz; Frameworks werden pro Deployment umgesetzt', eddi: `Audit-Ledger, API für Betroffenenrechte und ${FRAMEWORKS} Frameworks in der Plattform adressiert` },
			],
			betterThemTitle: 'Wo Rasa die bessere Wahl ist',
			betterThem: [
				'Sie haben bereits gelabelte Konversationsdaten und ein ML-Team, das eine NLU-Pipeline pflegen kann.',
				'Regulatorische oder Marken-Vorgaben verlangen einen deterministischen Assistenten mit einem prüfbaren Entscheidungspfad, an dem kein Sprachmodell beteiligt ist.',
				'Sehr hohes Volumen über einen engen Intent-Satz, bei dem die LLM-Kosten pro Turn dominieren würden.',
				'Sie brauchen feine Kontrolle über Konfidenzschwellen der Klassifikation und das Fallback-Verhalten.',
			],
			betterEddiTitle: 'Wo EDDI die bessere Wahl ist',
			betterEddi: [
				'Der Assistent muss aus Dokumenten und Systemen antworten, die sich schneller ändern als ein Retraining-Zyklus.',
				'Fachanwender müssen das Verhalten ohne ML-Engineer, Trainingslauf oder Deployment ändern können.',
				'Das Problem verlangt, dass mehrere spezialisierte Agents zusammenarbeiten statt eines flachen Intent-Baums.',
				'Sie wollen die Flexibilität von LLMs, aber ein Compliance-Beauftragter verlangt Freigabe-Gates und signierte Logs vor dem Livegang.',
				`Sie wollen Lock-in auf der Modellebene vermeiden: ${LLM_PROVIDERS} Anbieter oder ein lokales Modell über Ollama oder Jlama.`,
			],
			migrationTitle: 'Einen Assistenten von Rasa umziehen',
			migrationIntro:
				'Die Abbildung ist konzeptionell und nicht mechanisch, weil beide die Intelligenz an unterschiedlichen Stellen ansiedeln. Rechnen Sie damit, die Intent-Struktur in Routing und Prompts zu übersetzen, statt Dateien zu konvertieren.',
			migrationSteps: [
				{ from: 'Intents und Trainingsbeispiele', to: 'Intentbasierte Agent-Erkennung; die gelabelten Daten werden zu Evaluationsmaterial statt zu Trainingseingabe' },
				{ from: 'Entities und Slots', to: 'Strukturierte Extraktion plus persistentes Benutzergedächtnis' },
				{ from: 'Stories und Regeln', to: 'Behavior Rules und Pipeline-Konfiguration' },
				{ from: 'Custom-Action-Server', to: 'MCP-Tools oder httpCall-Tool-Definitionen' },
				{ from: 'Responses und Domain-Datei', to: 'Prompt-Snippets, wiederverwendbar und versioniert' },
				{ from: 'Fallback-Policy', to: 'Human-in-the-Loop-Eskalation mit einer Timeout-Richtlinie' },
			],
			faq: [
				{
					question: 'Ist EDDI nur ein weiterer LLM-Wrapper, der trainiertes NLU ersetzt?',
					answer:
						'EDDI wird seit 2006 als Konversationsplattform entwickelt, lange vor der aktuellen LLM-Generation, und hat die Teile behalten, auf die es ankam: intentbasiertes Routing, verwalteten Konversationszustand und die Pipeline-Architektur. LLMs haben die Verständnisschicht ersetzt, nicht die Orchestrierung darum herum.',
				},
				{
					question: 'Wir brauchen deterministische Antworten für die Compliance. Schließt das EDDI aus?',
					answer:
						'Nicht unbedingt, aber der Kompromiss sollte explizit sein. LLM-Ausgaben sind nicht deterministisch. EDDI begegnet dem mit Behavior Rules, die Antworten einschränken, menschlichen Freigabe-Gates für folgenreiche Aktionen und einem signierten Audit-Ledger, das festhält, was entschieden wurde und warum. Wenn Ihre Anforderung lautet, dass überhaupt kein Sprachmodell an der Entscheidung beteiligt sein darf, ist Rasa die bessere Antwort.',
				},
				{
					question: 'Können wir während eines Übergangs beides betreiben?',
					answer:
						'Ja. Ein gängiges Muster leitet bekannte, hochvolumige Intents an den bestehenden Rasa-Assistenten und lässt EDDI offene Anfragen und die Systemintegration übernehmen, und verschiebt den Traffic, sobald das Vertrauen wächst. EDDI kann einen Rasa-Endpunkt über httpCall aufrufen.',
				},
			],
		},
	},
};

export default copy;
