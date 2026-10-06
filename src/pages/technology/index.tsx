import { useNavigate } from "react-router-dom";
import { TechnologyFlow } from "@/src/components/TechnologyFlow";
import { InteractiveBlueprint } from "@/src/components/InteractiveBlueprint";
import { ContactSection } from "@/src/components/ContactSection";
import { PageId } from "@/src/types";

export default function TechnologyPage() {
  const navigate = useNavigate();

  const handleNavigate = (page: PageId) => {
    navigate(page === "home" ? "/" : `/${page}`);
  };

  return (
    <>
      <TechnologyFlow />
      <InteractiveBlueprint />
      <ContactSection onNavigate={handleNavigate} />
    </>
  );
}
