import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Flame, Layers, CheckCircle2 } from "lucide-react";
import { PROTECTION_LAYERS_DATA } from "../data/layers";
import { SectionBadge, RotatingBorderCard } from "./common";

export const ProtectionLayers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "active" | "passive">(
    "all",
  );

  const activeCategory = PROTECTION_LAYERS_DATA.layers.find(
    (l) => l.id === "active",
  );
  const passiveCategory = PROTECTION_LAYERS_DATA.layers.find(
    (l) => l.id === "passive",
  );

  return (
    <section
      id="protection-layers"
      className="py-10 sm:py-16 md:py-24 bg-surface-card relative overflow-hidden border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <SectionBadge pulse icon={Layers} className="mb-2.5 sm:mb-3">
            Multi-Tier Defence Architecture
          </SectionBadge>

          <h2 className="font-display font-black text-xl xs:text-2xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.15]">
            {PROTECTION_LAYERS_DATA.headline}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-2.5 sm:mt-4 leading-relaxed">
            {PROTECTION_LAYERS_DATA.description}
          </p>

          <div className="flex items-center justify-start sm:justify-center gap-2 mt-5 sm:mt-6 overflow-x-auto pb-2 scrollbar-none -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
            <button
              onClick={() => setActiveTab("all")}
              className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer border ${
                activeTab === "all"
                  ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                  : "bg-surface-bg hover:bg-surface-muted text-text-secondary border-surface-border"
              }`}>
              All Layers (
              {PROTECTION_LAYERS_DATA.layers.reduce(
                (acc, l) => acc + l.items.length,
                0,
              )}
              )
            </button>
            <button
              onClick={() => setActiveTab("active")}
              className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer border ${
                activeTab === "active"
                  ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                  : "bg-surface-bg hover:bg-surface-muted text-text-secondary border-surface-border"
              }`}>
              Active Protection ({activeCategory?.items.length || 0})
            </button>
            <button
              onClick={() => setActiveTab("passive")}
              className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer border ${
                activeTab === "passive"
                  ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                  : "bg-surface-bg hover:bg-surface-muted text-text-secondary border-surface-border"
              }`}>
              Passive Protection ({passiveCategory?.items.length || 0})
            </button>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-14">
          {(activeTab === "all" || activeTab === "active") &&
            activeCategory && (
              <div>
                <div className="flex items-center gap-2 mb-4 sm:mb-5 pb-2.5 sm:pb-3 border-b border-surface-border">
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary shrink-0" />
                  <h3 className="font-display font-bold text-lg sm:text-2xl text-text-primary">
                    {activeCategory.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
                  {activeCategory.items.map((item) => (
                    <RotatingBorderCard
                      key={item.id}
                      innerClassName="p-4.5 sm:p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-primary shrink-0" />
                          <h4 className="font-display font-bold text-sm sm:text-lg text-text-primary">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </RotatingBorderCard>
                  ))}
                </div>
              </div>
            )}

          {(activeTab === "all" || activeTab === "passive") &&
            passiveCategory && (
              <div>
                <div className="flex items-center gap-2 mb-4 sm:mb-5 pb-2.5 sm:pb-3 border-b border-surface-border">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary shrink-0" />
                  <h3 className="font-display font-bold text-lg sm:text-2xl text-text-primary">
                    {passiveCategory.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
                  {passiveCategory.items.map((item) => (
                    <RotatingBorderCard
                      key={item.id}
                      innerClassName="p-4.5 sm:p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-primary shrink-0" />
                          <h4 className="font-display font-bold text-sm sm:text-lg text-text-primary">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </RotatingBorderCard>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};
