"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "action">("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Buttery-smooth spring physics for the trailing ring (Eva Sanchez / 14islands style)
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (never on touch screens)
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check what element is currently under the cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setCursorVariant("action");
        return;
      }

      const interactiveTarget = target.closest("a, button, input, textarea, [role='button']") as HTMLElement | null;
      if (interactiveTarget) {
        setCursorText("");
        setCursorVariant("hover");
        return;
      }

      setCursorText("");
      setCursorVariant("default");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Core Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "action" ? 0 : cursorVariant === "hover" ? 0.6 : 1,
          opacity: cursorVariant === "action" ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="fixed w-2 h-2 rounded-full bg-[#0E2E1E] pointer-events-none"
      />

      {/* Trailing Responsive Ring / Badge */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorVariant === "action" ? 84 : cursorVariant === "hover" ? 44 : 28,
          height: cursorVariant === "action" ? 84 : cursorVariant === "hover" ? 44 : 28,
          backgroundColor:
            cursorVariant === "action"
              ? "rgba(14, 46, 30, 0.92)"
              : cursorVariant === "hover"
              ? "rgba(14, 46, 30, 0.15)"
              : "rgba(14, 46, 30, 0.0)",
          borderColor:
            cursorVariant === "action"
              ? "rgba(253, 240, 213, 0.4)"
              : cursorVariant === "hover"
              ? "rgba(14, 46, 30, 0.5)"
              : "rgba(14, 46, 30, 0.35)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="fixed rounded-full border flex items-center justify-center backdrop-blur-[1px] pointer-events-none shadow-sm"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[10px] font-mono font-bold tracking-widest text-[#FDF0D5] uppercase text-center px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
