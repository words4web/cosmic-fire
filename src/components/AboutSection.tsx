import React from "react";
import { motion } from "motion/react";
import {
  Eye,
  Target,
  Compass,
  Headphones,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { ABOUT_DATA } from "../data/about";
import { PageId } from "../types";

interface AboutSectionProps {
  onNavigate?: (page: PageId) => void;
  standalone?: boolean;
}

const pillarIcons = [Eye, Target, Compass, Headphones];

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  standalone = false,
}) => {
  const handleConsultClick = () => {
    if (onNavigate) {
      onNavigate("home");
      setTimeout(() => {
        const contactElem = document.getElementById("contact-section");
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const contactElem = document.getElementById("contact-section");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="about-section"
      className={`pt-6 sm:pt-10 md:pt-12 pb-10 sm:pb-16 md:pb-20 bg-surface-card relative overflow-hidden ${
        standalone
          ? "pt-20 sm:pt-24 md:pt-28"
          : "border-t border-surface-border"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-bg border border-surface-border text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-brand-primary font-bold mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-primary shrink-0" />
            <span>{ABOUT_DATA.sectionTitle}</span>
          </div>

          <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.15] uppercase break-words">
            {ABOUT_DATA.headline}
          </h1>

          <div className="mt-3.5 sm:mt-5 space-y-2.5 sm:space-y-3 max-w-3xl text-xs sm:text-base text-text-secondary leading-relaxed">
            {ABOUT_DATA.overviewParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-4 sm:pt-5">
            <button
              onClick={handleConsultClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 rounded-full bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-primary/20">
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {ABOUT_DATA.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative p-[2px] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-[-100%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0_260deg,rgba(255,77,10,0.3)_290deg,rgba(255,77,10,0.9)_330deg,#ffffff_355deg,rgba(255,77,10,1)_360deg)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full w-full rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] bg-surface-bg p-4 xs:p-5 sm:p-6 flex flex-col justify-between z-10">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center text-brand-primary mb-3.5 sm:mb-4 shadow-xs group-hover:border-brand-primary/40 transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h2 className="font-display font-bold text-base sm:text-lg text-text-primary mb-1.5 sm:mb-2">
                      {pillar.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
