"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Network, ShieldAlert, GitMerge } from "lucide-react";
import TextReveal from "@/components/TextReveal";
import MaskedHeader from "@/components/MaskedHeader";
import SpotlightCard from "@/components/SpotlightCard";

export const PROJECTS_DATA = [
  {
    id: "smart-maze-solver",
    title: "Smart Maze Solver",
    subtitle: "Real-Time Algorithm Visualizer",
    category: "Full-Stack & Algorithms",
    tech: ["Python", "FastAPI", "JavaScript", "Graph Algorithms"],
    details:
      "Engineered a full-stack web application visualizing pathfinding algorithms in real-time, utilizing a high-performance Python backend for graph processing and a dynamic JavaScript frontend.",
  },
  {
    id: "alumni-sphere",
    title: "Alumni Sphere",
    subtitle: "Professional Networking Platform",
    category: "Web Platform",
    tech: ["ASP.NET", "Firebase", "Database Management", "UI/UX Design"],
    details:
      "Architected a comprehensive networking portal bridging students and alumni to facilitate mentorship. Implemented a robust database architecture for real-time data management and user authentication.",
  },
  {
    id: "healthcare-operations",
    title: "Healthcare Operations & Threat Monitoring Dashboard",
    subtitle: "Cybersecurity & Hospital KPI Analytics",
    category: "Data Analytics",
    tech: ["SQL", "Power BI", "Data Modeling", "Cybersecurity Analytics"],
    details:
      "Engineered an analytics dashboard mapping hospital resource utilization and network security incidents. Processed 50,000+ records using SQL CTEs and Window Functions, designing an interactive Power BI interface with risk heatmaps and real-time operational KPIs.",
  },
  {
    id: "alumni-placement",
    title: "Alumni Placement & Trajectory Analytics",
    subtitle: "End-to-End ETL Data Pipeline",
    category: "ETL & Visualization",
    tech: ["Power BI", "SQL Server", "ETL Pipeline", "Data Visualization"],
    details:
      "Developed an end-to-end data pipeline to analyze university graduate career progressions. Executed complex SQL joins and data normalization techniques to clean employment records, visualizing the outcomes via Sankey diagrams and skill-demand correlations.",
  },
];

