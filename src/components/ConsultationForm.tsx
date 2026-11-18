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
    <div className="relative w-full">
      <div className="relative w-full bg-[#FFFDF8] rounded-2xl sm:rounded-3xl border border-[#E7DED0] p-5 sm:p-6 md:p-7 shadow-xl font-sans">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FC7A21] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FC7A21]" />
            </span>
            <h3 className="font-display font-black text-lg sm:text-xl text-[#171B18] tracking-tight leading-tight">
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
              className="p-5 sm:p-6 rounded-2xl bg-[#F8F5ED] border border-[#0489F8]/30 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#044FB7]/10 text-[#044FB7] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 sm:w-7 h-6 sm:h-7" />
              </motion.div>
              <h4 className="font-display font-bold text-lg sm:text-xl text-[#171B18] mb-1.5">
                Consultation Request Registered
              </h4>
              <p className="text-xs sm:text-sm text-[#52514B] max-w-md mx-auto mb-4 leading-relaxed">
                Thank you, <strong>{submittedData.fullName}</strong>. Your project
                inquiry for <strong>{submittedData.company}</strong> regarding{" "}
                <em>{submittedData.serviceRequired}</em> has been securely submitted
                to our engineering review queue.
              </p>
              <div className="p-2.5 rounded-lg bg-[#FFFDF8] border border-[#E7DED0] text-[11px] text-[#52514B] inline-block mb-4">
                A designated Senior Fire Protection Engineer will respond within 1
                business day.
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#044FB7] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0489F8] transition-colors cursor-pointer">
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
              className="space-y-2.5 sm:space-y-3"
              noValidate>
              {/* Row 1: Name and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                <FormInput
                  label="Full Name"
                  registration={register("fullName")}
                  error={errors?.fullName}
                />

                <FormInput
                  label="Company / Organization"
                  registration={register("company")}
                  error={errors?.company}
                />
              </div>

              {/* Row 2: Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                <FormInput
                  label="Business Email"
                  type="email"
                  registration={register("email")}
                  error={errors?.email}
                />

                <FormInput
                  label="UK Phone Number"
                  type="tel"
                  registration={register("phone")}
                  error={errors?.phone}
                />
              </div>

              {/* Row 3: Location and Service Discipline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                <FormInput
                  label="Facility Location / Postcode"
                  registration={register("location")}
                  error={errors?.location}
                />

                <div className="flex flex-col">
                  <label className="block text-[11px] sm:text-xs font-semibold text-[#171B18]/90 tracking-tight mb-1 font-sans">
                    Service Required
                  </label>
                  <select
                    {...register("serviceRequired")}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#E2D9CC] hover:border-[#D1C5B5] text-xs sm:text-sm text-[#171B18] font-sans outline-none focus:border-[#FC7A21] focus:ring-2 focus:ring-[#FC7A21]/15 transition-all shadow-2xs truncate">
                    {CONSULTATION_SERVICES.map((svc) => (
                      <option key={svc} value={svc} className="font-sans">
                        {svc}
                      </option>
                    ))}
                  </select>
                  {errors?.serviceRequired && (
                    <span className="text-[10px] text-rose-600 mt-0.5 block font-sans">
                      {errors?.serviceRequired?.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-[#171B18]/90 tracking-tight mb-1 font-sans">
                  Project Details / Architectural Scope
                </label>
                <textarea
                  rows={2}
                  {...register("message")}
                  className={`w-full px-3 py-2 rounded-lg bg-white border text-xs sm:text-sm text-[#171B18] font-sans outline-none transition-all shadow-2xs focus:ring-2 focus:ring-[#FC7A21]/15 ${
                    errors?.message
                      ? "border-rose-400 bg-rose-50/20"
                      : "border-[#E2D9CC] hover:border-[#D1C5B5] focus:border-[#FC7A21]"
                  }`}
                />
                {errors?.message && (
                  <span className="text-[10px] text-rose-600 mt-0.5 block font-sans">
                    {errors?.message?.message}
                  </span>
                )}
              </div>

              <div className="pt-1">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#FC7A21] via-[#FE8A2A] to-[#FC7A21] hover:brightness-105 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#FC7A21]/25 transition-all disabled:opacity-50 cursor-pointer font-sans group/btn">
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
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 relative z-10">
                      <span>Request a Free Quote</span>
                      <Send className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
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
