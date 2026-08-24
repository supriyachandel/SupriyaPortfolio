"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Have a Project in Mind?</h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Whether you need a new backend system, REST API, SaaS product, admin panel, integration, or help improving an existing application, let&apos;s discuss your requirements.
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Direct Contact</h3>
              <p className="text-foreground/60 mb-1">Email: <a href="mailto:placeholder@email.com" className="text-accent hover:underline">placeholder@email.com</a></p>
              <p className="text-foreground/60">Phone: <a href="tel:+910000000000" className="text-accent hover:underline">+91 000 000 0000</a></p>
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
              <div className="p-8 rounded-2xl glass border border-green-500/30 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thanks for reaching out!</h3>
                <p className="text-foreground/70">Your enquiry has been received. I&apos;ll get back to you soon.</p>
                <button onClick={() => setStatus("idle")} className="mt-8 px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-medium">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass-panel space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Name <span className="text-red-400">*</span></label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Email <span className="text-red-400">*</span></label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="+91 9876543210" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Acme Inc." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Project Type</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                      <option>Backend Development</option>
                      <option>REST API Development</option>
                      <option>SaaS Development</option>
                      <option>Admin Panel</option>
                      <option>E-commerce</option>
                      <option>API Integration</option>
                      <option>AI Integration</option>
                      <option>Existing Application</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                      <option>Under ₹50K</option>
                      <option>₹50K – ₹1L</option>
                      <option>₹1L – ₹3L</option>
                      <option>₹3L+</option>
                      <option>Let&apos;s Discuss</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Message <span className="text-red-400">*</span></label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">There was an error submitting the form. Please try again or email directly.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent-hover disabled:bg-accent/50 text-white px-8 py-4 font-medium transition-colors"
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
