"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Stagger helpers ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ── Animated code block lines ── */
const CODE_LINES = [
  { tokens: [{ t: "comment", v: "// pramod-ghimire.ts" }] },
  { tokens: [] },
  { tokens: [{ t: "keyword", v: "export const" }, { t: "space" }, { t: "name", v: "developer" }, { t: "space" }, { t: "punct", v: "= {" }] },
  { tokens: [{ t: "indent" }, { t: "property", v: "role" }, { t: "punct", v: ": " }, { t: "string", v: '"Backend Engineer"' }, { t: "punct", v: "," }] },
  { tokens: [{ t: "indent" }, { t: "property", v: "stack" }, { t: "punct", v: ": " }, { t: "punct", v: "[" }] },
  { tokens: [{ t: "indent2" }, { t: "string", v: '"NestJS"' }, { t: "punct", v: ", " }, { t: "string", v: '"TypeScript"' }, { t: "punct", v: ", " }, { t: "string", v: '"Node.js"' }, { t: "punct", v: "," }] },
  { tokens: [{ t: "indent2" }, { t: "string", v: '"LangGraph"' }, { t: "punct", v: ", " }, { t: "string", v: '"WebSockets"' }, { t: "punct", v: ", " }, { t: "string", v: '"Redis"' }, { t: "punct", v: "," }] },
  { tokens: [{ t: "indent" }, { t: "punct", v: "]," }] },
  { tokens: [{ t: "indent" }, { t: "property", v: "focus" }, { t: "punct", v: ": " }, { t: "string", v: '"Real-Time + AI Workflows"' }, { t: "punct", v: "," }] },
  { tokens: [{ t: "indent" }, { t: "property", v: "currently" }, { t: "punct", v: ": " }, { t: "string", v: '"@ TaaSNet, Korea (Remote)"' }, { t: "punct", v: "," }] },
  { tokens: [{ t: "indent" }, { t: "property", v: "location" }, { t: "punct", v: ": " }, { t: "string", v: '"Kathmandu, Nepal"' }, { t: "punct", v: "," }] },
  { tokens: [{ t: "indent" }, { t: "property", v: "open" }, { t: "punct", v: ": " }, { t: "keyword", v: "true" }, { t: "punct", v: "," }] },
  { tokens: [{ t: "punct", v: "}" }, { t: "space" }, { t: "keyword", v: "satisfies" }, { t: "space" }, { t: "type", v: "Engineer" }, { t: "punct", v: ";" }] },
];

function tokenClass(type: string): string {
  switch (type) {
    case "keyword":   return "token-keyword";
    case "property":  return "token-property";
    case "string":    return "token-string";
    case "comment":   return "token-comment";
    case "punct":     return "token-punct";
    case "type":      return "token-type";
    case "name":      return "text-foreground font-semibold";
    case "indent":    return "";
    case "indent2":   return "";
    case "space":     return "";
    default:          return "text-foreground";
  }
}

function tokenContent(tok: { t: string; v?: string }): string {
  if (tok.t === "indent")  return "  ";
  if (tok.t === "indent2") return "    ";
  if (tok.t === "space")   return " ";
  return tok.v ?? "";
}

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  /* Reveal code lines one by one */
  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const t = setTimeout(
      () => setVisibleLines((v) => v + 1),
      visibleLines === 0 ? 600 : 80
    );
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section className="relative min-h-screen flex items-center pt-14 overflow-hidden">

      {/* ── Dot-grid background ── */}
      <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />

      {/* ── Very subtle radial vignette — no blobs ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, hsl(43 96% 56% / 0.04), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* ── Left: text content ── */}
          <div>
            {/* Label */}
            <motion.div variants={item} className="flex items-center gap-2 mb-7">
              <span className="font-mono text-[11px] text-muted-foreground tracking-widest uppercase">
                Backend Engineer
              </span>
              <span className="h-px flex-1 max-w-[40px] bg-border" />
              {/* <span className="font-mono text-[11px] text-accent tracking-widest">
                Open to Work
              </span> */}
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] mb-6"
            >
              <span className="text-foreground">Pramod</span>
              <br />
              <span className="text-foreground/35">Ghimire</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mb-8"
            >
              I build backend systems that handle real-time communication, AI-powered
              workflows, and payment infrastructure — primarily with{" "}
              <span className="text-foreground">NestJS</span>,{" "}
              <span className="text-foreground">TypeScript</span>, and{" "}
              <span className="text-foreground">LangGraph</span>. Currently working on{" "}
              <span className="text-accent">TaaSNet</span> out of Seoul.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                View Work <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-mono border border-border text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
              <div className="flex gap-2">
                <a
                  href="https://github.com/Pramod0152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/pramod-ghimire-4659a4279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* ── Minimal info strip ── */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-x-6 gap-y-2 pt-6 border-t border-border/50"
            >
              {[
                { label: "Current", value: "TaaSNet · Korea · Remote" },
                { label: "Focus",   value: "NestJS · Real-Time · AI" },
                { label: "Degree",  value: "BSC CSIT · Vedas College" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {label}
                  </span>
                  <span className="text-xs text-foreground/70">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: animated code block ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-t-lg border border-border/70 bg-muted/20">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 font-mono text-[10px] text-muted-foreground">
                  pramod-ghimire.ts
                </span>
              </div>

              {/* Code area */}
              <div className="rounded-b-lg border-x border-b border-border/70 bg-card/80 backdrop-blur-sm p-5 min-w-[360px]">
                <pre className="text-[13px] font-mono leading-6">
                  {CODE_LINES.slice(0, visibleLines).map((line, li) => (
                    <div key={li}>
                      {line.tokens.map((tok, ti) => (
                        <span key={ti} className={tokenClass(tok.t)}>
                          {tokenContent(tok)}
                        </span>
                      ))}
                    </div>
                  ))}
                  {/* Cursor */}
                  {visibleLines < CODE_LINES.length && (
                    <span className="cursor-blink" />
                  )}
                </pre>
              </div>

              {/* Subtle amber glow behind the card */}
              <div className="absolute -inset-4 bg-accent/3 rounded-2xl blur-2xl -z-10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-muted-foreground/25 to-transparent"
        />
      </motion.div>
    </section>
  );
}