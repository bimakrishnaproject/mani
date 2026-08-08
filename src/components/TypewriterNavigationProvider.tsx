"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetLabel, setTargetLabel] = useState("");
  const [typedText, setTypedText] = useState("");

  const handleScrollPosition = (targetHash?: string) => {
    const hash = targetHash || (typeof window !== "undefined" ? window.location.hash : "");

    if (hash) {
      const elementId = hash.replace("#", "");
      setTimeout(() => {
        const targetEl = document.getElementById(elementId);
        if (targetEl) {
          if (typeof window !== "undefined" && (window as any).lenis) {
            (window as any).lenis.scrollTo(targetEl, { offset: -40, duration: 1.2 });
          } else {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 350);
      return;
    }

    // Default scroll to top if no hash
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (typeof window !== "undefined" && (window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  };

  const navigateTo = (href: string, label?: string) => {
    // If hash link
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const targetPath = path === "" ? "/" : path;
      
      // If already on target page
      if (targetPath === pathname || (targetPath === "/" && pathname === "/")) {
        const targetEl = document.getElementById(hash);
        if (targetEl) {
          if (typeof window !== "undefined" && (window as any).lenis) {
            (window as any).lenis.scrollTo(targetEl, { offset: -40, duration: 1.2 });
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

    const routeLabels: Record<string, string> = {
      "/": "LOADING MANI HOME",
      "/#app": "OPENING MANI APP BETA",
      "/#community": "JOINING MANI COMMUNITY",
      "/collections": "LOADING MANI COLLECTIONS",
      "/collections/bye-bye-narcissist": "LOADING BYE BYE NARCISSIST COLLECTION",
      "/watch-learn": "OPENING WATCH & LEARN",
      "/why-mani": "LOADING WHY MANI",
      "/about": "LOADING ABOUT MANI",
      "/faq": "LOADING FAQ",
    };

    const targetText = label || routeLabels[href] || `NAVIGATING TO ${href.toUpperCase()}`;
    setTargetLabel(targetText);
    setTypedText("");
    setIsNavigating(true);

    const hashMatch = href.includes("#") ? href.substring(href.indexOf("#")) : "";

    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setTypedText(targetText.slice(0, idx));
      if (idx >= targetText.length) {
        clearInterval(interval);
        setTimeout(() => {
          router.push(href);
          // Handle scroll after route change
          if (hashMatch) {
            handleScrollPosition(hashMatch);
          }
        }, 150);
      }
    }, 18);
  };

  // Automatically dismiss transition overlay and verify scroll state on route changes
  useEffect(() => {
    handleScrollPosition();
    if (isNavigating) {
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ navigateTo, isNavigating }}>
      {children}

      {/* TYPEWRITER OVERLAY SCREEN WIPE */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-[#081F14] text-editorial-white flex flex-col items-center justify-center p-8 border-b-4 border-emerald-500 shadow-2xl"
          >
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="w-16 h-16 rounded-full border-2 border-cream-logo/40 flex items-center justify-center bg-[#0E2E1E]">
                <div className="w-6 h-6 rounded-full bg-cream-logo shadow-[0_0_20px_rgba(247,236,214,0.6)]" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/30">
                  ⚡ MANI NAVIGATION ENGINE
                </span>

                <h3 className="font-mono text-lg sm:text-2xl text-cream-logo font-bold tracking-wider min-h-[36px]">
                  {typedText}
                  <span className="inline-block w-2.5 h-6 bg-cream-logo ml-1.5 animate-pulse" />
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </NavigationContext.Provider>
  );
}
