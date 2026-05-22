import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  PERSONAS,
  PROJECTS,
  SKILLS,
  EXPERIENCE,
  CERTIFICATIONS,
  type Persona,
  type Project,
} from "@/lib/portfolio-data";
import { ExternalLink } from "lucide-react";

const matches = (personas: Persona[], active: Persona) =>
  active === "all" || personas.includes(active) || personas.includes("all");

export function SkillsGrid({ active }: { active: Persona }) {
  const groups = Array.from(new Set(SKILLS.map((s) => s.group)));
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {groups.map((g) => (
        <div key={g}>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{g}</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.filter((s) => s.group === g).map((s) => {
              const on = matches(s.personas, active);
              return (
                <Badge
                  key={s.name}
                  variant="outline"
                  className={cn(
                    "rounded-full border-border/60 px-3 py-1 text-sm font-normal transition-all",
                    on
                      ? "bg-accent/10 text-foreground border-accent/40"
                      : "opacity-30",
                  )}
                >
                  {s.name}
                </Badge>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Card className="group flex flex-col gap-4 border-border/60 bg-card/60 p-6 transition-all hover:border-accent/40 hover:bg-card">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
        <div className="flex gap-1">
          {p.personas.filter((x) => x !== "all").slice(0, 2).map((pe) => (
            <Badge key={pe} variant="secondary" className="text-[10px] uppercase tracking-wider">
              {PERSONAS.find((x) => x.id === pe)?.label}
            </Badge>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{p.summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className="rounded-md bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground">
            {s}
          </span>
        ))}
      </div>
      {(p.link || p.repo) && (
        <div className="mt-auto flex gap-3 pt-2 text-sm">
          {p.link && (
            <a href={p.link} className="inline-flex items-center gap-1 text-accent hover:underline">
              Live <ExternalLink className="size-3" />
            </a>
          )}
          {p.repo && (
            <a href={p.repo} className="inline-flex items-center gap-1 text-accent hover:underline">
              Code <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      )}
    </Card>
  );
}

export function ProjectsGrid({ active, limit }: { active: Persona; limit?: number }) {
  const filtered = PROJECTS.filter((p) => matches(p.personas, active));
  const shown = limit ? filtered.slice(0, limit) : filtered;
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {shown.map((p) => (
        <ProjectCard key={p.title} p={p} />
      ))}
    </div>
  );
}

export function ExperienceTimeline({ active }: { active: Persona }) {
  const items = EXPERIENCE.filter((e) => matches(e.personas, active));
  return (
    <ol className="relative border-l border-border/60 pl-6">
      {items.map((e, i) => (
        <li key={i} className="mb-8 last:mb-0">
          <span className="absolute -left-1.5 mt-1.5 size-3 rounded-full bg-accent shadow-[0_0_12px_var(--accent-glow)]" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold">{e.role}</h3>
            <span className="text-xs text-muted-foreground">{e.dates}</span>
          </div>
          <p className="text-sm text-accent">{e.company}</p>
          <p className="mt-2 text-sm text-muted-foreground">{e.summary}</p>
        </li>
      ))}
    </ol>
  );
}

export function CertificationsWall() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {CERTIFICATIONS.map((c) => (
        <Card key={c.name} className="flex flex-col gap-2 border-border/60 bg-card/60 p-5">
          <h3 className="font-semibold leading-tight">{c.name}</h3>
          <p className="text-sm text-muted-foreground">{c.issuer}</p>
          {c.credentialId && (
            <p className="text-xs text-muted-foreground/80">ID: {c.credentialId}</p>
          )}
          {c.url && (
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              Verify <ExternalLink className="size-3" />
            </a>
          )}
        </Card>
      ))}
    </div>
  );
}
