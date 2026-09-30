import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyCosmicFire } from './components/WhyCosmicFire';
import { ServicesShowcase } from './components/ServicesShowcase';
import { CinematicBanner } from './components/CinematicBanner';
import { InteractiveBlueprint } from './components/InteractiveBlueprint';
import { IndustriesSection } from './components/IndustriesSection';
import { TechnologyFlow } from './components/TechnologyFlow';
import { AboutSection } from './components/AboutSection';
import { ResourcesSection } from './components/ResourcesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HotspotModal } from './components/HotspotModal';
import { PageId, HotspotItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotItem | null>(null);

  // Sync with browser hash if user uses back/forward or deep links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'solutions', 'industries', 'technology', 'about', 'resources', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F5ED] text-[#171B18] flex flex-col selection:bg-[#FF4D0A] selection:text-[#FFFDF8]">
      {/* Header & Sticky Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* 1. Hero Section with 3D Building & Glowing Orange Protection Network */}
              <HeroSection
                onSelectHotspot={(hotspot) => setSelectedHotspot(hotspot)}
                selectedHotspot={selectedHotspot}
                onNavigate={handleNavigate}
              />

              {/* 2. Why Cosmic Fire (Macro Sprinkler + 4 Core Values) */}
              <WhyCosmicFire />

              {/* 3. Services Section (8 Integrated Disciplines) */}
              <ServicesShowcase onNavigate={handleNavigate} />

              {/* 4. Full-Width Cinematic Banner */}
              <CinematicBanner onNavigate={handleNavigate} />

              {/* 5. Interactive Fire Safety Blueprint with Alarm Simulator */}
              <InteractiveBlueprint />

              {/* 6. Industries & Sector Environments */}
              <IndustriesSection onNavigate={handleNavigate} />

              {/* 7. Technology Section: DETECT. ALERT. RESPOND. */}
              <TechnologyFlow />

              {/* 8. About Section & Strategic Commitments */}
              <AboutSection onNavigate={handleNavigate} />

              {/* 9. Resources / Insights */}
              <ResourcesSection />

              {/* 10. Contact Section & Final CTA */}
              <ContactSection onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'solutions' && (
            <motion.div
              key="solutions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="pt-24"
            >
              <ServicesShowcase onNavigate={handleNavigate} />
              <InteractiveBlueprint />
              <ContactSection onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'industries' && (
            <motion.div
              key="industries"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="pt-24"
            >
              <IndustriesSection onNavigate={handleNavigate} />
              <CinematicBanner onNavigate={handleNavigate} />
              <ContactSection onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'technology' && (
            <motion.div
              key="technology"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="pt-24"
            >
              <TechnologyFlow />
              <InteractiveBlueprint />
              <ContactSection onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <AboutSection onNavigate={handleNavigate} standalone={true} />
              <CinematicBanner onNavigate={handleNavigate} />
              <ContactSection onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'resources' && (
            <motion.div
              key="resources"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ResourcesSection standalone={true} />
              <ContactSection onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ContactSection onNavigate={handleNavigate} standalone={true} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Hotspot Technical Inspection Dialog */}
      <HotspotModal
        hotspot={selectedHotspot}
        onClose={() => setSelectedHotspot(null)}
        onNavigate={handleNavigate}
      />

      {/* Persistent Ivory / Charcoal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
