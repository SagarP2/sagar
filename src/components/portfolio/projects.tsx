"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Code2, FolderGit2 } from "lucide-react";
import { GithubIcon as Github } from "./social-icons";
import { cn } from "@/lib/utils";

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
    <section id="projects" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#000000]">
      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" data-reveal="fade-up">
          <div className="space-y-3">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] block">
              04 // Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase">
              Selected Works
            </h2>
          </div>

          {/* Filter Categories Tabs */}
          <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-widest font-mono select-none">
            {categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                {idx > 0 && <span className="text-white/20">/</span>}
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "transition-colors cursor-pointer",
                    activeCategory === cat ? "text-white underline underline-offset-4" : "text-white/40 hover:text-white/60"
                  )}
                >
                  {cat === "all" ? "All Works" : cat}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/5 rounded-2xl max-w-md mx-auto">
            <FolderGit2 className="h-10 w-10 text-white/20 mx-auto mb-3" />
            <p className="text-white/40 font-mono text-2xs uppercase tracking-widest">No projects found.</p>
          </div>
        ) : (
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto" data-stagger>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

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
    <div
      className="group flex flex-col justify-between space-y-6"
      data-reveal="fade-in"
      data-stagger-item
    >
      {/* Cover Image container - triggers custom cursor text */}
      <Link
        href={`/projects/${project.slug}`}
        data-cursor-text="VIEW"
        className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#08080a] flex items-center justify-center cursor-none"
      >
        {coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverUrl}
            alt={project.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-800 ease-out-expo"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent flex flex-col justify-end p-6 select-none w-full h-full">
            <div className="absolute inset-0 premium-grid opacity-20 pointer-events-none" />
            <div>
              <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.25em]">CASE STUDY // {project.category}</span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase mt-1 leading-none">
                {project.title}
              </h3>
            </div>
          </div>
        )}
      </Link>

      {/* Details Container */}
      <div className="space-y-4 px-2 select-none">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white group-hover:text-white/80 transition-colors uppercase">
              {project.title}
            </h4>
            <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech Stack badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-bold uppercase tracking-wider text-white/40 bg-white/5 border border-white/2 px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links coordinator */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[9px] font-mono uppercase tracking-[0.2em] text-white/30">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-white/60 hover:text-white transition-colors underline-reveal"
          >
            <Code2 className="mr-1.5 h-3.5 w-3.5" />
            Read Case Study
          </Link>
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 underline-reveal"
              >
                <Github className="h-3 w-3" />
                Repo
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 underline-reveal"
              >
                <ExternalLink className="h-3 w-3" />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
