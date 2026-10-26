import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { AboutSection } from "@/src/components/AboutSection";

export default function AboutPage() {
  const { handleNavigate } = usePageNavigation();

  return (
    <div className="min-h-screen">
      <AboutSection onNavigate={handleNavigate} standalone={true} />
    </div>
  );
}
