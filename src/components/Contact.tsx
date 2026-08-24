"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface CustomSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function CustomSelect({ label, value, options, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={dropdownRef}>
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-slate-50 border rounded-lg px-4 py-3 text-slate-900 text-left font-medium transition-all duration-200 cursor-pointer ${
          isOpen
            ? "border-indigo-600 ring-2 ring-indigo-500/15 bg-white shadow-xs"
            : "border-slate-200 hover:border-slate-300 hover:bg-white"
        }`}
      >
        <span className="truncate">{value}</span>
        <ChevronDown
          size={18}
          className={`text-slate-500 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180 text-indigo-600" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 right-0 z-50 mt-1 max-h-60 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 focus:outline-none"
          >
            {options.map((option) => {
              const isSelected = option === value;
              return (
                <button
                  type="button"
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-indigo-50/80 text-indigo-700 font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{option}</span>
                  {isSelected && <Check size={16} className="text-indigo-600 flex-shrink-0 ml-2" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Backend Development",
    budget: "Under ₹50K",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const projectTypeOptions = [
    "Backend Development",
    "REST API Development",
    "SaaS Development",
    "Admin Panel",
    "E-commerce",
    "API Integration",
    "AI Integration",
    "Existing Application",
    "Other"
  ];

  const budgetOptions = [
    "Under ₹50K",
    "₹50K – ₹1L",
    "₹1L – ₹3L",
    "₹3L+",
    "Let's Discuss"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "Backend Development",
        budget: "Under ₹50K",
        message: ""
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">Have a Project in Mind?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Whether you need a new backend system, REST API, SaaS product, admin panel, integration, or help improving an existing application, let&apos;s discuss your requirements.
            </p>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Direct Contact</h3>
              <p className="text-slate-600">Email: <a href="mailto:supriyachandel75@gmail.com" className="text-accent font-medium hover:underline">supriyachandel75@gmail.com</a></p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-white border border-emerald-300 shadow-lg text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thanks for reaching out!</h3>
                <p className="text-slate-600">Your enquiry has been received. I&apos;ll get back to you soon.</p>
                <button onClick={() => setStatus("idle")} className="mt-8 px-6 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-slate-800 text-sm font-semibold">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Name <span className="text-red-500">*</span></label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email <span className="text-red-500">*</span></label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomSelect
                    label="Project Type"
                    value={formData.projectType}
                    options={projectTypeOptions}
                    onChange={(val) => setFormData(prev => ({ ...prev, projectType: val }))}
                  />
                  <CustomSelect
                    label="Budget"
                    value={formData.budget}
                    options={budgetOptions}
                    onChange={(val) => setFormData(prev => ({ ...prev, budget: val }))}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message <span className="text-red-500">*</span></label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">There was an error submitting the form. Please try again or email directly.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent-hover disabled:bg-accent/50 text-white px-8 py-4 font-semibold transition-colors shadow-lg shadow-accent/25 cursor-pointer"
                >
                  {status === "loading" ? "Sending..." : "Start a Conversation \u2192"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
