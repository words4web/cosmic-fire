import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Building2,
  Flame,
} from "lucide-react";
import { INDUSTRIES_DATA } from "../data/constants";
import { PageId } from "../types";

interface IndustriesSectionProps {
  onNavigate: (page: PageId) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onNavigate,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters = [
    { id: "all", label: "All Environments" },
    { id: "commercial", label: "Commercial" },
    { id: "critical", label: "Critical Tech" },
    { id: "industrial", label: "Industrial & Supply" },
  ];

  const filteredIndustries = INDUSTRIES_DATA.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "commercial")
      return (
        item.id === "commercial" ||
        item.id === "hospitality" ||
        item.id === "residential"
      );
    if (activeFilter === "critical")
      return item.id === "data-tech" || item.id === "healthcare";
    if (activeFilter === "industrial")
      return (
        item.id === "industrial" ||
        item.id === "warehouses" ||
        item.id === "education"
      );
    return true;
  });

  return (
    <section
      id="industries-section"
      className="py-24 bg-[#FFFDF8] relative overflow-hidden border-b border-[#E7DED0]">
      {/* Background grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-[2px] bg-[#FF4D0A]" />
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D0A] font-bold">
                SECTOR SPECIFIC SPECIALIZATION
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#171B18]">
              PROTECTION FOR EVERY ENVIRONMENT.
            </h2>
            <p className="text-base text-[#52514B] mt-3 max-w-xl">
              From mission-critical hyperscale data centers to high-occupancy
              corporate towers, our engineering adapts to unique thermodynamic
              loads and regulatory thresholds.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#F8F5ED] p-1.5 rounded-full border border-[#E7DED0] self-start md:self-auto overflow-x-auto max-w-full">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeFilter === f.id
                    ? "bg-[#FF4D0A] text-white shadow-sm"
                    : "text-[#52514B] hover:text-[#171B18]"
                }`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid of Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIndustries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-[#F8F5ED] rounded-2xl border border-[#E7DED0] hover:border-[#FF4D0A] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-[#FF4D0A]/10 hover:-translate-y-1">
              <div>
                {/* Visual Image with Zoom Effect */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#171B18]">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171B18]/80 via-transparent to-transparent" />

                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3 bg-[#FFFDF8]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono-tech text-[#171B18] font-semibold border border-[#E7DED0]">
                    {ind.category}
                  </div>

                  {/* Standards Tag Bottom Right */}
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono-tech text-[#FFCE9A] bg-[#171B18]/80 px-2 py-0.5 rounded border border-[#FF4D0A]/40">
                    {ind.standardsRef}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#171B18] mb-2 group-hover:text-[#FF4D0A] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52514B] leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  {/* Primary Systems List */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#52514B] block mb-2 font-semibold">
                      Specified Engineered Systems:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.primarySystems.map((sys, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono-tech px-2.5 py-1 rounded-md bg-[#FFFDF8] border border-[#E7DED0] text-[#171B18]">
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate("contact")}
                  className="w-full pt-4 border-t border-[#E7DED0] flex items-center justify-between text-xs font-bold font-mono-tech text-[#171B18] group-hover:text-[#FF4D0A] transition-colors">
                  <span>Request Sector Proposal</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
