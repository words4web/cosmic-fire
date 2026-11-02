import React from "react";
import { ArrowRight } from "lucide-react";
import { SectorCardProps } from "../types";

export const SectorCard: React.FC<SectorCardProps> = ({
  sector,
  image,
  onCtaClick,
}) => {
  return (
    <div className="group relative h-[360px] sm:h-[390px] rounded-2xl overflow-hidden border border-surface-border hover:border-brand-primary/60 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-black/20 flex flex-col justify-end p-5 sm:p-6 cursor-pointer">
      <img
        src={image.url}
        alt={image.alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent transition-opacity duration-300 group-hover:from-black/85 group-hover:via-black/45" />

      <div className="absolute top-4 left-4 z-10">
        <span className="text-[10px] font-mono-tech uppercase tracking-wider font-extrabold text-[#FC7A21] bg-black/50 px-2.5 py-1 rounded-md border border-[#FC7A21]/40 backdrop-blur-md shadow-[0_0_12px_rgba(252,122,33,0.25)]">
          {sector.category}
        </span>
      </div>

      <div className="relative z-10 flex flex-col justify-end space-y-3">
        <div>
          <h4 className="font-display font-black text-xl sm:text-2xl text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] [text-shadow:_0_0_20px_rgba(255,255,255,0.45),_0_2px_4px_rgba(0,0,0,0.8)]">
            {sector.title}
          </h4>
          <div className="w-8 h-1 bg-[#FC7A21] rounded-full mt-2.5 group-hover:w-14 transition-all duration-300 shadow-[0_0_10px_rgba(252,122,33,0.5)]" />
        </div>

        <p className="text-xs sm:text-sm text-white font-medium leading-relaxed line-clamp-3 drop-shadow-[0_1px_5px_rgba(0,0,0,0.9)] [text-shadow:_0_0_12px_rgba(255,255,255,0.3)]">
          {sector.description}
        </p>

        <div className="pt-2">
          <button
            onClick={onCtaClick}
            className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/15 hover:bg-brand-primary text-white border border-white/30 hover:border-brand-primary text-xs font-black uppercase tracking-wider transition-all duration-300 backdrop-blur-md group/btn cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.15)] [text-shadow:_0_0_10px_rgba(255,255,255,0.5)]">
            <span>{sector.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
