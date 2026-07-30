"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ScrollReveal,
  KineticTextReveal,
  SplitSlideCombine,
  DiagonalSlideIn,
  PerspectiveFlipIn,
  CurtainClipExpand,
  CascadingZoomStagger,
  PinnedScrollSequence,
  MagneticElement,
} from "@/components/ScrollAnimations";

export default function WhyManiPage() {
  const corePillars = [
    {
      num: "01",
      title: "Built From Decades of Experience",
      subtitle: "Created by Practitioners & Experts",
      description:
        "MANI was developed by Manasa Reddy and Lolly Daskal—bringing together experience in human behaviour, leadership coaching, and emotional intelligence to create tools that actually work.",
    },
    {
      num: "02",
      title: "Grounded in Research",
      subtitle: "Beyond Inspirational Quotes & Generic Advice",
      description:
        "Every tool in the MANI ecosystem—from physical workbooks to guided support—is grounded in established approaches to emotional well-being and behavioural understanding.",
    },
    {
      num: "03",
      title: "Designed for Real Life",
      subtitle: "Education Without Action Changes Nothing",
      description:
        "Reading creates understanding, but workbooks create action, journals create calm, and cards build daily habit. We build connected systems, not single standalone resources.",
    },
    {
      num: "04",
      title: "Created to Support Understanding",
      subtitle: "Simple Does Not Mean Simplistic",
      description:
        "We simplify access and understanding while preserving the intelligence and complexity of the subject matter. No shortcuts, no false promises.",
    },
  ];

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-0">

        {/* HERO MANIFESTO */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-28">
          <div className="max-w-4xl space-y-6">
            <DiagonalSlideIn from="top-left" distance={40}>
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-4 py-2 rounded-full shadow-xs">
                WHY MANI EXISTS
              </div>
            </DiagonalSlideIn>

            <KineticTextReveal
              text="The Problem With Emotional Support Today."
              tag="h1"
              className="font-serif-heading text-6xl sm:text-8xl text-[#0E2E1E] leading-[0.94] tracking-tight"
            />

            <ScrollReveal direction="up" distance={40} delay={0.2}>
              <p className="text-xl sm:text-2xl text-[#4A524D] font-light leading-relaxed">
                Most self-help gives you inspiration without integration. MANI was created to bridge the gap between understanding a problem and having the daily tools to navigate it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* PINNED SCROLL SEQUENCE (Scroll-Driven Auto-Switch 01 -> 02 -> 03) */}
        <PinnedScrollSequence
          items={[
            {
              label: "WHAT WE BELIEVE",
              text: "People Are Not Problems to Be Fixed.",
              subtext: "We honor the complexity of human experience without reducing people to diagnoses or categories.",
            },
            {
              label: "WHY SIMPLICITY MATTERS",
              text: "Information Is Not the Same as Understanding.",
              subtext: "Access to information has never been greater. But genuine understanding requires structure, context, and connection.",
            },
            {
              label: "OUR PRINCIPLE",
              text: "Learning Matters When It Can Be Applied.",
              subtext: "Awareness without action leads to frustration. Action without calm leads to burnout. We bridge both.",
            },
          ]}
          bgColor="bg-[#0E2E1E]"
          textColor="text-cream-logo"
        />

        {/* 4 FOUNDATIONAL PILLARS — 3D Perspective Flip In */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-32">
          <ScrollReveal direction="up" className="mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-1">
              WHAT MAKES US DIFFERENT
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              Simple Doesn&apos;t Mean Simplistic
            </h2>
          </ScrollReveal>

          <PerspectiveFlipIn className="grid grid-cols-1 md:grid-cols-2 gap-8" angle={-25} stagger={0.15}>
            {corePillars.map((p, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-12 bg-soft-white border-2 border-mist-grey rounded-2xl space-y-4 hover:border-[#0E2E1E] transition-all shadow-md flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <span className="text-xs font-extrabold text-editorial-white bg-[#0E2E1E] px-3.5 py-1 rounded-full inline-block group-hover:bg-[#143d28] transition-colors">
                    PILLAR {p.num}
                  </span>
                  <h3 className="font-serif-heading text-3xl text-[#0E2E1E] leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-serif-italic text-lg text-[#4A524D]">
                    &ldquo;{p.subtitle}&rdquo;
                  </p>
                  <p className="text-sm text-[#626A64] font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </PerspectiveFlipIn>
        </section>

        {/* COMPARISON TABLE — Split Slide Combine */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-32">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center mb-14 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]">
              HOW MANI IS DIFFERENT
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              Traditional Self-Help vs. The MANI System
            </h2>
          </ScrollReveal>

          <CurtainClipExpand className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-soft-white rounded-2xl overflow-hidden shadow-xl border border-mist-grey">
                <thead>
                  <tr className="bg-[#0E2E1E] text-cream-logo font-serif-heading text-lg">
                    <th className="p-6 border-b border-editorial-white/10">Dimension</th>
                    <th className="p-6 border-b border-editorial-white/10 opacity-70">Single Standalone Books</th>
                    <th className="p-6 border-b border-editorial-white/10 text-emerald-300 font-bold">The MANI System</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-mist-grey font-light text-ink-black">
                  <tr>
                    <td className="p-6 font-semibold text-[#0E2E1E]">Approach</td>
                    <td className="p-6 text-[#626A64]">Passive reading without structured action</td>
                    <td className="p-6 font-semibold text-[#0E2E1E] bg-soft-signal-green/30">Connected multi-part physical + digital ecosystem</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-[#0E2E1E]">Integration</td>
                    <td className="p-6 text-[#626A64]">Forgotten after finishing the last chapter</td>
                    <td className="p-6 font-semibold text-[#0E2E1E] bg-soft-signal-green/30">Daily affirmation cards, workbooks, &amp; real-time app reflection</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-[#0E2E1E]">Daily Practice</td>
                    <td className="p-6 text-[#626A64]">No built-in daily reinforcement</td>
                    <td className="p-6 font-semibold text-[#0E2E1E] bg-soft-signal-green/30">Cards, posters, journal prompts for ongoing support</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-[#0E2E1E]">Support System</td>
                    <td className="p-6 text-[#626A64]">Isolated from any community or guidance</td>
                    <td className="p-6 font-semibold text-[#0E2E1E] bg-soft-signal-green/30">Community, daily videos, and guided app support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CurtainClipExpand>
        </section>

        {/* WHAT YOU WILL FIND — Cascading Zoom Stagger */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-32">
          <ScrollReveal direction="up" className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-1">
              WHAT YOU WILL FIND AT MANI
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              Three Connected Pathways
            </h2>
          </ScrollReveal>

          <CascadingZoomStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" stagger={0.12}>
            {[
              {
                title: "Collections",
                desc: "Structured physical and digital tools designed around specific life challenges.",
                link: "/collections",
                linkText: "Explore Collections →",
              },
              {
                title: "Watch & Learn",
                desc: "Short, expert-led daily videos covering psychology, relationships, and emotional intelligence.",
                link: "/watch-learn",
                linkText: "Browse Videos →",
              },
              {
                title: "The App",
                desc: "A guided support app currently in beta, designed for private, accessible emotional support.",
                link: "/#app",
                linkText: "Join Beta →",
              },
            ].map((pathway, idx) => (
              <MagneticElement key={idx} strength={0.12}>
                <div className="p-8 bg-soft-white border-2 border-mist-grey rounded-2xl space-y-4 hover:border-[#0E2E1E] transition-all shadow-md h-full flex flex-col justify-between group">
                  <div>
                    <span className="text-5xl font-serif-heading text-[#0E2E1E]/20 block mb-2">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif-heading text-2xl text-[#0E2E1E] mb-3">{pathway.title}</h3>
                    <p className="text-sm text-[#626A64] font-light leading-relaxed">{pathway.desc}</p>
                  </div>
                  <Link
                    href={pathway.link}
                    className="text-sm font-semibold text-[#0E2E1E] group-hover:underline pt-4 block"
                  >
                    {pathway.linkText}
                  </Link>
                </div>
              </MagneticElement>
            ))}
          </CascadingZoomStagger>
        </section>

        {/* FORWARD STATEMENT */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-32">
          <CurtainClipExpand className="max-w-4xl mx-auto">
            <div className="bg-[#0E2E1E] rounded-2xl p-10 sm:p-16 text-center space-y-6 shadow-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full inline-block">
                THIS IS ONLY THE BEGINNING
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
                New collections, new videos, new ways to support you — every day.
              </h2>
              <p className="text-base sm:text-lg text-[#C3CDC6] font-light leading-relaxed max-w-2xl mx-auto">
                MANI is continuously growing. We are committed to building an ecosystem that evolves with you.
              </p>
            </div>
          </CurtainClipExpand>
        </section>

        {/* COMMUNITY CTA */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 pb-32">
          <ScrollReveal direction="up" scale={0.96} distance={50}>
            <div className="bg-[#081F14] text-editorial-white rounded-2xl p-10 sm:p-16 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full inline-block">
                EXPERIENCE THE DIFFERENCE
              </span>
              <h2 className="font-serif-heading text-4xl sm:text-6xl text-cream-logo">
                Ready to Explore?
              </h2>
              <p className="text-base sm:text-lg text-[#C3CDC6] font-light leading-relaxed max-w-2xl mx-auto">
                Discover our flagship collection or join the community today.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <MagneticElement strength={0.2}>
                  <Link
                    href="/collections"
                    className="px-8 py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all transform hover:scale-105 shadow-xl text-sm inline-block"
                  >
                    Explore Collections &rarr;
                  </Link>
                </MagneticElement>
                <MagneticElement strength={0.2}>
                  <Link
                    href="/#community"
                    className="px-8 py-4 bg-editorial-white/10 text-cream-logo border border-editorial-white/20 font-semibold rounded-xl hover:bg-editorial-white/20 transition-all text-sm inline-block"
                  >
                    Join Our Community &rarr;
                  </Link>
                </MagneticElement>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}
