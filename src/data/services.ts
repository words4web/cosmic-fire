import { ServicePanelItem } from "../types";

export const DETAILED_SERVICES_DATA: ServicePanelItem[] = [
  {
    id: "fire-safety-inspection",
    title: "Fire Safety Inspection",
    badge: "Survey & Audit",
    metaTitle: "Fire Safety Inspection London & Kent | Cosmic Fire",
    metaDescription:
      "Expert fire safety inspections for commercial premises in London & Kent. Identify risks, stay compliant and get a clear action plan. Book today.",
    description:
      "Comprehensive site surveys, fire door inspections, and passive barrier audits delivering clear photographic defect schedules and statutory compliance sign-off.",
    highlights: [
      "Full photographic condition reports",
      "Regulatory Reform (Fire Safety) compliance",
      "Prioritized remedial action schedules",
    ],
    ctaText: "Request an Inspection",
  },
  {
    id: "fire-protection-installation",
    title: "Fire Protection Installation",
    badge: "Certified Fitting",
    metaTitle: "Fire Protection Installation London & Kent | Cosmic Fire",
    metaDescription:
      "Professional fire protection installation for commercial buildings in London & Kent. Systems fitted to UK standards with 24/7 support. Free quote.",
    description:
      "Fully accredited supply and installation of timber & steel fire doors, automated fire curtains, cavity fire barriers, and penetration sealing.",
    highlights: [
      "BM TRADA / Q-Mark certified installers",
      "New build installations & heritage retrofits",
      "Full compliance certificate on completion",
    ],
    ctaText: "Get Installation Quote",
  },
  {
    id: "fire-maintenance-remedials",
    title: "Fire Maintenance & Servicing",
    badge: "Statutory Testing",
    metaTitle: "Fire Maintenance & Servicing London & Kent | Cosmic Fire",
    metaDescription:
      "Planned fire protection maintenance and servicing for commercial premises in London & Kent. Keep systems compliant and reliable. Request a quote.",
    description:
      "Scheduled preventative maintenance contracts and rapid defect repairs ensuring all fire doors, seals, extinguishers, and barriers remain 100% operational.",
    highlights: [
      "Routine 6-month & annual service intervals",
      "Statutory digital logbook maintenance",
      "Emergency reactive repair dispatch",
    ],
    ctaText: "Book Maintenance",
  },
  {
    id: "fire-doors-screens",
    title: "Fire Doors & Screens",
    badge: "Compartmentation",
    metaTitle: "Fire Doors & Screens London & Kent | Cosmic Fire",
    metaDescription:
      "Fire doors and screens for commercial buildings in London & Kent. Compartmentation that protects people and property, with expert advice. Get a quote",
    description:
      "Certified FD30 and FD60 internal/external fire doors, acoustic seals, panic exit hardware, and glazed fire-rated protective screens.",
    highlights: [
      "FD30, FD60, and FD120 fire door sets",
      "Drop seals, intumescent strips & closers",
      "Glazed fire-rated vision panels & screens",
    ],
    ctaText: "Discuss Fire Doors",
  },
  {
    id: "fire-curtains",
    title: "Fire & Smoke Curtains",
    badge: "Active Barrier",
    metaTitle: "Fire & Smoke Curtains London & Kent | Cosmic Fire",
    metaDescription:
      "Fire and smoke curtains for commercial premises in London & Kent. Contain fire and smoke while keeping escape routes open. Free quote.",
    description:
      "Automated drop-down fire and smoke containment curtains designed for open-plan commercial atriums, elevator lobbies, and escape corridors.",
    highlights: [
      "BS EN 1634 & BS 8524 compliant curtains",
      "Gravity fail-safe automatic deployment",
      "Discreet ceiling recess housing",
    ],
    ctaText: "Discuss Fire Curtains",
  },
  {
    id: "cavity-fire-barriers",
    title: "Cavity Fire Barriers",
    badge: "Concealed Spaces",
    metaTitle: "Cavity Fire Barriers London & Kent | Cosmic Fire",
    metaDescription:
      "Cavity fire barrier installation for commercial buildings in London & Kent. Stop fire and smoke spreading through hidden voids. Get a free quote.",
    description:
      "High-performance cavity barrier systems preventing concealed flame and toxic smoke spread through ceiling voids, raised floors, and partition cavities.",
    highlights: [
      "Mineral wool & foil-faced barrier batts",
      "Tested acoustic & thermal insulation",
      "Rigorously sealed building perimeters",
    ],
    ctaText: "Discuss Fire Barriers",
  },
  {
    id: "penetration-sealing",
    title: "Fire Penetration Sealing",
    badge: "Firestopping",
    metaTitle: "Fire Penetration Sealing London & Kent | Cosmic Fire",
    metaDescription:
      "Fire-stopping and penetration sealing for cables, pipes and ducts in commercial buildings in London & Kent. Restore compartmentation. Free quote.",
    description:
      "Tested firestop collars, intumescent wraps, and elastomeric sealants closing openings around pipework, ducting, and cable trays in fire compartments.",
    highlights: [
      "BS EN 1366 compliant pipe & cable wraps",
      "Intumescent mastic & ablative coated batts",
      "Restores original compartment integrity",
    ],
    ctaText: "Discuss Penetration Sealing",
  },
  {
    id: "intumescent-coatings",
    title: "Intumescent Steel Coatings",
    badge: "Structural Protection",
    metaTitle: "Intumescent Steel Coatings London & Kent | Cosmic Fire",
    metaDescription:
      "Intumescent coatings for structural steel in London & Kent. Fire protection that delays steel failure and supports building compliance. Get a quote.",
    description:
      "Specialist fireproof spray and brush coatings that expand under intense heat to preserve the load-bearing integrity of structural steelwork.",
    highlights: [
      "30, 60, 90 & 120-minute structural ratings",
      "Internal and exposed architectural finishes",
      "DFT gauge verification & sign-off",
    ],
    ctaText: "Discuss Intumescent Coatings",
  },
  {
    id: "fire-extinguisher-servicing",
    title: "Fire Extinguisher Servicing",
    badge: "Compliance & Testing",
    metaTitle: "Fire Extinguisher Servicing London & Kent | Cosmic Fire",
    metaDescription:
      "Fire extinguisher supply and servicing in London & Kent: annual servicing, discharge testing and replacement of water, foam, CO2 and powder units.",
    description:
      "Annual extinguisher servicing, discharge testing, pressure testing, and certified replacement of water, foam, CO2, powder, and wet chemical units.",
    highlights: [
      "BS 5306-3 & BS 5306-8 compliant checks",
      "Certified weight & pressure testing",
      "Complete statutory compliance certificate",
    ],
    ctaText: "Book Extinguisher Service",
  },
];

