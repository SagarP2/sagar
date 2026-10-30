import type {
  WebsiteSetting,
  ResumeSetting,
  SocialLink,
} from "@/types/portfolio";

export const settings: WebsiteSetting = {
  id: "global_settings",
  siteName: "Sagar Panchal | Portfolio MERN Stack & Shopify Developer",
  logoMediaId: null,
  bioText:
    "Welcome! I’m Sagar Panchal, a professional MERN Stack and Shopify App Developer with expertise in Web Application Development, Programming, Graphic Design, and Video Editing. I specialize in crafting innovative, scalable solutions tailored to meet business needs and deliver exceptional user experiences.",
  subBioText:
    "With a focus on quality and precision, I bring both technical expertise and creative insight to every project, ensuring results that exceed expectations. I thrive in dynamic, collaborative environments that challenge my problem-solving skills and promote continuous growth. Let’s work together to build impactful, high-performance applications that drive success.",
  contactEmail: "panchalsagar992003@gmail.com",
  contactPhone: "+91 9638061952",
  contactAddress: "Gandhi Road, Bardoli, Gujarat, India - 394601",
  createdAt: "2026-06-06T10:57:39.366Z",
  updatedAt: "2026-06-06T10:57:39.366Z",
};

export const resumeSettings: ResumeSetting = {
  id: "global_resume",
  cvMediaId: "media_cv_sagar",
  lastUpdated: "2026-06-06T10:57:39.524Z",
  totalExperienceYears: 1.5,
  cvMedia: {
    url: "/Resume_Sagar_Panchal.pdf",
  },
};

export const socialLinks: SocialLink[] = [
  {
    id: "cmq28ofa70001jszns4ingorm",
    platform: "GitHub",
    url: "https://github.com/SagarP2",
    icon: "Github",
    orderIndex: 1,
    isActive: true,
    createdAt: "2026-06-06T10:57:39.679Z",
    updatedAt: "2026-06-06T10:57:39.679Z",
  },
  {
    id: "cmq28ofei0002jszn4iogovnq",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/sagar-panchal-79284921a/",
    icon: "Linkedin",
    orderIndex: 2,
    isActive: true,
    createdAt: "2026-06-06T10:57:39.834Z",
    updatedAt: "2026-06-06T10:57:39.834Z",
  },
  {
    id: "cmq28ofit0003jsznn8qkl2ys",
    platform: "Instagram",
    url: "https://www.instagram.com/_sagarpanchal._",
    icon: "Instagram",
    orderIndex: 3,
    isActive: true,
    createdAt: "2026-06-06T10:57:39.989Z",
    updatedAt: "2026-06-06T10:57:39.989Z",
  },
  {
    id: "cmq28ofn40004jszndntzrxau",
    platform: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100043381202793",
    icon: "Facebook",
    orderIndex: 4,
    isActive: true,
    createdAt: "2026-06-06T10:57:40.144Z",
    updatedAt: "2026-06-06T10:57:40.144Z",
  },
  {
    id: "cmq28ofre0005jsznreqbxtja",
    platform: "Twitter",
    url: "https://x.com/SagarPanchal09",
    icon: "Twitter",
    orderIndex: 5,
    isActive: true,
    createdAt: "2026-06-06T10:57:40.298Z",
    updatedAt: "2026-06-06T10:57:40.298Z",
  },
];

