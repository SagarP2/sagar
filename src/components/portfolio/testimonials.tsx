"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tilt } from "./tilt";

interface TestimonialItem {
  id: string;
  clientName: string;
  company: string;
  role: string;
  content: string;
  avatarUrl: string | null;
  rating: number;
  orderIndex: number;
}

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" data-section className="relative py-36 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Blueprint Structural Layout Lines */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3" data-reveal="fade-up">
          <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.25em] block">
            07 // CLIENT ENDORSEMENTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase">
            REVIEWS &amp; TESTIMONIALS
          </h2>
        </div>

        {/* Testimonials Grid */}
        {testimonials.length === 0 ? (
          <p className="text-white/40 text-[9px] font-mono uppercase tracking-widest text-center py-10 border border-dashed border-white/5 rounded-2xl max-w-md mx-auto">
            No client endorsements added yet.
          </p>
        ) : (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto" data-stagger>
            {testimonials.map((t) => {
              const initials = t.clientName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
              return (
                <Tilt key={t.id} className="h-full">
                  <div
                    className="border border-white/5 bg-white/[0.01] p-6 rounded-2xl flex flex-col justify-between space-y-8 hover:border-gold-400/20 hover:shadow-[0_0_35px_rgba(198,163,104,0.03)] transition-all duration-300 h-full relative"
                    data-reveal="fade-in"
                    data-stagger-item
                  >
                    <div className="space-y-4 select-none text-left">
                      {/* Quote mark and Stars */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star
                              key={idx}
                              className={cn(
                                "h-3.5 w-3.5",
                                idx < t.rating ? "text-gold-400 fill-gold-400" : "text-white/10"
                              )}
                            />
                          ))}
                        </div>
                        <Quote className="h-5 w-5 text-gold-400/10" />
                      </div>

                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans font-medium italic">
                        &quot;{t.content}&quot;
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-3.5 pt-5 border-t border-white/5 select-none text-left">
                      <div className="h-9 w-9 rounded-full border border-gold-400/20 flex items-center justify-center bg-gold-400/5 text-[9px] font-mono font-black text-gold-400 shrink-0">
                        {initials}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wide">{t.clientName}</h4>
                        <p className="text-[8.5px] font-bold text-white/35 uppercase tracking-widest mt-0.5 font-mono">
                          {t.role} at {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </Tilt>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
