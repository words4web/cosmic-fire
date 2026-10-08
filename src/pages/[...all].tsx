import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Flame, ArrowLeft, Home, ShieldAlert, Compass } from "lucide-react";

const quickLinks = [
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  { label: "Technology", path: "/technology" },
  { label: "About", path: "/about" },
  { label: "Resources", path: "/resources" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/#contact-section" },
];

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative inline-flex items-center justify-center mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl bg-[#FF4D0A]/10 border border-[#FF4D0A]/20 flex items-center justify-center text-[#FF4D0A] shadow-xl shadow-[#FF4D0A]/5">
            <Flame className="w-10 h-10 sm:w-14 sm:h-14 animate-pulse" />
          </div>
          <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-mono font-bold bg-[#171B18] text-[#F8F5ED] rounded-full border border-[#D9D3C7] shadow-sm">
            404
          </span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#EAE4D5] border border-[#D9D3C7] text-[10px] sm:text-xs font-mono text-[#5A6258] mb-3 sm:mb-4">
            <ShieldAlert className="w-3.5 h-3.5 text-[#FF4D0A] shrink-0" />
            <span>SIGNAL LOST / PAGE NOT FOUND</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#171B18] tracking-tight mb-3 sm:mb-4 px-2">
            Out of Safe Perimeter
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#5A6258] max-w-lg mx-auto leading-relaxed mb-8 sm:mb-10 px-4">
            The telemetry path you requested does not exist or has been
            relocated within the Cosmic Fire safety architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
          <button
            onClick={() => navigate("/")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#FF4D0A] hover:bg-[#E03E00] text-[#FFFDF8] font-medium text-sm sm:text-base shadow-lg shadow-[#FF4D0A]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
            <Home className="w-4 h-4 shrink-0" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#EAE4D5] hover:bg-[#D9D3C7] text-[#171B18] font-medium text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>Go Back</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-[#D9D3C7]/60">
          <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#5A6258] uppercase tracking-wider mb-3 sm:mb-4">
            <Compass className="w-3.5 h-3.5 text-[#FF4D0A]" />
            <span>Quick Navigation</span>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-sm sm:max-w-none mx-auto text-xs font-medium text-[#171B18]">
            {quickLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="px-3 py-2 sm:py-1.5 rounded-lg bg-[#EAE4D5]/70 hover:bg-[#EAE4D5] active:bg-[#D9D3C7] transition-colors text-center cursor-pointer">
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
