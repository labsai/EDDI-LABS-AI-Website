/**
 * Model catalog copy, Spanish. Translated from ./en.ts; keep keys identical.
 */
import type { ModelsCopy } from './en';

const copy: ModelsCopy = {
	models: {
		'claude-fable-5-1': {
			summary: 'El modelo de disponibilidad general más capaz de Anthropic, creado para el razonamiento exigente y el trabajo de agentes de larga duración.',
			strengths: ['Sesiones de agente que duran horas', 'Investigación en varios pasos', 'Trabajo con documentos, hojas de cálculo y presentaciones', 'Contexto de 1M de tokens con salida de 128K'],
			bestFor: ['Agentes de largo horizonte', 'Investigación en profundidad', 'Análisis llevados hasta un documento terminado'],
		},
		'claude-opus-5-5': {
			summary: 'La opción predeterminada que recomienda Anthropic para el trabajo exigente: programación agéntica de larga duración y trabajo de conocimiento, con el pensamiento adaptativo siempre activo.',
			strengths: ['Agentes de programación autónomos durante horas', 'Refactorización a gran escala', 'Flujos de trabajo con mucha visión y uso del ordenador', 'Contexto de 1M de tokens con salida de 128K'],
			bestFor: ['Programación agéntica compleja', 'Trabajo de conocimiento empresarial', 'Ingeniería de sistemas'],
		},
		'claude-sonnet-5-5': {
			summary: 'El equilibrio de Anthropic entre velocidad e inteligencia para la programación, los agentes y el trabajo empresarial del día a día, con el pensamiento adaptativo activado por defecto.',
			strengths: ['Respuestas rápidas', 'Contexto de 1M de tokens con salida de 128K', 'El pensamiento puede limitarse a los intervalos entre llamadas a herramientas', 'Uso fiable de herramientas'],
			bestFor: ['Generación de código', 'Análisis de datos', 'Creación de contenido', 'Agentes con herramientas'],
		},
		'claude-haiku-4-5': {
			summary: 'El modelo actual más rápido y económico de Anthropic, con una ventana de contexto de 200K y pensamiento extendido opcional.',
			strengths: ['La latencia más baja de la gama Claude', 'Pensamiento extendido con presupuesto de tokens', 'Entrada de texto e imagen', 'Muy adecuado para tareas de subagentes'],
			bestFor: ['Aplicaciones en tiempo real', 'Procesamiento de gran volumen', 'El primer nivel de una cascada'],
		},
		'gpt-6': {
			summary: 'La familia de razonamiento actual de OpenAI en tres niveles: Astra para el trabajo más difícil, Sol para resultados cercanos a Astra con menor coste y Luna para gran volumen.',
			strengths: ['Contexto de 1,05M de tokens y salida de 128K en todos los niveles', 'Llamada a funciones y salidas estructuradas', 'Esfuerzo de razonamiento hasta max', 'Entrada de texto e imagen'],
			bestFor: ['Astra: razonamiento e investigación exigentes', 'Sol: programación compleja y trabajo profesional', 'Luna: tareas concretas de gran volumen'],
		},
		'gpt-5-6': {
			summary: 'La generación anterior de OpenAI, que introdujo los niveles Sol, Terra y Luna: buque insignia, equilibrado y de menor coste.',
			strengths: ['Contexto de 1,05M de tokens y salida de 128K', 'Esfuerzo de razonamiento de none a max', 'Entrada de texto e imagen'],
			bestFor: ['Sol: trabajo profesional complejo', 'Terra: equilibrio entre capacidad y coste', 'Luna: volumen sensible al coste'],
		},
		'gpt-oss': {
			summary: 'Los modelos de razonamiento de pesos abiertos y mezcla de expertos de OpenAI, bajo Apache 2.0: 120b cabe en una GPU de 80 GB y 20b funciona en dispositivos de 16 GB.',
			strengths: ['Licencia Apache 2.0', 'Llamada a funciones y salidas estructuradas', 'Esfuerzo de razonamiento ajustable', 'Admite fine-tuning'],
			bestFor: ['Despliegue autoalojado y on-premises', 'Inferencia rápida en Groq', 'Agentes con uso de herramientas'],
		},
		'gemini-3-8-flash': {
			summary: 'El modelo Flash de disponibilidad general actual de Google, orientado a la ingeniería de largo horizonte, los agentes autónomos y los flujos de trabajo empresariales con la velocidad y el coste de Flash.',
			strengths: ['Entrada de texto, imagen, vídeo, audio y PDF', 'Llamada a funciones y salidas estructuradas', 'Niveles de pensamiento low, medium y high', 'Contexto de 1M de tokens'],
			bestFor: ['Agentes autónomos', 'Flujos de trabajo empresariales', 'Documentos multimodales'],
		},
		'gemini-3-1-pro': {
			summary: 'El modelo Pro actual de Google, en versión preliminar en la Gemini API, ajustado para el razonamiento complejo, la ingeniería de software y el uso preciso de herramientas en varios pasos.',
			strengths: ['Entrada de texto, imagen, vídeo, audio y PDF', 'Pensamiento eficiente', 'Ejecución fiable de herramientas en varios pasos', 'Contexto de 1M de tokens'],
			bestFor: ['Resolución de problemas complejos', 'Programación agéntica', 'Comprensión multimodal'],
		},
		'gemini-3-5-flash-lite': {
			summary: 'El modelo 3.5 de Google con el menor coste y la menor latencia, creado para trabajo de subagentes de alto rendimiento, análisis de documentos y extracción sencilla.',
			strengths: ['Baja latencia y bajo coste', 'Entrada de texto, imagen, vídeo, audio y PDF', 'Llamada a funciones y pensamiento', 'Contexto de 1M de tokens'],
			bestFor: ['Subagentes de gran volumen', 'Análisis y extracción de documentos', 'Traducción'],
		},
		gemma: {
			summary: 'La familia de pesos abiertos de Google, desde modelos para el edge hasta un modelo denso de 31B y un modelo de mezcla de expertos de 26B en Gemma 4.',
			strengths: ['Pesos abiertos, Gemma 4 bajo Apache 2.0', 'Llamada a funciones para agentes', 'Entrada de imagen en todos los tamaños', 'Funciona en hardware modesto'],
			bestFor: ['Despliegue en el dispositivo y en el edge', 'Agentes autoalojados', 'Respuesta a preguntas y resúmenes'],
		},
		'grok-4-7': {
			summary: 'El modelo de frontera de xAI para programación, tareas agénticas y trabajo de conocimiento, con entrada de texto e imagen y esfuerzo de razonamiento seleccionable.',
			strengths: ['Contexto de 500K tokens', 'Llamada a funciones y salidas estructuradas', 'Esfuerzo de razonamiento de low a xhigh', 'Endpoint con residencia de datos en EE. UU.'],
			bestFor: ['Ingeniería de software', 'Tareas agénticas largas', 'Trabajo de conocimiento profesional'],
		},
		'deepseek-flash': {
			summary: 'El modelo Flash actual de DeepSeek, con comprensión nativa de imágenes, un contexto de 1M de tokens y el pensamiento activado por defecto; los pesos tienen licencia MIT.',
			strengths: ['Contexto de 1M de tokens, salida de hasta 384K', 'Llamadas a herramientas y salida JSON', 'Entrada de imagen y texto', 'Pesos abiertos bajo MIT'],
			bestFor: ['Agentes rentables', 'Agentes de programación', 'Cargas largas con mucha entrada'],
		},
		'deepseek-v4-pro': {
			summary: 'El gran modelo V4 Pro de DeepSeek: solo texto a través de la API, con un contexto de 1M de tokens, llamadas a herramientas y esfuerzo de pensamiento seleccionable; los pesos tienen licencia MIT.',
			strengths: ['Contexto de 1M de tokens, salida de hasta 384K', 'Esfuerzo de pensamiento low, high o max', 'Llamadas a herramientas y salida JSON', 'Pesos abiertos bajo MIT'],
			bestFor: ['Agentes de código', 'Uso de herramientas y automatización de tareas'],
		},
		'deepseek-r1-distill': {
			summary: 'Un pequeño modelo abierto de razonamiento: Qwen3-8B entrenado con la cadena de pensamiento de DeepSeek-R1, para uso local.',
			strengths: ['Razonamiento paso a paso', 'Muy bueno en matemáticas para su tamaño', 'Pesos con licencia MIT'],
			bestFor: ['Tareas de razonamiento en local', 'Matemáticas y lógica', 'Experimentos sin conexión'],
		},
		'kimi-k3': {
			summary: 'El buque insignia de Moonshot AI, con un contexto de 1M de tokens, comprensión nativa de imagen y vídeo y pensamiento siempre activo; los pesos están publicados.',
			strengths: ['Contexto de 1M de tokens', 'Entrada de texto, imagen y vídeo', 'Llamada a herramientas', 'Pesos publicados'],
			bestFor: ['Programación de largo horizonte', 'Trabajo de conocimiento', 'Razonamiento profundo y flujos de agentes'],
		},
		'kimi-k2-7-code': {
			summary: 'El modelo de programación dedicado de Moonshot AI, con un contexto de 256K, pensamiento siempre activo, llamada a herramientas y una variante de alta velocidad aparte.',
			strengths: ['Contexto de 256K tokens', 'Entrada de texto, imagen y vídeo', 'Llamada a herramientas en varios pasos', 'Variante de alta velocidad de unos 180 tokens por segundo'],
			bestFor: ['Tareas de programación largas', 'Programación agéntica', 'Matemáticas y razonamiento'],
		},
		'qwen-3-8': {
			summary: 'La línea Qwen 3.8 de Alibaba: Max es el buque insignia, y tanto Max como Flash ofrecen un contexto de 1M de tokens, entrada de imagen y vídeo y pensamiento híbrido.',
			strengths: ['Contexto de 1M de tokens, salida de 131K', 'Entrada de texto, imagen y vídeo', 'Llamada a funciones y salidas estructuradas', 'Regiones que incluyen Fráncfort y Virginia'],
			bestFor: ['Programación de largo horizonte', 'Trabajo profesional en derecho, finanzas y diseño', 'Agentes multimodales'],
		},
		'qwen-3-7-plus': {
			summary: 'Qwen 3.7 Plus y Flash ofrecen un contexto de 1M de tokens, entrada de imagen y vídeo, pensamiento híbrido y llamada a funciones para el trabajo de agentes multimodales.',
			strengths: ['Contexto de 1M de tokens, salida de 131K', 'Entrada de texto, imagen y vídeo', 'Llamada a funciones', 'Comprensión de pantallas e interfaces gráficas (Plus)'],
			bestFor: ['Agentes multimodales', 'Generación de código visual', 'Agentes de búsqueda (Flash)'],
		},
		'glm-5-3': {
			summary: 'El buque insignia de Z.ai para ingeniería de software y trabajo de agentes, con un contexto de 1M de tokens, salida de hasta 128K y pesos publicados; las variantes Flash añaden entrada de imagen y vídeo.',
			strengths: ['Contexto de 1M de tokens, salida de 128K', 'Llamada a funciones con streaming de herramientas', 'Esfuerzo de pensamiento low, high o max', 'Pesos publicados'],
			bestFor: ['Agentes de programación', 'Tareas agénticas largas', 'Revisión de seguridad del código'],
		},
		'minimax-m3': {
			summary: 'El modelo de programación y agentes nativamente multimodal de MiniMax, con hasta 1M de tokens de contexto y pensamiento intercalado entre llamadas a herramientas; los pesos están publicados.',
			strengths: ['Contexto de hasta 1M de tokens (512K garantizados)', 'Pensamiento entre llamadas a herramientas', 'Entrada de texto, imagen y vídeo', 'Pesos publicados'],
			bestFor: ['Asistentes de programación', 'Tareas largas de agentes y automatización de flujos de trabajo', 'Análisis de vídeos largos'],
		},
		'mistral-large': {
			summary: 'El buque insignia de pesos abiertos y mezcla de expertos de Mistral (41B de parámetros activos, 675B en total), con comprensión de imágenes, bajo Apache 2.0.',
			strengths: ['Licencia Apache 2.0', 'Comprensión de imágenes', 'Más de 40 idiomas', 'Llamada a funciones y salidas estructuradas'],
			bestFor: ['Asistentes multilingües', 'Análisis de documentos', 'Flujos de trabajo con herramientas'],
		},
		'mistral-medium': {
			summary: 'Un modelo multimodal denso de 128B que combina seguimiento de instrucciones, razonamiento y programación, con el esfuerzo de razonamiento definido en cada solicitud.',
			strengths: ['Esfuerzo de razonamiento por solicitud', 'Creado para agentes y programación', 'Llamada a funciones y salida JSON', 'Autoalojable en cuatro GPU'],
			bestFor: ['Flujos de trabajo agénticos', 'Agentes de programación', 'Documentos largos'],
		},
		'mistral-small': {
			summary: 'Un modelo de pesos abiertos y mezcla de expertos (unos 6B de parámetros activos) que combina instrucciones, razonamiento y programación, con entrada de imagen.',
			strengths: ['Instrucciones, razonamiento y programación en un solo modelo', 'Razonamiento que se puede activar', 'Entrada de imagen', 'Licencia Apache 2.0'],
			bestFor: ['Agentes sensibles al coste', 'Chat general con razonamiento opcional', 'Comprensión de imágenes'],
		},
		ministral: {
			summary: 'Modelos pequeños de pesos abiertos en tres tamaños, cada uno con variantes base, instruct y de razonamiento y comprensión de imágenes, para uso local y en el edge.',
			strengths: ['Creados para el despliegue local', 'Variantes de razonamiento en todos los tamaños', 'Comprensión de imágenes', 'Licencia Apache 2.0'],
			bestFor: ['Despliegue en el edge y on-premises', 'Tareas de bajo coste y gran volumen', 'Agentes locales'],
		},
		codestral: {
			summary: 'El modelo de programación de Mistral para tareas de baja latencia y alta frecuencia, como fill-in-the-middle y generación de código.',
			strengths: ['Fill-in-the-middle', 'Autocompletado de baja latencia', 'Llamada a funciones', 'Salidas estructuradas'],
			bestFor: ['Autocompletado de código', 'Generación de código'],
		},
		'llama-4': {
			summary: 'Los modelos de mezcla de expertos nativamente multimodales de Meta, con 17B de parámetros activos: Scout (109B en total) y Maverick (400B en total).',
			strengths: ['Entrada de texto e imagen', 'Eficiencia de la mezcla de expertos', '12 idiomas', 'Contexto largo (1M para Maverick en Bedrock)'],
			bestFor: ['Asistentes multimodales', 'Razonamiento visual', 'Documentos largos'],
		},
		'llama-3-3-70b': {
			summary: 'El modelo de texto de 70B de Meta para diálogo multilingüe en ocho idiomas, con uso de herramientas.',
			strengths: ['Ocho idiomas', 'Uso de herramientas', 'Contexto de 128K'],
			bestFor: ['Chat general autoalojado', 'Asistentes multilingües', 'Generación de datos sintéticos'],
		},
		'llama-3-2-1b': {
			summary: 'Un modelo multilingüe de 1,2B de parámetros para entornos limitados y en el dispositivo, lo bastante pequeño para ejecutarse dentro de la JVM de EDDI.',
			strengths: ['Funciona en una CPU', 'Contexto de 128K', 'Ocho idiomas'],
			bestFor: ['Inferencia en proceso y sin conexión', 'Reescritura de consultas y prompts', 'Resúmenes breves'],
		},
		'amazon-nova': {
			summary: 'Los modelos multimodales de Amazon en Bedrock que aceptan texto, imagen y vídeo: Pro es el nivel equilibrado y Lite el de bajo coste.',
			strengths: ['Entrada de texto, imagen y vídeo', 'Contexto de 300K tokens', 'Uso de herramientas', 'Caché de prompts'],
			bestFor: ['Preguntas y respuestas sobre documentos e imágenes', 'Comprensión de vídeo', 'Agentes que permanecen dentro de AWS'],
		},
		'cohere-command-a': {
			summary: 'El modelo empresarial de 111B de Cohere, centrado en el uso de herramientas, la recuperación y 23 idiomas; Oracle también ofrece variantes de razonamiento y visión.',
			strengths: ['Uso de herramientas en varios pasos', 'Generación aumentada por recuperación', '23 idiomas', 'Contexto de 256K tokens'],
			bestFor: ['RAG empresarial', 'Agentes multilingües', 'Despliegues en Oracle Cloud'],
		},
		'phi-4-mini': {
			summary: 'El modelo abierto de 3,8B de Microsoft para trabajo con poca memoria y sensible a la latencia, y para razonamiento matemático y lógico.',
			strengths: ['Funciona en entornos limitados', 'Matemáticas y lógica', 'Llamada a funciones', 'Licencia MIT'],
			bestFor: ['Inferencia local y en el edge', 'Aplicaciones sensibles a la latencia', 'Llamadas ligeras a herramientas'],
		},
	},
	hosts: {
		bedrock: { name: 'Amazon Bedrock', summary: 'Acceso gestionado en AWS a modelos de Anthropic, Meta, Amazon, OpenAI, Mistral y otros.', why: ['Los proveedores no ven los prompts ni las respuestas de los clientes', 'Red privada mediante VPC y PrivateLink', 'Inferencia en la región y entre regiones para la residencia de datos'] },
		vertex: { name: 'Google Vertex AI', summary: 'La plataforma de IA de Google Cloud, ahora también llamada Gemini Enterprise Agent Platform, que sirve Gemini y los modelos de Model Garden.', why: ['Los endpoints regionales mantienen el procesamiento en una sola jurisdicción', 'VPC Service Controls para el aislamiento de red', 'Autenticación mediante credenciales de Google Cloud'] },
		azure: { name: 'Azure OpenAI', summary: 'Modelos de OpenAI alojados en su suscripción de Azure, ahora parte de Microsoft Foundry, invocados por nombre de despliegue.', why: ['Los despliegues Data Zone mantienen el procesamiento en la UE, EE. UU. o APAC', 'Endpoints privados en la red troncal de Azure', 'Rendimiento aprovisionado para capacidad reservada'] },
		oracle: { name: 'Oracle OCI Generative AI', summary: 'Servicio gestionado de Oracle Cloud para Cohere, Meta Llama y otros modelos, bajo demanda o en clústeres dedicados.', why: ['Clústeres de IA dedicados', 'Endpoints privados y aislamiento de datos', 'Gobernado por las políticas de OCI IAM'] },
		groq: { name: 'Groq', summary: 'Una nube de inferencia que ejecuta modelos abiertos en los chips LPU propios de Groq, a través de una API compatible con OpenAI.', why: ['Latencia muy baja', 'Modelos abiertos como gpt-oss y Qwen', 'Una clave, sin infraestructura'] },
		openrouter: { name: 'OpenRouter', summary: 'Una sola API para cientos de modelos de muchos proveedores, con un enrutador automático que elige un modelo por solicitud.', why: ['Una clave para muchos fabricantes', 'Conmutación automática entre proveedores', 'openrouter/auto elige un modelo para cada tarea'] },
		ollama: { name: 'Ollama', summary: 'Ejecuta modelos abiertos en su propio hardware detrás de una API local, si lo desea en la misma red Docker que EDDI.', why: ['No necesita conexión a la nube', 'Los datos nunca salen de sus máquinas', 'Un comando para descargar un modelo'] },
		huggingface: { name: 'Hugging Face', summary: 'Inferencia alojada para modelos abiertos por id de repositorio, enrutada a proveedores asociados con un único token.', why: ['Modelos abiertos por id de repositorio', 'Un token para todos los proveedores', 'Sin infraestructura que gestionar'] },
		jlama: { name: 'Jlama', summary: 'Un motor de inferencia en Java puro que ejecuta modelos pequeños dentro de la JVM de EDDI, sin ningún servidor de modelos.', why: ['Nada más que desplegar', 'Modelos cuantizados para ocupar poco', 'Funciona en entornos aislados una vez que los pesos están en caché'] },
	},
	tips: {
		anthropicNoTemperature: 'No defina <code>temperature</code>. Los modelos Claude actuales rechazan una temperatura distinta de la predeterminada, y las herramientas de configuración de EDDI ya la omiten.',
		openaiResponsesTools: 'OpenAI documenta la Responses API para la llamada a herramientas en Astra y 6.1 Sol, mientras que el tipo <code>openai</code> de EDDI usa Chat Completions. Pruebe los agentes que usan herramientas con estos modelos antes de pasar a producción.',
		geminiSignature: 'Gemini 3 necesita que se le devuelva su firma de pensamiento durante las llamadas a herramientas. EDDI lo hace por defecto (<code>returnThinking</code> y <code>sendThinking</code> están activados para el tipo <code>gemini</code>); déjelos activados.',
		geminiVertexTools: 'Para Gemini 3 con herramientas use <code>type: gemini</code>, no <code>gemini-vertex</code>: la ruta de Vertex no puede transportar la firma de pensamiento. <code>gemini-vertex</code> funciona bien sin herramientas.',
		xaiUsRegion: 'Defina <code>"region": "us"</code> para el endpoint de xAI con residencia de datos en EE. UU. Solo sirve grok-4.7 y grok-4.6.',
		thinkingEcho: 'Este proveedor exige que el razonamiento del modelo se reenvíe durante los bucles de herramientas. El preset de EDDI lo hace por usted: deje <code>returnThinking</code> y <code>sendThinking</code> con sus valores predeterminados.',
		kimiTemperature: 'Moonshot fija la temperatura en kimi-k2.7-code y kimi-k2.6, así que no defina <code>temperature</code> en ellos.',
		qwenRegions: 'Elija una región con <code>"region": "intl"</code>, <code>"cn"</code> o <code>"us"</code>. Para un host de Alibaba específico de un espacio de trabajo, defina <code>baseUrl</code> en su lugar.',
		minimaxNoJson: 'EDDI nunca envía un formato de respuesta JSON a MiniMax. Cuando necesite JSON, active <code>convertToObject</code> y describa la estructura en el prompt.',
		groqPreview: 'Groq marca algunos modelos, entre ellos qwen3.8-27b, como Preview: son para evaluación y pueden retirarse con poco aviso.',
		bedrockGeo: 'Algunos modelos de Bedrock, entre ellos Llama 4 Maverick, solo son accesibles mediante un perfil de inferencia entre regiones como <code>us.meta.llama4-maverick-17b-instruct-v1:0</code>.',
		ollamaThink: 'Los modelos de razonamiento piensan antes de responder, lo que en un chat con streaming puede parecer un bloqueo. Defina <code>"think": "false"</code> para obtener respuestas inmediatas y dé a la tarea un <code>timeout</code> generoso.',
		jlamaCache: 'Jlama se ejecuta dentro de la JVM de EDDI. Apunte <code>modelCachePath</code> a un volumen montado para que los pesos sobrevivan a los reinicios, y dimensione el pod para el modelo más el heap de EDDI.',
		localAirGap: 'Funciona totalmente sin conexión una vez descargado el modelo, por lo que es adecuado para despliegues aislados (air-gapped).',
		cascadeTier: 'Un buen primer nivel en una <a href="/features/model-cascading/">cascada de modelos</a>: rápido y económico, escala a un modelo más grande solo cuando la confianza es baja.',
		cascadeTop: 'Un nivel final sólido para una <a href="/features/model-cascading/">cascada de modelos</a>, al que solo llegan las solicitudes sobre las que un modelo más barato tiene dudas.',
		azureDeployment: 'En Azure OpenAI, <code>deploymentName</code> es el nombre que dio al despliegue en su recurso de Azure, no el nombre del modelo.',
	},
};

export default copy;
