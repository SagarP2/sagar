"use client";

import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Layers,
  ShoppingBag,
  Server,
  Database,
} from "lucide-react";
import { SOCIAL_URLS } from "@/constants/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/shared/SocialIcons";

interface HeroSectionProps {
  resumeUrl?: string;
}

export function HeroSection({ resumeUrl }: HeroSectionProps) {
  return (
    <section
      id="home"
      data-section
      className="relative bg-[#F7F5F0] border-b border-[#D8D4CA] py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Subtle geometric background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-1/3 h-full bg-[#EEEAE2]/60 border-l border-[#D8D4CA]/60 hidden lg:block"
      />

      <div className="editorial-container px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Editorial Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Availability Status Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8D2B5]/60 border border-[#D8D4CA] text-[#252522]">
              <span className="h-2 w-2 rounded-full bg-[#590907]" aria-hidden="true" />
              <span className="text-xs font-mono font-medium tracking-wide uppercase">
                MERN Stack &amp; Shopify App Developer
              </span>
            </div>

            {/* Responsive Editorial Headline */}
            <div className="space-y-5">
              <h1
                className="font-heading font-bold tracking-tight text-[#252522] leading-[1.06]"
                style={{ fontSize: "clamp(2.35rem, 5vw + 0.5rem, 4.5rem)" }}
              >
                Building Digital{" "}
                <span className="text-[#590907] underline decoration-[#E8D2B5] decoration-4 underline-offset-8">
                  Experiences
                </span>{" "}
                That Work.
              </h1>

              <p
                className="text-[#66665F] leading-relaxed max-w-2xl font-normal"
                style={{ fontSize: "clamp(1.025rem, 1.2vw, 1.2rem)" }}
              >
                I&apos;m <strong className="text-[#252522] font-semibold">Sagar Panchal</strong> — a
                MERN Stack Developer and Shopify App Developer building scalable web applications,
                custom Shopify solutions, and intuitive digital experiences.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md bg-[#590907] text-[#F7F5F0] font-semibold text-xs uppercase tracking-widest hover:bg-[#3D0605] transition-colors cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md border border-[#252522] bg-transparent text-[#252522] font-semibold text-xs uppercase tracking-widest hover:bg-[#252522] hover:text-[#F7F5F0] transition-colors cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>

              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#590907] hover:text-[#3D0605] underline-reveal"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Résumé (PDF)</span>
                </a>
              )}
            </div>

            {/* Social Links & Location Metadata */}
            <div className="pt-6 border-t border-[#D8D4CA] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <a
                  href={SOCIAL_URLS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#252522] hover:text-[#590907] transition-colors"
                  aria-label="Sagar Panchal on GitHub"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#66665F]" aria-hidden="true" />
                </a>

                <span className="text-[#D8D4CA]" aria-hidden="true">
                  /
                </span>

                <a
                  href={SOCIAL_URLS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#252522] hover:text-[#590907] transition-colors"
                  aria-label="Sagar Panchal on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#66665F]" aria-hidden="true" />
                </a>
              </div>

              <div className="text-xs font-mono text-[#66665F]">
                Based in Bardoli, Gujarat, India
              </div>
            </div>
          </div>

          {/* Right Architectural Composition Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Muted Sage Grey Offset Geometric Frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 sm:-inset-4 rounded-xl bg-[#A5A79B]/35 border border-[#A5A79B]/50 translate-x-2 translate-y-2"
              />

              {/* Main Editorial Profile & Architecture Card */}
              <div className="relative rounded-xl bg-[#FFFFFF] border border-[#D8D4CA] overflow-hidden shadow-sm">
                {/* Warm Cream Beige Top Editorial Bar */}
                <div className="bg-[#E8D2B5] px-6 py-4 border-b border-[#D8D4CA] flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#252522]">
                    Engineering Profile
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-[#590907]">
                    SP // 2026
                  </span>
                </div>

                {/* Core Practice Pillars */}
                <div className="p-6 sm:p-7 space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#D8D4CA]/80 space-y-1.5">
                      <Layers className="h-4 w-4 text-[#590907]" aria-hidden="true" />
                      <h2 className="font-heading font-bold text-sm text-[#252522]">
                        Full-Stack MERN
                      </h2>
                      <p className="text-xs text-[#66665F] leading-relaxed">
                        React.js, Next.js, Node.js, Express.js, and MongoDB applications.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#D8D4CA]/80 space-y-1.5">
                      <ShoppingBag className="h-4 w-4 text-[#590907]" aria-hidden="true" />
                      <h2 className="font-heading font-bold text-sm text-[#252522]">
                        Shopify Apps
                      </h2>
                      <p className="text-xs text-[#66665F] leading-relaxed">
                        Embedded apps, App Bridge, Admin GraphQL API, Webhooks &amp; Liquid.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#D8D4CA]/80 space-y-1.5">
                      <Server className="h-4 w-4 text-[#590907]" aria-hidden="true" />
                      <h2 className="font-heading font-bold text-sm text-[#252522]">
                        Backend &amp; APIs
                      </h2>
                      <p className="text-xs text-[#66665F] leading-relaxed">
                        REST &amp; GraphQL endpoints, authentication, and server logic.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#D8D4CA]/80 space-y-1.5">
                      <Database className="h-4 w-4 text-[#590907]" aria-hidden="true" />
                      <h2 className="font-heading font-bold text-sm text-[#252522]">
                        Data &amp; Quality
                      </h2>
                      <p className="text-xs text-[#66665F] leading-relaxed">
                        MongoDB, SQL schemas, AWS S3 storage, and QA validation.
                      </p>
                    </div>
                  </div>

                  {/* Deep Burgundy Accent Panel — Verified Current Role */}
                  <div className="rounded-lg bg-[#590907] text-[#F7F5F0] p-5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#E8D2B5]">
                      <span>Current Role</span>
                      <span>Rabbitcode Agency</span>
                    </div>
                    <p className="font-heading font-semibold text-sm sm:text-base text-[#F7F5F0]">
                      MERN Stack &amp; Shopify App Developer
                    </p>
                    <p className="text-xs text-[#E8D2B5]/85 leading-relaxed">
                      Building full-stack web products, custom embedded Shopify applications,
                      GraphQL integrations, and tailored Liquid storefronts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

