"use client";

import React, { useState } from "react";
import { Plus, Minus, Check, Layers, ShoppingBag, Globe, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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

const SERVICE_ICONS = {
  Layers: Layers,
  ShoppingBag: ShoppingBag,
  Globe: Globe,
  Monitor: Monitor
};

export function Services({ services }: ServicesProps) {
  const displayServices = services.length ? services : FALLBACK_SERVICES;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" data-section className="relative py-36 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Blueprint Structural Layout Lines */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />

      <div className="max-w-4xl mx-auto w-full space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3" data-reveal="fade-up">
          <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.25em] block">
            06 // CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase">
            SERVICES &amp; SCOPES
          </h2>
        </div>

        {/* Services Rows Accordion */}
        <div className="border-t border-white/5 divide-y divide-white/5">
          {displayServices.map((service) => {
            const isOpen = expandedId === service.id;
            const IconComponent = SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS] || Layers;
            
            return (
              <div
                key={service.id}
                className="py-10 transition-colors duration-300 hover:bg-white/[0.01] px-6 -mx-6 rounded-2xl text-left"
              >
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full flex justify-between items-center text-left group cursor-pointer"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "p-2 rounded-lg border transition-colors",
                        isOpen ? "border-gold-400 bg-gold-400/5 text-gold-400" : "border-white/5 text-white/30"
                      )}>
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight font-heading">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-white/50 max-w-xl font-medium font-sans">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="p-2.5 border border-white/5 group-hover:border-gold-400/20 rounded-full transition-colors ml-4 shrink-0">
                    {isOpen ? <Minus className="h-4 w-4 text-gold-400" /> : <Plus className="h-4 w-4 text-white" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 pb-2 space-y-8 max-w-3xl">
                        <div className="text-xs sm:text-sm text-white/60 leading-relaxed whitespace-pre-wrap bg-white/[0.01] border border-white/5 p-5 rounded-2xl font-sans">
                          {service.mainDescription}
                        </div>

                        {/* Sub Services grid */}
                        {service.subServices && service.subServices.length > 0 && (
                          <div className="space-y-5 text-left">
                            <span className="text-[8.5px] font-mono uppercase tracking-widest text-white/30 block font-bold">
                              TECHNICAL DELIVERABLES BREAKDOWN
                            </span>
                            
                            <div className="grid gap-4 sm:grid-cols-2">
                              {service.subServices.map((sub) => (
                                <div key={sub.id} className="border border-white/5 p-5 rounded-2xl space-y-4 bg-[#050507]">
                                  <div className="space-y-1">
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">{sub.subTitle}</h4>
                                    <p className="text-[11px] text-white/40 leading-relaxed font-sans">{sub.subDescription}</p>
                                  </div>

                                  {sub.highlights && sub.highlights.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                      {sub.highlights.map((h, i) => (
                                        <span
                                          key={i}
                                          className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/5 px-2.5 py-0.8 text-[8px] text-white/50 font-mono font-bold"
                                        >
                                          <Check className="h-2.5 w-2.5 text-gold-400" />
                                          {h}
                                        </span>
                                      ))}
                                    </div>
                                  )}

                                  <div className="text-[9px] text-gold-400/70 leading-relaxed pt-3.5 border-t border-white/5 font-mono uppercase tracking-widest">
                                    SPEC // {sub.subDetails}
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
