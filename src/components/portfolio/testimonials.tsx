"use client";

import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section id="testimonials" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#000000]">
      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3" data-reveal="fade-up">
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] block">
            07 // Recommendations
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase">
            Client & Partner Endorsements
          </h2>
        </div>

        {/* Testimonials Grid */}
        {testimonials.length === 0 ? (
          <p className="text-white/40 text-xs font-mono uppercase tracking-widest text-center py-6">No endorsements added yet.</p>
        ) : (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto" data-stagger>
            {testimonials.map((t) => {
              const initials = t.clientName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
              return (
                <div
                  key={t.id}
                  className="border border-white/5 bg-white/2 p-6 rounded-2xl flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300"
                  data-reveal="fade-in"
                  data-stagger-item
                >
                  <div className="space-y-4 select-none">
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={cn(
                            "h-3.5 w-3.5",
                            idx < t.rating ? "text-white fill-white" : "text-white/10"
                          )}
                        />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-white/70 italic leading-relaxed font-sans">
                      &quot;{t.content}&quot;
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5 select-none">
                    <div className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-[10px] font-mono font-black text-white shrink-0">
                      {initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase">{t.clientName}</h4>
                      <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mt-0.5">
                        {t.role} at {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
