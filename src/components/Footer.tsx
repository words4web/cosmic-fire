import React from "react";
import { Shield, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { PageId } from "../types";

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
        {/* Top Grid: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#E7DED0]">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#171B18] flex items-center justify-center border border-[#E7DED0]">
                <div className="w-4 h-4 rounded-full border-2 border-[#FFFDF8] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF4D0A]" />
                </div>
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-[#171B18]">
                COSMIC <span className="text-[#FF4D0A]">FIRE</span>
              </span>
            </div>

            <div className="text-xs font-mono-tech tracking-widest text-[#FF4D0A] font-bold">
              PREVENT. PROTECT. RESPOND.
            </div>

            <p className="text-xs sm:text-sm text-[#52514B] leading-relaxed max-w-sm">
              Intelligent fire prevention and protection solutions safeguarding
              lives, architectural assets, and critical industrial environments.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono-tech text-[#52514B]">
              <Shield className="w-4 h-4 text-[#FF4D0A]" />
              <span>Engineered to NFPA &amp; EN54 Global Standards</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-[#171B18] font-bold mb-4">
              Website Index
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <button
                  onClick={() => onNavigate("solutions")}
                  className="text-[#52514B] hover:text-[#FF4D0A] transition-colors">
                  Fire Protection Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("industries")}
                  className="text-[#52514B] hover:text-[#FF4D0A] transition-colors">
                  Industries &amp; Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("technology")}
                  className="text-[#52514B] hover:text-[#FF4D0A] transition-colors">
                  Technology &amp; Protocols
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-[#52514B] hover:text-[#FF4D0A] transition-colors">
                  About Cosmic Fire
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("resources")}
                  className="text-text-secondary hover:text-brand-primary transition-colors cursor-pointer">
                  Resources &amp; Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("faq")}
                  className="text-text-secondary hover:text-brand-primary transition-colors cursor-pointer">
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-text-secondary hover:text-brand-primary transition-colors cursor-pointer">
                  Contact &amp; Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Summary Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-[#171B18] font-bold mb-4">
              Core Systems
            </h4>
            <ul className="space-y-2 text-xs text-[#52514B]">
              <li>Aspirating Smoke (ASD)</li>
              <li>Voice Evacuation (EVAC)</li>
              <li>Clean Agent Suppression</li>
              <li>ESFR Wet/Dry Sprinklers</li>
              <li>Pressure Relief Dampers</li>
              <li>Hydraulic Booster Skids</li>
            </ul>
          </div>

          {/* Direct Office Contacts (Editable) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-[#171B18] font-bold mb-4">
              Engineering Office
            </h4>
            <div className="space-y-2.5 text-xs text-[#52514B]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF4D0A] shrink-0 mt-0.5" />
                <span>100 Fire Safety Way, London, EC2A 4NE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF4D0A] shrink-0" />
                <span>+44 (0) 20 7946 0991 / 0800 555 2676</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF4D0A] shrink-0" />
                <span>engineering@cosmicfire.co.uk</span>
              </div>
            </div>

            <div className="pt-3">
              <span className="text-[10px] font-mono-tech uppercase text-[#52514B] block mb-1">
                24/7 Monitoring Center:
              </span>
              <span className="text-xs font-bold text-[#FF4D0A] font-mono-tech">
                ACTIVE • ALL LOOPS NORMAL
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#52514B]">
          <div>
            © {new Date().getFullYear()} Cosmic Fire Protection Systems LLC. All
            rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() =>
                alert(
                  "Privacy Policy: All customer blueprints, telemetry, and facility data are strictly confidential and encrypted under life-safety compliance protocols.",
                )
              }
              className="hover:text-[#FF4D0A] transition-colors">
              Privacy Policy
            </button>
            <button
              onClick={() =>
                alert(
                  "Terms of Engineering Engagement: Stamped plans and hydraulic calculations conform to standard NFPA/AHJ covenants.",
                )
              }
              className="hover:text-[#FF4D0A] transition-colors">
              Terms
            </button>
            <button
              onClick={() =>
                alert(
                  "Cookie Policy: Only minimal functional cookies are utilized to preserve user UI preferences.",
                )
              }
              className="hover:text-[#FF4D0A] transition-colors">
              Cookie Policy
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#171B18] hover:text-[#FF4D0A] transition-colors font-bold ml-2"
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
