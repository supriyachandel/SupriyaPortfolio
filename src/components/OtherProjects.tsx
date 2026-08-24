"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function OtherProjects() {
  const projects = [
    {
      title: "LawSikho — Enterprise Systems",
      url: "#",
      description: "Worked with big enterprise clients like LawSikho. Developed their core Revenue Management System and streamlined Onboarding System.",
      tags: ["Revenue Management", "Onboarding System", "Backend Architecture", "API Integration", "Enterprise"]
    },
    {
      title: "Mobile App APIs (20+ Apps)",
      url: "#",
      description: "Created scalable backend APIs for over 20 mobile applications, including a Cab Booking System, Wine Swap app, Dating app, and Clothing Delivery app.",
      tags: ["20+ Mobile APIs", "Cab Booking", "Wine Swap", "Dating App", "Delivery App", "Node.js"]
    },
    {
      title: "Grateful Marketing",
      url: "https://www.grateful-marketing.com/",
      description: "Worked on a modern AI-focused marketing platform involving backend functionality, integrations, forms, workflows and third-party services.",
      tags: ["Backend Development", "API Integration", "AI Integration", "Workflows"]
    },
    {
      title: "My Little Home — E-commerce",
      url: "https://mylittlehome.com.sa/",
      description: "E-commerce platform supporting online product browsing, purchasing workflows, backend functionality and business operations.",
      tags: ["E-commerce", "Database", "Admin Functionality", "Production Support"]
    }
  ];

  const categories = [
    "CRM Systems", "HRMS", "E-commerce", "Business Management", "Analytics Dashboards", "Internal Tools", "Mobile App Backends", "Custom APIs"
  ];

  return (
    <section className="py-24 relative bg-slate-100/50 border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Specific Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 flex flex-col h-full transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{project.title}</h3>
              <p className="text-slate-600 mb-8 flex-1 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              {project.url !== "#" && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors gap-2 self-start"
                >
                  Visit Website <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* More Systems Built */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">More Systems I&apos;ve Built</h2>
          <p className="text-slate-600 mb-12 text-base md:text-lg">
            Beyond featured projects, I&apos;ve worked on 30+ custom admin panels and backend systems across different business domains.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full border border-slate-200 bg-white shadow-xs text-sm md:text-base font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition-all cursor-default"
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
