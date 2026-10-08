import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { PageId } from "../types";
import { NAV_ITEMS } from "../data/constants";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-surface-card/90 backdrop-blur-md border-surface-border/80 py-3 shadow-sm shadow-text-primary/5"
            : "bg-transparent border-transparent py-4 sm:py-5"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer"
            aria-label="Cosmic Fire Homepage">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-text-primary flex items-center justify-center overflow-hidden border border-surface-border group-hover:border-brand-primary transition-all shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-[#FF6A00] opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-4 h-4 rounded-full border-2 border-surface-card flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-surface-card" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-text-primary flex items-center gap-1">
                COSMIC <span className="text-brand-primary">FIRE</span>
              </span>
              <span className="text-[9px] font-mono-tech uppercase tracking-widest text-text-secondary -mt-1">
                Safety Engineering
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1 bg-[#F2EBDD]/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-surface-border/70">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all rounded-full cursor-pointer ${
                    isActive
                      ? "text-brand-primary bg-surface-card shadow-xs"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-card/50"
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

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("contact")}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-surface-card text-xs font-bold tracking-wide uppercase shadow-md shadow-brand-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <span>Get Protected</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-text-primary hover:bg-[#F2EBDD] active:bg-surface-border transition-colors cursor-pointer border border-surface-border"
            aria-label="Toggle navigation menu">
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-brand-primary" />
            ) : (
              <Menu className="w-5 h-5" />
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
            className="fixed inset-0 z-40 bg-text-primary/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full bg-surface-card border-b border-surface-border pt-20 pb-6 px-4 sm:px-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentPage === item.id;
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
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-surface-card font-bold text-sm tracking-wide shadow-lg shadow-brand-primary/20 transition-all cursor-pointer">
                  <span>Request Engineering Review</span>
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
