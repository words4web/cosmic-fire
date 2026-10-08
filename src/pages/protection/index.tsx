import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { ProtectionLayers } from "@/src/components/ProtectionLayers";
import { ContactSection } from "@/src/components/ContactSection";

export default function ProtectionPage() {
  const { handleNavigate } = usePageNavigation();

  return (
    <>
      <ProtectionLayers />
      <ContactSection onNavigate={handleNavigate} />
    </>
  );
}
