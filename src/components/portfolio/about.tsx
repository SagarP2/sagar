"use client";

import React, { useState } from "react";
import { Tilt } from "./tilt";
import { Copy, Check, Terminal, Folder } from "lucide-react";
import { toast } from "sonner";

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
    "Supabase", 
    "MongoDB", 
    "PostgreSQL"
  ],
  "animation": [
    "GSAP ScrollTrigger", 
    "Framer Motion"
  ]
}`;

  const renderProfileCode = () => (
    <div className="space-y-1 text-2xs sm:text-xs leading-relaxed font-mono select-all text-white/80">
      <div><span className="text-gold-400 font-bold">const</span> <span className="text-[#7dd3fc]">developer</span> = &#123;</div>
      <div className="pl-4"><span className="text-white/40">name:</span> <span className="text-emerald-400">{"\"Sagar Panchal\""}</span>,</div>
      <div className="pl-4"><span className="text-white/40">role:</span> <span className="text-emerald-400">{"\"MERN Stack & Shopify Architect\""}</span>,</div>
      <div className="pl-4"><span className="text-white/40">experience:</span> <span className="text-emerald-400">{"\""}{experienceYears}{"+ Years\""}</span>,</div>
      <div className="pl-4"><span className="text-white/40">location:</span> <span className="text-emerald-400">{"\"Gujarat, India\""}</span>,</div>
      <div className="pl-4"><span className="text-white/40">specialties:</span> [</div>
      <div className="pl-8"><span className="text-emerald-400">{"\"Next.js / React 19 / TS\""}</span>,</div>
      <div className="pl-8"><span className="text-emerald-400">{"\"Node.js & Scalable APIs\""}</span>,</div>
      <div className="pl-8"><span className="text-emerald-400">{"\"Shopify Liquid & App Bridge\""}</span></div>
      <div className="pl-4">],</div>
      <div className="pl-4"><span className="text-white/40">focus:</span> <span className="text-emerald-400">{"\"High-performance visual code\""}</span></div>
      <div>&#125;;</div>
      <div className="mt-4"><span className="text-gold-400 font-bold">export default</span> <span className="text-[#7dd3fc]">developer</span>;</div>
    </div>
  );

  const renderStackCode = () => (
    <div className="space-y-1 text-2xs sm:text-xs leading-relaxed font-mono select-all text-white/80">
      <div>&#123;</div>
      <div className="pl-4"><span className="text-gold-400 font-bold">{"\"core\""}</span>: [ <span className="text-emerald-400">{"\"Next.js\""}</span>, <span className="text-emerald-400">{"\"React 19\""}</span>, <span className="text-emerald-400">{"\"TypeScript\""}</span>, <span className="text-emerald-400">{"\"Node.js\""}</span> ],</div>
      <div className="pl-4"><span className="text-gold-400 font-bold">{"\"shopify\""}</span>: [ <span className="text-emerald-400">{"\"App Bridge v4\""}</span>, <span className="text-emerald-400">{"\"GraphQL Admin API\""}</span>, <span className="text-emerald-400">{"\"Liquid\""}</span> ],</div>
      <div className="pl-4"><span className="text-gold-400 font-bold">{"\"databases\""}</span>: [ <span className="text-emerald-400">{"\"Supabase\""}</span>, <span className="text-emerald-400">{"\"MongoDB\""}</span>, <span className="text-emerald-400">{"\"PostgreSQL\""}</span> ],</div>
      <div className="pl-4"><span className="text-gold-400 font-bold">{"\"animation\""}</span>: [ <span className="text-emerald-400">{"\"GSAP ScrollTrigger\""}</span>, <span className="text-emerald-400">{"\"Framer Motion\""}</span> ]</div>
      <div>&#125;</div>
    </div>
  );

  return (
    <section id="about" data-section className="relative py-36 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Structural layout details */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto w-full grid gap-16 lg:grid-cols-12 relative z-10">
        
        {/* Left Column: Storytelling Content & Metrics */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-10" data-reveal="fade-right">
          <div>
            <span className="text-[9px] font-bold text-gold-400 uppercase tracking-[0.25em] block mb-3">
              01 // THE ARCHITECT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight leading-tight uppercase">
              HIGH PERFORMANCE BACKENDS. CUSTOM COMMERCE ARCHITECTURE. ELITE FRONTEND CODE.
            </h2>
          </div>

          <p className="text-white/60 text-sm sm:text-base leading-relaxed font-sans font-medium whitespace-pre-line">
            {bioText || "I am a dedicated full-stack developer specializing in the MERN ecosystem and Shopify custom configurations. I build secure databases, robust node servers, and interactive, beautiful interfaces."}
          </p>

          <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-sans whitespace-pre-line">
            {subBioText || "My core focus lies in performance-oriented development, integrating state-of-the-art caching, stateless sessions, and GraphQL database APIs to deliver high-performance applications."}
          </p>

          {/* Metrics Grid redone as high-end watch face / gauges */}
          <div className="grid grid-cols-2 gap-4 pt-6 max-w-xl">
            {metricBadges.map((badge) => (
              <Tilt key={badge.label}>
                <div
                  className="border border-white/5 bg-white/[0.01] p-6 rounded-2xl flex flex-col justify-between min-h-[120px] hover:border-gold-400/20 hover:shadow-[0_0_30px_rgba(198,163,104,0.05)] transition-all duration-300 cursor-default group"
                >
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 group-hover:to-gold-400 transition-all duration-300">
                    {badge.value}
                  </span>
                  <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest mt-3">
                    {badge.label}
                  </span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        {/* Right Column: Deluxe VSCode IDE Sandbox */}
        <div className="lg:col-span-5 flex flex-col justify-center" data-reveal="fade-left">
          <div className="border border-white/5 w-full overflow-hidden rounded-2xl flex flex-col bg-[#08080a] shadow-2xl shadow-black/95 relative">
            
            {/* Header controls */}
            <div className="bg-[#050507] px-4 py-4 flex items-center justify-between border-b border-white/5 select-none font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <div className="flex items-center gap-2 text-[8px] text-white/30 uppercase tracking-[0.2em] font-bold">
                <Terminal className="h-3.5 w-3.5 text-gold-400/50" />
                sagar-sandbox-console
              </div>
              
              {/* Copy Code Button */}
              <button
                onClick={handleCopy}
                className="p-1.5 rounded hover:bg-white/5 text-white/40 hover:text-white transition-colors cursor-pointer"
                title="Copy Code"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>

            {/* Editor Workspace Directory Tabs */}
            <div className="bg-[#060608] border-b border-white/5 flex select-none text-[8px] font-mono tracking-widest uppercase">
              {["profile.ts", "stack.json"].map((filename) => {
                const isActive = activeTab === filename;
                return (
                  <button
                    key={filename}
                    onClick={() => setActiveTab(filename)}
                    className={`px-6 py-4 border-r border-white/5 transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#08080a] text-gold-400 font-bold border-t border-t-gold-400"
                        : "text-white/20 hover:text-white/50"
                    }`}
                  >
                    {filename}
                  </button>
                );
              })}
            </div>

            {/* Split Screen Panel */}
            <div className="flex flex-1 min-h-[300px]">
              {/* Sidebar Explorer Mock */}
              <div className="w-1/3 border-r border-white/5 bg-[#050507] p-4 select-none font-mono text-[9px] text-white/30 hidden sm:block space-y-4">
                <span className="text-[7.5px] uppercase tracking-widest font-black text-white/20 block mb-2">EXPLORER</span>
                <div className="flex items-center gap-1 text-white/55 font-bold truncate">
                  <Folder className="h-3.5 w-3.5 text-gold-400/60" />
                  <span>sagar-api-core</span>
                </div>
                <div className="pl-3 space-y-2.5 pt-1">
                  <button
                    onClick={() => setActiveTab("profile.ts")}
                    className={`flex items-center gap-1.5 w-full hover:text-white transition-colors cursor-pointer text-left ${activeTab === "profile.ts" ? "text-gold-400 font-bold" : ""}`}
                  >
                    <span>📄 profile.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("stack.json")}
                    className={`flex items-center gap-1.5 w-full hover:text-white transition-colors cursor-pointer text-left ${activeTab === "stack.json" ? "text-gold-400 font-bold" : ""}`}
                  >
                    <span>📄 stack.json</span>
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="flex-1 p-5 overflow-x-auto bg-[#08080a] flex flex-col justify-between select-text selection:bg-white/10 selection:text-white">
                <div className="animate-fadeIn">
                  {activeTab === "profile.ts" ? renderProfileCode() : renderStackCode()}
                </div>
                
                {/* Editor Footer details */}
                <div className="flex justify-between items-center text-[7.5px] font-mono text-white/25 select-none pt-4 border-t border-white/5 uppercase tracking-widest mt-6">
                  <span>ENCODING: UTF-8</span>
                  <span>TYPESCRIPT SPECIFICATION</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
