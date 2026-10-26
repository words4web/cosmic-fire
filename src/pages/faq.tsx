import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { FaqSection } from "@/src/components/FaqSection";

export default function FaqPage() {
  const { handleNavigate } = usePageNavigation();

  return (
    <div className="min-h-screen">
      <FaqSection onNavigate={handleNavigate} />
    </div>
  );
}
