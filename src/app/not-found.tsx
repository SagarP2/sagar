import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030407] text-[#F5F5F5] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-lg w-full text-center space-y-6 border border-[#292D36] bg-[#101218] p-8 sm:p-12 rounded-2xl shadow-2xl">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#1558C9]/20 border border-[#1558C9] text-[#D4FF24]">
          <Compass className="h-8 w-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#D4FF24] uppercase block">
            404 · Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-[#F5F5F5]">
            Page not found
          </h1>
          <p className="text-sm text-[#B4B8C3] leading-relaxed max-w-sm mx-auto">
            The page or project case study you requested could not be found.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#D4FF24] text-[#030407] font-bold text-xs uppercase tracking-wider hover:bg-[#e1ff5c] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
