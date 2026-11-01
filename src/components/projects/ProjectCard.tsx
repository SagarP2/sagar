"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/types/portfolio";
import { TechBadge } from "@/components/ui/TechBadge";
import { GithubIcon } from "@/components/ui/SocialLinks";
import { cn } from "@/lib/utils";

type ProjectCardLayout = "horizontal" | "compact" | "architecture";

interface ProjectCardProps {
  project: Project;
  index: number;
  layout?: ProjectCardLayout;
  className?: string;
}

export function ProjectCard({
  project,
  index,
  layout = "compact",
  className,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const coverMedia =
    project.mediaList.find((m) => m.isCover)?.media ||
    project.mediaList[0]?.media;
  const secondaryMedia = project.mediaList[1]?.media;
  const formattedIndex = String(index + 1).padStart(2, "0");

  // Layout 1: Horizontal Project Composition (e.g., Rabbit Case)
  if (layout === "horizontal") {
    return (
      <motion.article
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "bg-[#101218] border border-[#292D36] hover:border-[#1558C9] transition-colors grid grid-cols-1 lg:grid-cols-12 overflow-hidden",
          className
        )}
      >
        {/* Left 6 Columns: Narrative, Problem/Solution & Features */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-6 order-2 lg:order-1">
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#292D36]">
              <span className="px-2.5 py-1 bg-[#1558C9] text-[#F5F5F5] text-xs font-mono font-bold uppercase tracking-widest">
                {formattedIndex} · HORIZONTAL CASE
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4FF24]">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F5F5]">
              {project.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 bg-[#030407] border border-[#292D36]">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B4B8C3] mb-1">
                  PROBLEM BEING SOLVED
                </p>
                <p className="text-xs sm:text-sm text-[#B4B8C3] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-3.5 bg-[#171B25] border border-[#292D36]">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4FF24] mb-1">
                  WHAT I DEVELOPED
                </p>
                <p className="text-xs sm:text-sm text-[#F5F5F5] leading-relaxed">
                  {project.whatIBuilt}
                </p>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B4B8C3] mb-2">
                MAIN FEATURES
              </p>
              <ul className="space-y-1.5">
                {project.importantFunctionality.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs sm:text-sm text-[#F5F5F5]"
                  >
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-[#D4FF24] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-[#292D36] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} label={tech} variant="dark" />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D4FF24] text-[#030407] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#F5F5F5] transition-colors"
                >
                  Live Demo
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#030407] border border-[#292D36] text-[#F5F5F5] text-xs font-mono font-semibold uppercase tracking-wider hover:border-[#D4FF24] hover:text-[#D4FF24] transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  GitHub
                </a>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono uppercase tracking-wider text-[#B4B8C3] hover:text-[#D4FF24] transition-colors"
              >
                Details
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right 6 Columns: Dual Visual Composition */}
        <div className="lg:col-span-6 bg-[#030407] border-b lg:border-b-0 lg:border-l border-[#292D36] p-4 sm:p-6 flex flex-col justify-between gap-4 order-1 lg:order-2 group">
          {coverMedia && (
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#292D36]">
              <Image
                src={coverMedia.url}
                alt={`${project.title} primary screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          )}

          {secondaryMedia && (
            <div className="grid grid-cols-2 gap-3">
              {project.mediaList.slice(1, 3).map((item, idx) => (
                <div
                  key={item.id}
                  className="relative aspect-[16/9] overflow-hidden border border-[#292D36]"
                >
                  <Image
                    src={item.media.url}
                    alt={`${project.title} screen ${idx + 2}`}
                    fill
                    sizes="280px"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.article>
    );
  }

  // Layout 2: Architecture / Visual Showcase Panel (e.g., MERN Login & Registration)
  if (layout === "architecture") {
    return (
      <motion.article
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "bg-[#101218] border border-[#292D36] hover:border-[#1558C9] transition-colors grid grid-cols-1 lg:grid-cols-12 overflow-hidden",
          className
        )}
      >
        <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] bg-[#030407] border-b lg:border-b-0 lg:border-r border-[#292D36] overflow-hidden group">
          {coverMedia && (
            <Image
              src={coverMedia.url}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#030407]/90 border border-[#292D36] text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4FF24]">
            {formattedIndex} · ARCHITECTURE SHOWCASE
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-5">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4FF24]">
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-[#B4B8C3]">
                JWT · BCRYPT · RBAC MIDDLEWARE
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F5F5]">
              {project.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B4B8C3] mb-1">
                  PROBLEM SOLVED
                </p>
                <p className="text-xs sm:text-sm text-[#B4B8C3] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4FF24] mb-1">
                  WHAT I DEVELOPED
                </p>
                <p className="text-xs sm:text-sm text-[#F5F5F5] leading-relaxed">
                  {project.whatIBuilt}
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              {project.importantFunctionality.map((item) => (
                <li
                  key={item}
                  className="p-2.5 bg-[#030407] border border-[#292D36] text-xs text-[#F5F5F5] flex items-start gap-2"
                >
                  <span className="h-1.5 w-1.5 bg-[#D4FF24] shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[#292D36] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} label={tech} variant="dark" />
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#030407] border border-[#292D36] text-[#F5F5F5] text-xs font-mono font-semibold uppercase tracking-wider hover:border-[#D4FF24] hover:text-[#D4FF24] transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  GitHub Source
                </a>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#171B25] border border-[#292D36] text-[#F5F5F5] text-xs font-mono uppercase tracking-wider hover:border-[#D4FF24] hover:text-[#D4FF24] transition-colors"
              >
                Details
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Layout 3: Compact Editorial Project Panel (default)
  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "bg-[#101218] border border-[#292D36] hover:border-[#1558C9] transition-colors flex flex-col justify-between overflow-hidden group",
        className
      )}
    >
      <div>
        {/* Screenshot Header */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#030407] border-b border-[#292D36]">
          {coverMedia && (
            <Image
              src={coverMedia.url}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 bg-[#030407]/90 border border-[#292D36] text-xs font-mono font-bold text-[#D4FF24]">
              {formattedIndex}
            </span>
            <span className="px-2.5 py-1 bg-[#030407]/90 border border-[#292D36] text-[11px] font-mono uppercase tracking-wider text-[#F5F5F5]">
              {project.category}
            </span>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-7 space-y-4">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F5F5] group-hover:text-[#D4FF24] transition-colors">
            {project.title}
          </h3>

          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B4B8C3] mb-1">
                PROBLEM BEING SOLVED
              </p>
              <p className="text-xs sm:text-sm text-[#B4B8C3] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4FF24] mb-1">
                WHAT I DEVELOPED
              </p>
              <p className="text-xs sm:text-sm text-[#F5F5F5] leading-relaxed">
                {project.whatIBuilt}
              </p>
            </div>
          </div>

          <div className="pt-1">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B4B8C3] mb-2">
              MAIN FEATURES
            </p>
            <ul className="space-y-1.5">
              {project.importantFunctionality.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs text-[#B4B8C3]"
                >
                  <span className="h-1.5 w-1.5 bg-[#D4FF24] shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Stack & Links */}
      <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#292D36] space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} variant="dark" />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D4FF24] text-[#030407] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#F5F5F5] transition-colors"
            >
              Live Demo
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#030407] border border-[#292D36] text-[#F5F5F5] text-xs font-mono font-semibold uppercase tracking-wider hover:border-[#D4FF24] hover:text-[#D4FF24] transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono uppercase tracking-wider text-[#B4B8C3] hover:text-[#D4FF24] transition-colors ml-auto"
          >
            Case Study
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

