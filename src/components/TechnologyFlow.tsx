import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Radio,
  Megaphone,
  Sliders,
  ShieldCheck,
  ArrowRight,
  Activity,
  CheckCircle2,
  Clock,
  Cpu,
} from "lucide-react";
import { TECH_STEPS } from "../data/constants";

export const TechnologyFlow: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = TECH_STEPS[activeStepIndex];

  const getStepIcon = (icon: string) => {
    switch (icon) {
      case "Radio":
        return <Radio className="w-5 h-5" />;
      case "Megaphone":
        return <Megaphone className="w-5 h-5" />;
      case "Sliders":
        return <Sliders className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="technology-section"
      className="py-24 bg-[#F8F5ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF8] border border-[#E7DED0] text-xs font-mono-tech uppercase tracking-widest text-[#FF4D0A] font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF4D0A] animate-pulse" />
            AUTOMATED COMMAND CASCADE
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#171B18] leading-[1.05]">
            DETECT. ALERT. RESPOND.
          </h2>

          <p className="text-base text-[#52514B] mt-4">
            Sub-second synchronization between continuous thermal sensing, clear
            directional acoustic guidance, and targeted mechanical containment.
          </p>
        </div>

        {/* The Animated Orange Flow Bar (Step Switcher) */}
        <div className="relative mb-16">
          {/* Background Connecting Bar */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-[#E7DED0] -translate-y-1/2 z-0" />

          {/* Animated Orange Active Flow Highlight */}
          <div
            className="hidden md:block absolute top-1/2 left-10 h-1 bg-gradient-to-r from-[#FF4D0A] to-[#FF6A00] -translate-y-1/2 z-0 transition-all duration-500"
            style={{
              width: `${(activeStepIndex / (TECH_STEPS.length - 1)) * 88}%`,
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {TECH_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPassed = activeStepIndex > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? "bg-[#FFFDF8] border-[#FF4D0A] shadow-xl shadow-[#FF4D0A]/15 scale-105"
                      : "bg-[#FFFDF8]/70 hover:bg-[#FFFDF8] border-[#E7DED0]"
                  }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#FF4D0A] text-white"
                          : isPassed
                            ? "bg-[#171B18] text-white"
                            : "bg-[#F2EBDD] text-[#52514B]"
                      }`}>
                      {getStepIcon(step.icon)}
                    </div>
                    <span
                      className={`text-xs font-mono-tech font-bold ${
                        isActive ? "text-[#FF4D0A]" : "text-[#52514B]"
                      }`}>
                      STEP {step.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#171B18] font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#52514B] mt-1 line-clamp-2">
                      {step.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Deep Dive Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FFFDF8] rounded-3xl border border-[#E7DED0] p-8 sm:p-12 shadow-xl shadow-[#171B18]/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Description and Engineering Proof */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#FF4D0A] font-bold mb-2">
                  <span>
                    STAGE 0{activeStepIndex + 1} OF 04 EXECUTION ARCHITECTURE
                  </span>
                </div>

                <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#171B18] mb-4">
                  {activeStep.title} Phase
                </h3>

                <p className="text-base sm:text-lg text-[#52514B] leading-relaxed mb-8">
                  {activeStep.fullDesc}
                </p>

                {/* Technical Protocol Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E7DED0]">
                  <div className="p-4 rounded-xl bg-[#F8F5ED] border border-[#E7DED0]">
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#52514B] block mb-1">
                      Engineered Hardware Architecture
                    </span>
                    <span className="text-sm font-bold text-[#171B18]">
                      {activeStep.hardware}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8F5ED] border border-[#E7DED0]">
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#52514B] block mb-1">
                      Statutory Communication Protocol
                    </span>
                    <span className="text-sm font-bold text-[#171B18]">
                      {activeStep.protocol}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Response Velocity Metric Box */}
              <div className="lg:col-span-5 bg-[#F8F5ED] p-8 rounded-2xl border border-[#E7DED0] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7DED0] mb-6">
                    <span className="text-xs font-mono-tech uppercase text-[#52514B]">
                      CASCADE BENCHMARK
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono-tech text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      CERTIFIED
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-mono-tech uppercase tracking-wider text-[#52514B] block mb-1">
                      Mean Activation Velocity
                    </span>
                    <div className="font-display font-black text-4xl sm:text-5xl text-[#FF4D0A]">
                      {activeStep.responseTime}
                    </div>
                    <p className="text-xs text-[#52514B] mt-2">
                      Rigorous lab-bench verification under simulated aerosol
                      and thermal ignition vectors.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7DED0] flex items-center justify-between">
                  <span className="text-xs font-mono-tech text-[#52514B]">
                    Next cascade:{" "}
                    {
                      TECH_STEPS[(activeStepIndex + 1) % TECH_STEPS.length]
                        .title
                    }
                  </span>
                  <button
                    onClick={() =>
                      setActiveStepIndex(
                        (activeStepIndex + 1) % TECH_STEPS.length,
                      )
                    }
                    className="p-2 rounded-lg bg-[#FFFDF8] hover:bg-[#FF4D0A] hover:text-white border border-[#E7DED0] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
