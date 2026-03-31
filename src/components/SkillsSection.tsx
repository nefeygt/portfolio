import { Layers } from "lucide-react";

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
    </section>
  );
}
