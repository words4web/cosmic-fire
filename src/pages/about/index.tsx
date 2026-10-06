import { useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import { AboutSection } from "@/src/components/AboutSection";
import { CinematicBanner } from "@/src/components/CinematicBanner";
import { ContactSection } from "@/src/components/ContactSection";
import { PageId } from "@/src/types";

interface PageContext {
  onNavigate: (page: PageId) => void;
}

export default function AboutPage() {
  const { onNavigate } = useOutletContext<PageContext>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}>
      <AboutSection onNavigate={onNavigate} standalone={true} />
      <CinematicBanner onNavigate={onNavigate} />
      <ContactSection onNavigate={onNavigate} />
    </motion.div>
  );
}
