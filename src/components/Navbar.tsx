import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { PageId } from "../types";
import { NAV_ITEMS } from "../data/constants";
import { COMPANY_CONTACT } from "../data/company";

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-surface-card/95 backdrop-blur-md shadow-md border-b border-surface-border/80"
            : "bg-surface-card border-b border-surface-border/60"
        }`}>
        <div className="w-full bg-[#044FB7] text-white/95 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 md:px-10 lg:px-14 xl:px-20 border-b border-white/10">
          <div className="w-full flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 sm:gap-6 min-w-0">
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="flex items-center gap-1.5 sm:gap-2 hover:text-[#FE8A2A] transition-colors font-medium truncate">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0489F8] shrink-0" />
                <span className="truncate">
                  <span className="hidden sm:inline">Call Us: </span>
                  <strong className="font-bold text-white text-[11px] sm:text-xs">
                    {COMPANY_CONTACT.phone}
                  </strong>
                </span>
              </a>

              <span className="h-3 w-px bg-white/20 hidden sm:block shrink-0" />

              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="hidden lg:flex items-center gap-1.5 sm:gap-2 hover:text-[#FE8A2A] transition-colors truncate">
                <Mail className="w-3.5 h-3.5 text-[#0489F8] shrink-0" />
                <span className="truncate">{COMPANY_CONTACT.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-5 text-[10px] sm:text-[11px] text-white/90 shrink-0">
              <span className="flex items-center gap-1 sm:gap-1.5">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0489F8] shrink-0" />
                <span>London &amp; Kent</span>
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FE8A2A] shrink-0" />
                <span>24/7 Support</span>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-18 sm:h-20 md:h-22 px-2 flex items-center justify-between">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 sm:gap-4 group text-left cursor-pointer h-full py-2"
            aria-label="Cosmic Fire Homepage">
            <img
              src="/logo.png"
              alt="Cosmic Fire Logo"
              className="h-full w-auto max-h-12 sm:max-h-14 md:max-h-16 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight text-[#044FB7] leading-none flex items-center gap-1.5">
                COSMIC <span className="text-[#FC7A21]">FIRE</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-text-secondary tracking-wider uppercase mt-1">
                Solution • London &amp; Kent
              </span>
            </div>
          </button>

          <nav className="hidden min-[1137px]:flex items-center gap-1.5 bg-[#F2EBDD]/70 px-3 py-1.5 rounded-full border border-surface-border/80">
            {NAV_ITEMS.map((item) => {
              const isActive =
                currentPage === item.id ||
                (item.id === "solutions" && currentPage === "services");
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-xs font-bold tracking-tight transition-all rounded-full cursor-pointer ${
                    isActive
                      ? "text-brand-primary bg-surface-card shadow-xs"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-card/60"
                  }`}>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-surface-card -z-10 shadow-xs border border-surface-border/50"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden min-[1137px]:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="flex flex-col text-right group">
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                Talk to an Expert
              </span>
              <span className="text-xs font-extrabold text-text-primary group-hover:text-brand-primary transition-colors">
                +44 (0) 20 7946 0991
              </span>
            </a>

            <button
              onClick={() => handleNavClick("contact")}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-surface-card text-xs font-extrabold tracking-wider uppercase shadow-md shadow-brand-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[1137px]:hidden p-2.5 rounded-xl text-text-primary hover:bg-[#F2EBDD] active:bg-surface-border transition-colors cursor-pointer border border-surface-border"
            aria-label="Toggle navigation menu">
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-primary" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-text-primary/50 backdrop-blur-sm min-[1137px]:hidden"
            onClick={() => setMobileMenuOpen(false)}>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full bg-surface-card border-b border-surface-border pt-24 sm:pt-28 pb-6 px-4 sm:px-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              <div className="bg-[#171B18] text-white rounded-2xl p-4 mb-4 flex flex-col gap-2">
                <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wider">
                  Direct Line • London &amp; Kent
                </span>
                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="flex items-center gap-2 text-base font-extrabold text-white">
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span>{COMPANY_CONTACT.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-center gap-2 text-xs text-white/80">
                  <Mail className="w-3.5 h-3.5 text-brand-primary" />
                  <span>{COMPANY_CONTACT.email}</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    currentPage === item.id ||
                    (item.id === "solutions" && currentPage === "services");
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-brand-primary/10 text-brand-primary border border-brand-primary/20"
                          : "text-text-primary hover:bg-[#F2EBDD] active:bg-[#EAE4D5]"
                      }`}>
                      <span className="text-base tracking-tight">
                        {item.label}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isActive
                            ? "text-brand-primary translate-x-1"
                            : "text-text-secondary"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-surface-border/60">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-surface-card font-extrabold text-sm tracking-wider uppercase shadow-lg shadow-brand-primary/20 transition-all cursor-pointer">
                  <span>ENQUIRE NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
