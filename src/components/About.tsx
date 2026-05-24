"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const timeline = [
  {
    role: "Junior Backend Developer",
    org: "TaaSNet",
    period: "Jul 2025 — Present",
    location: "Korea · Remote",
    description:
      "Building backend infrastructure for an AI-powered talent marketplace. Core work: LangGraph AI workflows, real-time WebSocket features, Agora/ZegoCloud integration, Stripe Connect billing, and centralized logging.",
    current: true,
  },
  {
    role: "IT Officer",
    org: "PABSON Central Committee",
    period: "Jul 2024 — Jun 2025",
    location: "Kathmandu, Nepal · On-site",
    description:
      "Maintained and extended the organization's website and backend systems. Collaborated with external teams on web applications and user management workflows for member schools across the PABSON network.",
    current: false,
  },
  {
    role: "Project Support Intern & Academic Trainee",
    org: "Digischool Global",
    period: "May 2023 — Nov 2023",
    location: "Kathmandu, Nepal · On-site",
    description:
      "Contributed to a full-stack online learning platform — user auth, course management, and a Word2Vec recommendation engine. Also delivered training sessions and prepared project documentation.",
    current: false,
  },
  {
    role: "BSC CSIT",
    org: "Vedas College, Lalitpur",
    period: "2021 — Present",
    location: "Lalitpur, Nepal",
    description:
      "Bachelor of Science in Computer Science & Information Technology. Coursework in algorithms, networking, databases, and software engineering.",
    current: false,
    isEdu: true,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14"
      >
        <div className="section-rule" data-label="02  Background" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 pt-10">

        {/* ── Left: bio ── */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            About
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              I'm a backend engineer based in Kathmandu, specializing in{" "}
              <span className="text-foreground">NestJS</span>,{" "}
              <span className="text-foreground">TypeScript</span>, and real-time
              systems. My day-to-day at TaaSNet spans API design, AI workflow
              engineering with <span className="text-foreground">LangGraph</span>,
              and live communication infrastructure.
            </p>
            <p>
              I got into backend engineering because I like building things that
              continue to work reliably under pressure — queues that don't drop
              messages, APIs that handle concurrency correctly, systems you can debug
              at 2am without reading every line of code.
            </p>
            <p>
              Outside work, I build personal projects to explore patterns I can't
              always try in production: distributed chat systems, OAuth2 flows from
              scratch, notification microservices with proper audit trails. Building
              things to learn them properly.
            </p>
          </div>

          <div className="flex items-center gap-1.5 mt-8 text-xs text-muted-foreground font-mono">
            <MapPin className="w-3.5 h-3.5" />
            Kathmandu, Nepal · Available Remote
          </div>
        </motion.div>

        {/* ── Right: timeline ── */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="relative">
            {/* Vertical line with travelling shimmer — centered on the 14px dots (4px row padding + 7px dot center) */}
            <div className="absolute left-[11px] top-3 bottom-0 w-px -translate-x-1/2 overflow-hidden">
              <div className="absolute inset-0 bg-border" />
              <motion.div
                className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-accent/35 to-transparent"
                animate={{ top: ["-4rem", "100%"] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.6,
                }}
              />
            </div>

            <div className="space-y-7">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex items-start gap-5 pl-1">
                  {/* Node — self-start + fixed size keeps the ring a circle around the dot only */}
                  <div className="relative z-10 mt-1 shrink-0 self-start w-3.5 h-3.5">
                    {item.current ? (
                      <>
                        {/* Slow outer ring pulse — dim, not jarring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-accent/30"
                        // animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
                        // transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Main dot */}
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-accent/60 bg-accent/15 flex items-center justify-center">
                          <motion.div
                            className="w-1 h-1 rounded-full bg-accent"
                            animate={{ opacity: [0.55, 1, 0.55] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                      </>
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-border bg-background" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pb-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                      <span className="text-sm font-semibold text-foreground">
                        {item.role}
                      </span>
                      {item.current && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono font-medium rounded bg-accent/10 border border-accent/20 text-accent leading-none">
                          now
                        </span>
                      )}
                      {item.isEdu ? (
                        <span className="font-mono text-[10px] text-accent border border-border/50 rounded px-1.5 py-0.5">
                          EDU
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] text-accent">{item.org}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {item.period}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground/60">
                        {item.location}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}