export const SERVICE_IMAGES: Record<
  string,
  import("../types").ServiceImageMeta
> = {
  "fire-safety-inspection": {
    url: "/images/why-us/01-fire-safety-legislation.webp",
    alt: "Fire safety engineer conducting comprehensive commercial building compliance inspection in London and Kent",
    category: "core",
    tag: "Survey & Inspection",
  },
  "fire-protection-installation": {
    url: "/images/why-us/04-fire-protection-system.webp",
    alt: "Certified technician installing fire protection barriers and door systems",
    category: "core",
    tag: "Certified Installation",
  },
  "fire-maintenance-remedials": {
    url: "/images/why-us/06-fire-protection-maintenance.webp",
    alt: "Fire safety engineer performing routine maintenance and diagnostics on commercial premises",
    category: "core",
    tag: "Statutory Maintenance",
  },
  "fire-doors-screens": {
    url: "/images/services/fire-doors-screens.webp",
    alt: "Certified commercial fire-rated exit doors with panic hardware and glazed screens",
    category: "passive",
    tag: "Doors & Glazed Screens",
  },
  "fire-curtains": {
    url: "/images/services/fire-curtains.webp",
    alt: "Automated flame and smoke containment roller fire curtain in building lobby",
    category: "passive",
    tag: "Smoke & Flame Barrier",
  },
  "cavity-fire-barriers": {
    url: "/images/services/fire-barriers.webp",
    alt: "Fire barrier mineral wool insulation and fire batt installation inside wall cavity",
    category: "passive",
    tag: "Cavity Compartmentation",
  },
  // Backward compatibility alias
  "fire-barriers": {
    url: "/images/services/fire-barriers.webp",
    alt: "Fire barrier mineral wool insulation and fire batt installation inside wall cavity",
    category: "passive",
    tag: "Cavity Compartmentation",
  },
  "penetration-sealing": {
    url: "/images/services/penetration-sealing.webp",
    alt: "Firestop collars and intumescent penetration seals around pipes and cable runs through compartment walls",
    category: "passive",
    tag: "Cable & Pipe Penetrations",
  },
  "intumescent-coatings": {
    url: "/images/services/intumescent-coatings.webp",
    alt: "Specialist technician applying intumescent fireproofing spray coating to structural steel columns",
    category: "passive",
    tag: "Structural Steel Protection",
  },
  "fire-extinguisher-servicing": {
    url: "/images/services/fire-extinguisher-servicing.webp",
    alt: "Certified technician inspecting and servicing commercial fire extinguisher pressure gauge",
    category: "suppression",
    tag: "Compliance & Testing",
  },
};
