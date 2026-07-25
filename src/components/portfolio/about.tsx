"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal, Code2, Server, Cpu, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";

interface AboutProps {
  bioText: string;
  subBioText: string;
  experienceYears?: number;
}

export function About({ bioText, subBioText, experienceYears = 1.5 }: AboutProps) {
  const [activeTab, setActiveTab] = useState("profile.ts");
  const [copied, setCopied] = useState(false);

  const metricBadges = [
    { label: "Years Experience", value: `${experienceYears}+` },
    { label: "Custom Integrations", value: "30+" },
    { label: "Completed Projects", value: "15+" },
    { label: "Rendering Velocity", value: "60 FPS" },
  ];

  const handleCopy = () => {
    const textToCopy = activeTab === "profile.ts" ? profileRawCode : stackRawCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const profileRawCode = `const developer = {
  name: "Sagar Panchal",
  role: "MERN Stack & Shopify Architect",
  experience: "${experienceYears}+ Years",
  location: "Gujarat, India",
  specialties: [
    "Next.js / React 19 / TS",
    "Node.js & Scalable APIs",
    "Shopify Liquid & App Bridge"
  ],
  focus: "High-performance visual code"
};
export default developer;`;

  const stackRawCode = `{
  "core": [
    "Next.js", "React 19", 
    "TypeScript", "Node.js"
  ],
  "shopify": [
    "App Bridge v4", 
    "GraphQL Admin API", 
    "Liquid"
  ],
  "databases": [
    "MongoDB", 
    "PostgreSQL"
  ]
}`;

  return (
    <section id="about" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Background Spatial Effects */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold tracking-[0.25em] text-gold-400 uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            01 // ARCHITECTURAL PHILOSOPHY
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight text-white">
            ENGINEERING PURPOSEFUL <span className="text-gold-400 glow-text">DIGITAL PRODUCTS</span>.
          </h2>
        </div>

        {/* Bento Grid Architecture (70% Spatial, 20% Bento, 10% Glass) */}
        <BentoGrid className="auto-rows-auto">
          
          {/* Main Bio Card (Span 2 cols) */}
          <BentoCard glow="gold" className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <Cpu className="h-5 w-5 text-gold-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                CORE SYSTEM BIOGRAPHY
              </h3>
            </div>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed border-l-2 border-gold-400/40 pl-5">
              {bioText}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {subBioText}
            </p>
          </BentoCard>

          {/* Interactive Code Terminal (Span 2 cols) */}
          <BentoCard glow="ice" className="md:col-span-2 space-y-4">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex gap-1 ml-4 bg-black/40 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab("profile.ts")}
                    className={`px-3 py-1 rounded text-3xs font-mono font-bold uppercase transition-all ${
                      activeTab === "profile.ts"
                        ? "bg-gold-400 text-black shadow-md"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    profile.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("stack.json")}
                    className={`px-3 py-1 rounded text-3xs font-mono font-bold uppercase transition-all ${
                      activeTab === "stack.json"
                        ? "bg-gold-400 text-black shadow-md"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    stack.json
                  </button>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                title="Copy Code"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-2xs sm:text-xs overflow-x-auto">
              {activeTab === "profile.ts" ? (
                <div className="space-y-1 text-white/80">
                  <div><span className="text-gold-400 font-bold">const</span> <span className="text-ice-400">developer</span> = &#123;</div>
                  <div className="pl-4"><span className="text-white/40">name:</span> <span className="text-emerald-400">{"\"Sagar Panchal\""}</span>,</div>
                  <div className="pl-4"><span className="text-white/40">role:</span> <span className="text-emerald-400">{"\"MERN Stack & Shopify Developer\""}</span>,</div>
                  <div className="pl-4"><span className="text-white/40">experience:</span> <span className="text-emerald-400">{"\""}{experienceYears}{"+ Years\""}</span>,</div>
                  <div className="pl-4"><span className="text-white/40">focus:</span> <span className="text-emerald-400">{"\"Scalable Full-Stack Architecture\""}</span></div>
                  <div>&#125;;</div>
                </div>
              ) : (
                <div className="space-y-1 text-white/80">
                  <div>&#123;</div>
                  <div className="pl-4"><span className="text-gold-400 font-bold">{"\"core\""}</span>: [ <span className="text-emerald-400">{"\"Next.js\""}</span>, <span className="text-emerald-400">{"\"React 19\""}</span>, <span className="text-emerald-400">{"\"Node.js\""}</span> ],</div>
                  <div className="pl-4"><span className="text-gold-400 font-bold">{"\"shopify\""}</span>: [ <span className="text-emerald-400">{"\"Liquid\""}</span>, <span className="text-emerald-400">{"\"App Bridge\""}</span> ]</div>
                  <div>&#125;</div>
                </div>
              )}
            </div>
          </BentoCard>

          {/* Metric Badges Card (Grid 4 items) */}
          <BentoCard className="md:col-span-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metricBadges.map((badge, idx) => (
                <div key={idx} className="space-y-1 text-left border-l-2 border-white/10 pl-4">
                  <div className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">
                    {badge.value}
                  </div>
                  <div className="text-3xs font-mono font-bold tracking-widest text-white/40 uppercase">
                    {badge.label}
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

        </BentoGrid>
      </div>
    </section>
  );
}
