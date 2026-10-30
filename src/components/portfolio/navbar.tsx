"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/constants/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

interface NavbarProps {
  resumeUrl?: string;
}

export function Navbar({ resumeUrl = "/Resume_Sagar_Panchal.pdf" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const sections = NAVIGATION_ITEMS.map((link) => link.href);
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 130 && rect.bottom >= 130) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(targetId);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b border-[#DAD8D0]",
        isScrolled
          ? "glass-nav shadow-[0_2px_16px_rgba(36,35,31,0.04)]"
          : "bg-[#F7F5F0]"
      )}
    >
      <div className="editorial-container px-5 sm:px-8 h-[68px] flex items-center justify-between gap-4">
        {/* Typographic Wordmark */}
        <Link
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="inline-flex items-center gap-2.5 group shrink-0"
          aria-label="Sagar Panchal — Home"
        >
          <span className="w-8 h-8 rounded-md bg-[#590907] text-[#F7F5F0] font-heading font-bold text-xs flex items-center justify-center tracking-tight group-hover:bg-[#3D0605] transition-colors">
            SP
          </span>
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-[#24231F] leading-none">
              Sagar Panchal
            </span>
            <span className="text-[10px] font-mono text-[#68665F] tracking-wider uppercase mt-0.5">
              MERN • Shopify
            </span>
          </div>
        </Link>

        {/* Desktop Navigation in Subtle Sage/Cream Surface */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-lg bg-[#A5A79B]/18 border border-[#DAD8D0]"
        >
          {NAVIGATION_ITEMS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-medium transition-colors rounded-md",
                  isActive
                    ? "bg-[#590907] text-[#F7F5F0] font-semibold shadow-xs"
                    : "text-[#24231F] hover:bg-[#E8D2B5]/60"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Resume & Contact Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#E8D2B5]/75 border border-[#DAD8D0] text-[#24231F] text-xs font-medium hover:bg-[#E8D2B5] transition-colors"
            >
              <Download className="h-3.5 w-3.5 text-[#590907]" aria-hidden="true" />
              <span>Resume</span>
            </a>
          )}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#590907] text-[#F7F5F0] text-xs font-semibold hover:bg-[#3D0605] transition-colors"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-md border border-[#DAD8D0] bg-[#FFFFFF] text-[#24231F] hover:bg-[#E8D2B5]/40 transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-[#DAD8D0] glass-nav px-5 sm:px-8 py-5 space-y-4 shadow-lg"
        >
          <div className="flex flex-col divide-y divide-[#DAD8D0]/80">
            {NAVIGATION_ITEMS.map((link, idx) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "py-3 flex items-center justify-between text-sm font-heading font-semibold transition-colors",
                    isActive ? "text-[#590907]" : "text-[#24231F] hover:text-[#590907]"
                  )}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#68665F]">0{idx + 1}</span>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-2">
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md bg-[#E8D2B5] border border-[#DAD8D0] text-[#24231F] font-semibold text-xs"
              >
                <Download className="h-3.5 w-3.5 text-[#590907]" aria-hidden="true" />
                <span>Resume</span>
              </a>
            )}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md bg-[#590907] text-[#F7F5F0] font-semibold text-xs"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
