"use client";

import React, { useEffect, useState } from "react";
import { Mail, ArrowUp, Globe, Heart } from "lucide-react";
import { NAVIGATION_ITEMS, SOCIAL_URLS } from "@/constants/portfolio";
import { scrollToTop } from "@/lib/scroll";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./social-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setIstTime(formatted);
      } catch {
        // fallback
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#A5A79B]/20 border-t border-[#DAD8D0] py-14 text-[#24231F] relative">
      <div className="editorial-container px-5 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Personal Monogram & Short Profile Statement */}
          <div className="flex items-start gap-3.5 text-left max-w-md">
            <span className="w-9 h-9 rounded-lg bg-[#590907] text-[#F7F5F0] font-heading font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              SP
            </span>
            <div>
              <p className="font-heading font-bold text-base text-[#24231F]">
                Sagar Panchal
              </p>
              <p className="text-xs text-[#68665F] leading-relaxed mt-1">
                MERN Stack Developer &amp; Shopify App Developer building resilient full-stack web
                applications, custom Shopify apps, GraphQL integrations, and modern UI systems.
              </p>
            </div>
          </div>

          {/* Quick Anchor Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                className="text-xs font-mono font-medium text-[#24231F] hover:text-[#590907] transition-colors underline-reveal"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar: Copyright, Local Time, Socials & Back to Top */}
        <div className="pt-6 border-t border-[#DAD8D0] flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-[#68665F]">
          <div className="flex flex-wrap items-center gap-4">
            <p>© {currentYear} Sagar Panchal. Built with precision &amp; care.</p>
            {istTime && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#DAD8D0] font-mono text-[11px] text-[#24231F]">
                <span className="w-2 h-2 rounded-full bg-[#590907] inline-block animate-pulse" />
                <span>India (IST): {istTime}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
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
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#E8D2B5] border border-[#DAD8D0] text-[#590907] font-mono font-semibold text-xs hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
