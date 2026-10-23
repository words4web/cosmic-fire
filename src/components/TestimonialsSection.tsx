import React, { useState } from "react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS_DATA } from "../data/testimonials";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1,
    );
  };

  const currentItem = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-surface-card relative border-t border-surface-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 pb-6 border-b border-surface-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#044FB7]/10 border border-[#0489F8]/30 text-[11px] font-mono-tech uppercase tracking-wider text-[#044FB7] font-bold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0489F8] shrink-0" />
              <span>VERIFIED CLIENT FEEDBACK</span>
            </div>
            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.12]">
              WHAT OUR CLIENTS SAY
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs font-mono-tech text-text-secondary font-bold mr-2">
              <span className="text-brand-primary">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-text-secondary/50"> / </span>
              <span>{String(TESTIMONIALS_DATA.length).padStart(2, "0")}</span>
            </span>

            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-surface-bg hover:bg-brand-primary hover:text-white text-text-primary border border-surface-border transition-all duration-200 cursor-pointer shadow-xs active:scale-95">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-surface-bg hover:bg-brand-primary hover:text-white text-text-primary border border-surface-border transition-all duration-200 cursor-pointer shadow-xs active:scale-95">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[260px] sm:min-h-[240px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full relative p-7 sm:p-10 md:p-12 rounded-3xl bg-surface-bg border border-surface-border/80 shadow-md flex flex-col justify-between overflow-hidden">
              <Quote className="absolute -bottom-6 -right-6 w-36 h-36 text-brand-primary/[0.04] pointer-events-none select-none" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-surface-border/60">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#044FB7] font-extrabold bg-[#044FB7]/10 px-3 py-1 rounded-md border border-[#0489F8]/20">
                    COMMERCIAL CLIENT
                  </span>
                </div>

                <blockquote className="text-base sm:text-xl md:text-2xl text-text-primary font-medium leading-relaxed sm:leading-snug">
                  “{currentItem.quote}”
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-surface-border/60 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-text-secondary">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  <span>PREMISES COMPLIANCE REVIEW</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {TESTIMONIALS_DATA.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => {
                        setDirection(dotIdx > currentIndex ? 1 : -1);
                        setCurrentIndex(dotIdx);
                      }}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === dotIdx
                          ? "w-8 bg-brand-primary"
                          : "w-2 bg-surface-border hover:bg-text-secondary/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
