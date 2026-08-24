"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layout, Code2, Link as LinkIcon, Zap, Rocket } from "lucide-react";

export default function Experience() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      description: "Understand the business requirements and technical problem.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      num: "02",
      title: "Architect",
      description: "Design backend architecture, database structure, APIs and integrations.",
      icon: <Layout className="w-6 h-6" />
    },
    {
      num: "03",
      title: "Develop",
      description: "Build clean, maintainable and scalable systems.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      num: "04",
      title: "Integrate",
      description: "Connect APIs, payment gateways, AI services and third-party platforms.",
      icon: <LinkIcon className="w-6 h-6" />
    },
    {
      num: "05",
      title: "Optimize",
      description: "Test, debug, refactor and optimize application performance.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      num: "06",
      title: "Deploy",
      description: "Configure infrastructure and deploy production-ready applications.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How I Build</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A systematic approach to turning complex business requirements into reliable software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {/* Connecting Line (desktop only conceptually, drawn via borders) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-white/5 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl glass-panel group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-foreground/80 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                {step.icon}
              </div>
              <div className="text-xs font-bold text-accent mb-2 tracking-widest uppercase">{step.num}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
