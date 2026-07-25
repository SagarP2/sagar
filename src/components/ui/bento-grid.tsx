"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[22rem]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "gold" | "ice" | "none";
}

export function BentoCard({ children, className, glow = "none" }: BentoCardProps) {
  return (
    <div
      className={cn(
        "bento-card-spatial p-8 flex flex-col justify-between group relative overflow-hidden",
        glow === "gold" && "before:absolute before:inset-0 before:pointer-events-none before:spatial-glow-gold",
        glow === "ice" && "before:absolute before:inset-0 before:pointer-events-none before:spatial-glow-ice",
        className
      )}
    >
      {/* Delicate Glass Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
      {children}
    </div>
  );
}
