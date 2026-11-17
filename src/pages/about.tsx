import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { useSEO } from "@/src/hooks/useSEO";
import { AboutSection } from "@/src/components/AboutSection";

export default function AboutPage() {
  const { handleNavigate } = usePageNavigation();

  useSEO({
    title: "About Cosmic Fire | Commercial Fire Protection Engineers UK",
    description:
      "Cosmic Fire delivers fire protection solutions for UK commercial premises, from risk assessment and installation to ongoing maintenance. Get a quote.",
  });

  return (
    <div className="min-h-screen">
      <AboutSection onNavigate={handleNavigate} standalone={true} />
    </div>
  );
}
