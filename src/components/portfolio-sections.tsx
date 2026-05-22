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
    <ol className="relative space-y-6 border-l border-border/60 pl-6">
      {items.map((e, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[31px] top-2 size-3 rounded-full bg-accent shadow-[0_0_12px_var(--accent-glow)] ring-4 ring-background" />
          <Card className="border-border/60 bg-card/60 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold tracking-tight">{e.role}</h3>
              <span className="text-xs text-muted-foreground">{e.dates}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-accent">
              {e.company}{e.location ? <span className="text-muted-foreground"> · {e.location}</span> : null}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{e.summary}</p>
            {e.highlights && (
              <ul className="mt-3 space-y-1.5">
                {e.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2 text-sm text-foreground/85">
                    <span className="mt-1 size-1 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-3 flex flex-wrap gap-1">
              {e.personas.filter((x) => x !== "all").map((pe) => (
                <Badge key={pe} variant="secondary" className="text-[10px] uppercase tracking-wider">
                  {PERSONAS.find((x) => x.id === pe)?.label}
                </Badge>
              ))}
            </div>
          </Card>
        </li>
      ))}
    </ol>
  );
}

export function CertificationsWall({ active = "all" as Persona }: { active?: Persona }) {
  const filtered = CERTIFICATIONS.filter((c) => matches(c.personas, active));
  const byIssuer = filtered.reduce<Record<string, typeof CERTIFICATIONS>>((acc, c) => {
    (acc[c.issuer] ||= []).push(c);
    return acc;
  }, {});
  const order = ["Udacity", "DeepLearning.AI", "LinkedIn", "EF SET", "National Skill Development Corporation"];
  const issuers = Object.keys(byIssuer).sort((a, b) => {
    const ai = order.indexOf(a); const bi = order.indexOf(b);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Total" value={filtered.length} />
        <Stat label="AI / ML" value={filtered.filter((c) => c.personas.includes("ai")).length} />
        <Stat label="Backend" value={filtered.filter((c) => c.personas.includes("backend")).length} />
        <Stat label="Computer Vision" value={filtered.filter((c) => c.personas.includes("cv")).length} />
      </div>
      {issuers.map((issuer) => (
        <div key={issuer}>
          <div className="mb-4 flex items-baseline justify-between">
            <h3 className="text-sm font-semibold tracking-tight">{issuer}</h3>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{byIssuer[issuer].length} credentials</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {byIssuer[issuer].map((c) => (
              <Card key={c.name} className="group relative flex flex-col gap-1.5 border-border/60 bg-card/60 p-4 transition-all hover:border-accent/40">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-semibold leading-snug">{c.name}</h4>
                </div>
                <p className="text-xs text-muted-foreground">{c.date ?? "—"}</p>
                {c.credentialId && (
                  <p className="truncate text-[10px] text-muted-foreground/70">ID: {c.credentialId}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/40 p-4">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
