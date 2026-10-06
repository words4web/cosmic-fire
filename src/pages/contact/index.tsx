import { useNavigate } from "react-router-dom";
import { ContactSection } from "@/src/components/ContactSection";
import { PageId } from "@/src/types";

export default function ContactPage() {
  const navigate = useNavigate();

  const handleNavigate = (page: PageId) => {
    navigate(page === "home" ? "/" : `/${page}`);
  };

  return (
    <>
      <ContactSection onNavigate={handleNavigate} standalone={true} />
    </>
  );
}
