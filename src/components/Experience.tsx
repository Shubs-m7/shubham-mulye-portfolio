import { Building2, Calendar, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "WebMatrix",
    role: "Freelance Developer",
    period: "Nov 2025 – Present",
    type: "Freelance",
    description: "Delivering scalable, production-ready web solutions for diverse clients.",
    achievements: [
      "Built complete HRM systems with admin and employee dashboards from scratch",
      "Developed responsive company websites with modern UI/UX principles",
      "Managed client relationships, timelines, and evolving requirements",
      "Implemented authentication, database design, and API integrations",
    ],
    current: true,
  },
  {
    company: "Minimalistic Technology",
    role: "MERN Stack Developer Intern",
    period: "Sep 2025 – Jan 2026",
    type: "Internship",
    description: "Contributed to live client projects using modern web technologies.",
    achievements: [
      "Built responsive, modern websites using Next.js and React",
      "Developed and integrated REST APIs with Node.js & Express",
      "Worked on production applications serving real users",
      "Followed agile workflow and maintained clean code practices",
    ],
    current: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const achievementVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.4,
    },
  }),
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Experience
            </span>
            <h2 className="section-heading mb-6">
              Where I've<br />
              <span className="text-muted-foreground">Made an Impact</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" 
            />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.company} 
                  variants={itemVariants}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                      exp.current 
                        ? "bg-primary border-primary shadow-[0_0_20px_4px_hsl(var(--primary)/0.4)]" 
                        : "bg-background border-primary/50"
                    }`} 
                  />

                  <motion.div 
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="card-glass rounded-2xl p-8"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Building2 className="text-primary" size={18} />
                          </div>
                          <h3 className="text-xl font-semibold">{exp.company}</h3>
                          {exp.current && (
                            <motion.span 
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full"
                            >
                              Current
                            </motion.span>
                          )}
                        </div>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">{exp.description}</p>

                    {/* Achievements */}
                    <motion.ul 
                      className="space-y-3"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          custom={i}
                          variants={achievementVariants}
                          className="flex items-start gap-3 text-sm"
                        >
                          <ArrowUpRight className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">{achievement}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
