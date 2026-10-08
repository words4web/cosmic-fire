import { PageId } from "./navigation";

export interface FooterLink {
  label: string;
  pageId: PageId;
}

export interface FooterData {
  tagline: string;
  description: string;
  standardText: string;
  coreSystems: string[];
  legalLinks: {
    label: string;
    alertMessage: string;
  }[];
}
