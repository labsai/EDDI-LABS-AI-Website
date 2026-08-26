/**
 * Evidence behind EDDI's performance and cost claims (English only).
 *
 * Editorial rule for this file: every row is a published, citable result.
 * Nothing here is an EDDI measurement, because EDDI's own harness has not
 * been run yet. When it is, its numbers go in a separate, clearly labelled
 * section rather than being mixed in with the literature.
 *
 * Citations use doi.org rather than any aggregator deep link, so they stay
 * resolvable and carry no tracking parameters.
 */

export interface EvidenceRow {
	/** Short study label, e.g. "FrugalGPT (2023)" */
	study: string;
	/** The headline result, stated as the authors state it. */
	result: string;
	/** What was measured, so a reader can judge comparability. */
	setting: string;
	/** Publication venue, so the reader can weigh the source. */
	venue: string;
	/** False for preprints. Stated explicitly rather than glossed over. */
	reviewed: boolean;
	doi: string;
}

export interface Caveat {
	title: string;
	body: string;
}

// ─── Model cascading ────────────────────────────────────────────────

export const CASCADE_EVIDENCE: EvidenceRow[] = [
	{
		study: 'FrugalGPT (2023)',
		result: 'Up to 98% cost reduction while matching the best single model',
		setting: 'LLM cascade across commercial APIs; the widely cited upper bound, and an upper bound rather than a typical case',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2305.05176',
	},
	{
		study: 'RouteNLP (2026)',
		result: '58% cost reduction in production; 40 to 85% across a six-task benchmark',
		setting: '8-week pilot at an enterprise customer-service division, ~5K queries/day, 91% response acceptance maintained',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2604.23577',
	},
	{
		study: 'Mixture-of-Thoughts cascade (2023)',
		result: 'Performance comparable to the stronger model at 40% of its cost',
		setting: 'Six reasoning benchmarks, GPT-3.5-turbo escalating to GPT-4',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2310.03094',
	},
	{
		study: 'SATER (2025)',
		result: 'Over 50% cost reduction, over 80% lower cascade latency',
		setting: 'Three small language models across six datasets of varying complexity',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2510.05164',
	},
	{
		study: 'Hybrid LLM (2024)',
		result: 'Up to 40% fewer calls to the large model with no drop in response quality',
		setting: 'Quality-aware router with a tunable quality target at test time',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2404.14618',
	},
	{
		study: 'UCCI (2026)',
		result: '31% cost reduction (95% CI: 27 to 35%) at micro-F1 = 0.91',
		setting: 'Production named-entity-recognition workload, 75,000 queries, 4B and 12B models on H100 GPUs, end-to-end routing on real outputs and measured latency',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2605.18796',
	},
	{
		study: 'TensorOpera Router (2024)',
		result: 'Up to 30% cost reduction, up to 40% better query efficiency',
		setting: 'Multi-model router across domain-specialist LLMs',
		venue: 'EMNLP 2024, Industry Track',
		reviewed: true,
		doi: '10.18653/v1/2024.emnlp-industry.34',
	},
];

export const CASCADE_DRIVERS: Caveat[] = [
	{
		title: 'How heterogeneous the workload is',
		body: 'Cascading only saves money when a large share of queries are genuinely easy. RouteNLP reports over 70% of queries at its enterprise partner were routine tasks well within a smaller model\'s capability. A workload where every query is hard has nothing to route away, and cascading will cost more than a single model because it pays for the first attempt twice.',
	},
	{
		title: 'How well calibrated the escalation signal is',
		body: 'A unified analysis of routing and cascading identifies quality estimators as the critical factor determining whether either strategy helps at all. UCCI makes the same point empirically: replacing an uncalibrated confidence score with a calibrated one cut expected calibration error from 0.12 to 0.03 and beat entropy thresholding and a FrugalGPT-style learned threshold at the same operating point.',
	},
	{
		title: 'How far apart the tiers are priced',
		body: 'Savings are bounded by the price gap between the cheap and expensive model. FrugalGPT observed fees differing by two orders of magnitude across commercial APIs, which is what makes 98% reachable at all. Two similarly priced models cannot produce a large saving no matter how good the router is.',
	},
];

// ─── JVM concurrency ────────────────────────────────────────────────

