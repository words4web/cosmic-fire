import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { ServicesShowcase } from "@/src/components/ServicesShowcase";
import { InteractiveBlueprint } from "@/src/components/InteractiveBlueprint";
import { ContactSection } from "@/src/components/ContactSection";

export default function SolutionsPage() {
  const { handleNavigate } = usePageNavigation();

  return (
    <>
      <ServicesShowcase onNavigate={handleNavigate} />
      <InteractiveBlueprint />
      <ContactSection onNavigate={handleNavigate} />
    </>
  );
}
