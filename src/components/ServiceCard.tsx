import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ServiceCardProps } from "../types";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  imageMeta,
  onNavigate,
}) => {
  return (
    <div className="flex flex-col bg-surface-card rounded-2xl sm:rounded-3xl border border-surface-border overflow-hidden hover:border-[#044FB7]/40 transition-all duration-300 shadow-xs hover:shadow-xl group">
      {/* Photographic Header */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-surface-muted">
        <img
          src={imageMeta.url}
          alt={imageMeta.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {service.badge && (
          <div className="absolute top-3.5 left-3.5">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#044FB7]/90 text-white text-[10px] font-mono-tech font-bold uppercase tracking-wider backdrop-blur-md border border-white/20">
              {service.badge}
            </span>
          </div>
        )}

        <div className="absolute bottom-3 left-3.5 right-3.5">
          <span className="text-[10px] font-mono-tech uppercase tracking-wider font-extrabold text-[#FC7A21]">
            {imageMeta.tag}
          </span>
          <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight drop-shadow-sm leading-tight mt-0.5">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
            {service.description}
          </p>

          {service.highlights && service.highlights.length > 0 && (
            <ul className="space-y-2 mb-6 pt-3 border-t border-surface-border/60">
              {service.highlights.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-text-primary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#044FB7] shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-bg hover:bg-[#044FB7] text-text-primary hover:text-white border border-surface-border hover:border-[#044FB7] text-xs font-bold uppercase tracking-wider transition-all duration-200 group-hover:bg-[#044FB7] group-hover:text-white group-hover:border-[#044FB7] cursor-pointer">
            <span>{service.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
