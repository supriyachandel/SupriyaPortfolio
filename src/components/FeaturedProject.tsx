"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";

export default function FeaturedProject() {
  const lifecycle = [
    "Architecture",
    "Backend Development",
    "Database",
    "APIs",
    "Admin Panel",
    "Automation",
    "Deployment",
    "Production"
  ];

  const techStack = [
    "Laravel", "PHP", "MySQL", "REST APIs", "Authentication", "Admin Panel", "AWS", "SaaS"
  ];

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4 text-accent text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Featured SaaS Product
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">TeamSetu — Cloud HRMS SaaS</h2>
          <p className="text-foreground/70 text-lg max-w-2xl leading-relaxed">
            A cloud-based HRMS SaaS platform designed to simplify employee management, attendance, leave management, payroll, HR operations and organizational workflows.
          </p>
          <p className="text-white font-medium mt-4">Built from the ground up.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Project Lifecycle</h3>
            <ul className="space-y-3 mb-8">
              {lifecycle.map((step, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-white">Technology Stack</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm rounded-md bg-white/5 border border-white/10 text-foreground/80">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://www.teemsetu.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black px-6 py-3 text-sm font-medium transition-colors hover:bg-gray-200 gap-2"
              >
                Visit TeamSetu <ExternalLink size={16} />
              </a>
              <a 
                href="https://admin.teemsetu.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg glass hover:bg-white/5 text-white px-6 py-3 text-sm font-medium transition-colors gap-2"
              >
                View Admin Panel <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            {/* Minimalist Browser/Device Mockup */}
            <div className="rounded-xl glass-panel p-2 border border-white/10 shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-2 mb-3 px-2 pt-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="w-full aspect-video bg-[#0B0E14] rounded-lg border border-white/5 relative overflow-hidden flex flex-col">
                <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4">
                  <div className="w-1/3 h-2 rounded bg-white/10" />
                </div>
                <div className="flex-1 flex items-center justify-center p-8">
                  {/* Abstract representation of a dashboard */}
                  <div className="w-full h-full grid grid-cols-3 gap-4">
                    <div className="col-span-1 flex flex-col gap-4">
                      <div className="h-8 rounded bg-white/5" />
                      <div className="flex-1 rounded bg-white/5" />
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 rounded bg-white/5 border border-white/5 group-hover:border-accent/30 transition-colors" />
                        <div className="h-24 rounded bg-white/5 border border-white/5 group-hover:border-accent/30 transition-colors" />
                      </div>
                      <div className="flex-1 rounded bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
