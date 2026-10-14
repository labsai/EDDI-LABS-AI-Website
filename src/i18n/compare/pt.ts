/**
 * Head-to-head comparison copy, Brazilian Portuguese. Keys match src/data/comparisons.ts.
 * Competitor facts are dated "as of October 2026"; sources are listed in the
 * header of src/data/comparisons.ts.
 */
import type { CompareCopy } from './en';
import { MCP_TOOLS, FRAMEWORKS, LLM_PROVIDERS, TESTS, EMBEDDING_PROVIDERS, VECTOR_STORES } from '../stats';

const EDDI_LICENSE = 'Apache 2.0, aprovada pela OSI';

const copy: CompareCopy = {
	ui: {
		shortAnswer: 'Resposta curta',
		chooseTitle: 'Como escolher entre os dois',
		faqTitle: 'Perguntas frequentes',
		otherTitle: 'Outras comparações',
		allAlternatives: 'Todas as alternativas: construtores, bibliotecas e plataformas em nuvem',
		asOfNote: 'Os detalhes sobre a outra ferramenta foram conferidos na documentação oficial e no repositório dela em outubro de 2026. Esses projetos mudam rápido, então confirme o comportamento atual com o fornecedor antes de decidir.',
		backToHub: 'Todas as comparações',
		hubTitle: 'EDDI comparado: Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n e mais',
		hubMetaTitle: 'EDDI vs. Dify, CrewAI, LangGraph, Microsoft Agent Framework, n8n, Flowise, Rasa',
		hubDescription: 'Comparações diretas e equilibradas do EDDI com Dify, CrewAI, LangChain e LangGraph, Microsoft Agent Framework (AutoGen e Semantic Kernel), n8n, Flowise e Rasa, incluindo os casos em que a outra ferramenta é a melhor escolha.',
		hubIntro: 'Cada página compara o EDDI com uma alternativa nas mesmas dimensões: arquitetura, governança, licenciamento e operação. Cada uma diz com clareza onde a outra ferramenta é a melhor escolha e como migrar, se você decidir mudar.',
		hubReadMore: 'Ler a comparação',
		hubLandscapeTitle: 'Procurando o panorama mais amplo?',
		hubLandscapeDesc: 'A visão geral das alternativas agrupa o setor por arquétipo: construtores visuais, bibliotecas de código e plataformas de IA em nuvem.',
		headToHeadTitle: 'Comparações diretas',
		headToHeadIntro: 'Esta página mapeia o panorama por arquétipo. Para uma comparação direta com uma alternativa específica, incluindo onde essa alternativa é a melhor escolha e como migrar um projeto existente, veja:',
		navLabel: 'Comparar',
	},
	comparisons: {
		// ─── LangChain and LangGraph ──────────────────────────────────
		'eddi-vs-langchain': {
			title: 'EDDI vs. LangChain e LangGraph',
			description:
				'Como o EDDI se compara ao LangChain e ao LangGraph: biblioteca versus plataforma implantável, grafos definidos em código versus config-as-code, human-in-the-loop, a lacuna de operações do Day 2 e quando escrever a orquestração por conta própria é a decisão certa.',
			summary: 'Biblioteca e grafos definidos em código versus uma plataforma implantável; a lacuna de operações do Day 2.',
			verdict:
				'<strong>Escolha LangChain ou LangGraph</strong> quando a lógica de orquestração é a parte diferenciada do seu produto e você a quer em código, sob revisão, no seu repositório. <strong>Escolha o EDDI</strong> quando a orquestração é infraestrutura sem diferencial e você prefere implantá-la a mantê-la.',
			whatItIsTitle: 'O que são LangChain e LangGraph',
			whatItIs:
				'O LangChain é um framework Python e JavaScript, com licença MIT, para criar aplicações com LLMs. O LangGraph, da mesma equipe, é um framework de orquestração de baixo nível para agentes com estado: você define um grafo em código, e ele acrescenta execução durável que retoma após falhas e pontos de verificação human-in-the-loop em que é possível inspecionar e modificar o estado do agente. O LangSmith é o produto comercial de rastreamento, avaliação e observabilidade, e o LangSmith Deployment hospeda agentes de longa duração. A superfície de integração é a mais ampla do ecossistema.',
			archetypeTitle: 'É uma questão de biblioteca versus plataforma',
			archetype:
				'O EDDI não é um framework concorrente. Ele usa internamente o <a href="https://docs.langchain4j.dev/" target="_blank" rel="noopener">LangChain4j</a>, o irmão em Java do LangChain. A pergunta real não é qual abstração é melhor. É se o fluxo de controle fica em código que você escreve, como um grafo do LangGraph, ou em configuração declarativa que você implanta, e quem constrói e mantém tudo o que o cerca: a camada REST, a autenticação, a multi-tenancy, o estado, a auditoria e a interface usada por quem não é desenvolvedor.',
			tableTitle: 'O que você constrói versus o que você implanta',
			tableHeaders: { dimension: 'Dimensão', them: 'LangChain / LangGraph', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Formato', them: 'Uma biblioteca importada para a sua aplicação', eddi: 'Middleware implantável; roda onde o Docker roda' },
				{ dimension: 'Lógica de orquestração', them: 'Grafos em Python ou TypeScript no seu repositório', eddi: 'Configuração em JSON e regras de comportamento determinísticas, alteradas sem nova implantação' },
				{ dimension: 'Human in the loop', them: 'Interrupções permitem inspecionar e modificar o estado; a interface de aprovação e a política ficam por sua conta', eddi: 'Pontos de aprovação em turnos, chamadas de ferramentas e fases de grupo, com políticas de timeout e aprovações no Manager e no Slack' },
				{ dimension: 'Durabilidade', them: 'Execução durável com persistência que você configura', eddi: 'Memória de conversa persistida pela plataforma, com estados explícitos como AWAITING_HUMAN' },
				{ dimension: 'API REST e roteamento', them: 'Você constrói, ou hospeda no LangSmith Deployment', eddi: 'Incluídos, além de OpenAPI 3.1, protocolo A2A e streaming SSE' },
				{ dimension: 'Autenticação e RBAC', them: 'Você constrói', eddi: 'OIDC/Keycloak opcional com os papéis eddi-admin e eddi-approver' },
				{ dimension: 'Interface para quem não é desenvolvedor', them: 'Você constrói (o LangSmith Studio é voltado a desenvolvedores)', eddi: 'EDDI Manager, uma interface React de produção em 11 idiomas' },
				{ dimension: 'Gerenciamento de segredos', them: 'Você constrói, ou traz um cofre', eddi: 'Secrets Vault integrado com AES-256-GCM, referenciado como ${vault:key}' },
				{ dimension: 'Observabilidade', them: 'LangSmith (comercial) ou instrumentação própria', eddi: 'Métricas Prometheus e painéis Grafana provisionados automaticamente' },
				{ dimension: 'Auditoria e conformidade', them: 'Você constrói', eddi: `Ledger de auditoria assinado com HMAC, somente de acréscimo e com verificação de sequência, API de direitos do titular dos dados, ${FRAMEWORKS} frameworks abordados` },
				{ dimension: 'Ciclo de iteração', them: 'Alterar o código, revisar, testar, implantar', eddi: 'Alterar a configuração na interface ou na API; vale imediatamente' },
				{ dimension: 'Teto de controle', them: 'Nenhum. Tudo o que pode ser expresso em código está disponível', eddi: 'Limitado ao que a configuração consegue expressar, por projeto' },
			],
			betterThemTitle: 'Onde LangChain e LangGraph são a melhor escolha',
			betterThem: [
				'A própria orquestração é a sua vantagem competitiva e pertence à sua base de código, não a um repositório de configuração.',
				'Você precisa de um fluxo de controle que a configuração declarativa não consegue expressar: topologias de grafo personalizadas, semânticas de nova tentativa sob medida, máquinas de estado incomuns.',
				'Você trabalha com Python ou TypeScript e quer que o agente viva dentro de um serviço existente, em vez de ao lado dele.',
				'Você precisa de uma integração nova na mesma semana em que ela surge. O LangChain se move mais rápido do que qualquer plataforma consegue.',
				'A equipe tem uma ou duas pessoas de engenharia, sem responsável por conformidade, sem requisito de multi-tenancy e sem ninguém fora do desenvolvimento que precise de acesso.',
			],
			betterEddiTitle: 'Onde o EDDI é a melhor escolha',
			betterEddi: [
				'Você reconhece a lista de operações do Day 2 como trabalho que a sua equipe faz em vez de entregar produto.',
				'Engenheiros de prompt e equipes de operações precisam alterar o comportamento do agente sem um pull request.',
				'Várias equipes ou clientes compartilham uma implantação e precisam de isolamento, cotas e atribuição de custos.',
				'O setor de compras quer uma resposta sobre trilhas de auditoria, residência de dados e cobertura de frameworks antes de qualquer entrega.',
				'Você quer que a camada de orquestração seja uma dependência que você atualiza, não uma base de código que você mantém.',
			],
			migrationTitle: 'Migrando uma aplicação do LangChain ou do LangGraph',
			migrationIntro:
				'A lógica geralmente sobrevive; o que você deixa de manter é a infraestrutura ao redor. Trabalhe de dentro para fora, a partir da definição da cadeia ou do grafo. O fluxo de controle que depende de Python arbitrário precisará virar regras de comportamento ou uma ferramenta declarada.',
			migrationSteps: [
				{ from: 'Cadeia ou grafo do LangGraph', to: 'Configuração de pipeline do EDDI e regras de comportamento' },
				{ from: 'Ferramentas e function calling', to: 'Definições de ferramentas MCP ou declarações httpCall' },
				{ from: 'Interrupção para revisão humana', to: 'Regra PAUSE_CONVERSATION ou globs de toolApprovals, aprovados no Manager ou no Slack' },
				{ from: 'Checkpointer e classes de memória', to: 'Memória de conversa com os escopos step, conversation e longTerm' },
				{ from: 'Configuração de retriever e de vector store', to: `Configuração de RAG com ${EMBEDDING_PROVIDERS} provedores de embeddings e ${VECTOR_STORES} vector stores` },
				{ from: 'Templates de prompt', to: 'Snippets de prompt versionados, referenciados pelo nome' },
				{ from: 'Wrapper em FastAPI', to: 'API REST integrada, OpenAPI 3.1 e streaming SSE' },
				{ from: 'Rastreamento do LangSmith', to: 'Métricas Prometheus, painéis Grafana e o ledger de auditoria' },
			],
			faq: [
				{
					question: 'O EDDI usa o LangChain?',
					answer:
						'O EDDI usa internamente o LangChain4j, a implementação em Java. Não é uma abstração concorrente. O EDDI é a plataforma implantável construída em torno desse tipo de biblioteca, fornecendo a camada de API, a autenticação, o gerenciamento de estado, a interface de gestão e a infraestrutura de conformidade que uma biblioteca deixa deliberadamente por sua conta.',
				},
				{
					question: 'Qual é a diferença entre LangChain e LangGraph?',
					answer:
						'O LangChain fornece componentes e integrações para aplicações com LLMs. O LangGraph é a camada de nível mais baixo para agentes com estado e de longa duração, definidos como grafos, com execução durável e pontos de verificação human-in-the-loop. Ambos são bibliotecas que você embute no seu próprio serviço. A comparação com o EDDI vale para os dois.',
				},
				{
					question: 'O que é a lacuna de operações do Day 2?',
					answer:
						'O Day 1 é fazer um agente responder corretamente, algo que uma biblioteca resolve bem. O Day 2 é tudo o que vem depois: autenticação, multi-tenancy, estado da conversa entre reinicializações, registro de auditoria, rotação de segredos, escalonamento horizontal, controle de custos e uma interface para quem não escreve Python. As equipes costumam gastar mais tempo no Day 2 do que no próprio agente.',
				},
				{
					question: 'Configuração é menos poderosa do que código?',
					answer:
						'Sim, e essa troca é deliberada. A configuração não consegue expressar tudo o que o código expressa. Em contrapartida, você obtém mudanças sem nova implantação, um comportamento que quem não é engenheiro consegue revisar e nenhuma execução de código em tempo de execução para defender em uma revisão de segurança. Se você precisa do teto que o código oferece, use a biblioteca.',
				},
				{
					question: 'Podemos manter o LangChain e ainda usar o EDDI?',
					answer:
						'Sim. O EDDI expõe um servidor MCP e uma API REST, então uma aplicação LangChain pode chamar agentes do EDDI como ferramentas, e o EDDI pode chamar o seu serviço LangChain por meio de httpCall. Dividir pela linha entre o que é diferencial e o que é infraestrutura é um desenho razoável.',
				},
			],
		},

		// ─── Microsoft Agent Framework ────────────────────────────────
		'eddi-vs-microsoft-agent-framework': {
			title: 'EDDI vs. Microsoft Agent Framework (AutoGen e Semantic Kernel)',
			description:
				'Como o EDDI se compara ao Microsoft Agent Framework, o sucessor do AutoGen e do Semantic Kernel: workflows definidos em código versus config-as-code, human-in-the-loop, auditoria, hospedagem e quando a pilha da Microsoft é a opção mais adequada.',
			summary: 'Microsoft Agent Framework, o sucessor do AutoGen e do Semantic Kernel, versus uma plataforma de agentes implantável.',
			verdict:
				'<strong>Escolha o Microsoft Agent Framework</strong> quando você tem uma equipe .NET ou Python, desenvolve no Azure e quer workflows de agentes como código no seu próprio serviço. <strong>Escolha o EDDI</strong> quando você quer agentes definidos como configuração revisável em uma plataforma JVM que roda em qualquer lugar, com pontos de aprovação e um ledger de auditoria já incluídos, em vez de montados.',
			whatItIsTitle: 'O que é o Microsoft Agent Framework',
			whatItIs:
				'O Microsoft Agent Framework é um SDK e runtime de código aberto, com licença MIT, para criar e orquestrar agentes e workflows multiagente em .NET e Python. Vem das equipes por trás do Semantic Kernel e do AutoGen e chegou à versão 1.0 em abril de 2026. Os workflows são grafos com padrões de colaboração sequencial, concorrente, de handoff e em grupo, com checkpointing, streaming, controle human-in-the-loop, rastreamento OpenTelemetry e um sistema de middleware. Os agentes também podem ser declarados em YAML, e a Microsoft documenta a hospedagem no Foundry. Em outubro de 2026, o Semantic Kernel recebe correções enquanto o trabalho de novos recursos acontece no Agent Framework, e o AutoGen está em modo de manutenção, com guias de migração para ambos.',
			archetypeTitle: 'Workflows definidos em código versus configuração declarada',
			archetype:
				'Se você chegou aqui procurando AutoGen ou Semantic Kernel, a comparação prática hoje é com o Agent Framework, porque é para ele que a Microsoft encaminha os novos projetos. É um SDK: o seu workflow é código no seu serviço, na sua linguagem, e você escolhe como hospedar, proteger e auditar, com forte suporte ao Azure. O EDDI faz a troca oposta. O agente é configuração JSON interpretada por uma plataforma implantada, de modo que o comportamento pode ser comparado por diff, revisado e alterado sem recompilar, e a plataforma fornece a API, a interface Manager, o cofre de segredos e o ledger de auditoria.',
			tableTitle: 'SDK para o seu serviço versus plataforma que você implanta',
			tableHeaders: { dimension: 'Dimensão', them: 'Microsoft Agent Framework', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Formato', them: 'SDK e runtime embutidos no seu serviço .NET ou Python', eddi: 'Middleware implantável em uma JVM (Quarkus); roda onde o Docker ou o Kubernetes rodam' },
				{ dimension: 'Como os agentes são definidos', them: 'Agentes e workflows em grafo definidos em código; os agentes também podem ser declarados em YAML', eddi: 'Configuração em JSON; regras de comportamento determinísticas decidem a próxima ação, e as chamadas ao LLM acontecem em tarefas declaradas' },
				{ dimension: 'Linguagens', them: '.NET e Python (Go em um repositório separado)', eddi: 'Qualquer linguagem por meio de REST, MCP e da API compatível com OpenAI; o agente em si não precisa de código' },
				{ dimension: 'Licença', them: 'MIT', eddi: EDDI_LICENSE },
				{ dimension: 'Lógica personalizada em tempo de execução', them: 'Seu código e suas funções de ferramentas rodam no seu processo', eddi: 'Sem eval() nem execução de código em tempo de execução; a lógica é declarada ou fica atrás de uma ferramenta MCP ou de uma chamada HTTP' },
				{ dimension: 'Human in the loop', them: 'Controle human-in-the-loop no nível do workflow', eddi: 'Pontos de aprovação em três níveis: turnos (PAUSE_CONVERSATION), chamadas de ferramentas (toolApprovals) e fases de grupo, com políticas de timeout' },
				{ dimension: 'Padrões multiagente', them: 'Colaboração sequencial, concorrente, de handoff e em grupo, em código', eddi: 'Discussões em grupo com 7 estilos (mesa redonda, revisão por pares, advogado do diabo, Delphi, debate, força-tarefa, negociação), com decisões e divergências registradas' },
				{ dimension: 'Estado e recuperação', them: 'Checkpointing e time-travel no runtime de workflows', eddi: 'Memória de conversa persistida pela plataforma; estados explícitos como AWAITING_HUMAN' },
				{ dimension: 'Observabilidade e auditoria', them: 'Rastreamento OpenTelemetry e hooks de middleware; para onde os dados vão fica por sua conta', eddi: 'Métricas Prometheus e um ledger de auditoria assinado com HMAC, somente de acréscimo e com verificação de sequência, com endpoint de verificação' },
				{ dimension: 'Segredos e identidade', them: 'Os mecanismos da sua plataforma, por exemplo serviços do Azure', eddi: 'Secrets Vault integrado com AES-256-GCM; Keycloak/OIDC opcional com os papéis eddi-admin e eddi-approver' },
				{ dimension: 'Adequação ao ecossistema', them: 'Integração profunda com a Microsoft e o Azure, incluindo agentes hospedados no Foundry', eddi: `Neutro em relação a fornecedores: ${LLM_PROVIDERS} provedores de LLM, modelos locais com Ollama ou Jlama, ${MCP_TOOLS} ferramentas MCP` },
			],
			betterThemTitle: 'Onde o Microsoft Agent Framework é a melhor escolha',
			betterThem: [
				'Sua equipe escreve .NET, e os agentes pertencem a um serviço C# existente, com implantação e testes próprios.',
				'Você desenvolve no Azure e quer integração de primeira classe com o Foundry e os demais serviços da Microsoft.',
				'Você tem plugins do Semantic Kernel ou código AutoGen, e o caminho de migração suportado custa menos do que trocar de plataforma.',
				'O workflow precisa de um fluxo de controle que a configuração não consegue expressar, como topologias de grafo sob medida, ramificação de checkpoints ou depuração com time-travel.',
				'Você quer um SDK para desenvolvedores e prefere decidir por conta própria como hospedar, proteger e observar.',
			],
			betterEddiTitle: 'Onde o EDDI é a melhor escolha',
			betterEddi: [
				'O comportamento do agente precisa ser configuração que revisores consigam ler e promover entre ambientes, sem recompilar.',
				'Uma revisão de segurança vai perguntar que código roda no momento da inferência, e você quer que a resposta seja nenhum, na plataforma.',
				'As aprovações precisam existir no nível de turno, de chamada de ferramenta e de fase de grupo, com um registro assinado de quem decidiu o quê.',
				'Você precisa de uma interface Manager, de um cofre de segredos, de uma API e de um ledger de auditoria prontos, em vez de montá-los em torno de um SDK.',
				'Você quer continuar neutro em relação à nuvem: Kubernetes, OpenShift, on-premises ou isolado da internet (air-gapped) com modelos locais.',
			],
			migrationTitle: 'Migrando do AutoGen, do Semantic Kernel ou do Agent Framework',
			migrationIntro:
				'Espere uma tradução de intenção, não de código. Papéis e ferramentas se mantêm; a lógica de grafo vira regras de comportamento, e tudo o que exige código de verdade passa para trás de uma ferramenta MCP ou de um endpoint OpenAPI.',
			migrationSteps: [
				{ from: 'Agente com instruções', to: 'Agente EDDI com uma tarefa de LLM e uma mensagem de sistema' },
				{ from: 'Plugin ou função do Semantic Kernel', to: 'Ferramenta MCP, ou uma API httpCall ou importada via OpenAPI' },
				{ from: 'Grafo de workflow ou equipe do AutoGen', to: 'Regras de comportamento para o roteamento, ou um estilo de discussão em grupo para o trabalho multiagente' },
				{ from: 'Etapa human-in-the-loop', to: 'Regra PAUSE_CONVERSATION, globs de toolApprovals ou requiresApproval em uma fase de grupo' },
				{ from: 'Armazenamento de checkpoints', to: 'Memória de conversa com os escopos step, conversation e longTerm' },
				{ from: 'Middleware e filtros', to: 'Regras de comportamento e políticas de aprovação de ferramentas' },
				{ from: 'Traces do OpenTelemetry', to: 'Métricas Prometheus e o ledger de auditoria' },
			],
			faq: [
				{
					question: 'O Microsoft Agent Framework é o substituto do AutoGen e do Semantic Kernel?',
					answer:
						'A Microsoft o apresenta como sucessor de ambos e publica guias de migração. Em outubro de 2026, o Semantic Kernel recebe correções enquanto os novos recursos chegam ao Agent Framework, e o AutoGen está em modo de manutenção. Se você está começando um novo projeto na pilha da Microsoft, o Agent Framework é o que deve ser avaliado em comparação com o EDDI.',
				},
				{
					question: 'O EDDI pode substituir o AutoGen em conversas multiagente?',
					answer:
						'Em muitos casos, sim. As discussões em grupo do EDDI cobrem os estilos mesa redonda, revisão por pares, advogado do diabo, Delphi, debate, força-tarefa e negociação, com fases que podem exigir aprovação humana e uma decisão registrada com as divergências. Se os seus agentes precisam de coordenação livre no nível do código, um SDK é a opção mais adequada.',
				},
				{
					question: 'Preciso abrir mão do Azure para usar o EDDI?',
					answer:
						'Não. O EDDI oferece suporte ao Azure OpenAI como provedor e roda no Kubernetes, inclusive no AKS. Ele não oferece a integração profunda com o Azure e o Foundry que o Agent Framework tem, então pondere isso se você está comprometido com o ecossistema da Microsoft.',
				},
				{
					question: 'Os dois podem funcionar juntos?',
					answer:
						'Sim. O EDDI expõe um servidor MCP, uma API REST e uma API compatível com OpenAI, e pode consumir servidores MCP e agentes A2A. Um serviço .NET pode chamar agentes do EDDI como ferramentas, e o EDDI pode chamar o seu serviço por meio de httpCall.',
				},
			],
		},

		// ─── CrewAI ───────────────────────────────────────────────────
		'eddi-vs-crewai': {
			title: 'EDDI vs. CrewAI',
			description:
				'Como o EDDI se compara ao CrewAI para sistemas multiagente: crews baseadas em papéis e flows em Python versus config-as-code em uma plataforma implantável, execução de código, human-in-the-loop, governança e quando o CrewAI é a melhor ferramenta.',
			summary: 'Crews baseadas em papéis e flows em Python versus configuração multiagente governada em uma plataforma.',
			verdict:
				'<strong>Escolha o CrewAI</strong> quando você tem uma equipe Python que quer agentes com papéis colaborando em uma tarefa, definidos e ajustados em código. <strong>Escolha o EDDI</strong> quando o trabalho multiagente precisa rodar como um serviço governado: regras determinísticas em torno do LLM, pontos de aprovação e uma trilha de auditoria assinada, configurados em vez de programados.',
			whatItIsTitle: 'O que é o CrewAI',
			whatItIs:
				'O CrewAI é um framework Python independente, com licença MIT, com primitivas próprias para agentes, tarefas, crews, flows e ferramentas. As crews são equipes de agentes baseados em papéis que colaboram de forma autônoma em uma tarefa. Os flows são workflows orientados a eventos que dão controle preciso sobre caminhos de execução, estado e ramificações. O projeto aceita entrada humana durante a execução, e o CrewAI AMP Suite comercial acrescenta um plano de controle para implantação gerenciada, observabilidade, governança e suporte.',
			archetypeTitle: 'Crews autônomas versus configuração governada',
			archetype:
				'O CrewAI aposta na autonomia dos agentes: você descreve papéis, objetivos e tarefas, e a crew descobre como colaborar, com Flows quando é preciso um controle mais firme. O EDDI aposta no controle: regras de comportamento determinísticas decidem qual ação roda a seguir, o LLM é chamado dentro de tarefas declaradas e o trabalho multiagente segue estilos nomeados de discussão em grupo, com fases explícitas. Os dois conseguem construir um sistema multiagente. A diferença está em quanto você decide de antemão e quanto o modelo decide em tempo de execução.',
			tableTitle: 'Agentes em código versus agentes como configuração',
			tableHeaders: { dimension: 'Dimensão', them: 'CrewAI', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Abstração principal', them: 'Crews de agentes baseados em papéis com tarefas, além de Flows orientados a eventos', eddi: 'Configuração do agente: pipeline, regras de comportamento, tarefas de LLM e ferramentas como JSON versionado' },
				{ dimension: 'Linguagem e runtime', them: 'Biblioteca Python embutida na sua aplicação', eddi: 'Plataforma JVM (Quarkus) com virtual threads; os agentes não precisam de código' },
				{ dimension: 'Licença', them: 'MIT (framework de código aberto); AMP Suite comercial por cima', eddi: EDDI_LICENSE },
				{ dimension: 'Fluxo de controle', them: 'Os agentes decidem a colaboração em tempo de execução; os Flows acrescentam ramificações explícitas em código', eddi: 'Regras de comportamento determinísticas escolhem a próxima ação; os estilos de grupo definem as fases' },
				{ dimension: 'Execução de código', them: 'A ferramenta de interpretador de código foi removida do crewai-tools e a execução de código no nível do agente está obsoleta; a documentação recomenda um sandbox dedicado, como E2B ou Modal', eddi: 'Sem eval() nem execução de código em tempo de execução na plataforma; a lógica é declarada ou fica atrás de uma ferramenta MCP ou de uma chamada HTTP' },
				{ dimension: 'Human in the loop', them: 'Entrada humana aceita durante a execução', eddi: 'Pontos de aprovação em turnos, chamadas de ferramentas e fases de grupo, políticas de timeout, aprovações no Manager, por REST, MCP ou Slack' },
				{ dimension: 'Padrões multiagente', them: 'Processos de crew e Flows em código', eddi: 'Discussões em grupo com 7 estilos mais personalizados, decisões registradas, contagens e divergências, entradas de transcrição assinadas' },
				{ dimension: 'Gestão e governança', them: 'Plano de controle com rastreamento e governança no AMP Suite comercial', eddi: 'Interface Manager, cofre de segredos, Keycloak/OIDC opcional e o ledger de auditoria na versão de código aberto' },
				{ dimension: 'Trilha de auditoria', them: 'Rastreamento e observabilidade pelo plano de controle ou por ferramentas próprias', eddi: 'Ledger assinado com HMAC, somente de acréscimo e com verificação de sequência; GET /auditstore/verify/{conversationId}' },
				{ dimension: 'Modelos', them: 'Muitos provedores a partir do Python', eddi: `${LLM_PROVIDERS} provedores de LLM e modelos locais com Ollama ou Jlama` },
			],
			betterThemTitle: 'Onde o CrewAI é a melhor escolha',
			betterThem: [
				'Sua equipe é Python em primeiro lugar e quer agentes, ferramentas e lógica de crew no mesmo repositório que o restante do código.',
				'Você quer prototipar rapidamente uma colaboração autônoma entre agentes com papéis e ajustá-la editando código.',
				'Você precisa de ferramentas Python personalizadas com lógica arbitrária que a configuração não consegue expressar.',
				'Você prefere uma biblioteca que embute a uma plataforma que opera.',
				'O plano de controle do AMP Suite comercial se encaixa em como a sua organização quer implantar e monitorar crews.',
			],
			betterEddiTitle: 'Onde o EDDI é a melhor escolha',
			betterEddi: [
				'O comportamento multiagente precisa ser previsível o bastante para ser revisado: fases nomeadas, decisões registradas e regras em vez de autonomia livre.',
				'Uma pessoa precisa aprovar determinadas chamadas de ferramentas ou fases de grupo, e a decisão tem de ficar registrada em um ledger assinado.',
				'Você quer governança, uma interface de gestão e auditoria na versão de código aberto, e não em uma camada comercial separada.',
				'Uma revisão de segurança vai perguntar que código roda no momento da inferência, e você quer que a plataforma não execute nenhum.',
				'Quem não é engenheiro precisa alterar o comportamento do agente sem um pull request.',
			],
			migrationTitle: 'Migrando uma crew do CrewAI',
			migrationIntro:
				'Papéis e objetivos se traduzem em prompts e fases de grupo. O que mais muda é a autonomia: o que uma crew decidia em tempo de execução passa a ser uma regra, uma fase ou um ponto de aprovação que você escreve explicitamente.',
			migrationSteps: [
				{ from: 'Agente (papel, objetivo, histórico)', to: 'Agente EDDI com uma mensagem de sistema em uma tarefa de LLM' },
				{ from: 'Tarefa', to: 'Tarefa de pipeline, ou uma fase em uma discussão em grupo' },
				{ from: 'Processo da crew', to: 'Estilo de discussão em grupo, por exemplo força-tarefa ou mesa redonda' },
				{ from: 'Flow com routers', to: 'Regras de comportamento com tipos de condição como inputmatcher e actionmatcher' },
				{ from: 'Ferramenta Python personalizada', to: 'Ferramenta MCP, httpCall ou uma API importada via OpenAPI' },
				{ from: 'Entrada humana', to: 'Regra PAUSE_CONVERSATION, toolApprovals ou requiresApproval em uma fase' },
				{ from: 'Memória e fontes de conhecimento', to: 'Escopos de memória de conversa e bases de conhecimento RAG' },
			],
			faq: [
				{
					question: 'O EDDI é uma alternativa ao CrewAI para sistemas multiagente?',
					answer:
						'Sim, para equipes que querem colaboração multiagente como um serviço governado. As discussões em grupo do EDDI executam estilos nomeados com fases explícitas e registram decisões e divergências. O CrewAI dá mais autonomia aos agentes e é definido em Python, o que atende equipes que querem continuar em código.',
				},
				{
					question: 'O EDDI tem agentes autônomos como o CrewAI?',
					answer:
						'Os agentes do EDDI podem chamar ferramentas e colaborar em discussões em grupo, mas o fluxo de controle é definido por regras de comportamento e fases que você configura, e não deixado para os agentes improvisarem. É uma troca deliberada de autonomia por previsibilidade.',
				},
				{
					question: 'Por que a execução de código importa aqui?',
					answer:
						'Agentes que executam código gerado precisam de isolamento. O CrewAI se afastou do interpretador de código integrado e recomenda um serviço de sandbox dedicado. O EDDI contorna a questão dentro da plataforma ao não avaliar código em tempo de execução, de modo que tudo o que exige lógica de verdade fica atrás de uma ferramenta que você declara e pode aprovar.',
				},
				{
					question: 'Podemos usar os dois?',
					answer:
						'Sim. Um serviço CrewAI pode chamar o EDDI pela API REST, pelo servidor MCP ou pela API compatível com OpenAI, e o EDDI pode chamar um endpoint do CrewAI por meio de httpCall. Usar o CrewAI para experimentos no nível do código e o EDDI para agentes de produção governados é uma divisão razoável.',
				},
			],
		},

		// ─── Dify ─────────────────────────────────────────────────────
		'eddi-vs-dify': {
			title: 'EDDI vs. Dify',
			description:
				'Como o EDDI se compara ao Dify para criar e operar agentes de LLM: construtor visual de workflows e nó de código versus config-as-code, termos de licença e multi-tenancy, entrada humana, auditoria e quando o Dify é a ferramenta certa.',
			summary: 'Construtor visual de workflows e plataforma de apps versus config-as-code com governança integrada.',
			verdict:
				'<strong>Escolha o Dify</strong> quando você quer um construtor visual refinado, um marketplace de plugins e um caminho rápido para apps de LLM que sua equipe ou seus clientes possam usar nesta semana. <strong>Escolha o EDDI</strong> quando os agentes precisam rodar sob uma licença Apache 2.0 sem ambiguidade, sem nós de código, com pontos de aprovação em vários níveis e um ledger de auditoria feito para servir de evidência.',
			whatItIsTitle: 'O que é o Dify',
			whatItIs:
				'O Dify é uma plataforma de código aberto para criar aplicações com LLMs. Oferece um canvas visual de workflows, um pipeline de RAG da ingestão à recuperação, agentes com ferramentas do seu marketplace, de servidores MCP ou de APIs personalizadas, uma IDE de prompts, APIs de backend como serviço e integrações com ferramentas de observabilidade como Langfuse, Opik e Arize Phoenix. Você pode usar o Dify Cloud, hospedar por conta própria a Community Edition com Docker Compose ou consultar o Dify Enterprise, que acrescenta SSO, RBAC e SLAs de suporte. O nó Code executa Python ou JavaScript em um sandbox, e o nó Human Input pausa um workflow para que uma pessoa responda.',
			archetypeTitle: 'Construtor de apps versus plataforma de agentes governada',
			archetype:
				'O Dify e o EDDI se sobrepõem em RAG, ferramentas e agentes, mas otimizam para pessoas diferentes. O Dify otimiza para quem quer montar aplicações visualmente e entregá-las rápido, com um nó de código como válvula de escape. O EDDI otimiza para operadores que precisam que o comportamento do agente seja uma configuração declarativa e revisável, com governança ao redor. Muitas equipes começam no Dify, com razão, e algumas migram quando surgem requisitos de multi-tenancy, de licenciamento ou de auditoria.',
			tableTitle: 'Conveniência do construtor versus superfície de operação',
			tableHeaders: { dimension: 'Dimensão', them: 'Dify', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Abstração principal', them: 'Canvas visual de workflow e chatflow, com uma IDE de prompts', eddi: 'Config-as-code: recursos JSON criados no Manager ou na API, versionados como código-fonte' },
				{ dimension: 'Licença', them: 'Dify Open Source License: Apache 2.0 mais condições. A operação multi-tenant do código-fonte exige autorização por escrito, e o logotipo e o copyright do frontend devem ser mantidos', eddi: EDDI_LICENSE },
				{ dimension: 'Lógica personalizada', them: 'O nó Code executa Python ou JavaScript em um sandbox que bloqueia o sistema de arquivos, a rede de saída e comandos do sistema, com um conjunto fixo de pacotes', eddi: 'Sem avaliação de código em tempo de execução; a lógica é declarada ou fica atrás de uma ferramenta MCP ou de uma chamada HTTP' },
				{ dimension: 'Human in the loop', them: 'O nó Human Input pausa um workflow para um formulário respondido no app web ou por e-mail; espera padrão de 3 dias, depois um ramo de timeout', eddi: 'Pontos de aprovação em turnos, chamadas de ferramentas e fases de grupo; as políticas de timeout incluem WAIT_INDEFINITELY, AUTO_APPROVE, AUTO_REJECT e ABORT; aprovações no Manager e no Slack' },
				{ dimension: 'Ferramentas e integrações', them: 'Marketplace, servidores MCP e APIs personalizadas', eddi: `${MCP_TOOLS} ferramentas MCP, um cliente MCP, importação OpenAPI, httpCall, A2A` },
				{ dimension: 'RAG', them: 'Pipeline de conhecimento integrado com extração de documentos', eddi: `${EMBEDDING_PROVIDERS} provedores de embeddings, ${VECTOR_STORES} vector stores, além de RAG via httpCall sem infraestrutura` },
				{ dimension: 'Multiagente', them: 'Agentes e nós de workflow compostos no canvas', eddi: 'Discussões em grupo com 7 estilos, decisões e divergências registradas, aprovação humana opcional por fase' },
				{ dimension: 'Identidade e acesso', them: 'Workspaces; SSO e RBAC por meio do Dify Enterprise', eddi: 'Keycloak/OIDC opcional com os papéis eddi-admin e eddi-approver na versão de código aberto' },
				{ dimension: 'Observabilidade e auditoria', them: 'Logs e monitoramento, integrações com Langfuse, Opik e Arize Phoenix', eddi: 'Métricas Prometheus e um ledger de auditoria assinado com HMAC, somente de acréscimo e com verificação de sequência' },
				{ dimension: 'Implantação', them: 'Dify Cloud, Docker Compose, Enterprise sob consulta', eddi: 'Docker, Helm, Kustomize, OpenShift (imagem certificada pela Red Hat, Operator via OperatorHub)' },
			],
			betterThemTitle: 'Onde o Dify é a melhor escolha',
			betterThem: [
				'Você quer um canvas visual que quem não é engenheiro consiga ler e estender, com retorno rápido durante a construção.',
				'Um marketplace de plugins e templates de workflow prontos economizam tempo real de integração.',
				'Você quer uma opção hospedada (Dify Cloud) e não quer operar nada por conta própria.',
				'Um nó Code é um recurso que você quer: pequenas transformações de dados em Python ou JavaScript dentro do workflow.',
				'Você mantém uma única implantação interna para a sua própria equipe, então a condição de licença sobre multi-tenancy não se aplica a você.',
			],
			betterEddiTitle: 'Onde o EDDI é a melhor escolha',
			betterEddi: [
				'Seu jurídico precisa de uma licença Apache 2.0 simples, inclusive para atender muitos tenants ou clientes a partir de uma implantação.',
				'A revisão de segurança proíbe a execução de código dentro da plataforma de automação, com ou sem sandbox.',
				'Chamadas de ferramentas ou fases de grupo específicas precisam de uma decisão humana, registrada em um ledger assinado.',
				'O comportamento do agente precisa ser versionado, comparado por diff e promovido entre ambientes como configuração.',
				'Você precisa de implantação em Kubernetes, OpenShift ou isolada da internet (air-gapped) com modelos locais.',
			],
			migrationTitle: 'Migrando um app do Dify',
			migrationIntro:
				'Os apps do Dify são grafos visuais e os agentes do EDDI são configuração, então isto é uma tradução, não uma importação. O que exige mais reflexão são os nós Code, que viram configuração ou uma ferramenta declarada.',
			migrationSteps: [
				{ from: 'Chatflow ou workflow', to: 'Agente EDDI: pipeline mais regras de comportamento' },
				{ from: 'Nó LLM e prompt', to: 'Tarefa de LLM com uma mensagem de sistema e snippets de prompt versionados' },
				{ from: 'Base de conhecimento', to: 'Base de conhecimento RAG do EDDI com um provedor de embeddings e uma vector store' },
				{ from: 'Ferramenta, plugin ou servidor MCP', to: 'Conexão de cliente MCP, httpCall ou uma API importada via OpenAPI' },
				{ from: 'Nó Code', to: 'Regras de comportamento e lógica de prompt, ou uma ferramenta MCP se precisar de código de verdade' },
				{ from: 'Nó Human Input', to: 'Regra PAUSE_CONVERSATION ou toolApprovals, com uma política de timeout' },
				{ from: 'Chaves de API dos provedores', to: 'Entradas do Secrets Vault, referenciadas como ${vault:key}' },
			],
			faq: [
				{
					question: 'O Dify é de código aberto?',
					answer:
						'O Dify publica o código-fonte sob a Dify Open Source License, que é a Apache 2.0 com condições adicionais: não é permitido usar o código-fonte para operar um ambiente multi-tenant sem autorização por escrito, nem remover o logotipo ou as informações de copyright do frontend. Isso não é a Apache 2.0 simples que o EDDI usa, então leia a licença com o seu jurídico se alguma das condições puder se aplicar.',
				},
				{
					question: 'O EDDI tem um construtor visual como o Dify?',
					answer:
						'O EDDI Manager é uma interface React de produção para criar, implantar e monitorar agentes, disponível em 11 idiomas. É uma interface de gestão, não um canvas de nós: você configura agentes, prompts, ferramentas e pipelines, e cada alteração é um recurso versionado, não um diagrama.',
				},
				{
					question: 'Por que o EDDI evita um nó de código?',
					answer:
						'Um nó de código em sandbox é um recurso razoável, e o Dify restringe o que ele pode acessar. Mas qualquer execução de código dentro da plataforma é uma superfície de ataque que uma revisão de segurança precisa examinar. O EDDI mantém o comportamento do agente declarativo, de modo que o que uma ferramenta pode fazer é o que você declara e aprova.',
				},
				{
					question: 'Podemos usar o Dify e o EDDI juntos?',
					answer:
						'Sim. O Dify pode usar servidores MCP e APIs personalizadas, e o EDDI expõe um servidor MCP e uma API REST, então um workflow do Dify pode chamar um agente do EDDI como uma etapa governada. O EDDI pode chamar a API do Dify por meio de httpCall.',
				},
			],
		},

		// ─── n8n ──────────────────────────────────────────────────────
		'eddi-vs-n8n': {
			title: 'EDDI vs. n8n',
			description:
				'Como o EDDI se compara ao n8n para orquestração de agentes de IA: modelo de runtime e de concorrência, execução de código e postura de segurança, licenciamento, governança e quando o n8n continua sendo a melhor ferramenta.',
			summary: 'Plataforma de automação de workflows versus middleware de orquestração de IA.',
			verdict:
				'<strong>Escolha o n8n</strong> quando o trabalho é conectar sistemas SaaS e automatizar processos de negócio, e a IA é uma etapa dentro de um workflow maior. <strong>Escolha o EDDI</strong> quando o agente de IA <em>é</em> o produto e precisa passar por uma revisão de segurança corporativa: dados regulados, obrigações de auditoria, isolamento por tenant e pontos de aprovação sobre o que o agente pode fazer.',
			whatItIsTitle: 'O que é o n8n',
			whatItIs:
				'O n8n é uma plataforma de automação de workflows construída em Node.js, com um canvas visual e centenas de integrações prontas. Pode ser hospedado por conta própria, tem uma comunidade grande e realmente ativa, e seus nós baseados em LangChain permitem inserir chamadas de LLM em qualquer workflow. É uma das formas mais rápidas de ligar sistemas entre si.',
			archetypeTitle: 'Categoria diferente, caso de uso em comum',
			archetype:
				'Essas ferramentas não são o mesmo arquétipo. O n8n é uma <strong>plataforma de automação de workflows</strong> em que a IA é um tipo de nó entre muitos. O EDDI é um <strong>middleware de orquestração de IA</strong> em que o agente, a memória, as ferramentas e a governança são o produto. A sobreposição é real, equipes de fato constroem agentes no n8n, mas as duas fazem trocas opostas quando um agente lida com dados regulados.',
			tableTitle: 'Arquitetura e governança',
			tableHeaders: { dimension: 'Dimensão', them: 'n8n', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Runtime', them: 'Event loop de thread única do Node.js', eddi: 'JVM com virtual threads (Project Loom), paralelismo real para chamadas de LLM limitadas por E/S' },
				{ dimension: 'Lógica personalizada', them: 'Os nós Code executam JavaScript ou Python em tempo de execução', eddi: 'Nenhuma avaliação de código em tempo de execução, o comportamento do agente é apenas JSON declarativo' },
				{ dimension: 'Licença', them: 'Sustainable Use License (fair-code), não aprovada pela OSI; termos separados para alguns usos comerciais', eddi: EDDI_LICENSE },
				{ dimension: 'Amplitude de integrações', them: 'Centenas de conectores SaaS prontos, seu maior ativo', eddi: `${MCP_TOOLS} ferramentas MCP e qualquer endpoint OpenAPI ou REST via httpCall` },
				{ dimension: 'Autenticação', them: 'Gerenciamento de usuários integrado; SSO nos planos pagos', eddi: 'Keycloak/OIDC opcional com os papéis eddi-admin e eddi-approver na versão de código aberto' },
				{ dimension: 'Trilha de auditoria', them: 'Histórico de execuções e logs da aplicação', eddi: 'Ledger de auditoria assinado com HMAC, somente de acréscimo e com verificação de sequência' },
				{ dimension: 'Aprovação humana', them: 'Nós Wait e gatilhos manuais dentro de um workflow', eddi: 'Pausa no nível do turno, aprovação por chamada de ferramenta, políticas de timeout, aprovações no Slack, tudo registrado' },
				{ dimension: 'Postura de conformidade', them: 'Implementada por implantação', eddi: `Infraestrutura de GDPR, HIPAA e EU AI Act integrada, ${FRAMEWORKS} frameworks abordados` },
			],
			betterThemTitle: 'Onde o n8n é a melhor escolha',
			betterThem: [
				'A carga de trabalho é automação de negócios em geral, e não IA: sincronizar CRMs, mover arquivos, reagir a webhooks.',
				'Você precisa mais de amplitude de conectores SaaS do que de profundidade de governança de agentes. Nisso o n8n vence com folga.',
				'Uma equipe que não é de engenharia é dona dos workflows e precisa de um canvas visual para raciocinar sobre eles.',
				'Você quer algo funcionando ainda hoje à tarde e os dados envolvidos não são regulados.',
			],
			betterEddiTitle: 'Onde o EDDI é a melhor escolha',
			betterEddi: [
				'O agente toca dados regulados e uma revisão de segurança vai perguntar que código roda no momento da inferência. O EDDI responde: nenhum.',
				'Você precisa de isolamento por tenant, cotas e atribuição de custos entre muitos clientes em uma única implantação.',
				'Uma pessoa precisa aprovar chamadas de ferramentas individuais antes de elas serem executadas, com a aprovação registrada em um ledger assinado.',
				'O comportamento do agente precisa ser mantido sob controle de versão, comparado por diff e promovido entre ambientes como configuração.',
				`O licenciamento precisa ser inequívoco para redistribuição ou implantação isolada da internet (air-gapped): ${EDDI_LICENSE}.`,
			],
			migrationTitle: 'Migrando um workflow do n8n',
			migrationIntro:
				'A maioria dos workflows do n8n com formato de agente se mapeia sem atrito. O que não se mapeia costumam ser os nós Code, o que é justamente o ponto: o que eles fazem precisa virar configuração ou uma ferramenta declarada.',
			migrationSteps: [
				{ from: 'Workflow', to: 'Pacote EDDI: um conjunto versionado de pipeline, prompts e vínculos de ferramentas' },
				{ from: 'Nó HTTP Request', to: 'Definição de ferramenta httpCall, com proteção contra SSRF e contra path traversal aplicada' },
				{ from: 'Nó Code', to: 'Regras de comportamento e snippets de prompt, ou uma ferramenta MCP se precisar de lógica de verdade' },
				{ from: 'Armazenamento de credenciais', to: 'EDDI Secrets Vault (AES-256-GCM), referenciado pela chave do cofre' },
				{ from: 'Nó AI Agent', to: 'Agente EDDI com memória persistente, roteamento por intenção e cascata de modelos' },
				{ from: 'Wait ou gatilho manual', to: 'Ponto de aprovação human-in-the-loop com uma política de timeout' },
			],
			migrationGuideLabel: 'Guia completo: migre um workflow de IA do n8n para o EDDI',
			faq: [
				{
					question: 'O EDDI é um substituto direto do n8n?',
					answer:
						'Não, e não pretende ser. O n8n cobre automação de workflows em geral, em centenas de ferramentas SaaS. O EDDI cobre a orquestração de agentes de IA com governança corporativa. É comum as equipes rodarem os dois: o n8n para a infraestrutura de processos de negócio, o EDDI para os agentes que precisam de trilhas de auditoria e pontos de aprovação.',
				},
				{
					question: 'O EDDI pode chamar o n8n, ou o contrário?',
					answer:
						'Os dois. O EDDI expõe um servidor MCP e uma API REST, então um workflow do n8n pode invocar um agente do EDDI como uma etapa. O EDDI pode chamar um webhook do n8n por meio da ferramenta httpCall. Usar cada um no que faz de melhor é uma arquitetura razoável.',
				},
				{
					question: 'Por que a execução de código em tempo de execução importa tanto?',
					answer:
						'Um nó Code é código arbitrário rodando dentro da sua plataforma de automação. É conveniente, e também é uma classe inteira de vulnerabilidades: fugas de sandbox, injeção por entrada não confiável e escalonamento de privilégios começam ali. O EDDI proíbe de forma categórica a avaliação de código em tempo de execução, então o comportamento do agente é uma configuração JSON que pode ser revisada, comparada por diff e aprovada antes de ir ao ar.',
				},
				{
					question: 'O n8n é de código aberto?',
					answer:
						'O n8n é fair-code, distribuído sob a Sustainable Use License. O código-fonte está disponível e a hospedagem própria é permitida para uso interno, mas não é uma licença de código aberto aprovada pela OSI e alguns usos comerciais exigem termos separados. O EDDI é Apache 2.0. Se o seu jurídico precisa de uma resposta inequívoca sobre redistribuição, essa diferença importa.',
				},
			],
		},

		// ─── Flowise ──────────────────────────────────────────────────
		'eddi-vs-flowise': {
			title: 'EDDI vs. Flowise',
			description:
				'Como o EDDI se compara ao Flowise para criar e operar agentes de LLM: velocidade de prototipagem versus governança de produção, arquitetura de RAG, multi-tenancy e quando o Flowise é a ferramenta certa.',
			summary: 'Velocidade de prototipagem versus superfície de operação em produção.',
			verdict:
				'<strong>Escolha o Flowise</strong> para ter um chatbot de RAG funcionando diante dos stakeholders nesta semana. <strong>Escolha o EDDI</strong> quando esse protótipo precisa se tornar um sistema operado por várias equipes, aprovado por um responsável por conformidade e do qual um cliente depende.',
			whatItIsTitle: 'O que é o Flowise',
			whatItIs:
				'O Flowise é um construtor visual de aplicações com LLMs, com licença Apache 2.0, construído em Node.js e React e que encapsula o LangChain e o LlamaIndex. Você monta chatflows arrastando nós: um loader, um splitter, um modelo de embeddings, uma vector store, uma chain. Para ir do zero a um chatbot de recuperação funcionando, pouca coisa é mais rápida.',
			archetypeTitle: 'Velocidade de prototipagem versus superfície de operação',
			archetype:
				'O Flowise e o EDDI visam momentos diferentes de um projeto. O Flowise otimiza a primeira semana: montagem visual, retorno imediato, um template para a maioria dos padrões comuns. O EDDI otimiza tudo o que vem depois: quem pode alterar o agente, o que ele tem permissão de fazer, o que acontece quando ele reinicia e como você prova qualquer uma dessas coisas a um auditor. Muitas equipes devem mesmo começar no Flowise.',
			tableTitle: 'Do protótipo à produção',
			tableHeaders: { dimension: 'Dimensão', them: 'Flowise', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Abstração principal', them: 'Canvas visual de chatflow, grafo de nós serializado em JSON', eddi: 'Config-as-code: recursos JSON criados em uma interface ou API, versionados como código-fonte' },
				{ dimension: 'Runtime', them: 'Event loop do Node.js', eddi: 'JVM com virtual threads, feita para muitas conversas simultâneas limitadas por E/S' },
				{ dimension: 'Licença', them: 'Apache 2.0, a mesma do EDDI', eddi: EDDI_LICENSE },
				{ dimension: 'RAG', them: 'Ampla seleção de loaders e vector stores, configurada por fluxo', eddi: `${EMBEDDING_PROVIDERS} provedores de embeddings, ${VECTOR_STORES} vector stores, além de RAG via httpCall sem infraestrutura` },
				{ dimension: 'Lógica personalizada', them: 'Os nós Custom Function e Tool executam JavaScript em tempo de execução', eddi: 'Nenhuma avaliação de código em tempo de execução; a lógica é declarada, não executada' },
				{ dimension: 'Multi-tenancy', them: 'Workspaces na edição enterprise', eddi: 'Cotas por tenant, atribuição de custos e isolamento de dados na versão de código aberto' },
				{ dimension: 'Memória', them: 'Buffers de conversa e integrações com armazenamentos externos', eddi: 'Memória persistente do usuário, consolidação onírica (dream consolidation), resumos contínuos, janelamento consciente de tokens' },
				{ dimension: 'Trilha de auditoria', them: 'Traces de execução, voltados à depuração', eddi: 'Ledger assinado com HMAC e somente de acréscimo, voltado a servir de evidência' },
				{ dimension: 'Implantação', them: 'Docker, normalmente uma única instância', eddi: 'Docker, Helm, Kustomize e OpenShift (imagem certificada pela Red Hat, Operator via OperatorHub)' },
			],
			betterThemTitle: 'Onde o Flowise é a melhor escolha',
			betterThem: [
				'Você está validando se uma ideia funciona. Para explorar, a montagem visual vence a autoria de configuração.',
				'A equipe pensa em diagramas e quer ver o pipeline de recuperação disposto no espaço.',
				'É uma ferramenta interna de uma equipe, sem requisitos de multi-tenancy, auditoria ou aprovação.',
				'Você quer testar cinco estratégias de recuperação antes do almoço.',
			],
			betterEddiTitle: 'Onde o EDDI é a melhor escolha',
			betterEddi: [
				'O chatbot virou um produto e agora precisa de SLAs, multi-tenancy e alguém responsável pelas mudanças.',
				'Engenheiros de prompt precisam iterar sem nova implantação, enquanto a operação mantém o controle do que vai ao ar.',
				'As conversas precisam sobreviver a reinicializações e ser reconstituíveis meses depois para um regulador.',
				'Uma pessoa precisa aprovar chamadas de ferramentas específicas antes de o agente agir com base nelas.',
				`O destino da implantação é Kubernetes ou uma infraestrutura isolada da internet (air-gapped), e ela precisa ser comprovadamente reproduzível. ${TESTS} testes rodam a cada merge.`,
			],
			migrationTitle: 'Migrando um chatflow do Flowise',
			migrationIntro:
				'Os chatflows do Flowise já são JSON e os conceitos se alinham de perto, então esta costuma ser a mais mecânica das migrações.',
			migrationSteps: [
				{ from: 'Chatflow', to: 'Pacote EDDI, exportável como ZIP com os segredos removidos automaticamente' },
				{ from: 'Document loaders e splitters', to: 'Configuração de ingestão de documentos do RAG do EDDI' },
				{ from: 'Nó de vector store', to: `Uma das ${VECTOR_STORES} vector stores suportadas, selecionada por configuração` },
				{ from: 'Nó de embeddings', to: `Um dos ${EMBEDDING_PROVIDERS} provedores de embeddings` },
				{ from: 'Nó de chat model', to: `Configuração de LLM entre ${LLM_PROVIDERS} provedores, com cascata de modelos disponível` },
				{ from: 'Nó Custom Function', to: 'Regras de comportamento, snippets de prompt ou uma ferramenta MCP declarada' },
				{ from: 'Nó de memória', to: 'Memória persistente do EDDI com política de memória baseada em commit-flag' },
			],
			migrationGuideLabel: 'Guia completo: migre um chatflow do Flowise para o EDDI',
			faq: [
				{
					question: 'Devemos prototipar no Flowise e depois migrar para o EDDI?',
					answer:
						'É um caminho defensável e comum. O Flowise responde se uma estratégia de recuperação funciona; o EDDI responde se você consegue operá-la com segurança por três anos. Planeje a mudança antes de o protótipo ter usuários em produção, porque a migração é mais fácil do que a conversa sobre indisponibilidade.',
				},
				{
					question: 'Os dois são Apache 2.0. O que realmente muda?',
					answer:
						'A licença é a mesma; a superfície de operação, não. O EDDI traz OIDC/Keycloak opcional, um ledger de auditoria assinado, cotas por tenant e aprovação human-in-the-loop na versão de código aberto, em vez de atrás de uma camada enterprise.',
				},
				{
					question: 'O EDDI tem um construtor visual?',
					answer:
						'O EDDI Manager é uma interface React de produção para criar, implantar e monitorar agentes, disponível em 11 idiomas. É uma interface de gestão, não um canvas de nós: você configura agentes, prompts, ferramentas e pipelines, e cada alteração é um recurso versionado, não um diagrama.',
				},
			],
		},

		// ─── Rasa ─────────────────────────────────────────────────────
		'eddi-vs-rasa': {
			title: 'EDDI vs. Rasa',
			description:
				'Como o EDDI se compara ao Rasa para IA conversacional: NLU treinado e diálogo determinístico versus orquestração de LLMs, config-as-code, colaboração multiagente e quando o Rasa é a opção mais adequada.',
			summary: 'NLU treinado e diálogo determinístico versus orquestração de LLMs com config-as-code.',
			verdict:
				'<strong>Escolha o Rasa</strong> quando você precisa de um diálogo rigidamente controlado sobre um conjunto fixo de intenções, tem dados de treinamento rotulados e uma equipe de ML em Python para manter tudo. <strong>Escolha o EDDI</strong> quando o assistente precisa raciocinar sobre conhecimento que muda mais rápido do que um ciclo de retreinamento, chamar sistemas corporativos e ser governado por configuração, e não retreinado.',
			whatItIsTitle: 'O que é o Rasa',
			whatItIs:
				'O Rasa é um framework maduro de IA conversacional: classificação de intenções e extração de entidades por meio de um pipeline de NLU treinado, mais gerenciamento de diálogo por regras, stories e políticas. É nativo em Python, pode ser hospedado por conta própria e há anos é a resposta padrão para assistentes de atendimento ao cliente roteirizados e de alto volume. O Rasa Pro acrescenta camadas comerciais, incluindo diálogo conduzido por LLM.',
			archetypeTitle: 'O mesmo problema, outra geração de solução',
			archetype:
				'O EDDI e o Rasa vêm do mundo da IA conversacional, e o EDDI está em desenvolvimento contínuo como plataforma conversacional desde 2006. A diferença está em onde fica a inteligência. O Rasa a coloca em um modelo que você treina com os seus próprios dados rotulados, o que dá um controle preciso e repetível. O EDDI a coloca em LLMs orquestrados e governados por configuração declarativa, trocando um pouco de determinismo por alcance e velocidade de mudança.',
			tableTitle: 'Diálogo, ferramentas e o custo da mudança',
			tableHeaders: { dimension: 'Dimensão', them: 'Rasa', eddi: 'EDDI' },
			rows: [
				{ dimension: 'Compreensão', them: 'NLU treinado: classificação de intenções e extração de entidades a partir de dados rotulados', eddi: 'Compreensão por LLM mais descoberta e roteamento de agentes baseados em intenção' },
				{ dimension: 'Mudança de comportamento', them: 'Atualizar os dados de treinamento, retreinar, avaliar, reimplantar', eddi: 'Editar a configuração JSON; sem retreinamento e sem nova implantação' },
				{ dimension: 'Determinismo', them: 'Alto. Regras e políticas tornam os fluxos repetíveis e testáveis', eddi: 'Menor por natureza, recuperado por meio de regras de comportamento e pontos de aprovação' },
				{ dimension: 'Linguagem', them: 'Python; as ações personalizadas são código Python', eddi: 'Runtime JVM; a lógica do agente é configuração, as ferramentas são declaradas' },
				{ dimension: 'Ecossistema de ferramentas', them: 'Um servidor de ações personalizado que você constrói e hospeda', eddi: `${MCP_TOOLS} ferramentas MCP, ferramentas de agente integradas e qualquer endpoint OpenAPI` },
				{ dimension: 'Multiagente', them: 'Um assistente por implantação é o padrão comum', eddi: 'Orquestração baseada em coordenador e 7 estilos de discussão em grupo' },
				{ dimension: 'Licenciamento', them: 'Edição community mais camadas do Rasa Pro com licença comercial; verifique os termos atuais', eddi: EDDI_LICENSE },
				{ dimension: 'Conformidade', them: 'A hospedagem própria permite residência de dados; frameworks implementados por implantação', eddi: `Ledger de auditoria, API de direitos do titular dos dados e ${FRAMEWORKS} frameworks abordados na plataforma` },
			],
			betterThemTitle: 'Onde o Rasa é a melhor escolha',
			betterThem: [
				'Você já tem dados conversacionais rotulados e uma equipe de ML capaz de manter um pipeline de NLU.',
				'Restrições regulatórias ou de marca exigem um assistente determinístico, com um caminho de decisão auditável que não envolva um modelo de linguagem.',
				'Volume muito alto sobre um conjunto estreito de intenções, em que o custo de LLM por turno dominaria.',
				'Você precisa de controle fino sobre limiares de confiança da classificação e sobre o comportamento de fallback.',
			],
			betterEddiTitle: 'Onde o EDDI é a melhor escolha',
			betterEddi: [
				'O assistente precisa responder a partir de documentos e sistemas que mudam mais rápido do que um ciclo de retreinamento.',
				'Usuários de negócio precisam alterar o comportamento sem um engenheiro de ML, uma rodada de treinamento ou uma implantação.',
				'O problema exige que vários agentes especializados colaborem, em vez de uma única árvore plana de intenções.',
				'Você quer a flexibilidade de um LLM, mas um responsável por conformidade exige pontos de aprovação e logs assinados antes de ir ao ar.',
				`Você quer evitar dependência no nível do modelo: ${LLM_PROVIDERS} provedores, ou um modelo local com Ollama ou Jlama.`,
			],
			migrationTitle: 'Migrando um assistente do Rasa',
			migrationIntro:
				'O mapeamento é conceitual, e não mecânico, porque os dois situam a inteligência em lugares diferentes. Espere traduzir a estrutura de intenções em roteamento e prompts, em vez de converter arquivos.',
			migrationSteps: [
				{ from: 'Intenções e exemplos de treinamento', to: 'Descoberta de agentes baseada em intenção; os dados rotulados passam a ser material de avaliação, e não de treinamento' },
				{ from: 'Entidades e slots', to: 'Extração estruturada mais memória persistente do usuário' },
				{ from: 'Stories e regras', to: 'Regras de comportamento e configuração de pipeline' },
				{ from: 'Servidor de ações personalizado', to: 'Ferramentas MCP ou definições de ferramentas httpCall' },
				{ from: 'Respostas e arquivo de domínio', to: 'Snippets de prompt, reutilizáveis e versionados' },
				{ from: 'Política de fallback', to: 'Escalonamento human-in-the-loop com uma política de timeout' },
			],
			faq: [
				{
					question: 'O EDDI é só mais um wrapper de LLM que substitui o NLU treinado?',
					answer:
						'O EDDI é desenvolvido como plataforma conversacional desde 2006, bem antes da atual geração de LLMs, e manteve o que importava: roteamento baseado em intenção, estado de conversa gerenciado e arquitetura de pipeline. Os LLMs substituíram a camada de compreensão, não a orquestração ao redor dela.',
				},
				{
					question: 'Precisamos de respostas determinísticas por conformidade. Isso exclui o EDDI?',
					answer:
						'Não necessariamente, mas a troca deve ser explícita. A saída de um LLM não é determinística. O EDDI lida com isso com regras de comportamento que restringem as respostas, pontos de aprovação humana em ações relevantes e um ledger de auditoria assinado que registra o que foi decidido e por quê. Se o seu requisito é que nenhum modelo de linguagem participe da decisão, o Rasa é a melhor resposta.',
				},
				{
					question: 'Podemos rodar os dois durante uma transição?',
					answer:
						'Sim. Um padrão comum encaminha as intenções conhecidas de alto volume para o assistente Rasa existente, enquanto o EDDI atende as consultas abertas e a integração com sistemas, e depois desloca o tráfego conforme a confiança cresce. O EDDI pode chamar um endpoint do Rasa por meio de httpCall.',
				},
			],
		},
	},
};

export default copy;
