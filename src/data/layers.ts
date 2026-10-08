export interface LayerItem {
  id: string;
  title: string;
  description: string;
}

export interface ProtectionLayerCategory {
  id: "active" | "passive";
  title: string;
  items: LayerItem[];
}

export interface ProtectionLayersData {
  headline: string;
  description: string;
  layers: ProtectionLayerCategory[];
}

export const PROTECTION_LAYERS_DATA: ProtectionLayersData = {
  headline: "One System. Multiple Layers of Protection",
  description:
    "Fire protection solutions provide maximum protection when multiple solutions are used in combination. From fire detection and alarms through to suppression, extinguishers and passive fire protection, our fire protection solutions work across multiple layers of protection to provide our clients with greater safety, security and confidence.",
  layers: [
    {
      id: "active",
      title: "Active Fire Protection",
      items: [
        {
          id: "detection-systems",
          title: "Fire Detection Systems",
          description:
            "Detect potential fire conditions at an early stage, giving valuable time to respond.",
        },
        {
          id: "alarm-systems",
          title: "Fire Alarm Systems",
          description:
            "Give warning of fire conditions, giving occupants an opportunity to react.",
        },
        {
          id: "fire-suppression",
          title: "Fire Suppression",
          description:
            "Give added protection through automated fire suppression measures.",
        },
        {
          id: "extinguisher-solutions",
          title: "Fire Extinguisher Solutions",
          description:
            "Respond to early fire conditions using designated extinguishing equipment.",
        },
        {
          id: "extinguisher-servicing",
          title: "Fire Extinguisher Servicing",
          description:
            "Keep essential fire-fighting equipment in excellent working order.",
        },
      ],
    },
    {
      id: "passive",
      title: "Passive Fire Protection",
      items: [
        {
          id: "fire-curtains",
          title: "Fire Curtains",
          description:
            "Help contain fire and smoke by creating a temporary barrier across openings.",
        },
        {
          id: "intumescent-coatings",
          title: "Intumescent Coatings",
          description:
            "Provide fire-resistant protection to suitable structural steel and other applications.",
        },
        {
          id: "fire-barriers",
          title: "Fire Barriers",
          description:
            "Help prevent the spread of fire and smoke through concealed and cavity spaces.",
        },
        {
          id: "doors-and-screens",
          title: "Fire Doors & Screens",
          description:
            "Help contain fire and smoke between rooms, areas and protected escape routes.",
        },
        {
          id: "emergency-signage",
          title: "Emergency Signage",
          description:
            "Provide clear fire safety and emergency information where it is required.",
        },
        {
          id: "dry-lining",
          title: "Dry Lining",
          description:
            "Provide a practical building solution that can support fire safety and other building requirements.",
        },
        {
          id: "air-sealing",
          title: "Air Sealing",
          description:
            "Help reduce air leakage and support the fire performance of building areas where required.",
        },
        {
          id: "penetration-sealing",
          title: "Penetration Sealing",
          description:
            "Seal openings around services and penetrations to help maintain fire compartmentation.",
        },
        {
          id: "class-0-painting",
          title: "Class 0 Fire Rated Painting",
          description:
            "Provide additional surface fire protection for suitable walls and ceilings where required.",
        },
      ],
    },
  ],
};
