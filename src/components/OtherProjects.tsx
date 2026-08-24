"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function OtherProjects() {
  const projects = [
    {
      title: "Grateful Marketing",
      url: "https://www.grateful-marketing.com/",
      description: "Worked on a modern AI-focused marketing platform involving backend functionality, integrations, forms, workflows and third-party services.",
      tags: ["Backend Development", "API Integration", "AI Integration", "Third-party Services", "Forms & Workflows"]
    },
    {
      title: "My Little Home — E-commerce",
      url: "https://mylittlehome.com.sa/",
      description: "E-commerce platform supporting online product browsing, purchasing workflows, backend functionality and business operations.",
      tags: ["E-commerce", "Backend Development", "API Integration", "Database", "Admin Functionality", "Production Support"]
    }
  ];

  const categories = [
    "CRM Systems", "HRMS", "E-commerce", "Business Management", "Analytics Dashboards", "Internal Tools", "Mobile App Backends", "Custom APIs"
  ];

  return (
    <section className="py-24 relative bg-background/50 border-y border-white/5">
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
              className="p-8 rounded-2xl glass flex flex-col h-full hover:border-white/10 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
              <p className="text-foreground/70 mb-8 flex-1 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-foreground/80">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors gap-2 self-start"
              >
                Visit Website <ExternalLink size={16} />
              </a>
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">More Systems I&apos;ve Built</h2>
          <p className="text-foreground/60 mb-12">
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
                className="px-6 py-3 rounded-full border border-white/5 bg-white/5 text-sm md:text-base font-medium text-foreground/80 hover:bg-white/10 transition-colors cursor-default"
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
