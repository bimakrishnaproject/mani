"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 bg-cream-logo z-[110] origin-left shadow-[0_0_10px_rgba(244,233,215,0.8)]"
    />
  );
}
