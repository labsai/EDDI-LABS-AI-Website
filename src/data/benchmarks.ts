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

// ─── Governance: prompt injection and where rules are enforced ──────

export const GOVERNANCE_EVIDENCE: EvidenceRow[] = [
	{
		study: 'NetInjectBench (2026)',
		result: '0 of 240 injected attacks led to an unsafe action behind a policy gate at the tool call, against 82.5% with no defence and 10 to 26% with prompt-level defences',
		setting: '130 network-operations scenarios on three 7 to 8B open models. A static allowlist reached 5%, but blocked every legitimate change',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2607.10490',
	},
	{
		study: 'Indirect prompt injection (2023)',
		result: 'Retrieved content becomes instructions: data theft, worming, and control over which APIs an application calls',
		setting: 'Demonstrated against real systems, including Bing Chat and code-completion engines',
		venue: 'ACM AISec 2023',
		reviewed: true,
		doi: '10.1145/3605764.3623985',
	},
	{
		study: 'HouYi (2023)',
		result: '31 of 36 commercial LLM-integrated applications were vulnerable to prompt injection',
		setting: 'Black-box attack against deployed applications; 10 vendors confirmed the findings',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2306.05499',
	},
	{
		study: 'Adaptive attacks on agent defences (2025)',
		result: 'All eight evaluated defences were bypassed, with attack success above 50%',
		setting: 'Indirect prompt injection defences for tool-using agents, tested against attacks adapted to each defence',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2503.00061',
	},
	{
		study: 'CaMeL (2025)',
		result: '77% of tasks solved with provable security, against 84% undefended',
		setting: 'AgentDojo. Control and data flow come from the trusted request, so untrusted data cannot change what the program does',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2503.18813',
	},
];

/** The unsafe-action rates from NetInjectBench, for the chart. */
export const INJECTION_CHART = [
	{ label: 'No defence', value: 82.5 },
	{ label: 'Safety prompt', value: 25.63 },
	{ label: 'Self-reminder', value: 21.67 },
	{ label: 'Spotlighting', value: 18.33 },
	{ label: 'Second LLM as judge', value: 10.0 },
	{ label: 'Static allowlist*', value: 5.0 },
	{ label: 'Policy gate at the tool call', value: 0 },
];

// ─── Human oversight ─────────────────────────────────────────────────

export const OVERSIGHT_EVIDENCE: EvidenceRow[] = [
	{
		study: 'Human decision gates (2026)',
		result: 'Critical failures fell from 72% to 16% of runs (Fisher\'s exact test, p < 0.001)',
		setting: '280 AI-assisted research runs with the same model and prompts; the gated version adds deterministic computation and three binding human decisions',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2606.12848',
	},
	{
		study: 'Oversight has a capacity (2026)',
		result: 'Realized safety is an inverted U in the escalation rate: past a point, more human review makes the system less safe',
		setting: '125 hand-labelled agent actions with a fatiguing reviewer; reviewers agreed only moderately on what is risky (Fleiss\' kappa 0.52)',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2606.08919',
	},
	{
		study: 'Dynamic intervention (2026)',
		result: 'Task success statistically equivalent to full oversight, with a person reviewing 14.5% of steps and 89% lower latency',
		setting: '5,000 synthetic enterprise automation tasks; oversight allocated by a confidence score rather than at fixed checkpoints',
		venue: 'Discover Artificial Intelligence',
		reviewed: true,
		doi: '10.1007/s44163-026-01373-2',
	},
	{
		study: 'Effective human oversight (2024)',
		result: 'Oversight works only when the overseer has causal power, access to the relevant facts, self-control and fitting intentions',
		setting: 'Interdisciplinary analysis, tested against Article 14 of the EU AI Act',
		venue: 'ACM FAccT 2024',
		reviewed: true,
		doi: '10.1145/3630106.3659051',
	},
];

// ─── Multi-agent deliberation ────────────────────────────────────────

export const DELIBERATION_EVIDENCE: EvidenceRow[] = [
	{
		study: 'Multiagent debate (2023)',
		result: 'Debate improved mathematical and strategic reasoning and reduced hallucinated facts',
		setting: 'Several instances of the same black-box model proposing and critiquing answers over rounds',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2305.14325',
	},
	{
		study: 'Debate or vote (2025)',
		result: 'Majority voting alone accounts for most of the gain usually attributed to debate',
		setting: 'Seven NLP benchmarks, with a proof that debate by itself does not raise expected correctness',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2508.17536',
	},
	{
		study: 'If debate is the answer, what is the question? (2025)',
		result: 'Debate methods often failed to beat single-agent baselines, but mixing different models consistently helped',
		setting: 'Five debate methods, nine benchmarks, four models',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2502.08788',
	},
	{
		study: 'Heterogeneous debate (2025)',
		result: '4 to 6 points more accurate than standard debate, and over 30% fewer factual errors',
		setting: 'Agents with distinct roles, dynamic routing and a learned consensus, across six benchmarks',
		venue: 'J. King Saud Univ. Computer and Information Sciences',
		reviewed: true,
		doi: '10.1007/s44443-025-00353-3',
	},
	{
		study: 'Persuasion as an attack (2026)',
		result: 'One persuasive adversarial agent cut group accuracy by 10 to 40% and raised agreement on wrong answers by over 30%',
		setting: 'LLM-to-LLM debate; adding agents or rounds did not reliably help',
		venue: 'Scientific Reports',
		reviewed: true,
		doi: '10.1038/s41598-026-42705-7',
	},
];

// ─── Conversation memory ─────────────────────────────────────────────

export const MEMORY_EVIDENCE: EvidenceRow[] = [
	{
		study: 'LongMemEval (2024)',
		result: 'Commercial assistants and long-context models lost about 30% accuracy recalling information across sustained interactions',
		setting: '500 questions embedded in long user-assistant histories',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2410.10813',
	},
	{
		study: 'Recursive summarization (2023)',
		result: 'Recursively summarized memory produced more consistent responses in long conversations',
		setting: 'Open and closed models; complements long-context and retrieval-based approaches',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2308.15022',
	},
	{
		study: 'Mem0 (2025)',
		result: '91% lower p95 latency and over 90% lower token cost than sending the full conversation',
		setting: 'LOCOMO benchmark. The authors sell a memory product, so weigh the comparison accordingly',
		venue: 'arXiv',
		reviewed: false,
		doi: '10.48550/arxiv.2504.19413',
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
