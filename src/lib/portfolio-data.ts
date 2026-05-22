export type Persona = "all" | "fullstack" | "ai" | "backend" | "cv";

export const PERSONAS: { id: Persona; label: string; short: string; tagline: string; emoji: string }[] = [
  { id: "all", label: "All", short: "Engineer", tagline: "Engineer across AI, backend, and frontend.", emoji: "✦" },
  { id: "fullstack", label: "Full-Stack", short: "Full-Stack Engineer", tagline: "Shipping end-to-end products with Vue, Node.js, NestJS, and TypeScript.", emoji: "◆" },
  { id: "ai", label: "AI / ML", short: "AI Engineer", tagline: "Building intelligent systems with LLMs, GenAI, and applied math.", emoji: "✸" },
  { id: "backend", label: "Backend", short: "Backend Engineer", tagline: "Designing reliable APIs, microservices, and messaging on Node.js and AWS.", emoji: "▲" },
  { id: "cv", label: "Computer Vision", short: "Computer Vision Engineer", tagline: "Turning pixels into product — image generation, captioning, and perception.", emoji: "◉" },
];

export const PROFILE = {
  name: "Vinamra Sareen",
  title: "Software Engineer",
  location: "Dallas, Texas · Remote",
  email: "hello@vinamra.dev",
  linkedin: "https://www.linkedin.com/in/vinamra-sareen/",
  github: "https://github.com/",
  about:
    "Software engineer with 5+ years shipping production systems — currently SDE III at HighLevel on the Growth & Onboarding team. I move comfortably across full-stack web, backend microservices, applied AI/ML, and computer vision, with a strong mathematical foundation from formal coursework in Linear Algebra, Calculus, and Discrete Mathematics.",
  stats: [
    { value: "5+", label: "Years shipping" },
    { value: "20+", label: "Certifications" },
    { value: "14%→5%", label: "Onboarding drop-off" },
  ],
};

export type Skill = { name: string; group: string; personas: Persona[] };

export const SKILLS: Skill[] = [
  { name: "TypeScript", group: "Languages", personas: ["fullstack", "backend"] },
  { name: "JavaScript", group: "Languages", personas: ["fullstack", "backend"] },
  { name: "Python", group: "Languages", personas: ["ai", "cv"] },
  { name: "Go", group: "Languages", personas: ["fullstack", "backend"] },
  { name: "Node.js", group: "Backend", personas: ["fullstack", "backend"] },
  { name: "NestJS", group: "Backend", personas: ["fullstack", "backend"] },
  { name: "Microservices", group: "Backend", personas: ["backend"] },
  { name: "RabbitMQ", group: "Backend", personas: ["backend"] },
  { name: "REST / gRPC", group: "Backend", personas: ["backend"] },
  { name: "Vue.js", group: "Frontend", personas: ["fullstack"] },
  { name: "React", group: "Frontend", personas: ["fullstack"] },
  { name: "Vuetify", group: "Frontend", personas: ["fullstack"] },
  { name: "Module Federation", group: "Frontend", personas: ["fullstack"] },
  { name: "LangChain", group: "AI / ML", personas: ["ai"] },
  { name: "LLMs / BERT / Transformers", group: "AI / ML", personas: ["ai"] },
  { name: "Generative AI", group: "AI / ML", personas: ["ai", "cv"] },
  { name: "Attention Mechanisms", group: "AI / ML", personas: ["ai"] },
  { name: "AWS Machine Learning", group: "AI / ML", personas: ["ai"] },
  { name: "Image Generation", group: "Computer Vision", personas: ["cv", "ai"] },
  { name: "Image Captioning", group: "Computer Vision", personas: ["cv", "ai"] },
  { name: "OpenCV", group: "Computer Vision", personas: ["cv"] },
  { name: "AWS", group: "Cloud & Ops", personas: ["fullstack", "backend", "ai"] },
  { name: "Google Cloud", group: "Cloud & Ops", personas: ["ai", "cv"] },
  { name: "Docker", group: "Cloud & Ops", personas: ["fullstack", "backend"] },
  { name: "DevOps with AWS", group: "Cloud & Ops", personas: ["backend"] },
  { name: "Linear Algebra", group: "Mathematics", personas: ["ai", "cv"] },
  { name: "Calculus", group: "Mathematics", personas: ["ai"] },
  { name: "Discrete Mathematics", group: "Mathematics", personas: ["ai", "backend"] },
  { name: "FFmpeg", group: "Tools", personas: ["cv", "backend"] },
  { name: "Git", group: "Tools", personas: ["fullstack", "backend", "ai", "cv"] },
  { name: "Postman", group: "Tools", personas: ["backend", "fullstack"] },
  { name: "Jupyter", group: "Tools", personas: ["ai", "cv"] },
  { name: "Vertex AI", group: "Tools", personas: ["ai", "cv"] },
  { name: "Webpack", group: "Tools", personas: ["fullstack"] },
  { name: "Linux / Bash", group: "Tools", personas: ["backend", "ai"] },
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
    title: "Onboarding Flow Redesign — HighLevel",
    summary: "Led the redesign of the onboarding flow and launched an interactive product tour, cutting drop-off from 14% → 5% and lifting activation + LTV.",
    stack: ["Vue.js", "Node.js", "A/B Testing"],
    personas: ["fullstack"],
  },
  {
    title: "Async Module Federation Loader",
    summary: "Identified unnecessary module federation work on initial load and partnered with the frontend team to introduce async loading, significantly reducing latency.",
    stack: ["Vue.js", "Webpack", "Module Federation"],
    personas: ["fullstack"],
  },
  {
    title: "Image Captioning on Google Cloud",
    summary: "Built and deployed image captioning models using transformer + vision encoders on Vertex AI / Google Cloud.",
    stack: ["Python", "Transformers", "Google Cloud"],
    personas: ["cv", "ai"],
  },
  {
    title: "Generative AI Playground",
    summary: "LLM application built with LangChain + attention-mechanism research from the Udacity Generative AI Nanodegree.",
    stack: ["Python", "LangChain", "LLMs"],
    personas: ["ai"],
  },
  {
    title: "Microservices Platform — Deltatech",
    summary: "Backend services with RabbitMQ messaging, async patterns, and design-pattern-driven architecture for gaming workloads.",
    stack: ["Node.js", "RabbitMQ", "Microservices"],
    personas: ["backend"],
  },
  {
    title: "Slack App on AWS — yogya.ai",
    summary: "Built a Slack integration using the Slack API on top of AWS services with Node.js for scalability and availability.",
    stack: ["Node.js", "AWS", "Slack API"],
    personas: ["backend", "fullstack"],
  },
];

