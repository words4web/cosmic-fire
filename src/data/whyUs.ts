import type { LucideIcon } from "lucide-react";
import {
  FileCheck,
  ShieldCheck,
  Wrench,
  Flame,
  Hammer,
  Shield,
  Layers,
  Paintbrush,
  BrickWall,
  Wind,
} from "lucide-react";
import { DETAILED_SERVICES_DATA, SERVICE_IMAGES } from "./services";

export interface ProtectionPillar {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt?: string;
  serviceId: string;
}

export interface WhyChooseUsData {
  tag: string;
  headline: string;
  description: string;
  pillars: ProtectionPillar[];
}

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "fire-door-inspections": FileCheck,
  "fire-door-installation": ShieldCheck,
  "fire-door-maintenance": Wrench,
  "fire-stopping": Flame,
  "fire-door-manufacturing": Hammer,
  "steel-doors": Shield,
  "fire-curtains": Layers,
  "intumescent-coatings": Paintbrush,
  "fire-barriers": BrickWall,
  "air-sealing": Wind,
};

export const WHY_CHOOSE_US_DATA: WhyChooseUsData = {
  tag: "Why Choose Cosmic Fire",
  headline: "Built for Purpose by Certified Specialists",
  description:
    "We provide certified fire door and passive fire protection services across London and Kent. From full inspections and expert installations to routine maintenance, bespoke manufacturing, structural coatings, and fire barriers, we ensure your building is safe, fully compliant, and protected.",
  pillars: DETAILED_SERVICES_DATA.map((service, index) => {
    const imageMeta = SERVICE_IMAGES[service.id];
    return {
      number: String(index + 1).padStart(2, "0"),
      title: service.title,
      description: service.description,
      icon: SERVICE_ICONS[service.id] || ShieldCheck,
      image: imageMeta?.url || "/images/services/fire-door-inspections.webp",
      imageAlt: imageMeta?.alt || service.title,
      serviceId: service.id,
    };
  }),
};
