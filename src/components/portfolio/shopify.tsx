"use client";

import React, { useEffect, useState } from "react";
import { Webhook, Zap, Code2, Play, ShoppingBag, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { motion, AnimatePresence } from "framer-motion";

interface WebhookLog {
  id: string;
  topic: string;
  timestamp: string;
  status: "success" | "retry" | "fail";
  details: string;
}

export function ShopifyExpertise() {
  const [webhookLogs, setWebhookLogs] = useState<WebhookLog[]>([
    { id: "log-1", topic: "orders/create", timestamp: "15:01:22", status: "success", details: "Processed order #1085 - customer notified." },
    { id: "log-2", topic: "products/update", timestamp: "14:55:10", status: "success", details: "Synced metafields for SKU-SH-990." },
    { id: "log-3", topic: "app/uninstalled", timestamp: "13:20:45", status: "success", details: "Cleaned GDPR metadata from DB." },
  ]);

  const [activeTab, setActiveTab] = useState<"admin" | "liquid" | "graphql">("admin");

  const handleTriggerWebhook = () => {
    const topics = ["orders/fulfilled", "refunds/create", "carts/update", "products/create"];
    const detailsList = [
      "Updated inventory records across 3 warehouse locations.",
      "Reversed charge for #2099 - Shopify payments notified.",
      "Cart abandoned - trigger automation sequence.",
      "Created draft SKU-SP-002, syncing images.",
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
    <section id="shopify" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Background Lighting */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold tracking-[0.25em] text-emerald-400 uppercase">
            <ShoppingBag className="h-3.5 w-3.5" />
            05 // SHOPIFY COMMERCE ARCHITECTURE
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight text-white">
            SHOPIFY APP BRIDGE &amp; <span className="text-emerald-400 glow-text">LIQUID THEMES</span>.
          </h2>
        </div>

        {/* Spatial Bento Grid */}
        <BentoGrid className="auto-rows-auto">
          
          {/* Card 1: Enterprise Capabilities (Span 2 cols) */}
          <BentoCard glow="ice" className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <Zap className="h-5 w-5 text-emerald-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                COMMERCE APP ARCHITECTURE
              </h3>
            </div>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed border-l-2 border-emerald-400/40 pl-5">
              Specialized in building custom embedded Shopify apps (App Bridge v4), GraphQL Admin API pipelines, webhooks event receivers, and high-converting Liquid themes.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left">
                <div className="text-2xl font-black text-white font-heading">v4 API</div>
                <div className="text-3xs font-mono text-white/40 uppercase">App Bridge Ready</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left">
                <div className="text-2xl font-black text-emerald-400 font-heading">99.9%</div>
                <div className="text-3xs font-mono text-white/40 uppercase">Webhook Uptime</div>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Interactive Webhook Simulation Terminal (Span 2 cols) */}
          <BentoCard glow="gold" className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Webhook className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                  LIVE WEBHOOK RUNTIME SIMULATOR
                </span>
              </div>
              <button
                onClick={handleTriggerWebhook}
                className="px-3 py-1.5 rounded-lg bg-emerald-400 text-black font-bold text-3xs uppercase tracking-wider hover:bg-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <Play className="h-3 w-3 fill-black" />
                EMIT TEST EVENT
              </button>
            </div>

            <div className="space-y-2">
              {webhookLogs.map((log) => (
                <div key={log.id} className="p-3 rounded-lg bg-black/60 border border-white/5 text-left font-mono text-2xs flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-emerald-400 font-bold">{log.topic}</span>
                    <span className="text-white/40 hidden sm:inline">{log.details}</span>
                  </div>
                  <span className="text-white/30 text-3xs">{log.timestamp}</span>
                </div>
              ))}
            </div>
          </BentoCard>

        </BentoGrid>

      </div>
    </section>
  );
}
