"use client";

import React, { useState } from "react";
import { Webhook, Play, ShoppingBag, ArrowRight, Code2, Cpu } from "lucide-react";
import { toast } from "sonner";
import { WebhookLog } from "@/types/portfolio";

export function ShopifySection() {
  const [webhookLogs, setWebhookLogs] = useState<WebhookLog[]>([
    {
      id: "log-1",
      topic: "orders/create",
      timestamp: "15:01:22",
      status: "success",
      details: "BullMQ worker processed order #1085 — inventory & ledger synced.",
    },
    {
      id: "log-2",
      topic: "products/update",
      timestamp: "14:55:10",
      status: "success",
      details: "Admin GraphQL mutation synced metafields for SKU-SH-990.",
    },
    {
      id: "log-3",
      topic: "app/uninstalled",
      timestamp: "13:20:45",
      status: "success",
      details: "Cleaned store OAuth session & Redis cache keys.",
    },
  ]);

  const handleTriggerWebhook = () => {
    const topics = ["orders/fulfilled", "refunds/create", "carts/update", "products/create"];
    const detailsList = [
      "Queued BullMQ job — updated inventory across warehouse locations.",
      "Processed refund webhook and reconciled merchant ledger.",
      "Synced cart state with embedded App Bridge session.",
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
    toast.success(`Simulated Webhook Event: ${randomTopic}`);
  };

  return (
    <section
      id="shopify"
      data-section
      className="relative py-20 sm:py-28 bg-[#1558C9] border-b border-[#292D36] text-[#F5F5F5]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-14">
        {/* Section Heading on Electric Cobalt Blue Surface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#030407] text-xs font-mono font-bold uppercase tracking-widest text-[#D4FF24]">
              <span>04</span>
              <span>/</span>
              <span>Shopify Development Spotlight</span>
            </div>
            <h2
              className="font-heading font-bold text-[#F5F5F5] tracking-tight leading-[1.08]"
              style={{ fontSize: "clamp(1.95rem, 3.2vw + 0.5rem, 3rem)" }}
            >
              Custom Shopify Apps, GraphQL APIs &amp; Theme Extensions.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#F5F5F5]/90 leading-relaxed">
            Architecting embedded merchant applications with Shopify App Bridge, Polaris UI, Admin
            GraphQL mutations, Theme App Extensions, and resilient Redis + BullMQ webhook queues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-stretch">
          {/* Left: Midnight Black Content Panel — Architecture & Capabilities (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#030407] border border-[#292D36] p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-2xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#292D36] pb-4">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="h-5 w-5 text-[#D4FF24]" aria-hidden="true" />
                  <h3 className="font-heading font-bold text-lg text-[#F5F5F5]">
                    Shopify Commerce Architecture
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#D4FF24] uppercase font-semibold">
                  App Bridge · GraphQL · BullMQ
                </span>
              </div>

              <p className="text-sm text-[#B4B8C3] leading-relaxed">
                From OAuth session tokens and embedded Polaris admin dashboards to high-volume
                webhook ingestion and storefront Liquid blocks, I engineer Shopify solutions built
                for merchant reliability.
              </p>

              {/* 3-Stage Architecture Pipeline */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-[#101218] border border-[#292D36] space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4FF24] block">
                    01 · Merchant UI
                  </span>
                  <strong className="font-heading font-bold text-sm text-[#F5F5F5] block">
                    Polaris &amp; App Bridge
                  </strong>
                  <span className="text-xs text-[#B4B8C3] block leading-relaxed">
                    Embedded admin workflows &amp; Theme App Extensions
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#101218] border border-[#1558C9] space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4FF24] block">
                    02 · API Core
                  </span>
                  <strong className="font-heading font-bold text-sm text-[#F5F5F5] block">
                    Admin GraphQL API
                  </strong>
                  <span className="text-xs text-[#B4B8C3] block leading-relaxed">
                    Typed queries, mutations, metafields &amp; Prisma ORM
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#101218] border border-[#292D36] space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4FF24] block">
                    03 · Async Queue
                  </span>
                  <strong className="font-heading font-bold text-sm text-[#F5F5F5] block">
                    Webhooks &amp; BullMQ
                  </strong>
                  <span className="text-xs text-[#B4B8C3] block leading-relaxed">
                    HMAC-verified events &amp; Redis background workers
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#292D36] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {[
                  "Shopify Admin API",
                  "GraphQL",
                  "Shopify Polaris",
                  "App Bridge",
                  "Theme App Extensions",
                  "Redis & BullMQ",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#1A1E27] border border-[#292D36] text-xs font-mono text-[#F5F5F5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D4FF24] hover:underline"
              >
                <span>Discuss a Shopify Build</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: Midnight Black Interactive Webhook & Queue Simulator (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#101218] border border-[#292D36] p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#292D36] pb-4">
                <div className="flex items-center gap-2">
                  <Webhook className="h-4 w-4 text-[#D4FF24]" aria-hidden="true" />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#F5F5F5]">
                    Webhook &amp; Queue Simulator
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleTriggerWebhook}
                  className="px-3.5 py-1.5 rounded-md bg-[#D4FF24] text-[#030407] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#e1ff5c] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                  <span>Emit Event</span>
                </button>
              </div>

              <div className="space-y-2.5" aria-live="polite">
                {webhookLogs.map((log) => (
                  <div
                    key={log.id}
                    className="p-3.5 rounded-xl bg-[#030407] border border-[#292D36] text-left font-mono text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 font-bold text-[#D4FF24]">
                        <span className="w-2 h-2 rounded-full bg-[#D4FF24]" aria-hidden="true" />
                        {log.topic}
                      </span>
                      <span className="text-[11px] text-[#B4B8C3]">{log.timestamp}</span>
                    </div>
                    <p className="text-xs font-sans text-[#B4B8C3] pl-4">{log.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1A1E27] border border-[#292D36] flex items-center justify-between text-xs">
              <span className="font-mono text-[#F5F5F5] flex items-center gap-2">
                <Cpu className="h-4 w-4 text-[#D4FF24]" aria-hidden="true" />
                <Code2 className="h-4 w-4 text-[#1558C9]" aria-hidden="true" />
                HMAC-SHA256 · Worker Active
              </span>
              <span className="font-mono font-bold text-[#D4FF24]">200 OK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
