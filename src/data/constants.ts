import { HotspotItem, PageId } from "../types";

export const HERO_HOTSPOTS: HotspotItem[] = [
  {
    id: "smoke-detection",
    name: "Smoke Detection",
    shortName: "Smoke Detection",
    category: "Early Warning",
    description:
      "Multi-criteria optical and thermal sensors calibrated for ultra-fast particle detection prior to visible flame generation.",
    specs: [
      "Dual-wavelength optical chamber",
      "Zero false-alarm AI drift compensation",
      "Addressable loop telemetry",
    ],
    status: "online",
    x: 58,
    y: 18,
    floor: "Floor 04 — Executive Suite",
    iconName: "ShieldAlert",
  },
  {
    id: "fire-alarm",
    name: "Fire Alarm",
    shortName: "Fire Alarm",
    category: "Notification & Evacuation",
    description:
      "Synchronized visual strobes and multi-frequency directional voice acoustic arrays guiding safe egress across all occupant zones.",
    specs: [
      "95dB EN54 compliant sounders",
      "High-candela multi-tap strobes",
      "Dynamic pathway illumination",
    ],
    status: "online",
    x: 52,
    y: 31,
    floor: "Floor 03 — Open Workspace",
    iconName: "Bell",
  },
  {
    id: "sprinkler-system",
    name: "Sprinkler System",
    shortName: "Sprinkler System",
    category: "Active Suppression",
    description:
      "Pre-action and wet-pipe rapid response fast-acting ESFR sprinkler heads with engineered hydraulic pipe network distribution.",
    specs: [
      "Quick-response thermal bulb (68°C)",
      "K-Factor 14.0/16.8 high density",
      "Monitored supervisory flow switches",
    ],
    status: "monitoring",
    x: 88,
    y: 17,
    floor: "Roof & Level 04 Perimeter",
    iconName: "Droplets",
  },
  {
    id: "fire-control-panel",
    name: "Fire Control Panel",
    shortName: "Fire Control Panel",
    category: "Core Command Hub",
    description:
      "Central networked addressable intelligence unit continuously polling up to 4,000 sub-devices with redundant fiber link failover.",
    specs: [
      "Quad-loop EN54/UL864 Listed",
      "Sub-millisecond loop isolation",
      "Direct BMS & emergency service relay",
    ],
    status: "online",
    x: 75,
    y: 40,
    floor: "Floor 02 — Server & Core Hub",
    iconName: "Cpu",
  },
  {
    id: "fire-extinguisher",
    name: "Fire Extinguisher",
    shortName: "Fire Extinguisher",
    category: "Manual First Response",
    description:
      "Strategically recessed clean-agent and multi-class pressurized extinguishing points with wireless pressure gauge monitoring.",
    specs: [
      "Class A, B, C & Electrical rated",
      "Clean non-conductive residue-free agent",
      "IoT pressure & tamper sensor",
    ],
    status: "online",
    x: 50,
    y: 52,
    floor: "Floor 01 — Public Reception",
    iconName: "Flame",
  },
  {
    id: "emergency-exit",
    name: "Emergency Exit",
    shortName: "Emergency Exit",
    category: "Safe Evacuation",
    description:
      "Photoluminescent illuminated emergency egress signage with integrated fail-safe magnetic release and smoke barrier seals.",
    specs: [
      "3-Hour battery backup illumination",
      "Positive pressure stairwell integration",
      "Anti-panic push bar mechanism",
    ],
    status: "online",
    x: 91,
    y: 50,
    floor: "Ground — East Perimeter Egress",
    iconName: "LogOut",
  },
];

export const CONSULTATION_SERVICES = [
  "Fire Risk Assessment",
  "Fire Detection Systems",
  "Fire Alarm & Voice EVAC",
  "Clean Agent Fire Suppression",
  "Sprinkler Systems & Water Deluge",
  "Inspection & Maintenance Program",
  "Emergency Lighting & Wayfinding",
  "Fire Safety Consultation & CFD",
  "Other / Custom Facility Architecture",
];

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "solutions", label: "Solutions" },
  { id: "protection", label: "Protection" },
  { id: "industries", label: "Industries" },
  { id: "technology", label: "Technology" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
