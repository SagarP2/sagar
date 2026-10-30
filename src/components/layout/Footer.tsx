"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { SOCIAL_URLS } from "@/constants/portfolio";
import { settings } from "@/data/profile";
import { scrollToTop } from "@/lib/scroll";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/shared/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EEEAE2] border-t border-[#D8D4CA] py-12 text-[#252522]">
      <div className="editorial-container px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Dynamic Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="w-8 h-8 rounded-md bg-[#590907] text-[#F7F5F0] font-heading font-bold text-xs flex items-center justify-center">
            SP
          </span>
          <div>
            <p className="font-heading font-bold text-sm text-[#252522]">
              © {currentYear} Sagar Panchal. All rights reserved.
            </p>
            <p className="text-xs text-[#66665F]">
              MERN Stack Developer &amp; Shopify App Developer
            </p>
          </div>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={SOCIAL_URLS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md border border-[#D8D4CA] bg-[#FFFFFF] text-[#252522] hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] transition-colors"
            aria-label="Sagar Panchal on GitHub"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={SOCIAL_URLS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md border border-[#D8D4CA] bg-[#FFFFFF] text-[#252522] hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] transition-colors"
            aria-label="Sagar Panchal on LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href={`mailto:${settings.contactEmail}`}
            className="p-2.5 rounded-md border border-[#D8D4CA] bg-[#FFFFFF] text-[#252522] hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] transition-colors"
            aria-label="Email Sagar Panchal"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-[#E8D2B5] border border-[#D8D4CA] text-[#590907] font-mono font-semibold text-xs uppercase tracking-wider hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