export const CONCURRENCY_EVIDENCE: EvidenceRow[] = [
	{
		study: 'Virtual threads in a Spring Boot portal (2026)',
		result: '75% reduction in memory overhead, improved responsiveness under load',
		setting: 'Data-intensive dashboard at peak loads of 2,000 concurrent users, versus platform threads',
		venue: 'IRJAEM',
		reviewed: true,
		doi: '10.47392/irjaem.2026.0073',
	},
	{
		study: 'Adaptive thread type selection (2023)',
		result: 'Significant throughput improvement on blocking-operation workloads, but overheads on CPU-bound ones',
		setting: 'JVM framework study; the authors build an adaptive switcher precisely because neither thread type wins everywhere',
		venue: 'IEEE APSEC 2023',
		reviewed: true,
		doi: '10.1109/apsec60848.2023.00080',
	},
	{
		study: 'Virtual threads in Spring Boot 3 (2024)',
		result: 'About 20% performance improvement on concurrent network requests',
		setting: '1,000 concurrent network requests versus traditional threads',
		venue: 'Vestnik NKU',
		reviewed: true,
		doi: '10.54596/2958-0048-2024-1-117-122',
	},
	{
		study: 'Virtual threads in Quarkus (2023)',
		result: 'Virtual threads did NOT match Quarkus-reactive in a resource-constrained container',
		setting: 'Typical container environment with scarce resources; attributed to a mismatch between Netty\'s assumptions and virtual threads',
		venue: 'ACM DEBS 2023',
		reviewed: true,
		doi: '10.1145/3583678.3596895',
	},
	{
		study: 'Memory constraints of virtual threads (2026)',
		result: 'Scalability pressure shifts from CPU toward memory as concurrency rises',
		setting: 'Fixed JVM heap sizes with concurrency increased until failure; heap configuration becomes the binding constraint',
		venue: 'IEEE MIPRO 2026',
		reviewed: true,
		doi: '10.1109/mipro70003.2026.11592045',
	},
	{
		study: 'Virtual vs. platform threads in parallel work (2025)',
		result: 'Virtual threads were slightly SLOWER than platform threads',
		setting: 'CPU-bound parallel task (prime counting), not an I/O-bound workload',
		venue: 'IEEE MIPRO 2025',
		reviewed: true,
		doi: '10.1109/mipro65660.2025.11131818',
	},
];

// ─── Retrieval quality ──────────────────────────────────────────────

export const RETRIEVAL_EVIDENCE: EvidenceRow[] = [
	{
		study: 'Cross-domain chunking evaluation (2026)',
		result: 'Content-aware chunking reached nDCG@5 ~0.459 versus <0.244 for fixed-length splitting',
		setting: '36 segmentation methods, six knowledge domains, five embedding models',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2603.06976',
	},
	{
		study: 'Chunk size for long-document retrieval (2025)',
		result: 'Smaller chunks (64 to 128 tokens) suit fact-based answers; larger (512 to 1024) suit contextual questions',
		setting: 'Fixed-size strategies across short-form and long-form datasets, multiple embedding models',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2505.21700',
	},
	{
		study: 'Adaptive chunking for clinical decision support (2025)',
		result: '87% accuracy versus 50% for a fixed token baseline',
		setting: 'Four otherwise identical RAG pipelines differing only in chunking strategy',
		venue: 'Bioengineering (MDPI)',
		reviewed: true,
		doi: '10.3390/bioengineering12111194',
	},
	{
		study: 'Upstream document quality (2026)',
		result: 'Under 20% of baseline chunks reached practical utility thresholds',
		setting: 'Clinical protocol manuals; the authors conclude document quality constrains retrieval, "challenging assumptions regarding plug-and-play RAG deployment"',
		venue: 'medRxiv',
		reviewed: false,
		doi: '10.64898/2026.01.01.26343326',
	},
	{
		study: 'Chunking on academic texts (2026)',
		result: 'Cluster-based semantic chunking did NOT outperform simpler strategies',
		setting: 'Long structured academic theses; a useful counterweight to the assumption that fancier chunking always wins',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2607.01852',
	},
];

// ─── The harness we have not run yet ────────────────────────────────

export interface HarnessItem {
	dimension: string;
	metric: string;
	why: string;
}

export const HARNESS: HarnessItem[] = [
	{
		dimension: 'Concurrent conversation throughput',
		metric: 'Sustained conversations per second at fixed p95 latency, virtual threads versus a platform-thread pool, same build',
		why: 'The claim is about I/O-bound concurrency, so the measurement has to hold the LLM provider constant and vary only the threading model.',
	},
	{
		dimension: 'Memory at concurrency',
		metric: 'Resident memory and heap pressure as concurrent conversations rise, to the point of failure',
		why: 'The literature says memory, not CPU, becomes the binding constraint. A throughput number without the memory curve hides where the wall is.',
	},
	{
		dimension: 'Model cascading cost',
		metric: 'Measured spend per 1,000 conversations, cascade versus single frontier model, at matched answer-acceptance rate',
		why: 'Cost claims are only meaningful at a fixed quality bar. Measuring spend without holding acceptance constant measures nothing.',
	},
	{
		dimension: 'Cascade escalation rate',
		metric: 'Share of turns escalated, and calibration error of the escalation signal',
		why: 'This is the number that predicts whether the saving transfers to another workload. It travels; a headline percentage does not.',
	},
	{
		dimension: 'Tool-call and RAG latency',
		metric: 'p50/p95/p99 added latency for httpCall tools and for retrieval, separated from model latency',
		why: 'Orchestration overhead is what EDDI is responsible for. Model latency is not, and mixing them flatters the platform.',
	},
	{
		dimension: 'Audit ledger overhead',
		metric: 'Throughput and latency delta with the HMAC-SHA256 audit ledger enabled versus disabled',
		why: 'Governance features have a cost. Publishing it is more useful than implying there is none.',
	},
];
