import { ExternalLink, Folder, Github } from "lucide-react";

const projects = [
  {
    title: "CloudSync Dashboard",
    description:
      "Real-time cloud infrastructure monitoring dashboard with interactive graphs, alerting, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "D3.js", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "DevFlow CLI",
    description:
      "A developer productivity CLI tool that automates repetitive tasks like scaffolding, linting, and deployment pipelines.",
    technologies: ["Node.js", "Commander.js", "Shell"],
    github: "https://github.com",
  },
  {
    title: "Marketplace API",
    description:
      "High-performance REST API for an online marketplace with full-text search, payment integration, and role-based auth.",
    technologies: ["Go", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "DesignKit UI",
    description:
      "An accessible, themeable component library built for React, with full Storybook documentation and CI/CD publishing.",
    technologies: ["React", "Storybook", "Radix UI", "CSS Modules"],
    github: "https://github.com",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex items-center gap-3">
          <Folder size={20} className="text-accent" />
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-4 flex items-start justify-between">
                <Folder
                  size={28}
                  className="text-accent"
                  strokeWidth={1.5}
                />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-accent">
                {project.title}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted"
                  >
                    {tech}
                    {tech !==
                      project.technologies[project.technologies.length - 1] &&
                      " ·"}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
