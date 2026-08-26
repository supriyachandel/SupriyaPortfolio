"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "30+", label: "Admin Panels" },
    { value: "20+", label: "Mobile App APIs" },
    { value: "99%", label: "Happy Clients" },
    { value: "100%", label: "Production Ready" },
  ];

  return (
    <section className="py-8 relative -mt-6 mb-12">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_35px_-5px_rgba(79,70,229,0.06)] p-6 md:p-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center ${index > 0 ? "pt-4 sm:pt-0 sm:pl-4" : ""}`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 whitespace-nowrap tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
