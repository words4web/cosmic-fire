import { Suspense, useState, useEffect } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import routes from "~react-pages";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HotspotModal } from "./components/HotspotModal";
import { HotspotItem, PageId } from "./types";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotItem | null>(
    null,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const currentPage: PageId =
    location.pathname === "/"
      ? "home"
      : (location.pathname.replace("/", "") as PageId);

  const handleNavigate = (page: PageId) => {
    navigate(page === "home" ? "/" : `/${page}`);
  };

  const pageElement = useRoutes(routes);

  return (
    <div className="min-h-screen bg-[#F8F5ED] text-[#171B18] flex flex-col selection:bg-[#FF4D0A] selection:text-[#FFFDF8]">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen bg-[#F8F5ED]" />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: location.pathname === "/" ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: location.pathname === "/" ? 0 : -15 }}
              transition={{ duration: 0.25 }}
              className={location.pathname === "/" ? "" : "pt-24"}>
              {pageElement}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      <HotspotModal
        hotspot={selectedHotspot}
        onClose={() => setSelectedHotspot(null)}
        onNavigate={handleNavigate}
      />

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
