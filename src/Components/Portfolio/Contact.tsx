import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Section } from "./Section.tsx";
import { Mail, Users, GitBranch, Send, Briefcase, Check } from "lucide-react";
export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <Section
      id="contact"
      eyebrow="05 · Contact"
      title={<>Let's <span className="text-gradient">build</span> together</>}
      subtitle="Have a role, a project, or just want to say hi? Drop a message — I respond within 24 hours."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-3"
        >
          {[
            { icon: Mail, label: "Email", value: "nayakanand58@gmail.com", href: "mailto:nayakanand58@gmail.com" },
            { icon: Users, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/feed/" },
            { icon: GitBranch, label: "GitHub", value: "Anandnaik1563", href: "https://github.com/Anandnaik1563" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="glass neon-border group flex items-center gap-4 rounded-xl p-4 transition hover:-translate-y-0.5"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-accent">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="truncate text-sm font-medium">{c.value}</div>
              </div>
            </a>
          ))}
        </motion.div>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass neon-border lg:col-span-3 rounded-2xl p-6 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" type="email" placeholder="you@email.com" />
          </div>
          <Field label="Subject" placeholder="Let's collaborate on..." />
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project, role, or idea..."
              className="w-full resize-none rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none transition focus:border-accent focus:shadow-[0_0_0_3px_oklch(0.7_0.22_240/0.15)]"
            />
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02] animate-glow-pulse"
            >
              {sent ? <><Check className="h-4 w-4" /> Sent!</> : <><Send className="h-4 w-4" /> Send Message</>}
            </button>
            <a
              href="mailto:nayakanand58@gmail.com?subject=Hiring%20Opportunity"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent transition"
            >
              <Briefcase className="h-4 w-4" /> Hire Me
            </a>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        {...props}
        className="w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none transition focus:border-accent focus:shadow-[0_0_0_3px_oklch(0.7_0.22_240/0.15)]"
      />
    </div>
  );
}