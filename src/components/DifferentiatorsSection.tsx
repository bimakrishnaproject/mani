"use client";

import React from "react";
import MaskedReveal from "@/components/MaskedReveal";

const differentiators = [
  {
    number: "01",
    title: "Built From Decades Of Experience",
    description:
      "Created with insights drawn from decades of experience helping people navigate relationships, emotions, and personal growth.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  return (
    <section
      id="differentiators"
      className="relative bg-[#FBF9F5] text-ink-black py-20 sm:py-24 lg:py-28 w-full select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#0E2E1E]" />
            <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase">
              WHAT MAKES US DIFFERENT
            </span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E2E1E] leading-[1.12] tracking-tight">
            Simple Doesn&apos;t Mean Simplistic
          </h2>

          <p className="text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed pt-1">
            Everything we create is informed by decades of experience, research, and practical insight to help people better understand themselves and the challenges they face.
          </p>
        </div>

        {/* 4 Cards Grid - 100% Vertical Responsive Flow (No Horizontal Scroll) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl lg:rounded-3xl p-7 sm:p-8 lg:p-9 border border-[#0E2E1E]/12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(14,46,30,0.08)] hover:border-[#0E2E1E]/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle Decorative Number Watermark in Background */}
              <span
                className="absolute -bottom-6 -right-2 text-[120px] lg:text-[140px] font-serif-heading font-medium leading-none pointer-events-none select-none text-[#0E2E1E]/[0.03] group-hover:text-[#0E2E1E]/[0.06] transition-colors duration-500"
                aria-hidden="true"
              >
                {item.number}
              </span>

              <div className="space-y-6 relative z-10">
                {/* Card Top: Number pill & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-[#0E2E1E]/5 text-[#0E2E1E] border border-[#0E2E1E]/15">
                    {item.number}
                  </span>

                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0E2E1E]/5 text-[#0E2E1E] group-hover:bg-[#0E2E1E] group-hover:text-cream-logo transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Card Body: Title & Description */}
                <div className="space-y-3">
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-medium text-[#0E2E1E] leading-snug tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#0B1710]/85 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
