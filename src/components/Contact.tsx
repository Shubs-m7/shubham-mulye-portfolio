"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block drop-shadow-[0_0_10px_rgba(30,209,229,0.8)]">
              Get In Touch
            </span>
            <h2 className="section-heading mb-6">
              Let's Build Something<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Amazing Together</span>
            </h2>
            <p className="section-subheading mx-auto">
              Have a project in mind or looking for a developer? I'm always open to discussing new opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <motion.div 
                className="glass-panel rounded-3xl p-8 relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-bold mb-6 text-white relative z-10">Contact Information</h3>
                
                <div className="space-y-6 relative z-10">
                  <motion.a 
                    href="mailto:shubs.7m@gmail.com"
                    className="flex items-center gap-4 group/link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover/link:bg-primary/20 group-hover/link:border-primary/30 transition-all shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                      <Mail className="text-primary group-hover/link:text-white transition-colors" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium mb-1">Email</p>
                      <p className="font-semibold text-lg text-white group-hover/link:text-primary transition-colors">shubs.7m@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.div 
                    className="flex items-center gap-4 group/link"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium mb-1">Location</p>
                      <p className="font-semibold text-lg text-white">Thane, India</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Quick CTA */}
              <motion.div 
                className="glass-panel rounded-3xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <p className="text-muted-foreground font-medium mb-4">Prefer a direct email?</p>
                <Button size="lg" className="w-full rounded-full bg-white/10 hover:bg-primary/20 text-white border border-white/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(30,209,229,0.3)] group" asChild>
                  <a href="mailto:shubs.7m@gmail.com" className="font-semibold">
                    <Mail size={18} className="mr-2 text-primary group-hover:text-white transition-colors" />
                    Send an Email
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel rounded-3xl p-8"
            >
              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white/10 transition-all shadow-inner"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white/10 transition-all shadow-inner"
                    placeholder="you@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white/10 transition-all resize-none shadow-inner"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Button variant="hero" size="lg" className="w-full">
                    <Send size={18} />
                    Send Message
                    <ArrowRight size={18} />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
