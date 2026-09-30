import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Shield, PhoneCall } from 'lucide-react';
import { PageId } from '../types';

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'solutions', label: 'Solutions' },
    { id: 'industries', label: 'Industries' },
    { id: 'technology', label: 'Technology' },
    { id: 'about', label: 'About' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#E7DED0] py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left"
            aria-label="Cosmic Fire Homepage"
          >
            <div className="relative w-9 h-9 rounded-xl bg-[#171B18] flex items-center justify-center overflow-hidden border border-[#E7DED0] group-hover:border-[#FF4D0A] transition-colors">
              {/* Stylized Cosmic Fire Emblem */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4D0A] to-[#FF6A00] opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-4 h-4 rounded-full border-2 border-[#FFFDF8] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFFDF8]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-[#171B18] flex items-center gap-1.5">
                COSMIC <span className="text-[#FF4D0A]">FIRE</span>
              </span>
              <span className="text-[9px] font-mono-tech uppercase tracking-widest text-[#52514B] -mt-1">
                Protection Engineering
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 text-sm font-semibold tracking-tight transition-colors ${
                    isActive ? 'text-[#FF4D0A]' : 'text-[#171B18] hover:text-[#FF4D0A]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF4D0A] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF4D0A] hover:bg-[#FF6A00] text-[#FFFDF8] text-xs font-bold tracking-wide uppercase shadow-md shadow-[#FF4D0A]/30 hover:shadow-lg hover:shadow-[#FF4D0A]/40 transition-all active:scale-95"
            >
              <span>Get Protected</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#171B18] hover:bg-[#F2EBDD] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-[#FFFDF8] pt-24 pb-8 px-6 flex flex-col justify-between md:hidden border-b border-[#E7DED0]"
          >
            <div className="space-y-4">
              <p className="text-xs font-mono-tech uppercase tracking-widest text-[#52514B]">
                Navigation Index
              </p>
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-2xl font-bold transition-colors py-2 flex items-center justify-between ${
                      currentPage === item.id ? 'text-[#FF4D0A]' : 'text-[#171B18]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-5 h-5 text-[#FF4D0A]" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E7DED0] space-y-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FF4D0A] text-[#FFFDF8] font-bold text-sm uppercase tracking-wide shadow-lg shadow-[#FF4D0A]/30"
              >
                <span>Get Protected →</span>
              </button>
              <div className="flex items-center justify-center gap-2 text-xs font-mono-tech text-[#52514B]">
                <Shield className="w-3.5 h-3.5 text-[#FF4D0A]" />
                <span>Engineered Fire Protection Infrastructure</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
