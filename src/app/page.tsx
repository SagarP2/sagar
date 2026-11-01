import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Expertise } from "@/components/sections/Expertise";
import { AIWorkflow } from "@/components/sections/AIWorkflow";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import {
  settings,
  projects,
  expertiseAreas,
  experiences,
} from "@/data/portfolioData";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: settings.siteName,
    description: settings.heroDescription,
    keywords: [
      "Sagar Panchal",
      "MERN Stack Developer",
      "Shopify App Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Node.js Developer",
      "Shopify Admin API",
      "Shopify GraphQL",
      "Shopify Polaris",
      "Theme App Extensions",
    ],
  };
}

export default function Home() {
  const featuredProject = projects[0];

  return (
    <div className="min-h-screen bg-[#030407] text-[#F5F5F5] flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#D4FF24] focus:text-[#030407] focus:text-xs focus:font-mono focus:font-bold"
      >
        Skip to main content
      </a>

      {/* 1. Navbar */}
      <Navbar resumeUrl={settings.resumeUrl} />

      <main id="main-content" className="flex-1 pt-[72px]">
        {/* 2. Hero */}
        <Hero settings={settings} featuredProject={featuredProject} />

        {/* 3. Selected Projects */}
        <Projects projects={projects} />

        {/* 4. Technical Expertise */}
        <Expertise areas={expertiseAreas} />

        {/* 5. AI-Assisted Development Workflow */}
        <AIWorkflow />

        {/* 6. Professional Experience */}
        <Experience experiences={experiences} />

        {/* 7. About Me */}
        <About />

        {/* 8. Contact */}
        <Contact settings={settings} />
      </main>

      {/* 9. Footer */}
      <Footer settings={settings} />
    </div>
  );
}
