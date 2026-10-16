import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data/testimonials";
import { TestimonialItem } from "../types";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-surface-card relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14 pb-6 border-b border-surface-border">
          <div className="max-w-2xl">
            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.12]">
              TESTIMONIALS
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-surface-bg hover:bg-surface-muted text-text-primary border border-surface-border transition-colors cursor-pointer shadow-xs">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-surface-bg hover:bg-surface-muted text-text-primary border border-surface-border transition-colors cursor-pointer shadow-xs">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item: TestimonialItem, idx: number) => {
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-surface-bg border border-surface-border hover:border-brand-primary/40 transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-black/5">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-surface-border">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-brand-primary/40 group-hover:text-brand-primary transition-colors" />
                  </div>

                  <blockquote className="text-xs sm:text-sm md:text-base text-text-primary leading-relaxed font-medium">
                    “{item.quote}”
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
