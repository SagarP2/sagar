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
      className="relative py-20 sm:py-28 bg-[#030407] border-b border-[#292D36]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#D4FF24]">
              <span>06</span>
              <span className="text-[#1558C9]">/</span>
              <span>Services &amp; Capabilities</span>
            </div>
            <h2
              className="font-heading font-bold text-[#F5F5F5] tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(1.95rem, 3.2vw + 0.5rem, 3rem)" }}
            >
              Production Engineering, From Interface to Integration.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#B4B8C3] leading-relaxed">
            Focused development services across full-stack MERN applications, backend APIs, and
            custom Shopify solutions.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left items-start">
          {services.map((service, idx) => {
            const IconComponent = SERVICE_ICONS[service.icon] ?? Layers;
            const isOpen = expandedId === service.id;

            return (
              <article
                key={service.id}
                className="bento-card rounded-2xl p-6 sm:p-8 space-y-6"
              >
                <div className="flex items-start justify-between gap-4 border-b border-[#292D36] pb-5">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-[#1558C9]/20 border border-[#1558C9]/50 text-[#D4FF24] shrink-0">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#D4FF24] uppercase tracking-wider">
                        Service 0{idx + 1}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-[#F5F5F5] tracking-tight mt-0.5">
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
                      className="p-2 rounded-md border border-[#292D36] bg-[#1A1E27] text-[#F5F5F5] hover:bg-[#D4FF24] hover:text-[#030407] hover:border-[#D4FF24] transition-colors cursor-pointer"
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </button>
                  )}
                </div>

                <p className="text-sm text-[#B4B8C3] leading-relaxed">
                  {service.mainDescription || service.description}
                </p>

                {/* Subservices Accordion */}
                {isOpen && service.subServices && service.subServices.length > 0 && (
                  <div className="space-y-3 pt-2 border-t border-[#292D36]">
                    {service.subServices.map((sub) => (
                      <div
                        key={sub.id}
                        className="p-4 rounded-xl bg-[#1A1E27] border border-[#292D36] space-y-1.5"
                      >
                        <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#F5F5F5]">
                          <CheckCircle2
                            className="h-4 w-4 text-[#D4FF24] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{sub.subTitle}</span>
                        </div>
                        <p className="text-xs text-[#B4B8C3] leading-relaxed">
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
