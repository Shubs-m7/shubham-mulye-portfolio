"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";


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
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

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
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block drop-shadow-[0_0_10px_rgba(30,209,229,0.8)]">
              Projects
            </span>
            <h2 className="section-heading mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Work</span>
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="glass-panel rounded-3xl overflow-hidden glass-panel-hover group relative flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col h-full relative z-10">
                  {/* Project Image/Placeholder */}
                  <motion.div 
                    className="relative h-48 bg-white/[0.03] flex items-center justify-center overflow-hidden border-b border-white/5 shrink-0"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <motion.div 
                        className="text-6xl font-bold text-foreground/10"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </motion.div>

                  {/* Project Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                      <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                        <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                      </Link>
                      <div className="flex gap-2 shrink-0">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                            aria-label="View source code"
                            title="Source Code"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={18} />
                          </motion.a>
                        )}
                        {project.githubFrontendUrl && (
                          <motion.a
                            href={project.githubFrontendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all flex items-center gap-1"
                            aria-label="View frontend source code"
                            title="Frontend Source Code"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={18} />
                            <span className="text-[10px] font-bold">FE</span>
                          </motion.a>
                        )}
                        {project.githubBackendUrl && (
                          <motion.a
                            href={project.githubBackendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all flex items-center gap-1"
                            aria-label="View backend source code"
                            title="Backend Source Code"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={18} />
                            <span className="text-[10px] font-bold">BE</span>
                          </motion.a>
                        )}
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

                    <p className="text-muted-foreground mb-6 text-sm md:text-base line-clamp-3">{project.description}</p>

                    {/* Features */}
                    <motion.div 
                      className="mb-6 flex-grow"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <motion.li 
                            key={i} 
                            custom={i}
                            variants={featureVariants}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <ArrowUpRight className="text-primary shrink-0" size={14} />
                            <span className="line-clamp-1">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Tech Stack */}
                    <div className="mt-auto">
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {project.techStack.slice(0, 4).map((tech, i) => (
                          <motion.span
                            key={tech}
                            custom={i}
                            variants={techVariants}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 py-1 text-[10px] md:text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-1 text-[10px] md:text-xs font-medium bg-white/5 text-muted-foreground rounded-full border border-white/10">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </motion.div>
                      
                      <Button variant="ghost" className="w-full justify-between hover:bg-white/5 group/btn" asChild>
                        <Link href={`/projects/${project.id}`}>
                          View Details
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* See More Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <Button size="lg" className="rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white h-14 px-8 group" asChild>
              <Link href="/projects">
                See All Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
