"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Helper to check if window is small mobile
const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
};

// ─── 1. ScrollReveal (Standard Reversible Fade & Translate) ────────────
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  delay?: number;
  scale?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  distance = 30,
  duration = 0.8,
  delay = 0,
  scale,
  once = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const dist = isMobileDevice() ? Math.min(distance, 20) : distance;
    const from: gsap.TweenVars = { opacity: 0 };
    const to: gsap.TweenVars = { opacity: 1, duration, delay, ease: "power3.out" };

    if (direction === "up") { from.y = dist; to.y = 0; }
    if (direction === "down") { from.y = -dist; to.y = 0; }
    if (direction === "left") { from.x = dist; to.x = 0; }
    if (direction === "right") { from.x = -dist; to.x = 0; }
    if (scale !== undefined) { from.scale = scale; to.scale = 1; }

    gsap.set(el, from);

    to.scrollTrigger = {
      trigger: el,
      start: "top 92%",
      end: "bottom 8%",
      toggleActions: once ? "play none none none" : "play reverse play reverse",
    };

    gsap.to(el, to);

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [direction, distance, duration, delay, scale, once]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

// ─── 2. SplitSlideCombine (Responsive Left & Right Entrance) ───────────
interface SplitSlideCombineProps {
  children: ReactNode;
  className?: string;
}

