import { createFileRoute } from "@tanstack/react-router";
import { PROFILE } from "@/lib/portfolio-data";
import { SectionHeader } from "./index";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vinamra Sareen" },
      { name: "description", content: "Get in touch with Vinamra Sareen." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <SectionHeader eyebrow="Contact" title="Let's build something" />
      <p className="text-lg text-muted-foreground">
        Open to collaborations, full-time roles, and consulting in AI, computer vision, and backend systems.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={`mailto:${PROFILE.email}`}><Mail className="mr-2 size-4" /> Email me</a>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-border/60">
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin className="mr-2 size-4" /> LinkedIn</a>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-border/60">
          <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github className="mr-2 size-4" /> GitHub</a>
        </Button>
      </div>
    </div>
  );
}
