import React from "react";
import { motion } from "motion/react";
import {
  Eye,
  Target,
  Compass,
  Headphones,
  ArrowRight,
  ShieldCheck,
  Building2,
  Award,
  Users2,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { ABOUT_DATA } from "../data/about";
import { COMPANY_CONTACT } from "../data/company";
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
      onNavigate("contact");
    } else {
      const contactElem = document.getElementById("contact-section");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      id="about-section"
      className={`bg-surface-bg text-text-primary ${
        standalone ? "pt-12 sm:pt-16 pb-20 sm:pb-28" : "py-14 sm:py-24 border-t border-surface-border"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Hero / Header Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0C1524] via-[#102038] to-[#0A111E] text-white p-8 sm:p-12 md:p-16 border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-[#0489F8]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-[#FC7A21]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-mono-tech uppercase tracking-widest text-[#0489F8] font-bold mb-5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FC7A21]" />
              <span>{ABOUT_DATA.sectionTitle}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08] text-white mb-6">
              ENGINEERED TO SAFEGUARD <span className="text-[#0489F8]">COMMERCIAL UK</span> PREMISES
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3.5 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mb-8">
              {ABOUT_DATA.overviewParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={handleConsultClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FC7A21] hover:bg-[#FE8A2A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#FC7A21]/30 transition-all active:scale-95 cursor-pointer">
                <span>Book Engineering Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-xs transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-[#0489F8]" />
                <span>{COMPANY_CONTACT.phone}</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-display font-black text-2xl sm:text-4xl text-text-primary tracking-tight">
              The Four Pillars of Cosmic Fire
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-2">
              Every site assessment, installation, and inspection is guided by rigorous engineering principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {ABOUT_DATA.pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-surface-card border border-surface-border hover:border-[#044FB7]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#044FB7]/10 border border-[#0489F8]/20 flex items-center justify-center text-[#044FB7] mb-5 group-hover:bg-[#044FB7] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono-tech font-bold text-[#FC7A21] uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary group-hover:text-[#044FB7] transition-colors mt-1 mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Engineering Office & Dispatch Hub (Exact Content & Typography Matching Website) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-surface-card border border-surface-border overflow-hidden shadow-lg">
          <div className="p-6 sm:p-10 md:p-12 border-b border-surface-border bg-gradient-to-r from-surface-card via-surface-bg to-surface-card">
            <div className="max-w-3xl">
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
                Engineering Consultation Office
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-2 leading-relaxed font-sans">
                Our technical team provides preliminary plan reviews, site
                walk-throughs, and tender engineering packages for commercial
                and industrial developments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-10 font-sans">
            {/* Phone */}
            <div className="p-5 rounded-2xl bg-surface-bg border border-surface-border hover:border-[#044FB7]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#044FB7]/10 flex items-center justify-center text-[#044FB7] mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono-tech uppercase text-text-secondary font-bold block">
                Direct Inquiries &amp; Dispatch
              </span>
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="font-display font-bold text-sm sm:text-base text-text-primary hover:text-[#044FB7] transition-colors mt-1 block">
                {COMPANY_CONTACT.phone}
              </a>
            </div>

            {/* Email */}
            <div className="p-5 rounded-2xl bg-surface-bg border border-surface-border hover:border-[#044FB7]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#044FB7]/10 flex items-center justify-center text-[#044FB7] mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono-tech uppercase text-text-secondary font-bold block">
                Engineering &amp; Plans Submission
              </span>
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="font-display font-bold text-xs sm:text-sm text-text-primary hover:text-[#044FB7] transition-colors mt-1 block break-all">
                {COMPANY_CONTACT.email}
              </a>
            </div>

            {/* Address */}
            <div className="p-5 rounded-2xl bg-surface-bg border border-surface-border hover:border-[#044FB7]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#044FB7]/10 flex items-center justify-center text-[#044FB7] mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono-tech uppercase text-text-secondary font-bold block">
                Headquarters &amp; Technology Lab
              </span>
              <div className="font-display font-bold text-xs sm:text-sm text-text-primary mt-1">
                {COMPANY_CONTACT.address}
              </div>
              <span className="text-[11px] text-text-secondary block mt-0.5 font-sans">
                {COMPANY_CONTACT.addressNote}
              </span>
            </div>

            {/* Operating Hours */}
            <div className="p-5 rounded-2xl bg-surface-bg border border-surface-border hover:border-[#044FB7]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#044FB7]/10 flex items-center justify-center text-[#044FB7] mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono-tech uppercase text-text-secondary font-bold block">
                Operating Hours
              </span>
              <div className="font-display font-bold text-xs sm:text-sm text-text-primary mt-1">
                {COMPANY_CONTACT.operatingHours}
              </div>
              <span className="text-[11px] text-[#FC7A21] font-semibold block mt-0.5 font-sans">
                {COMPANY_CONTACT.operatingHoursEmergency}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
