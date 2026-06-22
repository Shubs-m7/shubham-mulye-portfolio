import { projects, getProjectById } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative">
      <Navbar />
      
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex-grow">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Button variant="ghost" className="mb-8 hover:bg-white/5" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 max-w-3xl">
                {project.title}
              </h1>
              
              <div className="flex gap-4 shrink-0">
                {project.githubUrl && (
                  <Button variant="outline" className="rounded-full glass-panel" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                )}
                {project.githubFrontendUrl && (
                  <Button variant="outline" className="rounded-full glass-panel" asChild>
                    <a href={project.githubFrontendUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-4 h-4" />
                      Frontend
                    </a>
                  </Button>
                )}
                {project.githubBackendUrl && (
                  <Button variant="outline" className="rounded-full glass-panel" asChild>
                    <a href={project.githubBackendUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-4 h-4" />
                      Backend
                    </a>
                  </Button>
                )}
                <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(30,209,229,0.3)]" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {project.image && (
            <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-16 border border-white/10 glass-panel group">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="100vw"
                priority={true}
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          )}

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 space-y-8">
              {project.fullDescription && (
                <div className="glass-panel p-8 rounded-3xl">
                  <h3 className="text-2xl font-semibold mb-6 text-white">About the Project</h3>
                  <div className="text-muted-foreground/90 leading-relaxed text-lg space-y-4">
                    {project.fullDescription.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              <div className="glass-panel p-8 rounded-3xl h-full">
                <h3 className="text-2xl font-semibold mb-6 text-white">Key Features & Contributions</h3>
                <ul className="space-y-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-muted-foreground/90 leading-relaxed text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-3xl h-full">
                <h3 className="text-xl font-semibold mb-6 text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
