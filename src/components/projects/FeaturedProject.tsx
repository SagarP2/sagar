"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/types/portfolio";
import { TechBadge } from "@/components/ui/TechBadge";
import { GithubIcon } from "@/components/ui/SocialLinks";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { Reveal } from "@/components/ui/Reveal";

interface FeaturedProjectProps {
  project: Project;
  indexNumber?: string;
}

export function FeaturedProject({
  project,
  indexNumber = "01",
}: FeaturedProjectProps) {
  return (
    <Reveal direction="up" distance={28}>
      <article className="bg-[#101218] border border-[#292D36] hover:border-[#1558C9] transition-colors">
        {/* Top Editorial Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 sm:px-8 py-4 bg-[#030407] border-b border-[#292D36]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#D4FF24] text-[#030407] text-xs font-mono font-bold uppercase tracking-widest">
              {indexNumber} · FEATURED CASE STUDY
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#B4B8C3]">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D4FF24] hover:underline"
              >
                Live Application
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Main 12-Column Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left 7 Columns: Interactive Screenshot Gallery */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#292D36]">
            <ProjectGallery
              title={project.title}
              category={project.category}
              mediaList={project.mediaList}
            />
          </div>

          {/* Right 5 Columns: Problem, Engineering Solution, Main Features & Stack */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F5F5] tracking-tight">
                  {project.title}
                </h3>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-4">
                <div className="p-4 bg-[#030407] border-l-2 border-[#1558C9]">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B4B8C3] mb-1">
                    PROBLEM BEING SOLVED
                  </p>
                  <p className="text-sm text-[#B4B8C3] leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="p-4 bg-[#171B25]/70 border-l-2 border-[#D4FF24]">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4FF24] mb-1">
                    WHAT I DEVELOPED
                  </p>
                  <p className="text-sm text-[#F5F5F5] leading-relaxed">
                    {project.whatIBuilt}
                  </p>
                </div>
              </div>

              {/* Main Features */}
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B4B8C3] mb-2.5">
                  MAIN FEATURES
                </p>
                <ul className="space-y-2">
                  {project.importantFunctionality.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F5F5]"
                    >
                      <CheckCircle2
                        className="h-4 w-4 text-[#D4FF24] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack & Action Links */}
            <div className="pt-5 border-t border-[#292D36] space-y-5">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B4B8C3] mb-2">
                  TECHNOLOGY STACK
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} label={tech} variant="dark" />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4FF24] text-[#030407] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#F5F5F5] transition-colors"
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
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#030407] border border-[#292D36] text-[#F5F5F5] text-xs font-mono font-semibold uppercase tracking-wider hover:border-[#D4FF24] hover:text-[#D4FF24] transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                )}

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#171B25] border border-[#292D36] text-[#F5F5F5] text-xs font-mono uppercase tracking-wider hover:border-[#D4FF24] hover:text-[#D4FF24] transition-colors ml-auto"
                >
                  Case Study
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

