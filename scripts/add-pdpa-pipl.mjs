/**
 * Script to add Malaysia PDPA and China PIPL compliance keys to all non-en, non-zh locale files.
 * Inserts after the pdpaItems block and updates description + para2.
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const localesDir = join(__dirname, '..', 'src', 'i18n', 'locales');

// Locale-specific translations for the new keys
const translations = {
	de: {
		pdpaMYHeading: 'PDPA — Malaysia',
		pdpaMYPara: 'Malaysias Personal Data Protection Act 2010 (Act 709, geändert 2024) regelt die kommerzielle Verarbeitung personenbezogener Daten durch 7 Datenschutzprinzipien. EDDI bietet die technischen Kontrollen zur Unterstützung der Compliance des Betreibers:',
		pdpaMYItems: [
			'<strong>Allgemeines Prinzip (§6)</strong> — Konfigurierbare Aufbewahrungsrichtlinien und Verarbeitungsbeschränkungsendpunkt unterstützen zweckgebundene, einwilligungsbasierte Verarbeitung',
			'<strong>Sicherheitsprinzip (§9)</strong> — AES-256-GCM Vault-Verschlüsselung, HMAC-SHA256 Audit-Integrität, Keycloak OIDC, RBAC, SSRF-Schutz',
			'<strong>Aufbewahrungsprinzip (§10)</strong> — Konfigurierbare kategoriebasierte Aufbewahrung mit automatischer Bereinigung; automatisches Beenden inaktiver Konversationen',
			'<strong>Datenintegritätsprinzip (§11)</strong> — Zeitgestempelter, versionierter Konversationsstatus; Benutzerspeicher über REST API aktualisierbar',
			'<strong>Zugriffsprinzip (§12)</strong> — Vollständiger Datenexport über <code>GET /admin/gdpr/{userId}/export</code> liefert alle Benutzerdaten als strukturiertes JSON',
			'<strong>Grenzüberschreitende Übertragungen (§129)</strong> — Self-Hosted-Architektur ermöglicht Betreibern die Kontrolle über die Datenresidenz; Audit-Trail dokumentiert alle LLM-Provider-Datenflüsse',
		],
		piplHeading: 'PIPL — China',
		piplPara: 'Chinas Gesetz zum Schutz personenbezogener Daten (2021) ist eines der umfassendsten Datenschutzgesetze der Welt und regelt die Verarbeitung personenbezogener Daten von Personen in China. EDDI bietet die technische Infrastruktur für PIPL-konforme Bereitstellungen:',
		piplItems: [
			'<strong>Rechtmäßige Verarbeitung (Art. 13)</strong> — Konfigurationsgesteuerte Agentenverhaltensweisen stellen sicher, dass die Verarbeitung im definierten Zweck bleibt; Verarbeitungsbeschränkungs-API friert Aktivitäten bei Bedarf ein',
			'<strong>Individuelle Rechte (Art. 44–49)</strong> — Vollständiger Datenexport, Kaskadenlöschung und Verarbeitungsbeschränkungsendpunkte decken Auskunfts-, Kopie-, Berichtigungs-, Lösch- und Einschränkungsrecht ab',
			'<strong>Datensicherheit (Art. 51)</strong> — AES-256-GCM Vault-Verschlüsselung, HMAC-SHA256 Audit-Integrität, Keycloak OIDC, RBAC, kein <code>eval()</code>',
			'<strong>Grenzüberschreitende Übertragungen (Art. 38–39)</strong> — Self-Hosted-Architektur ermöglicht On-Premises-Bereitstellung in China; Audit-Trail dokumentiert alle externen Datenflüsse für Sicherheitsbewertungen',
			'<strong>Automatisierte Entscheidungsfindung (Art. 24)</strong> — Unveränderliche Audit-Trails mit vollständiger Pipeline-Nachverfolgung bieten Transparenz bei KI-Entscheidungen; menschliche Aufsicht über das Management-UI',
			'<strong>Datenaufbewahrung (Art. 19)</strong> — Konfigurierbare Aufbewahrungsrichtlinien mit automatischer Bereinigung setzen minimale notwendige Speicherzeiträume durch',
		],
	},
	es: {
		pdpaMYHeading: 'PDPA — Malasia',
		pdpaMYPara: 'La Ley de Protección de Datos Personales de Malasia 2010 (Ley 709, enmendada 2024) rige el procesamiento comercial de datos personales a través de 7 principios de protección de datos. EDDI proporciona los controles técnicos para respaldar el cumplimiento del implementador:',
		pdpaMYItems: [
			'<strong>Principio General (§6)</strong> — Políticas de retención configurables y endpoint de restricción de procesamiento soportan procesamiento limitado por propósito y basado en consentimiento',
			'<strong>Principio de Seguridad (§9)</strong> — Cifrado de bóveda AES-256-GCM, integridad de auditoría HMAC-SHA256, Keycloak OIDC, RBAC, protección SSRF',
			'<strong>Principio de Retención (§10)</strong> — Retención configurable por categoría con limpieza automática; finalización automática de conversaciones inactivas',
			'<strong>Principio de Integridad de Datos (§11)</strong> — Estado de conversación versionado con marca de tiempo; memorias de usuario actualizables via REST API',
			'<strong>Principio de Acceso (§12)</strong> — Exportación completa de datos via <code>GET /admin/gdpr/{userId}/export</code> devuelve todos los datos de usuario como JSON estructurado',
			'<strong>Transferencias Transfronterizas (§129)</strong> — La arquitectura autoalojada permite a los implementadores controlar la residencia de datos; el registro de auditoría documenta todos los flujos de datos de proveedores LLM',
		],
		piplHeading: 'PIPL — China',
		piplPara: 'La Ley de Protección de la Información Personal de China (2021) es una de las leyes de protección de datos más completas del mundo, que rige el procesamiento de información personal de individuos dentro de China. EDDI proporciona la infraestructura técnica para despliegues conformes con PIPL:',
		piplItems: [
			'<strong>Procesamiento Lícito (Art. 13)</strong> — El comportamiento de agentes dirigido por configuración asegura que el procesamiento se mantenga dentro de los propósitos definidos; la API de restricción de procesamiento congela la actividad a demanda',
			'<strong>Derechos Individuales (Art. 44–49)</strong> — Endpoints de exportación completa de datos, eliminación en cascada y restricción de procesamiento cubren los derechos de conocer, copiar, corregir, eliminar y restringir',
			'<strong>Seguridad de Datos (Art. 51)</strong> — Cifrado de bóveda AES-256-GCM, integridad de auditoría HMAC-SHA256, Keycloak OIDC, RBAC, cero <code>eval()</code>',
			'<strong>Transferencias Transfronterizas (Art. 38–39)</strong> — La arquitectura autoalojada permite el despliegue local dentro de China; el registro de auditoría documenta todos los flujos de datos externos para evaluaciones de seguridad',
			'<strong>Toma de Decisiones Automatizada (Art. 24)</strong> — Registros de auditoría inmutables con trazabilidad completa del pipeline proporcionan transparencia en la toma de decisiones de IA; supervisión humana via UI de gestión',
			'<strong>Retención de Datos (Art. 19)</strong> — Políticas de retención configurables con limpieza automática imponen períodos de almacenamiento mínimos necesarios',
		],
	},
	fr: {
		pdpaMYHeading: 'PDPA — Malaisie',
		pdpaMYPara: 'La loi malaisienne sur la protection des données personnelles de 2010 (Loi 709, modifiée en 2024) régit le traitement commercial des données personnelles à travers 7 principes de protection des données. EDDI fournit les contrôles techniques pour soutenir la conformité du déployeur :',
		pdpaMYItems: [
			'<strong>Principe Général (§6)</strong> — Politiques de rétention configurables et endpoint de restriction de traitement soutiennent le traitement limité par finalité et basé sur le consentement',
			'<strong>Principe de Sécurité (§9)</strong> — Chiffrement de coffre AES-256-GCM, intégrité d\'audit HMAC-SHA256, Keycloak OIDC, RBAC, protection SSRF',
			'<strong>Principe de Rétention (§10)</strong> — Rétention configurable par catégorie avec nettoyage automatique ; fin automatique des conversations inactives',
			'<strong>Principe d\'Intégrité des Données (§11)</strong> — État de conversation versionné et horodaté ; mémoires utilisateur modifiables via API REST',
			'<strong>Principe d\'Accès (§12)</strong> — Export complet des données via <code>GET /admin/gdpr/{userId}/export</code> retourne toutes les données utilisateur en JSON structuré',
			'<strong>Transferts Transfrontaliers (§129)</strong> — L\'architecture auto-hébergée permet aux déployeurs de contrôler la résidence des données ; la piste d\'audit documente tous les flux de données des fournisseurs LLM',
		],
		piplHeading: 'PIPL — Chine',
		piplPara: 'La loi chinoise sur la protection des informations personnelles (2021) est l\'une des lois de protection des données les plus complètes au monde, régissant le traitement des informations personnelles des individus en Chine. EDDI fournit l\'infrastructure technique pour des déploiements conformes au PIPL :',
		piplItems: [
			'<strong>Traitement Licite (Art. 13)</strong> — Le comportement d\'agent piloté par configuration assure que le traitement reste dans les finalités définies ; l\'API de restriction de traitement gèle l\'activité sur demande',
			'<strong>Droits Individuels (Art. 44–49)</strong> — Export complet des données, suppression en cascade et endpoints de restriction de traitement couvrent les droits de connaître, copier, corriger, supprimer et restreindre',
			'<strong>Sécurité des Données (Art. 51)</strong> — Chiffrement de coffre AES-256-GCM, intégrité d\'audit HMAC-SHA256, Keycloak OIDC, RBAC, zéro <code>eval()</code>',
			'<strong>Transferts Transfrontaliers (Art. 38–39)</strong> — L\'architecture auto-hébergée permet le déploiement sur site en Chine ; la piste d\'audit documente tous les flux de données externes pour les évaluations de sécurité',
			'<strong>Prise de Décision Automatisée (Art. 24)</strong> — Pistes d\'audit immuables avec traçabilité complète du pipeline offrent la transparence dans la prise de décision IA ; supervision humaine via l\'interface de gestion',
			'<strong>Conservation des Données (Art. 19)</strong> — Politiques de rétention configurables avec nettoyage automatique imposent des durées de stockage minimales nécessaires',
		],
	},
	ar: {
		pdpaMYHeading: 'PDPA — ماليزيا',
		pdpaMYPara: 'قانون حماية البيانات الشخصية الماليزي 2010 (القانون 709، المعدل 2024) يحكم المعالجة التجارية للبيانات الشخصية من خلال 7 مبادئ لحماية البيانات. يوفر EDDI الضوابط التقنية لدعم امتثال المنشر:',
		pdpaMYItems: [
			'<strong>المبدأ العام (§6)</strong> — سياسات الاحتفاظ القابلة للتكوين ونقطة نهاية تقييد المعالجة تدعم المعالجة المحدودة الغرض والقائمة على الموافقة',
			'<strong>مبدأ الأمان (§9)</strong> — تشفير الخزنة AES-256-GCM، سلامة التدقيق HMAC-SHA256، Keycloak OIDC، RBAC، حماية SSRF',
			'<strong>مبدأ الاحتفاظ (§10)</strong> — احتفاظ قابل للتكوين حسب الفئة مع تنظيف تلقائي؛ إنهاء تلقائي للمحادثات الخاملة',
			'<strong>مبدأ سلامة البيانات (§11)</strong> — حالة محادثة مُعَنْوَنة بالإصدار مع طابع زمني؛ ذاكريات المستخدم قابلة للتحديث عبر REST API',
			'<strong>مبدأ الوصول (§12)</strong> — تصدير كامل للبيانات عبر <code>GET /admin/gdpr/{userId}/export</code> يرجع جميع بيانات المستخدم كـ JSON منظم',
			'<strong>التحويلات عبر الحدود (§129)</strong> — البنية المستضافة ذاتياً تمكن المنشرين من التحكم في إقامة البيانات؛ مسار التدقيق يوثق جميع تدفقات بيانات مزودي LLM',
		],
		piplHeading: 'PIPL — الصين',
		piplPara: 'قانون حماية المعلومات الشخصية الصيني (2021) هو أحد أشمل قوانين حماية البيانات في العالم، ويحكم معالجة المعلومات الشخصية للأفراد داخل الصين. يوفر EDDI البنية التحتية التقنية لعمليات النشر المتوافقة مع PIPL:',
		piplItems: [
			'<strong>المعالجة المشروعة (المادة 13)</strong> — سلوك الوكيل المدفوع بالتكوين يضمن بقاء المعالجة ضمن الأغراض المحددة؛ واجهة تقييد المعالجة تجمد النشاط عند الطلب',
			'<strong>الحقوق الفردية (المادة 44-49)</strong> — نقاط نهاية تصدير البيانات الكاملة والحذف المتتالي وتقييد المعالجة تغطي حق المعرفة والنسخ والتصحيح والحذف والتقييد',
			'<strong>أمن البيانات (المادة 51)</strong> — تشفير الخزنة AES-256-GCM، سلامة التدقيق HMAC-SHA256، Keycloak OIDC، RBAC، صفر <code>eval()</code>',
			'<strong>التحويلات عبر الحدود (المادة 38-39)</strong> — البنية المستضافة ذاتياً تمكن النشر المحلي داخل الصين؛ مسار التدقيق يوثق جميع تدفقات البيانات الخارجية لتقييمات الأمان',
			'<strong>اتخاذ القرار الآلي (المادة 24)</strong> — مسارات تدقيق غير قابلة للتغيير مع تتبع كامل لخط الأنابيب توفر الشفافية في اتخاذ قرارات الذكاء الاصطناعي؛ إشراف بشري عبر واجهة الإدارة',
			'<strong>الاحتفاظ بالبيانات (المادة 19)</strong> — سياسات احتفاظ قابلة للتكوين مع تنظيف تلقائي تفرض فترات تخزين ضرورية كحد أدنى',
		],
	},
	hi: {
		pdpaMYHeading: 'PDPA — मलेशिया',
		pdpaMYPara: 'मलेशिया का व्यक्तिगत डेटा संरक्षण अधिनियम 2010 (अधिनियम 709, 2024 में संशोधित) 7 डेटा संरक्षण सिद्धांतों के माध्यम से वाणिज्यिक व्यक्तिगत डेटा प्रसंस्करण को नियंत्रित करता है। EDDI तैनाती करने वालों के अनुपालन का समर्थन करने के लिए तकनीकी नियंत्रण प्रदान करता है:',
		pdpaMYItems: [
			'<strong>सामान्य सिद्धांत (§6)</strong> — कॉन्फ़िगर करने योग्य प्रतिधारण नीतियां और प्रसंस्करण-प्रतिबंध एंडपॉइंट उद्देश्य-सीमित, सहमति-आधारित प्रसंस्करण का समर्थन करते हैं',
			'<strong>सुरक्षा सिद्धांत (§9)</strong> — AES-256-GCM वॉल्ट एन्क्रिप्शन, HMAC-SHA256 ऑडिट अखंडता, Keycloak OIDC, RBAC, SSRF सुरक्षा',
			'<strong>प्रतिधारण सिद्धांत (§10)</strong> — श्रेणी के अनुसार कॉन्फ़िगर करने योग्य प्रतिधारण और स्वचालित सफाई; निष्क्रिय वार्तालाप स्वचालित समाप्ति',
			'<strong>डेटा अखंडता सिद्धांत (§11)</strong> — टाइमस्टैम्प के साथ संस्करणित वार्तालाप स्थिति; REST API के माध्यम से उपयोगकर्ता मेमोरी अपडेट करने योग्य',
			'<strong>पहुँच सिद्धांत (§12)</strong> — <code>GET /admin/gdpr/{userId}/export</code> के माध्यम से पूर्ण डेटा निर्यात सभी उपयोगकर्ता डेटा को संरचित JSON के रूप में लौटाता है',
			'<strong>सीमा-पार स्थानांतरण (§129)</strong> — स्व-होस्टेड आर्किटेक्चर तैनाती करने वालों को डेटा रेसीडेंसी नियंत्रित करने में सक्षम बनाता है; ऑडिट ट्रेल सभी LLM प्रदाता डेटा प्रवाह को दस्तावेज़ित करता है',
		],
		piplHeading: 'PIPL — चीन',
		piplPara: 'चीन का व्यक्तिगत सूचना संरक्षण कानून (2021) दुनिया के सबसे व्यापक डेटा संरक्षण कानूनों में से एक है, जो चीन के भीतर व्यक्तियों की व्यक्तिगत जानकारी के प्रसंस्करण को नियंत्रित करता है। EDDI PIPL-अनुपालक तैनाती के लिए तकनीकी बुनियादी ढांचा प्रदान करता है:',
		piplItems: [
			'<strong>वैध प्रसंस्करण (अनुच्छेद 13)</strong> — कॉन्फ़िगरेशन-संचालित एजेंट व्यवहार सुनिश्चित करता है कि प्रसंस्करण परिभाषित उद्देश्यों के भीतर रहे; प्रसंस्करण प्रतिबंध API मांग पर गतिविधि को फ्रीज करता है',
			'<strong>व्यक्तिगत अधिकार (अनुच्छेद 44-49)</strong> — पूर्ण डेटा निर्यात, कैस्केड विलोपन और प्रसंस्करण प्रतिबंध एंडपॉइंट जानने, कॉपी करने, सही करने, हटाने और प्रतिबंधित करने के अधिकार को कवर करते हैं',
			'<strong>डेटा सुरक्षा (अनुच्छेद 51)</strong> — AES-256-GCM वॉल्ट एन्क्रिप्शन, HMAC-SHA256 ऑडिट अखंडता, Keycloak OIDC, RBAC, शून्य <code>eval()</code>',
			'<strong>सीमा-पार स्थानांतरण (अनुच्छेद 38-39)</strong> — स्व-होस्टेड आर्किटेक्चर चीन के भीतर ऑन-प्रिमाइसेस तैनाती को सक्षम बनाता है; ऑडिट ट्रेल सुरक्षा मूल्यांकन के लिए सभी बाहरी डेटा प्रवाह दस्तावेज़ित करता है',
			'<strong>स्वचालित निर्णय-निर्माण (अनुच्छेद 24)</strong> — पूर्ण पाइपलाइन ट्रेसिंग के साथ अपरिवर्तनीय ऑडिट ट्रेल AI निर्णय-निर्माण में पारदर्शिता प्रदान करते हैं; प्रबंधन UI के माध्यम से मानव निगरानी',
			'<strong>डेटा प्रतिधारण (अनुच्छेद 19)</strong> — स्वचालित सफाई के साथ कॉन्फ़िगर करने योग्य प्रतिधारण नीतियां न्यूनतम-आवश्यक भंडारण अवधि लागू करती हैं',
		],
	},
	ja: {
		pdpaMYHeading: 'PDPA — マレーシア',
		pdpaMYPara: 'マレーシアの2010年個人データ保護法（法令709、2024年改正）は、7つのデータ保護原則を通じて商業的な個人データ処理を規定しています。EDDIは導入者のコンプライアンスを支援する技術的コントロールを提供します：',
		pdpaMYItems: [
			'<strong>一般原則（第6条）</strong> — 構成可能な保持ポリシーと処理制限エンドポイントが目的限定・同意ベースの処理をサポート',
			'<strong>セキュリティ原則（第9条）</strong> — AES-256-GCMボールト暗号化、HMAC-SHA256監査整合性、Keycloak OIDC、RBAC、SSRF防御',
			'<strong>保持原則（第10条）</strong> — カテゴリ別の構成可能な保持と自動クリーンアップ；アイドル会話の自動終了',
			'<strong>データ整合性原則（第11条）</strong> — タイムスタンプ付きバージョン管理された会話状態；ユーザーメモリはREST APIで更新可能',
			'<strong>アクセス原則（第12条）</strong> — <code>GET /admin/gdpr/{userId}/export</code>による完全データエクスポートがすべてのユーザーデータを構造化JSONとして返却',
			'<strong>越境移転（第129条）</strong> — セルフホスト型アーキテクチャにより導入者がデータ所在地を制御可能；監査追跡がすべてのLLMプロバイダーデータフローを記録',
		],
		piplHeading: 'PIPL — 中国',
		piplPara: '中国の個人情報保護法（2021年）は世界で最も包括的なデータ保護法の一つであり、中国国内の個人の個人情報処理を規定しています。EDDIはPIPL準拠の導入に必要な技術インフラを提供します：',
		piplItems: [
			'<strong>合法的処理（第13条）</strong> — 構成駆動型のエージェント動作が処理を定義された目的の範囲内に維持；処理制限APIがオンデマンドで活動を凍結',
			'<strong>個人の権利（第44-49条）</strong> — 完全データエクスポート、カスケード削除、処理制限エンドポイントが知る権利、コピー権、訂正権、削除権、制限権をカバー',
			'<strong>データセキュリティ（第51条）</strong> — AES-256-GCMボールト暗号化、HMAC-SHA256監査整合性、Keycloak OIDC、RBAC、ゼロ<code>eval()</code>',
			'<strong>越境移転（第38-39条）</strong> — セルフホスト型アーキテクチャにより中国国内でのオンプレミス導入が可能；監査追跡がセキュリティ評価用にすべての外部データフローを記録',
			'<strong>自動化された意思決定（第24条）</strong> — 完全なパイプライントレーシングを備えた不変の監査追跡がAI意思決定の透明性を提供；管理UIによる人間の監視',
			'<strong>データ保持（第19条）</strong> — 自動クリーンアップ付きの構成可能な保持ポリシーが最小限必要な保存期間を強制',
		],
	},
	ko: {
		pdpaMYHeading: 'PDPA — 말레이시아',
		pdpaMYPara: '말레이시아의 2010년 개인정보보호법(법률 709, 2024년 개정)은 7가지 데이터 보호 원칙을 통해 상업적 개인정보 처리를 규율합니다. EDDI는 배포자 규정 준수를 지원하는 기술적 제어를 제공합니다:',
		pdpaMYItems: [
			'<strong>일반 원칙 (§6)</strong> — 구성 가능한 보존 정책과 처리 제한 엔드포인트가 목적 제한적, 동의 기반 처리 지원',
			'<strong>보안 원칙 (§9)</strong> — AES-256-GCM 볼트 암호화, HMAC-SHA256 감사 무결성, Keycloak OIDC, RBAC, SSRF 보호',
			'<strong>보존 원칙 (§10)</strong> — 카테고리별 구성 가능한 보존과 자동 정리; 유휴 대화 자동 종료',
			'<strong>데이터 무결성 원칙 (§11)</strong> — 타임스탬프가 있는 버전 관리 대화 상태; REST API를 통해 사용자 메모리 업데이트 가능',
			'<strong>접근 원칙 (§12)</strong> — <code>GET /admin/gdpr/{userId}/export</code>를 통한 전체 데이터 내보내기가 모든 사용자 데이터를 구조화된 JSON으로 반환',
			'<strong>국경 간 이전 (§129)</strong> — 자체 호스팅 아키텍처로 배포자가 데이터 거주지 제어 가능; 감사 추적이 모든 LLM 제공자 데이터 흐름 문서화',
		],
		piplHeading: 'PIPL — 중국',
		piplPara: '중국의 개인정보보호법(2021)은 세계에서 가장 포괄적인 데이터 보호법 중 하나로, 중국 내 개인의 개인정보 처리를 규율합니다. EDDI는 PIPL 준수 배포를 위한 기술 인프라를 제공합니다:',
		piplItems: [
			'<strong>합법적 처리 (제13조)</strong> — 구성 기반 에이전트 동작이 처리를 정의된 목적 범위 내로 유지; 처리 제한 API가 요청 시 활동 동결',
			'<strong>개인 권리 (제44-49조)</strong> — 전체 데이터 내보내기, 캐스케이드 삭제, 처리 제한 엔드포인트가 알 권리, 복사권, 정정권, 삭제권, 제한권 충족',
			'<strong>데이터 보안 (제51조)</strong> — AES-256-GCM 볼트 암호화, HMAC-SHA256 감사 무결성, Keycloak OIDC, RBAC, 제로 <code>eval()</code>',
			'<strong>국경 간 이전 (제38-39조)</strong> — 자체 호스팅 아키텍처로 중국 내 온프레미스 배포 가능; 감사 추적이 보안 평가를 위해 모든 외부 데이터 흐름 문서화',
			'<strong>자동화된 의사결정 (제24조)</strong> — 전체 파이프라인 추적이 포함된 불변 감사 추적이 AI 의사결정 투명성 제공; 관리 UI를 통한 인간 감독',
			'<strong>데이터 보존 (제19조)</strong> — 자동 정리가 포함된 구성 가능한 보존 정책이 최소 필요 저장 기간 시행',
		],
	},
	pt: {
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
	},
	th: {
		pdpaMYHeading: 'PDPA — มาเลเซีย',
		pdpaMYPara: 'พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคลของมาเลเซีย 2010 (กฎหมายที่ 709, แก้ไข 2024) กำกับดูแลการประมวลผลข้อมูลส่วนบุคคลเชิงพาณิชย์ผ่านหลักการคุ้มครองข้อมูล 7 ประการ EDDI ให้การควบคุมทางเทคนิคเพื่อสนับสนุนการปฏิบัติตามของผู้ deploy:',
		pdpaMYItems: [
			'<strong>หลักการทั่วไป (§6)</strong> — นโยบายการเก็บรักษาที่กำหนดค่าได้และ endpoint จำกัดการประมวลผลสนับสนุนการประมวลผลที่จำกัดวัตถุประสงค์ตามความยินยอม',
			'<strong>หลักการความปลอดภัย (§9)</strong> — การเข้ารหัส vault AES-256-GCM, ความสมบูรณ์การตรวจสอบ HMAC-SHA256, Keycloak OIDC, RBAC, การป้องกัน SSRF',
			'<strong>หลักการการเก็บรักษา (§10)</strong> — การเก็บรักษาที่กำหนดค่าได้ตามหมวดหมู่พร้อมการทำความสะอาดอัตโนมัติ; การสิ้นสุดการสนทนาที่ไม่ได้ใช้งานอัตโนมัติ',
			'<strong>หลักการความสมบูรณ์ของข้อมูล (§11)</strong> — สถานะการสนทนาที่มีเวอร์ชันพร้อม timestamp; หน่วยความจำผู้ใช้สามารถอัปเดตผ่าน REST API',
			'<strong>หลักการการเข้าถึง (§12)</strong> — การส่งออกข้อมูลแบบเต็มผ่าน <code>GET /admin/gdpr/{userId}/export</code> ส่งคืนข้อมูลผู้ใช้ทั้งหมดเป็น JSON ที่มีโครงสร้าง',
			'<strong>การโอนข้ามพรมแดน (§129)</strong> — สถาปัตยกรรมแบบ self-hosted ช่วยให้ผู้ deploy ควบคุมที่พักข้อมูลได้; เส้นทางการตรวจสอบบันทึกการไหลของข้อมูลผู้ให้บริการ LLM ทั้งหมด',
		],
		piplHeading: 'PIPL — จีน',
		piplPara: 'กฎหมายคุ้มครองข้อมูลส่วนบุคคลของจีน (2021) เป็นหนึ่งในกฎหมายคุ้มครองข้อมูลที่ครอบคลุมที่สุดในโลก ควบคุมการประมวลผลข้อมูลส่วนบุคคลของบุคคลภายในจีน EDDI ให้โครงสร้างพื้นฐานทางเทคนิคสำหรับการ deploy ที่สอดคล้องกับ PIPL:',
		piplItems: [
			'<strong>การประมวลผลที่ชอบด้วยกฎหมาย (มาตรา 13)</strong> — พฤติกรรม agent ที่ขับเคลื่อนด้วยการกำหนดค่าช่วยให้การประมวลผลอยู่ในวัตถุประสงค์ที่กำหนด; API จำกัดการประมวลผลหยุดกิจกรรมตามคำขอ',
			'<strong>สิทธิส่วนบุคคล (มาตรา 44-49)</strong> — endpoint การส่งออกข้อมูลเต็มรูปแบบ การลบแบบ cascade และข้อจำกัดการประมวลผลครอบคลุมสิทธิในการรับรู้ คัดลอก แก้ไข ลบ และจำกัด',
			'<strong>ความปลอดภัยของข้อมูล (มาตรา 51)</strong> — การเข้ารหัส vault AES-256-GCM, ความสมบูรณ์การตรวจสอบ HMAC-SHA256, Keycloak OIDC, RBAC, ศูนย์ <code>eval()</code>',
			'<strong>การโอนข้ามพรมแดน (มาตรา 38-39)</strong> — สถาปัตยกรรมแบบ self-hosted ช่วยให้ deploy ภายในประเทศจีนได้; เส้นทางการตรวจสอบบันทึกการไหลของข้อมูลภายนอกทั้งหมดสำหรับการประเมินความปลอดภัย',
			'<strong>การตัดสินใจอัตโนมัติ (มาตรา 24)</strong> — เส้นทางการตรวจสอบที่ไม่เปลี่ยนแปลงพร้อมการติดตาม pipeline แบบเต็มรูปแบบให้ความโปร่งใสในการตัดสินใจ AI; การกำกับดูแลโดยมนุษย์ผ่าน Management UI',
			'<strong>การเก็บรักษาข้อมูล (มาตรา 19)</strong> — นโยบายการเก็บรักษาที่กำหนดค่าได้พร้อมการทำความสะอาดอัตโนมัติบังคับใช้ระยะเวลาจัดเก็บขั้นต่ำที่จำเป็น',
		],
	},
};

const locales = ['de', 'es', 'fr', 'ar', 'hi', 'ja', 'ko', 'pt', 'th'];

for (const locale of locales) {
	const filePath = join(localesDir, `${locale}.ts`);
	let content = readFileSync(filePath, 'utf-8');
	const t = translations[locale];

	// 1. Insert pdpaMY and pipl blocks after pdpaItems closing bracket
	// Find the pdpaItems closing '],' that's followed by otherRegionsHeading
	const insertTarget = /(\t\t\t],\n)(\t\t\totherRegionsHeading:)/;
	const match = content.match(insertTarget);
	if (!match) {
		console.error(`Could not find insertion point in ${locale}.ts`);
		continue;
	}

	const insertBlock = `${match[1]}\t\t\tpdpaMYHeading: '${t.pdpaMYHeading}',
\t\t\tpdpaMYPara: '${t.pdpaMYPara}',
\t\t\tpdpaMYItems: [
${t.pdpaMYItems.map(i => `\t\t\t\t'${i}',`).join('\n')}
\t\t\t],
\t\t\tpiplHeading: '${t.piplHeading}',
\t\t\tpiplPara: '${t.piplPara}',
\t\t\tpiplItems: [
${t.piplItems.map(i => `\t\t\t\t'${i}',`).join('\n')}
\t\t\t],
${match[2]}`;

	content = content.replace(insertTarget, insertBlock);

	// 2. Update "15+" to "17+" in para2
	content = content.replace(/15\+/g, '17+');

	// 3. Update "6 more frameworks" pattern in description
	// Various patterns across locales
	content = content.replace(/及另外 6 个框架/g, '、马来西亚 PDPA、PIPL 等框架');
	content = content.replace(/and 6 more frameworks/gi, 'Malaysia PDPA, PIPL, and more');
	content = content.replace(/und 6 weitere Frameworks/gi, 'Malaysia PDPA, PIPL und weitere');
	content = content.replace(/y 6 marcos más/gi, 'Malaysia PDPA, PIPL y más');
	content = content.replace(/et 6 autres cadres/gi, 'Malaysia PDPA, PIPL et autres');
	content = content.replace(/و 6 أطر عمل أخرى/g, 'و PDPA الماليزي و PIPL والمزيد');
	content = content.replace(/और 6 अतिरिक्त फ्रेमवर्क/g, 'मलेशिया PDPA, PIPL और अधिक');
	content = content.replace(/およびその他6つのフレームワーク/g, 'マレーシアPDPA、PIPLなど');
	content = content.replace(/및 6개 추가 프레임워크/g, '말레이시아 PDPA, PIPL 등');
	content = content.replace(/e mais 6 frameworks/gi, 'PDPA da Malásia, PIPL e mais');
	content = content.replace(/e mais 6 outros frameworks/gi, 'PDPA da Malásia, PIPL e mais');
	content = content.replace(/และอีก 6 กรอบงาน/g, 'PDPA มาเลเซีย, PIPL และอื่นๆ');

	writeFileSync(filePath, content, 'utf-8');
	console.log(`✓ Updated ${locale}.ts`);
}

console.log('\nDone!');
