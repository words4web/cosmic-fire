import { Suspense, useState, useEffect } from "react";
import { useRoutes, useLocation, useNavigate, Outlet } from "react-router-dom";
import routes from "~react-pages";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HotspotModal } from "./components/HotspotModal";
import { HotspotItem, PageId } from "./types";

function AppShell() {
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
          <Outlet
            context={{
              onNavigate: handleNavigate,
              onSelectHotspot: setSelectedHotspot,
              selectedHotspot,
            }}
          />
          {pageElement}
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

export default function App() {
  return <AppShell />;
}
