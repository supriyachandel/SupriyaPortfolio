"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "30+", label: "Admin Panels" },
    { value: "Multiple", label: "Mobile App APIs" },
    { value: "1", label: "SaaS Platform Built" },
    { value: "End-to-End", label: "Project Delivery" },
  ];

  return (
    <section className="py-16 border-y border-white/5 bg-background/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
