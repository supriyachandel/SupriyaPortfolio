"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const stack = [
    {
      category: "Backend",
      items: ["PHP", "Laravel", "CodeIgniter", "Node.js", "FastAPI"]
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "HTML", "CSS", "jQuery", "Bootstrap"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "APIs & Integrations",
      items: ["REST APIs", "Google APIs", "ChatGPT", "Gemini", "HubSpot", "Salesforce", "GrowthHub", "Third-party APIs"]
    },
    {
      category: "Infrastructure",
      items: ["AWS", "Linux", "cPanel", "Vercel", "Render", "Railway"]
    },
    {
      category: "Tools",
      items: ["Git", "Jira", "Postman", "Redis"]
    },
    {
      category: "Backend Concepts",
      items: ["MVC", "Middleware", "Events & Listeners", "Validation", "Error Handling", "Queue Jobs", "Cron Jobs"]
    }
  ];

  return (
    <section className="py-24 relative bg-slate-100/50 border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Technical Stack</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            The tools and technologies I use to build robust, scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stack.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
