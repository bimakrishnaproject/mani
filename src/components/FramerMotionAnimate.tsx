"use client";

import React from "react";
import { motion } from "framer-motion";

interface FramerMotionAnimateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "fade" | "scale" | "blur";
  duration?: number;
  autoFloat?: boolean;
}

export default function FramerMotionAnimate({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  autoFloat = false,
}: FramerMotionAnimateProps) {
  const getInitialState = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 45, scale: 0.96, filter: "blur(8px)" };
      case "scale":
        return { opacity: 0, scale: 0.88, filter: "blur(10px)" };
      case "blur":
        return { opacity: 0, filter: "blur(12px)" };
      case "fade":
      default:
        return { opacity: 0, y: 20 };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom Apple/GSAP smooth curve
      }}
      animate={
        autoFloat
          ? {
              y: [0, -10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay + 0.8,
              },
            }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
