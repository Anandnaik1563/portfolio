import { motion } from "motion/react";
import { GraduationCap, Rocket, Users, Zap, Code2 } from "lucide-react";
import { Section } from "./Section.tsx";
const stats = [
  { icon: Rocket, label: "Fresher" },
  { icon: GraduationCap, label: "B.Tech CSE (AI & ML)" },
  { icon: Code2, label: "Graduation 2027" },
  { icon: Zap, label: "Fast Learner" },
  { icon: Users, label: "Team Player" },
];
export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title={<>Crafting digital ideas into <span className="text-gradient">scalable reality</span></>}
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          <p>
            Hi, I'm <span className="text-foreground font-semibold">Degavath Anand Nayak</span>, a passionate
            Full Stack Developer focused on building modern, scalable, and user-friendly web applications.
          </p>
          <p>
            I enjoy turning ideas into real digital solutions through clean code and creative design.
            Currently, I am continuously learning and improving my skills in both frontend and backend
            technologies to become an industry-ready developer.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="glass neon-border rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground glow">
                AN
              </div>
              <div className="min-w-0">
                <div className="font-semibold truncate">Anand Nayak</div>
                <div className="text-xs text-muted-foreground font-mono">@Anandnaik1563</div>
              </div>
            </div>
            <div className="mt-5 grid gap-2">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 rounded-lg bg-muted/40 px-3 py-2.5 text-sm">
                  <s.icon className="h-4 w-4 text-accent shrink-0" />
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}