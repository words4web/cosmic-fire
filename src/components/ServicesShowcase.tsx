import { useState } from "react";
import { DETAILED_SERVICES_DATA, SERVICE_IMAGES } from "../data/services";
import { PageId } from "../types";
import { ServiceCard } from "./ServiceCard";

export const ServicesShowcase = ({
  onNavigate,
}: {
  onNavigate: (page: PageId) => void;
}) => {
  const [clickedFlippedService, setClickedFlippedService] = useState<
    string | null
  >(null);

  const handleCardClick = (serviceId: string) => {
    setClickedFlippedService((prev) => (prev === serviceId ? null : serviceId));
  };

  return (
    <section
      id="services-section"
      className="py-14 sm:py-20 md:py-28 bg-surface-bg relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8 border-b border-surface-border">
          <div className="max-w-3xl">
            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.12]">
              ENGINEERED FIRE PROTECTION{" "}
              <span className="text-brand-primary">SOLUTIONS</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-8">
          {DETAILED_SERVICES_DATA.map((service) => {
            const imageMeta = SERVICE_IMAGES[service.id] || {
              url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
              alt: service.title,
              category: "detection",
              tag: "Certified Service",
            };

            return (
              <ServiceCard
                key={service.id}
                service={service}
                imageMeta={imageMeta}
                isFlipped={clickedFlippedService === service.id}
                onCardClick={handleCardClick}
                onNavigate={onNavigate}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
