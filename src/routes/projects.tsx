import { createFileRoute } from "@tanstack/react-router";
import { PersonaTabs, usePersona } from "@/components/site-chrome";
import { ProjectsGrid } from "@/components/portfolio-sections";
import { SectionHeader } from "./index";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vinamra Sareen" },
      { name: "description", content: "Selected projects across AI, computer vision, backend services, and full-stack apps." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const persona = usePersona();
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader eyebrow="Projects" title="Things I've built" />
      <div className="mb-8"><PersonaTabs /></div>
      <ProjectsGrid active={persona} />
    </div>
  );
}
