import { ServicePanelItem } from "../types";

export const DETAILED_SERVICES_DATA: ServicePanelItem[] = [
  {
    id: "fire-detection-systems",
    title: "Fire Detection Systems",
    description:
      "The danger of fire lies in its ability to grow quickly and to spread. Our fire detection solutions give our clients the ability to respond to fire conditions at an early stage with a range of systems designed to meet the needs of commercial premises. We provide solutions that suit the premises’ layout and requirements, including: smoke and heat detection, detector positioning, manual call points, and integration with other systems.",
    ctaText: "Explore Detection",
  },
  {
    id: "fire-alarm-systems",
    title: "Fire Alarm Systems",
    description:
      "Early detection is only valuable if occupants can act. Fire alarm systems ensure that occupants are aware of fire conditions, allowing them to follow an appropriate action plan. Our fire alarm solutions cover a wide range of fire alarm panels, audible warning devices, manual call points, and zone definition.",
    ctaText: "Explore Fire Alarms",
  },
  {
    id: "fire-suppression",
    title: "Fire Suppression",
    description:
      "In some circumstances alarms and extinguishers are simply not enough. Our fire suppression systems offer added protection for premises where fire risk is heightened due to layout or due to the nature of the goods or services provided.",
    ctaText: "Discuss Suppression",
  },
  {
    id: "fire-extinguisher-solutions",
    title: "Fire Extinguisher Solutions",
    description:
      "In appropriate circumstances, a fire extinguisher can offer a vital first response to a developing fire. Our fire extinguisher solutions give our clients the reassurance that they have the correct equipment in place to deal with any fire incident that may arise. We help our clients define their needs based on fire risks, premises layout, and working practices, as well as offering positioning advice and required signage.",
    ctaText: "Find Your Extinguisher",
  },
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
    id: "emergency-signage",
    title: "Emergency Signage",
    description:
      "Clear emergency and fire safety signage helps people understand where to go and what to do during an emergency. We can assist with suitable signage according to the requirements of the premises.",
    ctaText: "Discuss Emergency Signage",
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
  {
    id: "class-0-fire-rated-painting",
    title: "Class 0 Fire Rated Painting",
    description:
      "Class 0 fire-rated painting can provide additional surface protection for suitable walls and ceilings where required. The appropriate coating system can be considered according to the building and project requirements.",
    ctaText: "Discuss Class 0 Painting",
  },
];

export const SERVICE_IMAGES: Record<
  string,
  import("../types").ServiceImageMeta
> = {
  "fire-detection-systems": {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    alt: "Ceiling optical smoke detector and sensor network",
    category: "detection",
    tag: "Detection & Sensors",
  },
  "fire-alarm-systems": {
    url: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80",
    alt: "Commercial multi-zone fire alarm control panel",
    category: "detection",
    tag: "Alarm Panels & Sounders",
  },
  "fire-suppression": {
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    alt: "Clean agent gas suppression manifold system",
    category: "suppression",
    tag: "Clean Agent Suppression",
  },
  "fire-extinguisher-solutions": {
    url: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80",
    alt: "Wall-mounted commercial fire extinguishers with regulatory signage",
    category: "suppression",
    tag: "First Response Equipment",
  },
  "fire-extinguisher-servicing": {
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    alt: "Certified engineer servicing and inspecting fire extinguisher gauge",
    category: "suppression",
    tag: "Compliance & Testing",
  },
  "fire-curtains": {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    alt: "Automatic roller fire curtain in modern atrium corridor",
    category: "passive",
    tag: "Smoke & Flame Barrier",
  },
  "intumescent-coatings": {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    alt: "Structural steel coated with certified intumescent paint",
    category: "passive",
    tag: "Structural Steel Protection",
  },
  "fire-barriers": {
    url: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    alt: "Cavity barrier and fire batt installed inside void compartment",
    category: "passive",
    tag: "Cavity Compartmentation",
  },
  "fire-doors-screens": {
    url: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=800&q=80",
    alt: "Commercial certified fire exit doors with panic hardware and vision panels",
    category: "passive",
    tag: "Doors & Glazed Screens",
  },
  "emergency-signage": {
    url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
    alt: "Illuminated photoluminescent emergency escape route signage",
    category: "passive",
    tag: "BS 5266 Photoluminescent",
  },
  "dry-lining": {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    alt: "Fire-rated dry lining and plasterboard stud partition installation",
    category: "passive",
    tag: "Fire Rated Partitions",
  },
  "air-sealing": {
    url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    alt: "Air tightness sealing around commercial building service junctions",
    category: "passive",
    tag: "Leakage & Air Barrier",
  },
  "penetration-sealing": {
    url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    alt: "Intumescent pipe collar and firestop mastic penetration seal",
    category: "passive",
    tag: "Cable & Pipe Penetrations",
  },
  "class-0-fire-rated-painting": {
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    alt: "Flame retardant Class 0 architectural paint finish on commercial wall",
    category: "passive",
    tag: "Surface Flame Spread",
  },
};
