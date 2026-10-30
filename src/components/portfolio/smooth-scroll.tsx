"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { DEFAULT_HEADER_OFFSET } from "@/constants/portfolio";
import { setLenisInstance } from "@/lib/scroll";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    setLenisInstance(lenis);

    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        lenis.scrollTo(hash, { offset: -DEFAULT_HEADER_OFFSET, immediate: false });
      }, 350);
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      setLenisInstance(null);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
