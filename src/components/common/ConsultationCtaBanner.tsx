import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY_CONTACT } from "../../data/company";
import { PageId } from "../../types";

export interface ConsultationCtaBannerProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onNavigate?: (page: PageId) => void;
  className?: string;
}

export const ConsultationCtaBanner: React.FC<ConsultationCtaBannerProps> = ({
  title = "Ready to Upgrade Your Fire Protection Strategy?",
  description = "Speak with our fire safety and compliance engineers to conduct an appraisal and determine the optimal setup for your facility.",
  primaryButtonText = "Book Technical Consultation",
  secondaryButtonText,
  onNavigate,
  className = "",
}) => {
  return (
    <div
      className={`bg-surface-card p-5 xs:p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-surface-border text-center shadow-xs ${className}`}>
      <h3 className="font-display font-black text-lg xs:text-xl sm:text-2xl md:text-3xl text-text-primary tracking-tight leading-snug">
        {title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-text-secondary mt-2 sm:mt-3 max-w-xl mx-auto leading-relaxed px-1 sm:px-0">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 mt-5 sm:mt-6 w-full max-w-md sm:max-w-none mx-auto">
        {onNavigate && (
          <button
            onClick={() => onNavigate("contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-7 rounded-full bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-primary/20 cursor-pointer">
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        )}
        <a
          href={`tel:${COMPANY_CONTACT.phoneRaw}`}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-7 rounded-full bg-surface-bg hover:bg-surface-muted active:scale-[0.98] text-text-primary border border-surface-border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer">
          <Phone className="w-3.5 h-3.5 text-brand-primary shrink-0" />
          <span>{secondaryButtonText || `Call ${COMPANY_CONTACT.phone}`}</span>
        </a>
      </div>
    </div>
  );
};
