export interface IndustrySectorItem {
  id: string;
  category:
    | "office"
    | "retail"
    | "hospitality"
    | "industrial"
    | "education"
    | "healthcare";
  title: string;
  description: string;
  keyAreas: string[];
  ctaText: string;
}

export interface IndustriesContent {
  networkHeadline: string;
  networkDescription: string;
  networkCtas: {
    planCta: string;
    speakCta: string;
  };
  networkPoints: string[];
  premisesHeadline: string;
  premisesDescription: string;
  sectors: IndustrySectorItem[];
}
