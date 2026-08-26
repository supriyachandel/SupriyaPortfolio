"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layout, Code2, Link as LinkIcon, Zap, Rocket } from "lucide-react";

export default function Experience() {
  const steps = [
    {
      num: "01",
      title: "Discover & Scope",
      description: "Deep dive into business goals, edge cases, data flows, and tech requirements.",
      icon: <Lightbulb className="w-5 h-5 text-indigo-600" />
    },
    {
      num: "02",
      title: "Architect & Model",
      description: "Design relational database schemas, REST endpoints, auth flows, and queues.",
      icon: <Layout className="w-5 h-5 text-purple-600" />
    },
    {
      num: "03",
      title: "Develop & Build",
      description: "Write clean, modular code with solid validation, business logic, and error handlers.",
      icon: <Code2 className="w-5 h-5 text-blue-600" />
    },
    {
      num: "04",
      title: "Integrate & Connect",
      description: "Sync payment gateways, third-party CRMs, AI models, and notification webhooks.",
      icon: <LinkIcon className="w-5 h-5 text-emerald-600" />
    },
    {
      num: "05",
      title: "Test & Optimize",
      description: "Perform query optimization, index tuning, security checks, and load tests.",
      icon: <Zap className="w-5 h-5 text-amber-600" />
    },
    {
      num: "06",
      title: "Deploy & Scale",
      description: "Deploy to production with zero downtime, automated backups, and log monitors.",
      icon: <Rocket className="w-5 h-5 text-rose-600" />
    }
  ];

  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
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
              WORKFLOW & PROCESS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">Build Systems</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            A systematic engineering approach ensuring every project delivers reliability, performance, and long-term scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.12)] hover:border-indigo-200 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-mono">
                    STEP {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
