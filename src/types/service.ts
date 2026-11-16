import { PageId } from "./navigation";

export interface ServicePanelItem {
  id: string;
  title: string;
  badge?: string;
  description: string;
  highlights?: string[];
  ctaText: string;
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
