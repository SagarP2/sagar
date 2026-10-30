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
        "flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D4CA] pb-8",
        className
      )}
    >
      <div>
        <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-[#590907] font-semibold mb-3">
          {index} / {eyebrow}
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#252522] leading-[1.1]">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="text-sm sm:text-base text-[#66665F] max-w-md leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}

