import React from "react";
import PortfolioClient from "@/components/portfolio/portfolio-client";
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
import type { Metadata } from "next";

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
  return (
    <PortfolioClient
      settings={settings}
      projects={projects}
      skills={skills}
      experiences={experiences}
      educationList={educationList}
      services={services}
      testimonials={testimonials}
      resumeSettings={resumeSettings}
    />
  );
}
