"use client";

import React, { Component, ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

interface CanvasErrorBoundaryProps {
  children: ReactNode;
}

interface CanvasErrorBoundaryState {
  hasError: boolean;
}

class CanvasErrorBoundary extends Component<CanvasErrorBoundaryProps, CanvasErrorBoundaryState> {
  constructor(props: CanvasErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): CanvasErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn("[WebGL Canvas Intercepted Error]:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white/30 text-2xs font-mono uppercase tracking-widest pointer-events-none">
          3D Canvas Acceleration Disabled
        </div>
      );
    }
    return this.props.children;
  }
}

const R3FCanvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30">
        <Loader2 className="h-6 w-6 animate-spin text-gold-400/30" />
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
      <CanvasErrorBoundary>
        <R3FCanvas camera={camera} shadows={shadows}>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </R3FCanvas>
      </CanvasErrorBoundary>
    </div>
  );
}
