"use client";

import { motion } from "framer-motion";

export default function MaskedHeader({
  text,
  as: Component = "h2",
  className = "",
  delay = 0,
}) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: "120%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 22,
        stiffness: 120,
      },
    },
  };

  return (
    <Component className={`flex flex-wrap items-baseline gap-x-2 overflow-hidden ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap items-baseline gap-x-2.5 overflow-hidden py-1"
      >
        {words.map((word, index) => (
          <span key={index} className="overflow-hidden inline-block leading-tight">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
