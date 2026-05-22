import { createFileRoute } from "@tanstack/react-router";
import { CertificationsWall } from "@/components/portfolio-sections";
import { SectionHeader } from "./index";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Vinamra Sareen" },
      { name: "description", content: "Verified certifications and credentials." },
    ],
  }),
  component: CertsPage,
});

function CertsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader eyebrow="Credentials" title="Certifications" />
      <CertificationsWall />
    </div>
  );
}
