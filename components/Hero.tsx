"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheck, FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const highlights = [
  "Home repairs",
  "Interior updates",
  "Free estimates",
  "Sherman & Denison area",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden border-b border-white/10 bg-[var(--bg)]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(11,17,24,.94) 0%, rgba(11,17,24,.82) 42%, rgba(11,17,24,.38) 100%), url('/images/hero-work.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,132,63,.22),transparent_38%)]" />
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[var(--bg)] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 md:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(184,132,63,.8)]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/75">
              Local home improvement service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="font-heading text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            Reliable Home Improvements in Sherman & Denison
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/74 md:text-xl"
          >
            Fast, friendly home improvement, repairs, and upgrade work you can
            trust. From small fixes to bigger projects, DW&apos;s Home
            Improvements helps homeowners keep their place looking good and
            working right.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-[var(--bg)] shadow-[0_18px_45px_rgba(184,132,63,.3)] transition hover:-translate-y-1 hover:bg-[#d39a52]"
            >
              Get a Free Quote
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:+10000000000"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/8 px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-md"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--accent)]/16 text-[var(--accent)]">
                  <FaCheck className="text-xs" />
                </span>
                <span className="text-sm font-bold text-white/78">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}