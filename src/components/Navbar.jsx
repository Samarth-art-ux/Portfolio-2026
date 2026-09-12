"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import MagneticButton from "@/components/MagneticButton";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/50 dark:bg-zinc-950/50 backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-purple-950/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Name with Animated Avatar & Magnetic Pull */}
        <MagneticButton strength={0.25}>
          <Link
            href="#"
            className="group flex items-center gap-3 transition-all duration-200"
            aria-label="Samarth Madale - Home"
          >
            <motion.div
              className="relative w-9 h-9 rounded-lg border border-white/10 shrink-0 overflow-hidden"
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(168,85,247,0)",
                  "0px 0px 10px rgba(168,85,247,0.4)",
                  "0px 0px 0px rgba(168,85,247,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/profile.jpg"
                alt="Samarth Madale"
                width={36}
                height={36}
                className="w-9 h-9 object-cover rounded-lg"
                priority
              />
            </motion.div>
            <span className="font-semibold tracking-tight text-base text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
              Samarth Madale
            </span>
          </Link>
        </MagneticButton>

        {/* Center: Desktop Navigation Links with Frosted Glass Pill & Magnetic Buttons */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/40 dark:bg-zinc-900/40 border border-white/30 dark:border-white/10 rounded-full px-3 py-1.5 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-purple-950/10">
          {NAV_LINKS.map((link) => (
            <MagneticButton key={link.name} strength={0.2}>
              <Link
                href={link.href}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors px-4 py-1.5 rounded-full hover:bg-white/60 dark:hover:bg-zinc-800/60 hover:shadow-[0_0_12px_rgba(34,211,238,0.25)]"
              >
                {link.name}
              </Link>
            </MagneticButton>
          ))}
        </nav>

        {/* Right: Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <MagneticButton strength={0.25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-all shadow-xs hover:shadow-[0_0_18px_rgba(168,85,247,0.5)] hover:border-purple-400/40"
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Actions: Theme Toggle + Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Frosted Glass */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/20 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl px-4 sm:px-6 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-colors hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              >
                Contact
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
