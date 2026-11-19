import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Award,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { DETAILED_SERVICES_DATA, SERVICE_IMAGES } from "@/src/data/services";
import { COMPANY_CONTACT } from "@/src/data/company";
import { useSEO } from "@/src/hooks/useSEO";

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Support legacy or aliased slugs
  const slugAliases: Record<string, string> = {
    "fire-safety-inspection": "fire-door-inspections",
    "fire-protection-installation": "fire-door-installation",
    "fire-maintenance-remedials": "fire-door-maintenance",
    "fire-doors-screens": "fire-door-manufacturing",
    "penetration-sealing": "fire-stopping",
  };
  const targetId = slugAliases[id || ""] || id;
  const service = DETAILED_SERVICES_DATA.find((s) => s.id === targetId);
  const imageMeta = service ? SERVICE_IMAGES[service.id] : null;

  // Other services for explore/navigation at the bottom
  const otherServices = DETAILED_SERVICES_DATA.filter(
    (s) => s.id !== service?.id,
  ).slice(0, 3);

  useSEO({
    title:
      service?.metaTitle ||
      (service ? `${service.title} | Cosmic Fire` : "Service Not Found"),
    description: service?.metaDescription || service?.description,
  });

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="font-display font-black text-2xl sm:text-4xl text-text-primary mb-3">
          Service Not Found
        </h1>
        <p className="text-text-secondary text-xs sm:text-sm mb-6 max-w-md">
          The requested fire protection service could not be located in our directory.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const handleEnquireClick = () => {
    navigate("/#contact-section");
    setTimeout(() => {
      const selectElement = document.querySelector(
        'select[name="serviceRequired"]',
      ) as HTMLSelectElement | null;
      if (selectElement) {
        const matched = Array.from(selectElement.options).find(
          (opt) =>
            opt.value.toLowerCase().includes(service.title.toLowerCase()) ||
            service.title.toLowerCase().includes(opt.value.toLowerCase()),
        );
        if (matched) {
          selectElement.value = matched.value;
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }, 400);
  };

  return (
    <div className="bg-surface-bg text-text-primary min-h-[85vh] flex flex-col">
      {/* Service Focus Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0C1524] via-[#102038] to-[#0A111E] text-white pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-white/10">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#0489F8]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 sm:left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-[#FC7A21]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[11px] sm:text-xs font-mono-tech text-white/60 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap py-1">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/#why-cosmic-fire" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#0489F8] font-bold truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-4 sm:space-y-6">
              {service.badge && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-wider text-[#0489F8] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FC7A21] shrink-0" />
                  <span>{service.badge}</span>
                </div>
              )}

              <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-white">
                {service.title}
              </h1>

              {service.tagline && (
                <p className="text-sm xs:text-base sm:text-lg md:text-xl font-medium text-[#0489F8] leading-snug">
                  {service.tagline}
                </p>
              )}

              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-sans max-w-2xl">
                {service.description}
              </p>

              {/* Call to Actions (Compact & Proportionate) */}
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={handleEnquireClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#FC7A21] hover:bg-[#FE8A2A] active:scale-[0.98] text-white font-display font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FC7A21]/20 transition-all cursor-pointer">
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>

                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white border border-white/20 font-display font-bold text-xs uppercase tracking-wider backdrop-blur-xs transition-colors cursor-pointer">
                  <Phone className="w-3.5 h-3.5 text-[#0489F8] shrink-0" />
                  <span>Call Us</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-white/70 text-[11px] sm:text-xs font-mono-tech">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#FC7A21] shrink-0" />
                  <span>BM Trada Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0489F8] shrink-0" />
                  <span>Fast London Deployment</span>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FC7A21] shrink-0" />
                  <span>Full Compliance Certificate</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Image Card */}
            {imageMeta && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-5 w-full">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-surface-muted group">
                  <img
                    src={imageMeta.url}
                    alt={imageMeta.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-wider font-extrabold text-[#FC7A21] bg-black/70 px-3 py-1.5 rounded-lg border border-[#FC7A21]/30 backdrop-blur-md">
                      {imageMeta.tag}
                    </span>
                    <span className="text-[10px] font-mono-tech text-white/80 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-md">
                      UK Standard
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Highlights / Key Capabilities */}
      {service.highlights && service.highlights.length > 0 && (
        <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-surface-card border border-surface-border shadow-xs">
            <div className="mb-6 sm:mb-8 pb-4 border-b border-surface-border">
              <span className="text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-wider font-bold text-[#FC7A21]">
                Compliance & Quality Assured
              </span>
              <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-text-primary tracking-tight mt-1">
                Key Standards & Compliance Checklist
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
              {service.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-surface-bg/80 border border-surface-border hover:border-[#044FB7]/30 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FC7A21] to-[#044FB7] flex items-center justify-center shrink-0 text-white shadow-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="pt-0.5">
                    <span className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed block">
                      {h}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore Other Services Section */}
      <section className="pb-14 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-display font-black text-lg sm:text-2xl text-text-primary tracking-tight">
              Other Certified Services
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              Explore complementary passive fire protection and door compliance solutions
            </p>
          </div>
          <Link
            to="/#why-cosmic-fire"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#044FB7] hover:underline">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherServices.map((item) => {
            const meta = SERVICE_IMAGES[item.id];
            return (
              <Link
                key={item.id}
                to={`/services/${item.id}`}
                className="group flex flex-col bg-surface-card rounded-2xl border border-surface-border overflow-hidden hover:border-[#044FB7]/40 transition-all duration-300 shadow-xs hover:shadow-lg">
                <div className="relative h-40 w-full overflow-hidden bg-surface-muted">
                  <img
                    src={meta?.url || "/images/services/fire-door-inspections.webp"}
                    alt={meta?.alt || item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <span className="text-[9px] font-mono-tech uppercase tracking-wider font-extrabold text-[#FC7A21]">
                      {meta?.tag || "Certified Service"}
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-tight leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-grow">
                  <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#044FB7] group-hover:text-[#033E91]">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
