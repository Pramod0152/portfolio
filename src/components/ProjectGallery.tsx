"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, List, Layers } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types/project";

type ViewMode = "grid" | "list";

const statusFilters: { label: string; value: ProjectStatus | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Production", value: "Production" },
  { label: "Beta", value: "Beta" },
  { label: "In Development", value: "In Development" },
];

export function ProjectGallery() {
  const [view, setView] = useState<ViewMode>("grid");
  const [filter, setFilter] = useState<ProjectStatus | "All">("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <Layers className="w-4 h-4 text-accent" />
          <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
            Case Studies
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
          Production Systems
        </h2>
        <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
          Each project represents a real-world architectural challenge. Click any card
          to expand the technical breakdown.
        </p>
      </motion.div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        {/* Status filters */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted/30 border border-border/50">
          {statusFilters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150",
                filter === value
                  ? "bg-card text-foreground shadow-sm border border-border/50"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted/30 border border-border/50">
          <button
            onClick={() => setView("grid")}
            className={cn(
              "p-1.5 rounded-md transition-all",
              view === "grid"
                ? "bg-card text-foreground shadow-sm border border-border/50"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setView("list")}
            className={cn(
              "p-1.5 rounded-md transition-all",
              view === "list"
                ? "bg-card text-foreground shadow-sm border border-border/50"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Featured projects — large bento cells */}
      {featured.length > 0 && (
        <div className="mb-6">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Featured
          </p>
          <div
            className={cn(
              view === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                : "flex flex-col gap-4"
            )}
          >
            {featured.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="featured"
                index={i}
              />
            ))}
          </div>
        </div>
      )}

      {/* Other projects */}
      {rest.length > 0 && (
        <div>
          {featured.length > 0 && (
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-4">
              More Projects
            </p>
          )}
          <div
            className={cn(
              view === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                : "flex flex-col gap-4"
            )}
          >
            {rest.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="compact"
                index={featured.length + i}
              />
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="py-20 text-center text-muted-foreground text-sm">
          No projects match this filter.
        </div>
      )}
    </section>
  );
}