import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HRM System",
    description: "A comprehensive Human Resource Management platform with separate admin and employee dashboards, featuring attendance tracking, leave management, and payroll integration.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    features: ["Role-based access control", "Real-time dashboard analytics", "Employee self-service portal"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Company Website",
    description: "Modern, SEO-optimized corporate website built with Next.js featuring server-side rendering, dynamic content management, and blazing-fast performance scores.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    features: ["SSR for SEO", "Responsive design", "Performance optimized"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Client Portal",
    description: "Scalable client management portal with secure authentication, project tracking, invoice generation, and real-time notifications for seamless client communication.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    features: ["Real-time updates", "Secure file sharing", "Invoice management"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

const techVariants = {
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

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-secondary/20">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px]" />

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
              Projects
            </span>
            <h2 className="section-heading mb-6">
              Featured Work
            </h2>
            <p className="section-subheading mx-auto">
              Real-world applications built for clients and companies, solving actual business problems.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="card-glass rounded-2xl overflow-hidden group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Image/Placeholder */}
                  <motion.div 
                    className="relative h-64 md:h-auto bg-gradient-to-br from-primary/20 via-secondary to-secondary/50 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div 
                      className="text-6xl font-bold text-foreground/10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:bg-gradient-to-r" />
                  </motion.div>

                  {/* Project Content */}
                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                          aria-label="View source code"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={18} />
                        </motion.a>
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                          aria-label="View live project"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    {/* Features */}
                    <motion.div 
                      className="mb-6"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            custom={i}
                            variants={featureVariants}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <ArrowUpRight className="text-primary" size={14} />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={tech}
                          custom={i}
                          variants={techVariants}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
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

export default Projects;
