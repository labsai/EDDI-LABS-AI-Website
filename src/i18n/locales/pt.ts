import type { TranslationSchema } from './en';

const pt: TranslationSchema = {
	meta: {
		siteTitle: 'EDDI',
		siteDescription:
			'EDDI — O Orquestrador de IA Empresarial. Plataforma de agentes de IA auto-hospedada e orientada por configuração, com gestão visual, arquitetura security-first e conformidade integrada (v6.0.0-RC1 Preview).',
	},
	nav: {
		features: 'Funcionalidades',
		docs: 'Documentação',
		solutions: 'Soluções',
		getStarted: 'Começar',
		eddiManager: 'EDDI Manager',
		eddiManagerDesc: 'Interface visual de gestão de agentes',
		mcpServer: 'Servidor MCP',
		mcpServerDesc: '58 ferramentas para controle nativo de IA',
		configAsCode: 'Config-as-Code',
		configAsCodeDesc: 'Configuração JSON, sem boilerplate',
		securityFirst: 'Segurança em Primeiro Lugar',
		securityFirstDesc: 'Vault, trilhas de auditoria, sem eval()',
		performance: 'Desempenho',
		performanceDesc: 'Milhões de threads concorrentes',
		multiAgent: 'Multi-Agente',
		multiAgentDesc: 'Roteamento por intenção e descoberta',
		observability: 'Observabilidade',
		observabilityDesc: 'Logs de pipeline e trilhas de auditoria',
		codeQuality: 'Qualidade de Código',
		codeQualityDesc: '1.700+ testes, zero falhas',
		aiReady: 'Preparado para IA',
		aiReadyDesc: 'Projetado para agentes de codificação',

		memory: 'Memória e Contexto',
		memoryDesc: 'Memória persistente e consolidação onírica',
		rag: 'RAG',
		ragDesc: '7 provedores de embedding, 5 armazenamentos vetoriais',
		modelCascading: 'Cascata de Modelos',
		modelCascadingDesc: 'Roteamento multi-modelo otimizado em custos',
		scheduling: 'Agendamento',
		schedulingDesc: 'Heartbeats, cron e ciclos oníricos',
		viewAllFeatures: 'Ver todas as funcionalidades →',
		whyEddi: 'Por que EDDI?',
		whyEddiDesc: 'A plataforma empresarial de IA auto-hospedada',
		vsAlternatives: 'vs. Alternativas',
		vsAlternativesDesc: 'Compare com Spring AI, Flowise, n8n',
		euAiAct: 'Lei de IA da UE',
		euAiActDesc: 'Conformidade e governança',
		useCases: 'Casos de Uso',
		useCasesDesc: 'Padrões de implantação reais',
		allFeatures: 'Todas as Funcionalidades',
		mcpServerMobile: 'Servidor MCP (58 Ferramentas)',
		resources: 'Recursos',
		documentation: 'Documentação ↗',
		github: 'GitHub ↗',
		switchToLightMode: 'Mudar para Modo Claro',
		switchToDarkMode: 'Mudar para Modo Escuro',
	},
	common: {
		getStartedCta: 'Começar →',
		viewOnGithub: 'Ver no GitHub ↗',
		bannerBadge: 'Novo',
		bannerText: 'EDDI v6.0.0-RC1 já está disponível como Developer Preview!',
		bannerLink: 'Começar',
		notFoundTitle: 'Página Não Encontrada',
		notFoundDesc: 'A rota de orquestração de IA que você procura foi desconectada ou realocada.',
		notFoundCta: 'Voltar ao Sistema',
	},
	footer: {
		tagline: 'O Orquestrador de IA Empresarial',
		subtitle: 'Orientado por configuração. Auto-hospedado. Pronto para produção.',
		redHatCertified: 'Container Certificado Red Hat',
		apache2: 'Licença Apache 2.0',
		tests: '1.700+ Testes · Zero Falhas',
		techStack: 'Java 25 · Quarkus · LangChain4j',
		platform: 'Plataforma',
		develop: 'Desenvolvimento',
		resourcesCol: 'Recursos',
		featuresOverview: 'Visão Geral das Funcionalidades',
		mcpServer: 'Servidor MCP',
		configAsCode: 'Config-as-Code',
		securityFirst: 'Segurança em Primeiro Lugar',
		performanceLink: 'Desempenho',
		multiAgent: 'Multi-Agente',

		memoryLink: 'Memória e Contexto',
		ragLink: 'RAG',
		modelCascadingLink: 'Cascata de Modelos',
		schedulingLink: 'Agendamento',
		gettingStarted: 'Primeiros Passos',
		documentation: 'Documentação ↗',
		githubLink: 'GitHub ↗',
		whyEddi: 'Por que EDDI?',
		vsAlternatives: 'vs. Alternativas',
		euAiAct: 'Lei de IA da UE',
		useCases: 'Casos de Uso',
		initiated: 'Iniciado em Viena. Desenvolvido com ❤️ na Europa. Feito para o Mundo.',
	},
	newsletter: {
		title: 'Fique Por Dentro',
		description:
			'Receba atualizações sobre novos lançamentos, funcionalidades e melhores práticas de orquestração de IA empresarial. Sem spam — apenas conteúdo relevante.',
	},
	home: {
		title: 'O Orquestrador de IA Empresarial',
		heroTitle: 'O Empresarial',
		heroHighlight: 'Orquestrador de IA',
		heroTagline:
			'Crie, implante e gerencie agentes de IA — sem escrever código. Orientado por configuração, auto-hospedado e pronto para conformidade. Atualmente em <strong>v6.0.0-RC1 Preview</strong>.',
		problemTitle: 'O Problema',
		problemDesc:
			'A orquestração de IA empresarial está <strong>fragmentada e dolorosa</strong>. As equipes ficam presas em um ciclo de vida quebrado:',
		problemCard1Title: 'A Armadilha do Protótipo',
		problemCard1Desc:
			'Equipes prototipam com Flowise, n8n ou scripts — depois <strong>reescrevem tudo do zero</strong> para produção. Protótipos visuais são completamente descartados.',
		problemCard2Title: 'Fadiga de Boilerplate',
		problemCard2Desc:
			'Usar bibliotecas de IA significa construir controladores REST, camadas de autenticação e gerenciamento de estado <strong>do zero</strong>. Cada ajuste de prompt requer reimplantação.',
		problemCard3Title: 'Atrito com BPMN',
		problemCard3Desc:
			'Forçar agentes de IA não determinísticos em workflows determinísticos do Camunda/Temporal cria <strong>incompatibilidades severas</strong> e arquiteturas frágeis.',
		solutionTitle: 'A Solução',
		solutionDesc:
			'O EDDI é uma <strong>plataforma de orquestração de IA implantável</strong> — não uma biblioteca. Gestão visual, config-as-code e segurança empresarial, prontos para uso:',
		sol1Title: 'Configuration-as-Code',
		sol1Desc:
			'Lógica de agentes, pipelines e definições de ferramentas são <strong>configurações JSON</strong> — não código compilado. Engenheiros de prompt iteram instantaneamente via a UI React ou API REST, sem necessidade de reimplantação.',
		sol2Title: '58 Ferramentas MCP',
		sol2Desc:
			'O EDDI expõe suas capacidades via o <strong>Model Context Protocol</strong> — permitindo a interação com o Claude Desktop. Agentes também podem <strong>consumir ferramentas MCP externas</strong>.',
		sol3Title: 'Segurança em Primeiro Lugar',
		sol3Desc:
			'Sem <code>eval()</code>, sem escapes. Integração com vault, validação de URL e trilhas de auditoria criptográficas são <strong>fundações arquiteturais</strong>.',
		sol4Title: 'Observabilidade',
		sol4Desc:
			'Cada etapa do pipeline é registrada com uma <strong>trilha de auditoria imutável</strong> — tokens, custo, tempo, chamadas de ferramentas. Livro-razão completo de telemetria CQRS.',
		sol5Title: 'Concorrência Empresarial',
		sol5Desc:
			'Construído sobre um runtime empresarial com <strong>milhões de threads leves</strong> para cargas de trabalho LLM com I/O intensivo. Sem bloqueio de event loop, sem gargalos de thread única.',
		sol6Title: 'Orquestração Multi-Agente',
		sol6Desc:
			'Descoberta de agentes baseada em intenção, conversas gerenciadas, gatilhos de agentes e roteamento A/B. <strong>Uma conversa por intenção+usuário</strong>, criada e gerenciada automaticamente.',
		trustedTitle: 'Confiável e Certificado',
		trustRedHat: 'Container Certificado Red Hat',
		trustRedHatDesc: 'Imagem Docker certificada pela IBM',
		trustApache: 'Licença Apache 2.0',
		trustApacheDesc: '100% código aberto e pronto para empresas',
		trustTests: '1.700+ Testes · 0 Falhas',
		trustTestsDesc: 'CI/CD rigoroso e cobertura de código',
		techTitle: 'Construído com Tecnologia Comprovada',
		techJava: 'Java 25',
		techJavaDesc: 'Runtime empresarial',
		techQuarkus: 'Quarkus',
		techQuarkusDesc: 'Cloud-native, rápido',
		techLangchain: 'LangChain4j',
		techLangchainDesc: '20+ provedores de LLM',
		techMongo: 'MongoDB',
		techMongoDesc: 'Armazenamento de documentos',
		techPostgres: 'PostgreSQL',
		techPostgresDesc: 'Armazenamento relacional',
		techDocker: 'Docker',
		techDockerDesc: 'Pronto para containers',
		techK8s: 'Kubernetes',
		techK8sDesc: 'Orquestração',
		techOpenshift: 'OpenShift',
		techOpenshiftDesc: 'Certificado Red Hat',
		nextStepsTitle: 'Próximos Passos',
		nextGetStartedTitle: 'Comece em 5 Minutos',
		nextGetStartedDesc: 'Instale o EDDI, crie seu primeiro agente e inicie uma conversa.',
		nextFeaturesTitle: 'Explore Todas as Funcionalidades',
		nextFeaturesDesc: 'Config-as-Code, ferramentas MCP, segurança, observabilidade e mais.',
		nextWhyTitle: 'Por que EDDI?',
		nextWhyDesc: 'Saiba por que a orquestração de IA orientada por configuração supera abordagens code-first.',
		nextDocsTitle: 'Consultar Documentação ↗',
		nextDocsDesc: 'Arquitetura, ferramentas MCP, API REST, guias de implantação e mais.',
		faqTitle: 'Perguntas Frequentes',
		faq1Q: 'O que é o EDDI?',
		faq1A:
			'O EDDI é uma plataforma de orquestração de IA empresarial de código aberto. Permite que equipes construam, configurem e implantem agentes de IA usando configuração JSON em vez de código compilado. O EDDI fornece uma plataforma completa com uma <strong>interface de gestão React pronta para produção</strong> (o EDDI Manager), APIs REST integradas, gerenciamento de estado de conversa, segurança (OIDC/Keycloak), trilhas de auditoria imutáveis e 58 ferramentas MCP — tudo implantável via Docker ou Kubernetes.',
		faq2Q: 'Como o EDDI é diferente de bibliotecas e frameworks de IA?',
		faq2A:
			'Bibliotecas de IA como LangChain, Spring AI e LangChain4j fornecem blocos de construção — mas você ainda precisa construir controladores REST, autenticação, gerenciamento de estado de conversa, registro de auditoria e interfaces de gestão por conta própria. O EDDI é uma <strong>plataforma middleware implantável</strong>, não uma biblioteca. Fornece tudo isso pronto para uso, implantável via Docker.',
		faq3Q: 'O EDDI está pronto para uso empresarial em produção?',
		faq3A:
			'Sim. O EDDI é construído sobre um runtime empresarial com threads virtuais leves para concorrência massiva em operações de I/O. Suporta MongoDB e PostgreSQL, inclui autenticação OIDC/Keycloak integrada, fornece trilhas de auditoria criptográficas imutáveis para conformidade (incluindo a Lei de IA da UE) e escala horizontalmente via NATS JetStream.',
		faq4Q: 'O que é o Model Context Protocol (MCP)?',
		faq4A:
			'O Model Context Protocol (MCP) é um padrão aberto que permite que assistentes de IA como Claude Desktop, plugins de IDE e clientes personalizados interajam com ferramentas externas programaticamente. O EDDI expõe 58 ferramentas MCP abrangendo gestão de conversas, administração de agentes, automação de configuração, gestão de agendamentos e diagnósticos.',
		faq5Q: 'O EDDI pode substituir Flowise ou n8n para cargas de trabalho de produção?',
		faq5A:
			'O EDDI serve um propósito similar de construção visual, mas com arquitetura de nível empresarial. Ao contrário do Flowise e n8n, o EDDI não usa <code>eval()</code> nem blocos de código, executa milhões de threads virtuais leves para concorrência de nível empresarial, suporta autenticação OIDC/Keycloak e armazena dados em MongoDB ou PostgreSQL. É projetado para indústrias regulamentadas.',
	},
	gettingStarted: {
		title: 'Primeiros Passos',
		description: 'Instale o EDDI, crie seu primeiro agente e comece a conversar em 5 minutos.',
		heroTitle: 'Comece com o EDDI',
		heroSubtitle: 'Instale o EDDI, crie seu primeiro agente e comece a conversar em 5 minutos.',
		prerequisitesTitle: 'Pré-requisitos',
		prereq1: '<strong>Docker</strong> (recomendado) ou Java 25+',
		prereq2: 'Uma chave de API de provedor LLM (OpenAI, Anthropic, Google Gemini ou uma instância local Ollama)',
		step1Title: '1. Inicie o EDDI com Docker',
		step1Desc: 'A maneira mais rápida de executar o EDDI:',
		step1After: 'O EDDI estará disponível em <code>http://localhost:7070</code>.',
		step2Title: '2. Conecte via MCP',
		step2Desc: 'Se você usa <strong>Claude Desktop</strong> ou qualquer cliente compatível com MCP, adicione o EDDI como servidor MCP:',
		step2After: 'Agora você pode interagir com as 58 ferramentas MCP do EDDI diretamente do seu assistente de IA.',
		step3Title: '3. Crie Seu Primeiro Agente',
		step3Desc: 'Use a ferramenta MCP <code>setup_agent</code> para criar um agente totalmente funcional em uma única chamada:',
		step3After: 'Isso cria as regras, configuração de LLM, workflow, agente e realiza o deploy — tudo em uma etapa.',
		step4Title: '4. Converse com Seu Agente',
		step5Title: '5. Abra a Interface do Manager',
		step5Desc:
			'Navegue até <code>http://localhost:7070</code> para gerenciar visualmente seus agentes, workflows e conversas com o EDDI Manager.',
		managerImageAlt: 'Prévia do Painel do EDDI Manager',
		whatsNextTitle: 'Próximos Passos',
		nextAllFeatures: 'Todas as Funcionalidades',
		nextAllFeaturesDesc: 'Explore tudo o que o EDDI oferece',
		nextMcpServer: 'Servidor MCP',
		nextMcpServerDesc: 'Navegue por todas as 58 ferramentas MCP',
		nextDocs: 'Documentação ↗',
		nextDocsDesc: 'Aprofunde-se em arquitetura e APIs',
		nextWhyEddi: 'Por que EDDI?',
		nextWhyEddiDesc: 'O caso empresarial para o EDDI',
	},
	useCases: {
		title: 'Casos de Uso',
		description: 'Padrões de implantação reais e casos de uso para a plataforma de orquestração de IA EDDI.',
		heroTitle: 'Casos de Uso',
		heroSubtitle: 'Padrões de implantação reais para a plataforma EDDI.',
		healthcare: 'Saúde',
		healthcareDesc:
			'Agentes de triagem de pacientes, bots de FAQ médica, agendamento de consultas — com trilhas de auditoria completas para conformidade HIPAA e prontidão para a Lei de IA da UE.',
		finance: 'Serviços Financeiros',
		financeDesc:
			'Agentes de suporte ao cliente com registro de conformidade, assistentes de detecção de fraudes e chatbots de base de conhecimento interno com trilhas de auditoria criptográficas.',
		ecommerce: 'E-Commerce',
		ecommerceDesc:
			'Agentes de recomendação de produtos, bots de suporte a pedidos e atendimento ao cliente multilíngue — com roteamento baseado em intenção entre agentes especializados.',
		manufacturing: 'Manufatura',
		manufacturingDesc:
			'Assistentes de manutenção de equipamentos, agentes de controle de qualidade e otimização da cadeia de suprimentos — executando on-premises ou em nuvens privadas.',
		government: 'Governo',
		governmentDesc:
			'Agentes de consulta ao cidadão, automação de processos internos e análise de documentos — em ambientes isolados sem dependência de nuvem.',
		devPlatforms: 'Plataformas de Desenvolvimento',
		devPlatformsDesc:
			'Serviços internos de IA para equipes de engenharia — agentes acessíveis por API que se integram a pipelines CI/CD, revisão de código e workflows de documentação.',
	},
	featuresOverview: {
		title: 'Visão Geral das Funcionalidades',
		description:
			'Todas as capacidades que fazem do EDDI o orquestrador de IA empresarial — EDDI Manager, config-as-code, 58 ferramentas MCP, arquitetura security-first e mais.',
		heroTitle: 'Tudo o Que Você Precisa para',
		heroHighlight: 'Orquestrar IA',
		heroDesc:
			'O EDDI fornece uma plataforma completa e pronta para produção para construir, implantar e gerenciar agentes de IA — sem escrever boilerplate.',
		coreTitle: 'Plataforma Central',
		coreDesc: 'As capacidades essenciais que fazem do EDDI uma <strong>plataforma completa de orquestração de IA</strong>.',
		managerCardTitle: '🖥️ EDDI Manager',
		managerCardDesc:
			'Uma <strong>interface React pronta para produção</strong> para construir, implantar e monitorar agentes visualmente — com i18n em 11 idiomas, depuração de chat ao vivo e painéis de auditoria.',
		configCardTitle: '⚙️ Config-as-Code',
		configCardDesc:
			'A lógica do agente é configuração JSON, não código compilado. Engenheiros de prompt iteram instantaneamente — <strong>sem necessidade de reimplantação</strong>.',
		mcpCardTitle: '🔌 Servidor MCP (58 Ferramentas)',
		mcpCardDesc:
			'Controle completo nativo de IA via <strong>Model Context Protocol</strong>. Claude Desktop, Cursor e clientes personalizados gerenciam agentes programaticamente.',
		securityCardTitle: '🔐 Segurança em Primeiro Lugar',
		securityCardDesc:
			'Sem <code>eval()</code>, integração com vault, proteção contra path traversal, OIDC/Keycloak, <strong>trilhas de auditoria criptográficas</strong>.',
		perfCardTitle: '🚀 Desempenho',
		perfCardDesc: 'Runtime empresarial com <strong>milhões de threads leves</strong> para cargas de trabalho LLM com I/O intensivo.',
		multiCardTitle: '🤖 Multi-Agente',
		multiCardDesc:
			'Descoberta de agentes baseada em intenção, conversas gerenciadas, gatilhos de agentes e <strong>roteamento A/B</strong> entre múltiplos agentes.',

		aiCapTitle: 'Capacidades de IA',
		aiCapDesc: 'Recursos avançados de IA que tornam os agentes EDDI <strong>mais inteligentes, rápidos e econômicos</strong>.',
		memoryCardTitle: '🧠 Memória e Contexto',
		memoryCardDesc: 'Memória persistente, consolidação onírica, resumos contínuos e janelamento consciente de tokens. <strong>Agentes que lembram</strong>.',
		ragCardTitle: '📚 RAG',
		ragCardDesc: '7 embedding providers, 5 vector stores, httpCall RAG. <strong>Enterprise knowledge retrieval</strong> out of the box.',
		cascadingCardTitle: '📈 Cascata de Modelos',
		cascadingCardDesc: 'Roteamento multi-modelo otimizado com estratégias de confiança. <strong>Reduza custos de LLM em 60-80%</strong>.',
		schedulingCardTitle: '⏰ Agendamento e Heartbeats',
		schedulingCardDesc: 'Gatilhos cron, ativações por heartbeat, ciclos oníricos. <strong>Agentes proativos</strong> que agem por conta própria.',
		engTitle: 'Excelência em Engenharia',
		obsCardTitle: '📊 Observabilidade',
		obsCardDesc:
			'Cada etapa do pipeline registrada com <strong>trilhas de auditoria imutáveis</strong> — tokens, custo, tempo e chamadas de ferramentas.',
		cqCardTitle: '🧪 Qualidade de Código',
		cqCardDesc: '<strong>1.700+ testes com zero falhas.</strong> Zero avisos de Checkstyle. CI/CD aplicado em cada merge.',
		aiCardTitle: '🧩 Preparado para IA',
		aiCardDesc:
			'58 ferramentas MCP, padrões CRUD previsíveis, APIs autodocumentadas. <strong>Projetado para agentes de codificação</strong> trabalharem.',
	},
	pages: {
		manager: {
			title: 'EDDI Manager',
			description:
				'Interface de gestão React pronta para produção para construir, implantar e monitorar agentes de IA visualmente — com i18n em 11 idiomas, depuração de chat ao vivo e painéis de auditoria.',
			heading1: 'Gestão Visual de Agentes',
			para1:
				'O EDDI Manager é uma interface de gestão abrangente baseada em React que fornece controle visual sobre todos os aspectos da plataforma EDDI — desde a configuração de agentes até o monitoramento de conversas em tempo real.',
			heading2: 'Capacidades Principais',
			items: [
				'<strong>Construtor Visual de Agentes</strong> — Crie e configure agentes através de uma interface intuitiva de arrastar e soltar',
				'<strong>Depuração de Chat ao Vivo</strong> — Teste agentes em tempo real com inspeção completa de conversas',
				'<strong>Painéis de Auditoria</strong> — Monitore uso de tokens, custos e desempenho em todos os agentes',
				'<strong>i18n em 11 Idiomas</strong> — Internacionalização completa com suporte RTL para árabe',
				'<strong>Onboarding Interativo</strong> — Tours guiados que apresentam novos usuários à plataforma',
				'<strong>Gestão de Recursos</strong> — Operações CRUD para regras, workflows, configurações de LLM e conectores',
				'<strong>Cofre de Segredos</strong> — Gestão segura de chaves de API com exibição mascarada',
			],
			heading3: 'Projetado para Equipes',
			para2:
				'O Manager permite que não-desenvolvedores iterem no comportamento dos agentes sem tocar no código-fonte. Engenheiros de prompt podem modificar regras, testar conversas e implantar mudanças — tudo pelo navegador.',
		},
		mcpServer: {
			title: 'Servidor MCP — 58 Ferramentas',
			description:
				'O EDDI expõe suas capacidades completas via o Model Context Protocol, permitindo que Claude Desktop, Cursor e clientes de IA personalizados gerenciem agentes programaticamente.',
			heading1: 'Plano de Controle Nativo de IA',
			para1:
				'O Model Context Protocol (MCP) é um padrão aberto que permite que assistentes de IA interajam com ferramentas externas. O EDDI implementa um servidor MCP abrangente com <strong>58 ferramentas</strong> cobrindo todos os aspectos da plataforma.',
			heading2: 'Categorias de Ferramentas',
			items: [
				'<strong>Ferramentas de Conversa</strong> — Converse com agentes, gerencie conversas, leia histórico',
				'<strong>Ferramentas de Admin</strong> — Liste, inspecione e gerencie agentes implantados',
				'<strong>Ferramentas de Setup</strong> — Crie agentes completos em uma única chamada com <code>setup_agent</code>',
				'<strong>CRUD de Recursos</strong> — Criação/leitura/atualização/exclusão completa para regras, workflows, configurações de LLM, conectores',
				'<strong>Ferramentas de Diagnóstico</strong> — Verificações de saúde, inspeção de configuração, diagnósticos de ambiente',
				'<strong>Gestão de Agendamentos</strong> — Gerencie tarefas periódicas de agentes e gatilhos',
			],
			heading3: 'Suporte a Clientes MCP',
			para2:
				'Os agentes EDDI também podem <strong>consumir ferramentas MCP externas</strong> durante conversas. Configure endpoints de servidor MCP, e os agentes autodescobrem e invocam ferramentas com base no contexto da conversa — alimentado pela integração de cliente MCP do LangChain4j.',
		},
		configAsCode: {
			title: 'Configuration-as-Code',
			description:
				'Lógica de agentes, pipelines e definições de ferramentas são configurações JSON — não código compilado. Itere instantaneamente sem reimplantação.',
			heading1: 'Lógica de Agentes Orientada por JSON',
			para1:
				'No EDDI, tudo que define o comportamento de um agente é um <strong>recurso de configuração JSON</strong>: regras (prompts do sistema), configurações de conector LLM, pipelines de workflow, configurações de ferramentas e descritores de implantação.',
			heading2: 'Por Que Isso Importa',
			items: [
				'<strong>Sem reimplantação</strong> — Altere o comportamento do agente atualizando JSON, não código-fonte',
				'<strong>Amigável para engenheiros de prompt</strong> — Não-desenvolvedores modificam regras via UI ou API REST',
				'<strong>Controlado por versão</strong> — Configurações JSON vivem no Git junto com infrastructure-as-code',
				'<strong>Hot-reloadable</strong> — Mudanças entram em vigor imediatamente, sem necessidade de reiniciar o servidor',
				'<strong>Auditável</strong> — Cada mudança de configuração é rastreada na trilha de auditoria imutável',
			],
			heading3: 'Tipos de Recursos',
			para2:
				'O EDDI gerencia estes recursos de configuração: <strong>Regras</strong> (prompts do sistema), <strong>Workflows</strong> (definições de pipeline), <strong>Conectores LLM</strong> (configurações de provedor), <strong>Conectores HTTP</strong> (integrações de API externa), <strong>Agentes</strong> (descritores de implantação) e <strong>Ambientes</strong> (alvos de implantação).',
		},
		security: {
			title: 'Arquitetura Security-First',
			description:
				'Sem eval(), sem blocos de execução de código. Integração com vault, trilhas de auditoria criptográficas e autenticação OIDC/Keycloak — segurança é uma fundação arquitetural.',
			heading1: 'Segurança Empresarial por Design',
			para1:
				'O EDDI elimina classes inteiras de vulnerabilidades de segurança por design. Não há <strong>eval()</strong>, nem blocos de execução de código e nenhuma injeção dinâmica de código — o comportamento do agente é definido apenas através de configuração JSON declarativa.',
			heading2: 'Funcionalidades de Segurança',
			items: [
				'<strong>Zero eval()</strong> — Sem execução dinâmica de código (elimina riscos de RCE CVSS 10.0)',
				'<strong>OIDC/Keycloak</strong> — Autenticação e autorização empresarial',
				'<strong>Integração com Vault</strong> — Gestão segura de segredos para chaves de API',
				'<strong>Proteção contra Path Traversal</strong> — Validação de entrada em cada fronteira',
				'<strong>Validação de URL</strong> — Previne ataques SSRF e de redirecionamento',
				'<strong>Trilhas de Auditoria Criptográficas</strong> — Logs de operação imutáveis e à prova de adulteração',
				'<strong>Pronto para a Lei de IA da UE</strong> — Capacidades de governança integradas para conformidade regulatória',
			],
		},
		performance: {
			title: 'Desempenho Empresarial',
			description:
				'Java 25 Virtual Threads no Quarkus — milhões de threads leves para cargas de trabalho LLM com I/O intensivo e tempos de inicialização abaixo de um segundo.',
			heading1: 'Construído para Escala',
			para1:
				'O EDDI roda em <strong>Java 25 com Quarkus</strong>, aproveitando Virtual Threads (Project Loom) para concorrência massiva em operações de I/O. Ao contrário dos event loops do Node.js, Virtual Threads fornecem paralelismo multi-thread genuíno com overhead mínimo.',
			heading2: 'Destaques de Desempenho',
			items: [
				'<strong>Virtual Threads</strong> — Milhões de threads leves para chamadas LLM concorrentes',
				'<strong>Runtime Quarkus</strong> — Cloud-native, hot reload em modo de desenvolvimento, otimizado para containers',
				'<strong>NATS JetStream</strong> — Escalabilidade horizontal com arquitetura orientada a eventos',
				'<strong>Banco de Dados Duplo</strong> — MongoDB ou PostgreSQL com camada de abstração de banco de dados',
			],
		},
		multiAgent: {
			title: 'Orquestração Multi-Agente',
			description:
				'Descoberta de agentes baseada em intenção, conversas gerenciadas, gatilhos de agentes e roteamento A/B — uma conversa por intenção+usuário, criada e gerenciada automaticamente.',
			heading1: 'Roteamento Inteligente de Agentes',
			para1:
				'O sistema multi-agente do EDDI vai além do simples balanceamento de carga. Ele fornece <strong>descoberta de agentes baseada em intenção</strong> que roteia automaticamente solicitações de usuários para o agente mais apropriado com base em capacidades declaradas.',
			heading2: 'Funcionalidades de Orquestração',
			items: [
				'<strong>Descoberta de Agentes</strong> — Agentes declaram intenções e são automaticamente correspondidos às solicitações dos usuários',
				'<strong>Conversas Gerenciadas</strong> — Uma conversa por intenção+usuário, criada automaticamente',
				'<strong>Gatilhos de Agentes</strong> — Ativação automatizada de agentes baseada em eventos',
				'<strong>Roteamento A/B</strong> — Teste diferentes agentes contra o mesmo tráfego',
				'<strong>Padrão Coordenador</strong> — Agentes delegam a sub-agentes especializados',
			],
		heading3: 'Conversas em Grupo e Orquestração Avançada',
		para2: 'EDDI supports <strong>multi-agent group conversations</strong> with 5 built-in discussion styles, nested group structures, and a meta-agent that creates other agents through conversation:',
		items2: [
			'<strong>5 Discussion Styles</strong> — Round Table, Peer Review, Devil\'s Advocate, Delphi, and Debate',
			'<strong>Nested Groups</strong> — Compose groups of groups for tournament brackets, red-team vs blue-team, and panel reviews',
			'<strong>Agent Father</strong> — A meta-agent that creates other agents through conversation (ships out of the box)',
			'<strong>A2A Protocol</strong> — Full Agent-to-Agent protocol implementation with Agent Cards and cross-platform skill discovery',
			'<strong>Capability Matching</strong> — Discover and route to agents by skill, confidence score, and custom attributes',
		],
		},
		observability: {
			title: 'Observabilidade e Trilhas de Auditoria',
			description:
				'Cada etapa do pipeline é registrada com uma trilha de auditoria imutável — tokens, custo, tempo, chamadas de ferramentas. Telemetria CQRS completa com integração Prometheus e Grafana.',
			heading1: 'Visibilidade Completa',
			para1:
				'O EDDI fornece <strong>observabilidade de ponta a ponta</strong> em todas as conversas, etapas do pipeline e invocações de ferramentas. A trilha de auditoria imutável captura tokens utilizados, latência, custos e resultados — permitindo tanto monitoramento operacional quanto conformidade regulatória.',
			heading2: 'Funcionalidades de Observabilidade',
			items: [
				'<strong>Trilha de Auditoria Imutável</strong> — Logs de operação assinados criptograficamente à prova de adulteração',
				'<strong>Rastreamento de Tokens e Custos</strong> — Métricas de uso por conversa e por agente',
				'<strong>Rastreamento de Pipeline</strong> — Visibilidade total em cada etapa do pipeline de processamento',
				'<strong>Métricas Prometheus</strong> — Endpoint de métricas padrão para infraestrutura de monitoramento',
				'<strong>Dashboards Grafana</strong> — Dashboards pré-construídos para equipes de operações',
				'<strong>Telemetria CQRS</strong> — Ledger orientado a eventos de todas as operações do sistema',
			],
		},
		codeQuality: {
			title: 'Qualidade de Código',
			description:
				'1.700+ testes com zero falhas. Zero avisos de Checkstyle. Portas de qualidade CI/CD aplicadas em cada merge.',
			heading1: 'Rigor em Engenharia',
			para1:
				'O EDDI mantém <strong>qualidade de código excepcional</strong> através de testes abrangentes, análise estática e portas de qualidade CI/CD. Cada pull request deve passar no conjunto completo de testes antes do merge.',
			heading2: 'Métricas de Qualidade',
			items: [
				'<strong>1.700+ Testes</strong> — Cobertura unitária, de integração e ponta a ponta',
				'<strong>Zero Falhas</strong> — CI limpo em cada build',
				'<strong>Enforcement do Checkstyle</strong> — Zero avisos, regras rigorosas aplicadas em cada build',
				'<strong>Testes de Ferramentas MCP</strong> — Cobertura abrangente de todas as 58 ferramentas MCP',
				'<strong>Portas de Qualidade CI/CD</strong> — Verificações automatizadas previnem regressões',
			],
		},
		aiReady: {
			title: 'Arquitetura Preparada para IA',
			description:
				'58 ferramentas MCP, padrões CRUD previsíveis, APIs autodocumentadas. Construído desde o início para agentes de codificação trabalharem.',
			heading1: 'Projetado para Colaboração com IA',
			para1:
				'O EDDI é construído com a suposição de que <strong>agentes de codificação irão gerenciá-lo</strong>. Cada API segue padrões previsíveis, cada recurso tem operações CRUD consistentes e o servidor MCP permite controle programático completo.',
			heading2: 'Design Amigável para IA',
			items: [
				'<strong>Padrões Previsíveis</strong> — Nomenclatura de recursos consistente, convenções CRUD e tratamento de erros',
				'<strong>APIs Autodocumentadas</strong> — Especificações OpenAPI e descrições de ferramentas MCP geradas automaticamente',
				'<strong>Suporte a LLMs.txt</strong> — Conteúdo do site descobrível por IA via llms.txt e llms-full.txt',
				'<strong>MCP-First</strong> — 58 ferramentas projetadas para integração com assistentes de IA',
				'<strong>Automação de Setup</strong> — Criação de agentes em uma única chamada com <code>setup_agent</code>',
			],
		},
// ─── New Feature Pages ────────────────────────────────────

		memory: {
			title: 'Gestão de Memória e Contexto',
			description: 'Persistent user memory, dream consolidation, rolling summaries, and token-aware context windowing — agents that remember, learn, and forget intelligently.',
			heading1: 'Agentes que Lembram',
			para1: 'EDDI provides a comprehensive <strong>persistent memory system</strong> that enables agents to remember facts, preferences, and context across conversations. Memory entries are structured key-value pairs with visibility scoping — giving agents the right context at the right time.',
			heading2: 'Capacidades de Memória',
			items: [
				'<strong>Persistent User Memory</strong> — Key-value entries with <code>global</code>, <code>agent</code>, and <code>group</code> visibility scoping across conversations',
				'<strong>LLM Memory Tools</strong> — Built-in tools agents can call to read, write, and search their own persistent memory',
				'<strong>Dream Consolidation</strong> — Background memory maintenance: stale entry pruning, contradiction detection, and fact summarization',
				'<strong>Token-Aware Windowing</strong> — Intelligent context packing with model-specific tokenizer support and anchored opening steps',
				'<strong>Rolling Summary</strong> — Incremental LLM-powered summarization of older turns with a Conversation Recall Tool for drill-back',
				'<strong>Property Extraction</strong> — Config-driven slot-filling with <code>longTerm</code> / <code>conversation</code> / <code>step</code> scoping',
				'<strong>Conversation State</strong> — Full history with undo/redo support',
			],
			heading3: 'Como Funciona a Consolidação Onírica',
			para2: "Inspired by Anthropic's research on background memory consolidation, EDDI's Dream Cycles run on a <strong>configurable schedule</strong> to maintain memory quality. Stale entries are pruned, contradictions are detected and resolved, and facts are summarized — all with cost ceilings per run.",
		},
		rag: {
			title: 'RAG — Retrieval-Augmented Generation',
			description: '7 embedding providers, 5 vector stores, httpCall RAG, and async document ingestion — enterprise-grade knowledge retrieval for AI agents.',
			heading1: 'Recuperação de Conhecimento Empresarial',
			para1: 'EDDI provides a complete <strong>Retrieval-Augmented Generation</strong> pipeline with native support for multiple embedding providers, vector stores, and a zero-infrastructure RAG option via HTTP calls.',
			heading2: 'Capacidades RAG',
			items: [
				'<strong>7 Embedding Providers</strong> — OpenAI, Ollama, Azure OpenAI, Mistral, Amazon Bedrock, Cohere, Google Vertex AI',
				'<strong>5 Vector Stores</strong> — pgvector, In-Memory, MongoDB Atlas, Elasticsearch, Qdrant',
				'<strong>httpCall RAG</strong> — Zero-infrastructure RAG via any search API (BM25, Elasticsearch, custom endpoints)',
				'<strong>REST Ingestion API</strong> — Async document ingestion with status tracking and batch processing',
				'<strong>Hybrid Search</strong> — Combine dense vector retrieval with sparse keyword matching for optimal recall',
			],
			heading3: 'Implantação Flexível',
			para2: 'RAG is fully configuration-driven. Choose your embedding provider and vector store via JSON configuration — no code changes needed. The <code>httpCall RAG</code> option lets you use <strong>any existing search infrastructure</strong> (Elasticsearch, Solr, custom APIs) without deploying a separate vector database.',
		},
		modelCascading: {
			title: 'Cascata de Modelos Inteligente',
			description: 'Cost-optimized multi-model routing — try cheap models first, escalate on low confidence. Per-conversation budgets and tenant cost ceilings.',
			heading1: 'Otimização Inteligente de Custos',
			para1: "EDDI's Model Cascading system enables <strong>cost-aware multi-model routing</strong>. Start with fast, inexpensive models and automatically escalate to more powerful (and expensive) models only when confidence is low — reducing AI costs without sacrificing quality.",
			heading2: 'Recursos de Cascata',
			items: [
				'<strong>Cost Optimization</strong> — Try cheap/fast models first, escalate to powerful models only when confidence is low',
				'<strong>4 Confidence Strategies</strong> — Structured output, heuristic, judge model, or none — choose the evaluation method that fits your use case',
				'<strong>Per-Conversation Budgets</strong> — Automatic cost tracking with budget caps and conversation eviction when exceeded',
				'<strong>Tenant Cost Ceilings</strong> — Monthly cost budgets per tenant with automatic enforcement in multi-tenant deployments',
				'<strong>12 LLM Providers</strong> — OpenAI, Anthropic, Google Gemini, Mistral, Azure OpenAI, Amazon Bedrock, Oracle GenAI, Vertex AI, Ollama, Jlama, Hugging Face, and any OpenAI-compatible endpoint',
			],
			heading3: 'Como Funciona',
			para2: 'Configure a cascade chain of models ordered by cost. For each user message, EDDI tries the cheapest model first and evaluates confidence. If confidence falls below the threshold, it automatically escalates to the next model in the chain. This approach can <strong>reduce LLM costs by 60-80%</strong> for typical workloads where most queries are simple enough for smaller models.',
		},
		scheduling: {
			title: 'Agendamento e Heartbeats',
			description: 'Cron-triggered agent execution, heartbeat wake-ups for proactive behavior, dream cycles for memory maintenance, and complete fire logging.',
			heading1: 'Comportamento Proativo de Agentes',
			para1: "EDDI agents don't just respond to messages — they can <strong>proactively execute on schedules</strong>. Heartbeat triggers wake agents at configurable intervals, cron expressions provide precise timing, and dream cycles maintain memory quality in the background.",
			heading2: 'Recursos de Agendamento',
			items: [
				'<strong>Heartbeat Triggers</strong> — Periodic agent wake-ups at configurable intervals for proactive behavior (e.g., daily check-ins, periodic summaries)',
				'<strong>Cron Scheduling</strong> — Standard cron expressions for precise timed agent execution',
				'<strong>Conversation Strategies</strong> — <code>persistent</code> (reuse same conversation across fires) or <code>new</code> (fresh context each time)',
				'<strong>Fire Logging</strong> — Complete execution history with status, duration, cost tracking, and retry logic',
				'<strong>Dream Cycles</strong> — Scheduled background memory consolidation with cost ceilings per run',
			],
			heading3: 'Casos de Uso',
			para2: 'Scheduled agents enable powerful proactive workflows: <strong>daily report summaries</strong>, periodic data quality checks, automated customer follow-ups, memory maintenance via dream consolidation, and time-triggered escalation workflows. Each scheduled execution is fully logged with cost tracking and retry support.',
		},
				whyEddi: {
			title: 'Por que EDDI?',
			description:
				'A plataforma de orquestração de IA empresarial auto-hospedada. Lógica de agentes orientada por configuração, uma interface de gestão completa e segurança de nível empresarial — tudo em uma plataforma implantável.',
			heading1: 'A Lacuna na IA Empresarial',
			para1:
				'A orquestração de IA empresarial não tem <strong>meio-termo</strong>. Equipes ou prototipam com ferramentas low-code frágeis e reescrevem para produção, ou constroem tudo do zero usando bibliotecas e frameworks de IA.',
			heading2: 'O EDDI Preenche Este Vazio',
			para2:
				'O EDDI é uma <strong>plataforma middleware implantável</strong>, não uma biblioteca. Fornece tudo que as equipes precisam pronto para uso:',
			items: [
				'<strong>Interface Visual de Gestão</strong> — O EDDI Manager para construir e monitorar agentes',
				'<strong>Configuration-as-Code</strong> — Lógica de agentes é JSON, não código compilado',
				'<strong>58 Ferramentas MCP</strong> — Controle total nativo de IA via Model Context Protocol',
				'<strong>Segurança Empresarial</strong> — OIDC, vault, trilhas de auditoria, sem eval()',
				'<strong>Infraestrutura de Produção</strong> — APIs REST, gestão de estado de conversa, métricas Prometheus',
				'<strong>Escalabilidade Horizontal</strong> — NATS JetStream para arquiteturas distribuídas',
			],
			heading3: 'Quem Deve Usar o EDDI?',
			items2: [
				'<strong>Equipes empresariais</strong> que precisam de uma plataforma de orquestração de IA pronta para produção',
				'<strong>Engenheiros de prompt</strong> que querem iterar sem reimplantação',
				'<strong>Indústrias regulamentadas</strong> que requerem trilhas de auditoria e conformidade com a Lei de IA da UE',
				'<strong>Equipes de plataforma</strong> construindo serviços internos de IA para múltiplos departamentos',
			],
		},
		vsAlternatives: {
			title: 'EDDI vs. Alternativas',
			description: 'Como o EDDI se compara com Spring AI, LangChain4j, Flowise, n8n e outras abordagens de orquestração de IA.',
			heading1: 'Plataforma vs. Biblioteca',
			para1:
				'A diferença fundamental: o EDDI é uma <strong>plataforma middleware implantável</strong>, não uma biblioteca. Enquanto bibliotecas fornecem blocos de construção, o EDDI fornece o edifício inteiro — pronto para implantação.',
			heading2: 'Comparação',
			heading3a: 'vs. Bibliotecas de IA (Spring AI, LangChain, etc.)',
			para2:
				'Bibliotecas de IA como Spring AI, LangChain e LangChain4j são excelentes <strong>blocos de construção</strong> (o EDDI usa LangChain4j internamente). Mas com bibliotecas, você ainda precisa construir controladores REST, autenticação, gestão de conversas, registro de auditoria e interfaces de gestão por conta própria. O EDDI fornece tudo isso pronto.',
			heading3b: 'vs. Flowise / n8n',
			para3:
				'Flowise e n8n são construtores visuais baseados em Node.js. O EDDI serve um propósito similar, mas com arquitetura de nível empresarial:',
			vsItems: [
				'<strong>Sem eval()</strong> — Elimina riscos de execução remota de código CVSS 10.0',
				'<strong>Milhões de threads virtuais</strong> — Concorrência de nível empresarial vs. event loops single-threaded',
				'<strong>OIDC/Keycloak</strong> — Autenticação empresarial vs. autenticação básica',
				'<strong>MongoDB/PostgreSQL</strong> — Bancos de dados de produção vs. SQLite',
			],
			heading3c: 'vs. AWS Bedrock / Azure AI Studio',
			para4:
				'Plataformas de IA em nuvem oferecem infraestrutura gerenciada, mas criam <strong>vendor lock-in</strong>. O EDDI executa em qualquer lugar onde Docker funcione — on-premises, em qualquer nuvem ou em ambientes isolados.',
		},
		compliance: {
			title: 'Privacidade global e conformidade regulatória',
			description:
				'O EDDI oferece conformidade integrada para RGPD, CCPA, EU AI Act, HIPAA, PIPEDA, LGPD, APPI, POPIA, PDPA PDPA da Malásia, PIPL e mais — com exclusão em cascata de dados, trilhas de auditoria criptográficas e uma API unificada.',
			heading1: 'Conformidade por arquitetura',
			para1:
				'Indústrias regulamentadas não podem adicionar conformidade aos sistemas de IA após o fato. O EDDI incorpora os <strong>fundamentos técnicos para a conformidade regulatória global</strong> diretamente na arquitetura da plataforma — trilhas de auditoria imutáveis, exclusão em cascata de dados, restrições de processamento, integridade criptográfica e controle de acesso baseado em funções são capacidades fundamentais, não complementos. Uma API unificada cobre os direitos dos titulares de dados para cada jurisdição.',
			aiGovHeading: 'Frameworks de governança de IA',
			aiGovIntro:
				'À medida que governos em todo o mundo introduzem legislação específica sobre IA, as organizações precisam de plataformas que forneçam <strong>transparência, rastreabilidade e supervisão humana</strong> desde o primeiro dia. A arquitetura do EDDI aborda os requisitos técnicos fundamentais dos principais frameworks de governança de IA.',
			euAiActHeading: 'EU AI Act — União Europeia',
			euAiActPara:
				'O EU AI Act (Regulamento 2024/1689) é a primeira lei abrangente do mundo sobre IA. O EDDI fornece os <strong>fundamentos técnicos</strong> para conformidade com seus requisitos de sistemas de IA de alto risco:',
			euAiActItems: [
				'<strong>Trilhas de auditoria imutáveis</strong> — Cada operação registrada com integridade criptográfica HMAC-SHA256 (Art. 12 — Manutenção de registros)',
				'<strong>Transparência de decisões</strong> — O rastreamento completo do pipeline mostra como as decisões de IA foram tomadas (Art. 13 — Transparência)',
				'<strong>Supervisão humana</strong> — A interface de gestão permite revisão humana, intervenção e parada de emergência (Art. 14 — Supervisão humana)',
				'<strong>Classificação de riscos</strong> — A arquitetura suporta requisitos de sistemas de IA de alto risco com controles configuráveis (Art. 9 — Gestão de riscos)',
				'<strong>Reprodutibilidade</strong> — Configuração como código permite reprodução exata do comportamento da IA para auditorias regulatórias (Art. 17 — Gestão da qualidade)',
				'<strong>Governança de dados</strong> — OIDC/Keycloak RBAC, gestão de segredos baseada em cofre, registro de entrada/saída (Art. 10 — Governança de dados)',
			],
			nistHeading: 'NIST AI Risk Management Framework — Estados Unidos',
			nistPara:
				'O NIST AI RMF (AI 100-1) fornece um framework voluntário para gestão de riscos de IA. A arquitetura do EDDI fornece capacidades técnicas que apoiam organizações na busca pelo alinhamento com o NIST AI RMF:',
			nistItems: [
				'<strong>Govern</strong> — Funções RBAC (eddi-admin, eddi-editor, eddi-viewer), registro de auditoria imutável e fluxos de dados documentados',
				'<strong>Map</strong> — Rastreamento de pipeline e registro de conversas permitem identificação abrangente de riscos de IA',
				'<strong>Measure</strong> — Métricas Prometheus, rastreamento de tokens/custos e análises de uso por agente',
				'<strong>Manage</strong> — API de restrição de processamento, supervisão humana via interface Manager e políticas de retenção configuráveis',
			],
			isoHeading: 'ISO/IEC 42001 — Sistemas de gestão de IA',
			isoPara:
				'ISO/IEC 42001:2023 estabelece requisitos para um Sistema de Gestão de IA (AIMS). O EDDI fornece capacidades técnicas que apoiam organizações na busca pela certificação ISO 42001:',
			isoItems: [
				'<strong>Políticas de IA documentadas</strong> — Configuração como código significa que todo o comportamento do agente é definido em JSON auditável',
				'<strong>Avaliação de riscos</strong> — Trilhas de auditoria capturam históricos completos de decisões para avaliação de riscos',
				'<strong>Controles operacionais</strong> — RBAC, gestão de segredos baseada em cofre e restrições de processamento fornecem governança operacional',
				'<strong>Monitoramento de desempenho</strong> — Métricas Prometheus, dashboards Grafana e telemetria CQRS permitem avaliação contínua',
			],
			privacyHeading: 'Regulamentos de privacidade de dados',
			privacyIntro:
				'O EDDI fornece <strong>endpoints unificados de direitos dos titulares de dados</strong> que satisfazem os requisitos técnicos de cada grande regulamento de privacidade. Uma API cobre exclusão em cascata, exportação completa de dados e restrição de processamento — independentemente da jurisdição.',
			gdprHeading: 'RGPD — União Europeia / EEE',
			gdprPara:
				'O Regulamento Geral sobre a Proteção de Dados (UE 2016/679) é o padrão ouro para privacidade de dados. O EDDI implementa os direitos dos titulares de dados do RGPD como <strong>endpoints API de primeira classe</strong> apoiados por operações em cascata em todos os 5 armazéns de dados:',
			gdprItems: [
				'<strong>Direito ao apagamento (Art. 17)</strong> — <code>DELETE /admin/gdpr/{userId}</code> opera em cascata sobre memórias do usuário, conversas, mapeamentos de conversas gerenciadas, registros de banco de dados (pseudonimizados SHA-256) e registro de auditoria (pseudonimizado SHA-256)',
				'<strong>Direito de acesso / Portabilidade (Art. 15/20)</strong> — <code>GET /admin/gdpr/{userId}/export</code> retorna todos os dados como JSON estruturado',
				'<strong>Direito à limitação (Art. 18)</strong> — <code>POST /admin/gdpr/{userId}/restrict</code> congela o processamento preservando os dados',
				'<strong>Registro sem PII</strong> — Operações RGPD registram pseudônimos SHA-256, nunca IDs de usuário brutos',
				'<strong>Retenção configurável</strong> — Políticas de retenção por categoria para conversas (365 dias padrão), memórias de usuário (manual) e entradas de auditoria (indefinido para EU AI Act)',
				'<strong>Ferramentas MCP</strong> — <code>delete_user_data</code> e <code>export_user_data</code> permitem workflows de conformidade orquestrados por IA',
			],
			ccpaHeading: 'CCPA / CPRA — Califórnia, Estados Unidos',
			ccpaPara:
				'O California Consumer Privacy Act e o California Privacy Rights Act concedem aos consumidores direitos de conhecimento, exclusão e recusa. O EDDI satisfaz os requisitos técnicos do CCPA através de sua API compatível com RGPD:',
			ccpaItems: [
				'<strong>Direito de saber (§1798.100)</strong> — O endpoint de exportação RGPD fornece todas as informações pessoais em formato estruturado',
				'<strong>Direito de excluir (§1798.105)</strong> — O endpoint de apagamento RGPD fornece exclusão em cascata em todos os armazéns de dados',
				'<strong>Não vender (§1798.120)</strong> — O EDDI arquiteturalmente não pode vender informações pessoais — é infraestrutura middleware que processa dados exclusivamente em nome do implantador',
			],
			pipedaHeading: 'PIPEDA — Canadá',
			pipedaPara:
				'A Lei de Proteção de Informações Pessoais e Documentos Eletrônicos do Canadá (2000, alterada em 2023) rege o processamento comercial de dados através de 10 Princípios de Informação Justa:',
			pipedaItems: [
				'<strong>Responsabilidade</strong> — Registro de auditoria imutável assinado HMAC rastreia todas as operações',
				'<strong>Limitação de coleta</strong> — O janelamento consciente de tokens limita os dados enviados aos LLMs; a retenção configurável exclui automaticamente conversas antigas',
				'<strong>Limitação de uso/divulgação</strong> — Os dados são usados apenas para interações de agentes configuradas; a trilha de auditoria registra cada invocação LLM',
				'<strong>Salvaguardas</strong> — Criptografia envelope AES-256-GCM (Secrets Vault), integridade de auditoria HMAC-SHA256, Keycloak OIDC, RBAC',
				'<strong>Acesso individual</strong> — A exportação completa de dados via API REST retorna todas as memórias, conversas e mapeamentos como JSON',
				'<strong>Contestação da conformidade</strong> — Exclusão em cascata em todos os 5 armazéns de dados; trilha de auditoria pseudonimizada para obrigações legais de retenção',
			],
			lgpdHeading: 'LGPD — Brasil',
			lgpdPara:
				'A Lei Geral de Proteção de Dados do Brasil (2018, efetiva em 2020) concede amplos direitos aos titulares de dados. O EDDI cobre todos os direitos do Artigo 18 com capacidades técnicas integradas:',
			lgpdItems: [
				'<strong>Acesso aos dados (Art. 18, II)</strong> — Exportação completa de dados em JSON',
				'<strong>Correção (Art. 18, III)</strong> — Memórias de usuário atualizáveis via <code>PUT /usermemorystore/memories</code>',
				'<strong>Anonimização/Exclusão (Art. 18, IV)</strong> — Exclusão em cascata com pseudonimização SHA-256 de registros de auditoria',
				'<strong>Portabilidade de dados (Art. 18, V)</strong> — Exportação JSON legível por máquina inclui todos os dados do usuário',
				'<strong>Exclusão de dados desnecessários (Art. 18, VI)</strong> — Políticas de retenção configuráveis com limpeza automática',
				'<strong>Revogação do consentimento (Art. 18, IX)</strong> — Endpoints de fim de conversa e exclusão em cascata fornecem o mecanismo técnico',
			],
			appiHeading: 'APPI — Japão',
			appiPara:
				'A Lei de Proteção de Informações Pessoais do Japão (2003, significativamente alterada em 2022) é uma das leis de proteção de dados mais maduras da Ásia. O EDDI fornece:',
			appiItems: [
				'<strong>Medidas de segurança (Art. 23)</strong> — Criptografia vault AES-256-GCM, integridade de auditoria HMAC-SHA256, Keycloak OIDC, RBAC, proteção SSRF',
				'<strong>Divulgação aos titulares de dados (Art. 33)</strong> — Exportação completa de dados via API REST',
				'<strong>Correção e exclusão (Art. 34-35)</strong> — Atualizações de memória para correção; exclusão em cascata para apagamento',
				'<strong>Informações pseudonimizadas (emenda 2022)</strong> — O apagamento RGPD usa pseudonimização SHA-256, satisfazendo a categoria de informações pseudonimizadas da APPI',
				'<strong>Documentação de transferência transfronteiriça (Art. 28)</strong> — Fluxos de dados de provedores LLM documentados; a trilha de auditoria registra qual modelo/provedor processou cada turno',
			],
			popiaHeading: 'POPIA — África do Sul',
			popiaPara:
				'A Lei de Proteção de Informações Pessoais da África do Sul (2013, efetiva em 2021) estabelece 8 condições de processamento de dados. O EDDI fornece capacidades técnicas integradas para cada condição:',
			popiaItems: [
				'<strong>Responsabilidade (Condição 1)</strong> — Registro de auditoria assinado HMAC, fluxos de dados documentados, código open-source Apache 2.0',
				'<strong>Limitação de processamento (Condição 2)</strong> — Janelamento consciente de tokens, retenção configurável, encerramento automático de conversas inativas',
				'<strong>Qualidade da informação (Condição 5)</strong> — Estado de conversa com timestamp e versionado; memórias de usuário atualizáveis via API REST',
				'<strong>Salvaguardas de segurança (Condição 7)</strong> — Criptografia AES-256-GCM, integridade HMAC, Keycloak OIDC, RBAC, proteção SSRF',
				'<strong>Participação do titular de dados (Condição 8)</strong> — Endpoints completos de exportação de dados e exclusão em cascata',
			],
			pdpaHeading: 'PDPA — Singapura e Tailândia',
			pdpaPara:
				'As Leis de Proteção de Dados Pessoais de Singapura (2012, alterada em 2021) e Tailândia (2019, efetiva em 2022) são os frameworks de privacidade mais maduros do sudeste asiático. O EDDI cobre as obrigações técnicas de ambas as jurisdições:',
			pdpaItems: [
				'<strong>Obrigação de acesso</strong> — Exportação completa de dados via API REST e ferramentas MCP',
				'<strong>Obrigação de correção</strong> — Memórias de usuário atualizáveis via API REST',
				'<strong>Obrigação de proteção</strong> — Criptografia AES-256-GCM, integridade de auditoria HMAC, Keycloak OIDC, RBAC',
				'<strong>Limitação de retenção</strong> — Limpeza automática configurável com timeout de conversas inativas',
				'<strong>Notificação de violação de dados</strong> — Modelo de runbook de resposta a incidentes incluído na documentação do EDDI',
			],
			pdpaMYHeading: 'PDPA — Malásia',
			pdpaMYPara: 'A Lei de Proteção de Dados Pessoais da Malásia de 2010 (Lei 709, alterada em 2024) rege o processamento comercial de dados pessoais através de 7 princípios de proteção de dados. O EDDI fornece os controles técnicos para apoiar a conformidade do implantador:',
			pdpaMYItems: [
				'<strong>Princípio Geral (§6)</strong> — Políticas de retenção configuráveis e endpoint de restrição de processamento suportam processamento baseado em consentimento e limitado por finalidade',
				'<strong>Princípio de Segurança (§9)</strong> — Criptografia de cofre AES-256-GCM, integridade de auditoria HMAC-SHA256, Keycloak OIDC, RBAC, proteção SSRF',
				'<strong>Princípio de Retenção (§10)</strong> — Retenção configurável por categoria com limpeza automática; encerramento automático de conversas inativas',
				'<strong>Princípio de Integridade dos Dados (§11)</strong> — Estado de conversa versionado com carimbo de data/hora; memórias de utilizador atualizáveis via REST API',
				'<strong>Princípio de Acesso (§12)</strong> — Exportação completa dos dados via <code>GET /admin/gdpr/{userId}/export</code> retorna todos os dados do utilizador como JSON estruturado',
				'<strong>Transferências Transfronteiriças (§129)</strong> — A arquitetura autoalojada permite que os implantadores controlem a residência dos dados; trilha de auditoria documenta todos os fluxos de dados dos fornecedores LLM',
			],
			piplHeading: 'PIPL — China',
			piplPara: 'A Lei de Proteção de Informações Pessoais da China (2021) é uma das leis de proteção de dados mais abrangentes do mundo, regendo o processamento de informações pessoais de indivíduos na China. O EDDI fornece a infraestrutura técnica para implantações em conformidade com o PIPL:',
			piplItems: [
				'<strong>Processamento Lícito (Art. 13)</strong> — O comportamento de agente orientado por configuração garante que o processamento permaneça dentro dos propósitos definidos; a API de restrição de processamento congela a atividade sob demanda',
				'<strong>Direitos Individuais (Art. 44–49)</strong> — Endpoints de exportação completa de dados, exclusão em cascata e restrição de processamento cobrem os direitos de conhecer, copiar, corrigir, excluir e restringir',
				'<strong>Segurança dos Dados (Art. 51)</strong> — Criptografia de cofre AES-256-GCM, integridade de auditoria HMAC-SHA256, Keycloak OIDC, RBAC, zero <code>eval()</code>',
				'<strong>Transferências Transfronteiriças (Art. 38–39)</strong> — A arquitetura autoalojada permite a implantação local na China; trilha de auditoria documenta todos os fluxos de dados externos para avaliações de segurança',
				'<strong>Tomada de Decisão Automatizada (Art. 24)</strong> — Trilhas de auditoria imutáveis com rastreabilidade completa do pipeline fornecem transparência na tomada de decisão de IA; supervisão humana via interface de gestão',
				'<strong>Retenção de Dados (Art. 19)</strong> — Políticas de retenção configuráveis com limpeza automática impõem períodos de armazenamento mínimos necessários',
			],
			otherRegionsHeading: 'Jurisdições adicionais',
			otherRegionsPara:
				'A infraestrutura de proteção de dados do EDDI atende aos padrões internacionais. As seguintes jurisdições também são suportadas através da mesma API unificada:',
			otherRegionsItems: [
				'<strong>UK GDPR</strong> (Reino Unido) — Reflete substancialmente o RGPD da UE; os endpoints RGPD do EDDI satisfazem todos os direitos do UK GDPR. Supervisão ICO.',
				'<strong>PIPA</strong> (Coreia do Sul) — Requisitos estritos de consentimento, DPO obrigatório, notificação de violação em 72 horas. O EDDI fornece a infraestrutura técnica de auditoria e apagamento.',
				'<strong>DPDPA</strong> (Índia, 2023) — Framework baseado em consentimento com restrições transfronteiriças. Os endpoints de exportação e apagamento do EDDI satisfazem os requisitos do DPDPA.',
				'<strong>Privacy Act + APPs</strong> (Austrália) — 13 Princípios Australianos de Privacidade. A trilha de auditoria e a exportação de dados do EDDI cobrem as obrigações técnicas.',
				'<strong>Leis estaduais tipo CCPA</strong> (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, etc.) — A API compatível com RGPD/CCPA satisfaz todas as leis estaduais emergentes de privacidade nos EUA.',
			],
			industryHeading: 'Conformidade específica da indústria',
			hipaaHeading: 'HIPAA — Saúde nos Estados Unidos',
			hipaaPara:
				'O HIPAA estabelece salvaguardas para Informações de Saúde Protegidas (PHI). O EDDI fornece a infraestrutura técnica para implantações de IA em conformidade com HIPAA:',
			hipaaItems: [
				'<strong>Controles de acesso (§164.312(a))</strong> — Keycloak OIDC com acesso baseado em funções (eddi-admin, eddi-editor, eddi-viewer)',
				'<strong>Controles de auditoria (§164.312(b))</strong> — Registro de auditoria imutável assinado HMAC registra cada operação com timestamps, IDs de usuário e resultados',
				'<strong>Controles de integridade (§164.312(c))</strong> — Detecção de adulteração HMAC-SHA256 em todas as entradas de auditoria',
				'<strong>Segurança de transmissão (§164.312(e))</strong> — TLS para trânsito; AES-256-GCM para segredos em repouso via Secrets Vault',
				'<strong>Descarte de dados (§164.310(d)(2)(i))</strong> — O endpoint de exclusão em cascata RGPD remove permanentemente PHI de todos os armazéns de dados',
				'<strong>Modelo BAA</strong> — Modelo de Business Associate Agreement incluído na documentação do EDDI para implantações em saúde',
			],
			soc2Heading: 'Preparação SOC 2',
			soc2Para:
				'SOC 2 Type II avalia sistemas contra os Trust Services Criteria. A arquitetura do EDDI fornece controles técnicos que apoiam organizações na busca pela atestação SOC 2:',
			soc2Items: [
				'<strong>Segurança</strong> — Autenticação OIDC/Keycloak, RBAC, Secrets Vault (AES-256-GCM), zero eval(), proteção contra path traversal, validação de URL',
				'<strong>Disponibilidade</strong> — Escalamento horizontal via NATS JetStream, suporte dual de banco de dados (MongoDB/PostgreSQL), implantação nativa Kubernetes',
				'<strong>Integridade de processamento</strong> — Registro de auditoria imutável assinado HMAC com verificação de integridade criptográfica por operação',
				'<strong>Confidencialidade</strong> — O filtro de redação de segredos remove chaves API e referências de cofre das entradas de auditoria; registro sem PII com pseudônimos SHA-256',
				'<strong>Privacidade</strong> — API completa de direitos dos titulares de dados (apagamento, exportação, restrição), retenção configurável, controles de restrição de processamento',
			],
			apiHeading: 'Uma API para conformidade global',
			apiPara:
				'Cada regulamento de privacidade listado acima é atendido pela <strong>mesma API REST unificada e as mesmas ferramentas MCP</strong>. Seja respondendo a uma solicitação de apagamento RGPD na Alemanha, uma solicitação de exclusão CCPA na Califórnia ou uma solicitação de acesso PDPA em Singapura — os mesmos endpoints lidam com tudo:',
			apiItems: [
				'<strong><code>DELETE /admin/gdpr/{userId}</code></strong> — Exclusão em cascata em 5 armazéns de dados (memórias de usuário, conversas, mapeamentos gerenciados, registros, entradas de auditoria)',
				'<strong><code>GET /admin/gdpr/{userId}/export</code></strong> — Exportação completa de dados do usuário como JSON estruturado',
				'<strong><code>POST /admin/gdpr/{userId}/restrict</code></strong> — Congelar processamento preservando dados para resolução de disputas',
				'<strong>MCP: <code>delete_user_data</code></strong> — Exclusão em cascata orquestrada por IA (requer confirmação explícita)',
				'<strong>MCP: <code>export_user_data</code></strong> — Exportação de dados orquestrada por IA para workflows DSAR automatizados',
			],
			heading3: 'Construído para indústrias regulamentadas em todo o mundo',
			para2:
				'Saúde, serviços financeiros, governo, manufatura e outros setores regulamentados podem implantar o EDDI com confiança. A plataforma fornece a transparência, auditabilidade e mecanismos de controle exigidos por mais de 15 frameworks regulatórios — do EU AI Act e RGPD na Europa ao HIPAA nos Estados Unidos, PIPEDA no Canadá, LGPD no Brasil, APPI no Japão, POPIA na África do Sul e PDPA no sudeste asiático. Conformidade não é uma reflexão tardia — é uma fundação arquitetônica.',
		},
	},
};

export default pt;