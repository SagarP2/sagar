"use client";

import React, { useState } from "react";
import { Webhook, Play, ShoppingBag, ArrowRight, Code2 } from "lucide-react";
import { toast } from "sonner";
import { WebhookLog } from "@/types/portfolio";

export function ShopifySection() {
  const [webhookLogs, setWebhookLogs] = useState<WebhookLog[]>([
    {
      id: "log-1",
      topic: "orders/create",
      timestamp: "15:01:22",
      status: "success",
      details: "Processed order #1085 — customer notified.",
    },
    {
      id: "log-2",
      topic: "products/update",
      timestamp: "14:55:10",
      status: "success",
      details: "Synced metafields for SKU-SH-990.",
    },
    {
      id: "log-3",
      topic: "app/uninstalled",
      timestamp: "13:20:45",
      status: "success",
      details: "Cleaned store session metadata from DB.",
    },
  ]);

  const handleTriggerWebhook = () => {
    const topics = ["orders/fulfilled", "refunds/create", "carts/update", "products/create"];
    const detailsList = [
      "Updated inventory records across warehouse locations.",
      "Processed refund webhook and updated order ledger.",
      "Synced cart state with custom app backend.",
      "Created product metafield definitions via Admin GraphQL.",
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
      className="relative py-20 sm:py-28 bg-[#F7F5F0] border-b border-[#D8D4CA]"
    >
      <div className="editorial-container px-5 sm:px-8 space-y-14">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#590907]">
              <span>04</span>
              <span className="text-[#A5A79B]">/</span>
              <span>Shopify Development</span>
            </div>
            <h2
              className="font-heading font-bold text-[#252522] tracking-tight leading-[1.12]"
              style={{ fontSize: "clamp(1.85rem, 3vw + 0.5rem, 2.85rem)" }}
            >
              Custom Shopify apps, GraphQL APIs &amp; Liquid themes.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#66665F] leading-relaxed">
            Building embedded merchant experiences with Shopify App Bridge, Polaris, Admin GraphQL
            APIs, webhook event pipelines, and custom storefront Liquid templates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-stretch">
          {/* Left: Architecture Flow & Capabilities (7 cols) */}
          <div className="lg:col-span-7 rounded-xl bg-[#FFFFFF] border border-[#D8D4CA] p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#D8D4CA] pb-4">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="h-5 w-5 text-[#590907]" aria-hidden="true" />
                  <h3 className="font-heading font-bold text-lg text-[#252522]">
                    Shopify Application Architecture
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#66665F] uppercase">
                  App Bridge &amp; GraphQL
                </span>
              </div>

              <p className="text-sm text-[#66665F] leading-relaxed">
                From OAuth authentication and embedded admin interfaces to real-time webhook
                processing and custom Theme App Extensions, I build commerce tools that fit directly
                into a merchant&apos;s daily workflow.
              </p>

              {/* Editorial Architecture Flow Diagram */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#D8D4CA] space-y-1">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#66665F] block">
                    01 · Entry Point
                  </span>
                  <strong className="font-heading font-bold text-sm text-[#252522] block">
                    Shopify Admin
                  </strong>
                  <span className="text-xs text-[#66665F] block">
                    Embedded App Bridge UI &amp; Polaris components
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-[#E8D2B5]/50 border border-[#D8D4CA] space-y-1">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#590907] block">
                    02 · Application Layer
                  </span>
                  <strong className="font-heading font-bold text-sm text-[#252522] block">
                    Node.js App Server
                  </strong>
                  <span className="text-xs text-[#66665F] block">
                    OAuth session tokens, validation &amp; business logic
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-[#A5A79B]/25 border border-[#D8D4CA] space-y-1">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#252522] block">
                    03 · Data &amp; Events
                  </span>
                  <strong className="font-heading font-bold text-sm text-[#252522] block">
                    GraphQL + Webhooks
                  </strong>
                  <span className="text-xs text-[#66665F] block">
                    Admin API queries, metafields &amp; DB persistence
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8D4CA] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {[
                  "Shopify App Bridge",
                  "Admin GraphQL API",
                  "Shopify Polaris",
                  "Liquid Themes",
                  "Theme App Extensions",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#EEEAE2] border border-[#D8D4CA] text-xs font-medium text-[#252522]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#590907] hover:text-[#3D0605] underline-reveal"
              >
                <span>Discuss a Shopify Project</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: Interactive Webhook Event Log Simulator (5 cols) */}
          <div className="lg:col-span-5 rounded-xl bg-[#EEEAE2] border border-[#D8D4CA] p-6 sm:p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#D8D4CA] pb-4">
                <div className="flex items-center gap-2">
                  <Webhook className="h-4 w-4 text-[#590907]" aria-hidden="true" />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#252522]">
                    Webhook Pipeline Demo
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleTriggerWebhook}
                  className="px-3.5 py-1.5 rounded-md bg-[#590907] text-[#F7F5F0] font-semibold text-xs uppercase tracking-wider hover:bg-[#3D0605] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                  <span>Emit Event</span>
                </button>
              </div>

              <div className="space-y-2.5" aria-live="polite">
                {webhookLogs.map((log) => (
                  <div
                    key={log.id}
                    className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#D8D4CA] text-left font-mono text-xs space-y-1 shadow-[0_1px_2px_rgba(37,37,34,0.03)]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 font-bold text-[#590907]">
                        <span className="w-2 h-2 rounded-full bg-[#590907]" aria-hidden="true" />
                        {log.topic}
                      </span>
                      <span className="text-[11px] text-[#66665F]">{log.timestamp}</span>
                    </div>
                    <p className="text-xs font-sans text-[#66665F] pl-4">{log.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#E8D2B5]/55 border border-[#D8D4CA] flex items-center justify-between text-xs">
              <span className="font-medium text-[#252522] flex items-center gap-2">
                <Code2 className="h-4 w-4 text-[#590907]" aria-hidden="true" />
                HMAC-SHA256 Verified Payloads
              </span>
              <span className="font-mono font-semibold text-[#590907]">200 OK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

