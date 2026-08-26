"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, FolderGit2 } from "lucide-react";

export default function OtherProjects() {
  const projects = [
    {
      title: "LawSikho — Enterprise Systems",
      url: "#",
      description: "Collaborated with enterprise education leader LawSikho to build their automated Revenue Management Architecture and streamlined onboarding workflows.",
      tags: ["Revenue Management", "Onboarding System", "Backend Architecture", "API Integration", "Enterprise"]
    },
    {
      title: "Mobile App APIs (20+ Applications)",
      url: "#",
      description: "Engineered scalable REST APIs powering 20+ mobile applications including an on-demand Cab Booking System, Wine Swap platform, Dating app, and Clothing Delivery app.",
      tags: ["20+ Mobile APIs", "Cab Booking", "Wine Swap", "Dating App", "Delivery App", "Node.js"]
    },
    {
      title: "Grateful Marketing",
      url: "https://www.grateful-marketing.com/",
      description: "Developed AI-powered backend workflows, CRM syncing, webhook listeners, dynamic forms, and third-party marketing services for high-growth campaigns.",
      tags: ["Backend Development", "API Integration", "AI Integration", "Workflows"]
    },
    {
      title: "My Little Home — E-commerce",
      url: "https://mylittlehome.com.sa/",
      description: "Engineered backend order processing, inventory sync, secure payment checkouts, and admin dashboard controls for high-volume consumer e-commerce.",
      tags: ["E-commerce", "Database", "Admin Functionality", "Production Support"]
    }
  ];

  const categories = [
    "CRM Systems", "HRMS Platforms", "E-commerce", "Business Management", "Analytics Dashboards", "Internal Tools", "Mobile App Backends", "Custom APIs", "Payment Integrations"
  ];

  return (
    <section className="py-24 relative" id="portfolio">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-indigo-900 uppercase">
              PORTFOLIO & WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">Client Projects</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Proven track record of designing, building, and deploying mission-critical applications across various industries.
          </p>
        </motion.div>

        {/* Specific Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.12)] hover:border-indigo-200 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <FolderGit2 size={20} />
                  </div>
                  {project.url !== "#" && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200/80 hover:bg-indigo-50 hover:border-indigo-200"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Systems Built Pill Wall */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto p-10 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_45px_-10px_rgba(79,70,229,0.06)]"
        >
          <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Domain Experience</h3>
          <p className="text-slate-500 text-sm sm:text-base mb-8 max-w-xl mx-auto font-normal">
            Beyond these key projects, I&apos;ve engineered over 30+ bespoke admin portals and backend architectures across multiple business verticals.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2.5 rounded-full border border-slate-200 bg-slate-50/70 text-xs sm:text-sm font-semibold text-slate-700 hover:border-indigo-300 hover:bg-white hover:text-indigo-600 hover:shadow-xs transition-all cursor-default"
              >
                {category}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
