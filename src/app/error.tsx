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
    <div className="min-h-screen bg-[#F7F5F0] text-[#252522] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full text-center space-y-6 border border-[#D8D4CA] bg-[#FFFFFF] p-8 sm:p-10 rounded-xl shadow-sm">
        <div className="inline-flex items-center justify-center p-3.5 rounded-full bg-[#E8D2B5] text-[#590907]">
          <AlertTriangle className="h-7 w-7" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#590907] uppercase block">
            Application Error
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-[#252522]">
            Something went wrong
          </h1>
          <p className="text-sm text-[#66665F] leading-relaxed">
            An unexpected error occurred while rendering this page. You can retry or return to the
            homepage.
          </p>
        </div>

        {error.digest && (
          <div className="p-3 bg-[#F7F5F0] border border-[#D8D4CA] rounded-md text-left">
            <span className="text-[10px] font-mono text-[#66665F] uppercase block">Error ID</span>
            <code className="text-xs font-mono text-[#590907] break-all">{error.digest}</code>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#590907] text-[#F7F5F0] font-semibold text-xs uppercase tracking-wider hover:bg-[#3D0605] transition-colors cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-[#D8D4CA] bg-[#EEEAE2] text-[#252522] font-semibold text-xs uppercase tracking-wider hover:bg-[#E8D2B5] transition-colors"
          >
            <Home className="h-3.5 w-3.5 text-[#590907]" aria-hidden="true" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
