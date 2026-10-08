import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, Layers, Activity } from "lucide-react";
import { SERVICES_DATA } from "../data/constants";
import { PageId } from "../types";

interface ServicesShowcaseProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onNavigate,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    SERVICES_DATA[0].id,
  );

  const currentService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section
      id="services-section"
      className="py-24 bg-[#FFFDF8] relative overflow-hidden border-y border-[#E7DED0]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[2px] bg-[#FF4D0A]" />
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D0A] font-bold">
              SYSTEM CAPABILITIES &amp; INFRASTRUCTURE
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#171B18] leading-[1.08]">
            ONE SYSTEM.
            <span className="text-[#FF4D0A] block">
              MULTIPLE LAYERS OF PROTECTION.
            </span>
          </h2>

          <p className="text-base text-[#52514B] mt-4 max-w-xl">
            From preliminary micro-particle detection to automated gaseous
            suppression and statutory certification, explore our end-to-end fire
            safety engineering disciplines.
          </p>
        </div>

        {/* Master Showcase Layout: Left List + Right Featured Visual Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Service Directory */}
          <div className="lg:col-span-5 space-y-2">
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? "bg-[#F8F5ED] border-[#FF4D0A] shadow-md shadow-[#FF4D0A]/10"
                      : "bg-[#FFFDF8] hover:bg-[#F8F5ED]/60 border-[#E7DED0]/70"
                  }`}>
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-mono-tech font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-[#FF4D0A] text-white"
                          : "bg-[#F2EBDD] text-[#52514B]"
                      }`}>
                      {service.number}
                    </span>
                    <div>
                      <h3
                        className={`text-sm font-bold transition-colors ${
                          isSelected ? "text-[#171B18]" : "text-[#52514B]"
                        }`}>
                        {service.title}
                      </h3>
                      <span className="text-[11px] text-[#52514B]/80 block font-mono-tech">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#FF4D0A] animate-pulse" />
                    )}
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? "text-[#FF4D0A] translate-x-1"
                          : "text-[#E7DED0]"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Large Featured Visual & Detailed System Overview */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F8F5ED] rounded-2xl border border-[#E7DED0] p-6 sm:p-8 shadow-xl shadow-[#171B18]/5 overflow-hidden">
                {/* Large Featured Image with Orange Accent Glow */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-8 border border-[#E7DED0] bg-[#171B18]">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171B18]/90 via-[#171B18]/30 to-transparent" />

                  {/* Top-right schematic pill */}
                  <div className="absolute top-4 right-4 bg-[#171B18]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#FF4D0A]/50 text-xs font-mono-tech text-[#FFFDF8] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF4D0A] animate-ping" />
                    <span>{currentService.schematicType}</span>
                  </div>

                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#FFCE9A] font-semibold">
                      ENGINEERING DISCIPLINE {currentService.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display mt-0.5">
                      {currentService.title}
                    </h3>
                  </div>
                </div>

                {/* Tagline & Description */}
                <div className="mb-6">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-[#FF4D0A] font-bold mb-2">
                    {currentService.tagline}
                  </div>
                  <p className="text-sm sm:text-base text-[#52514B] leading-relaxed">
                    {currentService.description}
                  </p>
                </div>

                {/* Technical Specifications Grid */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-bold mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#FF4D0A]" />
                    Engineered System Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentService.detailedSpecs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-[#171B18] p-2.5 rounded-lg bg-[#FFFDF8] border border-[#E7DED0]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D0A] shrink-0 mt-0.5" />
                        <span className="leading-tight">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mb-8 pt-4 border-t border-[#E7DED0]">
                  <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-bold mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#FF4D0A]" />
                    Facility Deployment Benefits
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#52514B]">
                    {currentService.keyBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D0A]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E7DED0]">
                  <div className="text-xs font-mono-tech text-[#52514B]">
                    Compliant with NFPA, BS 5839 &amp; EN54
                  </div>

                  <button
                    onClick={() => onNavigate("contact")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF4D0A] hover:bg-[#FF6A00] text-white text-xs font-bold tracking-wide uppercase shadow-md shadow-[#FF4D0A]/20 transition-all hover:scale-[1.02] active:scale-95">
                    <span>Request System Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
