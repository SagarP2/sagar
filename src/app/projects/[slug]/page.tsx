import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, FolderGit2, Sparkles, CheckCircle2 } from "lucide-react";
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
    <div className="min-h-screen bg-[#040406] text-[#f8fafc] font-sans selection:bg-gold-400/20 selection:text-gold-400 flex flex-col relative overflow-hidden pb-32">
      {/* Blueprint Structural Layout Lines */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 premium-grid opacity-10" />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 noise-overlay" />
      <div aria-hidden className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold-400/5 blur-[150px] pointer-events-none" />
      <div aria-hidden className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-ice-400/5 blur-[130px] pointer-events-none" />

      {/* Top Header Navigation */}
      <header className="relative z-20 border-b border-white/5 bg-[#040406]/60 backdrop-blur-md px-6 sm:px-12 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-heading text-xs font-black uppercase tracking-[0.25em] text-white hover:text-gold-400 transition-colors">
            SAGAR PANCHAL
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center text-[9px] font-bold text-white/40 hover:text-white uppercase tracking-widest transition-colors gap-1.5 underline-reveal"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-gold-400" />
            BACK TO SELECTED WORKS
          </Link>
        </div>
      </header>

      {/* Editorial Title & Overview Section */}
      <section className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 pt-20 pb-12 space-y-12">
        <div className="space-y-4 text-left">
          <span className="inline-flex items-center text-[9px] font-bold uppercase tracking-[0.25em] text-gold-400">
            CASE STUDY // SPEC ARCHITECTURE // {project.category.toUpperCase()}
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black text-white tracking-tighter leading-[0.82] font-heading uppercase">
            {project.title}
          </h1>
        </div>

        {/* Horizontal Metadata Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-white/5 py-8 text-left relative z-10">
          <div className="space-y-2">
            <span className="text-[8px] uppercase tracking-widest font-mono text-white/30 block">01 // ROLE</span>
            <div className="text-[11px] font-bold text-white uppercase tracking-wider">FULL-STACK DEVELOPER</div>
          </div>
          <div className="space-y-2">
            <span className="text-[8px] uppercase tracking-widest font-mono text-white/30 block">02 // CHRONOLOGY</span>
            <div className="text-[11px] font-bold text-white uppercase tracking-wider">2026 RELEASE</div>
          </div>
          <div className="space-y-2">
            <span className="text-[8px] uppercase tracking-widest font-mono text-white/30 block">03 // CATEGORY</span>
            <div className="text-[11px] font-bold text-white uppercase tracking-wider">{project.category.toUpperCase()}</div>
          </div>
          <div className="space-y-2 flex flex-col justify-center">
            <span className="text-[8px] uppercase tracking-widest font-mono text-white/30 block mb-1">04 // DEPLOYMENT</span>
            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[9px] font-bold uppercase tracking-widest text-white hover:text-gold-400 transition-colors gap-1.5 underline-reveal"
                >
                  LIVE LAUNCH
                  <ArrowUpRight className="h-3 w-3 text-gold-400" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[9px] font-bold uppercase tracking-widest text-white hover:text-gold-400 transition-colors gap-1.5 underline-reveal"
                >
                  REPOSITORY
                  <ArrowUpRight className="h-3 w-3 text-gold-400" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Details Grid */}
      <section className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 grid gap-12 lg:grid-cols-12 mt-4">
        {/* Left Editorial Section */}
        <div className="lg:col-span-7 space-y-16 text-left">
          {/* Main Description */}
          <div className="space-y-4">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 font-mono flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-gold-400" />
              01 // PROJECT OVERVIEW
            </h3>
            <p className="text-base sm:text-lg font-medium text-slate-350 leading-relaxed border-l border-gold-400/30 pl-6 whitespace-pre-wrap">
              {project.description}
            </p>
          </div>

          {/* Purpose & Execution */}
          <div className="space-y-4">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 font-mono">
              02 // SCOPE &amp; TARGETS
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed whitespace-pre-wrap">
              {project.purpose}
            </p>
          </div>

          {/* Key Features */}
          {features.length > 0 && (
            <div className="space-y-6 pt-4">
              <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 font-mono">
                03 // ARCHITECTURE CAPABILITIES
              </h3>
              <div className="divide-y divide-white/5 border-t border-b border-white/5">
                {features.map((feature) => (
                  <div key={feature.id} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <h4 className="sm:w-1/3 text-xs font-bold text-white uppercase tracking-wider font-heading">
                      {feature.title}
                    </h4>
                    <p className="sm:w-2/3 text-[11px] sm:text-xs text-slate-400 leading-relaxed flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span>{feature.description}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Solutions */}
          {challenges.length > 0 && (
            <div className="space-y-6 pt-4">
              <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 font-mono">
                04 // LOGISTIC CHALLENGES &amp; ALIGNMENT
              </h3>
              <div className="divide-y divide-white/5 border-t border-b border-white/5">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <h4 className="sm:w-1/3 text-xs font-bold text-white uppercase tracking-wider font-heading">
                      {challenge.title}
                    </h4>
                    <p className="sm:w-2/3 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
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
              <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 font-mono">
                05 // METRIC OUTCOMES &amp; AUDITS
              </h3>
              <div className="divide-y divide-white/5 border-t border-b border-white/5">
                {outcomes.map((outcome) => (
                  <div key={outcome.id} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <h4 className="sm:w-1/3 text-xs font-bold text-white uppercase tracking-wider font-heading text-gold-400">
                      {outcome.title}
                    </h4>
                    <p className="sm:w-2/3 text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
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
            <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 font-mono flex items-center gap-1.5">
              <FolderGit2 className="h-4 w-4 text-gold-400" />
              INTERACTIVE RUNTIME ENVIRONMENT
            </h3>
            <ProjectMockup slug={project.slug} />
          </div>
        </div>
      </section>

      {/* Gallery Section - Only renders if there are files in mediaList */}
      {project.mediaList && project.mediaList.length > 0 && (
        <section className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 pt-28 space-y-8">
          <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 font-mono text-left">
            PROJECT BLUEPRINT GALLERY
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.mediaList.map((item) => (
              <div key={item.media.url} className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01] aspect-video group relative">
                <Image
                  src={item.media.url}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <a
                  href={item.media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[9px] font-mono font-bold tracking-widest text-white uppercase"
                >
                  View full blueprint
                </a>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
