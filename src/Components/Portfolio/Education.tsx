import { motion } from "motion/react";
import { Section } from "./Section.tsx";
import { GraduationCap, Target, Briefcase } from "lucide-react";
const timeline = [
  {
    icon: GraduationCap,
    period: "2023 — 2027",
    title: "B.Tech, Computer Science Engineering (AI & ML)",
    body: "Pursuing my undergraduate degree with a focus on AI/ML, full stack development, and modern software engineering practices.",
  },
  {
    icon: Briefcase,
    period: "2025 — Present",
    title: "Self-Directed Full Stack Projects",
    body: "Shipping side projects across Java, Spring Boot, React, and Node.js — building production-grade habits before day one.",
  },
  {
    icon: Target,
    period: "2026 — Onwards",
    title: "Seeking Developer Opportunities",
    body: "Looking for Full Stack Developer roles where I can contribute, learn, and grow by building impactful software solutions.",
  },
];
export function Education() {
  return (
    <Section
      id="education"
      eyebrow="04 · Journey"
      title={<>Education & <span className="text-gradient">Goals</span></>}
    >
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-primary to-transparent sm:block" />
        <div className="space-y-6">
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative grid grid-cols-[auto_1fr] gap-5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-full glass neon-border z-10">
                <t.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="glass rounded-2xl p-5 min-w-0">
                <div className="font-mono text-xs text-accent">{t.period}</div>
                <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}