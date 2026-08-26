"use client";

import { motion } from "framer-motion";

export default function TechnicalExpertise() {
  const expertise = [
    "Scalable Architecture",
    "API-First Development",
    "Database Modeling",
    "Secure JWT & OAuth",
    "Performance Optimization",
    "Third-Party Integrations",
    "AI & LLM Integration",
    "Production Cloud Deployment",
    "Code Refactoring",
    "Query Optimization & Indexing",
    "Multi-Tenant SaaS",
    "Automated Workflows"
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/70 border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto text-center">
          {expertise.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.03
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3.5 rounded-2xl bg-white border border-slate-200/80 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md text-sm sm:text-base font-bold transition-all duration-200 cursor-default"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
