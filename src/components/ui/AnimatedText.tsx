"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { delay: number; stagger: number }) => ({
    transition: {
      delayChildren: custom.delay,
      staggerChildren: custom.stagger,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function AnimatedText({
  text,
  className,
  wordClassName,
  highlightWords = [],
  highlightClassName = "text-[#D4FF24]",
  delay = 0,
  staggerChildren = 0.055,
  once = true,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return (
      <span className={cn("inline-block", className)}>
        {words.map((word, index) => {
          const cleanWord = word.replace(/[.,!?]/g, "");
          const isHighlighted =
            highlightWords.includes(word) || highlightWords.includes(cleanWord);
          return (
            <span
              key={`${word}-${index}`}
              className={cn(
                "inline-block mr-[0.26em] last:mr-0",
                wordClassName,
                isHighlighted && highlightClassName
              )}
            >
              {word}
            </span>
          );
        })}
      </span>
    );
  }

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      custom={{ delay, stagger: staggerChildren }}
      className={cn("inline-block", className)}
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,!?]/g, "");
        const isHighlighted =
          highlightWords.includes(word) || highlightWords.includes(cleanWord);

        return (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden align-bottom mr-[0.26em] last:mr-0 pb-1"
          >
            <motion.span
              variants={wordVariants}
              className={cn(
                "inline-block will-change-transform",
                wordClassName,
                isHighlighted && highlightClassName
              )}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}

