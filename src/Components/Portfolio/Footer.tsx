import { GitBranch, Link, Mail } from "lucide-react";
export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © 2026 <span className="text-gradient font-semibold">Anand Nayak</span>. Built with passion and code.
        </p>
        <div className="flex items-center gap-2">
          {[
            { icon: GitBranch, href: "https://github.com/Anandnaik1563" },
            { icon: Link, href: "https://www.linkedin.com/feed/" },
            { icon: Mail, href: "mailto:nayakanand58@gmail.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-accent hover:text-accent"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}