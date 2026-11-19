import React from "react";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
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
    <footer className="w-full bg-gradient-to-br from-[#12274A] via-[#1A3660] to-[#16253D] text-white border-t border-[#0489F8]/30 pt-10 sm:pt-16 md:pt-20 pb-8 sm:pb-12 relative overflow-hidden">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#0489F8_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.12]" />

      {/* Lighter Blue and Orange Ambient Glows */}
      <div className="absolute -top-24 -right-24 w-[450px] h-[450px] bg-[#0489F8]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] bg-[#FC7A21]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#044FB7]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-16 border-b border-white/20">
          <div className="sm:col-span-2 lg:col-span-5 space-y-4 sm:space-y-5 text-left flex flex-col items-start">
            <button
              onClick={() => {
                onNavigate("home");
                scrollToTop();
              }}
              className="group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0489F8] rounded-xl p-0 transition-transform block"
              aria-label="Cosmic Fire - Back to top">
              <img
                src="/logo.png"
                alt="Cosmic Fire Solutions - Commercial Fire Safety & Protection UK"
                className="w-56 sm:w-64 md:w-80 h-auto max-h-36 object-contain object-left transition-transform group-hover:scale-105"
              />
            </button>

            <p className="text-[11px] sm:text-xs font-mono-tech tracking-wider text-[#0489F8] font-bold uppercase text-left">
              {FOOTER_DATA.tagline}
            </p>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-md text-left">
              {FOOTER_DATA.description}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:col-span-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#0489F8] font-bold pb-1 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FC7A21]" />
              Website Index
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-semibold">
              {FOOTER_LINKS.map((link) => (
                <li key={link.pageId}>
                  <button
                    onClick={() => onNavigate(link.pageId)}
                    className="text-white/75 hover:text-white transition-all duration-200 cursor-pointer text-left flex items-center gap-2 group hover:translate-x-1 py-0.5">
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-[#FC7A21] transition-colors shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#0489F8] font-bold pb-1 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0489F8]" />
              Engineering Office
            </h4>
            <div className="space-y-2.5 sm:space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0489F8] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_CONTACT.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0489F8] shrink-0" />
                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="hover:text-white transition-colors font-medium">
                  {COMPANY_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0489F8] shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="hover:text-white transition-colors font-medium break-all">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs font-mono-tech text-white/60">
          <div className="text-center sm:text-left flex flex-wrap items-center justify-center sm:justify-start gap-x-1.5 gap-y-1">
            <span>
              © {new Date().getFullYear()} Cosmic Fire Protection Systems LLC.
              All rights reserved.
            </span>
            <span className="hidden xs:inline text-white/20">|</span>
            <span>
              Designed by{" "}
              <a
                href="https://words4web.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FC7A21] underline underline-offset-2 transition-colors font-semibold">
                Words4Web
              </a>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-white hover:bg-white/15 hover:border-[#0489F8]/40 transition-all font-bold cursor-pointer shadow-sm touch-manipulation"
            aria-label="Scroll back to top">
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0489F8]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
