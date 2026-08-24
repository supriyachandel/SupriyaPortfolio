"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function FeaturedProject() {
  const lifecycle = [
    "Architecture",
    "Node.js Backend",
    "Database (MySQL)",
    "REST APIs",
    "React Admin Panel",
    "Automation",
    "AWS Deployment",
    "Production"
  ];

  const techStack = [
    "Node.js", "React.js", "MySQL", "REST APIs", "Authentication", "Admin Dashboard", "AWS", "SaaS Platform"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 mb-4 text-indigo-700 text-xs font-bold tracking-wider uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Featured SaaS Product
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">TeemSetu — Cloud HRMS SaaS</h2>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            A cloud-based HRMS SaaS platform designed to simplify employee management, attendance, leave management, payroll, HR operations and organizational workflows. The Admin dashboard is built seamlessly with React.js and Node.js.
          </p>
          <p className="text-gradient font-bold mt-4 text-xl">Built from the ground up.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl font-bold mb-4 text-slate-900">Project Lifecycle</h3>
            <ul className="space-y-3 mb-8">
              {lifecycle.map((step, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-4 text-slate-900">Technology Stack</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {techStack.map((tech) => (
                <span key={tech} className="px-3.5 py-1.5 text-sm font-medium rounded-lg bg-slate-100 border border-slate-200 text-slate-700 shadow-2xs">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://www.teemsetu.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-accent text-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent-hover gap-2 shadow-md shadow-accent/25"
              >
                Visit TeemSetu <ExternalLink size={16} />
              </a>
              <a 
                href="https://admin.teemsetu.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 px-6 py-3 text-sm font-semibold transition-colors gap-2 shadow-xs"
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
            <div className="rounded-2xl bg-white p-3 border border-slate-200 shadow-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-2 mb-3 px-2 pt-1">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="w-full aspect-video bg-slate-50 rounded-xl border border-slate-200 relative overflow-hidden flex flex-col group-hover:border-indigo-300 transition-colors">
                <Image 
                  src="/admin-panel.png" 
                  alt="TeemSetu Admin Panel Dashboard" 
                  fill 
                  className="object-contain object-top p-2" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
