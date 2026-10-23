import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { IndustriesSection } from "@/src/components/IndustriesSection";

export default function IndustriesPage() {
  const { handleNavigate } = usePageNavigation();

  return (
    <div className="min-h-screen">
      <IndustriesSection onNavigate={handleNavigate} />
    </div>
  );
}
