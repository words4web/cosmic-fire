export interface AboutPillar {
  title: string;
  description: string;
}

export interface AboutContent {
  sectionTitle: string;
  headline: string;
  overviewParagraphs: string[];
  pillars: AboutPillar[];
}
