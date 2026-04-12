/**
 * Replace the entire English page blocks in the new feature page sections
 * with translated versions for all non-English locales.
 *
 * Strategy: For each locale file, find the English page blocks by regex
 * and replace them whole with native translations.
 *
 * Run with: node scripts/translate-page-blocks.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const LOCALES_DIR = join(process.cwd(), 'src', 'i18n', 'locales');

// English source blocks to find and replace (as regex-escaped strings)
const ENG_MULTIAGENT_ITEMS2 = `		heading3: 'Group Conversations & Advanced Orchestration',
		para2: 'EDDI supports <strong>multi-agent group conversations</strong> with 5 built-in discussion styles, nested group structures, and a meta-agent that creates other agents through conversation:',
		items2: [
			'<strong>5 Discussion Styles</strong> — Round Table, Peer Review, Devil\\'s Advocate, Delphi, and Debate',
			'<strong>Nested Groups</strong> — Compose groups of groups for tournament brackets, red-team vs blue-team, and panel reviews',
			'<strong>Agent Father</strong> — A meta-agent that creates other agents through conversation (ships out of the box)',
			'<strong>A2A Protocol</strong> — Full Agent-to-Agent protocol implementation with Agent Cards and cross-platform skill discovery',
			'<strong>Capability Matching</strong> — Discover and route to agents by skill, confidence score, and custom attributes',
		],`;

// Translation for each locale
const TRANSLATED = {
  ja: {
    multiAgentItems2: `		heading3: 'グループ会話＆高度なオーケストレーション',
		para2: 'EDDIは5つの組み込み議論スタイル、ネストグループ構造、会話を通じて他のエージェントを作成するメタエージェントによる<strong>マルチエージェントグループ会話</strong>をサポートします：',
		items2: [
			'<strong>5つの議論スタイル</strong> — ラウンドテーブル、ピアレビュー、悪魔の代弁者（Devil\\'s Advocate）、デルファイ、ディベート',
			'<strong>ネストグループ</strong> — トーナメント形式、レッドチーム vs ブルーチーム、パネルレビューのためのグループのグループを構成',
			'<strong>Agent Father</strong> — 会話を通じて他のエージェントを作成するメタエージェント（すぐに利用可能）',
			'<strong>A2Aプロトコル</strong> — Agent Cardsとクロスプラットフォームスキル発見による完全なAgent-to-Agentプロトコル実装',
			'<strong>能力マッチング</strong> — スキル、コンフィデンススコア、カスタム属性でエージェントを発見しルーティング',
		],`,
    memoryTitle: "title: 'メモリ＆コンテキスト管理',",
    memoryDesc: "description: '永続的なユーザーメモリ、ドリーム統合、ローリングサマリー、トークン対応コンテキストウィンドウ — 知的に記憶し、学習し、忘れるエージェント。',",
    memoryH1: "heading1: '記憶するエージェント',",
    memoryH2: "heading2: 'メモリ機能',",
    memoryH3: "heading3: 'ドリーム統合の仕組み',",
    ragTitle: "title: 'RAG — 検索拡張生成',",
    ragDesc: "description: '7つの埋め込みプロバイダー、5つのベクトルストア、httpCall RAG、非同期ドキュメント取り込み — AIエージェント向けエンタープライズ知識検索。',",
    ragH1: "heading1: 'エンタープライズ知識検索',",
    ragH2: "heading2: 'RAG機能',",
    ragH3: "heading3: '柔軟なデプロイメント',",
    cascTitle: "title: 'インテリジェントモデルカスケード',",
    cascDesc: "description: 'コスト最適化マルチモデルルーティング — 安価なモデルを先に試し、低コンフィデンスでエスカレーション。会話ごとのバジェットとテナントコスト上限。',",
    cascH1: "heading1: 'インテリジェントなコスト最適化',",
    cascH2: "heading2: 'カスケード機能',",
    cascH3: "heading3: '仕組み',",
    schedTitle: "title: 'スケジューリング＆ハートビート',",
    schedDesc: "description: 'Cronトリガーのエージェント実行、プロアクティブ動作のためのハートビートウェイクアップ、メモリメンテナンスのためのドリームサイクル、完全な実行ログ。',",
    schedH1: "heading1: 'プロアクティブなエージェント動作',",
    schedH2: "heading2: 'スケジューリング機能',",
    schedH3: "heading3: 'ユースケース',",
  },
  ko: {
    multiAgentItems2: `		heading3: '그룹 대화 & 고급 오케스트레이션',
		para2: 'EDDI는 5가지 내장 토론 스타일, 중첩 그룹 구조, 대화를 통해 다른 에이전트를 생성하는 메타 에이전트를 통한 <strong>멀티 에이전트 그룹 대화</strong>를 지원합니다:',
		items2: [
			'<strong>5가지 토론 스타일</strong> — 라운드 테이블, 피어 리뷰, 악마의 대변인(Devil\\'s Advocate), 델파이, 디베이트',
			'<strong>중첩 그룹</strong> — 토너먼트 대진, 레드팀 vs 블루팀, 패널 리뷰를 위한 그룹의 그룹 구성',
			'<strong>Agent Father</strong> — 대화를 통해 다른 에이전트를 생성하는 메타 에이전트 (기본 제공)',
			'<strong>A2A 프로토콜</strong> — Agent Cards와 크로스 플랫폼 스킬 발견을 통한 완전한 Agent-to-Agent 프로토콜 구현',
			'<strong>능력 매칭</strong> — 스킬, 신뢰도 점수, 사용자 정의 속성으로 에이전트를 발견하고 라우팅',
		],`,
    memoryTitle: "title: '메모리 & 컨텍스트 관리',",
    memoryH1: "heading1: '기억하는 에이전트',",
    memoryH2: "heading2: '메모리 기능',",
    memoryH3: "heading3: '드림 통합 작동 방식',",
    ragTitle: "title: 'RAG — 검색 증강 생성',",
    ragH1: "heading1: '엔터프라이즈 지식 검색',",
    ragH2: "heading2: 'RAG 기능',",
    ragH3: "heading3: '유연한 배포',",
    cascTitle: "title: '스마트 모델 캐스케이딩',",
    cascH1: "heading1: '지능적 비용 최적화',",
    cascH2: "heading2: '캐스케이딩 기능',",
    cascH3: "heading3: '작동 방식',",
    schedTitle: "title: '스케줄링 & 하트비트',",
    schedH1: "heading1: '프로액티브 에이전트 동작',",
    schedH2: "heading2: '스케줄링 기능',",
    schedH3: "heading3: '사용 사례',",
  },
  zh: {
    multiAgentItems2: `		heading3: '群组对话与高级编排',
		para2: 'EDDI支持<strong>多代理群组对话</strong>，提供5种内置讨论风格、嵌套群组结构，以及通过对话创建其他代理的元代理：',
		items2: [
			'<strong>5种讨论风格</strong> — 圆桌讨论、同行评审、魔鬼代言人（Devil\\'s Advocate）、德尔菲法和辩论',
			'<strong>嵌套群组</strong> — 为锦标赛对阵、红队 vs 蓝队和专家评审组合群组',
			'<strong>Agent Father</strong> — 通过对话创建其他代理的元代理（开箱即用）',
			'<strong>A2A协议</strong> — 完整的Agent-to-Agent协议实现，包括Agent Cards和跨平台技能发现',
			'<strong>能力匹配</strong> — 按技能、置信度评分和自定义属性发现和路由代理',
		],`,
    memoryTitle: "title: '记忆与上下文管理',",
    memoryH1: "heading1: '会记忆的代理',",
    memoryH2: "heading2: '记忆能力',",
    memoryH3: "heading3: '梦境整合工作原理',",
    ragTitle: "title: 'RAG — 检索增强生成',",
    ragH1: "heading1: '企业知识检索',",
    ragH2: "heading2: 'RAG能力',",
    ragH3: "heading3: '灵活部署',",
    cascTitle: "title: '智能模型级联',",
    cascH1: "heading1: '智能成本优化',",
    cascH2: "heading2: '级联功能',",
    cascH3: "heading3: '工作原理',",
    schedTitle: "title: '调度与心跳',",
    schedH1: "heading1: '主动代理行为',",
    schedH2: "heading2: '调度功能',",
    schedH3: "heading3: '使用场景',",
  },
  ar: {
    multiAgentItems2: `		heading3: 'المحادثات الجماعية والتنسيق المتقدم',
		para2: 'يدعم EDDI <strong>محادثات جماعية متعددة الوكلاء</strong> مع 5 أنماط نقاش مدمجة وهياكل مجموعات متداخلة ووكيل أعلى ينشئ وكلاء آخرين من خلال المحادثة:',
		items2: [
			'<strong>5 أنماط نقاش</strong> — طاولة مستديرة، مراجعة الأقران، محامي الشيطان (Devil\\'s Advocate)، دلفي، ومناظرة',
			'<strong>مجموعات متداخلة</strong> — تكوين مجموعات من مجموعات للبطولات، فريق أحمر مقابل أزرق، ومراجعات اللجان',
			'<strong>Agent Father</strong> — وكيل أعلى ينشئ وكلاء آخرين من خلال المحادثة (جاهز للاستخدام)',
			'<strong>بروتوكول A2A</strong> — تنفيذ كامل لبروتوكول وكيل-لوكيل مع بطاقات الوكيل واكتشاف المهارات عبر المنصات',
			'<strong>مطابقة القدرات</strong> — اكتشاف وتوجيه الوكلاء حسب المهارة ودرجة الثقة والسمات المخصصة',
		],`,
    memoryTitle: "title: 'إدارة الذاكرة والسياق',",
    memoryH1: "heading1: 'وكلاء يتذكرون',",
    memoryH2: "heading2: 'قدرات الذاكرة',",
    memoryH3: "heading3: 'كيف يعمل توحيد الأحلام',",
    ragTitle: "title: 'RAG — التوليد المعزز بالاسترجاع',",
    ragH1: "heading1: 'استرجاع معرفة المؤسسات',",
    ragH2: "heading2: 'قدرات RAG',",
    ragH3: "heading3: 'نشر مرن',",
    cascTitle: "title: 'تتابع نماذج ذكي',",
    cascH1: "heading1: 'تحسين ذكي للتكاليف',",
    cascH2: "heading2: 'ميزات التتابع',",
    cascH3: "heading3: 'كيف يعمل',",
    schedTitle: "title: 'الجدولة والنبضات',",
    schedH1: "heading1: 'سلوك استباقي للوكلاء',",
    schedH2: "heading2: 'ميزات الجدولة',",
    schedH3: "heading3: 'حالات الاستخدام',",
  },
  hi: {
    multiAgentItems2: `		heading3: 'समूह वार्तालाप और उन्नत ऑर्केस्ट्रेशन',
		para2: 'EDDI 5 अंतर्निहित चर्चा शैलियों, नेस्टेड समूह संरचनाओं और बातचीत के माध्यम से अन्य एजेंट बनाने वाले मेटा-एजेंट के साथ <strong>मल्टी-एजेंट समूह वार्तालाप</strong> का समर्थन करता है:',
		items2: [
			'<strong>5 चर्चा शैलियाँ</strong> — गोल मेज, सहकर्मी समीक्षा, शैतान का वकील (Devil\\'s Advocate), डेल्फी, और वाद-विवाद',
			'<strong>नेस्टेड समूह</strong> — टूर्नामेंट ब्रैकेट, रेड-टीम vs ब्लू-टीम, और पैनल समीक्षा के लिए समूहों के समूह बनाएं',
			'<strong>Agent Father</strong> — एक मेटा-एजेंट जो बातचीत के माध्यम से अन्य एजेंट बनाता है (डिफ़ॉल्ट रूप से उपलब्ध)',
			'<strong>A2A प्रोटोकॉल</strong> — Agent Cards और क्रॉस-प्लेटफ़ॉर्म स्किल खोज के साथ पूर्ण Agent-to-Agent प्रोटोकॉल कार्यान्वयन',
			'<strong>क्षमता मिलान</strong> — स्किल, विश्वास स्कोर और कस्टम विशेषताओं के अनुसार एजेंटों को खोजें और रूट करें',
		],`,
    memoryTitle: "title: 'मेमोरी और संदर्भ प्रबंधन',",
    memoryH1: "heading1: 'याद रखने वाले एजेंट',",
    memoryH2: "heading2: 'मेमोरी क्षमताएँ',",
    memoryH3: "heading3: 'ड्रीम समेकन कैसे काम करता है',",
    ragTitle: "title: 'RAG — पुनर्प्राप्ति-संवर्धित उत्पादन',",
    ragH1: "heading1: 'एंटरप्राइज़ ज्ञान पुनर्प्राप्ति',",
    ragH2: "heading2: 'RAG क्षमताएँ',",
    ragH3: "heading3: 'लचीला परिनियोजन',",
    cascTitle: "title: 'स्मार्ट मॉडल कैस्केडिंग',",
    cascH1: "heading1: 'बुद्धिमान लागत अनुकूलन',",
    cascH2: "heading2: 'कैस्केडिंग सुविधाएँ',",
    cascH3: "heading3: 'यह कैसे काम करता है',",
    schedTitle: "title: 'शेड्यूलिंग और हार्टबीट',",
    schedH1: "heading1: 'सक्रिय एजेंट व्यवहार',",
    schedH2: "heading2: 'शेड्यूलिंग सुविधाएँ',",
    schedH3: "heading3: 'उपयोग के मामले',",
  },
  th: {
    multiAgentItems2: `		heading3: 'การสนทนากลุ่มและการประสานงานขั้นสูง',
		para2: 'EDDI รองรับ<strong>การสนทนากลุ่มหลายเอเจนต์</strong>ด้วย 5 รูปแบบการอภิปรายในตัว โครงสร้างกลุ่มซ้อน และเมตาเอเจนต์ที่สร้างเอเจนต์อื่นผ่านการสนทนา:',
		items2: [
			'<strong>5 รูปแบบการอภิปราย</strong> — โต๊ะกลม, การทบทวนโดยเพื่อนร่วมงาน, ผู้คัดค้าน (Devil\\'s Advocate), เดลฟี และการโต้วาที',
			'<strong>กลุ่มซ้อน</strong> — จัดกลุ่มของกลุ่มสำหรับรูปแบบทัวร์นาเมนต์, ทีมแดง vs ทีมน้ำเงิน และการทบทวนโดยคณะกรรมการ',
			'<strong>Agent Father</strong> — เมตาเอเจนต์ที่สร้างเอเจนต์อื่นผ่านการสนทนา (พร้อมใช้งานทันที)',
			'<strong>โปรโตคอล A2A</strong> — การใช้งานโปรโตคอล Agent-to-Agent แบบสมบูรณ์พร้อม Agent Cards และการค้นหาทักษะข้ามแพลตฟอร์ม',
			'<strong>การจับคู่ความสามารถ</strong> — ค้นหาและกำหนดเส้นทางไปยังเอเจนต์ตามทักษะ คะแนนความเชื่อมั่น และแอตทริบิวต์ที่กำหนดเอง',
		],`,
    memoryTitle: "title: 'การจัดการหน่วยความจำและบริบท',",
    memoryH1: "heading1: 'เอเจนต์ที่จำได้',",
    memoryH2: "heading2: 'ความสามารถด้านหน่วยความจำ',",
    memoryH3: "heading3: 'การรวม Dream ทำงานอย่างไร',",
    ragTitle: "title: 'RAG — การสร้างเนื้อหาเสริมด้วยการค้นหา',",
    ragH1: "heading1: 'การค้นหาความรู้ระดับองค์กร',",
    ragH2: "heading2: 'ความสามารถ RAG',",
    ragH3: "heading3: 'การปรับใช้แบบยืดหยุ่น',",
    cascTitle: "title: 'การเรียงซ้อนโมเดลอัจฉริยะ',",
    cascH1: "heading1: 'การเพิ่มประสิทธิภาพต้นทุนอัจฉริยะ',",
    cascH2: "heading2: 'ฟีเจอร์การเรียงซ้อน',",
    cascH3: "heading3: 'วิธีการทำงาน',",
    schedTitle: "title: 'การจัดตารางและ Heartbeats',",
    schedH1: "heading1: 'พฤติกรรมเชิงรุกของเอเจนต์',",
    schedH2: "heading2: 'ฟีเจอร์การจัดตาราง',",
    schedH3: "heading3: 'กรณีการใช้งาน',",
  },
};

// Simple replacements: find English heading pattern, replace with native
const HEADING_MAP = {
  memoryTitle: ["title: 'Memory & Context Management',", 'memory'],
  memoryH1: ["heading1: 'Agents That Remember',", 'memory'],
  memoryH2: ["heading2: 'Memory Capabilities',", 'memory'],
  memoryH3: ["heading3: 'How Dream Consolidation Works',", 'memory'],
  ragTitle: ["title: 'RAG — Retrieval-Augmented Generation',", 'rag'],
  ragH1: ["heading1: 'Enterprise Knowledge Retrieval',", 'rag'],
  ragH2: ["heading2: 'RAG Capabilities',", 'rag'],
  ragH3: ["heading3: 'Flexible Deployment',", 'rag'],
  cascTitle: ["title: 'Smart Model Cascading',", 'modelCascading'],
  cascH1: ["heading1: 'Intelligent Cost Optimization',", 'modelCascading'],
  cascH2: ["heading2: 'Cascading Features',", 'modelCascading'],
  cascH3: ["heading3: 'How It Works',", 'modelCascading'],
  schedTitle: ["title: 'Scheduling & Heartbeats',", 'scheduling'],
  schedH1: ["heading1: 'Proactive Agent Behavior',", 'scheduling'],
  schedH2: ["heading2: 'Scheduling Features',", 'scheduling'],
  schedH3: ["heading3: 'Use Cases',", 'scheduling'],
};

for (const [locale, trans] of Object.entries(TRANSLATED)) {
  const file = join(LOCALES_DIR, `${locale}.ts`);
  let content = readFileSync(file, 'utf-8');
  let count = 0;

  // 1. Replace multiAgent items2 block
  if (content.includes(ENG_MULTIAGENT_ITEMS2)) {
    content = content.replace(ENG_MULTIAGENT_ITEMS2, trans.multiAgentItems2);
    count++;
  }

  // 2. Replace individual headings
  for (const [key, [engStr, _page]] of Object.entries(HEADING_MAP)) {
    const nativeStr = trans[key];
    if (nativeStr && content.includes(engStr)) {
      content = content.replace(engStr, nativeStr);
      count++;
    }
  }

  // Also replace description strings for memory/rag/cascading/scheduling
  if (trans.memoryDesc) {
    const engMemDesc = "description: 'Persistent user memory, dream consolidation, rolling summaries, and token-aware context windowing — agents that remember, learn, and forget intelligently.',";
    if (content.includes(engMemDesc)) {
      content = content.replace(engMemDesc, trans.memoryDesc);
      count++;
    }
  }
  if (trans.ragDesc) {
    const engRagDesc = "description: '7 embedding providers, 5 vector stores, httpCall RAG, and async document ingestion — enterprise-grade knowledge retrieval for AI agents.',";
    if (content.includes(engRagDesc)) {
      content = content.replace(engRagDesc, trans.ragDesc);
      count++;
    }
  }
  if (trans.cascDesc) {
    const engCascDesc = "description: 'Cost-optimized multi-model routing — try cheap models first, escalate on low confidence. Per-conversation budgets and tenant cost ceilings.',";
    if (content.includes(engCascDesc)) {
      content = content.replace(engCascDesc, trans.cascDesc);
      count++;
    }
  }
  if (trans.schedDesc) {
    const engSchedDesc = "description: 'Cron-triggered agent execution, heartbeat wake-ups for proactive behavior, dream cycles for memory maintenance, and complete fire logging.',";
    if (content.includes(engSchedDesc)) {
      content = content.replace(engSchedDesc, trans.schedDesc);
      count++;
    }
  }

  writeFileSync(file, content, 'utf-8');
  console.log(`✓ ${locale}.ts: ${count} replacements`);
}

console.log('\nDone! All page blocks translated.');
