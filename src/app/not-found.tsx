import React from "react";
import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#24231F] flex flex-col items-center justify-center p-6">
      <div className="max-w-lg w-full rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] p-8 sm:p-10 text-center space-y-6 shadow-xs">
        <div className="mx-auto w-12 h-12 rounded-full bg-[#E8D2B5] border border-[#DAD8D0] flex items-center justify-center">
          <Compass className="h-6 w-6 text-[#590907]" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#590907]">
            Error 404
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#24231F] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-[#68665F] leading-relaxed">
            The page or project case study you are looking for does not exist or may have moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-lg bg-[#590907] text-[#F7F5F0] font-semibold text-xs uppercase tracking-wider hover:bg-[#3D0605] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
