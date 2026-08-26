# Changelog

All notable changes to the EDDI website will be documented in this file.

## [Unreleased]

### 📊 Benchmarks & Evidence Page

Closes the Findable report's second gap ("performance & benchmark content"). Also addresses the standing credibility risk flagged during the content audit: the site asserts hard performance and cost numbers with no published methodology behind them.

- `feat(website)`: **New page at `/benchmarks/`**, English only. Content in `src/data/benchmarks.ts`, page at `src/pages/benchmarks.astro`.
- **Editorial position, stated plainly: this page publishes NO first-party EDDI numbers, because none have been measured.** Inventing them on a page whose entire purpose is surviving a skeptical reader would have been the worst possible move. What it publishes instead is (a) the independent literature establishing that the mechanisms work and what magnitude is plausible, (b) the conditions that determine where a given deployment lands in that range, and (c) the measurement harness, fixed in advance so the methodology cannot later be tuned to the result.
- `feat(website)`: **18 cited studies across three claim areas** (model cascading cost, JVM virtual thread throughput, retrieval quality). Every citation carries a DOI, a named venue, and an explicit **peer-reviewed / preprint** label. **All 18 DOIs were verified to resolve** to real publisher pages (arXiv, ACL Anthology, IEEE Xplore, ACM DL, MDPI, medRxiv), checked against a deliberately fabricated control DOI that correctly 404s. 10 of the 18 are preprints, including FrugalGPT, and the page says so rather than letting a reader find out.
- **The page cites evidence against EDDI on purpose.** A study of virtual threads in **Quarkus**, the framework EDDI is built on, found they did not match Quarkus-reactive in a resource-constrained container (ACM DEBS 2023). Another found virtual threads slightly *slower* than platform threads on CPU-bound work (IEEE MIPRO 2025). A third shows memory rather than CPU becomes the binding constraint as concurrency rises. All three are in the table.
- **The "up to 60 to 80%" cascade figure is now qualified rather than repeated.** Published savings span roughly 30% to 98%, and the most methodologically careful production study on the page measured **31% (95% CI 27 to 35%)**. Its authors specifically note their numbers come from end-to-end routing on real outputs and measured latency, "not simulated routing from global accuracies or nominal API prices", which is how a large share of higher published figures are produced. The page names the three drivers (workload heterogeneity, escalation-signal calibration, price gap between tiers) and states the claim as a conditional.
- **Recommended follow-up, deliberately NOT done here:** the `60-80%` string in `pages.vsAlternatives.cloudComparisonRows` across all 11 locales, and the equivalent line in `README.md`, still state the figure unqualified. Changing marketing copy in 11 languages is a decision for the site owner, not a side effect of adding a page. The benchmarks page currently supplies the qualification the feature pages omit.
- `feat(website)`: **Navigation** — `nav.benchmarks` added to all 11 locales, wired into the footer's Develop column and the mobile menu. Kept out of the desktop top nav, which already carries five items.
- `fix(website)`: **`llms.txt`** — new Benchmarks section that states explicitly that EDDI publishes no first-party benchmark numbers at this time, so an answer engine summarizing the site cannot imply otherwise.
- **Verified:** `astro check` 0 errors / 0 warnings; `check-stats` clean over 102 files; build 300 pages. Page carries 36 DOI links (18 unique), 10 preprint and 8 peer-reviewed provenance tags, zero `hreflang`, WebPage+FAQPage structured data, and every internal link resolves.

### 🧭 Migration Playbooks + RAG Guide Switched to Chroma

- `feat(website)`: **Two migration playbooks** at `/guides/migrate-from-n8n/` and `/guides/migrate-from-flowise/`, the P1 item the Findable report called out as unlocking enterprise buyer traffic. Both are assigned to the **Technical Buyer** persona, which was the one empty group on the hub: a migration playbook is read while deciding, not only while migrating, so each opens with an explicit "first, decide whether to migrate" section that says plainly when the answer is no.
- **Editorial stance:** the n8n playbook states that most n8n workflows should stay in n8n and that running both is a normal end state; the Flowise one says to keep the prototype if it is still an internal tool for one team. Same reasoning as the comparison pages, balanced content gets cited, one-sided content gets discounted.
- **Both are honest about the hard part.** Code nodes (n8n) and Custom Function nodes (Flowise) have no equivalent, because EDDI does not evaluate code at runtime. Each playbook gives the three things such a node becomes (configuration, a declared tool, or nothing) and tells the reader to estimate by counting those nodes rather than total nodes. The Flowise playbook front-loads the index question, since keeping the store and embedding model makes the existing index reusable and changing either means an embedding run, which is the schedule-driving cost.
- `feat(website)`: **Comparison pages now link to the playbooks** — new optional `migrationGuide` field on the `Comparison` type, rendered under the migration table on the n8n and Flowise pages. Gives comparison intent a path into hands-on content.
- `feat(website)`: **RAG guide moved from Qdrant to Chroma** — `build-a-rag-agent-with-qdrant` → `build-a-rag-agent-with-chroma` (`git mv`, so history follows; nothing was deployed at the old URL, so no redirect is needed). Chroma has the least setup friction of the six supported stores. The rewrite also adds a "which of the six" table whose honest answer is usually "whichever you already operate", pointing pgvector and Elasticsearch users away from standing up a new system. Cross-references in the Docker Compose and OpenAPI guides updated, plus `llms.txt`.
- `fix(website)`: **Vector store count was wrong: 5 → 6** — EDDI supports pgvector, Chroma, In-Memory, MongoDB Atlas, Elasticsearch, and Qdrant, per `pages.rag` in `en.ts`. The wrong count had shipped in the RAG guide and in three places in `comparisons.ts`. **`README.md:42` had it wrong too, and that one predates this work.**
- `fix(website)`: **`check-stats` now guards the vector store count** — added a FORBIDDEN pattern for `[0-5] vector stores`, matching how the repo already guards test counts and MCP tool counts. Verified both ways: it flags a planted violation and passes clean afterwards. This is the guard that found the README error.
- **Verified:** `astro check` 0 errors / 0 warnings; `check-stats` clean over 100 files; build 299 pages. Every internal link on all `/guides/` and `/compare/` pages resolves to a real file in `dist/` (scripted check). Hub renders all three persona groups with 7 guides; both comparison pages link to their playbook; guide pages carry TechArticle and zero `hreflang`.
- **Same review caveat as the other guides:** commands and mappings are accurate at the level this repo can confirm. A maintainer should check the n8n and Flowise node-mapping tables against current versions of those products, and the Chroma persistence path note (Chroma has moved it between major releases, which is why the guide tells the reader to verify rather than asserting one).

### 🔗 Broken docs.labs.ai Links (all 11 locales)

- `fix(website)`: **Two outbound link patterns were 404ing**, found while verifying the `docsLinks` targets for the new guides. Both had the wrong path structure rather than a missing extension, so they were genuinely broken, not merely non-canonical:
  - `docs.labs.ai/mcp-server` (23 occurrences) → `docs.labs.ai/protocols-and-integration/mcp-server.md`
  - `docs.labs.ai/deployment/kubernetes` (11 occurrences) → `docs.labs.ai/deployment-and-infrastructure/kubernetes.md`
