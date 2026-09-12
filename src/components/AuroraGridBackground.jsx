"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function AuroraGridBackground() {
  const [hasMouse, setHasMouse] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Ultra-smooth spring physics for cursor tracking
  const springConfig = { damping: 25, stiffness: 180, mass: 0.2 };
  const mouseSpringX = useSpring(mouseX, springConfig);
  const mouseSpringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setHasMouse(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Mask that smoothly illuminates the grid lines directly under the mouse
  const spotlightMask = useMotionTemplate`radial-gradient(320px circle at ${mouseSpringX}px ${mouseSpringY}px, black 0%, transparent 100%)`;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Aurora Mesh Layer (Layered beneath the grid) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orb 1: Soft Violet / Purple */}
        <motion.div
          animate={{
            x: [0, 90, -70, 0],
            y: [0, -110, 70, 0],
            scale: [1, 1.18, 0.92, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute -top-24 -left-20 w-[600px] h-[600px] rounded-full bg-purple-600/20 dark:bg-purple-600/30 blur-[120px] opacity-75 will-change-transform transform-gpu"
        />

        {/* Orb 2: Vibrant Cyan / Turquoise */}
        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 90, -80, 0],
            scale: [1, 0.88, 1.2, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -right-24 w-[650px] h-[650px] rounded-full bg-cyan-500/20 dark:bg-cyan-500/30 blur-[130px] opacity-70 will-change-transform transform-gpu"
        />

        {/* Orb 3: Deep Royal Blue */}
        <motion.div
          animate={{
            x: [0, 110, -90, 0],
            y: [0, 70, -100, 0],
            scale: [0.92, 1.15, 1, 0.92],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute -bottom-28 left-1/4 w-[550px] h-[550px] rounded-full bg-blue-600/20 dark:bg-blue-600/25 blur-[120px] opacity-65 will-change-transform transform-gpu"
        />

        {/* Orb 4: Electric Fuchsia / Indigo Accent */}
        <motion.div
          animate={{
            x: [0, -80, 100, 0],
            y: [0, -90, 60, 0],
            scale: [1.12, 0.9, 1.1, 1.12],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-2/3 right-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-600/15 dark:bg-indigo-600/20 blur-[120px] opacity-60 will-change-transform transform-gpu"
        />
      </div>

      {/* 2. Base Repeating SVG Grid Pattern (Subtle ~5% Opacity) */}
      <svg
        className="absolute inset-0 w-full h-full stroke-zinc-900/[0.06] dark:stroke-white/[0.05]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="base-svg-grid"
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 44 0 L 0 0 0 44"
              fill="none"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#base-svg-grid)" />
      </svg>

      {/* 3. Mouse Spotlight: Soft Radial Gradient Glow (600px wide) */}
      {hasMouse && (
        <>
          <motion.div
            style={{
              x: mouseSpringX,
              y: mouseSpringY,
            }}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-70 dark:opacity-55"
          >
            <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22)_0%,rgba(168,85,247,0.12)_40%,transparent_70%)] blur-xl" />
          </motion.div>

          {/* 4. Illuminated SVG Grid Layer under Cursor */}
          <motion.div
            style={{
              WebkitMaskImage: spotlightMask,
              maskImage: spotlightMask,
            }}
            className="absolute inset-0"
          >
            <svg
              className="w-full h-full stroke-cyan-500/45 dark:stroke-cyan-400/50"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <rect width="100%" height="100%" fill="url(#base-svg-grid)" />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  );
}
