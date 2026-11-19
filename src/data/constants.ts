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
    status: "online",
    x: 74,
    y: 28,
    floor: "Floor 03 — Plant Room",
    iconName: "Droplets",
  },
  {
    id: "fire-door",
    name: "Fire Door (FD60)",
    shortName: "Fire Door",
    category: "Passive Containment",
    description:
      "Precision engineered 60-minute fire-rated solid timber core doorset with perimeter intumescent seals and drop-down smoke barriers.",
    specs: [
      "BS 476 Part 22 certified",
      "Acoustic rating up to 42dB",
      "Electromagnetic auto-close mechanism",
    ],
    status: "online",
    x: 35,
    y: 45,
    floor: "Floor 02 — Stairwell Enclosure",
    iconName: "DoorClosed",
  },
  {
    id: "extinguisher",
    name: "CO2 Fire Extinguisher",
    shortName: "Extinguisher",
    category: "Suppression Equipment",
    description:
      "Pressurized carbon dioxide discharge unit engineered specifically for electrical fire risks and high-value server infrastructure.",
    specs: [
      "5kg Class B & Electrical rating",
      "Frost-free composite discharge horn",
      "BS EN3 compliant fabrication",
    ],
    status: "online",
    x: 48,
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
  "Fire Door Inspections",
  "Fire Door Installation",
  "Fire Door Maintenance",
  "Fire Stopping",
  "Fire Door Manufacturing",
  "Steel Doors",
];

export const NAV_ITEMS: { id: PageId; label: string; hasDropdown?: boolean }[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services", hasDropdown: true },
  { id: "about", label: "About" },
];
