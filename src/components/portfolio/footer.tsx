"use client";

import React, { useEffect, useState } from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./social-icons";
import { cn } from "@/lib/utils";

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#000000] border-t border-white/5 py-12 px-6 sm:px-12 select-none text-white/40 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-white/60 font-semibold tracking-wide">
            © {currentYear} Sagar Panchal. All rights reserved.
          </p>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.25em]">
            Powered by Next.js, GSAP, Three.js & Static Exports
          </p>
        </div>

        {/* Right social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SagarP2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/5 bg-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
            title="GitHub"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sagar-panchal-79284921a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/5 bg-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a
            href="mailto:panchalsagar992003@gmail.com"
            className="p-2 rounded-full border border-white/5 bg-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
            title="Email"
          >
            <Mail className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Floating Scroll back to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-30 p-2.5 rounded-full border border-white/10 bg-[#000000]/85 text-white shadow-xl backdrop-blur-md transition-all duration-550 ease-out-expo cursor-pointer hover:border-white hover:scale-110",
          showScroll ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        )}
        title="Scroll to Top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
}
