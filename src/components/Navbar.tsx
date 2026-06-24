"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, TerminalSquare, Briefcase, Folder, Mail } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { label: "About", href: "/#about", icon: User },
  { label: "Skills", href: "/#skills", icon: TerminalSquare },
  { label: "Experience", href: "/#experience", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "Contact", href: "/#contact", icon: Mail },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [imgSrc, setImgSrc] = useState("/logo.png");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 20;
    if (isScrolled !== scrolled) setIsScrolled(scrolled);
  });

  return (
    <>
      {/* Desktop Top Navbar & Mobile Logo */}
      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${
          isScrolled ? "top-4" : "top-0 md:top-4"
        }`}
      >
        <div 
          className={`w-full max-w-5xl transition-all duration-500 flex items-center justify-between ${
            isScrolled 
              ? "bg-background/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-full px-6 py-2" 
              : "bg-transparent border-transparent px-6 py-4"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group relative z-10">
            <img 
              src={imgSrc} 
              alt="Logo" 
              className={imgSrc === "/logo.png" 
                ? "w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(30,209,229,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                : "w-8 h-8 group-hover:scale-110 transition-transform duration-300 text-primary"
              }
              onError={() => {
                if (imgSrc === "/logo.png") {
                  setImgSrc("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231ed1e5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'/%3E%3C/svg%3E");
                }
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative z-10">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(30,209,229,0.8)]" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block relative z-10">
            <Button variant="hero" size="sm" className="rounded-full shadow-[0_0_15px_rgba(30,209,229,0.4)]" asChild>
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Bottom Navbar */}
      <motion.nav
        initial={{ y: "150%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="md:hidden fixed bottom-6 left-4 right-4 z-50 flex justify-center"
      >
        <div className="bg-background/60 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-full px-6 py-3 w-full max-w-sm flex items-center justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-foreground/70 hover:text-primary transition-colors p-2 flex flex-col items-center gap-1.5 relative z-10 active:scale-95"
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium tracking-wide">{link.label}</span>
              </a>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
