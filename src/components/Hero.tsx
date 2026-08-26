"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Server, Database, Smartphone, Code2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function Hero() {
  const { openContactModal } = useContactModal();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" id="home">
      {/* Soft lavender/periwinkle background ambient glow */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-100/50 via-purple-50/30 to-transparent -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-200/30 to-purple-200/20 rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Main Hero Card */}
        <div className="rounded-[2.5rem] bg-white border border-slate-200/80 shadow-[0_20px_70px_-15px_rgba(79,70,229,0.08)] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-[54%] flex flex-col items-start text-left">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100 mb-6 shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-indigo-900 uppercase">
                  BACKEND DEVELOPER • SAAS • API ENGINEERING
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-slate-900 leading-[1.18] mb-6"
              >
                Building Backend Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">Scale With Your Business.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-slate-500 mb-8 max-w-lg leading-relaxed font-normal"
              >
                I build scalable backend systems, REST APIs, SaaS platforms, integrations, and production-ready applications using Laravel, PHP, Node.js, and modern cloud infrastructure.
              </motion.p>
              
              {/* Call to Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-5"
              >
                <button 
                  type="button"
                  onClick={openContactModal}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-7 py-3 text-sm font-semibold shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  Let&apos;s Work Together
                </button>
                <Link 
                  href="#projects" 
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors group px-4 py-3"
                >
                  <span>View My Work</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>

            </div>
            
            {/* Right Visual Circular Composition */}
            <div className="w-full lg:w-[46%] flex justify-center items-center relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] flex items-center justify-center"
              >
                
                {/* Subtle outer ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/40 via-indigo-200/30 to-blue-200/20 rounded-full blur-2xl -z-10" />

                {/* Gradient Accent Arc Ring */}
                <svg className="absolute -inset-3.5 w-[calc(100%+28px)] h-[calc(100%+28px)] -rotate-45 pointer-events-none" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="url(#hero-gradient)"
                    strokeWidth="2.5"
                    strokeDasharray="95 180"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Main Circular Portrait Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 border-[5px] border-white shadow-[0_20px_50px_-15px_rgba(79,70,229,0.15)]">
                  <Image 
                    src="/myimage.png" 
                    alt="Supriya - Backend Developer" 
                    fill 
                    priority
                    sizes="(max-width: 768px) 290px, 400px"
                    className="object-cover object-[center_16%] scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Floating Node 1: Left */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)] flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    <Code2 size={14} />
                  </div>
                  <span className="text-xs font-bold text-slate-800">REST APIs</span>
                </motion.div>

                {/* Floating Node 2: Top Right */}
                <motion.div 
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -right-2 sm:-right-4 top-8 sm:top-10 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)] flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Server size={14} />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Backend</span>
                </motion.div>

                {/* Floating Node 3: Bottom Right */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-2 sm:-right-4 bottom-8 sm:bottom-10 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)] flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Database size={14} />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Database</span>
                </motion.div>

              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
