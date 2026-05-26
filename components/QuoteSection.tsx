"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheck, FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const points = [
  "Send project details and photos",
  "Get a straightforward estimate",
  "Schedule the work without the hassle",
];

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--card)] px-5 py-24 text-[var(--dark-text)] md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,132,63,.22),transparent_36%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[var(--accent-dark)]">
            Easy Quotes
          </p>

          <h2 className="font-heading mt-4 text-5xl font-extrabold uppercase leading-none md:text-7xl">
            Quality work without the runaround.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
            Need something repaired, updated, installed, or cleaned up around
            the house? Send over a few details and photos of the project and
            we&apos;ll get back with a straightforward quote.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--accent)] text-sm text-[var(--bg)]">
                  <FaCheck />
                </span>
                <span className="font-bold text-black/72">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--bg)] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-[var(--accent-dark)]"
            >
              Request a Quote
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:+10000000000"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-[var(--bg)] transition hover:-translate-y-1 hover:border-[var(--accent-dark)] hover:text-[var(--accent-dark)]"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_24px_70px_rgba(0,0,0,.14)]"
        >
          <div className="rounded-[1.5rem] bg-[var(--bg)] p-7 text-white">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--accent)]">
              Why Homeowners Call
            </p>

            <h3 className="font-heading mt-4 text-4xl font-extrabold uppercase leading-none">
              Small projects deserve good work too.
            </h3>

            <p className="mt-5 leading-7 text-white/65">
              Not every project needs a big contractor or a drawn-out process.
              DW&apos;s Home Improvements is built for homeowners who need
              dependable help, clear communication, and clean work on everyday
              home projects.
            </p>

            <div className="mt-7 grid gap-3">
              {[
                "Clear communication",
                "Clean finished work",
                "Respect for your home",
                "Local, friendly service",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}