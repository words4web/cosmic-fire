import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Clock,
  Building2,
  Users2,
  BadgeCheck,
} from "lucide-react";
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
    <section className="relative w-full overflow-hidden bg-[#171B18]">
      <div className="relative w-full min-h-[560px] sm:min-h-[620px] md:min-h-[700px] flex items-center justify-center pt-32 sm:pt-36 md:pt-44 pb-16 sm:pb-20 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop"
            alt="Modern commercial corporate facility"
            className="w-full h-full object-cover object-center brightness-[0.38] contrast-[1.08]"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171B18] via-[#171B18]/60 to-[#171B18]/70" />
          <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-[#171B18]/40 to-[#171B18]" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 max-w-6xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span>{HERO_DATA.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-white mb-6 max-w-4xl">
            {HERO_DATA.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/85 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl text-center">
            {HERO_DATA.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto mb-10 sm:mb-12">
            <button
              onClick={() => onNavigate("solutions")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-brand-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <span>{HERO_DATA.ctas.explore}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>{HERO_DATA.ctas.talk}</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl">
            {HERO_DATA.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-semibold text-white/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-[#1F2320] border-y border-white/10 py-5 sm:py-6 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {HERO_DATA.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-9 h-9 rounded-lg bg-brand-primary/15 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-brand-primary" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#171B18] py-3.5 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 border-b border-white/10">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-none py-1">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-brand-primary uppercase shrink-0">
            CERTIFIED CAPABILITIES //
          </span>
          <div className="flex items-center gap-2 shrink-0">
            {HERO_DATA.ticker.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-white/80 shrink-0">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
