import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  icon?: LucideIcon;
  pulse?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  icon: Icon,
  pulse = false,
  children,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-surface-card border border-surface-border text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-brand-primary font-bold shadow-xs ${className}`}>
      {pulse && (
        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
      )}
      {Icon && <Icon className="w-3.5 h-3.5 text-brand-primary shrink-0" />}
      <span>{children}</span>
    </div>
  );
};