- These sat in the MCP Server feature page and the Getting Started Kubernetes section across all 11 locale files, so every localized copy pointed at a missing page.
- **Checked, correctly left alone:** the extension-less form of an otherwise *correct* path (for example `security-and-compliance/secrets-vault`) does resolve on the docs site, so those were not touched.
- **Noticed, not changed:** the docs index describes the MCP server as having "80+ tools" while `src/i18n/stats.ts` declares 77 and `check-stats` enforces that number. One of the two is stale, but reconciling it is not a website decision.
- **Verified:** build 297 pages, zero occurrences of either broken form anywhere in `dist/`.

### 📘 Guides Content Collection

Closes the largest gap in the Findable report (25 Aug 2026): "technical tutorials & examples, step-by-step integration guides, sample JSON configs, and reproducible demos". The site had no editorial surface at all before this.

- `feat(website)`: **`/guides/` content collection** — first use of Astro's content layer in this repo. `src/content.config.ts` defines a `guides` collection (glob loader, Zod schema); `src/content/guides/*.md` holds the copy; `src/pages/guides/[...slug].astro` renders them and `src/pages/guides/index.astro` is the hub. Frontmatter carries `persona`, `level`, `timeMinutes`, `publishDate`/`updatedDate`, `order`, `docsLinks`, `faq`, `tags`, and `draft`.
- `feat(website)`: **Five guides** — Docker Compose self-hosting, Keycloak/OIDC, Kubernetes, RAG with Qdrant, and OpenAPI/httpCall tools. The hub groups by the report's three search-intent personas rather than by topic, since that is how a reader self-selects; empty persona groups are not rendered (nothing serves Technical Buyer yet, that persona is served by the benchmarks and case studies still to be built).
- `feat(website)`: **`GuidePage.astro`** — deliberately not `FeaturePage`: a guide is read top to bottom, so it gets a text header with a metadata strip, a contents list generated from the h2s, and a 60rem measure, rather than a 1024px hero image and a marketing CTA above the first instruction. Contents render only when there are more than two h2s.
- `feat(website)`: **`TechArticle` structured data** — new optional `article` prop on `BaseLayout` appends a TechArticle node to the `@graph` (author/publisher by `@id`, `mainEntityOfPage` back to the WebPage, `articleSection` from the persona, `keywords` from tags) and switches `og:type` to `article` with `article:published_time`/`modified_time`/`section`/`tag`. Guide pages with an FAQ therefore carry WebPage+FAQPage **and** TechArticle in one connected graph.
- **Decision: the AGENTS.md rule was amended, not ignored** — the standing "do NOT embed docs content" rule was written to stop reference material being duplicated onto this site, where it goes stale within a release. Guides are a different artifact: acquisition content that takes one job from nothing to working. Section 3 of AGENTS.md now draws that line explicitly (a guide may show commands, requests, and config decisions; it may NOT reproduce field tables, complete schemas, or full API surfaces) and records that guides and comparison pages are English-only with `localized={false}`.
- **The guides honour that line by construction.** Every command in them is one verified against this repo (`install.sh` and its flags, `docker compose up`, the vault `PUT`, `setup_agent`, `POST /agents/{id}/start`, the k8s quickstart). Everywhere an exact config schema would be needed, the guide explains the concept and the decision, then hands off via `docsLinks`. That is deliberate: reproducing the Qdrant connection block or the `httpCall` field set would have meant inventing a schema I could not verify from this repo, and a wrong config example is worse than no example.
- `feat(website)`: **Navigation** — `nav.guides` added to all 11 locale files, wired into the desktop header (next to Docs), the mobile menu, and the footer's Develop column. Localized pages link to the English guides with a localized label, matching how docs.labs.ai is already handled.
- `fix(website)`: **`check-stats.mjs` now scans `src/content/**/*.md`** — guide prose carries the same marketing claims as the locale files, so it gets the same stale-stat and em-dash guards. 98 files scanned, up from 90.
- `fix(website)`: **`llms.txt`** — added a Guides section listing all five plus the hub.
- **Known hints:** Astro 6 deprecates re-exporting `z` from `astro:content`, so `astro check` reports 22 deprecation hints (not errors) against `src/content.config.ts`. Switching to a direct zod import means declaring it in `package.json` and regenerating `package-lock.json`, so it is left as a deliberate follow-up rather than an undeclared transitive import. A note in the file explains this.
- **Verified:** `astro check` 0 errors / 0 warnings; `check-stats` clean; build 297 pages. Confirmed in output: all six routes generated and in the sitemap, 0 `hreflang` links on guide pages, `og:type=article` with article time tags, and a six-node graph (Organization, ImageObject, WebSite, SoftwareApplication, WebPage+FAQPage, TechArticle) with the FAQ intact.
- **Needs a technical review pass before launch:** the guides are accurate at the level this repo can confirm, but a maintainer should check the Keycloak environment-variable narrative, the Kubernetes overlay and Operator descriptions, and the Qdrant/embedding configuration flow against current EDDI behaviour. The `draft: true` frontmatter flag exists to pull any of them from the build without deleting the file.

### ⚖️ Head-to-Head Comparison Pages + JSON-LD Consolidation

Both items answer the Findable content-gap report (25 Aug 2026), which named n8n, Flowise, Rasa, LangChain and Hugging Face as the direct search competitors.

- `feat(website)`: **Split comparison intent onto its own URLs** — `/enterprise/vs-alternatives/` covered every alternative on one page, so "eddi vs n8n" and "eddi vs rasa" had nowhere to rank. New route `src/pages/compare/[slug].astro` generates four pages from `src/data/comparisons.ts`: `/compare/eddi-vs-n8n/`, `/compare/eddi-vs-flowise/`, `/compare/eddi-vs-rasa/`, `/compare/eddi-vs-langchain/`. Each carries a quotable "short answer" verdict, an architecture table, a **balanced** "where the alternative is the better choice" column, a migration mapping table, and 3-4 FAQ entries emitted as structured data.
- `feat(website)`: **Coverage gaps the report exposed** — Rasa was absent from the site entirely. The old page compared **LangChain4j** (the Java library EDDI uses internally), which is a far smaller search target than **LangChain**; both are now addressed, and the LangChain page opens by stating the LangChain4j relationship rather than obscuring it. `/enterprise/vs-alternatives/` is kept as the hub and links to all four.
- **Decision: content lives in `src/data/`, not `src/i18n/locales/`** — `TranslationSchema` is `typeof en`, so adding these strings to `en.ts` would have forced all 10 other locale files to implement the same shape. Comparison search intent is overwhelmingly English, so these pages ship English-only.
- `feat(website)`: **`localized` prop for English-only pages** — new opt-out threaded through `BaseLayout` → `Header` → `LanguagePicker`, plus `FeaturePage`. When false it suppresses the 11 `hreflang` alternates and `og:locale:alternate` tags (which would otherwise point at 404s), skips the `LanguageSuggestion` toast, and re-points the language switcher at the locale homepages. `FeaturePage` also gained a `faqItems` passthrough.
- `fix(website)`: **JSON-LD merged into a single `@graph`** — `BaseLayout.astro` emitted four disconnected blocks (Organization, WebSite, SoftwareApplication, and a conditional FAQPage). They are now one graph whose nodes cross-reference by `@id`, so the entity resolves as one thing. Added a `WebPage` node per page (`isPartOf` the WebSite, `about` the SoftwareApplication, with `inLanguage`); a page with a visible FAQ is typed `["WebPage", "FAQPage"]` and carries the Q&A as `mainEntity`, replacing the previously orphaned FAQPage block. `Organization.sameAs` expanded from one URL to three (github.com/labsai, the EDDI repo, Docker Hub); **only verifiably-owned profiles were added** — no LinkedIn or X entry, because none was found on either site.
- `fix(website)`: **`check-stats.mjs` now scans `src/data/`** — the new comparison copy carries the same marketing claims as the locale files, so it gets the same stale-stat guard and the same em-dash guard. Without this the numbers in `comparisons.ts` would have drifted silently.
- `fix(website)`: **`llms.txt`** — added a "Head-to-Head Comparisons" section, and corrected the `vs-alternatives` line, which still described a competitor set (Dify, Camunda) that no longer matches the page.
- **Verified:** `astro check` 0 errors / 0 warnings (the one hint is pre-existing in `scripts/update-docker-pulls.mjs`); `check-stats` clean over 90 files; `astro build` 291 pages. Confirmed in the built output: 12 `hreflang` links on localized pages and **0** on the comparison pages, one `ld+json` block per page with 5 cross-referenced nodes, FAQ folded into the page node (7 on the homepage, 4 on the n8n page), correct `inLanguage` per locale, and clean sitemap entries with no bogus `xhtml:link` alternates.
- **Competitor facts to re-verify before launch:** n8n's Sustainable Use License terms, Rasa's community-edition licensing (deliberately worded as "verify current terms" rather than asserting an SPDX identifier), and Flowise enterprise-tier workspace features. These move.
- **Not done yet:** Hugging Face has no page — the overlap is self-hosting and model deployment rather than orchestration, so it belongs in a future self-hosting guide. Migration playbooks (`/guides/migrate-from-n8n/`) are referenced in the plan but not built; they need the `/guides/` content collection first.