export type Experience = {
  role: string;
  company: string;
  dates: string;
  location?: string;
  summary: string;
  highlights?: string[];
  personas: Persona[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Development Engineer III",
    company: "HighLevel",
    dates: "Jul 2025 — Present",
    location: "Dallas, TX · Remote",
    summary: "Growth & Onboarding team. Senior IC driving activation, LTV, and load-performance work across the product.",
    personas: ["fullstack", "backend"],
  },
  {
    role: "Software Development Engineer II",
    company: "HighLevel",
    dates: "May 2024 — Jul 2025",
    location: "Dallas, TX",
    summary: "Growth & Onboarding team.",
    highlights: [
      "Led onboarding flow redesign + interactive product tour — reduced drop-off from 14% → 5%, lifting activation and LTV.",
      "Launched A/B-tested guided onboarding replacing passive tutorials, improving completion and time-to-productivity.",
      "Cut initial load latency by removing unneeded module federation and moving to async loading with the frontend team.",
    ],
    personas: ["fullstack"],
  },
  {
    role: "Software Engineer",
    company: "Deltatech Gaming Limited",
    dates: "Jan 2022 — Sep 2023",
    summary: "Backend engineering on gaming systems — microservices, RabbitMQ messaging, async patterns, Git workflows.",
    personas: ["backend"],
  },
  {
    role: "Graduate Engineer Trainee",
    company: "Deltatech Gaming Limited",
    dates: "Feb 2021 — Jan 2022",
    summary: "Trained across backend stack — Git, RabbitMQ, microservice foundations.",
    personas: ["backend"],
  },
  {
    role: "Full Stack Developer",
    company: "yogya.ai",
    dates: "Aug 2020 — Jan 2021",
    summary: "Built scalable Node.js backends on AWS, learned Vuetify design system, and shipped a Slack app using the Slack API.",
    personas: ["fullstack", "backend"],
  },
  {
    role: "Frontend Engineer (Meetbeans)",
    company: "yogya.ai",
    dates: "May 2020 — Aug 2020",
    location: "India",
    summary: "Built reusable Vue components for a WebRTC + Agora.io powered video/screen-share product.",
    personas: ["fullstack"],
  },
  {
    role: "Faculty",
    company: "NIIT Limited",
    dates: "Jul 2019 — Dec 2019",
    location: "Amritsar / Ludhiana",
    summary: "Taught CSS, algorithms, and core CS fundamentals.",
    personas: ["fullstack"],
  },
];

