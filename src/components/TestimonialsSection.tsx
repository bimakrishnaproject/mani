"use client";

import React from "react";

const quotes = [
  "The Bye Bye Narcissist book validated my exhaustion and helped me realize my body was trying to protect me from a threat that stayed for too long.",
  "This is the first book I've found that actually makes emotional intelligence feel doable.",
  "The app felt private, personal, and supportive",
];

const stats = [
  {
    value: "90%",
    percentage: 90,
    label: "positive response to our resource library",
  },
  {
    value: "88%",
    percentage: 88,
    label: "positive response to guided exercises",
  },
  {
    value: "84%",
    percentage: 84,
    label: (
      <>
        viewed <strong className="font-bold lowercase">mani</strong> as a supplement to therapy, not a replacement
      </>
    ),
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="real-feedback"
      className="relative bg-[#FBF9F5] text-ink-black py-20 sm:py-24 lg:py-28 border-b border-mist-grey/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0E2E1E]" />
            <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase">
              REAL FEEDBACK
            </span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E2E1E] tracking-tight">
            What People Are Saying
          </h2>
        </div>

        {/* Tier 1: The 3 Reader Reflections in Balanced Editorial Triptych */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {quotes.map((quote, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl lg:rounded-3xl p-8 sm:p-9 lg:p-10 border border-[#0E2E1E]/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(14,46,30,0.08)] hover:border-[#0E2E1E]/25 transition-all duration-300 flex flex-col justify-start group"
            >
              <div className="space-y-4">
                <span className="block text-4xl lg:text-5xl font-serif text-[#0E2E1E]/20 group-hover:text-[#0E2E1E]/40 transition-colors select-none leading-none">
                  “
                </span>
                <p className="font-serif-italic text-lg lg:text-xl text-[#0B1710] leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tier 2: Early User Feedback Banner */}
        <div className="bg-[#081F14] text-[#FDF0D5] rounded-2xl lg:rounded-3xl p-8 sm:p-10 lg:p-14 border border-cream-logo/20 shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Decorative Glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-cream-logo/[0.04] rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-8 lg:space-y-10">
            <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl text-cream-logo tracking-tight">
              Based on feedback from early users:
            </h3>

            {/* 3 Metric Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-6 lg:pt-8 border-t border-cream-logo/15">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-3">
                  <span className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-logo block tracking-tight leading-none">
                    {stat.value}
                  </span>

                  {/* Hairline Meter */}
                  <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cream-logo rounded-full shadow-[0_0_8px_rgba(253,240,213,0.3)]"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>

                  <p className="text-sm lg:text-base font-normal text-cream-logo/90 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
