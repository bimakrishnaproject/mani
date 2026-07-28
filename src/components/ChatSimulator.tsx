"use client";

import { useState, useEffect } from "react";

interface Message {
  sender: "user" | "mani";
  text: string;
}

export default function ChatSimulator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "user",
      text: "I'm feeling completely drained by this situation, but I don't know how to set a boundary without feeling guilty.",
    },
    {
      sender: "mani",
      text: "Guilt is often just your brain misinterpreting self-protection as selfishness. Let's look at what boundary you actually need right now.",
    },
  ]);

  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setTyping(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "user",
          text: "Is it normal to feel like I need time alone after social events?",
        },
      ]);
    }, 4500);

    const timer3 = setTimeout(() => {
      setTyping(true);
    }, 6000);

    const timer4 = setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "mani",
          text: "Completely normal. That is your energy system signalling a need for quiet focus and integration.",
        },
      ]);
    }, 8500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="bg-soft-white border border-mist-grey rounded-xl p-4 h-[240px] flex flex-col justify-between overflow-y-auto">
      <div className="text-[9px] text-sage-grey text-center mb-1 font-semibold uppercase tracking-wider">
        Today 9:41 AM
      </div>

      <div className="flex flex-col gap-2.5 text-xs">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2.5 rounded-xl max-w-[90%] leading-relaxed animate-fade-in ${
              msg.sender === "user"
                ? "bg-mist-grey text-ink-black self-end rounded-br-xs"
                : "bg-deep-green text-editorial-white self-start rounded-bl-xs flex gap-2 items-start"
            }`}
          >
            {msg.sender === "mani" && (
              <div className="shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#F7ECD6" strokeWidth="1.5" />
                  <circle cx="8" cy="8" r="3" fill="#F7ECD6" />
                </svg>
              </div>
            )}
            <div>{msg.text}</div>
          </div>
        ))}

        {typing && (
          <div className="self-start bg-deep-green/10 text-deep-green px-3 py-2 rounded-xl flex items-center gap-1.5 w-fit">
            <span className="w-1.5 h-1.5 bg-deep-green rounded-full typing-dot"></span>
            <span className="w-1.5 h-1.5 bg-deep-green rounded-full typing-dot"></span>
            <span className="w-1.5 h-1.5 bg-deep-green rounded-full typing-dot"></span>
          </div>
        )}
      </div>
    </div>
  );
}
