import { createFileRoute } from "@tanstack/react-router";
import { PersonaTabs, usePersona } from "@/components/site-chrome";
import { CertificationsWall } from "@/components/portfolio-sections";
import { SectionHeader } from "./index";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Vinamra Sareen" },
      { name: "description", content: "Verified certifications across AI, ML, backend, and cloud — Udacity, DeepLearning.AI, LinkedIn." },
    ],
  }),
  component: CertsPage,
});

function CertsPage() {
  const persona = usePersona();
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader eyebrow="Credentials" title="Certifications wall" />
      <div className="mb-8"><PersonaTabs /></div>
      <CertificationsWall active={persona} />
    </div>
  );
}
