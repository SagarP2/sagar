"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ShoppingBag,
  Server,
  Database,
  Layers,
  Terminal,
  Play,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  Code2,
} from "lucide-react";
import { toast } from "sonner";
import { HaikeiLowPolyPattern } from "./haikei-svg";

interface WebhookSimulation {
  id: string;
  topic: string;
  timestamp: string;
  hmacStatus: "VALID" | "PROCESSING";
  queueTime: string;
  payload: string;
}

const INITIAL_LOGS: WebhookSimulation[] = [
  {
    id: "log-1",
    topic: "orders/create",
    timestamp: "14:24:08",
    hmacStatus: "VALID",
    queueTime: "11ms",
    payload: '{"order_id": 982140, "total_price": "184.00", "currency": "USD"}',
  },
  {
    id: "log-2",
    topic: "products/update",
    timestamp: "14:18:32",
    hmacStatus: "VALID",
    queueTime: "8ms",
    payload: '{"product_id": "gid://shopify/Product/8401", "sync_metafields": true}',
  },
  {
    id: "log-3",
    topic: "app/uninstalled",
    timestamp: "13:50:11",
    hmacStatus: "VALID",
    queueTime: "14ms",
    payload: '{"shop": "merchant-store.myshopify.com", "token_revoked": true}',
  },
];

const SHOPIFY_TECH_PILLARS = [
  {
    name: "Shopify Admin API & GraphQL",
    description: "Rate-limit compliant GraphQL queries and mutations with cost monitoring.",
    badge: "API Architecture",
    icon: Server,
  },
  {
    name: "Shopify Polaris & App Bridge",
    description: "Embedded merchant UX matching Shopify native desktop and mobile UI.",
    badge: "Merchant Interface",
    icon: Layers,
  },
  {
    name: "Theme App Extensions & Liquid",
    description: "Clean storefront block injections without altering merchant core themes.",
    badge: "Storefront Liquid",
    icon: ShoppingBag,
  },
  {
    name: "Redis, BullMQ & Webhooks",
    description: "Zero-data-loss asynchronous queue workers and cryptographic HMAC verification.",
    badge: "Queue & Persistence",
    icon: Database,
  },
  {
    name: "Prisma & Supabase",
    description: "Type-safe database ORM and high-availability PostgreSQL for multi-tenant data.",
    badge: "Database Layer",
    icon: ShieldCheck,
  },
];

