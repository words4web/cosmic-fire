import { useNavigate } from "react-router-dom";
import { ServicesShowcase } from "@/src/components/ServicesShowcase";
import { InteractiveBlueprint } from "@/src/components/InteractiveBlueprint";
import { ContactSection } from "@/src/components/ContactSection";
import { PageId } from "@/src/types";

export default function SolutionsPage() {
  const navigate = useNavigate();

  const handleNavigate = (page: PageId) => {
    navigate(page === "home" ? "/" : `/${page}`);
  };

  return (
    <>
      <ServicesShowcase onNavigate={handleNavigate} />
      <InteractiveBlueprint />
      <ContactSection onNavigate={handleNavigate} />
    </>
  );
}
