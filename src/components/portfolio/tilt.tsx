"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
}

export function Tilt({ children, className }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate cursor positions relative to the component coordinates center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Angle rotation maps (max 15 degrees)
    setRotate({
      x: -(mouseY / height) * 20,
      y: (mouseX / width) * 20,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.1 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
