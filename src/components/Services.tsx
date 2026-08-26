"use client";

import { motion } from "framer-motion";
import { Server, Shield, Cloud, LayoutDashboard, Puzzle, Database, MonitorPlay, Activity } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Backend Development",
      description: "Laravel, PHP, Node.js and FastAPI backend systems, business logic, scalable microservices, and robust architectures.",
      icon: <Server className="w-6 h-6 text-indigo-600" />,
      badge: "Core Expertise",
      color: "from-indigo-500/10 to-purple-500/10 text-indigo-700 border-indigo-100"
    },
    {
      title: "REST API Development",
      description: "Secure RESTful APIs, JWT/OAuth authentication, mobile app backend endpoints, rate limiting, and API documentation.",
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      badge: "High Performance",
      color: "from-purple-500/10 to-pink-500/10 text-purple-700 border-purple-100"
    },
    {
      title: "SaaS & Product Development",
      description: "End-to-end SaaS platforms, multi-tenant databases, recurring subscription billing, and custom web products.",
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      badge: "End-to-End",
      color: "from-blue-500/10 to-cyan-500/10 text-blue-700 border-blue-100"
    },
    {
      title: "Admin Panel Development",
      description: "Custom admin dashboards, CRM systems, HRMS platforms, analytics dashboards, and role-based access control.",
      icon: <LayoutDashboard className="w-6 h-6 text-emerald-600" />,
      badge: "30+ Delivered",
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-700 border-emerald-100"
    },
    {
      title: "Third-Party Integrations",
      description: "HubSpot CRM, Salesforce, Google APIs, AI (ChatGPT, Gemini), payment gateways (Stripe, Razorpay), and webhooks.",
      icon: <Puzzle className="w-6 h-6 text-amber-600" />,
      badge: "Seamless Sync",
      color: "from-amber-500/10 to-orange-500/10 text-amber-700 border-amber-100"
    },
    {
      title: "Database & Performance",
      description: "PostgreSQL, MySQL, MongoDB, Redis caching, schema design, query optimization, indexing, and queue jobs.",
      icon: <Database className="w-6 h-6 text-rose-600" />,
      badge: "Optimized",
      color: "from-rose-500/10 to-pink-500/10 text-rose-700 border-rose-100"
    },
    {
      title: "Cloud & Infrastructure",
      description: "AWS EC2/S3, Linux server setup, Railway, Render, Vercel, CI/CD pipelines, and zero-downtime deployments.",
      icon: <MonitorPlay className="w-6 h-6 text-sky-600" />,
      badge: "Production Ready",
      color: "from-sky-500/10 to-indigo-500/10 text-sky-700 border-sky-100"
    },
    {
      title: "Maintenance & Refactoring",
      description: "Codebase refactoring, performance profiling, legacy system upgrades, security audits, and bug fixes.",
      icon: <Activity className="w-6 h-6 text-violet-600" />,
      badge: "Reliable",
      color: "from-violet-500/10 to-indigo-500/10 text-violet-700 border-violet-100"
    }
  ];

  return (
    <section className="py-24 relative" id="services">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-200/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

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
              SERVICES & CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            What I Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Build For You</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Comprehensive backend solutions tailored to your business needs, from high-performance architecture to production deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.12)] hover:border-indigo-200 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} border flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xs`}>
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wider group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2.5 text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
