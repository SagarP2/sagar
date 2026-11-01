import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "proj-track-my-spend",
    title: "Track My Spend",
    slug: "track-my-spend",
    category: "MERN Stack · Personal Finance Web App",
    featured: true,
    problemStatement:
      "Manual spreadsheets make it tedious to categorize daily expenses, track multiple income streams, and understand real-time spending habits.",
    whatIBuilt:
      "A full-stack personal finance platform built with Next.js, React, Node.js, and MongoDB that centralizes income and expense tracking into an interactive visual dashboard.",
    importantFunctionality: [
      "Category-based daily expense logging and multi-source income tracking",
      "Real-time financial dashboard with spending breakdowns and summaries",
      "Responsive layout optimized for quick mobile entry and desktop review",
    ],
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    githubUrl: null,
    liveUrl: "https://track-my-spend-zeta.vercel.app/",
    orderIndex: 5,
    mediaList: [
      {
        id: "media_track_my_spend",
        projectId: "proj-track-my-spend",
        isCover: true,
        orderIndex: 1,
        media: {
          id: "media_track_my_spend_inner",
          url: "/track-my-spend.png",
          filename: "track-my-spend.png",
          fileType: "image/png",
        },
      },
      {
        id: "media_track_my_spend_1",
        projectId: "proj-track-my-spend",
        isCover: false,
        orderIndex: 2,
        media: {
          id: "media_track_my_spend_1_inner",
          url: "/track-my-spend-1.png",
          filename: "track-my-spend-1.png",
          fileType: "image/png",
        },
      },
      {
        id: "media_track_my_spend_2",
        projectId: "proj-track-my-spend",
        isCover: false,
        orderIndex: 3,
        media: {
          id: "media_track_my_spend_2_inner",
          url: "/track-my-spend-2.png",
          filename: "track-my-spend-2.png",
          fileType: "image/png",
        },
      },
      {
        id: "media_track_my_spend_3",
        projectId: "proj-track-my-spend",
        isCover: false,
        orderIndex: 4,
        media: {
          id: "media_track_my_spend_3_inner",
          url: "/track-my-spend-3.png",
          filename: "track-my-spend-3.png",
          fileType: "image/png",
        },
      },
    ],
  },
  {
    id: "proj-rabbit-case",
    title: "Rabbit Case",
    slug: "rabbit-case",
    category: "MERN Stack · Case & Workflow Management",
    problemStatement:
      "Teams handling multi-stage client and legal cases lose visibility when status updates and case notes are scattered across disconnected tools.",
    whatIBuilt:
      "A collaborative MERN stack case management application using React, Redux, Express.js, and MongoDB to track case lifecycles, status transitions, and team updates.",
    importantFunctionality: [
      "Case creation, assignment, and structured status progression",
      "Centralized Redux state management for instant filtering",
      "Real-time team collaboration views and activity tracking",
    ],
    techStack: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/SagarP2/rabbit-case",
    liveUrl: "https://rabbitcase-g3ck0nomk-priyanshupatel1253-gmailcoms-projects.vercel.app/",
    orderIndex: 4,
    mediaList: [
      {
        id: "media_rabbit_case",
        projectId: "proj-rabbit-case",
        isCover: true,
        orderIndex: 1,
        media: {
          id: "media_rabbit_case_inner",
          url: "/rabbit-case.png",
          filename: "rabbit-case.png",
          fileType: "image/png",
        },
      },
      {
        id: "media_rabbit_case_1",
        projectId: "proj-rabbit-case",
        isCover: false,
        orderIndex: 2,
        media: {
          id: "media_rabbit_case_1_inner",
          url: "/rabbit-case-1.jpg",
          filename: "rabbit-case-1.jpg",
          fileType: "image/jpeg",
        },
      },
      {
        id: "media_rabbit_case_2",
        projectId: "proj-rabbit-case",
        isCover: false,
        orderIndex: 3,
        media: {
          id: "media_rabbit_case_2_inner",
          url: "/rabbit-case-2.jpg",
          filename: "rabbit-case-2.jpg",
          fileType: "image/jpeg",
        },
      },
      {
        id: "media_rabbit_case_3",
        projectId: "proj-rabbit-case",
        isCover: false,
        orderIndex: 4,
        media: {
          id: "media_rabbit_case_3_inner",
          url: "/rabbit-case-3.jpg",
          filename: "rabbit-case-3.jpg",
          fileType: "image/jpeg",
        },
      },
    ],
  },
  {
    id: "proj-rabbitcode-portfolio",
    title: "RabbitCode Portfolio",
    slug: "rabbitcode-portfolio",
    category: "MERN Stack & Cloud · Dynamic Platform",
    problemStatement:
      "Hardcoded portfolio websites require manual code edits and redeployments every time a new project or media asset is added.",
    whatIBuilt:
      "A dynamic MERN stack showcase platform integrated with AWS S3 cloud storage for managing projects, media assets, and work history through a structured backend.",
    importantFunctionality: [
      "Dynamic project CRUD operations backed by MongoDB and Express.js",
      "Cloud asset storage and retrieval via AWS S3 integration",
      "Responsive showcase interface built with React and Tailwind CSS",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS S3"],
    githubUrl: "https://github.com/SagarP2/rabbitcode-portfolio",
    liveUrl: "https://rabbitcodeportfolio.vercel.app/",
    orderIndex: 3,
    mediaList: [
      {
        id: "media_rabbitcode_portfolio",
        projectId: "proj-rabbitcode-portfolio",
        isCover: true,
        orderIndex: 1,
        media: {
          id: "media_rabbitcode_portfolio_inner",
          url: "/rabbitcode-portfolio.png",
          filename: "rabbitcode-portfolio.png",
          fileType: "image/png",
        },
      },
      {
        id: "media_rabbitcode_portfolio_1",
        projectId: "proj-rabbitcode-portfolio",
        isCover: false,
        orderIndex: 2,
        media: {
          id: "media_rabbitcode_portfolio_1_inner",
          url: "/rabbitcode-portfolio-1.jpg",
          filename: "rabbitcode-portfolio-1.jpg",
          fileType: "image/jpeg",
        },
      },
      {
        id: "media_rabbitcode_portfolio_2",
        projectId: "proj-rabbitcode-portfolio",
        isCover: false,
        orderIndex: 3,
        media: {
          id: "media_rabbitcode_portfolio_2_inner",
          url: "/rabbitcode-portfolio-2.jpg",
          filename: "rabbitcode-portfolio-2.jpg",
          fileType: "image/jpeg",
        },
      },
      {
        id: "media_rabbitcode_portfolio_3",
        projectId: "proj-rabbitcode-portfolio",
        isCover: false,
        orderIndex: 4,
        media: {
          id: "media_rabbitcode_portfolio_3_inner",
          url: "/rabbitcode-portfolio-3.jpg",
          filename: "rabbitcode-portfolio-3.jpg",
          fileType: "image/jpeg",
        },
      },
    ],
  },
  {
    id: "proj-pdf-edit-tool",
    title: "PDF Edit Tool",
    slug: "pdf-edit-tool",
    category: "Full-Stack Utility · Browser PDF Engine",
    problemStatement:
      "Modifying PDF text, adding annotations, or merging and splitting documents usually requires installing heavy desktop software.",
    whatIBuilt:
      "A browser-based PDF editing application built with React, Node.js, and PDF.js for interactive canvas rendering, text modification, and document assembly.",
    importantFunctionality: [
      "Direct in-browser PDF text editing and annotation layering",
      "Multi-file PDF merging and page-range splitting",
      "Instant client-side preview and document export",
    ],
    techStack: ["React.js", "Node.js", "PDF.js", "JavaScript"],
    githubUrl: "https://github.com/SagarP2/pdf-edit-tool",
    liveUrl: "https://edit-pdf-tools.vercel.app/",
    orderIndex: 2,
    mediaList: [
      {
        id: "media_pdf_edit_tool",
        projectId: "proj-pdf-edit-tool",
        isCover: true,
        orderIndex: 1,
        media: {
          id: "media_pdf_edit_tool_inner",
          url: "/pdf-edit-tool.png",
          filename: "pdf-edit-tool.png",
          fileType: "image/png",
        },
      },
      {
        id: "media_pdf_edit_tool_1",
        projectId: "proj-pdf-edit-tool",
        isCover: false,
        orderIndex: 2,
        media: {
          id: "media_pdf_edit_tool_1_inner",
          url: "/pdf-edit-tool-1.jpg",
          filename: "pdf-edit-tool-1.jpg",
          fileType: "image/jpeg",
        },
      },
      {
        id: "media_pdf_edit_tool_2",
        projectId: "proj-pdf-edit-tool",
        isCover: false,
        orderIndex: 3,
        media: {
          id: "media_pdf_edit_tool_2_inner",
          url: "/pdf-edit-tool-2.jpg",
          filename: "pdf-edit-tool-2.jpg",
          fileType: "image/jpeg",
        },
      },
      {
        id: "media_pdf_edit_tool_3",
        projectId: "proj-pdf-edit-tool",
        isCover: false,
        orderIndex: 4,
        media: {
          id: "media_pdf_edit_tool_3_inner",
          url: "/pdf-edit-tool-3.jpg",
          filename: "pdf-edit-tool-3.jpg",
          fileType: "image/jpeg",
        },
      },
    ],
  },
  {
    id: "proj-mern-auth",
    title: "MERN Login & Registration",
    slug: "mern-login-register",
    category: "Backend Architecture · Identity & RBAC",
    problemStatement:
      "Modern web applications require a secure authentication and role-authorization layer before business features can be exposed.",
    whatIBuilt:
      "A full-stack MERN authentication system implementing bcrypt.js password hashing, stateless JWT session tokens, protected routes, and role-based access control.",
    importantFunctionality: [
      "Secure signup and login flows with server-side validation",
      "Salted password hashing via bcrypt.js and signed JWT verification",
      "Protected client routes and role-based middleware guards",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    githubUrl: "https://github.com/SagarP2/mern-login-register",
    liveUrl: null,
    orderIndex: 1,
    mediaList: [
      {
        id: "media_mern_login_register",
        projectId: "proj-mern-auth",
        isCover: true,
        orderIndex: 1,
        media: {
          id: "media_mern_login_register_inner",
          url: "/mern-login-register.png",
          filename: "mern-login-register.png",
          fileType: "image/png",
        },
      },
      {
        id: "media_mern_login_register_1",
        projectId: "proj-mern-auth",
        isCover: false,
        orderIndex: 2,
        media: {
          id: "media_mern_login_register_1_inner",
          url: "/mern-login-register-1.jpg",
          filename: "mern-login-register-1.jpg",
          fileType: "image/jpeg",
        },
      },
      {
        id: "media_mern_login_register_2",
        projectId: "proj-mern-auth",
        isCover: false,
        orderIndex: 3,
        media: {
          id: "media_mern_login_register_2_inner",
          url: "/mern-login-register-2.jpg",
          filename: "mern-login-register-2.jpg",
          fileType: "image/jpeg",
        },
      },
    ],
  },
];
