"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Shopify", href: "#shopify" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section tracer
      const sections = NAV_LINKS.map((link) => link.href.slice(1));
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-45 transition-all duration-550 ease-out-expo px-6 sm:px-12",
        isScrolled
          ? "h-16 bg-[#000000]/60 border-b border-white/5 backdrop-blur-lg"
          : "h-20 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Branding Logo */}
        <Link
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="flex items-center gap-2 text-sm font-black tracking-[0.2em] text-white uppercase"
        >
          <span className="font-heading">
            SAGAR<span className="text-white/40">PANCHAL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, id)}
                className={cn(
                  "text-[10px] font-bold tracking-[0.2em] uppercase transition-colors relative py-1 underline-reveal",
                  isActive ? "text-white" : "text-white/40 hover:text-white"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="inline-flex items-center justify-center rounded-full border border-white/10 hover:border-white/35 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-white transition-all duration-300"
          >
            Start project
            <ArrowUpRight className="ml-1.5 h-3 w-3" />
          </a>
        </div>

        {/* Mobile menu triggers */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 rounded-full border border-white/5 bg-white/5 text-white/70 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[64px] left-0 right-0 bottom-0 bg-[#000000] border-t border-white/5 p-6 flex flex-col justify-between z-30 animate-fade-in">
          <nav className="flex flex-col gap-5 pt-4">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, id)}
                  className={cn(
                    "text-xs font-bold tracking-[0.2em] uppercase py-2 border-b border-white/5",
                    isActive ? "text-white font-black" : "text-white/40"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pb-8">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="w-full inline-flex items-center justify-center rounded-full border border-white/10 py-3 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/5 transition-colors"
            >
              Start project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
