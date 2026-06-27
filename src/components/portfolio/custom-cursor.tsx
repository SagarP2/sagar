"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configurations for smooth trailing effect
  const trailX = useSpring(cursorX, { stiffness: 150, damping: 28, mass: 0.15 });
  const trailY = useSpring(cursorY, { stiffness: 150, damping: 28, mass: 0.15 });
  
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hoveredText, setHoveredText] = useState("");

  useEffect(() => {
    let animationFrameId: number | null = null;

    const onMouseMove = (event: MouseEvent) => {
      if (animationFrameId !== null) return;
      animationFrameId = requestAnimationFrame(() => {
        cursorX.set(event.clientX);
        cursorY.set(event.clientY);
        setVisible(true);
        animationFrameId = null;
      });
    };

    const onTouchStart = () => {
      setVisible(false);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      
      const isInteractive = Boolean(target.closest("a, button, input, textarea, [role='button']"));
      setActive(isInteractive);

      // Check if hovered element has a custom cursor text attribute (e.g. for projects)
      const projectCard = target.closest("[data-cursor-text]");
      if (projectCard) {
        setHoveredText(projectCard.getAttribute("data-cursor-text") || "");
      } else {
        setHoveredText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden lg:block">
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-white/20 bg-transparent flex items-center justify-center"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: hoveredText ? 90 : 36,
          height: hoveredText ? 90 : 36,
        }}
        animate={{
          scale: active && !hoveredText ? 1.6 : 1,
          borderColor: active ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.2)",
          backgroundColor: hoveredText ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {hoveredText && (
          <span className="text-[10px] uppercase tracking-widest font-black text-white font-mono animate-fade-in">
            {hoveredText}
          </span>
        )}
      </motion.div>

      {/* Inner Blend Dot */}
      <motion.div
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-white mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: active ? 0.4 : 1,
          opacity: hoveredText ? 0 : 1,
        }}
      />
    </div>
  );
}
