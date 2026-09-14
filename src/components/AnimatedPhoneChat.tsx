"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: string;
  sender: "mani" | "user";
  text: string;
}

const CONVERSATION_SCRIPT: ChatMessage[] = [
  {
    id: "c1",
    sender: "mani",
    text: "Hi, it's mani. How can I support you today?",
  },
  {
    id: "c2",
    sender: "user",
    text: "I'm feeling anxious.",
  },
  {
    id: "c3",
    sender: "mani",
    text: "I'm sorry you're feeling anxious. What's going on?",
  },
  {
    id: "c4",
    sender: "user",
    text: "It's been a long, stressful day.",
  },
  {
    id: "c5",
    sender: "mani",
    text: "I get it. What happened today?",
  },
  {
    id: "c6",
    sender: "user",
    text: "Everything felt like it was going wrong. I had too much to do, people kept needing things from me, and I never felt like I could catch up.",
  },
  {
    id: "c7",
    sender: "mani",
    text: "That sounds like a lot for one day. What part of it is bothering you the most right now?",
  },
  {
    id: "c8",
    sender: "user",
    text: "Honestly, feeling like no matter how hard I worked, it wasn't enough.",
  },
  {
    id: "c9",
    sender: "mani",
    text: "That's a tough feeling. Do you think it was the amount you had to do, or the pressure you were putting on yourself to get it all done?",
  },
  {
    id: "c10",
    sender: "user",
    text: "Probably both.",
  },
];

interface AnimatedPhoneChatProps {
  className?: string;
  compact?: boolean;
  size?: "full" | "half" | "compact";
}

