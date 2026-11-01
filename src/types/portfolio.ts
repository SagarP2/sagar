export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface WebsiteSetting {
  id: string;
  siteName: string;
  name: string;
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  heroDescription: string;
  contactEmail: string;
  contactPhone: string | null;
  contactAddress: string | null;
  resumeUrl: string;
}

export interface SocialLink {
  id: string;
  platform: "GitHub" | "LinkedIn" | "Email";
  url: string;
  label: string;
}

export interface ExpertiseArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  deliverables: string[];
  accent?: "cobalt" | "dark";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  responsibilities: string[];
  technicalContributions: string[];
  technologies: string[];
  orderIndex: number;
}

export interface Media {
  id: string;
  url: string;
  filename: string;
  fileType: string;
}

export interface ProjectMedia {
  id: string;
  projectId: string;
  isCover: boolean;
  orderIndex: number;
  media: Media;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  featured?: boolean;
  problemStatement: string;
  whatIBuilt: string;
  importantFunctionality: string[];
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  orderIndex: number;
  mediaList: ProjectMedia[];
}

export interface AIWorkflowStep {
  number: string;
  title: string;
  detail: string;
}

export type ContactApiResponse =
  | {
      success: true;
      message: string;
      data: {
        timestamp: string;
        referenceId: string;
      };
    }
  | {
      success: false;
      message: string;
      errors?: Record<string, string>;
    };
