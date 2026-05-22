import { createFileRoute } from "@tanstack/react-router";
import { PersonaTabs, usePersona } from "@/components/site-chrome";
import { ExperienceTimeline } from "@/components/portfolio-sections";
import { SectionHeader } from "./index";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Vinamra Sareen" },
      { name: "description", content: "Professional experience across AI, backend, and full-stack engineering." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const persona = usePersona();
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeader eyebrow="Experience" title="Roles and impact" />
      <div className="mb-8"><PersonaTabs /></div>
      <ExperienceTimeline active={persona} />
    </div>
  );
}
