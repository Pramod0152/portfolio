// ============================================================
// types/project.ts
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

export type ProjectType = "work" | "side" | "demo";

export interface ProjectMetrics {
  latency?:    string;
  uptime?:     string;
  scaling?:    string;
  users?:      string;
  throughput?: string;
  [key: string]: string | undefined;
}

export interface ProjectLinks {
  live?:       string;
  github?:     string;
  docs?:       string;
  caseStudy?:  string;
}

export interface ProjectContent {
  problem:               string;
  solution:              string;
  technical_highlights:  string[];
  architecture_notes?:   string;
}

export interface Project {
  id:          string;
  title:       string;
  subtitle:    string;
  category:    ProjectCategory;
  projectType: ProjectType;
  status:      ProjectStatus;
  featured:    boolean;
  year?:       number;
  techStack:   string[];
  metrics:     ProjectMetrics;
  content:     ProjectContent;
  links:       ProjectLinks;
}