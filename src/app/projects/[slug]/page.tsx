import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, FolderGit2, CheckCircle2 } from "lucide-react";
import { DetailType } from "@/types/portfolio";
import { projects } from "@/data/portfolioData";
import { ProjectMockup } from "@/components/portfolio/project-mockup";
import { GithubIcon as Github } from "@/components/portfolio/social-icons";
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
    title: `${project.title} — Case Study`,
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
  const coverMedia = project.mediaList?.find((m) => m.isCover) || project.mediaList?.[0];

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#24231F] font-sans flex flex-col">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 border-b border-[#DAD8D0] glass-nav">
        <div className="editorial-container px-5 sm:px-8 h-[68px] flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-md bg-[#590907] text-[#F7F5F0] font-heading font-bold text-xs flex items-center justify-center group-hover:bg-[#3D0605] transition-colors">
              SP
            </span>
            <span className="font-heading text-sm font-bold tracking-tight text-[#24231F]">
              Sagar Panchal
            </span>
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#DAD8D0] bg-[#FFFFFF] text-xs font-mono font-semibold text-[#24231F] hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 pb-24">
        {/* Title & Metadata Banner */}
        <section className="bg-[#A5A79B]/18 border-b border-[#DAD8D0] py-14 sm:py-18">
          <div className="editorial-container px-5 sm:px-8 space-y-10 text-left">
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8D2B5] text-xs font-mono font-semibold uppercase tracking-wider text-[#590907]">
                <span>Case Study</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>

              <h1
                className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.08]"
                style={{ fontSize: "clamp(2.15rem, 4.2vw, 3.75rem)" }}
              >
                {project.title}
              </h1>
            </div>

            {/* Bento Metadata Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#68665F] block">
                  01 • Role
                </span>
                <div className="text-sm font-heading font-bold text-[#24231F]">
                  Full-Stack Developer
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#68665F] block">
                  02 • Category
                </span>
                <div className="text-sm font-heading font-bold text-[#24231F]">
                  {project.category}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#68665F] block">
                  03 • Technology Stack
                </span>
                <div className="text-xs font-medium text-[#24231F] leading-snug">
                  {project.techStack.join(" • ")}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#590907] text-[#F7F5F0] space-y-2 flex flex-col justify-center">
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#E8D2B5] block">
                  04 • Links
                </span>
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[#F7F5F0] hover:text-[#E8D2B5] gap-1 underline-reveal"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[#E8D2B5] hover:text-[#F7F5F0] gap-1 underline-reveal"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="text-xs font-mono text-[#E8D2B5]">Internal Case Study</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Body & Interactive Preview */}
        <section className="editorial-container px-5 sm:px-8 pt-12 grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-8 text-left">
            {coverMedia?.media?.url && (
              <div className="p-4 sm:p-5 rounded-xl bg-[#E8D2B5]/45 border border-[#DAD8D0]">
                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#DAD8D0] bg-[#FFFFFF]">
                  <Image
                    src={coverMedia.media.url}
                    alt={`${project.title} screenshot`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            )}

            <div className="bento-card rounded-xl bg-[#FFFFFF] p-7 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#590907] block">
                01 • Project Overview
              </span>
              <p className="text-base text-[#24231F] leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </div>

            <div className="rounded-xl bg-[#E8D2B5]/55 border border-[#DAD8D0] p-7 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#590907] block">
                02 • Purpose &amp; Problem Solved
              </span>
              <p className="text-sm sm:text-base text-[#24231F] leading-relaxed whitespace-pre-wrap">
                {project.purpose}
              </p>
            </div>

            {features.length > 0 && (
              <div className="bento-card rounded-xl bg-[#FFFFFF] p-7 space-y-5">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#590907] block">
                  03 • Key Functionality
                </span>
                <div className="divide-y divide-[#DAD8D0]">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                    >
                      <h2 className="sm:w-2/5 font-heading font-bold text-sm text-[#24231F]">
                        {feature.title}
                      </h2>
                      <p className="sm:w-3/5 text-sm text-[#68665F] leading-relaxed flex items-start gap-2">
                        <CheckCircle2
                          className="h-4 w-4 text-[#590907] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feature.description}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-4 lg:sticky lg:top-24 text-left">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#590907]">
                <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                <span>Interactive Architecture Preview</span>
              </div>
              <ProjectMockup slug={project.slug} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
