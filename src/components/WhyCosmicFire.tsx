import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { WHY_CHOOSE_US_DATA } from "../data/whyUs";

interface WhyCosmicFireProps {
  onNavigate?: (path: string) => void;
}

export const WhyCosmicFire: React.FC<WhyCosmicFireProps> = ({ onNavigate }) => {
  return (
    <section
      id="why-cosmic-fire"
      className="py-14 sm:py-20 md:py-28 bg-surface-bg relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Top Header & Video Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#044FB7]/10 border border-[#0489F8]/30 text-[11px] font-mono-tech uppercase tracking-wider text-[#044FB7] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0489F8] shrink-0" />
              <span>{WHY_CHOOSE_US_DATA.tag}</span>
            </div>

            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight leading-[1.12]">
              {WHY_CHOOSE_US_DATA.headline}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl">
              {WHY_CHOOSE_US_DATA.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden bg-surface-card border border-surface-border shadow-md">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/videos/why-choose-us-poster.jpg"
                  className="w-full h-full object-cover">
                  <source src="/videos/why-choose-us.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars Grid on the Bottom */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US_DATA.pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              const targetUrl = `/services/${pillar.serviceId}`;

              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group relative h-80 sm:h-96 w-full rounded-2xl sm:rounded-3xl border border-surface-border overflow-hidden hover:border-[#0489F8]/60 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between p-6">
                  {/* Full Card Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt || pillar.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-300" />
                  </div>

                  {/* Top: Gradient Icon */}
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#FC7A21] to-[#044FB7] flex items-center justify-center shadow-lg shadow-black/40">
                      <IconComponent className="w-5 h-5 text-white drop-shadow-md" />
                    </div>
                  </div>

                  {/* Bottom: Title & Explore Service Button */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight">
                      {pillar.title}
                    </h3>

                    <div>
                      <Link
                        to={targetUrl}
                        onClick={(e) => {
                          if (onNavigate) {
                            e.preventDefault();
                            onNavigate(targetUrl);
                          }
                        }}
                        className="w-full py-3 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[#044FB7] hover:bg-[#033E91] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg cursor-pointer">
                        <span>Explore Service</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
