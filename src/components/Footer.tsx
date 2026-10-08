import React from "react";
import { Shield, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
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
    <footer className="bg-[#FFFDF8] text-[#171B18] border-t border-[#E7DED0] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#E7DED0]">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Cosmic Fire Logo"
                className="w-9 h-9 object-contain"
              />
              <span className="font-display font-black text-2xl tracking-tight text-[#171B18]">
                COSMIC <span className="text-[#FF4D0A]">FIRE</span>
              </span>
            </div>

            <div className="text-xs font-mono-tech tracking-widest text-[#FF4D0A] font-bold">
              {FOOTER_DATA.tagline}
            </div>

            <p className="text-xs sm:text-sm text-[#52514B] leading-relaxed max-w-sm">
              {FOOTER_DATA.description}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono-tech text-[#52514B]">
              <Shield className="w-4 h-4 text-[#FF4D0A]" />
              <span>{FOOTER_DATA.standardText}</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-[#171B18] font-bold mb-4">
              Website Index
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              {FOOTER_LINKS.map((link) => (
                <li key={link.pageId}>
                  <button
                    onClick={() => onNavigate(link.pageId)}
                    className="text-text-secondary hover:text-brand-primary transition-colors cursor-pointer text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-[#171B18] font-bold mb-4">
              Core Systems
            </h4>
            <ul className="space-y-2 text-xs text-[#52514B]">
              {FOOTER_DATA.coreSystems.map((system) => (
                <li key={system}>{system}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-[#171B18] font-bold mb-4">
              Engineering Office
            </h4>
            <div className="space-y-2.5 text-xs text-[#52514B]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF4D0A] shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF4D0A] shrink-0" />
                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="hover:text-brand-primary transition-colors">
                  {COMPANY_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF4D0A] shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="hover:text-brand-primary transition-colors">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <span className="text-[10px] font-mono-tech uppercase text-[#52514B] block mb-1">
                24/7 Monitoring Center:
              </span>
              <span className="text-xs font-bold text-[#FF4D0A] font-mono-tech">
                {COMPANY_CONTACT.monitoringCenterStatus}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#52514B]">
          <div>
            © {new Date().getFullYear()} Cosmic Fire Protection Systems LLC. All
            rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {FOOTER_DATA.legalLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => alert(item.alertMessage)}
                className="hover:text-[#FF4D0A] transition-colors cursor-pointer">
                {item.label}
              </button>
            ))}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#171B18] hover:text-[#FF4D0A] transition-colors font-bold ml-2 cursor-pointer"
              aria-label="Scroll back to top">
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FF4D0A]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
