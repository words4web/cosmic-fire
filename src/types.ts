export type PageId = 'home' | 'solutions' | 'industries' | 'technology' | 'about' | 'resources' | 'contact';

export interface HotspotItem {
  id: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  specs: string[];
  status: 'online' | 'monitoring' | 'active';
  x: number; // percentage in hero visual
  y: number; // percentage in hero visual
  floor: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  detailedSpecs: string[];
  keyBenefits: string[];
  image: string;
  schematicType: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  riskProfile: string;
  primarySystems: string[];
  standardsRef: string;
}

export interface TechStep {
  step: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  responseTime: string;
  hardware: string;
  protocol: string;
  icon: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  author: string;
  image: string;
}

export interface ConsultationFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  serviceRequired: string;
  facilityType: string;
  message: string;
}
