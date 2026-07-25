"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Works", href: "projects" },
  { label: "Shopify", href: "shopify" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((link) => link.href);
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const lenis = (window as unknown as { lenis: { scrollTo: (target: string, options?: { offset?: number }) => void } | undefined }).lenis;
    if (lenis) {
      lenis.scrollTo(`#${targetId}`, { offset: -80 });
    } else {
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
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 flex justify-center w-full pointer-events-none">
        <div
          className={cn(
            "w-full max-w-6xl transition-all duration-500 ease-out-expo flex items-center justify-between pointer-events-auto px-6 py-3 rounded-full",
            isScrolled
              ? "glass-pill shadow-2xl shadow-black/80"
              : "bg-transparent border border-transparent"
          )}
        >
          {/* Brand Identity Logo */}
          <Magnetic>
            <Link
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="flex items-center gap-2.5 text-xs font-black tracking-[0.25em] text-white uppercase group"
            >
              <span className="h-2 w-2 rounded-full bg-gold-400 animate-ping" />
              <span className="font-heading transition-colors group-hover:text-gold-400">
                SAGAR<span className="text-white/40 group-hover:text-gold-400/40">.DEV</span>
              </span>
            </Link>
          </Magnetic>

          {/* Floating Spatial Navigation Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/5 backdrop-blur-md rounded-full px-3 py-1.5 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono transition-all duration-300",
                    isActive
                      ? "text-black font-extrabold"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gold-400 rounded-full shadow-md shadow-gold-400/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
                className="inline-flex items-center text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-400 hover:bg-gold-400 hover:text-black transition-all duration-300 gap-1.5 shadow-lg shadow-gold-400/5"
              >
                <Sparkles className="h-3 w-3" />
                INITIATE PROJECT
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#040406]/95 backdrop-blur-2xl flex flex-col justify-center px-8 sm:px-12 pt-24 pb-12 lg:hidden"
          >
            <div className="space-y-6 max-w-sm mx-auto w-full">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-2xl font-black font-heading uppercase tracking-wider text-white/70 hover:text-gold-400 transition-colors flex items-center justify-between border-b border-white/5 pb-3"
                >
                  <span>{link.label}</span>
                  <span className="text-2xs font-mono text-white/20">0{idx + 1}</span>
                </a>
              ))}

              <div className="pt-6">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gold-400 text-black font-bold text-xs uppercase tracking-widest"
                >
                  START COLLABORATION
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
