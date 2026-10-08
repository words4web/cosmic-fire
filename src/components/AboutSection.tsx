import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Target,
  Cpu,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import { TRUST_POINTS } from "../data/constants";
import { PageId } from "../types";

interface AboutSectionProps {
  onNavigate: (page: PageId) => void;
  standalone?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  standalone = false,
}) => {
  const pillars = [
    {
      title: "Our Approach",
      description:
        "We believe genuine fire protection is engineered at the intersection of architectural spatial understanding, thermodynamic modeling, and precision hardware integration. We do not apply generic cookie-cutter templates.",
      icon: Target,
    },
    {
      title: "Prevention-First Thinking",
      description:
        "The safest fire is the one that never develops. By identifying electrical overheating, chemical combustion risks, and combustible storage loads early, we mitigate disaster before active flame generation.",
      icon: ShieldCheck,
    },
    {
      title: "Technical Focus",
      description:
        "We adhere rigorously to international and statutory standards (NFPA, EN54, BS 5839). Our engineers utilize computational fluid dynamics (CFD) and hydraulic modeling to substantiate every pipe diameter and sensor placement.",
      icon: Cpu,
    },
    {
      title: "Professional Service & Support",
      description:
        "Fire safety infrastructure is an ongoing life-safety covenant. From preliminary blueprint review through AHJ sign-off and continuous preventive maintenance, our certified technicians ensure flawless operational readiness.",
      icon: Wrench,
    },
  ];

  return (
    <section
      id="about-section"
      className={`py-24 bg-[#FFFDF8] relative overflow-hidden ${standalone ? "pt-32" : "border-t border-[#E7DED0]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[2px] bg-[#FF4D0A]" />
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D0A] font-bold">
              ABOUT COSMIC FIRE
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#171B18] leading-[1.05]">
            BUILT AROUND ONE PRIORITY:
            <span className="text-[#FF4D0A] block">PROTECTION.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#52514B] mt-4 leading-relaxed max-w-2xl">
            Cosmic Fire was founded with a unified conviction: that modern built
            environments require intelligent, integrated, and uncompromising
            life-safety engineering designed around the people and assets
            within.
          </p>
        </div>

        {/* 2-Column Story Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-[#171B18] border border-[#E7DED0] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Fire protection engineers reviewing blueprints"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover object-center opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171B18] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FFFDF8]/90 backdrop-blur-md border border-[#E7DED0] text-xs font-mono-tech text-[#171B18]">
                <span className="text-[#FF4D0A] font-bold">DISCIPLINE</span>:
                Certified Fire Protection Engineers (FPE) reviewing spatial
                egress models.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#171B18]">
              Protection Without Compromise
            </h3>
            <p className="text-sm sm:text-base text-[#52514B] leading-relaxed">
              Modern structures house complex technologies, sensitive data
              banks, and thousands of occupants. Conventional off-the-shelf fire
              equipment often fails to address the unique risk profile of
              contemporary architecture.
            </p>
            <p className="text-sm sm:text-base text-[#52514B] leading-relaxed">
              At Cosmic Fire, we combine cutting-edge addressable detection
              networks, clean-agent waterless suppression, and automated
              evacuation management into a unified protective canopy.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF4D0A] hover:bg-[#FF6A00] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#FF4D0A]/20">
                <span>Consult With Our Engineering Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* The 4 Strategic Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#F8F5ED] p-7 rounded-2xl border border-[#E7DED0] hover:border-[#FF4D0A] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FFFDF8] border border-[#E7DED0] flex items-center justify-center text-[#FF4D0A] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#171B18] mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#52514B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Points / Credibility Strip */}
        <div className="bg-[#F8F5ED] rounded-3xl border border-[#E7DED0] p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D0A] font-bold block mb-1">
              ENGINEERING CREDIBILITY &amp; GOVERNANCE
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#171B18]">
              Our Professional Commitments
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_POINTS.map((tp, i) => (
              <div key={i} className="flex flex-col justify-start">
                <div className="flex items-center gap-2 text-sm font-bold text-[#171B18] mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D0A] shrink-0" />
                  <span>{tp.title}</span>
                </div>
                <p className="text-xs text-[#52514B] leading-relaxed">
                  {tp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
