"use client";

import React, { useEffect, useState } from "react";
import { Webhook, Zap, Code2, Play } from "lucide-react";
import { cn } from "@/lib/utils";

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
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="shopify" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#000000]">
      <div className="max-w-7xl mx-auto w-full grid gap-16 lg:grid-cols-12 relative z-10">
        
        {/* Left Copy block */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 text-left" data-reveal="fade-right">
          <div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] block mb-3">
              05 // Shopify Specialty
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase leading-tight">
              App Bridge & Custom Commerce Architecture
            </h2>
          </div>

          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            I build bespoke Shopify integrations: writing robust Node.js app scripts, registering webhooks with automated retry strategies, structuring customized Liquid templates, and querying Shopify GraphQL Admin APIs directly.
          </p>

          <ul className="space-y-4 text-white/40 text-xs sm:text-sm font-sans">
            <li className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-white/80 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-white/80 font-bold block mb-0.5">Embedded App Bridge</strong>
                Build Polaris configurations running natively inside Shopify Admin frameworks.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Webhook className="h-5 w-5 text-white/80 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-white/80 font-bold block mb-0.5">Webhook Pipelines</strong>
                Process thousands of orders asynchronously without latency spikes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Code2 className="h-5 w-5 text-white/80 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-white/80 font-bold block mb-0.5">Headless Commerce & Hydrogen</strong>
                Integrate Storefront API calls for sub-second, dynamic web rendering.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Admin simulator widget */}
        <div className="lg:col-span-7 flex items-center justify-center" data-reveal="fade-left">
          <div className="border border-white/5 w-full max-w-[620px] rounded-2xl overflow-hidden flex flex-col bg-[#08080a]">
            {/* Header tabs console */}
            <div className="bg-[#030304] px-4 py-3.5 flex items-center justify-between border-b border-white/5 select-none font-mono">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/20 animate-pulse" />
                <span className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Shopify Console Simulator</span>
              </div>
              <div className="flex gap-2 text-[9px] uppercase tracking-widest font-mono">
                {(["admin", "graphql", "liquid"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-2.5 py-1.5 rounded transition-colors cursor-pointer",
                      activeTab === tab
                        ? "bg-white text-[#000000] font-black"
                        : "text-white/30 hover:text-white/60"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Workspace simulated viewport */}
            <div className="p-5 bg-[#08080a] min-h-[300px]">
              {activeTab === "admin" && (
                <div className="grid grid-cols-12 gap-4 h-full">
                  {/* Sidebar Mock */}
                  <div className="col-span-3 border-r border-white/5 pr-3 space-y-3.5 text-[9px] font-bold text-white/30 font-mono select-none uppercase tracking-widest pt-2">
                    <span className="block text-[8px] text-white/20 pb-1 font-black">Shopify</span>
                    <span className="block py-1 hover:text-white/60">Home</span>
                    <span className="block py-1 hover:text-white/60">Orders</span>
                    <span className="block py-1 hover:text-white/60">Products</span>
                    <span className="block px-2.5 py-1.5 bg-white/5 rounded text-white border-l-2 border-white">
                      Sagar App
                    </span>
                  </div>

                  {/* App Mock Content */}
                  <div className="col-span-9 pl-3 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-white/5">
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sagar App Bridge Dashboard</h4>
                        <p className="text-[9px] font-mono text-white/30 lowercase mt-0.5">connected: store-dev.myshopify.com</p>
                      </div>
                      <span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white text-[8px] font-black uppercase tracking-widest">
                        Bridge App
                      </span>
                    </div>

                    {/* Live Logs feed list */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[8px] font-mono text-white/30 uppercase tracking-widest">
                        <span>Webhook Feed Listener</span>
                        <span className="flex items-center gap-1.5 text-white/50">
                          <Play className="h-2.5 w-2.5 text-white fill-white animate-ping" />
                          Live status
                        </span>
                      </div>
                      <div className="space-y-2 font-mono text-[9px] max-h-[150px] overflow-y-auto">
                        {webhookLogs.map((log) => (
                          <div
                            key={log.id}
                            className="bg-[#030304] border border-white/5 p-2.5 rounded-lg flex justify-between items-start gap-4 hover:border-white/20 transition-colors"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-white font-bold">{log.topic}</span>
                                <span className="text-white/30 text-[8px]">{log.timestamp}</span>
                              </div>
                              <p className="text-white/55 leading-relaxed">{log.details}</p>
                            </div>
                            <span className="text-white bg-white/10 border border-white/10 px-2 py-0.5 rounded text-[8px] tracking-widest uppercase font-black">
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
                <div className="font-mono text-2xs text-white/60 p-4 bg-[#030304] rounded-lg border border-white/5 leading-relaxed whitespace-pre select-all">
{`{% comment %} Custom Shopify liquid schema product slider {% endcomment %}
<div class="product-gallery" data-autoplay="{{ section.settings.autoplay }}">
  {% for image in product.images %}
    <img 
      src="{{ image.src | image_url: width: 450 }}" 
      alt="{{ image.alt | escape }}"
      loading="lazy"
    >
  {% endfor %}
</div>

{% schema %}
{
  "name": "Custom Product Slider",
  "settings": [
    { "type": "checkbox", "id": "autoplay", "label": "Autoplay slider", "default": true }
  ]
}
{% endschema %}`}
                </div>
              )}

              {activeTab === "graphql" && (
                <div className="font-mono text-2xs text-white/60 p-4 bg-[#030304] rounded-lg border border-white/5 leading-relaxed whitespace-pre select-all">
{`# Query Shopify GraphQL Admin API for product metafields
query getProductMetafields($productId: ID!) {
  product(id: $productId) {
    title
    metafields(first: 5, namespace: "sagar_app") {
      edges {
        node {
          key
          value
          type
        }
      }
    }
  }
}`}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
