"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SpatialStoryCanvas from "./SpatialStoryCanvas";
import SpatialElement3D from "./SpatialElement3D";
import FramerMotionAnimate from "./FramerMotionAnimate";

export default function InteractiveStoryNarrative() {
  const [activeAct, setActiveAct] = useState<number>(0);

  const storyActs = [
    {
      act: "ACT 01",
      title: "The Physical System",
      subtitle: "Reading creates understanding. Workbooks create action. Journals create calm.",
      description: "A 5-part connected ecosystem designed to guide you through emotional dynamics, boundary work, and daily habit integration.",
      badge: "BYE BYE NARCISSIST COLLECTION",
      ctaText: "Explore Collection — $119.99",
      ctaLink: "/collections/bye-bye-narcissist",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png",
    },
    {
      act: "ACT 02",
      title: "Daily Micro-Videos",
      subtitle: "500+ expert-led daily videos explaining complex psychology in under 3 minutes.",
      description: "Short, grounded, actionable videos to help you process emotions and recognize relationship patterns in real time.",
      badge: "WATCH & LEARN LIBRARY",
      ctaText: "Browse 500+ Videos Free",
      ctaLink: "/watch-learn",
      image: "/assets/Video Thumbnails/How Emotionally Intelligent People Handle Hurt.jpeg",
    },
    {
      act: "ACT 03",
      title: "Guided Mobile Technology",
      subtitle: "Private, real-time reflection and support right from your phone.",
      description: "Beyond passive listening, MANI guides you toward understanding and practical next steps when you need clarity most.",
      badge: "MANI APP • PRIVATE BETA",
      ctaText: "Join Private Beta Access",
      ctaLink: "/#app",
      image: "/assets/Chat Conversation.png?v=3",
    },
  ];

  return (
    <section className="py-32 md:py-48 bg-deep-green text-editorial-white overflow-hidden relative w-full border-y border-editorial-white/10">
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial from-cream-logo/15 via-transparent to-transparent pointer-events-none" />

      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 relative z-10">
        
        {/* Editorial Story Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <FramerMotionAnimate direction="blur" delay={0.1}>
            <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-2 rounded-full inline-block mb-6 backdrop-blur-sm shadow-md">
              INTERACTIVE NARRATIVE EXPERIENCE
            </span>
          </FramerMotionAnimate>
          <FramerMotionAnimate direction="up" delay={0.25}>
            <h2 className="font-serif-heading text-5xl sm:text-7xl md:text-8xl text-cream-logo mb-6 leading-tight">
              How MANI Transforms<br />
              <span className="font-serif-italic">Emotional Growth.</span>
            </h2>
          </FramerMotionAnimate>
          <FramerMotionAnimate direction="up" delay={0.35}>
            <p className="text-lg sm:text-xl text-[#C3CDC6] leading-relaxed font-light">
              Emotional support should not feel fragmented or overwhelming. Select an act below to explore how our connected system guides your journey.
            </p>
          </FramerMotionAnimate>
        </div>

        {/* Act Selector Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {storyActs.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveAct(idx)}
              className={`px-8 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                activeAct === idx
                  ? "bg-cream-logo text-deep-green shadow-2xl scale-105"
                  : "bg-editorial-white/10 text-editorial-white hover:bg-editorial-white/20 border border-editorial-white/15"
              }`}
            >
              {item.act}: {item.title}
            </button>
          ))}
        </div>

        {/* Pure Borderless 3D Spatial Story Canvas (No Nested Card Frames) */}
        <SpatialStoryCanvas intensity={25} className="w-full py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
            
            {/* Act Narrative Text (Left Column, Z = +40px) */}
            <SpatialElement3D depth={40} className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-cream-logo uppercase block mb-4">
                {storyActs[activeAct].badge}
              </span>
              <h3 className="font-serif-heading text-5xl sm:text-7xl md:text-8xl text-cream-logo mb-6 leading-[0.95]">
                {storyActs[activeAct].title}
              </h3>
              <p className="font-serif-italic text-2xl sm:text-3xl md:text-4xl text-[#E5EBE7] mb-6 leading-snug">
                "{storyActs[activeAct].subtitle}"
              </p>
              <p className="text-base sm:text-lg text-[#C3CDC6] leading-relaxed mb-10 font-light max-w-xl">
                {storyActs[activeAct].description}
              </p>

              <Link
                href={storyActs[activeAct].ctaLink}
                className="inline-flex px-10 py-5 bg-cream-logo text-deep-green font-semibold rounded-md hover:bg-[#f2e1bd] transition-all transform hover:scale-105 shadow-2xl text-base"
              >
                {storyActs[activeAct].ctaText} &rarr;
              </Link>
            </SpatialElement3D>

            {/* Act Visual Asset (Right Column, Z = +100px Pure Floating Studio Display) */}
            <SpatialElement3D depth={100} hoverScale={1.05} className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[620px] h-[400px] sm:h-[460px] md:h-[520px] flex items-center justify-center p-6">
                {activeAct === 0 && (
                  <Image
                    src={storyActs[0].image}
                    alt={storyActs[0].title}
                    width={600}
                    height={480}
                    className="w-full h-auto object-contain max-h-[460px] drop-shadow-[0_35px_50px_rgba(0,0,0,0.4)] animate-float"
                    priority
                  />
                )}
                {activeAct === 1 && (
                  <div className="relative w-full h-[440px] rounded-3xl overflow-hidden shadow-2xl border-2 border-cream-logo/40">
                    <img
                      src={encodeURI(storyActs[1].image)}
                      alt={storyActs[1].title}
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-transparent to-transparent flex items-center justify-center">
                      <div className="w-24 h-24 bg-cream-logo text-deep-green rounded-full flex items-center justify-center shadow-2xl">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                          <polygon points="9,6 18,12 9,18" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                {activeAct === 2 && (
                  <img
                    src={storyActs[2].image}
                    alt={storyActs[2].title}
                    className="w-auto h-[480px] object-contain mix-blend-multiply drop-shadow-[0_35px_50px_rgba(0,0,0,0.5)] animate-float"
                  />
                )}
              </div>
            </SpatialElement3D>

          </div>
        </SpatialStoryCanvas>

      </div>
    </section>
  );
}
