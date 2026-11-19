import { ServicePanelItem } from "../types";

export const DETAILED_SERVICES_DATA: ServicePanelItem[] = [
  {
    id: "fire-door-inspections",
    title: "Fire Door Inspections",
    badge: "Survey & Report",
    metaTitle: "Fire Door Inspections London & Kent | Cosmic Fire",
    metaDescription:
      "Complete assessment on the function and condition of your fire doors in London & Kent. Full compliance reports and certification. Book today.",
    description:
      "Most commercial and rented buildings have many fire doors, which can be damaged by everyday wear and tear. If doors are non-compliant, you may be liable in the event of a fire. We perform a complete check on all doors in your building to ensure they meet regulations, providing detailed photographic reports and annual certification.",
    highlights: [
      "Complete check on door leaf, frame, seals, hinges & closers",
      "Detailed photographic survey and defect action report",
      "Annual compliance certificate for your legal records",
    ],
    ctaText: "Book an Inspection",
  },
  {
    id: "fire-door-installation",
    title: "Fire Door Installation",
    badge: "Certified Fitting",
    metaTitle: "Fire Door Installation London & Kent | Cosmic Fire",
    metaDescription:
      "Industry standard, certificated fire door installations by fully qualified carpenters in London & Kent. Free quote.",
    description:
      "A fire door assembly includes the door leaf, frame, stops, seals, hinges, and hardware. If just one wrong component is used, its performance can be severely compromised. Our qualified carpenters have the skills and knowledge required to install, fit, and certify one or all the doors in your building to full UK standards.",
    highlights: [
      "Fitted by qualified, certified carpenters",
      "Tested seals, locks, latches, overhead closers & hinges",
      "Full compliance certificate provided on completion",
    ],
    ctaText: "Get Installation Quote",
  },
  {
    id: "fire-door-maintenance",
    title: "Fire Door Maintenance",
    badge: "Regular Checks",
    metaTitle: "Fire Door Maintenance London & Kent | Cosmic Fire",
    metaDescription:
      "Planned fire door maintenance and servicing in London & Kent. Keep doors compliant and functioning properly without costly replacement.",
    description:
      "Under the Regulatory Reform (Fire Safety) Order, fire doors must retain their ability to resist fire throughout their working life. A doorset's resistance can be seriously compromised if not maintained properly. Our accredited maintenance team repairs and upgrades fire doors as a reliable, cost-effective alternative to buying new doorsets.",
    highlights: [
      "Cost-effective alternative to buying new doorsets",
      "Regular scheduled checks and rapid defect repairs",
      "Ensures continuous certification and life safety compliance",
    ],
    ctaText: "Book Door Maintenance",
  },
  {
    id: "fire-stopping",
    title: "Fire Stopping",
    badge: "Compartmentation",
    metaTitle: "Fire Stopping London & Kent | Cosmic Fire",
    metaDescription:
      "Fire stopping and penetration sealing for commercial buildings in London & Kent. Seal openings and create fire-resisting compartments.",
    description:
      "Fire stopping is the sealing of any openings in order to prevent smoke, heat, and fire from spreading through buildings. We create fire-resistant sections within buildings using tested materials to subdivide spaces effectively. We assess your building and provide tailored fire stopping solutions to achieve complete safety.",
    highlights: [
      "Seals openings around pipes, cables, and ductwork",
      "Creates fire-resisting compartments across floors and walls",
      "Complete building assessment and certification report",
    ],
    ctaText: "Discuss Fire Stopping",
  },
  {
    id: "fire-door-manufacturing",
    title: "Fire Door Manufacturing",
    badge: "Bespoke Joinery",
    metaTitle: "Bespoke Fire Door Manufacturing London & Kent | Cosmic Fire",
    metaDescription:
      "Bespoke fire door manufacturing from 30 mins to 4 hours in London & Kent. Classic, contemporary, and acoustic doors built to your specification.",
    description:
      "We manufacture fire doors to match any style of decor whilst adhering to all fire regulations. Rated from 30 minutes to 4 hours, and acoustic fire doors rated up to 54dB. Available in hardwood, softwood, moulded, or flush designs with classic or contemporary finishes that blend seamlessly into your interior.",
    highlights: [
      "Fire ratings from 30 minutes up to 4 hours (FD30 – FD240)",
      "Acoustic sound reduction ratings up to 54dB",
      "Custom finishes, certified frames, and glazed vision panels",
    ],
    ctaText: "Discuss Bespoke Manufacturing",
  },
  {
    id: "steel-doors",
    title: "Steel Doors",
    badge: "High Performance",
    metaTitle: "Commercial Steel Fire Doors London & Kent | Cosmic Fire",
    metaDescription:
      "High performance steel fire doors certified up to 4 hours in London & Kent. Robust, secure, and low maintenance solutions.",
    description:
      "Our steel fire doors are certified for up to 4 hours, providing a robust, highly secure, and low-maintenance solution. Designed to stop the spread of fire long enough for sprinkler systems to work and to protect escape routes and fire crews entering the building. Only approved, fire-tested ironmongery is used.",
    highlights: [
      "Certified fire resistance for up to 4 hours",
      "Tested and approved ironmongery and heavy-duty hardware",
      "Robust, tamper-resistant, and low maintenance",
    ],
    ctaText: "Discuss Steel Doors",
  },
];

