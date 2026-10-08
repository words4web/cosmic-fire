export interface TechnologyStepItem {
  id: string;
  stepNumber: string;
  title: string;
  shortDesc: string;
  detailTitle: string;
  detailDescription: string;
  listTitle: string;
  listItems: string[];
}

export interface TechnologyFlowData {
  headline: string;
  description: string;
  steps: TechnologyStepItem[];
}
