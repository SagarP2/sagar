"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ProjectMedia } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  title: string;
  category: string;
  mediaList: ProjectMedia[];
  className?: string;
}

export function ProjectGallery({
  title,
  category,
  mediaList,
  className,
}: ProjectGalleryProps) {
  const prefersReducedMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentMedia = mediaList[selectedIndex]?.media ?? mediaList[0]?.media;

  if (!currentMedia) {
    return null;
  }

  return (
    <div className={cn("flex flex-col h-full bg-[#030407]", className)}>
      {/* Main Screenshot Stage */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#030407] group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMedia.url}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src={currentMedia.url}
              alt={`${title} — ${category} screenshot ${selectedIndex + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Top-left screen badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#030407]/90 border border-[#292D36] text-[10px] font-mono uppercase tracking-widest text-[#D4FF24]">
          SCREEN 0{selectedIndex + 1} / 0{mediaList.length}
        </div>
      </div>

      {/* Interactive Thumbnail Strip */}
      {mediaList.length > 1 && (
        <div className="grid grid-cols-4 gap-2 p-3 bg-[#030407] border-t border-[#292D36]">
          {mediaList.slice(0, 4).map((item, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                aria-label={`View screenshot ${idx + 1} of ${title}`}
                className={cn(
                  "relative aspect-[16/10] overflow-hidden border transition-all cursor-pointer",
                  isSelected
                    ? "border-[#D4FF24] ring-1 ring-[#D4FF24]"
                    : "border-[#292D36] opacity-60 hover:opacity-100 hover:border-[#1558C9]"
                )}
              >
                <Image
                  src={item.media.url}
                  alt={`${title} thumbnail ${idx + 1}`}
                  fill
                  sizes="160px"
                  className="object-cover object-top"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

