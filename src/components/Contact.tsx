"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Terminal } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14"
      >
        <div className="section-rule" data-label="04  Contact" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
      >
        {/* Left: CTA text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let's work together.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            I'm open to backend engineering roles, contract work, and interesting
            technical problems — particularly around real-time systems, AI
            integrations, or NestJS/Node.js architecture.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:pramod@example.com"
            className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors glow-accent"
          >
            <Mail className="w-4 h-4" />
            Send me a message
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right: links grid */}
        <div className="space-y-3">
          {[
            {
              icon: Github,
              label: "GitHub",
              sub: "github.com/Pramod0152",
              href: "https://github.com/Pramod0152",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              sub: "pramod-ghimire-4659a4279",
              href: "https://linkedin.com/in/pramod-ghimire-4659a4279",
            },
            {
              icon: Mail,
              label: "Email",
              sub: "pramod@example.com",
              href: "mailto:pramod@example.com",
            },
          ].map(({ icon: Icon, label, sub, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3.5 rounded-lg border border-border/50 hover:border-border hover:bg-muted/20 transition-all group"
            >
              <div className="w-8 h-8 rounded border border-border/60 flex items-center justify-center bg-muted/20 group-hover:border-accent/30 transition-colors">
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {label}
                </p>
                <p className="font-mono text-[11px] text-muted-foreground">{sub}</p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* ── Footer ── */}
      <div className="mt-20 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal className="w-3 h-3" />
          <span className="font-mono text-[10px] tracking-wide">
            Pramod Ghimire<span className="text-accent">.</span>dev
            {" "}— Next.js · Tailwind · Framer Motion
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} Pramod Ghimire
        </span>
      </div>
    </section>
  );
}