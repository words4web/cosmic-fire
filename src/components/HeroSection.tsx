import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, ShieldCheck, ChevronDown, Flame } from 'lucide-react';
import { HeroBuilding3D } from './HeroBuilding3D';
import { HotspotItem, PageId } from '../types';

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
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8F5ED] via-[#FFFDF8] to-[#F8F5ED]">
      {/* Ambient background glow & technical grid */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#FF6A00]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#FFB347]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline, Supporting Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center text-left z-10"
          >
            {/* Small Technical Label */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-6 h-[2px] bg-[#FF4D0A] rounded-full" />
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#171B18] font-bold">
                FIRE PREVENTION &amp; PROTECTION SOLUTIONS
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-[68px] leading-[0.98] tracking-tight text-[#171B18] mb-6">
              <span>PREVENT FIRE.</span>
              <br />
              <span className="text-[#FF4D0A] block mt-1">PROTECT WHAT</span>
              <span className="text-[#FF4D0A] block">MATTERS.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#52514B] font-normal leading-relaxed mb-8 max-w-lg">
              Intelligent fire prevention and protection solutions designed to help safeguard people, property and critical environments.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => onNavigate('solutions')}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF4D0A] hover:bg-[#FF6A00] text-[#FFFDF8] font-bold text-sm tracking-wide shadow-lg shadow-[#FF4D0A]/30 hover:shadow-xl hover:shadow-[#FF4D0A]/40 transition-all active:scale-95"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFDF8] hover:bg-[#FF4D0A] text-[#171B18] hover:text-[#FFFDF8] border border-[#FF4D0A] font-bold text-sm tracking-wide transition-all shadow-sm active:scale-95"
              >
                <span>Talk to an Expert</span>
                <MessageSquare className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>
            </div>

            {/* Editorial Spec Micro-badges */}
            <div className="pt-6 border-t border-[#E7DED0] grid grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-mono-tech uppercase text-[#52514B] block">
                  Zero False-Alarm Rate
                </span>
                <span className="text-sm font-bold text-[#171B18] font-display">
                  Multi-Criteria Optical ASD
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono-tech uppercase text-[#52514B] block">
                  Compliance Certification
                </span>
                <span className="text-sm font-bold text-[#171B18] font-display">
                  NFPA, EN54 &amp; UL864 Rigor
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End 3D Architectural Building & Glowing Orange Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <HeroBuilding3D
              onSelectHotspot={onSelectHotspot}
              selectedHotspot={selectedHotspot}
            />
          </motion.div>
        </div>

        {/* Lower Editorial Strip */}
        <div className="mt-14 pt-8 border-t border-[#E7DED0]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#FF4D0A]" />
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#52514B] font-semibold">
              SAFER SPACES / STRONGER TOMORROWS
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono-tech text-[#52514B]">
            <span className="text-[#FF4D0A] font-bold">01</span>
            <span className="text-[#E7DED0]">/</span>
            <span>02</span>
            <span className="text-[#E7DED0]">/</span>
            <span>03</span>
            <a
              href="#why-cosmic-fire"
              className="inline-flex items-center gap-1.5 text-[#171B18] hover:text-[#FF4D0A] transition-colors ml-4"
            >
              <span>Scroll to Explore</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#FF4D0A] animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
