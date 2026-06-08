"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { ThreeLazyCanvas } from "./three-lazy-canvas";

function WaveParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const gridWidth = 45;
  const gridHeight = 45;
  const count = gridWidth * gridHeight;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spacing = 0.4;
    
    let index = 0;
    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridHeight; j++) {
        pos[index * 3] = (i - gridWidth / 2) * spacing;
        pos[index * 3 + 1] = -1.2; 
        pos[index * 3 + 2] = (j - gridHeight / 2) * spacing;
        index++;
      }
    }
    return pos;
  }, [count]);

  // Programmatically generate a circular canvas texture to render round dots instead of squares
  const circleTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime() * 0.6;
    const geometry = pointsRef.current.geometry;
    const positionAttr = geometry.attributes.position;
    
    let index = 0;
    const spacing = 0.4;
    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridHeight; j++) {
        const x = (i - gridWidth / 2) * spacing;
        const z = (j - gridHeight / 2) * spacing;
        
        // Undulating mathematical noise waves
        const wave = Math.sin(x * 0.25 + time) * 0.45 + Math.cos(z * 0.2 + time * 0.8) * 0.35;
        
        positionAttr.setY(index, wave - 1.2);
        index++;
      }
    }
    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        sizeAttenuation={true}
        color="#818cf8"
        transparent={true}
        opacity={0.28}
        map={circleTexture || undefined}
        alphaTest={0.001}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function ContactBgCanvas() {
  return (
    <ThreeLazyCanvas
      className="absolute inset-0 z-0 pointer-events-none w-full h-full opacity-60"
      camera={{ position: [0, 2.5, 7], fov: 60 }}
    >
      <ambientLight intensity={0.5} />
      <WaveParticles />
    </ThreeLazyCanvas>
  );
}
