/**
 * Model catalog copy, Brazilian Portuguese. Translated from ./en.ts; keep keys identical.
 */
import type { ModelsCopy } from './en';

const copy: ModelsCopy = {
	models: {
		'claude-fable-5-1': {
			summary: 'O modelo de disponibilidade geral mais capaz da Anthropic, criado para raciocínio exigente e trabalho de agentes de longa duração.',
			strengths: ['Sessões de agente que duram horas', 'Pesquisa em várias etapas', 'Trabalho com documentos, planilhas e apresentações', 'Contexto de 1M de tokens com saída de 128K'],
			bestFor: ['Agentes de longo horizonte', 'Pesquisa aprofundada', 'Análises levadas até um documento finalizado'],
		},
		'claude-opus-5-5': {
			summary: 'O padrão recomendado pela Anthropic para trabalho exigente: programação agêntica de longa duração e trabalho de conhecimento, com pensamento adaptativo sempre ativo.',
			strengths: ['Agentes de programação autônomos por várias horas', 'Refatoração em larga escala', 'Fluxos de trabalho com muita visão e uso do computador', 'Contexto de 1M de tokens com saída de 128K'],
			bestFor: ['Programação agêntica complexa', 'Trabalho de conhecimento corporativo', 'Engenharia de sistemas'],
		},
		'claude-sonnet-5-5': {
			summary: 'O equilíbrio da Anthropic entre velocidade e inteligência para programação, agentes e trabalho corporativo do dia a dia, com pensamento adaptativo ativado por padrão.',
			strengths: ['Respostas rápidas', 'Contexto de 1M de tokens com saída de 128K', 'O pensamento pode ficar restrito aos intervalos entre chamadas de ferramentas', 'Uso confiável de ferramentas'],
			bestFor: ['Geração de código', 'Análise de dados', 'Criação de conteúdo', 'Agentes com ferramentas'],
		},
		'claude-haiku-4-5': {
			summary: 'O modelo atual mais rápido e de menor custo da Anthropic, com janela de contexto de 200K e pensamento estendido opcional.',
			strengths: ['A menor latência da linha Claude', 'Pensamento estendido com orçamento de tokens', 'Entrada de texto e imagem', 'Muito adequado a tarefas de subagentes'],
			bestFor: ['Aplicações em tempo real', 'Processamento de alto volume', 'O primeiro nível de uma cascata'],
		},
		'gpt-6': {
			summary: 'A família de raciocínio atual da OpenAI em três níveis: Astra para o trabalho mais difícil, Sol para resultados próximos ao Astra com custo menor e Luna para alto volume.',
			strengths: ['Contexto de 1,05M de tokens e saída de 128K em todos os níveis', 'Chamada de funções e saídas estruturadas', 'Esforço de raciocínio até max', 'Entrada de texto e imagem'],
			bestFor: ['Astra: raciocínio e pesquisa exigentes', 'Sol: programação complexa e trabalho profissional', 'Luna: tarefas específicas de alto volume'],
		},
		'gpt-5-6': {
			summary: 'A geração anterior da OpenAI, que introduziu os níveis Sol, Terra e Luna: carro-chefe, equilibrado e de menor custo.',
			strengths: ['Contexto de 1,05M de tokens e saída de 128K', 'Esforço de raciocínio de none a max', 'Entrada de texto e imagem'],
			bestFor: ['Sol: trabalho profissional complexo', 'Terra: equilíbrio entre capacidade e custo', 'Luna: volume sensível a custo'],
		},
		'gpt-oss': {
			summary: 'Os modelos de raciocínio de pesos abertos e mistura de especialistas da OpenAI, sob Apache 2.0: o 120b cabe em uma GPU de 80 GB e o 20b roda em dispositivos de 16 GB.',
			strengths: ['Licença Apache 2.0', 'Chamada de funções e saídas estruturadas', 'Esforço de raciocínio ajustável', 'Permite fine-tuning'],
			bestFor: ['Implantação auto-hospedada e on-premises', 'Inferência rápida no Groq', 'Agentes com uso de ferramentas'],
		},
		'gemini-3-8-flash': {
			summary: 'O modelo Flash de disponibilidade geral atual do Google, voltado a engenharia de longo horizonte, agentes autônomos e fluxos de trabalho corporativos com a velocidade e o custo do Flash.',
			strengths: ['Entrada de texto, imagem, vídeo, áudio e PDF', 'Chamada de funções e saídas estruturadas', 'Níveis de pensamento low, medium e high', 'Contexto de 1M de tokens'],
			bestFor: ['Agentes autônomos', 'Fluxos de trabalho corporativos', 'Documentos multimodais'],
		},
		'gemini-3-1-pro': {
			summary: 'O modelo Pro atual do Google, em preview na Gemini API, ajustado para raciocínio complexo, engenharia de software e uso preciso de ferramentas em várias etapas.',
			strengths: ['Entrada de texto, imagem, vídeo, áudio e PDF', 'Pensamento eficiente', 'Execução confiável de ferramentas em várias etapas', 'Contexto de 1M de tokens'],
			bestFor: ['Resolução de problemas complexos', 'Programação agêntica', 'Compreensão multimodal'],
		},
		'gemini-3-5-flash-lite': {
			summary: 'O modelo 3.5 do Google com menor custo e menor latência, criado para trabalho de subagentes de alta vazão, análise de documentos e extração simples.',
			strengths: ['Baixa latência e baixo custo', 'Entrada de texto, imagem, vídeo, áudio e PDF', 'Chamada de funções e pensamento', 'Contexto de 1M de tokens'],
			bestFor: ['Subagentes de alto volume', 'Análise e extração de documentos', 'Tradução'],
		},
		gemma: {
			summary: 'A família de pesos abertos do Google, de modelos para edge até um modelo denso de 31B e um modelo de mistura de especialistas de 26B no Gemma 4.',
			strengths: ['Pesos abertos, Gemma 4 sob Apache 2.0', 'Chamada de funções para agentes', 'Entrada de imagem em todos os tamanhos', 'Roda em hardware modesto'],
			bestFor: ['Implantação no dispositivo e no edge', 'Agentes auto-hospedados', 'Respostas a perguntas e resumos'],
		},
		'grok-4-7': {
			summary: 'O modelo de fronteira da xAI para programação, tarefas agênticas e trabalho de conhecimento, com entrada de texto e imagem e esforço de raciocínio selecionável.',
			strengths: ['Contexto de 500K tokens', 'Chamada de funções e saídas estruturadas', 'Esforço de raciocínio de low a xhigh', 'Endpoint com residência de dados nos EUA'],
			bestFor: ['Engenharia de software', 'Tarefas agênticas longas', 'Trabalho de conhecimento profissional'],
		},
		'deepseek-flash': {
			summary: 'O modelo Flash atual da DeepSeek, com compreensão nativa de imagens, contexto de 1M de tokens e pensamento ativado por padrão; os pesos têm licença MIT.',
			strengths: ['Contexto de 1M de tokens, saída de até 384K', 'Chamadas de ferramentas e saída JSON', 'Entrada de imagem e texto', 'Pesos abertos sob MIT'],
			bestFor: ['Agentes com bom custo-benefício', 'Agentes de programação', 'Cargas longas com muita entrada'],
		},
		'deepseek-v4-pro': {
			summary: 'O grande modelo V4 Pro da DeepSeek: somente texto via API, com contexto de 1M de tokens, chamadas de ferramentas e esforço de pensamento selecionável; os pesos têm licença MIT.',
			strengths: ['Contexto de 1M de tokens, saída de até 384K', 'Esforço de pensamento low, high ou max', 'Chamadas de ferramentas e saída JSON', 'Pesos abertos sob MIT'],
			bestFor: ['Agentes de código', 'Uso de ferramentas e automação de tarefas'],
		},
		'deepseek-r1-distill': {
			summary: 'Um pequeno modelo aberto de raciocínio: Qwen3-8B treinado com a cadeia de pensamento do DeepSeek-R1, para uso local.',
			strengths: ['Raciocínio passo a passo', 'Forte em matemática para o seu tamanho', 'Pesos com licença MIT'],
			bestFor: ['Tarefas de raciocínio locais', 'Matemática e lógica', 'Experimentos offline'],
		},
		'kimi-k3': {
			summary: 'O carro-chefe da Moonshot AI, com contexto de 1M de tokens, compreensão nativa de imagem e vídeo e pensamento sempre ativo; os pesos são publicados.',
			strengths: ['Contexto de 1M de tokens', 'Entrada de texto, imagem e vídeo', 'Chamada de ferramentas', 'Pesos publicados'],
			bestFor: ['Programação de longo horizonte', 'Trabalho de conhecimento', 'Raciocínio profundo e fluxos de agentes'],
		},
		'kimi-k2-7-code': {
			summary: 'O modelo de programação dedicado da Moonshot AI, com contexto de 256K, pensamento sempre ativo, chamada de ferramentas e uma variante separada de alta velocidade.',
			strengths: ['Contexto de 256K tokens', 'Entrada de texto, imagem e vídeo', 'Chamada de ferramentas em várias etapas', 'Variante de alta velocidade com cerca de 180 tokens por segundo'],
			bestFor: ['Tarefas de programação longas', 'Programação agêntica', 'Matemática e raciocínio'],
		},
		'qwen-3-8': {
			summary: 'A linha Qwen 3.8 da Alibaba: o Max é o carro-chefe, e tanto o Max quanto o Flash oferecem contexto de 1M de tokens, entrada de imagem e vídeo e pensamento híbrido.',
			strengths: ['Contexto de 1M de tokens, saída de 131K', 'Entrada de texto, imagem e vídeo', 'Chamada de funções e saídas estruturadas', 'Regiões incluem Frankfurt e Virgínia'],
			bestFor: ['Programação de longo horizonte', 'Trabalho profissional em direito, finanças e design', 'Agentes multimodais'],
		},
		'qwen-3-7-plus': {
			summary: 'O Qwen 3.7 Plus e o Flash oferecem contexto de 1M de tokens, entrada de imagem e vídeo, pensamento híbrido e chamada de funções para trabalho de agentes multimodais.',
			strengths: ['Contexto de 1M de tokens, saída de 131K', 'Entrada de texto, imagem e vídeo', 'Chamada de funções', 'Compreensão de telas e interfaces gráficas (Plus)'],
			bestFor: ['Agentes multimodais', 'Geração de código visual', 'Agentes de busca (Flash)'],
		},
		'glm-5-3': {
			summary: 'O carro-chefe da Z.ai para engenharia de software e trabalho de agentes, com contexto de 1M de tokens, saída de até 128K e pesos publicados; as variantes Flash adicionam entrada de imagem e vídeo.',
			strengths: ['Contexto de 1M de tokens, saída de 128K', 'Chamada de funções com streaming de ferramentas', 'Esforço de pensamento low, high ou max', 'Pesos publicados'],
			bestFor: ['Agentes de programação', 'Tarefas agênticas longas', 'Revisão de segurança de código'],
		},
		'minimax-m3': {
			summary: 'O modelo de programação e agentes nativamente multimodal da MiniMax, com até 1M de tokens de contexto e pensamento intercalado entre chamadas de ferramentas; os pesos são publicados.',
			strengths: ['Contexto de até 1M de tokens (512K garantidos)', 'Pensamento entre chamadas de ferramentas', 'Entrada de texto, imagem e vídeo', 'Pesos publicados'],
			bestFor: ['Assistentes de programação', 'Tarefas longas de agentes e automação de fluxos de trabalho', 'Análise de vídeos longos'],
		},
		'mistral-large': {
			summary: 'O carro-chefe de pesos abertos e mistura de especialistas da Mistral (41B de parâmetros ativos, 675B no total), com compreensão de imagens, sob Apache 2.0.',
			strengths: ['Licença Apache 2.0', 'Compreensão de imagens', 'Mais de 40 idiomas', 'Chamada de funções e saídas estruturadas'],
			bestFor: ['Assistentes multilíngues', 'Análise de documentos', 'Fluxos de trabalho com ferramentas'],
		},
		'mistral-medium': {
			summary: 'Um modelo multimodal denso de 128B que combina seguimento de instruções, raciocínio e programação, com esforço de raciocínio definido por requisição.',
			strengths: ['Esforço de raciocínio por requisição', 'Criado para agentes e programação', 'Chamada de funções e saída JSON', 'Pode ser auto-hospedado em quatro GPUs'],
			bestFor: ['Fluxos de trabalho agênticos', 'Agentes de programação', 'Documentos longos'],
		},
		'mistral-small': {
			summary: 'Um modelo de pesos abertos e mistura de especialistas (cerca de 6B de parâmetros ativos) que combina instruções, raciocínio e programação, com entrada de imagem.',
			strengths: ['Instruções, raciocínio e programação em um só modelo', 'Raciocínio que pode ser ativado', 'Entrada de imagem', 'Licença Apache 2.0'],
			bestFor: ['Agentes sensíveis a custo', 'Chat geral com raciocínio opcional', 'Compreensão de imagens'],
		},
		ministral: {
			summary: 'Modelos pequenos de pesos abertos em três tamanhos, cada um com variantes base, instruct e de raciocínio e compreensão de imagens, para uso local e no edge.',
			strengths: ['Criados para implantação local', 'Variantes de raciocínio em todos os tamanhos', 'Compreensão de imagens', 'Licença Apache 2.0'],
			bestFor: ['Implantação no edge e on-premises', 'Tarefas de baixo custo e alto volume', 'Agentes locais'],
		},
		codestral: {
			summary: 'O modelo de programação da Mistral para tarefas de baixa latência e alta frequência, como fill-in-the-middle e geração de código.',
			strengths: ['Fill-in-the-middle', 'Autocompletar de baixa latência', 'Chamada de funções', 'Saídas estruturadas'],
			bestFor: ['Autocompletar código', 'Geração de código'],
		},
		'llama-4': {
			summary: 'Os modelos de mistura de especialistas nativamente multimodais da Meta, com 17B de parâmetros ativos: Scout (109B no total) e Maverick (400B no total).',
			strengths: ['Entrada de texto e imagem', 'Eficiência da mistura de especialistas', '12 idiomas', 'Contexto longo (1M para o Maverick no Bedrock)'],
			bestFor: ['Assistentes multimodais', 'Raciocínio visual', 'Documentos longos'],
		},
		'llama-3-3-70b': {
			summary: 'O modelo de texto de 70B da Meta para diálogo multilíngue em oito idiomas, com uso de ferramentas.',
			strengths: ['Oito idiomas', 'Uso de ferramentas', 'Contexto de 128K'],
			bestFor: ['Chat geral auto-hospedado', 'Assistentes multilíngues', 'Geração de dados sintéticos'],
		},
		'llama-3-2-1b': {
			summary: 'Um modelo multilíngue de 1,2B de parâmetros para ambientes restritos e no dispositivo, pequeno o bastante para rodar dentro da JVM do EDDI.',
			strengths: ['Roda em uma CPU', 'Contexto de 128K', 'Oito idiomas'],
			bestFor: ['Inferência no próprio processo e offline', 'Reescrita de consultas e prompts', 'Resumos curtos'],
		},
		'amazon-nova': {
			summary: 'Os modelos multimodais da Amazon no Bedrock que aceitam texto, imagem e vídeo: o Pro é o nível equilibrado, o Lite o de baixo custo.',
			strengths: ['Entrada de texto, imagem e vídeo', 'Contexto de 300K tokens', 'Uso de ferramentas', 'Cache de prompts'],
			bestFor: ['Perguntas e respostas sobre documentos e imagens', 'Compreensão de vídeo', 'Agentes que permanecem dentro da AWS'],
		},
		'cohere-command-a': {
			summary: 'O modelo corporativo de 111B da Cohere, focado em uso de ferramentas, recuperação e 23 idiomas; a Oracle também oferece variantes de raciocínio e visão.',
			strengths: ['Uso de ferramentas em várias etapas', 'Geração aumentada por recuperação', '23 idiomas', 'Contexto de 256K tokens'],
			bestFor: ['RAG corporativo', 'Agentes multilíngues', 'Implantações na Oracle Cloud'],
		},
		'phi-4-mini': {
			summary: 'O modelo aberto de 3,8B da Microsoft para trabalho com pouca memória e sensível à latência, e para raciocínio matemático e lógico.',
			strengths: ['Roda em ambientes restritos', 'Matemática e lógica', 'Chamada de funções', 'Licença MIT'],
			bestFor: ['Inferência local e no edge', 'Aplicações sensíveis à latência', 'Chamadas leves de ferramentas'],
		},
	},
	hosts: {
		bedrock: { name: 'Amazon Bedrock', summary: 'Acesso gerenciado na AWS a modelos da Anthropic, Meta, Amazon, OpenAI, Mistral e outros.', why: ['Os provedores não veem os prompts nem as respostas dos clientes', 'Rede privada via VPC e PrivateLink', 'Inferência na região e entre regiões para residência de dados'] },
		vertex: { name: 'Google Vertex AI', summary: 'A plataforma de IA do Google Cloud, agora também chamada Gemini Enterprise Agent Platform, que serve o Gemini e os modelos do Model Garden.', why: ['Endpoints regionais mantêm o processamento em uma única jurisdição', 'VPC Service Controls para isolamento de rede', 'Autenticação por credenciais do Google Cloud'] },
		azure: { name: 'Azure OpenAI', summary: 'Modelos da OpenAI hospedados na sua assinatura do Azure, agora parte do Microsoft Foundry, chamados pelo nome da implantação.', why: ['Implantações Data Zone mantêm o processamento na UE, nos EUA ou na APAC', 'Endpoints privados no backbone do Azure', 'Throughput provisionado para capacidade reservada'] },
		oracle: { name: 'Oracle OCI Generative AI', summary: 'Serviço gerenciado da Oracle Cloud para Cohere, Meta Llama e outros modelos, sob demanda ou em clusters dedicados.', why: ['Clusters de IA dedicados', 'Endpoints privados e isolamento de dados', 'Governado pelas políticas do OCI IAM'] },
		groq: { name: 'Groq', summary: 'Uma nuvem de inferência que roda modelos abertos nos chips LPU próprios da Groq, por meio de uma API compatível com OpenAI.', why: ['Latência muito baixa', 'Modelos abertos como gpt-oss e Qwen', 'Uma chave, sem infraestrutura'] },
		openrouter: { name: 'OpenRouter', summary: 'Uma única API para centenas de modelos de muitos provedores, com um roteador automático que escolhe um modelo por requisição.', why: ['Uma chave para muitos fabricantes', 'Fallback automático entre provedores', 'openrouter/auto escolhe um modelo para cada tarefa'] },
		ollama: { name: 'Ollama', summary: 'Roda modelos abertos no seu próprio hardware por trás de uma API local, se quiser na mesma rede Docker que o EDDI.', why: ['Nenhuma conexão com a nuvem necessária', 'Os dados nunca saem das suas máquinas', 'Um comando para baixar um modelo'] },
		huggingface: { name: 'Hugging Face', summary: 'Inferência hospedada para modelos abertos por id de repositório, roteada para provedores parceiros com um único token.', why: ['Modelos abertos por id de repositório', 'Um token para todos os provedores', 'Nenhuma infraestrutura para operar'] },
		jlama: { name: 'Jlama', summary: 'Um motor de inferência em Java puro que roda modelos pequenos dentro da JVM do EDDI, sem nenhum servidor de modelos.', why: ['Nada mais para implantar', 'Modelos quantizados para ocupar pouco espaço', 'Funciona em ambientes isolados depois que os pesos estão em cache'] },
	},
	tips: {
		anthropicNoTemperature: 'Deixe <code>temperature</code> sem valor. Os modelos Claude atuais rejeitam uma temperatura diferente da padrão, e as ferramentas de configuração do EDDI já a omitem.',
		openaiResponsesTools: 'A OpenAI documenta a Responses API para chamada de ferramentas no Astra e no 6.1 Sol, enquanto o tipo <code>openai</code> do EDDI usa Chat Completions. Teste agentes que usam ferramentas com esses modelos antes de ir para produção.',
		geminiSignature: 'O Gemini 3 precisa que a sua assinatura de pensamento seja devolvida durante as chamadas de ferramentas. O EDDI faz isso por padrão (<code>returnThinking</code> e <code>sendThinking</code> ficam ativados para o tipo <code>gemini</code>); mantenha-os ativados.',
		geminiVertexTools: 'Para o Gemini 3 com ferramentas, use <code>type: gemini</code>, não <code>gemini-vertex</code>: o caminho do Vertex não consegue transportar a assinatura de pensamento. <code>gemini-vertex</code> funciona bem sem ferramentas.',
		xaiUsRegion: 'Defina <code>"region": "us"</code> para o endpoint da xAI com residência de dados nos EUA. Ele atende apenas grok-4.7 e grok-4.6.',
		thinkingEcho: 'Este provedor exige que o raciocínio do modelo seja reenviado durante os loops de ferramentas. O preset do EDDI faz isso por você: mantenha <code>returnThinking</code> e <code>sendThinking</code> nos valores padrão.',
		kimiTemperature: 'A Moonshot fixa a temperatura no kimi-k2.7-code e no kimi-k2.6, então não defina <code>temperature</code> neles.',
		qwenRegions: 'Escolha uma região com <code>"region": "intl"</code>, <code>"cn"</code> ou <code>"us"</code>. Para um host da Alibaba específico de um workspace, defina <code>baseUrl</code> em vez disso.',
		minimaxNoJson: 'O EDDI nunca envia um formato de resposta JSON para a MiniMax. Quando precisar de JSON, ative <code>convertToObject</code> e descreva a estrutura no prompt.',
		groqPreview: 'A Groq marca alguns modelos, entre eles o qwen3.8-27b, como Preview: destinados a avaliação e possivelmente retirados com pouco aviso.',
		bedrockGeo: 'Alguns modelos do Bedrock, entre eles o Llama 4 Maverick, só podem ser acessados por um perfil de inferência entre regiões, como <code>us.meta.llama4-maverick-17b-instruct-v1:0</code>.',
		ollamaThink: 'Modelos de raciocínio pensam antes de responder, o que pode parecer um travamento em um chat com streaming. Defina <code>"think": "false"</code> para respostas imediatas e dê à tarefa um <code>timeout</code> generoso.',
		jlamaCache: 'O Jlama roda dentro da JVM do EDDI. Aponte <code>modelCachePath</code> para um volume montado para que os pesos sobrevivam a reinicializações, e dimensione o pod para o modelo mais o heap do EDDI.',
		localAirGap: 'Roda totalmente offline depois que o modelo é baixado, por isso é adequado para implantações isoladas (air-gapped).',
		cascadeTier: 'Um bom primeiro nível em uma <a href="/features/model-cascading/">cascata de modelos</a>: rápido e barato, escalando para um modelo maior apenas quando a confiança é baixa.',
		cascadeTop: 'Um nível final forte para uma <a href="/features/model-cascading/">cascata de modelos</a>, alcançado apenas pelas requisições sobre as quais um modelo mais barato tem dúvidas.',
		azureDeployment: 'No Azure OpenAI, <code>deploymentName</code> é o nome que você deu à implantação no seu recurso do Azure, não o nome do modelo.',
	},
};

export default copy;
