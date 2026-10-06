import { useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import { HeroSection } from "@/src/components/HeroSection";
import { WhyCosmicFire } from "@/src/components/WhyCosmicFire";
import { ServicesShowcase } from "@/src/components/ServicesShowcase";
import { CinematicBanner } from "@/src/components/CinematicBanner";
import { InteractiveBlueprint } from "@/src/components/InteractiveBlueprint";
import { IndustriesSection } from "@/src/components/IndustriesSection";
import { TechnologyFlow } from "@/src/components/TechnologyFlow";
import { AboutSection } from "@/src/components/AboutSection";
import { ResourcesSection } from "@/src/components/ResourcesSection";
import { ContactSection } from "@/src/components/ContactSection";
import { PageId, HotspotItem } from "@/src/types";

interface PageContext {
  onNavigate: (page: PageId) => void;
  onSelectHotspot: (hotspot: HotspotItem | null) => void;
  selectedHotspot: HotspotItem | null;
}

export default function IndexPage() {
  const { onNavigate, onSelectHotspot, selectedHotspot } =
    useOutletContext<PageContext>();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <HeroSection
        onSelectHotspot={onSelectHotspot}
        selectedHotspot={selectedHotspot}
        onNavigate={onNavigate}
      />
      <WhyCosmicFire />
      <ServicesShowcase onNavigate={onNavigate} />
      <CinematicBanner onNavigate={onNavigate} />
      <InteractiveBlueprint />
      <IndustriesSection onNavigate={onNavigate} />
      <TechnologyFlow />
      <AboutSection onNavigate={onNavigate} />
      <ResourcesSection />
      <ContactSection onNavigate={onNavigate} />
    </motion.div>
  );
}
