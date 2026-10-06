import { useNavigate } from "react-router-dom";
import { AboutSection } from "@/src/components/AboutSection";
import { CinematicBanner } from "@/src/components/CinematicBanner";
import { ContactSection } from "@/src/components/ContactSection";
import { PageId } from "@/src/types";

export default function AboutPage() {
  const navigate = useNavigate();

  const handleNavigate = (page: PageId) => {
    navigate(page === "home" ? "/" : `/${page}`);
  };

  return (
    <>
      <AboutSection onNavigate={handleNavigate} standalone={true} />
      <CinematicBanner onNavigate={handleNavigate} />
      <ContactSection onNavigate={handleNavigate} />
    </>
  );
}
