import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  Clock,
  ChevronDown,
} from "lucide-react";
import { PageId } from "../types";
import { NAV_ITEMS } from "../data/constants";
import { COMPANY_CONTACT } from "../data/company";
import { DETAILED_SERVICES_DATA } from "../data/services";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleServiceSelect = (serviceId: string, serviceTitle: string) => {
    navigate(`/services/${serviceId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    setTimeout(() => {
      const selectElement = document.querySelector(
        'select[name="serviceRequired"]',
      ) as HTMLSelectElement | null;
      if (selectElement) {
        const matched = Array.from(selectElement.options).find(
          (opt) =>
            opt.value.toLowerCase().includes(serviceTitle.toLowerCase()) ||
            serviceTitle.toLowerCase().includes(opt.value.toLowerCase()),
        );
        if (matched) {
          selectElement.value = matched.value;
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }, 400);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-surface-card/95 backdrop-blur-md shadow-md border-b border-surface-border/80"
            : "bg-surface-card border-b border-surface-border/60"
        }`}>
        {/* Top Utility Micro-Bar */}
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
                <ShieldCheck className="w-3.5 h-3.5 text-[#0489F8] shrink-0" />
                <span>London &amp; Kent</span>
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FE8A2A] shrink-0" />
                <span>24/7 Support</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="w-full h-16 sm:h-20 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center group text-left cursor-pointer h-full py-1.5"
            aria-label="Cosmic Fire Homepage">
            <img
              src="/logo.png"
              alt="Cosmic Fire Solutions - Commercial Fire Protection Engineers"
              className="h-full w-auto max-h-12 sm:max-h-14 object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F2EBDD]/70 px-3 py-1.5 rounded-full border border-surface-border/80">
            {NAV_ITEMS.map((item) => {
              const isServices = item.id === "services";
              const isActive = currentPage === item.id;

              if (isServices) {
                return (
                  <div
                    key={item.id}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}>
                    <button
                      onClick={() =>
                        setServicesDropdownOpen(!servicesDropdownOpen)
                      }
                      className={`relative inline-flex items-center gap-1 px-4 py-2 text-xs font-bold tracking-tight transition-all rounded-full cursor-pointer ${
                        servicesDropdownOpen || isActive
                          ? "text-[#044FB7] bg-surface-card shadow-xs"
                          : "text-text-secondary hover:text-text-primary hover:bg-surface-card/60"
                      }`}>
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-[#044FB7]" : ""
                        }`}
                      />
                    </button>

                    {/* Simple, Clean, Spacious Services Dropdown */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-0 top-full mt-3 w-80 bg-surface-card rounded-2xl border border-surface-border shadow-2xl p-2.5 z-50">
                          <div className="space-y-1">
                            {DETAILED_SERVICES_DATA.map((service) => (
                              <button
                                key={service.id}
                                onClick={() =>
                                  handleServiceSelect(service.id, service.title)
                                }
                                className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-[13px] font-semibold text-text-primary hover:text-[#044FB7] hover:bg-[#F8F5ED] transition-all flex items-center justify-between group cursor-pointer">
                                <span>{service.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-[#044FB7] transition-all duration-200" />
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

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

          {/* Desktop Right Phone & CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
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
              className="group relative inline-flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-surface-card text-xs font-extrabold tracking-wider uppercase shadow-md shadow-brand-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-text-primary hover:bg-[#F2EBDD] active:bg-surface-border transition-colors cursor-pointer border border-surface-border"
            aria-label="Toggle navigation menu">
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-brand-primary" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Clean Fullscreen / Slide Mobile Drawer (Never overlaps header logo or close button) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[340px] bg-[#FFFDF8] h-full shadow-2xl flex flex-col justify-between p-6 z-50 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}>
              
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#E7DED0]">
                  <img
                    src="/logo.png"
                    alt="Cosmic Fire Solutions - Navigation Menu Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-[#171B18] hover:bg-[#F2EBDD] active:scale-95 transition-all cursor-pointer border border-[#E7DED0]"
                    aria-label="Close menu">
                    <X className="w-5 h-5 text-[#FC7A21]" />
                  </button>
                </div>

                {/* Main Navigation Links */}
                <div className="py-6 space-y-2">
                  {NAV_ITEMS.map((item) => {
                    const isServices = item.id === "services";
                    const isActive = currentPage === item.id;

                    if (isServices) {
                      return (
                        <div key={item.id} className="space-y-1">
                          <button
                            onClick={() =>
                              setMobileServicesExpanded(!mobileServicesExpanded)
                            }
                            className="w-full text-left px-4 py-3 rounded-xl font-display font-bold text-sm text-[#171B18] hover:bg-[#F8F5ED] flex items-center justify-between transition-colors cursor-pointer">
                            <span>{item.label}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-[#52514B] transition-transform duration-200 ${
                                mobileServicesExpanded
                                  ? "rotate-180 text-[#044FB7]"
                                  : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileServicesExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-4 pr-1 py-1 space-y-1 overflow-hidden">
                                {DETAILED_SERVICES_DATA.map((service) => (
                                  <button
                                    key={service.id}
                                    onClick={() =>
                                      handleServiceSelect(
                                        service.id,
                                        service.title,
                                      )
                                    }
                                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#52514B] hover:text-[#044FB7] hover:bg-[#F8F5ED] transition-colors flex items-center justify-between cursor-pointer">
                                    <span>{service.title}</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-[#044FB7] opacity-60" />
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-display font-bold text-sm transition-colors flex items-center justify-between cursor-pointer ${
                          isActive
                            ? "bg-[#044FB7]/10 text-[#044FB7]"
                            : "text-[#171B18] hover:bg-[#F8F5ED]"
                        }`}>
                        <span>{item.label}</span>
                        <ArrowRight
                          className={`w-4 h-4 ${
                            isActive ? "text-[#044FB7]" : "text-[#52514B]"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="pt-6 border-t border-[#E7DED0] space-y-3">
                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F8F5ED] border border-[#E7DED0] text-xs font-bold text-[#171B18] hover:text-[#044FB7] transition-colors">
                  <Phone className="w-4 h-4 text-[#044FB7]" />
                  <span>Call: {COMPANY_CONTACT.phone}</span>
                </a>

                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FC7A21] hover:bg-[#FE8A2A] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#FC7A21]/25 transition-all cursor-pointer">
                  <span>GET A FREE QUOTE</span>
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
