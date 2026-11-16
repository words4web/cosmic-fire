import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { HotspotItem, PageId } from "../types";
import { HERO_DATA } from "../data/hero";
import { COMPANY_CONTACT } from "../data/company";

interface HeroSectionProps {
  onSelectHotspot?: (hotspot: HotspotItem) => void;
  selectedHotspot?: HotspotItem | null;
  onNavigate: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0C0F12] border-b border-white/10">
      <div className="relative w-full min-h-[560px] sm:min-h-[620px] md:min-h-[700px] flex items-center justify-center pt-32 sm:pt-36 md:pt-44 pb-16 sm:pb-20 md:pb-24">
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

          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 max-w-6xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-extrabold tracking-wide uppercase mb-6 shadow-[0_0_20px_rgba(255,255,255,0.25)]">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]" />
            <span className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              {HERO_DATA.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-white mb-6 max-w-4xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] [text-shadow:_0_0_35px_rgba(255,255,255,0.45),_0_2px_4px_rgba(0,0,0,0.8)]">
            {HERO_DATA.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white font-semibold leading-relaxed mb-8 sm:mb-10 max-w-2xl text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] [text-shadow:_0_0_20px_rgba(255,255,255,0.3)]">
            {HERO_DATA.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto mb-10 sm:mb-12">
            <button
              onClick={() => onNavigate("services")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FC7A21] hover:bg-[#FE8A2A] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#FC7A21]/40 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] [text-shadow:_0_0_12px_rgba(255,255,255,0.5)]">
              <span>{HERO_DATA.ctas.explore}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/40 backdrop-blur-md font-black text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] [text-shadow:_0_0_12px_rgba(255,255,255,0.6)]">
              <Phone className="w-4 h-4 text-white drop-shadow-[0_0_8px_#ffffff]" />
              <span>{HERO_DATA.ctas.talk}</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-[#FFFDF8] border-y border-[#E7DED0] py-5 sm:py-6 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {HERO_DATA.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8F5ED] border border-[#E7DED0]">
                <div className="w-9 h-9 rounded-lg bg-[#0489F8]/10 flex items-center justify-center shrink-0 border border-[#0489F8]/20">
                  <ShieldCheck className="w-5 h-5 text-[#044FB7]" />
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
