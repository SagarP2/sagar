"use client";

import React, { useState } from "react";
import {
  Webhook,
  Play,
  ShoppingBag,
  ArrowRight,
  Code2,
  Database,
  Layers,
  Server,
} from "lucide-react";
import { toast } from "sonner";
import type { WebhookLog } from "@/types/portfolio";

const SHOPIFY_CAPABILITIES = [
  {
    icon: ShoppingBag,
    title: "Custom Shopify App Development",
    description:
      "Embedded merchant apps built with Node.js, React/Next.js, Shopify CLI, and OAuth session token authentication.",
  },
  {
    icon: Server,
    title: "Admin API & GraphQL Workflows",
    description:
      "Rate-limit aware Admin GraphQL queries and mutations for products, orders, metafields, inventory, and discounts.",
  },
  {
    icon: Layers,
    title: "Shopify Polaris & App Bridge",
    description:
      "Native-feeling merchant admin interfaces using Shopify Polaris components, App Bridge actions, and Theme App Extensions.",
  },
  {
    icon: Database,
    title: "Database, Webhooks & Background Queues",
    description:
      "HMAC-verified webhook handlers, Redis & BullMQ job processing, and data persistence with Prisma ORM, PostgreSQL, or MongoDB.",
  },
] as const;

export function ShopifyExpertise() {
  const [webhookLogs, setWebhookLogs] = useState<WebhookLog[]>([
    {
      id: "log-1",
      topic: "orders/create",
      timestamp: "15:01:22",
      status: "success",
      details: "Queued order #1085 sync job & updated merchant dashboard.",
    },
    {
      id: "log-2",
      topic: "products/update",
      timestamp: "14:55:10",
      status: "success",
      details: "Synced custom metafields for SKU-SH-990 via Admin GraphQL.",
    },
    {
      id: "log-3",
      topic: "app/uninstalled",
      timestamp: "13:20:45",
      status: "success",
      details: "Revoked store session tokens and cleaned shop metadata.",
    },
  ]);

  const handleTriggerWebhook = () => {
    const topics = ["orders/fulfilled", "refunds/create", "carts/update", "products/create"];
    const detailsList = [
      "Synced fulfillment tracking across warehouse locations.",
      "Processed refund webhook and updated merchant ledger.",
      "Validated cart attributes via Theme App Extension.",
      "Created product metafield definitions via Admin GraphQL API.",
    ];

    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const randomDetail = detailsList[Math.floor(Math.random() * detailsList.length)];
    const time = new Date().toLocaleTimeString();

    const newLog: WebhookLog = {
      id: `manual-log-${Date.now()}`,
      topic: randomTopic,
      timestamp: time,
      status: "success",
      details: randomDetail,
    };

    setWebhookLogs((prev) => [newLog, ...prev.slice(0, 3)]);
    toast.success(`Simulated Shopify Webhook: ${randomTopic}`);
  };

  return (
    <section
      id="shopify"
      data-section
      className="relative py-20 sm:py-24 bg-[#A5A79B]/20 border-b border-[#DAD8D0]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-12">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
          <div className="lg:col-span-7 space-y-2.5">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#590907]">
              05 • Featured Shopify Development
            </p>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.4rem, 2.75rem)" }}
            >
              Custom Shopify Apps, Admin GraphQL &amp; Storefront Extensions.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#68665F] leading-relaxed">
            End-to-end commerce engineering across embedded Shopify Admin apps, Polaris UI, Theme
            App Extensions, and reliable webhook processing pipelines.
          </p>
        </div>

        {/* Burgundy & Sage Bento Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left items-stretch">
          {/* Left: Deep Burgundy Technical Architecture Panel (7 cols) */}
          <div className="lg:col-span-7 rounded-xl bg-[#590907] text-[#F7F5F0] border border-[#590907] p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8D2B5]/20 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#E8D2B5] text-[#590907] flex items-center justify-center">
                    <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[#F7F5F0]">
                    Shopify Application Architecture
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#E8D2B5]">
                  Polaris • App Bridge • GraphQL
                </span>
              </div>

              {/* 4 Capability Sub-Cards inside Burgundy Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SHOPIFY_CAPABILITIES.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={cap.title}
                      className="p-4 rounded-lg bg-[#3D0605] border border-[#E8D2B5]/20 space-y-2"
                    >
                      <div className="flex items-center gap-2 text-[#E8D2B5]">
                        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <h4 className="font-heading font-bold text-sm text-[#F7F5F0]">
                          {cap.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#E8D2B5]/85 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8D2B5]/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Shopify Admin API",
                  "GraphQL",
                  "Shopify Polaris",
                  "App Bridge",
                  "Theme App Extensions",
                  "Liquid",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#E8D2B5]/15 border border-[#E8D2B5]/30 text-[11px] font-medium text-[#E8D2B5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E8D2B5] text-[#24231F] text-xs font-semibold hover:bg-[#FFFFFF] transition-colors"
              >
                <span>Discuss a Shopify Build</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#590907]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: Interactive Webhook & Background Queue Simulator (5 cols) */}
          <div className="lg:col-span-5 bento-card rounded-xl bg-[#FFFFFF] p-6 sm:p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#DAD8D0] pb-4">
                <div className="flex items-center gap-2">
                  <Webhook className="h-4 w-4 text-[#590907]" aria-hidden="true" />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#24231F]">
                    Webhook &amp; Queue Simulator
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleTriggerWebhook}
                  className="px-3.5 py-1.5 rounded-lg bg-[#590907] text-[#F7F5F0] font-semibold text-xs hover:bg-[#3D0605] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                  <span>Simulate Event</span>
                </button>
              </div>

              <p className="text-xs text-[#68665F] leading-relaxed">
                Test how incoming Shopify store events are verified via HMAC-SHA256 and processed
                asynchronously without blocking merchant requests.
              </p>

              <div className="space-y-2.5" aria-live="polite">
                {webhookLogs.map((log) => (
                  <div
                    key={log.id}
                    className="p-3.5 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0] text-left font-mono text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 font-bold text-[#590907]">
                        <span className="w-2 h-2 rounded-full bg-[#590907]" aria-hidden="true" />
                        {log.topic}
                      </span>
                      <span className="text-[11px] text-[#68665F]">{log.timestamp}</span>
                    </div>
                    <p className="text-xs font-sans text-[#68665F] pl-4">{log.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#E8D2B5]/60 border border-[#DAD8D0] flex items-center justify-between text-xs">
              <span className="font-medium text-[#24231F] flex items-center gap-2">
                <Code2 className="h-4 w-4 text-[#590907]" aria-hidden="true" />
                HMAC-SHA256 Verified • BullMQ Worker
              </span>
              <span className="font-mono font-semibold text-[#590907]">200 OK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
