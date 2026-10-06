import { ArrowRight } from "lucide-react";
import { ContactSectionProps } from "../types";
import { ConsultationForm } from "./ConsultationForm";
import { ContactOfficeInfo } from "./ContactOfficeInfo";

export function ContactSection({
  onNavigate,
  standalone = false,
}: ContactSectionProps) {
  return (
    <section
      id="contact-section"
      className={`bg-[#F8F5ED] relative overflow-hidden ${
        standalone
          ? "pt-24 sm:pt-32 pb-16 sm:pb-24"
          : "py-14 sm:py-24 border-t border-[#E7DED0]"
      }`}>
      <div className="absolute top-1/4 sm:top-1/3 right-0 sm:right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF6A00]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFFDF8] via-[#F8F5ED] to-[#FFFDF8] border border-[#E7DED0] p-6 sm:p-10 md:p-14 mb-10 sm:mb-16 shadow-lg shadow-[#171B18]/5">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-4 sm:w-5 h-[2px] bg-[#FF4D0A]" />
              <span className="text-[11px] sm:text-xs font-mono-tech uppercase tracking-widest text-[#FF4D0A] font-bold">
                Contact
              </span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl tracking-tight text-[#171B18] leading-[1.18] sm:leading-[1.15] mb-3 sm:mb-4">
              Know Your Risks.
              <span className="text-[#FF4D0A] block mt-1 sm:mt-0">
                Protect Your Premises.
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#52514B] leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              From fire extinguishers and servicing to detection, alarms and
              passive fire protection, we can help you understand what fire
              protection your premises requires.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate("solutions")}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#FF4D0A] hover:bg-[#FF6A00] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FF4D0A]/30 transition-all active:scale-95">
                <span>Explore Your Options</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#FFFDF8] hover:bg-[#F2EBDD] text-[#171B18] border border-[#E7DED0] font-bold text-xs uppercase tracking-wider transition-colors text-center">
                <span>Talk to an Expert</span>
              </a>
            </div>
          </div>
        </div>

        <div
          id="consultation-form"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          <ContactOfficeInfo />

          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
