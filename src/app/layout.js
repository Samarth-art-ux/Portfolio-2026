import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AuroraGridBackground from "@/components/AuroraGridBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Samarth Santosh Madale | Portfolio",
  description:
    "Portfolio of Samarth Santosh Madale - Final year M.Tech CSE student at Walchand College of Engineering, specializing in Computer Vision, Applied AI, and High-Performance Parallel Computing.",
  keywords: [
    "Samarth Santosh Madale",
    "Computer Vision",
    "Applied AI",
    "High-Performance Computing",
    "CUDA",
    "Portfolio",
    "Next.js",
    "Walchand College of Engineering",
  ],
  icons: {
    icon: "/profile.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-900 dark:selection:bg-cyan-500/30 dark:selection:text-cyan-100 relative">
        <ThemeProvider>
          <SmoothScroll>
            <ScrollProgressBar />
            <AuroraGridBackground />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
