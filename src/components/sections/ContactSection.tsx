"use client";

import React, { useState, useTransition } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Loader2, Phone, Send, ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  CONTACT_BUDGET_OPTIONS,
  CONTACT_SERVICE_OPTIONS,
  SOCIAL_URLS,
} from "@/constants/portfolio";
import { contactFormSchema } from "@/lib/validations/contact";
import { ContactApiResponse } from "@/types/portfolio";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/shared/SocialIcons";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  contactEmail: string | null;
  contactPhone: string | null;
  contactAddress: string | null;
}

export function ContactSection({
  contactEmail,
  contactPhone,
  contactAddress,
}: ContactSectionProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState<string>(CONTACT_BUDGET_OPTIONS[1]);
  const [service, setService] = useState<string>(CONTACT_SERVICE_OPTIONS[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsSuccess(false);

    const validation = contactFormSchema.safeParse({
      name,
      email,
      subject,
      service,
      budget,
      message,
    });

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const path = String(issue.path[0] ?? "");
        if (path) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      toast.error("Please review the highlighted fields.");
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validation.data),
        });

        const data = (await response.json()) as ContactApiResponse;

        if (!response.ok || !data.success) {
          if (!data.success && data.errors) {
            const serverErrors: Record<string, string> = {};
            for (const [key, value] of Object.entries(data.errors)) {
              if (value) serverErrors[key] = value;
            }
            setErrors(serverErrors);
          }
          toast.error(data.message || "An error occurred while sending your message.");
          return;
        }

        toast.success(data.message || "Your message has been sent!");
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
    <section
      id="contact"
      data-section
      className="relative py-20 sm:py-28 bg-[#F7F5F0]"
    >
      <div className="editorial-container px-5 sm:px-8">
        {/* Signature Editorial Contact Wrapper with Deep Burgundy Visual Accent */}
        <div className="rounded-2xl overflow-hidden border border-[#D8D4CA] shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Deep Burgundy Editorial Contact Panel (5 cols) */}
          <div className="lg:col-span-5 bg-[#590907] text-[#F7F5F0] p-8 sm:p-11 flex flex-col justify-between space-y-10 text-left">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#E8D2B5]">
                <span>08</span>
                <span className="text-[#A5A79B]">/</span>
                <span>Contact</span>
              </div>

              <h2
                className="font-heading font-bold tracking-tight text-[#F7F5F0] leading-[1.12]"
                style={{ fontSize: "clamp(1.85rem, 3vw, 2.65rem)" }}
              >
                Let&apos;s build something dependable together.
              </h2>

              <p className="text-sm sm:text-base text-[#E8D2B5]/90 leading-relaxed">
                Available for full-stack MERN development, custom Shopify app engineering, API
                integrations, and collaborative product builds.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-4">
              {contactEmail && (
                <div className="p-4 rounded-lg bg-[#3D0605] border border-[#E8D2B5]/20 flex items-start gap-3.5">
                  <Mail className="h-5 w-5 text-[#E8D2B5] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A5A79B] block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-sm font-semibold text-[#F7F5F0] hover:text-[#E8D2B5] transition-colors break-all"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>
              )}

              {contactPhone && (
                <div className="p-4 rounded-lg bg-[#3D0605] border border-[#E8D2B5]/20 flex items-start gap-3.5">
                  <Phone className="h-5 w-5 text-[#E8D2B5] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A5A79B] block">
                      Phone
                    </span>
                    <a
                      href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                      className="text-sm font-semibold text-[#F7F5F0] hover:text-[#E8D2B5] transition-colors"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>
              )}

              {contactAddress && (
                <div className="p-4 rounded-lg bg-[#3D0605] border border-[#E8D2B5]/20 flex items-start gap-3.5">
                  <MapPin className="h-5 w-5 text-[#E8D2B5] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A5A79B] block">
                      Location
                    </span>
                    <span className="text-sm font-medium text-[#F7F5F0]">
                      {contactAddress}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Social Profiles in Cream Beige & Sage Grey */}
            <div className="pt-6 border-t border-[#E8D2B5]/20 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#A5A79B] block">
                Professional Profiles
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SOCIAL_URLS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#E8D2B5] text-[#252522] text-xs font-semibold uppercase tracking-wider hover:bg-[#F7F5F0] transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <a
                  href={SOCIAL_URLS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#A5A79B] text-[#252522] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8D2B5] transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Editorial Contact Form on White/Cream Surface (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] p-8 sm:p-11 text-left">
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div className="border-b border-[#D8D4CA] pb-4">
                <h3 className="font-heading font-bold text-xl text-[#252522]">
                  Send a Project Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#66665F] mt-1">
                  Share a few details about your project scope, timeline, or role opportunity.
                </p>
              </div>

              {isSuccess && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-4 rounded-lg bg-[#E8D2B5]/60 border border-[#590907]/30 flex items-center gap-3 text-sm font-medium text-[#252522]"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#590907] shrink-0" aria-hidden="true" />
                  <span>
                    Thank you! Your message has been received. I&apos;ll get back to you shortly.
                  </span>
                </div>
              )}

              {/* Service Scope Pills */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-semibold text-[#252522] uppercase tracking-wider block">
                  Project Scope
                </label>
                <div className="flex flex-wrap gap-2">
                  {CONTACT_SERVICE_OPTIONS.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setService(srv)}
                      aria-pressed={service === srv}
                      className={cn(
                        "px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer",
                        service === srv
                          ? "bg-[#590907] text-[#F7F5F0]"
                          : "bg-[#EEEAE2] border border-[#D8D4CA] text-[#66665F] hover:text-[#252522]"
                      )}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Budget Pills */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-semibold text-[#252522] uppercase tracking-wider block">
                  Estimated Budget (Optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {CONTACT_BUDGET_OPTIONS.map((bdg) => (
                    <button
                      type="button"
                      key={bdg}
                      onClick={() => setBudget(bdg)}
                      aria-pressed={budget === bdg}
                      className={cn(
                        "px-3.5 py-1.5 rounded-md text-xs font-mono font-medium transition-colors cursor-pointer",
                        budget === bdg
                          ? "bg-[#E8D2B5] text-[#590907] border border-[#590907]/40 font-semibold"
                          : "bg-[#EEEAE2] border border-[#D8D4CA] text-[#66665F] hover:text-[#252522]"
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
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono font-semibold text-[#252522] uppercase tracking-wider block"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sagar Panchal"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className="w-full px-4 py-3 rounded-md bg-[#F7F5F0] border border-[#D8D4CA] text-sm text-[#252522] placeholder-[#66665F]/60 focus:border-[#590907] focus:bg-[#FFFFFF] transition-colors"
                  />
                  {errors.name && (
                    <span
                      id="contact-name-error"
                      role="alert"
                      className="text-xs text-[#590907] font-medium block"
                    >
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-mono font-semibold text-[#252522] uppercase tracking-wider block"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className="w-full px-4 py-3 rounded-md bg-[#F7F5F0] border border-[#D8D4CA] text-sm text-[#252522] placeholder-[#66665F]/60 focus:border-[#590907] focus:bg-[#FFFFFF] transition-colors"
                  />
                  {errors.email && (
                    <span
                      id="contact-email-error"
                      role="alert"
                      className="text-xs text-[#590907] font-medium block"
                    >
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-mono font-semibold text-[#252522] uppercase tracking-wider block"
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Custom Shopify Application / MERN Web Platform"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  className="w-full px-4 py-3 rounded-md bg-[#F7F5F0] border border-[#D8D4CA] text-sm text-[#252522] placeholder-[#66665F]/60 focus:border-[#590907] focus:bg-[#FFFFFF] transition-colors"
                />
                {errors.subject && (
                  <span
                    id="contact-subject-error"
                    role="alert"
                    className="text-xs text-[#590907] font-medium block"
                  >
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-mono font-semibold text-[#252522] uppercase tracking-wider block"
                >
                  Project Details *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the goals, technical requirements, and timeline..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className="w-full px-4 py-3 rounded-md bg-[#F7F5F0] border border-[#D8D4CA] text-sm text-[#252522] placeholder-[#66665F]/60 focus:border-[#590907] focus:bg-[#FFFFFF] transition-colors resize-none"
                />
                {errors.message && (
                  <span
                    id="contact-message-error"
                    role="alert"
                    className="text-xs text-[#590907] font-medium block"
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#590907] text-[#F7F5F0] font-semibold text-xs uppercase tracking-widest hover:bg-[#3D0605] disabled:opacity-60 transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
