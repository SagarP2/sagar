"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    // Calculate distance from client mouse cursor to center of the component
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Apply a magnetic pull factor (0.35) to keep offsets within boundaries
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
