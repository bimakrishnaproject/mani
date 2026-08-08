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
    sender: "user",
    text: "I'm feeling completely drained by this situation, but I don't know how to set a boundary without feeling guilty.",
  },
  {
    id: "m2",
    sender: "mani",
    text: "Guilt is often just your brain misinterpreting self-protection as selfishness. Let’s look at what boundary you actually need right now.",
  },
  {
    id: "m3",
    sender: "user",
    text: "How do I start trusting myself again?",
  },
  {
    id: "m4",
    sender: "mani",
    text: "Self-trust rebuilds through small, consistent actions. We can start with one area where you already know the internal answer.",
  },
];

export default function ChatSimulator() {
  const [step, setStep] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typingSender, setTypingSender] = useState<"user" | "mani">("user");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Smooth progressive animation loop
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const runSequence = () => {
      // Step 0: User message 1
      setStep(1);
      setIsTyping(true);
      setTypingSender("mani");

      // Step 1: MANI is typing...
      timer = setTimeout(() => {
        setIsTyping(false);
        setStep(2); // MANI message 1 reveals

        // Step 2: User starts typing message 2
        timer = setTimeout(() => {
          setIsTyping(true);
          setTypingSender("user");

          // Step 3: User message 2 reveals
          timer = setTimeout(() => {
            setIsTyping(false);
            setStep(3);
            setIsTyping(true);
            setTypingSender("mani");

            // Step 4: MANI message 2 reveals
            timer = setTimeout(() => {
              setIsTyping(false);
              setStep(4);

              // Pause at full conversation then reset loop
              timer = setTimeout(() => {
                setStep(0);
                setIsTyping(false);
                runSequence();
              }, 4500);
            }, 2200);
          }, 1800);
        }, 2200);
      }, 2000);
    };

    runSequence();

    return () => clearTimeout(timer);
  }, []);

  // Auto scroll to bottom when messages or typing indicators update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [step, isTyping]);

  const visibleMessages = chatMessages.slice(0, step);

  return (
    <div
      ref={scrollRef}
      className="w-full h-[250px] sm:h-[290px] bg-[#05150D] border border-editorial-white/10 rounded-2xl p-4 flex flex-col justify-between overflow-y-auto space-y-3 custom-scrollbar"
    >
      <div className="text-[9px] font-bold tracking-widest text-cream-logo/60 uppercase text-center border-b border-editorial-white/10 pb-2">
        TODAY 9:41 AM • LIVE REFLECTION AI
      </div>

      <div className="space-y-3 flex-1 flex flex-col justify-end">
        <AnimatePresence initial={false}>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`p-3 rounded-2xl max-w-[88%] text-xs leading-relaxed shadow-md ${
                msg.sender === "user"
                  ? "bg-[#0E2E1E] text-cream-logo border border-emerald-500/20 self-end rounded-br-xs"
                  : "bg-[#081F14] text-editorial-white border border-editorial-white/15 self-start rounded-bl-xs flex items-start gap-2.5"
              }`}
            >
              {msg.sender === "mani" && (
                <div className="w-5 h-5 rounded-full bg-cream-logo text-[#0E2E1E] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <span className="font-bold text-[9px] tracking-tighter">M</span>
                </div>
              )}
              <div>
                {msg.sender === "mani" && (
                  <span className="text-[9px] font-bold text-cream-logo uppercase tracking-wider block mb-0.5">
                    MANI AI
                  </span>
                )}
                <p>{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Animated Progressive Typing Dots */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`p-2.5 rounded-2xl flex items-center gap-1.5 w-fit shadow-md border ${
              typingSender === "user"
                ? "bg-[#0E2E1E] border-emerald-500/20 self-end rounded-br-xs"
                : "bg-[#081F14] border-editorial-white/15 self-start rounded-bl-xs"
            }`}
          >
            {typingSender === "mani" && (
              <div className="w-4 h-4 rounded-full bg-cream-logo text-[#0E2E1E] flex items-center justify-center shrink-0">
                <span className="font-bold text-[8px]">M</span>
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
