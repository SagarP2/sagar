"use client";

import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroCanvas } from "./hero-canvas";
import { motion } from "framer-motion";
import { Magnetic } from "./magnetic";

interface HeroProps {
  resumeUrl?: string;
}

export function Hero({ resumeUrl }: HeroProps) {
  const [offsetY, setOffsetY] = useState(0);
  void resumeUrl;

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    const lenis = (window as unknown as { lenis: { scrollTo: (target: string, options?: { offset?: number }) => void } | undefined }).lenis;
    if (lenis) {
      lenis.scrollTo(`#${targetId}`, { offset: -80 });
    } else {
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
    }
  };

  // Luxury line reveals
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { y: "110%", rotate: 2 },
    visible: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      data-section
      className="relative min-h-screen flex items-center justify-between overflow-hidden px-6 sm:px-12 select-none py-28"
    >
      {/* Background blueprint details */}
      <div className="absolute inset-0 premium-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* Backlight glowing orbs */}
      <div className="absolute top-[20%] left-[15%] w-[450px] h-[450px] bg-gold-400/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-ice-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 3D WebGL Crystal Core */}
      <HeroCanvas />

      {/* Blueprint Structural Layout Lines */}
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute left-0 right-0 bottom-24 h-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto w-full grid gap-10 lg:grid-cols-12 relative z-10">
        {/* Left column text details */}
        <div className="lg:col-span-9 flex flex-col justify-center space-y-12 text-left">
          
          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 px-4 py-2 border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-full max-w-fit text-[9px] font-bold uppercase tracking-[0.25em] text-gold-400 shadow-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
            ENGINEERING LUXURY PLATFORMS // 2026
          </motion.div>

          {/* Premium Headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 font-heading text-6xl font-black tracking-tighter text-white sm:text-8xl lg:text-[6rem] xl:text-[7rem] leading-[0.82] uppercase"
          >
            <div className="text-reveal-container block">
              <motion.h1 
                variants={lineVariants}
                className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70"
              >
                MERN STACK
              </motion.h1>
            </div>
            <div className="text-reveal-container block">
              <motion.h1 
                variants={lineVariants} 
                className="bg-clip-text text-transparent bg-gradient-to-b from-white/30 via-white/10 to-white/5"
              >
                &amp; SHOPIFY
              </motion.h1>
            </div>
            <div className="text-reveal-container block">
              <motion.h1 
                variants={lineVariants}
                className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gold-400/80"
              >
                ARCHITECT.
              </motion.h1>
            </div>
          </motion.div>

          {/* Luxury Copy */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 text-sm sm:text-base max-w-xl leading-relaxed font-sans font-medium"
          >
            Sagar Panchal builds robust, state-of-the-art full-stack architectures, high-performance API backends, bespoke Shopify apps, and Liquid e-commerce storefronts optimized for sub-second page rendering and high visual fidelity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Magnetic>
              <button
                onClick={() => scrollToSection("projects")}
                className="relative group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[9px] font-black uppercase tracking-widest text-[#040406] cursor-pointer overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                Explore Portfolio
                <ArrowUpRight className="ml-2 h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Magnetic>
            
            <Magnetic>
              <button
                onClick={() => scrollToSection("contact")}
                className="relative group inline-flex items-center justify-center rounded-full border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] px-8 py-4 text-[9px] font-black uppercase tracking-widest text-white cursor-pointer overflow-hidden transition-all duration-300 hover:border-gold-400/30 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Request briefing</span>
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right side floating empty offset spacer (for WebGL visual balance) */}
        <div
          className="lg:col-span-3 hidden lg:flex items-center justify-center select-none"
          style={{ transform: `translateY(${offsetY * 0.05}px)` }}
        />
      </div>

      {/* Blueprint Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-gold-400"
      >
        <span>SCROLL DOWN</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/10 p-1 transition-colors hover:border-gold-400/40">
          <ArrowDown className="h-3.5 w-3.5 text-white/30 animate-bounce" />
        </span>
      </button>
    </section>
  );
}
