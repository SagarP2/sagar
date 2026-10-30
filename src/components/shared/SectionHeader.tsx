import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#292D36] pb-8",
        className
      )}
    >
      <div>
        <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-[#D4FF24] font-semibold mb-3">
          {index} / {eyebrow}
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.1]">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="text-sm sm:text-base text-[#B4B8C3] max-w-md leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
