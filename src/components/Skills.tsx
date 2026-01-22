import { 
  Server, 
  Layout, 
  GitBranch,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const skillTagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/20">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Skills & Expertise
            </span>
            <h2 className="section-heading mb-6">
              Technologies I Work With
            </h2>
            <p className="section-subheading mx-auto">
              A comprehensive toolkit for building modern, scalable web applications from concept to deployment.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="card-glass rounded-2xl p-8 hover-lift group"
              >
                <div className="flex items-start gap-5">
                  <motion.div 
                    className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} border border-border/50`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <category.icon className="text-foreground" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          custom={skillIndex}
                          variants={skillTagVariants}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 text-sm bg-secondary/80 rounded-lg border border-border/50 text-muted-foreground group-hover:text-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
