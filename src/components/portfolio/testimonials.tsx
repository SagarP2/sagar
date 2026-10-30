"use client";

import React from "react";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types/portfolio";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      data-section
      className="relative py-20 sm:py-24 bg-[#E8D2B5]/35 border-b border-[#DAD8D0]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-left space-y-2.5 max-w-2xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#590907]">
            07 • Collaborator Notes
          </p>
          <h2
            className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(1.85rem, 3vw + 0.4rem, 2.75rem)" }}
          >
            Feedback From Engineering &amp; Agency Collaborators.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {testimonials.map((t) => {
            const initials = t.clientName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()
              .slice(0, 2);

            return (
              <blockquote
                key={t.id}
                className="bento-card rounded-xl bg-[#FFFFFF] p-7 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <Quote className="h-6 w-6 text-[#590907]" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-[#24231F] leading-relaxed">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <footer className="flex items-center gap-3.5 pt-5 border-t border-[#DAD8D0]">
                  <div
                    aria-hidden="true"
                    className="h-10 w-10 rounded-full bg-[#E8D2B5] border border-[#DAD8D0] flex items-center justify-center text-xs font-mono font-bold text-[#590907] shrink-0"
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-[#24231F]">
                      {t.clientName}
                    </div>
                    <div className="text-xs font-mono text-[#68665F]">
                      {t.role} • {t.company}
                    </div>
                  </div>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
