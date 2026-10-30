import React from "react";
import { Code2, Server, ShoppingBag, Database, ShieldCheck, Layers } from "lucide-react";

interface AboutSectionProps {
  bioText: string;
  subBioText: string;
  experienceYears?: number;
}

const CORE_FOCUS_AREAS = [
  {
    icon: Layers,
    title: "MERN Stack Architecture",
    description:
      "End-to-end web applications built with React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify App Engineering",
    description:
      "Custom embedded Shopify apps, App Bridge integrations, Admin GraphQL API workflows, Polaris UI, and Theme App Extensions.",
  },
  {
    icon: Server,
    title: "Backend & API Systems",
    description:
      "RESTful and GraphQL APIs engineered with strict validation, rate-limit awareness, Redis caching, and BullMQ queues.",
  },
  {
    icon: Database,
    title: "Database & Persistence",
    description:
      "Schema modeling and query optimization across MongoDB, PostgreSQL, Supabase, Prisma ORM, and AWS S3 storage.",
  },
  {
    icon: Code2,
    title: "Frontend Craft & Responsive UI",
    description:
      "High-contrast, accessible, and responsive interfaces with clean component boundaries and fast rendering performance.",
  },
  {
    icon: ShieldCheck,
    title: "Working Principles & QA",
    description:
      "Maintainable TypeScript codebases, defensive error handling, role-based access control, and thorough QA validation.",
  },
] as const;

export function AboutSection({
  bioText,
  subBioText,
  experienceYears = 1.5,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      data-section
      className="relative py-20 sm:py-28 bg-[#030407] border-b border-[#292D36]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-16">
        {/* Top Asymmetric Biography & Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          {/* Left Headline & Electric Cobalt Blue Highlight Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#D4FF24]">
                <span>02</span>
                <span className="text-[#1558C9]">/</span>
                <span>About</span>
              </div>
              <h2
                className="font-heading font-bold text-[#F5F5F5] tracking-tight leading-[1.08]"
                style={{ fontSize: "clamp(1.95rem, 3.2vw + 0.5rem, 3rem)" }}
              >
                Engineering With Purpose.{" "}
                <span className="text-[#D4FF24]">Designing With Intent.</span>
              </h2>
            </div>

            {/* Selective Electric Cobalt Blue Block */}
            <div className="rounded-xl bg-[#1558C9] p-6 sm:p-7 text-[#F5F5F5] space-y-3 border border-[#1558C9]">
              <span className="inline-block px-2.5 py-0.5 rounded bg-[#030407]/40 text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4FF24]">
                Engineering Philosophy
              </span>
              <p className="font-heading font-bold text-base sm:text-lg leading-snug">
                Clean architecture on the backend. Deliberate clarity on the frontend.
              </p>
              <p className="text-xs sm:text-sm text-[#F5F5F5]/90 leading-relaxed">
                Every feature is built around real merchant and user workflows—combining reliable
                data models with fast, intuitive interfaces.
              </p>
            </div>
          </div>

          {/* Right Compact Biography & Key Metrics Bento (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#101218] border border-[#292D36] p-6 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p
                className="text-[#F5F5F5] font-medium leading-relaxed border-l-2 border-[#D4FF24] pl-5"
                style={{ fontSize: "clamp(1.025rem, 1.2vw, 1.2rem)" }}
              >
                {bioText}
              </p>
              <p className="text-sm sm:text-base text-[#B4B8C3] leading-relaxed">
                {subBioText}
              </p>
            </div>

            {/* Verified Profile Summary Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#292D36]">
              <div className="p-4 rounded-xl bg-[#1A1E27] border border-[#292D36]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B4B8C3] block">
                  Core Specialization
                </span>
                <span className="font-heading font-bold text-sm text-[#F5F5F5] mt-1 block">
                  MERN &amp; Shopify Apps
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#1A1E27] border border-[#292D36]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B4B8C3] block">
                  Production Experience
                </span>
                <span className="font-heading font-bold text-sm text-[#D4FF24] mt-1 block">
                  {experienceYears}+ Years Active
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#1A1E27] border border-[#292D36]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B4B8C3] block">
                  Academic Degree
                </span>
                <span className="font-heading font-bold text-sm text-[#F5F5F5] mt-1 block">
                  B.Sc. in IT (BMIIT)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Technical Focus & Working Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {CORE_FOCUS_AREAS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="bento-card rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-lg bg-[#1A1E27] border border-[#292D36] flex items-center justify-center text-[#D4FF24]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-mono text-[#1558C9] font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#F5F5F5] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#B4B8C3] leading-relaxed">
                    {item.description}
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
