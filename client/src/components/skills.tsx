import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Skill } from "@/lib/types";

const skills: Skill[] = [
  {
    id: "frontend",
    category: "Frontend",
    icon: "⚛️",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    id: "backend",
    category: "Backend",
    icon: "🔧",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  {
    id: "tools",
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: ["Git & GitHub", "Docker", "AWS", "Vercel", "Jest"]
  },
  {
    id: "design",
    category: "Design & UI/UX",
    icon: "🎨",
    skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Prototyping"]
  }
];

export default function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I work with modern technologies to build scalable, performant applications
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <Card
              key={skillGroup.id}
              className={`transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                isIntersecting 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4 text-blue-600">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2 text-slate-600">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
