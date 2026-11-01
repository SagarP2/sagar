import type { NavigationItem } from "@/types/portfolio";

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { label: "Home", href: "home" },
  { label: "Work", href: "work" },
  { label: "Expertise", href: "expertise" },
  { label: "Experience", href: "experience" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
] as const;

export const CONTACT_SERVICE_OPTIONS = [
  "MERN Stack Web App",
  "Custom Shopify App",
  "API & Backend Architecture",
  "Engineering Opportunity",
] as const;

export const CONTACT_BUDGET_OPTIONS = [
  "Project Build",
  "Full-Time / Contract",
  "Long-Term Collaboration",
] as const;

export const SOCIAL_URLS = {
  github: "https://github.com/SagarP2",
  linkedin: "https://www.linkedin.com/in/sagar-panchal-79284921a/",
  email: "panchalsagar992003@gmail.com",
} as const;

export const DEFAULT_HEADER_OFFSET = 72;
