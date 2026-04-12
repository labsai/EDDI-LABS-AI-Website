/**
 * Replace compliance section content in locale files.
 * Finds the block starting with `compliance: {` and ending before the final `},\n\t},\n};`
 * and replaces it with translated content.
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const ROOT = join(__dirname, '..', 'src', 'i18n', 'locales');

// ── Translations keyed by locale code ──
const translations = {
fr: `	compliance: {
			title: 'Confidentialité mondiale et conformité réglementaire',
			description:
				'EDDI offre une conformité intégrée pour le RGPD, le CCPA, l\\'EU AI Act, l\\'HIPAA, la PIPEDA, la LGPD, l\\'APPI, le POPIA, le PDPA et 6 autres cadres — avec suppression en cascade des données, pistes d\\'audit cryptographiques et une API unifiée.',
			heading1: 'Conformité par l\\'architecture',
			para1: 'Les industries réglementées ne peuvent pas ajouter la conformité aux systèmes d\\'IA après coup. EDDI intègre les <strong>fondations techniques de la conformité réglementaire mondiale</strong> directement dans l\\'architecture de la plateforme — pistes d\\'audit immuables, suppression en cascade des données, restrictions de traitement, intégrité cryptographique et contrôle d\\'accès basé sur les rôles sont des capacités fondamentales, pas des modules complémentaires. Une API unifiée couvre les droits des personnes concernées pour chaque juridiction.',
			aiGovHeading: 'Cadres de gouvernance de l\\'IA',
			aiGovIntro: 'Alors que les gouvernements du monde entier introduisent une législation spécifique à l\\'IA, les organisations ont besoin de plateformes offrant <strong>transparence, traçabilité et supervision humaine</strong> dès le premier jour. L\\'architecture d\\'EDDI répond aux exigences techniques fondamentales des principaux cadres de gouvernance de l\\'IA.',
			euAiActHeading: 'EU AI Act — Union européenne',
			euAiActPara: 'L\\'EU AI Act (Règlement 2024/1689) est la première loi complète au monde sur l\\'IA, établissant des exigences basées sur les risques pour les systèmes d\\'IA. EDDI fournit les <strong>fondations techniques</strong> pour la conformité avec ses exigences relatives aux systèmes d\\'IA à haut risque :',
			euAiActItems: [
				'<strong>Pistes d\\'audit immuables</strong> — Chaque opération enregistrée avec intégrité cryptographique HMAC-SHA256 (Art. 12 — Conservation des registres)',
				'<strong>Transparence des décisions</strong> — Le traçage complet du pipeline montre comment les décisions d\\'IA ont été prises, y compris le nom du modèle, le prompt et la réponse (Art. 13 — Transparence)',
				'<strong>Supervision humaine</strong> — L\\'interface de gestion permet la révision humaine, l\\'intervention et l\\'arrêt d\\'urgence (Art. 14 — Supervision humaine)',
				'<strong>Classification des risques</strong> — L\\'architecture prend en charge les exigences des systèmes d\\'IA à haut risque avec des contrôles configurables (Art. 9 — Gestion des risques)',
				'<strong>Reproductibilité</strong> — La configuration-as-code permet la reproduction exacte du comportement de l\\'IA pour les audits réglementaires (Art. 17 — Gestion de la qualité)',
				'<strong>Gouvernance des données</strong> — OIDC/Keycloak RBAC, gestion des secrets basée sur un coffre-fort, journalisation des entrées/sorties (Art. 10 — Gouvernance des données)',
			],
			nistHeading: 'NIST AI Risk Management Framework — États-Unis',
			nistPara: 'Le NIST AI RMF (AI 100-1) fournit un cadre volontaire pour la gestion des risques liés à l\\'IA à travers quatre fonctions : Govern, Map, Measure et Manage. L\\'architecture d\\'EDDI offre des capacités techniques qui soutiennent les organisations poursuivant l\\'alignement NIST AI RMF :',
			nistItems: [
				'<strong>Govern</strong> — Rôles RBAC (eddi-admin, eddi-editor, eddi-viewer), registre d\\'audit immuable et flux de données documentés soutiennent les structures de gouvernance de l\\'IA',
				'<strong>Map</strong> — Le traçage du pipeline et la journalisation des conversations permettent une identification et une documentation complètes des risques liés à l\\'IA',
				'<strong>Measure</strong> — Les métriques Prometheus, le suivi des tokens/coûts et les analyses d\\'utilisation par agent fournissent des indicateurs mesurables de performance et de risque de l\\'IA',
				'<strong>Manage</strong> — L\\'API de restriction de traitement, la supervision humaine via l\\'interface Manager et les politiques de rétention configurables permettent les contrôles d\\'atténuation des risques',
			],
			isoHeading: 'ISO/IEC 42001 — Systèmes de management de l\\'IA',
			isoPara: 'ISO/IEC 42001:2023 établit les exigences pour un système de management de l\\'IA (AIMS). EDDI fournit des capacités techniques qui soutiennent les organisations poursuivant la certification ISO 42001 :',
			isoItems: [
				'<strong>Politiques d\\'IA documentées</strong> — La configuration-as-code signifie que tout le comportement des agents est défini en JSON auditable — règles, workflows, configurations LLM et descripteurs de déploiement',
				'<strong>Évaluation des risques</strong> — Les pistes d\\'audit capturent les historiques de décisions complets pour l\\'évaluation des risques et les analyses d\\'impact',
				'<strong>Contrôles opérationnels</strong> — RBAC, gestion des secrets basée sur un coffre-fort et restrictions de traitement assurent la gouvernance opérationnelle',
				'<strong>Surveillance des performances</strong> — Les métriques Prometheus, les tableaux de bord Grafana et la télémétrie CQRS permettent l\\'évaluation continue des performances de l\\'IA',
			],
			privacyHeading: 'Réglementations sur la protection des données',
			privacyIntro: 'EDDI fournit des <strong>points d\\'accès unifiés pour les droits des personnes concernées</strong> qui satisfont les exigences techniques de chaque réglementation majeure sur la protection des données dans le monde. Une seule API couvre la suppression en cascade, l\\'exportation complète des données et la restriction du traitement — quelle que soit la juridiction.',
			gdprHeading: 'RGPD — Union européenne / EEE',
			gdprPara: 'Le Règlement général sur la protection des données (UE 2016/679) est la référence mondiale en matière de protection des données. EDDI implémente les droits des personnes concernées du RGPD comme des <strong>endpoints API de première classe</strong> soutenus par des opérations en cascade sur les 5 magasins de données :',
			gdprItems: [
				'<strong>Droit à l\\'effacement (Art. 17)</strong> — <code>DELETE /admin/gdpr/{userId}</code> cascade sur les mémoires utilisateur, les conversations, les correspondances de conversations gérées, les journaux de base de données (pseudonymisés SHA-256) et le registre d\\'audit (pseudonymisé SHA-256)',
				'<strong>Droit d\\'accès / Portabilité (Art. 15/20)</strong> — <code>GET /admin/gdpr/{userId}/export</code> retourne toutes les données utilisateur en JSON structuré et lisible par machine',
				'<strong>Droit à la limitation (Art. 18)</strong> — <code>POST /admin/gdpr/{userId}/restrict</code> gèle le traitement tout en préservant les données, bloquant les nouvelles conversations et le traitement des messages',
				'<strong>Journalisation sans PII</strong> — Les opérations RGPD journalisent des pseudonymes SHA-256, jamais les identifiants utilisateur bruts',
				'<strong>Rétention configurable</strong> — Politiques de rétention par catégorie pour les conversations (365 jours par défaut), les mémoires utilisateur (manuel) et les entrées d\\'audit (indéfini pour l\\'EU AI Act)',
				'<strong>Outils MCP</strong> — <code>delete_user_data</code> et <code>export_user_data</code> permettent des workflows de conformité orchestrés par l\\'IA',
			],
			ccpaHeading: 'CCPA / CPRA — Californie, États-Unis',
			ccpaPara: 'Le California Consumer Privacy Act et le California Privacy Rights Act accordent aux consommateurs des droits de connaissance, de suppression et de refus de la vente de données. EDDI satisfait les exigences techniques du CCPA via son API compatible RGPD :',
			ccpaItems: [
				'<strong>Droit de savoir (§1798.100)</strong> — L\\'endpoint d\\'exportation RGPD fournit toutes les informations personnelles dans un format structuré et lisible par machine',
				'<strong>Droit de suppression (§1798.105)</strong> — L\\'endpoint d\\'effacement RGPD fournit la suppression en cascade sur tous les magasins de données',
				'<strong>Ne pas vendre (§1798.120)</strong> — EDDI ne peut architecturellement pas vendre d\\'informations personnelles — c\\'est une infrastructure middleware qui traite les données exclusivement pour le compte du déployeur',
			],
			pipedaHeading: 'PIPEDA — Canada',
			pipedaPara: 'La Loi sur la protection des renseignements personnels et les documents électroniques du Canada (2000, modifiée en 2023) régit le traitement commercial des données à travers 10 principes d\\'information équitable. L\\'architecture d\\'EDDI s\\'aligne directement sur chaque principe :',
			pipedaItems: [
				'<strong>Responsabilité</strong> — Registre d\\'audit immuable signé HMAC trace toutes les opérations',
				'<strong>Limitation de la collecte</strong> — Le fenêtrage conscient des tokens limite les données envoyées aux LLMs ; la rétention configurable supprime automatiquement les anciennes conversations',
				'<strong>Limitation de l\\'utilisation/divulgation</strong> — Les données sont utilisées uniquement pour les interactions d\\'agents configurées ; la piste d\\'audit journalise chaque invocation LLM',
				'<strong>Mesures de sécurité</strong> — Chiffrement enveloppe AES-256-GCM (Secrets Vault), intégrité d\\'audit HMAC-SHA256, Keycloak OIDC, RBAC',
				'<strong>Accès individuel</strong> — L\\'exportation complète des données via l\\'API REST retourne toutes les mémoires, conversations et correspondances de conversations gérées en JSON',
				'<strong>Contestation de la conformité</strong> — Suppression en cascade sur les 5 magasins de données ; piste d\\'audit pseudonymisée (non supprimée) pour les obligations de conservation légale',
			],
			lgpdHeading: 'LGPD — Brésil',
			lgpdPara: 'La Lei Geral de Proteção de Dados du Brésil (2018, effective 2020) accorde des droits étendus aux personnes concernées, reflétant étroitement le RGPD. EDDI couvre tous les droits de l\\'article 18 avec des capacités techniques intégrées :',
			lgpdItems: [
				'<strong>Accès aux données (Art. 18, II)</strong> — Exportation complète des données en JSON',
				'<strong>Correction (Art. 18, III)</strong> — Mémoires utilisateur modifiables via <code>PUT /usermemorystore/memories</code>',
				'<strong>Anonymisation/Suppression (Art. 18, IV)</strong> — Suppression en cascade avec pseudonymisation SHA-256 des enregistrements d\\'audit',
				'<strong>Portabilité des données (Art. 18, V)</strong> — L\\'exportation JSON lisible par machine inclut toutes les données utilisateur',
				'<strong>Suppression des données inutiles (Art. 18, VI)</strong> — Politiques de rétention configurables avec nettoyage automatique',
				'<strong>Révocation du consentement (Art. 18, IX)</strong> — Les endpoints de fin de conversation et de suppression en cascade fournissent le mécanisme technique',
			],
			appiHeading: 'APPI — Japon',
			appiPara: 'La loi japonaise sur la protection des informations personnelles (2003, significativement modifiée en 2022) est l\\'une des lois les plus matures d\\'Asie en matière de protection des données. Le Japon dispose d\\'une décision d\\'adéquation de l\\'UE, facilitant les flux de données transfrontaliers. EDDI fournit :',
			appiItems: [
				'<strong>Mesures de sécurité (Art. 23)</strong> — Chiffrement vault AES-256-GCM, intégrité d\\'audit HMAC-SHA256, Keycloak OIDC, RBAC, protection SSRF',
				'<strong>Divulgation aux personnes concernées (Art. 33)</strong> — Exportation complète des données via l\\'API REST',
				'<strong>Correction et suppression (Art. 34-35)</strong> — Mises à jour des mémoires pour la correction ; suppression en cascade pour l\\'effacement',
				'<strong>Informations pseudonymisées (amendement 2022)</strong> — L\\'effacement RGPD utilise la pseudonymisation SHA-256, satisfaisant la catégorie d\\'informations pseudonymisées de l\\'APPI',
				'<strong>Documentation des transferts transfrontaliers (Art. 28)</strong> — Flux de données des fournisseurs LLM documentés ; la piste d\\'audit enregistre quel modèle/fournisseur a traité chaque tour',
			],
			popiaHeading: 'POPIA — Afrique du Sud',
			popiaPara: 'La loi sud-africaine sur la protection des informations personnelles (2013, effective 2021) établit 8 conditions de traitement des données alignées sur les normes européennes. EDDI fournit des capacités techniques intégrées pour chaque condition :',
			popiaItems: [
				'<strong>Responsabilité (Condition 1)</strong> — Registre d\\'audit signé HMAC, flux de données documentés, code open-source Apache 2.0',
				'<strong>Limitation du traitement (Condition 2)</strong> — Fenêtrage conscient des tokens, rétention configurable, fin automatique des conversations inactives',
				'<strong>Qualité de l\\'information (Condition 5)</strong> — État de conversation horodaté et versionné ; mémoires utilisateur modifiables via l\\'API REST',
				'<strong>Mesures de sécurité (Condition 7)</strong> — Chiffrement AES-256-GCM, intégrité HMAC, Keycloak OIDC, RBAC, protection SSRF',
				'<strong>Participation des personnes concernées (Condition 8)</strong> — Endpoints complets d\\'exportation de données et de suppression en cascade',
			],
			pdpaHeading: 'PDPA — Singapour et Thaïlande',
			pdpaPara: 'Les lois sur la protection des données personnelles de Singapour (2012, modifiée en 2021) et de Thaïlande (2019, effective 2022) sont les cadres de protection de la vie privée les plus matures d\\'Asie du Sud-Est. EDDI couvre les obligations techniques des deux juridictions :',
			pdpaItems: [
				'<strong>Obligation d\\'accès</strong> — Exportation complète des données via l\\'API REST et les outils MCP',
				'<strong>Obligation de correction</strong> — Mémoires utilisateur modifiables via l\\'API REST',
				'<strong>Obligation de protection</strong> — Chiffrement AES-256-GCM, intégrité d\\'audit HMAC, Keycloak OIDC, RBAC',
				'<strong>Limitation de la rétention</strong> — Nettoyage automatique configurable avec délai d\\'expiration des conversations inactives',
				'<strong>Notification de violation de données</strong> — Modèle de runbook de réponse aux incidents inclus dans la documentation EDDI',
			],
			otherRegionsHeading: 'Juridictions supplémentaires',
			otherRegionsPara: 'L\\'infrastructure de protection des données d\\'EDDI répond aux standards internationaux. Les juridictions suivantes sont également prises en charge via la même API unifiée :',
			otherRegionsItems: [
				'<strong>UK GDPR</strong> (Royaume-Uni) — Reflète substantiellement le RGPD de l\\'UE ; les endpoints RGPD d\\'EDDI satisfont tous les droits des personnes concernées du UK GDPR. Supervision ICO.',
				'<strong>PIPA</strong> (Corée du Sud) — Exigences strictes de consentement, DPO obligatoire, notification de violation sous 72 heures. EDDI fournit l\\'infrastructure technique d\\'audit et d\\'effacement.',
				'<strong>DPDPA</strong> (Inde, 2023) — Cadre basé sur le consentement avec restrictions transfrontalières. Les endpoints d\\'exportation et d\\'effacement d\\'EDDI satisfont les exigences du Digital Personal Data Protection Act.',
				'<strong>Privacy Act + APPs</strong> (Australie) — 13 principes australiens de protection de la vie privée ; régime de notification obligatoire des violations de données. La piste d\\'audit et l\\'exportation de données d\\'EDDI couvrent les obligations techniques.',
				'<strong>Lois étatiques de type CCPA</strong> (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, etc.) — L\\'API compatible RGPD/CCPA satisfait toutes les lois étatiques émergentes sur la protection de la vie privée aux États-Unis.',
			],
			industryHeading: 'Conformité spécifique à l\\'industrie',
			hipaaHeading: 'HIPAA — Santé aux États-Unis',
			hipaaPara: 'Le Health Insurance Portability and Accountability Act établit des garanties pour les informations de santé protégées (PHI). EDDI fournit l\\'infrastructure technique pour des déploiements d\\'IA conformes à l\\'HIPAA :',
			hipaaItems: [
				'<strong>Contrôles d\\'accès (§164.312(a))</strong> — Keycloak OIDC avec accès basé sur les rôles (eddi-admin, eddi-editor, eddi-viewer)',
				'<strong>Contrôles d\\'audit (§164.312(b))</strong> — Registre d\\'audit immuable signé HMAC enregistrant chaque opération avec horodatages, identifiants utilisateur et résultats',
				'<strong>Contrôles d\\'intégrité (§164.312(c))</strong> — Détection de falsification HMAC-SHA256 sur toutes les entrées d\\'audit',
				'<strong>Sécurité de transmission (§164.312(e))</strong> — TLS pour le transit ; AES-256-GCM pour les secrets au repos via Secrets Vault',
				'<strong>Élimination des données (§164.310(d)(2)(i))</strong> — L\\'endpoint de suppression en cascade RGPD supprime définitivement les PHI de tous les magasins de données',
				'<strong>Modèle BAA</strong> — Modèle de Business Associate Agreement inclus dans la documentation EDDI pour les déploiements dans le secteur de la santé',
			],
			soc2Heading: 'Préparation SOC 2',
			soc2Para: 'SOC 2 Type II évalue les systèmes selon les Trust Services Criteria. L\\'architecture d\\'EDDI fournit des contrôles techniques qui soutiennent les organisations poursuivant l\\'attestation SOC 2 :',
			soc2Items: [
				'<strong>Sécurité</strong> — Authentification OIDC/Keycloak, RBAC, Secrets Vault (AES-256-GCM), zéro eval(), protection contre le path traversal, validation d\\'URL',
				'<strong>Disponibilité</strong> — Mise à l\\'échelle horizontale via NATS JetStream, double support de base de données (MongoDB/PostgreSQL), déploiement natif Kubernetes',
				'<strong>Intégrité du traitement</strong> — Registre d\\'audit immuable signé HMAC avec vérification d\\'intégrité cryptographique par opération',
				'<strong>Confidentialité</strong> — Le filtre de rédaction des secrets nettoie les clés API et les références vault des entrées d\\'audit ; journalisation sans PII avec pseudonymes SHA-256',
				'<strong>Vie privée</strong> — API complète des droits des personnes concernées (effacement, exportation, restriction), rétention configurable, contrôles de restriction du traitement',
			],
			apiHeading: 'Une API pour la conformité mondiale',
			apiPara: 'Chaque réglementation listée ci-dessus est servie par <strong>la même API REST unifiée et les mêmes outils MCP</strong>. Que vous répondiez à une demande d\\'effacement RGPD en Allemagne, à une demande de suppression CCPA en Californie ou à une demande d\\'accès PDPA à Singapour — les mêmes endpoints gèrent tout :',
			apiItems: [
				'<strong><code>DELETE /admin/gdpr/{userId}</code></strong> — Suppression en cascade sur 5 magasins de données (mémoires utilisateur, conversations, correspondances gérées, journaux, entrées d\\'audit)',
				'<strong><code>GET /admin/gdpr/{userId}/export</code></strong> — Exportation complète des données utilisateur en JSON structuré (mémoires, conversations, enregistrements d\\'audit)',
				'<strong><code>POST /admin/gdpr/{userId}/restrict</code></strong> — Gel du traitement tout en préservant les données pour la résolution des litiges',
				'<strong>MCP : <code>delete_user_data</code></strong> — Suppression en cascade orchestrée par l\\'IA (nécessite une confirmation explicite)',
				'<strong>MCP : <code>export_user_data</code></strong> — Exportation de données orchestrée par l\\'IA pour les workflows DSAR automatisés',
			],
			heading3: 'Conçu pour les industries réglementées du monde entier',
			para2: 'La santé, les services financiers, le gouvernement, l\\'industrie manufacturière et d\\'autres secteurs réglementés peuvent déployer EDDI en toute confiance. La plateforme fournit la transparence, l\\'auditabilité et les mécanismes de contrôle exigés par plus de 15 cadres réglementaires — de l\\'EU AI Act et du RGPD en Europe à l\\'HIPAA aux États-Unis, en passant par la PIPEDA au Canada, la LGPD au Brésil, l\\'APPI au Japon, le POPIA en Afrique du Sud et le PDPA en Asie du Sud-Est. La conformité n\\'est pas une réflexion après coup — c\\'est une fondation architecturale.',
		},`,

es: `	compliance: {
			title: 'Privacidad global y cumplimiento normativo',
			description:
				'EDDI ofrece cumplimiento integrado para RGPD, CCPA, EU AI Act, HIPAA, PIPEDA, LGPD, APPI, POPIA, PDPA y 6 marcos más — con eliminación en cascada de datos, pistas de auditoría criptográficas y una API unificada.',
			heading1: 'Cumplimiento por arquitectura',
			para1: 'Las industrias reguladas no pueden agregar cumplimiento a los sistemas de IA después del hecho. EDDI integra los <strong>fundamentos técnicos para el cumplimiento normativo global</strong> directamente en la arquitectura de la plataforma — pistas de auditoría inmutables, eliminación en cascada de datos, restricciones de procesamiento, integridad criptográfica y control de acceso basado en roles son capacidades fundamentales, no complementos. Una API unificada cubre los derechos de los interesados para cada jurisdicción.',
			aiGovHeading: 'Marcos de gobernanza de IA',
			aiGovIntro: 'A medida que los gobiernos de todo el mundo introducen legislación específica sobre IA, las organizaciones necesitan plataformas que proporcionen <strong>transparencia, trazabilidad y supervisión humana</strong> desde el primer día. La arquitectura de EDDI aborda los requisitos técnicos fundamentales de los principales marcos de gobernanza de IA.',
			euAiActHeading: 'EU AI Act — Unión Europea',
			euAiActPara: 'El EU AI Act (Reglamento 2024/1689) es la primera ley integral del mundo sobre IA, estableciendo requisitos basados en riesgos para los sistemas de IA. EDDI proporciona los <strong>fundamentos técnicos</strong> para el cumplimiento de sus requisitos de sistemas de IA de alto riesgo:',
			euAiActItems: [
				'<strong>Pistas de auditoría inmutables</strong> — Cada operación registrada con integridad criptográfica HMAC-SHA256 (Art. 12 — Conservación de registros)',
				'<strong>Transparencia de decisiones</strong> — El rastreo completo del pipeline muestra cómo se tomaron las decisiones de IA, incluyendo nombre del modelo, prompt y respuesta (Art. 13 — Transparencia)',
				'<strong>Supervisión humana</strong> — La interfaz de gestión permite la revisión humana, intervención y parada de emergencia (Art. 14 — Supervisión humana)',
				'<strong>Clasificación de riesgos</strong> — La arquitectura soporta los requisitos de sistemas de IA de alto riesgo con controles configurables (Art. 9 — Gestión de riesgos)',
				'<strong>Reproducibilidad</strong> — La configuración como código permite la reproducción exacta del comportamiento de IA para auditorías regulatorias (Art. 17 — Gestión de calidad)',
				'<strong>Gobernanza de datos</strong> — OIDC/Keycloak RBAC, gestión de secretos basada en bóveda, registro de entradas/salidas (Art. 10 — Gobernanza de datos)',
			],
			nistHeading: 'NIST AI Risk Management Framework — Estados Unidos',
			nistPara: 'El NIST AI RMF (AI 100-1) proporciona un marco voluntario para la gestión de riesgos de IA a través de cuatro funciones: Govern, Map, Measure y Manage. La arquitectura de EDDI proporciona capacidades técnicas que apoyan a las organizaciones que buscan la alineación con NIST AI RMF:',
			nistItems: [
				'<strong>Govern</strong> — Roles RBAC (eddi-admin, eddi-editor, eddi-viewer), registro de auditoría inmutable y flujos de datos documentados soportan estructuras de gobernanza de IA',
				'<strong>Map</strong> — El rastreo del pipeline y el registro de conversaciones permiten la identificación y documentación integral de riesgos de IA',
				'<strong>Measure</strong> — Métricas Prometheus, seguimiento de tokens/costos y análisis de uso por agente proporcionan indicadores medibles de rendimiento y riesgo de IA',
				'<strong>Manage</strong> — API de restricción de procesamiento, supervisión humana vía la interfaz Manager y políticas de retención configurables permiten controles de mitigación de riesgos',
			],
			isoHeading: 'ISO/IEC 42001 — Sistemas de gestión de IA',
			isoPara: 'ISO/IEC 42001:2023 establece requisitos para un Sistema de Gestión de IA (AIMS). EDDI proporciona capacidades técnicas que apoyan a las organizaciones que buscan la certificación ISO 42001:',
			isoItems: [
				'<strong>Políticas de IA documentadas</strong> — La configuración como código significa que todo el comportamiento del agente se define en JSON auditable — reglas, workflows, configuraciones de LLM y descriptores de despliegue',
				'<strong>Evaluación de riesgos</strong> — Las pistas de auditoría capturan historiales de decisiones completos para la evaluación de riesgos y análisis de impacto',
				'<strong>Controles operacionales</strong> — RBAC, gestión de secretos basada en bóveda y restricciones de procesamiento proporcionan gobernanza operacional',
				'<strong>Monitoreo de rendimiento</strong> — Métricas Prometheus, dashboards Grafana y telemetría CQRS permiten la evaluación continua del rendimiento de IA',
			],
			privacyHeading: 'Regulaciones de privacidad de datos',
			privacyIntro: 'EDDI proporciona <strong>endpoints unificados de derechos de los interesados</strong> que satisfacen los requisitos técnicos de cada regulación importante de privacidad de datos en el mundo. Una API cubre la eliminación en cascada, la exportación completa de datos y la restricción de procesamiento — independientemente de la jurisdicción.',
			gdprHeading: 'RGPD — Unión Europea / EEE',
			gdprPara: 'El Reglamento General de Protección de Datos (UE 2016/679) es el estándar de referencia para la privacidad de datos. EDDI implementa los derechos de los interesados del RGPD como <strong>endpoints API de primera clase</strong> respaldados por operaciones en cascada en los 5 almacenes de datos:',
			gdprItems: [
				'<strong>Derecho de supresión (Art. 17)</strong> — <code>DELETE /admin/gdpr/{userId}</code> opera en cascada sobre memorias de usuario, conversaciones, mapeos de conversaciones gestionadas, registros de base de datos (pseudonimizados SHA-256) y registro de auditoría (pseudonimizado SHA-256)',
				'<strong>Derecho de acceso / Portabilidad (Art. 15/20)</strong> — <code>GET /admin/gdpr/{userId}/export</code> devuelve todos los datos del usuario como JSON estructurado y legible por máquina',
				'<strong>Derecho a la limitación (Art. 18)</strong> — <code>POST /admin/gdpr/{userId}/restrict</code> congela el procesamiento preservando los datos, bloqueando nuevas conversaciones y procesamiento de mensajes',
				'<strong>Registro sin PII</strong> — Las operaciones RGPD registran pseudónimos SHA-256, nunca identificadores de usuario sin procesar',
				'<strong>Retención configurable</strong> — Políticas de retención por categoría para conversaciones (365 días por defecto), memorias de usuario (manual) y entradas de auditoría (indefinido para EU AI Act)',
				'<strong>Herramientas MCP</strong> — <code>delete_user_data</code> y <code>export_user_data</code> permiten flujos de trabajo de cumplimiento orquestados por IA',
			],
			ccpaHeading: 'CCPA / CPRA — California, Estados Unidos',
			ccpaPara: 'El California Consumer Privacy Act y el California Privacy Rights Act otorgan a los consumidores derechos de conocimiento, eliminación y exclusión de la venta de datos. EDDI satisface los requisitos técnicos del CCPA a través de su API compatible con RGPD:',
			ccpaItems: [
				'<strong>Derecho a saber (§1798.100)</strong> — El endpoint de exportación RGPD proporciona toda la información personal en un formato estructurado y legible por máquina',
				'<strong>Derecho a eliminar (§1798.105)</strong> — El endpoint de supresión RGPD proporciona eliminación en cascada en todos los almacenes de datos',
				'<strong>No vender (§1798.120)</strong> — EDDI arquitectónicamente no puede vender información personal — es infraestructura middleware que procesa datos exclusivamente en nombre del desplegador',
			],
			pipedaHeading: 'PIPEDA — Canadá',
			pipedaPara: 'La Ley de Protección de Información Personal y Documentos Electrónicos de Canadá (2000, enmendada 2023) rige el procesamiento comercial de datos a través de 10 Principios de Información Justa. La arquitectura de EDDI se mapea directamente a cada principio:',
			pipedaItems: [
				'<strong>Responsabilidad</strong> — Registro de auditoría inmutable firmado con HMAC rastrea todas las operaciones',
				'<strong>Limitación de recolección</strong> — El ventaneo consciente de tokens limita los datos enviados a los LLMs; la retención configurable elimina automáticamente conversaciones antiguas',
				'<strong>Limitación de uso/divulgación</strong> — Los datos se usan solo para interacciones de agentes configuradas; la pista de auditoría registra cada invocación LLM',
				'<strong>Salvaguardas</strong> — Cifrado envolvente AES-256-GCM (Secrets Vault), integridad de auditoría HMAC-SHA256, Keycloak OIDC, RBAC',
				'<strong>Acceso individual</strong> — La exportación completa de datos vía API REST devuelve todas las memorias, conversaciones y mapeos de conversaciones gestionadas como JSON',
				'<strong>Cuestionamiento del cumplimiento</strong> — Eliminación en cascada en los 5 almacenes de datos; pista de auditoría pseudonimizada (no eliminada) para obligaciones de retención legal',
			],
			lgpdHeading: 'LGPD — Brasil',
			lgpdPara: 'La Lei Geral de Proteção de Dados de Brasil (2018, efectiva 2020) otorga amplios derechos a los titulares de datos, reflejando el RGPD. EDDI cubre todos los derechos del Artículo 18 con capacidades técnicas integradas:',
			lgpdItems: [
				'<strong>Acceso a datos (Art. 18, II)</strong> — Exportación completa de datos en JSON',
				'<strong>Corrección (Art. 18, III)</strong> — Memorias de usuario actualizables vía <code>PUT /usermemorystore/memories</code>',
				'<strong>Anonimización/Eliminación (Art. 18, IV)</strong> — Eliminación en cascada con pseudonimización SHA-256 de registros de auditoría',
				'<strong>Portabilidad de datos (Art. 18, V)</strong> — La exportación JSON legible por máquina incluye todos los datos del usuario',
				'<strong>Eliminación de datos innecesarios (Art. 18, VI)</strong> — Políticas de retención configurables con limpieza automática',
				'<strong>Revocación del consentimiento (Art. 18, IX)</strong> — Los endpoints de fin de conversación y eliminación en cascada proporcionan el mecanismo técnico',
			],
			appiHeading: 'APPI — Japón',
			appiPara: 'La Ley de Protección de Información Personal de Japón (2003, significativamente enmendada 2022) es una de las leyes de protección de datos más maduras de Asia. Japón tiene una decisión de adecuación de la UE, facilitando los flujos de datos transfronterizos. EDDI proporciona:',
			appiItems: [
				'<strong>Medidas de seguridad (Art. 23)</strong> — Cifrado vault AES-256-GCM, integridad de auditoría HMAC-SHA256, Keycloak OIDC, RBAC, protección SSRF',
				'<strong>Divulgación a titulares de datos (Art. 33)</strong> — Exportación completa de datos vía API REST',
				'<strong>Corrección y eliminación (Art. 34-35)</strong> — Actualizaciones de memorias para corrección; eliminación en cascada para supresión',
				'<strong>Información pseudonimizada (enmienda 2022)</strong> — La supresión RGPD utiliza pseudonimización SHA-256, satisfaciendo la categoría de información pseudonimizada de APPI',
				'<strong>Documentación de transferencias transfronterizas (Art. 28)</strong> — Flujos de datos de proveedores LLM documentados; la pista de auditoría registra qué modelo/proveedor procesó cada turno',
			],
			popiaHeading: 'POPIA — Sudáfrica',
			popiaPara: 'La Ley de Protección de Información Personal de Sudáfrica (2013, efectiva 2021) establece 8 condiciones de procesamiento de datos alineadas con los estándares europeos. EDDI proporciona capacidades técnicas integradas para cada condición:',
			popiaItems: [
				'<strong>Responsabilidad (Condición 1)</strong> — Registro de auditoría firmado HMAC, flujos de datos documentados, código open-source Apache 2.0',
				'<strong>Limitación de procesamiento (Condición 2)</strong> — Ventaneo consciente de tokens, retención configurable, fin automático de conversaciones inactivas',
				'<strong>Calidad de la información (Condición 5)</strong> — Estado de conversación con marca de tiempo y versionado; memorias de usuario actualizables vía API REST',
				'<strong>Salvaguardas de seguridad (Condición 7)</strong> — Cifrado AES-256-GCM, integridad HMAC, Keycloak OIDC, RBAC, protección SSRF',
				'<strong>Participación del titular de datos (Condición 8)</strong> — Endpoints completos de exportación de datos y eliminación en cascada',
			],
			pdpaHeading: 'PDPA — Singapur y Tailandia',
			pdpaPara: 'Las Leyes de Protección de Datos Personales de Singapur (2012, enmendada 2021) y Tailandia (2019, efectiva 2022) son los marcos de privacidad más maduros del sudeste asiático. EDDI cubre las obligaciones técnicas de ambas jurisdicciones:',
			pdpaItems: [
				'<strong>Obligación de acceso</strong> — Exportación completa de datos vía API REST y herramientas MCP',
				'<strong>Obligación de corrección</strong> — Memorias de usuario actualizables vía API REST',
				'<strong>Obligación de protección</strong> — Cifrado AES-256-GCM, integridad de auditoría HMAC, Keycloak OIDC, RBAC',
				'<strong>Limitación de retención</strong> — Limpieza automática configurable con tiempo de espera de conversaciones inactivas',
				'<strong>Notificación de violación de datos</strong> — Plantilla de runbook de respuesta a incidentes incluida en la documentación de EDDI',
			],
			otherRegionsHeading: 'Jurisdicciones adicionales',
			otherRegionsPara: 'La infraestructura de protección de datos de EDDI cumple con los estándares internacionales. Las siguientes jurisdicciones también son soportadas a través de la misma API unificada:',
			otherRegionsItems: [
				'<strong>UK GDPR</strong> (Reino Unido) — Refleja sustancialmente el RGPD de la UE; los endpoints RGPD de EDDI satisfacen todos los derechos del UK GDPR. Supervisión ICO.',
				'<strong>PIPA</strong> (Corea del Sur) — Requisitos estrictos de consentimiento, DPO obligatorio, notificación de violación de 72 horas. EDDI proporciona la infraestructura técnica de auditoría y supresión.',
				'<strong>DPDPA</strong> (India, 2023) — Marco basado en consentimiento con restricciones transfronterizas. Los endpoints de exportación y supresión de EDDI satisfacen los requisitos del Digital Personal Data Protection Act.',
				'<strong>Privacy Act + APPs</strong> (Australia) — 13 Principios Australianos de Privacidad; esquema de notificación de violación de datos. La pista de auditoría y la exportación de datos de EDDI cubren las obligaciones técnicas.',
				'<strong>Leyes estatales tipo CCPA</strong> (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, etc.) — La API compatible RGPD/CCPA satisface todas las leyes estatales emergentes de privacidad en EE. UU.',
			],
			industryHeading: 'Cumplimiento específico de la industria',
			hipaaHeading: 'HIPAA — Salud en Estados Unidos',
			hipaaPara: 'El Health Insurance Portability and Accountability Act establece salvaguardas para la Información de Salud Protegida (PHI). EDDI proporciona la infraestructura técnica para despliegues de IA conformes con HIPAA:',
			hipaaItems: [
				'<strong>Controles de acceso (§164.312(a))</strong> — Keycloak OIDC con acceso basado en roles (eddi-admin, eddi-editor, eddi-viewer)',
				'<strong>Controles de auditoría (§164.312(b))</strong> — Registro de auditoría inmutable firmado HMAC que registra cada operación con marcas de tiempo, IDs de usuario y resultados',
				'<strong>Controles de integridad (§164.312(c))</strong> — Detección de manipulación HMAC-SHA256 en todas las entradas de auditoría',
				'<strong>Seguridad de transmisión (§164.312(e))</strong> — TLS para tránsito; AES-256-GCM para secretos en reposo vía Secrets Vault',
				'<strong>Eliminación de datos (§164.310(d)(2)(i))</strong> — El endpoint de eliminación en cascada RGPD elimina permanentemente PHI de todos los almacenes de datos',
				'<strong>Plantilla BAA</strong> — Plantilla de Business Associate Agreement incluida en la documentación de EDDI para despliegues en salud',
			],
			soc2Heading: 'Preparación SOC 2',
			soc2Para: 'SOC 2 Type II evalúa los sistemas según los Trust Services Criteria. La arquitectura de EDDI proporciona controles técnicos que apoyan a las organizaciones que buscan la atestación SOC 2:',
			soc2Items: [
				'<strong>Seguridad</strong> — Autenticación OIDC/Keycloak, RBAC, Secrets Vault (AES-256-GCM), cero eval(), protección contra path traversal, validación de URL',
				'<strong>Disponibilidad</strong> — Escalado horizontal vía NATS JetStream, soporte dual de base de datos (MongoDB/PostgreSQL), despliegue nativo en Kubernetes',
				'<strong>Integridad de procesamiento</strong> — Registro de auditoría inmutable firmado HMAC con verificación de integridad criptográfica por operación',
				'<strong>Confidencialidad</strong> — El filtro de redacción de secretos elimina claves API y referencias de vault de las entradas de auditoría; registro sin PII con pseudónimos SHA-256',
				'<strong>Privacidad</strong> — API completa de derechos de los interesados (supresión, exportación, restricción), retención configurable, controles de restricción de procesamiento',
			],
			apiHeading: 'Una API para el cumplimiento global',
			apiPara: 'Cada regulación de privacidad listada arriba es servida por <strong>la misma API REST unificada y las mismas herramientas MCP</strong>. Ya sea que estés respondiendo a una solicitud de supresión RGPD en Alemania, una solicitud de eliminación CCPA en California o una solicitud de acceso PDPA en Singapur — los mismos endpoints lo manejan todo:',
			apiItems: [
				'<strong><code>DELETE /admin/gdpr/{userId}</code></strong> — Eliminación en cascada en 5 almacenes de datos (memorias de usuario, conversaciones, mapeos gestionados, registros, entradas de auditoría)',
				'<strong><code>GET /admin/gdpr/{userId}/export</code></strong> — Exportación completa de datos del usuario como JSON estructurado (memorias, conversaciones, registros de auditoría)',
				'<strong><code>POST /admin/gdpr/{userId}/restrict</code></strong> — Congelar procesamiento preservando datos para resolución de disputas',
				'<strong>MCP: <code>delete_user_data</code></strong> — Eliminación en cascada orquestada por IA (requiere confirmación explícita)',
				'<strong>MCP: <code>export_user_data</code></strong> — Exportación de datos orquestada por IA para flujos de trabajo DSAR automatizados',
			],
			heading3: 'Construido para industrias reguladas en todo el mundo',
			para2: 'Salud, servicios financieros, gobierno, manufactura y otros sectores regulados pueden desplegar EDDI con confianza. La plataforma proporciona la transparencia, auditabilidad y mecanismos de control requeridos por más de 15 marcos regulatorios — desde el EU AI Act y el RGPD en Europa hasta HIPAA en Estados Unidos, PIPEDA en Canadá, LGPD en Brasil, APPI en Japón, POPIA en Sudáfrica y PDPA en el sudeste asiático. El cumplimiento no es una ocurrencia tardía — es una fundación arquitectónica.',
		},`,
};

// ── Process each locale ──
for (const [locale, translated] of Object.entries(translations)) {
	const filePath = join(ROOT, locale + '.ts');
	let content = readFileSync(filePath, 'utf-8');
	
	// Find the compliance block: starts with `\tcompliance: {` and ends with closing `},`
	// We look for the pattern between `compliance: {` and the next `},\n\t},\n};` 
	const startMarker = /\tcompliance:\s*\{/;
	const startMatch = content.match(startMarker);
	if (!startMatch) {
		console.error(locale + ': compliance block not found');
		continue;
	}
	
	const startIdx = startMatch.index;
	
	// Find the closing: the compliance block ends with `\t\t},` followed by `\t},` and `};`
	// We need to find the `heading3:` and `para2:` then the closing `},`
	const closingPattern = /\t\t\tpara2:.*?\n\t\t\},/s;
	const afterStart = content.slice(startIdx);
	const closingMatch = afterStart.match(closingPattern);
	if (!closingMatch) {
		console.error(locale + ': closing pattern not found');
		continue;
	}
	
	const endIdx = startIdx + closingMatch.index + closingMatch[0].length;
	
	// Replace
	const before = content.slice(0, startIdx);
	const after = content.slice(endIdx);
	content = before + translated + after;
	
	writeFileSync(filePath, content, 'utf-8');
	console.log(locale + ': ✓ translated (' + translated.length + ' chars)');
}

console.log('\\nDone! Translated ' + Object.keys(translations).length + ' locale files.');
