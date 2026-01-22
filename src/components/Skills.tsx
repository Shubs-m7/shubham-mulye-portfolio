import { 
  Database, 
  Server, 
  Layout, 
  Code2, 
  Smartphone,
  GitBranch,
  Terminal,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Core Stack",
    icon: Layers,
    skills: ["MongoDB", "Express.js", "React.js", "Next.js", "Node.js"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["TypeScript", "Tailwind CSS", "Responsive Design", "Framer Motion"],
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["REST APIs", "Authentication", "Server-Side Rendering", "CRUD Operations"],
    gradient: "from-violet-500/20 to-violet-500/5",
  },
  {
    title: "Tools & Workflow",
    icon: GitBranch,
    skills: ["Git & GitHub", "Postman", "VS Code", "Agile/Scrum"],
    gradient: "from-amber-500/20 to-amber-500/5",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/20">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Skills & Expertise
            </span>
            <h2 className="section-heading mb-6">
              Technologies I Work With
            </h2>
            <p className="section-subheading mx-auto">
              A comprehensive toolkit for building modern, scalable web applications from concept to deployment.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="card-glass rounded-2xl p-8 hover-lift group"
              >
                <div className="flex items-start gap-5">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} border border-border/50`}>
                    <category.icon className="text-foreground" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm bg-secondary/80 rounded-lg border border-border/50 text-muted-foreground group-hover:text-foreground transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
