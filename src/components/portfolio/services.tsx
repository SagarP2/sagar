"use client";

import React, { useState } from "react";
import { Plus, Minus, Layers, ShoppingBag, Globe, Monitor, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

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
    title: "MERN Stack Architecture",
    description: "Full-stack products built with React 19, Node.js, Express, MongoDB, secure auth, and production deployment.",
    mainDescription: "End-to-end MERN engineering for business applications, SaaS portals, and custom web API workflows.",
    icon: "Layers",
    orderIndex: 1,
    subServices: [
      {
        id: "mern-api",
        subTitle: "API-First Architecture",
        subDescription: "Clean backend routes, validation schemas, auth pipelines, and service boundaries.",
        highlights: ["Node.js", "Express.js", "MongoDB"],
        subDetails: "Designed for maintainability, security, and high performance.",
      },
    ],
  },
  {
    id: "shopify-app-development",
    title: "Shopify Custom Engineering",
    description: "Embedded apps, Webhook processing, Admin GraphQL APIs, OAuth flows, and tailored Liquid themes.",
    mainDescription: "Custom Shopify apps connecting storefront operations, product meta-fields, and custom merchant tools.",
    icon: "ShoppingBag",
    orderIndex: 2,
    subServices: [],
  },
];

const SERVICE_ICONS = {
  Layers: Layers,
  ShoppingBag: ShoppingBag,
  Globe: Globe,
  Monitor: Monitor,
};

export function Services({ services }: ServicesProps) {
  const displayServices = services.length ? services : FALLBACK_SERVICES;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Background Lighting */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold tracking-[0.25em] text-gold-400 uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            06 // ENGINEERING CAPABILITIES
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight text-white">
            SERVICES &amp; <span className="text-gold-400 glow-text">SPECIALTIES</span>.
          </h2>
        </div>

        {/* Spatial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayServices.map((service, idx) => {
            const IconComponent = SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS] || Layers;
            const isOpen = expandedId === service.id;

            return (
              <BentoCard key={service.id} glow={idx % 2 === 0 ? "gold" : "ice"} className="space-y-6">
                <div className="flex items-start justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-gold-400">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black font-heading uppercase text-white tracking-tight">
                        {service.title}
                      </h3>
                      <span className="text-3xs font-mono text-white/40 uppercase">SERVICE SCOPE 0{idx + 1}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </button>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed text-left">
                  {service.mainDescription || service.description}
                </p>

                {/* Subservices Drawer */}
                <AnimatePresence>
                  {isOpen && service.subServices && service.subServices.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 pt-4 border-t border-white/5 text-left"
                    >
                      {service.subServices.map((sub) => (
                        <div key={sub.id} className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
                          <div className="flex items-center gap-2 font-bold text-xs font-mono text-gold-400 uppercase">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            {sub.subTitle}
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {sub.subDescription}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </BentoCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
