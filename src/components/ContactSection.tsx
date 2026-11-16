import { ContactSectionProps } from "../types";
import { ConsultationForm } from "./ConsultationForm";

export function ContactSection({
  standalone = false,
}: ContactSectionProps) {
  return (
    <section
      id="contact-section"
      className={`bg-[#F8F5ED] relative overflow-hidden ${
        standalone
          ? "pt-24 sm:pt-32 pb-16 sm:pb-24"
          : "py-12 sm:py-16 border-t border-[#E7DED0]"
      }`}>
      <div className="absolute top-1/4 sm:top-1/3 right-0 sm:right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#0489F8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div id="consultation-form" className="w-full">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
