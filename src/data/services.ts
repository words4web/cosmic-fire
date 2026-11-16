import { ServicePanelItem } from "../types";

export const DETAILED_SERVICES_DATA: ServicePanelItem[] = [
  {
    id: "fire-extinguisher-servicing",
    title: "Fire Extinguisher Servicing",
    description:
      "Fire extinguishers offer little reassurance if it later emerges that they were not properly maintained or were not fit for purpose. Our fire extinguisher servicing solutions give our clients added confidence that their fire protection equipment is fully maintained and compliant with current regulations. We offer a range of services from examination and equipment checks to full service and maintenance support, ensuring that firefighting equipment remains in full working order.",
    ctaText: "Book a Service",
  },
  {
    id: "fire-curtains",
    title: "Fire Curtains",
    description:
      "Fire curtains can help contain fire and smoke by creating a temporary barrier across an opening. They can form part of a passive fire protection strategy where controlling the spread of fire between areas is required.",
    ctaText: "Discuss Fire Curtains",
  },
  {
    id: "intumescent-coatings",
    title: "Intumescent Coatings",
    description:
      "Intumescent coatings can provide fire-resistant protection to suitable structural steel and other applications. The coating reacts to heat and expands to help protect the underlying material during a fire.",
    ctaText: "Discuss Intumescent Coatings",
  },
  {
    id: "fire-barriers",
    title: "Fire Barriers",
    description:
      "Fire barriers can help prevent the spread of fire and smoke through concealed spaces and cavities within a building. They can form an important part of passive fire protection where fire spread needs to be restricted.",
    ctaText: "Discuss Fire Barriers",
  },
  {
    id: "fire-doors-screens",
    title: "Fire Doors & Screens",
    description:
      "Fire doors and screens can help reduce the spread of fire and smoke between separate rooms, areas and corridors. They form an important part of passive fire protection and protected escape routes.",
    ctaText: "Discuss Fire Doors",
  },
  {
    id: "dry-lining",
    title: "Dry Lining",
    description:
      "Dry lining provides a practical building solution that can support fire safety and other building requirements. The appropriate materials and systems can be selected according to the requirements of the premises.",
    ctaText: "Discuss Dry Lining",
  },
  {
    id: "air-sealing",
    title: "Air Sealing",
    description:
      "Air sealing can help reduce unwanted air leakage within a building. Where appropriate, it can support both building performance and fire protection requirements.",
    ctaText: "Discuss Air Sealing",
  },
  {
    id: "penetration-sealing",
    title: "Penetration Sealing",
    description:
      "Services such as pipes, cables, and other installations can create openings through fire-resistant walls, floors, and other elements. Penetration sealing helps close these openings and maintain the intended fire protection of the building.",
    ctaText: "Discuss Penetration Sealing",
  },
];

export const SERVICE_IMAGES: Record<
  string,
  import("../types").ServiceImageMeta
> = {
  "fire-extinguisher-servicing": {
    url: "/images/services/fire-extinguisher-servicing.webp",
    alt: "Certified technician inspecting and servicing commercial fire extinguisher pressure gauge",
    category: "suppression",
    tag: "Compliance & Testing",
  },
  "fire-curtains": {
    url: "/images/services/fire-curtains.webp",
    alt: "Automated flame and smoke containment roller fire curtain in building lobby",
    category: "passive",
    tag: "Smoke & Flame Barrier",
  },
  "intumescent-coatings": {
    url: "/images/services/intumescent-coatings.webp",
    alt: "Specialist technician applying intumescent fireproofing spray coating to structural steel columns",
    category: "passive",
    tag: "Structural Steel Protection",
  },
  "fire-barriers": {
    url: "/images/services/fire-barriers.webp",
    alt: "Fire barrier mineral wool insulation and fire batt installation inside wall cavity",
    category: "passive",
    tag: "Cavity Compartmentation",
  },
  "fire-doors-screens": {
    url: "/images/services/fire-doors-screens.webp",
    alt: "Certified commercial fire-rated exit doors with panic hardware and glazed screens",
    category: "passive",
    tag: "Doors & Glazed Screens",
  },
  "dry-lining": {
    url: "/images/services/dry-lining.webp",
    alt: "Fire-rated dry lining stud partition wall cross-section with fireproof acoustic plasterboard",
    category: "passive",
    tag: "Fire Rated Partitions",
  },
  "air-sealing": {
    url: "/images/services/air-sealing.webp",
    alt: "Specialist applying fire-rated intumescent mastic air sealant around electrical cable trays",
    category: "passive",
    tag: "Leakage & Air Barrier",
  },
  "penetration-sealing": {
    url: "/images/services/penetration-sealing.webp",
    alt: "Firestop collars and intumescent penetration seals around pipes and cable runs through compartment walls",
    category: "passive",
    tag: "Cable & Pipe Penetrations",
  },
};
