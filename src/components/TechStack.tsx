"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "Backend",
    items: [
      { name: "NestJS", level: "primary" },
      { name: "Node.js", level: "primary" },
      { name: "TypeScript", level: "primary" },
      { name: "REST APIs", level: "primary" },
      { name: "WebSockets", level: "primary" },
      { name: "Swagger", level: "primary" },
    ],
  },
  {
    label: "AI & Queues",
    items: [
      { name: "LangGraph", level: "primary" },
      { name: "OpenAI API", level: "primary" },
      { name: "Vercel AI SDK", level: "primary" },
      { name: "Gemini API", level: "primary" },
      { name: "BullMQ", level: "primary" },
      { name: "Redis", level: "primary" },
    ],
  },
  {
    label: "Databases & ORM",
    items: [
      { name: "PostgreSQL", level: "primary" },
      { name: "MySQL", level: "primary" },
      { name: "MongoDB", level: "secondary" },
      { name: "Sequelize ORM", level: "primary" },
      { name: "Supabase", level: "primary" },
    ],
  },
  {
    label: "Real-Time & Media",
    items: [
      { name: "WebSockets", level: "primary" },
      { name: "Firebase", level: "primary" },
      { name: "Agora", level: "primary" },
      { name: "ZegoCloud", level: "primary" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Postman", level: "primary" },
      { name: "Docker", level: "primary" },
      { name: "GitHub", level: "primary" },
      { name: "Logging/Monitoring", level: "primary" },
    ],
  },
  {
    label: "Payments & Additional Services",
    items: [
      { name: "Stripe Connect", level: "primary" },
      { name: "Stripe Express", level: "primary" },
      { name: "React.js", level: "primary" },
    ],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14"
      >
        <div className="section-rule" data-label="03  Stack" />
      </motion.div>

      <div className="pt-10">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Technical Stack
          </h2>
          <p className="font-mono text-[11px] text-muted-foreground">
            <span className="text-accent">■</span> primary &nbsp;
            <span className="text-muted-foreground/50">■</span> familiar
          </p>
        </div>

        {/* ── Grid of category blocks ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40 rounded-xl overflow-hidden">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="bg-card p-5 hover:bg-muted/20 transition-colors"
            >
              {/* Category label */}
              <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">
                {cat.label}
              </p>

              {/* Items */}
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded border ${item.level === "primary"
                      ? "text-foreground/80 bg-muted/40 border-border/60"
                      : "text-muted-foreground/60 bg-muted/10 border-border/20"
                      }`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}