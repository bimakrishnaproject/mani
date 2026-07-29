"use client";

import { useState, useEffect } from "react";

export default function PageIntroLoader() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  const fullText = "Understanding comes before change.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        // Pause briefly before fade out
        setTimeout(() => {
          setFadingOut(true);
          setTimeout(() => setVisible(false), 700);
        }, 600);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-deep-green text-cream-logo flex flex-col items-center justify-center px-6 transition-all duration-700 ${
        fadingOut ? "opacity-0 pointer-events-none -translate-y-4" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="16" cy="16" r="5" fill="currentColor" />
        </svg>
        <span className="text-sm font-bold tracking-widest uppercase">MANI</span>
      </div>

      <div className="font-serif-heading text-2xl sm:text-4xl md:text-5xl text-center max-w-2xl leading-tight">
        <span className="font-serif-italic">{text}</span>
        <span className="w-1 h-[0.9em] bg-cream-logo inline-block ml-1 animate-pulse"></span>
      </div>

      <div className="absolute bottom-10 text-[10px] tracking-widest uppercase text-sage-grey">
        EMOTIONAL SUPPORT MADE SIMPLE
      </div>
    </div>
  );
}
