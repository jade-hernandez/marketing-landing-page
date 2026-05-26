import { useEffect, useState } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

function getBreakpoint(width: number): Breakpoint {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

function useMediaQuery(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint(window.innerWidth));

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    function handleChange() {
      setBreakpoint(getBreakpoint(window.innerWidth));
    }

    mobileQuery.addEventListener("change", handleChange);
    tabletQuery.addEventListener("change", handleChange);
    desktopQuery.addEventListener("change", handleChange);

    return () => {
      mobileQuery.removeEventListener("change", handleChange);
      tabletQuery.removeEventListener("change", handleChange);
      desktopQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return breakpoint;
}

export { useMediaQuery };
