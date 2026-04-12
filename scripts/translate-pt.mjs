import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'src', 'i18n', 'locales');

const translated = `\tcompliance: {
			title: 'Privacidade global e conformidade regulatória',
			description:
				'O EDDI oferece conformidade integrada para RGPD, CCPA, EU AI Act, HIPAA, PIPEDA, LGPD, APPI, POPIA, PDPA e mais 6 frameworks — com exclusão em cascata de dados, trilhas de auditoria criptográficas e uma API unificada.',
			heading1: 'Conformidade por arquitetura',
			para1: 'Indústrias regulamentadas não podem adicionar conformidade aos sistemas de IA após o fato. O EDDI incorpora os <strong>fundamentos técnicos para a conformidade regulatória global</strong> diretamente na arquitetura da plataforma — trilhas de auditoria imutáveis, exclusão em cascata de dados, restrições de processamento, integridade criptográfica e controle de acesso baseado em funções são capacidades fundamentais, não complementos. Uma API unificada cobre os direitos dos titulares de dados para cada jurisdição.',
			aiGovHeading: 'Frameworks de governança de IA',
			aiGovIntro: 'À medida que governos em todo o mundo introduzem legislação específica sobre IA, as organizações precisam de plataformas que forneçam <strong>transparência, rastreabilidade e supervisão humana</strong> desde o primeiro dia. A arquitetura do EDDI aborda os requisitos técnicos fundamentais dos principais frameworks de governança de IA.',
			euAiActHeading: 'EU AI Act — União Europeia',
			euAiActPara: 'O EU AI Act (Regulamento 2024/1689) é a primeira lei abrangente do mundo sobre IA. O EDDI fornece os <strong>fundamentos técnicos</strong> para conformidade com seus requisitos de sistemas de IA de alto risco:',
			euAiActItems: [
				'<strong>Trilhas de auditoria imutáveis</strong> — Cada operação registrada com integridade criptográfica HMAC-SHA256 (Art. 12 — Manutenção de registros)',
				'<strong>Transparência de decisões</strong> — O rastreamento completo do pipeline mostra como as decisões de IA foram tomadas (Art. 13 — Transparência)',
				'<strong>Supervisão humana</strong> — A interface de gestão permite revisão humana, intervenção e parada de emergência (Art. 14 — Supervisão humana)',
				'<strong>Classificação de riscos</strong> — A arquitetura suporta requisitos de sistemas de IA de alto risco com controles configuráveis (Art. 9 — Gestão de riscos)',
				'<strong>Reprodutibilidade</strong> — Configuração como código permite reprodução exata do comportamento da IA para auditorias regulatórias (Art. 17 — Gestão da qualidade)',
				'<strong>Governança de dados</strong> — OIDC/Keycloak RBAC, gestão de segredos baseada em cofre, registro de entrada/saída (Art. 10 — Governança de dados)',
			],
			nistHeading: 'NIST AI Risk Management Framework — Estados Unidos',
			nistPara: 'O NIST AI RMF (AI 100-1) fornece um framework voluntário para gestão de riscos de IA. A arquitetura do EDDI fornece capacidades técnicas que apoiam organizações na busca pelo alinhamento com o NIST AI RMF:',
			nistItems: [
				'<strong>Govern</strong> — Funções RBAC (eddi-admin, eddi-editor, eddi-viewer), registro de auditoria imutável e fluxos de dados documentados',
				'<strong>Map</strong> — Rastreamento de pipeline e registro de conversas permitem identificação abrangente de riscos de IA',
				'<strong>Measure</strong> — Métricas Prometheus, rastreamento de tokens/custos e análises de uso por agente',
				'<strong>Manage</strong> — API de restrição de processamento, supervisão humana via interface Manager e políticas de retenção configuráveis',
			],
			isoHeading: 'ISO/IEC 42001 — Sistemas de gestão de IA',
			isoPara: 'ISO/IEC 42001:2023 estabelece requisitos para um Sistema de Gestão de IA (AIMS). O EDDI fornece capacidades técnicas que apoiam organizações na busca pela certificação ISO 42001:',
			isoItems: [
				'<strong>Políticas de IA documentadas</strong> — Configuração como código significa que todo o comportamento do agente é definido em JSON auditável',
				'<strong>Avaliação de riscos</strong> — Trilhas de auditoria capturam históricos completos de decisões para avaliação de riscos',
				'<strong>Controles operacionais</strong> — RBAC, gestão de segredos baseada em cofre e restrições de processamento fornecem governança operacional',
				'<strong>Monitoramento de desempenho</strong> — Métricas Prometheus, dashboards Grafana e telemetria CQRS permitem avaliação contínua',
			],
			privacyHeading: 'Regulamentos de privacidade de dados',
			privacyIntro: 'O EDDI fornece <strong>endpoints unificados de direitos dos titulares de dados</strong> que satisfazem os requisitos técnicos de cada grande regulamento de privacidade. Uma API cobre exclusão em cascata, exportação completa de dados e restrição de processamento — independentemente da jurisdição.',
			gdprHeading: 'RGPD — União Europeia / EEE',
			gdprPara: 'O Regulamento Geral sobre a Proteção de Dados (UE 2016/679) é o padrão ouro para privacidade de dados. O EDDI implementa os direitos dos titulares de dados do RGPD como <strong>endpoints API de primeira classe</strong> apoiados por operações em cascata em todos os 5 armazéns de dados:',
			gdprItems: [
				'<strong>Direito ao apagamento (Art. 17)</strong> — <code>DELETE /admin/gdpr/{userId}</code> opera em cascata sobre memórias do usuário, conversas, mapeamentos de conversas gerenciadas, registros de banco de dados (pseudonimizados SHA-256) e registro de auditoria (pseudonimizado SHA-256)',
				'<strong>Direito de acesso / Portabilidade (Art. 15/20)</strong> — <code>GET /admin/gdpr/{userId}/export</code> retorna todos os dados como JSON estruturado',
				'<strong>Direito à limitação (Art. 18)</strong> — <code>POST /admin/gdpr/{userId}/restrict</code> congela o processamento preservando os dados',
				'<strong>Registro sem PII</strong> — Operações RGPD registram pseudônimos SHA-256, nunca IDs de usuário brutos',
				'<strong>Retenção configurável</strong> — Políticas de retenção por categoria para conversas (365 dias padrão), memórias de usuário (manual) e entradas de auditoria (indefinido para EU AI Act)',
				'<strong>Ferramentas MCP</strong> — <code>delete_user_data</code> e <code>export_user_data</code> permitem workflows de conformidade orquestrados por IA',
			],
			ccpaHeading: 'CCPA / CPRA — Califórnia, Estados Unidos',
			ccpaPara: 'O California Consumer Privacy Act e o California Privacy Rights Act concedem aos consumidores direitos de conhecimento, exclusão e recusa. O EDDI satisfaz os requisitos técnicos do CCPA através de sua API compatível com RGPD:',
			ccpaItems: [
				'<strong>Direito de saber (§1798.100)</strong> — O endpoint de exportação RGPD fornece todas as informações pessoais em formato estruturado',
				'<strong>Direito de excluir (§1798.105)</strong> — O endpoint de apagamento RGPD fornece exclusão em cascata em todos os armazéns de dados',
				'<strong>Não vender (§1798.120)</strong> — O EDDI arquiteturalmente não pode vender informações pessoais — é infraestrutura middleware que processa dados exclusivamente em nome do implantador',
			],
			pipedaHeading: 'PIPEDA — Canadá',
			pipedaPara: 'A Lei de Proteção de Informações Pessoais e Documentos Eletrônicos do Canadá (2000, alterada em 2023) rege o processamento comercial de dados através de 10 Princípios de Informação Justa:',
			pipedaItems: [
				'<strong>Responsabilidade</strong> — Registro de auditoria imutável assinado HMAC rastreia todas as operações',
				'<strong>Limitação de coleta</strong> — O janelamento consciente de tokens limita os dados enviados aos LLMs; a retenção configurável exclui automaticamente conversas antigas',
				'<strong>Limitação de uso/divulgação</strong> — Os dados são usados apenas para interações de agentes configuradas; a trilha de auditoria registra cada invocação LLM',
				'<strong>Salvaguardas</strong> — Criptografia envelope AES-256-GCM (Secrets Vault), integridade de auditoria HMAC-SHA256, Keycloak OIDC, RBAC',
				'<strong>Acesso individual</strong> — A exportação completa de dados via API REST retorna todas as memórias, conversas e mapeamentos como JSON',
				'<strong>Contestação da conformidade</strong> — Exclusão em cascata em todos os 5 armazéns de dados; trilha de auditoria pseudonimizada para obrigações legais de retenção',
			],
			lgpdHeading: 'LGPD — Brasil',
			lgpdPara: 'A Lei Geral de Proteção de Dados do Brasil (2018, efetiva em 2020) concede amplos direitos aos titulares de dados. O EDDI cobre todos os direitos do Artigo 18 com capacidades técnicas integradas:',
			lgpdItems: [
				'<strong>Acesso aos dados (Art. 18, II)</strong> — Exportação completa de dados em JSON',
				'<strong>Correção (Art. 18, III)</strong> — Memórias de usuário atualizáveis via <code>PUT /usermemorystore/memories</code>',
				'<strong>Anonimização/Exclusão (Art. 18, IV)</strong> — Exclusão em cascata com pseudonimização SHA-256 de registros de auditoria',
				'<strong>Portabilidade de dados (Art. 18, V)</strong> — Exportação JSON legível por máquina inclui todos os dados do usuário',
				'<strong>Exclusão de dados desnecessários (Art. 18, VI)</strong> — Políticas de retenção configuráveis com limpeza automática',
				'<strong>Revogação do consentimento (Art. 18, IX)</strong> — Endpoints de fim de conversa e exclusão em cascata fornecem o mecanismo técnico',
			],
			appiHeading: 'APPI — Japão',
			appiPara: 'A Lei de Proteção de Informações Pessoais do Japão (2003, significativamente alterada em 2022) é uma das leis de proteção de dados mais maduras da Ásia. O EDDI fornece:',
			appiItems: [
				'<strong>Medidas de segurança (Art. 23)</strong> — Criptografia vault AES-256-GCM, integridade de auditoria HMAC-SHA256, Keycloak OIDC, RBAC, proteção SSRF',
				'<strong>Divulgação aos titulares de dados (Art. 33)</strong> — Exportação completa de dados via API REST',
				'<strong>Correção e exclusão (Art. 34-35)</strong> — Atualizações de memória para correção; exclusão em cascata para apagamento',
				'<strong>Informações pseudonimizadas (emenda 2022)</strong> — O apagamento RGPD usa pseudonimização SHA-256, satisfazendo a categoria de informações pseudonimizadas da APPI',
				'<strong>Documentação de transferência transfronteiriça (Art. 28)</strong> — Fluxos de dados de provedores LLM documentados; a trilha de auditoria registra qual modelo/provedor processou cada turno',
			],
			popiaHeading: 'POPIA — África do Sul',
			popiaPara: 'A Lei de Proteção de Informações Pessoais da África do Sul (2013, efetiva em 2021) estabelece 8 condições de processamento de dados. O EDDI fornece capacidades técnicas integradas para cada condição:',
			popiaItems: [
				'<strong>Responsabilidade (Condição 1)</strong> — Registro de auditoria assinado HMAC, fluxos de dados documentados, código open-source Apache 2.0',
				'<strong>Limitação de processamento (Condição 2)</strong> — Janelamento consciente de tokens, retenção configurável, encerramento automático de conversas inativas',
				'<strong>Qualidade da informação (Condição 5)</strong> — Estado de conversa com timestamp e versionado; memórias de usuário atualizáveis via API REST',
				'<strong>Salvaguardas de segurança (Condição 7)</strong> — Criptografia AES-256-GCM, integridade HMAC, Keycloak OIDC, RBAC, proteção SSRF',
				'<strong>Participação do titular de dados (Condição 8)</strong> — Endpoints completos de exportação de dados e exclusão em cascata',
			],
			pdpaHeading: 'PDPA — Singapura e Tailândia',
			pdpaPara: 'As Leis de Proteção de Dados Pessoais de Singapura (2012, alterada em 2021) e Tailândia (2019, efetiva em 2022) são os frameworks de privacidade mais maduros do sudeste asiático. O EDDI cobre as obrigações técnicas de ambas as jurisdições:',
			pdpaItems: [
				'<strong>Obrigação de acesso</strong> — Exportação completa de dados via API REST e ferramentas MCP',
				'<strong>Obrigação de correção</strong> — Memórias de usuário atualizáveis via API REST',
				'<strong>Obrigação de proteção</strong> — Criptografia AES-256-GCM, integridade de auditoria HMAC, Keycloak OIDC, RBAC',
				'<strong>Limitação de retenção</strong> — Limpeza automática configurável com timeout de conversas inativas',
				'<strong>Notificação de violação de dados</strong> — Modelo de runbook de resposta a incidentes incluído na documentação do EDDI',
			],
			otherRegionsHeading: 'Jurisdições adicionais',
			otherRegionsPara: 'A infraestrutura de proteção de dados do EDDI atende aos padrões internacionais. As seguintes jurisdições também são suportadas através da mesma API unificada:',
			otherRegionsItems: [
				'<strong>UK GDPR</strong> (Reino Unido) — Reflete substancialmente o RGPD da UE; os endpoints RGPD do EDDI satisfazem todos os direitos do UK GDPR. Supervisão ICO.',
				'<strong>PIPA</strong> (Coreia do Sul) — Requisitos estritos de consentimento, DPO obrigatório, notificação de violação em 72 horas. O EDDI fornece a infraestrutura técnica de auditoria e apagamento.',
				'<strong>DPDPA</strong> (Índia, 2023) — Framework baseado em consentimento com restrições transfronteiriças. Os endpoints de exportação e apagamento do EDDI satisfazem os requisitos do DPDPA.',
				'<strong>Privacy Act + APPs</strong> (Austrália) — 13 Princípios Australianos de Privacidade. A trilha de auditoria e a exportação de dados do EDDI cobrem as obrigações técnicas.',
				'<strong>Leis estaduais tipo CCPA</strong> (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, etc.) — A API compatível com RGPD/CCPA satisfaz todas as leis estaduais emergentes de privacidade nos EUA.',
			],
			industryHeading: 'Conformidade específica da indústria',
			hipaaHeading: 'HIPAA — Saúde nos Estados Unidos',
			hipaaPara: 'O HIPAA estabelece salvaguardas para Informações de Saúde Protegidas (PHI). O EDDI fornece a infraestrutura técnica para implantações de IA em conformidade com HIPAA:',
			hipaaItems: [
				'<strong>Controles de acesso (§164.312(a))</strong> — Keycloak OIDC com acesso baseado em funções (eddi-admin, eddi-editor, eddi-viewer)',
				'<strong>Controles de auditoria (§164.312(b))</strong> — Registro de auditoria imutável assinado HMAC registra cada operação com timestamps, IDs de usuário e resultados',
				'<strong>Controles de integridade (§164.312(c))</strong> — Detecção de adulteração HMAC-SHA256 em todas as entradas de auditoria',
				'<strong>Segurança de transmissão (§164.312(e))</strong> — TLS para trânsito; AES-256-GCM para segredos em repouso via Secrets Vault',
				'<strong>Descarte de dados (§164.310(d)(2)(i))</strong> — O endpoint de exclusão em cascata RGPD remove permanentemente PHI de todos os armazéns de dados',
				'<strong>Modelo BAA</strong> — Modelo de Business Associate Agreement incluído na documentação do EDDI para implantações em saúde',
			],
			soc2Heading: 'Preparação SOC 2',
			soc2Para: 'SOC 2 Type II avalia sistemas contra os Trust Services Criteria. A arquitetura do EDDI fornece controles técnicos que apoiam organizações na busca pela atestação SOC 2:',
			soc2Items: [
				'<strong>Segurança</strong> — Autenticação OIDC/Keycloak, RBAC, Secrets Vault (AES-256-GCM), zero eval(), proteção contra path traversal, validação de URL',
				'<strong>Disponibilidade</strong> — Escalamento horizontal via NATS JetStream, suporte dual de banco de dados (MongoDB/PostgreSQL), implantação nativa Kubernetes',
				'<strong>Integridade de processamento</strong> — Registro de auditoria imutável assinado HMAC com verificação de integridade criptográfica por operação',
				'<strong>Confidencialidade</strong> — O filtro de redação de segredos remove chaves API e referências de cofre das entradas de auditoria; registro sem PII com pseudônimos SHA-256',
				'<strong>Privacidade</strong> — API completa de direitos dos titulares de dados (apagamento, exportação, restrição), retenção configurável, controles de restrição de processamento',
			],
			apiHeading: 'Uma API para conformidade global',
			apiPara: 'Cada regulamento de privacidade listado acima é atendido pela <strong>mesma API REST unificada e as mesmas ferramentas MCP</strong>. Seja respondendo a uma solicitação de apagamento RGPD na Alemanha, uma solicitação de exclusão CCPA na Califórnia ou uma solicitação de acesso PDPA em Singapura — os mesmos endpoints lidam com tudo:',
			apiItems: [
				'<strong><code>DELETE /admin/gdpr/{userId}</code></strong> — Exclusão em cascata em 5 armazéns de dados (memórias de usuário, conversas, mapeamentos gerenciados, registros, entradas de auditoria)',
				'<strong><code>GET /admin/gdpr/{userId}/export</code></strong> — Exportação completa de dados do usuário como JSON estruturado',
				'<strong><code>POST /admin/gdpr/{userId}/restrict</code></strong> — Congelar processamento preservando dados para resolução de disputas',
				'<strong>MCP: <code>delete_user_data</code></strong> — Exclusão em cascata orquestrada por IA (requer confirmação explícita)',
				'<strong>MCP: <code>export_user_data</code></strong> — Exportação de dados orquestrada por IA para workflows DSAR automatizados',
			],
			heading3: 'Construído para indústrias regulamentadas em todo o mundo',
			para2: 'Saúde, serviços financeiros, governo, manufatura e outros setores regulamentados podem implantar o EDDI com confiança. A plataforma fornece a transparência, auditabilidade e mecanismos de controle exigidos por mais de 15 frameworks regulatórios — do EU AI Act e RGPD na Europa ao HIPAA nos Estados Unidos, PIPEDA no Canadá, LGPD no Brasil, APPI no Japão, POPIA na África do Sul e PDPA no sudeste asiático. Conformidade não é uma reflexão tardia — é uma fundação arquitetônica.',
		},`;

const filePath = join(ROOT, 'pt.ts');
let content = readFileSync(filePath, 'utf-8');
const startMarker = /\tcompliance:\s*\{/;
const startMatch = content.match(startMarker);
if (!startMatch) { console.error('compliance block not found'); process.exit(1); }
const startIdx = startMatch.index;
const afterStart = content.slice(startIdx);
const closingMatch = afterStart.match(/\t\t\tpara2:.*?\n\t\t\},/s);
if (!closingMatch) { console.error('closing not found'); process.exit(1); }
const endIdx = startIdx + closingMatch.index + closingMatch[0].length;
content = content.slice(0, startIdx) + translated + content.slice(endIdx);
writeFileSync(filePath, content, 'utf-8');
console.log('pt: ✓ translated');