export function SplitSlideCombine({
  children,
  className = "",
}: SplitSlideCombineProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const childrenArray = Array.from(el.children);
    const isMobile = isMobileDevice();

    if (childrenArray.length >= 2) {
      const leftEl = childrenArray[0];
      const rightEl = childrenArray[1];

      const xOffset = isMobile ? -30 : -80;
      gsap.set(leftEl, { opacity: 0, x: xOffset, rotateY: isMobile ? 0 : -8 });
      gsap.set(rightEl, { opacity: 0, x: -xOffset, rotateY: isMobile ? 0 : 8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(leftEl, { opacity: 1, x: 0, rotateY: 0, duration: 0.8, ease: "power3.out" }, 0)
        .to(rightEl, { opacity: 1, x: 0, rotateY: 0, duration: 0.8, ease: "power3.out" }, 0.1);
    } else if (childrenArray.length === 1) {
      gsap.set(childrenArray[0], { opacity: 0, y: 30 });
      gsap.to(childrenArray[0], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={{ perspective: "1200px" }}>
      {children}
    </div>
  );
}

// ─── 3. DiagonalSlideIn (Responsive Diagonal Entrance) ─────────────────
interface DiagonalSlideInProps {
  children: ReactNode;
  className?: string;
  from?: "bottom-right" | "top-left" | "bottom-left" | "top-right";
  distance?: number;
  delay?: number;
}

export function DiagonalSlideIn({
  children,
  className = "",
  from = "bottom-right",
  distance = 50,
  delay = 0,
}: DiagonalSlideInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const dist = isMobileDevice() ? Math.min(distance, 25) : distance;
    const fromVars: gsap.TweenVars = { opacity: 0, scale: 0.94, rotate: isMobileDevice() ? 0 : 2 };

    if (from === "bottom-right") { fromVars.x = dist; fromVars.y = dist; }
    if (from === "top-left") { fromVars.x = -dist; fromVars.y = -dist; }
    if (from === "bottom-left") { fromVars.x = -dist; fromVars.y = dist; }
    if (from === "top-right") { fromVars.x = dist; fromVars.y = -dist; }

    gsap.set(el, fromVars);

    gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      duration: 0.85,
      delay,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [from, distance, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ─── 4. PerspectiveFlipIn (Responsive 3D Flip & Unfold) ───────────────
interface PerspectiveFlipInProps {
  children: ReactNode;
  className?: string;
  angle?: number;
  stagger?: number;
}

export function PerspectiveFlipIn({
  children,
  className = "",
  angle = -25,
  stagger = 0.1,
}: PerspectiveFlipInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const items = el.children.length > 0 ? Array.from(el.children) : [el];
    const isMobile = isMobileDevice();

    gsap.set(items, {
      opacity: 0,
      rotateY: isMobile ? 0 : angle,
      rotateX: isMobile ? 0 : 10,
      y: isMobile ? 25 : 0,
      scale: 0.94,
    });

    gsap.to(items, {
      opacity: 1,
      rotateY: 0,
      rotateX: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: isMobile ? 0.06 : stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [angle, stagger]);

  return (
    <div ref={ref} className={className} style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

// ─── 5. CurtainClipExpand (Responsive Center-Out Mask Reveal) ──────────
interface CurtainClipExpandProps {
  children: ReactNode;
  className?: string;
}

export function CurtainClipExpand({
  children,
  className = "",
}: CurtainClipExpandProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.set(el, { clipPath: "inset(0% 35% 0% 35%)", opacity: 0, scale: 0.97 });

    gsap.to(el, {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      scale: 1,
      duration: 0.95,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        end: "bottom 12%",
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ─── 6. CascadingZoomStagger (Responsive Grid Reveal) ─────────────────
interface CascadingZoomStaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function CascadingZoomStagger({
  children,
  className = "",
  stagger = 0.08,
}: CascadingZoomStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const items = Array.from(el.children);
    const isMobile = isMobileDevice();

    items.forEach((item, index) => {
      const directionX = isMobile ? 0 : index % 2 === 0 ? -30 : 30;
      gsap.set(item, { opacity: 0, x: directionX, y: 25, scale: 0.95 });
    });

    gsap.to(items, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.75,
      stagger: isMobile ? 0.05 : stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ─── 7. KineticTextReveal ──────────────────────────────────────────────
interface KineticTextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export function KineticTextReveal({
  text,
  className = "",
  tag: Tag = "h2",
}: KineticTextRevealProps) {
  return (
    <ScrollReveal direction="up" distance={30} duration={0.8} once={false}>
      <Tag className={className}>{text}</Tag>
    </ScrollReveal>
  );
}

export const TextSplitReveal = KineticTextReveal;
export const ParallaxElement = ScrollReveal;
export const ClipReveal = CurtainClipExpand;
export const StaggeredGrid = CascadingZoomStagger;

// ─── 8. CountUpOnScroll ───────────────────────────────────────────────
interface CountUpOnScrollProps {
  end: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
  decimals?: number;
}

export function CountUpOnScroll({
  end,
  prefix = "",
  suffix = "",
  className = "",
  duration = 1.5,
  decimals = 0,
}: CountUpOnScrollProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.textContent = `${prefix}${end.toFixed(decimals)}${suffix}`;
      return;
    }

    const counter = { val: 0 };

    gsap.to(counter, {
      val: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
      onUpdate: () => {
        el.textContent = `${prefix}${counter.val.toFixed(decimals)}${suffix}`;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [end, prefix, suffix, duration, decimals]);

  return <span ref={ref} className={className}>0</span>;
}

// ─── 9. PinnedScrollSequence (Responsive Pinned Scroll Auto-Switch) ───
interface PinnedScrollSequenceProps {
  items: { label?: string; text: string; subtext?: string }[];
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export function PinnedScrollSequence({
  items,
  className = "",
  bgColor = "bg-[#0E2E1E]",
  textColor = "text-cream-logo",
}: PinnedScrollSequenceProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const trigger = triggerRef.current;
    const container = containerRef.current;
    if (!trigger || !container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const totalItems = items.length;

    const st = ScrollTrigger.create({
      trigger: trigger,
      start: "top top",
      end: `+=${totalItems * 75}%`,
      pin: container,
      pinSpacing: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.min(
          Math.floor(progress * totalItems),
          totalItems - 1
        );
        setActiveIndex(newIndex);
      },
    });

    return () => {
      st.kill();
    };
  }, [items.length]);

  const currentItem = items[activeIndex];

  return (
    <div ref={triggerRef} className={`w-full relative ${className}`}>
      <div
        ref={containerRef}
        className={`${bgColor} ${textColor} min-h-[90vh] sm:min-h-screen w-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[500px] bg-radial from-soft-signal-green/20 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

        <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-10">
          
          {/* Step Pills showing progress */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-500 ${
                  activeIndex === idx
                    ? "bg-cream-logo text-[#0E2E1E] shadow-xl scale-105"
                    : "bg-editorial-white/10 text-cream-logo/50 border border-editorial-white/15"
                }`}
              >
                0{idx + 1} {item.label ? `• ${item.label}` : ""}
              </div>
            ))}
          </div>

          {/* Focused Statement Display */}
          <div className="w-full relative min-h-[200px] sm:min-h-[240px] flex items-center justify-center py-2 sm:py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 sm:space-y-6 max-w-3xl mx-auto"
              >
                {currentItem.label && (
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-cream-logo/70 bg-editorial-white/10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full inline-block">
                    {currentItem.label}
                  </span>
                )}

                <h2 className="font-serif-heading text-3xl sm:text-6xl md:text-7xl text-cream-logo leading-[1.08] tracking-tight">
                  {currentItem.text}
                </h2>

                {currentItem.subtext && (
                  <p className="text-sm sm:text-lg md:text-xl font-light text-[#C3CDC6] leading-relaxed max-w-2xl mx-auto">
                    {currentItem.subtext}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scroll Progress Bar */}
          <div className="w-full max-w-xs pt-3 sm:pt-4 border-t border-editorial-white/15 flex flex-col items-center space-y-2 sm:space-y-3">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-cream-logo/60 animate-pulse">
              SCROLL DOWN TO ADVANCE ({activeIndex + 1} / {items.length})
            </span>
            <div className="w-full bg-editorial-white/10 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-cream-logo h-full transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export const EditorialBanner = PinnedScrollSequence;
export const ElegantSequentialBanner = PinnedScrollSequence;
export const PinnedTextSequence = PinnedScrollSequence;

// ─── 10. HorizontalScrollTrack (Responsive Pinned Horizontal Cinema) ──
interface HorizontalScrollTrackProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScrollTrack({
  children,
  className = "",
}: HorizontalScrollTrackProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const track = trackRef.current;
    if (!trigger || !track) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const getScrollDistance = () => track.scrollWidth - window.innerWidth + (isMobileDevice() ? 40 : 120);

    const st = gsap.to(track, {
      x: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: () => `+=${getScrollDistance() * (isMobileDevice() ? 1.0 : 1.2)}`,
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="w-full min-h-[85vh] sm:min-h-screen relative overflow-hidden flex items-center">
      <div ref={trackRef} className={`flex flex-nowrap items-stretch gap-4 sm:gap-8 px-4 sm:px-12 md:px-16 py-8 sm:py-12 ${className}`}>
        {children}
      </div>
    </div>
  );
}

// ─── MagneticElement ────────────────────────────────────────────────────
interface MagneticElementProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticElement({
  children,
  className = "",
  strength = 0.2,
}: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || isMobileDevice()) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(el, {
        x: deltaX,
        y: deltaY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1.2, 0.5)",
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ─── ProgressiveBlur ────────────────────────────────────────────────────
interface ProgressiveBlurProps {
  children: ReactNode;
  className?: string;
  maxBlur?: number;
}

export function ProgressiveBlur({
  children,
  className = "",
}: ProgressiveBlurProps) {
  return <div className={className}>{children}</div>;
}
