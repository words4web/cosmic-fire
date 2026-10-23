import { IndustriesContent } from "../types";

export const INDUSTRIES_DATA: IndustriesContent = {
  networkHeadline: "Protection That Works Across Your Network",
  networkDescription:
    "Whether you manage one premises or multiple locations, we help our clients keep their fire protection organised, consistent and suited to the needs of each site.",
  networkCtas: {
    planCta: "Plan Your Protection",
    speakCta: "Speak to an Expert",
  },
  networkPoints: [
    "Fire Protection Across London & Kent",
    "Business-Focused Service",
    "Quality Fire Equipment",
    "Ongoing Client Support",
    "Planned Fire Protection",
  ],
  premisesHeadline: "Protection for All Premises",
  premisesDescription:
    "Every business will have its own requirements in terms of fire risk, and we work with a variety of clients in different sectors to help them get the protection they need in their premises, according to the people, activities, equipment, and things that are there.",
  sectors: [
    {
      id: "office-buildings",
      category: "office",
      title: "Office Buildings",
      description:
        "From electrical equipment and premises to kitchens and shared facilities, we can advise on fire protection that can be integrated into the daily practices of the business.",
      ctaText: "Protect Your Business",
    },
    {
      id: "retail-premises",
      category: "retail",
      title: "Retail Premises",
      description:
        "Protection for retail premises should take account of customers, staff, stock and electrical equipment, as well as being able to gain access to the crucial fire protection systems.",
      ctaText: "Protect Your Retail Space",
    },
    {
      id: "hospitality-venues",
      category: "hospitality",
      title: "Hospitality Venues",
      description:
        "Restaurants and other hospitality venues can have a variety of risks from their kitchens, dining areas, storage spaces and guest areas.",
      ctaText: "Protect Your Venue",
    },
    {
      id: "industrial-premises",
      category: "industrial",
      title: "Industrial Premises",
      description:
        "Industrial premises can house a range of machinery, electrical equipment, stock and potentially combustible materials, and require fire protection suited to the risks of all those working within.",
      ctaText: "Protect Your Facility",
    },
    {
      id: "educational-establishments",
      category: "education",
      title: "Educational Establishments",
      description:
        "Schools and other educational establishments need fire protection that considers their pupils and staff, and the ways of working that they follow across classrooms, laboratories and shared areas.",
      ctaText: "Protect Your Campus",
    },
    {
      id: "healthcare-environments",
      category: "healthcare",
      title: "Healthcare Environments",
      description:
        "Healthcare environments present a range of considerations in terms of staff, patients, equipment and premises, and require fire protection planning that can be integrated into the crucial operations of the area.",
      ctaText: "Discuss Your Requirements",
    },
  ],
};

export const INDUSTRY_IMAGES: Record<string, { url: string; alt: string }> = {
  "office-buildings": {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    alt: "Modern commercial open-plan office facility",
  },
  "retail-premises": {
    url: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
    alt: "Commercial retail premises and storefront",
  },
  "hospitality-venues": {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    alt: "Hospitality venue dining room and kitchen facilities",
  },
  "industrial-premises": {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    alt: "Industrial warehouse and logistics facility",
  },
  "educational-establishments": {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    alt: "Educational campus building and shared corridors",
  },
  "healthcare-environments": {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    alt: "Healthcare clinic and patient care environment",
  },
};
