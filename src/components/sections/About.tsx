"use client";

import React from "react";
import { aboutContent, settings } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AbstractBlob } from "@/components/graphics/AbstractBlob";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 border-b border-[#292D36] bg-[#030407]"
    >
      <div className="editorial-container px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          index="05"
          label="About Me"
          title={
            <span id="about-heading">
              Curious Mind.{" "}
              <span className="text-[#D4FF24]">Engineering Mindset.</span>
            </span>
          }
          description="Software developer focused on full-stack MERN applications, custom Shopify apps, and practical AI-assisted implementation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left 7 Columns: Editorial Biography & Development Philosophy */}
          <Reveal
            direction="up"
            className="lg:col-span-7 bg-[#101218] border border-[#292D36] p-6 sm:p-10 space-y-6"
          >
            <p className="text-lg sm:text-xl font-heading font-semibold text-[#F5F5F5] leading-relaxed">
              {aboutContent.intro}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#B4B8C3] leading-relaxed">
              {aboutContent.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Focus Areas Grid */}
            <div className="pt-6 border-t border-[#292D36] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutContent.focusAreas.map((area) => (
                <div
                  key={area.label}
                  className="p-4 bg-[#030407] border border-[#292D36]"
                >
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4FF24] mb-1">
                    {area.label}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[#F5F5F5]">
                    {area.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right 5 Columns: Haikei Abstract SVG Composition + Developer Profile Card */}
          <Reveal
            direction="up"
            delay={0.12}
            className="lg:col-span-5 space-y-6"
          >
            <AbstractBlob variant="editorial" />

            <div className="bg-[#171B25] border border-[#292D36] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#292D36] pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4FF24]">
                  DEVELOPER PROFILE
                </span>
                <span className="text-xs font-mono text-[#B4B8C3]">
                  {settings.contactAddress}
                </span>
              </div>

              <dl className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1 border-b border-[#292D36]/60">
                  <dt className="font-mono text-[#B4B8C3]">Name</dt>
                  <dd className="font-semibold text-[#F5F5F5]">
                    {settings.name}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#292D36]/60">
                  <dt className="font-mono text-[#B4B8C3]">Primary Role</dt>
                  <dd className="font-semibold text-[#F5F5F5]">
                    MERN Stack Developer
                  </dd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#292D36]/60">
                  <dt className="font-mono text-[#B4B8C3]">Specialization</dt>
                  <dd className="font-semibold text-[#D4FF24]">
                    Shopify App Developer
                  </dd>
                </div>
                <div className="flex items-center justify-between py-1">
                  <dt className="font-mono text-[#B4B8C3]">Workflow</dt>
                  <dd className="font-semibold text-[#F5F5F5]">
                    AI-Assisted / Vibe Coding
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
