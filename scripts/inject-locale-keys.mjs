/**
 * Inject missing English-fallback keys into all non-English locale files.
 * Run with: node scripts/inject-locale-keys.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const LOCALES_DIR = join(process.cwd(), 'src', 'i18n', 'locales');
const NON_EN = ['ar', 'de', 'es', 'fr', 'hi', 'ja', 'ko', 'pt', 'th', 'zh'];

// ── Keys to inject ──────────────────────────────────────────────

const NAV_KEYS = `
		memory: 'Memory & Context',
		memoryDesc: 'Persistent memory & dream consolidation',
		rag: 'RAG',
		ragDesc: '7 embedding providers, 5 vector stores',
		modelCascading: 'Model Cascading',
		modelCascadingDesc: 'Cost-optimized multi-model routing',
		scheduling: 'Scheduling',
		schedulingDesc: 'Heartbeats, cron & dream cycles',`;

const FOOTER_KEYS = `
		memoryLink: 'Memory & Context',
		ragLink: 'RAG',
		modelCascadingLink: 'Model Cascading',
		schedulingLink: 'Scheduling',`;

const FEATURES_OVERVIEW_KEYS = `
		aiCapTitle: 'AI Capabilities',
		aiCapDesc: 'Advanced AI features that make EDDI agents <strong>smarter, faster, and more cost-efficient</strong>.',
		memoryCardTitle: '🧠 Memory & Context',
		memoryCardDesc: 'Persistent memory, dream consolidation, rolling summaries, and token-aware windowing. <strong>Agents that remember</strong>.',
		ragCardTitle: '📚 RAG',
		ragCardDesc: '7 embedding providers, 5 vector stores, httpCall RAG. <strong>Enterprise knowledge retrieval</strong> out of the box.',
		cascadingCardTitle: '📈 Model Cascading',
		cascadingCardDesc: 'Cost-optimized multi-model routing with confidence strategies. <strong>Reduce LLM costs 60-80%</strong>.',
		schedulingCardTitle: '⏰ Scheduling & Heartbeats',
		schedulingCardDesc: 'Cron triggers, heartbeat wake-ups, dream cycles. <strong>Proactive agents</strong> that act on their own.',`;

const MULTI_AGENT_KEYS = `
		heading3: 'Group Conversations & Advanced Orchestration',
		para2: 'EDDI supports <strong>multi-agent group conversations</strong> with 5 built-in discussion styles, nested group structures, and a meta-agent that creates other agents through conversation:',
		items2: [
			'<strong>5 Discussion Styles</strong> — Round Table, Peer Review, Devil\\'s Advocate, Delphi, and Debate',
			'<strong>Nested Groups</strong> — Compose groups of groups for tournament brackets, red-team vs blue-team, and panel reviews',
			'<strong>Agent Father</strong> — A meta-agent that creates other agents through conversation (ships out of the box)',
			'<strong>A2A Protocol</strong> — Full Agent-to-Agent protocol implementation with Agent Cards and cross-platform skill discovery',
			'<strong>Capability Matching</strong> — Discover and route to agents by skill, confidence score, and custom attributes',
		],`;

const NEW_PAGES = `
		memory: {
			title: 'Memory & Context Management',
			description: 'Persistent user memory, dream consolidation, rolling summaries, and token-aware context windowing — agents that remember, learn, and forget intelligently.',
			heading1: 'Agents That Remember',
			para1: 'EDDI provides a comprehensive <strong>persistent memory system</strong> that enables agents to remember facts, preferences, and context across conversations. Memory entries are structured key-value pairs with visibility scoping — giving agents the right context at the right time.',
			heading2: 'Memory Capabilities',
			items: [
				'<strong>Persistent User Memory</strong> — Key-value entries with <code>global</code>, <code>agent</code>, and <code>group</code> visibility scoping across conversations',
				'<strong>LLM Memory Tools</strong> — Built-in tools agents can call to read, write, and search their own persistent memory',
				'<strong>Dream Consolidation</strong> — Background memory maintenance: stale entry pruning, contradiction detection, and fact summarization',
				'<strong>Token-Aware Windowing</strong> — Intelligent context packing with model-specific tokenizer support and anchored opening steps',
				'<strong>Rolling Summary</strong> — Incremental LLM-powered summarization of older turns with a Conversation Recall Tool for drill-back',
				'<strong>Property Extraction</strong> — Config-driven slot-filling with <code>longTerm</code> / <code>conversation</code> / <code>step</code> scoping',
				'<strong>Conversation State</strong> — Full history with undo/redo support',
			],
			heading3: 'How Dream Consolidation Works',
			para2: "Inspired by Anthropic's research on background memory consolidation, EDDI's Dream Cycles run on a <strong>configurable schedule</strong> to maintain memory quality. Stale entries are pruned, contradictions are detected and resolved, and facts are summarized — all with cost ceilings per run.",
		},
		rag: {
			title: 'RAG — Retrieval-Augmented Generation',
			description: '7 embedding providers, 5 vector stores, httpCall RAG, and async document ingestion — enterprise-grade knowledge retrieval for AI agents.',
			heading1: 'Enterprise Knowledge Retrieval',
			para1: 'EDDI provides a complete <strong>Retrieval-Augmented Generation</strong> pipeline with native support for multiple embedding providers, vector stores, and a zero-infrastructure RAG option via HTTP calls.',
			heading2: 'RAG Capabilities',
			items: [
				'<strong>7 Embedding Providers</strong> — OpenAI, Ollama, Azure OpenAI, Mistral, Amazon Bedrock, Cohere, Google Vertex AI',
				'<strong>5 Vector Stores</strong> — pgvector, In-Memory, MongoDB Atlas, Elasticsearch, Qdrant',
				'<strong>httpCall RAG</strong> — Zero-infrastructure RAG via any search API (BM25, Elasticsearch, custom endpoints)',
				'<strong>REST Ingestion API</strong> — Async document ingestion with status tracking and batch processing',
				'<strong>Hybrid Search</strong> — Combine dense vector retrieval with sparse keyword matching for optimal recall',
			],
			heading3: 'Flexible Deployment',
			para2: 'RAG is fully configuration-driven. Choose your embedding provider and vector store via JSON configuration — no code changes needed. The <code>httpCall RAG</code> option lets you use <strong>any existing search infrastructure</strong> (Elasticsearch, Solr, custom APIs) without deploying a separate vector database.',
		},
		modelCascading: {
			title: 'Smart Model Cascading',
			description: 'Cost-optimized multi-model routing — try cheap models first, escalate on low confidence. Per-conversation budgets and tenant cost ceilings.',
			heading1: 'Intelligent Cost Optimization',
			para1: "EDDI's Model Cascading system enables <strong>cost-aware multi-model routing</strong>. Start with fast, inexpensive models and automatically escalate to more powerful (and expensive) models only when confidence is low — reducing AI costs without sacrificing quality.",
			heading2: 'Cascading Features',
			items: [
				'<strong>Cost Optimization</strong> — Try cheap/fast models first, escalate to powerful models only when confidence is low',
				'<strong>4 Confidence Strategies</strong> — Structured output, heuristic, judge model, or none — choose the evaluation method that fits your use case',
				'<strong>Per-Conversation Budgets</strong> — Automatic cost tracking with budget caps and conversation eviction when exceeded',
				'<strong>Tenant Cost Ceilings</strong> — Monthly cost budgets per tenant with automatic enforcement in multi-tenant deployments',
				'<strong>12 LLM Providers</strong> — OpenAI, Anthropic, Google Gemini, Mistral, Azure OpenAI, Amazon Bedrock, Oracle GenAI, Vertex AI, Ollama, Jlama, Hugging Face, and any OpenAI-compatible endpoint',
			],
			heading3: 'How It Works',
			para2: 'Configure a cascade chain of models ordered by cost. For each user message, EDDI tries the cheapest model first and evaluates confidence. If confidence falls below the threshold, it automatically escalates to the next model in the chain. This approach can <strong>reduce LLM costs by 60-80%</strong> for typical workloads where most queries are simple enough for smaller models.',
		},
		scheduling: {
			title: 'Scheduling & Heartbeats',
			description: 'Cron-triggered agent execution, heartbeat wake-ups for proactive behavior, dream cycles for memory maintenance, and complete fire logging.',
			heading1: 'Proactive Agent Behavior',
			para1: "EDDI agents don't just respond to messages — they can <strong>proactively execute on schedules</strong>. Heartbeat triggers wake agents at configurable intervals, cron expressions provide precise timing, and dream cycles maintain memory quality in the background.",
			heading2: 'Scheduling Features',
			items: [
				'<strong>Heartbeat Triggers</strong> — Periodic agent wake-ups at configurable intervals for proactive behavior (e.g., daily check-ins, periodic summaries)',
				'<strong>Cron Scheduling</strong> — Standard cron expressions for precise timed agent execution',
				'<strong>Conversation Strategies</strong> — <code>persistent</code> (reuse same conversation across fires) or <code>new</code> (fresh context each time)',
				'<strong>Fire Logging</strong> — Complete execution history with status, duration, cost tracking, and retry logic',
				'<strong>Dream Cycles</strong> — Scheduled background memory consolidation with cost ceilings per run',
			],
			heading3: 'Use Cases',
			para2: 'Scheduled agents enable powerful proactive workflows: <strong>daily report summaries</strong>, periodic data quality checks, automated customer follow-ups, memory maintenance via dream consolidation, and time-triggered escalation workflows. Each scheduled execution is fully logged with cost tracking and retry support.',
		},`;

for (const locale of NON_EN) {
	const file = join(LOCALES_DIR, `${locale}.ts`);
	let content = readFileSync(file, 'utf-8');

	// 1. Inject nav keys (before viewAllFeatures)
	if (!content.includes("memory: 'Memory")) {
		content = content.replace(
			/(\t\tviewAllFeatures:)/,
			NAV_KEYS + '\n$1'
		);
	}

	// 2. Inject footer keys (after multiAgent in footer — look for "// Develop" or "gettingStarted")
	if (!content.includes("memoryLink:")) {
		content = content.replace(
			/(\t\t\/\/ Develop links|\t\tgettingStarted:)/,
			FOOTER_KEYS + '\n$1'
		);
	}

	// 3. Inject featuresOverview card keys (before engTitle)
	if (!content.includes("aiCapTitle:")) {
		content = content.replace(
			/(\t\t(?:\/\/ Engineering section|engTitle:))/,
			FEATURES_OVERVIEW_KEYS + '\n$1'
		);
	}

	// 4. Inject multi-agent heading3/para2/items2 (before the closing of multiAgent)
	if (!content.includes("items2:") || !content.match(/multiAgent[\s\S]*?items2:/)) {
		// Find the closing of multiAgent items array and its closing brace
		content = content.replace(
			/(multiAgent:[\s\S]*?\],\s*?\n)(\t\t\},\s*?\n\t\tobservability)/,
			'$1' + MULTI_AGENT_KEYS + '\n\t\t},\n\t\tobservability'
		);
	}

	// 5. Inject new page definitions (before "// Enterprise pages" or whyEddi)
	if (!content.includes("pages.memory") && !content.includes("memory: {\n\t\t\ttitle: 'Memory")) {
		// Find where to inject — before the enterprise pages comment or whyEddi
		const marker = content.includes('// Enterprise pages')
			? /(\t\t\/\/ Enterprise pages)/
			: /(\t\twhyEddi: \{)/;

		// Check if we already have the new pages marker
		if (!content.includes("// ─── New Feature Pages")) {
			content = content.replace(
				marker,
				'// ─── New Feature Pages ────────────────────────────────────\n' + NEW_PAGES + '\n\t\t$1'
			);
		}
	}

	writeFileSync(file, content, 'utf-8');
	console.log(`✓ Updated: ${locale}.ts`);
}

console.log('\nDone! All locale files updated with English fallback keys.');
