"use client";

import React, { useEffect, useState } from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./social-icons";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";

export function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = (window as unknown as { lenis: { scrollTo: (target: number | string) => void } | undefined }).lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#040406] border-t border-white/5 py-16 px-6 sm:px-12 select-none text-white/50 text-[10px] font-mono tracking-widest uppercase">
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left copyright block */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-white font-bold tracking-widest text-xs">
            © {currentYear} SAGAR PANCHAL. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[8px] text-white/30 tracking-[0.3em] font-medium">
            LUXURY PORTFOLIO BUILD // NEXT.JS v16 // THREE.JS WEBGL // DESIGNED IN GUJARAT
          </p>
        </div>

        {/* Right social connectors */}
        <div className="flex items-center gap-4">
          <Magnetic>
            <a
              href="https://github.com/SagarP2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/5 bg-white/[0.01] text-white/40 hover:text-gold-400 hover:border-gold-400/35 transition-all duration-300 shadow-lg"
              title="GitHub"
              aria-label="Visit Sagar's GitHub profile"
            >
              <Github className="h-4 w-4" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/sagar-panchal-79284921a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/5 bg-white/[0.01] text-white/40 hover:text-gold-400 hover:border-gold-400/35 transition-all duration-300 shadow-lg"
              title="LinkedIn"
              aria-label="Visit Sagar's LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="mailto:panchalsagar992003@gmail.com"
              className="p-3 rounded-full border border-white/5 bg-white/[0.01] text-white/40 hover:text-gold-400 hover:border-gold-400/35 transition-all duration-300 shadow-lg"
              title="Email"
              aria-label="Send Sagar an email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Floating Scroll back to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-30 p-3 rounded-full border border-white/10 bg-[#040406]/90 text-white shadow-2xl backdrop-blur-md transition-all duration-550 ease-out-expo cursor-pointer hover:border-gold-400 hover:scale-105 active:scale-95",
          showScroll ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        )}
        title="Scroll to Top"
      >
        <ArrowUp className="h-4 w-4 text-gold-400" />
      </button>
    </footer>
  );
}
