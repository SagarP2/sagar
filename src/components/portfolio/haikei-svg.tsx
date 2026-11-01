import React from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Haikei-inspired Layered Waves for Hero Background
 * Crafted with exact brand palette: Sage (#A5A79B), Cream (#E8D2B5), Burgundy (#590907)
 */
export function HaikeiHeroWaves({ className = "", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="sage-fade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5A79B" stopOpacity="0.22" />
          <stop offset="60%" stopColor="#A5A79B" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#A5A79B" stopOpacity="0.0" />
        </linearGradient>

        <linearGradient id="cream-fade" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8D2B5" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#E8D2B5" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#E8D2B5" stopOpacity="0.0" />
        </linearGradient>

        <linearGradient id="burgundy-trace" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#590907" stopOpacity="0.0" />
          <stop offset="35%" stopColor="#590907" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#590907" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#590907" stopOpacity="0.05" />
        </linearGradient>

        <pattern
          id="hero-micro-grid"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="#DAD8D0"
            strokeWidth="0.75"
            strokeOpacity="0.5"
          />
          <circle cx="48" cy="0" r="1.5" fill="#A5A79B" fillOpacity="0.3" />
        </pattern>
      </defs>

      {/* Subtle Geometric Grid Layer */}
      <rect width="1440" height="800" fill="url(#hero-micro-grid)" />

      {/* Layer 1: Soft Organic Base Wave (Cream Beige) */}
      <path
        d="M0,260 C240,320 480,210 720,290 C960,370 1200,310 1440,240 L1440,800 L0,800 Z"
        fill="url(#cream-fade)"
      />

      {/* Layer 2: Intermediate Sculpted Wave (Sage Grey) */}
      <path
        d="M0,420 C320,360 540,480 840,410 C1140,340 1320,440 1440,400 L1440,800 L0,800 Z"
        fill="url(#sage-fade)"
      />

      {/* Layer 3: Organic Contour Line (Deep Burgundy) */}
      <path
        d="M0,380 C360,460 620,330 920,420 C1180,490 1340,390 1440,370"
        stroke="url(#burgundy-trace)"
        strokeWidth="1.75"
        strokeDasharray="6 8"
        fill="none"
      />

      {/* Layer 4: Foreground Light Ribbon Wave */}
      <path
        d="M0,580 C280,520 620,620 980,560 C1240,510 1380,550 1440,530 L1440,800 L0,800 Z"
        fill="#FFFFFF"
        fillOpacity="0.45"
      />

      {/* Subtle Geometric Corner Crosshairs */}
      <g stroke="#590907" strokeOpacity="0.25" strokeWidth="1">
        <line x1="80" y1="60" x2="80" y2="80" />
        <line x1="70" y1="70" x2="90" y2="70" />
        <line x1="1360" y1="120" x2="1360" y2="140" />
        <line x1="1350" y1="130" x2="1370" y2="130" />
      </g>
    </svg>
  );
}

/**
 * Haikei-inspired Organic Blob for Section Highlights
 */
export function HaikeiOrganicBlob({ className = "", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D2B5" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#A5A79B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#590907" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path
        d="M428.5,335.5Q392,431,299.5,436.5Q207,442,143.5,371Q80,300,137.5,225Q195,150,296.5,147Q398,144,431.5,222Q465,300,428.5,335.5Z"
        fill="url(#blob-gradient)"
      />
    </svg>
  );
}

/**
 * Haikei-inspired Low-Poly Geometric Grid Asset
 */
export function HaikeiLowPolyPattern({ className = "", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <g stroke="#DAD8D0" strokeWidth="0.8" strokeOpacity="0.7">
        <polygon points="100,50 250,30 180,180" fill="#E8D2B5" fillOpacity="0.25" />
        <polygon points="250,30 420,70 340,210" fill="#A5A79B" fillOpacity="0.18" />
        <polygon points="180,180 250,30 340,210" fill="#FFFFFF" fillOpacity="0.4" />
        <polygon points="340,210 420,70 560,110" fill="#E8D2B5" fillOpacity="0.3" />
        <polygon points="340,210 560,110 500,260" fill="#A5A79B" fillOpacity="0.22" />
        <polygon points="180,180 340,210 280,330" fill="#A5A79B" fillOpacity="0.15" />
        <polygon points="340,210 500,260 410,380" fill="#E8D2B5" fillOpacity="0.35" />
        <polygon points="280,330 340,210 410,380" fill="#FFFFFF" fillOpacity="0.5" />
        <polygon points="500,260 560,110 700,200" fill="#590907" fillOpacity="0.08" />
        <polygon points="500,260 700,200 640,350" fill="#A5A79B" fillOpacity="0.2" />
        <polygon points="410,380 500,260 640,350" fill="#E8D2B5" fillOpacity="0.28" />
      </g>
    </svg>
  );
}

/**
 * Haikei-inspired Layered Section Divider Wave
 */
export function HaikeiSectionWave({
  className = "",
  flip = false,
  ...props
}: SvgProps & { flip?: boolean }) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-10 sm:h-14 lg:h-16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M0,0 C150,85 350,-20 500,45 C650,110 900,10 1200,40 L1200,120 L0,120 Z"
          fill="#E8D2B5"
          fillOpacity="0.3"
        />
        <path
          d="M0,30 C200,100 450,20 700,75 C950,130 1100,50 1200,60 L1200,120 L0,120 Z"
          fill="#A5A79B"
          fillOpacity="0.18"
        />
        <path
          d="M0,65 C300,30 600,110 900,60 C1050,35 1150,80 1200,70 L1200,120 L0,120 Z"
          fill="#F7F5F0"
        />
      </svg>
    </div>
  );
}

/**
 * Editorial Circular Composition
 */
export function HaikeiEditorialCompass({ className = "", ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="#DAD8D0"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle
        cx="100"
        cy="100"
        r="68"
        stroke="#A5A79B"
        strokeWidth="1.25"
        strokeOpacity="0.6"
      />
      <circle
        cx="100"
        cy="100"
        r="46"
        stroke="#E8D2B5"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="100" r="5" fill="#590907" />
      <line x1="100" y1="10" x2="100" y2="190" stroke="#590907" strokeWidth="0.75" strokeOpacity="0.3" />
      <line x1="10" y1="100" x2="190" y2="100" stroke="#590907" strokeWidth="0.75" strokeOpacity="0.3" />
      <path
        d="M100,32 A68,68 0 0,1 168,100"
        stroke="#590907"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

