"use client";

import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden bg-transparent">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-primary/20 blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href="#" className="flex items-center gap-2 group relative z-10">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(30,209,229,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231ed1e5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'/%3E%3C/svg%3E";
                  }}
                />
              </a>
              <p className="text-sm text-white/50">
                © {currentYear} Shubham Mulye. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Mail, href: "mailto:shubs.7m@gmail.com", label: "Email" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_rgba(30,209,229,0.3)] hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Made with */}
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-sm text-white/70 flex items-center gap-2">
                Made with <Heart size={14} className="text-primary fill-primary animate-pulse" /> in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
