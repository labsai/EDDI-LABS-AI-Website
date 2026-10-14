import type { PipelineCopy } from './en';

const copy: PipelineCopy = {
	ui: {
		svgLabel: 'Pipeline de un turno de conversación: Input, Parser, Behavior Rules, Tasks y Output en secuencia, con una Tool boundary controlada sobre Tasks y la Conversation memory debajo. Cada etapa es un botón que muestra sus detalles más abajo.',
		hint: 'Seleccione una etapa para ver qué hace, su configuración y qué escribe.',
		what: 'Qué ocurre aquí',
		config: 'Configuración',
		memory: 'Conversation memory',
		audit: 'Ejemplo de entrada de auditoría',
		auditNote: 'Cada task del pipeline escribe una entrada: firmada con HMAC, solo de adición y con comprobación de secuencia.',
		example: 'Valores de ejemplo ilustrativos',
	},
	stages: {
		input: 'Llega un mensaje desde el chat, Slack, la API o un cliente MCP. El texto original pasa a ser la primera entrada de un nuevo paso en la Conversation memory. Aún no se ha ejecutado ningún task, así que esta etapa muestra el paso de memoria y no una entrada de auditoría.',
		parser: 'El parser normaliza el texto y lo busca en los diccionarios del agente, convirtiendo palabras y frases en expresiones semánticas como trigger(current_weather). Es una búsqueda, no una llamada a un modelo: el mismo texto produce siempre las mismas expresiones.',
		rules: 'Las Behavior Rules son condiciones SI-ENTONCES sobre las expresiones y la Conversation memory. Cada regla que coincide emite acciones. El enrutamiento es configuración y no código, así que la misma entrada sigue siempre el mismo camino.',
		tasks: 'Los tasks escuchan acciones: una llamada a un LLM, una llamada HTTP, una herramienta MCP o una consulta a una base de conocimiento. Cada task escribe una entrada de auditoría firmada con lo que leyó, lo que produjo y los detalles del modelo y de las herramientas.',
		tools: 'Toda llamada a una herramienta, sea cual sea su origen, cruza el mismo límite. Las llamadas que coinciden con un patrón de toolApprovals se pausan hasta que una persona decide, y la decisión se escribe en el ledger como una entrada hitl.approval. Las credenciales llegan del vault como referencias ${vault:keyName}.',
		output: 'Las plantillas de Output convierten las acciones emitidas en la respuesta: texto y quick replies. La respuesta se guarda en la memoria y se devuelve al canal del que llegó el mensaje.',
		memory: 'La Conversation memory conserva cada paso (input, expressions, actions, output) y propiedades con ámbito de paso, conversación o usuario (longTerm). El estado de la conversación (READY, IN_PROGRESS, ENDED, AWAITING_HUMAN o ERROR) se guarda con ella.',
	},
};

export default copy;
