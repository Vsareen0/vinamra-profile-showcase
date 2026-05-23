import { createFileRoute, Link, useSearch, useNavigate } from "@tanstack/react-router";
import { PERSONAS, PROFILE, SKILLS, type Persona } from "@/lib/portfolio-data";
import { usePersona } from "@/components/site-chrome";
import { ProjectsGrid } from "@/components/portfolio-sections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Sparkles, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import meImg from "@/assets/vinamra.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinamra Sareen — Engineer Portfolio" },
      { name: "description", content: "Vinamra Sareen — full-stack, AI, backend, and computer-vision engineer. Pick a lens to see the relevant skills." },
      { property: "og:title", content: "Vinamra Sareen — Engineer Portfolio" },
      { property: "og:description", content: "Switch personas to see the slice of skills and projects that match the role you're hiring for." },
    ],
  }),
  component: Index,
});

function Index() {
  const persona = usePersona();
  const search = useSearch({ strict: false });
  const navigate = useNavigate();
  const meta = PERSONAS.find((p) => p.id === persona)!;

  return (
    <div>
      {/* HERO — photo + identity */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }} />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-12 pt-16 md:grid-cols-[1.2fr_1fr] md:pt-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent-glow)]" />
              Available for new work
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              {PROFILE.name.split(" ")[0]}{" "}
              <span className="bg-gradient-to-br from-accent via-foreground to-accent bg-clip-text text-transparent">
                {PROFILE.name.split(" ")[1]}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-xl text-foreground/90">{meta.tagline}</p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-3.5" /> {PROFILE.location}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_30px_-8px_var(--accent-glow)]">
                <Link to="/contact" search={search}><Mail className="mr-2 size-4" /> Connect with me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border/60">
                <Link to="/projects" search={search}>See projects <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {PROFILE.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-semibold tracking-tight text-foreground">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm">
            <div aria-hidden className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/40 via-primary/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <img src={meImg} alt="Vinamra Sareen" className="aspect-[3/4] w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
                  <Sparkles className="size-3" /> Currently
                </div>
                <p className="mt-1 text-sm font-medium text-foreground">SDE III · HighLevel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONA SWITCHER — big visual cards */}
      <section className="mx-auto max-w-6xl px-6 pb-4 pt-8">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Choose a lens</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">Which engineer do you need?</h2>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.filter((p) => p.id !== "all").map((p) => {
            const active = persona === p.id;
            return (
              <button
                key={p.id}
                onClick={() => navigate({ to: ".", search: (prev: Record<string, unknown>) => ({ ...prev, as: p.id }), resetScroll: false })}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border p-5 text-left transition-all",
                  active
                    ? "border-accent bg-accent/10 shadow-[0_0_40px_-12px_var(--accent-glow)]"
                    : "border-border/60 bg-card/40 hover:border-accent/40 hover:bg-card",
                )}
              >
                <div className="text-2xl text-accent">{p.emoji}</div>
                <div className="mt-3 text-base font-semibold tracking-tight">{p.short}</div>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.tagline}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* SKILLS at-a-glance */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader eyebrow="Toolkit" title={`What I bring as a ${meta.short}`} />
        <SkillsCloud active={persona} />
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex items-end justify-between">
          <SectionHeader eyebrow="Selected work" title="Featured projects" />
          <Link to="/projects" search={search} className="text-sm text-accent hover:underline">All projects →</Link>
        </div>
        <ProjectsGrid active={persona} limit={4} />
      </section>
    </div>
  );
}

function SkillsCloud({ active }: { active: Persona }) {
  const matches = (p: Persona[]) => active === "all" || p.includes(active) || p.includes("all");
  const groups = Array.from(new Set(SKILLS.map((s) => s.group)));
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map((g) => {
        const items = SKILLS.filter((s) => s.group === g);
        const onCount = items.filter((s) => matches(s.personas)).length;
        if (onCount === 0) return null;
        return (
          <div key={g} className="rounded-xl border border-border/60 bg-card/40 p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold tracking-tight">{g}</h3>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{onCount} active</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((s) => {
                const on = matches(s.personas);
                return (
                  <span
                    key={s.name}
                    className={cn(
                      "rounded-md px-2 py-1 text-xs transition-all",
                      on ? "bg-accent/15 text-accent-foreground" : "bg-secondary/40 text-muted-foreground/50",
                    )}
                  >
                    {s.name}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
    </div>
  );
}
