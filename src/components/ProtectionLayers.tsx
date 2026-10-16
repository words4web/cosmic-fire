import React, { useState } from "react";
import { ShieldCheck, Flame, Layers, CheckCircle2 } from "lucide-react";
import { PROTECTION_LAYERS_DATA } from "../data/layers";

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
      className="py-14 sm:py-20 md:py-28 bg-surface-card relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.12]">
            {PROTECTION_LAYERS_DATA.headline}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
            {PROTECTION_LAYERS_DATA.description}
          </p>

          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                activeTab === "all"
                  ? "bg-brand-primary text-white border-brand-primary shadow-sm scale-[1.02]"
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
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                activeTab === "active"
                  ? "bg-brand-primary text-white border-brand-primary shadow-sm scale-[1.02]"
                  : "bg-surface-bg hover:bg-surface-muted text-text-secondary border-surface-border"
              }`}>
              <Flame className="w-3.5 h-3.5" />
              <span>
                {activeCategory?.title} ({activeCategory?.items.length || 0})
              </span>
            </button>
            <button
              onClick={() => setActiveTab("passive")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                activeTab === "passive"
                  ? "bg-brand-primary text-white border-brand-primary shadow-sm scale-[1.02]"
                  : "bg-surface-bg hover:bg-surface-muted text-text-secondary border-surface-border"
              }`}>
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>
                {passiveCategory?.title} ({passiveCategory?.items.length || 0})
              </span>
            </button>
          </div>
        </div>

        <div className="space-y-10 sm:space-y-14">
          {(activeTab === "all" || activeTab === "active") &&
            activeCategory && (
              <div>
                <div className="flex items-center gap-2 pb-3 mb-5 border-b border-surface-border">
                  <Flame className="w-5 h-5 text-brand-primary shrink-0" />
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                    {activeCategory.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {activeCategory.items.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 sm:p-6 rounded-2xl bg-surface-bg border border-surface-border hover:border-brand-primary/40 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                        <h4 className="font-display font-bold text-base text-text-primary">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {(activeTab === "all" || activeTab === "passive") &&
            passiveCategory && (
              <div>
                <div className="flex items-center gap-2 pb-3 mb-5 border-b border-surface-border">
                  <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0" />
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                    {passiveCategory.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {passiveCategory.items.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 sm:p-6 rounded-2xl bg-surface-bg border border-surface-border hover:border-brand-primary/40 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                        <h4 className="font-display font-bold text-base text-text-primary">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};
