import { useNavigate } from "react-router-dom";
import { ResourcesSection } from "@/src/components/ResourcesSection";
import { ContactSection } from "@/src/components/ContactSection";
import { PageId } from "@/src/types";

export default function ResourcesPage() {
  const navigate = useNavigate();

  const handleNavigate = (page: PageId) => {
    navigate(page === "home" ? "/" : `/${page}`);
  };

  return (
    <>
      <ResourcesSection standalone={true} />
      <ContactSection onNavigate={handleNavigate} />
    </>
  );
}
