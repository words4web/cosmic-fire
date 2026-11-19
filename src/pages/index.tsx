import { useState } from "react";
import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { useSEO } from "@/src/hooks/useSEO";
import { HeroSection } from "@/src/components/HeroSection";
import { WhyCosmicFire } from "@/src/components/WhyCosmicFire";
import { CinematicBanner } from "@/src/components/CinematicBanner";
import { TestimonialsSection } from "@/src/components/TestimonialsSection";
import { HotspotModal } from "@/src/components/HotspotModal";
import { HotspotItem } from "@/src/types";

export default function IndexPage() {
  const { handleNavigate } = usePageNavigation();
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotItem | null>(
    null,
  );

  useSEO({
    title: "Fire Prevention & Protection | Cosmic Fire Solutions",
    description:
      "Cosmic Fire designs and installs fire prevention and protection systems for homes, businesses and industrial sites. Get a free site assessment today.",
  });

  return (
    <>
      <HeroSection
        onSelectHotspot={setSelectedHotspot}
        selectedHotspot={selectedHotspot}
        onNavigate={handleNavigate}
      />
      <WhyCosmicFire onNavigate={handleNavigate} />
      <CinematicBanner onNavigate={handleNavigate} />
      <TestimonialsSection />

      <HotspotModal
        hotspot={selectedHotspot}
        onClose={() => setSelectedHotspot(null)}
        onNavigate={handleNavigate}
      />
    </>
  );
}
