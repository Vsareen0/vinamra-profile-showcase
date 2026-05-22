import { Link, useRouterState, useNavigate, useSearch } from "@tanstack/react-router";
import { PERSONAS, type Persona } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export function usePersona(): Persona {
  const search = useSearch({ strict: false }) as { as?: string };
  const p = (search?.as ?? "all") as Persona;
  return PERSONAS.find((x) => x.id === p) ? p : "all";
}

export function PersonaTabs() {
  const navigate = useNavigate();
  const active = usePersona();
  return (
    <div className="flex flex-wrap gap-2">
      {PERSONAS.map((p) => {
        const isActive = active === p.id;
        return (
          <button
            key={p.id}
            onClick={() =>
              navigate({
                to: ".",
                search: (prev: Record<string, unknown>) => ({ ...prev, as: p.id === "all" ? undefined : p.id }),
              })
            }
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-all",
              isActive
                ? "border-accent bg-accent/15 text-accent-foreground shadow-[0_0_20px_-5px_var(--accent-glow)]"
                : "border-border/60 text-muted-foreground hover:border-accent/60 hover:text-foreground",
            )}
          >
            {p.label}
          </button>
        );
      })}
    </div>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useSearch({ strict: false }) as { as?: string };
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" search={search} className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block size-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent-glow)]" />
          Vinamra Sareen
        </Link>
        <nav className="hidden gap-1 md:flex">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                search={search}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/50">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Vinamra Sareen</span>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/vinamra-sareen/" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
