import React from "react";
import {
  Shield,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { PageId } from "../types";
import { FOOTER_DATA, FOOTER_LINKS } from "../data/footer";
import { COMPANY_CONTACT } from "../data/company";

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#FFFDF8] text-[#171B18] border-t border-[#E7DED0] pt-10 sm:pt-16 md:pt-20 pb-8 sm:pb-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#FF4D0A_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03]" />

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-16 border-b border-[#E7DED0]">
          <div className="sm:col-span-2 lg:col-span-4 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3 sm:gap-4 group">
              <img
                src="/logo.png"
                alt="Cosmic Fire Logo"
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain transition-transform group-hover:scale-105 shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight text-[#171B18] leading-none">
                  COSMIC <span className="text-[#FF4D0A]">FIRE</span>
                </span>
                <span className="text-[10px] sm:text-xs font-mono-tech tracking-widest text-[#FF4D0A] font-bold mt-1.5 uppercase">
                  {FOOTER_DATA.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#52514B] leading-relaxed max-w-md">
              {FOOTER_DATA.description}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:col-span-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-bold pb-1 border-b border-[#E7DED0]/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D0A]" />
              Website Index
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-semibold">
              {FOOTER_LINKS.map((link) => (
                <li key={link.pageId}>
                  <button
                    onClick={() => onNavigate(link.pageId)}
                    className="text-text-secondary hover:text-brand-primary transition-all duration-200 cursor-pointer text-left flex items-center gap-2 group hover:translate-x-1 py-0.5">
                    <span className="w-1 h-1 rounded-full bg-surface-border group-hover:bg-[#FF4D0A] transition-colors shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:col-span-2">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-bold pb-1 border-b border-[#E7DED0]/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D0A]" />
              Core Systems
            </h4>
            <ul className="space-y-2 text-xs text-[#52514B]">
              {FOOTER_DATA.coreSystems.map((system) => (
                <li key={system} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D0A] shrink-0 mt-0.5" />
                  <span className="leading-snug">{system}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-bold pb-1 border-b border-[#E7DED0]/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D0A]" />
              Engineering Office
            </h4>
            <div className="space-y-2.5 sm:space-y-3 text-xs text-[#52514B]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF4D0A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_CONTACT.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF4D0A] shrink-0" />
                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="hover:text-brand-primary transition-colors font-medium">
                  {COMPANY_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF4D0A] shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="hover:text-brand-primary transition-colors font-medium break-all">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl bg-[#F6EFE2]/70 border border-[#E7DED0] space-y-1 mt-3">
              <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase text-[#52514B]">
                <Activity className="w-3.5 h-3.5 text-[#FF4D0A] animate-pulse" />
                <span>24/7 Monitoring Center</span>
              </div>
              <span className="text-xs font-bold text-[#FF4D0A] font-mono-tech block">
                {COMPANY_CONTACT.monitoringCenterStatus}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs font-mono-tech text-[#52514B]">
          <div className="text-center sm:text-left flex flex-wrap items-center justify-center sm:justify-start gap-x-1.5 gap-y-1">
            <span>
              © {new Date().getFullYear()} Cosmic Fire Protection Systems LLC.
              All rights reserved.
            </span>
            <span className="hidden xs:inline text-surface-border">|</span>
            <span>
              Designed by{" "}
              <a
                href="https://words4web.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-[#FF4D0A] underline underline-offset-2 transition-colors font-semibold">
                Words4Web
              </a>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F6EFE2] border border-[#E7DED0] text-[#171B18] hover:text-[#FF4D0A] hover:border-[#FF4D0A]/30 transition-all font-bold cursor-pointer shadow-sm touch-manipulation"
            aria-label="Scroll back to top">
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF4D0A]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
