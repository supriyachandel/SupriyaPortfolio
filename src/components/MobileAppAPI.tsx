"use client";

import { motion } from "framer-motion";
import { Smartphone, Database, Lock, Server, Repeat } from "lucide-react";

export default function MobileAppAPI() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Backend Powering Mobile Experiences</h2>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              I have developed backend APIs for multiple mobile applications, handling authentication, business logic, database operations, API communication, integrations and secure data exchange.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Lock className="w-5 h-5 text-accent" />, label: "Authentication" },
                { icon: <Server className="w-5 h-5 text-accent" />, label: "REST APIs" },
                { icon: <Database className="w-5 h-5 text-accent" />, label: "Database" },
                { icon: <Repeat className="w-5 h-5 text-accent" />, label: "Business Logic" },
                { icon: <Smartphone className="w-5 h-5 text-accent" />, label: "Third-party APIs" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center border-white/5 text-white">
                    {item.icon}
                  </div>
                  <span className="font-medium text-white">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-accent/20 bg-accent/5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="font-semibold text-accent">30+ Admin Panels & Mobile App API Experience</span>
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
              <div className="absolute z-20 w-[240px] h-[480px] rounded-[2.5rem] border-4 border-gray-800 bg-[#09090b] shadow-2xl overflow-hidden flex flex-col p-4 glow">
                <div className="w-1/3 h-6 bg-gray-800 mx-auto rounded-b-xl mb-6" />
                <div className="space-y-4">
                  <div className="h-24 bg-white/5 rounded-xl animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-white/5 rounded-xl animate-pulse delay-75" />
                    <div className="h-16 bg-white/5 rounded-xl animate-pulse delay-100" />
                  </div>
                  <div className="h-32 bg-white/5 rounded-xl animate-pulse delay-150" />
                </div>
              </div>

              {/* API Connection Lines */}
              <svg className="absolute w-full h-full z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 80,20 Q 90,50 80,80" fill="none" stroke="currentColor" className="text-accent/30" strokeWidth="0.5" strokeDasharray="2,2" />
                <path d="M 20,20 Q 10,50 20,80" fill="none" stroke="currentColor" className="text-purple-500/30" strokeWidth="0.5" strokeDasharray="2,2" />
              </svg>

              {/* Floating Data Nodes */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 z-30 px-3 py-1.5 rounded-full glass border border-accent/30 text-xs font-semibold text-accent"
              >
                JSON Response
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 left-4 z-30 px-3 py-1.5 rounded-full glass border border-purple-400/30 text-xs font-semibold text-purple-400"
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
