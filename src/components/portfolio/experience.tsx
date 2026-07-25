"use client";

import React, { useState } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard } from "@/components/ui/bento-grid";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string | null;
  startDate: Date | string;
  endDate: Date | string | null;
  isCurrent: boolean;
  description: string;
  orderIndex: number;
}

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  location: string | null;
  startDate: Date | string;
  endDate: Date | string | null;
  description: string;
  orderIndex: number;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
  educationList: EducationItem[];
  cvUrl?: string;
}

const FALLBACK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "current",
    company: "Rabbitcode Agency",
    role: "MERN Stack & Shopify App Developer",
    location: "Office",
    startDate: "2025-01-01",
    endDate: null,
    isCurrent: true,
    description:
      "Developing robust full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) and designing custom Shopify applications. Implementing embedded app architectures, Webhook event pipelines, GraphQL API integrations, and tailored Liquid themes to meet enterprise merchant requirements.",
    orderIndex: 2,
  },
  {
    id: "intern",
    company: "Sedulous® Infosys",
    role: "MERN Stack Developer Intern",
    location: "Surat, Gujarat",
    startDate: "2024-03-01",
    endDate: "2024-12-31",
    isCurrent: false,
    description:
      "Worked as a MERN Stack Developer Intern for 9+ months. Gained experience building full-stack web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB. Handled deployment pipelines, API integration, and developed user-friendly, responsive layouts.",
    orderIndex: 1,
  },
];

export function Experience({
  experiences,
  educationList,
}: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const displayExperiences = experiences.length ? experiences : FALLBACK_EXPERIENCE;

  return (
    <section id="experience" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Background Lighting */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold tracking-[0.25em] text-gold-400 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              04 // CHRONOLOGY &amp; CAREER
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight text-white">
              WORK &amp; <span className="text-gold-400 glow-text">BACKGROUND</span>.
            </h2>
          </div>

          {/* Work / Education Tabs */}
          <div className="flex gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("work")}
              className={cn(
                "px-5 py-2 rounded-full text-3xs font-mono font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer",
                activeTab === "work"
                  ? "bg-gold-400 text-black shadow-md shadow-gold-400/20"
                  : "text-white/60 hover:text-white"
              )}
            >
              <Briefcase className="h-3.5 w-3.5" />
              EXPERIENCE
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={cn(
                "px-5 py-2 rounded-full text-3xs font-mono font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer",
                activeTab === "education"
                  ? "bg-gold-400 text-black shadow-md shadow-gold-400/20"
                  : "text-white/60 hover:text-white"
              )}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              EDUCATION
            </button>
          </div>
        </div>

        {/* Timeline Container (Linear Style) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 relative before:absolute before:top-4 before:bottom-4 before:left-4 sm:before:left-8 before:w-[2px] before:bg-gradient-to-b before:from-gold-400/80 before:via-white/10 before:to-transparent"
          >
            {activeTab === "work"
              ? displayExperiences.map((exp, idx) => (
                  <div key={exp.id} className="relative pl-12 sm:pl-20 text-left">
                    {/* Glowing Node Marker */}
                    <div className="absolute left-2 sm:left-6 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#040406] border-2 border-gold-400 flex items-center justify-center shadow-lg shadow-gold-400/30 z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
                    </div>

                    <BentoCard glow={idx === 0 ? "gold" : "none"} className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-black font-heading uppercase text-white tracking-tight">
                              {exp.role}
                            </h3>
                            {exp.isCurrent && (
                              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-4xs font-mono font-bold uppercase">
                                PRESENT
                              </span>
                            )}
                          </div>
                          <div className="text-xs font-bold text-gold-400 uppercase tracking-wider font-mono mt-1">
                            {exp.company}
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-3xs font-mono text-white/50">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3 text-gold-400" />
                            {exp.startDate.toString().substring(0, 7)} — {exp.endDate ? exp.endDate.toString().substring(0, 7) : "PRESENT"}
                          </span>
                          {exp.location && (
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3 w-3 text-ice-400" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </BentoCard>
                  </div>
                ))
              : educationList.map((edu) => (
                  <div key={edu.id} className="relative pl-12 sm:pl-20 text-left">
                    <div className="absolute left-2 sm:left-6 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#040406] border-2 border-ice-400 flex items-center justify-center z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-ice-400" />
                    </div>

                    <BentoCard glow="ice" className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                        <div>
                          <h3 className="text-xl font-black font-heading uppercase text-white tracking-tight">
                            {edu.degree} in {edu.fieldOfStudy}
                          </h3>
                          <div className="text-xs font-bold text-ice-400 uppercase tracking-wider font-mono mt-1">
                            {edu.institution}
                          </div>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </BentoCard>
                  </div>
                ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
