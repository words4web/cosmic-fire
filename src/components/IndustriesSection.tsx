import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  MapPin,
  CheckCircle2,
  Layers,
  Phone,
} from "lucide-react";
import { INDUSTRIES_DATA } from "../data/industries";
import { COMPANY_CONTACT } from "../data/company";
import { PageId } from "../types";

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
      className="py-10 sm:py-16 md:py-24 bg-surface-card relative overflow-hidden border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-surface-bg rounded-2xl sm:rounded-3xl border border-surface-border p-4.5 sm:p-8 md:p-12 mb-8 sm:mb-14 shadow-sm">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-card border border-surface-border text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-brand-primary font-bold mb-3 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span>Multi-Site Coverage</span>
            </div>

            <h2 className="font-display font-black text-xl xs:text-2xl sm:text-3xl md:text-5xl tracking-tight text-text-primary leading-[1.15]">
              {INDUSTRIES_DATA.networkHeadline}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-2.5 sm:mt-4 leading-relaxed max-w-2xl">
              {INDUSTRIES_DATA.networkDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mt-5 sm:mt-6">
              <button
                onClick={handleCtaClick}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-primary/20 cursor-pointer">
                <span>{INDUSTRIES_DATA.networkCtas.planCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-surface-card hover:bg-surface-muted text-text-primary border border-surface-border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer">
                <Phone className="w-3.5 h-3.5 text-brand-primary" />
                <span>{INDUSTRIES_DATA.networkCtas.speakCta}</span>
              </a>
            </div>
          </div>

          <div className="pt-5 sm:pt-6 border-t border-surface-border/70">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
              {INDUSTRIES_DATA.networkPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-surface-card border border-surface-border/80 text-xs sm:text-sm font-semibold text-text-primary">
                  <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-primary shrink-0" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-bg border border-surface-border text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-brand-primary font-bold mb-2.5 sm:mb-3 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
            <span>Tailored Sector Engineering</span>
          </div>
          <h3 className="font-display font-black text-xl xs:text-2xl sm:text-3xl md:text-5xl tracking-tight text-text-primary leading-[1.15]">
            {INDUSTRIES_DATA.premisesHeadline}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-2.5 sm:mt-3 leading-relaxed">
            {INDUSTRIES_DATA.premisesDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {INDUSTRIES_DATA.sectors.map((sector) => (
            <div
              key={sector.id}
              className="group relative p-[2px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-[-100%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0_260deg,rgba(255,77,10,0.3)_290deg,rgba(255,77,10,0.9)_330deg,#ffffff_355deg,rgba(255,77,10,1)_360deg)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full w-full rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] bg-surface-bg p-4.5 sm:p-7 flex flex-col justify-between z-10">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-surface-border">
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-brand-primary font-bold">
                      Sector Focus
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-brand-primary shadow-xs">
                      <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-lg sm:text-2xl text-text-primary mb-2 sm:mb-3">
                    {sector.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 sm:mb-6">
                    {sector.description}
                  </p>

                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {sector.keyAreas.map((area, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg bg-surface-card border border-surface-border text-xs font-semibold text-text-primary">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-surface-border">
                  <button
                    onClick={handleCtaClick}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm shadow-brand-primary/20 cursor-pointer group/btn">
                    <span>{sector.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
