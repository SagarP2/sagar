import { WebsiteSetting, SocialLink, AIWorkflowStep } from "@/types/portfolio";

export const settings: WebsiteSetting = {
  id: "global_settings",
  siteName: "Sagar Panchal | MERN Stack Developer & Shopify App Developer",
  name: "Sagar Panchal",
  eyebrow: "MERN STACK DEVELOPER / SHOPIFY APP DEVELOPER",
  headlineLine1: "I Build Digital Products.",
  headlineLine2: "From Idea to Production.",
  heroDescription:
    "I'm Sagar Panchal, a MERN Stack Developer and Shopify App Developer building modern web applications, custom Shopify solutions, and reliable digital products through engineering and AI-assisted development.",
  contactEmail: "panchalsagar992003@gmail.com",
  contactPhone: "+91 9638061952",
  contactAddress: "Bardoli, Gujarat, India",
  resumeUrl: "/Resume_Sagar_Panchal.pdf",
};

export const aiWorkflowSteps: AIWorkflowStep[] = [
  {
    number: "01",
    title: "Understand the problem.",
    detail:
      "Clarify user workflows, merchant constraints, data relationships, and edge cases before writing code.",
  },
  {
    number: "02",
    title: "Plan architecture.",
    detail:
      "Design database schemas, API routes, state boundaries, and component structure across the stack.",
  },
  {
    number: "03",
    title: "AI-assisted implementation.",
    detail:
      "Accelerate scaffolding, TypeScript interfaces, GraphQL queries, and UI implementation with AI tools.",
  },
  {
    number: "04",
    title: "Review generated code.",
    detail:
      "Inspect every module for logic accuracy, security, type safety, and maintainability—no blind copy-pasting.",
  },
  {
    number: "05",
    title: "Debug and test.",
    detail:
      "Validate inputs, resolve runtime edge cases, optimize database queries, and test responsive behavior.",
  },
  {
    number: "06",
    title: "Deliver working software.",
    detail:
      "Ship clean, production-ready builds with verified routes, reliable performance, and maintainable structure.",
  },
];

export const aiToolsList = [
  {
    name: "Cursor",
    purpose: "Multi-file TypeScript implementation & codebase-aware refactoring",
  },
  {
    name: "Codex",
    purpose: "Rapid prototyping, API logic drafting & query generation",
  },
  {
    name: "Antigravity",
    purpose: "Agentic system architecture, debugging & full-stack execution",
  },
] as const;

export const aboutContent = {
  headline: "Curious Mind. Engineering Mindset.",
  intro:
    "I'm a software developer with a B.Sc. in Information Technology and hands-on agency and internship experience building full-stack web applications and custom e-commerce tools.",
  paragraphs: [
    "My primary specialization is full-stack MERN development—architecting React and Next.js interfaces connected to Node.js, Express.js, and MongoDB/SQL backends. Alongside web applications, I focus heavily on custom Shopify app development: building embedded admin experiences with Shopify Polaris and App Bridge, integrating the Shopify Admin GraphQL API, creating Theme App Extensions, and handling background webhooks.",
    "I actively integrate AI-assisted development and vibe coding into my engineering workflow. Because I understand how applications work under the hood—from database schemas and authentication to API rate limits and UI state—I use AI tools to move faster from concept to working product while maintaining strict control over code quality and debugging.",
  ],
  focusAreas: [
    {
      label: "Background",
      value: "B.Sc. in Information Technology (BMIIT) · 1.5+ Years Production Experience",
    },
    {
      label: "MERN Specialization",
      value: "React, Next.js, TypeScript, Node.js, Express.js & MongoDB/PostgreSQL",
    },
    {
      label: "Shopify Focus",
      value: "Custom Embedded Apps, Admin GraphQL API, Polaris, App Bridge & Extensions",
    },
    {
      label: "Engineering Approach",
      value: "Practical architecture accelerated by Cursor, Codex & Antigravity",
    },
  ],
};

export const socialLinks: SocialLink[] = [
  {
    id: "social_github",
    platform: "GitHub",
    url: "https://github.com/SagarP2",
    label: "github.com/SagarP2",
  },
  {
    id: "social_linkedin",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/sagar-panchal-79284921a/",
    label: "linkedin.com/in/sagar-panchal",
  },
  {
    id: "social_email",
    platform: "Email",
    url: "mailto:panchalsagar992003@gmail.com",
    label: "panchalsagar992003@gmail.com",
  },
];
