import type { NavigationItem } from "@/types/portfolio";

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Shopify", href: "shopify" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
] as const;

export const CONTACT_SERVICE_OPTIONS = [
  "Full-Stack MERN",
  "Shopify Custom App",
  "API System Integration",
  "Liquid Theme Design",
] as const;

export const CONTACT_BUDGET_OPTIONS = [
  "<$5k",
  "$5k - $10k",
  "$10k - $25k",
  "$25k+",
] as const;

export const SOCIAL_URLS = {
  github: "https://github.com/SagarP2",
  linkedin: "https://www.linkedin.com/in/sagar-panchal-79284921a/",
  email: "panchalsagar992003@gmail.com",
} as const;

export const DEFAULT_HEADER_OFFSET = 72;

