import { Mail, ArrowUp } from "lucide-react";
import MaskedHeader from "@/components/MaskedHeader";
import SpotlightCard from "@/components/SpotlightCard";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34Z" />
    </svg>
  );
}

export default function Footer({
  githubUrl = "https://github.com/Samarth-art-ux",
  linkedinUrl = "https://www.linkedin.com/in/samarth-madale-40a862241/",
  email = "samarthmadale18@gmail.com",
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-950/60 text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
        <SpotlightCard
          spotlightColor="rgba(34, 211, 238, 0.18)"
          spotlightSize={450}
          className="p-8 sm:p-12 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl mb-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <MaskedHeader
                text="Let's build something together."
                as="h2"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 cursor-default"
              />
              <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-lg">
                Available for full-stack engineering, data analytics, and AI/ML initiatives. Reach out to collaborate or discuss ideas.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-100 text-sm font-medium text-zinc-700 dark:text-zinc-300 shadow-xs transition-all duration-200 group"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                <span>GitHub</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-100 text-sm font-medium text-zinc-700 dark:text-zinc-300 shadow-xs transition-all duration-200 group"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-100 text-sm font-medium text-zinc-700 dark:text-zinc-300 shadow-xs transition-all duration-200 group"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </SpotlightCard>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>
            © {currentYear} Samarth Santosh Madale. Designed &amp; built with modern minimalism.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px]">
              Walchand College of Engineering
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
