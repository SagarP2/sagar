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
    title: "MERN Stack Development",
    description:
      "End-to-end web applications built with MongoDB, Express.js, React.js, Next.js, and Node.js with clean component architecture.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Application Development",
    description:
      "Custom embedded Shopify apps, App Bridge integrations, Admin GraphQL API workflows, webhook handlers, and Liquid theme customization.",
  },
  {
    icon: Code2,
    title: "Frontend & Backend Engineering",
    description:
      "Responsive, accessible user interfaces paired with structured server-side logic, authentication, and middleware validation.",
  },
  {
    icon: Server,
    title: "API Development",
    description:
      "RESTful and GraphQL API endpoints engineered for predictable data exchange, rate-limit awareness, and clean error handling.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "Schema modeling, indexing, and query optimization across MongoDB and relational SQL databases, plus cloud asset storage with AWS S3.",
  },
  {
    icon: ShieldCheck,
    title: "Performance, Security & Maintainability",
    description:
      "Strict input validation, role-based access control, quality assurance testing, and modular codebases built for long-term reliability.",
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
      className="relative py-20 sm:py-28 bg-[#EEEAE2] border-b border-[#D8D4CA]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-16">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          <div className="lg:col-span-4 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#590907]">
              <span>01</span>
              <span className="text-[#A5A79B]">/</span>
              <span>About Me</span>
            </div>
            <h2
              className="font-heading font-bold text-[#252522] tracking-tight leading-[1.12]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.5rem, 2.85rem)" }}
            >
              Engineering purposeful web &amp; commerce systems.
            </h2>
          </div>

          {/* Editorial Bio Copy */}
          <div className="lg:col-span-8 space-y-6">
            <p
              className="text-[#252522] font-medium leading-relaxed border-l-2 border-[#590907] pl-5"
              style={{ fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)" }}
            >
              {bioText}
            </p>
            <p className="text-sm sm:text-base text-[#66665F] leading-relaxed">
              {subBioText}
            </p>

            {/* Verified Profile Summary Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-[#FFFFFF] border border-[#D8D4CA]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#66665F] block">
                  Primary Focus
                </span>
                <span className="font-heading font-bold text-sm text-[#252522] mt-1 block">
                  MERN Stack &amp; Shopify Apps
                </span>
              </div>

              <div className="p-4 rounded-lg bg-[#FFFFFF] border border-[#D8D4CA]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#66665F] block">
                  Professional Experience
                </span>
                <span className="font-heading font-bold text-sm text-[#590907] mt-1 block">
                  {experienceYears}+ Years in Production
                </span>
              </div>

              <div className="p-4 rounded-lg bg-[#E8D2B5]/65 border border-[#D8D4CA]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#252522] block">
                  Education
                </span>
                <span className="font-heading font-bold text-sm text-[#252522] mt-1 block">
                  B.Sc. in Information Technology
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {CORE_FOCUS_AREAS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="editorial-card rounded-lg p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-[#FFFFFF]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-md bg-[#F7F5F0] border border-[#D8D4CA] flex items-center justify-center text-[#590907]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-mono text-[#A5A79B] font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#252522] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#66665F] leading-relaxed">
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

