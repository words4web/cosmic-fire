import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  ShieldCheck,
  Send
} from 'lucide-react';
import { ConsultationFormData, PageId } from '../types';

interface ContactSectionProps {
  onNavigate: (page: PageId) => void;
  standalone?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate, standalone = false }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    serviceRequired: 'Fire Risk Assessment',
    facilityType: 'Commercial High-Rise',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const errs: Partial<Record<keyof ConsultationFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid business email is required';
    if (!formData.phone.trim()) errs.phone = 'Contact phone number is required';
    if (!formData.location.trim()) errs.location = 'Facility city or location is required';
    if (!formData.message.trim()) errs.message = 'Please provide a brief scope or inquiry description';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate localized secure client validation & request processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 900);
  };

  const servicesList = [
    'Fire Risk Assessment',
    'Fire Detection Systems',
    'Fire Alarm & Voice EVAC',
    'Clean Agent Fire Suppression',
    'Sprinkler Systems & Water Deluge',
    'Inspection & Maintenance Program',
    'Emergency Lighting & Wayfinding',
    'Fire Safety Consultation & CFD',
    'Other / Custom Facility Architecture',
  ];

  return (
    <section id="contact-section" className={`bg-[#F8F5ED] relative overflow-hidden ${standalone ? 'pt-32 pb-24' : 'py-24 border-t border-[#E7DED0]'}`}>
      
      {/* Background orange glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF6A00]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PREPARE TODAY. PROTECT TOMORROW. - Upper Master Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFFDF8] via-[#F8F5ED] to-[#FFFDF8] border border-[#E7DED0] p-8 sm:p-14 mb-16 shadow-lg shadow-[#171B18]/5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-[2px] bg-[#FF4D0A]" />
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D0A] font-bold">
                PROACTIVE FACILITY RESILIENCE
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-[#171B18] leading-[1.08] mb-4">
              PREPARE TODAY.
              <span className="text-[#FF4D0A] block">PROTECT TOMORROW.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#52514B] leading-relaxed mb-8">
              Explore fire prevention and protection solutions designed around your environment. Connect with our accredited fire protection engineers for an initial spatial and statutory risk consultation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#consultation-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FF4D0A] hover:bg-[#FF6A00] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FF4D0A]/30 transition-all active:scale-95"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onNavigate('solutions')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFDF8] hover:bg-[#F2EBDD] text-[#171B18] border border-[#E7DED0] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Explore Solutions</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Contact Interface: Left Contact Info + Right Interactive Form */}
        <div id="consultation-form" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Office Telemetry */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFDF8] rounded-2xl border border-[#E7DED0] p-6 sm:p-8 shadow-sm">
              <h3 className="font-display font-bold text-2xl text-[#171B18] mb-2">
                Engineering Consultation Office
              </h3>
              <p className="text-xs sm:text-sm text-[#52514B] leading-relaxed mb-8">
                Our technical team provides preliminary plan reviews, site walk-throughs, and tender engineering packages for commercial and industrial developments.
              </p>

              {/* Editable Information Placeholders */}
              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F5ED] border border-[#E7DED0] flex items-center justify-center text-[#FF4D0A] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase text-[#52514B] block">
                      Direct Inquiries &amp; Dispatch
                    </span>
                    <a href="tel:+18005552676" className="font-bold text-[#171B18] hover:text-[#FF4D0A] transition-colors">
                      +1 (800) 555-COSMIC / +1 (800) 555-2676
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F5ED] border border-[#E7DED0] flex items-center justify-center text-[#FF4D0A] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase text-[#52514B] block">
                      Engineering &amp; Plans Submission
                    </span>
                    <a href="mailto:engineering@cosmicfire.com" className="font-bold text-[#171B18] hover:text-[#FF4D0A] transition-colors">
                      engineering@cosmicfire.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F5ED] border border-[#E7DED0] flex items-center justify-center text-[#FF4D0A] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase text-[#52514B] block">
                      Headquarters &amp; Technology Lab
                    </span>
                    <span className="font-bold text-[#171B18] block">
                      100 Fire Safety Blvd, Suite 400, Chicago, IL 60601
                    </span>
                    <span className="text-[11px] text-[#52514B]">
                      (Deployments nationwide &amp; international consults)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F5ED] border border-[#E7DED0] flex items-center justify-center text-[#FF4D0A] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase text-[#52514B] block">
                      Operating Hours
                    </span>
                    <span className="font-bold text-[#171B18] block">
                      Monday – Friday: 08:00 – 18:00 CST
                    </span>
                    <span className="text-[11px] text-[#FF4D0A] font-semibold">
                      24/7/365 Emergency Monitoring &amp; Corrective Response
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statutory Compliance Notice */}
            <div className="p-5 rounded-xl bg-[#F2EBDD] border border-[#E7DED0] flex items-center gap-3 text-xs text-[#52514B]">
              <ShieldCheck className="w-5 h-5 text-[#FF4D0A] shrink-0" />
              <span>
                All inquiries reviewed by accredited NICET Level IV &amp; Registered Professional Engineers (PE).
              </span>
            </div>
          </div>

          {/* Right Column: Premium Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDF8] rounded-3xl border border-[#E7DED0] p-6 sm:p-10 shadow-xl shadow-[#171B18]/5">
              
              <div className="mb-8">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#FF4D0A] font-bold">
                  PROJECT INQUIRY FORM
                </span>
                <h3 className="font-display font-bold text-2xl text-[#171B18] mt-1">
                  Request a Fire Protection Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#52514B] mt-1">
                  Please submit your facility specifications below for a formal engineering response.
                </p>
              </div>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#F8F5ED] border border-[#FF4D0A]/30 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#FF4D0A]/10 text-[#FF4D0A] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-[#171B18] mb-2">
                    Consultation Request Registered
                  </h4>
                  <p className="text-sm text-[#52514B] max-w-md mx-auto mb-6">
                    Thank you, <strong>{formData.fullName}</strong>. Your project inquiry for <strong>{formData.company}</strong> regarding <em>{formData.serviceRequired}</em> has been securely submitted to our engineering review queue.
                  </p>
                  <div className="p-3 rounded-lg bg-[#FFFDF8] border border-[#E7DED0] text-xs font-mono-tech text-[#52514B] inline-block mb-6">
                    A designated Senior Fire Protection Engineer will respond within 1 business day.
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({
                          fullName: '',
                          company: '',
                          email: '',
                          phone: '',
                          location: '',
                          serviceRequired: 'Fire Risk Assessment',
                          facilityType: 'Commercial High-Rise',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#171B18] text-white text-xs font-bold font-mono-tech uppercase tracking-wider"
                    >
                      Submit Another Project Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Marcus Thorne"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#F8F5ED] border text-sm text-[#171B18] outline-none transition-colors ${
                          errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-[#E7DED0] focus:border-[#FF4D0A]'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-rose-600 mt-1 block">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-semibold mb-1">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Holdings Ltd."
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#F8F5ED] border text-sm text-[#171B18] outline-none transition-colors ${
                          errors.company ? 'border-rose-500 bg-rose-50/30' : 'border-[#E7DED0] focus:border-[#FF4D0A]'
                        }`}
                      />
                      {errors.company && (
                        <span className="text-[11px] text-rose-600 mt-1 block">{errors.company}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-semibold mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. m.thorne@apex.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#F8F5ED] border text-sm text-[#171B18] outline-none transition-colors ${
                          errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-[#E7DED0] focus:border-[#FF4D0A]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-600 mt-1 block">{errors.email}</span>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-semibold mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#F8F5ED] border text-sm text-[#171B18] outline-none transition-colors ${
                          errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-[#E7DED0] focus:border-[#FF4D0A]'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-rose-600 mt-1 block">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Location */}
                    <div>
                      <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-semibold mb-1">
                        Facility Location / City *
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Chicago, IL"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#F8F5ED] border text-sm text-[#171B18] outline-none transition-colors ${
                          errors.location ? 'border-rose-500 bg-rose-50/30' : 'border-[#E7DED0] focus:border-[#FF4D0A]'
                        }`}
                      />
                      {errors.location && (
                        <span className="text-[11px] text-rose-600 mt-1 block">{errors.location}</span>
                      )}
                    </div>

                    {/* Service Required Dropdown */}
                    <div>
                      <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-semibold mb-1">
                        Service Discipline Required *
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F5ED] border border-[#E7DED0] text-sm text-[#171B18] outline-none focus:border-[#FF4D0A]"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-semibold mb-1">
                      Project Details / Architectural Scope *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your building footprint, current fire safety requirements, timeline, or statutory compliance mandates..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#F8F5ED] border text-sm text-[#171B18] outline-none transition-colors ${
                        errors.message ? 'border-rose-500 bg-rose-50/30' : 'border-[#E7DED0] focus:border-[#FF4D0A]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-600 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FF4D0A] hover:bg-[#FF6A00] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#FF4D0A]/30 transition-all active:scale-[0.99] disabled:opacity-50"
                    >
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
          </div>

        </div>

      </div>
    </section>
  );
};
