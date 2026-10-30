"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { NAVIGATION_ITEMS, SOCIAL_URLS } from "@/constants/portfolio";
import { scrollToTop } from "@/lib/scroll";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./social-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#A5A79B]/22 border-t border-[#DAD8D0] py-12 text-[#24231F]">
      <div className="editorial-container px-5 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Personal Wordmark & Short Description */}
          <div className="flex items-start gap-3 text-left max-w-md">
            <span className="w-8 h-8 rounded-md bg-[#590907] text-[#F7F5F0] font-heading font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              SP
            </span>
            <div>
              <p className="font-heading font-bold text-base text-[#24231F]">
                Sagar Panchal
              </p>
              <p className="text-xs text-[#68665F] leading-relaxed mt-1">
                MERN Stack Developer &amp; Shopify App Developer building full-stack web
                applications, custom Shopify solutions, and dependable backend APIs.
              </p>
            </div>
          </div>

          {/* Footer Navigation Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-5">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                className="text-xs font-medium text-[#24231F] hover:text-[#590907] transition-colors underline-reveal"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar: Copyright, Socials & Back to Top */}
        <div className="pt-6 border-t border-[#DAD8D0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#68665F]">
            © {currentYear} Sagar Panchal. All rights reserved.
          </p>

          <div className="flex items-center gap-2.5">
            <a
              href={SOCIAL_URLS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#DAD8D0] bg-[#FFFFFF] text-[#24231F] hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] transition-colors"
              aria-label="Sagar Panchal on GitHub"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href={SOCIAL_URLS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#DAD8D0] bg-[#FFFFFF] text-[#24231F] hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] transition-colors"
              aria-label="Sagar Panchal on LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="mailto:panchalsagar992003@gmail.com"
              className="p-2 rounded-lg border border-[#DAD8D0] bg-[#FFFFFF] text-[#24231F] hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] transition-colors"
              aria-label="Email Sagar Panchal"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="ml-1 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#E8D2B5] border border-[#DAD8D0] text-[#590907] font-mono font-semibold text-xs hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
