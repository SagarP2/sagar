"use client";

import React, { useState, useRef } from "react";
import {
  Plus,
  Minus,
  Download,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Magnetic } from "./magnetic";

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
  cvUrl,
}: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const displayExperiences = experiences.length
    ? experiences
    : FALLBACK_EXPERIENCE;

  const sortedExperiences = React.useMemo(() => {
    return [...displayExperiences].sort((a, b) => {
      if (a.isCurrent && !b.isCurrent) return -1;
      if (!a.isCurrent && b.isCurrent) return 1;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }, [displayExperiences]);

  const sortedEducation = React.useMemo(() => {
    return [...educationList].sort((a, b) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }, [educationList]);

  const formatDate = (date: Date | string | null, isCurrent = false) => {
    if (isCurrent) return "PRESENT";
    if (!date) return "";
    const d = new Date(date);
    return d
      .toLocaleDateString("en-US", { month: "short", year: "numeric" })
      .toUpperCase();
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="experience"
      data-section
      className="relative py-36 px-6 sm:px-12 steel-border-t bg-[#040406]"
    >
      {/* Blueprint Structural Layout Lines */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />

      <div className="max-w-4xl mx-auto w-full space-y-16 relative z-10">
        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          data-reveal="fade-up"
        >
          <div className="space-y-3">
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.25em] block">
              03 // CHRONOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase">
              JOURNEY &amp; PATH
            </h2>
          </div>

          {/* Tab selectors as deluxe tabs */}
          <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest font-mono select-none">
            <button
              onClick={() => {
                setActiveTab("work");
                setExpandedId(null);
              }}
              className={cn(
                "transition-colors cursor-pointer pb-1",
                activeTab === "work"
                  ? "text-gold-400 border-b border-gold-400 font-bold"
                  : "text-white/40 hover:text-white",
              )}
            >
              Career History
            </button>
            <span className="text-white/10">/</span>
            <button
              onClick={() => {
                setActiveTab("education");
                setExpandedId(null);
              }}
              className={cn(
                "transition-colors cursor-pointer pb-1",
                activeTab === "education"
                  ? "text-gold-400 border-b border-gold-400 font-bold"
                  : "text-white/40 hover:text-white",
              )}
            >
              Academic Path
            </button>
          </div>
        </div>

        {/* Timeline Indicator with GSAP Scroll transform */}
        <div
          ref={containerRef}
          className="relative border-l border-white/5 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-8 py-2"
        >
          {/* Guide tracks */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-400 via-white to-gold-500 shadow-[0_0_15px_rgba(198,163,104,0.4)]"
          />

          {activeTab === "work"
            ? sortedExperiences.map((exp) => {
                const isOpen = expandedId === exp.id;
                return (
                  <div
                    key={exp.id}
                    className="relative transition-all duration-300 group"
                  >
                    {/* Glowing Node Point */}
                    <div
                      className={cn(
                        "absolute -left-[29px] sm:-left-[45px] top-6 h-2.5 w-2.5 rounded-full border bg-black transition-all duration-500 shadow-md",
                        isOpen
                          ? "border-gold-400 bg-gold-400 shadow-gold-400/30 scale-125"
                          : "border-white/20 group-hover:border-gold-400/50 group-hover:bg-gold-400/20",
                      )}
                    />

                    <div className="p-6 sm:p-8 border border-white/5 bg-white/[0.01] rounded-2xl transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_35px_rgba(0,0,0,0.85)]">
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="w-full flex justify-between items-center text-left cursor-pointer"
                      >
                        <div className="space-y-2">
                          <span className="text-[9px] font-mono text-gold-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-gold-400/60" />
                            {formatDate(exp.startDate)} —{" "}
                            {formatDate(exp.endDate, exp.isCurrent)}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gold-400 transition-colors leading-tight uppercase font-heading tracking-tight">
                            {exp.role}
                          </h3>
                          <p className="text-2xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                            <Briefcase className="h-3.5 w-3.5 text-white/20" />
                            {exp.company}
                          </p>
                        </div>
                        <div className="p-2.5 border border-white/5 group-hover:border-gold-400/20 rounded-full transition-colors shrink-0 ml-4">
                          {isOpen ? (
                            <Minus className="h-3.5 w-3.5 text-gold-400" />
                          ) : (
                            <Plus className="h-3.5 w-3.5 text-white" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.45,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-6 border-t border-white/5 space-y-4 max-w-2xl text-xs sm:text-sm text-white/60 leading-relaxed font-sans whitespace-pre-wrap text-left">
                              {exp.location && (
                                <div className="text-[8.5px] font-mono uppercase tracking-widest text-gold-400/60 font-bold flex items-center gap-1.5">
                                  <MapPin className="h-3.5 w-3.5" />
                                  Coordinates // {exp.location}
                                </div>
                              )}
                              <p className="font-medium text-white/80">
                                {exp.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })
            : sortedEducation.map((edu) => {
                const isOpen = expandedId === edu.id;
                return (
                  <div
                    key={edu.id}
                    className="relative transition-all duration-300 group"
                  >
                    {/* Glowing Node Point */}
                    <div
                      className={cn(
                        "absolute -left-[29px] sm:-left-[45px] top-6 h-2.5 w-2.5 rounded-full border bg-black transition-all duration-500 shadow-md",
                        isOpen
                          ? "border-gold-400 bg-gold-400 shadow-gold-400/30 scale-125"
                          : "border-white/20 group-hover:border-gold-400/50 group-hover:bg-gold-400/20",
                      )}
                    />

                    <div className="p-6 sm:p-8 border border-white/5 bg-white/[0.01] rounded-2xl transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_35px_rgba(0,0,0,0.85)]">
                      <button
                        onClick={() => toggleExpand(edu.id)}
                        className="w-full flex justify-between items-center text-left cursor-pointer"
                      >
                        <div className="space-y-2">
                          <span className="text-[9px] font-mono text-gold-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-gold-400/60" />
                            {formatDate(edu.startDate)} —{" "}
                            {formatDate(edu.endDate)}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gold-400 transition-colors leading-tight uppercase font-heading tracking-tight">
                            {edu.degree} in {edu.fieldOfStudy}
                          </h3>
                          <p className="text-2xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                            <Briefcase className="h-3.5 w-3.5 text-white/20" />
                            {edu.institution}
                          </p>
                        </div>
                        <div className="p-2.5 border border-white/5 group-hover:border-gold-400/20 rounded-full transition-colors shrink-0 ml-4">
                          {isOpen ? (
                            <Minus className="h-3.5 w-3.5 text-gold-400" />
                          ) : (
                            <Plus className="h-3.5 w-3.5 text-white" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.45,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-6 border-t border-white/5 space-y-4 max-w-2xl text-xs sm:text-sm text-white/60 leading-relaxed font-sans whitespace-pre-wrap text-left">
                              {edu.location && (
                                <div className="text-[8.5px] font-mono uppercase tracking-widest text-gold-400/60 font-bold flex items-center gap-1.5">
                                  <MapPin className="h-3.5 w-3.5" />
                                  Coordinates // {edu.location}
                                </div>
                              )}
                              <p className="font-medium text-white/80">
                                {edu.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
        </div>

        {/* Executive CV Download Widget */}
        {cvUrl && (
          <div
            className="pt-4 flex justify-start animate-fadeIn"
            data-reveal="fade-up"
          >
            <Magnetic>
              <a
                href={cvUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] hover:border-gold-400/35 rounded-full text-[9px] font-black uppercase tracking-widest text-white transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
              >
                <Download className="h-4 w-4 text-gold-400" />
                Download Briefing CV
              </a>
            </Magnetic>
          </div>
        )}
      </div>
    </section>
  );
}
