"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const R3FCanvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30">
        <Loader2 className="h-6 w-6 animate-spin text-indigo-500/30" />
      </div>
    ),
  }
);

interface ThreeLazyCanvasProps {
  children: React.ReactNode;
  className?: string;
  camera?: {
    position: [number, number, number];
    fov?: number;
  };
  shadows?: boolean;
}

export function ThreeLazyCanvas({
  children,
  className,
  camera = { position: [0, 0, 5], fov: 60 },
  shadows = false,
}: ThreeLazyCanvasProps) {
  return (
    <div className={className}>
      <R3FCanvas camera={camera} shadows={shadows}>
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </R3FCanvas>
    </div>
  );
}