export const SERVICE_IMAGES: Record<
  string,
  import("../types").ServiceImageMeta
> = {
  "fire-door-inspections": {
    url: "/images/why-us/01-fire-safety-legislation.webp",
    alt: "Fire safety engineer conducting comprehensive commercial building fire door inspection in London and Kent",
    category: "core",
    tag: "Inspection & Audit",
  },
  "fire-door-installation": {
    url: "/images/why-us/02-fire-protection-equipment.webp",
    alt: "Qualified carpenter installing certified commercial fire door assembly",
    category: "core",
    tag: "Certified Installation",
  },
  "fire-door-maintenance": {
    url: "/images/why-us/06-fire-protection-maintenance.webp",
    alt: "Technician performing routine fire door servicing, closer adjustments, and seal maintenance",
    category: "core",
    tag: "Regular Maintenance",
  },
  "fire-stopping": {
    url: "/images/services/penetration-sealing.webp",
    alt: "Fire stopping technician sealing service penetrations around pipes and cables in compartment walls",
    category: "passive",
    tag: "Compartmentation",
  },
  "fire-door-manufacturing": {
    url: "/images/services/fire-doors-screens.webp",
    alt: "Bespoke commercial timber and acoustic fire door manufacturing",
    category: "passive",
    tag: "Bespoke Manufacturing",
  },
  "steel-doors": {
    url: "/images/why-us/05-emergency-fire-protection.webp",
    alt: "High performance 4-hour rated commercial steel fire door installation",
    category: "passive",
    tag: "Steel Doors",
  },

  // Aliases for backward compatibility with existing links
  "fire-safety-inspection": {
    url: "/images/why-us/01-fire-safety-legislation.webp",
    alt: "Fire safety engineer conducting comprehensive commercial building fire door inspection",
    category: "core",
    tag: "Inspection & Audit",
  },
  "fire-protection-installation": {
    url: "/images/why-us/02-fire-protection-equipment.webp",
    alt: "Qualified carpenter installing certified commercial fire door assembly",
    category: "core",
    tag: "Certified Installation",
  },
  "fire-maintenance-remedials": {
    url: "/images/why-us/06-fire-protection-maintenance.webp",
    alt: "Technician performing routine fire door servicing and maintenance",
    category: "core",
    tag: "Regular Maintenance",
  },
  "fire-doors-screens": {
    url: "/images/services/fire-doors-screens.webp",
    alt: "Certified commercial fire doors and screens",
    category: "passive",
    tag: "Bespoke Doors",
  },
  "penetration-sealing": {
    url: "/images/services/penetration-sealing.webp",
    alt: "Fire stopping seals around pipes and cables",
    category: "passive",
    tag: "Fire Stopping",
  },
};
