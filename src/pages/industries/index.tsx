import { useNavigate } from "react-router-dom";
import { IndustriesSection } from "@/src/components/IndustriesSection";
import { CinematicBanner } from "@/src/components/CinematicBanner";
import { ContactSection } from "@/src/components/ContactSection";
import { PageId } from "@/src/types";

export default function IndustriesPage() {
  const navigate = useNavigate();

  const handleNavigate = (page: PageId) => {
    navigate(page === "home" ? "/" : `/${page}`);
  };

  return (
    <>
      <IndustriesSection onNavigate={handleNavigate} />
      <CinematicBanner onNavigate={handleNavigate} />
      <ContactSection onNavigate={handleNavigate} />
    </>
  );
}
