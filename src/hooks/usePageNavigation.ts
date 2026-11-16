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

      if (page === "services" || page === "solutions") {
        if (location.pathname === "/") {
          const el = document.getElementById("contact-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          navigate("/#contact-section");
        }
        return;
      }

      if (page === "about") {
        navigate("/about");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (page === "contact") {
        if (location.pathname === "/") {
          const el = document.getElementById("hero-query-form");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else {
          navigate("/#hero-query-form");
        }
        return;
      }

      if (page === "faq") {
        navigate("/faq");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      navigate(`/${page}`);
    },
    [navigate, location],
  );

  return { handleNavigate, navigate, location };
};
