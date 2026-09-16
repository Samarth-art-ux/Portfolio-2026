"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import TracingBeam from "@/components/TracingBeam";
import TextReveal from "@/components/TextReveal";
import MaskedHeader from "@/components/MaskedHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative z-10 overflow-x-clip">
      {/* Sticky Responsive Header with Theme Toggle */}
      <Navbar />

      {/* Main Single-Page Portfolio Container Wrapped in Tracing Beam */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8">
        <TracingBeam>
          {/* Hero Section with 3D Canvas, Typewriter, Tilt */}
          <Hero />

          {/* About Section with Frosted Glass Education Cards */}
          <section id="about" className="py-24 sm:py-32 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-3 mb-12">
              <TextReveal
                text="01 // About"
                as="span"
                className="text-xs font-mono tracking-widest text-cyan-500 dark:text-cyan-400 uppercase"
              />
              <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1 max-w-xs" />
            </div>

            <MaskedHeader
              text="About Me"
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white cursor-default mb-8"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-6 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  M.Tech Computer Science and Engineering student at Walchand College of Engineering, Sangli. Specializing in full-stack development, AI/Computer Vision, high-performance computing, and data analytics.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-base">
                  I build robust applications and design data pipelines to translate complex datasets into actionable business insights.
                </p>
              </div>

              {/* Education Cards with Frosted Glass & Neon Spotlight */}
              <div className="lg:col-span-5 flex flex-col space-y-4">
                <MaskedHeader
                  text="Education"
                  as="h3"
                  className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2"
                />

                <SpotlightCard
                  spotlightColor="rgba(6, 182, 212, 0.2)"
                  spotlightSize={350}
                  className="p-6 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200 font-semibold text-sm group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    <GraduationCap className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                    <span>M.Tech - Computer Science &amp; Engineering</span>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                    Walchand College of Engineering, Sangli
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/60 dark:bg-zinc-800/60 border border-white/20 dark:border-white/10 w-fit">
                    2024 – 2026
                  </span>
                </SpotlightCard>

                <SpotlightCard
                  spotlightColor="rgba(168, 85, 247, 0.2)"
                  spotlightSize={350}
                  className="p-6 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 hover:border-purple-400/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200 font-semibold text-sm group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    <GraduationCap className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                    <span>B.Tech - Computer Science &amp; Technology</span>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                    Shivaji University, Kolhapur
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/60 dark:bg-zinc-800/60 border border-white/20 dark:border-white/10 w-fit">
                    2020 – 2024
                  </span>
                </SpotlightCard>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <Projects />

          {/* Research & Publications Section */}
          <Research />

          {/* Skills & Technical Arsenal Section */}
          <Skills />
        </TracingBeam>
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}
