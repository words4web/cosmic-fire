export interface ServicePanelItem {
  id: string;
  title: string;
  description: string;
  benefitsHeader?: string;
  benefits: string[];
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
