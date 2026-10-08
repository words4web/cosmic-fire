import { Suspense, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import routes from "~react-pages";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { usePageNavigation } from "./hooks/usePageNavigation";
import { PageId } from "./types";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const scrollTimer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
      return () => clearTimeout(scrollTimer);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  const { handleNavigate } = usePageNavigation();

  const currentPage: PageId =
    location.pathname === "/"
      ? "home"
      : (location.pathname.replace("/", "") as PageId);

  const pageElement = useRoutes(routes);

  return (
    <div className="min-h-screen bg-surface-bg text-text-primary flex flex-col selection:bg-brand-primary selection:text-surface-card">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen bg-surface-bg" />}>
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

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
