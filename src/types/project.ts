// ============================================================
// types/project.ts — Centralized Type Definitions
// ============================================================

export type ProjectStatus =
  | "Production"
  | "Beta"
  | "In Development"
  | "Archived";

export type ProjectCategory =
  | "Full-Stack / AI / Microservices"
  | "Full-Stack / MERN"
  | "Backend / NestJS"
  | "Frontend / React"
  | "DevOps / Infrastructure"
  | "Open Source";

export interface ProjectMetrics {
  latency?: string;
  uptime?: string;
  scaling?: string;
  users?: string;
  throughput?: string;
  [key: string]: string | undefined;
}

export interface ProjectMediaItem {
  url: string;
  caption: string;
  type?: "screenshot" | "diagram" | "video";
}

export interface ProjectMedia {
  thumbnail: string;
  videoDemo?: string;
  gallery: ProjectMediaItem[];
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  docs?: string;
  caseStudy?: string;
}

export interface ProjectContent {
  problem: string;
  solution: string;
  technical_highlights: string[];
  architecture_notes?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  year?: number;
  techStack: string[];
  metrics: ProjectMetrics;
  content: ProjectContent;
  media: ProjectMedia;
  links: ProjectLinks;
}
