"use client";

import React from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { WebsiteSetting } from "@/types/portfolio";
import {
  CONTACT_SERVICE_OPTIONS,
  CONTACT_BUDGET_OPTIONS,
  SOCIAL_URLS,
} from "@/constants/portfolio";
import { useContactForm } from "@/hooks/useContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialLinks";
import { Reveal } from "@/components/ui/Reveal";
import { WaveBackground } from "@/components/graphics/WaveBackground";

interface ContactProps {
  settings: WebsiteSetting;
}

export function Contact({ settings }: ContactProps) {
  const {
    formState,
    status,
    errorMessage,
    referenceId,
    updateField,
    handleSubmit,
    resetStatus,
  } = useContactForm();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 sm:py-28 border-b border-[#292D36] bg-[#1558C9] overflow-hidden"
    >
      {/* Haikei-inspired Layered Wave & Geometric Background */}
      <WaveBackground
        variant="cobalt"
        className="absolute inset-x-0 bottom-0 h-64 sm:h-80 w-full"
      />

      <div className="editorial-container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 5 Columns: Electric Cobalt Blue Editorial CTA & Direct Channels */}
          <Reveal
            direction="up"
            className="lg:col-span-5 space-y-8 text-left"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5">
                <span className="px-2.5 py-1 bg-[#030407] text-[#D4FF24] text-[11px] font-mono font-bold uppercase tracking-widest">
                  06
                </span>
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]">
                  Contact
                </span>
              </div>

              <h2
                id="contact-heading"
                className="font-heading font-bold text-[#F5F5F5] tracking-tight leading-[1.05]"
                style={{ fontSize: "clamp(2.2rem, 4vw + 0.5rem, 3.5rem)" }}
              >
                Have Something{" "}
                <span className="text-[#D4FF24]">Worth Building?</span>
              </h2>

              <p className="text-base sm:text-lg text-[#F5F5F5]/90 leading-relaxed">
                Let&apos;s turn your next idea into a useful digital product.
              </p>
            </div>

            {/* Direct Contact Channels (Email, GitHub, LinkedIn) */}
            <div className="space-y-3">
              <a
                href={`mailto:${settings.contactEmail}`}
                className="flex items-center justify-between p-4 bg-[#030407] border border-[#030407] hover:border-[#D4FF24] transition-colors group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 bg-[#101218] text-[#D4FF24] shrink-0">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#B4B8C3]">
                      Email
                    </p>
                    <p className="text-sm font-mono font-semibold text-[#F5F5F5] group-hover:text-[#D4FF24] truncate">
                      {settings.contactEmail}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-[#D4FF24] shrink-0"
                  aria-hidden="true"
                />
              </a>

              <a
                href={SOCIAL_URLS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#030407] border border-[#030407] hover:border-[#D4FF24] transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-[#101218] text-[#D4FF24]">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#B4B8C3]">
                      GitHub
                    </p>
                    <p className="text-sm font-mono font-semibold text-[#F5F5F5] group-hover:text-[#D4FF24]">
                      github.com/SagarP2
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-[#D4FF24]"
                  aria-hidden="true"
                />
              </a>

              <a
                href={SOCIAL_URLS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#030407] border border-[#030407] hover:border-[#D4FF24] transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-[#101218] text-[#D4FF24]">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#B4B8C3]">
                      LinkedIn
                    </p>
                    <p className="text-sm font-mono font-semibold text-[#F5F5F5] group-hover:text-[#D4FF24]">
                      linkedin.com/in/sagar-panchal
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-[#D4FF24]"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>

          {/* Right 7 Columns: Midnight Black Form Panel with Acid Lime CTA */}
          <Reveal
            direction="up"
            delay={0.12}
            className="lg:col-span-7 bg-[#030407] border border-[#292D36] p-6 sm:p-10 shadow-2xl"
          >
            {status === "success" ? (
              <div className="py-12 text-center space-y-5">
                <div className="inline-flex items-center justify-center p-4 bg-[#101218] border border-[#D4FF24] text-[#D4FF24]">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#F5F5F5]">
                  Message Received
                </h3>
                <p className="text-sm text-[#B4B8C3] max-w-md mx-auto">
                  Thank you for reaching out. I will review your inquiry and get back to you shortly.
                </p>
                {referenceId && (
                  <p className="text-xs font-mono text-[#D4FF24]">
                    Reference ID: {referenceId}
                  </p>
                )}
                <button
                  type="button"
                  onClick={resetStatus}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#D4FF24] text-[#030407] font-mono text-xs font-bold uppercase tracking-widest cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="flex items-center justify-between pb-4 border-b border-[#292D36]">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-[#F5F5F5]">
                    Send a Project or Engineering Inquiry
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4FF24]">
                    DIRECT INBOX
                  </span>
                </div>

                {status === "error" && errorMessage && (
                  <div
                    role="alert"
                    className="p-4 bg-[#101218] border border-[#D4FF24] flex items-start gap-3 text-xs font-mono text-[#F5F5F5]"
                  >
                    <AlertCircle
                      className="h-4 w-4 text-[#D4FF24] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#B4B8C3]"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Sagar Panchal"
                      className="w-full px-4 py-3 bg-[#101218] border border-[#292D36] text-sm text-[#F5F5F5] placeholder:text-[#B4B8C3]/50 focus:border-[#D4FF24]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#B4B8C3]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-[#101218] border border-[#292D36] text-sm text-[#F5F5F5] placeholder:text-[#B4B8C3]/50 focus:border-[#D4FF24]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#B4B8C3]">
                    What Are We Building?
                  </span>
                  <div className="grid grid-cols-2 gap-2.5">
                    {CONTACT_SERVICE_OPTIONS.map((service) => {
                      const isSelected = formState.service === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => updateField("service", service)}
                          className={`px-3.5 py-2.5 text-left text-xs font-mono transition-colors cursor-pointer border ${
                            isSelected
                              ? "bg-[#D4FF24] text-[#030407] border-[#D4FF24] font-bold"
                              : "bg-[#101218] text-[#B4B8C3] border-[#292D36] hover:text-[#F5F5F5]"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#B4B8C3]">
                    Engagement Type
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {CONTACT_BUDGET_OPTIONS.map((budget) => {
                      const isSelected = formState.budget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => updateField("budget", budget)}
                          className={`px-3.5 py-2 text-center text-xs font-mono transition-colors cursor-pointer border ${
                            isSelected
                              ? "bg-[#1558C9] text-[#F5F5F5] border-[#1558C9] font-semibold"
                              : "bg-[#101218] text-[#B4B8C3] border-[#292D36] hover:text-[#F5F5F5]"
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#B4B8C3]"
                  >
                    Project or Role Details *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Share a brief overview of your web app, Shopify app requirements, or engineering role..."
                    className="w-full px-4 py-3 bg-[#101218] border border-[#292D36] text-sm text-[#F5F5F5] placeholder:text-[#B4B8C3]/50 focus:border-[#D4FF24] resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#D4FF24] text-[#030407] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#F5F5F5] transition-colors cursor-pointer disabled:opacity-60"
                >
                  <span>
                    {status === "submitting"
                      ? "Sending Message..."
                      : "Send Message"}
                  </span>
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
