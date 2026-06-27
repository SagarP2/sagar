"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";
import { motion, AnimatePresence } from "framer-motion";

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

      // Section intersection detection
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
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-45 transition-all duration-550 ease-out-expo px-6 sm:px-12 flex justify-center w-full pointer-events-none"
        )}
      >
        <div
          className={cn(
            "w-full transition-all duration-550 ease-out-expo flex items-center justify-between pointer-events-auto",
            isScrolled
              ? "max-w-[1000px] h-14 bg-[#08080a]/75 border border-white/5 backdrop-blur-xl rounded-full px-6 mt-4 shadow-2xl shadow-black/80"
              : "max-w-7xl h-24 bg-transparent border border-transparent"
          )}
        >
          {/* Logo */}
          <Magnetic>
            <Link
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="flex items-center gap-2 text-[10px] sm:text-xs font-black tracking-[0.25em] text-white uppercase group"
            >
              <span className="font-heading transition-colors group-hover:text-gold-400">
                SAGAR<span className="text-white/40 group-hover:text-gold-400/40">PANCHAL</span>
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, id)}
                  className={cn(
                    "text-[9px] font-bold tracking-[0.2em] uppercase transition-colors relative py-1 underline-reveal",
                    isActive ? "text-gold-400" : "text-white/40 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center">
            <Magnetic>
              <button
                onClick={(e) => handleLinkClick(e, "contact")}
                className="inline-flex items-center justify-center rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold-400/30 px-6 py-2.5 text-[9px] font-bold uppercase tracking-widest text-white transition-all duration-300 shadow-xl cursor-pointer"
              >
                Start project
                <ArrowUpRight className="ml-1.5 h-3 w-3 text-gold-400" />
              </button>
            </Magnetic>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-white/5 bg-[#0a0a0c]/60 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Editorial Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 bg-[#040406] z-40 flex flex-col justify-between p-8 pt-28 font-mono select-none"
          >
            <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />

            {/* Menu Links */}
            <nav className="flex flex-col gap-3 text-left">
              <span className="text-[8px] uppercase tracking-widest text-white/30 block mb-2 border-b border-white/5 pb-2">
                Navigation Directory
              </span>
              {NAV_LINKS.map((link, index) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, id)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.5 }}
                    className={cn(
                      "text-sm font-bold tracking-[0.2em] uppercase py-2 flex items-center justify-between border-b border-white/[0.02]",
                      isActive ? "text-gold-400 font-black" : "text-white/40"
                    )}
                  >
                    <span>{link.label}</span>
                    <span className="text-[9px] text-white/10">0{index + 1}</span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Drawer footer details */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 text-left border-t border-white/5 pt-6 text-[9px] uppercase tracking-widest text-white/30">
                <div className="space-y-1">
                  <span className="block text-[8px] text-white/20">Coordinates</span>
                  <a href="mailto:panchalsagar992003@gmail.com" className="block text-white/60 hover:text-white transition-colors">
                    panchalsagar992003@gmail.com
                  </a>
                </div>
                <div className="space-y-1 text-right">
                  <span className="block text-[8px] text-white/20">Social Connects</span>
                  <div className="flex gap-3 justify-end pt-1">
                    <a href="https://github.com/SagarP2" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold-400 transition-colors">
                      GH
                    </a>
                    <a href="https://www.linkedin.com/in/sagar-panchal-79284921a/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold-400 transition-colors">
                      LN
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => handleLinkClick(e, "contact")}
                className="w-full inline-flex items-center justify-center rounded-full bg-white hover:bg-gold-400 text-black py-4 text-[9px] font-black uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer"
              >
                Request briefing
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
