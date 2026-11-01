import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  Terminal,
} from "lucide-react";
import { projects } from "@/data/projects";
import { TechBadge } from "@/components/ui/TechBadge";
import { GithubIcon } from "@/components/ui/SocialLinks";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Sagar Panchal",
    };
  }

  const coverItem =
    project.mediaList?.find((m) => m.isCover) || project.mediaList?.[0];
  const ogImageUrl = coverItem?.media?.url || "";

  return {
    title: `${project.title} — Case Study`,
    description: project.whatIBuilt.substring(0, 160),
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

  const mediaItems = project.mediaList ?? [];
  const galleryMedia = mediaItems.slice(1);

  return (
    <div className="min-h-screen bg-[#030407] text-[#F5F5F5] font-sans flex flex-col">
      {/* Sticky Minimal Header */}
      <header className="sticky top-0 z-40 border-b border-[#292D36] glass-nav">
        <div className="editorial-container px-4 sm:px-8 h-16 sm:h-[72px] flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-baseline font-heading font-bold text-lg sm:text-xl tracking-tight text-[#F5F5F5] hover:text-[#D4FF24] transition-colors"
          >
            <span>SAGAR PANCHAL</span>
            <span className="text-[#D4FF24] ml-0.5">.</span>
          </Link>

          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#292D36] bg-[#101218] text-xs font-mono font-bold text-[#F5F5F5] hover:bg-[#D4FF24] hover:text-[#030407] hover:border-[#D4FF24] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Work</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 pb-20">
        {/* Case Study Banner */}
        <section className="bg-[#101218] border-b border-[#292D36] py-12 sm:py-16">
          <div className="editorial-container px-4 sm:px-8 space-y-8 text-left">
            <div className="space-y-3 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1558C9] text-xs font-mono font-bold uppercase tracking-wider text-[#F5F5F5]">
                <span>Selected Work</span>
                <span>·</span>
                <span className="text-[#D4FF24]">{project.category}</span>
              </div>

              <h1
                className="font-heading font-bold text-[#F5F5F5] tracking-tight leading-[1.06]"
                style={{ fontSize: "clamp(2rem, 4.2vw, 3.75rem)" }}
              >
                {project.title}
              </h1>

              <p className="text-sm sm:text-base text-[#B4B8C3] leading-relaxed max-w-3xl">
                {project.whatIBuilt}
              </p>
            </div>

            {/* Links & Stack Bar */}
            <div className="pt-4 border-t border-[#292D36] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <TechBadge
                    key={tech}
                    label={tech}
                    variant={idx === 0 ? "lime" : "dark"}
                  />
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#D4FF24] text-[#030407] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#F5F5F5] transition-colors"
                  >
                    <span>Live Project</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#030407] border border-[#292D36] text-[#F5F5F5] text-xs font-mono font-semibold uppercase tracking-wider hover:border-[#D4FF24] hover:text-[#D4FF24] transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="editorial-container px-4 sm:px-8 pt-10 sm:pt-14 space-y-12 text-left">
          {/* Primary Interactive Screenshot Gallery in Cobalt Frame */}
          {mediaItems.length > 0 && (
            <div className="p-3 sm:p-6 bg-[#1558C9] border border-[#1558C9]">
              <div className="border border-[#030407] bg-[#030407]">
                <ProjectGallery
                  title={project.title}
                  category={project.category}
                  mediaList={mediaItems}
                />
              </div>
            </div>
          )}

          {/* Problem, What I Built & Important Functionality */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-4 p-6 sm:p-7 bg-[#101218] border border-[#292D36] space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4FF24] block">
                01 · Problem Statement
              </span>
              <p className="text-sm text-[#B4B8C3] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="lg:col-span-4 p-6 sm:p-7 bg-[#101218] border border-[#1558C9] space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4FF24] block">
                02 · What I Built
              </span>
              <p className="text-sm text-[#F5F5F5] leading-relaxed">
                {project.whatIBuilt}
              </p>
            </div>

            <div className="lg:col-span-4 p-6 sm:p-7 bg-[#101218] border border-[#292D36] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D4FF24]">
                <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                <span>03 · Important Functionality</span>
              </div>
              <ul className="space-y-2">
                {project.importantFunctionality.map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm text-[#B4B8C3] flex items-start gap-2 leading-relaxed"
                  >
                    <Check
                      className="h-4 w-4 text-[#D4FF24] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Real Screenshots */}
          {galleryMedia.length > 0 && (
            <div className="space-y-5">
              <div className="border-b border-[#292D36] pb-3 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4FF24]">
                  Additional Application Screens
                </span>
                <span className="text-xs font-mono text-[#B4B8C3]">
                  {galleryMedia.length} Views
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {galleryMedia.map((item, idx) => (
                  <div
                    key={item.id}
                    className="bg-[#101218] border border-[#292D36] p-3 space-y-2"
                  >
                    <div className="relative aspect-[16/10] w-full bg-[#030407] border border-[#292D36] overflow-hidden">
                      <Image
                        src={item.media.url}
                        alt={`${project.title} screenshot ${idx + 2}`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="p-6 sm:p-8 bg-[#101218] border border-[#292D36] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-heading font-bold text-lg sm:text-xl text-[#F5F5F5]">
                Let&apos;s Build Something Useful.
              </h2>
              <p className="text-xs sm:text-sm text-[#B4B8C3] mt-1">
                Available for full-stack MERN and custom Shopify application
                projects.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D4FF24] text-[#030407] font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#F5F5F5] transition-colors"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
