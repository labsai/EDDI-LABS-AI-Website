import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'src', 'i18n', 'locales');

const translated = `\tcompliance: {
			title: '글로벌 개인정보 보호 및 규정 준수',
			description:
				'EDDI는 GDPR, CCPA, EU AI Act, HIPAA, PIPEDA, LGPD, APPI, POPIA, PDPA 및 6개 추가 프레임워크에 대한 내장 컴플라이언스를 제공합니다 — 캐스케이드 데이터 삭제, 암호화 감사 추적, 통합 API를 갖추고 있습니다.',
			heading1: '아키텍처에 의한 컴플라이언스',
			para1: '규제 대상 산업은 AI 시스템에 사후적으로 컴플라이언스를 추가할 수 없습니다. EDDI는 <strong>글로벌 규제 컴플라이언스의 기술적 기반</strong>을 플랫폼 아키텍처에 직접 내장합니다 — 불변 감사 추적, 캐스케이드 데이터 삭제, 처리 제한, 암호화 무결성, 역할 기반 접근 제어는 핵심 기능이며 추가 모듈이 아닙니다. 하나의 통합 API가 모든 관할권의 데이터 주체 권리를 다룹니다.',
			aiGovHeading: 'AI 거버넌스 프레임워크',
			aiGovIntro: '전 세계 정부가 AI 특화 법률을 도입함에 따라, 조직은 첫날부터 <strong>투명성, 추적 가능성, 인간 감독</strong>을 제공하는 플랫폼이 필요합니다. EDDI의 아키텍처는 주요 AI 거버넌스 프레임워크의 핵심 기술 요구사항을 충족합니다.',
			euAiActHeading: 'EU AI Act — 유럽연합',
			euAiActPara: 'EU AI Act(규정 2024/1689)는 세계 최초의 포괄적 AI 법률로, AI 시스템에 대한 위험 기반 요구사항을 수립합니다. EDDI는 고위험 AI 시스템 요구사항 준수를 위한 <strong>기술적 기반</strong>을 제공합니다:',
			euAiActItems: [
				'<strong>불변 감사 추적</strong> — 모든 작업이 HMAC-SHA256 암호화 무결성으로 기록됩니다 (제12조 — 기록 보존)',
				'<strong>의사결정 투명성</strong> — 전체 파이프라인 추적이 AI 결정이 어떻게 내려졌는지 보여줍니다 (제13조 — 투명성)',
				'<strong>인간 감독</strong> — 관리 UI가 인간 검토, 개입 및 긴급 중단을 가능하게 합니다 (제14조 — 인간 감독)',
				'<strong>위험 분류</strong> — 아키텍처가 구성 가능한 제어로 고위험 AI 시스템 요구사항을 지원합니다 (제9조 — 위험 관리)',
				'<strong>재현성</strong> — Configuration-as-code가 규제 감사를 위한 AI 행동의 정확한 재현을 가능하게 합니다 (제17조 — 품질 관리)',
				'<strong>데이터 거버넌스</strong> — OIDC/Keycloak RBAC, Vault 기반 비밀 관리, 입출력 로깅 (제10조 — 데이터 거버넌스)',
			],
			nistHeading: 'NIST AI 위험 관리 프레임워크 — 미국',
			nistPara: 'NIST AI RMF(AI 100-1)는 4가지 기능을 통해 AI 위험을 관리하는 자발적 프레임워크를 제공합니다. EDDI의 아키텍처는 NIST AI RMF 정렬을 추구하는 조직을 지원하는 기술적 역량을 제공합니다:',
			nistItems: [
				'<strong>Govern</strong> — RBAC 역할(eddi-admin, eddi-editor, eddi-viewer), 불변 감사 원장, 문서화된 데이터 흐름',
				'<strong>Map</strong> — 파이프라인 추적 및 대화 로깅이 포괄적인 AI 위험 식별 및 문서화를 가능하게 함',
				'<strong>Measure</strong> — Prometheus 메트릭, 토큰/비용 추적, 에이전트별 사용 분석',
				'<strong>Manage</strong> — 처리 제한 API, 관리 UI를 통한 인간 감독, 구성 가능한 보존 정책',
			],
			isoHeading: 'ISO/IEC 42001 — AI 관리 시스템',
			isoPara: 'ISO/IEC 42001:2023은 AI 관리 시스템(AIMS)의 요구사항을 수립합니다. EDDI는 ISO 42001 인증을 추구하는 조직을 지원하는 기술적 역량을 제공합니다:',
			isoItems: [
				'<strong>문서화된 AI 정책</strong> — Configuration-as-code로 모든 에이전트 행동이 감사 가능한 JSON으로 정의됩니다',
				'<strong>위험 평가</strong> — 감사 추적이 위험 평가 및 영향 분석을 위한 완전한 의사결정 이력을 기록',
				'<strong>운영 제어</strong> — RBAC, Vault 기반 비밀 관리, 처리 제한이 운영 거버넌스를 제공',
				'<strong>성능 모니터링</strong> — Prometheus 메트릭, Grafana 대시보드, CQRS 텔레메트리가 지속적인 AI 성능 평가를 가능하게 함',
			],
			privacyHeading: '데이터 개인정보 보호 규정',
			privacyIntro: 'EDDI는 전 세계 모든 주요 개인정보 보호 규정의 기술적 요구사항을 충족하는 <strong>통합 데이터 주체 권리 엔드포인트</strong>를 제공합니다. 하나의 API가 캐스케이드 삭제, 전체 데이터 내보내기, 처리 제한을 관할권에 관계없이 다룹니다.',
			gdprHeading: 'GDPR — EU / EEA',
			gdprPara: '일반 데이터 보호 규정(EU 2016/679)은 데이터 프라이버시의 골드 스탠다드입니다. EDDI는 GDPR 데이터 주체 권리를 5개 데이터 저장소에 걸친 캐스케이드 작업으로 지원되는 <strong>일급 API 엔드포인트</strong>로 구현합니다:',
			gdprItems: [
				'<strong>삭제권 (제17조)</strong> — <code>DELETE /admin/gdpr/{userId}</code>가 사용자 메모리, 대화, 관리 대화 매핑, 데이터베이스 로그(SHA-256 가명화), 감사 원장(SHA-256 가명화)에 걸쳐 캐스케이드',
				'<strong>접근권 / 이동성 (제15/20조)</strong> — <code>GET /admin/gdpr/{userId}/export</code>가 모든 사용자 데이터를 구조화된 기계 판독 가능 JSON으로 반환',
				'<strong>제한권 (제18조)</strong> — <code>POST /admin/gdpr/{userId}/restrict</code>가 데이터를 보존하면서 처리를 동결, 새 대화 및 메시지 처리를 차단',
				'<strong>PII 안전 로깅</strong> — GDPR 작업은 SHA-256 가명을 기록하며, 원시 사용자 ID는 절대 기록하지 않습니다',
				'<strong>구성 가능한 보존</strong> — 카테고리별 보존 정책: 대화(기본 365일), 사용자 메모리(수동), 감사 항목(EU AI Act용 무기한)',
				'<strong>MCP 도구</strong> — <code>delete_user_data</code> 및 <code>export_user_data</code>가 AI 오케스트레이션 컴플라이언스 워크플로를 가능하게 함',
			],
			ccpaHeading: 'CCPA / CPRA — 미국 캘리포니아',
			ccpaPara: '캘리포니아 소비자 프라이버시법과 캘리포니아 프라이버시 권리법은 소비자에게 알 권리, 삭제 권리, 데이터 판매 거부 권리를 부여합니다. EDDI는 GDPR 호환 API를 통해 CCPA의 기술적 요구사항을 충족합니다:',
			ccpaItems: [
				'<strong>알 권리 (§1798.100)</strong> — GDPR 내보내기 엔드포인트가 구조화된 기계 판독 가능 형식으로 모든 개인 정보를 제공',
				'<strong>삭제 권리 (§1798.105)</strong> — GDPR 삭제 엔드포인트가 모든 데이터 저장소에 걸쳐 캐스케이드 삭제를 제공',
				'<strong>판매 금지 (§1798.120)</strong> — EDDI는 아키텍처상 개인 정보를 판매할 수 없습니다 — 배포자를 대신하여 데이터를 처리하는 미들웨어 인프라입니다',
			],
			pipedaHeading: 'PIPEDA — 캐나다',
			pipedaPara: '캐나다의 개인정보 보호 및 전자 문서법(2000년, 2023년 개정)은 10가지 공정 정보 원칙을 통해 상업적 데이터 처리를 규제합니다:',
			pipedaItems: [
				'<strong>책임</strong> — 불변 HMAC 서명 감사 원장이 모든 작업을 추적',
				'<strong>수집 제한</strong> — 토큰 인식 윈도잉이 LLM에 전송되는 데이터를 제한; 구성 가능한 보존이 오래된 대화를 자동 삭제',
				'<strong>사용/공개 제한</strong> — 데이터는 구성된 에이전트 상호작용에만 사용; 감사 추적이 모든 LLM 호출을 기록',
				'<strong>보안 조치</strong> — AES-256-GCM 봉투 암호화(Secrets Vault), HMAC-SHA256 감사 무결성, Keycloak OIDC, RBAC',
				'<strong>개인 접근</strong> — REST API를 통한 전체 데이터 내보내기가 모든 메모리, 대화, 매핑을 JSON으로 반환',
				'<strong>컴플라이언스 이의 제기</strong> — 5개 데이터 저장소에 걸친 캐스케이드 삭제; 법적 보존 의무를 위해 감사 추적은 가명화(삭제 아님)',
			],
			lgpdHeading: 'LGPD — 브라질',
			lgpdPara: '브라질의 일반 데이터 보호법(2018년, 2020년 시행)은 GDPR에 근접한 광범위한 데이터 주체 권리를 부여합니다. EDDI는 내장 기술 역량으로 제18조의 모든 권리를 다룹니다:',
			lgpdItems: [
				'<strong>데이터 접근 (제18조 II)</strong> — 전체 JSON 데이터 내보내기',
				'<strong>수정 (제18조 III)</strong> — <code>PUT /usermemorystore/memories</code>를 통해 사용자 메모리 업데이트 가능',
				'<strong>익명화/삭제 (제18조 IV)</strong> — 감사 기록의 SHA-256 가명화를 포함한 캐스케이드 삭제',
				'<strong>데이터 이동성 (제18조 V)</strong> — 기계 판독 가능 JSON 내보내기에 모든 사용자 데이터 포함',
				'<strong>불필요한 데이터 삭제 (제18조 VI)</strong> — 자동 정리가 포함된 구성 가능한 보존 정책',
				'<strong>동의 철회 (제18조 IX)</strong> — 대화 종료 및 캐스케이드 삭제 엔드포인트가 기술적 메커니즘을 제공',
			],
			appiHeading: 'APPI — 일본',
			appiPara: '일본의 개인정보 보호법(2003년, 2022년 대폭 개정)은 아시아에서 가장 성숙한 데이터 보호법 중 하나입니다. EDDI는 다음을 제공합니다:',
			appiItems: [
				'<strong>보안 조치 (제23조)</strong> — AES-256-GCM Vault 암호화, HMAC-SHA256 감사 무결성, Keycloak OIDC, RBAC, SSRF 보호',
				'<strong>정보 주체에 대한 공개 (제33조)</strong> — REST API를 통한 전체 데이터 내보내기',
				'<strong>수정 및 삭제 (제34-35조)</strong> — 수정을 위한 메모리 업데이트; 삭제를 위한 캐스케이드 삭제',
				'<strong>가명화 정보 (2022년 개정)</strong> — GDPR 삭제가 SHA-256 가명화를 사용하여 APPI의 가명화 정보 카테고리를 충족',
				'<strong>국경 간 이전 문서화 (제28조)</strong> — LLM 제공자 데이터 흐름이 문서화됨; 감사 추적이 어떤 모델/제공자가 각 턴을 처리했는지 기록',
			],
			popiaHeading: 'POPIA — 남아프리카',
			popiaPara: '남아프리카의 개인정보 보호법(2013년, 2021년 시행)은 EU 표준에 맞춘 8가지 데이터 처리 조건을 수립합니다. EDDI는 각 조건에 대한 내장 기술 역량을 제공합니다:',
			popiaItems: [
				'<strong>책임 (조건 1)</strong> — HMAC 서명 감사 원장, 문서화된 데이터 흐름, Apache 2.0 오픈소스 코드',
				'<strong>처리 제한 (조건 2)</strong> — 토큰 인식 윈도잉, 구성 가능한 보존, 유휴 대화 자동 종료',
				'<strong>정보 품질 (조건 5)</strong> — 타임스탬프 및 버전 관리된 대화 상태; REST API로 업데이트 가능한 사용자 메모리',
				'<strong>보안 보호 (조건 7)</strong> — AES-256-GCM 암호화, HMAC 무결성, Keycloak OIDC, RBAC, SSRF 보호',
				'<strong>데이터 주체 참여 (조건 8)</strong> — 전체 데이터 내보내기 및 캐스케이드 삭제 엔드포인트',
			],
			pdpaHeading: 'PDPA — 싱가포르 및 태국',
			pdpaPara: '싱가포르(2012년, 2021년 개정) 및 태국(2019년, 2022년 시행)의 개인 데이터 보호법은 동남아시아에서 가장 성숙한 프라이버시 프레임워크입니다. EDDI는 두 관할권의 기술적 의무를 다룹니다:',
			pdpaItems: [
				'<strong>접근 의무</strong> — REST API 및 MCP 도구를 통한 전체 데이터 내보내기',
				'<strong>수정 의무</strong> — REST API로 업데이트 가능한 사용자 메모리',
				'<strong>보호 의무</strong> — AES-256-GCM 암호화, HMAC 감사 무결성, Keycloak OIDC, RBAC',
				'<strong>보존 제한</strong> — 유휴 대화 타임아웃이 포함된 구성 가능한 자동 정리',
				'<strong>데이터 침해 통지</strong> — EDDI 문서에 인시던트 대응 런북 템플릿 포함',
			],
			otherRegionsHeading: '추가 관할권',
			otherRegionsPara: 'EDDI의 데이터 보호 인프라는 국제 표준을 충족합니다. 다음 관할권도 동일한 통합 API를 통해 지원됩니다:',
			otherRegionsItems: [
				'<strong>UK GDPR</strong> (영국) — EU GDPR을 실질적으로 반영. EDDI의 GDPR 엔드포인트가 모든 UK GDPR 데이터 주체 권리를 충족. ICO 감독.',
				'<strong>PIPA</strong> (한국) — 엄격한 동의 요건, 의무적 DPO, 72시간 침해 통지. EDDI는 기술적 감사 및 삭제 인프라를 제공.',
				'<strong>DPDPA</strong> (인도, 2023) — 동의 기반 프레임워크, 국경 간 제한. EDDI의 내보내기 및 삭제 엔드포인트가 DPDPA 요구사항을 충족.',
				'<strong>Privacy Act + APPs</strong> (호주) — 13개 호주 프라이버시 원칙. EDDI의 감사 추적 및 데이터 내보내기가 기술적 의무를 다룸.',
				'<strong>CCPA 유형 주법</strong> (버지니아 VCDPA, 콜로라도 CPA, 코네티컷 CTDPA 등) — GDPR/CCPA 호환 API가 모든 신규 미국 주 프라이버시 법률을 충족.',
			],
			industryHeading: '산업별 컴플라이언스',
			hipaaHeading: 'HIPAA — 미국 의료',
			hipaaPara: 'HIPAA는 보호 건강 정보(PHI)에 대한 보호 조치를 수립합니다. EDDI는 HIPAA 준수 AI 배포를 위한 기술 인프라를 제공합니다:',
			hipaaItems: [
				'<strong>접근 제어 (§164.312(a))</strong> — 역할 기반 접근의 Keycloak OIDC (eddi-admin, eddi-editor, eddi-viewer)',
				'<strong>감사 제어 (§164.312(b))</strong> — HMAC 서명 불변 감사 원장이 타임스탬프, 사용자 ID, 결과와 함께 모든 작업을 기록',
				'<strong>무결성 제어 (§164.312(c))</strong> — 모든 감사 항목에 대한 HMAC-SHA256 변조 탐지',
				'<strong>전송 보안 (§164.312(e))</strong> — 전송에 TLS; Secrets Vault를 통한 AES-256-GCM 정적 암호화',
				'<strong>데이터 폐기 (§164.310(d)(2)(i))</strong> — GDPR 캐스케이드 삭제 엔드포인트가 모든 데이터 저장소에서 PHI를 영구 제거',
				'<strong>BAA 템플릿</strong> — EDDI 문서에 의료 배포를 위한 Business Associate Agreement 템플릿 포함',
			],
			soc2Heading: 'SOC 2 준비',
			soc2Para: 'SOC 2 Type II는 Trust Services Criteria에 대해 시스템을 평가합니다. EDDI의 아키텍처는 SOC 2 인증을 추구하는 조직을 지원하는 기술적 제어를 제공합니다:',
			soc2Items: [
				'<strong>보안</strong> — OIDC/Keycloak 인증, RBAC, Secrets Vault (AES-256-GCM), 제로 eval(), 경로 순회 보호, URL 검증',
				'<strong>가용성</strong> — NATS JetStream을 통한 수평 확장, 이중 데이터베이스 지원 (MongoDB/PostgreSQL), Kubernetes 네이티브 배포',
				'<strong>처리 무결성</strong> — 작업별 암호화 무결성 검증을 갖춘 불변 HMAC 서명 감사 원장',
				'<strong>기밀성</strong> — 시크릿 편집 필터가 감사 항목에서 API 키와 Vault 참조를 제거; SHA-256 가명의 PII 안전 로깅',
				'<strong>프라이버시</strong> — 전체 데이터 주체 권리 API(삭제, 내보내기, 제한), 구성 가능한 보존, 처리 제한 제어',
			],
			apiHeading: '글로벌 컴플라이언스를 위한 하나의 API',
			apiPara: '위에 나열된 모든 프라이버시 규정은 <strong>동일한 통합 REST API와 MCP 도구</strong>로 서비스됩니다. 독일에서의 GDPR 삭제 요청, 캘리포니아에서의 CCPA 삭제 요청, 싱가포르에서의 PDPA 접근 요청에 대응하든 — 동일한 엔드포인트가 모든 것을 처리합니다:',
			apiItems: [
				'<strong><code>DELETE /admin/gdpr/{userId}</code></strong> — 5개 데이터 저장소에 걸친 캐스케이드 삭제',
				'<strong><code>GET /admin/gdpr/{userId}/export</code></strong> — 구조화된 JSON으로 전체 사용자 데이터 내보내기',
				'<strong><code>POST /admin/gdpr/{userId}/restrict</code></strong> — 분쟁 해결을 위해 데이터를 보존하면서 처리 동결',
				'<strong>MCP: <code>delete_user_data</code></strong> — AI 오케스트레이션 캐스케이드 삭제 (명시적 확인 필요)',
				'<strong>MCP: <code>export_user_data</code></strong> — 자동화 DSAR 워크플로를 위한 AI 오케스트레이션 데이터 내보내기',
			],
			heading3: '전 세계 규제 산업을 위해 구축',
			para2: '의료, 금융 서비스, 정부, 제조업 및 기타 규제 대상 부문은 자신감을 갖고 EDDI를 배포할 수 있습니다. 플랫폼은 유럽의 EU AI Act 및 GDPR에서 미국의 HIPAA, 캐나다의 PIPEDA, 브라질의 LGPD, 일본의 APPI, 남아프리카의 POPIA, 동남아시아의 PDPA까지 15개 이상의 규제 프레임워크가 요구하는 투명성, 감사 가능성, 제어 메커니즘을 제공합니다. 컴플라이언스는 사후 고려가 아닙니다 — 아키텍처 기반입니다.',
		},`;

const filePath = join(ROOT, 'ko.ts');
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
console.log('ko: ✓ translated');
