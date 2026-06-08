"use client";

import React, { useState } from "react";
import { Plus, Minus, Download } from "lucide-react";
import { cn } from "@/lib/utils";
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
    company: "Freelance",
    role: "Full Stack & Shopify App Developer",
    location: "Remote",
    startDate: "2025-01-01",
    endDate: null,
    isCurrent: true,
    description: "Developing custom portfolio apps, e-commerce solutions, and Shopify Apps. Delivering client projects using Next.js, React, Node, Express, MongoDB, and PHP systems. Working with merchants on store customization and custom Shopify App integrations.",
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
    description: "Worked as a MERN Stack Developer Intern for 9+ months. Gained experience building full-stack web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB. Handled deployment pipelines, API integration, and developed user-friendly, responsive layouts.",
    orderIndex: 1,
  },
];

export function Experience({ experiences, educationList, cvUrl }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const displayExperiences = experiences.length ? experiences : FALLBACK_EXPERIENCE;

  const formatDate = (date: Date | string | null, isCurrent = false) => {
    if (isCurrent) return "Present";
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#000000]">
      <div className="max-w-4xl mx-auto w-full space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6" data-reveal="fade-up">
          <div className="space-y-3">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] block">
              03 // Chronology
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase">
              Journey & Path
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest font-mono select-none">
            <button
              onClick={() => {
                setActiveTab("work");
                setExpandedId(null);
              }}
              className={cn(
                "transition-colors cursor-pointer",
                activeTab === "work" ? "text-white underline underline-offset-4" : "text-white/40 hover:text-white/60"
              )}
            >
              Career History
            </button>
            <span className="text-white/20">/</span>
            <button
              onClick={() => {
                setActiveTab("education");
                setExpandedId(null);
              }}
              className={cn(
                "transition-colors cursor-pointer",
                activeTab === "education" ? "text-white underline underline-offset-4" : "text-white/40 hover:text-white/60"
              )}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline List Accordions */}
        <div className="border-t border-white/5 divide-y divide-white/5">
          {activeTab === "work" ? (
            displayExperiences.map((exp) => {
              const isOpen = expandedId === exp.id;
              return (
                <div key={exp.id} className="py-6 transition-all duration-300">
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="w-full flex justify-between items-center text-left group cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                        {formatDate(exp.startDate)} — {formatDate(exp.endDate, exp.isCurrent)}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-white/80 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-semibold text-white/50">{exp.company}</p>
                    </div>
                    <div className="p-2 border border-white/5 group-hover:border-white/25 rounded-full transition-colors">
                      {isOpen ? <Minus className="h-4 w-4 text-white" /> : <Plus className="h-4 w-4 text-white" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 space-y-3 max-w-2xl text-xs sm:text-sm text-white/60 leading-relaxed font-sans whitespace-pre-wrap">
                          {exp.location && (
                            <div className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                              Location // {exp.location}
                            </div>
                          )}
                          <p>{exp.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            educationList.map((edu) => {
              const isOpen = expandedId === edu.id;
              return (
                <div key={edu.id} className="py-6 transition-all duration-300">
                  <button
                    onClick={() => toggleExpand(edu.id)}
                    className="w-full flex justify-between items-center text-left group cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                        {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-white/80 transition-colors">
                        {edu.degree} in {edu.fieldOfStudy}
                      </h3>
                      <p className="text-xs font-semibold text-white/50">{edu.institution}</p>
                    </div>
                    <div className="p-2 border border-white/5 group-hover:border-white/25 rounded-full transition-colors">
                      {isOpen ? <Minus className="h-4 w-4 text-white" /> : <Plus className="h-4 w-4 text-white" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 space-y-3 max-w-2xl text-xs sm:text-sm text-white/60 leading-relaxed font-sans whitespace-pre-wrap">
                          {edu.location && (
                            <div className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                              Location // {edu.location}
                            </div>
                          )}
                          <p>{edu.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Optional CV Download banner */}
        {cvUrl && (
          <div className="pt-4 flex justify-start" data-reveal="fade-up">
            <a
              href={cvUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/35 rounded-full text-[10px] font-black uppercase tracking-widest text-white transition-all duration-300 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              Download full CV
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
