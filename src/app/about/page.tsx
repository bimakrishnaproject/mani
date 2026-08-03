"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";
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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="About & Clinical Team Dossier"
        description="This page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  const founders = [
    {
      name: "Manasa Reddy",
      role: "Founder",
      bio: "Manasa created MANI with a vision of making emotional support truly accessible. Her personal experience navigating life's challenges inspired her to build a platform that brings together expert-led content, physical tools, and guided technology into one connected support system.",
      image: "/assets/Team Photos/Manasa Reddy.png",
      quote: "Everyone deserves access to tools that help them understand themselves better and navigate life's challenges with clarity.",
    },
    {
      name: "Lolly Daskal",
      role: "Behavioral Expert, Strategic Advisor & Bestselling Author",
      bio: "Lolly Daskal is one of the world's most sought-after executive leadership coaches and bestselling author of 'The Leadership Gap'. She brings decades of experience in human behavior, leadership development, and emotional intelligence to help shape MANI's content and strategic direction.",
      image: "/assets/Team Photos/Lolly Daskal.png",
      quote: "Great leadership starts with self-leadership. When you understand your emotional patterns, everything in your life shifts.",
    },
  ];

  const specialists = [
    {
      name: "Michaela Katz",
      role: "Somatic Healing and Emotional Well-Being Specialist",
      desc: "Michaela brings deep expertise in somatic healing practices, helping ensure MANI's tools address both the mind and body in the process of emotional growth and recovery.",
      image: "/assets/Team Photos/Michaela Katz.png",
    },
    {
      name: "Michelle Falanga",
      role: "Emmy Award-Winning Voice Artist",
      desc: "Michelle's award-winning voice artistry brings warmth and authenticity to MANI's guided experiences, creating a sense of calm and connection through every audio interaction.",
      image: "/assets/Team Photos/Michelle Falanga.png",
    },
    {
      name: "Stephen CogHill",
      role: "Award-Winning Composer, Producer & Audio Engineer",
      desc: "Stephen's expertise in music composition and sound design shapes the sonic identity of MANI, creating audio environments that support reflection, calm, and emotional processing.",
      image: "/assets/Team Photos/Stephen CogHill.png",
    },
  ];

  const disciplines = [
    "Human Behaviour",
    "Emotional Intelligence",
    "Relationships",
    "Somatic Practice",
    "Voice & Guided Experience",
    "Music & Sound Design",
    "Educational Content",
    "Digital Technology",
  ];

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">

        {/* HERO SECTION */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-28">
          <div className="max-w-4xl space-y-6">
            <DiagonalSlideIn from="top-left" distance={40}>
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-4 py-2 rounded-full shadow-xs">
                ABOUT MANI
              </div>
            </DiagonalSlideIn>

            <KineticTextReveal
              text="Built to Make a Difference."
              tag="h1"
              className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#0E2E1E] leading-[0.96] sm:leading-[0.94] tracking-tight"
            />

            <ScrollReveal direction="up" distance={40} delay={0.2}>
              <p className="text-xl sm:text-2xl text-[#4A524D] font-light leading-relaxed">
                MANI was founded by people who recognized that emotional support needed to be simpler, more accessible, and more connected to how people actually live.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* FOUNDERS EDITORIAL SECTION — Left & Right Split Slide Combine */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-28 space-y-20">
          <ScrollReveal direction="up">
            <div className="mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-1">
                THE PEOPLE BEHIND MANI
              </span>
              <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
                Meet Our Founders
              </h2>
            </div>
          </ScrollReveal>

          {founders.map((founder, idx) => (
            <SplitSlideCombine key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Founder Image */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <CurtainClipExpand>
                  <div className="relative w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-mist-grey">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2E1E]/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </CurtainClipExpand>
              </div>

              {/* Bio & Quote */}
              <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <span className="text-xs font-bold text-[#0E2E1E] uppercase tracking-widest block mb-1">
                    {founder.role}
                  </span>
                  <h3 className="font-serif-heading text-4xl sm:text-5xl text-[#0E2E1E]">
                    {founder.name}
                  </h3>
                </div>

                <p className="font-serif-italic text-xl text-[#4A524D] leading-relaxed border-l-4 border-[#0E2E1E] pl-6 py-1">
                  &ldquo;{founder.quote}&rdquo;
                </p>

                <p className="text-base text-[#626A64] font-light leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </SplitSlideCombine>
          ))}
        </section>

        {/* TEAM SPECIALISTS — 3D Perspective Flip In */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-32">
          <ScrollReveal direction="up">
            <div className="mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-1">
                MEET THE EXPERTS BEHIND MANI
              </span>
              <h2 className="font-serif-heading text-4xl sm:text-5xl text-[#0E2E1E]">
                Our Expert Team
              </h2>
            </div>
          </ScrollReveal>

          <PerspectiveFlipIn className="grid grid-cols-1 md:grid-cols-3 gap-8" angle={-30} stagger={0.15}>
            {specialists.map((m, idx) => (
              <MagneticElement key={idx} strength={0.15}>
                <div className="p-6 bg-soft-white border-2 border-mist-grey rounded-2xl space-y-5 hover:border-[#0E2E1E] transition-all shadow-md flex flex-col justify-between group">
                  <div className="w-full rounded-xl overflow-hidden border border-mist-grey shadow-sm">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">{m.name}</h3>
                    <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block">
                      {m.role}
                    </span>
                    <p className="text-xs text-[#626A64] font-light leading-relaxed pt-1">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </MagneticElement>
            ))}
          </PerspectiveFlipIn>
        </section>

        {/* COMBINED EXPERTISE — Diagonal Entrance */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-32">
          <ScrollReveal direction="up" className="mb-10 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-1">
              COMBINED EXPERTISE
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-5xl text-[#0E2E1E]">
              The Disciplines Behind MANI
            </h2>
          </ScrollReveal>

          <CascadingZoomStagger className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto" stagger={0.08}>
            {disciplines.map((d, i) => (
              <div
                key={i}
                className="text-sm font-semibold px-6 py-3 bg-soft-white border-2 border-mist-grey rounded-full hover:border-[#0E2E1E] hover:bg-soft-signal-green transition-all cursor-default shadow-xs"
              >
                {d}
              </div>
            ))}
          </CascadingZoomStagger>
        </section>

        {/* PINNED SCROLL SEQUENCE (Scroll-Driven Auto-Switch 01 -> 02 -> 03) */}
        <PinnedScrollSequence
          items={[
            {
              label: "OUR COMMITMENT",
              text: "Clarity Comes Before Action.",
              subtext: "We create tools that help people see clearly before they act.",
            },
            {
              label: "OUR PRINCIPLE",
              text: "Empathy Comes Before Guidance.",
              subtext: "People need to feel understood before they can move forward.",
            },
            {
              label: "OUR BELIEF",
              text: "People are not problems to be fixed.",
              subtext: "We honour dignity, autonomy, and the capacity for growth in every person.",
            },
          ]}
          bgColor="bg-[#0E2E1E]"
          textColor="text-cream-logo"
        />

        {/* CLOSING CTA */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24">
          <CurtainClipExpand className="max-w-4xl mx-auto">
            <div className="bg-[#081F14] text-editorial-white rounded-2xl p-10 sm:p-16 text-center space-y-6 shadow-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full inline-block">
                SUPPORT DOESN&apos;T END HERE
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
                Join us in making emotional support accessible to everyone.
              </h2>
              <p className="text-base sm:text-lg text-[#C3CDC6] font-light leading-relaxed max-w-2xl mx-auto">
                Explore our collections, watch our daily videos, or join our growing community.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <MagneticElement strength={0.2}>
                  <Link
                    href="/#community"
                    className="px-10 py-5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all transform hover:scale-105 shadow-xl text-base inline-block"
                  >
                    Join Our Community &rarr;
                  </Link>
                </MagneticElement>
                <MagneticElement strength={0.2}>
                  <Link
                    href="/collections"
                    className="px-10 py-5 bg-editorial-white/10 text-cream-logo border border-editorial-white/20 font-semibold rounded-xl hover:bg-editorial-white/20 transition-all text-base inline-block"
                  >
                    Explore Collections &rarr;
                  </Link>
                </MagneticElement>
              </div>
            </div>
          </CurtainClipExpand>
        </section>

      </main>

      <Footer />
    </div>
  );
}
