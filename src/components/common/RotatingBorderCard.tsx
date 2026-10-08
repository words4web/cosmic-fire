import React from "react";

interface RotatingBorderCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export const RotatingBorderCard: React.FC<RotatingBorderCardProps> = ({
  children,
  className = "",
  innerClassName = "",
}) => {
  return (
    <div
      className={`group relative p-[2px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="absolute inset-[-100%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0_260deg,rgba(255,77,10,0.3)_290deg,rgba(255,77,10,0.9)_330deg,#ffffff_355deg,rgba(255,77,10,1)_360deg)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
      <div
        className={`relative h-full w-full rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] bg-surface-card z-10 ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};
