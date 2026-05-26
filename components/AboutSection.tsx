"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck, FaMapMarkerAlt } from "react-icons/fa";

const values = [
  "Straightforward communication",
  "Clean, dependable work",
  "Respect for your home",
  "Projects handled without the hassle",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--card)] px-5 py-24 text-[var(--dark-text)] md:px-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,17,24,.04),transparent_45%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-black/10 bg-[var(--bg)] shadow-[0_24px_80px_rgba(0,0,0,.16)]">
            <Image
              src="/images/about-work.jpg"
              alt="DW's Home Improvements project work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/10 bg-black/45 p-5 text-white backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent)] text-[var(--bg)]">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="font-heading text-2xl font-extrabold uppercase leading-none">
                    Sherman & Denison
                  </p>
                  <p className="mt-1 text-sm text-white/62">
                    Local home improvement service
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 -top-4 hidden rounded-[1.5rem] bg-[var(--accent)] px-6 py-5 text-[var(--bg)] shadow-[0_18px_55px_rgba(0,0,0,.2)] md:block">
            <p className="font-heading text-4xl font-extrabold uppercase leading-none">
              Local
            </p>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em]">
              reliable help
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[var(--accent-dark)]">
            About DW&apos;s
          </p>

          <h2 className="font-heading mt-4 text-5xl font-extrabold uppercase leading-none md:text-7xl">
            Reliable help for the projects around your home.
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            DW&apos;s Home Improvements is a locally based home improvement
            service helping homeowners with repairs, updates, maintenance, and
            small improvement projects around the house.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            The goal is simple: show up, communicate clearly, and do work
            homeowners can feel good about. Whether it&apos;s a quick repair or
            a list of projects that need knocked out, DW&apos;s helps make home
            upkeep easier.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,.06)]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--accent)]/18 text-[var(--accent-dark)]">
                  <FaCheck className="text-sm" />
                </span>
                <span className="text-sm font-extrabold text-black/70">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}