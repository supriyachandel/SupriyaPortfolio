"use client";

import { motion } from "framer-motion";
import { Smartphone, Database, Lock, Server, Repeat, CheckCircle2, Zap } from "lucide-react";
import Image from "next/image";

export default function MobileAppAPI() {
  const capabilities = [
    { icon: <Lock className="w-5 h-5 text-indigo-600" />, label: "Secure Authentication", desc: "JWT & OAuth2 token validation" },
    { icon: <Server className="w-5 h-5 text-purple-600" />, label: "High-Throughput APIs", desc: "Fast JSON payloads & caching" },
    { icon: <Database className="w-5 h-5 text-blue-600" />, label: "Database Syncing", desc: "Real-time query optimization" },
    { icon: <Repeat className="w-5 h-5 text-amber-600" />, label: "Business Logic", desc: "Order, cart, & checkout pipelines" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="mobile-apis">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-[140px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 mb-4 text-purple-700 text-xs font-bold tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              MOBILE API ARCHITECTURE
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.15]">
              Backend Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">Mobile Experiences</span>
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
              I develop resilient, high-speed backend APIs for cross-platform and native mobile applications, managing authentication, transaction pipelines, notification triggers, and third-party integrations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {capabilities.map((item, index) => (
                <div key={index} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_15px_-2px_rgba(15,23,42,0.03)] hover:border-indigo-200 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-0.5">{item.label}</h4>
                  <p className="text-xs text-slate-500 font-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-indigo-100 bg-white shadow-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-bold text-xs sm:text-sm text-slate-800">
                20+ Mobile App APIs Built & Deployed into Production
              </span>
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
              
              {/* Phone Mockup Frame */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-[260px] h-[520px] rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)] overflow-hidden flex flex-col p-1.5"
              >
                {/* Dynamic Island / Speaker Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 mx-auto w-1/3 rounded-b-2xl z-30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-800" />
                </div>

                <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-white shadow-inner">
                  <Image 
                    src="/image.png" 
                    alt="Mobile App Interface" 
                    fill
                    sizes="(max-width: 768px) 100vw, 260px"
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                </div>
              </motion.div>

              {/* Floating Data Badge 1 */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 right-2 sm:-right-4 z-30 px-4 py-2 rounded-2xl bg-white border border-indigo-100 shadow-xl flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-800 font-mono">200 OK • 42ms</span>
              </motion.div>
              
              {/* Floating Data Badge 2 */}
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 left-2 sm:-left-4 z-30 px-4 py-2 rounded-2xl bg-white border border-purple-100 shadow-xl flex items-center gap-2"
              >
                <Zap size={14} className="text-amber-500 fill-amber-500" />
                <span className="text-xs font-bold text-slate-800">REST API Ready</span>
              </motion.div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
