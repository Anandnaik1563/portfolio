// import { motion } from "motion/react";
// import { Section } from "./Section.tsx";
// import { ArrowUpRight, GitBranch, Sprout, ShieldCheck, Gamepad2, Sparkles } from "lucide-react";
// const projects = [
//   {
//     icon: Sprout,
//     title: "Smart Farmer",
//     desc: "An intelligent farming assistance platform that helps farmers make better agricultural decisions using technology — crop recommendations, farming guidance, and friendly UI for efficient farm management.",
//     stack: ["JavaScript", "HTML", "CSS", "Web"],
//     tag: "Web App",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Data Security System",
//     desc: "A Python-based mini project focused on securing sensitive data through encryption and security techniques, ensuring confidentiality and safe data storage.",
//     stack: ["Python", "Encryption", "Security"],
//     tag: "Security",
//   },
//   {
//     icon: Gamepad2,
//     title: "Tic Tac Toe Game",
//     desc: "A responsive and interactive Tic Tac Toe game featuring solid game logic, DOM manipulation, and user-friendly gameplay across devices.",
//     stack: ["HTML", "CSS", "JavaScript"],
//     tag: "Game",
//   },
// ];
// const future = ["E-Commerce Web App", "Task Management System", "Portfolio Website"];
// export function Projects() {
//   return (
//     <Section
//       id="projects"
//       eyebrow="03 · Projects"
//       title={<>Selected <span className="text-gradient">work</span></>}
//       subtitle="A glimpse of what I've built so far — and what's coming next."
//     >
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((p, i) => (
//           <motion.article
//             key={p.title}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             className="glass neon-border group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_oklch(0.7_0.22_240/0.5)]"
//           >
//             <div className="flex items-start justify-between">
//               <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent">
//                 <p.icon className="h-6 w-6" />
//               </div>
//               <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
//                 {p.tag}
//               </span>
//             </div>
//             <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
//             <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.desc}</p>
//             <div className="mt-5 flex flex-wrap gap-1.5">
//               {p.stack.map((s) => (
//                 <span key={s} className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-mono text-primary">
//                   {s}
//                 </span>
//               ))}
//             </div>
//             <a
//               href="https://github.com/Anandnaik1563"
//               target="_blank"
//               rel="noreferrer"
//               className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100"
//             >
//               View on GitHub <ArrowUpRight className="h-4 w-4" />
//             </a>
//           </motion.article>
//         ))}
//       </div>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="mt-10 glass rounded-2xl p-6"
//       >
//         <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-accent">
//           <Sparkles className="h-4 w-4" /> Coming Soon
//         </div>
//         <div className="mt-4 grid gap-3 sm:grid-cols-3">
//           {future.map((f) => (
//             <div key={f} className="rounded-xl border border-dashed border-border bg-muted/20 px-4 py-3 text-sm">
//               {f}
//             </div>
//           ))}
//         </div>
//         <a
//           href="https://github.com/Anandnaik1563"
//           target="_blank"
//           rel="noreferrer"
//           className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
//         >
//           <GitBranch className="h-4 w-4" /> github.com/Anandnaik1563
//         </a>
//       </motion.div>
//     </Section>
//   );
// }

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Section } from "./Section.tsx";
import { ArrowUpRight, GitBranch, Sparkles } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

const future = [
  "E-Commerce Web App",
  "Task Management System",
  "Portfolio Website",
];

export function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Anandnaik1563/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Section
      id="projects"
      eyebrow="03 · Projects"
      title={
        <>
          Selected <span className="text-gradient">work</span>
        </>
      }
      subtitle="A glimpse of what I've built so far — and what's coming next."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, i) => (
          <motion.article
            key={repo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass neon-border group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_oklch(0.7_0.22_240/0.5)]"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent">
                <GitBranch className="h-6 w-6" />
              </div>

              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                GitHub Repo
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              {repo.name}
            </h3>

            <p className="mt-3 flex-1 text-sm text-muted-foreground">
              {repo.description || "No description available"}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {repo.language && (
                <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-mono text-primary">
                  {repo.language}
                </span>
              )}
            </div>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100"
            >
              View on GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 glass rounded-2xl p-6"
      >
        <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-accent">
          <Sparkles className="h-4 w-4" /> Coming Soon
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {future.map((f) => (
            <div
              key={f}
              className="rounded-xl border border-dashed border-border bg-muted/20 px-4 py-3 text-sm"
            >
              {f}
            </div>
          ))}
        </div>

        <a
          href="https://github.com/Anandnaik1563"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
        >
          <GitBranch className="h-4 w-4" /> github.com/Anandnaik1563
        </a>
      </motion.div>
    </Section>
  );
}
