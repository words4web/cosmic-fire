import React from "react";
import { ShieldCheck, CheckCircle2, Building2 } from "lucide-react";
import { WHY_CHOOSE_US_DATA } from "../data/whyUs";

export const WhyCosmicFire: React.FC = () => {
  return (
    <section
      id="why-cosmic-fire"
      className="py-14 sm:py-20 md:py-28 bg-surface-bg relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[11px] font-mono-tech uppercase tracking-wider text-brand-primary font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span>{WHY_CHOOSE_US_DATA.tag}</span>
            </div>

            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight leading-[1.12]">
              {WHY_CHOOSE_US_DATA.headline}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
              {WHY_CHOOSE_US_DATA.description}
            </p>

            <div className="rounded-2xl overflow-hidden bg-surface-card border border-surface-border shadow-sm">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt={WHY_CHOOSE_US_DATA.sectionSubtitle}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-6 bg-surface-card border-t border-surface-border">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 border border-brand-primary/20 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-text-primary">
                      {WHY_CHOOSE_US_DATA.sectionSubtitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary mt-1.5 leading-relaxed">
                      {WHY_CHOOSE_US_DATA.closingStatement}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {WHY_CHOOSE_US_DATA.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="group p-5 sm:p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-black/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-border">
                      <span className="text-xs font-mono-tech font-extrabold text-brand-primary px-2 py-0.5 rounded-md bg-brand-primary/10 border border-brand-primary/20">
                        {pillar.number}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-brand-primary/60 group-hover:text-brand-primary transition-colors" />
                    </div>

                    <h4 className="font-display font-bold text-base text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
