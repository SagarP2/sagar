"use client";

import React from "react";
import { ArrowDownRight, FileText } from "lucide-react";
import { WebsiteSetting, Project } from "@/types/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/graphics/HeroVisual";
import { AbstractBlob } from "@/components/graphics/AbstractBlob";

interface HeroProps {
  settings: WebsiteSetting;
  featuredProject?: Project;
}

export function Hero({ settings, featuredProject }: HeroProps) {
  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-72px)] pt-12 pb-20 sm:pt-16 sm:pb-24 lg:py-24 border-b border-[#292D36] architectural-grid overflow-hidden flex items-center"
    >
      {/* Haikei-inspired Organic SVG Background Composition */}
      <AbstractBlob
        variant="cobalt-lime"
        className="absolute -top-36 -right-36 w-[640px] h-[640px] opacity-80"
      />

      <div className="editorial-container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column (7 Cols): Strong Left-Aligned Editorial Typography */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Eyebrow Badge */}
            <Reveal direction="up" distance={16}>
              <div className="inline-flex items-center gap-3 px-3.5 py-2 bg-[#101218] border border-[#292D36]">
                <span
                  className="h-2 w-2 bg-[#D4FF24] shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#F5F5F5]">
                  {settings.eyebrow}
                </span>
              </div>
            </Reveal>

            {/* Editorial Headline with Staggered Motion Word Reveal */}
            <div className="space-y-2">
              <h1
                id="hero-heading"
                className="font-heading font-bold tracking-tight text-[#F5F5F5] leading-[1.03]"
                style={{ fontSize: "clamp(2.65rem, 5.2vw + 0.6rem, 4.75rem)" }}
              >
                <span className="block">
                  <AnimatedText
                    text={settings.headlineLine1}
                    highlightWords={["Digital", "Products."]}
                    highlightClassName="text-[#F5F5F5]"
                    delay={0.05}
                  />
                </span>
                <span className="block mt-1">
                  <AnimatedText
                    text={settings.headlineLine2}
                    highlightWords={["Idea", "Production."]}
                    highlightClassName="text-[#D4FF24]"
                    delay={0.22}
                  />
                </span>
              </h1>
            </div>

            {/* Positioning Description */}
            <Reveal direction="up" delay={0.3} distance={18}>
              <p className="text-base sm:text-lg text-[#B4B8C3] max-w-2xl leading-relaxed">
                {settings.heroDescription}
              </p>
            </Reveal>

            {/* Primary & Secondary CTAs */}
            <Reveal direction="up" delay={0.38} distance={18}>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button
                  href="#work"
                  variant="primary"
                  size="lg"
                  onClick={(e) => handleAnchorClick(e, "work")}
                  className="brutalist-accent-cobalt"
                >
                  <span>Explore My Work</span>
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </Button>

                <Button
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  onClick={(e) => handleAnchorClick(e, "contact")}
                >
                  <span>Let&apos;s Connect</span>
                </Button>
              </div>
            </Reveal>

            {/* Actual GitHub, LinkedIn & Resume Links */}
            <Reveal direction="up" delay={0.45} distance={16}>
              <div className="pt-6 border-t border-[#292D36] flex flex-wrap items-center justify-between gap-6">
                <SocialLinks variant="inline" />

                {settings.resumeUrl && (
                  <a
                    href={settings.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#171B25] border border-[#292D36] text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F5F5] hover:border-[#D4FF24] hover:text-[#D4FF24] transition-colors"
                  >
                    <FileText
                      className="h-3.5 w-3.5 text-[#D4FF24]"
                      aria-hidden="true"
                    />
                    <span>Resume / CV</span>
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Column (5 Cols): Distinctive Featured Project & Haikei SVG Visual */}
          <div className="lg:col-span-5">
            {featuredProject && <HeroVisual project={featuredProject} />}
          </div>
        </div>
      </div>
    </section>
  );
}
