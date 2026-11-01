"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "none" | "scale";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
  distance?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 24,
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const initialOffset = {
    up: { opacity: 0, y: distance, x: 0, scale: 1 },
    down: { opacity: 0, y: -distance, x: 0, scale: 1 },
    left: { opacity: 0, x: distance, y: 0, scale: 1 },
    right: { opacity: 0, x: -distance, y: 0, scale: 1 },
    none: { opacity: 0, x: 0, y: 0, scale: 1 },
    scale: { opacity: 0, x: 0, y: 12, scale: 0.96 },
  }[direction];

  return (
    <motion.div
      initial={initialOffset}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

