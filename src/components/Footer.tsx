import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="#" className="text-xl font-bold tracking-tight">
                <span className="text-primary">S</span>hubham
              </a>
              <p className="text-sm text-muted-foreground">
                © {currentYear} Shubham Mulye. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:shubs.7m@gmail.com"
                className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Made with */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart size={14} className="text-destructive fill-destructive" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
