import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  theme?: "dark" | "cobalt";
  className?: string;
  rightElement?: React.ReactNode;
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  theme = "dark",
  className,
  rightElement,
}: SectionHeadingProps) {
  const isCobalt = theme === "cobalt";

  return (
    <Reveal
      direction="up"
      distance={20}
      className={cn(
        "flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b",
        isCobalt ? "border-[#F5F5F5]/20" : "border-[#292D36]",
        className
      )}
    >
      <div className="space-y-4 max-w-3xl text-left">
        <div className="inline-flex items-center gap-2.5">
          <span
            className={cn(
              "px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-widest",
              isCobalt
                ? "bg-[#030407] text-[#D4FF24]"
                : "bg-[#101218] border border-[#292D36] text-[#D4FF24]"
            )}
          >
            {index}
          </span>
          <span
            className={cn(
              "text-xs font-mono font-semibold uppercase tracking-[0.2em]",
              isCobalt ? "text-[#F5F5F5]" : "text-[#B4B8C3]"
            )}
          >
            {label}
          </span>
        </div>

        <h2
          className="font-heading font-bold text-[#F5F5F5] tracking-tight leading-[1.06]"
          style={{ fontSize: "clamp(2rem, 3.6vw + 0.4rem, 3.25rem)" }}
        >
          {title}
        </h2>
      </div>

      {rightElement ? (
        <div className="shrink-0">{rightElement}</div>
      ) : description ? (
        <p
          className={cn(
            "text-sm sm:text-base max-w-md leading-relaxed text-left",
            isCobalt ? "text-[#F5F5F5]/90" : "text-[#B4B8C3]"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

