import { DETAILED_SERVICES_DATA, SERVICE_IMAGES } from "../data/services";
import { PageId } from "../types";
import { ServiceCard } from "./ServiceCard";

export const ServicesShowcase = ({
  onNavigate,
}: {
  onNavigate: (page: PageId) => void;
}) => {
  return (
    <section
      id="services-section"
      className="py-14 sm:py-20 md:py-28 bg-surface-bg relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8 border-b border-surface-border">
          <div className="max-w-3xl">
            <span className="text-[11px] sm:text-xs font-mono-tech uppercase tracking-widest text-[#044FB7] font-bold block mb-2">
              COMMERCIAL FIRE ENGINEERING
            </span>
            <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.12]">
              COMMERCIAL FIRE PROTECTION{" "}
              <span className="text-[#044FB7]">SERVICES</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-3 leading-relaxed max-w-2xl font-sans">
              Comprehensive inspection, certified installation, and scheduled statutory maintenance tailored to UK commercial compliance and safety regulations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-10">
          {DETAILED_SERVICES_DATA.map((service) => {
            const imageMeta = SERVICE_IMAGES[service.id] || {
              url: "/images/services/fire-door-inspections.webp",
              alt: service.title,
              category: "core",
              tag: "Certified Service",
            };

            return (
              <ServiceCard
                key={service.id}
                service={service}
                imageMeta={imageMeta}
                onNavigate={onNavigate}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
