"use client";

import { motion } from "framer-motion";
import { User, MapPin, Briefcase } from "lucide-react";

const timeline = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Current Role",
    period: "2022 — Present",
    description:
      "Architecting NestJS microservice platforms and leading frontend engineering for AI-integrated products.",
  },
  {
    role: "Full-Stack Engineer",
    company: "Previous Company",
    period: "2020 — 2022",
    description:
      "Built MERN stack applications, designed RESTful APIs, and migrated a monolith to a service-oriented architecture.",
  },
  {
    role: "Junior Developer",
    company: "First Role",
    period: "2019 — 2020",
    description:
      "Developed React UIs, contributed to Node.js backends, and learned production operations.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <User className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
              About
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
            Building systems that scale
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Senior Full-Stack Engineer with 5+ years specializing in distributed systems,
              NestJS microservices, and AI-integrated platforms. I thrive at the intersection of
              robust backend architecture and polished frontend engineering.
            </p>
            <p>
              My core philosophy: every architectural decision should be deliberately made,
              documented, and reversible. I prefer domain-driven boundaries, clear contracts
              between services, and automated quality gates.
            </p>
            <p>
              When I'm not shipping, I contribute to open-source tooling for the NestJS ecosystem
              and write technical deep-dives on distributed system patterns.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Remote / Worldwide
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              Open to contract & full-time
            </div>
          </div>
        </motion.div>

        {/* Right: timeline */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-1"
        >
          {timeline.map((item, i) => (
            <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
              {/* Timeline line */}
              {i < timeline.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border" />
              )}
              {/* Dot */}
              <div className="mt-1.5 w-5 h-5 rounded-full border-2 border-accent/40 bg-accent/10 flex-shrink-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-foreground">{item.role}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-accent font-medium">{item.company}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}