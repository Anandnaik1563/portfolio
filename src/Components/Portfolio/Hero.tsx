import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { Particles } from "./Particles.tsx";
const roles = ["Full Stack Developer", "Java Developer", "Problem Solver", "AI Enthusiast"];
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((p) => p + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}
export function Hero() {
  const typed = useTypewriter(roles);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <Particles />
      <div
        className="absolute left-1/2 top-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl animate-float"
        style={{ background: "var(--gradient-text)" }}
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span className="text-muted-foreground">Available for opportunities · Class of 2027</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-5xl font-bold leading-[1.05] sm:text-7xl lg:text-8xl"
        >
          DEGAVATH
          <br />
          <span className="text-gradient">ANAND NAYAK</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Full Stack Developer · <span className="text-accent">Building Future with Code</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 font-mono text-base sm:text-lg"
        >
          <span className="text-muted-foreground">&gt; </span>
          <span className="text-gradient font-semibold">{typed}</span>
          <span className="ml-0.5 inline-block w-2 bg-accent animate-blink">&nbsp;</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <button
            onClick={() => go("projects")}
            className="group relative overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02] animate-glow-pulse"
          >
            View Projects
          </button>
          <a
  href="/Anand_Nayak_Resume.pdf"
  download
  className="glass neon-border inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
>
  <Download className="h-4 w-4" />
  Download Resume
</a>
          <button
            onClick={() => go("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent transition"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex items-center gap-2 text-xs text-muted-foreground"
        >
          <ArrowDown className="h-3 w-3 animate-bounce" /> Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}