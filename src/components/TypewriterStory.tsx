"use client";

import { useState, useEffect } from "react";

interface TypewriterStoryProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypewriterStory({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseDuration = 2200,
  className = "",
}: TypewriterStoryProps) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));

        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => prev + 1);
          return;
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{text}</span>
      <span className="w-0.5 h-[1.1em] bg-deep-green ml-1 animate-pulse font-light"></span>
    </span>
  );
}
