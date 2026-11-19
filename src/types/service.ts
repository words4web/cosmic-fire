import { PageId } from "./navigation";

export interface ServiceSectionBlock {
  heading: string;
  subheading?: string;
  content: string;
}

export interface ServicePanelItem {
  id: string;
  title: string;
  badge?: string;
  tagline?: string;
  description: string;
  sections?: ServiceSectionBlock[];
  highlights?: string[];
  ctaText: string;
  metaTitle?: string;
  metaDescription?: string;
}

export type ServiceCategoryFilter =
  | "all"
  | "core"
  | "detection"
  | "suppression"
  | "passive";

export interface ServiceImageMeta {
  url: string;
  alt: string;
  category: ServiceCategoryFilter;
  tag: string;
}

export interface ServiceCardProps {
  service: ServicePanelItem;
  imageMeta: ServiceImageMeta;
  onNavigate: (page: PageId) => void;
}
