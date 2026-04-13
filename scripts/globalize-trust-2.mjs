/**
 * Second pass: globalize remaining trust section references in CJK and other locale files.
 * Targets trust section ONLY — legal/imprint Vienna addresses are intentionally preserved.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const localesDir = join(import.meta.dirname, '..', 'src', 'i18n', 'locales');

// Per-file replacements for locale-specific strings that weren't caught by the first pass
const perFileReplacements = {
  'zh.ts': [
    // 2006 timeline: "在奥地利维也纳" → "在欧洲"
    ['在奥地利维也纳<strong>项目成立</strong>', '在欧洲<strong>项目成立</strong>'],
    // 2008 timeline: inits.at → university incubator  
    ['在维也纳大学商业孵化器 <strong>inits.at</strong> 孵化，具有学术严谨性和机构支持。',
     '在<strong>大学创业孵化器</strong>孵化，拥有学术监督、注重研究级工程和可持续产品开发。'],
    // 2018 timeline: weXelerate Batch II
    ['入选 <strong>weXelerate Batch II</strong> 加速器',
     '入选<strong>欧洲顶级加速器项目</strong>'],
    // 2018 hackathon
    ['在维也纳 weXelerate 举办首届 <strong>EDDI 聊天机器人黑客松</strong> — 由 weXelerate 和 T-Mobile 赞助。',
     '首届 <strong>EDDI 聊天机器人黑客松</strong> — 由加速器和大型电信运营商联合赞助。'],
    // instFFGDesc: remove FFG and AIT references
    ['这是由 FFG 资助、与奥地利技术研究所 (AIT) 合作的国家网络安全培训计划。',
     '这是由政府研究机构资助、与国家技术研究所合作的国家网络安全培训项目。'],
    // instWexTitle
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: '欧洲加速器项目'"],
    // instWexDesc: "中欧领先创新中心" → generic
    ['入选中欧领先创新中心的 <strong>Batch II</strong>，将 LABS.AI 与企业合作伙伴连接，验证平台商业可行性。',
     '入选<strong>欧洲领先的创新加速器</strong>，将 LABS.AI 与企业合作伙伴连接，验证平台的商业可行性。'],
    // instInitsDesc: Vienna → generic
    ['在维也纳大学商业孵化器孵化，获得早期机构支持，优先考虑学术严谨性和可持续商业建模。',
     '在<strong>大学创业孵化器</strong>孵化，获得早期机构支持，优先考虑学术严谨性和可持续商业建模。'],
    // heroDesc: keep existing but check
    ['欧洲学术机构', '学术机构和行业合作伙伴'],
  ],

  'th.ts': [
    // 2006 timeline: "ในเวียนนา ออสเตรีย" was already replaced. Check for remaining pattern
    ['<strong>ก่อตั้งโปรเจกต์</strong>ในยุโรป — การวิจัยเบื้องต้นเกี่ยวกับการจัดการบทสนทนาและสถานะการสนทนา',
     '<strong>ก่อตั้งโปรเจกต์</strong>ในยุโรป — การวิจัยเบื้องต้นเกี่ยวกับการจัดการบทสนทนาและสถานะการสนทนา'], // already done
    // 2008 timeline: inits.at
    ['บ่มเพาะที่ <strong>inits.at</strong> ศูนย์บ่มเพาะธุรกิจมหาวิทยาลัยเวียนนา ด้วยความเข้มงวดทางวิชาการและการสนับสนุนจากสถาบัน',
     'บ่มเพาะที่<strong>ศูนย์บ่มเพาะธุรกิจมหาวิทยาลัย</strong> ด้วยการดูแลทางวิชาการ มุ่งเน้นวิศวกรรมระดับวิจัยและการพัฒนาผลิตภัณฑ์ที่ยั่งยืน'],
    // 2018 timeline: weXelerate
    ['ได้รับเลือกเข้า <strong>weXelerate Batch II</strong> accelerator',
     'ได้รับเลือกเข้า<strong>โปรแกรมเร่งรัดชั้นนำของยุโรป</strong>'],
    // 2018 hackathon
    ['<strong>EDDI Chatbot Hackathon</strong> ครั้งแรกที่ weXelerate เวียนนา — สนับสนุนโดย weXelerate และ T-Mobile',
     '<strong>EDDI Chatbot Hackathon</strong> ครั้งแรก — ร่วมสนับสนุนโดยโปรแกรมเร่งรัดและผู้ให้บริการโทรคมนาคมรายใหญ่'],
    // instFFGDesc: FFG + AIT → generic
    ['ได้รับทุนจาก FFG ร่วมกับ Austrian Institute of Technology (AIT)',
     'ได้รับทุนจากหน่วยงานวิจัยของรัฐบาล ร่วมกับสถาบันวิจัยเทคโนโลยีแห่งชาติ'],
    // instWexTitle
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: 'โปรแกรมเร่งรัดยุโรป'"],
    // instWexDesc
    ['ของศูนย์นวัตกรรมชั้นนำของยุโรปกลาง', 'ของ<strong>โปรแกรมเร่งรัดนวัตกรรมชั้นนำของยุโรป</strong>'],
    // instInitsDesc: Vienna → generic
    ['บ่มเพาะที่ศูนย์บ่มเพาะธุรกิจมหาวิทยาลัยเวียนนา ด้วยการสนับสนุนจากสถาบันในช่วงเริ่มต้นที่ให้ความสำคัญกับความเข้มงวดทางวิชาการและการสร้างแบบจำลองธุรกิจที่ยั่งยืน',
     'บ่มเพาะที่<strong>ศูนย์บ่มเพาะธุรกิจมหาวิทยาลัย</strong> ด้วยการสนับสนุนจากสถาบันในช่วงเริ่มต้นที่ให้ความสำคัญกับความเข้มงวดทางวิชาการและการสร้างแบบจำลองธุรกิจที่ยั่งยืน'],
    // heroDesc
    ['สถาบันวิชาการยุโรป', 'สถาบันวิชาการและพันธมิตรอุตสาหกรรม'],
  ],

  'ko.ts': [
    // 2006: "오스트리아 비엔나에서" → "유럽에서"
    ['오스트리아 비엔나에서 <strong>프로젝트 설립</strong>', '유럽에서 <strong>프로젝트 설립</strong>'],
    // 2008: inits.at 
    ['비엔나 대학 비즈니스 인큐베이터 <strong>inits.at</strong>에서 인큐베이션. 학술적 엄밀성과 기관 지원.',
     '<strong>대학 비즈니스 인큐베이터</strong>에서 인큐베이션. 학술적 감독 하에 연구 수준의 엔지니어링과 지속 가능한 제품 개발에 집중.'],
    // 2018: weXelerate Batch II
    ['<strong>weXelerate Batch II</strong> 액셀러레이터에 선발',
     '<strong>유럽 최고 수준의 액셀러레이터 프로그램</strong>에 선발'],
    // 2018 hackathon
    ['weXelerate(비엔나)에서 최초 <strong>EDDI 챗봇 해커톤</strong> — weXelerate과 T-Mobile 후원.',
     '최초 <strong>EDDI 챗봇 해커톤</strong> — 액셀러레이터와 대형 통신사 공동 후원.'],
    // instWexTitle
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: '유럽 액셀러레이터 프로그램'"],
    // instWexDesc: 중앙유럽 → generic
    ['중앙유럽 최고의 혁신 허브 <strong>Batch II</strong>에 선발. LABS.AI를 기업 파트너와 연결하고 플랫폼의 상업적 실행 가능성을 검증.',
     '<strong>유럽 최고의 혁신 액셀러레이터</strong>에 선발. LABS.AI를 기업 파트너와 연결하고 플랫폼의 상업적 실행 가능성을 검증.'],
    // instInitsDesc
    ['비엔나 대학 비즈니스 인큐베이터에서 인큐베이션. 학술적 엄밀성과 지속 가능한 비즈니스 모델링을 우선시하는 초기 단계 기관 지원.',
     '<strong>대학 비즈니스 인큐베이터</strong>에서 인큐베이션. 학술적 엄밀성과 지속 가능한 비즈니스 모델링을 우선시하는 초기 단계 기관 지원.'],
    // heroDesc
    ['유럽 학술 기관', '학술 기관 및 산업 파트너'],
  ],

  'ja.ts': [
    // 2006: "オーストリア・ウィーンで" → "ヨーロッパで"
    ['オーストリア・ウィーンで<strong>プロジェクト設立</strong>', 'ヨーロッパで<strong>プロジェクト設立</strong>'],
    // 2008: inits.at
    ['ウィーンの大学系ビジネスインキュベーター<strong>inits.at</strong>でインキュベート。学術的厳密さと機関支援。',
     '<strong>大学ビジネスインキュベーター</strong>でインキュベート。学術的監督の下、研究レベルのエンジニアリングと持続可能な製品開発に注力。'],
    // 2018: weXelerate
    ['<strong>weXelerate Batch II</strong>アクセラレーターに選出',
     '<strong>ヨーロッパトップクラスのアクセラレータープログラム</strong>に選出'],
    // 2018 hackathon
    ['weXelerate（ウィーン）で初の<strong>EDDIチャットボットハッカソン</strong> — weXelerateとT-Mobileがスポンサー。',
     '初の<strong>EDDIチャットボットハッカソン</strong> — アクセラレーターと大手通信事業者の共同スポンサー。'],
    // instWexTitle
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: 'ヨーロッパアクセラレータープログラム'"],
    // instWexDesc
    ['中央ヨーロッパ最大のイノベーションハブ', '<strong>ヨーロッパをリードするイノベーションアクセラレーター</strong>'],
    // instInitsDesc
    ['ウィーンの大学系ビジネスインキュベーターでインキュベート。学術的厳密さと持続可能なビジネスモデリングを重視する初期段階の機関支援。',
     '<strong>大学ビジネスインキュベーター</strong>でインキュベート。学術的厳密さと持続可能なビジネスモデリングを重視する初期段階の機関支援。'],
    // heroDesc
    ['ヨーロッパの学術機関', '学術機関と産業パートナー'],
  ],

  'pt.ts': [
    // timelineTitle (different capitalization)
    ['De Viena para o mundo', 'Duas décadas de engenharia'],
    // 2018: weXelerate
    ['Selecionado para o acelerador <strong>weXelerate Batch II</strong>',
     'Selecionado para um <strong>programa de aceleração europeu de primeiro nível</strong>'],
    // 2018 hackathon
    ['no weXelerate, Viena — patrocinado por weXelerate e T-Mobile.',
     '— co-patrocinado por um acelerador e um grande provedor de telecomunicações.'],
    // instFFGDesc: FFG + AIT → generic
    ['financiada pela FFG, em colaboração com o Austrian Institute of Technology (AIT).',
     'financiada por uma agência governamental de pesquisa, em colaboração com um instituto nacional de pesquisa tecnológica.'],
    // instWexTitle
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: 'Programa de aceleração europeu'"],
    // instWexDesc
    ['do principal hub de inovação da Europa Central',
     'de um <strong>acelerador de inovação europeu líder</strong>'],
    // instInitsTitle
    ["instInitsTitle: 'Incubadora inits.at'", "instInitsTitle: 'Incubadora universitária'"],
    // instInitsDesc 
    ['Incubado no incubador empresarial universitário de Viena, com apoio institucional em fase inicial priorizando rigor acadêmico e modelagem empresarial sustentável.',
     'Incubado em um <strong>incubador empresarial universitário</strong>, com apoio institucional em fase inicial priorizando rigor acadêmico e modelagem empresarial sustentável.'],
    // heroDesc
    ['instituições acadêmicas europeias', 'instituições acadêmicas e parceiros da indústria'],
  ],

  'hi.ts': [
    // Need to check what's in this file. Common patterns:
    // instWexTitle
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: 'यूरोपीय एक्सेलेरेटर कार्यक्रम'"],
    // instInitsTitle  
    ["instInitsTitle: 'inits.at Incubator'", "instInitsTitle: 'विश्वविद्यालय इन्क्यूबेटर'"],
  ],

  'ar.ts': [
    // instWexTitle
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: 'برنامج تسريع أوروبي'"],
    // instInitsTitle
    ["instInitsTitle: 'inits.at Incubator'", "instInitsTitle: 'حاضنة جامعية'"],
  ],

  'de.ts': [
    // instWexTitle was matched by key pattern, check
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: 'Europäisches Beschleunigerprogramm'"],
  ],

  'fr.ts': [
    // instWexTitle  
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: 'Programme d\\'accélération européen'"],
  ],

  'es.ts': [
    // instWexTitle
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: 'Programa de aceleración europeo'"],
  ],
};

let totalReplacements = 0;

for (const [locale, replacements] of Object.entries(perFileReplacements)) {
  const filePath = join(localesDir, locale);
  let content = readFileSync(filePath, 'utf-8');
  let fileReplacements = 0;

  for (const [search, replace] of replacements) {
    if (content.includes(search)) {
      content = content.replaceAll(search, replace);
      fileReplacements++;
    }
  }

  if (fileReplacements > 0) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ ${locale}: ${fileReplacements} replacements made`);
    totalReplacements += fileReplacements;
  } else {
    console.log(`⚠️  ${locale}: no matching strings found`);
  }
}

console.log(`\nDone. Total replacements: ${totalReplacements}`);
