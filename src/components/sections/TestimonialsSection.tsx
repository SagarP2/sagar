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
      className="relative py-20 sm:py-28 bg-[#EEEAE2] border-b border-[#D8D4CA]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#590907]">
            <span>07</span>
            <span className="text-[#A5A79B]">/</span>
            <span>Collaborator Notes</span>
          </div>
          <h2
            className="font-heading font-bold text-[#252522] tracking-tight leading-[1.12]"
            style={{ fontSize: "clamp(1.85rem, 3vw + 0.5rem, 2.85rem)" }}
          >
            Feedback from engineering &amp; agency partners.
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
                className="editorial-card rounded-xl bg-[#FFFFFF] p-7 sm:p-8 flex flex-col justify-between space-y-6"
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
                              ? "text-[#590907] fill-[#590907]"
                              : "text-[#D8D4CA]"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-[#E8D2B5]" aria-hidden="true" />
                  </div>

                  <p className="text-sm sm:text-base text-[#252522] leading-relaxed italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <footer className="flex items-center gap-3.5 pt-5 border-t border-[#D8D4CA]">
                  <div
                    aria-hidden="true"
                    className="h-10 w-10 rounded-full bg-[#E8D2B5] border border-[#D8D4CA] flex items-center justify-center text-xs font-mono font-bold text-[#590907] shrink-0"
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-[#252522]">
                      {t.clientName}
                    </div>
                    <div className="text-xs font-mono text-[#66665F]">
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

