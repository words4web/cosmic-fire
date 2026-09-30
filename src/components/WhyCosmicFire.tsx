import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Share2, 
  Zap, 
  Infinity as InfinityIcon, 
  CheckCircle, 
  Droplets,
  Eye,
  Sliders
} from 'lucide-react';

export const WhyCosmicFire: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sprinkler' | 'detector'>('sprinkler');

  const coreValues = [
    {
      number: '01',
      title: 'Prevention First',
      description: 'Identify and reduce fire risks before they become emergencies through rigorous hazard audits and thermal profiling.',
      icon: ShieldCheck,
    },
    {
      number: '02',
      title: 'Intelligent Protection',
      description: 'Integrated systems designed for your specific environment, seamlessly coordinating detection with automatic containment.',
      icon: Share2,
    },
    {
      number: '03',
      title: 'Reliable Response',
      description: 'Fast detection, clear directional alerts, and coordinated suppression systems engineered for zero latency.',
      icon: Zap,
    },
    {
      number: '04',
      title: 'Long-Term Security',
      description: 'Solutions for reliability, proactive maintenance, lifecycle testing, and continuous municipal compliance.',
      icon: InfinityIcon,
    },
  ];

  return (
    <section id="why-cosmic-fire" className="py-24 bg-[#F8F5ED] relative overflow-hidden">
      {/* Background soft grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Macro Engineering Visual with Glowing Orange Ring & Water Mist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#171B18] border border-[#E7DED0] shadow-2xl group">
              {/* High-resolution technical sprinkler / suppression macro graphic */}
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Engineered fire sprinkler system with orange glow"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Simulated Glowing Orange Conduit Rings & Fine Mist Spray overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B18] via-transparent to-black/40" />

                {/* Concentric glowing orange energy arcs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-56 h-56 rounded-full border-2 border-[#FF4D0A] animate-pulse-glow opacity-80" />
                  <div className="absolute w-44 h-44 rounded-full border border-[#FF6A00] opacity-90 shadow-[0_0_25px_rgba(255,106,0,0.8)]" />
                  <div className="absolute w-28 h-28 rounded-full border-2 border-dashed border-[#FFB347] animate-spin [animation-duration:35s] opacity-75" />
                  <div className="absolute w-6 h-6 rounded-full bg-[#FF4D0A] shadow-[0_0_20px_#FF4D0A]" />
                </div>

                {/* Animated pressurized mist droplets */}
                <div className="absolute bottom-6 inset-x-8 flex flex-col items-center">
                  <div className="w-full h-24 bg-gradient-to-t from-[#FF6A00]/20 to-transparent blur-md rounded-t-full" />
                </div>

                {/* Technical HUD stamp on image */}
                <div className="absolute top-4 left-4 bg-[#171B18]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#FF4D0A]/40 text-[10px] font-mono-tech text-[#FFFDF8]">
                  <span className="text-[#FF4D0A] font-bold">FIG 4.2</span> // HIGH-VELOCITY DISCHARGE
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#171B18]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#E7DED0]/20 text-xs font-mono-tech text-[#FFFDF8]">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-[#FF4D0A]" />
                    <span>Response Temp: 68°C</span>
                  </div>
                  <span className="text-[#FFB347]">K-Factor 16.8</span>
                </div>
              </div>
            </div>

            {/* Micro vertical technical badge on edge */}
            <div className="hidden sm:block absolute -left-4 top-1/3 -rotate-90 origin-bottom-left text-[10px] font-mono-tech tracking-[0.25em] text-[#52514B] uppercase">
              TECHNOLOGY / PRECISION
            </div>
          </motion.div>

          {/* Right Column: Large Typography & Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-[2px] bg-[#FF4D0A]" />
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D0A] font-bold">
                WHY COSMIC FIRE
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#171B18] leading-[1.05] mb-6">
              ENGINEERED FOR
              <span className="text-[#FF4D0A] block">WHAT’S AT STAKE.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#52514B] leading-relaxed mb-8 max-w-xl">
              Every second matters. We focus on prevention-first strategies designed to identify risks early and protect what matters most. Every environment has different risks; our prevention-focused approach helps identify hazards and develop protection strategies suited to the requirements of each space.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E7DED0]">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#FFFDF8] border border-[#E7DED0] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#FF4D0A]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171B18]">Zero Compromise Materials</h4>
                  <p className="text-xs text-[#52514B] mt-0.5">UL-listed, FM-approved, and EN54-certified components only.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#FFFDF8] border border-[#E7DED0] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#FF4D0A]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171B18]">Holistic Code Compliance</h4>
                  <p className="text-xs text-[#52514B] mt-0.5">Streamlined approvals with local municipal fire marshals and AHJ.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Values / Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#FFFDF8] p-7 rounded-2xl border border-[#E7DED0] hover:border-[#FF4D0A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF4D0A]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#F8F5ED] group-hover:bg-[#FF4D0A] group-hover:text-white text-[#FF4D0A] border border-[#E7DED0] group-hover:border-[#FF4D0A] flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-xs font-mono-tech font-bold text-[#52514B] group-hover:text-[#FF4D0A] transition-colors">
                      {card.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#171B18] mb-2 font-display">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#52514B] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle orange accent bar at bottom on hover */}
                <div className="mt-6 pt-4 border-t border-[#E7DED0]/60 flex items-center justify-between text-xs font-mono-tech text-[#52514B] group-hover:text-[#FF4D0A] transition-colors">
                  <span>SPECIFICATION</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E7DED0] group-hover:bg-[#FF4D0A]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
