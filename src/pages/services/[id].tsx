import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ShieldCheck, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { DETAILED_SERVICES_DATA, SERVICE_IMAGES } from "@/src/data/services";
import { COMPANY_CONTACT } from "@/src/data/company";

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = DETAILED_SERVICES_DATA.find((s) => s.id === id);
  const imageMeta = service ? SERVICE_IMAGES[service.id] : null;

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="font-display font-black text-3xl sm:text-4xl text-text-primary mb-3">
          Service Not Found
        </h1>
        <p className="text-text-secondary text-sm mb-6 max-w-md">
          The requested fire protection service could not be located in our
          directory.
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
    <div className="bg-surface-bg text-text-primary min-h-[80vh] flex flex-col justify-center pb-16 sm:pb-24">
      {/* Service Focus Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0C1524] via-[#102038] to-[#0A111E] text-white pt-12 sm:pt-16 pb-16 sm:pb-24 border-b border-white/10 my-auto">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0489F8]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FC7A21]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-white/60 mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0489F8]">Services</span>
            <span>/</span>
            <span className="text-white truncate">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              {service.badge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono-tech uppercase tracking-wider text-[#0489F8] font-bold mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FC7A21]" />
                  <span>{service.badge}</span>
                </div>
              )}

              <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08] text-white mb-5">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mb-8 font-sans">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={handleEnquireClick}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FC7A21] hover:bg-[#FE8A2A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#FC7A21]/30 transition-all cursor-pointer">
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-xs transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 text-[#0489F8]" />
                  <span>{COMPANY_CONTACT.phone}</span>
                </a>
              </div>
            </div>

            {imageMeta && (
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] bg-surface-muted">
                  <img
                    src={imageMeta.url}
                    alt={imageMeta.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider font-extrabold text-[#FC7A21] bg-black/60 px-2.5 py-1 rounded-md border border-[#FC7A21]/30 backdrop-blur-xs">
                      {imageMeta.tag}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
