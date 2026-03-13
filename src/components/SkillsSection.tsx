import { Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Go", "Python", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Vue.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "CI/CD", "Linux", "AWS"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex items-center gap-3">
          <Layers size={20} className="text-accent" />
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
