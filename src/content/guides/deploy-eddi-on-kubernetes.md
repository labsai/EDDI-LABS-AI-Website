---
title: Deploy EDDI on Kubernetes
description: >-
  Take EDDI from a single container to a cluster deployment, with Helm or Kustomize, production hardening, and the state questions you have to answer first.
persona: platform-operator
level: advanced
timeMinutes: 30
publishDate: 2026-08-26
order: 30
tags: [kubernetes, helm, kustomize, operator, scaling, high-availability]
docsLinks:
  - label: Kubernetes deployment reference
    href: https://docs.labs.ai/deployment-and-infrastructure/kubernetes.md
  - label: Docker deployment reference
    href: https://docs.labs.ai/deployment-and-infrastructure/docker.md
  - label: Architecture and concepts
    href: https://docs.labs.ai/architecture-and-concepts/architecture.md
faq:
  - question: Helm, Kustomize, or the Operator?
    answer: >-
      Helm if your team already standardizes on Helm and you want values-file configuration. Kustomize if you prefer overlays over templating and keep base manifests in git. The Operator if you want EDDI instances managed as custom resources with lifecycle handling, which is the most hands-off option and the most opinionated.
  - question: Can EDDI run more than one replica?
    answer: >-
      Yes. Conversation state lives in the database rather than in process memory, which is what makes horizontal scaling possible. The constraint to plan around is the database and the event bus, not the EDDI pods.
  - question: Does it work in an air-gapped cluster?
    answer: >-
      Yes, and this is a designed-for case rather than an accident. You need the image mirrored into your registry, a database inside the boundary, and either a local model through Ollama or Jlama, or an approved egress route to a provider.
  - question: Is there a certified container?
    answer: >-
      EDDI ships a Red Hat Certified container, which matters if you are deploying to OpenShift under a policy that requires certified images.
---

Moving EDDI to Kubernetes is mostly ordinary work: it is a stateless JVM service with a database behind it. The parts worth thinking about before you start are where state lives, how the database is operated, and whether you actually need high availability or just want it.

## Decide these before you write a manifest

**Where does the database live?** EDDI stores conversation state, agent configuration, and the vault in MongoDB or PostgreSQL. Running that database inside the same cluster is convenient and makes you responsible for its backups, failover, and upgrades. Using a managed database outside the cluster costs money and removes an entire category of 3am problem. For anything holding real conversations, managed is usually the right call.

**Do you need more than one replica?** EDDI keeps conversation state in the database rather than in process memory, so horizontal scaling works. But two replicas against a single-instance database has not bought you availability, it has bought you a more complicated single point of failure. Scale the data layer first, or accept that you are scaling for throughput rather than for uptime and be clear about which.

**What is the egress policy?** Agents call LLM providers. If the cluster has restricted egress, that traffic needs an explicit allowance, or a local model through Ollama or Jlama and no egress at all. Discovering this after deployment is a bad afternoon.

## The fastest path

For a look at EDDI running in a cluster before committing to a deployment strategy:

```bash
kubectl apply -f https://raw.githubusercontent.com/labsai/EDDI/main/k8s/quickstart.yaml
```

This is a quickstart, not a production topology. It gets pods running so you can see the shape of the thing. Do not build on it.

## Choosing a deployment method

Three supported paths, and the right one depends on what your team already does rather than on which is best in the abstract.

**Helm** suits teams already standardizing on it. Configuration is a values file, upgrades are `helm upgrade`, and it fits existing CI patterns without argument.

**Kustomize** suits teams who prefer overlays to templating and want base manifests readable in git. Overlays are provided for MongoDB, PostgreSQL, authentication, and monitoring, so environment differences stay as patches rather than as branching template logic.

**The Kubernetes Operator** manages EDDI instances as custom resources and handles lifecycle operations for you. It is the most hands-off and the most opinionated. Reach for it when you are running several EDDI instances and want them managed declaratively rather than deployed individually.

The exact chart values, overlay names, and custom resource fields are in the Kubernetes reference linked at the end. They version with the platform, so this guide points at them rather than reproducing them.

## Production hardening

The manifests include the pieces you would otherwise write yourself:

- **HorizontalPodAutoscaler** for scaling on load. Worth tuning: LLM calls are I/O-bound and long-lived, so CPU is a poor scaling signal. Concurrent conversations track the actual constraint better.
- **PodDisruptionBudget** so cluster maintenance does not take every replica at once.
- **NetworkPolicy** to constrain what EDDI can reach. This is the one most worth the effort, because the whole security argument for a self-hosted agent platform is about controlling what the agent can touch. A permissive network policy undoes a lot of that.

## Secrets

Do not put provider API keys in a ConfigMap, and be aware that a plain Kubernetes Secret is base64, not encryption.

EDDI's own vault gives you AES-256-GCM encryption at rest and the `${vault:key-name}` reference form, so agent configurations carry references rather than values and stay safe to export. The vault master key is the thing that needs real protection: your cluster's secret management, an external KMS, or a sealed-secrets workflow.

## Observability

EDDI exposes Prometheus metrics and auto-provisions Grafana dashboards, so if the cluster already runs a Prometheus stack this is mostly a scrape configuration.

Two things to alert on beyond the usual pod health. **Provider error rates**, because an expired API key surfaces as agents failing rather than as pods crashing, and a healthy pod serving errors will not page anyone. And **cost per tenant** if you are multi-tenant, because runaway token spend is a production incident that no infrastructure alert will catch.

## Verify the deployment

Beyond pods reaching Ready:

```bash
kubectl get pods -l app=eddi
kubectl logs -l app=eddi --tail=50
```

Then exercise the actual path. Create an agent and send it a message, as in the Docker Compose guide. A cluster where the pods are healthy and the provider credentials are wrong looks fine to Kubernetes and is entirely broken to a user.

If you have scaled past one replica, do it twice and confirm both requests behave, which is the cheap check that state is genuinely shared rather than accidentally sticky.

## Before it takes traffic

Authentication is not optional on a cluster deployment. Work through the Keycloak guide if you have not already: an EDDI instance with a Service in front of it and no OIDC is an open administration API on your network.
