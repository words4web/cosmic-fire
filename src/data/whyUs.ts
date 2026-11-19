import type { LucideIcon } from "lucide-react";
import {
  FileCheck,
  ShieldCheck,
  Wrench,
  Flame,
  Hammer,
  Shield,
} from "lucide-react";

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

export const WHY_CHOOSE_US_DATA: WhyChooseUsData = {
  tag: "Why Choose Cosmic Fire",
  headline: "Built for Purpose by Certified Specialists",
  description:
    "We provide certified fire door and passive fire protection services across London and Kent. From full inspections and expert installations to routine maintenance, bespoke manufacturing, and certified steel doors, we ensure your building is safe, fully compliant, and protected.",
  pillars: [
    {
      number: "01",
      title: "Fire Door Inspections",
      description:
        "We check and test all components of your fire doors — including leaves, frames, seals, hinges, and closers — and issue full compliance certification.",
      icon: FileCheck,
      image: "/images/services/fire-door-inspections.webp",
      imageAlt:
        "Certified UK fire safety specialist inspecting commercial fire door leaf gap and intumescent seal",
      serviceId: "fire-door-inspections",
    },
    {
      number: "02",
      title: "Fire Door Installation",
      description:
        "Industry standard, certificated installations by fully qualified carpenters ensuring every component performs to its rated fire resistance.",
      icon: ShieldCheck,
      image: "/images/services/fire-door-installation.webp",
      imageAlt:
        "Qualified carpenter fitting a certified solid timber commercial fire door assembly",
      serviceId: "fire-door-installation",
    },
    {
      number: "03",
      title: "Fire Door Maintenance",
      description:
        "The resistance capabilities of fire doors can be seriously compromised if not properly maintained. We repair and adjust doors to keep them fully certified.",
      icon: Wrench,
      image: "/images/services/fire-door-maintenance.webp",
      imageAlt:
        "Fire door maintenance specialist servicing overhead closer and checking perimeter smoke seals",
      serviceId: "fire-door-maintenance",
    },
    {
      number: "04",
      title: "Fire Stopping",
      description:
        "Sealing openings around pipes, cables, and ducting to create fire-resisting compartments that prevent smoke and fire from spreading through buildings.",
      icon: Flame,
      image: "/images/services/fire-stopping.webp",
      imageAlt:
        "Certified technician installing passive fire stopping seals and collars around wall penetrations",
      serviceId: "fire-stopping",
    },
    {
      number: "05",
      title: "Fire Door Manufacturing",
      description:
        "We manufacture bespoke fire doors to match any style of decor whilst adhering to all fire safety regulations and acoustic requirements.",
      icon: Hammer,
      image: "/images/services/fire-door-manufacturing.webp",
      imageAlt:
        "Bespoke commercial fire door manufacturing in timber joinery workshop",
      serviceId: "fire-door-manufacturing",
    },
    {
      number: "06",
      title: "Steel Doors",
      description:
        "Our high-performance steel fire doors are certified for up to 4 hours, providing a robust, secure, and low-maintenance fire protection solution.",
      icon: Shield,
      image: "/images/services/steel-doors.webp",
      imageAlt:
        "High performance 4-hour rated industrial steel fire exit door with panic push bar",
      serviceId: "steel-doors",
    },
  ],
};
