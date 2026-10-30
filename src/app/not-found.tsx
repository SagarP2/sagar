import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#252522] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-lg w-full text-center space-y-6 border border-[#D8D4CA] bg-[#FFFFFF] p-8 sm:p-12 rounded-xl shadow-sm">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#E8D2B5] text-[#590907]">
          <Compass className="h-8 w-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#590907] uppercase block">
            404 · Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-[#252522]">
            Page not found
          </h1>
          <p className="text-sm text-[#66665F] leading-relaxed max-w-sm mx-auto">
            The page or project case study you requested could not be found.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#590907] text-[#F7F5F0] font-semibold text-xs uppercase tracking-wider hover:bg-[#3D0605] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