export default function Projects({ projects = PROJECTS_DATA }) {
  const mazeProject = projects.find((p) => p.id === "smart-maze-solver") || projects[0];
  const alumniSphere = projects.find((p) => p.id === "alumni-sphere") || projects[1];
  const healthcare = projects.find((p) => p.id === "healthcare-operations") || projects[2];
  const alumniPlacement = projects.find((p) => p.id === "alumni-placement") || projects[3];

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-zinc-200/80 dark:border-zinc-800/80">
      {/* Section Header with Staggered Text Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3 mb-6">
          <TextReveal
            text="01 // Projects"
            as="span"
            className="text-xs font-mono tracking-widest text-cyan-500 dark:text-cyan-400 uppercase"
          />
          <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1 max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <MaskedHeader
              text="Featured Projects"
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white cursor-default"
            />
            <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal">
              Selected engineering works spanning real-time full-stack applications, distributed data pipelines, and analytics dashboards.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Uniform Responsive 2-Column Grid Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PROJECT CARD 1: Smart Maze Solver */}
        {mazeProject && (
          <SpotlightCard
            as="article"
            spotlightColor="rgba(168, 85, 247, 0.22)"
            spotlightSize={420}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="flex flex-col justify-between h-full p-8 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-purple-500/40 dark:hover:border-purple-400/50 shadow-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 group will-change-transform will-change-opacity transform-gpu"
          >
            {/* Ambient Background Gradient Glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />

            <div className="flex-1 flex flex-col">
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono tracking-wider uppercase text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                  {mazeProject.category}
                </span>
                <div className="p-2 rounded-full bg-white/60 dark:bg-zinc-800/60 border border-white/20 dark:border-white/10 text-zinc-500 dark:text-zinc-400 group-hover:text-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                {mazeProject.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1 mb-4">
                {mazeProject.subtitle}
              </p>

              {/* Architecture Badge */}
              <div className="p-3.5 mb-4 rounded-xl border border-white/20 dark:border-white/10 bg-zinc-950/70 text-xs font-mono text-zinc-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  Real-Time Algorithm Engine
                </span>
                <span className="text-purple-400">FastAPI • Python</span>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {mazeProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-white/30 dark:border-white/10 shadow-2xs hover:border-purple-400/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.25)] transition-all cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Details */}
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal flex-1">
                {mazeProject.details}
              </p>
            </div>
          </SpotlightCard>
        )}

        {/* PROJECT CARD 2: Alumni Sphere */}
        {alumniSphere && (
          <SpotlightCard
            as="article"
            spotlightColor="rgba(6, 182, 212, 0.22)"
            spotlightSize={420}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="flex flex-col justify-between h-full p-8 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-cyan-400/50 dark:hover:border-cyan-400/40 shadow-xl hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300 group will-change-transform will-change-opacity transform-gpu"
          >
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono tracking-wider uppercase text-cyan-600 dark:text-cyan-300 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                  {alumniSphere.category}
                </span>
                <div className="p-2 rounded-full bg-white/60 dark:bg-zinc-800/60 border border-white/20 dark:border-white/10 text-zinc-500 dark:text-zinc-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                {alumniSphere.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1 mb-4">
                {alumniSphere.subtitle}
              </p>

              {/* Portal Architecture Badge */}
              <div className="p-3.5 mb-4 rounded-xl border border-white/20 dark:border-white/10 bg-zinc-950/70 text-xs font-mono text-zinc-300 flex items-center gap-3">
                <Network className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mentorship Mesh &amp; Firebase Auth Sync</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {alumniSphere.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-white/30 dark:border-white/10 hover:border-cyan-400/40 transition-all cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal flex-1">
                {alumniSphere.details}
              </p>
            </div>
          </SpotlightCard>
        )}

        {/* PROJECT CARD 3: Healthcare Operations & Threat Monitoring */}
        {healthcare && (
          <SpotlightCard
            as="article"
            spotlightColor="rgba(168, 85, 247, 0.22)"
            spotlightSize={420}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="flex flex-col justify-between h-full p-8 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-purple-400/50 dark:hover:border-purple-400/40 shadow-xl hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 group will-change-transform will-change-opacity transform-gpu"
          >
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -top-16 -left-16 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />

            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono tracking-wider uppercase text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                  {healthcare.category}
                </span>
                <div className="p-2 rounded-full bg-white/60 dark:bg-zinc-800/60 border border-white/20 dark:border-white/10 text-zinc-500 dark:text-zinc-400 group-hover:text-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                {healthcare.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1 mb-4">
                {healthcare.subtitle}
              </p>

              <div className="p-3.5 mb-4 rounded-xl border border-white/20 dark:border-white/10 bg-zinc-950/70 text-xs font-mono text-zinc-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-purple-400 shrink-0" />
                  50,000+ Records Analyzed
                </span>
                <span className="text-emerald-400">CTEs • Window Func</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {healthcare.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-white/30 dark:border-white/10 hover:border-purple-400/40 transition-all cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal flex-1">
                {healthcare.details}
              </p>
            </div>
          </SpotlightCard>
        )}

        {/* PROJECT CARD 4: Alumni Placement & Trajectory */}
        {alumniPlacement && (
          <SpotlightCard
            as="article"
            spotlightColor="rgba(6, 182, 212, 0.22)"
            spotlightSize={420}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="flex flex-col justify-between h-full p-8 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-cyan-400/50 dark:hover:border-cyan-400/40 shadow-xl hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300 group will-change-transform will-change-opacity transform-gpu"
          >
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono tracking-wider uppercase text-cyan-600 dark:text-cyan-300 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                  {alumniPlacement.category}
                </span>
                <div className="p-2 rounded-full bg-white/60 dark:bg-zinc-800/60 border border-white/20 dark:border-white/10 text-zinc-500 dark:text-zinc-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                {alumniPlacement.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1 mb-4">
                {alumniPlacement.subtitle}
              </p>

              <div className="p-3.5 mb-4 rounded-xl border border-white/20 dark:border-white/10 bg-zinc-950/70 text-xs font-mono text-zinc-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <GitMerge className="w-4 h-4 text-cyan-400 shrink-0" />
                  Sankey Career Trajectory
                </span>
                <span className="text-cyan-400">Power BI ETL Pipeline</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {alumniPlacement.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-white/30 dark:border-white/10 hover:border-cyan-400/40 transition-all cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal flex-1">
                {alumniPlacement.details}
              </p>
            </div>
          </SpotlightCard>
        )}
      </div>
    </section>
  );
}
