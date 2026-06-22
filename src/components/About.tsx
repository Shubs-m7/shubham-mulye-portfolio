"use client";

import { MapPin, GraduationCap, Briefcase, Code, TerminalSquare, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left"
          >
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block drop-shadow-[0_0_10px_rgba(30,209,229,0.8)]">
              Behind the Code
            </span>
            <h2 className="section-heading mb-6">
              Engineering Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Experiences</span>
            </h2>
          </motion.div>

          {/* Bento Box Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {/* Main Bio Card - Spans 2 cols on lg */}
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/40" />
              <Code className="w-10 h-10 text-primary mb-6 drop-shadow-[0_0_15px_rgba(30,209,229,0.5)]" />
              <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
              <p className="text-muted-foreground/90 leading-relaxed mb-4">
                I'm <strong className="text-white font-semibold">Shubham Mulye</strong>, a SaaS Developer experienced in building scalable web applications and business management platforms.
              </p>
              <p className="text-muted-foreground/90 leading-relaxed">
                Skilled in <strong className="text-primary">Next.js, React.js, TypeScript, Node.js, MongoDB, and PostgreSQL</strong>. I have strong experience translating complex business requirements into technical solutions and driving projects from planning to deployment.
              </p>
            </motion.div>

            {/* Current Role */}
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-3xl glass-panel-hover flex flex-col justify-center">
              <Briefcase className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Current Role</h4>
              <p className="text-lg font-semibold text-white">SaaS Developer</p>
              <p className="text-sm text-primary mt-2">@ WebMatrix</p>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-3xl glass-panel-hover flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 blur-[30px] rounded-full" />
              <MapPin className="w-8 h-8 text-primary mb-4 relative z-10" />
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 relative z-10">Location</h4>
              <p className="text-lg font-semibold text-white relative z-10">Thane, India</p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 glass-panel p-8 rounded-3xl glass-panel-hover flex items-center gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Education</h4>
                <p className="text-xl font-bold text-white mb-1">Bachelor of Computer Applications</p>
                <p className="text-blue-400 font-medium">IBSAR, Navi Mumbai (2023–2026)</p>
              </div>
            </motion.div>

            {/* Approach / Philosophy */}
            <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-2 glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <TerminalSquare className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">My Approach</h3>
              <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                Whether working on live client projects at <strong className="text-white">WebMatrix</strong> or delivering end-to-end solutions as a freelancer, I prioritize clean architecture, responsive design, and maintaining agile workflows under real-world constraints.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
