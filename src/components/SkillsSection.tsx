import { Award, GraduationCap, Layers } from "lucide-react";

const education = [
  {
    degree: "B.S. Information Systems and Technologies (CTIS)",
    school: "Bilkent University",
    note: "Comprehensive Scholarship",
    period: "2022 — 2026",
    location: "Ankara, Turkey",
  },
  {
    degree: "B.S. Business Information Technology",
    school: "Haaga-Helia University",
    note: "Exchange Semester",
    period: "01/2025 — 05/2025",
    location: "Helsinki, Finland",
  },
];

const certifications = [
  { name: "ISTQB\u00ae CTFL", detail: "ISTQB Certified Tester Foundation Level" },
];

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C#", "Java", "JavaScript", "HTML/CSS", "Python", "C", "R"],
  },
  {
    title: "Frameworks",
    skills: [".NET", "Django", "FastAPI", "jQuery"],
  },
  {
    title: "Data Management",
    skills: ["MySQL", "Oracle", "PostgreSQL"],
  },
  {
    title: "Tools & Networking",
    skills: ["Unity", "Git", "Jira", "AWS", "CCNA 1", "CCNA 2"],
  },
  {
    title: "Know-how",
    skills: [
      "Object-Oriented Programming",
      "API Integration",
      "Linux Systems",
      "UI/UX Design",
      "Game Development",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* ── Education & Certifications ── */}
        <div className="mb-20">
          <div className="mb-12 flex items-center gap-3">
            <GraduationCap size={20} className="text-accent" />
            <h2 className="text-2xl font-bold tracking-tight">
              Education & Certifications
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.06)]"
              >
                <h3 className="mb-1 text-base font-semibold">{edu.degree}</h3>
                <p className="mb-3 text-sm font-medium text-accent">
                  {edu.school}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <span className="rounded-full border border-border px-2.5 py-0.5">
                    {edu.period}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-0.5">
                    {edu.location}
                  </span>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-accent">
                    {edu.note}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.06)]"
              >
                <div className="rounded-lg bg-accent/10 p-2.5 text-accent">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">{cert.name}</p>
                  <p className="text-xs text-muted">{cert.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Technical Skills ── */}
        <div>
          <div className="mb-12 flex items-center gap-3">
            <Layers size={20} className="text-accent" />
            <h2 className="text-2xl font-bold tracking-tight">
              Technical Skills
            </h2>
          </div>

          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
