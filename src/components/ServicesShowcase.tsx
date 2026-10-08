import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Layers,
  Search,
} from "lucide-react";
import { DETAILED_SERVICES_DATA } from "../data/services";
import { PageId } from "../types";

export const ServicesShowcase = ({
  onNavigate,
}: {
  onNavigate: (page: PageId) => void;
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    DETAILED_SERVICES_DATA[0].id,
  );
  const [filterQuery, setFilterQuery] = useState("");

  const currentService =
    DETAILED_SERVICES_DATA.find((s) => s.id === selectedServiceId) ||
    DETAILED_SERVICES_DATA[0];

  const filteredServices = DETAILED_SERVICES_DATA.filter((s) =>
    s.title.toLowerCase().includes(filterQuery.toLowerCase()),
  );

  const handleCtaClick = () => {
    onNavigate("contact");
  };

  return (
    <section
      id="services-section"
      className="py-12 sm:py-16 md:py-24 bg-surface-bg relative overflow-hidden border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-surface-border text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-brand-primary font-bold mb-3 shadow-xs">
              <Flame className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span>Detailed Service Panels</span>
            </div>

            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.12]">
              ENGINEERED FIRE PROTECTION{" "}
              <span className="text-brand-primary">SOLUTIONS</span>
            </h2>
          </div>

          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-text-secondary absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search 14 capabilities..."
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-surface-card border border-surface-border text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/70 focus:outline-none focus:border-brand-primary transition-colors shadow-xs"
            />
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {filteredServices.map((service) => {
              const isSelected = service.id === selectedServiceId;
              const originalIndex =
                DETAILED_SERVICES_DATA.findIndex((s) => s.id === service.id) +
                1;
              const paddedIndex = originalIndex.toString().padStart(2, "0");

              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-brand-primary text-white border-brand-primary shadow-md shadow-brand-primary/20 scale-[1.02]"
                      : "bg-surface-card hover:bg-surface-muted/60 text-text-secondary border-surface-border"
                  }`}>
                  <span
                    className={`text-[10px] font-mono-tech px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/25 text-white"
                        : "bg-surface-bg text-brand-primary border border-surface-border/60"
                    }`}>
                    {paddedIndex}
                  </span>
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="hidden lg:block lg:col-span-4 bg-surface-card rounded-2xl sm:rounded-3xl border border-surface-border p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-surface-border/70 text-xs font-mono-tech">
              <span className="text-text-primary font-bold uppercase tracking-wider">
                Select Discipline
              </span>
              <span className="text-brand-primary font-bold">
                {DETAILED_SERVICES_DATA.findIndex(
                  (s) => s.id === selectedServiceId,
                ) + 1}{" "}
                of {DETAILED_SERVICES_DATA.length}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {DETAILED_SERVICES_DATA.map((service, idx) => {
                const isSelected = service.id === selectedServiceId;
                const paddedIndex = (idx + 1).toString().padStart(2, "0");
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer border ${
                      isSelected
                        ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                        : "bg-surface-bg/50 hover:bg-surface-bg text-text-secondary hover:text-text-primary border-surface-border/60"
                    }`}>
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-[10px] font-mono-tech px-1.5 py-0.5 rounded ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-surface-card text-brand-primary"
                        }`}>
                        {paddedIndex}
                      </span>
                      <span className="line-clamp-1">{service.title}</span>
                    </div>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="group relative p-[2px] sm:p-[3px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-brand-primary/5">
                <div className="absolute inset-[-100%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0_260deg,rgba(255,77,10,0.3)_290deg,rgba(255,77,10,0.9)_330deg,#ffffff_355deg,rgba(255,77,10,1)_360deg)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full w-full rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-3px)] bg-surface-card p-5 sm:p-8 md:p-10 flex flex-col justify-between z-10">
                  <div>
                    <div className="flex items-center justify-between gap-3 pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-surface-border">
                      <span className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-brand-primary font-bold">
                        Detailed Service Specification
                      </span>
                      <div className="flex items-center gap-1 text-[10px] sm:text-xs font-mono-tech text-text-secondary bg-surface-bg px-2.5 py-1 rounded-full border border-surface-border shrink-0">
                        <Layers className="w-3 h-3 text-brand-primary" />
                        <span>Certified Protection</span>
                      </div>
                    </div>

                    <h3 className="font-display font-black text-xl sm:text-2xl md:text-4xl text-text-primary mb-3 sm:mb-4 leading-tight">
                      {currentService.title}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed mb-6 sm:mb-8">
                      {currentService.description}
                    </p>

                    <div className="bg-surface-bg/80 rounded-xl sm:rounded-2xl border border-surface-border/80 p-4 sm:p-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0" />
                        <h4 className="text-[11px] sm:text-xs font-mono-tech uppercase tracking-wider text-text-primary font-bold">
                          {currentService.benefitsHeader || "Benefits include:"}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                        {currentService.benefits.map((benefit, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-1.5 sm:gap-2 p-3 sm:p-3.5 rounded-xl bg-surface-card border border-surface-border shadow-xs hover:border-brand-primary/40 transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-primary shrink-0" />
                            <span className="text-xs sm:text-sm text-text-primary font-medium leading-snug">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="text-[11px] sm:text-xs font-mono-tech text-text-secondary">
                      Ready to safeguard your premises?
                    </div>

                    <button
                      onClick={handleCtaClick}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-primary/20 cursor-pointer group/btn">
                      <span>Get Protected</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
