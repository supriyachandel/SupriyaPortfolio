"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const stack = [
    {
      category: "Backend",
      items: ["PHP", "Laravel", "CodeIgniter", "Node.js"]
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "jQuery", "Bootstrap"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"]
    },
    {
      category: "APIs & Integrations",
      items: ["REST APIs", "Google APIs", "ChatGPT", "Gemini", "HubSpot", "Salesforce", "GrowthHub", "Third-party APIs"]
    },
    {
      category: "Infrastructure",
      items: ["AWS", "Linux", "cPanel", "Vercel", "Render"]
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
    <section className="py-24 relative bg-background/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Stack</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
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
              className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 text-sm rounded-lg glass border border-white/10 text-foreground/80 hover:text-white hover:border-accent/50 transition-colors cursor-default"
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
