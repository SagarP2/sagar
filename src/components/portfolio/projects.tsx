"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FolderGit2, Sparkles, Layers } from "lucide-react";
import { GithubIcon as Github } from "./social-icons";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { motion, AnimatePresence } from "framer-motion";

interface Media {
  url: string;
}

interface ProjectMedia {
  isCover: boolean;
  media: Media;
}

interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  purpose: string;
  githubUrl: string | null;
  liveUrl: string | null;
  techStack: string[];
  orderIndex: number;
  mediaList: ProjectMedia[];
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const FALLBACK_PROJECTS: ProjectItem[] = [
  {
    id: "track-my-spend",
    title: "Track My Spend",
    slug: "track-my-spend",
    category: "Web-App",
    description: "Track My Spend is a modern personal finance management web application that allows users to monitor income, categorize expenses, and visualize spending habits.",
    purpose: "To help users track daily expenses, manage income, and gain financial insights.",
    githubUrl: null,
    liveUrl: "https://track-my-spend-wheat.vercel.app/",
    techStack: ["React.js", "Next.js", "TailwindCSS", "Node.js", "MongoDB"],
    orderIndex: 10,
    mediaList: [],
  },
  {
    id: "techveda-portfolio",
    title: "TechVeda Portfolio",
    slug: "techveda-portfolio",
    category: "Portfolio",
    description: "TechVeda Portfolio is a modern developer portfolio website designed to highlight projects, technical skills, and experience.",
    purpose: "To showcase projects, skills, and professional experience through a high-performance website.",
    githubUrl: "https://github.com/SagarP2/techveda-portfolio",
    liveUrl: "https://techvedaportfolio.vercel.app/",
    techStack: ["React.js", "Next.js", "TailwindCSS", "Node.js", "MongoDB"],
    orderIndex: 9,
    mediaList: [],
  },
];

export function Projects({ projects }: ProjectsProps) {
  const displayProjects = projects.length ? projects : FALLBACK_PROJECTS;
  const categories = ["all", ...Array.from(new Set(displayProjects.map((p) => p.category)))];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? displayProjects
    : displayProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Background Lighting */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold tracking-[0.25em] text-gold-400 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              03 // SELECTED WORKS
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight text-white">
              PROJECT <span className="text-gold-400 glow-text">SHOWCASE</span>.
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-3xs font-mono font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer",
                  activeCategory === cat
                    ? "bg-gold-400 text-black shadow-lg shadow-gold-400/20"
                    : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Spatial Bento Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => {
              const coverItem = project.mediaList?.find((m) => m.isCover) || project.mediaList?.[0];
              const imageUrl = coverItem?.media?.url || null;

              return (
                <BentoCard
                  key={project.id}
                  glow={idx % 2 === 0 ? "gold" : "ice"}
                  className="group flex flex-col justify-between min-h-[26rem] p-7"
                >
                  {/* Card Header & Media */}
                  <div className="space-y-5">
                    {/* Media Preview Box */}
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-video relative group-hover:border-gold-400/40 transition-colors">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-black/80 text-white/20 p-4 text-center">
                          <FolderGit2 className="h-8 w-8 mb-2 text-gold-400/40" />
                          <span className="text-3xs font-mono font-bold tracking-widest uppercase">
                            SPEC BLUEPRINT READY
                          </span>
                        </div>
                      )}

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-4xs font-mono font-bold uppercase text-gold-400">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2 text-left">
                      <h3 className="text-xl font-black uppercase tracking-tight text-white font-heading group-hover:text-gold-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Tech Stack Chips & Link Button */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between gap-4 mt-auto">
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/[0.04] text-5xs font-mono font-bold text-white/60 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-2xs font-mono font-bold tracking-widest text-gold-400 hover:text-white uppercase transition-colors underline-reveal"
                    >
                      <span>DETAILS</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </BentoCard>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
