import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";
import {
  consultationFormSchema,
  ConsultationFormInput,
  defaultConsultationValues,
} from "../validations/consultationSchema";
import { CONSULTATION_SERVICES } from "../data/mockData";
import { FormInput } from "./common/FormInput";

export const ConsultationForm: React.FC = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedData, setSubmittedData] =
    useState<ConsultationFormInput | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormInput>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: defaultConsultationValues,
  });

  const onSubmit = async (data: ConsultationFormInput) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmittedData(data);
    setSubmitSuccess(true);
  };

  const handleReset = () => {
    reset();
    setSubmittedData(null);
    setSubmitSuccess(false);
  };

  return (
    <div className="bg-[#FFFDF8] rounded-2xl sm:rounded-3xl border border-[#E7DED0] p-5 sm:p-8 md:p-10 shadow-xl shadow-[#171B18]/5">
      <div className="mb-6 sm:mb-8">
        <span className="text-[11px] sm:text-xs font-mono-tech uppercase tracking-wider text-[#FF4D0A] font-bold">
          PROJECT INQUIRY FORM
        </span>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#171B18] mt-1">
          Request a Fire Protection Consultation
        </h3>
        <p className="text-xs sm:text-sm text-[#52514B] mt-1 leading-relaxed">
          Please submit your facility specifications below for a formal
          engineering response.
        </p>
      </div>

      {submitSuccess && submittedData ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#F8F5ED] border border-[#FF4D0A]/30 text-center">
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#FF4D0A]/10 text-[#FF4D0A] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-7 sm:w-8 h-7 sm:h-8" />
          </div>
          <h4 className="font-display font-bold text-xl sm:text-2xl text-[#171B18] mb-2">
            Consultation Request Registered
          </h4>
          <p className="text-xs sm:text-sm text-[#52514B] max-w-md mx-auto mb-6 leading-relaxed">
            Thank you, <strong>{submittedData.fullName}</strong>. Your project
            inquiry for <strong>{submittedData.company}</strong> regarding{" "}
            <em>{submittedData.serviceRequired}</em> has been securely submitted
            to our engineering review queue.
          </p>
          <div className="p-3 rounded-lg bg-[#FFFDF8] border border-[#E7DED0] text-xs font-mono-tech text-[#52514B] inline-block mb-6">
            A designated Senior Fire Protection Engineer will respond within 1
            business day.
          </div>
          <div>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#171B18] text-white text-xs font-bold font-mono-tech uppercase tracking-wider hover:bg-[#2A302B] transition-colors">
              Submit Another Project Inquiry
            </button>
          </div>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              label="Full Name *"
              registration={register("fullName")}
              placeholder="e.g. Marcus Thorne"
              error={errors?.fullName}
            />

            <FormInput
              label="Company / Organization *"
              registration={register("company")}
              placeholder="e.g. Apex Holdings Ltd."
              error={errors?.company}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              label="Business Email *"
              type="email"
              registration={register("email")}
              placeholder="e.g. m.thorne@apex.com"
              error={errors?.email}
            />

            <FormInput
              label="UK Phone Number *"
              type="tel"
              registration={register("phone")}
              placeholder="e.g. 07123 456789 or +44 20 7946 0991"
              error={errors?.phone}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              label="Facility Location / Postcode *"
              registration={register("location")}
              placeholder="e.g. London, EC2A 4NE"
              error={errors?.location}
            />

            <div>
              <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-semibold mb-1">
                Service Discipline Required *
              </label>
              <select
                {...register("serviceRequired")}
                className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#F8F5ED] border border-[#E7DED0] text-sm text-[#171B18] outline-none focus:border-[#FF4D0A] transition-colors">
                {CONSULTATION_SERVICES.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
              {errors?.serviceRequired && (
                <span className="text-[11px] text-rose-600 mt-1 block">
                  {errors?.serviceRequired?.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-semibold mb-1">
              Project Details / Architectural Scope *
            </label>
            <textarea
              rows={4}
              {...register("message")}
              placeholder="Briefly describe your building footprint, current fire safety requirements, timeline, or UK statutory compliance mandates..."
              className={`w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#F8F5ED] border text-sm text-[#171B18] outline-none transition-colors ${
                errors?.message
                  ? "border-rose-500 bg-rose-50/30"
                  : "border-[#E7DED0] focus:border-[#FF4D0A]"
              }`}
            />
            {errors?.message && (
              <span className="text-[11px] text-rose-600 mt-1 block">
                {errors?.message?.message}
              </span>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl bg-[#FF4D0A] hover:bg-[#FF6A00] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#FF4D0A]/30 transition-all active:scale-[0.99] disabled:opacity-50">
              {isSubmitting ? (
                <span>Transmitting Inquiry...</span>
              ) : (
                <>
                  <span>Request a Consultation</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
