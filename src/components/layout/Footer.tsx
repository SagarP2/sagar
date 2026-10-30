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
    <footer className="bg-[#030407] border-t border-[#292D36] py-12 text-[#F5F5F5]">
      <div className="editorial-container px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Dynamic Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
          <span className="w-9 h-9 rounded-md bg-[#1558C9] text-[#F5F5F5] font-heading font-bold text-xs flex items-center justify-center border border-[#1558C9]">
            SP
          </span>
          <div>
            <p className="font-heading font-bold text-sm text-[#F5F5F5]">
              © {currentYear} Sagar Panchal. All rights reserved.
            </p>
            <p className="text-xs font-mono text-[#B4B8C3] mt-0.5">
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
            className="p-2.5 rounded-md border border-[#292D36] bg-[#101218] text-[#B4B8C3] hover:bg-[#1558C9] hover:text-[#F5F5F5] hover:border-[#1558C9] transition-colors"
            aria-label="Sagar Panchal on GitHub"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={SOCIAL_URLS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md border border-[#292D36] bg-[#101218] text-[#B4B8C3] hover:bg-[#1558C9] hover:text-[#F5F5F5] hover:border-[#1558C9] transition-colors"
            aria-label="Sagar Panchal on LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href={`mailto:${settings.contactEmail}`}
            className="p-2.5 rounded-md border border-[#292D36] bg-[#101218] text-[#B4B8C3] hover:bg-[#1558C9] hover:text-[#F5F5F5] hover:border-[#1558C9] transition-colors"
            aria-label="Email Sagar Panchal"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-[#D4FF24] text-[#030407] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#e1ff5c] transition-colors cursor-pointer"
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
