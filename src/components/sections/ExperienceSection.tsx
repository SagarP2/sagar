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
      className="relative py-20 sm:py-28 bg-[#030407] border-b border-[#292D36]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#D4FF24]">
              <span>05</span>
              <span className="text-[#1558C9]">/</span>
              <span>Experience &amp; Education</span>
            </div>
            <h2
              className="font-heading font-bold text-[#F5F5F5] tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(1.95rem, 3.2vw + 0.5rem, 3rem)" }}
            >
              Professional Timeline &amp; Academic Foundation.
            </h2>
          </div>

          {cvUrl && (
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#D4FF24] text-[#030407] text-xs font-bold uppercase tracking-wider hover:bg-[#e1ff5c] transition-colors self-start md:self-auto"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download Full Resume</span>
            </a>
          )}
        </div>

        {/* Two-Column Layout: Work History (7 cols) & Education (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left items-start">
          {/* Work Experience Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-[#292D36] pb-3">
              <Briefcase className="h-4 w-4 text-[#D4FF24]" aria-hidden="true" />
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#F5F5F5]">
                Work History
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:top-4 before:bottom-4 before:left-3.5 before:w-[1px] before:bg-[#292D36]">
              {sortedExperiences.map((exp) => {
                const techList = ROLE_TECH_MAP[exp.id] ?? [
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ];

                return (
                  <article key={exp.id} className="relative pl-10">
                    {/* Acid Lime Timeline Marker */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-1.5 top-6 w-4 h-4 rounded-full border-2 ${
                        exp.isCurrent
                          ? "bg-[#D4FF24] border-[#030407] ring-4 ring-[#D4FF24]/20"
                          : "bg-[#101218] border-[#1558C9]"
                      }`}
                    />

                    <div className="bento-card rounded-2xl p-6 sm:p-7 space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#292D36] pb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h4 className="font-heading font-bold text-lg sm:text-xl text-[#F5F5F5]">
                              {exp.role}
                            </h4>
                            {exp.isCurrent && (
                              <span className="px-2.5 py-0.5 rounded bg-[#D4FF24] text-[#030407] text-[10px] font-mono font-bold uppercase tracking-wider">
                                Active Role
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-mono font-semibold text-[#D4FF24] mt-1">
                            {exp.company}
                          </p>
                        </div>

                        <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#B4B8C3]">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-[#1558C9]" aria-hidden="true" />
                            {formatDateRange(exp.startDate, exp.endDate, exp.isCurrent)}
                          </span>
                          {exp.location && (
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 text-[#D4FF24]" aria-hidden="true" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-[#B4B8C3] leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Relevant Technologies */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {techList.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#1A1E27] border border-[#292D36] text-xs font-mono text-[#F5F5F5]"
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
            <div className="flex items-center gap-2.5 border-b border-[#292D36] pb-3">
              <GraduationCap className="h-4 w-4 text-[#D4FF24]" aria-hidden="true" />
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#F5F5F5]">
                Academic Foundation
              </h3>
            </div>

            <div className="space-y-6">
              {sortedEducation.map((edu, index) => (
                <article
                  key={edu.id}
                  className={`rounded-2xl border p-6 space-y-3 ${
                    index === 0
                      ? "bg-[#1558C9]/15 border-[#1558C9]/60"
                      : "bg-[#101218] border-[#292D36]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#D4FF24] font-semibold">
                    <span>{formatDateRange(edu.startDate, edu.endDate)}</span>
                    {edu.location && <span className="text-[#B4B8C3]">{edu.location}</span>}
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#F5F5F5]">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-mono font-semibold text-[#B4B8C3] mt-1">
                      {edu.institution}
                      {edu.fieldOfStudy ? ` · ${edu.fieldOfStudy}` : ""}
                    </p>
                  </div>

                  {edu.description && (
                    <p className="text-xs sm:text-sm text-[#B4B8C3] leading-relaxed">
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
