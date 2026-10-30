"use client";

import React from "react";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Skills } from "./skills";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { ShopifyExpertise } from "./shopify";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";
import { Footer } from "./footer";

interface PortfolioClientProps {
  settings: {
    bioText?: string | null;
    subBioText?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    contactAddress?: string | null;
  } | null;
  projects: React.ComponentProps<typeof Projects>["projects"];
  skills: React.ComponentProps<typeof Skills>["skills"];
  experiences: React.ComponentProps<typeof Experience>["experiences"];
  educationList: React.ComponentProps<typeof Experience>["educationList"];
  services: React.ComponentProps<typeof Services>["services"];
  testimonials: React.ComponentProps<typeof Testimonials>["testimonials"];
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
    <div className="relative min-h-screen bg-[#F7F5F0] text-[#24231F] flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-md focus:bg-[#590907] focus:text-[#F7F5F0] focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar resumeUrl={resumeUrl} />

      <main id="main-content" className="relative z-10 flex-1">
        <Hero resumeUrl={resumeUrl} />
        <Projects projects={projects} />
        <About
          bioText={bioText}
          subBioText={subBioText}
          experienceYears={resumeSettings?.totalExperienceYears ?? 1.5}
        />
        <Skills skills={skills} />
        <Experience
          experiences={experiences}
          educationList={educationList}
          cvUrl={resumeUrl}
        />
        <ShopifyExpertise />
        <Services services={services} />
        <Testimonials testimonials={testimonials} />
        <Contact
          contactEmail={contactEmail}
          contactPhone={contactPhone}
          contactAddress={contactAddress}
        />
      </main>

      <Footer />
    </div>
  );
}
