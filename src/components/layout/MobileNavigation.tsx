"use client";

import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { NavigationItem } from "@/types/portfolio";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  items: readonly NavigationItem[];
  activeSection: string;
  resumeUrl?: string | null;
  onNavigate: (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
  onClose: () => void;
}

export function MobileNavigation({
  isOpen,
  items,
  activeSection,
  resumeUrl,
  onNavigate,
  onClose,
}: MobileNavigationProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 top-[72px] z-40 md:hidden bg-[#030407]/95 backdrop-blur-xl border-t border-[#292D36] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="editorial-container px-4 sm:px-6 py-8 flex flex-col justify-between min-h-[calc(100vh-72px)]"
          >
            <nav className="flex flex-col divide-y divide-[#292D36] border-y border-[#292D36]">
              {items.map((item, idx) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={`#${item.href}`}
                    onClick={(event) => {
                      onNavigate(event, item.href);
                      onClose();
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-4 px-2 text-lg font-heading font-bold uppercase tracking-tight transition-colors",
                      isActive
                        ? "text-[#D4FF24]"
                        : "text-[#F5F5F5] hover:text-[#D4FF24]"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#B4B8C3]">
                        0{idx + 1}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <span
                      className={cn(
                        "h-2 w-2",
                        isActive ? "bg-[#D4FF24]" : "bg-[#292D36]"
                      )}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="pt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="#contact"
                  onClick={(event) => {
                    onNavigate(event, "contact");
                    onClose();
                  }}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#D4FF24] text-[#030407] font-mono text-xs font-bold uppercase tracking-widest"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                {resumeUrl && (
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#101218] border border-[#292D36] text-[#F5F5F5] font-mono text-xs font-semibold uppercase tracking-widest hover:border-[#D4FF24] hover:text-[#D4FF24]"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Resume PDF
                  </a>
                )}
              </div>

              <div className="pt-4 border-t border-[#292D36] flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B4B8C3]">
                  Connect
                </span>
                <SocialLinks variant="compact" includeEmail />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

