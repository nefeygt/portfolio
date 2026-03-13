import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "TechCorp GmbH",
    location: "Berlin, Germany",
    period: "2023 — Present",
    description:
      "Leading the frontend architecture for the core SaaS platform. Migrated legacy codebase to Next.js, improving performance by 40%. Mentoring a team of 4 engineers.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Full-Stack Developer",
    company: "StartupHub B.V.",
    location: "Amsterdam, Netherlands",
    period: "2021 — 2023",
    description:
      "Built and shipped multiple product features end-to-end. Designed RESTful APIs and implemented real-time collaboration features using WebSockets.",
    technologies: ["Node.js", "React", "PostgreSQL", "Docker"],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency AB",
    location: "Stockholm, Sweden",
    period: "2019 — 2021",
    description:
      "Developed responsive websites and e-commerce solutions for clients across various industries. Introduced automated testing practices to the team.",
    technologies: ["JavaScript", "Vue.js", "SCSS", "Firebase"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex items-center gap-3">
          <Briefcase size={20} className="text-accent" />
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <article
              key={i}
              className="group relative border-l-2 border-border pl-8 transition-colors hover:border-accent"
            >
              <div className="absolute -left-[7px] top-0 h-3 w-3 rounded-full border-2 border-border bg-background transition-colors group-hover:border-accent" />

              <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-sm text-muted">{exp.period}</span>
              </div>

              <p className="mb-3 text-sm text-accent">
                {exp.company} &middot; {exp.location}
              </p>

              <p className="mb-4 leading-relaxed text-muted">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {tech}
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
