"use client";

import { motion } from "framer-motion";
import { Smartphone, Database, Lock, Server, Repeat } from "lucide-react";
import Image from "next/image";

export default function MobileAppAPI() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">Backend Powering Mobile Experiences</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              I have developed backend APIs for multiple mobile applications, handling authentication, business logic, database operations, API communication, integrations and secure data exchange.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Lock className="w-5 h-5 text-indigo-600" />, label: "Authentication" },
                { icon: <Server className="w-5 h-5 text-indigo-600" />, label: "REST APIs" },
                { icon: <Database className="w-5 h-5 text-indigo-600" />, label: "Database" },
                { icon: <Repeat className="w-5 h-5 text-indigo-600" />, label: "Business Logic" },
                { icon: <Smartphone className="w-5 h-5 text-indigo-600" />, label: "Third-party APIs" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-slate-800">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-indigo-200 bg-indigo-50/80 shadow-xs">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="font-bold text-indigo-700">30+ Admin Panels & Mobile App API Experience</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] flex items-center justify-center">
              {/* Phone Mockup */}
              <motion.div 
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-20 w-[240px] h-[480px] rounded-[2.5rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden flex flex-col p-1.5"
              >
                <div className="absolute top-0 inset-x-0 h-5 bg-slate-900 mx-auto w-1/3 rounded-b-xl z-30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-800" />
                </div>
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white shadow-inner">
                  <Image 
                    src="/image.png" 
                    alt="Mobile App Interface" 
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                </div>
              </motion.div>

              {/* API Connection Lines */}
              <svg className="absolute w-full h-full z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 80,20 Q 90,50 80,80" fill="none" stroke="#6366f1" strokeOpacity="0.4" strokeWidth="0.75" strokeDasharray="2,2" />
                <path d="M 20,20 Q 10,50 20,80" fill="none" stroke="#a855f7" strokeOpacity="0.4" strokeWidth="0.75" strokeDasharray="2,2" />
              </svg>

              {/* Floating Data Nodes */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 z-30 px-3.5 py-1.5 rounded-full bg-white border border-indigo-200 shadow-md text-xs font-bold text-indigo-600"
              >
                JSON Response
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 left-4 z-30 px-3.5 py-1.5 rounded-full bg-white border border-purple-200 shadow-md text-xs font-bold text-purple-600"
              >
                JWT Token
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
