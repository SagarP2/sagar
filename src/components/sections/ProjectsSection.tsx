"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, FolderGit2, ExternalLink } from "lucide-react";
import { Project } from "@/types/portfolio";
import { GithubIcon as Github } from "@/components/shared/SocialIcons";
import { cn } from "@/lib/utils";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const sortedProjects = [...projects].sort((a, b) => b.orderIndex - a.orderIndex);
  const categories = ["all", ...Array.from(new Set(sortedProjects.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === activeCategory);

  const featuredProject = filteredProjects[0];
  const gridProjects = filteredProjects.slice(1);

  return (
    <section
      id="projects"
      data-section
      className="relative py-20 sm:py-28 bg-[#EEEAE2] border-b border-[#D8D4CA]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-14">
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#590907]">
              <span>03</span>
              <span className="text-[#A5A79B]">/</span>
              <span>Featured Projects</span>
            </div>
            <h2
              className="font-heading font-bold text-[#252522] tracking-tight leading-[1.12]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.5rem, 2.85rem)" }}
            >
              Selected engineering &amp; product work.
            </h2>
            <p className="text-sm sm:text-base text-[#66665F] leading-relaxed">
              Full-stack web applications, MERN platforms, and interactive digital tools built with
              clean architecture and practical user workflows.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div
            className="flex flex-wrap gap-2"
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
                    "px-4 py-2 rounded-md text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer",
                    isActive
                      ? "bg-[#590907] text-[#F7F5F0]"
                      : "bg-[#FFFFFF] border border-[#D8D4CA] text-[#66665F] hover:text-[#252522] hover:border-[#A5A79B]"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Editorial Spotlight Card */}
        {featuredProject && (
          <article className="rounded-xl bg-[#FFFFFF] border border-[#D8D4CA] overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Project Preview Image Column (7 cols) */}
              <div className="lg:col-span-7 bg-[#A5A79B]/25 p-5 sm:p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#D8D4CA]">
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="w-full rounded-lg overflow-hidden border border-[#D8D4CA] bg-[#F7F5F0] aspect-[16/10] relative group block shadow-sm"
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
                        alt={`${featuredProject.title} preview screenshot`}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#E8D2B5]/40 text-[#590907] p-6 text-center">
                        <FolderGit2 className="h-10 w-10 mb-2" aria-hidden="true" />
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                          {featuredProject.title}
                        </span>
                      </div>
                    );
                  })()}
                </Link>
              </div>

              {/* Project Editorial Details Column (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-9 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded bg-[#E8D2B5] text-[#590907] text-xs font-mono font-semibold uppercase tracking-wider">
                      Featured · {featuredProject.category}
                    </span>
                    <span className="text-xs font-mono text-[#66665F]">01</span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#590907] tracking-tight">
                    <Link
                      href={`/projects/${featuredProject.slug}`}
                      className="hover:text-[#3D0605] transition-colors"
                    >
                      {featuredProject.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#252522] leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {featuredProject.purpose && (
                    <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#D8D4CA] space-y-1">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#590907] block">
                        Problem Solved &amp; Purpose
                      </span>
                      <p className="text-xs text-[#66665F] leading-relaxed">
                        {featuredProject.purpose}
                      </p>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#66665F] block">
                      Technology Stack
                    </span>
                    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                      {featuredProject.techStack.map((tech) => (
                        <li
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#EEEAE2] border border-[#D8D4CA] text-xs font-medium text-[#252522]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-5 border-t border-[#D8D4CA] flex flex-wrap items-center gap-4">
                  <Link
                    href={`/projects/${featuredProject.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#590907] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#3D0605] transition-colors"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#590907] hover:text-[#3D0605] underline-reveal"
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
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#252522] hover:text-[#590907] underline-reveal"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Secondary Editorial Project Grid */}
        {gridProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {gridProjects.map((project, idx) => {
              const coverItem =
                project.mediaList?.find((m) => m.isCover) || project.mediaList?.[0];
              const imageUrl = coverItem?.media?.url || null;
              const isWarmAccent = idx % 2 === 0;

              return (
                <article
                  key={project.id}
                  className="editorial-card rounded-xl overflow-hidden flex flex-col justify-between bg-[#FFFFFF]"
                >
                  <div>
                    {/* Framed Image Preview */}
                    <div
                      className={cn(
                        "p-5 border-b border-[#D8D4CA]",
                        isWarmAccent ? "bg-[#E8D2B5]/35" : "bg-[#A5A79B]/20"
                      )}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="block rounded-lg overflow-hidden border border-[#D8D4CA] bg-[#F7F5F0] aspect-[16/10] relative group"
                        aria-label={`View ${project.title} case study`}
                      >
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={`${project.title} preview screenshot`}
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-[#EEEAE2] text-[#66665F] p-4 text-center">
                            <FolderGit2
                              className="h-8 w-8 mb-2 text-[#590907]"
                              aria-hidden="true"
                            />
                            <span className="text-xs font-mono font-semibold uppercase">
                              {project.title}
                            </span>
                          </div>
                        )}
                      </Link>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded bg-[#EEEAE2] border border-[#D8D4CA] text-[11px] font-mono font-semibold uppercase tracking-wider text-[#590907]">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-[#66665F]">
                          {String(idx + 2).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl text-[#590907] tracking-tight">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="hover:text-[#3D0605] transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h3>

                      <p className="text-sm text-[#252522] leading-relaxed">
                        {project.description}
                      </p>

                      {project.purpose && (
                        <div className="p-3.5 rounded-md bg-[#F7F5F0] border border-[#D8D4CA]">
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#590907] block mb-0.5">
                            Problem Solved
                          </span>
                          <p className="text-xs text-[#66665F] leading-relaxed">
                            {project.purpose}
                          </p>
                        </div>
                      )}

                      <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies used">
                        {project.techStack.map((tech) => (
                          <li
                            key={tech}
                            className="px-2.5 py-0.5 rounded bg-[#EEEAE2] border border-[#D8D4CA] text-[11px] font-medium text-[#252522]"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Links */}
                  <div className="px-6 sm:px-7 py-4 bg-[#F7F5F0] border-t border-[#D8D4CA] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#590907] hover:text-[#3D0605] underline-reveal"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#252522] hover:text-[#590907] underline-reveal"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#590907] hover:text-[#3D0605] underline-reveal"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

