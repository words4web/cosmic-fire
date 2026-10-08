import { FooterData, FooterLink } from "../types";

export const FOOTER_LINKS: FooterLink[] = [
  {
    label: "Fire Protection Solutions",
    pageId: "solutions",
  },
  {
    label: "Industries & Facilities",
    pageId: "industries",
  },
  {
    label: "Technology & Protocols",
    pageId: "technology",
  },
  {
    label: "About Cosmic Fire",
    pageId: "about",
  },
  {
    label: "Resources & Insights",
    pageId: "resources",
  },
  {
    label: "Frequently Asked Questions (FAQ)",
    pageId: "faq",
  },
  {
    label: "Contact & Consultation",
    pageId: "contact",
  },
];

export const FOOTER_DATA: FooterData = {
  tagline: "PREVENT. PROTECT. RESPOND.",
  description:
    "Intelligent fire prevention and protection solutions safeguarding lives, architectural assets, and critical industrial environments.",
  standardText: "Engineered to NFPA & EN54 Global Standards",
  coreSystems: [
    "Aspirating Smoke (ASD)",
    "Voice Evacuation (EVAC)",
    "Clean Agent Suppression",
    "ESFR Wet/Dry Sprinklers",
    "Pressure Relief Dampers",
    "Hydraulic Booster Skids",
  ],
  legalLinks: [
    {
      label: "Privacy Policy",
      alertMessage:
        "Privacy Policy: All customer blueprints, telemetry, and facility data are strictly confidential and encrypted under life-safety compliance protocols.",
    },
    {
      label: "Terms",
      alertMessage:
        "Terms of Engineering Engagement: Stamped plans and hydraulic calculations conform to standard NFPA/AHJ covenants.",
    },
    {
      label: "Cookie Policy",
      alertMessage:
        "Cookie Policy: Only minimal functional cookies are utilized to preserve user UI preferences.",
    },
  ],
};
