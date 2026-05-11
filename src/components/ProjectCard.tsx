"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  FileCode,
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle2,
  Circle,
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

export function ProjectCard({ project, variant = "compact", index = 0 }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const status = statusConfig[project.status] || statusConfig["Archived"];

  const isFeatured = variant === "featured";

  return (
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
              {/* Status badge */}
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

        {/* Problem statement — always visible */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
          {project.content.problem}
        </p>

        {/* Expand / collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" />
              Hide technical breakdown
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" />
              View technical breakdown
            </>
          )}
        </button>

        {/* Expanded: full case study */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-5 space-y-5">
                {/* Solution */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                    Solution
                  </h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.content.solution}
                  </p>
                </div>

                {/* Technical highlights */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                    Technical Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {project.content.technical_highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-sm text-foreground/80 leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture notes */}
                {project.content.architecture_notes && (
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                      Architecture
                    </h4>
                    <div className="p-3 rounded-lg bg-muted/30 border border-border/40 font-mono text-xs text-foreground/70 leading-relaxed">
                      {project.content.architecture_notes}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}