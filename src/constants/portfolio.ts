import type { NavigationItem } from "@/types/portfolio";

export const DEFAULT_HEADER_OFFSET = 72;

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { label: "Home", href: "home" },
  { label: "Projects", href: "projects" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Shopify", href: "shopify" },
  { label: "Experience", href: "experience" },
  { label: "Approach", href: "approach" },
  { label: "Contact", href: "contact" },
] as const;

export const CONTACT_SERVICE_OPTIONS = [
  "Full-Stack MERN",
  "Shopify Custom App",
  "API System Integration",
  "Liquid Theme Design",
] as const;

export const SOCIAL_URLS = {
  github: "https://github.com/SagarP2",
  linkedin: "https://www.linkedin.com/in/sagar-panchal-79284921a/",
} as const;
