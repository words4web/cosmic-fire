import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { TechnologyFlow } from "@/src/components/TechnologyFlow";

export default function TechnologyPage() {
  const { handleNavigate } = usePageNavigation();

  return (
    <div className="min-h-screen">
      <TechnologyFlow onNavigate={handleNavigate} />
    </div>
  );
}
