"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";
import type { Project } from "@/types/portfolio";
import { GithubIcon as Github } from "./social-icons";
import { cn } from "@/lib/utils";
import { HaikeiSectionWave } from "./haikei-svg";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const sortedProjects = [...projects].sort((a, b) => b.orderIndex - a.orderIndex);
  const shouldReduceMotion = useReducedMotion();

  // Extract categories dynamically
  const rawCategories = Array.from(new Set(sortedProjects.map((p) => p.category)));
  const categories = ["all", ...rawCategories];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === activeCategory);

  const featuredProject = filteredProjects[0];
  const secondaryProjects = filteredProjects.slice(1, 3);
  const remainingProjects = filteredProjects.slice(3);

  return (
    <section
      id="projects"
      data-section
      className="relative py-20 sm:py-28 bg-[#A5A79B]/15 border-b border-[#DAD8D0] overflow-hidden"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-12 relative z-10">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-3 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D2B5]/70 border border-[#DAD8D0] text-[#590907] text-xs font-mono font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>01 • Selected Work</span>
            </div>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 3.2vw + 0.4rem, 3rem)" }}
            >
              Built for Real Workflows &amp; Production Use.
            </h2>
            <p className="text-sm sm:text-base text-[#68665F] leading-relaxed">
              Explore an asymmetrical bento showcase of full-stack web applications, e-commerce
              architectures, and developer tools built with React, Next.js, Node.js, and Shopify.
            </p>
          </motion.div>

          {/* Watermelon-inspired Category Pill Buttons */}
          <div
            className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] shadow-xs"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer capitalize",
                    isActive
                      ? "bg-[#590907] text-[#F7F5F0] shadow-xs"
                      : "text-[#68665F] hover:text-[#24231F] hover:bg-[#E8D2B5]/30"
                  )}
                >
                  {cat === "all" ? "All Projects" : cat.replace("-", " ")}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          {/* Bento Hero Card: Featured Flagship (12 cols) */}
          {featuredProject && (
            <motion.article
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-12 rounded-2xl bg-[#FFFFFF] border border-[#DAD8D0] overflow-hidden shadow-sm hover:border-[#A5A79B] transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image Showcase Column (7 cols) */}
                <div className="lg:col-span-7 bg-[#E8D2B5]/30 p-6 sm:p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#DAD8D0]">
                  <Link
                    href={`/projects/${featuredProject.slug}`}
                    className="w-full rounded-xl overflow-hidden border border-[#DAD8D0] bg-[#F7F5F0] aspect-[16/10] relative group block shadow-xs"
                    aria-label={`View ${featuredProject.title} project`}
                  >
                    {(() => {
                      const cover =
                        featuredProject.mediaList?.find((m) => m.isCover) ||
                        featuredProject.mediaList?.[0];
                      const imageUrl = cover?.media?.url;
                      return imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={featuredProject.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 680px"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-104"
                          priority
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#68665F] text-xs font-mono">
                          Image preview
                        </div>
                      );
                    })()}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#590907] text-[#F7F5F0] text-[10px] font-mono font-semibold tracking-wider uppercase shadow-xs">
                      Featured Project
                    </div>
                  </Link>
                </div>

                {/* Editorial Details Column (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#A5A79B]/20 text-[#590907] text-xs font-mono font-semibold uppercase">
                        {featuredProject.category}
                      </span>
                      <span className="text-xs font-mono text-[#68665F]">
                        Flagship Case
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-[#24231F]">
                      <Link
                        href={`/projects/${featuredProject.slug}`}
                        className="hover:text-[#590907] transition-colors"
                      >
                        {featuredProject.title}
                      </Link>
                    </h3>

                    <p className="text-sm sm:text-base text-[#68665F] leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Key Features List */}
                    {featuredProject.detailsList && featuredProject.detailsList.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-mono font-semibold text-[#24231F] uppercase tracking-wider block">
                          Key Capabilities:
                        </span>
                        <ul className="space-y-1.5">
                          {featuredProject.detailsList.slice(0, 3).map((detail) => (
                            <li
                              key={detail.id}
                              className="flex items-start gap-2 text-xs text-[#24231F]"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[#590907] shrink-0 mt-0.5" />
                              <span>
                                <strong className="font-semibold">{detail.title}:</strong>{" "}
                                {detail.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#F7F5F0] border border-[#DAD8D0] text-xs font-mono text-[#24231F]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-[#DAD8D0] flex flex-wrap items-center gap-3">
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#590907] text-[#F7F5F0] text-xs font-semibold hover:bg-[#3D0605] transition-colors shadow-xs"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#DAD8D0] text-[#24231F] text-xs font-semibold hover:bg-[#E8D2B5]/40 transition-colors"
                      >
                        <Github className="h-3.5 w-3.5 text-[#590907]" />
                        <span>Source Code</span>
                      </a>
                    )}

                    <Link
                      href={`/projects/${featuredProject.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#590907] hover:underline ml-auto"
                    >
                      <span>Full Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* Secondary Bento Grid: Varied spans (7 cols and 5 cols) */}
          {secondaryProjects.map((project, idx) => {
            const isWide = idx % 2 === 0;
            const cover =
              project.mediaList?.find((m) => m.isCover) || project.mediaList?.[0];
            const imageUrl = cover?.media?.url;

            return (
              <motion.article
                key={project.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "rounded-2xl bg-[#FFFFFF] border border-[#DAD8D0] p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#A5A79B] transition-all duration-300 group",
                  isWide ? "lg:col-span-7" : "lg:col-span-5"
                )}
              >
                <div className="space-y-4">
                  {/* Media Aspect */}
                  {imageUrl && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block rounded-xl overflow-hidden border border-[#DAD8D0] bg-[#F7F5F0] aspect-[16/10] relative group shadow-2xs"
                    >
                      <Image
                        src={imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-104"
                      />
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#24231F]/80 backdrop-blur-xs text-[#F7F5F0] text-[10px] font-mono">
                        {project.category}
                      </div>
                    </Link>
                  )}

                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-[#24231F]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-[#590907] transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#68665F] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#A5A79B]/15 border border-[#DAD8D0] text-[11px] font-mono text-[#24231F]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-[#F7F5F0] text-[10px] font-mono text-[#68665F]">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card footer actions */}
                <div className="pt-4 border-t border-[#DAD8D0] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#590907] hover:text-[#3D0605]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#68665F] hover:text-[#24231F]"
                      >
                        <Github className="h-3.5 w-3.5 text-[#590907]" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#590907] hover:underline"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}

          {/* Tertiary Bento Cards (Remaining projects, 3 columns on lg = 4 cols each) */}
          {remainingProjects.map((project, idx) => {
            const cover =
              project.mediaList?.find((m) => m.isCover) || project.mediaList?.[0];
            const imageUrl = cover?.media?.url;

            return (
              <motion.article
                key={project.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                className="lg:col-span-4 rounded-2xl bg-[#FFFFFF] border border-[#DAD8D0] p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-sm hover:border-[#A5A79B] transition-all duration-300 group"
              >
                <div className="space-y-3">
                  {imageUrl && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block rounded-lg overflow-hidden border border-[#DAD8D0] bg-[#F7F5F0] aspect-[16/10] relative group"
                    >
                      <Image
                        src={imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-104"
                      />
                    </Link>
                  )}

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-[#590907] uppercase font-semibold">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg tracking-tight text-[#24231F]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-[#590907] transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#68665F] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#F7F5F0] border border-[#DAD8D0] text-[10px] font-mono text-[#24231F]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#DAD8D0] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#590907] hover:underline font-semibold"
                      >
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#68665F] hover:text-[#24231F] font-mono text-[11px]"
                      >
                        GitHub
                      </a>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-[#590907] hover:underline"
                  >
                    <span>View</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
