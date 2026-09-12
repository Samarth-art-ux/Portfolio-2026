"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CinematicPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Non-linear realistic progress animation
    const startTime = performance.now();
    const duration = 1200; // 1.2s counter

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      // Quad ease-out
      const eased = 1 - Math.pow(1 - rawProgress, 3);
      const currentVal = Math.round(eased * 100);

      setProgress(currentVal);

      if (rawProgress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Hold briefly at 100% then trigger curtain slide-up
        setTimeout(() => {
          setIsExiting(true);
        }, 150);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (isRemoved) return null;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ y: 0 }}
      animate={isExiting ? { y: "-100%" } : { y: 0 }}
      transition={{
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        if (isExiting) {
          setIsRemoved(true);
          onComplete?.();
        }
      }}
      className="fixed inset-0 z-[999999] flex flex-col justify-between bg-zinc-950 text-white p-8 sm:p-14 select-none overflow-hidden"
    >
      {/* Top Bar: Initial Details */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          SM // PORTFOLIO 2026
        </span>
        <span className="text-zinc-500 hidden sm:inline-block">
          WALCHAND COLLEGE OF ENGINEERING
        </span>
      </div>

      {/* Center: Hero Minimalist Percentage Counter */}
      <div className="flex flex-col items-center justify-center my-auto">
        <div className="flex items-baseline font-mono font-bold tracking-tighter">
          <span className="text-7xl sm:text-9xl md:text-[11rem] bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent tabular-nums drop-shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            {progress}
          </span>
          <span className="text-3xl sm:text-5xl md:text-6xl text-cyan-400 ml-2 font-light">
            %
          </span>
        </div>

        {/* Minimalist Micro Progress Bar */}
        <div className="w-48 sm:w-64 h-[2px] bg-zinc-800/80 rounded-full overflow-hidden mt-6">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Bar: Loading Status */}
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span>INITIALIZING NEURAL CANVAS &amp; ASSETS</span>
        <span>M.TECH CSE • APPLIED AI</span>
      </div>
    </motion.div>
  );
}
