"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

export default function SpotlightCard({
  children,
  as = "div",
  className = "",
  spotlightColor = "rgba(168, 85, 247, 0.18)",
  spotlightSize = 400,
  onMouseMove,
  ...props
}) {
  const cardRef = useRef(null);
  const spotlightRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      if (cardRef.current && spotlightRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlightRef.current.style.setProperty("--mouse-x", `${x}px`);
        spotlightRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
      onMouseMove?.(e);
    },
    [onMouseMove]
  );

  const MotionComponent = as === "article" ? motion.article : motion.div;

  return (
    <MotionComponent
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Gradient - 100% GPU accelerated via CSS variables, ZERO React re-renders */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(${spotlightSize}px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </MotionComponent>
  );
}
