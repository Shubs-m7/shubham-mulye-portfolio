import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="section-heading mb-6">
              Crafting Digital Experiences<br />
              <span className="text-muted-foreground">That Drive Results</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Shubham Mulye</span>, a full-stack developer with hands-on experience building production-ready web applications for startups and clients. My focus is on creating scalable, performant solutions that solve real business problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Having worked on live client projects at <span className="text-foreground">Minimalistic Technology</span> and delivered end-to-end solutions as a freelancer at <span className="text-foreground">WebMatrix</span>, I understand what it takes to ship quality software under real-world constraints.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My stack centers on the <span className="text-primary">MERN ecosystem</span>—MongoDB, Express, React, and Node.js—with deep expertise in Next.js for server-rendered applications. I'm passionate about clean architecture, responsive design, and building interfaces that users love.
              </p>
            </div>

            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-4">
              <div className="card-glass rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground text-sm">Badlapur, Thane, India</p>
                  </div>
                </div>
              </div>

              <div className="card-glass rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Current Role</h4>
                    <p className="text-muted-foreground text-sm">Freelance Developer @ WebMatrix</p>
                  </div>
                </div>
              </div>

              <div className="card-glass rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Education</h4>
                    <p className="text-muted-foreground text-sm">BCA (2023–2026)</p>
                    <p className="text-muted-foreground text-xs">IBSAR, Navi Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
