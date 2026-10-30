import { Service, Testimonial } from "@/types/portfolio";

export const services: Service[] = [
  {
    id: "service_mern",
    title: "Full-Stack MERN Development",
    description:
      "Architecting secure, scalable node microservices, complex React dashboards, and custom MERN stack systems.",
    mainDescription:
      "I specialize in building full-stack web architectures from database modeling to responsive frontend layouts. Using React, Next.js, Node.js, Express, and MongoDB/SQL database engines, I create robust APIs and interfaces optimized for performance and security.",
    icon: "Browser",
    orderIndex: 1,
    subServices: [
      {
        id: "sub_mern_apps",
        serviceId: "service_mern",
        subTitle: "Custom MERN Applications",
        subDescription:
          "Simple yet elegant web solutions and highly interactive dashboards tailored to your specific business processes.",
        imageMediaId: null,
        highlights: [
          "Fast loading speeds, ensuring improved user engagement and SEO",
          "Component-driven architecture for scalable and reusable codebases",
          "Thorough client-side validations and custom UI states",
        ],
        subDetails:
          "Custom MERN applications are perfect for startups and enterprises seeking robust platforms built on React and Node.js without legacy bloat.",
      },
      {
        id: "sub_mern_apis",
        serviceId: "service_mern",
        subTitle: "REST & GraphQL APIs",
        subDescription:
          "Designing and deploying high-performance database endpoints, JWT authentication layers, and secure middleware.",
        imageMediaId: null,
        highlights: [
          "Comprehensive request validations and clean error handlers",
          "Scalable SQL/NoSQL query optimization to minimize latency",
          "Stateless JWT-based session security and role audits",
        ],
        subDetails:
          "I build secure, clean API integrations that serve as a reliable bridge between your databases and frontend layers.",
      },
      {
        id: "sub_mern_databases",
        serviceId: "service_mern",
        subTitle: "Database Design & Dashboards",
        subDescription:
          "Structuring clean database schemas, collection index configurations, and administrative dashboard panels.",
        imageMediaId: null,
        highlights: [
          "Optimized query structures and database indexing strategies",
          "Interactive dashboard reporting widgets with real-time stats",
          "Automated server backups and data sanitization routines",
        ],
        subDetails:
          "I configure secure, well-structured database systems using MongoDB and PostgreSQL, integrated with clean admin panels.",
      },
    ],
  },
  {
    id: "service_shopify",
    title: "Shopify Commerce Engineering",
    description:
      "Building custom Shopify embedded applications, admin extension plugins, and high-speed theme templates.",
    mainDescription:
      "I engineer custom commerce integrations using the Shopify framework. From building Node.js/React embedded applications that connect to the Shopify Admin GraphQL API, to custom storefront theme customization with Liquid, I help merchant brands expand their capabilities.",
    icon: "ShoppingBag",
    orderIndex: 2,
    subServices: [
      {
        id: "sub_shopify_apps",
        serviceId: "service_shopify",
        subTitle: "Shopify App Development",
        subDescription:
          "Engineering robust embedded admin applications utilizing Shopify CLI, App Bridge, and custom Node/React modules.",
        imageMediaId: null,
        highlights: [
          "Seamless OAuth 2.0 security loops and App Bridge v4 alignments",
          "Webhook event listeners with automated database state syncing",
          "Stateless API designs following Shopify guidelines",
        ],
        subDetails:
          "I build custom Shopify apps that extend admin dashboards, manage merchant webhooks, and automate complex store operations.",
      },
      {
        id: "sub_shopify_apis",
        serviceId: "service_shopify",
        subTitle: "Admin & Storefront APIs",
        subDescription:
          "Integrating GraphQL and REST APIs to synchronize inventory status, process cart checkout events, and hook up external systems.",
        imageMediaId: null,
        highlights: [
          "Optimized GraphQL query loads to stay within API rate quotas",
          "Secure synchronizations with external ERPs or payment gates",
          "Real-time webhook queue architectures to prevent request loss",
        ],
        subDetails:
          "Using Shopify's Admin GraphQL APIs, I design robust synchronization hooks between the store environment and custom backend databases.",
      },
      {
        id: "sub_shopify_liquid",
        serviceId: "service_shopify",
        subTitle: "Theme Customization & Liquid",
        subDescription:
          "Implementing bespoke storefront layout edits, custom product template sections, and theme performance sweeps.",
        imageMediaId: null,
        highlights: [
          "Custom theme components utilizing clean Shopify Liquid & JS",
          "Mobile-first responsive optimization and fast load audits",
          "Minimal application app scripts to maximize Lighthouse scores",
        ],
        subDetails:
          "I customize Shopify themes to deliver high-converting design blueprints that align exactly with brand visual identities.",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "cmq28ooq7002ajsznim0il6ou",
    clientName: "Priyanshu Patel",
    company: "RabbitCode Agency",
    role: "Lead Developer",
    content:
      "Sagar is a highly dedicated developer who picks up new concepts incredibly fast. His work on Rabbit Case and our portfolio layouts was stellar. He manages both front-end animations and back-end database schemas with extreme ease.",
    avatarUrl: null,
    rating: 5,
    orderIndex: 1,
  },
  {
    id: "cmq28ooui002bjsznk3vp9d1y",
    clientName: "TackVeda Team",
    company: "TackVeda Solutions",
    role: "E-Commerce Director",
    content:
      "Working with Sagar on our company showcase was a breeze. He structured our dynamic database queries and managed dynamic content templates perfectly. Highly recommended for full-stack react development.",
    avatarUrl: null,
    rating: 5,
    orderIndex: 2,
  },
];

