"use client";

import React from "react";
import type { Skill } from "@/types/portfolio";
import { Layers, Server, ShoppingBag, Database, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillsProps {
  skills: Skill[];
}

interface BentoSkillCategory {
  id: string;
  title: string;
  subtitle: string;
  colSpan: string;
  surface: "white" | "sage" | "cream" | "burgundy";
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
}

const BENTO_SKILL_CATEGORIES: BentoSkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Component-driven interfaces, SSR/App Router & responsive design systems",
    colSpan: "lg:col-span-7",
    surface: "white",
    icon: Layers,
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "RESTful API architecture, authentication & server-side engineering",
    colSpan: "lg:col-span-5",
    surface: "sage",
    icon: Server,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "PHP",
      "JWT & Session Auth",
    ],
  },
  {
    id: "shopify",
    title: "Shopify Development",
    subtitle: "Custom embedded apps, Admin GraphQL workflows & storefront extensions",
    colSpan: "lg:col-span-5",
    surface: "burgundy",
    icon: ShoppingBag,
    items: [
      "Shopify App Development",
      "Shopify Admin API",
      "GraphQL",
      "Shopify Polaris",
      "App Bridge",
      "Theme App Extensions",
      "Shopify Liquid",
      "Webhooks",
    ],
  },
  {
    id: "database",
    title: "Databases & Infrastructure",
    subtitle: "Relational & document schemas, ORM modeling, caching & background queues",
    colSpan: "lg:col-span-4",
    surface: "cream",
    icon: Database,
    items: [
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Prisma ORM",
      "Redis",
      "BullMQ",
      "AWS S3",
    ],
  },
  {
    id: "tools",
    title: "Development Tools & QA",
    subtitle: "Version control, build tooling, testing & UI design workflows",
    colSpan: "lg:col-span-3",
    surface: "white",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "Vite",
      "Shopify CLI",
      "Quality Assurance",
      "UI Design",
    ],
  },
];

export function Skills({ skills }: SkillsProps) {
  // Additional verified skills from portfolioData not already listed
  const curatedSet = new Set(
    BENTO_SKILL_CATEGORIES.flatMap((group) => group.items.map((i) => i.toLowerCase()))
  );
  const additionalSkills = skills
    .map((s) => s.name)
    .filter((name) => !curatedSet.has(name.toLowerCase()));

  return (
    <section
      id="skills"
      data-section
      className="relative py-20 sm:py-24 bg-[#F7F5F0] border-b border-[#DAD8D0]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left">
          <div className="space-y-2.5 max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#590907]">
              02 • Technical Skills
            </p>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.4rem, 2.75rem)" }}
            >
              Structured Across the Full Stack.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#68665F] max-w-md leading-relaxed">
            Technologies, frameworks, and tools used in my production MERN applications and Shopify
            development work.
          </p>
        </div>

        {/* Structured Bento Grid (No arbitrary percentage bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 text-left">
          {BENTO_SKILL_CATEGORIES.map((group, idx) => {
            const Icon = group.icon;
            const isBurgundy = group.surface === "burgundy";

            return (
              <article
                key={group.id}
                className={cn(
                  "rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-5 border transition-all duration-200",
                  group.colSpan,
                  group.surface === "burgundy" &&
                    "bg-[#590907] border-[#590907] text-[#F7F5F0]",
                  group.surface === "cream" &&
                    "bg-[#E8D2B5]/65 border-[#DAD8D0] text-[#24231F]",
                  group.surface === "sage" &&
                    "bg-[#A5A79B]/22 border-[#DAD8D0] text-[#24231F]",
                  group.surface === "white" && "bento-card bg-[#FFFFFF] text-[#24231F]"
                )}
              >
                <div className="space-y-4">
                  <div
                    className={cn(
                      "flex items-start justify-between gap-3 border-b pb-4",
                      isBurgundy ? "border-[#E8D2B5]/20" : "border-[#DAD8D0]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                          isBurgundy
                            ? "bg-[#E8D2B5] text-[#590907]"
                            : "bg-[#590907] text-[#F7F5F0]"
                        )}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <h3
                          className={cn(
                            "font-heading font-bold text-base sm:text-lg leading-tight",
                            isBurgundy ? "text-[#F7F5F0]" : "text-[#24231F]"
                          )}
                        >
                          {group.title}
                        </h3>
                        <p
                          className={cn(
                            "text-xs mt-1 leading-relaxed",
                            isBurgundy ? "text-[#E8D2B5]/85" : "text-[#68665F]"
                          )}
                        >
                          {group.subtitle}
                        </p>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "text-xs font-mono font-semibold",
                        isBurgundy ? "text-[#E8D2B5]" : "text-[#590907]"
                      )}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Clean Typography Skill Pills */}
                  <ul className="flex flex-wrap gap-2" aria-label={group.title}>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "px-3 py-1.5 rounded-md text-xs font-medium border",
                          isBurgundy
                            ? "bg-[#3D0605] border-[#E8D2B5]/25 text-[#F7F5F0]"
                            : "bg-[#FFFFFF] border-[#DAD8D0] text-[#24231F]"
                        )}
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

        {/* Additional Interdisciplinary Capabilities from Portfolio Data */}
        {additionalSkills.length > 0 && (
          <div className="rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
            <div className="shrink-0">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#590907] block">
                Additional Capabilities
              </span>
              <span className="text-xs text-[#68665F]">
                Testing, design &amp; digital execution
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {additionalSkills.map((skillName) => (
                <span
                  key={skillName}
                  className="px-2.5 py-1 rounded-md bg-[#F7F5F0] border border-[#DAD8D0] text-xs font-medium text-[#24231F]"
                >
                  {skillName}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
