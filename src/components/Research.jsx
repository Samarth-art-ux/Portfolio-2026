"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Award, FileText, CheckCircle2 } from "lucide-react";
import TextReveal from "@/components/TextReveal";
import MaskedHeader from "@/components/MaskedHeader";
import SpotlightCard from "@/components/SpotlightCard";

export const RESEARCH_DATA = [
  {
    id: "icrtet-2026-vision",
    title: "The Vision to Action: AI’s Evolution for Object Recognition",
    status: "Presented at ICRTET 2026",
    details:
      "Authored a comprehensive review paper on the architectural evolution of deep learning models in computer vision, evaluating layer structures in LeNet-5 and the real-time detection capabilities of YOLO architectures.",
  },
  {
    id: "digital-health-cybersecurity",
    title: "Cybersecurity Strategies for Digital Health Security",
    status: "Book Chapter Contributor",
    details:
      "Authored a specialized chapter focusing on securing modern healthcare infrastructure, detailing threat mitigation strategies and data protection protocols.",
  },
];

export default function Research({ research = RESEARCH_DATA }) {
  return (
    <section id="research" className="py-24 sm:py-32 border-b border-zinc-200/80 dark:border-zinc-800/80">
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
            text="03 // Research & Publications"
            as="span"
            className="text-xs font-mono tracking-widest text-cyan-500 dark:text-cyan-400 uppercase"
          />
          <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1 max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <MaskedHeader
              text="Research &amp; Publications"
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white cursor-default"
            />
            <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal">
              Scholarly contributions spanning deep learning architectures and healthcare infrastructure security.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Research Timeline Structure */}
      <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-8">
        {research.map((item, index) => (
          <div key={item.id} className="relative group">
            {/* Timeline node pin with Neon Glow */}
            <div
              className="absolute -left-[31px] sm:-left-[47px] top-8 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-400 dark:border-zinc-600 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_#22d3ee] group-hover:scale-110 transition-all duration-200 z-20"
              aria-hidden="true"
            />

            <SpotlightCard
              as="article"
              spotlightColor={index % 2 === 0 ? "rgba(6, 182, 212, 0.2)" : "rgba(168, 85, 247, 0.2)"}
              spotlightSize={400}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="flex flex-col p-6 sm:p-8 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-cyan-400/50 dark:hover:border-cyan-400/40 shadow-xl hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300 will-change-transform will-change-opacity transform-gpu"
            >
              {/* Status Tag */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 backdrop-blur-sm">
                  <BookOpen className="w-3.5 h-3.5" />
                  {item.status}
                </span>
              </div>

              {/* Publication Title */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200">
                {item.title}
              </h3>

              {/* Research Narrative Description */}
              <div className="mt-2">
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
                  {item.details}
                </p>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
}
