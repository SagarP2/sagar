import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { SOCIAL_URLS } from "@/constants/portfolio";
import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface SocialLinksProps {
  variant?: "inline" | "buttons" | "compact";
  includeEmail?: boolean;
  className?: string;
}

export function SocialLinks({
  variant = "inline",
  includeEmail = false,
  className,
}: SocialLinksProps) {
  const items = [
    {
      label: "GitHub",
      href: SOCIAL_URLS.github,
      icon: GithubIcon,
      external: true,
    },
    {
      label: "LinkedIn",
      href: SOCIAL_URLS.linkedin,
      icon: LinkedinIcon,
      external: true,
    },
    ...(includeEmail
      ? [
          {
            label: "Email",
            href: `mailto:${SOCIAL_URLS.email}`,
            icon: Mail,
            external: false,
          },
        ]
      : []),
  ];

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-2.5", className)}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={`Sagar Panchal on ${item.label}`}
              className="p-2.5 bg-[#101218] border border-[#292D36] text-[#B4B8C3] hover:text-[#030407] hover:bg-[#D4FF24] hover:border-[#D4FF24] transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === "buttons") {
    return (
      <div className={cn("flex flex-wrap items-center gap-3", className)}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#101218] border border-[#292D36] text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F5F5] hover:border-[#D4FF24] hover:text-[#D4FF24] transition-colors"
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#B4B8C3]" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-5", className)}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#D4FF24] transition-colors group"
          >
            <Icon className="h-4 w-4 text-[#B4B8C3] group-hover:text-[#D4FF24] transition-colors" />
            <span>{item.label}</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 text-[#B4B8C3] group-hover:text-[#D4FF24] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
          </a>
        );
      })}
    </div>
  );
}

