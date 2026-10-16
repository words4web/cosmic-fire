import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "../data/faq";
import { FaqItem } from "../types";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq-section"
      className="py-14 sm:py-20 md:py-28 bg-surface-bg relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[11px] font-mono-tech uppercase tracking-wider text-brand-primary font-bold mb-3.5">
            <HelpCircle className="w-3.5 h-3.5 text-brand-primary shrink-0" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.12]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          {FAQ_DATA.map((item: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-surface-card border-brand-primary shadow-sm"
                    : "bg-surface-card/70 hover:bg-surface-card border-surface-border"
                }`}>
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}>
                  <h3 className="font-display font-bold text-base sm:text-lg text-text-primary leading-snug">
                    {item.question}
                  </h3>

                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-0.5 ${
                      isOpen
                        ? "bg-brand-primary text-white rotate-180"
                        : "bg-surface-bg text-text-secondary border border-surface-border"
                    }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-surface-border/60">
                    <p className="mt-2 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
