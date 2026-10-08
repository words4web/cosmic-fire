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

      navigate(`/${page}`);
    },
    [navigate, location],
  );

  return { handleNavigate, navigate, location };
};
