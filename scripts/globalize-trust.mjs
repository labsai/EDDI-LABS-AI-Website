/**
 * Script to globalize the trust section in all non-English locale files.
 * Replaces Austria-specific references with universally descriptive language
 * while preserving the translated text around those references.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const localesDir = join(import.meta.dirname, '..', 'src', 'i18n', 'locales');
const locales = ['de', 'fr', 'es', 'ar', 'hi', 'ja', 'ko', 'pt', 'th', 'zh'];

// Define replacements as [search, replace] pairs
// These target specific Austria-centric strings that appear across all locale files
const replacements = [
  // ─── heroDesc: "European academic institutions" → "academic institutions and industry partners"
  // Various translations of this phrase
  
  // ─── timelineTitle: "From Vienna to the World" variants
  ['Von Wien in die Welt', 'Zwei Jahrzehnte Engineering'],
  ['De Vienne au monde', 'Deux décennies d\'ingénierie'],
  ['De Viena al mundo', 'Dos décadas de ingeniería'],
  ['من فيينا إلى العالم', 'عقدان من الهندسة'],
  ['वियना से दुनिया तक', 'दो दशकों की इंजीनियरिंग'],
  ['ウィーンから世界へ', '20年にわたるエンジニアリング'],
  ['비엔나에서 세계로', '20년간의 엔지니어링'],
  ['De Viena para o Mundo', 'Duas décadas de engenharia'],
  ['จากเวียนนาสู่โลก', 'สองทศวรรษแห่งวิศวกรรม'],
  ['从维也纳到世界', '二十年的工程实践'],

  // ─── Timeline entries: 2006 — "in Vienna, Austria" → "in Europe"
  ['in Wien, Österreich', 'in Europa'],
  ['à Vienne, Autriche', 'en Europe'],
  ['en Viena, Austria', 'en Europa'],
  ['في فيينا، النمسا', 'في أوروبا'],
  ['वियना, ऑस्ट्रिया में', 'यूरोप में'],
  ['ウィーン（オーストリア）で', 'ヨーロッパで'],
  ['비엔나, 오스트리아에서', '유럽에서'],
  ['em Viena, Áustria', 'na Europa'],
  ['ที่เวียนนา ออสเตรีย', 'ในยุโรป'],
  ['在维也纳，奥地利', '在欧洲'],

  // ─── Timeline entries: 2008 — inits.at references
  // German
  ['Inkubiert bei <strong>inits.at</strong>, dem Wiener Universitäts-Gründerzentrum, mit akademischer Strenge und institutioneller Unterstützung.',
   'Inkubiert in einem <strong>Universitäts-Gründerzentrum</strong> mit akademischer Betreuung, Fokus auf forschungsnahe Entwicklung und nachhaltige Produktentwicklung.'],
  // French
  ['Incubé chez <strong>inits.at</strong>, l\'incubateur d\'entreprises universitaire de Vienne, avec rigueur académique et soutien institutionnel.',
   'Incubé dans un <strong>incubateur d\'entreprises universitaire</strong> avec encadrement académique, axé sur l\'ingénierie de niveau recherche et le développement de produit durable.'],
  // Spanish  
  ['Incubado en <strong>inits.at</strong>, la incubadora de empresas universitaria de Viena, con rigor académico y apoyo institucional.',
   'Incubado en una <strong>incubadora de empresas universitaria</strong> con supervisión académica, enfocado en ingeniería de nivel investigación y desarrollo de producto sostenible.'],
  // Portuguese
  ['Incubado no <strong>inits.at</strong>, o incubador empresarial universitário de Viena, com rigor acadêmico e apoio institucional.',
   'Incubado em um <strong>incubador empresarial universitário</strong> com supervisão acadêmica, focado em engenharia de nível pesquisa e desenvolvimento de produto sustentável.'],

  // ─── Timeline entries: 2018 — weXelerate Batch II → "top-tier European accelerator program"
  ['<strong>weXelerate Batch II</strong> Accelerator', '<strong>führendes europäisches Beschleunigerprogramm</strong>'],
  ['<strong>weXelerate Batch II</strong> accelerator', '<strong>führendes europäisches Beschleunigerprogramm</strong>'],
  ['l\'accélérateur <strong>weXelerate Batch II</strong>', 'un <strong>programme d\'accélération européen de premier plan</strong>'],
  ['el acelerador <strong>weXelerate Batch II</strong>', 'un <strong>programa de aceleración europeo de primer nivel</strong>'],
  ['Ausgewählt für den <strong>weXelerate Batch II</strong> Accelerator', 'Ausgewählt für ein <strong>führendes europäisches Beschleunigerprogramm</strong>'],
  ['Sélectionné pour l\'accélérateur <strong>weXelerate Batch II</strong>', 'Sélectionné pour un <strong>programme d\'accélération européen de premier plan</strong>'],
  ['Seleccionado para el acelerador <strong>weXelerate Batch II</strong>', 'Seleccionado para un <strong>programa de aceleración europeo de primer nivel</strong>'],

  // ─── Timeline entries: 2018 — Hackathon at weXelerate → generic
  ['bei weXelerate, Wien — gesponsert von weXelerate und T-Mobile', '— co-finanziert von einem Accelerator und einem großen Telekommunikationsanbieter'],
  ['chez weXelerate, Vienne — sponsorisé par weXelerate et T-Mobile', '— co-sponsorisé par un accélérateur et un grand opérateur de télécommunications'],
  ['en weXelerate, Viena — patrocinado por weXelerate y T-Mobile', '— co-patrocinado por un acelerador y un gran proveedor de telecomunicaciones'],

  // ─── instFFGTitle: Austrian-specific → generic
  ['Österreichische Forschungsförderungsgesellschaft (FFG)', 'Staatliche Forschungsförderung'],
  ['Agence autrichienne de promotion de la recherche (FFG)', 'Subvention de recherche gouvernementale'],
  ['Agencia Austriaca de Promoción de la Investigación (FFG)', 'Subvención de investigación gubernamental'],
  ['奥地利研究促进署 (FFG)', '政府研究资助'],
  ['オーストリア研究促進庁（FFG）', '政府研究助成金'],
  ['오스트리아 연구 촉진청 (FFG)', '정부 연구 보조금'],
  ['สำนักงานส่งเสริมการวิจัยออสเตรีย (FFG)', 'ทุนวิจัยจากรัฐบาล'],
  ['Agência Austríaca de Promoção da Pesquisa (FFG)', 'Subvenção de pesquisa governamental'],

  // ─── instFFGDesc: FFG specific → generic
  ['gefördert von der FFG, in Zusammenarbeit mit dem Austrian Institute of Technology (AIT)',
   'gefördert von einer staatlichen Forschungsagentur, in Zusammenarbeit mit einem nationalen Technologieforschungsinstitut'],
  ['financée par la FFG, en collaboration avec l\'Austrian Institute of Technology (AIT)',
   'financée par une agence de recherche gouvernementale, en collaboration avec un institut de recherche technologique national'],
  ['financiada por la FFG, en colaboración con el Austrian Institute of Technology (AIT)',
   'financiada por una agencia de investigación gubernamental, en colaboración con un instituto nacional de investigación tecnológica'],
  ['FFG가 지원하고 Austrian Institute of Technology (AIT)와 협력한',
   '정부 연구 기관이 지원하고 국가 기술 연구소와 협력한'],
  ['FFGが助成し、Austrian Institute of Technology（AIT）と共同で実施された',
   '政府の研究機関が助成し、国立技術研究所と共同で実施された'],

  // ─── instWexTitle: "weXelerate Accelerator" → "European Accelerator Program"
  ['instWexTitle: \'weXelerate Accelerator\'', 'instWexTitle: \'Europäisches Beschleunigerprogramm\''],

  // ─── instInitsTitle: "inits.at Incubator/Inkubator" → "University Incubator/Inkubator"  
  ['instInitsTitle: \'inits.at Inkubator\'', 'instInitsTitle: \'Universitäts-Inkubator\''],
  ['instInitsTitle: \'Incubateur inits.at\'', 'instInitsTitle: \'Incubateur universitaire\''],
  ['instInitsTitle: \'Incubadora inits.at\'', 'instInitsTitle: \'Incubadora universitaria\''],
  ['instInitsTitle: \'inits.at 인큐베이터\'', 'instInitsTitle: \'대학 인큐베이터\''],
  ['instInitsTitle: \'inits.atインキュベーター\'', 'instInitsTitle: \'大学インキュベーター\''],
  ['instInitsTitle: \'inits.at 孵化器\'', 'instInitsTitle: \'大学创业孵化器\''],
  ['instInitsTitle: \'inits.at Incubator\'', 'instInitsTitle: \'University Incubator\''],

  // ─── instInitsDesc: Vienna-specific → generic 
  ['Inkubiert am Wiener Universitäts-Gründerzentrum, mit frühphasiger institutioneller Unterstützung, die akademische Strenge und nachhaltige Geschäftsmodellierung priorisierte.',
   'Inkubiert in einem <strong>Universitäts-Gründerzentrum</strong>, mit frühphasiger institutioneller Unterstützung, die akademische Strenge und nachhaltige Geschäftsmodellierung priorisierte.'],
  ['Incubé à l\'incubateur d\'entreprises universitaire de Vienne, avec un soutien institutionnel en phase initiale privilégiant la rigueur académique et la modélisation d\'entreprise durable.',
   'Incubé dans un <strong>incubateur d\'entreprises universitaire</strong>, avec un soutien institutionnel en phase initiale privilégiant la rigueur académique et la modélisation d\'entreprise durable.'],
  ['Incubado en la incubadora de empresas universitaria de Viena, con apoyo institucional en fase temprana priorizando el rigor académico y la modelización empresarial sostenible.',
   'Incubado en una <strong>incubadora de empresas universitaria</strong>, con apoyo institucional en fase temprana priorizando el rigor académico y la modelización empresarial sostenible.'],

  // ─── instWexDesc: "Central Europe's" → "a leading European"
  ['des führenden Innovationshubs in Zentraleuropa',
   'eines <strong>führenden europäischen Innovationsbeschleunigers</strong>'],
  ['du principal hub d\'innovation d\'Europe centrale',
   'd\'un <strong>accélérateur d\'innovation européen de premier plan</strong>'],
  ['del principal hub de innovación de Europa Central',
   'de un <strong>acelerador de innovación europeo líder</strong>'],

  // ─── heroDesc: "European academic institutions" → "academic institutions and industry partners"
  ['europäischen akademischen Institutionen', 'akademischen Institutionen und Industriepartnern'],
  ['institutions académiques européennes', 'institutions académiques et partenaires industriels'],
  ['instituciones académicas europeas', 'instituciones académicas y socios industriales'],
];

let errors = 0;
let totalReplacements = 0;

for (const locale of locales) {
  const filePath = join(localesDir, `${locale}.ts`);
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
    console.log(`✅ ${locale}.ts: ${fileReplacements} replacements made`);
    totalReplacements += fileReplacements;
  } else {
    console.log(`⚠️  ${locale}.ts: no matching strings found`);
  }
}

console.log(`\nDone. Total replacements: ${totalReplacements}`);
if (errors > 0) console.log(`Errors: ${errors}`);
