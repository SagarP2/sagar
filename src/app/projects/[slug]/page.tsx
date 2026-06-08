import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { DetailType } from "@/types/portfolio";
import { projects } from "@/data/portfolioData";
import { ProjectMockup } from "@/components/portfolio/project-mockup";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Sagar Panchal Portfolio",
    };
  }

  const coverItem = project.mediaList?.find((m) => m.isCover) || project.mediaList?.[0];
  const ogImageUrl = coverItem?.media?.url || "";

  return {
    title: `${project.title} - Case Study | Sagar Panchal`,
    description: project.description.substring(0, 160),
    openGraph: ogImageUrl
      ? {
          images: [
            {
              url: ogImageUrl,
              alt: project.title,
            },
          ],
        }
      : undefined,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const features = project.detailsList?.filter((d) => d.type === DetailType.FEATURE) || [];
  const challenges = project.detailsList?.filter((d) => d.type === DetailType.CHALLENGE) || [];
  const outcomes = project.detailsList?.filter((d) => d.type === DetailType.OUTCOME) || [];

  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-white/20 selection:text-white flex flex-col relative overflow-hidden pb-32">
      {/* Sleek Faint Background Grids & Noise */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 premium-grid opacity-20" />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 noise-overlay" />
      <div aria-hidden className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />
      <div aria-hidden className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none" />

      {/* Top Header Navigation */}
      <header className="relative z-20 border-b border-white/5 bg-[#000000]/60 backdrop-blur-md px-6 sm:px-12 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-heading text-xs font-black uppercase tracking-[0.2em] text-white">
            SAGAR PANCHAL
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-widest transition-colors gap-1.5 underline-reveal"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Works
          </Link>
        </div>
      </header>

      {/* Editorial Title & Overview Section */}
      <section className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 pt-20 pb-12 space-y-10">
        <div className="space-y-4 text-left">
          <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
            CASE STUDY // {project.category}
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black text-white tracking-tighter leading-[0.85] font-heading uppercase">
            {project.title}
          </h1>
        </div>

        {/* Horizontal Metadata Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-white/5 py-8 text-left relative z-10">
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-wider font-mono text-white/30">01 / Role</span>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Full-Stack Developer</div>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-wider font-mono text-white/30">02 / Year</span>
            <div className="text-xs font-bold text-white uppercase tracking-wider">2026</div>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-wider font-mono text-white/30">03 / Platform</span>
            <div className="text-xs font-bold text-white uppercase tracking-wider">{project.category}</div>
          </div>
          <div className="space-y-1 flex flex-col justify-center">
            <span className="text-[9px] uppercase tracking-wider font-mono text-white/30 mb-1.5">04 / Deployments</span>
            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-white hover:text-indigo-400 transition-colors gap-1 underline-reveal"
                >
                  Live Site
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-white hover:text-indigo-400 transition-colors gap-1 underline-reveal"
                >
                  Repository
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Details Grid */}
      <section className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 grid gap-12 lg:grid-cols-12 mt-4">
        {/* Left Editorial Section */}
        <div className="lg:col-span-7 space-y-14 text-left">
          {/* Main Description */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/40 font-mono">
              01 / Project Overview
            </h3>
            <p className="text-base sm:text-lg font-light text-slate-300 leading-relaxed border-l border-white/20 pl-5 whitespace-pre-wrap">
              {project.description}
            </p>
          </div>

          {/* Purpose & Execution */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/40 font-mono">
              02 / Purpose & Execution
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed whitespace-pre-wrap">
              {project.purpose}
            </p>
          </div>

          {/* Key Features */}
          {features.length > 0 && (
            <div className="space-y-6 pt-4">
              <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/40 font-mono">
                03 / Key Features & Deliverables
              </h3>
              <div className="divide-y divide-white/5 border-t border-b border-white/5">
                {features.map((feature) => (
                  <div key={feature.id} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <h4 className="sm:w-1/3 text-xs font-bold text-white uppercase tracking-wider">
                      {feature.title}
                    </h4>
                    <p className="sm:w-2/3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Solutions */}
          {challenges.length > 0 && (
            <div className="space-y-6 pt-4">
              <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/40 font-mono">
                04 / Challenges & Solutions
              </h3>
              <div className="divide-y divide-white/5 border-t border-b border-white/5">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <h4 className="sm:w-1/3 text-xs font-bold text-white uppercase tracking-wider">
                      {challenge.title}
                    </h4>
                    <p className="sm:w-2/3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes & Impact */}
          {outcomes.length > 0 && (
            <div className="space-y-6 pt-4">
              <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/40 font-mono">
                05 / Project Outcomes & Impact
              </h3>
              <div className="divide-y divide-white/5 border-t border-b border-white/5">
                {outcomes.map((outcome) => (
                  <div key={outcome.id} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <h4 className="sm:w-1/3 text-xs font-bold text-white uppercase tracking-wider">
                      {outcome.title}
                    </h4>
                    <p className="sm:w-2/3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sticky Simulator Side Panel */}
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="space-y-6 lg:sticky lg:top-24 mt-6 lg:mt-0 text-left">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/40 font-mono">
              Interactive Workspace
            </h3>
            <ProjectMockup slug={project.slug} />
          </div>
        </div>
      </section>

      {/* Gallery Section - Only renders if there are files in mediaList */}
      {project.mediaList && project.mediaList.length > 0 && (
        <section className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 pt-24 space-y-8">
          <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/40 font-mono text-left">
            Project Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.mediaList.map((item) => (
              <div key={item.media.url} className="rounded-xl overflow-hidden border border-white/5 bg-white/[0.01] aspect-video group relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.media.url}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <a
                  href={item.media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-mono font-bold text-white"
                >
                  VIEW FULL SIZE
                </a>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
