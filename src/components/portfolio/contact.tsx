"use client";

import React, { useState, useTransition } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Globe, Sparkles, Loader2, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { ContactBgCanvas } from "./contact-bg-canvas";

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

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

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
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Save message locally
        const stored = JSON.parse(localStorage.getItem("portfolio_messages") || "[]");
        const newMessage = {
          id: Date.now().toString(),
          name,
          email,
          subject,
          message,
          createdAt: new Date().toISOString(),
        };
        stored.push(newMessage);
        localStorage.setItem("portfolio_messages", JSON.stringify(stored));

        console.log("Simulated message inbox write:", newMessage);

        toast.success("Message sent successfully!");
        setIsSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setErrors({});
      } catch {
        toast.error("An error occurred. Please try again.");
      }
    });
  };

  return (
    <section id="contact" data-section className="relative py-32 px-6 sm:px-12 steel-border-t bg-[#000000] overflow-hidden">
      <div className="absolute inset-0 premium-grid opacity-20 pointer-events-none" />
      
      {/* Wave Background */}
      <ContactBgCanvas />

      <div className="max-w-7xl mx-auto w-full grid gap-16 lg:grid-cols-12 relative z-10">
        
        {/* Left Column - Contact Coordinates */}
        <div className="lg:col-span-5 space-y-8" data-reveal="fade-right">
          <div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] block mb-3">
              08 // Project scope
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase leading-none">
              LET&apos;S BUILD SOMETHING EXTRAORDINARY
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-4 leading-relaxed font-sans">
              Have an app idea, Shopify store customization, or custom storefront project? Drop a line and let&apos;s collaborate.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-[9px] font-black uppercase tracking-widest max-w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
              Contract availability: Q3 2026
            </div>

            <div className="space-y-4 text-white/50 text-xs sm:text-sm font-mono tracking-wider select-all uppercase">
              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-white/30 flex-shrink-0" />
                  {contactEmail}
                </a>
              )}
              {contactPhone && (
                <a
                  href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-white/30 flex-shrink-0" />
                  {contactPhone}
                </a>
              )}
              {contactAddress && (
                <div className="flex items-center gap-3 text-white/40 select-none">
                  <MapPin className="h-4 w-4 text-white/30 flex-shrink-0" />
                  <span>{contactAddress}</span>
                </div>
              )}
              <div className="flex items-center gap-3 text-white/40 select-none">
                <Globe className="h-4 w-4 text-white/30 flex-shrink-0" />
                <span>Timezone: GMT+5:30 (IST)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sleek Border-bottom form */}
        <div className="lg:col-span-7 flex items-center" data-reveal="fade-left">
          <div className="w-full max-w-[560px] relative min-h-[380px] flex flex-col justify-center">
            {isSuccess ? (
              <div className="text-center space-y-4 py-8 animate-fade-in select-none">
                <div className="inline-flex p-3 rounded-full border border-white/10 bg-white/5 text-white mx-auto">
                  <CheckCircle2 className="h-10 w-10 animate-bounce" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Inquiry Saved!</h3>
                <p className="text-xs sm:text-sm text-white/50 max-w-xs mx-auto leading-relaxed">
                  Specifications received. I will review the architecture scope and get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="mt-2 border border-white/10 bg-[#000000] text-white hover:bg-white/5 text-[9px] font-black uppercase tracking-widest rounded-full py-2.5 px-6 cursor-pointer"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full border-b py-2.5 text-xs sm:text-sm bg-transparent text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300 ${
                        errors.name ? "border-red-500/50" : "border-white/10"
                      }`}
                      disabled={isPending}
                    />
                    {errors.name && <p className="text-[9px] font-mono uppercase text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full border-b py-2.5 text-xs sm:text-sm bg-transparent text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300 ${
                        errors.email ? "border-red-500/50" : "border-white/10"
                      }`}
                      disabled={isPending}
                    />
                    {errors.email && <p className="text-[9px] font-mono uppercase text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Custom Embedded App Bridge integration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`w-full border-b py-2.5 text-xs sm:text-sm bg-transparent text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300 ${
                      errors.subject ? "border-red-500/50" : "border-white/10"
                    }`}
                    disabled={isPending}
                  />
                  {errors.subject && <p className="text-[9px] font-mono uppercase text-red-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">Scope Details *</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe the application features, timelines, or Shopify endpoints required..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full border-b py-2.5 text-xs sm:text-sm bg-transparent text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300 resize-none ${
                      errors.message ? "border-red-500/50" : "border-white/10"
                    }`}
                    disabled={isPending}
                  />
                  {errors.message && <p className="text-[9px] font-mono uppercase text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full inline-flex items-center justify-center rounded-full bg-white hover:bg-white/90 text-[#000000] py-3.5 text-[10px] font-black uppercase tracking-widest transition-colors cursor-pointer shadow-lg shadow-white/5"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving specifications
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-3.5 w-3.5" />
                      Submit scope
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
