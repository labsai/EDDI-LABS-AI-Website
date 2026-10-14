import type { PipelineCopy } from './en';

const copy: PipelineCopy = {
	ui: {
		svgLabel: 'Pipeline eines Gesprächsschritts: Input, Parser, Behavior Rules, Tasks und Output nacheinander, darüber die kontrollierte Tool boundary an den Tasks, darunter die Conversation memory. Jede Stufe ist eine Schaltfläche, die unten ihre Details zeigt.',
		hint: 'Wählen Sie eine Stufe, um zu sehen, was sie tut, wie sie konfiguriert ist und was sie schreibt.',
		what: 'Was hier passiert',
		config: 'Konfiguration',
		memory: 'Conversation memory',
		audit: 'Beispiel für einen Audit-Eintrag',
		auditNote: 'Jeder Pipeline-Task schreibt einen Eintrag: HMAC-signiert, nur anhängend, mit Sequenzprüfung.',
		example: 'Beispielwerte zur Veranschaulichung',
	},
	stages: {
		input: 'Eine Nachricht kommt aus dem Chat, Slack, der API oder einem MCP-Client an. Der Rohtext wird der erste Eintrag eines neuen Schritts in der Conversation memory. Es lief noch kein Task, daher zeigt diese Stufe den Memory-Schritt statt eines Audit-Eintrags.',
		parser: 'Der Parser normalisiert den Text und schlägt ihn in den Wörterbüchern des Agents nach. Aus Wörtern und Phrasen werden semantische Ausdrücke wie trigger(current_weather). Das ist ein Nachschlagen, kein Modellaufruf: Derselbe Text ergibt immer dieselben Ausdrücke.',
		rules: 'Behavior Rules sind WENN-DANN-Bedingungen über den Ausdrücken und der Conversation memory. Jede passende Regel löst Aktionen aus. Das Routing ist Konfiguration statt Code, daher nimmt dieselbe Eingabe jedes Mal denselben Weg.',
		tasks: 'Tasks reagieren auf Aktionen: ein LLM-Aufruf, ein HTTP-Aufruf, ein MCP-Tool oder eine Wissensdatenbank-Abfrage. Jeder Task schreibt einen signierten Audit-Eintrag mit dem, was er gelesen und erzeugt hat, samt Modell- und Tool-Details.',
		tools: 'Jeder Tool-Aufruf überquert unabhängig von seiner Quelle dieselbe Grenze. Aufrufe, die zu einem toolApprovals-Muster passen, pausieren, bis ein Mensch entscheidet. Die Entscheidung landet als hitl.approval-Eintrag im Ledger. Zugangsdaten kommen als ${vault:keyName}-Referenzen aus dem Vault.',
		output: 'Output-Vorlagen machen aus den ausgelösten Aktionen die Antwort: Text und Quick Replies. Die Antwort wird im Memory gespeichert und an den Kanal zurückgegeben, aus dem die Nachricht kam.',
		memory: 'Die Conversation memory hält jeden Schritt (input, expressions, actions, output) und Properties mit Geltungsbereich Schritt, Gespräch oder Nutzer (longTerm). Der Gesprächsstatus (READY, IN_PROGRESS, ENDED, AWAITING_HUMAN oder ERROR) wird mitgespeichert.',
	},
};

export default copy;
