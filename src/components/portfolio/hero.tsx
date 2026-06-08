"use client";

import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroCanvas } from "./hero-canvas";
import { motion } from "framer-motion";

interface HeroProps {
  resumeUrl?: string;
}

export function Hero({ resumeUrl }: HeroProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Stagger variants for word reveal
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const lineVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      data-section
      className="relative min-h-screen flex items-center justify-between overflow-hidden px-6 sm:px-12 select-none py-20"
    >
      <div className="absolute inset-0 premium-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* 3D Canvas Background */}
      <HeroCanvas />

      <div className="max-w-7xl mx-auto w-full grid gap-10 lg:grid-cols-12 relative z-10">
        {/* Left Column: Big Bold Typography & Editorial Copy */}
        <div className="lg:col-span-8 flex flex-col justify-center space-y-8 text-left">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            CREATIVE PORTFOLIO 2026
          </motion.div>

          {/* Huge headline titles */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-1.5 font-heading text-5xl font-black tracking-[-0.05em] text-white sm:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.9]"
          >
            <div className="text-reveal-container">
              <motion.h1 variants={lineVariants}>MERN ENGINEER</motion.h1>
            </div>
            <div className="text-reveal-container block">
              <motion.h1 variants={lineVariants} className="text-white/40">
                & SHOPIFY
              </motion.h1>
            </div>
            <div className="text-reveal-container">
              <motion.h1 variants={lineVariants}>ARCHITECT.</motion.h1>
            </div>
          </motion.div>

          {/* Subtext description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 text-sm sm:text-base max-w-xl leading-relaxed"
          >
            Sagar Panchal designs state-of-the-art backend architectures, full-stack React applications, custom Shopify apps, and custom Liquid e-commerce setups with extreme visual polish.
          </motion.p>

          {/* CTA actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center rounded-full bg-white hover:bg-white/90 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-[#000000] transition-colors cursor-pointer shadow-lg shadow-white/5"
            >
              Explore works
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Right Column: Parallax drifting laptop placeholder */}
        <div
          className="lg:col-span-4 hidden lg:flex items-center justify-center select-none"
          style={{ transform: `translateY(${offsetY * 0.04}px)` }}
        />
      </div>

      {/* Floating Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-white"
      >
        <span>SCROLL DOWN</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1 transition-colors hover:border-white/40">
          <ArrowDown className="h-3.5 w-3.5 text-white/50 animate-bounce" />
        </span>
      </button>
    </section>
  );
}
