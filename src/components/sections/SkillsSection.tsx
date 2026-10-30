"use client";

import React from "react";
import { Skill } from "@/types/portfolio";
import { Layers, Server, ShoppingBag, Database, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillsSectionProps {
  skills: Skill[];
}

interface BentoSkillCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  colSpan: string;
  variant: "dark" | "cobalt" | "muted";
  items: string[];
}

const BENTO_SKILL_CARDS: BentoSkillCard[] = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Component architecture, type-safe state & responsive UIs",
    icon: Layers,
    colSpan: "lg:col-span-6",
    variant: "dark",
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
    subtitle: "Server-side runtimes, APIs & session security",
    icon: Server,
    colSpan: "lg:col-span-6",
    variant: "dark",
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
    id: "database",
    title: "Database & Infrastructure",
    subtitle: "Relational & document stores, ORMs, caching & job queues",
    icon: Database,
    colSpan: "lg:col-span-4",
    variant: "muted",
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
    id: "shopify",
    title: "Shopify",
    subtitle: "Custom embedded apps, Admin APIs & storefront extensions",
    icon: ShoppingBag,
    colSpan: "lg:col-span-4",
    variant: "cobalt",
    items: [
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
    id: "tools",
    title: "Development Tools",
    subtitle: "Version control, build tooling, testing & design systems",
    icon: Wrench,
    colSpan: "lg:col-span-4",
    variant: "dark",
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

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      data-section
      className="relative py-20 sm:py-28 bg-[#030407] border-b border-[#292D36]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-14">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#D4FF24]">
              <span>03</span>
              <span className="text-[#1558C9]">/</span>
              <span>Technical Stack</span>
            </div>
            <h2
              className="font-heading font-bold text-[#F5F5F5] tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(1.95rem, 3.2vw + 0.5rem, 3rem)" }}
            >
              Modular Capabilities Across the Stack.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B4B8C3] max-w-md leading-relaxed">
            Production technologies used to architect full-stack MERN applications, scalable backend
            APIs, and embedded Shopify apps.
          </p>
        </div>

        {/* Structured Bento Skill Cards (No arbitrary percentage bars) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 text-left"
          data-skill-count={skills.length}
        >
          {BENTO_SKILL_CARDS.map((group, idx) => {
            const Icon = group.icon;
            const isCobalt = group.variant === "cobalt";
            const isMuted = group.variant === "muted";

            return (
              <article
                key={group.id}
                className={cn(
                  "rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 border transition-colors",
                  group.colSpan,
                  isCobalt
                    ? "bg-[#1558C9] border-[#1558C9] text-[#F5F5F5]"
                    : isMuted
                    ? "bg-[#1A1E27] border-[#292D36] hover:border-[#1558C9]"
                    : "bg-[#101218] border-[#292D36] hover:border-[#1558C9]"
                )}
              >
                <div className="space-y-4">
                  <div
                    className={cn(
                      "flex items-center justify-between border-b pb-4",
                      isCobalt ? "border-[#F5F5F5]/20" : "border-[#292D36]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center",
                          isCobalt
                            ? "bg-[#030407] text-[#D4FF24]"
                            : "bg-[#1558C9]/20 border border-[#1558C9]/40 text-[#D4FF24]"
                        )}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-[#F5F5F5] leading-tight">
                          {group.title}
                        </h3>
                        <p
                          className={cn(
                            "text-xs mt-0.5",
                            isCobalt ? "text-[#F5F5F5]/85" : "text-[#B4B8C3]"
                          )}
                        >
                          {group.subtitle}
                        </p>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "text-xs font-mono font-bold",
                        isCobalt ? "text-[#D4FF24]" : "text-[#D4FF24]"
                      )}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Clean Technology Pills */}
                  <ul className="flex flex-wrap gap-2 pt-1" aria-label={`${group.title} skills`}>
                    {group.items.map((item, itemIdx) => (
                      <li
                        key={item}
                        className={cn(
                          "px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-colors",
                          isCobalt
                            ? itemIdx === 0
                              ? "bg-[#D4FF24] text-[#030407] font-bold"
                              : "bg-[#030407]/45 border border-[#F5F5F5]/20 text-[#F5F5F5]"
                            : itemIdx === 0
                            ? "bg-[#D4FF24]/15 border border-[#D4FF24]/50 text-[#D4FF24] font-semibold"
                            : "bg-[#030407] border border-[#292D36] text-[#F5F5F5]"
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
      </div>
    </section>
  );
}
