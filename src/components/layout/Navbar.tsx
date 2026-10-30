"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/constants/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
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
          if (rect.top <= 140 && rect.bottom >= 140) {
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
        "sticky top-0 z-50 w-full transition-colors duration-200 border-b border-[#D8D4CA]",
        isScrolled
          ? "bg-[#F7F5F0]/95 backdrop-blur-sm shadow-[0_1px_12px_rgba(37,37,34,0.04)]"
          : "bg-[#F7F5F0]"
      )}
    >
      <div className="editorial-container px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Personal Brand */}
        <Link
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="inline-flex items-center gap-3 group"
          aria-label="Sagar Panchal — Home"
        >
          <span className="w-9 h-9 rounded-md bg-[#590907] text-[#F7F5F0] font-heading font-bold text-sm flex items-center justify-center tracking-tight group-hover:bg-[#3D0605] transition-colors">
            SP
          </span>
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-base tracking-tight text-[#252522] leading-none">
              Sagar Panchal
            </span>
            <span className="text-[11px] font-mono text-[#66665F] tracking-wider uppercase mt-1">
              MERN &amp; Shopify
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
                    ? "text-[#590907] font-semibold"
                    : "text-[#66665F] hover:text-[#252522] hover:bg-[#EEEAE2]/70"
                )}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#590907] rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Prominent "Let's Talk" CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#590907] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#3D0605] transition-colors"
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
          className="lg:hidden p-2.5 rounded-md border border-[#D8D4CA] bg-[#FFFFFF] text-[#252522] hover:bg-[#EEEAE2] transition-colors cursor-pointer"
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
          className="lg:hidden border-t border-[#D8D4CA] bg-[#F7F5F0] px-5 sm:px-8 py-6 space-y-4 shadow-lg"
        >
          <div className="flex flex-col divide-y divide-[#D8D4CA]/70">
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
                    isActive ? "text-[#590907]" : "text-[#252522] hover:text-[#590907]"
                  )}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#66665F]">0{idx + 1}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-md bg-[#590907] text-[#F7F5F0] font-semibold text-xs uppercase tracking-wider hover:bg-[#3D0605] transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

