import { TechnologyFlowData } from "../types/technology";

export const TECHNOLOGY_FLOW_DATA: TechnologyFlowData = {
  headline: "Detect. Alert. Respond.",
  description:
    "The starting point should always be an appraisal of the risks, their likelihood, their potential impact, and how they might be addressed and detected. The technology and action plans must be appropriate to the premises and be capable of providing the degree of fire protection required. Our help is necessary here in order to provide clients with the reassurance that the right approach has been adopted.",
  steps: [
    {
      id: "understand-risk",
      stepNumber: "01",
      title: "Understand Risk",
      shortDesc:
        "Assessing the risks within your premises allows us to identify what fire protection you may need to be provided.",
      detailTitle: "Understanding the Risk",
      detailDescription:
        "There are hazards associated with all buildings, and we can assess what fire protection is required. We look at your premises and equipment to determine the necessary fire protection.",
      listTitle: "Technology & Planning",
      listItems: [
        "Identification of fire risk",
        "Hazard assessment",
        "Site considerations",
        "Equipment mapping",
      ],
    },
    {
      id: "detect-early",
      stepNumber: "02",
      title: "Detect Early",
      shortDesc:
        "The correct fire detection equipment can help identify fire at an early stage and alert those in the building of its presence.",
      detailTitle: "Detecting the Fire",
      detailDescription:
        "Fire detection equipment can help identify fire at an early stage and notify those aware of the situation.",
      listTitle: "Technology Used",
      listItems: [
        "Smoke detectors",
        "Heat detectors",
        "Manual call points",
        "Detection systems",
      ],
    },
    {
      id: "alert-clearly",
      stepNumber: "03",
      title: "Alert Clearly",
      shortDesc:
        "Fire alarm systems warn those in the premises of fire and allow them to respond safely and effectively.",
      detailTitle: "Raising the Alarm",
      detailDescription:
        "An alarm system warns those aware of a fire so that they may tackle it and respond safely.",
      listTitle: "Technology Used",
      listItems: [
        "Fire alarm panels",
        "Alarm systems",
        "Alarm notification devices",
        "Alarm zones",
      ],
    },
    {
      id: "respond-safely",
      stepNumber: "04",
      title: "Respond Safely",
      shortDesc:
        "The provision of fire fighting and emergency equipment allows the occupants of a building to respond to fire directly and limit its impact.",
      detailTitle: "Supporting the Response",
      detailDescription:
        "Fire extinguishers and other equipment can help occupants to respond to fire if it is safe to do so.",
      listTitle: "Equipment Used",
      listItems: [
        "Fire extinguishers",
        "Fire signage",
        "Extinguisher stations",
        "Emergency equipment",
      ],
    },
  ],
};
