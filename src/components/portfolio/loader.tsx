"use client";

import React, { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export function TerminalLoader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Organic progressive speeds
        const increment = Math.floor(Math.random() * 8) + 2;
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const doneTimeout = setTimeout(() => {
        setIsDone(true);
        // Fully remove loader node from DOM after transition completes
        const finishTimeout = setTimeout(() => {
          setVisible(false);
          onComplete();
        }, 1200);
        return () => clearTimeout(finishTimeout);
      }, 300);
      return () => clearTimeout(doneTimeout);
    }
  }, [progress, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#000000] text-white flex flex-col justify-between p-8 sm:p-16 loader-wipe ${
        isDone ? "active" : ""
      }`}
    >
      {/* Top Details */}
      <div className="flex justify-between items-start select-none">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-white/40">Portfolio REDESIGN</span>
          <h2 className="text-xs uppercase tracking-[0.1em] font-bold font-mono text-white/70">Sagar Panchal © 2026</h2>
        </div>
        <div className="text-right space-y-1 font-mono text-[10px] text-white/40">
          <div>LOC // MUMBAI, IN</div>
          <div>GMT+5:30</div>
        </div>
      </div>

      {/* Center Details */}
      <div className="max-w-2xl select-none space-y-2">
        <div className="text-xs sm:text-sm tracking-wide text-white/80 font-mono leading-relaxed">
          {progress < 25 && "LOADING DATA SCHEMAS..."}
          {progress >= 25 && progress < 50 && "INITIALIZING WEBGL 3D SKILL MATRIX..."}
          {progress >= 50 && progress < 75 && "APPLYING EDITORIAL GRIDS AND LAYOUTS..."}
          {progress >= 75 && progress < 100 && "COMPILING STATIC GENERATION NODES..."}
          {progress === 100 && "COMPILED SUCCESSFULLY. MOUNTING WEBSITE..."}
        </div>
      </div>

      {/* Bottom Counter */}
      <div className="flex justify-between items-end">
        <div className="space-y-1 font-mono text-[10px] text-white/30">
          <div>FRONTEND ENGINEERING // SYSTEM ARCHITECTURE</div>
          <div>CREATIVE PORTFOLIO DIRECTORY</div>
        </div>
        <div className="select-none font-mono text-7xl sm:text-[10rem] font-black tracking-tighter leading-none flex items-baseline select-none">
          <span className="text-white">
            {progress < 10 ? `0${progress}` : progress}
          </span>
          <span className="text-xs sm:text-sm font-light text-white/40 ml-2">%</span>
        </div>
      </div>
    </div>
  );
}
