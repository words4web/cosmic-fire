import { useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import { ResourcesSection } from "@/src/components/ResourcesSection";
import { ContactSection } from "@/src/components/ContactSection";
import { PageId } from "@/src/types";

interface PageContext {
  onNavigate: (page: PageId) => void;
}

export default function ResourcesPage() {
  const { onNavigate } = useOutletContext<PageContext>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}>
      <ResourcesSection standalone={true} />
      <ContactSection onNavigate={onNavigate} />
    </motion.div>
  );
}
