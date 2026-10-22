import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Shield,
  Activity,
  Sparkles,
  Building2,
  Flame,
} from "lucide-react";
import { PageId } from "../types";

interface CinematicBannerProps {
  onNavigate: (page: PageId) => void;
}

export const CinematicBanner: React.FC<CinematicBannerProps> = ({
  onNavigate,
}) => {
  return (
    <section className="relative py-28 bg-[#F8F5ED] overflow-hidden border-b border-[#E7DED0]">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0489F8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-[#044FB7] border border-[#0489F8]/30 shadow-2xl p-8 sm:p-14 lg:p-20">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
              alt="Architectural fire safety infrastructure"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#044FB7] via-[#044FB7]/95 to-[#044FB7]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#044FB7] via-transparent to-transparent" />
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70">
            <defs>
              <linearGradient id="bannerGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0489F8" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FC7A21" stopOpacity="1" />
                <stop offset="100%" stopColor="#FE8A2A" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d="M -100 80 Q 300 40, 600 120 T 1300 90 T 2000 140"
              fill="none"
              stroke="url(#bannerGlow)"
              strokeWidth="2.5"
              className="animate-flow-dash"
            />
            <path
              d="M -50 240 Q 400 180, 800 260 T 1600 200 T 2200 280"
              fill="none"
              stroke="url(#bannerGlow)"
              strokeWidth="1.8"
              className="animate-flow-fast"
            />
          </svg>

          <div className="relative z-20 max-w-2xl">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-[2px] bg-[#FC7A21]" />
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#0489F8] font-semibold">
                INTEGRATED ARCHITECTURAL SAFETY
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.1] mb-6">
              PROTECTION, DESIGNED AROUND YOUR ENVIRONMENT.
            </h2>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-10 font-normal">
              Every facility possesses unique thermodynamic loads and egress
              dynamics. We engineer custom addressable fire loops, waterless
              suppression zones, and integrated evacuation matrices tailored to
              your exact architectural blueprint.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate("solutions")}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FC7A21] hover:bg-[#FE8A2A] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#FC7A21]/40 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer">
                <span>View Full Systems Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm tracking-wide transition-all backdrop-blur-sm cursor-pointer">
                <span>Book Facility Survey</span>
              </button>
            </div>
          </div>

          <div className="relative z-20 mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">
                &lt; 3.0s
              </div>
              <div className="text-xs font-mono-tech text-[#0489F8] mt-1 font-semibold">
                Thermal Detection Rate
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">
                100%
              </div>
              <div className="text-xs font-mono-tech text-[#0489F8] mt-1 font-semibold">
                NFPA &amp; EN54 Rigor
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">
                0%
              </div>
              <div className="text-xs font-mono-tech text-[#0489F8] mt-1 font-semibold">
                Clean Agent Residue
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">
                24/7
              </div>
              <div className="text-xs font-mono-tech text-[#0489F8] mt-1 font-semibold">
                Loop Telemetry Polling
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
