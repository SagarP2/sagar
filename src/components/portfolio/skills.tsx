"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Layers,
  Server,
  ShoppingBag,
  Database,
  Wrench,
  Sparkles,
  Check,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCategory {
  id: string;
  title: string;
  shortLabel: string;
  subtitle: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  colSpan: string;
  accent: "burgundy" | "sage" | "cream" | "white";
  skills: {
    name: string;
    tag?: string;
  }[];
  capabilities: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    shortLabel: "Frontend",
    subtitle:
      "Component-driven web applications, SSR, App Router & design systems",
    badge: "User Interface",
    icon: Layers,
    colSpan: "lg:col-span-7",
    accent: "white",
    skills: [
      { name: "React.js", tag: "Core" },
      { name: "Next.js (App Router)", tag: "Production" },
      { name: "TypeScript", tag: "Strict" },
      { name: "JavaScript (ES6+)", tag: "Advanced" },
      { name: "HTML5 & CSS3", tag: "Semantic" },
      { name: "Tailwind CSS", tag: "Utility" },
      { name: "Responsive UI Architecture", tag: "Mobile-First" },
    ],
    capabilities: [
      "Server-side rendering & client hydration optimization",
      "Custom state management & declarative UI patterns",
      "Motion & fluid micro-interactions with zero layout shifts",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    shortLabel: "Backend",
    subtitle:
      "High-throughput APIs, authentication layers & server architectures",
    badge: "Microservices & APIs",
    icon: Server,
    colSpan: "lg:col-span-5",
    accent: "sage",
    skills: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "Framework" },
      { name: "RESTful API Design", tag: "Production" },
      { name: "GraphQL APIs", tag: "Queries & Mutations" },
      { name: "PHP", tag: "Legacy/Server" },
      { name: "JWT & Session Security", tag: "Auth" },
      { name: "Middleware & Rate Limiting", tag: "Defensive" },
    ],
    capabilities: [
      "Stateless API endpoints with strict Zod request sanitization",
      "Role-based access control (RBAC) & cryptographic session verification",
      "Comprehensive error boundary protocols & graceful failure handling",
    ],
  },
  {
    id: "shopify",
    title: "Shopify Development",
    shortLabel: "Shopify",
    subtitle:
      "Full-stack Shopify embedded applications, Admin GraphQL & Liquid templates",
    badge: "Commerce Engine",
    icon: ShoppingBag,
    colSpan: "lg:col-span-5",
    accent: "burgundy",
    skills: [
      { name: "Shopify Admin API", tag: "GraphQL & REST" },
      { name: "Shopify App Development", tag: "Embedded" },
      { name: "Shopify Polaris", tag: "Design System" },
      { name: "Shopify App Bridge", tag: "Navigation & Auth" },
      { name: "Theme App Extensions", tag: "Liquid Blocks" },
      { name: "Shopify Liquid", tag: "Theme Storefront" },
      { name: "Webhook Event Pipelines", tag: "HMAC Verified" },
    ],
    capabilities: [
      "Rate-limit managed GraphQL mutations for products & orders",
      "Zero-downtime webhook consumers with database state sync",
      "Custom storefront UI blocks injected via theme app extensions",
    ],
  },
  {
    id: "database",
    title: "Databases & Infrastructure",
    shortLabel: "Databases",
    subtitle:
      "Schema modeling, relational & document stores, caching & job queues",
    badge: "Data & Storage",
    icon: Database,
    colSpan: "lg:col-span-4",
    accent: "cream",
    skills: [
      { name: "MongoDB", tag: "Document Store" },
      { name: "PostgreSQL", tag: "Relational" },
      { name: "Supabase", tag: "Cloud DB" },
      { name: "Prisma ORM", tag: "Type-Safe Data" },
      { name: "Redis", tag: "Cache & PubSub" },
      { name: "BullMQ", tag: "Job Queues" },
      { name: "AWS S3", tag: "Cloud Assets" },
    ],
    capabilities: [
      "Indexing strategies & aggregation pipelines for low-latency queries",
      "Background worker queues for asynchronous webhook & email processing",
      "Database migrations and atomic transaction safety",
    ],
  },
  {
    id: "tools",
    title: "Development Tools & QA",
    shortLabel: "Tools",
    subtitle:
      "Version control, automated testing, quality assurance & design audit",
    badge: "Workflow & Quality",
    icon: Wrench,
    colSpan: "lg:col-span-3",
    accent: "white",
    skills: [
      { name: "Git & GitHub", tag: "VCS" },
      { name: "VS Code", tag: "Editor" },
      { name: "Postman", tag: "API Testing" },
      { name: "Unit Testing", tag: "QA" },
      { name: "System Testing", tag: "End-to-End" },
      { name: "Design Assurance", tag: "Accessibility" },
    ],
    capabilities: [
      "Automated linting and TypeScript strict type checking",
      "Rigorous edge-case testing and UI responsiveness audits",
      "Cross-browser compatibility and Core Web Vitals checks",
    ],
  },
];

