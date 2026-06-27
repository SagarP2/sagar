"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Code2, FolderGit2 } from "lucide-react";
import { GithubIcon as Github } from "./social-icons";
import { cn } from "@/lib/utils";
import { Tilt } from "./tilt";
import { Magnetic } from "./magnetic";
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
    <section id="projects" data-section className="relative py-36 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Blueprint lines */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" data-reveal="fade-up">
          <div className="space-y-3">
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.25em] block">
              04 // CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase">
              SELECTED WORKS
            </h2>
          </div>

          {/* Filter Categories Tabs */}
          <div className="flex flex-wrap gap-3 text-[9px] font-bold uppercase tracking-widest font-mono select-none">
            {categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                {idx > 0 && <span className="text-white/10">/</span>}
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "transition-colors cursor-pointer pb-1",
                    activeCategory === cat 
                      ? "text-gold-400 border-b border-gold-400 font-bold" 
                      : "text-white/40 hover:text-white"
                  )}
                >
                  {cat === "all" ? "ALL WORKS" : cat.toUpperCase()}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24 border border-dashed border-white/5 rounded-2xl max-w-md mx-auto"
              >
                <FolderGit2 className="h-10 w-10 text-white/20 mx-auto mb-3" />
                <p className="text-white/40 font-mono text-[9px] uppercase tracking-widest">No projects found.</p>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const getCoverImage = (item: ProjectItem) => {
    const cover = item.mediaList?.find((m) => m.isCover);
    if (cover) return cover.media.url;
    if (item.mediaList?.length > 0) return item.mediaList[0].media.url;
    return "";
  };

  const coverUrl = getCoverImage(project);

  return (
    <Tilt>
      <div
        className="group flex flex-col justify-between space-y-6 border border-white/5 bg-white/[0.01] p-6 rounded-3xl hover:border-gold-400/20 hover:shadow-[0_0_40px_rgba(198,163,104,0.04)] transition-all duration-600 relative overflow-hidden"
      >
        {/* Cover Image container - triggers custom cursor text */}
        <Link
          href={`/projects/${project.slug}`}
          data-cursor-text="CASE STUDY"
          className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 bg-[#050507] flex items-center justify-center cursor-none"
        >
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out-expo"
            />
          ) : (
            <div className="absolute inset-0 bg-[#060608] flex flex-col justify-end p-6 select-none w-full h-full text-left">
              <div className="absolute inset-0 premium-grid opacity-15 pointer-events-none" />
              <div className="relative z-10 space-y-2">
                <span className="text-[8px] font-bold text-gold-400 uppercase tracking-[0.25em] block">
                  CASE STUDY // {project.category.toUpperCase()}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-none font-heading">
                  {project.title}
                </h3>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040406]/90 via-black/0 to-[#040406]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </Link>

        {/* Details Container */}
        <div className="space-y-5 px-1 select-none text-left">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[8px] font-mono text-gold-400 font-bold uppercase tracking-widest">
                SPEC ARCHITECTURE // {project.category}
              </span>
              <h4 className="text-xl font-black text-white group-hover:text-gold-400 transition-colors uppercase font-heading tracking-tight mt-1">
                {project.title}
              </h4>
              <p className="text-xs text-white/50 line-clamp-2 leading-relaxed pt-1 font-sans">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tech Stack badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[8px] font-mono font-bold uppercase tracking-wider text-white/40 bg-white/[0.02] border border-white/5 px-3 py-1 rounded-full group-hover:border-gold-400/20 group-hover:text-gold-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links coordinator */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[9px] font-mono uppercase tracking-[0.2em] text-white/30">
            <Magnetic>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center text-white/60 hover:text-white transition-colors underline-reveal"
              >
                <Code2 className="mr-1.5 h-3.5 w-3.5 text-gold-400/70" />
                Read Case Study
              </Link>
            </Magnetic>
            
            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <Magnetic>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 underline-reveal"
                  >
                    <Github className="h-3 w-3 text-gold-400/70" />
                    Source
                  </a>
                </Magnetic>
              )}
              {project.liveUrl && (
                <Magnetic>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 underline-reveal"
                  >
                    <ExternalLink className="h-3 w-3 text-gold-400/70" />
                    Launch
                  </a>
                </Magnetic>
              )}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
