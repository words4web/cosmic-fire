import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { AboutSection } from "@/src/components/AboutSection";
// import { CinematicBanner } from "@/src/components/CinematicBanner";
import { ContactSection } from "@/src/components/ContactSection";

export default function AboutPage() {
  const { handleNavigate } = usePageNavigation();

  return (
    <>
      <AboutSection onNavigate={handleNavigate} standalone={true} />
      {/* <CinematicBanner onNavigate={handleNavigate} /> */}
      <ContactSection onNavigate={handleNavigate} />
    </>
  );
}
