"use client";

import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Sparkles, Code2, Server, ShoppingBag, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Magnetic } from "./magnetic";

const HeroCanvas = dynamic(
  () => import("./hero-canvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

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

  return (
    <section
      id="home"
      data-section
      className="relative min-h-screen flex items-center justify-between overflow-hidden px-6 sm:px-12 select-none pt-32 pb-24"
    >
      {/* Ambient Radial Lighting Overlays */}
      <div className="absolute inset-0 premium-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* Spatial Backlight Glows */}
      <div className="absolute top-[15%] left-[10%] w-[550px] h-[550px] bg-gold-400/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] bg-ice-400/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Interactive 3D WebGL Canvas Layer */}
      <HeroCanvas />

      {/* Blueprint Alignment Guides */}
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-white/[0.03] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-white/[0.03] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto w-full grid gap-12 lg:grid-cols-12 relative z-10 items-center">
        
        {/* Main Content Column */}
        <div className="lg:col-span-10 space-y-10 text-left">
          
          {/* Spatial Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill text-2xs font-mono font-bold tracking-widest text-gold-400 uppercase shadow-lg shadow-black/60"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>AVAILABLE FOR FULL-STACK & SHOPIFY ARCHITECTURE</span>
          </motion.div>

          {/* Vercel/Apple Style Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black text-white tracking-tighter leading-[0.85] font-heading uppercase">
              CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-200 to-white glow-text">HIGH-SCALE</span> WEB &amp; COMMERCE SYSTEMS.
            </h1>
            <p className="text-base sm:text-xl font-medium text-slate-300 max-w-3xl leading-relaxed">
              I’m Sagar Panchal — a backend-focused MERN Stack Engineer and Shopify Developer building resilient APIs, high-performance web applications, and custom commerce solutions.
            </p>
          </motion.div>

          {/* Tech Ecosystem Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80">
              <Server className="h-3.5 w-3.5 text-gold-400" /> Node.js &amp; Express APIs
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80">
              <Code2 className="h-3.5 w-3.5 text-ice-400" /> React 19 &amp; Next.js 16
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80">
              <ShoppingBag className="h-3.5 w-3.5 text-emerald-400" /> Custom Shopify Apps
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400" /> MongoDB &amp; PostgreSQL
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <Magnetic>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 rounded-full bg-gold-400 text-black font-bold text-xs uppercase tracking-widest hover:bg-gold-300 transition-all duration-300 shadow-xl shadow-gold-400/20 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>EXPLORE FEATURED WORKS</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </Magnetic>

            {resumeUrl && (
              <Magnetic>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border border-white/15 bg-white/5 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
                >
                  <span>GET RESUME (PDF)</span>
                  <ArrowDown className="h-3.5 w-3.5 text-gold-400" />
                </a>
              </Magnetic>
            )}
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono font-bold tracking-[0.3em] uppercase text-white/60">SCROLL DOWN</span>
        <ArrowDown className="h-3.5 w-3.5 text-gold-400 animate-bounce" />
      </div>
    </section>
  );
}
