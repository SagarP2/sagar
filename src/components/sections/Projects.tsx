"use client";

import React from "react";
import { Project } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { GridPattern } from "@/components/graphics/GridPattern";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const featuredProject = projects[0];
  const horizontalProject = projects[1];
  const compactProjects = projects.slice(2, 4);
  const architectureProject = projects[4];

  return (
    <section
      id="work"
      aria-labelledby="projects-heading"
      className="relative py-20 sm:py-28 border-b border-[#292D36] bg-[#030407] overflow-hidden"
    >
      {/* Subtle Haikei Technical Grid Pattern in Background */}
      <GridPattern
        variant="nodes"
        className="absolute top-0 right-0 w-full max-w-[1100px] opacity-35"
      />

      <div className="editorial-container relative z-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          index="01"
          label="Selected Projects"
          title={
            <span id="projects-heading">
              Selected Work.{" "}
              <span className="text-[#D4FF24]">Real Solutions.</span>
            </span>
          }
          description="Full-stack MERN applications, cloud-connected platforms, and production tools built with real screenshots, clean architecture, and verified repositories."
        />

        {/* Layout 1: Large Featured Project Case Study */}
        {featuredProject && (
          <FeaturedProject project={featuredProject} indexNumber="01" />
        )}

        {/* Layout 2: Horizontal Project Composition */}
        {horizontalProject && (
          <ProjectCard
            project={horizontalProject}
            index={1}
            layout="horizontal"
          />
        )}

        {/* Layout 3: Two Compact Editorial Project Panels */}
        {compactProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {compactProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx + 2}
                layout="compact"
              />
            ))}
          </div>
        )}

        {/* Layout 4: Architecture / Identity Showcase */}
        {architectureProject && (
          <ProjectCard
            project={architectureProject}
            index={4}
            layout="architecture"
          />
        )}
      </div>
    </section>
  );
}
