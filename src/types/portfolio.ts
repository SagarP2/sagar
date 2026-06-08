export enum SkillCategory {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  SHOPIFY = "SHOPIFY",
  DESIGN = "DESIGN",
  MARKETING = "MARKETING",
  TESTING = "TESTING",
}

export enum DetailType {
  FEATURE = "FEATURE",
  CHALLENGE = "CHALLENGE",
  OUTCOME = "OUTCOME",
}

export enum ContactStatus {
  UNREAD = "UNREAD",
  READ = "READ",
  REPLIED = "REPLIED",
}

export interface WebsiteSetting {
  id: string;
  siteName: string;
  logoMediaId: string | null;
  bioText: string;
  subBioText: string;
  contactEmail: string | null;
  contactPhone: string | null;
  contactAddress: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface ResumeSetting {
  id: string;
  cvMediaId: string | null;
  lastUpdated?: string;
  totalExperienceYears: number;
  cvMedia?: {
    url?: string | null;
  } | null;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  orderIndex: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number;
  icon: string | null;
  orderIndex: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string | null;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  description: string;
  orderIndex: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  location: string | null;
  startDate: string;
  endDate: string | null;
  description: string;
  orderIndex: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface SubService {
  id: string;
  serviceId: string;
  subTitle: string;
  subDescription: string;
  imageMediaId: string | null;
  highlights: string[];
  subDetails: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  mainDescription: string;
  icon: string;
  orderIndex: number;
  subServices: SubService[];
}

export interface Media {
  id: string;
  url: string;
  filename: string;
  fileType: string;
  fileSize: number;
  publicId: string | null;
  provider: string;
  createdAt?: string;
}

export interface ProjectMedia {
  id: string;
  projectId: string;
  mediaId: string;
  isCover: boolean;
  orderIndex: number;
  media: Media;
}

export interface ProjectDetail {
  id: string;
  projectId: string;
  type: DetailType;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  purpose: string;
  githubUrl: string | null;
  liveUrl: string | null;
  techStack: string[];
  orderIndex: number;
  detailsList: ProjectDetail[];
  mediaList: ProjectMedia[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  content: string;
  avatarUrl: string | null;
  rating: number;
  orderIndex: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: ContactStatus;
  createdAt?: string;
  updatedAt?: string;
}
