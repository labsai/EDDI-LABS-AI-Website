import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
const ROOT = join(import.meta.dirname, '..', 'src', 'i18n', 'locales');

const translated = `\tcompliance: {
			title: '全球隐私与合规',
			description:
				'EDDI 为 GDPR、CCPA、EU AI Act、HIPAA、PIPEDA、LGPD、APPI、POPIA、PDPA 及另外 6 个框架提供内置合规——支持级联数据删除、加密审计追踪和统一 API。',
			heading1: '架构级合规',
			para1: '受监管行业不能事后将合规添加到 AI 系统中。EDDI 将<strong>全球监管合规的技术基础</strong>直接嵌入平台架构——不可变审计追踪、级联数据删除、处理限制、加密完整性和基于角色的访问控制是核心能力，而非附加模块。一个统一 API 覆盖每个司法管辖区的数据主体权利。',
			aiGovHeading: 'AI 治理框架',
			aiGovIntro: '随着全球各国政府引入 AI 专项立法，组织需要从一开始就提供<strong>透明度、可追溯性和人工监督</strong>的平台。EDDI 的架构满足主要 AI 治理框架的核心技术要求。',
			euAiActHeading: 'EU AI Act — 欧盟',
			euAiActPara: 'EU AI Act（法规 2024/1689）是全球首部综合性 AI 法律，建立了基于风险的 AI 系统要求。EDDI 为高风险 AI 系统合规提供<strong>技术基础</strong>：',
			euAiActItems: [
				'<strong>不可变审计追踪</strong> — 每项操作均以 HMAC-SHA256 加密完整性记录（第 12 条 — 记录保存）',
				'<strong>决策透明</strong> — 完整的管道追踪显示 AI 决策的制定过程，包括模型名称、提示和响应（第 13 条 — 透明度）',
				'<strong>人工监督</strong> — 管理界面支持人工审查、干预和紧急停止（第 14 条 — 人工监督）',
				'<strong>风险分类</strong> — 架构支持高风险 AI 系统要求，具有可配置控制（第 9 条 — 风险管理）',
				'<strong>可重现性</strong> — 配置即代码实现 AI 行为的精确重现，用于监管审计（第 17 条 — 质量管理）',
				'<strong>数据治理</strong> — OIDC/Keycloak RBAC、基于保险库的密钥管理、输入/输出日志记录（第 10 条 — 数据治理）',
			],
			nistHeading: 'NIST AI 风险管理框架 — 美国',
			nistPara: 'NIST AI RMF（AI 100-1）提供了一个自愿性框架，通过四个功能管理 AI 风险：治理、映射、衡量和管理。EDDI 的架构提供技术能力，支持组织追求 NIST AI RMF 对齐：',
			nistItems: [
				'<strong>治理（Govern）</strong> — RBAC 角色（eddi-admin、eddi-editor、eddi-viewer）、不可变审计账本和文档化数据流支持 AI 治理结构',
				'<strong>映射（Map）</strong> — 管道追踪和对话日志记录实现全面的 AI 风险识别和文档化',
				'<strong>衡量（Measure）</strong> — Prometheus 指标、Token/成本跟踪和代理使用分析提供可衡量的 AI 性能和风险指标',
				'<strong>管理（Manage）</strong> — 处理限制 API、通过管理界面的人工监督和可配置的保留策略实现风险缓解控制',
			],
			isoHeading: 'ISO/IEC 42001 — AI 管理体系',
			isoPara: 'ISO/IEC 42001:2023 建立了 AI 管理体系（AIMS）的要求。EDDI 提供支持组织追求 ISO 42001 认证的技术能力：',
			isoItems: [
				'<strong>文档化 AI 策略</strong> — 配置即代码意味着所有代理行为都在可审计的 JSON 中定义——规则、工作流程、LLM 配置和部署描述符',
				'<strong>风险评估</strong> — 审计追踪捕获完整的决策历史，用于风险评估和影响分析',
				'<strong>运营控制</strong> — RBAC、基于保险库的密钥管理和处理限制提供运营治理',
				'<strong>性能监控</strong> — Prometheus 指标、Grafana 仪表板和 CQRS 遥测实现持续 AI 性能评估',
			],
			privacyHeading: '数据隐私法规',
			privacyIntro: 'EDDI 提供<strong>统一的数据主体权利端点</strong>，满足全球每项主要隐私法规的技术要求。一个 API 覆盖级联删除、完整数据导出和处理限制——无论司法管辖区。',
			gdprHeading: 'GDPR — 欧盟 / EEA',
			gdprPara: '通用数据保护条例（EU 2016/679）是数据隐私的黄金标准。EDDI 将 GDPR 数据主体权利实现为<strong>一等 API 端点</strong>，由跨所有 5 个数据存储的级联操作支撑：',
			gdprItems: [
				'<strong>删除权（第 17 条）</strong> — <code>DELETE /admin/gdpr/{userId}</code> 级联删除用户记忆、对话、托管对话映射、数据库日志（SHA-256 假名化）和审计账本（SHA-256 假名化）',
				'<strong>访问权 / 可携带性（第 15/20 条）</strong> — <code>GET /admin/gdpr/{userId}/export</code> 以结构化、机器可读的 JSON 返回所有用户数据',
				'<strong>限制权（第 18 条）</strong> — <code>POST /admin/gdpr/{userId}/restrict</code> 冻结处理同时保留数据，阻止新对话和消息处理',
				'<strong>PII 安全日志记录</strong> — GDPR 操作记录 SHA-256 假名，从不记录原始用户 ID',
				'<strong>可配置保留</strong> — 按类别的保留策略，对话（默认 365 天）、用户记忆（手动）和审计条目（EU AI Act 要求无限期）',
				'<strong>MCP 工具</strong> — <code>delete_user_data</code> 和 <code>export_user_data</code> 实现 AI 编排的合规工作流',
			],
			ccpaHeading: 'CCPA / CPRA — 美国加利福尼亚州',
			ccpaPara: '加州消费者隐私法案和加州隐私权法案授予消费者知情权、删除权和选择退出数据销售权。EDDI 通过其 GDPR 兼容 API 满足 CCPA 的技术要求：',
			ccpaItems: [
				'<strong>知情权（§1798.100）</strong> — GDPR 导出端点以结构化、机器可读的格式提供所有个人信息',
				'<strong>删除权（§1798.105）</strong> — GDPR 删除端点提供跨所有数据存储的级联删除',
				'<strong>禁止出售（§1798.120）</strong> — EDDI 在架构上不能出售个人信息——它是仅代表部署者处理数据的中间件基础设施',
			],
			pipedaHeading: 'PIPEDA — 加拿大',
			pipedaPara: '加拿大的《个人信息保护和电子文件法》（2000 年，2023 年修订）通过 10 项公平信息原则管理商业数据处理。EDDI 的架构直接映射到每项原则：',
			pipedaItems: [
				'<strong>问责制</strong> — 不可变 HMAC 签名审计账本追踪所有操作',
				'<strong>限制收集</strong> — Token 感知的窗口化限制发送给 LLM 的数据；可配置的保留策略自动删除旧对话',
				'<strong>限制使用/披露</strong> — 数据仅用于配置的代理交互；审计追踪记录每次 LLM 调用',
				'<strong>安全保障</strong> — AES-256-GCM 信封加密（Secrets Vault）、HMAC-SHA256 审计完整性、Keycloak OIDC、RBAC',
				'<strong>个人访问</strong> — 通过 REST API 的完整数据导出返回所有记忆、对话和托管对话映射的 JSON',
				'<strong>质疑合规</strong> — 跨所有 5 个数据存储的级联删除；审计追踪假名化（未删除）以满足法律保留义务',
			],
			lgpdHeading: 'LGPD — 巴西',
			lgpdPara: '巴西的《通用数据保护法》（2018 年，2020 年生效）授予广泛的数据主体权利，与 GDPR 密切对应。EDDI 通过内置技术能力覆盖第 18 条所有权利：',
			lgpdItems: [
				'<strong>数据访问（第 18 条第 II 款）</strong> — 完整的 JSON 数据导出',
				'<strong>更正（第 18 条第 III 款）</strong> — 用户记忆可通过 <code>PUT /usermemorystore/memories</code> 更新',
				'<strong>匿名化/删除（第 18 条第 IV 款）</strong> — 级联删除并对审计记录进行 SHA-256 假名化',
				'<strong>数据可携带性（第 18 条第 V 款）</strong> — 机器可读的 JSON 导出包含所有用户数据',
				'<strong>删除不必要的数据（第 18 条第 VI 款）</strong> — 可配置的保留策略支持自动清理',
				'<strong>撤回同意（第 18 条第 IX 款）</strong> — 结束对话和级联删除端点提供技术机制',
			],
			appiHeading: 'APPI — 日本',
			appiPara: '日本的《个人信息保护法》（2003 年，2022 年重大修订）是亚洲最成熟的数据保护法之一。日本拥有欧盟充分性认定。EDDI 提供：',
			appiItems: [
				'<strong>安全措施（第 23 条）</strong> — AES-256-GCM 保险库加密、HMAC-SHA256 审计完整性、Keycloak OIDC、RBAC、SSRF 防护',
				'<strong>向数据主体披露（第 33 条）</strong> — 通过 REST API 的完整数据导出',
				'<strong>更正与删除（第 34-35 条）</strong> — 记忆更新用于更正；级联删除用于擦除',
				'<strong>假名化信息（2022 年修订）</strong> — GDPR 删除使用 SHA-256 假名化，满足 APPI 的假名化信息类别',
				'<strong>跨境传输文档（第 28 条）</strong> — LLM 提供商数据流已文档化；审计追踪记录哪个模型/提供商处理了每轮交互',
			],
			popiaHeading: 'POPIA — 南非',
			popiaPara: '南非的《个人信息保护法》（2013 年，2021 年生效）建立了与欧盟标准对齐的 8 项数据处理条件。EDDI 为每项条件提供内置技术能力：',
			popiaItems: [
				'<strong>问责制（条件 1）</strong> — HMAC 签名审计账本、文档化数据流、Apache 2.0 开源代码',
				'<strong>处理限制（条件 2）</strong> — Token 感知的窗口化、可配置保留、空闲对话自动结束',
				'<strong>信息质量（条件 5）</strong> — 带时间戳的版本化对话状态；用户记忆可通过 REST API 更新',
				'<strong>安全保障（条件 7）</strong> — AES-256-GCM 加密、HMAC 完整性、Keycloak OIDC、RBAC、SSRF 防护',
				'<strong>数据主体参与（条件 8）</strong> — 完整的数据导出和级联删除端点',
			],
			pdpaHeading: 'PDPA — 新加坡和泰国',
			pdpaPara: '新加坡（2012 年，2021 年修订）和泰国（2019 年，2022 年生效）的个人数据保护法是东南亚最成熟的隐私框架。EDDI 覆盖两个司法管辖区的技术义务：',
			pdpaItems: [
				'<strong>访问义务</strong> — 通过 REST API 和 MCP 工具的完整数据导出',
				'<strong>更正义务</strong> — 用户记忆可通过 REST API 更新',
				'<strong>保护义务</strong> — AES-256-GCM 加密、HMAC 审计完整性、Keycloak OIDC、RBAC',
				'<strong>保留限制</strong> — 可配置的自动清理，支持空闲对话超时',
				'<strong>数据泄露通知</strong> — EDDI 文档中包含事件响应运行手册模板',
			],
			otherRegionsHeading: '其他司法管辖区',
			otherRegionsPara: 'EDDI 的数据保护基础设施符合国际标准。以下司法管辖区也通过相同的统一 API 获得支持：',
			otherRegionsItems: [
				'<strong>UK GDPR</strong>（英国）— 实质上反映了欧盟 GDPR；EDDI 的 GDPR 端点满足所有 UK GDPR 数据主体权利。ICO 监管。',
				'<strong>PIPA</strong>（韩国）— 严格的同意要求、强制 DPO、72 小时违规通知。EDDI 提供技术审计和删除基础设施。',
				'<strong>DPDPA</strong>（印度，2023 年）— 基于同意的框架，有跨境限制。EDDI 的导出和删除端点满足 DPDPA 要求。',
				'<strong>Privacy Act + APPs</strong>（澳大利亚）— 13 项澳大利亚隐私原则。EDDI 的审计追踪和数据导出覆盖技术义务。',
				'<strong>CCPA 类州法律</strong>（弗吉尼亚 VCDPA、科罗拉多 CPA、康涅狄格 CTDPA 等）— GDPR/CCPA 兼容 API 满足所有新兴美国州隐私法。',
			],
			industryHeading: '行业特定合规',
			hipaaHeading: 'HIPAA — 美国医疗保健',
			hipaaPara: 'HIPAA 为受保护健康信息（PHI）建立保障措施。EDDI 为符合 HIPAA 的 AI 部署提供技术基础设施：',
			hipaaItems: [
				'<strong>访问控制（§164.312(a)）</strong> — Keycloak OIDC 基于角色的访问（eddi-admin、eddi-editor、eddi-viewer）',
				'<strong>审计控制（§164.312(b)）</strong> — HMAC 签名的不可变审计账本记录每项操作的时间戳、用户 ID 和结果',
				'<strong>完整性控制（§164.312(c)）</strong> — 对所有审计条目进行 HMAC-SHA256 篡改检测',
				'<strong>传输安全（§164.312(e)）</strong> — 传输使用 TLS；静态密钥通过 Secrets Vault 使用 AES-256-GCM',
				'<strong>数据处置（§164.310(d)(2)(i)）</strong> — GDPR 级联删除端点永久移除所有数据存储中的 PHI',
				'<strong>BAA 模板</strong> — EDDI 文档中包含用于医疗保健部署的 Business Associate Agreement 模板',
			],
			soc2Heading: 'SOC 2 就绪',
			soc2Para: 'SOC 2 Type II 根据信任服务标准评估系统。EDDI 的架构提供支持组织追求 SOC 2 认证的技术控制：',
			soc2Items: [
				'<strong>安全性</strong> — OIDC/Keycloak 认证、RBAC、Secrets Vault（AES-256-GCM）、零 eval()、路径遍历防护、URL 验证',
				'<strong>可用性</strong> — 通过 NATS JetStream 的水平扩展、双数据库支持（MongoDB/PostgreSQL）、Kubernetes 原生部署',
				'<strong>处理完整性</strong> — 不可变 HMAC 签名审计账本，每项操作均有加密完整性验证',
				'<strong>机密性</strong> — 密钥编辑过滤器从审计条目中清除 API 密钥和保险库引用；SHA-256 假名的 PII 安全日志记录',
				'<strong>隐私</strong> — 完整的数据主体权利 API（删除、导出、限制），可配置保留，处理限制控制',
			],
			apiHeading: '一个 API 实现全球合规',
			apiPara: '上述每项隐私法规都由<strong>相同的统一 REST API 和 MCP 工具</strong>提供服务。无论您是在德国响应 GDPR 删除请求、在加利福尼亚响应 CCPA 删除请求，还是在新加坡响应 PDPA 访问请求——相同的端点处理一切：',
			apiItems: [
				'<strong><code>DELETE /admin/gdpr/{userId}</code></strong> — 跨 5 个数据存储的级联删除（用户记忆、对话、托管映射、日志、审计条目）',
				'<strong><code>GET /admin/gdpr/{userId}/export</code></strong> — 以结构化 JSON 导出完整用户数据（记忆、对话、审计记录）',
				'<strong><code>POST /admin/gdpr/{userId}/restrict</code></strong> — 冻结处理同时保留数据用于争议解决',
				'<strong>MCP: <code>delete_user_data</code></strong> — AI 编排的级联删除（需要明确确认）',
				'<strong>MCP: <code>export_user_data</code></strong> — AI 编排的数据导出，用于自动化 DSAR 工作流',
			],
			heading3: '为全球受监管行业而构建',
			para2: '医疗保健、金融服务、政府、制造业和其他受监管行业可以放心地部署 EDDI。该平台提供超过 15 个监管框架所要求的透明度、可审计性和控制机制——从欧洲的 EU AI Act 和 GDPR 到美国的 HIPAA、加拿大的 PIPEDA、巴西的 LGPD、日本的 APPI、南非的 POPIA 和东南亚的 PDPA。合规不是事后考虑——它是架构基础。',
		},`;

const filePath = join(ROOT, 'zh.ts');
let content = readFileSync(filePath, 'utf-8');
const startMatch = content.match(/\tcompliance:\s*\{/);
if (!startMatch) { console.error('not found'); process.exit(1); }
const startIdx = startMatch.index;
const afterStart = content.slice(startIdx);
const closingMatch = afterStart.match(/\t\t\tpara2:.*?\n\t\t\},/s);
if (!closingMatch) { console.error('closing not found'); process.exit(1); }
const endIdx = startIdx + closingMatch.index + closingMatch[0].length;
content = content.slice(0, startIdx) + translated + content.slice(endIdx);
writeFileSync(filePath, content, 'utf-8');
console.log('zh: ✓ translated');
