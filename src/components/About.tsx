"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, Rocket, ShieldCheck } from "lucide-react";

export default function About() {
  const steps = [
    { num: "01", title: "Idea & Requirements", desc: "Understanding scope, data schemas, and business logic" },
    { num: "02", title: "System Architecture", desc: "Database modeling, API design, and security blueprint" },
    { num: "03", title: "Core Development", desc: "Clean MVC, robust validation, queue jobs, and modular code" },
    { num: "04", title: "Integrations & APIs", desc: "CRMs, AI, payment gateways, and custom third-party endpoints" },
    { num: "05", title: "Testing & QA", desc: "Stress testing, auth validation, and edge case handling" },
    { num: "06", title: "Production Deployment", desc: "Zero-downtime release on AWS, Linux, or Railway" }
  ];

  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-purple-900 uppercase">
                ENGINEERING PHILOSOPHY
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.18]">
              From Business Requirements to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">Production-Ready Systems.</span>
            </h2>
            
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Architecture First</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Scalable database models, clean MVC patterns, and modular separation of concerns.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Security & Auth</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Role-based access, JWT validation, sanitized inputs, and encrypted credentials.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">SaaS & Scale</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Multi-tenant databases, background queue workers, and cron job scheduling.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Production Ready</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Seamless cloud deployments with automated monitoring and error handling.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Development Lifecycle Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_45px_-10px_rgba(79,70,229,0.06)] relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-900">The Development Lifecycle</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">A structured, proven process ensuring zero friction from requirement to deployment.</p>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 uppercase tracking-wider">
              Proven Workflow
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div 
                key={step.num}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-indigo-600 shadow-2xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
