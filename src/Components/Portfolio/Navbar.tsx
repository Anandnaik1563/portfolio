import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const offsets = links.map((l) => {
        const el = document.getElementById(l.id);
        return { id: l.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const current = offsets.filter((o) => o.top <= 120).pop();
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 ${
          scrolled ? "glass rounded-full py-2.5" : ""
        } transition-all`}
      >
        <button onClick={() => go("home")} className="flex items-center gap-2 font-mono text-sm font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/20 text-primary glow">
            &lt;A/&gt;
          </span>
          <span className="text-gradient hidden sm:inline">anand.dev</span>
        </button>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-primary/15 ring-1 ring-primary/40" />
                )}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => go("contact")} className="hidden rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:inline-flex">
          Hire Me
        </button>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="glass mx-4 mt-2 rounded-2xl p-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`block w-full rounded-lg px-4 py-2 text-left text-sm ${
                    active === l.id ? "bg-primary/20 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}