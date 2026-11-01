"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { WebsiteSetting } from "@/types/portfolio";
import { NAVIGATION_ITEMS } from "@/constants/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { SocialLinks } from "@/components/ui/SocialLinks";

interface FooterProps {
  settings: WebsiteSetting;
}

export function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-[#030407] border-t border-[#292D36] text-[#F5F5F5]">
      <div className="editorial-container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#292D36]">
          {/* Left Identity */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-[#F5F5F5]">
              <span className="h-2.5 w-2.5 bg-[#D4FF24]" />
              <span>SAGAR PANCHAL</span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#B4B8C3]">
              MERN Stack Developer / Shopify App Developer
            </p>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-5"
          >
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs font-mono uppercase tracking-wider text-[#B4B8C3] hover:text-[#D4FF24] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <SocialLinks variant="compact" includeEmail />
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#B4B8C3]">
          <p>
            &copy; {currentYear} {settings.name}. All rights reserved.
          </p>

          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="inline-flex items-center gap-2 text-[#F5F5F5] hover:text-[#D4FF24] transition-colors self-start sm:self-auto"
          >
            <span>BACK TO TOP</span>
            <span className="p-1.5 bg-[#101218] border border-[#292D36]">
              <ArrowUp className="h-3.5 w-3.5 text-[#D4FF24]" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
