"use client";

import React, { useState } from "react";
import { Plus, Minus, Layers, ShoppingBag, Globe, Monitor, CheckCircle2 } from "lucide-react";
import { Service } from "@/types/portfolio";

interface ServicesSectionProps {
  services: Service[];
}

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers: Layers,
  Browser: Globe,
  ShoppingBag: ShoppingBag,
  Globe: Globe,
  Monitor: Monitor,
};

export function ServicesSection({ services }: ServicesSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(services[0]?.id ?? null);

  if (!services || services.length === 0) return null;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      data-section
      className="relative py-20 sm:py-28 bg-[#EEEAE2] border-b border-[#D8D4CA]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#590907]">
              <span>05</span>
              <span className="text-[#A5A79B]">/</span>
              <span>Services &amp; Capabilities</span>
            </div>
            <h2
              className="font-heading font-bold text-[#252522] tracking-tight leading-[1.12]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.5rem, 2.85rem)" }}
            >
              Practical engineering, from interface to integration.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#66665F] leading-relaxed">
            Focused development services across full-stack MERN applications, backend APIs, and
            custom Shopify solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left items-start">
          {services.map((service, idx) => {
            const IconComponent = SERVICE_ICONS[service.icon] ?? Layers;
            const isOpen = expandedId === service.id;

            return (
              <article
                key={service.id}
                className="editorial-card rounded-xl bg-[#FFFFFF] p-6 sm:p-8 space-y-6"
              >
                <div className="flex items-start justify-between gap-4 border-b border-[#D8D4CA] pb-5">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-lg bg-[#E8D2B5]/60 border border-[#D8D4CA] text-[#590907] shrink-0">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-[#590907] uppercase tracking-wider">
                        Service 0{idx + 1}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-[#252522] tracking-tight mt-0.5">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {service.subServices && service.subServices.length > 0 && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(service.id)}
                      aria-expanded={isOpen}
                      aria-label={
                        isOpen
                          ? `Collapse ${service.title} deliverables`
                          : `Expand ${service.title} deliverables`
                      }
                      className="p-2 rounded-md border border-[#D8D4CA] bg-[#F7F5F0] text-[#252522] hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] transition-colors cursor-pointer"
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </button>
                  )}
                </div>

                <p className="text-sm text-[#66665F] leading-relaxed">
                  {service.mainDescription || service.description}
                </p>

                {/* Subservices Accordion */}
                {isOpen && service.subServices && service.subServices.length > 0 && (
                  <div className="space-y-3 pt-2 border-t border-[#D8D4CA]">
                    {service.subServices.map((sub) => (
                      <div
                        key={sub.id}
                        className="p-4 rounded-lg bg-[#F7F5F0] border border-[#D8D4CA] space-y-2"
                      >
                        <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#590907]">
                          <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                          <span>{sub.subTitle}</span>
                        </div>
                        <p className="text-xs text-[#66665F] leading-relaxed">
                          {sub.subDescription}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

