import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, FolderGit2, CheckCircle2 } from "lucide-react";
import { DetailType } from "@/types/portfolio";
import { projects } from "@/data/projects";
import { ProjectMockup } from "@/components/shared/ProjectMockup";
import { GithubIcon as Github } from "@/components/shared/SocialIcons";
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
    <div className="min-h-screen bg-[#030407] text-[#F5F5F5] font-sans flex flex-col">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 border-b border-[#292D36] glass-nav">
        <div className="editorial-container px-5 sm:px-8 h-20 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <span className="w-8 h-8 rounded-md bg-[#1558C9] text-[#F5F5F5] font-heading font-bold text-xs flex items-center justify-center group-hover:bg-[#D4FF24] group-hover:text-[#030407] transition-colors">
              SP
            </span>
            <span className="font-heading text-sm font-bold tracking-tight text-[#F5F5F5]">
              Sagar Panchal
            </span>
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#292D36] bg-[#101218] text-xs font-mono font-bold text-[#F5F5F5] hover:bg-[#D4FF24] hover:text-[#030407] hover:border-[#D4FF24] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 pb-24">
        {/* Title & Metadata Banner */}
        <section className="bg-[#101218] border-b border-[#292D36] py-14 sm:py-20">
          <div className="editorial-container px-5 sm:px-8 space-y-10 text-left">
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1558C9] text-xs font-mono font-bold uppercase tracking-wider text-[#F5F5F5]">
                <span>Case Study</span>
                <span>·</span>
                <span className="text-[#D4FF24]">{project.category}</span>
              </div>

              <h1
                className="font-heading font-bold text-[#F5F5F5] tracking-tight leading-[1.08]"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
              >
                {project.title}
              </h1>
            </div>

            {/* Metadata Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-[#030407] border border-[#292D36] space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#B4B8C3] block">
                  01 · Role
                </span>
                <div className="text-sm font-heading font-bold text-[#F5F5F5]">
                  Full-Stack Developer
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#030407] border border-[#292D36] space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#B4B8C3] block">
                  02 · Category
                </span>
                <div className="text-sm font-heading font-bold text-[#D4FF24]">
                  {project.category}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#030407] border border-[#292D36] space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#B4B8C3] block">
                  03 · Core Stack
                </span>
                <div className="text-xs font-mono text-[#F5F5F5] leading-snug">
                  {project.techStack.join(" · ")}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#1558C9] text-[#F5F5F5] space-y-2 flex flex-col justify-center">
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#D4FF24] block font-bold">
                  04 · Project Links
                </span>
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#D4FF24] hover:underline gap-1"
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
                      className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#D4FF24] gap-1"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="text-xs font-mono text-[#F5F5F5]">Internal Case Study</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Case Study Content & Interactive Simulator */}
        <section className="editorial-container px-5 sm:px-8 pt-14 grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-10 text-left">
            {/* Cover Image */}
            {coverMedia?.media?.url && (
              <div className="p-4 sm:p-6 rounded-2xl bg-[#1558C9] border border-[#1558C9]">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#030407]/40 bg-[#030407]">
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

            {/* Overview */}
            <div className="rounded-2xl bg-[#101218] border border-[#292D36] p-7 sm:p-8 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4FF24] block">
                01 · Project Overview
              </span>
              <p className="text-base text-[#F5F5F5] leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </div>

            {/* Problem Solved & Purpose */}
            <div className="rounded-2xl bg-[#1A1E27] border border-[#1558C9]/50 p-7 sm:p-8 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4FF24] block">
                02 · Problem Solved &amp; Purpose
              </span>
              <p className="text-sm sm:text-base text-[#B4B8C3] leading-relaxed whitespace-pre-wrap">
                {project.purpose}
              </p>
            </div>

            {/* Capabilities & Features */}
            {features.length > 0 && (
              <div className="rounded-2xl bg-[#101218] border border-[#292D36] p-7 sm:p-8 space-y-5">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4FF24] block">
                  03 · Key Capabilities &amp; Features
                </span>
                <div className="divide-y divide-[#292D36]">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                    >
                      <h2 className="sm:w-2/5 font-heading font-bold text-sm text-[#F5F5F5]">
                        {feature.title}
                      </h2>
                      <p className="sm:w-3/5 text-sm text-[#B4B8C3] leading-relaxed flex items-start gap-2">
                        <CheckCircle2
                          className="h-4 w-4 text-[#D4FF24] shrink-0 mt-0.5"
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

          {/* Right Interactive Simulator Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="space-y-4 lg:sticky lg:top-28 text-left">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D4FF24]">
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