export function Skills({ skills }: { skills?: unknown }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCategories =
    activeFilter === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeFilter);

  return (
    <section
      id="skills"
      data-section
      className="relative py-20 sm:py-28 bg-[#A5A79B]/15 border-b border-[#DAD8D0] overflow-hidden"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-3 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D2B5]/70 border border-[#DAD8D0] text-[#590907] text-xs font-mono font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>03 • Technical Capabilities</span>
            </div>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 3.2vw + 0.4rem, 3rem)" }}
            >
              Organized for Reliability &amp; Production Scale.
            </h2>
            <p className="text-sm sm:text-base text-[#68665F] leading-relaxed">
              Every skill listed represents genuine hands-on experience in
              shipping real products, building custom APIs, and solving
              technical business constraints.
            </p>
          </motion.div>

          {/* Interactive Filter Pills */}
          <div
            className="flex items-center gap-1 p-1 rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] shadow-xs overflow-x-auto max-w-full"
            role="tablist"
          >
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer whitespace-nowrap",
                activeFilter === "all"
                  ? "bg-[#590907] text-[#F7F5F0] shadow-xs"
                  : "text-[#68665F] hover:text-[#24231F] hover:bg-[#E8D2B5]/30",
              )}
            >
              All
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer whitespace-nowrap",
                  activeFilter === cat.id
                    ? "bg-[#590907] text-[#F7F5F0] shadow-xs"
                    : "text-[#68665F] hover:text-[#24231F] hover:bg-[#E8D2B5]/30",
                )}
              >
                {cat.shortLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Bento Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          {filteredCategories.map((category, idx) => {
            const Icon = category.icon;
            const isBurgundy = category.accent === "burgundy";

            return (
              <motion.div
                key={category.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={cn(
                  "rounded-2xl border p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-300",
                  category.colSpan,
                  isBurgundy
                    ? "bg-[#590907] border-[#590907] text-[#F7F5F0]"
                    : "bg-[#FFFFFF] border-[#DAD8D0] text-[#24231F] hover:border-[#A5A79B]",
                )}
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span
                        className={cn(
                          "inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider",
                          isBurgundy
                            ? "bg-[#E8D2B5] text-[#590907]"
                            : "bg-[#E8D2B5]/60 text-[#590907]",
                        )}
                      >
                        {category.badge}
                      </span>
                      <h3
                        className={cn(
                          "font-heading font-bold text-xl sm:text-2xl tracking-tight mt-1",
                          isBurgundy ? "text-[#F7F5F0]" : "text-[#24231F]",
                        )}
                      >
                        {category.title}
                      </h3>
                    </div>

                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs",
                        isBurgundy
                          ? "bg-[#FFFFFF]/15 text-[#E8D2B5]"
                          : "bg-[#A5A79B]/20 text-[#590907]",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p
                    className={cn(
                      "text-xs sm:text-sm leading-relaxed",
                      isBurgundy ? "text-[#E8D2B5]" : "text-[#68665F]",
                    )}
                  >
                    {category.subtitle}
                  </p>

                  {/* Skills Grid with clean badges — NO fake percentage bars */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors",
                          isBurgundy
                            ? "bg-[#FFFFFF]/10 border-[#FFFFFF]/20 text-[#F7F5F0] hover:bg-[#FFFFFF]/20"
                            : "bg-[#F7F5F0] border-[#DAD8D0] text-[#24231F] hover:border-[#A5A79B] hover:bg-[#E8D2B5]/30",
                        )}
                      >
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span
                            className={cn(
                              "text-[9px] px-1.5 py-0.2 rounded font-semibold uppercase tracking-wider",
                              isBurgundy
                                ? "bg-[#E8D2B5] text-[#590907]"
                                : "bg-[#A5A79B]/25 text-[#590907]",
                            )}
                          >
                            {skill.tag}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Capabilities List */}
                <div
                  className={cn(
                    "pt-4 border-t space-y-2",
                    isBurgundy ? "border-[#FFFFFF]/20" : "border-[#DAD8D0]",
                  )}
                >
                  <span
                    className={cn(
                      "text-[10px] font-mono uppercase tracking-wider block",
                      isBurgundy ? "text-[#E8D2B5]" : "text-[#68665F]",
                    )}
                  >
                    Verified Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {category.capabilities.map((cap, capIdx) => (
                      <li
                        key={capIdx}
                        className={cn(
                          "flex items-start gap-2 text-xs",
                          isBurgundy ? "text-[#F7F5F0]/90" : "text-[#24231F]",
                        )}
                      >
                        <Check
                          className={cn(
                            "h-3.5 w-3.5 shrink-0 mt-0.5",
                            isBurgundy ? "text-[#E8D2B5]" : "text-[#590907]",
                          )}
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
