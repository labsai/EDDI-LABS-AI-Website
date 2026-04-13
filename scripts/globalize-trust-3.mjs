/**
 * Third pass: remaining references in ar, hi, fr locale files
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const localesDir = join(import.meta.dirname, '..', 'src', 'i18n', 'locales');

const perFileReplacements = {
  'ar.ts': [
    // 2006: "في فيينا" already replaced. Check 2008:
    ['احتضان في <strong>inits.at</strong>، حاضنة الأعمال الجامعية في فيينا، مع الصرامة الأكاديمية والدعم المؤسسي.',
     'احتضان في <strong>حاضنة أعمال جامعية</strong> مع إشراف أكاديمي، مع التركيز على الهندسة البحثية وتطوير المنتجات المستدامة.'],
    // 2018: weXelerate
    ['اختيار لمسرع <strong>weXelerate Batch II</strong>',
     'اختيار لـ<strong>برنامج تسريع أوروبي من الدرجة الأولى</strong>'],
    // 2018 hackathon
    ['أول <strong>هاكاثون EDDI لروبوتات المحادثة</strong> في weXelerate، فيينا — برعاية weXelerate وT-Mobile.',
     'أول <strong>هاكاثون EDDI لروبوتات المحادثة</strong> — برعاية مشتركة من مسرّع أعمال ومزود اتصالات كبير.'],
    // instFFGTitle
    ['وكالة تعزيز البحث النمساوية (FFG)', 'منحة بحث حكومية'],
    // instFFGDesc
    ['ممولة من FFG، بالتعاون مع معهد التكنولوجيا النمساوي (AIT).',
     'ممولة من وكالة بحث حكومية، بالتعاون مع معهد أبحاث تكنولوجي وطني.'],
    // instInitsTitle
    ["instInitsTitle: 'حاضنة inits.at'", "instInitsTitle: 'حاضنة جامعية'"],
    // instWexTitle (was already tried, let's check the exact format)
    ["instWexTitle: 'مسرع weXelerate'", "instWexTitle: 'برنامج تسريع أوروبي'"],
    // Check for different weX format  
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: 'برنامج تسريع أوروبي'"],
    // heroDesc  
    ['المؤسسات الأكاديمية الأوروبية', 'المؤسسات الأكاديمية والشركاء الصناعيين'],
    // timelineTitle if present
    ['من فيينا إلى العالم', 'عقدان من الهندسة'],
    // instInitsDesc
    ['احتضان في حاضنة الأعمال الجامعية في فيينا، مع دعم مؤسسي مبكر يعطي الأولوية للصرامة الأكاديمية ونمذجة الأعمال المستدامة.',
     'احتضان في <strong>حاضنة أعمال جامعية</strong>، مع دعم مؤسسي مبكر يعطي الأولوية للصرامة الأكاديمية ونمذجة الأعمال المستدامة.'],
    // instWexDesc
    ['المركز الرائد للابتكار في أوروبا الوسطى',
     '<strong>مسرّع ابتكار أوروبي رائد</strong>'],
  ],

  'hi.ts': [
    // 2006: "वियना, ऑस्ट्रिया में" → "यूरोप में" (already tried but needs exact match)
    ['वियना, ऑस्ट्रिया में <strong>परियोजना की स्थापना</strong>',
     'यूरोप में <strong>परियोजना की स्थापना</strong>'],
    // 2008: inits.at
    ['वियना के विश्वविद्यालय व्यापार इनक्यूबेटर <strong>inits.at</strong> में इनक्यूबेटेड, शैक्षणिक कठोरता और संस्थागत समर्थन के साथ।',
     '<strong>विश्वविद्यालय व्यापार इनक्यूबेटर</strong> में इनक्यूबेटेड, शैक्षणिक निगरानी के साथ, अनुसंधान-स्तर की इंजीनियरिंग और सतत उत्पाद विकास पर ध्यान केंद्रित।'],
    // 2018: weXelerate
    ['<strong>weXelerate Batch II</strong> एक्सेलेरेटर के लिए चयनित',
     '<strong>शीर्ष स्तरीय यूरोपीय एक्सेलेरेटर प्रोग्राम</strong> के लिए चयनित'],
    // 2018 hackathon
    ['weXelerate, वियना में पहला <strong>EDDI चैटबॉट हैकाथॉन</strong> — weXelerate और T-Mobile द्वारा प्रायोजित।',
     'पहला <strong>EDDI चैटबॉट हैकाथॉन</strong> — एक्सेलेरेटर और प्रमुख दूरसंचार प्रदाता द्वारा सह-प्रायोजित।'],
    // instFFGTitle
    ['ऑस्ट्रियाई अनुसंधान संवर्धन एजेंसी (FFG)', 'सरकारी अनुसंधान अनुदान'],
    // instFFGDesc
    ['FFG द्वारा वित्त पोषित एक राष्ट्रीय साइबर सुरक्षा प्रशिक्षण पहल, Austrian Institute of Technology (AIT) के सहयोग से।',
     'एक सरकारी अनुसंधान एजेंसी द्वारा वित्त पोषित एक राष्ट्रीय साइबर सुरक्षा प्रशिक्षण पहल, एक राष्ट्रीय प्रौद्योगिकी अनुसंधान संस्थान के सहयोग से।'],
    // instInitsTitle
    ["instInitsTitle: 'inits.at इनक्यूबेटर'", "instInitsTitle: 'विश्वविद्यालय इनक्यूबेटर'"],
    // instWexTitle
    ["instWexTitle: 'weXelerate एक्सेलेरेटर'", "instWexTitle: 'यूरोपीय एक्सेलेरेटर कार्यक्रम'"],
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: 'यूरोपीय एक्सेलेरेटर कार्यक्रम'"],
    // instWexDesc  
    ['मध्य यूरोप के प्रमुख नवाचार केंद्र',
     '<strong>यूरोप के अग्रणी नवाचार एक्सेलेरेटर</strong>'],
    // instInitsDesc
    ['वियना के विश्वविद्यालय व्यापार इनक्यूबेटर में इनक्यूबेटेड, शैक्षणिक कठोरता और सतत व्यापार मॉडलिंग को प्राथमिकता देने वाले प्रारंभिक चरण संस्थागत समर्थन के साथ।',
     '<strong>विश्वविद्यालय व्यापार इनक्यूबेटर</strong> में इनक्यूबेटेड, शैक्षणिक कठोरता और सतत व्यापार मॉडलिंग को प्राथमिकता देने वाले प्रारंभिक चरण संस्थागत समर्थन के साथ।'],
    // heroDesc
    ['यूरोपीय शैक्षणिक संस्थानों', 'शैक्षणिक संस्थानों और उद्योग भागीदारों'],
    // timelineTitle
    ['वियना से दुनिया तक', 'दो दशकों की इंजीनियरिंग'],
  ],

  'fr.ts': [
    // 2008: inits.at — with escaped quotes
    ["Incubé chez <strong>inits.at</strong>, l\\'incubateur d\\'entreprises universitaire de Vienne, avec rigueur académique et soutien institutionnel.",
     "Incubé dans un <strong>incubateur d\\'entreprises universitaire</strong> avec encadrement académique, axé sur l\\'ingénierie de niveau recherche et le développement de produit durable."],
    // 2018: weXelerate — with escaped quotes 
    ["Sélectionné pour l\\'accélérateur <strong>weXelerate Batch II</strong>",
     "Sélectionné pour un <strong>programme d\\'accélération européen de premier plan</strong>"],
    // instFFGDesc: FFG + AIT (escaped quotes)
    ["financée par la FFG, en collaboration avec l\\'Austrian Institute of Technology (AIT).",
     "financée par une agence de recherche gouvernementale, en collaboration avec un institut de recherche technologique national."],
    // instWexTitle
    ["instWexTitle: 'weXelerate Accelerator'", "instWexTitle: 'Programme d\\'accélération européen'"],
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
