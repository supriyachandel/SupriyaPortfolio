"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  const timeline = [
    "Idea",
    "Architecture",
    "Development",
    "Integration",
    "Testing",
    "Deployment",
    "Production"
  ];

  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              From Business Requirements to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Production-Ready Systems.</span>
            </h2>
            <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
              <p>
                I&apos;m a Backend Developer with 5+ years of experience designing, developing, and maintaining scalable web applications. My work focuses on building robust backend architectures, REST APIs, database systems, integrations, automation, and production-ready applications.
              </p>
              <p>
                I enjoy solving complex technical problems, refactoring existing systems, improving performance, and turning business requirements into reliable software.
              </p>
              <p>
                I also have hands-on experience building SaaS products from scratch and managing the complete development lifecycle — from architecture and development to server setup, deployment, and production support.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 p-8 rounded-2xl glass-panel relative overflow-hidden"
          >
            <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-8 text-center">Development Lifecycle</h3>
            
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
              {timeline.map((item, index) => (
                <div key={item} className="flex items-center">
                  <span className="text-sm md:text-base font-medium px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground/90 whitespace-nowrap">
                    {item}
                  </span>
                  {index < timeline.length - 1 && (
                    <ArrowRight className="w-4 h-4 mx-2 md:mx-4 text-foreground/30 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
