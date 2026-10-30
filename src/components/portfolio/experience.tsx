"use client";

import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, Download, CheckCircle2 } from "lucide-react";
import type { Experience as ExperienceItem, Education as EducationItem } from "@/types/portfolio";
import { formatDateRange } from "@/lib/formatDate";

interface ExperienceProps {
  experiences: ExperienceItem[];
  educationList: EducationItem[];
  cvUrl?: string;
}

const ROLE_METADATA: Record<
  string,
  {
    tech: string[];
    highlights: string[];
  }
> = {
  "Rabbitcode Agency": {
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Shopify Admin API",
      "GraphQL",
      "Shopify Polaris",
      "App Bridge",
      "Theme App Extensions",
      "Webhooks",
    ],
    highlights: [
      "Engineering embedded Shopify applications using Shopify App Bridge, Polaris, and Admin GraphQL APIs.",
      "Designing webhook event pipelines and full-stack MERN applications tailored to merchant workflows.",
      "Customizing storefront themes with Shopify Liquid and Theme App Extensions.",
    ],
  },
  "Sedulous® Infosys": {
    tech: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "HTML5 & CSS3",
    ],
    highlights: [
      "Built and maintained full-stack MERN web applications over a 9+ month internship.",
      "Implemented REST API integrations, database models in MongoDB, and responsive React interfaces.",
      "Collaborated on deployment pipelines and frontend layout optimization.",
    ],
  },
};

export function Experience({ experiences, educationList, cvUrl }: ExperienceProps) {
  const sortedExperiences = [...experiences].sort((a, b) => b.orderIndex - a.orderIndex);
  const sortedEducation = [...educationList].sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <section
      id="experience"
      data-section
      className="relative py-20 sm:py-24 bg-[#F7F5F0] border-b border-[#DAD8D0]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-2.5 max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#590907]">
              04 • Experience &amp; Education
            </p>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.4rem, 2.75rem)" }}
            >
              Professional Timeline &amp; Academic Foundation.
            </h2>
          </div>

          {cvUrl && (
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#590907] text-[#F7F5F0] text-xs font-semibold hover:bg-[#3D0605] transition-colors self-start md:self-auto"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download Resume (PDF)</span>
            </a>
          )}
        </div>

        {/* Two-Column Editorial & Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          {/* Left: Professional Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 border-b border-[#DAD8D0] pb-3">
              <Briefcase className="h-4 w-4 text-[#590907]" aria-hidden="true" />
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#24231F]">
                Employment History
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:top-4 before:bottom-4 before:left-3 before:w-[2px] before:bg-[#DAD8D0]">
              {sortedExperiences.map((exp) => {
                const meta = ROLE_METADATA[exp.company];
                const techList = meta?.tech || ["React.js", "Node.js", "Express.js", "MongoDB"];
                const highlights = meta?.highlights || [];

                return (
                  <article key={exp.id} className="relative pl-9">
                    {/* Timeline Node */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-1 top-6 w-4 h-4 rounded-full border-2 ${
                        exp.isCurrent
                          ? "bg-[#590907] border-[#E8D2B5] ring-4 ring-[#590907]/15"
                          : "bg-[#FFFFFF] border-[#A5A79B]"
                      }`}
                    />

                    <div className="bento-card rounded-xl bg-[#FFFFFF] p-6 sm:p-7 space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#DAD8D0] pb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-heading font-bold text-lg sm:text-xl text-[#24231F]">
                              {exp.role}
                            </h4>
                            {exp.isCurrent && (
                              <span className="px-2.5 py-0.5 rounded bg-[#590907] text-[#F7F5F0] text-[10px] font-mono font-semibold uppercase tracking-wider">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-semibold text-[#590907] mt-0.5">
                            {exp.company}
                          </p>
                        </div>

                        <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#68665F]">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-[#590907]" aria-hidden="true" />
                            {formatDateRange(exp.startDate, exp.endDate, exp.isCurrent)}
                          </span>
                          {exp.location && (
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 text-[#A5A79B]" aria-hidden="true" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-[#68665F] leading-relaxed">{exp.description}</p>

                      {highlights.length > 0 && (
                        <ul className="space-y-1.5 pt-1">
                          {highlights.map((item) => (
                            <li
                              key={item}
                              className="text-xs text-[#24231F] flex items-start gap-2"
                            >
                              <CheckCircle2
                                className="h-3.5 w-3.5 text-[#590907] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Technologies Used */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {techList.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#F7F5F0] border border-[#DAD8D0] text-xs font-medium text-[#24231F]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right: Academic Background Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 border-b border-[#DAD8D0] pb-3">
              <GraduationCap className="h-4 w-4 text-[#590907]" aria-hidden="true" />
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#24231F]">
                Academic Foundation
              </h3>
            </div>

            <div className="space-y-5">
              {sortedEducation.map((edu, index) => (
                <article
                  key={edu.id}
                  className={`rounded-xl border border-[#DAD8D0] p-6 space-y-3 ${
                    index === 0 ? "bg-[#E8D2B5]/55" : "bg-[#A5A79B]/18"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#590907] font-semibold">
                    <span>{formatDateRange(edu.startDate, edu.endDate)}</span>
                    {edu.location && <span className="text-[#68665F]">{edu.location}</span>}
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#24231F]">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-[#590907] mt-0.5">
                      {edu.institution}
                      {edu.fieldOfStudy ? ` • ${edu.fieldOfStudy}` : ""}
                    </p>
                  </div>

                  {edu.description && (
                    <p className="text-xs sm:text-sm text-[#68665F] leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
