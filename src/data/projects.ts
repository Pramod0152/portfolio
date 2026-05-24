// ============================================================
// data/projects.ts — Real work & side projects
// ============================================================

import { Project } from "@/types/project";

export const projects: Project[] = [
  // ── Current Work ─────────────────────────────────────────
  {
    id: "taasnet-001",
    title: "TaaSNet",
    subtitle: "AI-Powered Talent & Services Marketplace",
    category: "Backend / NestJS",
    projectType: "work",
    status: "Production",
    featured: true,
    year: 2025,
    techStack: [
      "NestJS",
      "TypeScript",
      "LangGraph",
      "OpenAI",
      "Gemini",
      "WebSockets",
      "Agora",
      "ZegoCloud",
      "Stripe Connect",
      "PostgreSQL",
      "MySQL",
      "Sequelize ORM",
      "Firebase",
      "Redis",
    ],
    metrics: {},
    content: {
      problem:
        "TaaSNet needed a backend that could simultaneously handle real-time video/audio calls, multi-step AI workflows, payment billing, and live platform analytics — each with different reliability and latency requirements.",
      solution:
        "Built and maintained core RESTful APIs in NestJS with Sequelize ORM across MySQL and PostgreSQL. Designed stateful AI features and multi-step workflows using LangGraph to orchestrate OpenAI and Gemini calls. Integrated Agora and ZegoCloud for live video/audio communication and Stripe Connect for payment flows.",
      technical_highlights: [
        "Stateful multi-step AI workflows built with LangGraph — structured data processing beyond basic single-turn API calls.",
        "Real-time feature layer using WebSockets and Firebase for presence, messaging, and live updates.",
        "Backend integration for Agora and ZegoCloud: signalling, room management, and event handling.",
        "Stripe Connect billing flows: payment split between platform and service providers.",
        "Centralized logging and monitoring setup to catch regressions before they reach users.",
        "Backend logic for an admin analytics dashboard displaying live platform metrics.",
      ],
    },
    links: {
      live: "https://taasnet.com",
    },
  },

  // ── Side Projects ─────────────────────────────────────────
  {
    id: "notify-002",
    title: "Multi-Channel Notification System",
    subtitle: "Production-Ready Delivery Microservice",
    category: "Backend / NestJS",
    projectType: "side",
    status: "Production",
    featured: true,
    year: 2024,
    techStack: [
      "NestJS",
      "TypeScript",
      "BullMQ",
      "Redis",
      "Sequelize ORM",
      "PostgreSQL",
      "SendGrid",
      "Twilio",
    ],
    metrics: {},
    content: {
      problem:
        "Needed a reusable notification service that could deliver messages across Email, SMS, and WhatsApp through a single unified API — without coupling delivery logic to calling services.",
      solution:
        "Built a notification microservice with a channel registry pattern, async queue-based delivery via BullMQ, and an append-only audit log. Workers own all delivery state transitions keeping HTTP response times independent of third-party latency.",
      technical_highlights: [
        "Channel registry pattern: new delivery channels (e.g. push notifications) can be added without touching existing code.",
        "Async queue-based delivery via BullMQ with exponential-backoff retries (3 attempts, 2s base delay).",
        "Append-only audit log using a self-referential PostgreSQL table — every delivery attempt is recorded with its status, error, and provider message ID.",
        "Workers own all delivery-state transitions (QUEUED → WAITING → SENT / FAILED), keeping HTTP response times fast.",
        "Supports SendGrid dynamic templates and Twilio WhatsApp Content Templates alongside plain HTML/text.",
      ],
    },
    links: {
      github: "https://github.com/Pramod0152",
    },
  },
  {
    id: "chat-003",
    title: "Distributed Real-Time Chat",
    subtitle: "Scalable Fault-Tolerant Chat System",
    category: "Backend / NestJS",
    projectType: "side",
    status: "Production",
    featured: true,
    year: 2024,
    techStack: [
      "NestJS",
      "TypeScript",
      "WebSockets",
      "Redis",
      "BullMQ",
      "PostgreSQL",
      "LangGraph",
      "Docker",
      "Nginx",
    ],
    metrics: {},
    content: {
      problem:
        "Designing a chat system that scales horizontally requires solving cross-instance messaging, write-path reliability, and AI agent integration — all without blocking the real-time message loop.",
      solution:
        "WebSocket-based real-time messaging with Redis Pub/Sub for cross-instance communication. BullMQ offloads writes to ensure eventual consistency. LangGraph AI agent is integrated via async workflows — zero blocking on the chat loop.",
      technical_highlights: [
        "Redis Pub/Sub for cross-instance message fan-out and presence tracking with TTL-based heartbeat.",
        "Queue-driven write path (BullMQ) to decouple persistence from the real-time delivery loop.",
        "Decoupled LangGraph AI agent integration via async workflows — AI responses don't block chat.",
        "Designed for horizontal scale with clear separation of concerns and graceful failure handling.",
        "Nginx reverse proxy + Docker Compose for local multi-instance testing.",
      ],
      architecture_notes:
        "Client ↔ WS Gateway → Redis Pub/Sub → [all WS instances]\nWrite path: WS → BullMQ → DB Worker → PostgreSQL\nAI path: BullMQ → LangGraph agent → response queue → WS",
    },
    links: {
      github: "https://github.com/Pramod0152",
    },
  },
  {
    id: "lms-004",
    title: "Online Learning Platform",
    subtitle: "Full-Stack Course Management System",
    category: "Full-Stack / MERN",
    projectType: "side",
    status: "Production",
    featured: false,
    year: 2023,
    techStack: [
      "Node.js",
      "React",
      "MongoDB",
      "Express",
      "JWT",
      "Word2Vec",
    ],
    metrics: {},
    content: {
      problem:
        "Needed a full-stack platform to manage course delivery, user subscriptions, and personalized content recommendations — built as a complete system from auth to recommendation engine.",
      solution:
        "Full-stack application with role-based auth (admin/student), course CRUD management, multimedia content delivery, and a Word2Vec-powered recommendation engine for personalized course suggestions.",
      technical_highlights: [
        "Role-based authentication and authorization: admin and student permission tiers.",
        "Course lifecycle management: creation, updates, deletions, and user subscriptions.",
        "Personalized course recommendations using Word2Vec on course content and user history.",
        "Responsive multimedia content delivery with progress tracking per user.",
      ],
    },
    links: {
      github: "https://github.com/Pramod0152",
    },
  },
  {
    id: "vaultauth-005",
    title: "VaultAuth",
    subtitle: "OAuth2 / PKCE Identity & Access Service",
    category: "Backend / NestJS",
    projectType: "side",
    status: "Beta",
    featured: false,
    year: 2024,
    techStack: [
      "NestJS",
      "TypeScript",
      "JWT",
      "OAuth2",
      "PKCE",
      "Redis",
      "PostgreSQL",
      "TypeORM",
      "Argon2",
    ],
    metrics: {},
    content: {
      problem:
        "Auth logic was scattered across multiple personal projects. Built a standalone, reusable IAM service as a learning project in OAuth2 security patterns.",
      solution:
        "Standalone NestJS OAuth2-compliant IAM service with PKCE support for SPA clients, refresh token family rotation to prevent replay attacks, and fine-grained RBAC.",
      technical_highlights: [
        "OAuth2 Authorization Code flow with PKCE — no implicit flow, SPA-safe.",
        "Refresh token family rotation: token reuse detection invalidates the entire family.",
        "Fine-grained RBAC with policy-as-data stored in PostgreSQL and cached in Redis.",
        "Argon2id password hashing with configurable work factor.",
      ],
    },
    links: {
      github: "https://github.com/Pramod0152/vaultauth",
    },
  },
];

export const featuredProjects  = projects.filter((p) => p.featured);
export const getProjectById    = (id: string) => projects.find((p) => p.id === id);