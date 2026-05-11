"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const stacks = [
  { label: "NestJS", color: "text-red-400" },
  { label: "React", color: "text-sky-400" },
  { label: "Node.js", color: "text-green-400" },
  { label: "TypeScript", color: "text-blue-400" },
  { label: "Microservices", color: "text-purple-400" },
  { label: "PostgreSQL", color: "text-orange-400" },
  { label: "Redis", color: "text-red-500" },
  { label: "Docker / K8s", color: "text-cyan-400" },
];

const stats = [
  { value: "5+", label: "Years Building" },
  { value: "12+", label: "Production Systems" },
  { value: "3", label: "Microservice Architectures" },
  { value: "99.9%", label: "Avg Uptime" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03]"
        style={{ backgroundSize: "32px 32px" }}
      />

      {/* Radial accent glow */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      {/* Accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        {/* Badge */}
        {/* <motion.div variants={itemVariants} className="flex justify-start mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for new opportunities
          </div>
        </motion.div> */}

        {/* Headline */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] text-balance">
            <span className="text-foreground">Senior</span>
            <br />
            <span className="text-foreground/50">Full‑Stack</span>
            <br />
            <span className="text-foreground">Engineer</span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed"
        >
          I architect and ship{" "}
          <span className="text-foreground">distributed backend systems</span>,{" "}
          <span className="text-foreground">AI‑integrated platforms</span>, and{" "}
          <span className="text-foreground">high-performance full‑stack applications</span>{" "}
          using NestJS microservices, the MERN stack, and cloud-native infrastructure.
        </motion.p>

        {/* Tech pills */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
          {stacks.map((s) => (
            <span
              key={s.label}
              className={cn(
                "px-2.5 py-1 text-xs font-mono rounded-md border border-border/50 bg-muted/30",
                s.color
              )}
            >
              {s.label}
            </span>
          ))}
        </motion.div>

        {/* CTA Row */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-20">
          <a
            href="#projects"
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium",
              "bg-accent text-accent-foreground",
              "hover:bg-accent/90 transition-all duration-150",
              "shadow-lg shadow-accent/20"
            )}
          >
            View Case Studies
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium",
              "border border-border bg-muted/20 text-foreground/80",
              "hover:bg-muted/40 hover:text-foreground transition-all duration-150"
            )}
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Pramod0152"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/Pramod0152"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card px-6 py-5 flex flex-col gap-1 hover:bg-muted/30 transition-colors"
            >
              <span className="text-2xl font-bold font-mono text-foreground">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground/50 font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}