import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { FAQ_DATA } from "@/src/data/faq";
import { usePageNavigation } from "@/src/hooks/usePageNavigation";
import { ContactSection } from "@/src/components/ContactSection";
import { FaqItem } from "@/src/types";

export default function FaqPage() {
  const { handleNavigate } = usePageNavigation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-surface-bg">
      <section className="py-6 sm:py-12 md:py-16 overflow-hidden bg-gradient-to-b from-surface-bg via-surface-card to-surface-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-surface-card border border-surface-border text-[9px] sm:text-xs font-mono-tech uppercase tracking-widest text-brand-primary font-bold mb-3 sm:mb-4 shadow-xs">
              <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-primary shrink-0" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary mb-3 sm:mb-5 leading-[1.12]">
              CLEAR ANSWERS ON{" "}
              <span className="text-brand-primary block sm:inline mt-1 sm:mt-0">
                FIRE SAFETY &amp; COMPLIANCE
              </span>
            </h1>

            <p className="text-xs sm:text-base lg:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto px-1">
              Expert insights on commercial extinguisher selection, statutory
              servicing intervals, alarm protocols, and facility zoning.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 max-w-5xl mx-auto mb-10 sm:mb-16">
            {FAQ_DATA.map((item: FaqItem, idx: number) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`rounded-xl sm:rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? "bg-surface-card border-brand-primary shadow-md shadow-brand-primary/10"
                      : "bg-surface-card/80 hover:bg-surface-card border-surface-border"
                  }`}>
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full text-left p-3.5 sm:p-5 md:p-6 flex items-start justify-between gap-3 sm:gap-4 cursor-pointer"
                    aria-expanded={isOpen}>
                    <div className="space-y-1 sm:space-y-1.5 pr-1">
                      <h3 className="font-display font-bold text-sm sm:text-base md:text-lg text-text-primary leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-0.5 sm:mt-1 ${
                        isOpen
                          ? "bg-brand-primary text-surface-card rotate-180"
                          : "bg-surface-muted text-text-primary"
                      }`}>
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden">
                        <div className="px-3.5 sm:px-5 md:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed border-t border-surface-border/60">
                          <p className="mt-2 sm:mt-3 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-surface-card rounded-2xl sm:rounded-3xl border border-surface-border p-4 sm:p-8 md:p-10 text-center max-w-5xl mx-auto shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mx-auto mb-3 sm:mb-4">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-xl md:text-2xl text-text-primary mb-2 leading-snug">
              Have a Specific Facility or Compliance Requirement?
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary max-w-lg mx-auto mb-4 sm:mb-6 leading-relaxed">
              Our chartered life-safety engineers can review your floor plans,
              conduct on-site risk assessments, and design tailored protection
              schemes.
            </p>
            <button
              onClick={() => handleNavigate("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-surface-card font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-brand-primary/20 cursor-pointer">
              <span>Schedule Engineering Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <ContactSection onNavigate={handleNavigate} />
    </div>
  );
}
