"use client";

import { motion } from "framer-motion";
import { Server, Globe, Database, Cloud, Cpu, Wrench } from "lucide-react";

const categories = [
  {
    label: "Backend",
    icon: Server,
    items: ["NestJS", "Node.js", "Express", "GraphQL", "REST", "gRPC", "OAuth2"],
  },
  {
    label: "Frontend",
    icon: Globe,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    label: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "TypeORM", "Mongoose", "Prisma"],
  },
  {
    label: "Infrastructure",
    icon: Cloud,
    items: ["Docker", "Kubernetes", "AWS", "Nginx", "GitHub Actions", "Terraform"],
  },
  {
    label: "AI / ML",
    icon: Cpu,
    items: ["Gemini AI", "OpenAI API", "LangChain", "Vector DBs", "RAG Pipelines"],
  },
  {
    label: "Architecture",
    icon: Wrench,
    items: ["Microservices", "CQRS", "Event Sourcing", "DDD", "Circuit Breaker", "SAGA"],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <Wrench className="w-4 h-4 text-accent" />
          <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
            Expertise
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Technical Stack
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="p-5 rounded-xl border border-border bg-card hover:border-border/80 transition-colors"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <cat.icon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm font-semibold text-foreground">{cat.label}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 text-xs font-mono text-muted-foreground bg-muted/40 border border-border/30 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}