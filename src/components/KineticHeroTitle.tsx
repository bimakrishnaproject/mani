"use client";

import React from "react";
import { motion } from "framer-motion";

interface KineticHeroTitleProps {
  titleText: string;
  italicText: string;
}

export default function KineticHeroTitle({
  titleText,
  italicText,
}: KineticHeroTitleProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -45,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="[perspective:1200px]"
    >
      <h1 className="font-serif-heading text-6xl sm:text-8xl md:text-9xl text-deep-green leading-[0.92] tracking-tight mb-8">
        <motion.span variants={wordVariants} className="inline-block mr-4">
          {titleText}
        </motion.span>
        <br />
        <motion.span
          variants={wordVariants}
          className="font-serif-italic inline-block text-deep-green"
        >
          {italicText}
        </motion.span>
      </h1>
    </motion.div>
  );
}