export type Education = { school: string; degree: string; dates: string; note?: string };

export const EDUCATION: Education[] = [
  { school: "Indira Gandhi National Open University", degree: "MCA, Computer Engineering", dates: "Jul 2024 — Oct 2026", note: "Discrete Mathematics, Cybersecurity, +4 skills" },
  { school: "IU International University of Applied Sciences", degree: "M.Sc. Data Science (Dropped)", dates: "Apr 2022 — Jul 2023", note: "Mathematics and Computer Science" },
  { school: "Indira Gandhi National Open University", degree: "BCA, Computer Engineering", dates: "2017 — 2021" },
];

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  url?: string;
  personas: Persona[];
};

export const CERTIFICATIONS: Certification[] = [
  { name: "Generative AI Nanodegree", issuer: "Udacity", date: "Mar 2024", personas: ["ai"] },
  { name: "AWS Machine Learning Engineer Nanodegree", issuer: "Udacity", date: "Feb 2024", personas: ["ai", "backend"] },
  { name: "Calculus for Machine Learning and Data Science", issuer: "DeepLearning.AI", date: "Sep 2023", credentialId: "MV5KY95TEG4R", personas: ["ai"] },
  { name: "Linear Algebra for Machine Learning and Data Science", issuer: "DeepLearning.AI", date: "Sep 2023", credentialId: "284R3QD4WFHJ", personas: ["ai", "cv"] },
  { name: "Create Image Captioning Models with Google Cloud", issuer: "Udacity", date: "May 2023", credentialId: "cd64782e-fd26-11ed-a1a5-2f10e09e0055", personas: ["cv", "ai"] },
  { name: "Introduction to Image Generation with Google Cloud", issuer: "Udacity", date: "May 2023", credentialId: "17ad95f6-fcb8-11ed-89f5-734e35470535", personas: ["cv", "ai"] },
  { name: "Introduction to Large Language Models with Google Cloud", issuer: "Udacity", date: "May 2023", credentialId: "86eb54fc-fcb4-11ed-8165-7f3191f6d6f2", personas: ["ai"] },
  { name: "Transformer Models and BERT Model with Google Cloud", issuer: "Udacity", date: "May 2023", credentialId: "e7ec2b64-fbe7-11ed-8869-6321fed99cbe", personas: ["ai"] },
  { name: "Attention Mechanism with Google Cloud", issuer: "Udacity", date: "May 2023", credentialId: "e191c5a4-fbe1-11ed-924b-1f779c5d8116", personas: ["ai"] },
  { name: "Introduction to Generative AI with Google Cloud", issuer: "Udacity", date: "May 2023", credentialId: "56e8ef34-f6ed-11ed-865c-8375f6c006e1", personas: ["ai"] },
  { name: "Advanced Node.js", issuer: "LinkedIn", date: "Feb 2022", personas: ["backend", "fullstack"] },
  { name: "Advanced Node.js: Scaling Applications", issuer: "LinkedIn", date: "Feb 2022", personas: ["backend"] },
  { name: "Learning Docker", issuer: "LinkedIn", date: "Feb 2022", personas: ["backend", "fullstack"] },
  { name: "EF SET English Certificate 69/100 (C1 Advanced)", issuer: "EF SET", date: "Mar 2022", personas: ["all"] },
  { name: "Microservices: Design Patterns", issuer: "LinkedIn", date: "Jan 2022", personas: ["backend"] },
  { name: "Microservices: Asynchronous Messaging", issuer: "LinkedIn", date: "Jan 2022", personas: ["backend"] },
  { name: "Microservices Foundations", issuer: "LinkedIn", date: "Jan 2022", personas: ["backend"] },
  { name: "Introduction to AWS for Non-Engineers: 1 Cloud Concepts", issuer: "LinkedIn", date: "Jan 2022", personas: ["backend"] },
  { name: "Introduction to AWS for Non-Engineers: 2 Security", issuer: "LinkedIn", date: "Jan 2022", personas: ["backend"] },
  { name: "DevOps with AWS", issuer: "LinkedIn", date: "Jan 2022", personas: ["backend"] },
  { name: "AWS Machine Learning Foundations", issuer: "Udacity", date: "Oct 2021", credentialId: "7NPPT3KN", personas: ["ai", "backend"] },
  { name: "Secure & Private AI Challenge Scholarship", issuer: "Udacity", personas: ["ai"] },
  { name: "Android Developer Nanodegree", issuer: "Udacity", date: "Jun 2018", personas: ["fullstack"] },
  { name: "Field Technician and Computing Peripherals", issuer: "National Skill Development Corporation", personas: ["all"] },
];
