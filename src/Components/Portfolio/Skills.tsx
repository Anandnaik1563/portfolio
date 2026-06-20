import { motion } from "motion/react";
import { Section } from "./Section";
import { Code, Server, Database, Wrench, Brain } from "lucide-react";
const groups = [
  { icon: Code, title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"] },
  { icon: Server, title: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express.js"] },
  { icon: Database, title: "Database", items: ["MySQL", "MongoDB"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "REST APIs", "VS Code"] },
  { icon: Brain, title: "Other", items: ["OOP", "Problem Solving", "Responsive Design"] },
];
export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title={<>The <span className="text-gradient">stack</span> I build with</>}
      subtitle="A curated toolkit covering the full development lifecycle — from pixel-perfect UI to scalable backends."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass neon-border group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1"
          >
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-50"
              style={{ background: "var(--gradient-text)" }}
            />
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-border bg-muted/30 px-3 py-1 text-xs font-mono text-muted-foreground transition hover:border-accent hover:text-accent"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}