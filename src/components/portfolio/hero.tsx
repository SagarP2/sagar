"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin, Briefcase, Code2 } from "lucide-react";
import { SOCIAL_URLS } from "@/constants/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./social-icons";

interface HeroProps {
  resumeUrl?: string;
}

export function Hero({ resumeUrl }: HeroProps) {
  return (
    <section
      id="home"
      data-section
      className="relative bg-[#F7F5F0] border-b border-[#DAD8D0] py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Subtle geometric background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[38%] h-full bg-[#A5A79B]/14 border-l border-[#DAD8D0]/70 hidden lg:block"
      />

      <div className="editorial-container px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Introduction (6 cols) */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Availability & Eyebrow */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D2B5]/70 border border-[#DAD8D0] text-[#24231F]">
                <span className="h-2 w-2 rounded-full bg-[#590907]" aria-hidden="true" />
                <span className="text-[11px] font-medium">
                  Available for Full-Stack &amp; Shopify Projects
                </span>
              </div>

              <p className="text-xs font-mono font-semibold tracking-[0.14em] text-[#590907] uppercase">
                MERN STACK DEVELOPER • SHOPIFY APP DEVELOPER
              </p>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1
                className="font-heading font-bold tracking-tight text-[#24231F] leading-[1.08]"
                style={{ fontSize: "clamp(2.2rem, 4vw + 0.5rem, 3.75rem)" }}
              >
                Building Digital Products That{" "}
                <span className="text-[#590907] underline decoration-[#E8D2B5] decoration-4 underline-offset-8">
                  Work Beautifully.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#68665F] leading-relaxed max-w-xl">
                I&apos;m <strong className="text-[#24231F] font-semibold">Sagar Panchal</strong>, a
                full-stack developer specializing in MERN web applications and custom Shopify apps —
                combining clean frontend interfaces, dependable Node.js &amp; GraphQL backends, and
                thoughtful product architecture.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#590907] text-[#F7F5F0] font-semibold text-xs sm:text-sm hover:bg-[#3D0605] transition-colors cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E8D2B5] border border-[#DAD8D0] text-[#24231F] font-semibold text-xs sm:text-sm hover:bg-[#E8D2B5]/80 transition-colors cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4 text-[#590907]" aria-hidden="true" />
              </button>
            </div>

            {/* Verified Social Profiles */}
            <div className="pt-5 border-t border-[#DAD8D0] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <a
                  href={SOCIAL_URLS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#24231F] hover:text-[#590907] transition-colors underline-reveal"
                  aria-label="Sagar Panchal on GitHub"
                >
                  <Github className="h-4 w-4 text-[#590907]" />
                  <span>github.com/SagarP2</span>
                </a>

                <span className="text-[#DAD8D0]" aria-hidden="true">
                  •
                </span>

                <a
                  href={SOCIAL_URLS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#24231F] hover:text-[#590907] transition-colors underline-reveal"
                  aria-label="Sagar Panchal on LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-[#590907]" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-semibold text-[#590907] hover:text-[#3D0605] underline-reveal"
                >
                  Download CV →
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Asymmetrical Bento Visual Composition (6 cols) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 text-left">
              {/* Bento Card 1: Featured Project Preview (7 cols) */}
              <Link
                href="/projects/track-my-spend"
                className="sm:col-span-7 bento-card rounded-xl overflow-hidden flex flex-col justify-between group bg-[#FFFFFF]"
                aria-label="Featured Project: Track My Spend"
              >
                <div className="relative aspect-[16/10] w-full bg-[#A5A79B]/25 overflow-hidden border-b border-[#DAD8D0]">
                  <Image
                    src="/track-my-spend-index.png"
                    alt="Track My Spend personal finance dashboard preview"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="glass-pill absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold text-[#24231F]">
                    Featured Build
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <div>
                    <p className="font-heading font-bold text-sm text-[#24231F] group-hover:text-[#590907] transition-colors">
                      Track My Spend
                    </p>
                    <p className="text-xs text-[#68665F]">Next.js • Node.js • MongoDB</p>
                  </div>
                  <span className="w-7 h-7 rounded-md bg-[#E8D2B5]/70 text-[#590907] flex items-center justify-center shrink-0">
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>

              {/* Bento Card 2: Burgundy Accent Panel — Current Role (5 cols) */}
              <div className="sm:col-span-5 rounded-xl bg-[#590907] text-[#F7F5F0] p-5 flex flex-col justify-between border border-[#590907]">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#E8D2B5]">
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Current Role</span>
                  </span>
                  <span>2025—Now</span>
                </div>

                <div className="space-y-1.5 my-3">
                  <p className="font-heading font-bold text-base leading-snug text-[#F7F5F0]">
                    Rabbitcode Agency
                  </p>
                  <p className="text-xs text-[#E8D2B5] font-medium">
                    MERN Stack &amp; Shopify App Developer
                  </p>
                  <p className="text-xs text-[#F7F5F0]/80 leading-relaxed pt-1">
                    Embedded Shopify apps, GraphQL APIs, webhook pipelines &amp; full-stack MERN
                    platforms.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E8D2B5]/20 flex items-center justify-between text-[11px] font-mono text-[#E8D2B5]">
                  <span>Remote</span>
                  <span>Production</span>
                </div>
              </div>

              {/* Bento Card 3: Compact Developer Profile Card on Warm Cream Beige (5 cols) */}
              <div className="sm:col-span-5 rounded-xl bg-[#E8D2B5]/65 border border-[#DAD8D0] p-4.5 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-[#590907] uppercase">
                    Developer Profile
                  </span>
                  <MapPin className="h-3.5 w-3.5 text-[#590907]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-[#24231F]">
                    Sagar Panchal
                  </p>
                  <p className="text-xs text-[#68665F] mt-0.5">
                    Bardoli, Gujarat, India
                  </p>
                </div>
                <div className="pt-2 border-t border-[#DAD8D0] text-[11px] font-medium text-[#24231F]">
                  B.Sc. in Information Technology (BMIIT)
                </div>
              </div>

              {/* Bento Card 4: Core Technology Stack Card on Muted Sage Grey (7 cols) */}
              <div className="sm:col-span-7 rounded-xl bg-[#A5A79B]/22 border border-[#DAD8D0] p-4.5 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#24231F] uppercase">
                    <Code2 className="h-3.5 w-3.5 text-[#590907]" aria-hidden="true" />
                    <span>Core Stack</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#68665F]">Full-Stack + Commerce</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {[
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "PostgreSQL",
                    "Shopify Admin API",
                    "GraphQL",
                    "Polaris",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#DAD8D0] text-[11px] font-medium text-[#24231F]"
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
