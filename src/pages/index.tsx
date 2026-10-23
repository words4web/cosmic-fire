import { useState } from "react";
import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { HeroSection } from "@/src/components/HeroSection";
import { WhyCosmicFire } from "@/src/components/WhyCosmicFire";
import { CinematicBanner } from "@/src/components/CinematicBanner";
import { TechnologyFlow } from "@/src/components/TechnologyFlow";
import { AboutSection } from "@/src/components/AboutSection";
import { TestimonialsSection } from "@/src/components/TestimonialsSection";
import { FaqSection } from "@/src/components/FaqSection";
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
      <CinematicBanner onNavigate={handleNavigate} />
      <TechnologyFlow />
      <AboutSection onNavigate={handleNavigate} />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection onNavigate={handleNavigate} />

      <HotspotModal
        hotspot={selectedHotspot}
        onClose={() => setSelectedHotspot(null)}
        onNavigate={handleNavigate}
      />
    </>
  );
}
