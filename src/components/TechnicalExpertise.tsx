"use client";

import { motion } from "framer-motion";

export default function TechnicalExpertise() {
  const expertise = [
    "Scalable Architecture",
    "API-First Development",
    "Database Design",
    "Secure Authentication",
    "Performance Optimization",
    "Third-Party Integrations",
    "AI Integration",
    "Production Deployment",
    "Code Refactoring",
    "Debugging & Maintenance"
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#09090b]">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {expertise.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-white/20 hover:text-white transition-colors duration-500 cursor-default"
            >
              {item}
              {index < expertise.length - 1 && <span className="hidden lg:inline text-white/5 ml-8">•</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
