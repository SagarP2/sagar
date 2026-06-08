"use client";

import React, { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { ThreeLazyCanvas } from "./three-lazy-canvas";

interface SkillTag {
  id: string;
  name: string;
  category: string;
}

interface SkillCloudProps {
  skills: SkillTag[];
}

function SkillNode({ name, category, position }: { name: string; category: string; position: [number, number, number] }) {
  const [hovered, setHovered] = useState(false);

  // Style tags based on category
  const categoryStyles = {
    FRONTEND: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 shadow-indigo-500/5",
    BACKEND: "border-violet-500/30 bg-violet-500/10 text-violet-300 shadow-violet-500/5",
    SHOPIFY: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 shadow-emerald-500/5",
    DESIGN: "border-pink-500/30 bg-pink-500/10 text-pink-300 shadow-pink-500/5",
    MARKETING: "border-blue-500/30 bg-blue-500/10 text-blue-300 shadow-blue-500/5",
    TESTING: "border-amber-500/30 bg-amber-500/10 text-amber-300 shadow-amber-500/5",
  };

  const currentStyle = categoryStyles[category as keyof typeof categoryStyles] || "border-slate-800 bg-slate-900/50 text-slate-300";

  return (
    <group position={position}>
      <Html
        center
        distanceFactor={6}
        className="pointer-events-none select-none"
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`pointer-events-auto cursor-pointer border px-3 py-1.5 rounded-full text-3xs sm:text-2xs font-bold font-mono tracking-wide uppercase transition-all duration-300 backdrop-blur-xs shadow-md ${currentStyle} ${
            hovered ? "scale-115 border-indigo-400 bg-indigo-550/30 text-white ring-2 ring-indigo-500/20 shadow-lg shadow-indigo-500/10" : ""
          }`}
        >
          {name}
        </div>
      </Html>
    </group>
  );
}

function SkillSphere({ skills }: SkillCloudProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);

  const skillsCount = skills.length;

  // Distribute skills over a sphere using golden ratio (Fibonacci sphere)
  const sphereCoordinates = useMemo(() => {
    const coords: [number, number, number][] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

    for (let i = 0; i < skillsCount; i++) {
      const y = 1 - (i / (skillsCount - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      const sphereRadius = 2.6; // Scale of the cloud sphere
      coords.push([x * sphereRadius, y * sphereRadius, z * sphereRadius]);
    }
    return coords;
  }, [skillsCount]);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Slow rotation speed - dampen rotation if any tag is hovered
    const speedMultiplier = isHovered ? 0.15 : 1.0;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.08 * speedMultiplier;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.04) * 0.05 * speedMultiplier;
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {skills.map((skill, index) => (
        <SkillNode
          key={skill.id}
          name={skill.name}
          category={skill.category}
          position={sphereCoordinates[index]}
        />
      ))}
    </group>
  );
}

export function SkillsSphereCanvas({ skills }: SkillCloudProps) {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="w-full aspect-square max-w-[480px] mx-auto relative select-none">
      <ThreeLazyCanvas
        className="w-full h-full"
        camera={{ position: [0, 0, 5.5], fov: 60 }}
      >
        <SkillSphere skills={skills} />
      </ThreeLazyCanvas>
    </div>
  );
}
