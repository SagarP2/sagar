"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, ShoppingBag, Database, Check } from "lucide-react";
import { ExpertiseArea } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { GridPattern } from "@/components/graphics/GridPattern";
import { cn } from "@/lib/utils";

interface ExpertiseProps {
  areas: ExpertiseArea[];
}

const AREA_ICONS = [Code2, ShoppingBag, Database];

export function Expertise({ areas }: ExpertiseProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative py-20 sm:py-28 border-b border-[#292D36] bg-[#030407] overflow-hidden"
    >
      {/* Haikei-inspired Technical Network SVG */}
      <GridPattern
        variant="nodes"
        className="absolute inset-x-0 bottom-0 w-full opacity-30"
      />

      <div className="editorial-container relative z-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          index="02"
          label="Technical Expertise"
          title={
            <span id="expertise-heading">
              Things I{" "}
              <span className="text-[#D4FF24]">Build With.</span>
            </span>
          }
          description="Focused on full-stack MERN engineering, custom Shopify app architecture, and reliable backend infrastructure."
        />

        {/* 3-Column Bento & Typography-Driven Expertise Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {areas.map((area, index) => {
            const Icon = AREA_ICONS[index % AREA_ICONS.length];
            const isCobalt = area.accent === "cobalt";

            return (
              <motion.article
                key={area.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "relative p-6 sm:p-8 border flex flex-col justify-between gap-8 transition-colors overflow-hidden",
                  isCobalt
                    ? "bg-[#1558C9] border-[#1558C9] text-[#F5F5F5]"
                    : "bg-[#101218] border-[#292D36] text-[#F5F5F5] hover:border-[#1558C9]"
                )}
              >
                {/* Custom SVG Isometric Node Pattern in Top-Right Corner */}
                <GridPattern
                  variant="isometric"
                  className="absolute -top-6 -right-10 w-48 h-32 opacity-35"
                />

                <div className="relative z-10 space-y-6">
                  {/* Top Index + Icon Row */}
                  <div
                    className={cn(
                      "flex items-center justify-between pb-4 border-b",
                      isCobalt ? "border-[#F5F5F5]/25" : "border-[#292D36]"
                    )}
                  >
                    <span
                      className={cn(
                        "px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-widest",
                        isCobalt
                          ? "bg-[#030407] text-[#D4FF24]"
                          : "bg-[#030407] border border-[#292D36] text-[#D4FF24]"
                      )}
                    >
                      AREA {area.number}
                    </span>

                    <div
                      className={cn(
                        "p-2.5 border",
                        isCobalt
                          ? "bg-[#030407] border-[#030407] text-[#D4FF24]"
                          : "bg-[#171B25] border-[#292D36] text-[#D4FF24]"
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <p
                      className={cn(
                        "text-xs font-mono uppercase tracking-wider",
                        isCobalt ? "text-[#D4FF24]" : "text-[#B4B8C3]"
                      )}
                    >
                      {area.subtitle}
                    </p>
                    <h3 className="text-2xl font-heading font-bold text-[#F5F5F5]">
                      {area.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={cn(
                      "text-sm leading-relaxed",
                      isCobalt ? "text-[#F5F5F5]/90" : "text-[#B4B8C3]"
                    )}
                  >
                    {area.description}
                  </p>

                  {/* Key Engineering Deliverables */}
                  <div className="space-y-2.5 pt-1">
                    <p
                      className={cn(
                        "text-[11px] font-mono font-bold uppercase tracking-widest",
                        isCobalt ? "text-[#F5F5F5]" : "text-[#B4B8C3]"
                      )}
                    >
                      IMPLEMENTATION SCOPE
                    </p>
                    <ul className="space-y-2">
                      {area.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F5F5]"
                        >
                          <Check
                            className="h-4 w-4 shrink-0 mt-0.5 text-[#D4FF24]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technology Badges */}
                <div
                  className={cn(
                    "relative z-10 pt-5 border-t space-y-2.5",
                    isCobalt ? "border-[#F5F5F5]/25" : "border-[#292D36]"
                  )}
                >
                  <p
                    className={cn(
                      "text-[10px] font-mono font-bold uppercase tracking-widest",
                      isCobalt ? "text-[#D4FF24]" : "text-[#B4B8C3]"
                    )}
                  >
                    CORE STACK
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.technologies.map((tech) => (
                      <TechBadge
                        key={tech}
                        label={tech}
                        variant={isCobalt ? "dark" : "default"}
                        className={
                          isCobalt
                            ? "bg-[#030407] border-[#030407] text-[#F5F5F5]"
                            : undefined
                        }
                      />
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
