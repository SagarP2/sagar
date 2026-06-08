"use client";

import React, { useState } from "react";
import { GitBranch, Terminal, ShieldCheck } from "lucide-react";

interface AboutProps {
  bioText: string;
  subBioText: string;
  experienceYears?: number;
}

export function About({ bioText, subBioText, experienceYears = 1.5 }: AboutProps) {
  const [activeTab, setActiveTab] = useState("profile.ts");

  const files = {
    "profile.ts": `// Sagar Panchal - Full-Stack Engineer Profile
const developer = {
  name: "Sagar Panchal",
  role: "MERN Stack & Certified Shopify Developer",
  experience: "${experienceYears}+ Years Professional",
  specialties: [
    "Next.js/React 19",
    "Node.js & Scalable APIs",
    "Shopify Apps & Custom Liquid Themes"
  ],
  coordinate: "Mumbai, India",
  philosophy: "Stateless scalability & clean visual interactions"
};

export default developer;`,
    "stack.json": `{
  "core": ["Next.js", "React 19", "TypeScript", "Node.js"],
  "shopify": ["App Bridge v4", "Liquid templates", "GraphQL Admin API", "Polaris UI"],
  "infrastructure": ["Supabase", "MongoDB", "PostgreSQL", "REST/GraphQL Webhooks"],
  "motion": ["GSAP ScrollTrigger", "Framer Motion", "Three.js Canvas"]
}`,
  };

  const metricBadges = [
    { label: "Years Experience", value: `${experienceYears}+` },
    { label: "Custom Integrations", value: "30+" },
    { label: "Completed Projects", value: "15+" },
    { label: "Interface Fluidity", value: "60 FPS" },
  ];

  return (
    <section id="about" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#000000]">
      <div className="max-w-7xl mx-auto w-full grid gap-16 lg:grid-cols-12 relative z-10">
        
        {/* Left Column: Bold Typography & Metric Grid */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8" data-reveal="fade-right">
          <div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] block mb-3">
              01 // The Engineer
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight leading-tight uppercase">
              Backend performance. Custom commerce systems. Premium visual engineering.
            </h2>
          </div>

          <p className="text-white/60 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {bioText || "I am a dedicated full-stack developer specializing in the MERN ecosystem and Shopify custom configurations. I build secure databases, robust node servers, and interactive, beautiful interfaces."}
          </p>

          <p className="text-white/40 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
            {subBioText || "My core focus lies in performance-oriented development, integrating state-of-the-art caching, stateless sessions, and GraphQL database APIs to deliver high-performance applications."}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 pt-6 max-w-xl">
            {metricBadges.map((badge, idx) => (
              <div
                key={badge.label}
                className="border border-white/5 bg-white/2 p-5 rounded-2xl flex flex-col justify-between min-h-[100px] hover:border-white/20 transition-all duration-300"
              >
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
                  {badge.value}
                </span>
                <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-2">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Code Editor Mockup */}
        <div className="lg:col-span-5 flex flex-col justify-center" data-reveal="fade-left">
          <div className="border border-white/5 w-full overflow-hidden rounded-2xl flex flex-col bg-[#08080a]">
            {/* Mock Header */}
            <div className="bg-[#030304] px-4 py-3.5 flex items-center justify-between border-b border-white/5 select-none font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <span className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Developer Console</span>
            </div>

            {/* File selection Tabs */}
            <div className="bg-[#050507] border-b border-white/5 flex select-none text-[9px] font-mono tracking-widest uppercase">
              {Object.keys(files).map((filename) => {
                const isActive = activeTab === filename;
                return (
                  <button
                    key={filename}
                    onClick={() => setActiveTab(filename)}
                    className={`px-4 py-3 border-r border-white/5 transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#08080a] text-white font-black border-b border-b-white"
                        : "text-white/30 hover:text-white/60"
                    }`}
                  >
                    {filename}
                  </button>
                );
              })}
            </div>

            {/* Code Workspace panel */}
            <div className="p-5 text-2xs sm:text-xs font-mono text-white/70 overflow-x-auto min-h-[250px] leading-relaxed whitespace-pre select-all bg-[#08080a]">
              {files[activeTab as keyof typeof files]}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
