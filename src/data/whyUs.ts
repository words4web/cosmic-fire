import type { LucideIcon } from "lucide-react";
import { Scale, Flame, AlertTriangle, Cpu, Siren, Wrench } from "lucide-react";

export interface ProtectionPillar {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt?: string;
}

export interface WhyChooseUsData {
  tag: string;
  headline: string;
  description: string;
  pillars: ProtectionPillar[];
}

export const WHY_CHOOSE_US_DATA: WhyChooseUsData = {
  tag: "Why Choose Cosmic Fire",
  headline: "Engineered for What's at Stake",
  description:
    "There are numerous fire hazards that can occur in a business, such as electrical equipment and kitchen appliances, along with machinery, storage spaces, and public areas. Cosmic Fire Solution can assist you with identifying what fire protection needs you have to achieve safer premises, be prepared and to comply.",
  pillars: [
    {
      number: "01",
      title: "Fire Safety Legislation",
      description:
        "We can suggest the optimal fire protection while considering the relevant fire safety regulations and premises-specific requirements.",
      icon: Scale,
      image: "/images/why-us/01-fire-safety-legislation.webp",
      imageAlt:
        "Commercial fire safety compliance audit and regulatory legislation review in London and Kent",
    },
    {
      number: "02",
      title: "Fire Protection Equipment",
      description:
        "We recommend the proper fire protection equipment that would suit your needs and premises. We will consider all the details and specifics.",
      icon: Flame,
      image: "/images/why-us/02-fire-protection-equipment.webp",
      imageAlt:
        "Commercial certified fire protection equipment, extinguishers, and suppression systems",
    },
    {
      number: "03",
      title: "Fire Hazard Protection",
      description:
        "We will point out and eliminate all the fire hazards, thus ensuring that all the needed fire protection equipment will be available in case of an emergency.",
      icon: AlertTriangle,
      image: "/images/why-us/03-fire-hazard-protection.webp",
      imageAlt:
        "Fire risk assessment engineer identifying and mitigating industrial hazards on site",
    },
    {
      number: "04",
      title: "Fire Protection System",
      description:
        "We provide all the fire protection equipment, such as extinguishers, fire alarms, and detectors, and can organize them into an intelligent fire protection system according to your premises’ needs.",
      icon: Cpu,
      image: "/images/why-us/04-fire-protection-system.webp",
      imageAlt:
        "Commercial integrated fire alarm and automatic smoke detection system installation",
    },
    {
      number: "05",
      title: "Emergency Fire Protection",
      description:
        "We assist our clients in organizing and properly equipping their workplace or home with fire emergency response equipment.",
      icon: Siren,
      image: "/images/why-us/05-emergency-fire-protection.webp",
      imageAlt:
        "Commercial emergency fire evacuation response protocols and emergency lighting systems",
    },
    {
      number: "06",
      title: "Fire Protection Maintenance",
      description:
        "Our company offers professional fire protection equipment maintenance services that help to ensure that your equipment is always in proper working condition.",
      icon: Wrench,
      image: "/images/why-us/06-fire-protection-maintenance.webp",
      imageAlt:
        "Routine fire protection maintenance and annual statutory testing by certified engineers",
    },
  ],
};
