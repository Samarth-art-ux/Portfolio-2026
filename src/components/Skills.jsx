"use client";

import { motion } from "framer-motion";
import {
  Database,
  Code2,
  Cpu,
  Layers,
  Wrench,
  Check,
} from "lucide-react";
import TextReveal from "@/components/TextReveal";
import MaskedHeader from "@/components/MaskedHeader";
import SpotlightCard from "@/components/SpotlightCard";

export const SKILL_CATEGORIES = [
  {
    id: "data-analytics",
    category: "Data Analytics & Databases",
    icon: Database,
    skills: ["Power BI", "SQL", "Data Visualization", "Database Architecture", "ETL Pipelines"],
  },
  {
    id: "languages-web",
    category: "Languages & Web",
    icon: Code2,
    skills: ["JavaScript", "Python", "C#", "ASP.NET", "Next.js", "HTML/CSS"],
  },
  {
    id: "ai-ml",
    category: "AI & Machine Learning",
    icon: Cpu,
    skills: ["Deep Learning", "Convolutional Neural Networks (LeNet-5, YOLO)", "Soft Computing"],
  },
  {
    id: "hpc-core",
    category: "High-Performance & Core Tech",
    icon: Layers,
    skills: ["CUDA GPU Programming (Parallel computing)", "Unity 3D", "Vuforia Engine SDK"],
  },
  {
    id: "tools",
    category: "Tools",
    icon: Wrench,
    skills: ["Firebase", "Git/GitHub", "LaTeX", "TikZ", "Visual Studio 2022"],
  },
];

export default function Skills({ categories = SKILL_CATEGORIES }) {
  return (
    <section id="skills" className="py-24 sm:py-32">
      {/* Section Header with Staggered Text Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="will-change-transform will-change-opacity transform-gpu"
      >
        <div className="flex items-center gap-3 mb-6">
          <TextReveal
            text="04 // Technical Arsenal"
            as="span"
            className="text-xs font-mono tracking-widest text-purple-500 dark:text-purple-400 uppercase"
          />
          <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <MaskedHeader
              text="Technical Arsenal"
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white cursor-default"
            />
            <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal">
              Technical skillset spanning data analytics, full-stack engineering, AI/ML models, parallel computing, and development tools.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Grid Layout with Frosted Glassmorphism & Neon Hover Glow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          const isPurple = index % 2 === 0;
          return (
            <SpotlightCard
              key={cat.id}
              spotlightColor={isPurple ? "rgba(168, 85, 247, 0.22)" : "rgba(6, 182, 212, 0.22)"}
              spotlightSize={380}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-purple-400/50 dark:hover:border-purple-400/40 shadow-xl hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all duration-300 will-change-transform will-change-opacity transform-gpu"
            >
              <div>
                {/* Category Header with Icon */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-2.5 rounded-2xl bg-white/60 dark:bg-zinc-800/60 border border-white/30 dark:border-white/10 text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-400 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                {/* Technologies List with Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skillName, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white/60 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 border border-white/30 dark:border-white/10 hover:border-purple-400/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.25)] cursor-default transition-all duration-150"
                    >
                      <Check className="w-3 h-3 text-cyan-500 dark:text-cyan-400" />
                      <span>{skillName}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
