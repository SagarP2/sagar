"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Layers, Code2, Sparkles } from "lucide-react";
import { Project } from "@/types/portfolio";
import { TechBadge } from "@/components/ui/TechBadge";

interface HeroVisualProps {
  project: Project;
}

export function HeroVisual({ project }: HeroVisualProps) {
  const prefersReducedMotion = useReducedMotion();
  const mediaItems = project.mediaList.map((item) => item.media);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = mediaItems[activeIndex] ?? mediaItems[0];

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Haikei-inspired Low-Poly & Organic Cobalt Blue Backdrop */}
      <div
        className="absolute -top-6 -right-6 w-full h-full bg-[#1558C9] border border-[#1558C9] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 600 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-35"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 600,0 480,180 120,140" fill="#030407" fillOpacity="0.25" />
          <polygon points="480,180 600,0 600,500 340,420" fill="#030407" fillOpacity="0.4" />
          <path
            d="M0,380 Q180,310 340,420 T600,360 L600,500 L0,500 Z"
            fill="#030407"
            fillOpacity="0.55"
          />
          <line x1="120" y1="140" x2="480" y2="180" stroke="#D4FF24" strokeWidth="1.5" />
          <circle cx="480" cy="180" r="4" fill="#D4FF24" />
        </svg>
      </div>

      {/* Acid Lime Geometric Corner Accent */}
      <div
        className="absolute -bottom-3 -left-3 w-20 h-20 bg-[#D4FF24] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Main Architectural Frame */}
      <div className="relative z-10 bg-[#101218] border border-[#292D36] shadow-2xl">
        {/* Top Studio Telemetry Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 bg-[#030407] border-b border-[#292D36]">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 bg-[#D4FF24]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#F5F5F5]">
              FEATURED BUILD · 01
            </span>
          </div>

          <div className="flex items-center gap-2">
            {mediaItems.slice(0, 4).map((media, idx) => (
              <button
                key={media.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Preview screen ${idx + 1} of ${project.title}`}
                className={`px-2 py-0.5 text-[10px] font-mono uppercase transition-colors cursor-pointer ${
                  activeIndex === idx
                    ? "bg-[#D4FF24] text-[#030407] font-bold"
                    : "bg-[#171B25] text-[#B4B8C3] hover:text-[#F5F5F5] border border-[#292D36]"
                }`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Screenshot Viewport */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#030407] border-b border-[#292D36] group">
          <AnimatePresence mode="wait">
            {activeMedia && (
              <motion.div
                key={activeMedia.url}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeMedia.url}
                  alt={`${project.title} — ${project.category}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtle Glassmorphism Floating Architecture Pill */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 px-3.5 py-2 glass-overlay">
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#F5F5F5]">
              <Layers className="h-3.5 w-3.5 text-[#D4FF24]" aria-hidden="true" />
              <span>{project.category}</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4FF24]">
              VIEW SCREEN 0{activeIndex + 1} / 0{mediaItems.length}
            </span>
          </div>
        </div>

        {/* Project Details & Stack Panel */}
        <div className="p-5 sm:p-6 space-y-4 bg-[#101218]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F5F5]">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#B4B8C3] mt-1 line-clamp-2">
                {project.whatIBuilt}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#D4FF24] text-[#030407] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#F5F5F5] transition-colors"
                >
                  Live App
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#171B25] border border-[#292D36] text-[#F5F5F5] text-xs font-mono uppercase tracking-wider hover:border-[#D4FF24] hover:text-[#D4FF24] transition-colors"
              >
                Details
              </Link>
            </div>
          </div>

          {/* Tech Stack Row + Engineering Pill */}
          <div className="pt-3 border-t border-[#292D36] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} label={tech} variant="dark" />
              ))}
            </div>

            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#B4B8C3]">
              <Code2 className="h-3.5 w-3.5 text-[#1558C9]" aria-hidden="true" />
              <span>MERN + Shopify</span>
              <Sparkles className="h-3 w-3 text-[#D4FF24] ml-1" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

