import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { IndustriesSection } from "@/src/components/IndustriesSection";
import { CinematicBanner } from "@/src/components/CinematicBanner";
import { ContactSection } from "@/src/components/ContactSection";

export default function IndustriesPage() {
  const { handleNavigate } = usePageNavigation();

  return (
    <>
      <IndustriesSection onNavigate={handleNavigate} />
      <CinematicBanner onNavigate={handleNavigate} />
      <ContactSection onNavigate={handleNavigate} />
    </>
  );
}
