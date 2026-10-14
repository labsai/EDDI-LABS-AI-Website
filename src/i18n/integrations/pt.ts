/**
 * Catálogo de integrações, português (Brasil). Traduzido de ./en.ts; mantenha as chaves idênticas.
 * As strings marcadas como HTML são renderizadas com set:html, portanto só aparecem <code> e <a>.
 */
import { MCP_TOOLS, VECTOR_STORES } from '../stats';
import type { IntegrationsCopy } from './en';

const copy: IntegrationsCopy = {
	ui: {
		title: 'Integrações',
		metaTitle: 'Integrações do EDDI: Slack, MCP, OpenAPI, SAP, armazenamentos vetoriais e Kubernetes',
		description:
			'Como o EDDI se conecta ao Slack, Open WebUI, Keycloak, MCP e A2A, a qualquer API REST via OpenAPI, ao SAP por meio de suas APIs, a seis armazenamentos vetoriais, Kubernetes, OpenShift e Ollama. Cada página traz a configuração real.',
		heroTitle: 'Integrações do',
		heroHighlight: 'EDDI',
		heroDesc:
			'Canais, identidade, protocolos de agentes, sistemas corporativos, armazenamentos vetoriais e infraestrutura. Cada página mostra o que você recebe, como funciona no EDDI, a configuração real e como a integração é governada: aprovações, o registro de auditoria e o cofre de segredos.',
		filterLabel: 'Filtrar integrações por categoria',
		filterAll: 'Todas',
		searchLabel: 'Buscar integrações',
		searchPlaceholder: 'Buscar, por exemplo Slack, SAP ou pgvector',
		noResults: 'Nenhuma integração corresponde. Tente outra palavra ou limpe o filtro.',
		notCoveredNote:
			'O EDDI não inclui canais para Microsoft Teams, Telegram, WhatsApp ou Discord, não envia e-mail por conta própria e não tem webhooks de entrada genéricos. Ainda assim, qualquer sistema com uma API pode ser acessado pela <a href="/integrations/openapi/">importação de OpenAPI</a>, por chamadas HTTP ou por <a href="/integrations/mcp-client/">MCP</a>.',
		backToCatalog: 'Todas as integrações',
		whatYouGet: 'O que você recebe',
		howItWorks: 'Como funciona no EDDI',
		configTitle: 'Configuração',
		configDesc: 'Extraída da documentação do EDDI. Marcadores como your-agent-id devem ser substituídos pelos seus próprios valores.',
		governanceTitle: 'Governança',
		goodToKnowTitle: 'Bom saber',
		linksTitle: 'Documentação e guias',
		docsLink: 'Documentação',
		guidesLabel: 'Guia',
		relatedTitle: 'Integrações relacionadas',
		getStarted: 'Começar',
		modelsLinkText: 'Explorar o catálogo de modelos',
		solutionsTitle: 'Precisa que construam e operem isso para você?',
		solutionsDesc: 'A EDDI Solutions constrói e mantém conectores, opera o EDDI como instância gerenciada ou co-operada e oferece suporte na sua própria nuvem ou on-premises.',
		solutionsBtn: 'Fale com a EDDI Solutions',
		sourcesDesc: 'A configuração e o comportamento desta página seguem a documentação do EDDI, verificada em {date}. Nomes de campos e valores padrão podem mudar entre versões, portanto confirme-os na documentação da sua versão.',
		copy: 'Copiar',
		copied: 'Copiado',
		pageTitle: '{name} no EDDI',
		pageDescription: '{name}: {summary}',
		ctaTitle: 'Não encontrou o seu sistema?',
		ctaDesc: 'Descreva-o para nós ou comece pelo caminho do <a href="/integrations/openapi/">OpenAPI</a>. Se ele tem uma API, um agente pode chamá-la, com aprovações e uma trilha de auditoria.',
	},
	categories: {
		channels: 'Canais',
		identity: 'Identidade e segurança',
		protocols: 'Protocolos de agentes',
		enterprise: 'Sistemas corporativos',
		data: 'Dados e RAG',
		infrastructure: 'Infraestrutura',
	},
	integrations: {
		slack: {
			summary: 'Agentes de IA governados no Slack: menções, mensagens diretas, threads, discussões em grupo transmitidas em uma thread e cartões de aprovação do Block Kit com os botões Aprovar e Rejeitar.',
			gets: [
				'Agentes que respondem a @menções e mensagens diretas, com as respostas seguintes mantidas na thread',
				'Palavras-chave de ativação que encaminham uma mensagem a um agente específico ou a uma discussão em grupo multiagente',
				'Discussões em grupo transmitidas em uma thread conforme acontecem',
				'Cartões de aprovação no Slack para turnos pausados, chamadas de ferramentas e fases de grupo, com uma lista de aprovadores permitidos',
				'Vários workspaces do Slack em um único EDDI',
			],
			steps: [
				'Crie um app do Slack e adicione os escopos do token de bot listados na documentação (<code>chat:write</code>, <code>app_mentions:read</code>, os escopos <code>history</code> e <code>im:*</code>).',
				'Guarde o token do bot e o segredo de assinatura no cofre de segredos do EDDI e depois referencie-os como <code>${vault:...}</code>.',
				'Crie uma integração de canal que associe o canal do Slack a um agente padrão e, opcionalmente, a grupos atrás de palavras-chave de ativação como <code>panel:</code>.',
				'Defina a Request URL como <code>https://&lt;your-eddi-host&gt;/integrations/slack/events</code> e assine <code>app_mention</code>, <code>message.im</code> e <code>message.channels</code>. Faça isso por último: o Slack verifica a URL imediatamente.',
				'Para aprovações, defina a Interactivity Request URL como <code>/integrations/slack/interactive</code> e liste os aprovadores em <code>hitlApproverUserIds</code>.',
			],
			captions: [
				'As credenciais vão para o cofre, não para a configuração do agente ou do canal.',
				'Uma integração de canal com um agente padrão, um grupo atrás de palavras-chave de ativação e as configurações de aprovação em platformConfig.',
			],
			governance: [
				'Os cartões de aprovação têm os botões Aprovar e Rejeitar. Somente os usuários do Slack listados em <code>hitlApproverUserIds</code> podem decidir. Sem essa lista, nenhum botão é exibido e as decisões interativas são recusadas (fail-closed).',
				'Um cartão de chamada de ferramenta mostra o nome da ferramenta e seus argumentos redigidos e truncados, para que o aprovador veja o que está aprovando. Na versão 1, os botões aprovam ou rejeitam o lote inteiro.',
				'Cada decisão é atribuída a <code>slack:&lt;userId&gt;</code> e registrada no registro de auditoria.',
				'Os eventos recebidos são verificados com o segredo de assinatura (HMAC-SHA256) e proteção contra repetição, e os próprios segredos permanecem no cofre.',
			],
			goodToKnow: [
				'O Slack é a única plataforma de chat de terceiros para a qual o EDDI inclui um canal. Veja a nota na página do catálogo para saber o que não está incluído.',
				'Um modo de observação opcional permite que um destino veja o tráfego comum do canal, atrás de uma ativação, de um intervalo de espera e de limites diários de respostas e de custo. Esses limites valem por nó do EDDI.',
			],
		},
		'open-webui': {
			summary: 'O EDDI oferece uma API /v1 compatível com a OpenAI que apresenta os agentes implantados como modelos, de modo que Open WebUI, os SDKs da OpenAI, LangChain e LiteLLM podem conversar com eles.',
			gets: [
				'Os agentes do EDDI implantados no menu de modelos do Open WebUI',
				'Chat Completions com streaming e relatório de uso de tokens',
				'Uma conversa do EDDI por chat, de modo que a memória e as Behavior Rules persistem entre os turnos',
				'Uma variante sem estado (um id de modelo <code>:stateless</code>) para chamadas de um único turno, como a geração de títulos',
			],
			steps: [
				'Ative o adaptador com <code>EDDI_OPENAI_COMPAT_ENABLED=true</code> e defina uma chave de API. Ele vem desativado por padrão.',
				'Implante um agente no EDDI. Ele aparece em <code>GET /v1/models</code>.',
				'Aponte o Open WebUI (ou um SDK) para <code>http://&lt;eddi&gt;:7070/v1</code> com a mesma chave de API.',
				'Ative <code>ENABLE_FORWARD_USER_INFO_HEADERS</code> no Open WebUI. Sem isso, todas as janelas de chat compartilham uma única conversa do EDDI.',
				'Escolha o agente na lista de modelos e converse.',
			],
			captions: [
				'Um trecho de compose no formato de produção, da documentação do EDDI. Troque a chave de API de exemplo.',
				'Verifique o endpoint pelo shell. Defina EDDI_API_KEY com o mesmo valor do arquivo compose.',
			],
			governance: [
				'A API tem sua própria autenticação por chave de API e fica desligada até você ativá-la. O EDDI se recusa a iniciar na única combinação que deixaria a criação de conversas aberta a qualquer um que alcance a porta.',
				'O agente mantém seus próprios portões de aprovação e sua trilha de auditoria. Uma requisição via /v1 é uma conversa comum do EDDI.',
				'Uma chave de API compartilhada mais cabeçalhos de usuário delega a identidade ao Open WebUI como proxy confiável. Trate a chave como qualquer segredo compartilhado e faça a rotação dela.',
			],
			goodToKnow: [
				'Somente agentes individuais aparecem como modelos, não grupos multiagente.',
				'Respostas rápidas e botões são renderizados como texto Markdown, não como controles interativos.',
				'As chamadas de ferramentas não são devolvidas ao cliente. O EDDI executa suas ferramentas dentro do próprio pipeline, e a atividade das ferramentas continua visível no registro de auditoria.',
			],
		},
		'web-chat': {
			summary: 'Uma interface de chat em React com temas, servida pelo próprio EDDI, com respostas em streaming, Markdown, respostas rápidas e desfazer, que você pode abrir diretamente ou incorporar em uma página.',
			gets: [
				'Uma página de chat para cada agente implantado em /chat/{environment}/{agentId}',
				'Streaming token a token, Markdown rico, destaque de código e matemática em LaTeX',
				'Temas escuro e claro, botões de resposta rápida, e desfazer e refazer',
				'Parâmetros de URL para ocultar controles e definir o título, para um widget incorporado e focado',
				'Um modo de demonstração que não precisa de backend',
			],
			steps: [
				'Execute o EDDI. A interface de chat já vem dentro da imagem do EDDI e o instalador a inclui.',
				'Abra <code>/chat/&lt;environment&gt;/&lt;agentId&gt;</code> no seu host do EDDI.',
				'Ajuste-a com parâmetros de URL como <code>theme</code>, <code>title</code>, <code>hideUndo</code> e <code>hideNewConversation</code>.',
				'Para incorporá-lo, permita a origem do seu site com <code>eddi.chat.frame-ancestors</code> (padrão <code>\'none\'</code>) e depois coloque a mesma URL em um iframe na sua página.',
			],
			captions: [
				'Os padrões de URL que a interface de chat serve.',
				'Um widget incorporado, do README da interface de chat. Combine os parâmetros de exibição conforme necessário.',
				'Por padrão, o chat recusa ser exibido em um frame. Defina esta propriedade, ou a variável de ambiente EDDI_CHAT_FRAME_ANCESTORS, com a origem do site que o incorpora (separe várias origens com espaços).',
			],
			governance: [
				'O chat usa a mesma API de conversa que qualquer outro cliente, portanto as Behavior Rules, os portões de aprovação e o registro de auditoria se aplicam sem alterações.',
				'Com a autenticação ativada, o widget precisa de um token de acesso do usuário conectado, e o backend o verifica a cada chamada.',
				'Trate qualquer texto produzido por um agente como saída não confiável. A interface de chat renderiza o Markdown gerado pelo agente.',
			],
			goodToKnow: [
				'Incorporar o chat em outro site exige definir <code>eddi.chat.frame-ancestors</code> com a origem desse site. Até lá, os navegadores se recusam a exibi-lo em um frame. Todo o resto que o EDDI serve recusa ser incorporado.',
			],
		},
		'keycloak-oidc': {
			summary: 'Coloque a autenticação OpenID Connect na frente do EDDI com Keycloak ou outro provedor OIDC, com papéis para administradores, editores, usuários, leitores e aprovadores.',
			gets: [
				'Login no Manager e na API pelo seu provedor de identidade',
				'Papéis: <code>eddi-admin</code>, <code>eddi-editor</code>, <code>eddi-user</code>, <code>eddi-viewer</code> e <code>eddi-approver</code> para as decisões de aprovação',
				'Um realm <code>eddi</code> pronto que o instalador importa para o Keycloak',
				'Chamadas que agem como o usuário conectado, de modo que a trilha de auditoria cita uma pessoa real',
			],
			steps: [
				'Execute o instalador com <code>--with-auth</code>. Ele inicia o Keycloak e importa o realm <code>eddi</code> na primeira inicialização.',
				'Defina uma senha para o usuário <code>eddi</code> no console de administração do Keycloak. O realm incluído não traz nenhuma.',
				'Entre no Manager. Conceda às pessoas os papéis de que precisam e adicione os aprovadores a <code>eddi-approver</code>.',
				'Para um provedor de identidade existente, defina as variáveis <code>QUARKUS_OIDC_*</code> (tenant habilitado, URL do servidor de autenticação, id do cliente, segredo do cliente).',
				'Em uma chamada HTTP, use <code>${caller:token}</code> para chamar uma API com o token do próprio usuário conectado, em vez de uma credencial compartilhada.',
			],
			captions: [
				'Opção do instalador que adiciona o Keycloak.',
				'Variáveis de ambiente para um provedor OIDC externo, da documentação do EDDI.',
			],
			governance: [
				'No modo de execução de produção, o EDDI se recusa a iniciar com o OIDC desativado, a menos que você opte por isso explicitamente, de modo que uma API de gerenciamento aberta é uma decisão e não um acidente.',
				'Os endpoints de aprovação exigem o papel <code>eddi-approver</code>, ou ser o proprietário ou um <code>eddi-admin</code>.',
				'Com <code>${caller:token}</code>, a trilha de auditoria registra o usuário real. Uma credencial estática compartilhada reduziria todas as ações a um único principal.',
			],
			goodToKnow: [
				'A autenticação é opcional e vem desativada por padrão. O Keycloak é o que o instalador provisiona. Outros provedores OIDC usam as mesmas configurações, e alguns detalhes (por exemplo, o endpoint de token anunciado para A2A) assumem caminhos do Keycloak, a menos que você os defina.',
				'A importação do realm incluído acontece uma única vez. Edições posteriores no JSON não chegam a um Keycloak em execução.',
			],
		},
		'secrets-vault': {
			summary: 'Um cofre de segredos integrado com criptografia de envelope. A configuração referencia os segredos como ${vault:keyName}, e o valor nunca chega às configurações de agentes, às exportações nem aos logs.',
			gets: [
				'Referências <code>${vault:keyName}</code> na configuração de LLM, chamadas HTTP, MCP e RAG',
				'Criptografia de envelope AES-256-GCM com uma chave de dados por tenant',
				'Permissões por agente: quais agentes podem usar qual segredo',
				'Segredos removidos das exportações de configuração e redigidos nos logs',
			],
			steps: [
				'Defina a chave mestra do cofre (<code>EDDI_VAULT_MASTER_KEY</code>). O instalador gera uma para você. Sem uma chave, o cofre fica desativado.',
				'Guarde um segredo com <code>PUT /secretstore/secrets/{tenantId}/{keyName}</code> ou pelo Manager.',
				'Referencie-o na configuração como <code>${vault:keyName}</code>.',
				'O EDDI resolve a referência em tempo de execução. O texto puro não é armazenado na memória da conversa.',
				'Restrinja <code>allowedAgents</code> aos agentes que precisam do segredo. A verificação roda quando um agente é implantado.',
			],
			captions: [
				'Guardar um segredo. A resposta nunca devolve o valor.',
				'Referenciar o segredo pelo nome a partir de uma tarefa de LLM.',
				'Mudar quem pode usar um segredo sem tocar no valor dele.',
			],
			governance: [
				'As permissões são aplicadas no momento da implantação por padrão: um agente que referencia um segredo para o qual não tem permissão não é implantado.',
				'Uma referência ao cofre que chega por dados da conversa, como a entrada do usuário ou a resposta de um modelo, é recusada em vez de resolvida.',
				'O texto puro é redigido no registro da requisição, na pré-visualização da aprovação e na linha do log de requisições.',
				'Os endpoints do cofre ficam atrás do papel <code>eddi-admin</code> quando a autenticação está ativada.',
			],
			goodToKnow: [
				'O EDDI não tem cliente nativo de HashiCorp Vault, AWS ou Azure. No Kubernetes, o External Secrets Operator pode sincronizar o Secret do Kubernetes <code>eddi-secrets</code> (que guarda a chave mestra do cofre) a partir do HashiCorp Vault, do AWS Secrets Manager ou do Azure Key Vault. Os segredos individuais continuam no cofre do EDDI.',
				'Se a chave mestra for perdida, os segredos criptografados serão irrecuperáveis. Faça backup dela.',
			],
		},
		'mcp-server': {
			summary: `Controle o EDDI a partir do Claude Desktop, Cursor, VS Code e outros clientes MCP. O EDDI expõe ${MCP_TOOLS} ferramentas MCP via Streamable HTTP para conversas e administração.`,
			gets: [
				`${MCP_TOOLS} ferramentas: listar agentes e conversar com eles, criá-los e implantá-los, gerenciar grupos, agendamentos e mais`,
				'Um único endpoint, <code>/mcp</code>, com Streamable HTTP',
				'Funciona com clientes que falam HTTP diretamente e, por meio de uma ponte, com clientes que só aceitam stdio',
				'Acesso baseado em papéis quando a autenticação está ativada',
			],
			steps: [
				'Execute o EDDI. O endpoint MCP é <code>http://localhost:7070/mcp</code>.',
				'Adicione o EDDI ao seu cliente MCP. Clientes com suporte a HTTP usam a URL diretamente.',
				'Para clientes que só aceitam stdio, como o Claude Desktop, use a ponte <code>mcp-remote</code> como mostrado.',
				'Peça ao assistente para listar agentes, iniciar uma conversa ou criar um agente. O fluxo documentado é <code>list_agents</code>, <code>create_conversation</code>, <code>talk_to_agent</code>.',
				'Com o OIDC ativado, forneça ao cliente um token bearer.',
			],
			captions: [
				'Para clientes com transporte HTTP nativo.',
				'Para clientes que só aceitam stdio. No Windows, envolva o comando com cmd /c se o npx não estiver no PATH.',
			],
			governance: [
				'Ferramentas de escrita como <code>setup_agent</code> e <code>create_api_agent</code> exigem o papel <code>eddi-editor</code>.',
				'A ferramenta MCP <code>create_api_agent</code> deliberadamente não consegue definir um portão de aprovação. Provisionar um agente com portões é feito por REST com <code>eddi-admin</code>.',
				'Fases de grupo que aguardam aprovação podem ser aprovadas por MCP, além do Manager, do REST e do Slack, e toda decisão é auditada.',
			],
			goodToKnow: [
				'A inicialização em produção se recusa a rodar com o OIDC desativado, a menos que você opte por isso, e uma instância com essa opção deixa <code>/mcp</code> aberto a qualquer um que alcance a porta.',
			],
		},
		'mcp-client': {
			summary: 'Dê aos agentes do EDDI as ferramentas de servidores MCP externos. As ferramentas de um servidor se tornam ferramentas do agente, atrás dos mesmos portões de aprovação e da mesma trilha de auditoria de qualquer outra ferramenta.',
			gets: [
				'Ferramentas de qualquer servidor MCP que fale Streamable HTTP',
				'Listas de nomes permitidos e negados para manter curta a lista de ferramentas',
				'Listagem e leitura de recursos opcionais',
				'Um circuit breaker que para de chamar um servidor com falhas',
			],
			steps: [
				'Crie uma configuração <code>mcpcalls</code> com a URL do servidor, o transporte <code>http</code> e uma chave de API como referência <code>${vault:...}</code>.',
				'Referencie-a como um passo do workflow (<code>eddi://ai.labs.mcpcalls</code>).',
				'A tarefa de LLM do agente descobre as ferramentas do servidor automaticamente (<code>enableMcpCallTools</code> é true por padrão).',
				'Adicione as ferramentas a <code>toolApprovals</code> para que chamadas de consequência aguardem uma pessoa.',
				'Para um servidor que só aceita stdio, execute-o em seu próprio contêiner atrás de uma ponte HTTP e aponte o EDDI para a ponte.',
			],
			captions: [
				'Uma configuração mcpcalls. O token é uma referência ao cofre.',
				'Colocar portão em todas as ferramentas MCP, exceto as somente leitura.',
			],
			governance: [
				'As chamadas de ferramentas MCP participam do mesmo portão de aprovação com intervenção humana de qualquer outra fonte de ferramentas.',
				'As descrições das ferramentas são redigidas quando contêm texto em forma de diretiva e têm tamanho limitado. Os resultados das ferramentas são envolvidos com a procedência e, por padrão, o conteúdo em forma de diretiva é redigido.',
				'Uma lista de ferramentas permitidas serve para gerenciar o contexto, não é uma fronteira de segurança. A fronteira é a credencial que você dá à conexão mais o portão de aprovação.',
				'Toda decisão com portão é gravada no registro de auditoria.',
			],
			goodToKnow: [
				'O EDDI implementa um único transporte MCP, o Streamable HTTP. Ele não inicia servidores stdio por conta própria, porque um comando editável por configuração seria execução arbitrária de código com o usuário do processo do EDDI. Use um sidecar com ponte.',
				'Um circuit breaker abre após 3 falhas em 60 segundos, então uma ferramenta ausente normalmente significa que o servidor está falhando.',
			],
		},
		a2a: {
			summary: 'Exponha agentes do EDDI a outros agentes por meio de Agent Cards e JSON-RPC, e use agentes A2A remotos como ferramentas dentro dos seus próprios agentes.',
			gets: [
				'Um Agent Card para cada agente que você habilitar, listando suas habilidades',
				'Um endpoint JSON-RPC 2.0 com <code>tasks/send</code>, <code>tasks/get</code> e <code>tasks/cancel</code>',
				'Agentes A2A remotos incorporados ao ciclo de chamada de ferramentas ao lado das ferramentas integradas, MCP e HTTP',
				'Filtros de habilidades para expor apenas parte de um agente remoto',
			],
			steps: [
				'Habilite um agente com <code>a2aEnabled: true</code>, uma descrição e as habilidades a anunciar.',
				'Os pares obtêm o card em <code>/a2a/agents/{agentId}/agent.json</code> e chamam <code>POST /a2a/agents/{agentId}</code>.',
				'Para consumir um agente remoto, liste-o em <code>a2aAgents</code> em uma tarefa de LLM, com a URL e uma chave de API referenciada do cofre.',
				'O EDDI lê o card remoto, transforma cada habilidade em uma ferramenta chamada <code>{agentName}_{skillId}</code> e a invoca com <code>tasks/send</code>.',
			],
			captions: [
				'Expor um agente. O A2A é opcional por agente.',
				'Consumir um agente remoto. A chave de API deve ser uma referência ao cofre.',
			],
			governance: [
				'Os Agent Cards são anônimos por projeto, para que um par possa descobrir um agente antes de ter credenciais. Com a autenticação ativada, tanto a listagem de agentes quanto o endpoint JSON-RPC exigem um token.',
				'As ferramentas de um agente remoto passam pelos mesmos portões de aprovação e proteções de resultado de ferramentas das outras fontes de ferramentas, e a chave de API permanece no cofre.',
				'<code>tasks/send</code> executa uma conversa no seu orçamento de LLM, e é por isso que não é anônimo.',
			],
			goodToKnow: [
				'Com a autenticação ativada, o card anuncia um endpoint de token. O EDDI deduz um caminho no estilo Keycloak, a menos que você defina <code>eddi.a2a.public-token-endpoint</code>, então defina-o para outros provedores de identidade.',
			],
		},
		openapi: {
			summary: 'Transforme qualquer API REST com uma descrição OpenAPI 3.0 ou 3.1 em um agente com ferramentas, sem escrever código, e coloque as chamadas de consequência atrás de aprovação humana.',
			gets: [
				'Um agente que chama a API, gerado a partir da especificação: configurações de chamadas HTTP agrupadas por tag, o pipeline e a implantação',
				'Filtragem de endpoints, substituição da URL base e propagação do cabeçalho de autenticação',
				'A opção de adicionar as ferramentas de um servidor MCP ao lado das geradas',
				'Ferramentas que você pode revisar, comparar e versionar, porque são configuração',
			],
			steps: [
				'Entregue ao EDDI a especificação OpenAPI pela ferramenta MCP <code>create_api_agent</code> ou por <code>POST /administration/agents/setup-api</code>.',
				'Inclua na lista de permitidos as operações que o agente deve ter. Um endpoint não declarado não pode ser chamado.',
				'O EDDI gera as configurações de chamadas HTTP, monta o pipeline completo e implanta o agente.',
				'Mantenha as credenciais como referências <code>${vault:...}</code>.',
				'Coloque portão nas escritas com <code>http.post:*</code>, <code>http.put:*</code>, <code>http.patch:*</code>, <code>http.delete:*</code> e isente as leituras com <code>http.get:*</code>.',
			],
			captions: [
				'O modelo httpCalls a partir do qual as ferramentas geradas são construídas. Escrito à mão aqui para mostrar os campos.',
				'Aprovar toda chamada que altera estado e deixar as leituras passarem.',
			],
			governance: [
				'Os padrões de aprovação podem endereçar o que uma ferramenta chama (<code>http.post:*</code>), o que continua correto quando um operationId muda.',
				'As chamadas de saída são protegidas contra SSRF e path traversal pela plataforma.',
				'Via REST, o <code>setup-api</code> aceita um <code>hitlConfig</code>, de modo que um agente pode ser provisionado com suas ferramentas de escrita com portão desde a primeira versão. A ferramenta MCP não consegue defini-lo.',
				'As decisões ficam no registro de auditoria.',
			],
			goodToKnow: [
				'Uma ferramenta de escrita gerada recebe o corpo inteiro da requisição como um único parâmetro <code>requestBody</code>.',
			],
		},
		sap: {
			summary: 'O EDDI não tem um conector nativo para SAP. Você acessa o SAP por suas APIs OData e REST, com importação de OpenAPI ou chamadas HTTP, ou por um servidor MCP, sob aprovações e o registro de auditoria.',
			gets: [
				'Agentes que leem do SAP e, com aprovação, escrevem nele por meio de suas APIs publicadas',
				'A mesma governança de qualquer outra ferramenta: aprovações, registro de auditoria, credenciais guardadas no cofre',
				'Nenhum código no agente. A conexão é configuração que você pode revisar',
			],
			steps: [
				'Escolha o caminho. Use a importação de OpenAPI se o serviço SAP publica uma descrição OpenAPI. Use chamadas HTTP para declarar requisições OData ou REST individuais. Use MCP se você já opera um servidor MCP na frente do SAP.',
				'Guarde a credencial ou o token do SAP no cofre de segredos e referencie-o como <code>${vault:...}</code>.',
				'Declare primeiro apenas as operações de leitura de que o agente precisa, como listar ou ler objetos de negócio.',
				'Coloque portão em toda escrita com <code>http.post:*</code>, <code>http.put:*</code>, <code>http.patch:*</code>, <code>http.delete:*</code> e isente as leituras com <code>http.get:*</code>. Os aprovadores decidem no Manager ou no Slack.',
				'Verifique o registro de auditoria de cada chamada antes de ampliar o que o agente pode fazer.',
			],
			captions: [
				'Um exemplo de leitura de um serviço OData do SAP. Host, caminho do serviço e autenticação dependem do seu sistema SAP.',
				'As escritas aguardam uma pessoa. As leituras passam.',
			],
			governance: [
				'As escritas ficam retidas para aprovação, com a decisão registrada no registro de auditoria somente de anexação, assinado com HMAC.',
				'As credenciais permanecem no cofre e nunca aparecem na configuração do agente nem nas exportações.',
				'A lista de endpoints permitidos faz com que uma operação SAP não declarada não possa ser chamada, seja o que for que um usuário digite.',
			],
			goodToKnow: [
				'Este é um padrão de integração, não um conector SAP certificado. A forma de autenticar no SAP e quais APIs ele expõe dependem do seu ambiente.',
				'A EDDI Solutions pode construir e manter a conexão para você, incluindo ferramentas MCP sob medida, e operá-la na sua nuvem ou on-premises.',
			],
		},
		chroma: {
			summary: 'Chroma como armazenamento vetorial de uma base de conhecimento do EDDI. A opção de menor atrito quando você não tem infraestrutura existente para reaproveitar.',
			gets: [
				'Respostas com recuperação aumentada a partir dos seus próprios documentos',
				`Um dos ${VECTOR_STORES} armazenamentos vetoriais, escolhido por configuração e não por código`,
				'Fontes de ingestão: rastreamento de sites e arquivos enviados, com agendamentos e histórico de execuções',
			],
			steps: [
				'Execute um servidor Chroma e anote sua URL e o nome de uma coleção.',
				'Crie uma RagConfiguration com <code>storeType: "chroma"</code> e os parâmetros do armazenamento, além do provedor de embeddings.',
				'Vincule-a ao agente com um passo de workflow <code>eddi://ai.labs.rag</code>.',
				'Selecione-a na tarefa de LLM pelo nome em <code>knowledgeBases</code> e depois ingira os documentos.',
			],
			captions: [
				'A base de conhecimento. O Chroma recebe uma URL base e um nome de coleção.',
				'O passo que a vincula ao agente e a tarefa que a usa. Pular o passo do workflow é o erro mais comum.',
			],
			governance: [
				'As chaves de API de embeddings são referências ao cofre, então o corpus de documentos e as credenciais permanecem separados.',
				'As chamadas de embeddings enviam o texto dos documentos a um provedor de embeddings hospedado. Se os dados não podem sair da sua infraestrutura, use um modelo de embeddings auto-hospedado.',
				'Um armazenamento vetorial aberto é uma cópia do seu corpus. Execute o Chroma com autenticação e fora de interfaces públicas.',
			],
			goodToKnow: [
				'A substituição dos chunks de um documento é verificada para o armazenamento em memória e o pgvector. Para o Chroma, espera-se que funcione, mas não é coberta por testes, então documentos reingeridos podem deixar chunks obsoletos.',
			],
		},
		pgvector: {
			summary: 'PostgreSQL com pgvector como armazenamento vetorial de uma base de conhecimento do EDDI. A opção persistente recomendada quando você já opera PostgreSQL.',
			gets: [
				'Uma base de conhecimento dentro de um banco de dados que você já opera e do qual já faz backup',
				'Substituição de documentos verificada na reingestão',
				'A mesma configuração de agente de qualquer outro armazenamento; só mudam os parâmetros do armazenamento',
			],
			steps: [
				'Habilite a extensão pgvector no PostgreSQL e crie um banco de dados e um usuário.',
				'Crie uma RagConfiguration com <code>storeType: "pgvector"</code>, os dados de conexão, uma tabela e a <code>dimension</code> do vetor.',
				'Vincule-a com um passo de workflow <code>eddi://ai.labs.rag</code>.',
				'Selecione-a pelo nome na tarefa de LLM e ingira os documentos.',
			],
			captions: [
				'A dimensão precisa corresponder ao seu modelo de embeddings. 1536 corresponde ao text-embedding-3-small.',
				'Vincular a base de conhecimento ao agente e usá-la em uma tarefa.',
			],
			governance: [
				'A senha do banco de dados é um parâmetro obrigatório. Mantenha-a como referência ao cofre.',
				'O controle de acesso e os backups do seu PostgreSQL existente se aplicam aos vetores.',
				'As chamadas de embeddings enviam o texto dos documentos ao provedor de embeddings que você configurar.',
			],
			goodToKnow: [
				'O armazenamento em memória é para desenvolvimento: ele se esvazia após 30 minutos sem consultas e ao reiniciar. Um armazenamento persistente como o pgvector é a escolha para produção.',
			],
		},
		qdrant: {
			summary: 'Qdrant como armazenamento vetorial de uma base de conhecimento do EDDI, um banco de dados vetorial especializado com espaço para crescer.',
			gets: [
				'Um banco de dados vetorial dedicado por trás da sua base de conhecimento',
				'Chave de API e TLS opcionais',
				'A mesma configuração de agente de qualquer outro armazenamento',
			],
			steps: [
				'Execute um servidor Qdrant e anote seu host e a porta gRPC (o padrão do EDDI é 6334).',
				'Crie uma RagConfiguration com <code>storeType: "qdrant"</code> e um <code>collectionName</code>.',
				'Vincule-a com um passo de workflow <code>eddi://ai.labs.rag</code>.',
				'Selecione-a pelo nome na tarefa de LLM e ingira os documentos.',
			],
			captions: [
				'O Qdrant recebe um host, uma porta e um nome de coleção. apiKey e useTls são opcionais.',
				'Vincular a base de conhecimento ao agente e usá-la em uma tarefa.',
			],
			governance: [
				'Se o Qdrant precisar de uma chave de API, referencie-a a partir do cofre.',
				'As chamadas de embeddings enviam o texto dos documentos ao provedor de embeddings que você configurar.',
				'Um armazenamento vetorial aberto é uma cópia do seu corpus. Mantenha-o fora de interfaces públicas.',
			],
			goodToKnow: [
				'Espera-se que a substituição dos chunks de um documento funcione com o Qdrant, mas ela não é coberta por testes. Sem ela, documentos reingeridos podem deixar chunks obsoletos.',
			],
		},
		elasticsearch: {
			summary: 'Elasticsearch como armazenamento vetorial de uma base de conhecimento do EDDI, útil quando você já o opera e quer busca por palavras-chave e vetorial em um só lugar.',
			gets: [
				'Uma base de conhecimento em um cluster que você já opera',
				'Autenticação por chave de API ou por nome de usuário e senha',
				'A mesma configuração de agente de qualquer outro armazenamento',
			],
			steps: [
				'Verifique se há um cluster Elasticsearch acessível e escolha um nome de índice.',
				'Crie uma RagConfiguration com <code>storeType: "elasticsearch"</code>, o <code>serverUrl</code> e o <code>indexName</code>.',
				'Vincule-a com um passo de workflow <code>eddi://ai.labs.rag</code>.',
				'Selecione-a pelo nome na tarefa de LLM e ingira os documentos.',
			],
			captions: [
				'O serverUrl padrão é localhost:9200. Adicione uma apiKey, ou um userName e uma password, para um cluster protegido.',
				'Vincular a base de conhecimento ao agente e usá-la em uma tarefa.',
			],
			governance: [
				'Referencie a chave de API ou a senha a partir do cofre.',
				'As chamadas de embeddings enviam o texto dos documentos ao provedor de embeddings que você configurar.',
				'O controle de acesso do seu cluster existente se aplica aos vetores.',
			],
			goodToKnow: [
				'Espera-se que a substituição dos chunks de um documento funcione com o Elasticsearch, mas ela não é coberta por testes. Sem ela, documentos reingeridos podem deixar chunks obsoletos.',
			],
		},
		'mongodb-atlas-vector-search': {
			summary: 'MongoDB Atlas Vector Search como armazenamento vetorial de uma base de conhecimento do EDDI, uma escolha natural se você já roda no Atlas.',
			gets: [
				'Uma base de conhecimento no cluster Atlas que você já opera',
				'Configuração por string de conexão, banco de dados, coleção e nome do índice',
				'A mesma configuração de agente de qualquer outro armazenamento',
			],
			steps: [
				'Crie um índice de busca vetorial no Atlas e anote os nomes do banco de dados, da coleção e do índice.',
				'Crie uma RagConfiguration com <code>storeType: "mongodb-atlas"</code> e os parâmetros do armazenamento.',
				'Vincule-a com um passo de workflow <code>eddi://ai.labs.rag</code>.',
				'Selecione-a pelo nome na tarefa de LLM e ingira os documentos.',
			],
			captions: [
				'A string de conexão carrega credenciais, por isso aqui ela é uma referência ao cofre.',
				'Vincular a base de conhecimento ao agente e usá-la em uma tarefa.',
			],
			governance: [
				'Mantenha a string de conexão no cofre, não na configuração.',
				'As chamadas de embeddings enviam o texto dos documentos ao provedor de embeddings que você configurar.',
				'O controle de acesso e as regras de rede do Atlas se aplicam aos vetores.',
			],
			goodToKnow: [
				'Espera-se que a substituição dos chunks de um documento funcione com o Atlas, mas ela não é coberta por testes. Sem ela, documentos reingeridos podem deixar chunks obsoletos.',
			],
		},
		'kubernetes-helm': {
			summary: 'Execute o EDDI em qualquer cluster Kubernetes em conformidade, com um quickstart de arquivo único, um chart Helm ou overlays Kustomize, com MongoDB ou PostgreSQL.',
			gets: [
				'Um manifesto de quickstart que implanta o EDDI e o MongoDB',
				'Um chart Helm e overlays Kustomize para perfis de produção',
				'Componentes opcionais: autenticação com Keycloak, NATS JetStream, monitoramento, ingress, pod disruption budget e network policy',
				'MongoDB ou PostgreSQL como armazenamento de dados',
			],
			steps: [
				'Aplique o manifesto de quickstart ou instale o chart Helm com uma chave mestra do cofre.',
				'Crie o Secret <code>eddi-secrets</code> que guarda a chave mestra do cofre. Nenhum manifesto o grava, de propósito.',
				'Escolha o overlay de banco de dados ou os valores do Helm para MongoDB ou PostgreSQL.',
				'Adicione os componentes opcionais de que precisar, como Keycloak e ingress.',
				'Para segredos de produção, sincronize o <code>eddi-secrets</code> com o External Secrets Operator.',
			],
			captions: [
				'EDDI e MongoDB em um único comando. O pod espera até que o Secret eddi-secrets exista.',
				'Instalação com Helm usando uma chave mestra do cofre gerada.',
				'Os valores do Helm que trocam o armazenamento de dados para PostgreSQL.',
			],
			governance: [
				'Nenhum manifesto grava o Secret da chave mestra, então uma nova aplicação não pode substituir uma chave ativa e tornar os segredos existentes indecifráveis.',
				'O realm do Keycloak incluído para Helm e Kustomize não define senha padrão para as contas privilegiadas.',
				'O perfil de produção adiciona um pod disruption budget e uma network policy.',
			],
			goodToKnow: [
				'O External Secrets Operator pode sincronizar o Secret <code>eddi-secrets</code> a partir do AWS Secrets Manager, HashiCorp Vault, Azure Key Vault e similares. O próprio EDDI não tem cliente nativo para eles.',
				'A EDDI Solutions pode operar o EDDI para você na sua própria nuvem, on-premises ou como instância gerenciada dedicada.',
			],
		},
		openshift: {
			summary: 'O EDDI inclui uma imagem de contêiner certificada pela Red Hat, baseada em UBI 10, que roda sem root no OpenShift 4.12 ou superior, além de um Operator para o OperatorHub.',
			gets: [
				'Uma imagem certificada pela Red Hat, listada no Red Hat Ecosystem Catalog',
				'Execução sem root como UID 185 sobre uma base UBI 10 com OpenJDK 25',
				'Um Operator que cria uma instância do EDDI e uma rota a partir de um recurso customizado',
				'Certificação verificada no CI com o Red Hat preflight',
			],
			steps: [
				'No OpenShift 4.12 ou superior, abra o OperatorHub e instale o EDDI Operator.',
				'Crie uma instância <code>Eddi</code> em Operadores instalados, com o tamanho e o armazenamento para o MongoDB.',
				'O Operator cria a rota automaticamente.',
				'Adicione autenticação e segredos como faria em qualquer cluster.',
			],
			captions: ['Um recurso customizado Eddi, da documentação.'],
			governance: [
				'O contêiner roda como usuário sem root, e a imagem inclui os arquivos de licença de terceiros.',
				'As versões são verificadas no CI contra os requisitos de certificação da Red Hat.',
				'A inicialização em produção ainda exige OIDC, a menos que você opte explicitamente por não usá-lo.',
			],
			goodToKnow: [
				'O Operator está sendo atualizado para o EDDI 6, para oferecer suporte tanto a MongoDB quanto a PostgreSQL. O caminho genérico do Kubernetes funciona em qualquer cluster em conformidade.',
				'Um host RHEL 8 não é compatível com a imagem UBI 10. RHEL 9 ou superior é.',
			],
		},
		ollama: {
			summary: 'Execute modelos localmente com o Ollama e mantenha prompts e documentos no seu próprio hardware, para ambientes on-premises e isolados da rede (air-gapped).',
			gets: [
				'Uma tarefa de LLM do tipo <code>ollama</code> que conversa com o seu servidor Ollama',
				'Nenhuma chave de API de provedor e nenhum dado enviado a um modelo hospedado',
				'Um overlay de compose que inicia o Ollama junto ao EDDI',
				'O Jlama em processo como alternativa para modelos pequenos quantizados',
			],
			steps: [
				'Inicie o EDDI com o overlay de compose do Ollama, ou execute o Ollama por conta própria e anote sua URL.',
				'Baixe um modelo no Ollama. Use a tag do modelo exatamente como o <code>ollama list</code> mostra.',
				'Defina o <code>type</code> da tarefa como <code>ollama</code> com o <code>baseUrl</code> e o <code>model</code>.',
				'Dentro de um contêiner, <code>localhost</code> é o próprio contêiner. Use o nome do serviço do compose ou <code>host.docker.internal</code>.',
			],
			captions: [
				'Sobe o Ollama na mesma rede como http://ollama:11434.',
				'Uma tarefa Ollama, da documentação do EDDI.',
			],
			governance: [
				'Prompts, contexto recuperado e respostas permanecem na sua rede, que é o objetivo de um modelo local.',
				'As aprovações, as Behavior Rules e o registro de auditoria se aplicam da mesma forma que com um modelo hospedado.',
				'Nenhuma credencial está envolvida, então não há nada para colocar no cofre para o modelo em si.',
			],
			goodToKnow: [
				'Uma configuração totalmente isolada da rede precisa de um Ollama local ou de um cache do Jlama pré-carregado, porque o EDDI não consegue baixar um modelo sem rede.',
				'Modelos locais variam em confiabilidade de chamada de ferramentas e de JSON. Teste o comportamento do qual você depende.',
			],
		},
	},
};

export default copy;
