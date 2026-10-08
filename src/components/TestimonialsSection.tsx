import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data/testimonials";
import { TestimonialItem } from "../types";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 md:py-24 bg-surface-card relative overflow-hidden border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-bg border border-surface-border text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-brand-primary font-bold mb-3 shadow-xs">
            <Quote className="w-3.5 h-3.5 text-brand-primary" />
            <span>Client Feedback</span>
          </div>

          <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.15]">
            TESTIMONIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS_DATA.map((item: TestimonialItem, idx: number) => {
            const isFeatured = idx === 0 || idx === 3;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`group relative p-[3px] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/10 ${
                  isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                }`}>
                <div className="absolute inset-[-100%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0_260deg,rgba(255,77,10,0.3)_290deg,rgba(255,77,10,0.9)_330deg,#ffffff_355deg,rgba(255,77,10,1)_360deg)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full w-full rounded-[calc(1rem-3px)] sm:rounded-[calc(1.5rem-3px)] bg-surface-card p-6 sm:p-8 flex flex-col justify-between z-10 transition-colors">
                  <div className="mb-4 text-brand-primary opacity-30 group-hover:opacity-70 transition-opacity">
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>

                  <blockquote className="font-serif text-sm sm:text-base md:text-lg text-text-primary leading-relaxed my-auto">
                    “{item.quote}”
                  </blockquote>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
