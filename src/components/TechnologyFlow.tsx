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
import { PageId } from "../types";
import {
  SectionBadge,
  FeaturePoint,
  RotatingBorderCard,
  ConsultationCtaBanner,
} from "./common";

interface TechnologyFlowProps {
  onNavigate?: (page: PageId) => void;
}

export const TechnologyFlow: React.FC<TechnologyFlowProps> = ({
  onNavigate,
}) => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <SectionBadge pulse className="mb-3">
            Process & Engineering Architecture
          </SectionBadge>

          <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary leading-[1.12]">
            {TECHNOLOGY_FLOW_DATA.headline}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-3 sm:mt-4 leading-relaxed">
            {TECHNOLOGY_FLOW_DATA.description}
          </p>
        </motion.div>

        <div className="relative mb-8 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {TECHNOLOGY_FLOW_DATA.steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <motion.button
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative text-left p-4.5 sm:p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-surface-card border-[#044FB7] shadow-lg shadow-[#044FB7]/10 ring-1 ring-[#044FB7]/20"
                      : "bg-surface-card/60 hover:bg-surface-card border-surface-border hover:border-[#0489F8]/40"
                  }`}>
                  {isActive && (
                    <motion.div
                      layoutId="activeStepGlow"
                      className="absolute inset-0 bg-gradient-to-br from-[#044FB7]/5 via-transparent to-[#FC7A21]/5 pointer-events-none"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#044FB7] text-white shadow-md shadow-[#044FB7]/30 scale-105"
                          : "bg-surface-bg border border-surface-border text-text-secondary group-hover:text-[#044FB7]"
                      }`}>
                      {getStepIcon(idx)}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs font-mono-tech font-bold transition-colors ${
                        isActive ? "text-[#044FB7]" : "text-text-secondary"
                      }`}>
                      STEP {step.stepNumber}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3
                      className={`text-sm sm:text-base font-bold font-display transition-colors ${
                        isActive ? "text-[#044FB7]" : "text-text-primary"
                      }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-secondary mt-1 line-clamp-2 leading-relaxed">
                      {step.shortDesc}
                    </p>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicatorBar"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#044FB7] via-[#0489F8] to-[#FC7A21]"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}>
            <RotatingBorderCard innerClassName="p-6 sm:p-10 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono-tech uppercase tracking-wider text-[#044FB7] font-bold mb-2">
                    <Layers className="w-3.5 h-3.5 text-[#0489F8]" />
                    <span>STAGE {activeStep.stepNumber} EXECUTION</span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.08 }}
                    className="font-display font-bold text-xl sm:text-3xl md:text-4xl text-text-primary mb-3 sm:mb-4">
                    {activeStep.detailTitle}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.12 }}
                    className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                    {activeStep.detailDescription}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="lg:col-span-5 w-full bg-surface-bg p-5 sm:p-6 rounded-2xl border border-surface-border">
                  <span className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-wider text-[#044FB7] font-bold block mb-3">
                    {activeStep.listTitle}
                  </span>

                  <div className="space-y-2">
                    {activeStep.listItems.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: 0.15 + idx * 0.04,
                        }}>
                        <FeaturePoint>{item}</FeaturePoint>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </RotatingBorderCard>
          </motion.div>
        </AnimatePresence>

        {onNavigate && (
          <ConsultationCtaBanner
            onNavigate={onNavigate}
            className="mt-12 sm:mt-16"
          />
        )}
      </div>
    </section>
  );
};
