import React from "react";
import { motion } from "motion/react";
import {
  Eye,
  Target,
  Compass,
  Headphones,
  ArrowRight,
  ShieldCheck,
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
        standalone
          ? "pt-0 pb-16 sm:pb-24"
          : "py-0 border-t border-surface-border"
      }`}>
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#0C1524] via-[#102038] to-[#0A111E] text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 border-b border-white/10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-[#0489F8]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-[#FC7A21]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center items-start lg:items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-[#0489F8] font-bold mb-4 sm:mb-5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FC7A21]" />
              <span>{ABOUT_DATA.sectionTitle}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] tracking-tight leading-[1.12] sm:leading-[1.1] text-white mb-4 sm:mb-5">
              ENGINEERED TO SAFEGUARD{" "}
              <span className="text-[#0489F8]">COMMERCIAL UK</span> PREMISES
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              {ABOUT_DATA.overviewParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={handleConsultClick}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-full bg-[#FC7A21] hover:bg-[#FE8A2A] text-white font-bold text-[11px] xs:text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#FC7A21]/30 transition-all active:scale-95 cursor-pointer">
                <span>Book Engineering Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-[11px] xs:text-xs sm:text-sm uppercase tracking-wider backdrop-blur-xs transition-colors cursor-pointer">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0489F8] shrink-0" />
                <span>{COMPANY_CONTACT.phone}</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 w-full flex justify-start lg:justify-end mt-2 lg:mt-0">
            <div className="w-full max-w-[460px] sm:max-w-[480px] lg:max-w-[440px] xl:max-w-[480px] relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0489F8]/20 via-[#FC7A21]/15 to-[#044FB7]/25 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/40 backdrop-blur-md p-1.5 sm:p-2">
                <div className="w-full grid grid-cols-2 gap-1.5 sm:gap-2 aspect-square">
                  {/* Top-Left: Educational & Campus Facilities */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group/tile bg-surface-muted">
                    <img
                      src="/images/about/sector-nhs-healthcare.webp"
                      alt="Educational campus and university facility fire safety compliance"
                      width={1088}
                      height={1032}
                      className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast] transition-transform duration-500 group-hover/tile:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2">
                      <span className="inline-block px-1.5 py-0.5 sm:px-2 rounded-md bg-[#044FB7]/90 text-white text-[9px] sm:text-[10px] font-mono-tech font-bold uppercase tracking-wider backdrop-blur-xs border border-white/20">
                        Educational Campuses
                      </span>
                    </div>
                  </div>

                  {/* Top-Right: Corporate Offices */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group/tile bg-surface-muted">
                    <img
                      src="/images/about/sector-corporate-office.webp"
                      alt="Modern corporate commercial office building fire protection installation"
                      width={1088}
                      height={1032}
                      className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast] transition-transform duration-500 group-hover/tile:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2">
                      <span className="inline-block px-1.5 py-0.5 sm:px-2 rounded-md bg-[#044FB7]/90 text-white text-[9px] sm:text-[10px] font-mono-tech font-bold uppercase tracking-wider backdrop-blur-xs border border-white/20">
                        Corporate Offices
                      </span>
                    </div>
                  </div>

                  {/* Bottom-Left: Commercial Towers */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group/tile bg-surface-muted">
                    <img
                      src="/images/about/sector-commercial-towers.webp"
                      alt="Commercial high-rise urban towers fire compartmentation and safety"
                      width={1088}
                      height={1032}
                      className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast] transition-transform duration-500 group-hover/tile:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2">
                      <span className="inline-block px-1.5 py-0.5 sm:px-2 rounded-md bg-[#044FB7]/90 text-white text-[9px] sm:text-[10px] font-mono-tech font-bold uppercase tracking-wider backdrop-blur-xs border border-white/20">
                        Commercial Towers
                      </span>
                    </div>
                  </div>

                  {/* Bottom-Right: Hospital & Healthcare Complex */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group/tile bg-surface-muted">
                    <img
                      src="/images/about/sector-education-school.webp"
                      alt="Hospital and commercial healthcare complex fire safety management"
                      width={1088}
                      height={1032}
                      className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast] transition-transform duration-500 group-hover/tile:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2">
                      <span className="inline-block px-1.5 py-0.5 sm:px-2 rounded-md bg-[#044FB7]/90 text-white text-[9px] sm:text-[10px] font-mono-tech font-bold uppercase tracking-wider backdrop-blur-xs border border-white/20">
                        Hospitals &amp; Healthcare
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-24 pt-10 sm:pt-16 md:pt-20">
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              The Four Pillars of Cosmic Fire
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-2">
              Every site assessment, installation, and inspection is guided by
              rigorous engineering principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {ABOUT_DATA.pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-surface-card border border-surface-border hover:border-[#044FB7]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#044FB7]/10 border border-[#0489F8]/20 flex items-center justify-center text-[#044FB7] mb-4 sm:mb-5 group-hover:bg-[#044FB7] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] font-mono-tech font-bold text-[#FC7A21] uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-xl text-text-primary group-hover:text-[#044FB7] transition-colors mt-1 mb-2">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl bg-surface-card border border-surface-border overflow-hidden shadow-lg">
          <div className="p-5 sm:p-8 md:p-12 border-b border-surface-border bg-gradient-to-r from-surface-card via-surface-bg to-surface-card">
            <div className="max-w-3xl">
              <h2 className="font-display font-black text-xl sm:text-2xl md:text-4xl text-text-primary tracking-tight">
                Engineering Consultation Office
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-2 leading-relaxed font-sans">
                Our technical team provides preliminary plan reviews, site
                walk-throughs, and tender engineering packages for commercial
                and industrial developments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-8 font-sans">
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-surface-bg border border-surface-border hover:border-[#044FB7]/40 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#044FB7]/10 flex items-center justify-center text-[#044FB7] mb-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] font-mono-tech uppercase text-text-secondary font-bold block">
                Direct Inquiries &amp; Dispatch
              </span>
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="font-display font-bold text-xs sm:text-base text-text-primary hover:text-[#044FB7] transition-colors mt-1 block">
                {COMPANY_CONTACT.phone}
              </a>
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-surface-bg border border-surface-border hover:border-[#044FB7]/40 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#044FB7]/10 flex items-center justify-center text-[#044FB7] mb-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
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

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-surface-bg border border-surface-border hover:border-[#044FB7]/40 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#044FB7]/10 flex items-center justify-center text-[#044FB7] mb-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] font-mono-tech uppercase text-text-secondary font-bold block">
                Headquarters &amp; Technology Lab
              </span>
              <div className="font-display font-bold text-xs sm:text-sm text-text-primary mt-1">
                {COMPANY_CONTACT.address}
              </div>
              {COMPANY_CONTACT.addressNote && (
                <span className="text-[11px] text-text-secondary block mt-0.5 font-sans">
                  {COMPANY_CONTACT.addressNote}
                </span>
              )}
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-surface-bg border border-surface-border hover:border-[#044FB7]/40 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#044FB7]/10 flex items-center justify-center text-[#044FB7] mb-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
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
