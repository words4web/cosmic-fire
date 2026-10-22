import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, RotateCw } from "lucide-react";
import { motion } from "motion/react";
import { WHY_CHOOSE_US_DATA } from "../data/whyUs";

export const WhyCosmicFire: React.FC = () => {
  const [clickedFlippedCard, setClickedFlippedCard] = useState<string | null>(
    null,
  );

  const handleCardClick = (pillarNumber: string) => {
    setClickedFlippedCard((prev) =>
      prev === pillarNumber ? null : pillarNumber,
    );
  };

  return (
    <section
      id="why-cosmic-fire"
      className="py-14 sm:py-20 md:py-28 bg-surface-bg relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#044FB7]/10 border border-[#0489F8]/30 text-[11px] font-mono-tech uppercase tracking-wider text-[#044FB7] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0489F8] shrink-0" />
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
                  alt={WHY_CHOOSE_US_DATA.headline}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {WHY_CHOOSE_US_DATA.pillars.map((pillar, index) => {
                const isClicked = clickedFlippedCard === pillar.number;
                const IconComponent = pillar.icon;

                return (
                  <motion.div
                    key={pillar.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="group perspective-1000 h-64 sm:h-72 w-full cursor-pointer"
                    onClick={() => handleCardClick(pillar.number)}>
                    <div
                      className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                        isClicked
                          ? "rotate-y-180"
                          : "[@media(hover:hover)]:group-hover:rotate-y-180"
                      }`}>
                      <div className="absolute inset-0 backface-hidden p-6 sm:p-7 rounded-2xl bg-surface-card border border-surface-border group-hover:border-[#0489F8]/60 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden">
                        <div className="flex items-center justify-between pb-3 border-b border-surface-border relative z-10">
                          <div className="w-11 h-11 rounded-xl bg-[#044FB7]/10 border border-[#0489F8]/30 flex items-center justify-center text-[#044FB7] group-hover:bg-[#044FB7] group-hover:text-white transition-all duration-300 shadow-xs">
                            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                          </div>

                          <div className="flex items-center gap-1.5 text-[11px] font-mono-tech text-text-secondary">
                            <span className="hidden [@media(hover:hover)]:inline text-[10px] text-text-secondary/70">
                              HOVER TO FLIP
                            </span>
                            <span className="hidden [@media(hover:none)]:inline text-[10px] text-text-secondary/70">
                              TAP TO FLIP
                            </span>
                            <RotateCw className="w-3.5 h-3.5 text-[#0489F8] transition-transform duration-500 group-hover:rotate-180" />
                          </div>
                        </div>

                        <div className="relative z-10 my-auto py-2">
                          <h4 className="font-display font-black text-xl sm:text-2xl text-text-primary group-hover:text-[#044FB7] transition-colors leading-tight tracking-tight">
                            {pillar.title}
                          </h4>
                          <div className="w-8 h-1 bg-[#FC7A21] rounded-full mt-3 group-hover:w-14 transition-all duration-300" />
                        </div>

                        <div className="absolute -bottom-6 -right-6 text-text-primary/[0.04] group-hover:text-[#044FB7]/[0.09] select-none pointer-events-none transition-all duration-500 group-hover:scale-110">
                          <IconComponent className="w-32 h-32 stroke-[1.2]" />
                        </div>
                      </div>

                      <div className="absolute inset-0 backface-hidden rotate-y-180 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#044FB7] via-[#033E91] to-[#022F6E] text-white border border-[#0489F8]/40 shadow-xl flex flex-col justify-start">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15">
                          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[#FC7A21]">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-1 text-[10px] font-mono-tech text-white/80">
                            <CheckCircle2 className="w-4 h-4 text-[#FC7A21]" />
                            <span>CERTIFIED</span>
                          </div>
                        </div>

                        <h4 className="font-display font-bold text-base text-white mb-2 leading-snug">
                          {pillar.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
