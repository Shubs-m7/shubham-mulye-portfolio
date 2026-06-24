"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Code2, Terminal, Database } from "lucide-react";
import { motion } from "framer-motion";
import HeroShader from "./HeroShader";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-transparent">
      {/* Amazing WebGL Shader Background */}
      <HeroShader />

      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-3xl">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-primary/30 shadow-[0_0_15px_rgba(30,209,229,0.2)]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium tracking-wide text-foreground/90">Available for new opportunities</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Building
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary/80 to-primary drop-shadow-sm">
                Next-Gen
              </span>
              <br />
              Web Experiences
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground/90 max-w-xl mb-10 leading-relaxed font-light"
            >
              I'm <strong className="text-foreground font-semibold">Shubham Mulye</strong>, a SaaS Developer experienced in building scalable web applications and business management platforms. Skilled in Next.js, React.js, TypeScript, Node.js, MongoDB, and PostgreSQL.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12"
            >
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_-5px_rgba(30,209,229,0.5)] transition-all hover:scale-105 group" asChild>
                <a href="/projects" className="text-base font-semibold flex items-center justify-center">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full border-white/20 hover:bg-white/5 bg-white/5 backdrop-blur-md transition-all hover:scale-105 flex items-center justify-center" asChild>
                <a href="#contact" className="text-base font-medium">Let's Talk</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Connect</span>
              <div className="h-px w-12 bg-white/20" />
              {[
                { icon: Github, href: "https://github.com/Shubs-m7" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-mulye-683672370/" },
                { icon: Mail, href: "mailto:shubs.7m@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(30,209,229,0.4)]"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Floating Glass Elements */}
          <div className="hidden lg:block relative h-[600px] w-full">
            <motion.div 
              animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] right-[10%] p-6 glass-panel rounded-2xl border-white/10 shadow-2xl z-20"
            >
              <Code2 className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(30,209,229,0.5)]" />
            </motion.div>

            <motion.div 
              animate={{ y: [20, -20, 20], rotate: [2, -2, 2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[45%] left-[5%] p-8 glass-panel rounded-3xl border-primary/20 shadow-[0_0_40px_rgba(30,209,229,0.15)] z-10"
            >
              <div className="flex flex-col gap-4">
                <Terminal className="w-10 h-10 text-white" />
                <div className="h-2 w-16 bg-white/20 rounded-full" />
                <div className="h-2 w-24 bg-primary/60 rounded-full shadow-[0_0_10px_rgba(30,209,229,0.5)]" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[20%] right-[25%] p-5 glass-panel rounded-xl border-white/10 shadow-xl z-30"
            >
              <Database className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
            </motion.div>
            
            {/* Decorative Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
               <motion.path 
                 d="M 120 300 Q 250 250 350 400" 
                 stroke="currentColor" 
                 strokeWidth="2"
                 fill="none"
                 className="text-primary"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
               />
               <motion.path 
                 d="M 350 150 Q 250 200 150 350" 
                 stroke="currentColor" 
                 strokeWidth="2"
                 strokeDasharray="4 4"
                 fill="none"
                 className="text-white"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
               />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
