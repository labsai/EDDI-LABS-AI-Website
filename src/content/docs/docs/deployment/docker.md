---
title: Docker & Kubernetes Deployment
description: Deploy EDDI with Docker, Docker Compose, or Kubernetes.
---

## Docker

```bash
docker run -p 7070:7070 labsai/eddi:latest
```

## Docker Compose

```yaml
version: '3.8'
services:
  eddi:
    image: labsai/eddi:latest
    ports:
      - "7070:7070"
    environment:
      - EDDI_ENV=production
    depends_on:
      - mongodb
  mongodb:
    image: mongo:7
    ports:
      - "27017:27017"
```

## Kubernetes

EDDI is fully Dockerized and pre-configured for Kubernetes and OpenShift orchestration. Built on Quarkus, it supports:

- **GraalVM Native Image** — sub-second boot times, minimal memory footprint
- **Java 25 Virtual Threads** — millions of concurrent connections
- **Health checks** — liveness and readiness probes built in
