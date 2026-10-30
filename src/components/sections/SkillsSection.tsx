"use client";

import React, { useState } from "react";
import { Skill, SkillCategory } from "@/types/portfolio";
import { Layers, Server, ShoppingBag, Database, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillsSectionProps {
  skills: Skill[];
}

interface CuratedSkillGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: "burgundy" | "sage" | "cream";
  items: string[];
}

const CURATED_SKILL_GROUPS: CuratedSkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Component architecture & responsive interfaces",
    icon: Layers,
    accent: "burgundy",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Server-side logic, APIs & authentication",
    icon: Server,
    accent: "sage",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "PHP",
      "JWT Authentication",
    ],
  },
  {
    id: "shopify",
    title: "Shopify Development",
    subtitle: "Custom commerce apps, APIs & storefront themes",
    icon: ShoppingBag,
    accent: "cream",
    items: [
      "Shopify App Development",
      "Shopify Admin API",
      "Shopify GraphQL API",
      "Shopify Polaris",
      "Shopify App Bridge",
      "Theme App Extensions",
      "Shopify Liquid",
      "Shopify Webhooks",
    ],
  },
  {
    id: "database",
    title: "Database & Infrastructure",
    subtitle: "Data modeling, persistence & cloud storage",
    icon: Database,
    accent: "sage",
    items: [
      "MongoDB",
      "PostgreSQL",
      "SQL / MySQL",
      "AWS S3",
      "REST & Webhook Pipelines",
    ],
  },
  {
    id: "tools",
    title: "Tools, QA & Design",
    subtitle: "Workflow tooling, testing & interface craft",
    icon: Wrench,
    accent: "burgundy",
    items: [
      "Git",
      "GitHub",
      "Shopify CLI",
      "Quality Assurance (QA)",
      "Unit & Integration Testing",
      "UI & Digital Design",
    ],
  },
];

const PORTFOLIO_CATEGORY_LABELS: Record<SkillCategory, string> = {
  [SkillCategory.FRONTEND]: "Frontend",
  [SkillCategory.BACKEND]: "Backend",
  [SkillCategory.SHOPIFY]: "Shopify",
  [SkillCategory.DESIGN]: "Design",
  [SkillCategory.TESTING]: "Testing & QA",
  [SkillCategory.MARKETING]: "Digital & Analytics",
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const availableCategories = Object.values(SkillCategory).filter((cat) =>
    skills.some((s) => s.category === cat)
  );
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "ALL">("ALL");

  const filteredPortfolioSkills =
    selectedCategory === "ALL"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      data-section
      className="relative py-20 sm:py-28 bg-[#F7F5F0] border-b border-[#D8D4CA]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-14">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#590907]">
              <span>02</span>
              <span className="text-[#A5A79B]">/</span>
              <span>Technical Skills</span>
            </div>
            <h2
              className="font-heading font-bold text-[#252522] tracking-tight leading-[1.12]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.5rem, 2.85rem)" }}
            >
              Structured across the stack.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#66665F] max-w-md leading-relaxed">
            Core technologies and tools used across my production MERN applications, backend APIs,
            and custom Shopify solutions.
          </p>
        </div>

        {/* Compact Curated Skill Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 text-left">
          {CURATED_SKILL_GROUPS.map((group, idx) => {
            const Icon = group.icon;
            const colSpan =
              idx < 2
                ? "lg:col-span-6"
                : idx === 2
                ? "lg:col-span-5"
                : idx === 3
                ? "lg:col-span-3"
                : "lg:col-span-4";

            return (
              <article
                key={group.id}
                className={cn(
                  "rounded-lg border border-[#D8D4CA] p-6 flex flex-col justify-between space-y-5 transition-colors",
                  colSpan,
                  group.accent === "cream"
                    ? "bg-[#E8D2B5]/45"
                    : group.accent === "sage"
                    ? "bg-[#EEEAE2]"
                    : "bg-[#FFFFFF]"
                )}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#D8D4CA] pb-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-md bg-[#590907] text-[#F7F5F0] flex items-center justify-center">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-heading font-bold text-base text-[#252522] leading-tight">
                          {group.title}
                        </h3>
                        <p className="text-xs text-[#66665F] mt-0.5">{group.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#590907]">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Compact Tag List */}
                  <ul className="flex flex-wrap gap-2 pt-1" aria-label={`${group.title} skills`}>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1.5 rounded-md bg-[#FFFFFF] border border-[#D8D4CA] text-xs font-medium text-[#252522] shadow-[0_1px_2px_rgba(37,37,34,0.03)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Verified Portfolio Skill Index */}
        {skills.length > 0 && (
          <div className="rounded-lg bg-[#A5A79B]/20 border border-[#D8D4CA] p-6 sm:p-8 space-y-6 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8D4CA] pb-4">
              <div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#590907]">
                  Complete Capability Index
                </span>
                <h3 className="font-heading font-bold text-lg text-[#252522] mt-0.5">
                  Domain Proficiency Breakdown
                </h3>
              </div>

              {/* Filter Tabs */}
              <div
                className="flex flex-wrap gap-1.5"
                role="tablist"
                aria-label="Filter skills by category"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === "ALL"}
                  onClick={() => setSelectedCategory("ALL")}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer",
                    selectedCategory === "ALL"
                      ? "bg-[#590907] text-[#F7F5F0]"
                      : "bg-[#FFFFFF] text-[#66665F] border border-[#D8D4CA] hover:text-[#252522]"
                  )}
                >
                  All ({skills.length})
                </button>
                {availableCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-3 py-1.5 rounded-md text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer",
                      selectedCategory === cat
                        ? "bg-[#590907] text-[#F7F5F0]"
                        : "bg-[#FFFFFF] text-[#66665F] border border-[#D8D4CA] hover:text-[#252522]"
                    )}
                  >
                    {PORTFOLIO_CATEGORY_LABELS[cat] || cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredPortfolioSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="px-3.5 py-2.5 rounded-md bg-[#FFFFFF] border border-[#D8D4CA] flex items-center justify-between gap-2"
                >
                  <span className="text-xs font-semibold text-[#252522] truncate">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-[#590907] bg-[#E8D2B5]/50 px-2 py-0.5 rounded">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

