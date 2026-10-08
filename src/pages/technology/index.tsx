import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { TechnologyFlow } from "@/src/components/TechnologyFlow";
import { InteractiveBlueprint } from "@/src/components/InteractiveBlueprint";
import { ContactSection } from "@/src/components/ContactSection";

export default function TechnologyPage() {
  const { handleNavigate } = usePageNavigation();

  return (
    <>
      <TechnologyFlow />
      <InteractiveBlueprint />
      <ContactSection onNavigate={handleNavigate} />
    </>
  );
}
