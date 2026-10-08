import React from "react";
import { CheckCircle2, LucideIcon } from "lucide-react";

interface FeaturePointProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export const FeaturePoint: React.FC<FeaturePointProps> = ({
  icon: Icon = CheckCircle2,
  children,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-2.5 p-2.5 rounded-xl bg-surface-card border border-surface-border text-xs sm:text-sm font-semibold text-text-primary ${className}`}>
      <Icon className="w-4 h-4 text-brand-primary shrink-0" />
      <span>{children}</span>
    </div>
  );
};
