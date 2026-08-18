"use client";

import React, { createContext, useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavigationContextType {
  navigateTo: (href: string, label?: string) => void;
  isNavigating: boolean;
}

const NavigationContext = createContext<NavigationContextType>({
  navigateTo: () => {},
  isNavigating: false,
});

export const useTypewriterNavigation = () => useContext(NavigationContext);

export default function TypewriterNavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollPosition = (targetHash?: string) => {
    const hash = targetHash || (typeof window !== "undefined" ? window.location.hash : "");

    if (hash) {
      const elementId = hash.replace("#", "");
      setTimeout(() => {
        const targetEl = document.getElementById(elementId);
        if (targetEl) {
          if (typeof window !== "undefined" && (window as any).lenis) {
            (window as any).lenis.scrollTo(targetEl, { offset: -40, duration: 1.0 });
          } else {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
      return;
    }

    // Default scroll to top if no hash
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (typeof window !== "undefined" && (window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  };

  const navigateTo = (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const targetPath = path === "" ? "/" : path;

      if (targetPath === pathname || (targetPath === "/" && pathname === "/")) {
        const targetEl = document.getElementById(hash);
        if (targetEl) {
          if (typeof window !== "undefined" && (window as any).lenis) {
            (window as any).lenis.scrollTo(targetEl, { offset: -40, duration: 1.0 });
          } else {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
          return;
        }
      }
    }

    if (href === pathname && !href.includes("#")) {
      handleScrollPosition();
      return;
    }

    router.push(href);
  };

  useEffect(() => {
    handleScrollPosition();
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ navigateTo, isNavigating: false }}>
      {children}
    </NavigationContext.Provider>
  );
}

