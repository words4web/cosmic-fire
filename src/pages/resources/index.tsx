import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { ResourcesSection } from "@/src/components/ResourcesSection";
import { ContactSection } from "@/src/components/ContactSection";

export default function ResourcesPage() {
  const { handleNavigate } = usePageNavigation();

  return (
    <>
      <ResourcesSection standalone={true} />
      <ContactSection onNavigate={handleNavigate} />
    </>
  );
}