export function ShopifyExpertise() {
  const [logs, setLogs] = useState<WebhookSimulation[]>(INITIAL_LOGS);
  const [activeConsoleTab, setActiveConsoleTab] = useState<"webhooks" | "graphql">("webhooks");
  const shouldReduceMotion = useReducedMotion();

  const handleSimulateWebhook = () => {
    const topics = [
      {
        topic: "orders/fulfilled",
        payload: '{"fulfillment_id": 55192, "carrier": "DHL", "tracking": "DH-9840"}',
      },
      {
        topic: "inventory_levels/update",
        payload: '{"location_id": 102, "available": 42, "sku": "SH-MOD-01"}',
      },
      {
        topic: "refunds/create",
        payload: '{"refund_id": 7820, "amount": "45.00", "restock": true}',
      },
    ];

    const pick = topics[Math.floor(Math.random() * topics.length)];
    const time = new Date().toLocaleTimeString();

    const newLog: WebhookSimulation = {
      id: `wh-${Date.now()}`,
      topic: pick.topic,
      timestamp: time,
      hmacStatus: "VALID",
      queueTime: `${Math.floor(Math.random() * 8) + 7}ms`,
      payload: pick.payload,
    };

    setLogs((prev) => [newLog, ...prev.slice(0, 3)]);
    toast.success(`Shopify Webhook Processed: ${pick.topic}`, {
      description: `HMAC verified and pushed to BullMQ worker in ${newLog.queueTime}.`,
    });
  };

  return (
    <section
      id="shopify"
      data-section
      className="relative py-20 sm:py-28 bg-[#F7F5F0] border-b border-[#DAD8D0] overflow-hidden"
    >
      {/* Background Haikei Low-Poly Subtle Pattern */}
      <div className="absolute top-0 right-0 w-[55%] h-full opacity-35 pointer-events-none hidden lg:block">
        <HaikeiLowPolyPattern />
      </div>

      <div className="editorial-container px-5 sm:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D2B5]/70 border border-[#DAD8D0] text-[#590907] text-xs font-mono font-semibold">
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>04 • Shopify Specialization</span>
            </div>
            <h2
              className="font-heading font-bold text-[#24231F] tracking-tight leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 3.2vw + 0.4rem, 3rem)" }}
            >
              Enterprise Shopify App &amp; Commerce Engineering.
            </h2>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 text-sm sm:text-base text-[#68665F] leading-relaxed"
          >
            Verified production experience building custom embedded Shopify applications,
            synchronizing large product catalogs via Admin GraphQL, and handling mission-critical
            merchant webhook queues with Redis and BullMQ.
          </motion.p>
        </div>

        {/* Technical Product-Interface Console Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          {/* Left Column: Interactive Technical Console (7 cols) */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 rounded-2xl bg-[#24231F] text-[#F7F5F0] border border-[#DAD8D0] shadow-xl overflow-hidden"
          >
            {/* Console Chrome Header */}
            <div className="bg-[#1C1B18] px-4 py-3 border-b border-[#3D3C37] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#590907]" />
                <span className="w-3 h-3 rounded-full bg-[#E8D2B5]" />
                <span className="w-3 h-3 rounded-full bg-[#A5A79B]" />
                <span className="text-xs font-mono text-[#A5A79B] ml-2 font-medium">
                  shopify-engine://app-bridge.v4
                </span>
              </div>

              {/* Console Mode Switcher */}
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#2A2924] border border-[#3D3C37]">
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab("webhooks")}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                    activeConsoleTab === "webhooks"
                      ? "bg-[#590907] text-[#F7F5F0] font-semibold"
                      : "text-[#A5A79B] hover:text-[#FFFFFF]"
                  }`}
                >
                  Webhook Worker
                </button>
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab("graphql")}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                    activeConsoleTab === "graphql"
                      ? "bg-[#590907] text-[#F7F5F0] font-semibold"
                      : "text-[#A5A79B] hover:text-[#FFFFFF]"
                  }`}
                >
                  Admin GraphQL
                </button>
              </div>
            </div>

            {/* Tab 1: Live Webhook Worker Panel */}
            {activeConsoleTab === "webhooks" ? (
              <div className="p-5 sm:p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#3D3C37]">
                  <div>
                    <span className="text-xs font-mono text-[#E8D2B5] font-semibold block">
                      HMAC SHA-256 Webhook Pipeline
                    </span>
                    <span className="text-[11px] font-mono text-[#A5A79B]">
                      Queue Driver: Redis + BullMQ (Zero loss architecture)
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleSimulateWebhook}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#590907] text-[#F7F5F0] text-xs font-mono font-medium hover:bg-[#3D0605] transition-colors shadow-xs cursor-pointer self-start sm:self-auto"
                  >
                    <Play className="h-3 w-3 fill-current" />
                    <span>Dispatch Webhook</span>
                  </button>
                </div>

                {/* Live Stream of Events */}
                <div className="space-y-2.5 font-mono text-xs">
                  {logs.map((log) => (
                    <div
                      key={log.id}
                      className="p-3 rounded-lg bg-[#1C1B18] border border-[#3D3C37] space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[#E8D2B5] font-semibold">{log.topic}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#590907]/40 text-[#E8D2B5] border border-[#590907]">
                            HMAC {log.hmacStatus}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#A5A79B]">{log.timestamp}</span>
                      </div>
                      <div className="text-[11px] text-[#DAD8D0] truncate">
                        payload: <code className="text-[#A5A79B]">{log.payload}</code>
                      </div>
                      <div className="text-[10px] text-[#A5A79B] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8D2B5]" />
                        <span>Worker latency: {log.queueTime} • Prisma sync committed</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Tab 2: GraphQL Query Runner */
              <div className="p-5 sm:p-6 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#3D3C37]">
                  <span className="text-[#E8D2B5] font-semibold">
                    Admin API Query: 2024-10
                  </span>
                  <span className="text-[11px] text-[#A5A79B]">
                    Cost: 8 / 1000 Available
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1C1B18] border border-[#3D3C37] text-[#DAD8D0] overflow-x-auto">
                  <pre className="text-[11px] leading-relaxed text-[#A5A79B]">
                    {`query GetStoreInventory($cursor: String) {
  products(first: 10, after: $cursor) {
    pageInfo { hasNextPage, endCursor }
    nodes {
      id
      title
      totalInventory
      metafields(namespace: "custom", first: 3) {
        nodes { key, value }
      }
    }
  }
}`}
                  </pre>
                </div>

                <div className="p-3 rounded-lg bg-[#1C1B18] border border-[#3D3C37] space-y-1">
                  <span className="text-[10px] text-[#E8D2B5] font-semibold uppercase">
                    GraphQL Execution Response:
                  </span>
                  <p className="text-[11px] text-[#DAD8D0]">
                    ✓ Status: 200 OK • Response Time: 42ms • Rate Limit: Under 50pt Budget
                  </p>
                </div>
              </div>
            )}

            {/* Console Status Bar */}
            <div className="bg-[#1C1B18] px-4 py-2 border-t border-[#3D3C37] flex items-center justify-between text-[10px] font-mono text-[#A5A79B]">
              <span>Shopify CLI 3.x • Session Token v4</span>
              <span>100% Polaris Token Fidelity</span>
            </div>
          </motion.div>

          {/* Right Column: Verified Shopify Capabilities Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-heading font-bold text-xl text-[#24231F] mb-2">
              Verified Production Architecture
            </h3>

            {SHOPIFY_TECH_PILLARS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="rounded-xl bg-[#FFFFFF] border border-[#DAD8D0] p-4 flex items-start gap-3.5 shadow-xs hover:border-[#A5A79B] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#E8D2B5]/50 text-[#590907] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-heading font-bold text-sm text-[#24231F]">
                        {item.name}
                      </h4>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#A5A79B]/20 text-[#590907] uppercase font-semibold">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#68665F] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
