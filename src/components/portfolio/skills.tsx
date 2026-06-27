"use client";

import React, { useState } from "react";
import { SkillCategory } from "@/types/portfolio";
import { Layers, Server, ShoppingBag, Award, ShieldCheck, PenTool, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SkillsSphereCanvas } from "./skills-sphere";
import { Tilt } from "./tilt";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: number;
  icon: string | null;
  orderIndex: number;
}

interface SkillsProps {
  skills: SkillItem[];
}

const CATEGORY_LABELS = {
  [SkillCategory.FRONTEND]: "Frontend Architecture",
  [SkillCategory.BACKEND]: "Backend & Scaling APIs",
  [SkillCategory.SHOPIFY]: "Shopify Custom Specialty",
  [SkillCategory.DESIGN]: "Creative UI/UX & Motion",
  [SkillCategory.MARKETING]: "Growth & SEO Marketing",
  [SkillCategory.TESTING]: "QA & Pipeline Testing",
};

const CATEGORY_ICONS = {
  [SkillCategory.FRONTEND]: Layers,
  [SkillCategory.BACKEND]: Server,
  [SkillCategory.SHOPIFY]: ShoppingBag,
  [SkillCategory.DESIGN]: PenTool,
  [SkillCategory.MARKETING]: Award,
  [SkillCategory.TESTING]: ShieldCheck,
};

const FALLBACK_SKILLS: SkillItem[] = [
  { id: "node", name: "Node.js", category: SkillCategory.BACKEND, level: 94, icon: null, orderIndex: 1 },
  { id: "express", name: "Express.js", category: SkillCategory.BACKEND, level: 92, icon: null, orderIndex: 2 },
  { id: "api", name: "REST APIs", category: SkillCategory.BACKEND, level: 95, icon: null, orderIndex: 3 },
  { id: "graphql", name: "GraphQL", category: SkillCategory.BACKEND, level: 86, icon: null, orderIndex: 4 },
  { id: "mongo", name: "MongoDB", category: SkillCategory.BACKEND, level: 90, icon: null, orderIndex: 5 },
  { id: "postgres", name: "PostgreSQL", category: SkillCategory.BACKEND, level: 84, icon: null, orderIndex: 6 },
  { id: "react", name: "React", category: SkillCategory.FRONTEND, level: 91, icon: null, orderIndex: 7 },
  { id: "next", name: "Next.js", category: SkillCategory.FRONTEND, level: 90, icon: null, orderIndex: 8 },
  { id: "ts", name: "TypeScript", category: SkillCategory.FRONTEND, level: 88, icon: null, orderIndex: 9 },
  { id: "shopify-apps", name: "Shopify Apps", category: SkillCategory.SHOPIFY, level: 90, icon: null, orderIndex: 10 },
  { id: "liquid", name: "Liquid Themes", category: SkillCategory.SHOPIFY, level: 87, icon: null, orderIndex: 11 },
  { id: "webhooks", name: "Webhooks", category: SkillCategory.SHOPIFY, level: 91, icon: null, orderIndex: 12 },
];

export function Skills({ skills }: SkillsProps) {
  const displaySkills = skills.length ? skills : FALLBACK_SKILLS;
  const categories = Object.values(SkillCategory).filter(
    (cat) => displaySkills.some((s) => s.category === cat)
  );

  const [activeCategory, setActiveCategory] = useState<SkillCategory>(
    categories[0] || SkillCategory.FRONTEND
  );

  const activeSkills = displaySkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" data-section className="relative py-36 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Blueprint Structural Layout Lines */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3" data-reveal="fade-up">
          <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.25em] block">
            02 // TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase">
            EXPERTISE MATRIX &amp; CORE STACK
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: 3D sphere tags cloud */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1" data-reveal="fade-right">
            <SkillsSphereCanvas skills={displaySkills} />
          </div>

          {/* Right Column: Tabbed listings */}
          <div className="lg:col-span-7 space-y-10 order-1 lg:order-2" data-reveal="fade-left">
            {/* Category Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const IconComponent = CATEGORY_ICONS[cat] || Layers;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "inline-flex items-center gap-2 px-5 py-3 rounded-full border text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer",
                      isActive
                        ? "bg-white border-white text-black font-black shadow-lg"
                        : "border-white/5 bg-white/[0.01] text-white/40 hover:text-white hover:border-gold-400/25"
                    )}
                  >
                    <IconComponent className={cn("h-3.5 w-3.5", isActive ? "text-black" : "text-gold-400")} />
                    {CATEGORY_LABELS[cat]}
                  </button>
                );
              })}
            </div>

            {/* Interactive Skills Grid with staggered Framer Motion displays */}
            <div className="min-h-[250px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-4 grid-cols-1 sm:grid-cols-2"
                >
                  {activeSkills.map((skill) => (
                    <Tilt key={skill.id} className="cursor-pointer">
                      <div
                        className="relative group p-6 border border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden transition-all duration-300 hover:border-gold-400/20 hover:shadow-[0_0_30px_rgba(198,163,104,0.05)] flex flex-col justify-between h-full min-h-[120px]"
                      >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 via-gold-400/0 to-gold-400/5 group-hover:to-gold-400/[0.03] transition-colors duration-500" />
                        
                        {/* Title and stats */}
                        <div className="flex items-center justify-between relative z-10">
                          <span className="text-[11px] font-black text-white group-hover:text-gold-400 transition-colors uppercase tracking-wider">
                            {skill.name}
                          </span>
                          <span className="text-[8.5px] font-mono text-white/30 group-hover:text-white/60 tracking-wider">
                            SPEC LEVEL // {skill.level}%
                          </span>
                        </div>

                        {/* Interactive gauge indicator */}
                        <div className="mt-8 space-y-3 relative z-10">
                          <div className="flex items-center justify-between">
                            <span className="text-[7.5px] font-mono uppercase tracking-widest text-gold-400/60 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                              <CheckCircle className="h-2.5 w-2.5 text-gold-400" />
                              VERIFIED STACK COMPONENT
                            </span>
                          </div>
                          
                          {/* Linear bar */}
                          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gold-400 group-hover:bg-white transition-all duration-700 ease-out-expo"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
