import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Activity, Sparkles, Building2, Flame } from 'lucide-react';
import { PageId } from '../types';

interface CinematicBannerProps {
  onNavigate: (page: PageId) => void;
}

export const CinematicBanner: React.FC<CinematicBannerProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-28 bg-[#F8F5ED] overflow-hidden border-b border-[#E7DED0]">
      {/* Deep atmospheric ivory gradient with glowing amber ambient haze */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF6A00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-[#171B18] border border-[#E7DED0] shadow-2xl p-8 sm:p-14 lg:p-20">
          
          {/* Architectural Cutaway Background Image with Glowing Orange Grid & Conduit Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
              alt="Architectural fire safety infrastructure"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#171B18] via-[#171B18]/90 to-[#171B18]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171B18] via-transparent to-transparent" />
          </div>

          {/* SVG Animated Glowing Orange Conduits Flowing Across Banner */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70">
            <defs>
              <linearGradient id="bannerGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF4D0A" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FF6A00" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFB347" stopOpacity="0.4" />
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

          {/* Banner Content */}
          <div className="relative z-20 max-w-2xl">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-[2px] bg-[#FF4D0A]" />
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FFCE9A] font-semibold">
                INTEGRATED ARCHITECTURAL SAFETY
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#FFFDF8] leading-[1.1] mb-6">
              PROTECTION, DESIGNED AROUND YOUR ENVIRONMENT.
            </h2>

            <p className="text-base sm:text-lg text-[#E7DED0] leading-relaxed mb-10 font-normal">
              Every facility possesses unique thermodynamic loads and egress dynamics. We engineer custom addressable fire loops, waterless suppression zones, and integrated evacuation matrices tailored to your exact architectural blueprint.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('solutions')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF4D0A] hover:bg-[#FF6A00] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#FF4D0A]/40 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>View Full Systems Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFFDF8] border border-white/20 font-bold text-sm tracking-wide transition-all backdrop-blur-sm"
              >
                <span>Book Facility Survey</span>
              </button>
            </div>
          </div>

          {/* Floating Metric Badges Bottom Right */}
          <div className="relative z-20 mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-[#FFFDF8]">
                &lt; 3.0s
              </div>
              <div className="text-xs font-mono-tech text-[#FFCE9A] mt-1">
                Thermal Detection Rate
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-[#FFFDF8]">
                100%
              </div>
              <div className="text-xs font-mono-tech text-[#FFCE9A] mt-1">
                NFPA &amp; EN54 Rigor
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-[#FFFDF8]">
                0%
              </div>
              <div className="text-xs font-mono-tech text-[#FFCE9A] mt-1">
                Clean Agent Residue
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-[#FFFDF8]">
                24/7
              </div>
              <div className="text-xs font-mono-tech text-[#FFCE9A] mt-1">
                Loop Telemetry Polling
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
