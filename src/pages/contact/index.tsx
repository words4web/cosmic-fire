import { useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import { ContactSection } from "@/src/components/ContactSection";
import { PageId } from "@/src/types";

interface PageContext {
  onNavigate: (page: PageId) => void;
}

export default function ContactPage() {
  const { onNavigate } = useOutletContext<PageContext>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}>
      <ContactSection onNavigate={onNavigate} standalone={true} />
    </motion.div>
  );
}
