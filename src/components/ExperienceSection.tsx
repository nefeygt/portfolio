import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "Insider",
    period: "08/2025 — 01/2026",
    bullets: [
      "Developed solutions/algorithms for global companies.",
      "Provided technical support for user segmentation, web services, and growth management projects.",
      "Leveraged expertise in JavaScript, jQuery, HTML, and CSS to deliver advanced development projects.",
      "Optimized application performance and code efficiency.",
      "Applied Agile (Kanban/Scrum) methodologies and utilized Jira for effective project implementation and management.",
      "Contributed to the successful implementation of front-end best practices such as component design and accessibility standards, improving code maintainability.",
    ],
    technologies: ["JavaScript", "jQuery", "HTML", "CSS", "Jira", "Agile"],
  },
  {
    role: "Test Camp Participant",
    company: "Commencis",
    period: "04/2025 — 05/2025",
    bullets: [
      "Learned the fundamentals of software testing and its role in the SDLC.",
    ],
    technologies: ["Software Testing", "SDLC"],
  },
  {
    role: "Software Engineer Intern",
    company: "Wisersense Information Technologies",
    period: "07/2024 — 08/2024",
    bullets: [
      "Developed an automated mail sending project using ASP.NET framework.",
      "Worked on databases with PostgreSQL and pgAdmin4.",
      "Worked on Linux systems to build and deploy IoT projects.",
    ],
    technologies: ["ASP.NET", "PostgreSQL", "Linux", "IoT"],
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 h-full w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <article key={i} className="group relative pl-10">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-border bg-background transition-colors group-hover:border-accent group-hover:bg-accent/10">
                  <div className="h-1.5 w-1.5 rounded-full bg-border transition-colors group-hover:bg-accent" />
                </div>

                {/* Card */}
                <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.06)]">
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="shrink-0 rounded-full border border-border px-3 py-0.5 text-xs text-muted">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mb-4 text-sm font-medium text-accent">
                    {exp.company}
                  </p>

                  <ul className="mb-5 space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
