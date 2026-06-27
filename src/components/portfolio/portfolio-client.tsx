"use client";

import React, { useEffect, useState } from "react";
import { TerminalLoader } from "./loader";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomCursor } from "./custom-cursor";

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
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (!loadingComplete) return;
    gsap.registerPlugin(ScrollTrigger);

    // Dynamic section trigger reveals
    const sections = gsap.utils.toArray<HTMLElement>("[data-section]");
    sections.forEach((section) => {
      // Add custom section reveal styling class
      section.classList.add("section-reveal");
      
      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        onEnter: () => section.classList.add("active"),
        onLeaveBack: () => section.classList.remove("active"),
      });
    });

    // IntersectionObserver scroll reveal setup for generic items
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const revealCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    const revealElements = document.querySelectorAll("[data-reveal]");

    revealElements.forEach((el) => {
      el.classList.add("reveal-init");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loadingComplete]);

  // Fallbacks if database settings aren't seeded yet
  const bioText = settings?.bioText || "";
  const subBioText = settings?.subBioText || "";
  const contactEmail = settings?.contactEmail || "panchalsagar992003@gmail.com";
  const contactPhone = settings?.contactPhone || "";
  const contactAddress = settings?.contactAddress || "Gandhi Road, Bardoli, Gujarat, India - 394601";
  const resumeUrl = resumeSettings?.cvMedia?.url || undefined;

  return (
    <>
      {/* Dynamic Counter Loader */}
      {!loadingComplete && (
        <TerminalLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main Page Layout */}
      <div
        className={`relative min-h-screen bg-[#000000] text-slate-100 flex flex-col overflow-hidden transition-opacity duration-700 ${
          loadingComplete ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <CustomCursor />
        
        {/* Sleek Faint Background Grids & Noise */}
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 premium-grid opacity-30" />
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 noise-overlay" />
        
        <Navbar />

        <main className="relative z-10 flex-1">
          <Hero resumeUrl={resumeUrl} />
          <About bioText={bioText} subBioText={subBioText} experienceYears={resumeSettings?.totalExperienceYears ?? 1.5} />
          <Skills skills={skills} />
          <Experience experiences={experiences} educationList={educationList} cvUrl={resumeUrl} />
          <Projects projects={projects} />
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
    </>
  );
}
