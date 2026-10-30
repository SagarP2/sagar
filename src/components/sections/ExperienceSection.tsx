import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, Download } from "lucide-react";
import { Experience, Education } from "@/types/portfolio";
import { ROLE_TECH_MAP } from "@/data/experience";
import { formatDateRange } from "@/lib/formatDate";

interface ExperienceSectionProps {
  experiences: Experience[];
  educationList: Education[];
  cvUrl?: string;
}

export function ExperienceSection({
  experiences,
  educationList,
  cvUrl,
}: ExperienceSectionProps) {
  const sortedExperiences = [...experiences].sort((a, b) => b.orderIndex - a.orderIndex);
  const sortedEducation = [...educationList].sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <section
      id="experience"
      data-section
      className="relative py-20 sm:py-28 bg-[#F7F5F0] border-b border-[#D8D4CA]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#590907]">
              <span>06</span>
              <span className="text-[#A5A79B]">/</span>
              <span>Professional Experience &amp; Education</span>
            </div>
            <h2
              className="font-heading font-bold text-[#252522] tracking-tight leading-[1.12]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.5rem, 2.85rem)" }}
            >
              Career history &amp; academic foundation.
            </h2>
          </div>

          {cvUrl && (
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#590907] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#3D0605] transition-colors self-start md:self-auto"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download Full Résumé</span>
            </a>
          )}
        </div>

        {/* Two-Column Editorial Layout: Work History (7 cols) & Education (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left items-start">
          {/* Work Experience Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-[#D8D4CA] pb-3">
              <Briefcase className="h-4 w-4 text-[#590907]" aria-hidden="true" />
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#252522]">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:top-4 before:bottom-4 before:left-3.5 before:w-[2px] before:bg-[#D8D4CA]">
              {sortedExperiences.map((exp) => {
                const techList = ROLE_TECH_MAP[exp.id] ?? [
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ];

                return (
                  <article key={exp.id} className="relative pl-10">
                    {/* Timeline Node */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-1.5 top-6 w-4 h-4 rounded-full border-2 ${
                        exp.isCurrent
                          ? "bg-[#590907] border-[#E8D2B5] ring-4 ring-[#590907]/15"
                          : "bg-[#FFFFFF] border-[#A5A79B]"
                      }`}
                    />

                    <div className="editorial-card rounded-xl bg-[#FFFFFF] p-6 sm:p-7 space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#D8D4CA] pb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-heading font-bold text-lg sm:text-xl text-[#252522]">
                              {exp.role}
                            </h4>
                            {exp.isCurrent && (
                              <span className="px-2.5 py-0.5 rounded bg-[#590907] text-[#F7F5F0] text-[10px] font-mono font-semibold uppercase tracking-wider">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-semibold text-[#590907] mt-1">
                            {exp.company}
                          </p>
                        </div>

                        <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#66665F]">
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

                      <p className="text-sm text-[#66665F] leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Relevant Technologies */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {techList.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#EEEAE2] border border-[#D8D4CA] text-xs font-medium text-[#252522]"
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

          {/* Academic Background Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-[#D8D4CA] pb-3">
              <GraduationCap className="h-4 w-4 text-[#590907]" aria-hidden="true" />
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#252522]">
                Academic Background
              </h3>
            </div>

            <div className="space-y-6">
              {sortedEducation.map((edu, index) => (
                <article
                  key={edu.id}
                  className={`rounded-xl border border-[#D8D4CA] p-6 space-y-3 ${
                    index === 0 ? "bg-[#E8D2B5]/45" : "bg-[#EEEAE2]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#590907] font-semibold">
                    <span>{formatDateRange(edu.startDate, edu.endDate)}</span>
                    {edu.location && <span className="text-[#66665F]">{edu.location}</span>}
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#252522]">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-[#590907] mt-0.5">
                      {edu.institution}
                      {edu.fieldOfStudy ? ` · ${edu.fieldOfStudy}` : ""}
                    </p>
                  </div>

                  {edu.description && (
                    <p className="text-xs sm:text-sm text-[#66665F] leading-relaxed">
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

