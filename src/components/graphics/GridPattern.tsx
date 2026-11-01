import React from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  variant?: "nodes" | "isometric";
}

export function GridPattern({
  className,
  variant = "nodes",
}: GridPatternProps) {
  if (variant === "isometric") {
    return (
      <svg
        viewBox="0 0 400 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("pointer-events-none select-none", className)}
        aria-hidden="true"
      >
        <g stroke="#292D36" strokeWidth="1" opacity="0.65">
          <polygon points="200,20 340,90 200,160 60,90" />
          <polygon points="200,55 340,125 200,195 60,125" />
          <polygon points="200,90 340,160 200,230 60,160" />
        </g>
        <polygon
          points="200,20 340,90 200,160 60,90"
          stroke="#1558C9"
          strokeWidth="1.5"
          fill="#1558C9"
          fillOpacity="0.08"
        />
        <circle cx="200" cy="20" r="3.5" fill="#D4FF24" />
        <circle cx="340" cy="90" r="3.5" fill="#1558C9" />
        <circle cx="60" cy="90" r="3.5" fill="#1558C9" />
        <circle cx="200" cy="160" r="3.5" fill="#D4FF24" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="techGridPattern"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="#292D36"
            strokeWidth="0.75"
            strokeOpacity="0.45"
          />
        </pattern>
      </defs>

      <rect width="1200" height="600" fill="url(#techGridPattern)" />

      {/* Technical Network Paths */}
      <g stroke="#1558C9" strokeWidth="1.2" strokeOpacity="0.35">
        <path d="M120 120 L300 120 L360 180 L600 180" />
        <path d="M780 120 L900 240 L1080 240" />
        <path d="M180 420 L360 420 L420 360 L660 360" />
      </g>

      {/* Node intersections */}
      <circle cx="120" cy="120" r="3" fill="#1558C9" />
      <circle cx="360" cy="180" r="3.5" fill="#D4FF24" />
      <circle cx="600" cy="180" r="3" fill="#1558C9" />
      <circle cx="900" cy="240" r="3.5" fill="#D4FF24" />
      <circle cx="420" cy="360" r="3" fill="#1558C9" />
    </svg>
  );
}

