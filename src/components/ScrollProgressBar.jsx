"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 z-[99999] h-[2px] bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.6)] pointer-events-none"
    />
  );
}
