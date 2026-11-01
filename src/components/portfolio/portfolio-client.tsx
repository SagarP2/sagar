"use client";

import React from "react";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { About } from "./about";
import { Skills } from "./skills";
import { ShopifyExpertise } from "./shopify";
import { Experience } from "./experience";
import { DevelopmentApproach } from "./approach";
import { Contact } from "./contact";
import { Footer } from "./footer";
import type { Project, Skill, Experience as ExperienceType, Education, Service, Testimonial } from "@/types/portfolio";

interface PortfolioClientProps {
  settings: {
    bioText?: string | null;
    subBioText?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    contactAddress?: string | null;
  } | null;
  projects: Project[];
  skills: Skill[];
  experiences: ExperienceType[];
  educationList: Education[];
  services: Service[];
  testimonials: Testimonial[];
  resumeSettings: {
    totalExperienceYears?: number | null;
    cvMedia?: {
      url?: string | null;
    } | null;
  } | null;
}

export default function PortfolioClient({
  settings,
  projects,
  skills,
  experiences,
  educationList,
  services,
  testimonials,
  resumeSettings,
}: PortfolioClientProps) {
  const bioText = settings?.bioText || "";
  const subBioText = settings?.subBioText || "";
  const contactEmail = settings?.contactEmail || "panchalsagar992003@gmail.com";
  const contactPhone = settings?.contactPhone || "+91 9638061952";
  const contactAddress =
    settings?.contactAddress || "Gandhi Road, Bardoli, Gujarat, India - 394601";
  const resumeUrl = resumeSettings?.cvMedia?.url || "/Resume_Sagar_Panchal.pdf";

  return (
    <div className="relative min-h-screen bg-[#F7F5F0] text-[#24231F] flex flex-col selection:bg-[#590907] selection:text-[#F7F5F0]">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[#590907] focus:text-[#F7F5F0] focus:text-xs focus:font-semibold shadow-md"
      >
        Skip to main content
      </a>

      {/* 1. Navigation */}
      <Navbar resumeUrl={resumeUrl} />

      <main id="main-content" className="relative z-10 flex-1">
        {/* 2. Hero */}
        <Hero resumeUrl={resumeUrl} />

        {/* 3. Featured Projects */}
        <Projects projects={projects} />

        {/* 4. About Me */}
        <About
          bioText={bioText}
          subBioText={subBioText}
          experienceYears={resumeSettings?.totalExperienceYears ?? 1.5}
        />

        {/* 5. Technical Skills */}
        <Skills skills={skills} />

        {/* 6. Shopify Development Expertise */}
        <ShopifyExpertise />

        {/* 7. Professional Experience */}
        <Experience
          experiences={experiences}
          educationList={educationList}
          cvUrl={resumeUrl}
        />

        {/* 8. Development Approach */}
        <DevelopmentApproach services={services} testimonials={testimonials} />

        {/* 9. Contact */}
        <Contact
          contactEmail={contactEmail}
          contactPhone={contactPhone}
          contactAddress={contactAddress}
        />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
