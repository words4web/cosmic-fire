import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import {
  consultationFormSchema,
  ConsultationFormInput,
  defaultConsultationValues,
} from "../validations/consultationSchema";
import { CONSULTATION_SERVICES } from "../data/constants";
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
    <div className="relative w-full group">
      {/* Continuous Animated Rotating Conic Light Halo Border */}
      <div className="absolute -inset-[3px] rounded-[26px] sm:rounded-[34px] overflow-hidden pointer-events-none">
        <div className="absolute inset-[-150%] animate-border-rotate bg-[conic-gradient(from_0deg,#FC7A21_0deg,#0489F8_120deg,#044FB7_240deg,#FC7A21_360deg)] opacity-70 blur-md" />
      </div>

      {/* Floating Animated Ambient Glow behind the card */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-4 bg-gradient-to-r from-[#FC7A21]/30 via-[#0489F8]/25 to-[#044FB7]/30 rounded-3xl blur-2xl pointer-events-none"
      />

      <div className="relative w-full bg-[#FFFDF8] rounded-2xl sm:rounded-3xl border border-[#E7DED0] p-4 xs:p-5 sm:p-7 md:p-8 shadow-2xl font-sans backdrop-blur-xs">
        <div className="mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FC7A21] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FC7A21]" />
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#171B18] tracking-tight leading-tight">
              Request a Free Quote
            </h3>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {submitSuccess && submittedData ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#F8F5ED] border border-[#0489F8]/30 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#044FB7]/10 text-[#044FB7] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 sm:w-8 h-7 sm:h-8" />
              </motion.div>
              <h4 className="font-display font-bold text-xl sm:text-2xl text-[#171B18] mb-2">
                Consultation Request Registered
              </h4>
              <p className="text-xs sm:text-sm text-[#52514B] max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <strong>{submittedData.fullName}</strong>. Your project
                inquiry for <strong>{submittedData.company}</strong> regarding{" "}
                <em>{submittedData.serviceRequired}</em> has been securely submitted
                to our engineering review queue.
              </p>
              <div className="p-3 rounded-lg bg-[#FFFDF8] border border-[#E7DED0] text-xs text-[#52514B] inline-block mb-6">
                A designated Senior Fire Protection Engineer will respond within 1
                business day.
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#044FB7] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0489F8] transition-colors cursor-pointer">
                  Submit Another Project Inquiry
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 sm:space-y-4"
              noValidate>
              {/* Row 1: Name and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <FormInput
                  label="Full Name"
                  registration={register("fullName")}
                  placeholder="e.g. Marcus Thorne"
                  error={errors?.fullName}
                />

                <FormInput
                  label="Company / Organization"
                  registration={register("company")}
                  placeholder="e.g. Apex Holdings Ltd."
                  error={errors?.company}
                />
              </div>

              {/* Row 2: Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <FormInput
                  label="Business Email"
                  type="email"
                  registration={register("email")}
                  placeholder="e.g. m.thorne@apex.com"
                  error={errors?.email}
                />

                <FormInput
                  label="UK Phone Number"
                  type="tel"
                  registration={register("phone")}
                  placeholder="e.g. 07123 456789 or +44 20 7946 0991"
                  error={errors?.phone}
                />
              </div>

              {/* Row 3: Location and Service Discipline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <FormInput
                  label="Facility Location / Postcode"
                  registration={register("location")}
                  placeholder="e.g. London, EC2A 4NE"
                  error={errors?.location}
                />

                <div className="flex flex-col">
                  <label className="block text-xs font-semibold text-[#171B18] tracking-tight mb-1.5 font-sans">
                    Service Discipline Required
                  </label>
                  <select
                    {...register("serviceRequired")}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F5ED] border border-[#E7DED0] text-xs sm:text-sm text-[#171B18] font-sans outline-none focus:border-[#FC7A21] focus:ring-2 focus:ring-[#FC7A21]/20 transition-all truncate">
                    {CONSULTATION_SERVICES.map((svc) => (
                      <option key={svc} value={svc} className="font-sans">
                        {svc}
                      </option>
                    ))}
                  </select>
                  {errors?.serviceRequired && (
                    <span className="text-[11px] text-rose-600 mt-1 block font-sans">
                      {errors?.serviceRequired?.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs font-semibold text-[#171B18] tracking-tight mb-1.5 font-sans">
                  Project Details / Architectural Scope
                </label>
                <textarea
                  rows={2}
                  {...register("message")}
                  placeholder="Briefly describe your building footprint, current fire safety requirements, or timeline..."
                  className={`w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#F8F5ED] border text-xs sm:text-sm text-[#171B18] font-sans outline-none transition-all focus:ring-2 focus:ring-[#FC7A21]/20 ${
                    errors?.message
                      ? "border-rose-500 bg-rose-50/30"
                      : "border-[#E7DED0] focus:border-[#FC7A21]"
                  }`}
                />
                {errors?.message && (
                  <span className="text-[11px] text-rose-600 mt-1 block font-sans">
                    {errors?.message?.message}
                  </span>
                )}
              </div>

              <div className="pt-1 sm:pt-2">
                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#FC7A21] via-[#FE8A2A] to-[#FC7A21] hover:brightness-105 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#FC7A21]/30 transition-all disabled:opacity-50 cursor-pointer font-sans group/btn">
                  {/* Continuous moving light shimmer over the button */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.8,
                      ease: "easeInOut",
                      repeatDelay: 1,
                    }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                  />

                  {isSubmitting ? (
                    <span className="flex items-center gap-2 relative z-10">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 relative z-10">
                      <span>Request a Free Quote</span>
                      <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
