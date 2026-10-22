import { PageId } from "./navigation";

export interface ServicePanelItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
}

export type ServiceCategoryFilter =
  | "all"
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
  isFlipped: boolean;
  onCardClick: (serviceId: string) => void;
  onNavigate: (page: PageId) => void;
}
