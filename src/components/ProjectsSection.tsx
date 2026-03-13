import {
  ExternalLink,
  Folder,
  Gamepad2,
  Github,
  Code,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  featured?: boolean;
  comingSoon?: boolean;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Waio",
    subtitle: "2D Pixel Art Platformer Game",
    description:
      "Developed all game mechanics (player controls, physics interactions, level design) using object-oriented programming principles in C#. Configured Physics 2D settings for character movement, gravity, and collision detection. Optimized game performance and implemented a responsive user interface. Managed the entire Google Play Store publishing pipeline.",
    technologies: ["Unity", "C#", "OOP", "Physics 2D"],
    icon: Gamepad2,
    featured: true,
    github: "https://github.com/nefeygt",
    live: "#",
  },
  {
    title: "TaskBoard Pro",
    subtitle: "Full-Stack Project Management App",
    description:
      "A Kanban-style task management application with real-time collaborative boards, drag-and-drop functionality, and team workspaces. Features JWT authentication and role-based access control.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    icon: Code,
    comingSoon: true,
    github: "https://github.com/nefeygt",
  },
  {
    title: "TravelLog",
    subtitle: "Interactive Travel Journal",
    description:
      "A responsive web application for documenting and sharing travel experiences with interactive maps, photo galleries, and a rich text editor for writing journal entries.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Mapbox"],
    icon: Globe,
    comingSoon: true,
    github: "https://github.com/nefeygt",
    live: "#",
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <article
                key={i}
                className={`relative group flex flex-col rounded-xl border bg-card p-6 transition-all duration-300 overflow-hidden ${
                  project.featured
                    ? "border-accent/30 sm:col-span-2 lg:col-span-1 hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]"
                    : project.comingSoon
                      ? "border-border/50"
                      : "border-border hover:border-accent/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]"
                }`}
              >
                <div className={project.comingSoon ? "opacity-30 select-none" : ""}>
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`rounded-lg p-2 ${
                          project.featured
                            ? "bg-accent/10 text-accent"
                            : "bg-border/30 text-muted group-hover:text-accent"
                        } transition-colors`}
                      >
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      {project.featured && (
                        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-accent uppercase">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.github && !project.comingSoon && (
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
                      {project.live && !project.comingSoon && (
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

                  <h3 className="mb-1 text-lg font-semibold transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>

                  <p className="mb-3 text-xs font-medium text-accent/70">
                    {project.subtitle}
                  </p>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.comingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md bg-card/30 rounded-xl">
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-semibold tracking-widest text-accent uppercase shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                      Coming Soon
                    </span>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
