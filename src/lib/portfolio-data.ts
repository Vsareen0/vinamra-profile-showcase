export type Persona = "all" | "fullstack" | "ai" | "backend" | "cv";

export const PERSONAS: { id: Persona; label: string; short: string; tagline: string }[] = [
  { id: "all", label: "All", short: "Engineer", tagline: "Engineer across AI, backend, and frontend." },
  { id: "fullstack", label: "Full-Stack", short: "Full-Stack Engineer", tagline: "Shipping end-to-end products with Go, NestJS, and TypeScript." },
  { id: "ai", label: "AI / ML", short: "AI Engineer", tagline: "Building intelligent systems with computer vision and applied math." },
  { id: "backend", label: "Backend", short: "Backend Engineer", tagline: "Designing reliable APIs and services on Go, NestJS, and Google Cloud." },
  { id: "cv", label: "Computer Vision", short: "CV Engineer", tagline: "Turning pixels into product — perception systems and visual intelligence." },
];

export const PROFILE = {
  name: "Vinamra Sareen",
  location: "—",
  email: "hello@example.com",
  linkedin: "https://www.linkedin.com/in/vinamra-sareen/",
  github: "https://github.com/",
  about:
    "Engineer with a multi-disciplinary toolkit spanning AI and computer vision, backend services, and modern web frontends. Comfortable across Go, NestJS, Node.js, TypeScript, Python, and Google Cloud, with a strong mathematical foundation underpinning the AI work.",
};

export type Skill = { name: string; group: string; personas: Persona[] };

export const SKILLS: Skill[] = [
  { name: "Go", group: "Languages", personas: ["fullstack", "backend"] },
  { name: "TypeScript", group: "Languages", personas: ["fullstack", "backend"] },
  { name: "JavaScript", group: "Languages", personas: ["fullstack", "backend"] },
  { name: "Python", group: "Languages", personas: ["ai", "cv"] },
  { name: "NestJS", group: "Backend", personas: ["fullstack", "backend"] },
  { name: "Node.js", group: "Backend", personas: ["fullstack", "backend"] },
  { name: "REST / gRPC", group: "Backend", personas: ["backend"] },
  { name: "PostgreSQL", group: "Backend", personas: ["fullstack", "backend"] },
  { name: "React", group: "Frontend", personas: ["fullstack"] },
  { name: "TanStack", group: "Frontend", personas: ["fullstack"] },
  { name: "Tailwind CSS", group: "Frontend", personas: ["fullstack"] },
  { name: "Computer Vision", group: "AI / ML", personas: ["ai", "cv"] },
  { name: "Deep Learning", group: "AI / ML", personas: ["ai"] },
  { name: "OpenCV", group: "AI / ML", personas: ["ai", "cv"] },
  { name: "PyTorch", group: "AI / ML", personas: ["ai", "cv"] },
  { name: "Google Cloud", group: "Cloud & Ops", personas: ["fullstack", "backend", "ai"] },
  { name: "Docker", group: "Cloud & Ops", personas: ["fullstack", "backend"] },
  { name: "Mathematics", group: "Foundations", personas: ["ai", "cv"] },
];

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  personas: Persona[];
  link?: string;
  repo?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Real-Time Vision Pipeline",
    summary: "Low-latency computer vision pipeline for object detection and tracking on streaming video.",
    stack: ["Python", "PyTorch", "OpenCV", "GCP"],
    personas: ["ai", "cv"],
  },
  {
    title: "Distributed API Platform",
    summary: "High-throughput backend in Go and NestJS serving multi-tenant workloads with gRPC + REST.",
    stack: ["Go", "NestJS", "PostgreSQL", "Docker"],
    personas: ["backend", "fullstack"],
  },
  {
    title: "ML-Powered Web App",
    summary: "End-to-end product: React frontend, NestJS API, and a Python inference service behind it.",
    stack: ["React", "TypeScript", "NestJS", "Python"],
    personas: ["fullstack", "ai"],
  },
  {
    title: "Geospatial Visual Search",
    summary: "Embedding-based visual search across geotagged imagery with sub-second retrieval.",
    stack: ["Python", "PyTorch", "GCP"],
    personas: ["ai", "cv", "backend"],
  },
];

export type Experience = {
  role: string;
  company: string;
  dates: string;
  summary: string;
  personas: Persona[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer",
    company: "Current Role",
    dates: "—",
    summary: "Building production systems across backend services and ML-driven features.",
    personas: ["fullstack", "backend", "ai"],
  },
  {
    role: "Engineer",
    company: "Previous Role",
    dates: "—",
    summary: "Designed and shipped backend platforms and computer vision components.",
    personas: ["backend", "cv", "ai"],
  },
];

export type Education = { school: string; degree: string; dates: string };

export const EDUCATION: Education[] = [
  { school: "—", degree: "Degree in Engineering / CS", dates: "—" },
];

export type Certification = {
  name: string;
  issuer: string;
  credentialId?: string;
  url?: string;
  personas: Persona[];
};

export const CERTIFICATIONS: Certification[] = [
  { name: "Add your certification", issuer: "Issuer", url: "#", personas: ["all"] },
];
