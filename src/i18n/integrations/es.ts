/**
 * Catálogo de integraciones, español. Traducido de ./en.ts; mantén las claves idénticas.
 * Las cadenas marcadas como HTML se renderizan con set:html, por lo que solo aparecen <code> y <a>.
 */
import { MCP_TOOLS, VECTOR_STORES } from '../stats';
import type { IntegrationsCopy } from './en';

const copy: IntegrationsCopy = {
	ui: {
		title: 'Integraciones',
		metaTitle: 'Integraciones de EDDI: Slack, MCP, OpenAPI, SAP, almacenes vectoriales y Kubernetes',
		description:
			'Cómo se conecta EDDI con Slack, Open WebUI, Keycloak, MCP y A2A, cualquier API REST mediante OpenAPI, SAP a través de sus API, seis almacenes vectoriales, Kubernetes, OpenShift y Ollama. Cada página incluye la configuración real.',
		heroTitle: 'Integraciones de',
		heroHighlight: 'EDDI',
		heroDesc:
			'Canales, identidad, protocolos de agentes, sistemas empresariales, almacenes vectoriales e infraestructura. Cada página muestra qué obtienes, cómo funciona en EDDI, la configuración real y cómo se gobierna la integración: aprobaciones, el registro de auditoría y la bóveda de secretos.',
		filterLabel: 'Filtrar integraciones por categoría',
		filterAll: 'Todas',
		searchLabel: 'Buscar integraciones',
		searchPlaceholder: 'Buscar, por ejemplo Slack, SAP o pgvector',
		noResults: 'Ninguna integración coincide. Prueba con otra palabra o quita el filtro.',
		notCoveredNote:
			'EDDI no incluye canales de Microsoft Teams, Telegram, WhatsApp ni Discord, no envía correo electrónico por sí mismo y no tiene webhooks entrantes genéricos. Aun así, todo lo que tenga una API se puede alcanzar mediante la <a href="/integrations/openapi/">importación de OpenAPI</a>, llamadas HTTP o <a href="/integrations/mcp-client/">MCP</a>.',
		backToCatalog: 'Todas las integraciones',
		whatYouGet: 'Qué obtienes',
		howItWorks: 'Cómo funciona en EDDI',
		configTitle: 'Configuración',
		configDesc: 'Extraída de la documentación de EDDI. Los marcadores como your-agent-id deben sustituirse por tus propios valores.',
		governanceTitle: 'Gobernanza',
		goodToKnowTitle: 'Conviene saber',
		linksTitle: 'Documentación y guías',
		docsLink: 'Documentación',
		guidesLabel: 'Guía',
		relatedTitle: 'Integraciones relacionadas',
		getStarted: 'Empezar',
		modelsLinkText: 'Explorar el catálogo de modelos',
		solutionsTitle: '¿Necesitas que lo construyan y lo operen por ti?',
		solutionsDesc: 'EDDI Solutions construye y mantiene conectores, opera EDDI como instancia gestionada o co-operada, y te da soporte en tu propia nube o en local.',
		solutionsBtn: 'Hablar con EDDI Solutions',
		sourcesDesc: 'La configuración y el comportamiento de esta página siguen la documentación de EDDI, comprobada el {date}. Los nombres de campo y los valores por defecto pueden cambiar entre versiones, así que confírmalos en la documentación de tu versión.',
		copy: 'Copiar',
		copied: 'Copiado',
		pageTitle: '{name} en EDDI',
		pageDescription: '{name}: {summary}',
		ctaTitle: '¿No ves tu sistema?',
		ctaDesc: 'Descríbenoslo o parte de la vía <a href="/integrations/openapi/">OpenAPI</a>. Si tiene una API, un agente puede llamarla, con aprobaciones y un rastro de auditoría.',
	},
	categories: {
		channels: 'Canales',
		identity: 'Identidad y seguridad',
		protocols: 'Protocolos de agentes',
		enterprise: 'Sistemas empresariales',
		data: 'Datos y RAG',
		infrastructure: 'Infraestructura',
	},
	integrations: {
		slack: {
			summary: 'Agentes de IA gobernados en Slack: menciones, mensajes directos, hilos, debates de grupo transmitidos en un hilo y tarjetas de aprobación de Block Kit con botones Aprobar y Rechazar.',
			gets: [
				'Agentes que responden a @menciones y mensajes directos, con las respuestas posteriores dentro del hilo',
				'Palabras clave de activación que dirigen un mensaje a un agente concreto o a un debate de grupo multiagente',
				'Debates de grupo transmitidos en un hilo a medida que ocurren',
				'Tarjetas de aprobación en Slack para turnos en pausa, llamadas a herramientas y fases de grupo, con una lista de aprobadores permitidos',
				'Varios espacios de trabajo de Slack contra un mismo EDDI',
			],
			steps: [
				'Crea una aplicación de Slack y añade los permisos (scopes) del token de bot que indica la documentación (<code>chat:write</code>, <code>app_mentions:read</code>, los scopes <code>history</code> y <code>im:*</code>).',
				'Guarda el token del bot y el secreto de firma en la bóveda de secretos de EDDI y luego referéncialos como <code>${vault:...}</code>.',
				'Crea una integración de canal que asocie el canal de Slack a un agente predeterminado y, opcionalmente, a grupos detrás de palabras clave de activación como <code>panel:</code>.',
				'Configura la Request URL como <code>https://&lt;your-eddi-host&gt;/integrations/slack/events</code> y suscríbete a <code>app_mention</code>, <code>message.im</code> y <code>message.channels</code>. Hazlo al final: Slack verifica la URL de inmediato.',
				'Para las aprobaciones, configura la Interactivity Request URL como <code>/integrations/slack/interactive</code> y enumera a los aprobadores en <code>hitlApproverUserIds</code>.',
			],
			captions: [
				'Las credenciales van a la bóveda, no a la configuración del agente ni del canal.',
				'Una integración de canal con un agente predeterminado, un grupo detrás de palabras clave de activación y los ajustes de aprobación en platformConfig.',
			],
			governance: [
				'Las tarjetas de aprobación llevan botones Aprobar y Rechazar. Solo pueden decidir los usuarios de Slack incluidos en <code>hitlApproverUserIds</code>. Sin esa lista no se muestran botones y se rechazan las decisiones interactivas (fail-closed).',
				'Una tarjeta de llamada a herramienta muestra el nombre de la herramienta y sus argumentos redactados y truncados, de modo que el aprobador ve lo que aprueba. En la versión 1 los botones aprueban o rechazan el lote completo.',
				'Cada decisión se atribuye a <code>slack:&lt;userId&gt;</code> y se registra en el registro de auditoría.',
				'Los eventos entrantes se verifican con el secreto de firma (HMAC-SHA256) y protección contra repetición, y los propios secretos permanecen en la bóveda.',
			],
			goodToKnow: [
				'Slack es la única plataforma de chat de terceros para la que EDDI incluye un canal. Consulta la nota de la página del catálogo para saber qué no está incluido.',
				'Un modo de observación opcional permite que un destino vea el tráfico normal del canal, detrás de una activación, un tiempo de espera y límites diarios de respuestas y de coste. Esos límites se aplican por nodo de EDDI.',
			],
		},
		'open-webui': {
			summary: 'EDDI ofrece una API /v1 compatible con OpenAI que presenta los agentes desplegados como modelos, de modo que Open WebUI, los SDK de OpenAI, LangChain y LiteLLM pueden hablar con ellos.',
			gets: [
				'Los agentes de EDDI desplegados en el menú de modelos de Open WebUI',
				'Chat Completions con streaming e informe del uso de tokens',
				'Una conversación de EDDI por chat, de modo que la memoria y las Behavior Rules persisten entre turnos',
				'Una variante sin estado (un id de modelo <code>:stateless</code>) para llamadas de un solo turno, como la generación de títulos',
			],
			steps: [
				'Activa el adaptador con <code>EDDI_OPENAI_COMPAT_ENABLED=true</code> y define una clave de API. Está desactivado por defecto.',
				'Despliega un agente en EDDI. Aparece en <code>GET /v1/models</code>.',
				'Apunta Open WebUI (o un SDK) a <code>http://&lt;eddi&gt;:7070/v1</code> con la misma clave de API.',
				'Activa <code>ENABLE_FORWARD_USER_INFO_HEADERS</code> en Open WebUI. Sin ello, todas las ventanas de chat comparten una sola conversación de EDDI.',
				'Elige el agente en la lista de modelos y conversa.',
			],
			captions: [
				'Un extracto de compose con forma de producción, tomado de la documentación de EDDI. Cambia la clave de API de ejemplo.',
				'Verifica el endpoint desde la shell. Define EDDI_API_KEY con el mismo valor que en el archivo compose.',
			],
			governance: [
				'La API tiene su propia autenticación por clave de API y permanece desactivada hasta que la habilitas. EDDI se niega a arrancar en la única combinación que dejaría la creación de conversaciones abierta a cualquiera que alcance el puerto.',
				'El agente conserva sus propias puertas de aprobación y su rastro de auditoría. Una petición a través de /v1 es una conversación ordinaria de EDDI.',
				'Una clave de API compartida más cabeceras de usuario delega la identidad en Open WebUI como proxy de confianza. Trata la clave como cualquier secreto compartido y rótala.',
			],
			goodToKnow: [
				'Solo los agentes individuales aparecen como modelos, no los grupos multiagente.',
				'Las respuestas rápidas y los botones se muestran como texto Markdown, no como controles interactivos.',
				'Las llamadas a herramientas no se devuelven al cliente. EDDI ejecuta sus herramientas dentro de su propia canalización, y la actividad de las herramientas sigue siendo visible en el registro de auditoría.',
			],
		},
		'web-chat': {
			summary: 'Una interfaz de chat en React con temas, servida por el propio EDDI, con respuestas en streaming, Markdown, respuestas rápidas y deshacer, que puedes abrir directamente o incrustar en una página.',
			gets: [
				'Una página de chat para cada agente desplegado en /chat/{environment}/{agentId}',
				'Streaming token a token, Markdown enriquecido, resaltado de código y matemáticas en LaTeX',
				'Temas oscuro y claro, botones de respuesta rápida, y deshacer y rehacer',
				'Parámetros de URL para ocultar controles y fijar el título, para un widget incrustado y centrado',
				'Un modo de demostración que no necesita backend',
			],
			steps: [
				'Ejecuta EDDI. La interfaz de chat viene dentro de la imagen de EDDI y el instalador la incluye.',
				'Abre <code>/chat/&lt;environment&gt;/&lt;agentId&gt;</code> en tu host de EDDI.',
				'Ajústala con parámetros de URL como <code>theme</code>, <code>title</code>, <code>hideUndo</code> y <code>hideNewConversation</code>.',
				'Para incrustarla, pon la misma URL en un iframe de tu página.',
			],
			captions: [
				'Los patrones de URL que sirve la interfaz de chat.',
				'Un widget incrustado, tomado del README de la interfaz de chat. Combina los parámetros de visualización según necesites.',
			],
			governance: [
				'El chat usa la misma API de conversación que cualquier otro cliente, por lo que las Behavior Rules, las puertas de aprobación y el registro de auditoría se aplican sin cambios.',
				'Con la autenticación activada, el widget necesita un token de acceso del usuario con sesión iniciada, y el backend lo verifica en cada llamada.',
				'Trata cualquier texto producido por un agente como salida no confiable. La interfaz de chat renderiza el Markdown que genera el agente.',
			],
			goodToKnow: [
				'Por defecto EDDI responde con una política que prohíbe el enmarcado, de modo que el navegador no mostrará el chat dentro de otro sitio hasta que el operador permita ese origen. Consulta el README de la interfaz de chat para ver los ajustes de enmarcado de tu versión.',
			],
		},
		'keycloak-oidc': {
			summary: 'Coloca la autenticación OpenID Connect delante de EDDI con Keycloak u otro proveedor OIDC, con roles para administradores, editores, usuarios, lectores y aprobadores.',
			gets: [
				'Inicio de sesión en el Manager y en la API a través de tu proveedor de identidad',
				'Roles: <code>eddi-admin</code>, <code>eddi-editor</code>, <code>eddi-user</code>, <code>eddi-viewer</code> y <code>eddi-approver</code> para las decisiones de aprobación',
				'Un realm <code>eddi</code> listo para usar que el instalador importa en Keycloak',
				'Llamadas que actúan como el usuario con sesión iniciada, de modo que el rastro de auditoría nombra a una persona real',
			],
			steps: [
				'Ejecuta el instalador con <code>--with-auth</code>. Inicia Keycloak e importa el realm <code>eddi</code> en el primer arranque.',
				'Define una contraseña para el usuario <code>eddi</code> en la consola de administración de Keycloak. El realm incluido no trae ninguna.',
				'Inicia sesión en el Manager. Da a cada persona los roles que necesita y añade a los aprobadores a <code>eddi-approver</code>.',
				'Si ya tienes un proveedor de identidad, define las variables <code>QUARKUS_OIDC_*</code> (tenant habilitado, URL del servidor de autenticación, id de cliente, secreto de cliente).',
				'En una llamada HTTP, usa <code>${caller:token}</code> para llamar a una API con el token propio del usuario con sesión iniciada en lugar de una credencial compartida.',
			],
			captions: [
				'Opción del instalador que añade Keycloak.',
				'Variables de entorno para un proveedor OIDC externo, tomadas de la documentación de EDDI.',
			],
			governance: [
				'En modo de lanzamiento de producción, EDDI se niega a arrancar con OIDC desactivado salvo que lo excluyas de forma explícita, de modo que una API de gestión abierta es una decisión y no un accidente.',
				'Los endpoints de aprobación exigen el rol <code>eddi-approver</code>, o ser el propietario o un <code>eddi-admin</code>.',
				'Con <code>${caller:token}</code>, el rastro de auditoría registra al usuario real. Una credencial estática compartida reduciría todas las acciones a un único principal.',
			],
			goodToKnow: [
				'La autenticación es opcional y está desactivada por defecto. Keycloak es lo que aprovisiona el instalador. Otros proveedores OIDC usan los mismos ajustes, y algunos detalles (por ejemplo, el endpoint de token anunciado para A2A) asumen rutas de Keycloak salvo que los configures.',
				'La importación del realm incluido es de una sola vez. Las ediciones posteriores del JSON no llegan a un Keycloak en ejecución.',
			],
		},
		'secrets-vault': {
			summary: 'Una bóveda de secretos integrada con cifrado de sobre. La configuración referencia los secretos como ${vault:keyName} y el valor nunca llega a las configuraciones de agentes, las exportaciones ni los registros.',
			gets: [
				'Referencias <code>${vault:keyName}</code> en la configuración de LLM, llamadas HTTP, MCP y RAG',
				'Cifrado de sobre AES-256-GCM con una clave de datos por tenant',
				'Permisos por agente: qué agentes pueden usar qué secreto',
				'Secretos eliminados de las exportaciones de configuración y redactados en los registros',
			],
			steps: [
				'Define la clave maestra de la bóveda (<code>EDDI_VAULT_MASTER_KEY</code>). El instalador genera una por ti. Sin clave, la bóveda queda desactivada.',
				'Guarda un secreto con <code>PUT /secretstore/secrets/{tenantId}/{keyName}</code> o desde el Manager.',
				'Referéncialo en la configuración como <code>${vault:keyName}</code>.',
				'EDDI resuelve la referencia en tiempo de ejecución. El texto plano no se guarda en la memoria de la conversación.',
				'Restringe <code>allowedAgents</code> a los agentes que necesitan el secreto. La comprobación se ejecuta cuando se despliega un agente.',
			],
			captions: [
				'Guardar un secreto. La respuesta nunca devuelve el valor.',
				'Referenciar el secreto por nombre desde una tarea de LLM.',
				'Cambiar quién puede usar un secreto sin tocar su valor.',
			],
			governance: [
				'Los permisos se aplican en el momento del despliegue por defecto: un agente que referencia un secreto para el que no tiene permiso no se despliega.',
				'Una referencia a la bóveda que llega a través de datos de la conversación, como la entrada del usuario o una respuesta del modelo, se rechaza en lugar de resolverse.',
				'El texto plano se redacta en el registro de la petición, en la vista previa de la aprobación y en la línea del registro de peticiones.',
				'Los endpoints de la bóveda quedan tras el rol <code>eddi-admin</code> cuando la autenticación está activada.',
			],
			goodToKnow: [
				'EDDI no tiene un cliente nativo de HashiCorp Vault, AWS ni Azure. En Kubernetes, el External Secrets Operator puede sincronizar el Secret de Kubernetes <code>eddi-secrets</code> (que contiene la clave maestra de la bóveda) desde HashiCorp Vault, AWS Secrets Manager o Azure Key Vault. Los secretos individuales siguen residiendo en la bóveda de EDDI.',
				'Si se pierde la clave maestra, los secretos cifrados son irrecuperables. Haz una copia de seguridad.',
			],
		},
		'mcp-server': {
			summary: `Controla EDDI desde Claude Desktop, Cursor, VS Code y otros clientes MCP. EDDI expone ${MCP_TOOLS} herramientas MCP sobre Streamable HTTP para conversaciones y administración.`,
			gets: [
				`${MCP_TOOLS} herramientas: listar agentes y hablar con ellos, crearlos y desplegarlos, gestionar grupos, programaciones y más`,
				'Un único endpoint, <code>/mcp</code>, con Streamable HTTP',
				'Funciona con clientes que hablan HTTP directamente y, mediante un puente, con clientes que solo admiten stdio',
				'Acceso basado en roles cuando la autenticación está activada',
			],
			steps: [
				'Ejecuta EDDI. El endpoint MCP es <code>http://localhost:7070/mcp</code>.',
				'Añade EDDI a tu cliente MCP. Los clientes compatibles con HTTP usan la URL directamente.',
				'Para clientes que solo admiten stdio, como Claude Desktop, usa el puente <code>mcp-remote</code> como se muestra.',
				'Pide al asistente que liste agentes, inicie una conversación o cree un agente. El flujo documentado es <code>list_agents</code>, <code>create_conversation</code>, <code>talk_to_agent</code>.',
				'Con OIDC activado, entrega al cliente un token bearer.',
			],
			captions: [
				'Para clientes con transporte HTTP nativo.',
				'Para clientes que solo admiten stdio. En Windows, envuelve el comando con cmd /c si npx no está en el PATH.',
			],
			governance: [
				'Las herramientas de escritura como <code>setup_agent</code> y <code>create_api_agent</code> requieren el rol <code>eddi-editor</code>.',
				'La herramienta MCP <code>create_api_agent</code> no puede establecer una puerta de aprobación, de forma deliberada. Aprovisionar un agente con puertas se hace por REST con <code>eddi-admin</code>.',
				'Las fases de grupo que esperan aprobación pueden aprobarse por MCP además de en el Manager, por REST y en Slack, y cada decisión queda auditada.',
			],
			goodToKnow: [
				'El arranque en producción se niega a ejecutarse con OIDC desactivado salvo que lo excluyas, y una instancia con esa exclusión deja <code>/mcp</code> abierto a cualquiera que alcance el puerto.',
			],
		},
		'mcp-client': {
			summary: 'Da a los agentes de EDDI las herramientas de servidores MCP externos. Las herramientas de un servidor pasan a ser herramientas del agente, tras las mismas puertas de aprobación y el mismo rastro de auditoría que cualquier otra herramienta.',
			gets: [
				'Herramientas de cualquier servidor MCP que hable Streamable HTTP',
				'Listas de nombres permitidos y denegados para mantener corta la lista de herramientas',
				'Listado y lectura de recursos opcionales',
				'Un cortacircuitos que deja de llamar a un servidor que falla',
			],
			steps: [
				'Crea una configuración <code>mcpcalls</code> con la URL del servidor, el transporte <code>http</code> y una clave de API como referencia <code>${vault:...}</code>.',
				'Referénciala como paso del workflow (<code>eddi://ai.labs.mcpcalls</code>).',
				'La tarea de LLM del agente detecta automáticamente las herramientas del servidor (<code>enableMcpCallTools</code> es true por defecto).',
				'Añade las herramientas a <code>toolApprovals</code> para que las llamadas con consecuencias esperen a una persona.',
				'Para un servidor que solo admite stdio, ejecútalo en su propio contenedor tras un puente HTTP y apunta EDDI al puente.',
			],
			captions: [
				'Una configuración mcpcalls. El token es una referencia a la bóveda.',
				'Poner puerta a todas las herramientas MCP excepto las de solo lectura.',
			],
			governance: [
				'Las llamadas a herramientas MCP participan en la misma puerta de aprobación con intervención humana que cualquier otra fuente de herramientas.',
				'Las descripciones de herramientas se redactan si contienen texto con forma de directiva y tienen una longitud máxima. Los resultados de las herramientas se envuelven con su procedencia y, por defecto, el contenido con forma de directiva se redacta.',
				'Una lista blanca de herramientas sirve para gestionar el contexto, no es un límite de seguridad. El límite es la credencial que das a la conexión más la puerta de aprobación.',
				'Cada decisión con puerta se escribe en el registro de auditoría.',
			],
			goodToKnow: [
				'EDDI implementa un único transporte MCP, Streamable HTTP. No lanza servidores stdio por sí mismo, porque un comando editable por configuración sería ejecución arbitraria de código con el usuario del proceso de EDDI. Usa un sidecar con puente.',
				'Un cortacircuitos se abre tras 3 fallos en 60 segundos, así que una herramienta ausente suele significar que el servidor está fallando.',
			],
		},
		a2a: {
			summary: 'Expón agentes de EDDI a otros agentes mediante Agent Cards y JSON-RPC, y usa agentes A2A remotos como herramientas dentro de tus propios agentes.',
			gets: [
				'Una Agent Card por cada agente que actives, con sus habilidades',
				'Un endpoint JSON-RPC 2.0 con <code>tasks/send</code>, <code>tasks/get</code> y <code>tasks/cancel</code>',
				'Agentes A2A remotos integrados en el bucle de llamadas a herramientas junto a las herramientas integradas, MCP y HTTP',
				'Filtros de habilidades para exponer solo una parte de un agente remoto',
			],
			steps: [
				'Activa un agente con <code>a2aEnabled: true</code>, una descripción y las habilidades que se anunciarán.',
				'Los pares obtienen su tarjeta en <code>/a2a/agents/{agentId}/agent.json</code> y llaman a <code>POST /a2a/agents/{agentId}</code>.',
				'Para consumir un agente remoto, inclúyelo en <code>a2aAgents</code> dentro de una tarea de LLM con su URL y una clave de API referenciada desde la bóveda.',
				'EDDI lee la tarjeta remota, convierte cada habilidad en una herramienta llamada <code>{agentName}_{skillId}</code> y la invoca con <code>tasks/send</code>.',
			],
			captions: [
				'Exponer un agente. A2A es opcional por agente.',
				'Consumir un agente remoto. La clave de API debe ser una referencia a la bóveda.',
			],
			governance: [
				'Las Agent Cards son anónimas por diseño, para que un par pueda descubrir un agente antes de tener credenciales. Con la autenticación activada, tanto el listado de agentes como el endpoint JSON-RPC requieren un token.',
				'Las herramientas de un agente remoto pasan por las mismas puertas de aprobación y barreras de resultado de herramientas que otras fuentes de herramientas, y la clave de API permanece en la bóveda.',
				'<code>tasks/send</code> ejecuta una conversación con cargo a tu presupuesto de LLM, y por eso no es anónimo.',
			],
			goodToKnow: [
				'Con la autenticación activada, la tarjeta anuncia un endpoint de token. EDDI deduce una ruta al estilo de Keycloak salvo que definas <code>eddi.a2a.public-token-endpoint</code>, así que defínelo para otros proveedores de identidad.',
			],
		},
		openapi: {
			summary: 'Convierte cualquier API REST con una descripción OpenAPI 3.0 o 3.1 en un agente con herramientas, sin escribir código, y pon las llamadas con consecuencias tras una aprobación humana.',
			gets: [
				'Un agente que llama a la API, generado a partir de la especificación: configuraciones de llamadas HTTP agrupadas por etiqueta, la canalización y el despliegue',
				'Filtrado de endpoints, sustitución de la URL base y propagación de la cabecera de autenticación',
				'La opción de añadir las herramientas de un servidor MCP junto a las generadas',
				'Herramientas que puedes revisar, comparar y versionar, porque son configuración',
			],
			steps: [
				'Entrega la especificación OpenAPI a EDDI mediante la herramienta MCP <code>create_api_agent</code> o <code>POST /administration/agents/setup-api</code>.',
				'Incluye en la lista permitida las operaciones que debe tener el agente. Un endpoint no declarado no se puede llamar.',
				'EDDI genera las configuraciones de llamadas HTTP, construye la canalización completa y despliega el agente.',
				'Mantén las credenciales como referencias <code>${vault:...}</code>.',
				'Pon puerta a las escrituras con <code>http.*:*</code> y exceptúa las lecturas con <code>http.get:*</code>.',
			],
			captions: [
				'El modelo httpCalls con el que se construyen las herramientas generadas. Aquí está escrito a mano para mostrar los campos.',
				'Aprobar toda llamada que cambie el estado y dejar pasar las lecturas.',
			],
			governance: [
				'Los patrones de aprobación pueden apuntar a lo que llama una herramienta (<code>http.post:*</code>), lo cual sigue siendo correcto cuando cambia un operationId.',
				'La plataforma protege las llamadas salientes contra SSRF y path traversal.',
				'Por REST, <code>setup-api</code> acepta un <code>hitlConfig</code>, de modo que un agente puede aprovisionarse con sus herramientas de escritura tras puerta desde la primera versión. La herramienta MCP no puede establecerlo.',
				'Las decisiones quedan en el registro de auditoría.',
			],
			goodToKnow: [
				'Una herramienta de escritura generada recibe todo el cuerpo de la petición como un único parámetro <code>requestBody</code>.',
			],
		},
		sap: {
			summary: 'EDDI no tiene un conector nativo de SAP. Se llega a SAP a través de sus API OData y REST con importación de OpenAPI o llamadas HTTP, o mediante un servidor MCP, bajo aprobaciones y el registro de auditoría.',
			gets: [
				'Agentes que leen de SAP y, con aprobación, escriben en SAP a través de sus API publicadas',
				'La misma gobernanza que cualquier otra herramienta: aprobaciones, registro de auditoría, credenciales guardadas en la bóveda',
				'Sin código en el agente. La conexión es configuración que puedes revisar',
			],
			steps: [
				'Elige la vía. Usa la importación de OpenAPI si el servicio de SAP publica una descripción OpenAPI. Usa llamadas HTTP para declarar peticiones OData o REST concretas. Usa MCP si ya operas un servidor MCP delante de SAP.',
				'Guarda la credencial o el token de SAP en la bóveda de secretos y referéncialo como <code>${vault:...}</code>.',
				'Declara primero solo las operaciones de lectura que necesita el agente, como listar o leer objetos de negocio.',
				'Pon puerta a toda escritura con <code>http.*:*</code> y exceptúa las lecturas con <code>http.get:*</code>. Los aprobadores deciden en el Manager o en Slack.',
				'Revisa el registro de auditoría de cada llamada antes de ampliar lo que el agente puede hacer.',
			],
			captions: [
				'Un ejemplo de lectura desde un servicio OData de SAP. El host, la ruta del servicio y la autenticación dependen de tu sistema SAP.',
				'Las escrituras esperan a una persona. Las lecturas pasan.',
			],
			governance: [
				'Las escrituras quedan retenidas para su aprobación, y la decisión se registra en el registro de auditoría de solo anexado, firmado con HMAC.',
				'Las credenciales permanecen en la bóveda y nunca aparecen en la configuración del agente ni en las exportaciones.',
				'La lista permitida de endpoints hace que una operación de SAP no declarada no pueda llamarse, escriba lo que escriba un usuario.',
			],
			goodToKnow: [
				'Es un patrón de integración, no un conector SAP certificado. La forma de autenticarte en SAP y las API que expone dependen de tu entorno.',
				'EDDI Solutions puede construir y mantener la conexión por ti, incluidas herramientas MCP a medida, y operarla en tu nube o en local.',
			],
		},
		chroma: {
			summary: 'Chroma como almacén vectorial de una base de conocimiento de EDDI. La opción de menor fricción cuando no tienes infraestructura existente que reutilizar.',
			gets: [
				'Respuestas con recuperación aumentada a partir de tus propios documentos',
				`Uno de los ${VECTOR_STORES} almacenes vectoriales, elegido por configuración y no por código`,
				'Fuentes de ingesta: rastreo de sitios web y archivos subidos, con programaciones e historial de ejecuciones',
			],
			steps: [
				'Ejecuta un servidor Chroma y anota su URL y el nombre de una colección.',
				'Crea una RagConfiguration con <code>storeType: "chroma"</code> y los parámetros del almacén, además del proveedor de embeddings.',
				'Vincúlala al agente con un paso de workflow <code>eddi://ai.labs.rag</code>.',
				'Selecciónala en la tarea de LLM por nombre en <code>knowledgeBases</code> y luego ingiere documentos.',
			],
			captions: [
				'La base de conocimiento. Chroma recibe una URL base y un nombre de colección.',
				'El paso que la vincula al agente y la tarea que la usa. Omitir el paso de workflow es el error más común.',
			],
			governance: [
				'Las claves de API de embeddings son referencias a la bóveda, de modo que el corpus de documentos y las credenciales permanecen separados.',
				'Las llamadas de embeddings envían texto de los documentos a un proveedor de embeddings alojado. Si los datos no pueden salir de tu infraestructura, usa un modelo de embeddings autoalojado.',
				'Un almacén vectorial abierto es una copia de tu corpus. Ejecuta Chroma con autenticación y fuera de las interfaces públicas.',
			],
			goodToKnow: [
				'La sustitución de los fragmentos de un documento está verificada para el almacén en memoria y pgvector. Para Chroma se espera que funcione, pero no está cubierta por pruebas, por lo que los documentos reingeridos pueden dejar fragmentos obsoletos.',
			],
		},
		pgvector: {
			summary: 'PostgreSQL con pgvector como almacén vectorial de una base de conocimiento de EDDI. La opción persistente recomendada cuando ya operas PostgreSQL.',
			gets: [
				'Una base de conocimiento dentro de una base de datos de la que ya haces copias de seguridad y que ya operas',
				'Sustitución verificada de documentos en la reingesta',
				'La misma configuración de agente que con cualquier otro almacén; solo cambian los parámetros del almacén',
			],
			steps: [
				'Habilita la extensión pgvector en PostgreSQL y crea una base de datos y un usuario.',
				'Crea una RagConfiguration con <code>storeType: "pgvector"</code>, los datos de conexión, una tabla y la <code>dimension</code> del vector.',
				'Vincúlala con un paso de workflow <code>eddi://ai.labs.rag</code>.',
				'Selecciónala por nombre en la tarea de LLM e ingiere documentos.',
			],
			captions: [
				'La dimensión debe coincidir con tu modelo de embeddings. 1536 coincide con text-embedding-3-small.',
				'Vincular la base de conocimiento al agente y usarla en una tarea.',
			],
			governance: [
				'La contraseña de la base de datos es un parámetro obligatorio. Mantenla como referencia a la bóveda.',
				'El control de acceso y las copias de seguridad de tu PostgreSQL existente se aplican a los vectores.',
				'Las llamadas de embeddings envían texto de los documentos al proveedor de embeddings que configures.',
			],
			goodToKnow: [
				'El almacén en memoria es para desarrollo: se vacía tras 30 minutos sin consultas y al reiniciar. Un almacén persistente como pgvector es la elección para producción.',
			],
		},
		qdrant: {
			summary: 'Qdrant como almacén vectorial de una base de conocimiento de EDDI, una base de datos vectorial especializada con margen para crecer.',
			gets: [
				'Una base de datos vectorial dedicada detrás de tu base de conocimiento',
				'Clave de API y TLS opcionales',
				'La misma configuración de agente que con cualquier otro almacén',
			],
			steps: [
				'Ejecuta un servidor Qdrant y anota su host y su puerto gRPC (el valor por defecto de EDDI es 6334).',
				'Crea una RagConfiguration con <code>storeType: "qdrant"</code> y un <code>collectionName</code>.',
				'Vincúlala con un paso de workflow <code>eddi://ai.labs.rag</code>.',
				'Selecciónala por nombre en la tarea de LLM e ingiere documentos.',
			],
			captions: [
				'Qdrant recibe un host, un puerto y un nombre de colección. apiKey y useTls son opcionales.',
				'Vincular la base de conocimiento al agente y usarla en una tarea.',
			],
			governance: [
				'Si Qdrant necesita una clave de API, referénciala desde la bóveda.',
				'Las llamadas de embeddings envían texto de los documentos al proveedor de embeddings que configures.',
				'Un almacén vectorial abierto es una copia de tu corpus. Mantenlo fuera de las interfaces públicas.',
			],
			goodToKnow: [
				'Se espera que la sustitución de los fragmentos de un documento funcione con Qdrant, pero no está cubierta por pruebas. Sin ella, los documentos reingeridos pueden dejar fragmentos obsoletos.',
			],
		},
		elasticsearch: {
			summary: 'Elasticsearch como almacén vectorial de una base de conocimiento de EDDI, útil cuando ya lo operas y quieres búsqueda por palabras clave y vectorial en un mismo lugar.',
			gets: [
				'Una base de conocimiento en un clúster que ya operas',
				'Autenticación por clave de API o por nombre de usuario y contraseña',
				'La misma configuración de agente que con cualquier otro almacén',
			],
			steps: [
				'Asegúrate de que hay un clúster de Elasticsearch accesible y elige un nombre de índice.',
				'Crea una RagConfiguration con <code>storeType: "elasticsearch"</code>, el <code>serverUrl</code> y el <code>indexName</code>.',
				'Vincúlala con un paso de workflow <code>eddi://ai.labs.rag</code>.',
				'Selecciónala por nombre en la tarea de LLM e ingiere documentos.',
			],
			captions: [
				'El serverUrl por defecto es localhost:9200. Añade una apiKey, o un userName y una password, para un clúster protegido.',
				'Vincular la base de conocimiento al agente y usarla en una tarea.',
			],
			governance: [
				'Referencia la clave de API o la contraseña desde la bóveda.',
				'Las llamadas de embeddings envían texto de los documentos al proveedor de embeddings que configures.',
				'El control de acceso de tu clúster existente se aplica a los vectores.',
			],
			goodToKnow: [
				'Se espera que la sustitución de los fragmentos de un documento funcione con Elasticsearch, pero no está cubierta por pruebas. Sin ella, los documentos reingeridos pueden dejar fragmentos obsoletos.',
			],
		},
		'mongodb-atlas-vector-search': {
			summary: 'MongoDB Atlas Vector Search como almacén vectorial de una base de conocimiento de EDDI, una opción natural si ya trabajas en Atlas.',
			gets: [
				'Una base de conocimiento en el clúster de Atlas que ya operas',
				'Configuración mediante cadena de conexión, base de datos, colección y nombre de índice',
				'La misma configuración de agente que con cualquier otro almacén',
			],
			steps: [
				'Crea un índice de búsqueda vectorial en Atlas y anota los nombres de la base de datos, la colección y el índice.',
				'Crea una RagConfiguration con <code>storeType: "mongodb-atlas"</code> y los parámetros del almacén.',
				'Vincúlala con un paso de workflow <code>eddi://ai.labs.rag</code>.',
				'Selecciónala por nombre en la tarea de LLM e ingiere documentos.',
			],
			captions: [
				'La cadena de conexión lleva credenciales, por eso aquí es una referencia a la bóveda.',
				'Vincular la base de conocimiento al agente y usarla en una tarea.',
			],
			governance: [
				'Mantén la cadena de conexión en la bóveda, no en la configuración.',
				'Las llamadas de embeddings envían texto de los documentos al proveedor de embeddings que configures.',
				'El control de acceso y las reglas de red de Atlas se aplican a los vectores.',
			],
			goodToKnow: [
				'Se espera que la sustitución de los fragmentos de un documento funcione con Atlas, pero no está cubierta por pruebas. Sin ella, los documentos reingeridos pueden dejar fragmentos obsoletos.',
			],
		},
		'kubernetes-helm': {
			summary: 'Ejecuta EDDI en cualquier clúster de Kubernetes conforme con un quickstart de un solo archivo, un chart de Helm u overlays de Kustomize, con MongoDB o PostgreSQL.',
			gets: [
				'Un manifiesto de quickstart que despliega EDDI y MongoDB',
				'Un chart de Helm y overlays de Kustomize para perfiles de producción',
				'Componentes opcionales: autenticación con Keycloak, NATS JetStream, monitorización, ingress, pod disruption budget y network policy',
				'MongoDB o PostgreSQL como almacén de datos',
			],
			steps: [
				'Aplica el manifiesto de quickstart o instala el chart de Helm con una clave maestra de la bóveda.',
				'Crea el Secret <code>eddi-secrets</code> que contiene la clave maestra de la bóveda. Ningún manifiesto lo escribe, de forma deliberada.',
				'Elige el overlay de base de datos o los valores de Helm para MongoDB o PostgreSQL.',
				'Añade los componentes opcionales que necesites, como Keycloak e ingress.',
				'Para los secretos de producción, sincroniza <code>eddi-secrets</code> con el External Secrets Operator.',
			],
			captions: [
				'EDDI y MongoDB en un solo comando. El pod espera hasta que exista el Secret eddi-secrets.',
				'Instalación con Helm y una clave maestra de la bóveda generada.',
				'Los valores de Helm que cambian el almacén de datos a PostgreSQL.',
			],
			governance: [
				'Ningún manifiesto escribe nunca el Secret de la clave maestra, de modo que una nueva aplicación no puede reemplazar una clave activa y dejar los secretos existentes sin poder descifrarse.',
				'El realm de Keycloak incluido para Helm y Kustomize no define ninguna contraseña por defecto para las cuentas con privilegios.',
				'El perfil de producción añade un pod disruption budget y una network policy.',
			],
			goodToKnow: [
				'El External Secrets Operator puede sincronizar el Secret <code>eddi-secrets</code> desde AWS Secrets Manager, HashiCorp Vault, Azure Key Vault y similares. El propio EDDI no tiene un cliente nativo para ellos.',
				'EDDI Solutions puede operar EDDI por ti en tu propia nube, en local o como instancia gestionada dedicada.',
			],
		},
		openshift: {
			summary: 'EDDI incluye una imagen de contenedor certificada por Red Hat, basada en UBI 10, que se ejecuta sin root en OpenShift 4.12 o posterior, además de un Operator para OperatorHub.',
			gets: [
				'Una imagen certificada por Red Hat, listada en el Red Hat Ecosystem Catalog',
				'Ejecución sin root con UID 185 sobre una base UBI 10 con OpenJDK 25',
				'Un Operator que crea una instancia de EDDI y una ruta a partir de un recurso personalizado',
				'Certificación comprobada en CI con Red Hat preflight',
			],
			steps: [
				'En OpenShift 4.12 o posterior, abre OperatorHub e instala el EDDI Operator.',
				'Crea una instancia <code>Eddi</code> desde Operadores instalados, con el tamaño y el almacenamiento para MongoDB.',
				'El Operator crea la ruta automáticamente.',
				'Añade autenticación y secretos como en cualquier otro clúster.',
			],
			captions: ['Un recurso personalizado Eddi, tomado de la documentación.'],
			governance: [
				'El contenedor se ejecuta como usuario sin root, y la imagen incluye los archivos de licencia de terceros.',
				'Las versiones se comprueban en CI frente a los requisitos de certificación de Red Hat.',
				'El arranque en producción sigue exigiendo OIDC salvo que lo excluyas de forma explícita.',
			],
			goodToKnow: [
				'El Operator se está actualizando para EDDI 6 con el fin de admitir tanto MongoDB como PostgreSQL. La vía genérica de Kubernetes funciona en cualquier clúster conforme.',
				'Un host RHEL 8 no es compatible con la imagen UBI 10. RHEL 9 o posterior sí lo es.',
			],
		},
		ollama: {
			summary: 'Ejecuta modelos en local con Ollama y mantén los prompts y los documentos en tu propio hardware, para entornos locales y aislados de la red (air-gapped).',
			gets: [
				'Una tarea de LLM de tipo <code>ollama</code> que habla con tu servidor Ollama',
				'Sin clave de API de proveedor y sin enviar datos a un modelo alojado',
				'Un overlay de compose que inicia Ollama junto a EDDI',
				'Jlama en proceso como alternativa para modelos pequeños cuantizados',
			],
			steps: [
				'Inicia EDDI con el overlay de compose de Ollama, o ejecuta Ollama por tu cuenta y anota su URL.',
				'Descarga un modelo en Ollama. Usa la etiqueta del modelo exactamente como la muestra <code>ollama list</code>.',
				'Define el <code>type</code> de la tarea como <code>ollama</code> con el <code>baseUrl</code> y el <code>model</code>.',
				'Dentro de un contenedor, <code>localhost</code> es el propio contenedor. Usa el nombre del servicio de compose o <code>host.docker.internal</code>.',
			],
			captions: [
				'Levanta Ollama en la misma red como http://ollama:11434.',
				'Una tarea de Ollama, tomada de la documentación de EDDI.',
			],
			governance: [
				'Los prompts, el contexto recuperado y las respuestas permanecen en tu red, que es el objetivo de un modelo local.',
				'Las aprobaciones, las Behavior Rules y el registro de auditoría se aplican igual que con un modelo alojado.',
				'No interviene ninguna credencial, así que no hay nada que poner en la bóveda para el modelo en sí.',
			],
			goodToKnow: [
				'Una configuración totalmente aislada de la red necesita un Ollama local o una caché de Jlama precargada, porque EDDI no puede descargar un modelo sin red.',
				'Los modelos locales varían en fiabilidad de llamadas a herramientas y de JSON. Prueba el comportamiento del que dependes.',
			],
		},
	},
};

export default copy;