export default function AnimatedPhoneChat({
  className = "",
  compact = false,
  size,
}: AnimatedPhoneChatProps) {
  const isCompact = compact || size === "compact";

  // Start with initial 2 messages visible immediately
  const [visibleCount, setVisibleCount] = useState<number>(2);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typingSender, setTypingSender] = useState<"mani" | "user">("mani");
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Progressive typing and message reveal loop
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const playNextStep = (currentCount: number) => {
      if (currentCount >= CONVERSATION_SCRIPT.length) {
        // Conversation complete, pause for 5s then restart from message 2
        timeoutId = setTimeout(() => {
          setVisibleCount(2);
          playNextStep(2);
        }, 5500);
        return;
      }

      const nextMessage = CONVERSATION_SCRIPT[currentCount];
      setIsTyping(true);
      setTypingSender(nextMessage.sender);

      // Realistic typing duration based on text length
      const typingTime = Math.min(2200, Math.max(1300, nextMessage.text.length * 22));

      timeoutId = setTimeout(() => {
        setIsTyping(false);
        setVisibleCount(currentCount + 1);

        // Interval before next response
        const pauseTime = nextMessage.sender === "user" ? 1400 : 2200;
        timeoutId = setTimeout(() => {
          playNextStep(currentCount + 1);
        }, pauseTime);
      }, typingTime);
    };

    timeoutId = setTimeout(() => {
      playNextStep(2);
    }, 1800);

    return () => clearTimeout(timeoutId);
  }, []);

  // Smooth autoscroll to the latest message
  useEffect(() => {
    if (chatScrollRef.current && !isUserInteracting) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visibleCount, isTyping, isUserInteracting]);

  const displayedMessages = CONVERSATION_SCRIPT.slice(0, visibleCount);

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Realistic Titanium Apple iPhone 16 Pro Chassis (Always authentic full-scale proportions) */}
      <div
        className={`relative w-full ${
          isCompact
            ? "max-w-[300px] h-[520px] rounded-[44px] p-3"
            : "w-[320px] xs:w-[340px] sm:w-[360px] md:w-[380px] max-w-[calc(100vw-2.5rem)] h-[640px] sm:h-[680px] rounded-[50px] sm:rounded-[54px] p-3 sm:p-3.5"
        } bg-[#080D0A] shadow-[0_35px_80px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.14),inset_0_1px_1px_rgba(255,255,255,0.3)] flex flex-col justify-between overflow-hidden border border-[#1C3024]`}
      >
        {/* Specular Edge Glass Highlight */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-30" />

        {/* Dynamic Island Header with Live Activity Status */}
        <div className="w-full shrink-0 z-20 pb-2">
          {/* Dynamic Island Pill */}
          <div className="w-28 sm:w-32 h-6 sm:h-7 bg-black rounded-full mx-auto flex items-center justify-between px-2.5 shadow-inner ring-1 ring-white/10 relative overflow-hidden group">
            {/* Front Camera Lens */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#111814] ring-1 ring-white/10 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#062015] ring-0.5 ring-emerald-500/40" />
            </div>

            {/* Dynamic Sound Wave & Active Status Indicator */}
            <div className="flex items-center gap-1.5">
              {/* Subtle Audio Waveform Visualizer */}
              <div className="flex items-center gap-0.5 h-3 px-1">
                <span className="w-0.5 h-2 bg-emerald-400 rounded-full animate-pulse [animation-duration:0.8s]" />
                <span className="w-0.5 h-3 bg-emerald-400 rounded-full animate-pulse [animation-duration:0.5s]" />
                <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full animate-pulse [animation-duration:1.1s]" />
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
          </div>

          {/* App Bar (Matching Client Mockup Exactly) */}
          <div className="flex items-center justify-between px-2 pt-1.5 text-cream-logo">
            {/* Hamburger Menu */}
            <button
              type="button"
              className="p-1 text-cream-logo/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Menu"
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            {/* "Get Help Now" Center Pill */}
            <div className="flex items-center gap-1.5 bg-[#122A1D] border border-emerald-500/35 px-3 py-1 rounded-full shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-semibold text-cream-logo tracking-wide">
                Get Help Now
              </span>
            </div>

            {/* Compose / Edit Icon */}
            <button
              type="button"
              className="p-1 text-cream-logo/80 hover:text-white transition-colors cursor-pointer"
              aria-label="New Reflection"
            >
              <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Conversation Stream */}
        <div
          ref={chatScrollRef}
          onMouseEnter={() => setIsUserInteracting(true)}
          onMouseLeave={() => setIsUserInteracting(false)}
          onTouchStart={() => setIsUserInteracting(true)}
          onTouchEnd={() => setTimeout(() => setIsUserInteracting(false), 2000)}
          className="flex-1 overflow-y-auto px-1.5 py-2 space-y-3.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-contain"
        >
          {/* Subtle Timestamp Divider */}
          <div className="text-[10px] sm:text-[11px] font-medium tracking-wider text-cream-logo/50 uppercase text-center py-1">
            Today &bull; Live Guided Reflection
          </div>

          <AnimatePresence initial={false}>
            {displayedMessages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 14, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                {msg.sender === "user" ? (
                  /* User Response Bubble */
                  <div
                    className="bg-[#173826] text-[#FAF5EB] border border-emerald-400/30 px-3.5 py-2.5 text-xs sm:text-[13px] max-w-[85%] rounded-2xl rounded-br-xs leading-relaxed shadow-sm font-normal"
                  >
                    {msg.text}
                  </div>
                ) : (
                  /* Mani's Thoughtful Direct Response (Clean Minimalist App Style) */
                  <div
                    className="text-[#E8F0EC] text-xs sm:text-[13.5px] max-w-[90%] px-1 py-1 leading-relaxed font-normal"
                  >
                    {msg.text}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Animated Real-Time Typing Bubble */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`flex items-center gap-1.5 py-1.5 px-3 rounded-xl w-fit ${
                typingSender === "user"
                  ? "bg-[#173826] border border-emerald-400/25 ml-auto rounded-br-xs"
                  : "bg-[#0E2419]/90 border border-emerald-500/20 rounded-bl-xs shadow-sm"
              }`}
            >
              <span className="text-[10px] text-cream-logo/65 mr-1 font-medium">
                {typingSender === "mani" ? "mani is reflecting" : "typing"}
              </span>
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" />
            </motion.div>
          )}
        </div>

        {/* Bottom App Interaction Bar & Home Indicator */}
        <div className="w-full shrink-0 pt-2 pb-1 border-t border-editorial-white/10 bg-[#080D0A]/95 backdrop-blur-md">
          {/* Simulated Input Bar */}
          <div
            className="flex items-center justify-between bg-[#111B15] border border-editorial-white/15 rounded-full px-3.5 py-2 text-xs text-cream-logo/60"
          >
            <span>Type a reflection...</span>
            <div
              className="w-6 h-6 rounded-full bg-[#1C422E] text-cream-logo flex items-center justify-center shadow-xs"
            >
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </div>
          </div>

          {/* iOS Home Indicator */}
          <div className="w-28 sm:w-32 h-1 mt-2.5 mb-1 bg-white/30 rounded-full mx-auto" />
        </div>
      </div>

      {/* Realistic Contact Shadow */}
      <div className="w-[75%] h-3 bg-gradient-to-r from-transparent via-black/50 to-transparent blur-[6px] rounded-full mx-auto -mt-1 pointer-events-none" />
    </div>
  );
}
