"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  ShoppingBag,
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { SOCIAL_URLS } from "@/constants/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { HaikeiHeroWaves, HaikeiEditorialCompass } from "./haikei-svg";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./social-icons";

interface HeroProps {
  resumeUrl?: string;
}

const PREVIEW_TABS = [
  {
    id: "track-my-spend",
    label: "Track My Spend",
    badge: "MERN Stack",
    title: "Finance & Expense Intelligence",
    stack: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    image: "/track-my-spend.png",
    stat: "Real-time Analytics",
    slug: "track-my-spend",
    liveUrl: "https://track-my-spend-zeta.vercel.app/",
  },
  {
    id: "mystery-box-app",
    label: "Mystery Box App",
    badge: "Shopify App",
    title: "Mystery Box Commerce Engine",
    stack: ["Shopify Admin API", "GraphQL", "App Bridge", "Theme Extension"],
    image: "/mystery-box-app.png",
    stat: "Shopify Embedded App",
    slug: "mystery-box-app",
    liveUrl: null,
  },
  {
    id: "rabbit-case",
    label: "Rabbit Case",
    badge: "Full-Stack UI",
    title: "Custom E-Commerce Platform",
    stack: ["React.js", "Redux", "Node.js", "MongoDB"],
    image: "/rabbit-case.png",
    stat: "Custom Liquid & API",
    slug: "rabbit-case",
    liveUrl: "https://rabbitcase-g3ck0nomk-priyanshupatel1253-gmailcoms-projects.vercel.app/",
  },
];

export function Hero({ resumeUrl = "/Resume_Sagar_Panchal.pdf" }: HeroProps) {
  const [activeTab, setActiveTab] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const currentPreview = PREVIEW_TABS[activeTab];

  return (
    <section
      id="home"
      data-section
      className="relative min-h-[calc(100vh-72px)] flex items-center justify-center bg-[#F7F5F0] border-b border-[#DAD8D0] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Haikei-inspired Layered Abstract Waves Background */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <HaikeiHeroWaves />
      </div>

      <div className="editorial-container px-5 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Typography & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Professional Status & Identity Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8D2B5]/75 border border-[#DAD8D0] text-[#24231F] shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#590907] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#590907]" />
                </span>
                <span className="text-xs font-mono font-medium">
                  Available for Full-Stack &amp; Shopify Projects
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.16em] text-[#590907] uppercase">
                <span>MERN Stack Developer</span>
                <span className="text-[#A5A79B]">•</span>
                <span>Shopify App Developer</span>
              </div>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="space-y-4"
            >
              <h1
                className="font-heading font-bold tracking-tight text-[#24231F] leading-[1.06]"
                style={{ fontSize: "clamp(2.4rem, 4.2vw + 0.6rem, 4.25rem)" }}
              >
                Building Digital Experiences That{" "}
                <span className="relative inline-block text-[#590907]">
                  Make an Impact.
                  <span
                    className="absolute left-0 bottom-1.5 w-full h-3 bg-[#E8D2B5] -z-10 rounded-sm opacity-80"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#68665F] leading-relaxed max-w-xl">
                I’m <strong className="text-[#24231F] font-semibold">Sagar Panchal</strong>, a
                full-stack software engineer crafting robust MERN web applications, scalable Node.js
                microservices, and high-performance Shopify apps with Admin GraphQL &amp; Liquid.
              </p>
            </motion.div>

            {/* CTAs & Actions */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#590907] text-[#F7F5F0] font-semibold text-xs sm:text-sm hover:bg-[#3D0605] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E8D2B5] border border-[#DAD8D0] text-[#24231F] font-semibold text-xs sm:text-sm hover:bg-[#E8D2B5]/80 transition-all duration-200 cursor-pointer active:scale-95 shadow-xs"
              >
                <span>Let’s Connect</span>
                <ArrowUpRight className="h-4 w-4 text-[#590907]" />
              </button>
            </motion.div>

            {/* Social Icons & Specialization */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 border-t border-[#DAD8D0] flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <a
                  href={SOCIAL_URLS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] text-[#24231F] hover:text-[#590907] hover:border-[#A5A79B] hover:bg-[#E8D2B5]/25 transition-all duration-200 shadow-2xs flex items-center justify-center cursor-pointer"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href={SOCIAL_URLS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] text-[#24231F] hover:text-[#590907] hover:border-[#A5A79B] hover:bg-[#E8D2B5]/25 transition-all duration-200 shadow-2xs flex items-center justify-center cursor-pointer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              <div className="h-6 w-px bg-[#DAD8D0] hidden sm:block" />

              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-[#E8D2B5] flex items-center justify-center text-[#590907]">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-[#68665F] uppercase tracking-wider block">Specialization</span>
                  <span className="text-xs font-heading font-bold text-[#24231F] block">Full Stack Developer</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sophisticated Project Preview Composition (5 cols) */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Background Editorial Accents */}
            <div className="absolute -top-10 -right-8 w-36 h-36 opacity-30 pointer-events-none hidden sm:block">
              <HaikeiEditorialCompass />
            </div>

            {/* Main Interactive Studio Card inspired by Watermelon UI */}
            <div className="relative rounded-2xl bg-[#FFFFFF] border border-[#DAD8D0] p-4 sm:p-5 shadow-[0_16px_40px_-16px_rgba(36,35,31,0.12)]">
              {/* Studio Browser Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#DAD8D0]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#590907]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#E8D2B5] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#A5A79B] inline-block" />
                  <span className="text-[11px] font-mono text-[#68665F] ml-2 font-medium">
                    live-preview.dev
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#A5A79B]/20 text-[10px] font-mono text-[#24231F]">
                  <Activity className="h-3 w-3 text-[#590907]" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Watermelon-style Pill Tab Switcher */}
              <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-[#F7F5F0] border border-[#DAD8D0] mb-4">
                {PREVIEW_TABS.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-mono font-medium transition-all duration-200 cursor-pointer truncate ${
                      activeTab === idx
                        ? "bg-[#590907] text-[#F7F5F0] shadow-xs"
                        : "text-[#68665F] hover:text-[#24231F]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Project Showcase Media Frame */}
              <div className="relative rounded-xl overflow-hidden border border-[#DAD8D0] bg-[#F7F5F0] aspect-[16/10] group">
                <Image
                  src={currentPreview.image}
                  alt={currentPreview.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24231F]/70 via-transparent to-transparent opacity-80" />

                {/* Overlaid Information */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 text-[#FFFFFF]">
                  <div className="space-y-0.5 text-left">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#E8D2B5] text-[#24231F]">
                      {currentPreview.badge}
                    </span>
                    <h2 className="font-heading font-bold text-sm tracking-tight text-white drop-shadow-xs">
                      {currentPreview.title}
                    </h2>
                  </div>

                  {currentPreview.liveUrl && (
                    <a
                      href={currentPreview.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#590907] text-[#F7F5F0] hover:bg-[#3D0605] transition-colors shadow-xs"
                      aria-label={`Open ${currentPreview.title} demo`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Tech Stack Chips & Metric Footer */}
              <div className="pt-3.5 mt-3.5 border-t border-[#DAD8D0] flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {currentPreview.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-[#A5A79B]/15 border border-[#DAD8D0] text-[10px] font-mono text-[#24231F]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${currentPreview.slug}`}
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#590907] hover:underline"
                >
                  <span>Details</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
