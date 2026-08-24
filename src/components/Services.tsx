"use client";

import { motion } from "framer-motion";
import { Server, Shield, Cloud, LayoutDashboard, Puzzle, Database, MonitorPlay, Activity } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Backend Development",
      description: "Laravel, PHP and Node.js based backend systems, business logic, architecture and scalable applications.",
      icon: <Server className="w-6 h-6 text-accent" />
    },
    {
      title: "REST API Development",
      description: "Secure REST APIs, authentication, token validation, mobile app APIs and third-party API integrations.",
      icon: <Shield className="w-6 h-6 text-accent" />
    },
    {
      title: "SaaS & Product Development",
      description: "End-to-end SaaS platforms, dashboards, business management systems and custom web applications.",
      icon: <Cloud className="w-6 h-6 text-accent" />
    },
    {
      title: "Admin Panel Development",
      description: "Custom admin dashboards, CRM systems, HRMS platforms, analytics dashboards and internal management systems.",
      icon: <LayoutDashboard className="w-6 h-6 text-accent" />
    },
    {
      title: "Third-Party Integrations",
      description: "Google APIs, ChatGPT, Gemini, HubSpot, Salesforce, GrowthHub, payment gateways and custom APIs.",
      icon: <Puzzle className="w-6 h-6 text-accent" />
    },
    {
      title: "Database & Performance",
      description: "MySQL, MongoDB, Redis basics, query optimization, database architecture, queue jobs and performance improvements.",
      icon: <Database className="w-6 h-6 text-accent" />
    },
    {
      title: "Cloud & Deployment",
      description: "AWS Linux servers, cPanel, Vercel, Render, production deployment and server configuration.",
      icon: <MonitorPlay className="w-6 h-6 text-accent" />
    },
    {
      title: "Maintenance & Optimization",
      description: "Debugging, refactoring, performance optimization, existing application improvements and production issue resolution.",
      icon: <Activity className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">What I Can Build</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Comprehensive backend solutions tailored to your business needs, from architecture to production deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
