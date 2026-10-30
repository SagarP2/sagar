"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Terminal,
  ShoppingBag,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Project } from "@/types/portfolio";
import { SOCIAL_URLS } from "@/constants/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/shared/SocialIcons";

interface HeroSectionProps {
  resumeUrl?: string;
  featuredProject?: Project;
}

const HERO_STACK_BADGES = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Shopify Admin API",
  "GraphQL",
  "Polaris",
  "App Bridge",
] as const;

export function HeroSection({ resumeUrl, featuredProject }: HeroSectionProps) {
  const previewTitle = featuredProject?.title ?? "Track My Spend — Expense & Budget Manager";
  const previewSlug = featuredProject?.slug ?? "track-my-spend";
  const previewCategory = featuredProject?.category ?? "MERN Stack";
  const previewLiveUrl = featuredProject?.liveUrl ?? "https://track-my-spend-phi.vercel.app/";
  const previewImage =
    featuredProject?.mediaList?.find((m) => m.isCover)?.media?.url ??
    featuredProject?.mediaList?.[0]?.media?.url ??
    "/projects/track-my-spend.png";

  return (
    <section
      id="home"
      data-section
      className="relative bg-[#030407] border-b border-[#292D36] py-16 sm:py-24 lg:py-28 overflow-hidden bento-grid-pattern"
    >
      {/* Restrained Electric Cobalt Blue ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 right-0 w-[480px] h-[480px] rounded-full bg-[#1558C9]/15 blur-[130px]"
      />

      <div className="editorial-container px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column — High-Contrast Minimalist Typography (6 cols) */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill">
              <span className="h-2 w-2 rounded-full bg-[#D4FF24]" aria-hidden="true" />
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#D4FF24]">
                MERN STACK DEVELOPER / SHOPIFY APP DEVELOPER
              </span>
            </div>

            {/* Main Headline & Supporting Copy */}
            <div className="space-y-6">
              <h1
                className="font-heading font-bold tracking-tight text-[#F5F5F5] leading-[1.04]"
                style={{ fontSize: "clamp(2.4rem, 4.8vw + 0.5rem, 4.35rem)" }}
              >
                Building Digital Experiences That{" "}
                <span className="text-[#D4FF24]">Move Business Forward.</span>
              </h1>

              <p
                className="text-[#B4B8C3] leading-relaxed max-w-xl font-normal"
                style={{ fontSize: "clamp(1.025rem, 1.15vw, 1.175rem)" }}
              >
                I build modern web applications and Shopify solutions with a focus on thoughtful
                interfaces, reliable architecture, and practical functionality.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md bg-[#D4FF24] text-[#030407] font-bold text-xs uppercase tracking-widest hover:bg-[#e1ff5c] transition-colors cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md border border-[#292D36] bg-[#101218] text-[#F5F5F5] font-semibold text-xs uppercase tracking-widest hover:border-[#1558C9] hover:bg-[#1558C9] transition-colors cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4 text-[#D4FF24]" aria-hidden="true" />
              </button>

              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-[#B4B8C3] hover:text-[#D4FF24] underline-reveal"
                >
                  <Download className="h-3.5 w-3.5 text-[#D4FF24]" aria-hidden="true" />
                  <span>Resume (PDF)</span>
                </a>
              )}
            </div>

            {/* Social Links & Location Footer */}
            <div className="pt-6 border-t border-[#292D36] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <a
                  href={SOCIAL_URLS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#D4FF24] transition-colors"
                  aria-label="Sagar Panchal on GitHub"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#B4B8C3]" aria-hidden="true" />
                </a>

                <span className="text-[#292D36]" aria-hidden="true">
                  /
                </span>

                <a
                  href={SOCIAL_URLS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#D4FF24] transition-colors"
                  aria-label="Sagar Panchal on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#B4B8C3]" aria-hidden="true" />
                </a>
              </div>

              <div className="text-xs font-mono text-[#B4B8C3] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1558C9]" aria-hidden="true" />
                <span>Sagar Panchal · Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Right Column — Asymmetric Bento Composition (6 cols) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 text-left">
              {/* Top Wide Bento Card: Featured Project Preview (12 cols) */}
              <div className="sm:col-span-12 rounded-xl bg-[#101218] border border-[#292D36] overflow-hidden shadow-xl group">
                <div className="px-5 py-3.5 bg-[#1A1E27] border-b border-[#292D36] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4FF24]" aria-hidden="true" />
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#F5F5F5]">
                      Featured Production Build · {previewCategory}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {previewLiveUrl && (
                      <a
                        href={previewLiveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#D4FF24] hover:underline"
                      >
                        <span>Live</span>
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    )}
                    <Link
                      href={`/projects/${previewSlug}`}
                      className="text-[11px] font-mono text-[#B4B8C3] hover:text-[#F5F5F5] transition-colors"
                    >
                      Case Study →
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                  <Link
                    href={`/projects/${previewSlug}`}
                    className="sm:col-span-7 relative aspect-[16/10] bg-[#030407] overflow-hidden block border-b sm:border-b-0 sm:border-r border-[#292D36]"
                    aria-label={`Inspect ${previewTitle}`}
                  >
                    <Image
                      src={previewImage}
                      alt={previewTitle}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </Link>

                  <div className="sm:col-span-5 p-5 space-y-3">
                    <span className="inline-block px-2 py-0.5 rounded bg-[#1558C9]/25 border border-[#1558C9]/50 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#D4FF24]">
                      MERN + JWT Auth
                    </span>
                    <h2 className="font-heading font-bold text-base text-[#F5F5F5] leading-snug">
                      <Link
                        href={`/projects/${previewSlug}`}
                        className="hover:text-[#D4FF24] transition-colors"
                      >
                        {previewTitle}
                      </Link>
                    </h2>
                    <p className="text-xs text-[#B4B8C3] leading-relaxed line-clamp-3">
                      Personal expense and budget management platform with real-time financial
                      summaries, category filtering, and interactive charts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Left Bento Card: Electric Cobalt Blue Developer Profile Panel (7 cols) */}
              <div className="sm:col-span-7 rounded-xl bg-[#1558C9] border border-[#1558C9] p-5 sm:p-6 flex flex-col justify-between space-y-4 text-[#F5F5F5]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#030407]/40 text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4FF24]">
                    <ShoppingBag className="h-3 w-3" aria-hidden="true" />
                    Rabbitcode Agency
                  </span>
                  <span className="text-[11px] font-mono text-[#F5F5F5]/80">2025 — Present</span>
                </div>

                <div className="space-y-1.5">
                  <h2 className="font-heading font-bold text-lg text-[#F5F5F5] leading-tight">
                    MERN Stack &amp; Shopify App Developer
                  </h2>
                  <p className="text-xs text-[#F5F5F5]/90 leading-relaxed">
                    Engineering full-stack React &amp; Node.js web platforms, custom embedded
                    Shopify apps, Admin GraphQL integrations, and Liquid storefronts.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F5F5F5]/20 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#D4FF24] font-semibold">Full-Stack &amp; Commerce</span>
                  <span className="text-[#F5F5F5]/85">Production Systems</span>
                </div>
              </div>

              {/* Bottom Right Bento Card: Compact Technology Stack Panel (5 cols) */}
              <div className="sm:col-span-5 rounded-xl bg-[#101218] border border-[#292D36] p-5 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#F5F5F5]">
                    <Terminal className="h-3.5 w-3.5 text-[#D4FF24]" aria-hidden="true" />
                    Core Stack
                  </span>
                  <Sparkles className="h-3.5 w-3.5 text-[#1558C9]" aria-hidden="true" />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {HERO_STACK_BADGES.map((tech, idx) => (
                    <span
                      key={tech}
                      className={
                        idx === 0 || idx === 6
                          ? "px-2 py-1 rounded bg-[#D4FF24] text-[#030407] text-[10px] font-mono font-bold"
                          : "px-2 py-1 rounded bg-[#1A1E27] border border-[#292D36] text-[#B4B8C3] text-[10px] font-mono"
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
