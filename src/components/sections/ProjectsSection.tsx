"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, FolderGit2, ExternalLink, CheckCircle2 } from "lucide-react";
import { Project, DetailType } from "@/types/portfolio";
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
      className="relative py-20 sm:py-28 bg-[#030407] border-b border-[#292D36]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-14">
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#D4FF24]">
              <span>01</span>
              <span className="text-[#1558C9]">/</span>
              <span>Featured Projects</span>
            </div>
            <h2
              className="font-heading font-bold text-[#F5F5F5] tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(1.95rem, 3.2vw + 0.5rem, 3rem)" }}
            >
              Selected Engineering &amp; Product Work.
            </h2>
            <p className="text-sm sm:text-base text-[#B4B8C3] leading-relaxed">
              Full-stack MERN applications, portfolio platforms, and developer tools engineered with
              modular architecture, clean APIs, and responsive interfaces.
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
                    "px-4 py-2 rounded-md text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer",
                    isActive
                      ? "bg-[#D4FF24] text-[#030407]"
                      : "bg-[#101218] border border-[#292D36] text-[#B4B8C3] hover:text-[#F5F5F5] hover:border-[#1558C9]"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Flagship Bento Spotlight Card */}
        {featuredProject && (
          <article className="rounded-2xl bg-[#101218] border border-[#1558C9]/60 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Project Preview Image Column with Electric Cobalt Blue Stage (7 cols) */}
              <div className="lg:col-span-7 bg-[#1558C9] p-5 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#292D36] relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#030407] text-[#D4FF24] text-xs font-mono font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#D4FF24]" aria-hidden="true" />
                    Flagship · {featuredProject.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#F5F5F5]">01 // FEATURED</span>
                </div>

                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="w-full rounded-xl overflow-hidden border border-[#030407]/40 bg-[#030407] aspect-[16/10] relative group block shadow-2xl"
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
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#030407] text-[#D4FF24] p-6 text-center">
                        <FolderGit2 className="h-10 w-10 mb-2" aria-hidden="true" />
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                          {featuredProject.title}
                        </span>
                      </div>
                    );
                  })()}
                </Link>
              </div>

              {/* Project Details Column (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-9 flex flex-col justify-between space-y-6 text-left bg-[#101218]">
                <div className="space-y-5">
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight leading-tight">
                    <Link
                      href={`/projects/${featuredProject.slug}`}
                      className="hover:text-[#D4FF24] transition-colors"
                    >
                      {featuredProject.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#B4B8C3] leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Main Features List */}
                  {featuredProject.detailsList && featuredProject.detailsList.length > 0 && (
                    <div className="p-4 rounded-xl bg-[#1A1E27] border border-[#292D36] space-y-2.5">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4FF24] block">
                        Key Features &amp; Architecture
                      </span>
                      <ul className="space-y-1.5">
                        {featuredProject.detailsList
                          .filter((d) => d.type === DetailType.FEATURE)
                          .slice(0, 3)
                          .map((feat) => (
                            <li
                              key={feat.id}
                              className="text-xs text-[#F5F5F5] flex items-start gap-2 leading-relaxed"
                            >
                              <CheckCircle2
                                className="h-3.5 w-3.5 text-[#D4FF24] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>
                                <strong className="font-semibold">{feat.title}:</strong>{" "}
                                <span className="text-[#B4B8C3]">{feat.description}</span>
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#B4B8C3] block">
                      Technology Stack
                    </span>
                    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                      {featuredProject.techStack.map((tech) => (
                        <li
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#1A1E27] border border-[#292D36] text-xs font-mono text-[#F5F5F5]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-5 border-t border-[#292D36] flex flex-wrap items-center gap-4">
                  <Link
                    href={`/projects/${featuredProject.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#D4FF24] text-[#030407] text-xs font-bold uppercase tracking-wider hover:bg-[#e1ff5c] transition-colors"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-[#1558C9] text-[#F5F5F5] text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#1b65e0] transition-colors"
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
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#B4B8C3] hover:text-[#D4FF24] underline-reveal"
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

        {/* Asymmetric Bento Project Grid */}
        {gridProjects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            {gridProjects.map((project, idx) => {
              const coverItem =
                project.mediaList?.find((m) => m.isCover) || project.mediaList?.[0];
              const imageUrl = coverItem?.media?.url || null;
              const features =
                project.detailsList?.filter((d) => d.type === DetailType.FEATURE).slice(0, 2) || [];

              // Asymmetric 12-column Bento spans: [7, 5, 5, 7, 12]
              const rowPattern = idx % 4;
              const colSpanClass =
                gridProjects.length % 2 !== 0 && idx === gridProjects.length - 1
                  ? "lg:col-span-12"
                  : rowPattern === 0 || rowPattern === 3
                  ? "lg:col-span-7"
                  : "lg:col-span-5";

              const isCobaltCard = idx === 1;

              return (
                <article
                  key={project.id}
                  className={cn(
                    "bento-card rounded-2xl overflow-hidden flex flex-col justify-between",
                    colSpanClass,
                    isCobaltCard && "border-[#1558C9]/60"
                  )}
                >
                  <div>
                    {/* Framed Image Preview */}
                    <div
                      className={cn(
                        "p-5 border-b border-[#292D36]",
                        isCobaltCard ? "bg-[#1558C9]/25" : "bg-[#1A1E27]/60"
                      )}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="block rounded-xl overflow-hidden border border-[#292D36] bg-[#030407] aspect-[16/9] relative group"
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
                          <div className="w-full h-full flex flex-col items-center justify-center bg-[#030407] text-[#B4B8C3] p-4 text-center">
                            <FolderGit2
                              className="h-8 w-8 mb-2 text-[#D4FF24]"
                              aria-hidden="true"
                            />
                            <span className="text-xs font-mono font-semibold uppercase text-[#F5F5F5]">
                              {project.title}
                            </span>
                          </div>
                        )}
                      </Link>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={cn(
                            "px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider",
                            isCobaltCard
                              ? "bg-[#1558C9] text-[#F5F5F5]"
                              : "bg-[#1A1E27] border border-[#292D36] text-[#D4FF24]"
                          )}
                        >
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-[#B4B8C3]">
                          {String(idx + 2).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#F5F5F5] tracking-tight">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="hover:text-[#D4FF24] transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h3>

                      <p className="text-sm text-[#B4B8C3] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Main Features */}
                      {features.length > 0 && (
                        <ul className="space-y-1.5 pt-1">
                          {features.map((f) => (
                            <li
                              key={f.id}
                              className="text-xs text-[#B4B8C3] flex items-start gap-2"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-[#D4FF24] mt-1.5 shrink-0"
                                aria-hidden="true"
                              />
                              <span>
                                <strong className="text-[#F5F5F5] font-medium">{f.title}:</strong>{" "}
                                {f.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech Stack */}
                      <ul className="flex flex-wrap gap-1.5 pt-2" aria-label="Technologies used">
                        {project.techStack.map((tech) => (
                          <li
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#1A1E27] border border-[#292D36] text-[11px] font-mono text-[#F5F5F5]"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Links */}
                  <div className="px-6 sm:px-7 py-4 bg-[#030407]/60 border-t border-[#292D36] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#D4FF24] hover:underline"
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
                          className="inline-flex items-center gap-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#B4B8C3] hover:text-[#F5F5F5] underline-reveal"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#F5F5F5] hover:text-[#D4FF24] transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#D4FF24]" aria-hidden="true" />
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
