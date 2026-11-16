import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { ServicesShowcase } from "@/src/components/ServicesShowcase";

export default function ServicesPage() {
  const { handleNavigate } = usePageNavigation();

  return (
    <div className="min-h-screen">
      <ServicesShowcase onNavigate={handleNavigate} />
    </div>
  );
}
