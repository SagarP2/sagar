"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Download,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import type { Experience as ExperienceType, Education } from "@/types/portfolio";
import { formatDateRange } from "@/lib/formatDate";
import { cn } from "@/lib/utils";

interface ExperienceProps {
  experiences: ExperienceType[];
  educationList: Education[];
  cvUrl?: string;
}

export function Experience({
  experiences,
  educationList,
  cvUrl = "/Resume_Sagar_Panchal.pdf",
}: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const shouldReduceMotion = useReducedMotion();

  const sortedExperience = [...experiences].sort((a, b) => b.orderIndex - a.orderIndex);
  const sortedEducation = [...educationList].sort((a, b) => b.orderIndex - a.orderIndex);

  return (
    <section
      id="experience"
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
              <Briefcase className="h-3.5 w-3.5" />
              <span>05 • Professional Journey</span>
            </div>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 3.2vw + 0.4rem, 3rem)" }}
            >
              Verified Experience &amp; Academic Background.
            </h2>
            <p className="text-sm sm:text-base text-[#68665F] leading-relaxed">
              A chronological timeline of production engineering roles, client agency deliverables,
              and academic milestones in Information Technology.
            </p>
          </motion.div>

          {/* Tab Filter & Resume Action */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              className="p-1 rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] shadow-xs flex items-center gap-1"
              role="tablist"
            >
              <button
                type="button"
                onClick={() => setActiveTab("work")}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-2",
                  activeTab === "work"
                    ? "bg-[#590907] text-[#F7F5F0] shadow-xs"
                    : "text-[#68665F] hover:text-[#24231F]"
                )}
              >
                <Briefcase className="h-3.5 w-3.5" />
                <span>Work Experience</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("education")}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-2",
                  activeTab === "education"
                    ? "bg-[#590907] text-[#F7F5F0] shadow-xs"
                    : "text-[#68665F] hover:text-[#24231F]"
                )}
              >
                <GraduationCap className="h-3.5 w-3.5" />
                <span>Education</span>
              </button>
            </div>

            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E8D2B5] border border-[#DAD8D0] text-[#24231F] text-xs font-semibold hover:bg-[#E8D2B5]/80 transition-colors shadow-xs"
            >
              <Download className="h-3.5 w-3.5 text-[#590907]" />
              <span>Full Resume</span>
            </a>
          </div>
        </div>

        {/* Timeline Bento Layout */}
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {activeTab === "work" ? (
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#DAD8D0] space-y-8">
              {sortedExperience.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span
                    className={cn(
                      "absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-4 border-[#F7F5F0] transition-colors",
                      exp.isCurrent ? "bg-[#590907]" : "bg-[#A5A79B]"
                    )}
                  />

                  {/* Experience Card */}
                  <div className="rounded-2xl bg-[#FFFFFF] border border-[#DAD8D0] p-6 sm:p-8 space-y-4 shadow-sm hover:border-[#A5A79B] transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#DAD8D0]">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <h3 className="font-heading font-bold text-lg sm:text-xl text-[#24231F]">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#590907] text-[#F7F5F0] uppercase">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="font-heading font-semibold text-sm text-[#590907]">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#68665F]">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {formatDateRange(exp.startDate, exp.endDate, exp.isCurrent)}
                          </span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[#68665F] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#DAD8D0] space-y-8">
              {sortedEducation.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-4 border-[#F7F5F0] bg-[#590907]" />

                  {/* Education Card */}
                  <div className="rounded-2xl bg-[#FFFFFF] border border-[#DAD8D0] p-6 sm:p-8 space-y-4 shadow-sm hover:border-[#A5A79B] transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#DAD8D0]">
                      <div className="space-y-1">
                        <h3 className="font-heading font-bold text-lg sm:text-xl text-[#24231F]">
                          {edu.degree}
                        </h3>
                        <p className="font-heading font-semibold text-sm text-[#590907]">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#68665F]">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{formatDateRange(edu.startDate, edu.endDate, false)}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{edu.location}</span>
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[#68665F] leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
