import React from "react";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      data-section
      className="relative py-20 sm:py-28 bg-[#030407] border-b border-[#292D36]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#D4FF24]">
            <span>07</span>
            <span className="text-[#1558C9]">/</span>
            <span>Collaborator Notes</span>
          </div>
          <h2
            className="font-heading font-bold text-[#F5F5F5] tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(1.95rem, 3.2vw + 0.5rem, 3rem)" }}
          >
            Feedback From Engineering &amp; Agency Partners.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
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
                className="bento-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div
                      className="flex items-center gap-1"
                      aria-label={`Rated ${t.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={cn(
                            "h-4 w-4",
                            idx < t.rating
                              ? "text-[#D4FF24] fill-[#D4FF24]"
                              : "text-[#292D36]"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-[#1558C9]" aria-hidden="true" />
                  </div>

                  <p className="text-sm sm:text-base text-[#F5F5F5] leading-relaxed">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <footer className="flex items-center gap-3.5 pt-5 border-t border-[#292D36]">
                  <div
                    aria-hidden="true"
                    className="h-10 w-10 rounded-full bg-[#1558C9] flex items-center justify-center text-xs font-mono font-bold text-[#F5F5F5] shrink-0"
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-[#F5F5F5]">
                      {t.clientName}
                    </div>
                    <div className="text-xs font-mono text-[#B4B8C3]">
                      {t.role} · {t.company}
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
