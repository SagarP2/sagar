"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, FolderGit2, ExternalLink, CheckCircle2 } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { GithubIcon as Github } from "./social-icons";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const sortedProjects = [...projects].sort((a, b) => b.orderIndex - a.orderIndex);
  const categories = ["all", ...Array.from(new Set(sortedProjects.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === activeCategory);

  const featuredProject = filteredProjects[0];
  const supportingProjects = filteredProjects.slice(1);

  return (
    <section
      id="projects"
      data-section
      className="relative py-20 sm:py-24 bg-[#A5A79B]/16 border-b border-[#DAD8D0]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-12">
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left">
          <div className="space-y-2.5 max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#590907]">
              03 • Selected Projects
            </p>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.4rem, 2.75rem)" }}
            >
              Built for Real Workflows &amp; Production Use.
            </h2>
            <p className="text-sm sm:text-base text-[#68665F] leading-relaxed">
              An asymmetrical bento showcase of full-stack web applications, personal finance tools,
              and developer platforms.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div
            className="flex flex-wrap gap-1.5"
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
                    "px-3.5 py-2 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer",
                    isActive
                      ? "bg-[#590907] text-[#F7F5F0]"
                      : "bg-[#FFFFFF] border border-[#DAD8D0] text-[#68665F] hover:text-[#24231F] hover:border-[#A5A79B]"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          {/* Featured Project — Large Bento Card (12 cols, split 7/5 internally) */}
          {featuredProject && (
            <article className="lg:col-span-12 bento-card rounded-xl bg-[#FFFFFF] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Preview Screenshot Column (7 cols) */}
                <div className="lg:col-span-7 bg-[#E8D2B5]/45 p-5 sm:p-7 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#DAD8D0]">
                  <Link
                    href={`/projects/${featuredProject.slug}`}
                    className="w-full rounded-lg overflow-hidden border border-[#DAD8D0] bg-[#F7F5F0] aspect-[16/10] relative group block shadow-xs"
                    aria-label={`View ${featuredProject.title} case study`}
                  >
                    {(() => {
                      const cover =
                        featuredProject.mediaList?.find((m) => m.isCover) ||
                        featuredProject.mediaList?.[0];
                      const imageUrl = cover?.media?.url;
                      return imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={`${featuredProject.title} application screenshot`}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-[#E8D2B5]/40 text-[#590907] p-6 text-center">
                          <FolderGit2 className="h-10 w-10 mb-2" aria-hidden="true" />
                          <span className="text-xs font-mono font-semibold uppercase">
                            {featuredProject.title}
                          </span>
                        </div>
                      );
                    })()}
                    <span className="glass-pill absolute top-3 left-3 px-3 py-1 rounded-md text-[11px] font-mono font-semibold text-[#590907]">
                      Featured Project • {featuredProject.category}
                    </span>
                  </Link>
                </div>

                {/* Editorial Details Column (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#590907]">
                        01 / Spotlight Build
                      </span>
                      <span className="text-xs font-mono text-[#68665F]">
                        {featuredProject.category}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#24231F] tracking-tight">
                      <Link
                        href={`/projects/${featuredProject.slug}`}
                        className="hover:text-[#590907] transition-colors"
                      >
                        {featuredProject.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-[#68665F] leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Key Functionality List */}
                    {featuredProject.detailsList && featuredProject.detailsList.length > 0 ? (
                      <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0] space-y-2">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#590907] block">
                          Key Functionality
                        </span>
                        <ul className="space-y-1.5">
                          {featuredProject.detailsList.slice(0, 3).map((detail) => (
                            <li
                              key={detail.id}
                              className="text-xs text-[#24231F] flex items-start gap-2"
                            >
                              <CheckCircle2
                                className="h-3.5 w-3.5 text-[#590907] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>
                                <strong>{detail.title}:</strong> {detail.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      featuredProject.purpose && (
                        <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0] space-y-1">
                          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#590907] block">
                            Key Purpose
                          </span>
                          <p className="text-xs text-[#68665F] leading-relaxed">
                            {featuredProject.purpose}
                          </p>
                        </div>
                      )
                    )}

                    {/* Tech Stack */}
                    <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Technology stack">
                      {featuredProject.techStack.map((tech) => (
                        <li
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#E8D2B5]/55 border border-[#DAD8D0] text-xs font-medium text-[#24231F]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="pt-4 border-t border-[#DAD8D0] flex flex-wrap items-center gap-4">
                    <Link
                      href={`/projects/${featuredProject.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#590907] text-[#F7F5F0] text-xs font-semibold hover:bg-[#3D0605] transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>

                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#590907] hover:text-[#3D0605] underline-reveal"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#24231F] hover:text-[#590907] underline-reveal"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Supporting Projects — Asymmetrical Bento Cards (7/5 alternating spans) */}
          {supportingProjects.map((project, idx) => {
            const coverItem =
              project.mediaList?.find((m) => m.isCover) || project.mediaList?.[0];
            const imageUrl = coverItem?.media?.url || null;

            // Asymmetrical Bento spans: row 1 -> 7 & 5; row 2 -> 5 & 7; etc.
            const rowPattern = idx % 4;
            const colSpan =
              rowPattern === 0 || rowPattern === 3 ? "lg:col-span-7" : "lg:col-span-5";
            const headerBg =
              idx % 2 === 0 ? "bg-[#A5A79B]/22" : "bg-[#E8D2B5]/45";

            return (
              <article
                key={project.id}
                className={cn(
                  "bento-card rounded-xl overflow-hidden flex flex-col justify-between bg-[#FFFFFF]",
                  colSpan
                )}
              >
                <div>
                  {/* Preview Image */}
                  <div className={cn("p-4 sm:p-5 border-b border-[#DAD8D0]", headerBg)}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block rounded-lg overflow-hidden border border-[#DAD8D0] bg-[#F7F5F0] aspect-[16/10] relative group"
                      aria-label={`View ${project.title} case study`}
                    >
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={`${project.title} preview screenshot`}
                          fill
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-[#F7F5F0] text-[#68665F] p-4 text-center">
                          <FolderGit2
                            className="h-8 w-8 mb-2 text-[#590907]"
                            aria-hidden="true"
                          />
                          <span className="text-xs font-mono font-semibold uppercase">
                            {project.title}
                          </span>
                        </div>
                      )}
                      <span className="glass-pill absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold text-[#24231F]">
                        {project.category}
                      </span>
                    </Link>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading font-bold text-xl text-[#24231F] tracking-tight">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="hover:text-[#590907] transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h3>
                      <span className="text-xs font-mono text-[#68665F]">
                        {String(idx + 2).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-sm text-[#68665F] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Functionality */}
                    {project.detailsList && project.detailsList.length > 0 ? (
                      <div className="p-3.5 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0] space-y-1.5">
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#590907] block">
                          Key Functionality
                        </span>
                        <ul className="space-y-1">
                          {project.detailsList.slice(0, 2).map((detail) => (
                            <li
                              key={detail.id}
                              className="text-xs text-[#24231F] flex items-start gap-1.5"
                            >
                              <CheckCircle2
                                className="h-3.5 w-3.5 text-[#590907] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>
                                <strong>{detail.title}:</strong> {detail.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      project.purpose && (
                        <div className="p-3.5 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0]">
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#590907] block mb-0.5">
                            Key Functionality
                          </span>
                          <p className="text-xs text-[#68665F] leading-relaxed">
                            {project.purpose}
                          </p>
                        </div>
                      )
                    )}

                    {/* Tech Stack */}
                    <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies used">
                      {project.techStack.map((tech) => (
                        <li
                          key={tech}
                          className="px-2.5 py-0.5 rounded bg-[#F7F5F0] border border-[#DAD8D0] text-[11px] font-medium text-[#24231F]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="px-6 py-4 bg-[#F7F5F0] border-t border-[#DAD8D0] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#590907] hover:text-[#3D0605] underline-reveal"
                      >
                        <span>Live Project</span>
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#24231F] hover:text-[#590907] underline-reveal"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#590907] hover:text-[#3D0605] underline-reveal"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
