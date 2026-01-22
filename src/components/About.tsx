import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.5,
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="section-heading mb-6">
              Crafting Digital Experiences<br />
              <span className="text-muted-foreground">That Drive Results</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Shubham Mulye</span>, a full-stack developer with hands-on experience building production-ready web applications for startups and clients. My focus is on creating scalable, performant solutions that solve real business problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Having worked on live client projects at <span className="text-foreground">Minimalistic Technology</span> and delivered end-to-end solutions as a freelancer at <span className="text-foreground">WebMatrix</span>, I understand what it takes to ship quality software under real-world constraints.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My stack centers on the <span className="text-primary">MERN ecosystem</span>—MongoDB, Express, React, and Node.js—with deep expertise in Next.js for server-rendered applications. I'm passionate about clean architecture, responsive design, and building interfaces that users love.
              </p>
            </motion.div>

            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Badlapur, Thane, India",
                },
                {
                  icon: Briefcase,
                  title: "Current Role",
                  content: "Freelance Developer @ WebMatrix",
                },
                {
                  icon: GraduationCap,
                  title: "Education",
                  content: "BCA (2023–2026)",
                  subContent: "IBSAR, Navi Mumbai",
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                  className="card-glass rounded-xl p-6 hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <card.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{card.title}</h4>
                      <p className="text-muted-foreground text-sm">{card.content}</p>
                      {card.subContent && (
                        <p className="text-muted-foreground text-xs">{card.subContent}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
