import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ShieldAlert, 
  Bell, 
  Droplets, 
  Cpu, 
  Flame, 
  LogOut, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';
import { HotspotItem, PageId } from '../types';

interface HotspotModalProps {
  hotspot: HotspotItem | null;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const HotspotModal: React.FC<HotspotModalProps> = ({
  hotspot,
  onClose,
  onNavigate
}) => {
  if (!hotspot) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#FF4D0A]" />;
      case 'Bell':
        return <Bell className="w-6 h-6 text-[#FF4D0A]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#FF4D0A]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#FF4D0A]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#FF4D0A]" />;
      case 'LogOut':
        return <LogOut className="w-6 h-6 text-[#FF4D0A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#FF4D0A]" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#171B18]/60 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-2xl border border-[#E7DED0] shadow-2xl overflow-hidden z-10"
        >
          {/* Top orange status bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#FF4D0A] via-[#FF6A00] to-[#FFB347]" />

          <div className="p-6 sm:p-8">
            {/* Header with Icon, Category & Close */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#F2EBDD] flex items-center justify-center border border-[#E7DED0]">
                  {getIcon(hotspot.iconName)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-tech uppercase tracking-wider text-[#FF4D0A] font-semibold">
                      {hotspot.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono-tech px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      SYSTEM ONLINE
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#171B18] mt-0.5">
                    {hotspot.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#F2EBDD] hover:bg-[#E7DED0] text-[#171B18] flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Location & Zoning tag */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F8F5ED] border border-[#E7DED0] text-xs font-mono-tech text-[#52514B] mb-6">
              <Layers className="w-4 h-4 text-[#FF4D0A]" />
              <span className="font-semibold text-[#171B18]">Zoning:</span>
              <span>{hotspot.floor}</span>
            </div>

            {/* Detailed Description */}
            <div className="mb-6">
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#52514B] mb-2 font-semibold">
                System Overview
              </h4>
              <p className="text-sm text-[#52514B] leading-relaxed">
                {hotspot.description}
              </p>
            </div>

            {/* Technical Specifications Checklist */}
            <div className="mb-8">
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#52514B] mb-3 font-semibold">
                Engineered Performance Metrics
              </h4>
              <div className="space-y-2.5">
                {hotspot.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-[#171B18] p-2.5 rounded-lg bg-[#F8F5ED] border border-[#E7DED0]/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF4D0A] shrink-0 mt-0.5" />
                    <span className="font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E7DED0]">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#52514B]">
                <Activity className="w-3.5 h-3.5 text-[#FF4D0A]" />
                <span>Zero-Latency Addressable Mesh</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('solutions');
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-[#E7DED0] hover:border-[#FF4D0A] text-xs font-semibold text-[#171B18] transition-colors"
                >
                  View Related Solutions
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('contact');
                  }}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF4D0A] hover:bg-[#FF6A00] text-white text-xs font-semibold shadow-md shadow-[#FF4D0A]/30 transition-all"
                >
                  <span>Request Engineering Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
