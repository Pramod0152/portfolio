"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Terminal } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl border border-border bg-card p-8 sm:p-12 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
              Get in touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Let's build something exceptional
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Whether it's a new product, a complex migration, or an AI integration —
            I'm interested in ambitious technical challenges. Open to full-time roles,
            contract work, and technical consulting.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@yourname.dev"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
            >
              <Mail className="w-4 h-4" />
              hello@yourname.dev
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Pramod0152"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-border/80 transition-all"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/Pramod0152"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-border/80 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal className="w-3.5 h-3.5" />
          <span className="text-xs font-mono">
            Pramod Ghimire<span className="text-accent">.</span>dev — Built with Next.js, Tailwind, Framer Motion
          </span>
        </div>
        <span className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Pramod Ghimire
        </span>
      </div>
    </section>
  );
}