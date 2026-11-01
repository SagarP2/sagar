import React from "react";
import { cn } from "@/lib/utils";

type TechBadgeVariant = "default" | "lime" | "cobalt" | "dark";

interface TechBadgeProps {
  label: string;
  variant?: TechBadgeVariant;
  className?: string;
}

const BADGE_STYLES: Record<TechBadgeVariant, string> = {
  default:
    "bg-[#101218] border border-[#292D36] text-[#F5F5F5] hover:border-[#1558C9]",
  lime: "bg-[#D4FF24] border border-[#D4FF24] text-[#030407] font-bold",
  cobalt:
    "bg-[#1558C9] border border-[#1558C9] text-[#F5F5F5] font-semibold",
  dark: "bg-[#030407] border border-[#292D36] text-[#B4B8C3]",
};

export function TechBadge({
  label,
  variant = "default",
  className,
}: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 text-xs font-mono tracking-wide transition-colors",
        BADGE_STYLES[variant],
        className
      )}
    >
      {label}
    </span>
  );
}

