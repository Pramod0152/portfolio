// ============================================================
// data/projects.ts — Single Source of Truth for All Projects
// ============================================================

import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "taasnet-001",
    title: "TaasNet",
    subtitle: "AI-Powered Talent Marketplace & Ecosystem",
    category: "Full-Stack / AI / Microservices",
    status: "Production",
    featured: true,
    year: 2024,
    techStack: ["NestJS", "React", "TCP Microservices", "Gemini AI", "Redis", "WebSockets", "PostgreSQL", "Docker"],
    metrics: {
      latency: "< 100ms",
      uptime: "99.9%",
      scaling: "Horizontally Scalable",
    },
    content: {
      problem:
        "Traditional talent marketplaces lack real-time interaction, personalized AI guidance, and the infrastructure to handle high-frequency service-card interactions without degraded UX.",
      solution:
        "Built a distributed system using NestJS microservices and TCP transport to handle high-frequency service card interactions and AI-twin real-time bookings. Each service domain is independently deployable and communicates over a typed TCP message bus.",
      technical_highlights: [
        "Implemented CQRS pattern for service-card state management, separating read/write paths for optimal query performance.",
        "Integrated Gemini for RAG-based AI twin interactions with vector similarity search over talent profiles.",
        "Custom WebSocket gateway with Redis pub/sub for real-time town hall streaming and presence tracking.",
        "Event-sourced booking saga with distributed transaction compensation for atomic multi-service operations.",
      ],
      architecture_notes:
        "API Gateway → Service Registry (Consul) → [Auth | Talent | Booking | AI] Microservices → Event Bus (Redis Streams) → PostgreSQL per domain",
    },
    media: {
      thumbnail: "/projects/taasnet/hero.png",
      videoDemo: "/projects/taasnet/demo.mp4",
      gallery: [
        { url: "/projects/taasnet/architecture.svg", caption: "System Architecture Diagram", type: "diagram" },
        { url: "/projects/taasnet/dashboard.png", caption: "Admin Control Panel", type: "screenshot" },
      ],
    },
    links: {
      live: "https://taasnet.com",
      github: "https://github.com/Pramod0152/taasnet",
      docs: "https://api.taasnet.com/swagger",
    },
  },
  {
    id: "nexus-api-002",
    title: "Nexus API Gateway",
    subtitle: "High-Throughput Microservice Orchestration Layer",
    category: "Backend / NestJS",
    status: "Production",
    featured: true,
    year: 2024,
    techStack: ["NestJS", "gRPC", "Redis", "Kubernetes", "Prometheus", "Kong", "TypeScript"],
    metrics: {
      latency: "< 12ms p99",
      throughput: "50k req/s",
      uptime: "99.95%",
    },
    content: {
      problem:
        "Cross-cutting concerns (auth, rate-limiting, logging, circuit-breaking) were duplicated across 12+ microservices, creating maintenance overhead and inconsistent enforcement.",
      solution:
        "Designed a centralized API Gateway in NestJS that handles all cross-cutting concerns via composable interceptors and guards, exposing a unified GraphQL + REST surface.",
      technical_highlights: [
        "Custom NestJS interceptor pipeline for request tracing (OpenTelemetry) with zero-overhead sampling.",
        "Token-bucket rate limiter backed by Redis Lua scripts for atomic, distributed enforcement.",
        "Circuit-breaker pattern with exponential back-off for downstream service resilience.",
        "gRPC multiplexing for internal service-to-service communication reducing serialization overhead by 60%.",
      ],
    },
    media: {
      thumbnail: "/projects/nexus/hero.png",
      gallery: [
        { url: "/projects/nexus/architecture.svg", caption: "Gateway Architecture", type: "diagram" },
        { url: "/projects/nexus/metrics.png", caption: "Prometheus Dashboard", type: "screenshot" },
      ],
    },
    links: {
      github: "https://github.com/Pramod0152/nexus-gateway",
      docs: "https://docs.nexus.dev",
    },
  },
  {
    id: "clearview-003",
    title: "ClearView Analytics",
    subtitle: "Real-Time Data Visualization Platform for B2B SaaS",
    category: "Full-Stack / MERN",
    status: "Production",
    featured: true,
    year: 2023,
    techStack: ["React", "Node.js", "MongoDB", "Express", "D3.js", "Socket.IO", "AWS S3", "Bull Queue"],
    metrics: {
      users: "2,400+ active",
      latency: "< 200ms",
      uptime: "99.8%",
    },
    content: {
      problem:
        "B2B clients needed live operational dashboards but existing BI tools were too expensive, rigid, and couldn't ingest custom event streams from proprietary data sources.",
      solution:
        "Built a full MERN stack platform with drag-and-drop dashboard builder, custom chart library on D3, and a multi-tenant ingestion pipeline using Bull queues for reliable asPramod Ghimirec processing.",
      technical_highlights: [
        "Multi-tenant data isolation with MongoDB collection namespacing and field-level encryption.",
        "Drag-and-drop widget system with React DnD Kit and persisted layout via JSON serialization.",
        "Custom D3 chart components with React reconciliation wrapper for smooth transitions.",
        "Bull queue for asPramod Ghimirec data ingestion with retry logic and dead-letter queue monitoring.",
      ],
    },
    media: {
      thumbnail: "/projects/clearview/hero.png",
      gallery: [
        { url: "/projects/clearview/dashboard.png", caption: "Live Dashboard Builder", type: "screenshot" },
        { url: "/projects/clearview/pipeline.svg", caption: "Ingestion Pipeline", type: "diagram" },
      ],
    },
    links: {
      live: "https://clearview-app.com",
      github: "https://github.com/Pramod0152/clearview",
    },
  },
  {
    id: "shipfast-004",
    title: "ShipFast CLI",
    subtitle: "Developer Toolchain for NestJS Microservice Scaffolding",
    category: "Open Source",
    status: "Beta",
    featured: false,
    year: 2024,
    techStack: ["Node.js", "TypeScript", "Commander.js", "Handlebars", "Plop", "NPM"],
    metrics: {
      users: "800+ installs",
      scaling: "CLI + VSCode Extension",
    },
    content: {
      problem:
        "Setting up a new NestJS microservice with CQRS, proper module structure, DTOs, and Swagger docs took 2+ hours of boilerplate work per service.",
      solution:
        "Built an opinionated CLI that scaffolds production-ready NestJS microservices in under 60 seconds with CQRS, Swagger, validation pipes, and Docker configs pre-wired.",
      technical_highlights: [
        "Handlebars-based code generation with custom helpers for pluralization and case transformations.",
        "Interactive Inquirer.js wizard for selecting features (CQRS, gRPC, REST, hybrid) during scaffold.",
        "AST-based code injection to update AppModule imports without overwriting existing code.",
        "Companion VSCode extension for in-editor scaffolding via command palette.",
      ],
    },
    media: {
      thumbnail: "/projects/shipfast/hero.png",
      gallery: [
        { url: "/projects/shipfast/cli.png", caption: "CLI Scaffold Wizard", type: "screenshot" },
      ],
    },
    links: {
      github: "https://github.com/Pramod0152/shipfast-cli",
      docs: "https://shipfast.dev",
      live: "https://www.npmjs.com/package/shipfast-cli",
    },
  },
  {
    id: "vaultauth-005",
    title: "VaultAuth",
    subtitle: "Zero-Trust Identity & Access Management Service",
    category: "Backend / NestJS",
    status: "Production",
    featured: false,
    year: 2023,
    techStack: ["NestJS", "JWT", "OAuth2", "PKCE", "Redis", "PostgreSQL", "TypeORM", "Argon2"],
    metrics: {
      latency: "< 50ms token verify",
      uptime: "99.99%",
      users: "Supports 10k+ sessions",
    },
    content: {
      problem:
        "Needed a reusable, auditable auth service that could plug into multiple internal products with fine-grained RBAC, refresh token rotation, and device tracking.",
      solution:
        "Built a standalone NestJS OAuth2-compliant IAM service with PKCE support, refresh token family rotation to prevent replay attacks, and a React admin console for role management.",
      technical_highlights: [
        "OAuth2 Authorization Code flow with PKCE for SPA clients — no implicit flow.",
        "Refresh token family rotation: detecting token reuse invalidates the entire token family.",
        "Fine-grained RBAC with policy-as-data stored in PostgreSQL and cached in Redis.",
        "Argon2id password hashing with configurable work factor for forward-compatibility.",
      ],
    },
    media: {
      thumbnail: "/projects/vaultauth/hero.png",
      gallery: [
        { url: "/projects/vaultauth/flow.svg", caption: "OAuth2 PKCE Flow Diagram", type: "diagram" },
      ],
    },
    links: {
      github: "https://github.com/Pramod0152/vaultauth",
      docs: "https://vaultauth.dev/docs",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);