import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  MessageSquare,
  MapPin,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { HeroBuilding3D } from "./HeroBuilding3D";
import { HotspotItem, PageId } from "../types";
import { HERO_DATA } from "../data/hero";
import { SectionBadge } from "./common";

interface HeroSectionProps {
  onSelectHotspot: (hotspot: HotspotItem) => void;
  selectedHotspot: HotspotItem | null;
  onNavigate: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectHotspot,
  selectedHotspot,
  onNavigate,
}) => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-surface-card via-surface-bg to-surface-card">
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center text-left z-10">
            <SectionBadge pulse className="mb-4 self-start">
              {HERO_DATA.badge}
            </SectionBadge>

            <h1 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] leading-[1.05] tracking-tight text-text-primary mb-4 sm:mb-6">
              {HERO_DATA.headline}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-text-secondary font-normal leading-relaxed mb-6 sm:mb-8 max-w-lg">
              {HERO_DATA.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => onNavigate("solutions")}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/35 transition-all active:scale-[0.98] cursor-pointer">
                <span>{HERO_DATA.ctas.explore}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate("contact")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-card hover:bg-surface-muted text-text-primary border border-surface-border font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xs active:scale-[0.98] cursor-pointer">
                <span>{HERO_DATA.ctas.talk}</span>
                <MessageSquare className="w-4 h-4 text-brand-primary transition-transform group-hover:scale-110" />
              </button>
            </div>

            <div className="pt-5 border-t border-surface-border grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {HERO_DATA.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-lg bg-surface-card border border-surface-border text-[11px] font-semibold text-text-primary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                  <span className="leading-tight">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative">
            <HeroBuilding3D
              onSelectHotspot={onSelectHotspot}
              selectedHotspot={selectedHotspot}
            />
          </motion.div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 border-t border-surface-border overflow-hidden">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-none py-2">
            <span className="text-[10px] font-mono-tech uppercase tracking-wider text-brand-primary font-bold shrink-0">
              SOLUTIONS //
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {HERO_DATA.ticker.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-surface-card border border-surface-border text-[11px] font-mono-tech text-text-secondary shrink-0">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
