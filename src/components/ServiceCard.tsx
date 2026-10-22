import React from "react";
import { ArrowRight, PhoneCall, RotateCw } from "lucide-react";
import { ServiceCardProps } from "../types";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  imageMeta,
  isFlipped,
  onCardClick,
  onNavigate,
}) => {
  return (
    <div
      className="group perspective-1000 h-[260px] sm:h-[280px] w-full cursor-pointer"
      onClick={() => onCardClick(service.id)}>
      <div
        className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
          isFlipped
            ? "rotate-y-180"
            : "[@media(hover:hover)]:group-hover:rotate-y-180"
        }`}>
        <div className="absolute inset-0 backface-hidden flex flex-col justify-between bg-surface-card rounded-2xl border border-surface-border overflow-hidden group-hover:border-brand-primary/50 transition-all duration-300 shadow-xs hover:shadow-xl">
          <div className="relative h-[68%] w-full overflow-hidden bg-surface-muted">
            <img
              src={imageMeta.url}
              alt={imageMeta.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

            <div className="absolute top-2.5 right-2.5">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-mono-tech text-white">
                <span className="hidden [@media(hover:hover)]:inline text-white/80">
                  HOVER FOR DETAILS
                </span>
                <span className="hidden [@media(hover:none)]:inline text-white/80">
                  TAP FOR DETAILS
                </span>
                <RotateCw className="w-3 h-3 text-[#FC7A21] transition-transform duration-500 group-hover:rotate-180" />
              </div>
            </div>

            <div className="absolute bottom-2.5 left-2.5">
              <span className="text-[10px] font-mono-tech uppercase tracking-wider font-extrabold text-[#FC7A21] bg-black/60 px-2 py-0.5 rounded-md border border-[#FC7A21]/30 backdrop-blur-xs">
                {imageMeta.tag}
              </span>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 flex-1 flex items-center justify-between gap-3 bg-surface-card">
            <div className="min-w-0 flex-1">
              <h3 className="font-display font-bold text-sm sm:text-base text-text-primary group-hover:text-brand-primary transition-colors leading-snug truncate">
                {service.title}
              </h3>
              <div className="w-8 h-0.5 bg-brand-primary mt-1.5 transition-all duration-300 group-hover:w-14" />
            </div>

            <span className="text-brand-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center text-xs shrink-0 font-mono-tech">
              DETAILS →
            </span>
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col justify-between bg-surface-card rounded-2xl border border-brand-primary/50 p-4 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <span className="text-[10px] font-mono-tech font-bold text-brand-primary uppercase">
              {imageMeta.tag}
            </span>
            <div className="flex items-center gap-1 text-[10px] font-mono-tech text-text-secondary">
              <RotateCw className="w-3 h-3 text-brand-primary" />
              <span className="hidden [@media(hover:none)]:inline">
                TAP TO FLIP BACK
              </span>
            </div>
          </div>

          <div className="overflow-y-auto pr-1 my-auto space-y-1.5 flex-1 flex flex-col justify-center scrollbar-thin">
            <h4 className="font-display font-bold text-sm text-text-primary leading-snug">
              {service.title}
            </h4>

            <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed line-clamp-4">
              {service.description}
            </p>
          </div>

          <div
            className="pt-2 border-t border-surface-border flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onNavigate("contact")}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-primary hover:bg-[#033E91] text-white text-xs font-bold transition-all duration-200 cursor-pointer shadow-xs">
              <span>{service.ctaText}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <a
              href="tel:02080500122"
              title="Speak to our technical team"
              className="inline-flex items-center justify-center p-1.5 rounded-lg bg-surface-bg hover:bg-surface-muted text-text-secondary hover:text-brand-primary border border-surface-border transition-colors cursor-pointer">
              <PhoneCall className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
