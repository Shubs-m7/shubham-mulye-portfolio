import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative">
      <Navbar />
      
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Button variant="ghost" className="mb-6 hover:bg-white/5" asChild>
              <Link href="/#projects">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A complete list of my featured work, side projects, and open-source contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="glass-panel rounded-3xl overflow-hidden glass-panel-hover group relative flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col h-full relative z-10">
                  {/* Project Image/Placeholder */}
                  <div className="relative h-48 bg-white/[0.03] flex items-center justify-center overflow-hidden border-b border-white/5 shrink-0 group-hover:scale-[1.02] transition-transform duration-400">
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="text-6xl font-bold text-foreground/10">
                        {String(project.id).padStart(2, '0')}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                      <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                        <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                      </Link>
                      <div className="flex gap-2 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary transition-all"
                            title="Source Code"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.githubFrontendUrl && (
                          <a
                            href={project.githubFrontendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary transition-all flex items-center gap-1"
                            title="Frontend Source Code"
                          >
                            <Github size={18} />
                            <span className="text-[10px] font-bold">FE</span>
                          </a>
                        )}
                        {project.githubBackendUrl && (
                          <a
                            href={project.githubBackendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary transition-all flex items-center gap-1"
                            title="Backend Source Code"
                          >
                            <Github size={18} />
                            <span className="text-[10px] font-bold">BE</span>
                          </a>
                        )}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary transition-all"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 text-sm md:text-base">{project.description}</p>

                    <div className="mb-6 flex-grow">
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowUpRight className="text-primary shrink-0 mt-0.5" size={14} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-[10px] md:text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full bg-white/5 hover:bg-primary hover:text-primary-foreground border-white/10" asChild>
                        <Link href={`/projects/${project.id}`}>
                          Read Full Case Study
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
