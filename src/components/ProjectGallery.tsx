"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGallery() {
  const work = projects.filter((p) => p.projectType === "work");
  const side = projects.filter((p) => p.projectType === "side" || p.projectType === "demo");

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14"
      >
        <div className="section-rule" data-label="01  Work & Systems" />
        <div className="pt-10 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Projects
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg text-sm leading-relaxed">
              Production work and personal systems — each built to solve a specific
              technical problem. Expand any card to see the breakdown.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Work section */}
      {work.length > 0 && (
        <div className="mb-12">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-5">
            Current Work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {work.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* Side projects */}
      {side.length > 0 && (
        <div>
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-5">
            Side Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {side.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={work.length + i}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}