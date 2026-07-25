"use client";

import React, { useState } from "react";
import { SkillCategory } from "@/types/portfolio";
import { Layers, Server, ShoppingBag, Award, ShieldCheck, PenTool, Sparkles, CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { motion, AnimatePresence } from "framer-motion";

const SkillsSphereCanvas = dynamic(
  () => import("./skills-sphere").then((mod) => mod.SkillsSphereCanvas),
  { ssr: false }
);

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
  [SkillCategory.BACKEND]: "Backend & Scalable APIs",
  [SkillCategory.SHOPIFY]: "Shopify Custom Apps & Liquid",
  [SkillCategory.DESIGN]: "Creative UI/UX & Motion",
  [SkillCategory.MARKETING]: "SEO & Web Analytics",
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
  { id: "graphql", name: "GraphQL API", category: SkillCategory.BACKEND, level: 88, icon: null, orderIndex: 4 },
  { id: "mongo", name: "MongoDB", category: SkillCategory.BACKEND, level: 90, icon: null, orderIndex: 5 },
  { id: "postgres", name: "PostgreSQL", category: SkillCategory.BACKEND, level: 86, icon: null, orderIndex: 6 },
  { id: "react", name: "React 19", category: SkillCategory.FRONTEND, level: 92, icon: null, orderIndex: 7 },
  { id: "next", name: "Next.js 16", category: SkillCategory.FRONTEND, level: 90, icon: null, orderIndex: 8 },
  { id: "ts", name: "TypeScript 5", category: SkillCategory.FRONTEND, level: 88, icon: null, orderIndex: 9 },
  { id: "shopify-apps", name: "Shopify App Bridge", category: SkillCategory.SHOPIFY, level: 90, icon: null, orderIndex: 10 },
  { id: "liquid", name: "Liquid Themes", category: SkillCategory.SHOPIFY, level: 88, icon: null, orderIndex: 11 },
  { id: "webhooks", name: "Shopify Webhooks", category: SkillCategory.SHOPIFY, level: 91, icon: null, orderIndex: 12 },
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
    <section id="skills" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Background Grid & Radial Lighting */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-ice-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold tracking-[0.25em] text-gold-400 uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            02 // SYSTEM CAPABILITIES
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight text-white">
            TECHNICAL MATRIX &amp; <span className="text-gold-400 glow-text">SPECIALTIES</span>.
          </h2>
        </div>

        {/* Category Pills Bar */}
        <div className="flex flex-wrap gap-2 border-b border-white/5 pb-6">
          {categories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat] || Layers;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer",
                  isActive
                    ? "bg-gold-400 text-black shadow-lg shadow-gold-400/20 scale-105"
                    : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                <Icon className={cn("h-3.5 w-3.5", isActive ? "text-black" : "text-gold-400")} />
                <span>{CATEGORY_LABELS[cat] || cat}</span>
              </button>
            );
          })}
        </div>

        {/* Spatial Grid Layout (Left: 3D Fibonacci Sphere, Right: Skill Bento Cards) */}
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          
          {/* 3D Fibonacci Sphere */}
          <div className="lg:col-span-5 flex justify-center">
            <SkillsSphereCanvas skills={displaySkills} />
          </div>

          {/* Active Category Skill Cards */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {activeSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="bento-card-spatial p-6 space-y-3 group hover:border-gold-400/30"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-gold-400" />
                        <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-2xs font-mono font-bold text-gold-400/80">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-gradient-to-r from-gold-400 to-amber-200 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
