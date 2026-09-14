"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const differentiators = [
  {
    number: "01",
    title: "Built From Decades Of Experience",
    description:
      "Created with insights drawn from decades of experience helping people navigate relationships, emotions, and personal growth.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Grounded In Research",
    description:
      "Our tools and resources draw from behavioral science, emotional intelligence, cognitive behavioral therapy, and neuroscience.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31M14 2v7.31" />
        <path d="M8.5 2h7" />
        <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
        <circle cx="9" cy="17" r="1" fill="currentColor" />
        <circle cx="15" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Designed For Real Life",
    description:
      "Complex topics explained in ways that are practical, approachable, and easy to apply.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Created To Support Understanding",
    description:
      "Lasting change begins with understanding what you're experiencing and why.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
      </svg>
    ),
  },
];

export default function DifferentiatorsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number>(1600);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);

  const currentFocused = hoveredSlide !== null ? hoveredSlide : activeSlide;

  // Dynamically calculate horizontal overflow travel distance on resize
  useEffect(() => {
    const calculateDistance = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const dist = Math.max(0, trackWidth - windowWidth + 120);
        setScrollDistance(dist);
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth horizontal slide driven by vertical page scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  // Update active slide indicator as user scrolls
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveSlide(0);
    } else if (latest < 0.52) {
      setActiveSlide(1);
    } else if (latest < 0.78) {
      setActiveSlide(2);
    } else {
      setActiveSlide(3);
    }
  });

  // Programmatic smooth scroll to target slide
  const scrollToSlide = (targetIndex: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const progress = Math.max(0, Math.min(1, targetIndex / 3));

    window.scrollTo({
      top: sectionTop + progress * totalScrollable,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="differentiators"
      ref={containerRef}
      className="relative bg-[#FBF9F5] text-ink-black w-full border-t border-b border-mist-grey/70 select-none"
    >
      {/* ========================================================================= */}
      {/* DESKTOP VIEW: Pinned Horizontal Scrollytelling Track                      */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative h-[260vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-28 lg:pt-32 xl:pt-36 pb-8 xl:pb-10 select-none">
          
          {/* Top Bar: Section Title & Interactive Controls */}
          <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex items-end justify-between gap-8 z-20">
            <div className="max-w-2xl space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0E2E1E] animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase">
                  WHAT MAKES US DIFFERENT
                </span>
              </div>
              <h2 className="font-serif-heading text-4xl xl:text-5xl 2xl:text-6xl text-[#0E2E1E] leading-[1.05] tracking-tight">
                Simple Doesn&apos;t Mean Simplistic
              </h2>
              <p className="text-xs sm:text-sm text-[#0B1710] font-normal leading-relaxed pt-1">
                Everything we create is informed by decades of experience, research, and practical insight to help people better understand themselves and the challenges they face.
              </p>
            </div>
          </div>

          {/* Center Stage: Horizontal Motion Track */}
          <div
            onMouseLeave={() => setHoveredSlide(null)}
            className="w-full relative my-auto py-2 overflow-visible"
          >
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex items-stretch gap-8 xl:gap-10 2xl:gap-12 pl-8 md:pl-12 lg:px-16 xl:pl-20 2xl:pl-24 w-max"
            >
              {differentiators.map((item, idx) => {
                const isFocused = currentFocused === idx;

                return (
                  <motion.div
                    key={idx}
                    onMouseEnter={() => setHoveredSlide(idx)}
                    onClick={() => scrollToSlide(idx)}
                    animate={{
                      backgroundColor: isFocused ? "#081F14" : "#FFFFFF",
                      color: isFocused ? "#FDF0D5" : "#0B1710",
                      scale: isFocused ? 1.02 : 0.98,
                      opacity: isFocused ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-[540px] xl:w-[600px] 2xl:w-[640px] h-[380px] sm:h-[400px] xl:h-[430px] 2xl:h-[450px] rounded-3xl p-8 xl:p-10 2xl:p-11 border flex flex-col justify-between relative overflow-hidden cursor-pointer transition-shadow duration-300 ${
                      isFocused
                        ? "border-cream-logo/30 shadow-[0_30px_70px_rgba(8,31,20,0.35)]"
                        : "border-mist-grey/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:border-[#0E2E1E]/30"
                    }`}
                  >
                    {/* Big Decorative Number Watermark */}
                    <span
                      className={`absolute -bottom-6 -right-2 text-[160px] xl:text-[200px] font-mono font-bold leading-none pointer-events-none select-none transition-colors duration-300 ${
                        isFocused ? "text-cream-logo/[0.06]" : "text-[#0E2E1E]/[0.04]"
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Card Header */}
                    <div className="space-y-6 relative z-10">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border transition-colors duration-300 ${
                            isFocused
                              ? "bg-editorial-white/10 text-cream-logo border-cream-logo/25"
                              : "bg-[#0E2E1E]/5 text-[#0E2E1E] border-[#0E2E1E]/15"
                          }`}
                        >
                          {item.number}
                        </span>

                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            isFocused
                              ? "bg-cream-logo/15 text-cream-logo"
                              : "bg-[#0E2E1E]/5 text-[#0E2E1E]"
                          }`}
                        >
                          {item.icon}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3
                          className={`font-serif-heading text-2xl xl:text-3xl 2xl:text-4xl font-normal leading-tight tracking-tight transition-colors duration-300 ${
                            isFocused ? "text-cream-logo" : "text-[#0E2E1E]"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`text-base xl:text-lg leading-relaxed transition-colors duration-300 ${
                            isFocused ? "text-[#FDF0D5]/90" : "text-[#0B1710]/85"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom Bar: Slide Indicator Dots */}
          <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-center text-xs font-semibold text-[#0E2E1E]/60 z-20">
            <div className="flex items-center gap-2">
              {differentiators.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => scrollToSlide(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === dotIdx ? "w-8 bg-[#0E2E1E]" : "w-2 bg-mist-grey/90 hover:bg-[#0E2E1E]/40"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET VIEW (< lg): Responsive Vertical Stack                     */}
      {/* ========================================================================= */}
      <div className="lg:hidden py-16 sm:py-20 px-4 sm:px-8 space-y-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0E2E1E] animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-[#0E2E1E] uppercase">
              WHAT MAKES US DIFFERENT
            </span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#0E2E1E] leading-tight">
            Simple Doesn&apos;t Mean Simplistic
          </h2>
          <p className="text-sm text-[#0B1710] leading-relaxed">
            Everything we create is informed by decades of experience, research, and practical insight to help people better understand themselves and the challenges they face.
          </p>
        </div>

        <div className="space-y-6">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 sm:p-8 border space-y-5 ${
                idx === 0
                  ? "bg-[#081F14] text-[#FDF0D5] border-cream-logo/25 shadow-md"
                  : "bg-white text-[#0B1710] border-mist-grey/80 shadow-xs"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${
                    idx === 0
                      ? "bg-white/10 text-cream-logo border-white/20"
                      : "bg-[#0E2E1E]/5 text-[#0E2E1E] border-[#0E2E1E]/15"
                  }`}
                >
                  {item.number}
                </span>

                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    idx === 0 ? "bg-cream-logo/15 text-cream-logo" : "bg-[#0E2E1E]/5 text-[#0E2E1E]"
                  }`}
                >
                  {item.icon}
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  className={`font-serif-heading text-2xl font-normal leading-snug ${
                    idx === 0 ? "text-cream-logo" : "text-[#0E2E1E]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    idx === 0 ? "text-cream-logo/90" : "text-[#0B1710]"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
