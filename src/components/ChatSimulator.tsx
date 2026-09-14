"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  sender: "user" | "mani";
  text: string;
}

const chatMessages: Message[] = [
  {
    id: "m1",
    sender: "mani",
    text: "Hi, it's mani. How can I support you today?",
  },
  {
    id: "m2",
    sender: "user",
    text: "I'm feeling anxious.",
  },
  {
    id: "m3",
    sender: "mani",
    text: "I'm sorry you're feeling anxious. What's going on?",
  },
  {
    id: "m4",
    sender: "user",
    text: "It's been a long, stressful day.",
  },
  {
    id: "m5",
    sender: "mani",
    text: "I get it. What happened today?",
  },
  {
    id: "m6",
    sender: "user",
    text: "Everything felt like it was going wrong. I had too much to do, people kept needing things from me, and I never felt like I could catch up.",
  },
  {
    id: "m7",
    sender: "mani",
    text: "That sounds like a lot for one day. What part of it is bothering you the most right now?",
  },
  {
    id: "m8",
    sender: "user",
    text: "Honestly, feeling like no matter how hard I worked, it wasn't enough.",
  },
  {
    id: "m9",
    sender: "mani",
    text: "That's a tough feeling. Do you think it was the amount you had to do, or the pressure you were putting on yourself to get it all done?",
  },
  {
    id: "m10",
    sender: "user",
    text: "Probably both",
  },
];

export default function ChatSimulator() {
  const [step, setStep] = useState<number>(3); // start with first 3 messages visible immediately
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typingSender, setTypingSender] = useState<"user" | "mani">("user");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Progressive conversation reveal loop
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const advanceStep = (currentStep: number) => {
      if (currentStep >= chatMessages.length) {
        // Pause at full conversation then reset
        timer = setTimeout(() => {
          setStep(2);
          advanceStep(2);
        }, 5000);
        return;
      }

      const nextMsg = chatMessages[currentStep];
      setIsTyping(true);
      setTypingSender(nextMsg.sender);

      timer = setTimeout(() => {
        setIsTyping(false);
        setStep(currentStep + 1);

        timer = setTimeout(() => {
          advanceStep(currentStep + 1);
        }, 2200);
      }, 1600);
    };

    timer = setTimeout(() => {
      advanceStep(3);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto scroll to bottom when messages or typing indicators update (unless user is manually scrolling)
  useEffect(() => {
    if (scrollRef.current && !isHovered) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [step, isTyping, isHovered]);

  const visibleMessages = chatMessages.slice(0, step);

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
      className="w-full h-full bg-[#05150D] rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between overflow-y-auto space-y-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-contain"
    >
      <div className="text-[9px] font-bold tracking-wider text-cream-logo/70 uppercase text-center border-b border-editorial-white/10 pb-1.5 shrink-0">
        TODAY 9:41 AM &bull; LIVE REFLECTION
      </div>

      <div className="space-y-2.5 flex-1 flex flex-col justify-end">
        <AnimatePresence initial={false}>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`p-2.5 sm:p-3 rounded-2xl max-w-[92%] text-[11px] sm:text-xs leading-snug shadow-md ${
                msg.sender === "user"
                  ? "bg-[#143D28] text-cream-logo border border-emerald-400/30 self-end rounded-br-xs font-medium"
                  : "bg-[#0E2E1E] text-editorial-white border border-editorial-white/20 self-start rounded-bl-xs flex items-start gap-2"
              }`}
            >
              {msg.sender === "mani" && (
                <div className="w-5 h-5 rounded-full bg-cream-logo text-[#0E2E1E] flex items-center justify-center shrink-0 mt-0.5 shadow-sm font-bold text-[9px]">
                  M
                </div>
              )}
              <div>
                {msg.sender === "mani" && (
                  <span className="text-[10px] font-bold text-cream-logo lowercase tracking-wide block mb-0.5">
                    mani
                  </span>
                )}
                <p className="text-editorial-white font-normal">{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Animated Progressive Typing Dots */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`p-2 rounded-xl flex items-center gap-1.5 w-fit shadow-md border ${
              typingSender === "user"
                ? "bg-[#143D28] border-emerald-400/30 self-end rounded-br-xs"
                : "bg-[#0E2E1E] border-editorial-white/20 self-start rounded-bl-xs"
            }`}
          >
            {typingSender === "mani" && (
              <div className="w-4 h-4 rounded-full bg-cream-logo text-[#0E2E1E] flex items-center justify-center shrink-0 font-bold text-[8px]">
                M
              </div>
            )}
            <div className="flex items-center gap-1 px-1">
              <span className="w-1.5 h-1.5 bg-cream-logo rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 bg-cream-logo rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 bg-cream-logo rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
