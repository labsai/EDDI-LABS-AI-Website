/**
 * Comparativas directas, español. Las claves coinciden con src/data/comparisons.ts.
 */
import type { CompareCopy } from './en';
import { MCP_TOOLS, FRAMEWORKS, LLM_PROVIDERS, TESTS, EMBEDDING_PROVIDERS, VECTOR_STORES } from '../stats';

const EDDI_LICENSE = 'Apache 2.0, aprobada por la OSI';

const copy: CompareCopy = {
	ui: {
		shortAnswer: 'Respuesta breve',
		chooseTitle: 'Cómo elegir entre ambas',
		faqTitle: 'Preguntas frecuentes',
		otherTitle: 'Otras comparativas',
		allAlternatives: 'Todas las alternativas: constructores, bibliotecas y plataformas en la nube',
		asOfNote: 'Los datos sobre la otra herramienta se contrastaron con su documentación oficial y su repositorio en octubre de 2026. Estos proyectos cambian rápido, así que confirme el comportamiento actual con el proveedor antes de decidir.',
		backToHub: 'Todas las comparativas',
		hubTitle: 'EDDI comparado: Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n y más',
		hubMetaTitle: 'EDDI vs. Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n, Flowise, Rasa',
		hubDescription: 'Comparativas directas y equilibradas de EDDI con Dify, CrewAI, LangChain y LangGraph, Microsoft Agent Framework (AutoGen y Semantic Kernel), n8n, Flowise y Rasa, incluidos los casos en que la otra herramienta es la mejor opción.',
		hubIntro: 'Cada página compara EDDI con una alternativa en las mismas dimensiones: arquitectura, gobernanza, licencias y operación. Cada una indica con claridad en qué casos la otra herramienta es la mejor opción y cómo migrar si decide cambiar.',
		hubReadMore: 'Leer la comparativa',
		hubLandscapeTitle: '¿Busca una visión más amplia del panorama?',
		hubLandscapeDesc: 'El resumen de alternativas agrupa el sector por arquetipo: constructores visuales, bibliotecas de código y plataformas de IA en la nube.',
		headToHeadTitle: 'Comparativas directas',
		headToHeadIntro: 'Esta página recorre el panorama por arquetipos. Para una comparación directa con una alternativa concreta, incluidos los casos en que esa alternativa es la mejor opción y cómo migrar un proyecto existente, consulte:',
		navLabel: 'Comparar',
		navDesc: 'Dify, CrewAI, LangGraph y más, cara a cara',
	},
	comparisons: {
		// ─── LangChain y LangGraph ──────────────────────────────────
		'eddi-vs-langchain': {
			title: 'EDDI vs. LangChain y LangGraph',
			description:
				'Cómo se compara EDDI con LangChain y LangGraph: biblioteca frente a plataforma desplegable, grafos definidos en código frente a config-as-code, human-in-the-loop, la brecha de operaciones del Día 2 y cuándo escribir usted mismo la orquestación es la decisión correcta.',
			summary: 'Biblioteca y grafos definidos en código frente a una plataforma desplegable; la brecha de operaciones del Día 2.',
			verdict:
				'<strong>Elija LangChain o LangGraph</strong> cuando la lógica de orquestación sea la parte diferencial de su producto y quiera tenerla en código, bajo revisión, en su repositorio. <strong>Elija EDDI</strong> cuando la orquestación sea infraestructura sin valor diferencial que prefiera desplegar antes que mantener.',
			whatItIsTitle: 'Qué son LangChain y LangGraph',
			whatItIs:
				'LangChain es un framework de Python y JavaScript con licencia MIT para crear aplicaciones con LLM. LangGraph, del mismo equipo, es un framework de orquestación de bajo nivel para agentes con estado: usted define un grafo en código y obtiene ejecución duradera que se reanuda tras los fallos y puntos de control human-in-the-loop en los que puede inspeccionar y modificar el estado del agente. LangSmith es el producto comercial de trazado, evaluación y observabilidad, y LangSmith Deployment aloja agentes de larga duración. Su superficie de integración es la más amplia del ecosistema.',
			archetypeTitle: 'Se trata de una cuestión de biblioteca frente a plataforma',
			archetype:
				'EDDI no es un framework competidor. EDDI usa internamente <a href="https://docs.langchain4j.dev/" target="_blank" rel="noopener">LangChain4j</a>, el hermano Java de LangChain. La pregunta real no es qué abstracción es mejor, sino si el flujo de control vive en código que usted escribe, como un grafo de LangGraph, o en configuración declarativa que usted despliega, y quién construye y se encarga de todo lo que lo rodea: la capa REST, la autenticación, la multitenencia, el estado, la auditoría y la interfaz que usan quienes no son desarrolladores.',
			tableTitle: 'Lo que usted construye frente a lo que despliega',
			tableHeaders: { dimension: 'Dimensión', them: 'LangChain / LangGraph', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Formato', them: 'Una biblioteca que se importa en su aplicación', eddi: 'Middleware desplegable; se ejecuta donde se ejecute Docker' },
				{ dimension: 'Lógica de orquestación', them: 'Grafos en Python o TypeScript dentro de su repositorio', eddi: 'Configuración JSON y reglas de comportamiento deterministas, que se modifican sin volver a desplegar' },
				{ dimension: 'Human in the loop', them: 'Las interrupciones permiten inspeccionar y modificar el estado; la interfaz de aprobación y la política las construye usted', eddi: 'Puertas de aprobación en turnos, llamadas a herramientas y fases de grupo, con políticas de tiempo de espera y aprobaciones en Manager y Slack' },
				{ dimension: 'Durabilidad', them: 'Ejecución duradera con una persistencia que usted configura', eddi: 'Memoria de conversación persistida por la plataforma, con estados explícitos como AWAITING_HUMAN' },
				{ dimension: 'API REST y enrutamiento', them: 'Lo construye usted, o lo aloja en LangSmith Deployment', eddi: 'Incluido, además de OpenAPI 3.1, protocolo A2A y streaming SSE' },
				{ dimension: 'Autenticación y RBAC', them: 'Lo construye usted', eddi: 'OIDC/Keycloak opcional con los roles eddi-admin y eddi-approver' },
				{ dimension: 'Interfaz para quienes no son desarrolladores', them: 'Lo construye usted (LangSmith Studio está orientado a desarrolladores)', eddi: 'EDDI Manager, una interfaz React de nivel productivo en 11 idiomas' },
				{ dimension: 'Gestión de secretos', them: 'Lo construye usted, o aporta un vault', eddi: 'Secrets Vault integrado con AES-256-GCM, referenciado como ${vault:key}' },
				{ dimension: 'Observabilidad', them: 'LangSmith (comercial) o su propia instrumentación', eddi: 'Métricas de Prometheus y paneles de Grafana aprovisionados automáticamente' },
				{ dimension: 'Auditoría y cumplimiento', them: 'Lo construye usted', eddi: `Libro de auditoría firmado con HMAC, de solo anexado y con control de secuencia, API de derechos de los interesados, ${FRAMEWORKS} marcos normativos cubiertos` },
				{ dimension: 'Ciclo de iteración', them: 'Cambiar el código, revisar, probar, desplegar', eddi: 'Cambiar la configuración en la interfaz o la API; efecto inmediato' },
				{ dimension: 'Techo de control', them: 'Ninguno. Todo lo que pueda expresarse en código está disponible', eddi: 'Limitado por lo que la configuración puede expresar, por diseño' },
			],
			betterThemTitle: 'Cuándo LangChain y LangGraph son la mejor opción',
			betterThem: [
				'La orquestación en sí es su ventaja competitiva y pertenece a su base de código, no a un almacén de configuración.',
				'Necesita un flujo de control que la configuración declarativa no puede expresar: topologías de grafo a medida, semánticas de reintento propias, máquinas de estados poco habituales.',
				'Su equipo trabaja con Python o TypeScript y quiere que el agente viva dentro de un servicio existente, no a su lado.',
				'Necesita una integración totalmente nueva la misma semana en que aparece. LangChain avanza más rápido que cualquier plataforma.',
				'El equipo son una o dos personas, sin responsable de cumplimiento, sin requisitos de multitenencia y sin ninguna persona ajena al desarrollo que necesite acceso.',
			],
			betterEddiTitle: 'Cuándo EDDI es la mejor opción',
			betterEddi: [
				'Reconoce la lista de operaciones del Día 2 como trabajo que su equipo hace en lugar de entregar producto.',
				'Los ingenieros de prompts y el personal de operaciones necesitan cambiar el comportamiento del agente sin una pull request.',
				'Varios equipos o clientes comparten un mismo despliegue y necesitan aislamiento, cuotas y atribución de costes.',
				'Compras exige una respuesta sobre pistas de auditoría, residencia de datos y cobertura de marcos normativos antes de que nada salga a producción.',
				'Quiere que la capa de orquestación sea una dependencia que se actualiza, no una base de código que se mantiene.',
			],
			migrationTitle: 'Cómo migrar una aplicación desde LangChain o LangGraph',
			migrationIntro:
				'La lógica suele conservarse; lo que deja de mantener es la infraestructura que la rodea. Trabaje desde la definición de la cadena o del grafo hacia fuera. El flujo de control que dependa de Python arbitrario tendrá que convertirse en reglas de comportamiento o en una herramienta declarada.',
			migrationSteps: [
				{ from: 'Cadena o grafo de LangGraph', to: 'Configuración de pipeline de EDDI y reglas de comportamiento' },
				{ from: 'Herramientas y llamadas a funciones', to: 'Definiciones de herramientas MCP o declaraciones httpCall' },
				{ from: 'Interrupción para revisión humana', to: 'Regla PAUSE_CONVERSATION o patrones glob de toolApprovals, aprobados en Manager o Slack' },
				{ from: 'Checkpointer y clases de memoria', to: 'Memoria de conversación con los ámbitos step, conversation y longTerm' },
				{ from: 'Configuración de retriever y almacén vectorial', to: `Configuración de RAG con ${EMBEDDING_PROVIDERS} proveedores de embeddings y ${VECTOR_STORES} almacenes vectoriales` },
				{ from: 'Plantillas de prompts', to: 'Fragmentos de prompt versionados, referenciados por nombre' },
				{ from: 'Envoltorio FastAPI', to: 'API REST integrada, OpenAPI 3.1 y streaming SSE' },
				{ from: 'Trazado de LangSmith', to: 'Métricas de Prometheus, paneles de Grafana y el libro de auditoría' },
			],
			faq: [
				{
					question: '¿EDDI usa LangChain?',
					answer:
						'EDDI usa internamente LangChain4j, la implementación en Java. No es una abstracción competidora. EDDI es la plataforma desplegable construida en torno a ese tipo de biblioteca: aporta la capa de API, la autenticación, la gestión del estado, la interfaz de administración y la infraestructura de cumplimiento que una biblioteca deja deliberadamente en sus manos.',
				},
				{
					question: '¿Cuál es la diferencia entre LangChain y LangGraph?',
					answer:
						'LangChain ofrece componentes e integraciones para aplicaciones con LLM. LangGraph es la capa de más bajo nivel para agentes con estado y de larga duración, definidos como grafos, con ejecución duradera y puntos de control human-in-the-loop. Ambos son bibliotecas que usted integra en su propio servicio. La comparación con EDDI vale para los dos.',
				},
				{
					question: '¿Qué es la brecha de operaciones del Día 2?',
					answer:
						'El Día 1 consiste en conseguir que un agente responda correctamente, algo que una biblioteca resuelve bien. El Día 2 es todo lo que viene después: autenticación, multitenencia, estado de las conversaciones tras reinicios, registro de auditoría, rotación de secretos, escalado horizontal, seguimiento de costes y una interfaz para quienes no escriben Python. Los equipos dedican con frecuencia más tiempo al Día 2 que al propio agente.',
				},
				{
					question: '¿La configuración es menos potente que el código?',
					answer:
						'Sí, y es un compromiso deliberado. La configuración no puede expresar todo lo que expresa el código. A cambio obtiene cambios sin volver a desplegar, un comportamiento que puede revisar quien no es ingeniero y ningún código en tiempo de ejecución que defender en una revisión de seguridad. Si necesita el techo que ofrece el código, use la biblioteca.',
				},
				{
					question: '¿Podemos conservar LangChain y usar también EDDI?',
					answer:
						'Sí. EDDI expone un servidor MCP y una API REST, de modo que una aplicación LangChain puede llamar a los agentes de EDDI como herramientas, y EDDI puede llamar a su servicio LangChain mediante httpCall. Dividir según lo que es diferencial y lo que es infraestructura es un diseño razonable.',
				},
			],
		},

		// ─── Microsoft Agent Framework ────────────────────────────────
		'eddi-vs-microsoft-agent-framework': {
			title: 'EDDI vs. Microsoft Agent Framework (AutoGen y Semantic Kernel)',
			description:
				'Cómo se compara EDDI con Microsoft Agent Framework, el sucesor de AutoGen y Semantic Kernel: flujos de trabajo definidos en código frente a config-as-code, human-in-the-loop, auditoría, alojamiento y cuándo encaja mejor el stack de Microsoft.',
			summary: 'Microsoft Agent Framework, el sucesor de AutoGen y Semantic Kernel, frente a una plataforma de agentes desplegable.',
			verdict:
				'<strong>Elija Microsoft Agent Framework</strong> cuando su equipo trabaje con .NET o Python, desarrolle sobre Azure y quiera los flujos de trabajo de agentes como código en su propio servicio. <strong>Elija EDDI</strong> cuando quiera agentes definidos como configuración revisable en una plataforma JVM que puede ejecutar en cualquier lugar, con puertas de aprobación y un libro de auditoría incluidos de serie en lugar de ensamblados.',
			whatItIsTitle: 'Qué es Microsoft Agent Framework',
			whatItIs:
				'Microsoft Agent Framework es un SDK y entorno de ejecución de código abierto, con licencia MIT, para crear y orquestar agentes y flujos de trabajo multiagente en .NET y Python. Procede de los equipos de Semantic Kernel y AutoGen y alcanzó su versión 1.0 en abril de 2026. Los flujos de trabajo son grafos con patrones de colaboración secuencial, concurrente, de traspaso y de grupo, con puntos de control, streaming, control human-in-the-loop, trazado con OpenTelemetry y un sistema de middleware. Los agentes también pueden declararse en YAML, y Microsoft documenta el alojamiento en Foundry. En octubre de 2026, Semantic Kernel recibe correcciones mientras el trabajo de nuevas funciones se realiza en Agent Framework, y AutoGen está en modo de mantenimiento, con guías de migración para ambos.',
			archetypeTitle: 'Flujos de trabajo definidos en código frente a configuración declarada',
			archetype:
				'Si llegó aquí buscando AutoGen o Semantic Kernel, la comparación práctica hoy es con Agent Framework, porque es hacia donde Microsoft dirige los proyectos nuevos. Es un SDK: su flujo de trabajo es código en su servicio, en su lenguaje, y usted elige cómo alojarlo, protegerlo y auditarlo, con un soporte sólido para Azure. EDDI hace el compromiso contrario. El agente es configuración JSON interpretada por una plataforma desplegada, de modo que el comportamiento puede compararse con diff, revisarse y cambiarse sin recompilar, y la plataforma aporta la API, la interfaz Manager, el vault de secretos y el libro de auditoría.',
			tableTitle: 'SDK para su servicio frente a plataforma que usted despliega',
			tableHeaders: { dimension: 'Dimensión', them: 'Microsoft Agent Framework', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Formato', them: 'SDK y entorno de ejecución integrados en su servicio .NET o Python', eddi: 'Middleware desplegable sobre JVM (Quarkus); se ejecuta donde se ejecute Docker o Kubernetes' },
				{ dimension: 'Cómo se definen los agentes', them: 'Agentes y flujos de trabajo en grafo definidos en código; los agentes también pueden declararse en YAML', eddi: 'Configuración JSON; reglas de comportamiento deterministas deciden la siguiente acción, y las llamadas al LLM ocurren en tareas declaradas' },
				{ dimension: 'Lenguajes', them: '.NET y Python (Go en un repositorio aparte)', eddi: 'Cualquier lenguaje mediante REST, MCP y la API compatible con OpenAI; el agente en sí no requiere código' },
				{ dimension: 'Licencia', them: 'MIT', eddi: EDDI_LICENSE },
				{ dimension: 'Lógica personalizada en tiempo de ejecución', them: 'Su código y sus funciones de herramientas se ejecutan en su proceso', eddi: 'Sin eval() ni ejecución de código en tiempo de ejecución; la lógica se declara o reside tras una herramienta MCP o una llamada HTTP' },
				{ dimension: 'Human in the loop', them: 'Control human-in-the-loop a nivel de flujo de trabajo', eddi: 'Puertas de aprobación en tres niveles: turnos (PAUSE_CONVERSATION), llamadas a herramientas (toolApprovals) y fases de grupo, con políticas de tiempo de espera' },
				{ dimension: 'Patrones multiagente', them: 'Colaboración secuencial, concurrente, de traspaso y de grupo en código', eddi: 'Debates de grupo con 7 estilos (mesa redonda, revisión por pares, abogado del diablo, Delphi, debate, grupo de trabajo, negociación), con decisiones y disensos registrados' },
				{ dimension: 'Estado y recuperación', them: 'Puntos de control y viaje en el tiempo en el entorno de ejecución del flujo de trabajo', eddi: 'Memoria de conversación persistida por la plataforma; estados explícitos como AWAITING_HUMAN' },
				{ dimension: 'Observabilidad y auditoría', them: 'Trazado con OpenTelemetry y ganchos de middleware; el destino de los datos depende de usted', eddi: 'Métricas de Prometheus más un libro de auditoría firmado con HMAC, de solo anexado y con control de secuencia, con un endpoint de verificación' },
				{ dimension: 'Secretos e identidad', them: 'Los mecanismos de su plataforma, por ejemplo servicios de Azure', eddi: 'Secrets Vault integrado con AES-256-GCM; Keycloak/OIDC opcional con los roles eddi-admin y eddi-approver' },
				{ dimension: 'Encaje en el ecosistema', them: 'Integración profunda con Microsoft y Azure, incluidos los agentes alojados en Foundry', eddi: `Neutral respecto a proveedores: ${LLM_PROVIDERS} proveedores de LLM, modelos locales mediante Ollama o Jlama, ${MCP_TOOLS} herramientas MCP` },
			],
			betterThemTitle: 'Cuándo Microsoft Agent Framework es la mejor opción',
			betterThem: [
				'Su equipo escribe .NET y los agentes pertenecen a un servicio C# existente, con su propio despliegue y sus propias pruebas.',
				'Desarrolla sobre Azure y quiere una integración de primer nivel con Foundry y los servicios de Microsoft que lo rodean.',
				'Tiene plugins de Semantic Kernel o código de AutoGen, y la ruta de migración soportada sale más barata que un cambio de plataforma.',
				'El flujo de trabajo necesita un flujo de control que la configuración no puede expresar, como topologías de grafo a medida, ramificación de puntos de control o depuración con viaje en el tiempo.',
				'Quiere un SDK para desarrolladores y prefiere decidir por sí mismo cómo alojarlo, protegerlo y observarlo.',
			],
			betterEddiTitle: 'Cuándo EDDI es la mejor opción',
			betterEddi: [
				'El comportamiento del agente debe ser configuración que los revisores puedan leer y promover entre entornos, sin recompilar.',
				'Una revisión de seguridad preguntará qué código se ejecuta durante la inferencia, y usted quiere que la respuesta sea ninguno en la plataforma.',
				'Las aprobaciones deben existir en el nivel de turno, de llamada a herramienta y de fase de grupo, con un registro firmado de quién decidió qué.',
				'Necesita una interfaz Manager, un vault de secretos, una API y un libro de auditoría listos, en lugar de ensamblarlos en torno a un SDK.',
				'Quiere mantenerse neutral respecto a la nube: Kubernetes, OpenShift, instalaciones propias o entornos aislados (air-gapped) con modelos locales.',
			],
			migrationTitle: 'Cómo migrar desde AutoGen, Semantic Kernel o Agent Framework',
			migrationIntro:
				'Cuente con una traducción de la intención más que del código. Los roles y las herramientas se conservan; la lógica de los grafos pasa a ser reglas de comportamiento, y todo lo que requiera código real se traslada tras una herramienta MCP o un endpoint OpenAPI.',
			migrationSteps: [
				{ from: 'Agente con instrucciones', to: 'Agente de EDDI con una tarea LLM y un mensaje de sistema' },
				{ from: 'Plugin o función de Semantic Kernel', to: 'Herramienta MCP, o httpCall o una API importada desde OpenAPI' },
				{ from: 'Grafo de flujo de trabajo o equipo de AutoGen', to: 'Reglas de comportamiento para el enrutamiento, o un estilo de debate de grupo para el trabajo multiagente' },
				{ from: 'Paso human-in-the-loop', to: 'Regla PAUSE_CONVERSATION, patrones glob de toolApprovals, o requiresApproval en una fase de grupo' },
				{ from: 'Almacén de puntos de control', to: 'Memoria de conversación con los ámbitos step, conversation y longTerm' },
				{ from: 'Middleware y filtros', to: 'Reglas de comportamiento y políticas de aprobación de herramientas' },
				{ from: 'Trazas de OpenTelemetry', to: 'Métricas de Prometheus y el libro de auditoría' },
			],
			faq: [
				{
					question: '¿Microsoft Agent Framework sustituye a AutoGen y Semantic Kernel?',
					answer:
						'Microsoft lo presenta como el sucesor de ambos y publica guías de migración. En octubre de 2026, Semantic Kernel recibe correcciones mientras las nuevas funciones llegan a Agent Framework, y AutoGen está en modo de mantenimiento. Si empieza un proyecto nuevo sobre el stack de Microsoft, Agent Framework es el que debe evaluar frente a EDDI.',
				},
				{
					question: '¿Puede EDDI sustituir a AutoGen en conversaciones multiagente?',
					answer:
						'En muchos casos, sí. Los debates de grupo de EDDI cubren los estilos de mesa redonda, revisión por pares, abogado del diablo, Delphi, debate, grupo de trabajo y negociación, con fases que pueden exigir aprobación humana y una decisión registrada con su disenso. Si sus agentes necesitan una coordinación libre a nivel de código, un SDK encaja mejor.',
				},
				{
					question: '¿Tengo que renunciar a Azure para usar EDDI?',
					answer:
						'No. EDDI admite Azure OpenAI como proveedor y se ejecuta en Kubernetes, incluido AKS. No ofrece la integración profunda con Azure y Foundry que sí ofrece Agent Framework, así que téngalo en cuenta si está comprometido con el ecosistema de Microsoft.',
				},
				{
					question: '¿Pueden funcionar juntos?',
					answer:
						'Sí. EDDI expone un servidor MCP, una API REST y una API compatible con OpenAI, y puede consumir servidores MCP y agentes A2A. Un servicio .NET puede llamar a los agentes de EDDI como herramientas, y EDDI puede llamar a su servicio mediante httpCall.',
				},
			],
		},

		// ─── CrewAI ───────────────────────────────────────────────────
		'eddi-vs-crewai': {
			title: 'EDDI vs. CrewAI',
			description:
				'Cómo se compara EDDI con CrewAI para sistemas multiagente: equipos (crews) basados en roles y flujos en Python frente a config-as-code en una plataforma desplegable, ejecución de código, human-in-the-loop, gobernanza y cuándo CrewAI es la mejor herramienta.',
			summary: 'Equipos basados en roles y flujos en Python frente a configuración multiagente gobernada en una plataforma.',
			verdict:
				'<strong>Elija CrewAI</strong> cuando su equipo trabaje con Python y quiera agentes con roles que colaboren en una tarea, definidos y ajustados en código. <strong>Elija EDDI</strong> cuando el trabajo multiagente deba ejecutarse como un servicio gobernado: reglas deterministas en torno al LLM, puertas de aprobación y una pista de auditoría firmada, configuradas en lugar de programadas.',
			whatItIsTitle: 'Qué es CrewAI',
			whatItIs:
				'CrewAI es un framework de Python independiente, con licencia MIT, que tiene sus propias primitivas para agentes, tareas, crews, flujos (flows) y herramientas. Los crews son equipos de agentes basados en roles que colaboran de forma autónoma en una tarea. Los flujos son flujos de trabajo dirigidos por eventos que ofrecen un control preciso de las rutas de ejecución, el estado y las ramificaciones. El proyecto admite la intervención humana durante la ejecución, y la suite comercial CrewAI AMP añade un plano de control para el despliegue gestionado, la observabilidad, la gobernanza y el soporte.',
			archetypeTitle: 'Crews autónomos frente a configuración gobernada',
			archetype:
				'CrewAI apuesta por la autonomía de los agentes: usted describe roles, objetivos y tareas, y el crew averigua cómo colaborar, con flujos cuando necesita un control más estricto. EDDI apuesta por el control: reglas de comportamiento deterministas deciden qué acción se ejecuta a continuación, el LLM se invoca dentro de tareas declaradas, y el trabajo multiagente sigue estilos de debate de grupo con nombre y fases explícitas. Ambos permiten construir un sistema multiagente. Se diferencian en cuánto decide usted de antemano y cuánto decide el modelo en tiempo de ejecución.',
			tableTitle: 'Agentes en código frente a agentes como configuración',
			tableHeaders: { dimension: 'Dimensión', them: 'CrewAI', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Abstracción principal', them: 'Crews de agentes basados en roles con tareas, más flujos dirigidos por eventos', eddi: 'Configuración del agente: pipeline, reglas de comportamiento, tareas LLM y herramientas como JSON versionado' },
				{ dimension: 'Lenguaje y entorno de ejecución', them: 'Biblioteca de Python integrada en su aplicación', eddi: 'Plataforma JVM (Quarkus) con hilos virtuales; los agentes no requieren código' },
				{ dimension: 'Licencia', them: 'MIT (framework de código abierto); suite comercial AMP por encima', eddi: EDDI_LICENSE },
				{ dimension: 'Flujo de control', them: 'Los agentes deciden la colaboración en tiempo de ejecución; los flujos añaden ramificaciones explícitas en código', eddi: 'Reglas de comportamiento deterministas eligen la siguiente acción; los estilos de grupo definen las fases' },
				{ dimension: 'Ejecución de código', them: 'La herramienta de intérprete de código se ha eliminado de crewai-tools y la ejecución de código a nivel de agente está obsoleta; la documentación recomienda un sandbox dedicado como E2B o Modal', eddi: 'Sin eval() ni ejecución de código en tiempo de ejecución en la plataforma; la lógica se declara o reside tras una herramienta MCP o una llamada HTTP' },
				{ dimension: 'Human in the loop', them: 'Admite intervención humana durante la ejecución', eddi: 'Puertas de aprobación en turnos, llamadas a herramientas y fases de grupo, políticas de tiempo de espera, aprobaciones en Manager, REST, MCP o Slack' },
				{ dimension: 'Patrones multiagente', them: 'Procesos de crew y flujos en código', eddi: 'Debates de grupo con 7 estilos más estilos personalizados, decisiones, recuentos y disensos registrados, entradas de transcripción firmadas' },
				{ dimension: 'Gestión y gobernanza', them: 'Plano de control con trazado y gobernanza en la suite comercial AMP', eddi: 'Interfaz Manager, vault de secretos, Keycloak/OIDC opcional y el libro de auditoría en la versión de código abierto' },
				{ dimension: 'Pista de auditoría', them: 'Trazado y observabilidad mediante el plano de control o sus propias herramientas', eddi: 'Libro firmado con HMAC, de solo anexado y con control de secuencia; GET /auditstore/verify/{conversationId}' },
				{ dimension: 'Modelos', them: 'Muchos proveedores desde Python', eddi: `${LLM_PROVIDERS} proveedores de LLM más modelos locales mediante Ollama o Jlama` },
			],
			betterThemTitle: 'Cuándo CrewAI es la mejor opción',
			betterThem: [
				'Su equipo prioriza Python y quiere los agentes, las herramientas y la lógica del crew en el mismo repositorio que el resto del código.',
				'Quiere prototipar con rapidez una colaboración autónoma entre agentes con roles y ajustarla editando código.',
				'Necesita herramientas de Python personalizadas con lógica arbitraria que la configuración no puede expresar.',
				'Prefiere una biblioteca que integra a una plataforma que opera.',
				'El plano de control de la suite comercial AMP encaja con la forma en que su organización quiere desplegar y supervisar los crews.',
			],
			betterEddiTitle: 'Cuándo EDDI es la mejor opción',
			betterEddi: [
				'El comportamiento multiagente debe ser lo bastante predecible para poder revisarse: fases con nombre, decisiones registradas y reglas en lugar de autonomía libre.',
				'Una persona debe aprobar ciertas llamadas a herramientas o fases de grupo, y la decisión debe quedar registrada en un libro firmado.',
				'Quiere gobernanza, una interfaz de administración y auditoría en la versión de código abierto, no en un nivel comercial aparte.',
				'Una revisión de seguridad preguntará qué código se ejecuta durante la inferencia, y usted quiere que la plataforma no ejecute ninguno.',
				'Quienes no son ingenieros necesitan cambiar el comportamiento del agente sin una pull request.',
			],
			migrationTitle: 'Cómo migrar un crew desde CrewAI',
			migrationIntro:
				'Los roles y los objetivos se traducen en prompts y fases de grupo. Lo que más cambia es la autonomía: lo que un crew decidía en tiempo de ejecución pasa a ser una regla, una fase o una puerta de aprobación que usted deja por escrito.',
			migrationSteps: [
				{ from: 'Agente (rol, objetivo, historia)', to: 'Agente de EDDI con un mensaje de sistema en una tarea LLM' },
				{ from: 'Tarea', to: 'Tarea del pipeline, o una fase de un debate de grupo' },
				{ from: 'Proceso del crew', to: 'Estilo de debate de grupo, por ejemplo grupo de trabajo o mesa redonda' },
				{ from: 'Flujo con enrutadores', to: 'Reglas de comportamiento con tipos de condición como inputmatcher y actionmatcher' },
				{ from: 'Herramienta personalizada de Python', to: 'Herramienta MCP, httpCall o una API importada desde OpenAPI' },
				{ from: 'Intervención humana', to: 'Regla PAUSE_CONVERSATION, toolApprovals, o requiresApproval en una fase' },
				{ from: 'Memoria y fuentes de conocimiento', to: 'Ámbitos de la memoria de conversación y bases de conocimiento RAG' },
			],
			faq: [
				{
					question: '¿Es EDDI una alternativa a CrewAI para sistemas multiagente?',
					answer:
						'Sí, para equipos que quieren la colaboración multiagente como un servicio gobernado. Los debates de grupo de EDDI ejecutan estilos con nombre y fases explícitas, y registran las decisiones y los disensos. CrewAI da más autonomía a los agentes y se define en Python, lo que conviene a los equipos que prefieren permanecer en el código.',
				},
				{
					question: '¿Tiene EDDI agentes autónomos como CrewAI?',
					answer:
						'Los agentes de EDDI pueden llamar a herramientas y colaborar en debates de grupo, pero el flujo de control lo fijan las reglas de comportamiento y las fases que usted configura, no se deja a los agentes que improvisen. Es un intercambio deliberado de autonomía por previsibilidad.',
				},
				{
					question: '¿Por qué importa aquí la ejecución de código?',
					answer:
						'Los agentes que ejecutan código generado necesitan aislamiento. CrewAI se ha alejado de su intérprete de código integrado y recomienda un servicio de sandbox dedicado. EDDI evita la cuestión dentro de la plataforma al no evaluar código en tiempo de ejecución, de modo que todo lo que requiera lógica real reside tras una herramienta que usted declara y puede aprobar.',
				},
				{
					question: '¿Podemos usar ambos?',
					answer:
						'Sí. Un servicio de CrewAI puede llamar a EDDI mediante su API REST, su servidor MCP o su API compatible con OpenAI, y EDDI puede llamar a un endpoint de CrewAI mediante httpCall. Usar CrewAI para experimentos a nivel de código y EDDI para agentes gobernados en producción es un reparto razonable.',
				},
			],
		},

		// ─── Dify ─────────────────────────────────────────────────────
		'eddi-vs-dify': {
			title: 'EDDI vs. Dify',
			description:
				'Cómo se compara EDDI con Dify para crear y operar agentes LLM: constructor visual de flujos de trabajo y nodo de código frente a config-as-code, condiciones de licencia y multitenencia, intervención humana, auditoría y cuándo Dify es la herramienta adecuada.',
			summary: 'Constructor visual de flujos de trabajo y plataforma de aplicaciones frente a config-as-code con gobernanza integrada.',
			verdict:
				'<strong>Elija Dify</strong> cuando quiera un constructor visual pulido, un marketplace de plugins y un camino rápido hacia aplicaciones LLM que su equipo o sus clientes puedan usar esta semana. <strong>Elija EDDI</strong> cuando los agentes deban ejecutarse bajo una licencia Apache 2.0 sin ambigüedades, sin nodos de código, con puertas de aprobación en varios niveles y un libro de auditoría pensado para servir de prueba.',
			whatItIsTitle: 'Qué es Dify',
			whatItIs:
				'Dify es una plataforma de código abierto para crear aplicaciones con LLM. Ofrece un lienzo visual de flujos de trabajo, un pipeline RAG desde la ingesta hasta la recuperación, agentes con herramientas de su marketplace, servidores MCP o APIs personalizadas, un IDE de prompts, APIs de backend como servicio e integraciones con herramientas de observabilidad como Langfuse, Opik y Arize Phoenix. Puede usar Dify Cloud, alojar usted mismo la Community Edition con Docker Compose o consultar por Dify Enterprise, que añade SSO, RBAC y SLA de soporte. Su nodo Code ejecuta Python o JavaScript en un sandbox, y su nodo Human Input detiene un flujo de trabajo para que una persona responda.',
			archetypeTitle: 'Constructor de aplicaciones frente a plataforma de agentes gobernada',
			archetype:
				'Dify y EDDI coinciden en RAG, herramientas y agentes, pero optimizan para personas distintas. Dify optimiza para quienes quieren montar aplicaciones de forma visual y lanzarlas rápido, con un nodo de código como vía de escape. EDDI optimiza para operadores que necesitan que el comportamiento del agente sea configuración declarativa y revisable, con gobernanza a su alrededor. Muchos equipos empiezan con razón en Dify, y algunos se mudan cuando llegan requisitos de multitenencia, licencias o auditoría.',
			tableTitle: 'Comodidad del constructor frente a superficie de operación',
			tableHeaders: { dimension: 'Dimensión', them: 'Dify', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Abstracción principal', them: 'Lienzo visual de flujos de trabajo y chatflows, con un IDE de prompts', eddi: 'Config-as-code: recursos JSON creados en Manager o por API, versionados como código fuente' },
				{ dimension: 'Licencia', them: 'Dify Open Source License: Apache 2.0 más condiciones. La operación multitenant del código fuente requiere autorización por escrito, y el logotipo y el copyright del frontend deben conservarse', eddi: EDDI_LICENSE },
				{ dimension: 'Lógica personalizada', them: 'El nodo Code ejecuta Python o JavaScript en un sandbox que bloquea el sistema de archivos, la red saliente y los comandos del sistema, con un conjunto fijo de paquetes', eddi: 'Sin evaluación de código en tiempo de ejecución; la lógica se declara o reside tras una herramienta MCP o una llamada HTTP' },
				{ dimension: 'Human in the loop', them: 'El nodo Human Input detiene un flujo de trabajo a la espera de un formulario respondido en la aplicación web o por correo; espera predeterminada de 3 días y después una rama de tiempo de espera', eddi: 'Puertas de aprobación en turnos, llamadas a herramientas y fases de grupo; las políticas de tiempo de espera incluyen WAIT_INDEFINITELY, AUTO_APPROVE, AUTO_REJECT y ABORT; aprobaciones en Manager y Slack' },
				{ dimension: 'Herramientas e integraciones', them: 'Marketplace, servidores MCP y APIs personalizadas', eddi: `${MCP_TOOLS} herramientas MCP, un cliente MCP, importación OpenAPI, httpCall, A2A` },
				{ dimension: 'RAG', them: 'Pipeline de conocimiento integrado con extracción de documentos', eddi: `${EMBEDDING_PROVIDERS} proveedores de embeddings, ${VECTOR_STORES} almacenes vectoriales, además de RAG con httpCall sin infraestructura adicional` },
				{ dimension: 'Multiagente', them: 'Agentes y nodos de flujo de trabajo compuestos en el lienzo', eddi: 'Debates de grupo con 7 estilos, decisiones y disensos registrados, aprobación humana opcional por fase' },
				{ dimension: 'Identidad y acceso', them: 'Espacios de trabajo; SSO y RBAC mediante Dify Enterprise', eddi: 'Keycloak/OIDC opcional con los roles eddi-admin y eddi-approver en la versión de código abierto' },
				{ dimension: 'Observabilidad y auditoría', them: 'Registros y monitorización, integraciones con Langfuse, Opik y Arize Phoenix', eddi: 'Métricas de Prometheus más un libro de auditoría firmado con HMAC, de solo anexado y con control de secuencia' },
				{ dimension: 'Despliegue', them: 'Dify Cloud, Docker Compose, Enterprise bajo petición', eddi: 'Docker, Helm, Kustomize, OpenShift (imagen certificada por Red Hat, Operator mediante OperatorHub)' },
			],
			betterThemTitle: 'Cuándo Dify es la mejor opción',
			betterThem: [
				'Quiere un lienzo visual que quienes no son ingenieros puedan leer y ampliar, con respuesta rápida mientras construyen.',
				'Un marketplace de plugins y plantillas de flujos de trabajo listas le ahorran tiempo real de integración.',
				'Quiere una opción alojada (Dify Cloud) y no desea operar nada por su cuenta.',
				'Un nodo Code es una función que usted quiere: pequeñas transformaciones de datos en Python o JavaScript dentro del flujo de trabajo.',
				'Ejecuta un único despliegue interno para su propio equipo, de modo que la condición de licencia sobre multitenencia no le afecta.',
			],
			betterEddiTitle: 'Cuándo EDDI es la mejor opción',
			betterEddi: [
				'Su equipo jurídico necesita una licencia Apache 2.0 sin condiciones, también para atender a muchos inquilinos o clientes desde un mismo despliegue.',
				'La revisión de seguridad prohíbe la ejecución de código dentro de la plataforma de automatización, con sandbox o sin él.',
				'Determinadas llamadas a herramientas o fases de grupo requieren una decisión humana, registrada en un libro firmado.',
				'El comportamiento del agente debe versionarse, compararse con diff y promoverse entre entornos como configuración.',
				'Necesita un despliegue en Kubernetes, OpenShift o en entornos aislados (air-gapped) con modelos locales.',
			],
			migrationTitle: 'Cómo migrar una aplicación desde Dify',
			migrationIntro:
				'Las aplicaciones de Dify son grafos visuales y los agentes de EDDI son configuración, así que se trata de una traducción y no de una importación. Lo que más reflexión requiere son los nodos Code, que pasan a ser configuración o una herramienta declarada.',
			migrationSteps: [
				{ from: 'Chatflow o flujo de trabajo', to: 'Agente de EDDI: pipeline más reglas de comportamiento' },
				{ from: 'Nodo LLM y prompt', to: 'Tarea LLM con un mensaje de sistema y fragmentos de prompt versionados' },
				{ from: 'Base de conocimiento', to: 'Base de conocimiento RAG de EDDI con un proveedor de embeddings y un almacén vectorial' },
				{ from: 'Herramienta, plugin o servidor MCP', to: 'Conexión de cliente MCP, httpCall o una API importada desde OpenAPI' },
				{ from: 'Code node', to: 'Reglas de comportamiento y lógica de prompt, o una herramienta MCP si necesita código real' },
				{ from: 'Human Input node', to: 'Regla PAUSE_CONVERSATION o toolApprovals, con una política de tiempo de espera' },
				{ from: 'Claves de API de los proveedores', to: 'Entradas del Secrets Vault, referenciadas como ${vault:key}' },
			],
			faq: [
				{
					question: '¿Dify es de código abierto?',
					answer:
						'Dify publica su código fuente bajo la Dify Open Source License, que es Apache 2.0 con condiciones adicionales: no se puede usar el código fuente para operar un entorno multitenant sin autorización por escrito, y no se puede eliminar el logotipo ni la información de copyright del frontend. No es la Apache 2.0 sin más que usa EDDI, así que léala con su equipo jurídico si alguna de las dos condiciones pudiera aplicarse.',
				},
				{
					question: '¿Tiene EDDI un constructor visual como Dify?',
					answer:
						'EDDI Manager es una interfaz React de nivel productivo para crear, desplegar y supervisar agentes, disponible en 11 idiomas. Es una interfaz de administración y no un lienzo de nodos: usted configura agentes, prompts, herramientas y pipelines, y cada cambio es un recurso versionado y no un diagrama.',
				},
				{
					question: '¿Por qué EDDI evita un nodo de código?',
					answer:
						'Un nodo de código con sandbox es una función razonable, y Dify restringe a qué puede acceder. Pero cualquier ejecución de código dentro de la plataforma es una superficie de ataque que una revisión de seguridad tiene que examinar. EDDI mantiene el comportamiento del agente declarativo, de modo que lo que una herramienta puede hacer es lo que usted declara y aprueba.',
				},
				{
					question: '¿Podemos usar Dify y EDDI juntos?',
					answer:
						'Sí. Dify puede usar servidores MCP y APIs personalizadas, y EDDI expone un servidor MCP y una API REST, así que un flujo de trabajo de Dify puede llamar a un agente de EDDI como un paso gobernado. EDDI puede llamar a la API de Dify mediante httpCall.',
				},
			],
		},

		// ─── n8n ──────────────────────────────────────────────────────
		'eddi-vs-n8n': {
			title: 'EDDI vs. n8n',
			description:
				'Cómo se compara EDDI con n8n para la orquestación de agentes de IA: entorno de ejecución y modelo de concurrencia, ejecución de código y postura de seguridad, licencias, gobernanza y cuándo n8n sigue siendo la mejor herramienta.',
			summary: 'Plataforma de automatización de flujos de trabajo frente a middleware de orquestación de IA.',
			verdict:
				'<strong>Elija n8n</strong> cuando el trabajo consista en conectar sistemas SaaS y automatizar procesos de negocio, y la IA sea un paso dentro de un flujo de trabajo mayor. <strong>Elija EDDI</strong> cuando el agente de IA <em>sea</em> el producto y deba superar una revisión de seguridad empresarial: datos regulados, obligaciones de auditoría, aislamiento por inquilino y puertas de aprobación sobre lo que el agente puede hacer.',
			whatItIsTitle: 'Qué es n8n',
			whatItIs:
				'n8n es una plataforma de automatización de flujos de trabajo basada en Node.js, con un lienzo visual y cientos de integraciones prediseñadas. Puede alojarse por cuenta propia, cuenta con una comunidad amplia y realmente activa, y sus nodos basados en LangChain permiten incorporar llamadas a LLM en cualquier flujo de trabajo. Es una de las formas más rápidas de conectar sistemas entre sí.',
			archetypeTitle: 'Categoría distinta, caso de uso que se solapa',
			archetype:
				'Estas herramientas no son del mismo arquetipo. n8n es una <strong>plataforma de automatización de flujos de trabajo</strong> en la que la IA es un tipo de nodo entre muchos. EDDI es <strong>middleware de orquestación de IA</strong> en el que el agente, su memoria, sus herramientas y su gobernanza son el producto. El solapamiento es real, hay equipos que construyen agentes en n8n, pero ambas toman decisiones opuestas cuando un agente maneja datos regulados.',
			tableTitle: 'Arquitectura y gobernanza',
			tableHeaders: { dimension: 'Dimensión', them: 'n8n', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Entorno de ejecución', them: 'Bucle de eventos monohilo de Node.js', eddi: 'JVM con hilos virtuales (Project Loom), paralelismo real para llamadas a LLM limitadas por E/S' },
				{ dimension: 'Lógica personalizada', them: 'Los nodos Code ejecutan JavaScript o Python en tiempo de ejecución', eddi: 'Cero evaluación de código en tiempo de ejecución; el comportamiento del agente es solo JSON declarativo' },
				{ dimension: 'Licencia', them: 'Sustainable Use License (fair-code), no aprobada por la OSI; términos aparte para algunos usos comerciales', eddi: EDDI_LICENSE },
				{ dimension: 'Amplitud de integraciones', them: 'Cientos de conectores SaaS prediseñados, su mayor activo', eddi: `${MCP_TOOLS} herramientas MCP más cualquier endpoint OpenAPI o REST mediante httpCall` },
				{ dimension: 'Autenticación', them: 'Gestión de usuarios integrada; SSO en los niveles de pago', eddi: 'Keycloak/OIDC opcional con los roles eddi-admin y eddi-approver en la versión de código abierto' },
				{ dimension: 'Pista de auditoría', them: 'Historial de ejecuciones y registros de la aplicación', eddi: 'Libro de auditoría firmado con HMAC, de solo anexado y con control de secuencia' },
				{ dimension: 'Aprobación humana', them: 'Nodos Wait y disparadores manuales dentro de un flujo de trabajo', eddi: 'Pausa a nivel de turno, visto bueno por llamada a herramienta, políticas de tiempo de espera, aprobaciones por Slack, todo registrado' },
				{ dimension: 'Postura de cumplimiento', them: 'Se implementa en cada despliegue', eddi: `Infraestructura de GDPR, HIPAA y EU AI Act integrada, ${FRAMEWORKS} marcos normativos cubiertos` },
			],
			betterThemTitle: 'Cuándo n8n es la mejor opción',
			betterThem: [
				'La carga de trabajo es automatización empresarial general y no IA: sincronizar CRM, mover archivos, reaccionar a webhooks.',
				'Necesita amplitud de conectores SaaS más que profundidad de gobernanza de agentes. Aquí n8n gana sin discusión.',
				'Un equipo que no es de ingeniería es responsable de los flujos de trabajo y necesita un lienzo visual para razonar sobre ellos.',
				'Quiere algo funcionando esta misma tarde y los datos implicados no están regulados.',
			],
			betterEddiTitle: 'Cuándo EDDI es la mejor opción',
			betterEddi: [
				'El agente toca datos regulados y una revisión de seguridad preguntará qué código se ejecuta durante la inferencia. EDDI responde: ninguno.',
				'Necesita aislamiento por inquilino, cuotas y atribución de costes entre muchos clientes en un único despliegue.',
				'Una persona debe aprobar llamadas individuales a herramientas antes de que se ejecuten, y la aprobación debe quedar registrada en un libro firmado.',
				'El comportamiento del agente debe estar bajo control de versiones, compararse con diff y promoverse entre entornos como configuración.',
				`La licencia debe ser inequívoca para la redistribución o el despliegue en entornos aislados (air-gapped): ${EDDI_LICENSE}.`,
			],
			migrationTitle: 'Cómo migrar un flujo de trabajo desde n8n',
			migrationIntro:
				'La mayoría de los flujos de trabajo de n8n con forma de agente se trasladan sin dificultad. Lo que no encaja suele ser los nodos Code, y ahí está precisamente la cuestión: lo que hacen tiene que convertirse en configuración o en una herramienta declarada.',
			migrationSteps: [
				{ from: 'Workflow', to: 'Paquete de EDDI: un conjunto versionado de pipeline, prompts y enlaces de herramientas' },
				{ from: 'Nodo HTTP Request', to: 'Definición de herramienta httpCall, con protección frente a SSRF y salvaguardas contra path traversal' },
				{ from: 'Code node', to: 'Reglas de comportamiento y fragmentos de prompt, o una herramienta MCP si necesita lógica real' },
				{ from: 'Almacén de credenciales', to: 'EDDI Secrets Vault (AES-256-GCM), referenciado por clave del vault' },
				{ from: 'Nodo AI Agent', to: 'Agente de EDDI con memoria persistente, enrutamiento por intención y cascada de modelos' },
				{ from: 'Wait o disparador manual', to: 'Puerta de aprobación human-in-the-loop con una política de tiempo de espera' },
			],
			migrationGuideLabel: 'Guía completa: migrar un flujo de trabajo de IA de n8n a EDDI',
			faq: [
				{
					question: '¿Es EDDI un sustituto directo de n8n?',
					answer:
						'No, y no pretende serlo. n8n cubre la automatización general de flujos de trabajo entre cientos de herramientas SaaS. EDDI cubre la orquestación de agentes de IA con gobernanza empresarial. Es habitual que los equipos usen ambos: n8n para la fontanería de procesos de negocio y EDDI para los agentes que necesitan pistas de auditoría y puertas de aprobación.',
				},
				{
					question: '¿Puede EDDI llamar a n8n, o al revés?',
					answer:
						'Ambas cosas. EDDI expone un servidor MCP y una API REST, así que un flujo de trabajo de n8n puede invocar a un agente de EDDI como un paso. EDDI puede llamar a un webhook de n8n mediante su herramienta httpCall. Usar cada una para lo que hace bien es una arquitectura razonable.',
				},
				{
					question: '¿Por qué importa tanto la ejecución de código en tiempo de ejecución?',
					answer:
						'Un nodo Code es código arbitrario que se ejecuta dentro de su plataforma de automatización. Es cómodo, y es también toda una clase de vulnerabilidades: los escapes del sandbox, la inyección a través de entradas no confiables y la escalada de privilegios empiezan ahí. EDDI prohíbe de forma categórica la evaluación de código en tiempo de ejecución, de modo que el comportamiento del agente es configuración JSON que puede revisarse, compararse con diff y aprobarse antes de salir a producción.',
				},
				{
					question: '¿n8n es de código abierto?',
					answer:
						'n8n es fair-code y se distribuye bajo la Sustainable Use License. El código fuente está disponible y se permite el autoalojamiento para uso interno, pero no es una licencia de código abierto aprobada por la OSI y algunos usos comerciales requieren términos aparte. EDDI es Apache 2.0. Si su equipo jurídico necesita una respuesta inequívoca sobre la redistribución, esa diferencia importa.',
				},
			],
		},

		// ─── Flowise ──────────────────────────────────────────────────
		'eddi-vs-flowise': {
			title: 'EDDI vs. Flowise',
			description:
				'Cómo se compara EDDI con Flowise para crear y operar agentes LLM: velocidad de prototipado frente a gobernanza en producción, arquitectura RAG, multitenencia y cuándo Flowise es la herramienta adecuada.',
			summary: 'Velocidad de prototipado frente a superficie de operación en producción.',
			verdict:
				'<strong>Elija Flowise</strong> para tener esta semana un chatbot RAG funcionando delante de las partes interesadas. <strong>Elija EDDI</strong> cuando ese prototipo deba convertirse en un sistema que operen varios equipos, que apruebe un responsable de cumplimiento y del que dependa un cliente.',
			whatItIsTitle: 'Qué es Flowise',
			whatItIs:
				'Flowise es un constructor visual para aplicaciones con LLM con licencia Apache 2.0, creado con Node.js y React, que envuelve LangChain y LlamaIndex. Usted monta chatflows arrastrando nodos: un cargador, un divisor, un modelo de embeddings, un almacén vectorial, una cadena. Para pasar de cero a un chatbot de recuperación funcional, hay muy poco más rápido.',
			archetypeTitle: 'Velocidad de prototipado frente a superficie de operación',
			archetype:
				'Flowise y EDDI apuntan a momentos distintos de un proyecto. Flowise optimiza la primera semana: montaje visual, respuesta inmediata, una plantilla para la mayoría de los patrones habituales. EDDI optimiza todo lo que viene después: quién puede cambiar el agente, qué tiene permitido hacer, qué ocurre cuando se reinicia y cómo se demuestra cualquiera de estas cosas ante un auditor. Muchos equipos deberían empezar de verdad en Flowise.',
			tableTitle: 'Del prototipo a la producción',
			tableHeaders: { dimension: 'Dimensión', them: 'Flowise', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Abstracción principal', them: 'Lienzo visual de chatflows, grafo de nodos serializado a JSON', eddi: 'Config-as-code: recursos JSON creados en una interfaz o por API, versionados como código fuente' },
				{ dimension: 'Entorno de ejecución', them: 'Bucle de eventos de Node.js', eddi: 'JVM con hilos virtuales, pensada para muchas conversaciones concurrentes limitadas por E/S' },
				{ dimension: 'Licencia', them: 'Apache 2.0, igual que EDDI', eddi: EDDI_LICENSE },
				{ dimension: 'RAG', them: 'Amplia selección de cargadores y almacenes vectoriales, configurada por flujo', eddi: `${EMBEDDING_PROVIDERS} proveedores de embeddings, ${VECTOR_STORES} almacenes vectoriales, además de RAG con httpCall sin infraestructura adicional` },
				{ dimension: 'Lógica personalizada', them: 'Los nodos Custom Function y Tool ejecutan JavaScript en tiempo de ejecución', eddi: 'Cero evaluación de código en tiempo de ejecución; la lógica se declara, no se ejecuta' },
				{ dimension: 'Multitenencia', them: 'Espacios de trabajo en la edición enterprise', eddi: 'Cuotas por inquilino, atribución de costes y aislamiento de datos en la versión de código abierto' },
				{ dimension: 'Memoria', them: 'Búferes de conversación e integraciones con almacenes externos', eddi: 'Memoria persistente del usuario, consolidación onírica (dream consolidation), resúmenes continuos, ventanas conscientes de tokens' },
				{ dimension: 'Pista de auditoría', them: 'Trazas de ejecución, orientadas a la depuración', eddi: 'Libro firmado con HMAC y de solo anexado, orientado a servir de prueba' },
				{ dimension: 'Despliegue', them: 'Docker, normalmente una sola instancia', eddi: 'Docker, Helm, Kustomize y OpenShift (imagen certificada por Red Hat, Operator mediante OperatorHub)' },
			],
			betterThemTitle: 'Cuándo Flowise es la mejor opción',
			betterThem: [
				'Está validando si una idea funciona siquiera. El montaje visual supera a la redacción de configuración para explorar.',
				'El equipo piensa en diagramas y quiere ver el pipeline de recuperación dispuesto en el espacio.',
				'Es una herramienta interna de un solo equipo, sin requisitos de multitenencia, auditoría ni aprobación.',
				'Quiere probar cinco estrategias de recuperación antes del almuerzo.',
			],
			betterEddiTitle: 'Cuándo EDDI es la mejor opción',
			betterEddi: [
				'El chatbot se convirtió en un producto y ahora necesita SLA, multitenencia y alguien responsable de los cambios.',
				'Los ingenieros de prompts deben iterar sin volver a desplegar, mientras operaciones mantiene el control de lo que sale a producción.',
				'Las conversaciones deben sobrevivir a los reinicios y poder reconstruirse meses después para un regulador.',
				'Una persona debe aprobar determinadas llamadas a herramientas antes de que el agente actúe sobre ellas.',
				`El destino del despliegue es Kubernetes o una infraestructura aislada (air-gapped) y debe ser demostrablemente reproducible. ${TESTS} pruebas se ejecutan en cada merge.`,
			],
			migrationTitle: 'Cómo migrar un chatflow desde Flowise',
			migrationIntro:
				'Los chatflows de Flowise ya son JSON y los conceptos coinciden de cerca, así que suele ser la más mecánica de las migraciones.',
			migrationSteps: [
				{ from: 'Chatflow', to: 'Paquete de EDDI, exportable como ZIP con los secretos eliminados automáticamente' },
				{ from: 'Cargadores y divisores de documentos', to: 'Configuración de ingesta de documentos RAG de EDDI' },
				{ from: 'Nodo de almacén vectorial', to: `Uno de los ${VECTOR_STORES} almacenes vectoriales admitidos, seleccionado por configuración` },
				{ from: 'Nodo de embeddings', to: `Uno de los ${EMBEDDING_PROVIDERS} proveedores de embeddings` },
				{ from: 'Nodo de modelo de chat', to: `Configuración de LLM entre ${LLM_PROVIDERS} proveedores, con cascada de modelos disponible` },
				{ from: 'Nodo Custom Function', to: 'Reglas de comportamiento, fragmentos de prompt o una herramienta MCP declarada' },
				{ from: 'Nodo de memoria', to: 'Memoria persistente de EDDI con política de memoria por commit-flag' },
			],
			migrationGuideLabel: 'Guía completa: migrar un chatflow de Flowise a EDDI',
			faq: [
				{
					question: '¿Deberíamos prototipar en Flowise y luego pasar a EDDI?',
					answer:
						'Es un camino defendible y habitual. Flowise responde si una estrategia de recuperación funciona; EDDI responde si puede operarla con seguridad durante tres años. Planifique el cambio antes de que el prototipo tenga usuarios en producción, porque la migración es más fácil que la conversación sobre la interrupción del servicio.',
				},
				{
					question: 'Ambos son Apache 2.0. ¿Qué diferencia hay en realidad?',
					answer:
						'La licencia es la misma; la superficie de operación no. EDDI incluye OIDC/Keycloak opcional, un libro de auditoría firmado, cuotas por inquilino y aprobación human-in-the-loop en la versión de código abierto, en lugar de tras un nivel enterprise.',
				},
				{
					question: '¿Tiene EDDI un constructor visual?',
					answer:
						'EDDI Manager es una interfaz React de nivel productivo para crear, desplegar y supervisar agentes, disponible en 11 idiomas. Es una interfaz de administración y no un lienzo de nodos: usted configura agentes, prompts, herramientas y pipelines, y cada cambio es un recurso versionado y no un diagrama.',
				},
			],
		},

		// ─── Rasa ─────────────────────────────────────────────────────
		'eddi-vs-rasa': {
			title: 'EDDI vs. Rasa',
			description:
				'Cómo se compara EDDI con Rasa para IA conversacional: NLU entrenado y diálogo determinista frente a orquestación de LLM, config-as-code, colaboración multiagente y cuándo Rasa encaja mejor.',
			summary: 'NLU entrenado y diálogo determinista frente a orquestación de LLM con config-as-code.',
			verdict:
				'<strong>Elija Rasa</strong> cuando necesite un diálogo estrictamente controlado sobre un conjunto fijo de intenciones, disponga de datos de entrenamiento etiquetados y tenga un equipo de ML en Python que se encargue de ello. <strong>Elija EDDI</strong> cuando el asistente deba razonar sobre conocimiento que cambia más rápido que un ciclo de reentrenamiento, llamar a sistemas empresariales y gobernarse mediante configuración en lugar de reentrenarse.',
			whatItIsTitle: 'Qué es Rasa',
			whatItIs:
				'Rasa es un framework maduro de IA conversacional: clasificación de intenciones y extracción de entidades mediante un pipeline de NLU entrenado, más gestión del diálogo mediante reglas, historias y políticas. Es nativo de Python, puede alojarse por cuenta propia y durante años ha sido la respuesta habitual para asistentes de atención al cliente guionizados de alto volumen. Rasa Pro añade niveles comerciales, incluido el diálogo impulsado por LLM.',
			archetypeTitle: 'Un problema compartido, otra generación de solución',
			archetype:
				'EDDI y Rasa proceden ambos del mundo de la IA conversacional, y EDDI se desarrolla de forma continua como plataforma conversacional desde 2006. La diferencia está en dónde reside la inteligencia. Rasa la pone en un modelo que usted entrena con sus propios datos etiquetados, lo que da un control preciso y repetible. EDDI la pone en LLM orquestados y gobernados por configuración declarativa, cediendo algo de determinismo a cambio de alcance y rapidez de cambio.',
			tableTitle: 'Diálogo, herramientas y coste del cambio',
			tableHeaders: { dimension: 'Dimensión', them: 'Rasa', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Comprensión', them: 'NLU entrenado: clasificación de intenciones y extracción de entidades a partir de datos etiquetados', eddi: 'Comprensión por LLM más descubrimiento y enrutamiento de agentes basado en intenciones' },
				{ dimension: 'Cambiar el comportamiento', them: 'Actualizar los datos de entrenamiento, reentrenar, evaluar, volver a desplegar', eddi: 'Editar la configuración JSON; sin reentrenamiento ni nuevo despliegue' },
				{ dimension: 'Determinismo', them: 'Alto. Las reglas y las políticas hacen que los flujos sean repetibles y comprobables', eddi: 'Menor por naturaleza, compensado con reglas de comportamiento y puertas de aprobación' },
				{ dimension: 'Lenguaje', them: 'Python; las acciones personalizadas son código Python', eddi: 'Entorno de ejecución JVM; la lógica del agente es configuración, las herramientas se declaran' },
				{ dimension: 'Ecosistema de herramientas', them: 'Un servidor de acciones personalizado que usted construye y aloja', eddi: `${MCP_TOOLS} herramientas MCP, herramientas de agente integradas, además de cualquier endpoint OpenAPI` },
				{ dimension: 'Multiagente', them: 'Lo habitual es un asistente por despliegue', eddi: 'Orquestación basada en coordinador y 7 estilos de debate de grupo' },
				{ dimension: 'Licencias', them: 'Edición community más niveles de Rasa Pro con licencia comercial; verifique los términos vigentes', eddi: EDDI_LICENSE },
				{ dimension: 'Cumplimiento', them: 'El autoalojamiento permite la residencia de datos; los marcos normativos se implementan en cada despliegue', eddi: `Libro de auditoría, API de derechos de los interesados y ${FRAMEWORKS} marcos normativos cubiertos en la plataforma` },
			],
			betterThemTitle: 'Cuándo Rasa es la mejor opción',
			betterThem: [
				'Ya dispone de datos conversacionales etiquetados y de un equipo de ML capaz de mantener un pipeline de NLU.',
				'Las restricciones regulatorias o de marca exigen un asistente determinista con una ruta de decisión auditable en la que no participe un modelo de lenguaje.',
				'Volumen muy alto sobre un conjunto reducido de intenciones, donde el coste por turno de un LLM dominaría.',
				'Necesita un control detallado de los umbrales de confianza de clasificación y del comportamiento de respaldo.',
			],
			betterEddiTitle: 'Cuándo EDDI es la mejor opción',
			betterEddi: [
				'El asistente debe responder a partir de documentos y sistemas que cambian más rápido que un ciclo de reentrenamiento.',
				'Los usuarios de negocio necesitan cambiar el comportamiento sin un ingeniero de ML, sin una ejecución de entrenamiento y sin un despliegue.',
				'El problema requiere que varios agentes especializados colaboren, en lugar de un único árbol plano de intenciones.',
				'Quiere la flexibilidad de un LLM, pero un responsable de cumplimiento exige puertas de aprobación y registros firmados antes de salir a producción.',
				`Quiere evitar la dependencia de un proveedor en la capa de modelos: ${LLM_PROVIDERS} proveedores, o un modelo local mediante Ollama o Jlama.`,
			],
			migrationTitle: 'Cómo migrar un asistente desde Rasa',
			migrationIntro:
				'La correspondencia es conceptual y no mecánica, porque ambos sitúan la inteligencia en lugares distintos. Cuente con traducir la estructura de intenciones a enrutamiento y prompts, en lugar de convertir archivos.',
			migrationSteps: [
				{ from: 'Intenciones y ejemplos de entrenamiento', to: 'Descubrimiento de agentes basado en intenciones; los datos etiquetados pasan a ser material de evaluación en lugar de entrada de entrenamiento' },
				{ from: 'Entidades y slots', to: 'Extracción estructurada más memoria persistente del usuario' },
				{ from: 'Historias y reglas', to: 'Reglas de comportamiento y configuración del pipeline' },
				{ from: 'Servidor de acciones personalizadas', to: 'Herramientas MCP o definiciones de herramientas httpCall' },
				{ from: 'Respuestas y archivo de dominio', to: 'Fragmentos de prompt, reutilizables y versionados' },
				{ from: 'Política de respaldo', to: 'Escalado human-in-the-loop con una política de tiempo de espera' },
			],
			faq: [
				{
					question: '¿Es EDDI solo otra capa sobre un LLM que sustituye al NLU entrenado?',
					answer:
						'EDDI se desarrolla como plataforma conversacional desde 2006, mucho antes de la generación actual de LLM, y conservó lo que importaba: el enrutamiento basado en intenciones, el estado de conversación gestionado y la arquitectura de pipeline. Los LLM sustituyeron la capa de comprensión, no la orquestación que la rodea.',
				},
				{
					question: 'Necesitamos respuestas deterministas por cumplimiento. ¿Eso descarta a EDDI?',
					answer:
						'No necesariamente, pero el compromiso debe ser explícito. La salida de un LLM no es determinista. EDDI lo aborda con reglas de comportamiento que restringen las respuestas, puertas de aprobación humana para las acciones de consecuencia y un libro de auditoría firmado que registra lo que se decidió y por qué. Si su requisito es que ningún modelo de lenguaje participe en la decisión, Rasa es la mejor respuesta.',
				},
				{
					question: '¿Podemos ejecutar ambos durante una transición?',
					answer:
						'Sí. Un patrón habitual dirige las intenciones conocidas de alto volumen al asistente de Rasa existente mientras EDDI atiende las consultas abiertas y la integración con sistemas, y después traslada tráfico a medida que crece la confianza. EDDI puede llamar a un endpoint de Rasa mediante httpCall.',
				},
			],
		},
	},
};

export default copy;
