"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Experience as ExperienceItem } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { formatDateRange } from "@/lib/formatDate";
import { cn } from "@/lib/utils";

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export function Experience({ experiences }: ExperienceProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 sm:py-28 border-b border-[#292D36] bg-[#030407]"
    >
      <div className="editorial-container px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          index="04"
          label="Professional Experience"
          title={
            <span id="experience-heading">
              Where I&apos;ve{" "}
              <span className="text-[#D4FF24]">Built &amp; Learned.</span>
            </span>
          }
          description="Hands-on agency and internship experience building full-stack MERN applications and custom Shopify solutions."
        />

        {/* Minimal Editorial Timeline with Acid Lime Markers */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#292D36] space-y-10">
          {experiences.map((exp, index) => {
            const period = formatDateRange(
              exp.startDate,
              exp.endDate,
              exp.isCurrent
            );

            return (
              <motion.article
                key={exp.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative bg-[#101218] border border-[#292D36] hover:border-[#1558C9] transition-colors p-6 sm:p-8"
              >
                {/* Acid Lime Timeline Node Marker */}
                <span
                  className={cn(
                    "absolute -left-[33px] sm:-left-[49px] top-8 h-4 w-4 border-2",
                    exp.isCurrent
                      ? "bg-[#D4FF24] border-[#030407] ring-4 ring-[#D4FF24]/25"
                      : "bg-[#1558C9] border-[#030407]"
                  )}
                  aria-hidden="true"
                />

                {/* Top Header: Role, Company, Duration & Location */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#292D36]">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-0.5 bg-[#030407] border border-[#292D36] text-[11px] font-mono font-bold uppercase tracking-widest text-[#D4FF24]">
                        0{index + 1}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 bg-[#D4FF24] text-[#030407] text-[10px] font-mono font-bold uppercase tracking-widest">
                          CURRENT ROLE
                        </span>
                      )}
                      <span className="text-sm font-mono font-semibold text-[#1558C9]">
                        {exp.company}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F5F5]">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#B4B8C3]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#030407] border border-[#292D36] text-[#F5F5F5]">
                      <Calendar
                        className="h-3.5 w-3.5 text-[#D4FF24]"
                        aria-hidden="true"
                      />
                      {period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#030407] border border-[#292D36]">
                      <MapPin
                        className="h-3.5 w-3.5 text-[#1558C9]"
                        aria-hidden="true"
                      />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities & Technical Contributions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-6">
                  <div className="space-y-3">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#B4B8C3]">
                      CORE RESPONSIBILITIES
                    </p>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-[#B4B8C3] leading-relaxed"
                        >
                          <span className="h-1.5 w-1.5 bg-[#1558C9] shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#D4FF24]">
                      TECHNICAL CONTRIBUTIONS
                    </p>
                    <ul className="space-y-2.5">
                      {exp.technicalContributions.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-[#F5F5F5] leading-relaxed"
                        >
                          <CheckCircle2
                            className="h-4 w-4 text-[#D4FF24] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies Row */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="pt-5 border-t border-[#292D36] flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B4B8C3] mr-2">
                      TECHNOLOGIES:
                    </span>
                    {exp.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} variant="dark" />
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
