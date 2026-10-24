import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PageId } from "../types";

export const usePageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = useCallback(
    (page: PageId) => {
      if (page === "home") {
        if (location.pathname === "/" && !location.hash) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      if (page === "solutions" || page === "services") {
        navigate("/services");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (page === "industries") {
        navigate("/industries");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (page === "technology") {
        if (location.pathname === "/") {
          const el = document.getElementById("technology-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            window.location.hash = "#technology-section";
          }
        } else {
          navigate("/#technology-section");
        }
        return;
      }

      if (page === "about") {
        if (location.pathname === "/") {
          const el = document.getElementById("about-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            window.location.hash = "#about-section";
          }
        } else {
          navigate("/#about-section");
        }
        return;
      }

      if (page === "contact") {
        if (location.pathname === "/") {
          const el = document.getElementById("contact-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            window.location.hash = "#contact-section";
          }
        } else {
          navigate("/#contact-section");
        }
        return;
      }

      if (page === "faq") {
        if (location.pathname === "/") {
          const el = document.getElementById("faq-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            window.location.hash = "#faq-section";
          }
        } else {
          navigate("/#faq-section");
        }
        return;
      }

      navigate(`/${page}`);
    },
    [navigate, location],
  );

  return { handleNavigate, navigate, location };
};
