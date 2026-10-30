import type { Experience, Education } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    id: "cmq28oiip000sjszntx82disv",
    company: "Sedulous® Infosys",
    role: "MERN Stack Developer Intern",
    location: "Surat, Gujarat",
    startDate: "2024-03-01T00:00:00.000Z",
    endDate: "2024-12-31T00:00:00.000Z",
    isCurrent: false,
    description:
      "Worked as a MERN Stack Developer Intern for 9+ months. Gained experience building full-stack web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB. Handled deployment pipelines, API integration, and developed user-friendly, responsive layouts.",
    orderIndex: 1,
  },
  {
    id: "cmq28oin1000tjsznycd0ep18",
    company: "Rabbitcode Agency",
    role: "MERN Stack & Shopify App Developer",
    location: "Remote",
    startDate: "2025-01-01T00:00:00.000Z",
    endDate: null,
    isCurrent: true,
    description:
      "Developing robust full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) and designing custom Shopify applications. Implementing embedded app architectures, Webhook event pipelines, GraphQL API integrations, and tailored Liquid themes to meet enterprise merchant requirements.",
    orderIndex: 2,
  },
];

export const educationList: Education[] = [
  {
    id: "cmq28oird000ujszndimnry69",
    institution: "Babu Madhv Institute of Information Technology",
    degree: "Bachelor of Science in Information Technology",
    fieldOfStudy: "Information Technology",
    location: "Bardoli, Gujarat",
    startDate: "2021-06-01T00:00:00.000Z",
    endDate: "2024-05-31T00:00:00.000Z",
    description:
      "Completed Bachelor's in IT, focusing on practical programming concepts, database management systems, and software engineering. BMIIT provided hands-on experience in a wide range of emerging technologies.",
    orderIndex: 1,
  },
  {
    id: "cmq28oivn000vjsznpjmt2j11",
    institution: "The Sheth H.J Shah Sarvajanik Junior College",
    degree: "11th & 12th Standard",
    fieldOfStudy: "Science Stream",
    location: "Navapur, Maharashtra",
    startDate: "2019-06-01T00:00:00.000Z",
    endDate: "2021-05-31T00:00:00.000Z",
    description:
      "Focused on core science subjects (Physics, Chemistry, Mathematics). Developed analytical thinking and foundational logic skills.",
    orderIndex: 2,
  },
];

