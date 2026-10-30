"use client";

import React, { useState, useTransition } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Loader2, Phone, Send, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CONTACT_SERVICE_OPTIONS, SOCIAL_URLS } from "@/constants/portfolio";
import { contactFormSchema } from "@/lib/validations/contact";
import type { ContactApiResponse } from "@/types/portfolio";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./social-icons";
import { cn } from "@/lib/utils";

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
            setErrors(data.errors);
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
      className="relative py-20 sm:py-24 bg-[#F7F5F0]"
    >
      <div className="editorial-container px-5 sm:px-8">
        {/* Dominant Deep Burgundy CTA & Contact Bento Container */}
        <div className="rounded-2xl overflow-hidden border border-[#DAD8D0] bg-[#590907] grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Deep Burgundy Dominant CTA Panel with Cream Typography & Sage Details (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-11 flex flex-col justify-between space-y-10 text-left text-[#F7F5F0]">
            <div className="space-y-4">
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#E8D2B5]">
                08 • Contact
              </p>

              <h2
                className="font-heading font-bold tracking-tight text-[#E8D2B5] leading-[1.1]"
                style={{ fontSize: "clamp(1.95rem, 3vw, 2.75rem)" }}
              >
                Have an Idea Worth Building?
              </h2>

              <p className="text-sm sm:text-base text-[#F7F5F0]/90 leading-relaxed">
                Let&apos;s turn your next idea into a reliable, thoughtfully designed digital
                product.
              </p>

              {contactEmail && (
                <div className="pt-2">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#E8D2B5] text-[#24231F] font-semibold text-xs hover:bg-[#FFFFFF] transition-colors"
                  >
                    <Mail className="h-4 w-4 text-[#590907]" aria-hidden="true" />
                    <span>Email Me Directly</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#590907]" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>

            {/* Verified Contact Details */}
            <div className="space-y-3.5">
              {contactEmail && (
                <div className="p-4 rounded-xl bg-[#3D0605] border border-[#A5A79B]/25 flex items-start gap-3.5">
                  <Mail className="h-4 w-4 text-[#E8D2B5] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A5A79B] block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-sm font-semibold text-[#E8D2B5] hover:text-[#FFFFFF] transition-colors break-all"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>
              )}

              {contactPhone && (
                <div className="p-4 rounded-xl bg-[#3D0605] border border-[#A5A79B]/25 flex items-start gap-3.5">
                  <Phone className="h-4 w-4 text-[#E8D2B5] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A5A79B] block">
                      Phone
                    </span>
                    <a
                      href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                      className="text-sm font-semibold text-[#E8D2B5] hover:text-[#FFFFFF] transition-colors"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>
              )}

              {contactAddress && (
                <div className="p-4 rounded-xl bg-[#3D0605] border border-[#A5A79B]/25 flex items-start gap-3.5">
                  <MapPin className="h-4 w-4 text-[#E8D2B5] shrink-0 mt-0.5" aria-hidden="true" />
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

            {/* Social Links in Cream & Sage */}
            <div className="pt-5 border-t border-[#A5A79B]/25 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#A5A79B] block">
                Connect Online
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SOCIAL_URLS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E8D2B5] text-[#24231F] text-xs font-semibold hover:bg-[#FFFFFF] transition-colors"
                >
                  <Github className="h-4 w-4 text-[#590907]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <a
                  href={SOCIAL_URLS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#A5A79B] text-[#24231F] text-xs font-semibold hover:bg-[#E8D2B5] transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-[#24231F]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form on Clean White Surface (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] p-8 sm:p-11 text-left border-t lg:border-t-0 lg:border-l border-[#DAD8D0]">
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="border-b border-[#DAD8D0] pb-4">
                <h3 className="font-heading font-bold text-xl text-[#24231F]">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-[#68665F] mt-1">
                  Share details about your web application, Shopify project, or engineering role.
                </p>
              </div>

              {isSuccess && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-4 rounded-lg bg-[#E8D2B5]/65 border border-[#590907]/30 flex items-center gap-3 text-sm font-medium text-[#24231F]"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#590907] shrink-0" aria-hidden="true" />
                  <span>
                    Thank you! Your message has been sent. I&apos;ll respond shortly.
                  </span>
                </div>
              )}

              {/* Project Scope Selector */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-semibold text-[#24231F] uppercase tracking-wider block">
                  Area of Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {CONTACT_SERVICE_OPTIONS.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setService(srv)}
                      aria-pressed={service === srv}
                      className={cn(
                        "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer",
                        service === srv
                          ? "bg-[#590907] text-[#F7F5F0]"
                          : "bg-[#F7F5F0] border border-[#DAD8D0] text-[#68665F] hover:text-[#24231F]"
                      )}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono font-semibold text-[#24231F] uppercase tracking-wider block"
                  >
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className="w-full px-4 py-3 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0] text-sm text-[#24231F] placeholder-[#68665F]/60 focus:border-[#590907] focus:bg-[#FFFFFF] transition-colors"
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
                    className="text-xs font-mono font-semibold text-[#24231F] uppercase tracking-wider block"
                  >
                    Email *
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
                    className="w-full px-4 py-3 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0] text-sm text-[#24231F] placeholder-[#68665F]/60 focus:border-[#590907] focus:bg-[#FFFFFF] transition-colors"
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
                  className="text-xs font-mono font-semibold text-[#24231F] uppercase tracking-wider block"
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project inquiry or collaboration"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0] text-sm text-[#24231F] placeholder-[#68665F]/60 focus:border-[#590907] focus:bg-[#FFFFFF] transition-colors"
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
                  className="text-xs font-mono font-semibold text-[#24231F] uppercase tracking-wider block"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about what you're building..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-[#F7F5F0] border border-[#DAD8D0] text-sm text-[#24231F] placeholder-[#68665F]/60 focus:border-[#590907] focus:bg-[#FFFFFF] transition-colors resize-none"
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
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#590907] text-[#F7F5F0] font-semibold text-xs sm:text-sm hover:bg-[#3D0605] disabled:opacity-60 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    <span>Sending Message...</span>
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
