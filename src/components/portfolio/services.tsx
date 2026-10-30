"use client";

import React, { useState } from "react";
import { Plus, Minus, Layers, ShoppingBag, Globe, Monitor, CheckCircle2 } from "lucide-react";
import type { Service } from "@/types/portfolio";

interface ServicesProps {
  services: Service[];
}

const SERVICE_ICONS = {
  Layers: Layers,
  Browser: Globe,
  ShoppingBag: ShoppingBag,
  Globe: Globe,
  Monitor: Monitor,
};

export function Services({ services }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(services[0]?.id ?? null);

  if (!services || services.length === 0) return null;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      data-section
      className="relative py-20 sm:py-24 bg-[#F7F5F0] border-b border-[#DAD8D0]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
          <div className="lg:col-span-7 space-y-2.5">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#590907]">
              06 • Engineering Services
            </p>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.4rem, 2.75rem)" }}
            >
              Practical Engineering, From Interface to Integration.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#68665F] leading-relaxed">
            Focused development capabilities across full-stack MERN applications, REST &amp; GraphQL
            APIs, and custom Shopify solutions.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left items-start">
          {services.map((service, idx) => {
            const IconComponent =
              SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS] || Layers;
            const isOpen = expandedId === service.id;

            return (
              <article
                key={service.id}
                className="bento-card rounded-xl bg-[#FFFFFF] p-6 sm:p-8 space-y-5"
              >
                <div className="flex items-start justify-between gap-4 border-b border-[#DAD8D0] pb-5">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-lg bg-[#E8D2B5]/65 border border-[#DAD8D0] text-[#590907] shrink-0">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-[#590907] uppercase tracking-wider">
                        Capability 0{idx + 1}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-[#24231F] tracking-tight mt-0.5">
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
                      className="p-2 rounded-lg border border-[#DAD8D0] bg-[#F7F5F0] text-[#24231F] hover:bg-[#590907] hover:text-[#F7F5F0] hover:border-[#590907] transition-colors cursor-pointer"
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </button>
                  )}
                </div>

                <p className="text-sm text-[#68665F] leading-relaxed">
                  {service.mainDescription || service.description}
                </p>

                {isOpen && service.subServices && service.subServices.length > 0 && (
                  <div className="space-y-3 pt-2 border-t border-[#DAD8D0]">
                    {service.subServices.map((sub) => (
                      <div
                        key={sub.id}
                        className="p-4 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0] space-y-1.5"
                      >
                        <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#590907]">
                          <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                          <span>{sub.subTitle}</span>
                        </div>
                        <p className="text-xs text-[#68665F] leading-relaxed">
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
