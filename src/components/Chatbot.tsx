"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatbotMessage from "./ChatbotMessage";
import { getChatbotResponse, ChatMessage } from "@/lib/chatbot/knowledge";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hello! 👋 I'm Supriya's portfolio assistant. I can tell you about her skills, experience, projects, services and technical expertise. What would you like to know?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input on desktop
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 150);
      }
    }
  }, [messages, isOpen, isLoading]);

  // Close chatbot on scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessageContent = inputValue.trim();
    setInputValue("");
    
    // 1. Add user message to state
    const updatedMessages = [...messages, { role: "user", content: userMessageContent } as ChatMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    // 2. Simulate natural thinking delay (400ms)
    setTimeout(() => {
      try {
        const response = getChatbotResponse(userMessageContent, updatedMessages);
        setMessages(prev => [...prev, { role: "assistant", content: response } as ChatMessage]);
      } catch (error) {
        console.error("Chatbot processing error:", error);
        setMessages(prev => [
          ...prev, 
          { 
            role: "assistant", 
            content: "I'm having trouble responding right now. Please try again in a moment." 
          } as ChatMessage
        ]);
      } finally {
        setIsLoading(false);
      }
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="w-[calc(100vw-32px)] sm:w-[380px] h-[500px] sm:h-[550px] bg-slate-50 border border-slate-200/90 rounded-3xl shadow-[0_20px_50px_-10px_rgba(15,23,42,0.12)] flex flex-col overflow-hidden mb-4 glass-panel glow"
          >
            {/* Header */}
            <div className="bg-gradient-to-tr from-purple-600 via-indigo-600 to-indigo-700 p-4 flex items-center justify-between text-white border-b border-indigo-500/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                  <Bot size={20} className="text-white animate-pulse" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-sm tracking-tight flex items-center gap-1.5">
                    <span>Supriya&apos;s Assistant</span>
                    <Sparkles size={12} className="text-amber-300 fill-amber-300" />
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-semibold text-indigo-100 uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Minimize chatbot"
              >
                <X size={18} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-grow p-4 overflow-y-auto bg-slate-50/50 space-y-2 select-text scrollbar-thin">
              {messages.map((msg, idx) => (
                <ChatbotMessage key={idx} role={msg.role} content={msg.content} />
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.03)] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-4 bg-white border-t border-slate-200/80 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about skills, projects, contact..."
                disabled={isLoading}
                className="flex-grow bg-slate-50 border border-slate-200/80 hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-3 focus:ring-indigo-500/10 rounded-2xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none transition-all disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="w-11 h-11 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-slate-100 disabled:to-slate-100 disabled:text-slate-400 text-white flex items-center justify-center transition-all shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-95 cursor-pointer disabled:pointer-events-none"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (Toggle Button) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-indigo-700 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none z-50 relative group"
        aria-label="Toggle chatbot window"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessageSquare size={22} />
              {/* Optional notifications dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-indigo-600 group-hover:scale-110 transition-transform" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
