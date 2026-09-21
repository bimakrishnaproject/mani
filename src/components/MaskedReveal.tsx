"use client";

import React from "react";
import { motion } from "framer-motion";

interface MaskedRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  wrapperClassName?: string;
}

export default function MaskedReveal({
  children,
  delay = 0,
  duration = 0.85,
  className = "",
  wrapperClassName = "",
}: MaskedRevealProps) {
  return (
    <span className={`inline-block overflow-hidden align-top ${wrapperClassName}`}>
      <motion.span
        initial={{ y: "105%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // Editorial Koto cubic-bezier
        }}
        className={`inline-block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}
