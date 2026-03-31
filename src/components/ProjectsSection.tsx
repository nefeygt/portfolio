"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  shortDescription: string;
  technologies: string[];
  fullStack: string[];
  features: string[];
  icon: LucideIcon;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "No Ticket!",
    shortDescription: "An endless stealth-runner mobile game where a stowaway avoids ticket inspectors on a European train.",
    technologies: ["Unity", "C#", "Node.js", "MongoDB"],
    fullStack: ["Unity", "C#", "Node.js", "Express", "MongoDB", "React", "Vite"],
    features: [
      "Developed the mobile game client using Unity and C#, paired with a custom Full-Stack LiveOps architecture (Node.js/Express, MongoDB) and a React/Vite admin dashboard.",
      "Engineered a multi-stage Guard AI system encompassing custom dynamic Field of View (FOV) sightlines and smooth interpolation.",
      "Architected robust Unity Editor tools (LevelEditorWindow, LevelValidator) for automated level generation and Over-The-Air (OTA) updates.",
      "Implemented mobile-first performance optimizations utilizing heavy Object Pooling to eliminate runtime garbage collection spikes."
    ],
    icon: Gamepad2,
    liveUrl: "https://noticket-admin.onrender.com/"
  },
  {
    title: "PlanO",
    shortDescription: "A cross-platform mobile application for event planning, collaborative scheduling, and real-time group coordination.",
    technologies: ["Flutter", "Supabase", "Firebase", "Dart"],
    fullStack: ["Flutter", "Dart", "Riverpod", "Supabase", "PostgreSQL", "Firebase"],
    features: [
      "Built a cross-platform mobile app using Flutter (Dart) and Riverpod, integrating Supabase (PostgreSQL) for secure relational databases and Firebase for push notifications.",
      "Orchestrated complex location-based services integrating OpenStreetMap and Google Maps for live geospatial presence tracking.",
      "Engineered seamless background processes using a custom FCM handler for out-of-app notifications and dynamic routing.",
      "Implemented advanced API integrations including deep linking, automated UI testing via device preview, and multi-language internationalization."
    ],
    icon: Smartphone,
    //githubUrl: "https://github.com/PlanO-Organization/PlanO-Main",
    //liveUrl: "https://github.com/PlanO-Organization/PlanO-Main"
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
    icon: Briefcase,
    //githubUrl: "#",
    //liveUrl: "#"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  return (
    <section id="projects" className="px-6 py-24 relative">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex items-center gap-3">
          <Folder size={20} className="text-accent" />
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <article
                key={i}
                className="relative group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-lg bg-border/30 p-2 text-muted transition-colors group-hover:text-accent">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${project.title} source code`}
                        className="text-muted transition-all hover:text-foreground hover:scale-110"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${project.title} live demo`}
                        className="text-muted transition-all hover:text-foreground hover:scale-110"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold transition-colors group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto w-full rounded-md bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  View Details
                </button>
              </article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 w-full max-w-2xl overflow-y-auto max-h-[90vh] rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8 custom-scrollbar"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-muted transition-colors hover:bg-muted/20 hover:text-foreground focus:outline-none"
              >
                <X size={20} />
              </button>

              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3 text-accent shrink-0">
                  <selectedProject.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <div className="mt-2 flex gap-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="mb-3 text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.fullStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted/10 px-3 py-1.5 text-sm font-medium text-foreground/90 border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                  Key Engineering Achievements
                </h4>
                <ul className="space-y-3">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
