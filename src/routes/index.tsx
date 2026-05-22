import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { PERSONAS, PROFILE } from "@/lib/portfolio-data";
import { PersonaTabs, usePersona } from "@/components/site-chrome";
import { SkillsGrid, ProjectsGrid } from "@/components/portfolio-sections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinamra Sareen — Engineer Portfolio" },
      { name: "description", content: "Portfolio of Vinamra Sareen — full-stack, AI, backend, and computer-vision engineer." },
      { property: "og:title", content: "Vinamra Sareen — Engineer Portfolio" },
      { property: "og:description", content: "Switch personas to see the relevant slice of skills and projects." },
    ],
  }),
  component: Index,
});

function Index() {
  const persona = usePersona();
  const search = useSearch({ strict: false });
  const meta = PERSONAS.find((p) => p.id === persona)!;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent-glow)]" />
            Available for new work
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {PROFILE.name}
            <span className="block bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
              {meta.short}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{meta.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_30px_-8px_var(--accent-glow)]">
              <Link to="/contact" search={search}>
                <Mail className="mr-2 size-4" /> Get in touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border/60">
              <Link to="/projects" search={search}>
                See projects <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10">
            <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">View as</p>
            <PersonaTabs />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader eyebrow="Toolkit" title="Skills, tuned to the lens you pick" />
        <SkillsGrid active={persona} />
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <SectionHeader eyebrow="Selected work" title="Featured projects" />
          <Link to="/projects" search={search} className="text-sm text-accent hover:underline">
            All projects →
          </Link>
        </div>
        <ProjectsGrid active={persona} limit={4} />
      </section>
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
