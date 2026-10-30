"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
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
      setIsScrolled(window.scrollY > 16);

      const sections = NAVIGATION_ITEMS.map((link) => link.href);
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
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
        "sticky top-0 z-50 w-full transition-colors duration-200 border-b border-[#292D36]",
        isScrolled ? "glass-nav shadow-[0_8px_30px_rgba(0,0,0,0.55)]" : "bg-[#030407]"
      )}
    >
      <div className="editorial-container px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Personal Wordmark */}
        <Link
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="inline-flex items-center gap-3 group"
          aria-label="Sagar Panchal — Home"
        >
          <span className="w-9 h-9 rounded-md bg-[#1558C9] text-[#F5F5F5] border border-[#1558C9] font-heading font-bold text-sm flex items-center justify-center tracking-tight group-hover:bg-[#D4FF24] group-hover:text-[#030407] group-hover:border-[#D4FF24] transition-colors">
            SP
          </span>
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-base tracking-tight text-[#F5F5F5] leading-none flex items-center gap-1.5">
              <span>Sagar Panchal</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF24]" aria-hidden="true" />
            </span>
            <span className="text-[11px] font-mono text-[#B4B8C3] tracking-wider uppercase mt-1">
              MERN &amp; Shopify Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
          {NAVIGATION_ITEMS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md",
                  isActive
                    ? "text-[#F5F5F5] bg-[#1558C9]/20 font-semibold"
                    : "text-[#B4B8C3] hover:text-[#F5F5F5] hover:bg-[#101218]"
                )}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#D4FF24] rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Resume & Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#292D36] bg-[#101218] text-[#F5F5F5] text-xs font-mono font-semibold uppercase tracking-wider hover:border-[#1558C9] hover:bg-[#1A1E27] transition-colors"
          >
            <FileText className="h-3.5 w-3.5 text-[#D4FF24]" aria-hidden="true" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#D4FF24] text-[#030407] text-xs font-bold uppercase tracking-wider hover:bg-[#e1ff5c] transition-colors"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2.5 rounded-md border border-[#292D36] bg-[#101218] text-[#F5F5F5] hover:border-[#D4FF24] transition-colors cursor-pointer"
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
          className="lg:hidden border-t border-[#292D36] bg-[#030407] px-5 sm:px-8 py-6 space-y-5 shadow-2xl"
        >
          <div className="flex flex-col divide-y divide-[#292D36]">
            {NAVIGATION_ITEMS.map((link, idx) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "py-3.5 flex items-center justify-between text-base font-heading font-semibold transition-colors",
                    isActive ? "text-[#D4FF24]" : "text-[#F5F5F5] hover:text-[#D4FF24]"
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#D4FF24]" aria-hidden="true" />
                    )}
                    <span>{link.label}</span>
                  </span>
                  <span className="text-xs font-mono text-[#B4B8C3]">0{idx + 1}</span>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-md border border-[#292D36] bg-[#101218] text-[#F5F5F5] font-mono font-semibold text-xs uppercase tracking-wider hover:border-[#1558C9] transition-colors"
            >
              <FileText className="h-4 w-4 text-[#D4FF24]" aria-hidden="true" />
              <span>Resume (PDF)</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-md bg-[#D4FF24] text-[#030407] font-bold text-xs uppercase tracking-wider hover:bg-[#e1ff5c] transition-colors"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