### 🗑️ Agent Father → Platform Operator
- `fix(website)`: **Removed the Agent Father from the Multi-Agent feature list (all 11 locales)** — EDDI deleted the Agent Father: the bundled starter agent, its ZIP, and the `POST /backup/import/initialAgents` endpoint that shipped it are gone, replaced by EDDI-Manager's **Platform Operator** (`/manage/operator`) and its form-based agent wizard. The `items2` bullet therefore advertised a feature that no longer exists, and its "(ships out of the box)" parenthetical was the part that had actually become false — the operator is *activated* by the user with their own provider key, not deployed on install. Bullet replaced with "**Platform Operator**: A meta-agent that reads and operates your deployment — including creating other agents — with every write behind a human approval gate", which also surfaces the HITL gate the operator's write capability depends on. The `para2` lead-in ("…and a meta-agent that creates other agents through conversation") was reworded to "…that operates the platform itself" in 10 locales; `hi` needed no change there — its `para2` only said "a meta-agent", with no claim attached.
- `fix(website)`: **`ar.ts` was missed by the obvious search** — Arabic had *translated* the name (`الوكيل الأب`, "the Father Agent") rather than keeping it in English like the other ten, so a grep for "Agent Father" returned 10 files when 11 needed changing. The replacement keeps `Platform Operator` in English there, matching how `Task Force`, `Slack` and `A2A` are already handled in that file.
- `fix(website)`: **Stray English word in `zh.ts`** — the reworded `para2` also removes "通过对话创建other代理" (an untranslated "other" mid-sentence), fixed incidentally rather than deliberately hunted.
- **Not changed:** this file's own historical entry naming the Agent Father — a dated record, not live copy.
- **Verified:** `astro check` — 0 errors, 0 warnings (the single hint is pre-existing, in `scripts/update-docker-pulls.mjs`).
- **Needs a native-speaker pass:** the 10 non-English strings are my translations, unlike the UNIDO copy below which went through a translate→verify reviewer workflow.

### 🌐 Domain Migration: eddi.labs.ai → eddi.technology
- `feat(website)`: **Domain migration** — Changed primary site domain from `eddi.labs.ai` to `eddi.technology` across the entire codebase. Updated `astro.config.mjs` site URL, `BaseLayout.astro` meta/OG/Twitter tags, `robots.txt` sitemap URL, `public/CNAME`, `llms.txt`, `llms-full.txt`, `README.md`, `AGENTS.md`, privacy policy references across all 11 locales, and company `https://labs.ai` links to `https://eddi.technology` in FAQ answers and footer. Preserved `docs.labs.ai` links and `contact@labs.ai` email addresses unchanged.

