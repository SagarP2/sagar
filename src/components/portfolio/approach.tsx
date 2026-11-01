"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Layers,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Quote,
  Star,
  ChevronRight,
  Terminal,
  Workflow,
} from "lucide-react";
import type { Service, Testimonial } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ApproachProps {
  services: Service[];
  testimonials: Testimonial[];
}

const PHASES = [
  {
    step: "01",
    title: "Data Modeling & Contract Design",
    subtitle: "Schema definitions & API endpoints",
    description:
      "Before writing frontend code, I establish the relational or NoSQL schema (MongoDB / Prisma / PostgreSQL), define strict Zod validation boundaries, and structure REST/GraphQL API specifications.",
  },
  {
    step: "02",
    title: "Component & Interface Architecture",
    subtitle: "Design system & state management",
    description:
      "Developing modular, reusable UI components with React and Next.js. I prioritize accessible keyboard navigation, fluid Motion micro-interactions, responsive CSS, and zero cumulative layout shifts.",
  },
  {
    step: "03",
    title: "Backend Services & Event Queues",
    subtitle: "Shopify API, webhooks & workers",
    description:
      "Hooking up live data flows: Shopify Admin GraphQL APIs, HMAC-verified webhook listeners, Redis queue workers with BullMQ, and cryptographic JWT/session security.",
  },
  {
    step: "04",
    title: "Optimization & Production Hardening",
    subtitle: "Testing, Lighthouse & Deployment",
    description:
      "Conducting comprehensive QA testing, Lighthouse 95+ performance audits, Core Web Vitals checks, edge-case validation, and setting up automated CI/CD deployment pipelines.",
  },
];

export function DevelopmentApproach({ services, testimonials }: ApproachProps) {
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="approach"
      data-section
      className="relative py-20 sm:py-28 bg-[#F7F5F0] border-b border-[#DAD8D0] overflow-hidden"
    >
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
              <Workflow className="h-3.5 w-3.5" />
              <span>06 • Engineering Methodology</span>
            </div>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 3.2vw + 0.4rem, 3rem)" }}
            >
              Development Approach &amp; Delivery Standards.
            </h2>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 text-sm sm:text-base text-[#68665F] leading-relaxed"
          >
            A systematic engineering lifecycle prioritizing clean separation of concerns,
            defensive API design, reproducible schemas, and verified client collaboration.
          </motion.p>
        </div>

        {/* 4-Phase Engineering Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {PHASES.map((phase, idx) => (
            <motion.div
              key={phase.step}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="rounded-2xl bg-[#FFFFFF] border border-[#DAD8D0] p-6 flex flex-col justify-between space-y-4 shadow-sm hover:border-[#A5A79B] transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-2xl text-[#590907]">
                    {phase.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#A5A79B]/20 text-[#24231F] uppercase font-semibold">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#24231F] leading-snug">
                  {phase.title}
                </h3>

                <p className="text-xs text-[#68665F] leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DAD8D0] text-[11px] font-mono text-[#590907] flex items-center gap-1 font-semibold">
                <span>{phase.subtitle}</span>
                <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Services Breakdown inspired by Watermelon UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Service Switcher Tabs & Details (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#24231F]">
              Engineering Domains
            </h3>

            {/* Watermelon-style Pill Tab */}
            <div className="p-1 rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] flex gap-1 shadow-xs">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveServiceTab(idx)}
                  className={cn(
                    "flex-1 py-2.5 px-3 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer text-center",
                    activeServiceTab === idx
                      ? "bg-[#590907] text-[#F7F5F0] shadow-xs"
                      : "text-[#68665F] hover:text-[#24231F]"
                  )}
                >
                  {service.title.split(" ")[0]} Engineering
                </button>
              ))}
            </div>

            {/* Active Service Deep Dive Card */}
            {services[activeServiceTab] && (
              <motion.div
                key={services[activeServiceTab].id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-[#FFFFFF] border border-[#DAD8D0] p-6 sm:p-8 space-y-6 shadow-sm"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-semibold text-[#590907] uppercase tracking-wider block">
                    Specialized Delivery
                  </span>
                  <h4 className="font-heading font-bold text-2xl text-[#24231F]">
                    {services[activeServiceTab].title}
                  </h4>
                  <p className="text-sm text-[#68665F] leading-relaxed">
                    {services[activeServiceTab].mainDescription}
                  </p>
                </div>

                {/* Sub-services list */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#24231F] font-semibold block">
                    Sub-Systems &amp; Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services[activeServiceTab].subServices.map((sub) => (
                      <div
                        key={sub.id}
                        className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#DAD8D0] space-y-1.5"
                      >
                        <h5 className="font-heading font-bold text-xs sm:text-sm text-[#24231F]">
                          {sub.subTitle}
                        </h5>
                        <p className="text-[11px] text-[#68665F] leading-relaxed">
                          {sub.subDescription}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Verified Authentic Client Testimonials (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#24231F]">
              Verified Feedback
            </h3>

            <div className="space-y-4">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="rounded-2xl bg-[#E8D2B5]/35 border border-[#DAD8D0] p-6 space-y-4 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <Quote className="h-6 w-6 text-[#590907] opacity-60" />
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-[#590907] text-[#590907]"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#24231F] leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  <div className="pt-3 border-t border-[#DAD8D0] flex items-center justify-between">
                    <div>
                      <span className="font-heading font-bold text-sm text-[#24231F] block">
                        {testimonial.clientName}
                      </span>
                      <span className="text-[11px] font-mono text-[#68665F] block">
                        {testimonial.role} • {testimonial.company}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#DAD8D0] text-[#590907] font-semibold">
                      Verified Client
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

