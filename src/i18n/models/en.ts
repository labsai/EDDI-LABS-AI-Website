/**
 * Model catalog copy, English (source of truth for the other locales).
 * Keys match src/data/models.ts. Facts come from vendor documentation checked on
 * CHECKED_ON; keep numbers here in sync with the data file.
 */
import type { TipKey } from '../../data/models';

export interface ModelCopy {
	summary: string;
	strengths: string[];
	bestFor: string[];
}

export interface HostCopy {
	name: string;
	summary: string;
	why: string[];
}

export interface ModelsCopy {
	models: Record<string, ModelCopy>;
	hosts: Record<string, HostCopy>;
	tips: Record<TipKey, string>;
}

const copy: ModelsCopy = {
	models: {
		'claude-fable-5-1': {
			summary: 'Anthropic\'s most capable generally available model, built for demanding reasoning and long-running agent work.',
			strengths: ['Agent sessions that run for hours', 'Multistep research', 'Document, spreadsheet and slide work', '1M-token context with 128K output'],
			bestFor: ['Long-horizon agents', 'Deep research', 'Analysis carried through to a finished document'],
		},
		'claude-opus-5-5': {
			summary: 'Anthropic\'s recommended default for demanding work: long-running agentic coding and knowledge work, with adaptive thinking always on.',
			strengths: ['Multihour autonomous coding agents', 'Large-scale refactoring', 'Vision-heavy workflows and computer use', '1M-token context with 128K output'],
			bestFor: ['Complex agentic coding', 'Enterprise knowledge work', 'Systems engineering'],
		},
		'claude-sonnet-5-5': {
			summary: 'Anthropic\'s balance of speed and intelligence for everyday coding, agent and enterprise work, with adaptive thinking on by default.',
			strengths: ['Fast responses', '1M-token context with 128K output', 'Thinking can be kept to between tool calls', 'Reliable tool use'],
			bestFor: ['Code generation', 'Data analysis', 'Content creation', 'Agents with tools'],
		},
		'claude-haiku-4-5': {
			summary: 'Anthropic\'s fastest and lowest-cost current model, with a 200K context window and optional extended thinking.',
			strengths: ['Lowest latency in the Claude lineup', 'Extended thinking with a token budget', 'Text and image input', 'Well suited to sub-agent tasks'],
			bestFor: ['Real-time applications', 'High-volume processing', 'The first tier of a cascade'],
		},
		'gpt-6': {
			summary: 'OpenAI\'s current reasoning family in three tiers: Astra for the hardest work, Sol for near-Astra results at lower cost, Luna for high volume.',
			strengths: ['1.05M-token context and 128K output on every tier', 'Function calling and structured outputs', 'Reasoning effort up to max', 'Text and image input'],
			bestFor: ['Astra: demanding reasoning and research', 'Sol: complex coding and professional work', 'Luna: focused, high-volume tasks'],
		},
		'gpt-5-6': {
			summary: 'OpenAI\'s previous generation, which introduced the Sol, Terra and Luna tiers: flagship, balanced and lowest cost.',
			strengths: ['1.05M-token context and 128K output', 'Reasoning effort from none to max', 'Text and image input'],
			bestFor: ['Sol: complex professional work', 'Terra: a balance of capability and cost', 'Luna: cost-sensitive volume'],
		},
		'gpt-oss': {
			summary: 'OpenAI\'s open-weight mixture-of-experts reasoning models under Apache 2.0: 120b fits one 80 GB GPU, 20b runs on 16 GB devices.',
			strengths: ['Apache 2.0 license', 'Function calling and structured outputs', 'Adjustable reasoning effort', 'Can be fine-tuned'],
			bestFor: ['Self-hosted and on-premises deployment', 'Fast inference on Groq', 'Agents with tool use'],
		},
		'gemini-3-8-flash': {
			summary: 'Google\'s current generally available Flash model, aimed at long-horizon engineering, autonomous agents and enterprise workflows at Flash speed and cost.',
			strengths: ['Text, image, video, audio and PDF input', 'Function calling and structured outputs', 'Thinking levels low, medium and high', '1M-token context'],
			bestFor: ['Autonomous agents', 'Enterprise workflows', 'Multimodal documents'],
		},
		'gemini-3-1-pro': {
			summary: 'Google\'s current Pro model, in preview on the Gemini API, tuned for complex reasoning, software engineering and precise multi-step tool use.',
			strengths: ['Text, image, video, audio and PDF input', 'Efficient thinking', 'Reliable multi-step tool execution', '1M-token context'],
			bestFor: ['Complex problem-solving', 'Agentic coding', 'Multimodal understanding'],
		},
		'gemini-3-5-flash-lite': {
			summary: 'Google\'s lowest-cost, lowest-latency 3.5 model, built for high-throughput sub-agent work, document parsing and simple extraction.',
			strengths: ['Low latency and cost', 'Text, image, video, audio and PDF input', 'Function calling and thinking', '1M-token context'],
			bestFor: ['High-volume sub-agents', 'Document parsing and extraction', 'Translation'],
		},
		gemma: {
			summary: 'Google\'s open-weight family, from edge-sized models to a 31B dense and a 26B mixture-of-experts model in Gemma 4.',
			strengths: ['Open weights, Gemma 4 under Apache 2.0', 'Function calling for agents', 'Image input on every size', 'Runs on modest hardware'],
			bestFor: ['On-device and edge deployment', 'Self-hosted agents', 'Question answering and summaries'],
		},
		'grok-4-7': {
			summary: 'xAI\'s frontier model for coding, agentic tasks and knowledge work, with text and image input and selectable reasoning effort.',
			strengths: ['500K-token context', 'Function calling and structured outputs', 'Reasoning effort low to xhigh', 'US data-residency endpoint'],
			bestFor: ['Software engineering', 'Long agentic tasks', 'Professional knowledge work'],
		},
		'deepseek-flash': {
			summary: 'DeepSeek\'s current Flash model with native image understanding, a 1M-token context and thinking on by default; the weights are MIT-licensed.',
			strengths: ['1M-token context, up to 384K output', 'Tool calls and JSON output', 'Image and text input', 'Open weights under MIT'],
			bestFor: ['Cost-efficient agents', 'Coding agents', 'Long, input-heavy workloads'],
		},
		'deepseek-v4-pro': {
			summary: 'DeepSeek\'s large V4 Pro model: text-only through the API, with a 1M-token context, tool calls and selectable thinking effort; the weights are MIT-licensed.',
			strengths: ['1M-token context, up to 384K output', 'Thinking effort low, high or max', 'Tool calls and JSON output', 'Open weights under MIT'],
			bestFor: ['Code agents', 'Tool use and task automation'],
		},
		'deepseek-r1-distill': {
			summary: 'A small open reasoning model: Qwen3-8B trained on DeepSeek-R1\'s chain of thought, for local use.',
			strengths: ['Step-by-step reasoning', 'Strong on maths for its size', 'MIT-licensed weights'],
			bestFor: ['Local reasoning tasks', 'Maths and logic', 'Offline experiments'],
		},
		'kimi-k3': {
			summary: 'Moonshot AI\'s flagship with a 1M-token context, native image and video understanding and always-on thinking; the weights are published.',
			strengths: ['1M-token context', 'Text, image and video input', 'Tool calling', 'Published weights'],
			bestFor: ['Long-horizon coding', 'Knowledge work', 'Deep reasoning and agent workflows'],
		},
		'kimi-k2-7-code': {
			summary: 'Moonshot AI\'s dedicated coding model with a 256K context, always-on thinking, tool calling and a separate high-speed variant.',
			strengths: ['256K-token context', 'Text, image and video input', 'Multi-step tool calling', 'High-speed variant at about 180 tokens a second'],
			bestFor: ['Long coding tasks', 'Agentic coding', 'Maths and reasoning'],
		},
		'qwen-3-8': {
			summary: 'Alibaba\'s Qwen 3.8 line: Max is the flagship, and Max and Flash both offer a 1M-token context, image and video input and hybrid thinking.',
			strengths: ['1M-token context, 131K output', 'Text, image and video input', 'Function calling and structured outputs', 'Regions include Frankfurt and Virginia'],
			bestFor: ['Long-horizon coding', 'Professional work in law, finance and design', 'Multimodal agents'],
		},
		'qwen-3-7-plus': {
			summary: 'Qwen 3.7 Plus and Flash offer a 1M-token context, image and video input, hybrid thinking and function calling for multimodal agent work.',
			strengths: ['1M-token context, 131K output', 'Text, image and video input', 'Function calling', 'Screen and GUI understanding (Plus)'],
			bestFor: ['Multimodal agents', 'Visual code generation', 'Search agents (Flash)'],
		},
		'glm-5-3': {
			summary: 'Z.ai\'s flagship for software engineering and agent work, with a 1M-token context, up to 128K output and published weights; the Flash variants add image and video input.',
			strengths: ['1M-token context, 128K output', 'Function calling with tool streaming', 'Thinking effort low, high or max', 'Published weights'],
			bestFor: ['Coding agents', 'Long agentic tasks', 'Code security review'],
		},
		'minimax-m3': {
			summary: 'MiniMax\'s natively multimodal coding and agent model, with up to 1M tokens of context and thinking interleaved between tool calls; the weights are published.',
			strengths: ['Up to 1M-token context (512K guaranteed)', 'Thinking between tool calls', 'Text, image and video input', 'Published weights'],
			bestFor: ['Coding assistants', 'Long agent tasks and workflow automation', 'Long-video analysis'],
		},
		'mistral-large': {
			summary: 'Mistral\'s open-weight mixture-of-experts flagship (41B active, 675B total parameters) with image understanding, under Apache 2.0.',
			strengths: ['Apache 2.0 license', 'Image understanding', 'More than 40 languages', 'Function calling and structured outputs'],
			bestFor: ['Multilingual assistants', 'Document analysis', 'Tool-use workflows'],
		},
		'mistral-medium': {
			summary: 'A dense 128B multimodal model that combines instruction following, reasoning and coding, with reasoning effort set per request.',
			strengths: ['Reasoning effort per request', 'Built for agents and coding', 'Function calling and JSON output', 'Self-hostable on four GPUs'],
			bestFor: ['Agentic workflows', 'Coding agents', 'Long documents'],
		},
		'mistral-small': {
			summary: 'An open-weight mixture-of-experts model (about 6B active parameters) that combines instruct, reasoning and coding, with image input.',
			strengths: ['Instruct, reasoning and coding in one model', 'Reasoning that can be switched on', 'Image input', 'Apache 2.0 license'],
			bestFor: ['Cost-sensitive agents', 'General chat with optional reasoning', 'Image understanding'],
		},
		ministral: {
			summary: 'Small open-weight models in three sizes, each with base, instruct and reasoning variants and image understanding, for local and edge use.',
			strengths: ['Built for local deployment', 'Reasoning variants in every size', 'Image understanding', 'Apache 2.0 license'],
			bestFor: ['Edge and on-premises deployment', 'Low-cost, high-volume tasks', 'Local agents'],
		},
		codestral: {
			summary: 'Mistral\'s coding model for low-latency, high-frequency tasks such as fill-in-the-middle and code generation.',
			strengths: ['Fill-in-the-middle', 'Low-latency completion', 'Function calling', 'Structured outputs'],
			bestFor: ['Code completion', 'Code generation'],
		},
		'llama-4': {
			summary: 'Meta\'s natively multimodal mixture-of-experts models with 17B active parameters: Scout (109B total) and Maverick (400B total).',
			strengths: ['Text and image input', 'Mixture-of-experts efficiency', '12 languages', 'Long context (1M for Maverick on Bedrock)'],
			bestFor: ['Multimodal assistants', 'Visual reasoning', 'Long documents'],
		},
		'llama-3-3-70b': {
			summary: 'Meta\'s 70B text model for multilingual dialogue in eight languages, with tool use.',
			strengths: ['Eight languages', 'Tool use', '128K context'],
			bestFor: ['Self-hosted general chat', 'Multilingual assistants', 'Synthetic data generation'],
		},
		'llama-3-2-1b': {
			summary: 'A 1.2B-parameter multilingual model for constrained and on-device environments, small enough to run inside the EDDI JVM.',
			strengths: ['Runs on a CPU', '128K context', 'Eight languages'],
			bestFor: ['In-process, offline inference', 'Query and prompt rewriting', 'Short summaries'],
		},
		'amazon-nova': {
			summary: 'Amazon\'s multimodal models on Bedrock that accept text, image and video: Pro is the balanced tier, Lite the low-cost one.',
			strengths: ['Text, image and video input', '300K-token context', 'Tool use', 'Prompt caching'],
			bestFor: ['Document and visual Q&A', 'Video understanding', 'Agents that stay inside AWS'],
		},
		'cohere-command-a': {
			summary: 'Cohere\'s 111B enterprise model focused on tool use, retrieval and 23 languages; Oracle also offers reasoning and vision variants.',
			strengths: ['Multistep tool use', 'Retrieval-augmented generation', '23 languages', '256K-token context'],
			bestFor: ['Enterprise RAG', 'Multilingual agents', 'Deployments on Oracle Cloud'],
		},
		'phi-4-mini': {
			summary: 'Microsoft\'s 3.8B open model for memory-constrained, latency-sensitive work and maths and logic reasoning.',
			strengths: ['Runs in constrained environments', 'Maths and logic', 'Function calling', 'MIT license'],
			bestFor: ['Local and edge inference', 'Latency-sensitive apps', 'Light tool calling'],
		},
	},
	hosts: {
		bedrock: { name: 'Amazon Bedrock', summary: 'Managed AWS access to models from Anthropic, Meta, Amazon, OpenAI, Mistral and others.', why: ['Providers see no customer prompts or completions', 'Private networking through VPC and PrivateLink', 'In-region and cross-region inference for data residency'] },
		vertex: { name: 'Google Vertex AI', summary: 'Google Cloud\'s AI platform, now also called Gemini Enterprise Agent Platform, serving Gemini and Model Garden models.', why: ['Regional endpoints keep processing in one jurisdiction', 'VPC Service Controls for network isolation', 'Authentication through Google Cloud credentials'] },
		azure: { name: 'Azure OpenAI', summary: 'OpenAI models hosted in your Azure subscription, now part of Microsoft Foundry, called by deployment name.', why: ['Data Zone deployments keep processing in the EU, US or APAC', 'Private endpoints on the Azure backbone', 'Provisioned throughput for reserved capacity'] },
		oracle: { name: 'Oracle OCI Generative AI', summary: 'Managed Oracle Cloud service for Cohere, Meta Llama and other models, on demand or on dedicated clusters.', why: ['Dedicated AI clusters', 'Private endpoints and data isolation', 'Governed by OCI IAM policies'] },
		groq: { name: 'Groq', summary: 'An inference cloud that runs open models on Groq\'s own LPU chips, through an OpenAI-compatible API.', why: ['Very low latency', 'Open models such as gpt-oss and Qwen', 'One key, no infrastructure'] },
		openrouter: { name: 'OpenRouter', summary: 'One API to hundreds of models from many providers, with an auto router that picks a model per request.', why: ['One key for many vendors', 'Automatic fallback between providers', 'openrouter/auto chooses a model for each task'] },
		ollama: { name: 'Ollama', summary: 'Runs open models on your own hardware behind a local API, on the same Docker network as EDDI if you like.', why: ['No cloud connection needed', 'Data never leaves your machines', 'One command to pull a model'] },
		huggingface: { name: 'Hugging Face', summary: 'Hosted inference for open models by repository id, routed to partner providers under one token.', why: ['Open models by repository id', 'One token across providers', 'No infrastructure to run'] },
		jlama: { name: 'Jlama', summary: 'A pure-Java inference engine that runs small models inside the EDDI JVM, with no model server at all.', why: ['Nothing else to deploy', 'Quantized models for a small footprint', 'Works air-gapped once the weights are cached'] },
	},
	tips: {
		anthropicNoTemperature: 'Leave <code>temperature</code> unset. Current Claude models reject a non-default temperature, and EDDI\'s setup tools already leave it out.',
		openaiResponsesTools: 'OpenAI documents the Responses API for tool calling on Astra and 6.1 Sol, while EDDI\'s <code>openai</code> type uses Chat Completions. Test tool-using agents on these models before production.',
		geminiSignature: 'Gemini 3 needs its thought signature echoed back during tool calls. EDDI does this by default (<code>returnThinking</code> and <code>sendThinking</code> are on for the <code>gemini</code> type); leave them on.',
		geminiVertexTools: 'For Gemini 3 with tools use <code>type: gemini</code>, not <code>gemini-vertex</code>: the Vertex path cannot carry the thought signature. <code>gemini-vertex</code> is fine without tools.',
		xaiUsRegion: 'Set <code>"region": "us"</code> for xAI\'s US data-residency endpoint. It serves grok-4.7 and grok-4.6 only.',
		thinkingEcho: 'This provider requires the model\'s reasoning to be sent back during tool loops. EDDI\'s preset does it for you: leave <code>returnThinking</code> and <code>sendThinking</code> at their defaults.',
		kimiTemperature: 'Moonshot fixes the temperature on kimi-k2.7-code and kimi-k2.6, so do not set <code>temperature</code> there.',
		qwenRegions: 'Pick a region with <code>"region": "intl"</code>, <code>"cn"</code> or <code>"us"</code>. For a workspace-specific Alibaba host, set <code>baseUrl</code> instead.',
		minimaxNoJson: 'EDDI never sends a JSON response format to MiniMax. When you need JSON, set <code>convertToObject</code> and describe the shape in the prompt.',
		groqPreview: 'Groq marks some models, including qwen3.8-27b, as Preview: for evaluation, and possibly withdrawn at short notice.',
		bedrockGeo: 'Some Bedrock models, including Llama 4 Maverick, are only reachable through a cross-region inference profile such as <code>us.meta.llama4-maverick-17b-instruct-v1:0</code>.',
		ollamaThink: 'Reasoning models think before they answer, which can look like a hang in a streaming chat. Set <code>"think": "false"</code> for immediate answers, and give the task a generous <code>timeout</code>.',
		jlamaCache: 'Jlama runs inside the EDDI JVM. Point <code>modelCachePath</code> at a mounted volume so the weights survive restarts, and size the pod for the model plus EDDI\'s heap.',
		localAirGap: 'Runs fully offline once the model is downloaded, so it suits air-gapped deployments.',
		cascadeTier: 'A good first tier in a <a href="/features/model-cascading/">model cascade</a>: fast and inexpensive, escalating to a larger model only when confidence is low.',
		cascadeTop: 'A strong final tier for a <a href="/features/model-cascading/">model cascade</a>, reached only by the requests a cheaper model is unsure about.',
		azureDeployment: 'On Azure OpenAI, <code>deploymentName</code> is the name you gave the deployment in your Azure resource, not the model name.',
	},
};

export default copy;
