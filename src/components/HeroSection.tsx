import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Clock,
  Building2,
  Users2,
  BadgeCheck,
} from "lucide-react";
import { HotspotItem, PageId } from "../types";
import { HERO_DATA } from "../data/hero";
import { COMPANY_CONTACT } from "../data/company";

interface HeroSectionProps {
  onSelectHotspot?: (hotspot: HotspotItem) => void;
  selectedHotspot?: HotspotItem | null;
  onNavigate: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Realistic dangerous fire particle physics
    type Ember = {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      life: number;
      maxLife: number;
      heat: number;
      flickerOffset: number;
    };

    const particleCount = 75; // Clean, natural ember density (not overcrowded)
    const createEmber = (initialSpawn = false): Ember => {
      const maxLife = Math.random() * 120 + 80;
      return {
        x: Math.random() * width,
        y: initialSpawn ? Math.random() * height : height + Math.random() * 20,
        size: Math.random() * 2.2 + 0.8,
        speedY: Math.random() * 1.8 + 0.8,
        speedX: (Math.random() - 0.5) * 0.6,
        life: initialSpawn ? Math.random() * maxLife : 0,
        maxLife,
        heat: Math.random(),
        flickerOffset: Math.random() * 100,
      };
    };

    const particles: Ember[] = Array.from({ length: particleCount }, () =>
      createEmber(true),
    );

    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseActive = true;
    };

    const handleMouseLeave = () => {
      mouseActive = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";

      // Subtle, natural bottom furnace warmth
      const baseGlow = ctx.createLinearGradient(0, height, 0, height - 180);
      baseGlow.addColorStop(0, "rgba(235, 68, 12, 0.14)");
      baseGlow.addColorStop(0.6, "rgba(240, 100, 20, 0.04)");
      baseGlow.addColorStop(1, "transparent");
      ctx.fillStyle = baseGlow;
      ctx.fillRect(0, height - 180, width, 180);

      // Render realistic fire embers
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;

        // Natural air convection draft
        const sway = Math.sin(time * 2 + p.flickerOffset) * 0.4;
        p.x += p.speedX + sway;
        p.y -= p.speedY;

        if (mouseActive) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100 && dist > 0) {
            const force = (100 - dist) / 100;
            p.x += (dx / dist) * force * 1.5;
            p.y -= force * 1.2;
          }
        }

        const progress = p.life / p.maxLife;

        if (progress >= 1 || p.y < -10 || p.x < -20 || p.x > width + 20) {
          particles[i] = createEmber(false);
          continue;
        }

        // Realistic ember flicker
        const flicker = 0.8 + Math.sin(time * 8 + p.flickerOffset) * 0.2;
        const alpha = Math.sin(progress * Math.PI) * flicker * 0.85;

        // Realistic ember colors (charcoal burn: amber core with warm flame glow)
        const glowColor =
          p.heat > 0.6 ? "rgba(255, 110, 20, 0.65)" : "rgba(230, 60, 10, 0.55)";
        const coreColor = p.heat > 0.7 ? "#FFF5EA" : "#FFC066";

        const size = p.size;

        // Soft heat aura
        const radGrad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          size * 3.5,
        );
        radGrad.addColorStop(0, glowColor);
        radGrad.addColorStop(1, "transparent");

        ctx.fillStyle = radGrad;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Sharp ember spark core
        ctx.fillStyle = coreColor;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 0.65, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0C0F12] border-b border-white/10">
      <div className="relative w-full min-h-[560px] sm:min-h-[620px] md:min-h-[700px] flex items-center justify-center pt-32 sm:pt-36 md:pt-44 pb-16 sm:pb-20 md:pb-24">
        {/* Dark Cinematic Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0C0F12]">
          {/* Subtle industrial architectural texture */}
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?q=80&w=2400&auto=format&fit=crop"
            alt="Commercial corporate building architectural development"
            className="w-full h-full object-cover object-center opacity-15 filter grayscale contrast-125"
            loading="eager"
            fetchPriority="high"
          />

          {/* Clean dark gradient overlays - No grids, no disco multi-colors */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F12] via-[#0C0F12]/80 to-[#0C0F12]/90 pointer-events-none" />

          {/* Dynamic rising ember particles canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-1"
          />

          {/* Single subtle warm bottom blaze aura */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-radial from-[#FC7A21]/12 via-[#E6440C]/6 to-transparent blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 max-w-6xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-[#FE8A2A] text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FC7A21] animate-pulse" />
            <span>{HERO_DATA.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-white mb-6 max-w-4xl">
            {HERO_DATA.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/70 font-medium leading-relaxed mb-8 sm:mb-10 max-w-2xl text-center">
            {HERO_DATA.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto mb-10 sm:mb-12">
            <button
              onClick={() => onNavigate("solutions")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FC7A21] hover:bg-[#FE8A2A] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#FC7A21]/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <span>{HERO_DATA.ctas.explore}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer">
              <Phone className="w-4 h-4 text-[#FE8A2A]" />
              <span>{HERO_DATA.ctas.talk}</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl">
            {HERO_DATA.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/90 shadow-xs backdrop-blur-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FE8A2A] shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-[#FFFDF8] border-y border-[#E7DED0] py-5 sm:py-6 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {HERO_DATA.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8F5ED] border border-[#E7DED0]">
                <div className="w-9 h-9 rounded-lg bg-[#0489F8]/10 flex items-center justify-center shrink-0 border border-[#0489F8]/20">
                  <ShieldCheck className="w-5 h-5 text-[#044FB7]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#171B18] leading-tight">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
