"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Layers,
  Server,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Briefcase,
  Code2,
} from "lucide-react";
import { HaikeiOrganicBlob } from "./haikei-svg";

interface AboutProps {
  bioText: string;
  subBioText: string;
  experienceYears?: number;
}

const PILLARS = [
  {
    icon: Layers,
    title: "Modular Full-Stack Architecture",
    description:
      "Crafting React.js and Next.js applications backed by clean Node.js microservices and REST/GraphQL APIs that scale without architectural debt.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Merchant Engineering",
    description:
      "Developing embedded Shopify apps using Admin GraphQL APIs, Polaris UI, App Bridge session tokens, and custom Liquid storefront extensions.",
  },
  {
    icon: Server,
    title: "Resilient Data & Queue Systems",
    description:
      "Structuring relational and NoSQL schemas across MongoDB and PostgreSQL, paired with Redis caching and asynchronous job queues.",
  },
  {
    icon: ShieldCheck,
    title: "Performance & Defensiveness",
    description:
      "Implementing end-to-end schema validation, webhook HMAC verification, strict rate limiting, and zero layout shift design.",
  },
] as const;

export function About({ bioText, subBioText, experienceYears = 1.5 }: AboutProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      data-section
      className="relative py-20 sm:py-28 bg-[#F7F5F0] border-b border-[#DAD8D0] overflow-hidden"
    >
      {/* Background Haikei Organic Blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 opacity-40 pointer-events-none">
        <HaikeiOrganicBlob />
      </div>

      <div className="editorial-container px-5 sm:px-8 space-y-14 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D2B5]/70 border border-[#DAD8D0] text-[#590907] text-xs font-mono font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>02 • About Me</span>
            </div>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 3.2vw + 0.4rem, 3rem)" }}
            >
              Engineering Thoughtful Products with Craft &amp; Precision.
            </h2>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 text-sm sm:text-base text-[#68665F] leading-relaxed"
          >
            A full-stack software engineer based in Gujarat, India, specializing in
            production-ready web applications, Shopify ecosystem integrations, and resilient
            backend architectures.
          </motion.p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          {/* Bento Card 1: Narrative & Mindset (7 cols) */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 rounded-2xl bg-[#FFFFFF] border border-[#DAD8D0] p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#A5A79B] transition-all"
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-[#E8D2B5]/60 text-[#590907] text-xs font-mono font-semibold">
                Core Narrative
              </span>

              <p className="text-base sm:text-lg text-[#24231F] font-medium leading-relaxed">
                {bioText ||
                  "Welcome! I’m Sagar Panchal, a professional MERN Stack and Shopify App Developer with expertise in Web Application Development, Programming, Graphic Design, and Video Editing. I specialize in crafting innovative, scalable solutions tailored to meet business needs and deliver exceptional user experiences."}
              </p>

              <p className="text-sm text-[#68665F] leading-relaxed">
                {subBioText ||
                  "With a focus on quality and precision, I bring both technical expertise and creative insight to every project, ensuring results that exceed expectations. I thrive in dynamic, collaborative environments that challenge my problem-solving skills and promote continuous growth."}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#DAD8D0]">
              <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#DAD8D0]">
                <span className="text-[11px] font-mono text-[#68665F] block">Experience</span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#590907] mt-0.5 block">
                  {experienceYears}+ Years
                </span>
                <span className="text-[10px] text-[#68665F]">Agency &amp; Remote</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#DAD8D0]">
                <span className="text-[11px] font-mono text-[#68665F] block">Production</span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#24231F] mt-0.5 block">
                  10+ Apps
                </span>
                <span className="text-[10px] text-[#68665F]">Web &amp; Commerce</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#DAD8D0]">
                <span className="text-[11px] font-mono text-[#68665F] block">Education</span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#24231F] mt-0.5 block">
                  B.Sc. IT
                </span>
                <span className="text-[10px] text-[#68665F]">BMIIT Bardoli</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Technical Background & Values (5 cols) */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl bg-[#E8D2B5]/30 border border-[#DAD8D0] p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-sm"
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-[#590907] text-[#F7F5F0] text-xs font-mono font-semibold">
                Engineering Tenets
              </span>

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#24231F]">
                How I Approach Software
              </h3>

              <ul className="space-y-3 pt-1">
                {[
                  "Write clean, type-safe TypeScript code that is readable and easily extensible.",
                  "Prioritize real-world performance, zero-layout-shift UI, and fast API responses.",
                  "Enforce strict schema validation at API boundaries and database adapters.",
                  "Respect native platform paradigms — whether Shopify Polaris or modern React 19.",
                ].map((principle, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#24231F]">
                    <CheckCircle2 className="h-4 w-4 text-[#590907] shrink-0 mt-0.5" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] space-y-1">
              <span className="text-[11px] font-mono text-[#68665F] uppercase tracking-wider block">
                Current Role
              </span>
              <p className="font-heading font-semibold text-sm text-[#24231F]">
                MERN &amp; Shopify App Developer at Rabbitcode Agency
              </p>
            </div>
          </motion.div>

          {/* 4 Architectural Focus Cards (3 cols each on lg) */}
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="lg:col-span-3 rounded-2xl bg-[#FFFFFF] border border-[#DAD8D0] p-6 space-y-3.5 shadow-xs hover:border-[#A5A79B] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#A5A79B]/20 text-[#590907] flex items-center justify-center transition-colors group-hover:bg-[#590907] group-hover:text-[#F7F5F0]">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-[#24231F]">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#68665F] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
