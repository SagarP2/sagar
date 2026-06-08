"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { ThreeLazyCanvas } from "./three-lazy-canvas";

function InteractiveParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1500;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    const colorWhite = new THREE.Color("#e2e8f0");
    const colorIndigo = new THREE.Color("#818cf8");
    const colorSlate = new THREE.Color("#475569");

    const seededRandom = (seed: number) => {
      const value = Math.sin(seed * 12.9898) * 43758.5453;
      return value - Math.floor(value);
    };

    for (let i = 0; i < count; i++) {
      const u = seededRandom(i + 1);
      const v = seededRandom(i + 2001);
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.5 + seededRandom(i + 4001) * 4.5;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const rand = seededRandom(i + 6001);
      let chosenColor = colorSlate;
      if (rand > 0.8) {
        chosenColor = colorWhite;
      } else if (rand > 0.45) {
        chosenColor = colorIndigo;
      }

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, []);

  // Programmatically generate an anti-aliased circular canvas texture for round dots
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
    
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.012;
    const targetX = state.pointer.x * 0.12;
    const targetY = state.pointer.y * 0.12;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetY, 0.04);
    pointsRef.current.rotation.z = THREE.MathUtils.lerp(pointsRef.current.rotation.z, targetX, 0.04);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.024}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.24}
        map={circleTexture || undefined}
        alphaTest={0.001}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function TechnicalCrystalCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const cageRef = useRef<THREE.Mesh>(null);
  const { width } = useThree((state) => state.viewport);
  
  // Responsive layout: center on mobile, shift right on desktop
  const isMobile = width < 7;
  const positionX = isMobile ? 0 : 2.5;
  const positionY = isMobile ? -0.8 : 0.2;
  const scale = isMobile ? 0.72 : 1.15;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Core: Rotates in one direction with floating drift
    if (coreRef.current) {
      coreRef.current.position.y = positionY + Math.sin(time * 0.35) * 0.12;
      coreRef.current.position.x = positionX + Math.cos(time * 0.25) * 0.06;
      coreRef.current.rotation.x = time * 0.1;
      coreRef.current.rotation.y = time * 0.14;
    }

    // Outer Cage: Rotates in the opposite direction
    if (cageRef.current) {
      cageRef.current.position.y = positionY + Math.sin(time * 0.35) * 0.12;
      cageRef.current.position.x = positionX + Math.cos(time * 0.25) * 0.06;
      cageRef.current.rotation.x = -time * 0.06;
      cageRef.current.rotation.y = -time * 0.08;
    }
  });

  const coreGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.55, 0), []);
  const cageGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.8, 1), []);

  return (
    <group>
      {/* Inner Faceted Chrome Core */}
      <mesh ref={coreRef} geometry={coreGeometry} position={[positionX, positionY, -0.5]} scale={scale}>
        <meshPhysicalMaterial
          color="#f8fafc" // Sleek silver-white core
          metalness={0.96} // Chrome metallic reflection
          roughness={0.06} // Flat facets catch points of light cleanly
          clearcoat={1.0}
          clearcoatRoughness={0.02}
        />
      </mesh>

      {/* Outer Technical Wireframe Cage */}
      <mesh ref={cageRef} geometry={cageGeometry} position={[positionX, positionY, -0.5]} scale={scale}>
        <meshBasicMaterial
          color="#818cf8"
          wireframe={true}
          transparent={true}
          opacity={0.28}
        />
      </mesh>
    </group>
  );
}

function OrbitingLights() {
  const lightRef1 = useRef<THREE.PointLight>(null);
  const lightRef2 = useRef<THREE.PointLight>(null);
  const { width } = useThree((state) => state.viewport);
  const isMobile = width < 7;
  const centerX = isMobile ? 0 : 2.5;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (lightRef1.current) {
      lightRef1.current.position.x = Math.sin(time * 0.45) * 3.5 + centerX;
      lightRef1.current.position.y = Math.cos(time * 0.45) * 3.5;
      lightRef1.current.position.z = Math.sin(time * 0.25) * 2.5 - 0.5;
    }
    if (lightRef2.current) {
      lightRef2.current.position.x = Math.sin(-time * 0.35) * 3.5 + centerX;
      lightRef2.current.position.y = Math.cos(-time * 0.55) * 3.5;
      lightRef2.current.position.z = Math.cos(time * 0.3) * 2.5 - 0.5;
    }
  });

  return (
    <>
      <pointLight ref={lightRef1} intensity={3.5} color="#818cf8" distance={8} />
      <pointLight ref={lightRef2} intensity={3.0} color="#06b6d4" distance={8} />
    </>
  );
}

export function HeroCanvas() {
  return (
    <ThreeLazyCanvas
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      camera={{ position: [0, 0, 5.0], fov: 60 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 6, 4]} intensity={1.5} />
      
      <InteractiveParticles />
      <TechnicalCrystalCore />
      <OrbitingLights />
    </ThreeLazyCanvas>
  );
}
