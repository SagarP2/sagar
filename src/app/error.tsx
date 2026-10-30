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
    console.error("[Runtime Application Exception]:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#030407] text-[#F5F5F5] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full text-center space-y-6 border border-[#292D36] bg-[#101218] p-8 sm:p-10 rounded-2xl shadow-2xl">
        <div className="inline-flex items-center justify-center p-3.5 rounded-full bg-[#1558C9]/20 border border-[#1558C9] text-[#D4FF24]">
          <AlertTriangle className="h-7 w-7" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#D4FF24] uppercase block">
            Application Error
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-[#F5F5F5]">
            Something went wrong
          </h1>
          <p className="text-sm text-[#B4B8C3] leading-relaxed">
            An unexpected error occurred while rendering this page. You can retry or return to the
            homepage.
          </p>
        </div>

        {error.digest && (
          <div className="p-3 bg-[#030407] border border-[#292D36] rounded-md text-left">
            <span className="text-[10px] font-mono text-[#B4B8C3] uppercase block">Error ID</span>
            <code className="text-xs font-mono text-[#D4FF24] break-all">{error.digest}</code>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#D4FF24] text-[#030407] font-bold text-xs uppercase tracking-wider hover:bg-[#e1ff5c] transition-colors cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-[#292D36] bg-[#1A1E27] text-[#F5F5F5] font-semibold text-xs uppercase tracking-wider hover:border-[#1558C9] hover:bg-[#1558C9] transition-colors"
          >
            <Home className="h-3.5 w-3.5 text-[#D4FF24]" aria-hidden="true" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
