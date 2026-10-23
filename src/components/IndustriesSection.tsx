import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { INDUSTRIES_DATA, INDUSTRY_IMAGES } from "../data/industries";
import { COMPANY_CONTACT } from "../data/company";
import { PageId } from "../types";
import { SectorCard } from "./SectorCard";

export const IndustriesSection = ({
  onNavigate,
}: {
  onNavigate: (page: PageId) => void;
}) => {
  const handleCtaClick = () => {
    onNavigate("contact");
  };

  return (
    <section
      id="industries-section"
      className="py-14 sm:py-20 md:py-28 bg-surface-card relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-bg rounded-2xl sm:rounded-3xl border border-surface-border p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 shadow-sm">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.12]">
              {INDUSTRIES_DATA.networkHeadline}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-3 sm:mt-4 leading-relaxed max-w-2xl">
              {INDUSTRIES_DATA.networkDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6">
              <button
                onClick={handleCtaClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-primary/20 cursor-pointer">
                <span>{INDUSTRIES_DATA.networkCtas.planCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-card hover:bg-surface-muted text-text-primary border border-surface-border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer">
                <Phone className="w-3.5 h-3.5 text-brand-primary" />
                <span>{INDUSTRIES_DATA.networkCtas.speakCta}</span>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-surface-border/70">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              {INDUSTRIES_DATA.networkPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-card border border-surface-border/80 text-xs sm:text-sm font-semibold text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 sm:mb-12 max-w-4xl text-center mx-auto">
          <h3 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.12]">
            {INDUSTRIES_DATA.premisesHeadline}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-3 leading-relaxed max-w-3xl mx-auto">
            {INDUSTRIES_DATA.premisesDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES_DATA.sectors.map((sector) => {
            const image = INDUSTRY_IMAGES[sector.id] || {
              url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
              alt: sector.title,
            };

            return (
              <SectorCard
                key={sector.id}
                sector={sector}
                image={image}
                onCtaClick={handleCtaClick}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
