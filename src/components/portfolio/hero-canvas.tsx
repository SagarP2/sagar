"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { ThreeLazyCanvas } from "./three-lazy-canvas";

function InteractiveParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 2000;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    const colorWhite = new THREE.Color("#f8fafc");
    const colorGold = new THREE.Color("#c6a368"); // Gold
    const colorIce = new THREE.Color("#7dd3fc"); // Ice blue

    const seededRandom = (seed: number) => {
      const value = Math.sin(seed * 12.9898) * 43758.5453;
      return value - Math.floor(value);
    };

    for (let i = 0; i < count; i++) {
      const u = seededRandom(i + 5);
      const v = seededRandom(i + 3001);
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 3.0 + seededRandom(i + 5001) * 5.0; // wider galaxy drift

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const rand = seededRandom(i + 7001);
      let chosenColor = colorWhite;
      if (rand > 0.8) {
        chosenColor = colorGold;
      } else if (rand > 0.5) {
        chosenColor = colorIce;
      }

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, []);

  // Anti-aliased high-end circular point map
  const circleTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.7)");
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
    
    // Slow drift rotation
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    const targetX = state.pointer.x * 0.15;
    const targetY = state.pointer.y * 0.15;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetY, 0.03);
    pointsRef.current.rotation.z = THREE.MathUtils.lerp(pointsRef.current.rotation.z, targetX, 0.03);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.3}
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
  const groupRef = useRef<THREE.Group>(null);
  const { width } = useThree((state) => state.viewport);
  
  const isMobile = width < 7;
  const positionX = isMobile ? 0 : 2.8;
  const positionY = isMobile ? -0.9 : 0.2;
  const scale = isMobile ? 0.75 : 1.25;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Float drift
    if (groupRef.current) {
      groupRef.current.position.y = positionY + Math.sin(time * 0.4) * 0.15;
      groupRef.current.position.x = positionX + Math.cos(time * 0.3) * 0.08;
      
      // Respond to mouse hover coords
      const targetRX = state.pointer.y * 0.25;
      const targetRY = state.pointer.x * 0.25;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRY, 0.05);
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.08;
      coreRef.current.rotation.y = time * 0.12;
    }

    if (cageRef.current) {
      cageRef.current.rotation.x = -time * 0.05;
      cageRef.current.rotation.y = -time * 0.07;
    }
  });

  const coreGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.55, 0), []);
  const cageGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.82, 1), []);

  return (
    <group ref={groupRef} position={[positionX, positionY, -0.5]} scale={scale}>
      {/* Inner Faceted Chrome/Refractive Crystal Core */}
      <mesh ref={coreRef} geometry={coreGeometry}>
        <meshPhysicalMaterial
          color="#f8fafc" 
          metalness={0.98} // Pure chrome-like polish
          roughness={0.03}
          clearcoat={1.0}
          clearcoatRoughness={0.01}
          transmission={0.3} // Refractive glass-plated look
          ior={1.8}
          thickness={0.5}
        />
      </mesh>

      {/* Outer Technical Gold Wireframe Cage */}
      <mesh ref={cageRef} geometry={cageGeometry}>
        <meshPhysicalMaterial
          color="#c6a368" // Gold
          wireframe={true}
          transparent={true}
          opacity={0.4}
          roughness={0.1}
          metalness={0.9}
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
  const centerX = isMobile ? 0 : 2.8;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (lightRef1.current) {
      lightRef1.current.position.x = Math.sin(time * 0.5) * 3.5 + centerX;
      lightRef1.current.position.y = Math.cos(time * 0.5) * 3.5;
      lightRef1.current.position.z = Math.sin(time * 0.3) * 2.5 - 0.5;
    }
    if (lightRef2.current) {
      lightRef2.current.position.x = Math.sin(-time * 0.4) * 3.5 + centerX;
      lightRef2.current.position.y = Math.cos(-time * 0.6) * 3.5;
      lightRef2.current.position.z = Math.cos(time * 0.3) * 2.5 - 0.5;
    }
  });

  return (
    <>
      <pointLight ref={lightRef1} intensity={4.5} color="#c6a368" distance={9} />
      <pointLight ref={lightRef2} intensity={4.0} color="#7dd3fc" distance={9} />
    </>
  );
}

export function HeroCanvas() {
  return (
    <ThreeLazyCanvas
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      camera={{ position: [0, 0, 5.0], fov: 60 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={2.0} />
      
      <InteractiveParticles />
      <TechnicalCrystalCore />
      <OrbitingLights />
    </ThreeLazyCanvas>
  );
}
