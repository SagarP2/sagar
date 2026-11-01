"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
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
  const shouldReduceMotion = useReducedMotion();

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
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "glass-nav border-[#DAD8D0] shadow-[0_4px_24px_-4px_rgba(36,35,31,0.06)]"
          : "bg-[#F7F5F0]/90 backdrop-blur-xs border-transparent"
      )}
    >
      <div className="editorial-container px-5 sm:px-8 h-[72px] flex items-center justify-between gap-4">
        {/* Brand Typographic Identity */}
        <Link
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="inline-flex flex-col text-left group shrink-0"
          aria-label="Sagar Panchal — Home"
        >
          <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-[#24231F] leading-none group-hover:text-[#590907] transition-colors">
            Sagar Panchal
          </span>
          <span className="text-[10px] font-mono text-[#68665F] tracking-wider uppercase mt-1">
            MERN • Shopify Developer
          </span>
        </Link>

        {/* Desktop Navigation Pill with Watermelon-style active indicator */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#FFFFFF]/80 backdrop-blur-md border border-[#DAD8D0] shadow-xs"
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
                  "relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-colors duration-200 cursor-pointer select-none",
                  isActive
                    ? "text-[#590907] font-semibold"
                    : "text-[#68665F] hover:text-[#24231F]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    className="absolute inset-0 rounded-full bg-[#E8D2B5]/60 border border-[#A5A79B]/40"
                    style={{ zIndex: -1 }}
                  />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action: Let's Connect */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#590907] text-[#F7F5F0] text-xs font-semibold hover:bg-[#3D0605] transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
            aria-label="Connect with Sagar Panchal"
          >
            <span>Let’s Connect</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#E8D2B5]" aria-hidden="true" />
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden p-2 rounded-lg border border-[#DAD8D0] bg-[#FFFFFF] text-[#24231F] hover:bg-[#E8D2B5]/30 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#F7F5F0] border-b border-[#DAD8D0]"
          >
            <div className="editorial-container px-5 py-6 space-y-4">
              <div className="pb-3 border-b border-[#DAD8D0]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#68665F]">
                  Navigation
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {NAVIGATION_ITEMS.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.href}
                      href={`#${link.href}`}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={cn(
                        "flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono font-medium transition-colors",
                        isActive
                          ? "bg-[#590907] text-[#F7F5F0]"
                          : "bg-[#FFFFFF] border border-[#DAD8D0] text-[#24231F] hover:bg-[#E8D2B5]/40"
                      )}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#590907] text-[#F7F5F0] text-xs font-semibold hover:bg-[#3D0605] transition-colors cursor-pointer"
                >
                  <span>Let’s Connect</span>
                  <ArrowUpRight className="h-4 w-4 text-[#E8D2B5]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
