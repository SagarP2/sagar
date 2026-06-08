"use client";

import React, { useState } from "react";
import { SkillCategory } from "@/types/portfolio";
import { Layers, Server, ShoppingBag, Award, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { SkillsSphereCanvas } from "./skills-sphere";

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
  [SkillCategory.FRONTEND]: "Frontend Web",
  [SkillCategory.BACKEND]: "Backend & APIs",
  [SkillCategory.SHOPIFY]: "Shopify specialty",
  [SkillCategory.DESIGN]: "Creative UI/UX",
  [SkillCategory.MARKETING]: "SEO & Growth",
  [SkillCategory.TESTING]: "QA & Testing",
};

const CATEGORY_ICONS = {
  [SkillCategory.FRONTEND]: Layers,
  [SkillCategory.BACKEND]: Server,
  [SkillCategory.SHOPIFY]: ShoppingBag,
  [SkillCategory.DESIGN]: Award,
  [SkillCategory.MARKETING]: ShieldCheck,
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
    <section id="skills" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#000000]">
      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3" data-reveal="fade-up">
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] block">
            02 // Technical capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase">
            Expertise Matrix & Core Stack
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: 3D sphere tags cloud */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1" data-reveal="fade-right">
            <SkillsSphereCanvas skills={displaySkills} />
          </div>

          {/* Right Column: Tabbed listings */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2" data-reveal="fade-left">
            {/* Category Selector Tabs */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => {
                const IconComponent = CATEGORY_ICONS[cat] || Layers;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer",
                      isActive
                        ? "bg-white border-white text-[#000000]"
                        : "border-white/5 bg-white/2 text-white/45 hover:text-white hover:border-white/25"
                    )}
                  >
                    <IconComponent className="h-3 w-3" />
                    {CATEGORY_LABELS[cat]}
                  </button>
                );
              })}
            </div>

            {/* Skills Progress bars */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
              {activeSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="space-y-2.5 p-4 border border-white/5 bg-white/2 rounded-2xl hover:border-white/25 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white/90">{skill.name}</span>
                    <span className="text-[10px] font-mono text-white/40">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white transition-all duration-800 ease-out-expo"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
