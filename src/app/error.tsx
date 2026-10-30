"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Application Runtime Error]:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#24231F] flex flex-col items-center justify-center p-6">
      <div className="max-w-lg w-full rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] p-8 sm:p-10 text-center space-y-6 shadow-xs">
        <div className="mx-auto w-12 h-12 rounded-full bg-[#E8D2B5] border border-[#DAD8D0] flex items-center justify-center">
          <AlertCircle className="h-6 w-6 text-[#590907]" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#590907]">
            Application Error
          </span>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#24231F] tracking-tight">
            Something went wrong
          </h1>
          <p className="text-sm text-[#68665F] leading-relaxed">
            An unexpected error occurred while rendering this view. You can retry or return to the
            home page.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="flex-1 py-3 px-5 rounded-lg bg-[#590907] text-[#F7F5F0] font-semibold text-xs uppercase tracking-wider hover:bg-[#3D0605] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <RefreshCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="flex-1 py-3 px-5 rounded-lg border border-[#DAD8D0] bg-[#F7F5F0] text-[#24231F] font-semibold text-xs uppercase tracking-wider hover:bg-[#E8D2B5]/60 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
