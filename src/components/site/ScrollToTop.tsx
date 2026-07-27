import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Jump to top instantly on route change so city pages feel like distinct destinations. */
export function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
