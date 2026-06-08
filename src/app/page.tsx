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
      projects={projects as React.ComponentProps<typeof PortfolioClient>["projects"]}
      skills={skills as React.ComponentProps<typeof PortfolioClient>["skills"]}
      experiences={experiences as React.ComponentProps<typeof PortfolioClient>["experiences"]}
      educationList={educationList as React.ComponentProps<typeof PortfolioClient>["educationList"]}
      services={services as React.ComponentProps<typeof PortfolioClient>["services"]}
      testimonials={testimonials as React.ComponentProps<typeof PortfolioClient>["testimonials"]}
      resumeSettings={resumeSettings}
    />
  );
}
