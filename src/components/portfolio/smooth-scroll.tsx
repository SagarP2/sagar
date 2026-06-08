"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start requestAnimationFrame scroll loops
    const animationFrameId = requestAnimationFrame(raf);

    // Cleanup scrolling loops on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
