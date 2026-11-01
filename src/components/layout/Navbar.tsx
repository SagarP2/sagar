"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/constants/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { cn } from "@/lib/utils";

interface NavbarProps {
  resumeUrl?: string | null;
}

export function Navbar({ resumeUrl }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const scrollPosition = window.scrollY + 180;
      for (let i = NAVIGATION_ITEMS.length - 1; i >= 0; i--) {
        const item = NAVIGATION_ITEMS[i];
        const element = document.getElementById(item.href);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.href);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      event.preventDefault();
      setActiveSection(sectionId);
      scrollToSection(sectionId);
    },
    []
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] transition-colors duration-200 border-b",
          isScrolled || mobileMenuOpen
            ? "glass-nav border-[#292D36]"
            : "bg-[#030407]/90 border-[#292D36]"
        )}
      >
        <div className="editorial-container h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left Wordmark: SAGAR PANCHAL */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="inline-flex items-center gap-2.5 font-heading text-base sm:text-lg font-bold tracking-tight text-[#F5F5F5] hover:text-[#D4FF24] transition-colors"
          >
            <span className="h-2.5 w-2.5 bg-[#D4FF24] shrink-0" />
            <span>SAGAR PANCHAL</span>
          </a>

          {/* Center / Right Desktop Links with Motion Shared Layout Active Pill */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-colors",
                    isActive
                      ? "text-[#030407] font-bold"
                      : "text-[#B4B8C3] hover:text-[#F5F5F5]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#D4FF24] -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right CTA: Let's Talk */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#101218] border border-[#D4FF24] text-[#D4FF24] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#D4FF24] hover:text-[#030407] transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="md:hidden inline-flex items-center justify-center p-2.5 bg-[#101218] border border-[#292D36] text-[#F5F5F5] hover:border-[#D4FF24] hover:text-[#D4FF24] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <MobileNavigation
        isOpen={mobileMenuOpen}
        items={NAVIGATION_ITEMS}
        activeSection={activeSection}
        resumeUrl={resumeUrl}
        onNavigate={handleNavClick}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
