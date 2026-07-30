"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import TiltCard3D from "./TiltCard3D";

export default function AppShowcaseSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activePromptTab, setActivePromptTab] = useState<number>(0);
  
  // Animation Phase: 'user-typing' | 'mani-thinking' | 'mani-typing' | 'complete'
  const [animPhase, setAnimPhase] = useState<string>("user-typing");
  const [userTextIndex, setUserTextIndex] = useState<number>(0);
  const [maniTextIndex, setManiTextIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-25, 0, 25]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1.08, 0.88]);

  const promptUseCases = [
    {
      title: "Anxiety & Overwhelm",
      userMessage: "I'm feeling completely drained and anxious today.",
      maniReply: "I hear you. Let's take a slow breath together. What is weighing on your mind most right now?",
    },
    {
      title: "Boundary Setting",
      userMessage: "How do I say no without feeling guilty?",
      maniReply: "Guilt often misinterprets self-protection as selfishness. Let's clarify what boundary you need right now.",
    },
    {
      title: "Relationship Clarity",
      userMessage: "I feel like I'm walking on eggshells with my partner.",
      maniReply: "Walking on eggshells is a common sign of unpredictable emotional dynamics. Let's explore when this pattern starts.",
    },
  ];

  // Deterministic String Slicing Typewriter Logic (Prevents any text shuffling!)
  useEffect(() => {
    setAnimPhase("user-typing");
    setUserTextIndex(0);
    setManiTextIndex(0);

    const currentUserMsg = promptUseCases[activePromptTab].userMessage;
    const currentManiReply = promptUseCases[activePromptTab].maniReply;

    // Step 1: Type out User Message
    let userIndex = 0;
    const userInterval = setInterval(() => {
      userIndex++;
      setUserTextIndex(userIndex);
      if (userIndex >= currentUserMsg.length) {
        clearInterval(userInterval);
        
        // Step 2: MANI Thinking Delay (1.5 seconds)
        setAnimPhase("mani-thinking");
        setTimeout(() => {
          
          // Step 3: Type out MANI Reply
          setAnimPhase("mani-typing");
          let maniIndex = 0;
          const maniInterval = setInterval(() => {
            maniIndex++;
            setManiTextIndex(maniIndex);
            if (maniIndex >= currentManiReply.length) {
              clearInterval(maniInterval);
              setAnimPhase("complete");
            }
          }, 20);
        }, 1500);
      }
    }, 25);

    return () => {
      clearInterval(userInterval);
    };
  }, [activePromptTab]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const currentUserText = promptUseCases[activePromptTab].userMessage.slice(0, userTextIndex);
  const currentManiText = promptUseCases[activePromptTab].maniReply.slice(0, maniTextIndex);

  return (
    <section
      ref={containerRef}
      className="py-28 md:py-44 bg-editorial-white text-ink-black overflow-hidden w-full border-t border-mist-grey [perspective:1600px]"
      id="app"
    >
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
          
          {/* Left Column: Editorial Overview & 3D Interactive Gyroscopic Holographic Card */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-4 py-1.5 rounded-full mb-4 shadow-xs">
                THE MANI APP • BETA ACCESS
              </div>
              <h2 className="font-serif-heading text-5xl sm:text-7xl text-deep-green leading-[0.98]">
                Support Wherever You Are
              </h2>
              <p className="text-lg sm:text-xl text-[#4A524D] font-light leading-relaxed mt-4">
                Beyond listening, MANI guides you toward understanding and practical next steps. Designed for private, calm, real-time support right from your phone.
              </p>
            </motion.div>

            {/* 3D INTERACTIVE GYROSCOPIC TILT CARD WITH DETERMINISTIC LIVE TYPING SIMULATION */}
            <TiltCard3D maxDegree={12} scale={1.02} className="w-full">
              <div className="p-8 bg-[#081F14] text-editorial-white border-2 border-emerald-500/40 rounded-3xl shadow-[0_30px_70px_rgba(14,46,30,0.35)] space-y-5 relative overflow-hidden [transform-style:preserve-3d]">
                
                {/* Specular Light & Radial Glow */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-radial from-cream-logo/20 via-soft-signal-green/10 to-transparent pointer-events-none rounded-full blur-2xl" />

                <div className="flex items-center justify-between relative z-10 [transform:translateZ(20px)]">
                  <span className="text-xs font-bold text-cream-logo uppercase tracking-widest block">
                    ✨ 3D LIVE CHAT SIMULATOR (CLICK TO TEST)
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full animate-pulse">
                    LIVE CONVERSATION ENGINE
                  </span>
                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap gap-2.5 relative z-10 [transform:translateZ(30px)]">
                  {promptUseCases.map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePromptTab(idx)}
                      className={`text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                        activePromptTab === idx
                          ? "bg-cream-logo text-deep-green shadow-md scale-105"
                          : "bg-editorial-white/10 text-cream-logo border border-editorial-white/15 hover:bg-editorial-white/20"
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                {/* 3-STEP REAL-TIME CONVERSATION SEQUENCE */}
                <div className="space-y-3.5 pt-3 border-t border-editorial-white/15 text-sm relative z-10 [transform:translateZ(45px)] min-h-[140px]">
                  
                  {/* Step 1: User Message Typing Character by Character */}
                  <div className="p-4 bg-editorial-white/10 backdrop-blur-md rounded-2xl text-editorial-white flex items-start gap-3 border border-editorial-white/15 shadow-lg min-h-[52px]">
                    <span className="font-bold text-cream-logo text-xs uppercase pt-0.5">YOU:</span>
                    <span>
                      "{currentUserText}"
                      {animPhase === "user-typing" && (
                        <span className="inline-block w-1.5 h-4 bg-cream-logo ml-1 animate-pulse" />
                      )}
                    </span>
                  </div>

                  {/* Step 2: MANI Thinking Delay (1.5s) OR Step 3: MANI Live Typing Reply */}
                  {animPhase === "mani-thinking" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-soft-signal-green/20 backdrop-blur-md rounded-2xl text-cream-logo font-medium flex items-center gap-3 border border-soft-signal-green/30 shadow-lg"
                    >
                      <span className="font-bold text-cream-logo text-xs uppercase">MANI:</span>
                      <div className="flex items-center gap-1.5 text-cream-logo">
                        <span className="w-2 h-2 bg-cream-logo rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-cream-logo rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-2 h-2 bg-cream-logo rounded-full animate-bounce [animation-delay:0.4s]" />
                        <span className="text-xs font-semibold ml-2 italic text-emerald-300">MANI is analyzing and reflecting...</span>
                      </div>
                    </motion.div>
                  )}

                  {(animPhase === "mani-typing" || animPhase === "complete") && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-soft-signal-green/25 backdrop-blur-md rounded-2xl text-cream-logo font-medium flex items-start gap-3 border border-soft-signal-green/40 shadow-lg"
                    >
                      <span className="font-bold text-cream-logo text-xs uppercase pt-0.5">MANI:</span>
                      <span>
                        "{currentManiText}"
                        {animPhase === "mani-typing" && (
                          <span className="inline-block w-1.5 h-4 bg-cream-logo ml-1 animate-pulse" />
                        )}
                      </span>
                    </motion.div>
                  )}

                </div>
              </div>
            </TiltCard3D>

            {/* Beta Access Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-2"
            >
              <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-deep-green mb-4">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                Currently in Private Beta
              </div>

              {submitted ? (
                <div className="p-5 bg-soft-signal-green text-deep-green rounded-xl font-semibold text-base shadow-md">
                  ✓ Thank you! You have been added to the MANI Beta access list.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-grow px-5 py-4 border border-mist-grey rounded-xl text-base bg-editorial-white text-ink-black focus:outline-none focus:border-deep-green shadow-xs"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-deep-green text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all transform hover:scale-105 shadow-xl text-base"
                    >
                      Join Beta Access &rarr;
                    </button>
                  </div>
                  <p className="text-xs text-sage-grey">We respect your privacy. Unsubscribe at any time.</p>
                </form>
              )}
            </motion.div>
          </div>

          {/* Right Column: EXACTLY MATCHING THREEWAYSSECTION HIGH-QUALITY DISPLAY */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-8">
            
            {/* Soft Ambient Radial Glow */}
            <div className="absolute inset-0 bg-radial from-soft-signal-green/40 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

            {/* Floating 3D Micro-Badges Surrounding Phone */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 z-30 hidden sm:flex items-center gap-2 bg-deep-green text-editorial-white px-4 py-2 rounded-full shadow-2xl text-xs font-bold"
            >
              <span>🔒 100% Private & Encrypted</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-0 z-30 hidden sm:flex items-center gap-2 bg-editorial-white text-deep-green px-4 py-2 rounded-full shadow-2xl text-xs font-bold border border-mist-grey"
            >
              <span>⚡ Real-Time Reflection AI</span>
            </motion.div>

            {/* High-Quality Phone Image Display (Matching ThreeWaysSection exactly) */}
            <motion.div
              style={{
                rotateY,
                rotateX,
                scale,
              }}
              className="relative w-full flex justify-center items-center z-20 [transform-style:preserve-3d]"
            >
              <Image
                src="/assets/Chat Conversation.png"
                alt="MANI App Chat Conversation"
                width={460}
                height={920}
                quality={100}
                priority
                className="w-auto h-[480px] sm:h-[580px] md:h-[640px] object-contain drop-shadow-2xl animate-float"
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
