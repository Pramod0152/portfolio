"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  FileCode,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle2,
  Circle,
  X,
  ArrowUpRight,
} from "lucide-react";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "compact";
  index?: number;
}

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle2 }> = {
  Production: { color: "text-green-400 bg-green-400/10 border-green-400/20", icon: CheckCircle2 },
  Beta: { color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20", icon: Circle },
  "In Development": { color: "text-blue-400 bg-blue-400/10 border-blue-400/20", icon: Circle },
  Archived: { color: "text-muted-foreground bg-muted/30 border-border", icon: Circle },
};

const metricIcons: Record<string, typeof Zap> = {
  latency: Zap,
  uptime: Shield,
  scaling: TrendingUp,
  users: TrendingUp,
  throughput: TrendingUp,
};

function ProjectOverlay({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const status = statusConfig[project.status] || statusConfig["Archived"];

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="overlay-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[200] bg-background/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        key="overlay-panel"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-8 pointer-events-none"
      >
        <div
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top gradient accent */}
          <div className="sticky top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1.5 rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-medium rounded-full border",
                    status.color
                  )}
                >
                  <status.icon className="w-3 h-3" />
                  {project.status}
                </span>
                {project.year && (
                  <span className="text-[11px] text-muted-foreground font-mono">{project.year}</span>
                )}
                <span className="text-[11px] text-muted-foreground font-mono">·</span>
                <span className="text-[11px] text-muted-foreground font-mono">{project.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1">
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground">{project.subtitle}</p>
            </div>

            {/* Metrics */}
            {Object.keys(project.metrics).length > 0 && (
              <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl bg-muted/20 border border-border/40">
                {Object.entries(project.metrics)
                  .filter(([, v]) => v)
                  .map(([key, value]) => {
                    const Icon = metricIcons[key] || Zap;
                    return (
                      <div key={key} className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-accent" />
                        <span className="text-sm font-mono font-semibold text-foreground">{value}</span>
                        <span className="text-xs text-muted-foreground capitalize">{key}</span>
                      </div>
                    );
                  })}
              </div>
            )}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-mono text-muted-foreground bg-muted/40 border border-border/40 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Content sections */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                  Problem
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {project.content.problem}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                  Solution
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {project.content.solution}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                  Technical Highlights
                </h4>
                <ul className="space-y-3">
                  {project.content.technical_highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-sm text-foreground/80 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.content.architecture_notes && (
                <div>
                  <h4 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                    Architecture
                  </h4>
                  <div className="p-3 rounded-lg bg-muted/30 border border-border/40 font-mono text-xs text-foreground/70 leading-relaxed">
                    {project.content.architecture_notes}
                  </div>
                </div>
              )}
            </div>

            {/* Links footer */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border/50">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-xs font-medium hover:bg-accent/90 transition-all shadow-sm shadow-accent/20"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  Live Site
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
              {project.links.docs && (
                <a
                  href={project.links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  Docs
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ProjectCard({ project, variant = "compact", index = 0 }: ProjectCardProps) {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const status = statusConfig[project.status] || statusConfig["Archived"];
  const isFeatured = variant === "featured";

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
        className={cn(
          "group relative rounded-xl border border-border bg-card",
          "hover:border-border/80 hover:bg-card/80 transition-all duration-300",
          isFeatured && "ring-1 ring-accent/10"
        )}
      >
        {/* Featured accent line */}
        {isFeatured && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-t-xl" />
        )}

        <div className="p-6">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-medium rounded-full border",
                    status.color
                  )}
                >
                  <status.icon className="w-3 h-3" />
                  {project.status}
                </span>
                {project.year && (
                  <span className="text-[11px] text-muted-foreground font-mono">{project.year}</span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors leading-tight">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{project.subtitle}</p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-1.5 shrink-0">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.links.docs && (
                <a
                  href={project.links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  <FileCode className="w-4 h-4" />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-mono text-muted-foreground bg-muted/40 border border-border/40 rounded"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 6 && (
              <span className="px-2 py-0.5 text-[11px] font-mono text-muted-foreground bg-muted/20 rounded">
                +{project.techStack.length - 6}
              </span>
            )}
          </div>

          {/* Metrics row */}
          {Object.keys(project.metrics).length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b border-border/50">
              {Object.entries(project.metrics)
                .filter(([, v]) => v)
                .map(([key, value]) => {
                  const Icon = metricIcons[key] || Zap;
                  return (
                    <div key={key} className="flex items-center gap-1.5">
                      <Icon className="w-3 h-3 text-accent" />
                      <span className="text-xs font-mono text-foreground/80">{value}</span>
                      <span className="text-[10px] text-muted-foreground capitalize">{key}</span>
                    </div>
                  );
                })}
            </div>
          )}

          {/* Problem statement */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {project.content.problem}
          </p>

          {/* Open overlay button */}
          <button
            onClick={() => setOverlayOpen(true)}
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border/50",
              "text-muted-foreground bg-muted/20",
              "hover:text-foreground hover:border-border hover:bg-muted/40",
              "transition-all duration-150"
            )}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            View technical breakdown
          </button>
        </div>
      </motion.article>

      {/* Overlay — rendered outside the card so it's grid-independent */}
      {overlayOpen && (
        <ProjectOverlay project={project} onClose={() => setOverlayOpen(false)} />
      )}
    </>
  );
}