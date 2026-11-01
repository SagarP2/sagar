"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AbstractBlobProps {
  className?: string;
  variant?: "cobalt-lime" | "editorial";
}

export function AbstractBlob({
  className,
  variant = "cobalt-lime",
}: AbstractBlobProps) {
  const prefersReducedMotion = useReducedMotion();

  if (variant === "editorial") {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-[#101218] border border-[#292D36] p-6 sm:p-8",
          className
        )}
      >
        <svg
          viewBox="0 0 600 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="haikeiCobaltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1558C9" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#030407" stopOpacity="0.95" />
            </linearGradient>
            <pattern
              id="editorialDots"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#292D36" />
            </pattern>
          </defs>

          {/* Subtle dot grid base */}
          <rect width="600" height="420" fill="url(#editorialDots)" />

          {/* Haikei-inspired layered organic blob 1 (Secondary Surface) */}
          <motion.path
            d="M428.5,69.5Q493,129,486.5,217.5Q480,306,399.5,350Q319,394,225,376Q131,358,86,274Q41,190,104.5,112Q168,34,266,22Q364,10,428.5,69.5Z"
            fill="#171B25"
            stroke="#292D36"
            strokeWidth="1.5"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    scale: [1, 1.03, 1],
                    rotate: [0, 1.5, 0],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Haikei-inspired layered organic blob 2 (Electric Cobalt Blue) */}
          <motion.path
            d="M398,105Q458,150,449,224.5Q440,299,369,333.5Q298,368,220.5,342.5Q143,317,121,238.5Q99,160,159.5,103.5Q220,47,299,53.5Q378,60,398,105Z"
            fill="url(#haikeiCobaltGrad)"
            stroke="#1558C9"
            strokeWidth="1.5"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    scale: [1, 0.97, 1],
                    rotate: [0, -2, 0],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Geometric Low-Poly Wireframe Overlay */}
          <polygon
            points="160,110 310,65 435,145 390,305 220,330 125,225"
            fill="none"
            stroke="#F5F5F5"
            strokeOpacity="0.18"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="160"
            y1="110"
            x2="390"
            y2="305"
            stroke="#F5F5F5"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <line
            x1="310"
            y1="65"
            x2="220"
            y2="330"
            stroke="#F5F5F5"
            strokeOpacity="0.12"
            strokeWidth="1"
          />

          {/* Acid Lime focal node and technical coordinates */}
          <circle cx="310" cy="65" r="5" fill="#D4FF24" />
          <circle cx="435" cy="145" r="4" fill="#D4FF24" />
          <circle cx="160" cy="110" r="4" fill="#F5F5F5" />
          <circle cx="390" cy="305" r="5" fill="#D4FF24" />

          {/* Center architectural emblem */}
          <g transform="translate(215, 165)">
            <rect
              x="0"
              y="0"
              width="170"
              height="84"
              fill="#030407"
              stroke="#D4FF24"
              strokeWidth="1.5"
            />
            <text
              x="16"
              y="30"
              fill="#D4FF24"
              fontFamily="monospace"
              fontSize="10"
              fontWeight="bold"
              letterSpacing="2"
            >
              SYSTEM ARCHITECTURE
            </text>
            <text
              x="16"
              y="52"
              fill="#F5F5F5"
              fontFamily="sans-serif"
              fontSize="13"
              fontWeight="bold"
            >
              MERN + Shopify
            </text>
            <text
              x="16"
              y="70"
              fill="#B4B8C3"
              fontFamily="monospace"
              fontSize="10"
            >
              AI-Accelerated Build
            </text>
          </g>
        </svg>
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="blobCobaltGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1558C9" stopOpacity="0.32" />
          <stop offset="70%" stopColor="#1558C9" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#030407" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="400" cy="400" r="360" fill="url(#blobCobaltGlow)" />
      <path
        d="M558.5,193.5Q649,287,609,414.5Q569,542,442,598Q315,654,209,565.5Q103,477,132,337.5Q161,198,292.5,149Q424,100,558.5,193.5Z"
        stroke="#1558C9"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        fill="#1558C9"
        fillOpacity="0.07"
      />
      <path
        d="M512,242Q588,318,553,421.5Q518,525,411.5,556.5Q305,588,229.5,506.5Q154,425,187.5,313Q221,201,328.5,183.5Q436,166,512,242Z"
        stroke="#D4FF24"
        strokeOpacity="0.22"
        strokeWidth="1"
        strokeDasharray="6 6"
        fill="none"
      />
    </svg>
  );
}

