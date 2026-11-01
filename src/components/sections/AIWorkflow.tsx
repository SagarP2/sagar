"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Terminal, ShieldCheck, Cpu, ArrowRight } from "lucide-react";
import { aiWorkflowSteps, aiToolsList } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function AIWorkflow() {
  const prefersReducedMotion = useReducedMotion();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section
      aria-labelledby="ai-workflow-heading"
      className="py-20 sm:py-28 border-b border-[#292D36] bg-[#030407]"
    >
      <div className="editorial-container px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          index="03"
          label="AI-Assisted Development Workflow"
          title={
            <span id="ai-workflow-heading">
              Think With AI.{" "}
              <span className="text-[#D4FF24]">Build With Engineering.</span>
            </span>
          }
          description="AI tools accelerate how quickly I move from architecture to working code—while engineering fundamentals govern code quality, debugging, and production reliability."
        />

        {/* Top Positioning Banner + Tooling Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left 7 Cols: Engineering Positioning */}
          <Reveal
            direction="up"
            className="lg:col-span-7 p-6 sm:p-8 bg-[#1558C9] border border-[#1558C9] flex flex-col justify-between gap-6"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#030407] text-[#D4FF24] text-xs font-mono font-bold uppercase tracking-widest">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                <span>ENGINEERING FIRST · AI ACCELERATED</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F5F5] leading-tight">
                AI speeds up implementation. Architecture, verification, and debugging remain human-engineered.
              </h3>

              <p className="text-sm sm:text-base text-[#F5F5F5]/90 leading-relaxed">
                I use AI-assisted coding and vibe coding workflows to scaffold features, draft GraphQL queries, and iterate rapidly—then inspect, refactor, and test every module against real database schemas and edge cases.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F5F5F5]/20 flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#D4FF24]">
              <span>Architecture Design</span>
              <span>·</span>
              <span>Line-by-Line Code Review</span>
              <span>·</span>
              <span>Edge-Case Debugging</span>
            </div>
          </Reveal>

          {/* Right 5 Cols: Daily AI Engineering Toolset */}
          <Reveal
            direction="up"
            delay={0.1}
            className="lg:col-span-5 p-6 sm:p-8 bg-[#101218] border border-[#292D36] flex flex-col justify-between gap-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#292D36]">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4FF24]">
                  DAILY AI TOOLSET
                </span>
                <Terminal className="h-4 w-4 text-[#B4B8C3]" aria-hidden="true" />
              </div>

              <div className="space-y-3">
                {aiToolsList.map((tool, idx) => (
                  <div
                    key={tool.name}
                    className="p-4 bg-[#030407] border border-[#292D36] hover:border-[#1558C9] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-heading font-bold text-base text-[#F5F5F5] flex items-center gap-2">
                        <Cpu
                          className="h-4 w-4 text-[#D4FF24]"
                          aria-hidden="true"
                        />
                        {tool.name}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1558C9]">
                        TOOL 0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-[#B4B8C3] leading-relaxed">
                      {tool.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* 6-Step Interactive Motion Workflow Pipeline */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#B4B8C3]">
              6-STAGE EXECUTION PIPELINE
            </p>
            <p className="hidden sm:block text-xs font-mono text-[#D4FF24]">
              ACTIVE STAGE: {aiWorkflowSteps[activeStepIndex]?.number} —{" "}
              {aiWorkflowSteps[activeStepIndex]?.title}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {aiWorkflowSteps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <motion.div
                  key={step.number}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setActiveStepIndex(idx)}
                  onClick={() => setActiveStepIndex(idx)}
                  className={cn(
                    "relative p-6 border transition-colors cursor-pointer flex flex-col justify-between gap-5",
                    isSelected
                      ? "bg-[#171B25] border-[#D4FF24]"
                      : "bg-[#101218] border-[#292D36] hover:border-[#1558C9]"
                  )}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-widest transition-colors",
                          isSelected
                            ? "bg-[#D4FF24] text-[#030407]"
                            : "bg-[#030407] border border-[#292D36] text-[#D4FF24]"
                        )}
                      >
                        {step.number}
                      </span>
                      <ArrowRight
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isSelected
                            ? "text-[#D4FF24] translate-x-0.5"
                            : "text-[#292D36]"
                        )}
                        aria-hidden="true"
                      />
                    </div>

                    <h4 className="text-lg font-heading font-bold text-[#F5F5F5]">
                      {step.number} — {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#B4B8C3] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Animated bottom progress bar */}
                  <div className="h-0.5 w-full bg-[#292D36] overflow-hidden">
                    <motion.div
                      initial={false}
                      animate={{
                        width: isSelected ? "100%" : "25%",
                        backgroundColor: isSelected ? "#D4FF24" : "#1558C9",
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
