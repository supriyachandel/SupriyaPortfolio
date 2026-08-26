"use client";

import { motion } from "framer-motion";
import { Server, Code, Database, Puzzle, Cloud, Wrench, GitBranch } from "lucide-react";

export default function TechStack() {
  const stack = [
    {
      category: "Backend",
      icon: <Server className="w-5 h-5 text-indigo-600" />,
      items: ["PHP", "Laravel", "FastAPI", "Node.js", "CodeIgniter"]
    },
    {
      category: "Frontend",
      icon: <Code className="w-5 h-5 text-purple-600" />,
      items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "jQuery", "Bootstrap"]
    },
    {
      category: "Databases",
      icon: <Database className="w-5 h-5 text-blue-600" />,
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
      category: "APIs & Integrations",
      icon: <Puzzle className="w-5 h-5 text-amber-600" />,
      items: ["REST APIs", "HubSpot CRM", "Salesforce", "Google APIs", "ChatGPT", "Gemini", "GrowthHub", "Webhooks"]
    },
    {
      category: "Infrastructure",
      icon: <Cloud className="w-5 h-5 text-emerald-600" />,
      items: ["AWS EC2", "Railway", "Vercel", "Render", "Linux", "cPanel", "Docker basics"]
    },
    {
      category: "Tools & DevOps",
      icon: <Wrench className="w-5 h-5 text-rose-600" />,
      items: ["Git", "GitHub", "Postman", "Jira", "VS Code", "TablePlus"]
    },
    {
      category: "Backend Concepts",
      icon: <GitBranch className="w-5 h-5 text-violet-600" />,
      items: ["MVC Pattern", "Middleware", "Events & Listeners", "Validation", "Queue Workers", "Cron Jobs", "Error Handling"]
    }
  ];

  return (
    <section className="py-24 relative" id="tech-stack">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-100/40 via-purple-100/30 to-transparent rounded-full blur-[140px] -z-10 pointer-events-none" />

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
              TOOLS & TECHNOLOGIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">Ecosystem</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            The programming languages, frameworks, databases, and cloud infrastructure I utilize to architect resilient solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stack.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl border border-slate-200/80 bg-white shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_35px_-10px_rgba(99,102,241,0.1)] hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <span>{group.category}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-50 border border-slate-200/70 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-150 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
