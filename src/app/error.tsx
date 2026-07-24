"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception details to server telemetry/console
    console.error("[Runtime Application Exception]:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#040406] text-[#f8fafc] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Blueprint Structural Background Overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 premium-grid opacity-10" />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 noise-overlay" />
      <div aria-hidden className="absolute w-[500px] h-[500px] rounded-full bg-rose-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-8 relative z-10 border border-white/10 bg-white/[0.02] backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-2xl">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">
          <AlertTriangle className="h-8 w-8" />
        </div>

        <div className="space-y-3">
          <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-rose-400 uppercase">
            RUNTIME EXCEPTION // 500
          </span>
          <h1 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-white">
            System Anomaly Detected
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            An unexpected error occurred during rendering. Details have been logged for diagnostic review.
          </p>
        </div>

        {error.digest && (
          <div className="p-3 bg-black/40 border border-white/5 rounded-lg text-left">
            <span className="text-[8px] font-mono text-white/30 uppercase block mb-1">ERR_DIGEST</span>
            <code className="text-2xs font-mono text-gold-400/80 break-all">{error.digest}</code>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-colors shadow-lg shadow-gold-400/10 cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Re-initialize View
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            <Home className="h-3.5 w-3.5 text-gold-400" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
