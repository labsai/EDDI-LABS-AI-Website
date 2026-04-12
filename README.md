<p align="center">
  <a href="https://eddi.labs.ai">
    <img src="src/assets/eddi-logo.svg" alt="EDDI Logo" width="120" />
  </a>
</p>

<h1 align="center">EDDI — The Enterprise AI Orchestrator</h1>

<p align="center">
  Build, deploy, and manage AI agents — without writing code.<br/>
  Configuration-driven · Self-hosted · Compliance-ready
</p>

<p align="center">
  <a href="https://eddi.labs.ai"><img src="https://img.shields.io/badge/🌐_Website-eddi.labs.ai-0f172a?style=for-the-badge" alt="Website" /></a>&nbsp;
  <a href="https://github.com/labsai/EDDI"><img src="https://img.shields.io/badge/⚙️_Source_Code-GitHub-181717?style=for-the-badge&logo=github" alt="GitHub" /></a>&nbsp;
  <a href="https://docs.labs.ai"><img src="https://img.shields.io/badge/📖_Docs-docs.labs.ai-2563eb?style=for-the-badge" alt="Docs" /></a>&nbsp;
  <a href="https://hub.docker.com/r/labsai/eddi"><img src="https://img.shields.io/docker/pulls/labsai/eddi?style=for-the-badge&color=f59e0b&labelColor=27272a&label=🐳%20Docker%20Pulls" alt="Docker Pulls" /></a>
</p>

---

## 🤔 What is EDDI?

**EDDI** is an open-source, enterprise-grade AI orchestration platform. Instead of writing boilerplate code for REST controllers, authentication, state management, and audit logging — you deploy EDDI and get all of it out of the box.

Agent logic is **JSON configuration**, not compiled code. Prompt engineers iterate instantly via the visual management UI or REST API — no redeployment needed.

> 🏗️ EDDI is a **deployable middleware platform**, not a library. Think of it as the missing layer between raw AI models and production applications.

---

## ✨ Key Capabilities

| | Capability | What It Does |
|---|---|---|
| 🖥️ | **EDDI Manager** | Production-ready React UI for building, deploying, and monitoring agents visually — with 11-language i18n |
| ⚙️ | **Config-as-Code** | Agent behavior is JSON configuration — change prompts, tools, and pipelines without redeployment |
| 🔌 | **42 MCP Tools** | Full AI-native control via the Model Context Protocol — works with Claude Desktop, Cursor, and custom clients |
| 🤖 | **Multi-Agent** | Intent-based agent discovery, managed conversations, agent triggers, group discussions, and A/B routing |
| 🧠 | **Memory & Context** | Persistent user memory, dream consolidation, rolling summaries, and token-aware context windowing |
| 📚 | **RAG** | 7 embedding providers, 5 vector stores, and zero-infrastructure httpCall RAG |
| 📈 | **Model Cascading** | Cost-optimized multi-model routing — reduce LLM costs by 60-80% |
| ⏰ | **Scheduling** | Cron triggers, heartbeat wake-ups, and dream cycles for proactive agent behavior |
| 🔐 | **Security-First** | No `eval()`, vault integration, OIDC/Keycloak, cryptographic audit trails |
| 📊 | **Observability** | Immutable audit trails, Prometheus metrics, and a 45-panel Grafana dashboard |
| 🚀 | **Performance** | Java 25 Virtual Threads — millions of lightweight threads for I/O-bound LLM workloads |
| 🧪 | **Code Quality** | 2,000+ tests with zero failures, CI/CD quality gates on every merge |

---

## 🏢 Built for Enterprise

EDDI is designed for **regulated industries** and enterprise teams that need:

- 🔒 **Self-hosted deployment** — runs anywhere Docker runs: on-premises, in any cloud, or air-gapped
- 📋 **Compliance out of the box** — EU AI Act, GDPR, CCPA, HIPAA, PIPEDA, and 10+ global privacy frameworks
- 🛡️ **Zero code execution** — no `eval()`, no code blocks, no dynamic injection (eliminates CVSS 10.0 RCE risks)
- 📝 **Full auditability** — cryptographically signed, tamper-evident operation logs for every conversation and tool call
- ☸️ **Kubernetes-native** — dedicated Kubernetes Operator, Helm charts, and Red Hat Certified Container

---

## ⚡ Get Started in 5 Minutes

```bash
# Start EDDI with Docker
docker run -p 7070:7070 labsai/eddi
```

Then open **http://localhost:7070** to access the EDDI Manager UI.

👉 **[Full getting-started guide →](https://eddi.labs.ai/getting-started/)**

---

## 🛠️ Built On

| Technology | Role |
|---|---|
| ☕ Java 25 | Enterprise runtime with Virtual Threads |
| ⚡ Quarkus | Cloud-native framework |
| 🔗 LangChain4j | 20+ LLM provider integrations |
| 🗃️ MongoDB / PostgreSQL | Dual database support (switch via env var) |
| 🐳 Docker & Kubernetes | Container-native deployment |
| 🔴 OpenShift | Red Hat Certified Container |

---

## 🌍 Who Uses EDDI?

| Sector | Use Cases |
|---|---|
| 🏥 Healthcare | Patient intake agents, medical FAQ, HIPAA-compliant audit trails |
| 🏦 Financial Services | Compliance-logged support agents, fraud detection assistants |
| 🛒 E-Commerce | Product recommendations, multi-language customer service |
| 🏭 Manufacturing | Equipment maintenance assistants, quality control agents |
| 🏛️ Government | Citizen inquiry agents in air-gapped environments |
| 💻 Developer Platforms | Internal AI services integrated into CI/CD pipelines |

---

## 📦 The EDDI Ecosystem

| Repo | Description |
|---|---|
| 🧠 [**EDDI**](https://github.com/labsai/EDDI) | Core AI orchestration engine |
| 🖥️ [**EDDI-Manager**](https://github.com/labsai/EDDI-Manager) | Visual management UI (React 19) |
| 💬 [**eddi-chat-ui**](https://github.com/labsai/eddi-chat-ui) | Embeddable chat widget |
| ☸️ [**EDDI-Operator**](https://github.com/labsai/EDDI-operator) | Kubernetes operator |
| 📦 [**EDDI Client SDK**](https://github.com/labsai/EDDI-client-sdk) | Java SDK for integration |
| 🌐 [**EDDI Website**](https://github.com/labsai/EDDI-LABS-AI-Website) | This repo — the marketing site at [eddi.labs.ai](https://eddi.labs.ai) |

---

## 🔗 Quick Links

| | Link |
|---|---|
| 🌐 | **Website:** [eddi.labs.ai](https://eddi.labs.ai) |
| 📖 | **Documentation:** [docs.labs.ai](https://docs.labs.ai) |
| ⚙️ | **Source Code:** [github.com/labsai/EDDI](https://github.com/labsai/EDDI) |
| 🐳 | **Docker Hub:** [hub.docker.com/r/labsai/eddi](https://hub.docker.com/r/labsai/eddi) |
| 💬 | **Discussions:** [GitHub Discussions](https://github.com/labsai/EDDI/discussions) |
| 🐛 | **Report a Bug:** [GitHub Issues](https://github.com/labsai/EDDI/issues) |

---

## 📜 License

EDDI is open-source under the [Apache License 2.0](https://github.com/labsai/EDDI/blob/main/LICENSE).

---

<p align="center">
  Initiated in Vienna. Developed with ❤️ in Europe. Made for the World.
</p>
