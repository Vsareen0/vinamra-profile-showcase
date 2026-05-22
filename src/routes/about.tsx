import { createFileRoute } from "@tanstack/react-router";
import { PROFILE, EDUCATION } from "@/lib/portfolio-data";
import { SectionHeader } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vinamra Sareen" },
      { name: "description", content: "About Vinamra Sareen: engineer working across AI, backend, and frontend." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeader eyebrow="About" title="A multi-disciplinary engineer" />
      <p className="text-lg leading-relaxed text-muted-foreground">{PROFILE.about}</p>

      <div className="mt-12">
        <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">Education</h3>
        <ul className="space-y-4">
          {EDUCATION.map((e, i) => (
            <li key={i} className="flex flex-col border-l border-border/60 pl-4">
              <span className="font-medium">{e.degree}</span>
              <span className="text-sm text-muted-foreground">{e.school} · {e.dates}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
