import React from "react";
import { ShieldCheck, Building2, Droplets, Layers } from "lucide-react";
import { WHY_CHOOSE_US_DATA } from "../data/whyUs";
import { RotatingBorderCard } from "./common";

export const WhyCosmicFire: React.FC = () => {
  return (
    <section
      id="why-cosmic-fire"
      className="py-10 sm:py-16 md:py-24 bg-surface-bg relative overflow-hidden border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-14">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-surface-card border border-surface-border shadow-xl group">
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Engineered fire sprinkler system with orange glow"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center opacity-75 group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-black/30" />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-2 border-brand-primary animate-pulse-glow opacity-80" />
                  <div className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-brand-primary opacity-90 shadow-[0_0_25px_rgba(255,77,10,0.8)]" />
                  <div className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-brand-accent animate-spin [animation-duration:35s] opacity-75" />
                  <div className="absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-primary shadow-[0_0_20px_#FF4D0A]" />
                </div>

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-surface-card/90 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-brand-primary/40 text-[9px] sm:text-[10px] font-mono-tech text-text-primary">
                  <span className="text-brand-primary font-bold">FIG 4.2</span>{" "}
                  // HIGH-VELOCITY DISCHARGE
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between bg-surface-card/90 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-surface-border text-[11px] sm:text-xs font-mono-tech text-text-primary">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-primary" />
                    <span>Response Temp: 68°C</span>
                  </div>
                  <span className="text-brand-primary font-bold">
                    K-Factor 16.8
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2.5 sm:mb-4">
              <span className="w-4 sm:w-5 h-[2px] bg-brand-primary" />
              <span className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-brand-primary font-bold">
                {WHY_CHOOSE_US_DATA.tag}
              </span>
            </div>

            <h2 className="font-display font-black text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary leading-[1.12] mb-3 sm:mb-6">
              {WHY_CHOOSE_US_DATA.headline}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed mb-4 sm:mb-8 max-w-2xl">
              {WHY_CHOOSE_US_DATA.description}
            </p>

            <div className="p-3.5 sm:p-5 rounded-2xl bg-surface-card border border-surface-border flex items-start gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-surface-bg border border-surface-border flex items-center justify-center text-brand-primary shrink-0 mt-0.5 shadow-xs">
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-text-primary font-display mb-0.5 sm:mb-1">
                  {WHY_CHOOSE_US_DATA.sectionSubtitle}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {WHY_CHOOSE_US_DATA.closingStatement}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 sm:mb-8">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-brand-primary" />
            <h3 className="font-display font-bold text-base sm:text-xl text-text-primary">
              {WHY_CHOOSE_US_DATA.sectionSubtitle}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {WHY_CHOOSE_US_DATA.pillars.map((pillar) => (
            <RotatingBorderCard
              key={pillar.number}
              innerClassName="p-4.5 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-surface-border">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-surface-bg border border-surface-border text-brand-primary flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono-tech font-bold text-brand-primary">
                    PILLAR {pillar.number}
                  </span>
                </div>

                <h4 className="text-sm sm:text-lg font-bold text-text-primary mb-1.5 sm:mb-2 font-display">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </RotatingBorderCard>
          ))}
        </div>
      </div>
    </section>
  );
};
