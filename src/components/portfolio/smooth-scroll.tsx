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

    // Expose lenis instance globally for coordination across pages/components
    (window as unknown as { lenis: unknown }).lenis = lenis;

    // Smooth scroll to target hash on initial load
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        lenis.scrollTo(hash, { offset: -80, immediate: false });
      }, 350);
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start requestAnimationFrame scroll loops
    const animationFrameId = requestAnimationFrame(raf);

    // Cleanup scrolling loops on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      (window as unknown as { lenis: unknown }).lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
