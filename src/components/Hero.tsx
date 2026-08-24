"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Server, Database, Lock, TerminalSquare, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="home">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 mb-6 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-indigo-900 uppercase">
                BACKEND DEVELOPER • SAAS • API ENGINEERING
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15] text-slate-900"
            >
              Building Backend Systems That <span className="text-gradient">Scale With Your Business.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
            >
              I build scalable backend systems, REST APIs, SaaS platforms, integrations, and production-ready applications using Laravel, PHP, Node.js, and modern cloud infrastructure.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link href="#projects" className="inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent-hover text-white px-6 py-3 text-sm font-medium transition-colors shadow-lg shadow-accent/25">
                View My Work
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center rounded-lg glass hover:bg-slate-100 text-slate-800 px-6 py-3 text-sm font-medium transition-colors border border-slate-200 shadow-xs">
                Let&apos;s Work Together
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-600"
            >
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-600"/> 5+ Years Experience</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-600"/> 30+ Admin Panels</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-600"/> Mobile App APIs</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-600"/> SaaS Product Development</div>
            </motion.div>
          </div>
          
          {/* Right Visual */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center"
            >
              {/* Central Backend Node */}
              <div className="absolute z-10 w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xl glow">
                <Server className="w-10 h-10 text-accent" />
              </div>
              
              {/* Orbiting nodes */}
              <div className="absolute w-full h-full border border-indigo-200/60 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-3/4 h-3/4 border border-indigo-300/60 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Node: Client */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[20%] z-20 w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center"
              >
                <TerminalSquare className="w-5 h-5 text-slate-700" />
              </motion.div>
              
              {/* Node: Database */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[10%] right-[20%] z-20 w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center"
              >
                <Database className="w-5 h-5 text-indigo-600" />
              </motion.div>
              
              {/* Node: Auth */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[30%] right-[5%] z-20 w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center"
              >
                <Lock className="w-5 h-5 text-emerald-600" />
              </motion.div>

              {/* Connecting lines conceptually represented by the circles */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full opacity-60 blur-xl" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
