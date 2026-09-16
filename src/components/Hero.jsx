"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Download, Check } from "lucide-react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import MagneticButton from "@/components/MagneticButton";

const Hero3DCanvas = dynamic(() => import("@/components/Hero3DCanvas"), {
  ssr: false,
});

export default function Hero({
  name = "Samarth Santosh Madale",
  aboutText = "M.Tech Computer Science and Engineering student at Walchand College of Engineering, Sangli. Specializing in full-stack development, AI/Computer Vision, high-performance computing, and data analytics. I build robust applications and design data pipelines to translate complex datasets into actionable business insights.",
  resumeUrl = "/resume.pdf",
}) {
  const [downloaded, setDownloaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchOrNarrow =
        window.innerWidth < 768 ||
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
      setIsMobile(Boolean(isTouchOrNarrow));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDownload = async (e) => {
    e.preventDefault();
    setDownloaded(true);

    try {
      const response = await fetch("/resume.pdf");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Samarth_Madale_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Direct download error:", err);
      window.open("/resume.pdf", "_blank");
    }

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative pt-20 pb-24 md:pt-28 md:pb-36 border-b border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden will-change-transform will-change-opacity transform-gpu"
    >
      {/* 3D Neural Network / HPC Canvas */}
      <Hero3DCanvas />

      {/* Subtle Background Glow Accent */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-purple-500/10 to-transparent blur-3xl opacity-50 dark:opacity-30"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left / Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start will-change-transform will-change-opacity transform-gpu"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/60 dark:bg-zinc-900/70 border border-white/30 dark:border-white/10 text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-6 shadow-xs backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>Walchand College of Engineering • M.Tech CSE</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 dark:text-white hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors duration-200 cursor-default leading-[1.1] mb-3">
            {name}
          </h1>

          {/* Dynamic Typewriter Title Loop */}
          <div className="h-9 mb-6 flex items-center">
            <span className="text-xl sm:text-2xl font-mono font-semibold bg-gradient-to-r from-cyan-500 via-teal-400 to-purple-500 dark:from-cyan-400 dark:via-teal-300 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.25)]">
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Developer",
                    "Data Analyst",
                    "AI & Computer Vision",
                    "High-Performance Computing",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </div>

          {/* About Summary Paragraph */}
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed max-w-2xl mb-10">
            {aboutText}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* Primary CTA with Magnetic Physics and Purple Glow */}
            <MagneticButton>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-white shadow-sm dark:shadow-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:border-purple-400/50"
              >
                <span className="text-white dark:text-zinc-950 font-semibold">View Projects</span>
                <ArrowDown className="w-4 h-4 text-white dark:text-zinc-950" />
              </a>
            </MagneticButton>

            {/* Secondary CTA with Magnetic Physics and Cyan Glow */}
            <MagneticButton>
              <a
                href="/resume.pdf"
                download="Samarth_Madale_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-white dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-all duration-200 shadow-xs cursor-pointer hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:border-cyan-400/50"
              >
                {downloaded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                    <span>Download Resume</span>
                  </>
                )}
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right / Profile Photo with 3D Parallax Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full will-change-transform will-change-opacity transform-gpu"
        >
          <div className="relative isolate group w-full max-w-md flex items-center justify-center">
            {/* The Breathing Aura: vibrant rotating & pulsing gradient blur */}
            <motion.div
              className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-r from-purple-500 to-cyan-500 blur-2xl sm:blur-3xl -z-10 pointer-events-none"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                rotate: [0, 360],
              }}
              transition={{
                opacity: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              aria-hidden="true"
            />

            <Tilt
              tiltEnable={!isMobile}
              glareEnable={!isMobile}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={2500}
              glareMaxOpacity={0.3}
              glarePosition="all"
              glareBorderRadius="1.5rem"
              className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30 dark:border-white/10 bg-white/20 dark:bg-zinc-900/30 backdrop-blur-md aspect-square cursor-grab active:cursor-grabbing"
            >
              <Image
                src="/profile.jpg"
                alt={name}
                width={600}
                height={600}
                priority
                unoptimized
                className="w-full h-full object-cover object-[center_65%] rounded-2xl sm:rounded-3xl shadow-xl transition-transform duration-300"
              />
            </Tilt>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
