import { useState } from "react";
import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { HeroSection } from "@/src/components/HeroSection";
import { WhyCosmicFire } from "@/src/components/WhyCosmicFire";
import { ServicesShowcase } from "@/src/components/ServicesShowcase";
import { CinematicBanner } from "@/src/components/CinematicBanner";
import { InteractiveBlueprint } from "@/src/components/InteractiveBlueprint";
import { IndustriesSection } from "@/src/components/IndustriesSection";
import { TechnologyFlow } from "@/src/components/TechnologyFlow";
import { AboutSection } from "@/src/components/AboutSection";
import { ResourcesSection } from "@/src/components/ResourcesSection";
import { TestimonialsSection } from "@/src/components/TestimonialsSection";
import { ContactSection } from "@/src/components/ContactSection";
import { HotspotModal } from "@/src/components/HotspotModal";
import { HotspotItem } from "@/src/types";

export default function IndexPage() {
  const { handleNavigate } = usePageNavigation();
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotItem | null>(
    null,
  );

  return (
    <>
      <HeroSection
        onSelectHotspot={setSelectedHotspot}
        selectedHotspot={selectedHotspot}
        onNavigate={handleNavigate}
      />
      <WhyCosmicFire />
      <ServicesShowcase onNavigate={handleNavigate} />
      <CinematicBanner onNavigate={handleNavigate} />
      <InteractiveBlueprint />
      <IndustriesSection onNavigate={handleNavigate} />
      <TechnologyFlow />
      <AboutSection onNavigate={handleNavigate} />
      <ResourcesSection />
      <TestimonialsSection />
      <ContactSection onNavigate={handleNavigate} />

      <HotspotModal
        hotspot={selectedHotspot}
        onClose={() => setSelectedHotspot(null)}
        onNavigate={handleNavigate}
      />
    </>
  );
}
