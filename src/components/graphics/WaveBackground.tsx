import React from "react";
import { cn } from "@/lib/utils";

interface WaveBackgroundProps {
  className?: string;
  variant?: "cobalt" | "dark";
}

export function WaveBackground({
  className,
  variant = "cobalt",
}: WaveBackgroundProps) {
  const isCobalt = variant === "cobalt";

  return (
    <div
      className={cn(
        "pointer-events-none select-none overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Haikei-inspired layered wave 1 */}
        <path
          d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,360L1380,360C1320,360,1200,360,1080,360C960,360,840,360,720,360C600,360,480,360,360,360C240,360,120,360,60,360L0,360Z"
          fill={isCobalt ? "#030407" : "#1558C9"}
          fillOpacity={isCobalt ? "0.22" : "0.14"}
        />

        {/* Haikei-inspired layered wave 2 */}
        <path
          d="M0,256L80,240C160,224,320,192,480,197.3C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,360L1360,360C1280,360,1120,360,960,360C800,360,640,360,480,360C320,360,160,360,80,360L0,360Z"
          fill={isCobalt ? "#030407" : "#101218"}
          fillOpacity={isCobalt ? "0.42" : "0.75"}
        />

        {/* Haikei low-poly geometric accent line */}
        <path
          d="M0,292L180,264L390,304L640,248L910,288L1190,232L1440,268"
          stroke="#D4FF24"
          strokeOpacity={isCobalt ? "0.45" : "0.25"}
          strokeWidth="1.5"
          fill="none"
        />

        {/* Geometric vertex nodes */}
        <circle cx="390" cy="304" r="3.5" fill="#D4FF24" fillOpacity="0.7" />
        <circle cx="640" cy="248" r="3.5" fill="#D4FF24" fillOpacity="0.7" />
        <circle cx="1190" cy="232" r="3.5" fill="#D4FF24" fillOpacity="0.7" />
      </svg>
    </div>
  );
}

