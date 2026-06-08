"use client";

import React, { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SubServiceItem {
  id: string;
  subTitle: string;
  subDescription: string;
  highlights: string[];
  subDetails: string;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  mainDescription: string;
  icon: string;
  orderIndex: number;
  subServices: SubServiceItem[];
}

interface ServicesProps {
  services: ServiceItem[];
}

const FALLBACK_SERVICES: ServiceItem[] = [
  {
    id: "mern-development",
    title: "MERN Stack Development",
    description: "Full-stack products with React, Node.js, Express, MongoDB, auth, dashboards, and production deployment.",
    mainDescription: "End-to-end MERN engineering for business applications, admin portals, SaaS products, and custom workflows.",
    icon: "Layers",
    orderIndex: 1,
    subServices: [
      {
        id: "mern-api",
        subTitle: "API-first architecture",
        subDescription: "Clean backend routes, validation, authentication, and modular service boundaries.",
        highlights: ["Node.js", "Express", "MongoDB"],
        subDetails: "Designed for maintainability, secure access patterns, and future integrations.",
      },
    ],
  },
  {
    id: "shopify-app-development",
    title: "Shopify App Development",
    description: "Embedded apps, webhook processing, Admin GraphQL, OAuth flows, and merchant automation.",
    mainDescription: "Custom Shopify apps that connect storefront operations, product data, order workflows, and third-party platforms.",
    icon: "ShoppingBag",
    orderIndex: 2,
    subServices: [],
  },
];

export function Services({ services }: ServicesProps) {
  const displayServices = services.length ? services : FALLBACK_SERVICES;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#000000]">
      <div className="max-w-4xl mx-auto w-full space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3" data-reveal="fade-up">
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] block">
            06 // Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase">
            Services & Scopes
          </h2>
        </div>

        {/* Services Rows Accordion */}
        <div className="border-t border-white/5 divide-y divide-white/5">
          {displayServices.map((service) => {
            const isOpen = expandedId === service.id;
            return (
              <div
                key={service.id}
                className="py-8 transition-colors duration-300 hover:bg-white/[0.01] px-4 -mx-4 rounded-xl"
              >
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full flex justify-between items-center text-left group cursor-pointer"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/50 max-w-xl">
                      {service.description}
                    </p>
                  </div>
                  <div className="p-2 border border-white/5 group-hover:border-white/20 rounded-full transition-colors ml-4 shrink-0">
                    {isOpen ? <Minus className="h-4 w-4 text-white" /> : <Plus className="h-4 w-4 text-white" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2 space-y-6 max-w-3xl">
                        <div className="text-xs sm:text-sm text-white/60 leading-relaxed whitespace-pre-wrap bg-white/2 border border-white/5 p-4 rounded-xl font-sans">
                          {service.mainDescription}
                        </div>

                        {/* Sub Services grid */}
                        {service.subServices.length > 0 && (
                          <div className="space-y-4">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-white/30 block">
                              Deliverables breakdown
                            </span>
                            <div className="grid gap-4 sm:grid-cols-2">
                              {service.subServices.map((sub) => (
                                <div key={sub.id} className="border border-white/5 p-4 rounded-xl space-y-3 bg-[#030304]">
                                  <div>
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{sub.subTitle}</h4>
                                    <p className="text-[11px] text-white/40 mt-1 leading-relaxed">{sub.subDescription}</p>
                                  </div>

                                  {sub.highlights.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                      {sub.highlights.map((h, i) => (
                                        <span
                                          key={i}
                                          className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/2 px-2 py-0.5 text-[8px] text-white/60 font-mono"
                                        >
                                          <Check className="h-2 w-2 text-white/70" />
                                          {h}
                                        </span>
                                      ))}
                                    </div>
                                  )}

                                  <div className="text-[10px] text-white/30 leading-relaxed pt-2 border-t border-white/5 font-mono uppercase tracking-wider">
                                    {sub.subDetails}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
