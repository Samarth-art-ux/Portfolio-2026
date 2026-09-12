"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function TracingBeam({ children, className = "" }) {
  const containerRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateHeight = () => {
      if (containerRef.current) {
        setSvgHeight(containerRef.current.offsetHeight);
      }
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const y1 = useTransform(smoothProgress, [0, 1], [40, svgHeight - 60]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, svgHeight - 100]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Left-side Glowing Tracing Beam Container */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 sm:-left-8 lg:-left-12 top-0 bottom-0 hidden md:block w-10 z-30"
      >
        {/* Glow Bead Following Scroll */}
        <motion.div
          style={{ top: y1 }}
          className="absolute left-[15px] -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee,0_0_30px_#a855f7] border-2 border-white dark:border-zinc-950 transition-transform duration-75"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-300 animate-ping opacity-75" />
        </motion.div>

        {/* SVG Rail and Glowing Trail */}
        <svg
          viewBox={`0 0 30 ${svgHeight || 1000}`}
          width="30"
          height={svgHeight || "100%"}
          className="w-full block"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse" x1="0" y1={y2} x2="0" y2={y1}>
              <stop stopColor="#a855f7" stopOpacity="0" />
              <stop offset="0.7" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="1" stopColor="#22d3ee" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Background Track Rail */}
          <line
            x1="15"
            y1="20"
            x2="15"
            y2={svgHeight - 40}
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="1.5"
            className="text-zinc-400 dark:text-zinc-600"
          />

          {/* Active Illuminated Tracing Beam with GPU CSS drop-shadow */}
          <motion.line
            x1="15"
            y1="20"
            x2="15"
            y2={y1}
            stroke="url(#beam-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="[filter:drop-shadow(0_0_4px_#22d3ee)]"
          />
        </svg>
      </div>

      {/* Main Content Pass-Through */}
      <div className="w-full">{children}</div>
    </div>
  );
}
