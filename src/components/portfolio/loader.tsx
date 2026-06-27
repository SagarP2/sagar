"use client";

import React, { useEffect, useState } from "react";
import { Terminal, Cpu } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

const COMPILE_STEPS = [
  { p: 10, text: "INIT SYSTEM SECURE CHANNEL // AUTHENTICATING..." },
  { p: 25, text: "PARSING DATABASE SCHEMA [MERN STACK COMPONENT]..." },
  { p: 40, text: "FETCHING ACTIVE SHOPIFY STOREFRONT METRICS..." },
  { p: 58, text: "GENERATING WEBGL CHROMATIC GEOMETRY SHADERS..." },
  { p: 75, text: "INJECTING TACTILE PLATINUM GRID SYSTEM UTILITIES..." },
  { p: 88, text: "COMPILING HIGH-CONTRAST CASE STUDIES..." },
  { p: 98, text: "OPTIMIZING STATIC ASSETS & BUNDLE BINDINGS..." },
  { p: 100, text: "BUILD COMPILED SUCCESSFULLY. INITIALIZING DIGITAL INTERFACE..." }
];

export function TerminalLoader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [visible, setVisible] = useState(true);

  // Compute current step text dynamically from progress state
  const currentStepText = COMPILE_STEPS.reduce((acc, step) => {
    if (progress >= step.p) return step;
    return acc;
  }, COMPILE_STEPS[0]).text;

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Organic compiling increments
        const increment = Math.floor(Math.random() * 5) + 2;
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, 35);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    let doneTimeout: ReturnType<typeof setTimeout> | undefined;
    let finishTimeout: ReturnType<typeof setTimeout> | undefined;

    if (progress === 100) {
      doneTimeout = setTimeout(() => {
        setIsDone(true);
        finishTimeout = setTimeout(() => {
          setVisible(false);
          onComplete();
        }, 1400); // Luxury smooth wipe transitions
      }, 500);
    }

    return () => {
      if (doneTimeout) clearTimeout(doneTimeout);
      if (finishTimeout) clearTimeout(finishTimeout);
    };
  }, [progress, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#040406] text-[#f8fafc] flex flex-col justify-between p-8 sm:p-16 loader-wipe select-none ${
        isDone ? "active" : ""
      }`}
    >
      {/* Delicate background grids */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />

      {/* Top Section: System coordinates */}
      <div className="flex justify-between items-start font-mono text-[9px] uppercase tracking-[0.2em] text-[#ffffff]/35 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Cpu className="h-3 w-3 text-gold-400 animate-pulse" />
            <span className="font-bold text-white/50">SAGAR.PANCHAL // CORE_OS</span>
          </div>
          <div>STATUS: COMPILING BUILD PROTOCOL</div>
        </div>
        <div className="text-right space-y-1 text-white/35">
          <div>LOC // GUJARAT, IN</div>
          <div>EST_GMT // +5:30</div>
        </div>
      </div>

      {/* Center Section: Luxury Compiler Log Console */}
      <div className="max-w-3xl w-full mx-auto space-y-6 relative z-10 text-left px-4">
        {/* Terminal Header */}
        <div className="border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-xl p-6 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5 text-[8px] font-mono text-white/30 uppercase tracking-[0.25em] font-bold">
              <Terminal className="h-3.5 w-3.5" />
              Compiler Core v16.2
            </div>
          </div>

          {/* Compile Progress Details */}
          <div className="font-mono text-[10px] leading-relaxed text-white/60 min-h-[50px] space-y-2">
            <div className="flex items-center gap-2 text-white/40">
              <span>$ next build --optimize-assets</span>
              <span className="animate-ping h-1 w-1 rounded-full bg-gold-400" />
            </div>
            <div className="text-gold-400 tracking-wide transition-all duration-300 font-semibold">
              &gt; {currentStepText}
            </div>
          </div>

          {/* Micro thin Progress Bar */}
          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section: Fibonacci Percentage Counter */}
      <div className="flex justify-between items-end relative z-10">
        <div className="space-y-1 font-mono text-[9px] text-white/30 uppercase tracking-widest">
          <div>UX ARCHITECT // VISUAL ENGINEER</div>
          <div>ALL RIGHTS RESERVED // © 2026</div>
        </div>
        <div className="font-mono text-[5.5rem] sm:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-none flex items-baseline select-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/20">
            {progress < 10 ? `0${progress}` : progress}
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-gold-400/60 uppercase tracking-widest ml-2">%</span>
        </div>
      </div>
    </div>
  );
}
