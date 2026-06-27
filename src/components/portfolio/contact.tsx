"use client";

import React, { useState, useTransition } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Globe, Sparkles, Loader2, CheckCircle2, Phone } from "lucide-react";
import * as z from "zod";
import { ContactBgCanvas } from "./contact-bg-canvas";
import { Magnetic } from "./magnetic";

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
  const [budget, setBudget] = useState("$5k - $10k");
  const [service, setService] = useState("Full-Stack MERN");
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
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Save message locally
        const stored = JSON.parse(localStorage.getItem("portfolio_messages") || "[]");
        const newMessage = {
          id: Date.now().toString(),
          name,
          email,
          subject,
          service,
          budget,
          message,
          createdAt: new Date().toISOString(),
        };
        stored.push(newMessage);
        localStorage.setItem("portfolio_messages", JSON.stringify(stored));

        console.log("Simulated message inbox write:", newMessage);

        toast.success("Specifications sent successfully!");
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
    <section id="contact" data-section className="relative py-36 px-6 sm:px-12 border-t border-white/5 bg-[#040406] overflow-hidden">
      {/* Blueprint Structural Layout Lines */}
      <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />

      {/* Wave Background canvas */}
      <ContactBgCanvas />

      <div className="max-w-7xl mx-auto w-full grid gap-16 lg:grid-cols-12 relative z-10">
        
        {/* Left Column - Contact Coordinates */}
        <div className="lg:col-span-5 space-y-10 text-left" data-reveal="fade-right">
          <div>
            <span className="text-[9px] font-bold text-gold-400 uppercase tracking-[0.25em] block mb-3">
              08 // INBOX SPECIFICATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight uppercase leading-none">
              LET&apos;S BUILD SOMETHING EXTRAORDINARY
            </h2>
            <p className="text-white/50 text-xs sm:text-sm mt-5 leading-relaxed font-sans font-medium">
              Have an app idea, custom Shopify integrations, or custom headless storefront? Request a briefing call to align on architecture.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold-400/10 bg-gold-400/5 text-gold-400 text-[8.5px] font-bold uppercase tracking-widest max-w-fit shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-ping" />
              CONTRACT AVAILABILITY // Q3 2026
            </div>

            <div className="space-y-4 text-white/50 text-[10px] sm:text-xs font-mono tracking-widest select-all uppercase">
              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-3.5 hover:text-white transition-colors"
                >
                  <Mail className="h-4.5 w-4.5 text-gold-400 flex-shrink-0" />
                  {contactEmail}
                </a>
              )}
              {contactPhone && (
                <a
                  href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3.5 hover:text-white transition-colors"
                >
                  <Phone className="h-4.5 w-4.5 text-gold-400 flex-shrink-0" />
                  {contactPhone}
                </a>
              )}
              {contactAddress && (
                <div className="flex items-center gap-3.5 text-white/30 select-none">
                  <MapPin className="h-4.5 w-4.5 text-gold-400/60 flex-shrink-0" />
                  <span>{contactAddress}</span>
                </div>
              )}
              <div className="flex items-center gap-3.5 text-white/30 select-none">
                <Globe className="h-4.5 w-4.5 text-gold-400/60 flex-shrink-0" />
                <span>TIMEZONE: GMT+5:30 (IST)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Premium Project Scope Form */}
        <div className="lg:col-span-7 flex items-center" data-reveal="fade-left">
          <div className="w-full relative min-h-[400px] flex flex-col justify-center border border-white/5 bg-white/[0.01] backdrop-blur-md p-8 rounded-3xl shadow-2xl">
            {isSuccess ? (
              <div className="text-center space-y-4 py-10 animate-fadeIn select-none">
                <div className="inline-flex p-3.5 rounded-full border border-gold-400/20 bg-gold-400/5 text-gold-400 mx-auto shadow-md">
                  <CheckCircle2 className="h-10 w-10 text-gold-400 animate-bounce" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-heading">SPECIFICATIONS RECEIVED!</h3>
                <p className="text-xs sm:text-sm text-white/40 max-w-xs mx-auto leading-relaxed font-sans">
                  I will review your project scope details and reach out within 24 hours to schedule an architecture alignment call.
                </p>
                
                <Magnetic>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 border border-white/10 bg-white text-black hover:bg-gold-400 text-[9px] font-black uppercase tracking-widest rounded-full py-3.5 px-8 cursor-pointer transition-all duration-300"
                  >
                    Send another briefing
                  </button>
                </Magnetic>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                  {/* Name field */}
                  <div className="space-y-2.5">
                    <label htmlFor="name" className="text-[9px] font-bold text-white/50 uppercase tracking-widest font-mono">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full border-b py-3 text-xs sm:text-sm bg-transparent text-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors duration-300 ${
                        errors.name ? "border-red-500/50" : "border-white/10"
                      }`}
                      disabled={isPending}
                    />
                    {errors.name && <p className="text-[8px] font-mono uppercase text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2.5">
                    <label htmlFor="email" className="text-[9px] font-bold text-white/50 uppercase tracking-widest font-mono">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full border-b py-3 text-xs sm:text-sm bg-transparent text-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors duration-300 ${
                        errors.email ? "border-red-500/50" : "border-white/10"
                      }`}
                      disabled={isPending}
                    />
                    {errors.email && <p className="text-[8px] font-mono uppercase text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Service Type Selectors */}
                <div className="space-y-3.5 text-left">
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest font-mono block">Project Category *</span>
                  <div className="flex flex-wrap gap-2">
                    {["Full-Stack MERN", "Shopify Apps / Liquid", "Custom Integration", "Consultancy"].map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setService(srv)}
                        className={`px-4 py-2 border rounded-full text-[9px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                          service === srv
                            ? "bg-white text-black border-white shadow-md font-black"
                            : "bg-transparent text-white/40 border-white/5 hover:border-gold-400/20 hover:text-white"
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selectors */}
                <div className="space-y-3.5 text-left">
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest font-mono block">Estimated Budget *</span>
                  <div className="flex flex-wrap gap-2">
                    {["<$2k", "$2k - $5k", "$5k - $10k", "$10k+"].map((bdg) => (
                      <button
                        key={bdg}
                        type="button"
                        onClick={() => setBudget(bdg)}
                        className={`px-4 py-2 border rounded-full text-[9px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                          budget === bdg
                            ? "bg-white text-black border-white shadow-md font-black"
                            : "bg-transparent text-white/40 border-white/5 hover:border-gold-400/20 hover:text-white"
                        }`}
                      >
                        {bdg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2.5 text-left">
                  <label htmlFor="subject" className="text-[9px] font-bold text-white/50 uppercase tracking-widest font-mono">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Custom Embedded App Bridge integration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`w-full border-b py-3 text-xs sm:text-sm bg-transparent text-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors duration-300 ${
                      errors.subject ? "border-red-500/50" : "border-white/10"
                    }`}
                    disabled={isPending}
                  />
                  {errors.subject && <p className="text-[8px] font-mono uppercase text-red-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Message field */}
                <div className="space-y-2.5 text-left">
                  <label htmlFor="message" className="text-[9px] font-bold text-white/50 uppercase tracking-widest font-mono">Scope Details *</label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Describe the application features, timelines, or Shopify endpoints required..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full border-b py-3 text-xs sm:text-sm bg-transparent text-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors duration-300 resize-none ${
                      errors.message ? "border-red-500/50" : "border-white/10"
                    }`}
                    disabled={isPending}
                  />
                  {errors.message && <p className="text-[8px] font-mono uppercase text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full inline-flex items-center justify-center rounded-full bg-white hover:bg-gold-400 text-black py-4 text-[9px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-xl active:scale-98"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving specifications
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-3.5 w-3.5 text-black" />
                      Submit scope details
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
