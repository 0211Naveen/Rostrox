import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // instant வேண்டும்னா "auto" use பண்ணலாம்
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;