import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { useSEO } from "@/src/hooks/useSEO";
import { FaqSection } from "@/src/components/FaqSection";

export default function FaqPage() {
  const { handleNavigate } = usePageNavigation();

  useSEO({
    title: "Fire Safety & Protection FAQ | Cosmic Fire Solutions",
    description:
      "Frequently asked questions regarding commercial fire door regulations, compliance inspections, installation standards, and fire stopping across London & Kent.",
  });

  return (
    <div className="min-h-screen">
      <FaqSection onNavigate={handleNavigate} />
    </div>
  );
}
