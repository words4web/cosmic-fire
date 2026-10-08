export interface HeroData {
  badge: string;
  headline: string;
  description: string;
  ctas: {
    explore: string;
    talk: string;
  };
  highlights: string[];
  ticker: string[];
}

export const HERO_DATA: HeroData = {
  badge: "Fire Prevention & Protection Solutions",
  headline: "Protecting Your Business Before Fire Strikes",
  description:
    "Cosmic Fire Solution helps businesses across London and Kent protect their people, premises, and assets with dependable fire extinguishers, detection, alarms, and tailored protection solutions.",
  ctas: {
    explore: "Explore Our Solutions",
    talk: "Talk to an Expert",
  },
  highlights: [
    "Fire Protection Across London & Kent",
    "Business-Focused Solutions",
    "Protection Across Industries",
  ],
  ticker: [
    "Fire Detection",
    "Fire Extinguishers",
    "Fire Alarm",
    "Suppression Systems",
    "Emergency Lighting",
    "Alarm Panel",
    "Detection",
    "Protection",
    "Extinguishers",
    "Fire Alarms",
    "Suppression",
    "Servicing",
    "Compliance",
    "Monitoring",
  ],
};
