import React from "react";
import { LucideIcon } from "lucide-react";

interface InfoItemProps {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}

export function InfoItem({ icon: Icon, label, children }: InfoItemProps) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="w-9 h-9 rounded-xl bg-[#F8F5ED] border border-[#E7DED0] flex items-center justify-center text-[#FF4D0A] shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <span className="text-[10px] font-mono-tech uppercase text-[#52514B] block">
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}
