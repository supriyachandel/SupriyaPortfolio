import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-8 mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 mb-4 inline-block">
              Supriya<span className="text-accent">.</span>
            </Link>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Let&apos;s build something reliable.
            </h3>
            <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
              Backend systems, APIs, SaaS products and integrations built for real-world business needs.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/#" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700 hover:text-indigo-600 shadow-2xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://linkedin.com/#" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700 hover:text-indigo-600 shadow-2xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="mailto:supriyachandel75@gmail.com" className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700 hover:text-indigo-600 shadow-2xs">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">About</Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Services</Link>
              </li>
              <li>
                <Link href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Projects</Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-slate-600 font-medium">Backend Development</li>
              <li className="text-slate-600 font-medium">SaaS Development</li>
              <li className="text-slate-600 font-medium">API Integration</li>
              <li className="text-slate-600 font-medium">Database Architecture</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Supriya. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-800 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-800 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
