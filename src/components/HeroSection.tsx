import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { HotspotItem, PageId } from "../types";
import { HERO_DATA } from "../data/hero";
import { COMPANY_CONTACT } from "../data/company";
import { ConsultationForm } from "./ConsultationForm";

interface HeroSectionProps {
  onSelectHotspot?: (hotspot: HotspotItem) => void;
  selectedHotspot?: HotspotItem | null;
  onNavigate: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0C0F12] border-b border-white/10">
      <div className="relative w-full min-h-[auto] lg:min-h-[820px] xl:min-h-[860px] flex items-center justify-center pt-24 sm:pt-32 md:pt-36 lg:pt-44 pb-12 sm:pb-20 md:pb-24">
        {/* Background Video with Dark Ambient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/videos/hero-firefighters-poster.jpg"
            className="w-full h-full object-cover object-center">
            <source src="/videos/hero-firefighters.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/75 sm:bg-black/65 backdrop-blur-[1px] pointer-events-none" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 xl:col-span-6 text-left flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs font-extrabold tracking-wide uppercase mb-4 sm:mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]" />
                <span className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                  {HERO_DATA.badge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-black text-2xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.12] sm:leading-[1.08] tracking-tight text-white mb-3 sm:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] [text-shadow:_0_0_30px_rgba(255,255,255,0.35),_0_2px_4px_rgba(0,0,0,0.8)]">
                {HERO_DATA.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-6 sm:mb-10 max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                {HERO_DATA.description}
              </motion.p>

              {/* Single Combined CTA Option: "Get a Free Quote / Call Now" */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full sm:w-auto">
                <div className="flex flex-row flex-wrap sm:inline-flex items-center gap-2 rounded-2xl sm:rounded-full bg-black/60 backdrop-blur-md border border-white/20 p-1.5 sm:p-1 shadow-xl">
                  <a
                    href="#hero-query-form"
                    className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-xl sm:rounded-full bg-[#FC7A21] hover:bg-[#FE8A2A] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FC7A21]/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                    <span>Get a Free Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 text-white/95 hover:text-[#FC7A21] font-semibold text-xs tracking-wide transition-colors cursor-pointer">
                    <Phone className="w-3.5 h-3.5 text-[#0489F8] shrink-0" />
                    <span>Call Us</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Embedded Hero Query Form with generous width */}
            <motion.div
              id="hero-query-form"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-[620px]">
                <ConsultationForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Highlights Bar */}
      <div className="w-full bg-[#FFFDF8] border-y border-[#E7DED0] py-4 sm:py-5 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {HERO_DATA.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F5ED] border border-[#E7DED0]">
                <div className="w-8 h-8 rounded-lg bg-[#0489F8]/10 flex items-center justify-center shrink-0 border border-[#0489F8]/20">
                  <ShieldCheck className="w-4 h-4 text-[#044FB7]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#171B18] leading-tight">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
