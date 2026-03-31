
const fs = require("fs");
let content = fs.readFileSync("src/components/ProjectsSection.tsx", "utf8");

const importsOld = `import {
  ExternalLink,
  Folder,
  Gamepad2,
  Github,
  Code,
  Globe,
  Server,
  X
} from "lucide-react";`;

const importsNew = `import {
  ExternalLink,
  Folder,
  Gamepad2,
  Github,
  Code,
  Globe,
  Server,
  X,
  Smartphone,
  Briefcase
} from "lucide-react";`;

content = content.replace(importsOld, importsNew);

const projectsRegex = /const projects: Project\[\] = \[([\s\S]*?)\];/;
const newProjects = `const projects: Project[] = [
  {
    title: "NoTicket!",
    shortDescription: "An endless stealth-runner mobile game where a stowaway avoids ticket inspectors on a European train.",
    technologies: ["Unity", "C#", "Node.js", "MongoDB"],
    fullStack: ["Unity", "C#", "Node.js", "Express", "MongoDB", "React", "Vite"],
    features: [
      "Developed the mobile game client using Unity and C#, paired with a custom Full-Stack LiveOps architecture (Node.js/Express, MongoDB) and a React/Vite admin dashboard.",
      "Engineered a multi-stage Guard AI system encompassing custom dynamic Field of View (FOV) sightlines and smooth interpolation.",
      "Architected robust Unity Editor tools (LevelEditorWindow, LevelValidator) for automated level generation and Over-The-Air (OTA) updates.",
      "Implemented mobile-first performance optimizations utilizing heavy Object Pooling to eliminate runtime garbage collection spikes."
    ],
    icon: Gamepad2
  },
  {
    title: "PlanO",
    shortDescription: "A cross-platform mobile application for advanced event planning, collaborative scheduling, and real-time group coordination.",
    technologies: ["Flutter", "Supabase", "Firebase", "Dart"],
    fullStack: ["Flutter", "Dart", "Riverpod", "Supabase", "PostgreSQL", "Firebase"],
    features: [
      "Built a cross-platform mobile app using Flutter (Dart) and Riverpod, integrating Supabase (PostgreSQL) for secure relational databases and Firebase for push notifications.",
      "Orchestrated complex location-based services integrating OpenStreetMap and Google Maps for live geospatial presence tracking.",
      "Engineered seamless background processes using a custom FCM handler for out-of-app notifications and dynamic routing.",
      "Implemented advanced API integrations including deep linking, automated UI testing via device preview, and multi-language internationalization."
    ],
    icon: Smartphone
  },
  {
    title: "Sales Tracking System (STS)",
    shortDescription: "A comprehensive B2B SaaS platform designed for robust inventory management, order tracking, and administrative control.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    fullStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    features: [
      "Architected a robust full-stack B2B SaaS platform using the Next.js App Router, TypeScript, Tailwind CSS, and Supabase.",
      "Implemented an enterprise-grade Role-Based Access Control (RBAC) system securing administrative dashboards and complex CRUD operations.",
      "Utilized Next.js Server Components and Server Actions to reduce client-side payloads while securely handling database mutations.",
      "Configured Edge Middleware to intercept and manage both localized routing (English/Turkish i18n) and authenticated user sessions globally."
    ],
    icon: Briefcase
  }
];`;

content = content.replace(projectsRegex, newProjects);
fs.writeFileSync("src/components/ProjectsSection.tsx", content, "utf8");

