import { useState, useMemo } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Search,
  SlidersHorizontal,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { DETAILED_SERVICES_DATA, SERVICE_IMAGES } from "../data/services";
import { PageId, ServiceCategoryFilter } from "../types";

export const ServicesShowcase = ({
  onNavigate,
}: {
  onNavigate: (page: PageId) => void;
}) => {
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategoryFilter>("all");
  const [filterQuery, setFilterQuery] = useState("");

  const categories = [
    { id: "all", label: "All Services", count: 14 },
    { id: "detection", label: "Detection & Alarms", count: 2 },
    { id: "suppression", label: "Active Suppression", count: 3 },
    { id: "passive", label: "Passive Fire Protection", count: 9 },
  ];

  const filteredServices = useMemo(() => {
    return DETAILED_SERVICES_DATA.filter((service) => {
      const imgMeta = SERVICE_IMAGES[service.id];
      const matchesCategory =
        activeCategory === "all" ||
        (imgMeta && imgMeta.category === activeCategory);
      const matchesQuery =
        filterQuery.trim() === "" ||
        service.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(filterQuery.toLowerCase()) ||
        service.benefits.some((b) =>
          b.toLowerCase().includes(filterQuery.toLowerCase()),
        );
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, filterQuery]);

  return (
    <section
      id="services-section"
      className="py-14 sm:py-20 md:py-28 bg-surface-bg relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-surface-border">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[11px] font-mono-tech uppercase tracking-wider text-brand-primary font-bold mb-3.5">
              <Flame className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span>Full Scope Commercial Protection</span>
            </div>
            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary leading-[1.12]">
              ENGINEERED FIRE PROTECTION{" "}
              <span className="text-brand-primary">SOLUTIONS</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed">
              From early warning detection and clean-agent active suppression to
              complete passive fire compartmentation, every service is delivered
              in full compliance with current UK Fire Safety Legislation and
              British Standards.
            </p>
          </div>

          <div className="w-full lg:w-80 relative shrink-0">
            <Search className="w-4 h-4 text-text-secondary absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search services, standards or keywords..."
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-surface-card border border-surface-border text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/70 focus:outline-none focus:border-brand-primary transition-colors shadow-xs"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 py-6 flex-wrap">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none max-w-full">
            <div className="flex items-center gap-1.5 text-xs text-text-secondary font-mono-tech mr-1 shrink-0 hidden sm:flex">
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-primary" />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() =>
                    setActiveCategory(cat.id as ServiceCategoryFilter)
                  }
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-brand-primary text-white border-brand-primary shadow-sm scale-[1.02]"
                      : "bg-surface-card hover:bg-surface-muted/60 text-text-secondary hover:text-text-primary border-surface-border"
                  }`}>
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono-tech px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-surface-bg text-text-secondary border border-surface-border/60"
                    }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs font-mono-tech text-text-secondary">
            Showing{" "}
            <span className="font-bold text-text-primary">
              {filteredServices.length}
            </span>{" "}
            of {DETAILED_SERVICES_DATA.length} services
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 pt-2">
          {filteredServices.map((service, index) => {
            const originalIndex =
              DETAILED_SERVICES_DATA.findIndex((s) => s.id === service.id) + 1;
            const paddedIndex = originalIndex.toString().padStart(2, "0");
            const imageMeta = SERVICE_IMAGES[service.id] || {
              url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
              alt: service.title,
              category: "detection",
              tag: "Certified Service",
            };

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-surface-card rounded-2xl border border-surface-border overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/5">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                    <img
                      src={imageMeta.url}
                      alt={imageMeta.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-[10px] font-mono-tech font-bold px-2 py-0.5 rounded-full bg-brand-primary text-white shadow-xs">
                        {paddedIndex}
                      </span>
                      <span className="text-[10px] font-mono-tech font-semibold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white/90 border border-white/10">
                        {imageMeta.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/80 font-mono-tech">
                      <span className="inline-flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                        <span>UK Certified Standard</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary group-hover:text-brand-primary transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <div className="w-10 h-0.5 bg-brand-primary my-3 transition-all duration-300 group-hover:w-16" />

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="pt-3 border-t border-surface-border/70">
                      <div className="text-[11px] font-mono-tech uppercase tracking-wider text-text-primary font-bold mb-2.5 flex items-center gap-1.5">
                        <span>
                          {service.benefitsHeader || "Benefits include:"}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-text-secondary leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 mt-auto">
                  <div className="pt-4 border-t border-surface-border flex items-center gap-2">
                    <button
                      onClick={() => onNavigate("contact")}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-bg hover:bg-brand-primary text-text-primary hover:text-white border border-surface-border hover:border-brand-primary text-xs font-bold transition-all duration-200 cursor-pointer group/btn shadow-xs">
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                    <a
                      href="tel:02080500122"
                      title="Speak to our technical team"
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-surface-bg hover:bg-surface-muted text-text-secondary hover:text-brand-primary border border-surface-border transition-colors cursor-pointer">
                      <PhoneCall className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-surface-card rounded-2xl border border-surface-border my-6">
            <Flame className="w-8 h-8 text-brand-primary mx-auto mb-3 opacity-60" />
            <h4 className="font-display font-bold text-lg text-text-primary">
              No matching fire protection services found
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Try adjusting your search terms or select "All Services" to view
              our complete capability range.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setFilterQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-brand-primary text-white text-xs font-bold cursor-pointer">
              Reset Filters
            </button>
          </div>
        )}

        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface-card border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-brand-primary font-bold">
              Require A Bespoke Survey Or Multi-Service Package?
            </span>
            <h3 className="font-display font-bold text-lg sm:text-2xl text-text-primary mt-1">
              Need assistance determining your exact building safety
              requirements?
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-1 max-w-2xl">
              Our BAFE and BM TRADA aligned engineers carry out full site
              assessments across London and Kent, advising on the exact
              equipment, testing schedules, and compartmentation required for
              your premises.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-primary/20 cursor-pointer">
              <span>Book Site Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:02080500122"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface-bg hover:bg-surface-muted text-text-primary border border-surface-border text-xs font-bold transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-brand-primary" />
              <span>020 8050 0122</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
