import { ExpertiseArea } from "@/types/portfolio";

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "fullstack-development",
    number: "01",
    title: "Full-Stack Development",
    subtitle: "Web Applications & REST API Architecture",
    description:
      "End-to-end web applications built with modular React and Next.js frontends, typed TypeScript modules, and structured Node.js and Express.js API services.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
    deliverables: [
      "Component-driven React & Next.js interfaces",
      "REST API controllers, middleware & Zod validation",
      "JWT authentication & role-based access control",
    ],
    accent: "dark",
  },
  {
    id: "shopify-app-development",
    number: "02",
    title: "Shopify App Development",
    subtitle: "Embedded Admin Apps & Storefront Extensions",
    description:
      "Custom Shopify applications that extend merchant admin workflows and storefront capabilities using official Shopify APIs, embedded UI frameworks, and app blocks.",
    technologies: [
      "Shopify Admin API",
      "GraphQL",
      "Shopify Polaris",
      "App Bridge",
      "Theme App Extensions",
    ],
    deliverables: [
      "Embedded merchant dashboards with Polaris & App Bridge",
      "Admin GraphQL queries, mutations & metafield syncing",
      "Online Store 2.0 Theme App Extensions & Liquid blocks",
    ],
    accent: "cobalt",
  },
  {
    id: "backend-and-infrastructure",
    number: "03",
    title: "Backend & Infrastructure",
    subtitle: "Persistence, ORMs, Caching & Job Queues",
    description:
      "Document and relational database modeling, type-safe ORM queries, Redis caching, and asynchronous BullMQ workers for reliable webhook and background processing.",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Prisma ORM",
      "Redis",
      "BullMQ",
    ],
    deliverables: [
      "Relational & document schema design (Prisma ORM, MongoDB, SQL)",
      "Async webhook ingestion & background queues with BullMQ",
      "Redis caching layers & cloud storage integration",
    ],
    accent: "dark",
  },
];
