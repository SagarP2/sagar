import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#040406] text-[#f8fafc] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Blueprint Structural Background Overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 premium-grid opacity-10" />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 noise-overlay" />
      <div aria-hidden className="absolute w-[600px] h-[600px] rounded-full bg-gold-400/5 blur-[160px] pointer-events-none" />

      <div className="max-w-lg w-full text-center space-y-8 relative z-10 border border-white/10 bg-white/[0.02] backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-2xl">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400">
          <Compass className="h-10 w-10 animate-pulse" />
        </div>

        <div className="space-y-3">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-gold-400 uppercase">
            SPECIFICATION MISMATCH // 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase font-heading tracking-tight text-white">
            Node Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
            The endpoint or resource slug you requested does not exist in the active portfolio system registry.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-colors shadow-lg shadow-gold-400/10"
          >
            <ArrowLeft className="h-4 w-4" />
            RETURN TO SELECTED WORKS
          </Link>
        </div>
      </div>
    </div>
  );
}