### 🎯 UNIDO Page Accuracy Pass
- `fix(website)`: **Removed unconfirmed WAIC 2026 showcase claims** — The official UNIDO selection email states WAIC 2026 is only a "potential platform… subject to further consultation and confirmation," and the conference had not yet taken place. Removed every "showcased at WAIC 2026" claim from the UNIDO callout, timeline, institutions card, meta description, and hero badge across all 11 locales. Removed the "WAIC 2026 Showcase" feature card and the WAIC organization card from `UnidoPartnerContent.astro` (org cards now list only the three certificate issuers: UNIDO, AIM Global, Shanghai AI Research Institute). Hero badge changed from "· WAIC Shanghai" to "· UNIDO".
- `fix(website)`: **Softened UN over-attribution** — `whatCard1Title` "UN Institutional Validation" → "Recognized by a UN Agency" (and locale equivalents); UNIDO `ctaDesc` "recognized by the United Nations" → "recognized by UNIDO" (the recognition came via UNIDO's AIM Global, not the UN as a whole). All 11 locales.
- `fix(website)`: **UNIDO member states 172 → 170+** — Future-proofed the member-state count (current ~173) in `whatCard1Desc` and `org1Desc` across all 11 locales.
- `fix(website)`: **Provider count 12+ → 12** — Removed the inflating "+" from `solCard4Title` across all 11 locales.
- `fix(website)`: **AIM Global link** — Repointed the AIM Global organization card from the empty `aim-global.org` to the official `aim.unido.org`.
- `fix(website)`: **Solution description (EN)** — Softened "specifically recognized for its ability to serve organizations in the Global South" to "recognized as a promising contribution to industrial AI for the Global South", matching the official selection wording.
- `fix(website)`: **solutionDesc consistency (10 non-English locales)** — Aligned the second sentence to the softened English ("recognized as a promising contribution to industrial AI for the Global South"). ja/ko/th/zh previously carried a different (non-overstating) second sentence; those were unified too. Each translation was produced and then independently checked by a separate native-language reviewer pass (20-agent translate→verify workflow).
- `fix(website)`: **Banner + callout badges UN → UNIDO** — Announcement `bannerBadge` and homepage `unidoBadge` changed from "UN / United Nations Recognition" to "UNIDO Recognition" (locale-appropriate) across all 11 locales.

### 🔄 Sync with EDDI 6.1.2 Docs
- `fix(website)`: **MCP Tool Count 42 → 65** — Updated all MCP tool count references across 11 locales, llms.txt, and llms-full.txt. Added 4 missing tool categories to MCP Server page: Group Conversation Tools (11), Memory Tools (8), GDPR Tools (2), Channel Integration Tools (5).
- `feat(website)`: **Task Force Discussion Style** — Added 6th discussion style (TASK_FORCE: PLAN → EXECUTE → VERIFY → SYNTHESIS) and Dynamic Agents feature (create/recruit/teardown agents at runtime) to Multi-Agent page. Updated from "5 discussion styles" to "6". i18n'd across 11 locales.
- `fix(website)`: **Getting Started MCP Config** — Replaced single Direct HTTP config (which didn't work for Claude Desktop) with tabbed UI: "Claude Desktop (stdio)" tab showing mcp-remote bridge config, and "Direct HTTP" tab for Cursor/VS Code/Windsurf/Antigravity. Added Windows npx PATH tip and link to MCP Server documentation.
- `fix(website)`: **Version 6.1.1 → 6.1.2** — Updated `EDDI_LATEST_VERSION` in version.ts.
- `fix(website)`: **Test Count 9,000+ → 9,600+** — Updated test count across all 11 locales (actual: 9,611 tests, 0 failures).
- `feat(website)`: **MCP Client Documentation** — Added `clientsNote` to MCP Server page listing supported clients (Claude Desktop, Cursor, VS Code, Windsurf, Antigravity) with link to docs.labs.ai/mcp-server. Added `step2DocsLink` to Getting Started. i18n'd across 11 locales.

### 🏆 UNIDO Trusted Partner Integration
- `feat(website)`: **UNIDO Trusted Partner Page** — New dedicated page at `/enterprise/unido-trusted-partner/` showcasing LABS.AI's selection as UNIDO Trusted Partner for Industrial AI for the Global South. Includes hero, certificate display (Astro-optimized), expanded solution section with 4 Global South-specific feature cards, 4 "What This Means" context cards, 4 organization cards (UNIDO, AIM Global, Shanghai AI Research Institute, WAIC 2026), 5 SDG alignment cards (SDG 9, 8, 10, 12, 17 with official UN colors), and CTA. Full i18n across 11 locales.
- `feat(website)`: **Announcement Banner** — Updated to "LABS.AI selected as UNIDO Trusted Partner for Industrial AI" with link to dedicated page. New localStorage key `eddi-banner-dismissed-unido` so users who dismissed the old v6 banner see the new one.
- `feat(website)`: **Homepage Callout** — New UNIDO Recognition callout section between Philosophy Quote and Trusted & Certified sections. Glassmorphic card with badge, title, description, and link.
- `feat(website)`: **Trust Page** — Added UNIDO institution card (first in grid) and 2026 timeline entry for the Trusted Partner selection.
- `feat(website)`: **Footer** — Added "UNIDO Partnership" link in Resources column.

### 🏅 OpenSSF Gold & Trust Enhancements
- `feat(website)`: **OpenSSF Gold Badge** — Added OpenSSF Gold trust bar item to footer and OpenSSF Gold trust card to homepage "Trusted & Certified" section (now 6-card grid). Updated Track Record page `devOpenSSF` label from "Best Practices" to "Gold" with "highest tier" description. All changes i18n'd across 11 locales.
- `feat(website)`: **OpenSSF Scorecard Badge** — Added Scorecard badge (9.8) to Track Record live badges row and new Scorecard trust signal card to the developer trust grid. i18n'd across 11 locales.
- `feat(website)`: **Philosophy Quote** — Added hero callout with project philosophy quote ("The engine is strict so the AI can be creative.") between The Solution and Trusted sections on homepage. Links to project-philosophy.md. i18n'd across 11 locales.
- `feat(website)`: **Version Display** — Added `EDDI_LATEST_VERSION` constant (6.1.1) and updated hero tagline to show full version: "Now in v6 (latest: 6.1.1)". i18n'd across 11 locales.

### 🔒 Security Content
- `feat(website)`: **Sigstore Cosign** — Added keyless OIDC container image signing to security capabilities list. i18n'd across 11 locales.
- `feat(website)`: **Automated Security Pipeline** — New section on Security feature page documenting 6 CI/CD security tools: CodeQL, Trivy, Gitleaks, ZAP, CycloneDX, Jazzer. Rendered in both root and [lang] security page variants. i18n'd across 11 locales.

### 🚀 Features Content
- `feat(website)`: **Slack Integration** — Added Slack integration item to Multi-Agent group orchestration features (items2). i18n'd across 11 locales.
- `feat(website)`: **OpenTelemetry/OTLP** — Added OpenTelemetry distributed tracing (Jaeger, Tempo, Datadog) to observability features. Updated Prometheus entry to mention 50+ Micrometer metrics at `/q/metrics`. i18n'd across 11 locales.

### 🌐 i18n — Translation Gap Remediation
- `fix(website)`: **Security Items** — Added missing "Secret Redaction" and "PII-Safe Logging" items to `pages.security.items` in all 10 non-English locales (now matching EN's 9 items + locale-specific EU AI Act item = 10 total).
- `fix(website)`: **Config-as-Code Items** — Added missing "Import / Export", "Agent Sync", "Prompt Snippets", and "Behavior Rules" items to `pages.configAsCode.items` in all 10 non-English locales (now 9 items matching EN).
- `fix(website)`: **Performance Items** — Added missing "Loom-Friendly Connection Pools" item to `pages.performance.items` in all 10 non-English locales (now 8 items matching EN).
- `fix(website)`: **FR Full Translation** — Translated `crisisPara` English fragment, `rfpItems` (8 questions + answers), `tcoBuildItems` (8 items), and `tcoDeployItems` (4 items) from English to French.
- `fix(website)`: **PT Full Translation** — Translated `rfpItems`, `tcoBuildItems`, and `tcoDeployItems` from English to Portuguese. Fixed `contactLink` from "Contact" to "Contato".
- `fix(website)`: **ES contactLink** — Fixed untranslated "Contact" → "Contacto".
- `fix(website)`: **KO Typo** — Fixed Devil's Advocate translation typo: "악마의 옥호" → "악마의 옹호".
- `fix(website)`: **TH Garbled Text** — Fixed broken text in `solutionDesc`: garbled "eware Platform" fragment restored to proper Thai.
- `fix(website)`: **Slack Ordering** — Fixed Slack Integration item position from last (6th) to 3rd in `multiAgent.items2` for DE, ES, AR, ZH, JA, KO, HI, TH. FR and PT already had correct ordering.
- `fix(website)`: **Light Mode** — Fixed philosophy quote section using hardcoded `text-zinc-300` (invisible on light backgrounds) to use theme-aware `dark:text-zinc-300 text-zinc-600`.

### 🔒 Infrastructure — OpenSSF Gold `[hardened_site]`
- `feat(website)`: **Vercel Migration** — Migrated hosting from GitHub Pages to Vercel to enable custom HTTP security headers required for OpenSSF Best Practices Gold badge `[hardened_site]` criterion. GitHub Pages does not support custom response headers. Vercel selected for global edge CDN performance and custom domain support without DNS provider migration.
- `feat(website)`: **Security Headers** — Added `vercel.json` with Content-Security-Policy, Strict-Transport-Security (HSTS), X-Content-Type-Options (`nosniff`), X-Frame-Options (`DENY`), Referrer-Policy, and Permissions-Policy. Also added `public/_headers` as Cloudflare/Netlify fallback.
- `feat(website)`: **CSP Audit** — Audited all external resource dependencies (HubSpot forms embed v2, Umami analytics, Google Analytics GA4, shields.io badges, GitHub Actions badges) and crafted a Content-Security-Policy whitelist covering only the required domains.
- `feat(website)`: **Node.js Version Pin** — Added `.nvmrc` (Node 22) for Cloudflare's build system.

### 🚀 Features
- `feat(website)`: **Demo System Button & Modal** — Added a "Demo System" button to the homepage hero section. Clicking it opens an accessible modal dialog that informs users the system is for exploration only, that all data is wiped every 48 hours at 03:00 UTC, and provides a direct link to the demo instance at `https://34-29-111-190.sslip.io/manage`. Modal includes focus trap, Escape-to-close, backdrop-click-to-close, and full dark/light theme support.
- `feat(website)`: **Demo Modal i18n** — Internationalized all demo system UI strings (`demoBtn`, `demoModalTitle`, `demoModalWarning`, `demoModalBody`, `demoModalCancel`, `demoModalOpen`) across all 11 locales (en, de, es, fr, pt, ar, zh, ja, ko, hi, th).

### 🐛 Bug Fixes
- `fix(website)`: **Legacy Vault Syntax** — Replaced `${eddivault:my-anthropic-key}` with the canonical `${vault:my-anthropic-key}` syntax across the Getting Started code samples (MCP + REST tabs) and all 11 locale `step3VaultTip` strings. The `eddivault` prefix is legacy; the EDDI backend actively normalizes it to `vault` on import.

### 📄 Documentation Audit — Content Gap Remediation
- `feat(website)`: **Banner Update** — Updated the announcement banner to link directly to the EDDI v6 release story on Medium instead of the getting-started page. Translated the link text ("Read the story") across all 11 locales.
- `feat(website)`: **12 Built-In Agent Tools** — Added a 6-column tool grid to Features Overview showing all 12 bundled tools (Web Search, Calculator, Web Scraper, PDF Reader, Weather, DateTime, Data Formatter, Text Summarizer, HTTP Calls, User Memory, Conversation Recall, Multimodal Input). Translated into all 10 non-English locales.
- `feat(website)`: **Config & Portability Section** — Added Import/Export (ZIP), Agent Sync, and Prompt Snippets cards to Features Overview. Translated into all 10 locales.
- `feat(website)`: **Config-as-Code Items** — Added 4 new items (Import/Export, Agent Sync, Prompt Snippets, Behavior Rules) to the Config-as-Code feature page. Translated into all 10 locales.
- `feat(website)`: **Memory Policy** — Added Memory Policy (Commit Flags) item to the Memory feature page. Translated into all 10 locales.
- `feat(website)`: **MCP Open Standards** — Added OpenAPI 3.1 tool item. Renamed MCP heading from "MCP Client Support" to "Open Standards — Not Proprietary APIs". Expanded MCP description to cover A2A, OpenAPI, OAuth 2.0/OIDC, and SSE. Translated into all 10 locales.
- `feat(website)`: **Getting Started Expansion** — Added Installer Options (flags), `eddi update` CLI, Kubernetes Deployment, and Quarkus SDK sections. Translated into all 10 locales.
- `feat(website)`: **Why EDDI Comparison Table** — Added 6-dimension comparison table (Concurrency, Agent Logic, Security, Compliance, Audit Trail, Deployment) vs. Python/Node frameworks. Translated into DE, ES, FR, PT.
- `feat(website)`: **12 LLM Providers Table** — Added 4-category provider table (Cloud APIs, Enterprise Cloud, Self-Hosted, Compatible). Translated into all 10 locales.
- `feat(website)`: **Quarkus SDK Section** — Added SDK info with Maven dependency to Why EDDI and Getting Started pages.
- `feat(website)`: **Multi-Agent Group Conversations** — Rendered existing but previously hidden heading3/para2/items2 (5 discussion styles, nested groups, Agent Father, A2A, capability matching).
- `feat(website)`: **llms.txt & llms-full.txt Update** — Added 12 built-in tools, config & portability, memory policy, OpenAPI/A2A/SSE, Quarkus SDK, 12 LLM providers with categories. Fixed MCP tool count (48→42).

### 🐛 Bug Fixes
- `fix(website)`: **German Localization Typo** — Fixed incorrect translation of "prototype" (from "prototypisieren" to "bauen Prototypen") in the Features Overview page.
- `fix(website)`: **Docker Pulls Badge Distortion** — Fixed stretched shields.io and GitHub Action badges on the homepage "Trusted & Certified" section by applying `w-auto` utility classes. This prevents aspect-ratio distortion while preserving the explicit HTML `width`/`height` attributes required to avoid Lighthouse CLS penalties.
- `fix(website)`: **Mobile CTA Stack Layout** — Re-implemented the mobile CTA button layout (Get Started / View on GitHub) to use a centered vertical flex column (`max-width: 20rem`) with 100% width buttons. This resolves cramped horizontal rendering while preventing oversized, edge-to-edge block stretching.
- `fix(website)`: **Hero Image Container Spacing** — Eliminated excessive trailing whitespace below hero images inside `.premium-image-wrapper` elements. Applied `display: flex` to the wrapper to remove block baseline gaps and enforced an explicit `aspect-ratio: 1 / 1` on the image itself, ensuring perfectly snug, high-fidelity responsive scaling without letterboxing.
- `fix(website)`: **Trust Badge Aspect Ratio** — Fixed stretched and squeezed social proof badges on the Track Record page by adding `width: auto` to prevent aspect ratio distortion when the height is CSS-constrained to `1.5rem`.
- `fix(website)`: **Mobile CTA Button Formatting** — Relaxed the forced full-width stretching constraint (`width: 100%`, `align-items: stretch`) on mobile viewport CTA buttons across the homepage, FeaturePage layout, features overview, and compliance layouts. Buttons now inherit native flex wrapping and horizontal centering, resulting in appropriately sized, un-stretched elements that better handle narrow displays without appearing as oversized block elements.
- `fix(website)`: **setup_agent Missing apiKey** — The `setup_agent()` code snippet on the Getting Started page was missing the required `apiKey` parameter and used `modelId` instead of `model`. Fixed to match the actual `McpSetupTools.java` signature.

### ♿ Lighthouse Accessibility & Best Practices (Score: 85 → Target 100)
- `fix(website)`: **aria-hidden Focusable Descendants** — Mobile menu (`#eddi-mobile-menu`) had `aria-hidden="true"` but contained interactive `<a>` and `<button>` elements. Added `tabindex="-1"` toggle on all focusable descendants when the menu is closed/opened.
- `fix(website)`: **Color Contrast WCAG AA** — Bumped `--color-text-subtle` from `#8a8a92` (~3.7:1) to `#9e9ea7` (~4.6:1 on `#09090b`). Upgraded `text-zinc-500` to `text-zinc-400` for tech stack descriptions on homepage.
- `fix(website)`: **Touch Target Sizing** — Increased footer navigation link padding from `0.2rem` to `0.375rem`. Increased mobile menu link padding to `0.625rem` with `min-height: 2.75rem` (~44px) to meet the 48px tap target recommendation.
- `fix(website)`: **Image Dimensions for CLS** — Added explicit `width` and `height` attributes to all external badge images (shields.io, GitHub Actions) in `HomeContent.astro` and `TrustContent.astro` to eliminate Cumulative Layout Shift warnings.
- `fix(website)`: **French Locale Parse Error** — Fixed curly right single quote (`'`) in `fr.ts` `timelineTitle` that broke the JavaScript string literal, causing build failures.

### 🎨 UI Enhancements
- `feat(website)`: **Mobile Menu UI Polish** — Added emojis to all mobile navigation links to provide visual anchors and perfectly match the desktop dropdown menus. Updated category header typography to use the primary amber accent color (`var(--color-accent)`) and increased spacing for clear visual hierarchy on the dark navigation overlay.
- `feat(website)`: **Getting Started Hero Image** — Added a 3D isometric hero image to the Getting Started page, matching the dark-charcoal-and-gold visual style used across all other feature and enterprise pages. Updated hero section from centered text-only layout to side-by-side text + image layout (matching FeaturePage layout).

### 🔐 Security Documentation
- `feat(website)`: **Secure API Key Storage Step** — Added new Step 3 "Store Your API Key" to Getting Started guide, teaching users to store keys in the Secrets Vault (REST API or Manager UI) before referencing them via `${vault:...}` syntax. Steps renumbered 3→6.
- `feat(website)`: **MCP/REST Dual Tabs** — Steps 4 (Create Agent) and 5 (Chat) now show both MCP tool calls and REST API (curl) equivalents in switchable tabs, enabling developers who don't use MCP clients to follow along.
- `feat(website)`: **Generic Tab Script** — Refactored the tab switching script to be generic (`querySelectorAll('.gs-tabs')`) instead of hardcoded to `#install-tabs`, enabling reuse across vault, agent, and chat tab sets.

### 🔧 Version Management
- `feat(website)`: **Centralized Version String** — Created `src/i18n/version.ts` as single source of truth for `EDDI_VERSION`. Replaced ~35 hardcoded `v6.0.0-RC1` references across all 11 locale files and `BaseLayout.astro` JSON-LD schemas with template literal interpolation. Version now updated in one place.

### 📈 Social Proof
- `feat(website)`: **Docker Pulls Badge** — Added live Docker Hub pulls badge (from shields.io) to the homepage "Trusted & Certified" section. Card links to `hub.docker.com/r/labsai/eddi`.
- `feat(website)`: **CI & CodeQL Badges** — Added GitHub Actions CI and CodeQL status badges as social proof. Card links to GitHub Actions workflow.
- `feat(website)`: **Trust Section i18n** — Added `trustDocker`, `trustDockerDesc`, `trustCI`, `trustCIDesc` translation keys to all 11 locales.
- `feat(website)`: **Track Record Page** — New `/enterprise/trust/` page showcasing EDDI's 18-year evolution, institutional validation (FFG, EU/ELG, EDUBOTS, weXelerate, inits.at, Red Hat), Gnowbe enterprise deployment, and community trust signals (OpenSSF, Codacy, Docker Hub, CI, CodeQL badges). Features a compact vertical timeline, glassmorphism institution cards, live badge row, and developer trust signal grid. Added `pages.trust` translation block to all 11 locales with English placeholder content. Updated Header (desktop + mobile) and Footer navigation with Track Record link.

### 🐛 Bug Fixes
- `fix(website)`: **French Locale String** — Fixed broken `siteDescription` in `fr.ts` where escaped apostrophes (`d\'`) collided with backtick conversion during version migration, producing invalid template literal syntax.
- `fix(website)`: **Getting Started Install Instructions** — Replaced misleading bare `docker run` command with the correct one-command installer (with OS-specific tabs for Linux/macOS/WSL and Windows PowerShell) and Docker Compose as an alternative. Added tabbed UI with `step1TabInstaller`, `step1TabCompose`, `step1ComposeDesc` keys across all 11 locales.
- `fix(website)`: **Mobile Layout Overflows** — Fixed a severe horizontal viewport shift caused by missing `box-sizing: border-box` CSS resets from Tailwind Preflight in Astro. Re-enabled `border-box` globally. Stacked hero action buttons vertically on mobile for optimal touchscreen formatting.
- `fix(website)`: **Trust Page Hero Spacing** — Fixed `TrustContent.astro` hero using hardcoded `10rem`/`8rem` padding instead of `calc(var(--total-header-height) + ...)`, causing the hero to overlap/gap incorrectly when the announcement banner is present. All pages now consistently use the dynamic `--total-header-height` variable.
- `fix(website)`: **Banner Dismiss Persistence Across SPA** — Banner dismiss state (localStorage) was not re-checked during ClientRouter SPA navigations. Added an `astro:page-load` guard that re-hides the banner and recalculates header height when navigating between pages after dismissal.
- `fix(website)`: **Banner RTL Optimization** — Converted physical CSS properties (`padding-right`, `right`) to logical equivalents (`padding-inline-end`, `inset-inline-end`) and added `scaleX(-1)` transform on the arrow icon for `dir="rtl"` so Arabic users see correct layout and directionality.
- `fix(website)`: **Mobile/Tablet Hero Spacing** — Fixed hero titles being hidden behind the fixed header + announcement banner on mobile and tablet viewports. Root cause: the global responsive rule `section:not(.hero-section) { padding-top: 3rem !important }` was overriding the calculated `padding-top` on all non-homepage hero sections (gs-hero, fp-hero, fo-hero, trust-hero, cp-hero, uc-hero). Updated selector to exclude all hero-pattern classes. Also bumped `--banner-height` default to 2.5rem with a 3.5rem mobile fallback for banner text wrapping.
- `fix(website)`: **Mobile CTA Button Layout** — Fixed CTA buttons (Get Started / View on GitHub) appearing cramped and side-by-side on mobile viewports across all pages. Buttons now stack vertically, stretch to full container width (max 20rem), and center-align text. Applied consistently to global `.btn-cta-primary`/`.btn-cta-outline`, homepage hero, FeaturePage layout, FeaturesOverviewContent, ComplianceContent hero and closing CTA sections.
- `fix(website)`: **Image Sharpness / Quality** — Fixed blurry hero images across all pages. Source images are 1024×1024 but Astro's `<Image>` component was downscaling them to 480×480 / 500×500 with default mid-quality webp compression. Updated all `<Image>` usages (FeaturePage, HomeContent, FeaturesOverviewContent, ComplianceContent, GettingStartedContent) to render at full 1024×1024 source resolution. Added `object-fit: contain` as a safety net. Switched to `passthroughImageService()` so Astro serves the pre-optimized WebP assets byte-for-byte without re-encoding (previously `quality="max"` was tripling file sizes: e.g. 76kB → 205kB). Fixed FeaturesOverviewContent missing the `premium-image-wrapper` class for visual consistency.
### 🔧 PR Code Review Fixes (Copilot)
- `fix(website)`: **Duplicate English Route** — Fixed `[lang]/contact.astro` using `LOCALE_CODES` instead of `NON_DEFAULT_LOCALES`, which generated a duplicate `/en/contact/` page alongside the root `/contact/`.
- `fix(website)`: **Language Picker Locale Detection** — Added `data-locale` attribute to language dropdown items. Previously the JS derived the locale from the URL path, which failed for English root paths (e.g., `/features/overview/` would store `features` as the locale code).
- `fix(website)`: **Language Picker Accessibility** — Added click/keyboard toggle for `aria-expanded` on the language picker button, plus Escape-to-close and outside-click-to-close handlers. Previously `aria-expanded` was hardcoded to `false` despite CSS hover controlling visibility.
- `fix(website)`: **Language Picker Listener Leak** — Moved document-level click and keydown listeners behind a module-level guard to prevent handler accumulation on ClientRouter `astro:after-swap` events.
- `fix(website)`: **Copy Button Idempotency** — Added guard to skip `<pre>` elements already inside `.eddi-pre-wrapper`, preventing duplicate buttons and nested wrappers during client-side navigations.
- `fix(website)`: **Footer SVG Accessibility** — Added `aria-hidden="true"` to all 4 decorative SVGs in the trust bar so screen readers skip them.
- `fix(website)`: **robots.txt SEO** — Removed `Disallow: /_astro/` rule that was blocking crawlers from fetching hashed CSS/JS assets needed for rendering-based indexing.
- `fix(website)`: **ESM Path Resolution** — Replaced non-standard `import.meta.dirname` with `dirname(fileURLToPath(import.meta.url))` across all 11 translation scripts for reliable Node.js execution.
- `docs(website)`: **AGENTS.md Refresh** — Updated project context from "migrating to Astro" to current architecture (Astro + Tailwind CSS v4, root-English i18n routing). Updated key files table to reflect current project structure.
- `fix(website)`: **Vite Override Pin** — Pinned `overrides.vite` from `^7` to exact `7.3.2` to prevent unexpected breakage on lockfile regeneration.

### 📈 Content Updates
- `feat(website)`: **Trust Page Globalization** — Replaced Austria-specific references across all 11 locale files with universally descriptive language for a global audience. Timeline entries now use generic descriptors ("university business incubator", "top-tier European accelerator program") alongside subtle injections of specific entity names (inits.at, weXelerate, FFG, Vienna) to maintain SEO/GEO keyword density while preserving the globalized tone. Institutional backing cards renamed from specific Austrian organizations to descriptive titles ("Government Research Grant", "European Accelerator Program"). Legal/imprint addresses intentionally preserved as factual company information.
- `feat(website)`: **Test Count Milestone** — Updated all test count references from 1,700+ to 2,000+ across all 11 locale files (en, de, es, fr, pt, ar, zh, ja, ko, hi, th). Affected strings: `codeQualityDesc`, `footer.tests`, `home.trustTests`, `featuresOverview.cqCardDesc`, `pages.codeQuality.description`, and `pages.codeQuality.items`. 6 strings × 11 locales = 66 string replacements.

### 📊 Analytics & Cookie Consent
- `feat(website)`: **Cookie Consent Banner** — Ported the cookie consent system from the original `index.html` into a standalone `CookieConsent.astro` component. Features Accept All / Manage Cookies flow, settings modal with Necessary / Analytics / Marketing toggles, focus trap for keyboard accessibility, Escape to close, and localStorage-persisted consent.
- `feat(website)`: **Google Analytics (GA4)** — Consent-gated GA4 integration (`G-L1011GL1PY`). Only loads the gtag script after the user explicitly consents to analytics cookies.
- `feat(website)`: **Umami Analytics** — Added Umami cloud tracking (`cloud.umami.is`) as a cookieless, GDPR-safe analytics layer. Loads unconditionally — no consent banner required.
- Design follows the EDDI design-system tokens (dark/light theme-aware), includes slide-up and scale-in animations.

### 🏛️ FOSS Compliance (OpenSSF Badge Readiness)
- `feat(website)`: **Community Footer Column** — Added a 5th footer column ("Community") linking to Contributing guide, Bug Report template, Security Policy, Code of Conduct, and Discussions — all pointing to the EDDI repo. Propagated native translations across all 11 locales. Footer grid updated to 5-column layout.
- `feat(website)`: **Apache 2.0 LICENSE** — Added LICENSE file to the website repository (previously only in the main EDDI repo).
- `fix(website)`: **README Modernization** — Rewrote README.md to reflect current Astro architecture (removed stale Starlight references, updated project structure and tech stack).

### 🔍 Website Audit & Hardening
- `fix(website)`: **JSON-LD Positioning Fix** — Updated `WebSite` and `SoftwareApplication` JSON-LD schema descriptions from stale "Java-native AI middleware" to "self-hosted enterprise AI orchestration platform" to match the documented positioning reframe.
- `feat(website)`: **Page Deduplication** — Extracted 5 shared content components (`HomeContent`, `GettingStartedContent`, `UseCasesContent`, `FeaturesOverviewContent`, `ComplianceContent`) to eliminate ~3,680 lines of duplication between root and `[lang]/` page files. All page files are now thin wrappers (~5-12 lines) that delegate to shared components.
- `fix(website)`: **Features Overview Content Drift** — Fixed bug where `[lang]/features/overview.astro` was missing the entire "AI Capabilities" section (Memory, RAG, Model Cascading, Scheduling) that existed in the root English version.
- `fix(website)`: **WCAG AA Text Contrast** — Raised `--color-text-subtle` from `#686870` (~3.5:1 contrast) to `#8a8a92` (~5:1 contrast) for WCAG AA compliance.
- `fix(website)`: **RTL Class Normalization** — Standardized `inset-e-2` to `end-2` across all templates for consistent RTL support.
- `chore(website)`: **Legacy File Cleanup** — Deleted pre-migration artifacts: `index.html` (62KB), `privacy.html` (30KB), `404.html` (62KB) from repo root.
- `feat(website)`: **PR Build Validation** — Added `.github/workflows/ci.yml` to run `npm run build` on pull requests, catching build failures before merge.
- `fix(website)`: **Emoji Accessibility** — Added `aria-hidden="true"` to decorative emoji icons in use cases cards.

### 📋 Global Compliance Hub
- `feat(website)`: **15+ Regulatory Frameworks** — Expanded the EU AI Act compliance page into a comprehensive Global Privacy & Regulatory Compliance hub covering GDPR, CCPA/CPRA, PIPEDA (Canada), LGPD (Brazil), APPI (Japan), POPIA (South Africa), PDPA (Singapore/Thailand), HIPAA, SOC 2, NIST AI RMF, ISO 42001, UK GDPR, PIPA (South Korea), DPDPA (India), and Australian Privacy Act.
- `feat(website)`: **Compliance-by-Architecture Positioning** — Mapped EDDI's technical platform capabilities (cascade erasure via `DELETE /admin/gdpr/{userId}`, data export, processing restriction, HMAC-SHA256 audit trails, OIDC/Keycloak RBAC) to specific regulatory articles across all 15+ frameworks.
- `feat(website)`: **Compliance Page Visual Redesign** — Replaced wall-of-text compliance page with a card-based grid layout matching the homepage design system: SVG icons in amber-glowing containers, watermark SVGs in card corners, ambient blur glow effects, `border-t border-zinc-800/60` section dividers, and Tailwind utility classes (`rounded-3xl bg-zinc-900/40 backdrop-blur`).
- `feat(website)`: **Compliance Schema Expansion** — Updated the `compliance` object structure across all 11 locale files to support AI governance frameworks, data privacy regulations, industry-specific compliance, and unified API sections.

### 🎯 Positioning Overhaul: Java-Centric → Outcome-Centric
- `feat(website)`: **Strategic Reframe** — Shifted the entire site identity from "Java-native AI middleware" to "self-hosted enterprise AI orchestration platform". Java/Quarkus/JVM demoted from headline identity to supporting "Proven Technology" credibility signals.
- `feat(website)`: **11-Locale Propagation** — Applied the positioning reframe across all 11 locale files (en, de, es, fr, pt, ar, zh, ja, ko, hi, th) with ~200 total string replacements.
- Key messaging changes: "Java-native" → "Self-hosted", "No compiled Java" → "No compiled code", "No recompilation" → "No redeployment", "Enterprise Java teams" → "Enterprise teams", "vs. Spring AI / LangChain4j" → "vs. AI Libraries".
- Performance deep-dive page intentionally retains Java 25/Quarkus/Virtual Threads as the core technical message.

### 📐 Locale Format Harmonization
- `refactor(website)`: **Format Harmonization** — Reformatted all 10 non-English locale files to match `en.ts` multi-line structure. Previously `hi.ts` (16,005 chars/line), `ko.ts` (9,810 chars/line), and `th.ts` (15,163 chars/line) had entire sections crammed onto single lines, making diffs and code review impossible.
- All locale files now use one-key-per-line formatting with consistent indentation. Max line length reduced from ~16K to under 580 chars across all files.

### ⚙️ CI/CD & Deployment
- `feat(website)`: **Astro Version** — Upgraded Astro to version 6.1.3 dependencies.

### 🌐 Internationalization & RTL
- `feat(website)`: **11-Locale Deployment** — Fully translated the entire EDDI marketing site into 11 languages (en, de, es, fr, pt, ar, zh, ja, ko, hi, th) with industry-standard SaaS terminology.
- `feat(website)`: **Hindi & Thai Full Translation** — Replaced English stub content in `hi.ts` and `th.ts` with complete native translations covering all schema keys (nav, common, footer, newsletter, home, gettingStarted, useCases, featuresOverview, and all 11 feature pages).
- `fix(website)`: **7-Locale Translation Regression Fix** — Detected and replaced English-stub locale files for ar, zh, ja, ko, hi, th, pt that were silently importing `en.ts` content, restoring full SEO/GEO indexability for all non-English markets.
- `fix(website)`: **French Locale Parse Error** — Fixed a Unicode curly apostrophe (`'`) in `fr.ts` line 58 that caused esbuild to fail with "Expected `}` but found `orchestration`".
- `feat(website)`: **Astro i18n Routing** — Implemented zero-prefix root for English (SEO preservation) and sub-directory routing for 10 non-English locales (e.g., `/de/`, `/ar/`).
- `feat(website)`: **Arabic RTL Native Support** — Audited and converted all physical CSS properties (left/right/margin/padding) to logical directives (inset-inline-start, margin-inline-start) throughout Tailwind v4 layouts, enabling native `dir="rtl"` structural flipping.
- `fix(website)`: **i18n Syntax Stability** — Resolved build pipeline crashes caused by corrupted array structures (`vsItems`) and missing paragraphs in Japanese, Chinese, Arabic, and Korean localization blocks.
- `feat(website)`: **SEO Localization Tags** — Injected precise `hreflang` headers and `og:locale:alternate` properties dynamically into the `<head>` through cross-locale routing maps.

### 🚀 Starlight → Regular Astro Migration
- `feat(website)`: **Complete Starlight Removal** — Migrated the entire website from the Starlight documentation framework to a standard Astro marketing site. Removed `@astrojs/starlight`.
- `feat(website)`: **Custom Layout System** — Created `BaseLayout.astro` and `FeaturePage.astro`.
- `feat(website)`: **Standalone Components** — Rewrote `Header.astro` and `Footer.astro` as fully standalone components.
- `feat(website)`: **Page Conversion (16 pages)** — Converted all pages from Starlight MDX to regular Astro pages.
- `feat(website)`: **Custom Design Token System** — Replaced all Starlight CSS variables with a custom system supporting dark/light mode via `[data-theme]` selectors.

### 🎨 UI Alignment & Asset Overhaul
- `fix(website)`: **Hero Image Style Consistency** — Regenerated 4 hero images (`hero_memory`, `hero_model_cascading`, `hero_rag`, `hero_scheduling`) that used mismatched color schemes (purple/blue, green, teal, orange/purple) and flat 2D illustration styles. Replaced with dark charcoal background, gold/amber accent, isometric 3D, glassmorphism renders matching the established site aesthetic. Both `.png` and `.webp` variants updated.
- `fix(website)`: **Newsletter Dark Mode Contrast** — Fixed HubSpot newsletter form labels and consent text being unreadable in dark mode. The form renders inside a cross-origin iframe, so parent-page CSS cannot reach it. Solved by injecting theme-aware CSS via HubSpot's `css` parameter at form creation time, and re-creating the form on theme toggle to apply updated styles.
- `fix(website)`: **Checkstyle Copy Reframe** — Removed all "reduced from 697 to 0" historical messaging from all 11 locale files. Replaced with present-state framing ("zero warnings, strict rules enforced on every build"). Marketing copy should describe what IS, not what WAS.
- `feat(website)`: **Graphical Logo Replacement** — Replaced text-based "EDDI" SVG logos (styled `<text>` elements) in the Header and Footer with the actual EDDI graphical logo. Created a white variant for dark mode and a dark (#0f172a) variant for light mode, both theme-switching automatically.
- `feat(website)`: **Color System Synchronization** — Replaced legacy cyan tokens with Tailwind `zinc` and `amber` core semantics to match the EDDI Manager React application.
- `feat(website)`: **Concrete 3D Illustration System** — Exchanged 14 generic legacy abstract images with precise, feature-locked 3D renderings showcasing architectural value props.
- `feat(website)`: **Premium Image Enclosure** — Established a unified glassmorphism wrapper around imagery to broadcast enterprise quality.
- `feat(website)`: **Copy-To-Clipboard Tooling** — Injected a vanilla JS script into the foundational layout to parse `<code>` nodes with a stylized copy action.

### 🔧 Code Review Fixes
- `feat(website)`: **Sitemap Generation** — Installed `@astrojs/sitemap`. Auto-generating `sitemap-index.xml` with locale references.
- `feat(website)`: **Shared CSS Design System** — Extracted hero and button utilities to `global.css`.
- `fix(website)`: **Font Loading Cleanup** — Removed unused Inter font and fixed broken CSS variables.
- `feat(website)`: **Light/Dark Mode Optimization** — Added comprehensive light mode support via CSS-level overrides.

### ⚙️ CI/CD & Deployment
- `feat(website)`: **Automated GitHub Pages Deployment** — Configured an official Astro GitHub Actions workflow (`deploy.yml`) to automatically build and deploy the website via GitHub Pages artifacts upon pushing to `main`.

### Decisions
- Completed the full migration from Starlight to a custom Astro site to achieve full layout control.
- Established a root-English i18n strategy to preserve inbound SEO link juice while offering expanded global reach.
- Adopted GitHub Actions native artifact deployment (`actions/deploy-pages`) over the legacy `gh-pages` branch push.

### Next Steps
- Final review prior to official launch.

