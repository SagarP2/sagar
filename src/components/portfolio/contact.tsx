"use client";

import React, { useState, useTransition } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Sparkles, Loader2, CheckCircle2, Phone, Send } from "lucide-react";
import * as z from "zod";
import dynamic from "next/dynamic";
import { Magnetic } from "./magnetic";
import { BentoCard } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const ContactBgCanvas = dynamic(
  () => import("./contact-bg-canvas").then((mod) => mod.ContactBgCanvas),
  { ssr: false }
);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

interface ContactProps {
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
}

export function Contact({ contactEmail, contactPhone, contactAddress }: ContactProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("$5k - $10k");
  const [service, setService] = useState("Full-Stack MERN");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const BUDGET_OPTIONS = ["<$5k", "$5k - $10k", "$10k - $25k", "$25k+"];
  const SERVICE_OPTIONS = ["Full-Stack MERN", "Shopify Custom App", "API System Integration", "Liquid Theme Design"];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = contactSchema.safeParse({ name, email, subject, message });
    
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error("Please correct the errors in the form.");
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            service,
            budget,
            message,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (data.errors) {
            setErrors(data.errors);
          }
          toast.error(data.message || "An error occurred submitting specifications.");
          return;
        }

        toast.success(data.message || "Specifications sent successfully!");
        setIsSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setErrors({});
      } catch {
        toast.error("Network error occurred. Please try again.");
      }
    });
  };

  return (
    <section id="contact" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#040406] overflow-hidden">
      {/* Background Spatial Effects */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <ContactBgCanvas />

      <div className="max-w-7xl mx-auto w-full grid gap-12 lg:grid-cols-12 relative z-10 items-start">
        
        {/* Left Column: Contact Coordinates */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold tracking-[0.25em] text-gold-400 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              07 // COLLABORATION DIRECTORY
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight text-white">
              INITIATE A <span className="text-gold-400 glow-text">PROJECT</span>.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed pt-2">
              Have a technical product, Shopify custom application, or high-scale API system in mind? Send your specifications directly to my endpoint.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="bento-card-spatial p-5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gold-400/10 border border-gold-400/20 text-gold-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <span className="text-3xs font-mono text-white/40 uppercase block">DIRECT EMAIL</span>
                <a href={`mailto:${contactEmail}`} className="text-sm font-bold text-white hover:text-gold-400 transition-colors font-mono">
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className="bento-card-spatial p-5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-ice-400/10 border border-ice-400/20 text-ice-400">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <span className="text-3xs font-mono text-white/40 uppercase block">TELEPHONE</span>
                <a href={`tel:${contactPhone}`} className="text-sm font-bold text-white hover:text-ice-400 transition-colors font-mono">
                  {contactPhone}
                </a>
              </div>
            </div>

            <div className="bento-card-spatial p-5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="text-3xs font-mono text-white/40 uppercase block">COORDINATES</span>
                <div className="text-sm font-bold text-white font-mono">
                  {contactAddress}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Liquid Glass Contact Form */}
        <div className="lg:col-span-7">
          <BentoCard glow="gold" className="p-8 sm:p-10 space-y-6">
            <form onSubmit={onSubmit} className="space-y-6 text-left">
              
              {/* Service Selection Pills */}
              <div className="space-y-2">
                <label className="text-3xs font-mono font-bold text-white/50 uppercase tracking-widest block">
                  01 // SELECT ARCHITECTURE SCOPE
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setService(srv)}
                      className={cn(
                        "px-3.5 py-1.5 rounded-lg text-3xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer",
                        service === srv
                          ? "bg-gold-400 text-black shadow-md"
                          : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white"
                      )}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Pills */}
              <div className="space-y-2">
                <label className="text-3xs font-mono font-bold text-white/50 uppercase tracking-widest block">
                  02 // BUDGET ESTIMATE
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_OPTIONS.map((bdg) => (
                    <button
                      type="button"
                      key={bdg}
                      onClick={() => setBudget(bdg)}
                      className={cn(
                        "px-3.5 py-1.5 rounded-lg text-3xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer",
                        budget === bdg
                          ? "bg-gold-400 text-black shadow-md"
                          : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white"
                      )}
                    >
                      {bdg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-3xs font-mono font-bold text-white/50 uppercase tracking-widest">
                    NAME *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sagar Panchal"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-white/20 focus:border-gold-400 transition-colors"
                  />
                  {errors.name && <span className="text-4xs text-rose-400 font-mono">{errors.name}</span>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-3xs font-mono font-bold text-white/50 uppercase tracking-widest">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sagar@company.dev"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-white/20 focus:border-gold-400 transition-colors"
                  />
                  {errors.email && <span className="text-4xs text-rose-400 font-mono">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-3xs font-mono font-bold text-white/50 uppercase tracking-widest">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Custom Shopify Application Architecture"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-white/20 focus:border-gold-400 transition-colors"
                />
                {errors.subject && <span className="text-4xs text-rose-400 font-mono">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-3xs font-mono font-bold text-white/50 uppercase tracking-widest">
                  MESSAGE SPECIFICATION *
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline project objectives, timeline, and technical requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-white/20 focus:border-gold-400 transition-colors resize-none"
                />
                {errors.message && <span className="text-4xs text-rose-400 font-mono">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 rounded-xl bg-gold-400 text-black font-bold text-xs uppercase tracking-widest hover:bg-gold-300 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-gold-400/10"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-black" />
                    <span>TRANSMITTING SPECIFICATIONS...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 text-black" />
                    <span>TRANSMIT SPECIFICATIONS TO ENDPOINT</span>
                  </>
                )}
              </button>

            </form>
          </BentoCard>
        </div>

      </div>
    </section>
  );
}
