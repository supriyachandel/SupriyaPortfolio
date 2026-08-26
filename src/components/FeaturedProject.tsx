"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Sparkles, Layers } from "lucide-react";
import Image from "next/image";

export default function FeaturedProject() {
  const lifecycle = [
    "Architecture & Database Design",
    "Node.js Backend & Business Logic",
    "High Performance MySQL Schema",
    "RESTful API Endpoints & Auth",
    "React.js Admin Dashboard",
    "Automated Attendance & Payroll",
    "AWS Production Cloud Hosting"
  ];

  const techStack = [
    "Node.js", "React.js", "MySQL", "REST APIs", "JWT Auth", "Admin Dashboard", "AWS EC2", "SaaS Architecture"
  ];

  return (
    <section className="py-24 relative" id="projects">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 mb-4 text-indigo-700 text-xs font-bold tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            FLAGSHIP SAAS PRODUCT
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 leading-[1.15]">
            TeemSetu — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">Cloud HRMS SaaS</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            A complete cloud-based HRMS SaaS platform engineered to simplify employee management, biometric attendance, leave pipelines, payroll automation, and organizational workflows with a React & Node.js architecture.
          </p>
        </motion.div>

        {/* Main Showcase Card */}
        <div className="rounded-[2.5rem] bg-white border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Details */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Live in Production
              </div>

              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600" />
                Engineering Highlights
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {lifecycle.map((step, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span className="truncate">{step}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                Technologies Utilized
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 border border-slate-200/80 text-slate-700 shadow-2xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="https://www.teemsetu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-7 py-3 text-sm font-bold transition-all shadow-lg shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] gap-2 cursor-pointer"
                >
                  <span>Visit TeemSetu</span>
                  <ExternalLink size={16} />
                </a>
                <a 
                  href="https://admin.teemsetu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-800 px-7 py-3 text-sm font-bold transition-all shadow-xs gap-2 cursor-pointer"
                >
                  <span>View Admin Portal</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Interactive Dashboard Screen */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="rounded-2xl bg-white p-3 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(79,70,229,0.15)] relative overflow-hidden group">
                <div className="flex items-center justify-between mb-3 px-2 pt-1 border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-200/60">
                    admin.teemsetu.in
                  </span>
                </div>
                <div className="w-full aspect-[16/10] bg-slate-50 rounded-xl border border-slate-200 relative overflow-hidden flex flex-col group-hover:border-indigo-300 transition-colors">
                  <Image 
                    src="/admin-panel.png" 
                    alt="TeemSetu Admin Panel Dashboard" 
                    fill 
                    className="object-contain object-top p-2 hover:scale-105 transition-transform duration-500 ease-out" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
