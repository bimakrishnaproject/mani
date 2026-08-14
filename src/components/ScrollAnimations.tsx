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

// ─── 1. ScrollReveal (Calm, Soft Fade & Translate) ─────────────────────
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
  distance = 20,
  duration = 0.7,
  delay = 0,
  scale,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const dist = isMobileDevice() ? Math.min(distance, 15) : distance;
    const from: gsap.TweenVars = { opacity: 0 };
    const to: gsap.TweenVars = { opacity: 1, duration, delay, ease: "power2.out" };

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
      toggleActions: once ? "play none none none" : "play none none none",
    };

    gsap.to(el, to);

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [direction, distance, duration, delay, scale, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ─── 2. SplitSlideCombine (Smooth Calm Reveal) ──────────────────────────
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

    const items = Array.from(el.children);
    gsap.set(items, { opacity: 0, y: 20 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
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

// ─── 3. DiagonalSlideIn (Calm Soft Fade-In) ─────────────────────────────
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
  delay = 0,
}: DiagonalSlideInProps) {
  return (
    <ScrollReveal direction="up" distance={15} duration={0.6} delay={delay} className={className}>
      {children}
    </ScrollReveal>
  );
}

// ─── 4. PerspectiveFlipIn (Calm Stagger Reveal) ─────────────────────────
interface PerspectiveFlipInProps {
  children: ReactNode;
  className?: string;
  angle?: number;
  stagger?: number;
}

export function PerspectiveFlipIn({
  children,
  className = "",
  stagger = 0.08,
}: PerspectiveFlipInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const items = el.children.length > 0 ? Array.from(el.children) : [el];
    gsap.set(items, { opacity: 0, y: 20 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
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

// ─── 5. CurtainClipExpand (Smooth Subtle Reveal) ─────────────────────────
interface CurtainClipExpandProps {
  children: ReactNode;
  className?: string;
}

export function CurtainClipExpand({
  children,
  className = "",
}: CurtainClipExpandProps) {
  return (
    <ScrollReveal direction="up" distance={20} duration={0.7} className={className}>
      {children}
    </ScrollReveal>
  );
}

// ─── 6. CascadingZoomStagger (Calm Stagger Reveal) ──────────────────────
interface CascadingZoomStaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function CascadingZoomStagger({
  children,
  className = "",
  stagger = 0.06,
}: CascadingZoomStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const items = Array.from(el.children);
    gsap.set(items, { opacity: 0, y: 20 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
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
    <ScrollReveal direction="up" distance={15} duration={0.7} once={true}>
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
  duration = 1.2,
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
        toggleActions: "play none none none",
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

// ─── 9. PinnedScrollSequence (Natural, Calm Vertical Progression) ──────
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
  return (
    <section className={`py-20 sm:py-28 px-6 sm:px-12 md:px-16 ${bgColor} ${textColor} ${className}`}>
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#081F14] border border-editorial-white/15 rounded-2xl space-y-3 shadow-md"
            >
              {item.label && (
                <span className="text-[10px] font-bold tracking-widest uppercase text-cream-logo block">
                  {item.label}
                </span>
              )}
              <h3 className="font-serif-heading text-2xl text-cream-logo leading-snug">
                {item.text}
              </h3>
              {item.subtext && (
                <p className="text-sm text-[#E8F0EC] font-normal leading-relaxed">
                  {item.subtext}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const EditorialBanner = PinnedScrollSequence;
export const ElegantSequentialBanner = PinnedScrollSequence;
export const PinnedTextSequence = PinnedScrollSequence;

// ─── 10. HorizontalScrollTrack (Natural Flex Grid) ─────────────────────
interface HorizontalScrollTrackProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScrollTrack({
  children,
  className = "",
}: HorizontalScrollTrackProps) {
  return (
    <div className={`w-full overflow-x-auto py-6 flex items-stretch gap-6 ${className}`}>
      {children}
    </div>
  );
}

// ─── MagneticElement (Simple, Clean Component Wrapper) ─────────────────
interface MagneticElementProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticElement({
  children,
  className = "",
}: MagneticElementProps) {
  return <div className={className}>{children}</div>;
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
