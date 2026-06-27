"use client";

import React, { useEffect, useState } from "react";
import { Webhook, Zap, Code2, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Magnetic } from "./magnetic";

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
  const [triggerCount, setTriggerCount] = useState(0);

  // Manual Trigger for webhook simulation
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

    setWebhookLogs((prev) => [newLog, ...prev.slice(0, 4)]);
    setTriggerCount(prev => prev + 1);
    toast.success(`Webhook triggered: ${randomTopic}`);
  };

  // Simulated live webhooks feed ticker
  useEffect(() => {
    const topics = ["orders/fulfilled", "refunds/create", "carts/update", "products/create"];
    const detailsList = [
      "Updated inventory records across 3 warehouse locations.",
      "Reversed charge for #2099 - Shopify payments notified.",
      "Cart abandoned - trigger automation sequence.",
      "Created draft SKU-SP-002, syncing images.",
    ];

    const interval = setInterval(() => {
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      const randomDetail = detailsList[Math.floor(Math.random() * detailsList.length)];
      const time = new Date().toLocaleTimeString();

      const newLog: WebhookLog = {
        id: `log-${Date.now()}`,
        topic: randomTopic,
        timestamp: time,
        status: Math.random() > 0.08 ? "success" : "retry",
        details: randomDetail,
      };

      setWebhookLogs((prev) => [newLog, ...prev.slice(0, 4)]);
    }, 8500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="shopify" data-section className="relative py-36 px-6 sm:px-12 steel-border-t bg-[#040406]">
      {/* Blueprint Structural Layout Lines */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto w-full grid gap-16 lg:grid-cols-12 relative z-10">
        
        {/* Left Copy block */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-10 text-left" data-reveal="fade-right">
          <div>
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.25em] block mb-3">
              05 // SHOPIFY SPECIALTY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase leading-tight">
              APP BRIDGE &amp; CUSTOM COMMERCE ARCHITECTURE
            </h2>
          </div>

          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            I design bespoke enterprise integrations: building highly resilient Node.js apps, deploying event-driven webhook ingestion pipelines with micro-queue retry strategies, writing performant Liquid components, and leveraging the Shopify GraphQL Admin API.
          </p>

          <ul className="space-y-5 text-white/45 text-xs sm:text-sm font-sans">
            <li className="flex items-start gap-4">
              <Zap className="h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-white font-bold block mb-0.5 uppercase tracking-wider text-[10.5px]">Embedded App Bridge</strong>
                Deploy custom Node/React modules that render natively inside the merchant admin pane.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Webhook className="h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-white font-bold block mb-0.5 uppercase tracking-wider text-[10.5px]">Resilient Webhook Pipelines</strong>
                Process bulk updates asynchronously utilizing secure database writes.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Code2 className="h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-white font-bold block mb-0.5 uppercase tracking-wider text-[10.5px]">Frictionless Storefront &amp; GraphQL</strong>
                Structure custom metafield configurations and fast collection queries.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Admin simulator widget */}
        <div className="lg:col-span-7 flex items-center justify-center" data-reveal="fade-left">
          <div className="border border-white/5 w-full max-w-[620px] rounded-2xl overflow-hidden flex flex-col bg-[#08080a] shadow-2xl shadow-black/95">
            {/* Header tabs console */}
            <div className="bg-[#050507] px-4 py-4 flex items-center justify-between border-b border-white/5 select-none font-mono">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-[8px] text-white/30 uppercase tracking-[0.2em] font-bold">SHOPIFY CONSOLE SIMULATOR</span>
              </div>
              <div className="flex gap-2">
                {(["admin", "graphql", "liquid"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-3 py-1.5 rounded transition-all cursor-pointer text-[7.5px] font-bold uppercase tracking-wider",
                      activeTab === tab
                        ? "bg-white text-black font-black"
                        : "text-white/30 hover:text-white/60"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Workspace simulated viewport */}
            <div className="p-6 bg-[#08080a] min-h-[340px]">
              {activeTab === "admin" && (
                <div className="grid grid-cols-12 gap-4 h-full text-left font-mono">
                  {/* Sidebar Mock */}
                  <div className="col-span-3 border-r border-white/5 pr-3 space-y-3.5 text-[8px] font-bold text-white/20 select-none uppercase tracking-widest pt-2">
                    <span className="block text-[7.5px] text-gold-400/80 font-black">ADMIN CORE</span>
                    <span className="block py-1 hover:text-white/60">Orders</span>
                    <span className="block py-1 hover:text-white/60">Products</span>
                    <span className="block px-2.5 py-1.5 bg-white/[0.02] rounded text-gold-400 border-l border-gold-400 font-bold">
                      Sagar App
                    </span>
                  </div>

                  {/* App Mock Content */}
                  <div className="col-span-9 pl-3 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-white/5">
                      <div>
                        <h4 className="text-[10px] font-bold text-white uppercase tracking-wider font-heading">APP WEBHOOK MONITOR</h4>
                        <p className="text-[7.5px] text-white/30 lowercase mt-0.5">bridge: store-app.myshopify.com</p>
                      </div>
                      
                      {/* Manual trigger button */}
                      <Magnetic>
                        <button
                          onClick={handleTriggerWebhook}
                          className="px-3 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/5 hover:bg-gold-400 hover:text-black text-gold-400 text-[8px] font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <Play className="h-2.5 w-2.5 fill-current" />
                          TEST WEBHOOK
                        </button>
                      </Magnetic>
                    </div>

                    {/* Live Logs feed list */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[7.5px] text-white/30 uppercase tracking-widest">
                        <span>LIVE LOG STREAM ({triggerCount} TESTED)</span>
                        <span className="flex items-center gap-1.5 text-gold-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-ping" />
                          CONNECTED
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-[9px] max-h-[160px] overflow-y-auto pr-1">
                        {webhookLogs.map((log) => (
                          <div
                            key={log.id}
                            className="bg-[#050507] border border-white/5 p-3 rounded-xl flex justify-between items-start gap-4 hover:border-gold-400/20 transition-colors duration-300"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-white font-bold">{log.topic}</span>
                                <span className="text-white/35 text-[7.5px]">{log.timestamp}</span>
                              </div>
                              <p className="text-white/50 leading-relaxed font-sans">{log.details}</p>
                            </div>
                            <span className={cn(
                              "px-2 py-0.5 rounded text-[7.5px] tracking-widest uppercase font-bold border shrink-0",
                              log.status === "success" 
                                ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/10" 
                                : "bg-amber-500/5 text-amber-400 border-amber-500/10"
                            )}>
                              {log.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "liquid" && (
                <div className="font-mono text-2xs text-white/60 p-4 bg-[#050507] rounded-xl border border-white/5 leading-relaxed whitespace-pre-wrap select-all text-left">
                  <div><span className="text-white/30">{"{% comment %} Custom Shopify Liquid product gallery {% endcomment %}"}</span></div>
                  <div>{"<div class="}<span className="text-emerald-400">{"\"product-gallery\""}</span>{" data-autoplay="}<span className="text-gold-400">{"\"{{ section.settings.autoplay }}\""}</span>{">"}</div>
                  <div className="pl-4">{"{% "}<span className="text-gold-400 font-bold">for</span>{" image in product.images %}"}</div>
                  <div className="pl-8">{"<img src="}<span className="text-emerald-400">{"\"{{ image.src | image_url: width: 450 }}\""}</span>{" alt="}<span className="text-emerald-400">{"\"{{ image.alt | escape }}\""}</span>{" loading="}<span className="text-gold-400">{"\"lazy\""}</span>{">"}</div>
                  <div className="pl-4">{"{% "}<span className="text-gold-400 font-bold">endfor</span>{" %}"}</div>
                  <div>{"</div>"}</div>
                  <div className="mt-4"><span className="text-gold-400 font-bold">{"{% schema %}"}</span></div>
                  <div>{"{"}</div>
                  <div className="pl-4"><span className="text-white/40 font-bold">{"\"name\""}</span>: <span className="text-emerald-400">{"\"Custom Product Gallery\""}</span>,</div>
                  <div className="pl-4"><span className="text-white/40 font-bold">{"\"settings\""}</span>: [</div>
                  <div className="pl-8">{"{ "}<span className="text-white/40">{"\"type\""}</span>: <span className="text-emerald-400">{"\"checkbox\""}</span>, <span className="text-white/40">{"\"id\""}</span>: <span className="text-emerald-400">{"\"autoplay\""}</span>, <span className="text-white/40">{"\"label\""}</span>: <span className="text-emerald-400">{"\"Autoplay\""}</span>, <span className="text-white/40">{"\"default\""}</span>: <span className="text-gold-400">true</span>{" }"}</div>
                  <div className="pl-4">]</div>
                  <div>{"}"}</div>
                  <div><span className="text-gold-400 font-bold">{"{% endschema %}"}</span></div>
                </div>
              )}

              {activeTab === "graphql" && (
                <div className="font-mono text-2xs text-white/60 p-4 bg-[#050507] rounded-xl border border-white/5 leading-relaxed whitespace-pre-wrap select-all text-left">
                  <div><span className="text-white/30"># Query Shopify GraphQL Admin API for product metafields</span></div>
                  <div><span className="text-gold-400 font-bold">query</span> <span className="text-[#7dd3fc] font-bold">getProductMetafields</span>($productId: ID!) &#123;</div>
                  <div className="pl-4">product(id: $productId) &#123;</div>
                  <div className="pl-8">title</div>
                  <div className="pl-8">metafields(first: 5, namespace: <span className="text-emerald-400">{"\"sagar_app\""}</span>) &#123;</div>
                  <div className="pl-12">edges &#123;</div>
                  <div className="pl-16">node &#123;</div>
                  <div className="pl-20 text-[#7dd3fc]">key</div>
                  <div className="pl-20 text-[#7dd3fc]">value</div>
                  <div className="pl-20 text-[#7dd3fc]">type</div>
                  <div className="pl-16">&#125;</div>
                  <div className="pl-12">&#125;</div>
                  <div className="pl-8">&#125;</div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
