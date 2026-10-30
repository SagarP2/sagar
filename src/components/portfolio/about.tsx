"use client";

import React from "react";
import { Layers, Server, ShoppingBag, ShieldCheck, CheckCircle2 } from "lucide-react";

interface AboutProps {
  bioText: string;
  subBioText: string;
  experienceYears?: number;
}

const FOCUS_AREAS = [
  {
    icon: Layers,
    title: "Maintainable Full-Stack Applications",
    description:
      "Designing modular React.js and Next.js frontends backed by structured Node.js and Express.js services that remain clean as products grow.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify App & Commerce Integrations",
    description:
      "Developing custom embedded Shopify applications using Admin GraphQL APIs, Polaris, App Bridge, Theme App Extensions, and Liquid.",
  },
  {
    icon: Server,
    title: "Reliable Backend & Data Systems",
    description:
      "Architecting REST and GraphQL APIs, authentication workflows, background queues, and schemas across MongoDB and PostgreSQL.",
  },
  {
    icon: ShieldCheck,
    title: "Practical, Accessible Interfaces",
    description:
      "Translating complex workflows into responsive, fast, and intuitive interfaces with clear visual hierarchy and thorough validation.",
  },
] as const;

const WORKING_PRINCIPLES = [
  "Write clear, strongly typed code that other engineers can read and extend confidently.",
  "Prioritize real-world performance, clean API boundaries, and predictable error states.",
  "Build merchant and end-user interfaces that feel effortless without unnecessary visual clutter.",
  "Validate data at every boundary — from client forms to database schemas and webhook handlers.",
] as const;

export function About({ bioText, subBioText, experienceYears = 1.5 }: AboutProps) {
  return (
    <section
      id="about"
      data-section
      className="relative py-20 sm:py-24 bg-[#A5A79B]/16 border-b border-[#DAD8D0]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
          <div className="lg:col-span-6 space-y-2.5">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#590907]">
              01 • About Me
            </p>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.4rem, 2.75rem)" }}
            >
              Engineering Thoughtful Digital Experiences.
            </h2>
          </div>

          <p className="lg:col-span-6 text-sm sm:text-base text-[#68665F] leading-relaxed">
            Focused on building maintainable web applications, practical user interfaces, reliable
            backend systems, and custom Shopify integrations.
          </p>
        </div>

        {/* Asymmetrical Bento Grid for About Me */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 text-left">
          {/* Card 1: Short Professional Introduction (7 cols) */}
          <div className="lg:col-span-7 bento-card rounded-xl p-6 sm:p-8 bg-[#FFFFFF] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-[#E8D2B5]/70 text-[#590907] text-xs font-mono font-semibold">
                Professional Introduction
              </span>
              <p className="text-base sm:text-lg text-[#24231F] font-medium leading-relaxed">
                {bioText ||
                  "I’m Sagar Panchal, a MERN Stack Developer and Shopify App Developer focused on building dependable web applications and custom commerce tools."}
              </p>
              <p className="text-sm text-[#68665F] leading-relaxed">
                {subBioText ||
                  "From database schema design and API architecture to responsive frontend interfaces, I approach every build with attention to clarity, maintainability, and user experience."}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#DAD8D0]">
              <div className="p-3.5 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0]">
                <span className="text-[11px] font-mono text-[#68665F] block">Experience</span>
                <span className="font-heading font-bold text-sm text-[#590907] mt-0.5 block">
                  {experienceYears}+ Years
                </span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0]">
                <span className="text-[11px] font-mono text-[#68665F] block">Core Stack</span>
                <span className="font-heading font-bold text-sm text-[#24231F] mt-0.5 block">
                  MERN + Next.js
                </span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#E8D2B5]/55 border border-[#DAD8D0]">
                <span className="text-[11px] font-mono text-[#24231F] block">Commerce</span>
                <span className="font-heading font-bold text-sm text-[#590907] mt-0.5 block">
                  Shopify Apps
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Working Principles on Warm Cream Beige & Burgundy (5 cols) */}
          <div className="lg:col-span-5 rounded-xl bg-[#E8D2B5]/65 border border-[#DAD8D0] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#590907]">
                  Working Principles
                </span>
                <span className="text-xs font-mono text-[#68665F]">How I Build</span>
              </div>

              <h3 className="font-heading font-bold text-xl text-[#24231F]">
                Clarity in code, reliability in production.
              </h3>

              <ul className="space-y-3 pt-1">
                {WORKING_PRINCIPLES.map((principle) => (
                  <li key={principle} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#24231F]">
                    <CheckCircle2
                      className="h-4 w-4 text-[#590907] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-[#590907] text-[#F7F5F0] flex items-center justify-between">
              <div>
                <p className="text-[11px] font-mono text-[#E8D2B5] uppercase">Current Focus</p>
                <p className="text-xs sm:text-sm font-heading font-semibold mt-0.5">
                  Full-Stack Web Apps &amp; Embedded Shopify Solutions
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row: 4 Technical Focus Area Cards (3 cols each on desktop) */}
          {FOCUS_AREAS.map((area, idx) => {
            const Icon = area.icon;
            return (
              <article
                key={area.title}
                className="lg:col-span-3 bento-card rounded-xl p-6 bg-[#FFFFFF] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0] flex items-center justify-center text-[#590907]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-mono text-[#68665F]">0{idx + 1}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#24231F] leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68665F] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
