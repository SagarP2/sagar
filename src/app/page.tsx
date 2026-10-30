import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ShopifySection } from "@/components/sections/ShopifySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  settings,
  projects,
  skills,
  experiences,
  educationList,
  services,
  testimonials,
  resumeSettings,
} from "@/data/portfolioData";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: settings.siteName,
    description: settings.bioText,
    keywords: [
      "Sagar Panchal",
      "MERN Stack Developer",
      "Backend Engineer",
      "Shopify Developer",
      "Node.js Developer",
      "Next.js Portfolio",
      "REST API Developer",
      "GraphQL Developer",
    ],
  };
}

export default function Home() {
  const cvUrl = resumeSettings.cvMedia?.url ?? "/Resume_Sagar_Panchal.pdf";

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#252522] flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-md focus:bg-[#590907] focus:text-[#F7F5F0] focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <HeroSection resumeUrl={cvUrl} />
        <AboutSection
          bioText={settings.bioText}
          subBioText={settings.subBioText}
          experienceYears={resumeSettings.totalExperienceYears}
        />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ShopifySection />
        <ServicesSection services={services} />
        <ExperienceSection
          experiences={experiences}
          educationList={educationList}
          cvUrl={cvUrl}
        />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection
          contactEmail={settings.contactEmail}
          contactPhone={settings.contactPhone}
          contactAddress={settings.contactAddress}
        />
      </main>

      <Footer />
    </div>
  );
}
