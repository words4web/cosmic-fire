import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldAlert,
  Flame,
  BellRing,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";
import { TECHNOLOGY_FLOW_DATA } from "../data/technology";
import { SectionBadge, FeaturePoint, RotatingBorderCard } from "./common";

export const TechnologyFlow: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = TECHNOLOGY_FLOW_DATA.steps[activeStepIndex];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldAlert className="w-5 h-5" />;
      case 1:
        return <Flame className="w-5 h-5" />;
      case 2:
        return <BellRing className="w-5 h-5" />;
      case 3:
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="technology-section"
      className="py-12 sm:py-16 md:py-24 bg-surface-bg relative overflow-hidden border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <SectionBadge pulse className="mb-3">
            Process & Engineering Architecture
          </SectionBadge>

          <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary leading-[1.12]">
            {TECHNOLOGY_FLOW_DATA.headline}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-3 sm:mt-4 leading-relaxed">
            {TECHNOLOGY_FLOW_DATA.description}
          </p>
        </div>

        <div className="relative mb-8 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {TECHNOLOGY_FLOW_DATA.steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-4.5 sm:p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? "bg-surface-card border-brand-primary shadow-lg shadow-brand-primary/10 ring-1 ring-brand-primary/20 scale-[1.01]"
                      : "bg-surface-card/60 hover:bg-surface-card border-surface-border"
                  }`}>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-brand-primary text-white"
                          : "bg-surface-bg border border-surface-border text-text-secondary"
                      }`}>
                      {getStepIcon(idx)}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs font-mono-tech font-bold ${
                        isActive ? "text-brand-primary" : "text-text-secondary"
                      }`}>
                      STEP {step.stepNumber}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-text-primary font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-secondary mt-1 line-clamp-2 leading-relaxed">
                      {step.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}>
            <RotatingBorderCard innerClassName="p-6 sm:p-10 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono-tech uppercase tracking-wider text-brand-primary font-bold mb-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>STAGE {activeStep.stepNumber} EXECUTION</span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-3xl md:text-4xl text-text-primary mb-3 sm:mb-4">
                    {activeStep.detailTitle}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                    {activeStep.detailDescription}
                  </p>
                </div>

                <div className="lg:col-span-5 w-full bg-surface-bg p-5 sm:p-6 rounded-2xl border border-surface-border">
                  <span className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-wider text-brand-primary font-bold block mb-3">
                    {activeStep.listTitle}
                  </span>

                  <div className="space-y-2">
                    {activeStep.listItems.map((item, idx) => (
                      <FeaturePoint key={idx}>{item}</FeaturePoint>
                    ))}
                  </div>
                </div>
              </div>
            </RotatingBorderCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
