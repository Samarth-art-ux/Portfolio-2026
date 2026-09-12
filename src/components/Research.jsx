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
    venue: "Presented at ICRTET 2026",
    role: "Lead Author & Presenter",
    year: "2026",
    type: "Conference Paper",
    domain: "Computer Vision & Deep Learning",
    contribution:
      "Authored a comprehensive review paper on the architectural evolution of deep learning models in computer vision, evaluating layer structures in LeNet-5 and the real-time detection capabilities of YOLO architectures.",
    keyTakeaways: [
      "Comparative analysis of classical layer structures (LeNet-5) vs. modern single-stage detectors (YOLO).",
      "Benchmarked trade-offs between inference latency, computational throughput, and detection accuracy.",
      "Synthesized architectural shifts driving real-time edge computer vision applications.",
    ],
  },
  {
    id: "digital-health-cybersecurity",
    title: "Cybersecurity Strategies for Digital Health Security",
    venue: "Specialized Medical Cybersecurity Volume",
    role: "Book Chapter Contributor",
    year: "2025–2026",
    type: "Book Chapter",
    domain: "Healthcare Cybersecurity & Data Governance",
    contribution:
      "Authored a specialized chapter focusing on securing modern healthcare infrastructure, detailing threat mitigation strategies and data protection protocols.",
    keyTakeaways: [
      "Formulated threat mitigation blueprints for IoMT (Internet of Medical Things) devices and hospital networks.",
      "Designed compliant patient data protection protocols aligning with global healthcare data standards.",
      "Identified proactive intrusion detection and resilient data recovery architectures for clinical systems.",
    ],
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
              Scholarly contributions spanning deep learning architectures, object recognition benchmarks, and healthcare infrastructure security.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Research Timeline Structure */}
      <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
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
              {/* Meta Tags Row */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 backdrop-blur-sm">
                  <Award className="w-3.5 h-3.5" />
                  {item.role}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-white/50 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-white/30 dark:border-white/10">
                  <FileText className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                  {item.type}
                </span>

                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.venue}
                </span>
              </div>

              {/* Bold Publication Title */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200">
                {item.title}
              </h3>

              {/* Research Narrative Description */}
              <div className="my-4">
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
                  {item.contribution}
                </p>
              </div>

              {/* Key Contributions & Analysis Highlights */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-2">
                  Key Focus &amp; Methodology:
                </span>
                {item.keyTakeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500/80 dark:text-cyan-400/80 mt-0.5 flex-shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
}
