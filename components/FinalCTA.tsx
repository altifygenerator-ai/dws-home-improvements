"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--bg)] px-5 py-24 md:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,132,63,.18),transparent_44%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-7 text-center shadow-[0_28px_90px_rgba(0,0,0,.34)] backdrop-blur-md md:p-12"
      >
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[var(--accent)] text-2xl text-[var(--bg)] shadow-[0_18px_45px_rgba(184,132,63,.28)]">
          <FaPhoneAlt />
        </div>

        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[var(--accent)]">
          Ready To Get Started?
        </p>

        <h2 className="font-heading mx-auto mt-4 max-w-4xl text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
          Need help with a project around the house?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
          Send over a few details and photos of what you need done, and
          DW&apos;s Home Improvements will get back with a straightforward quote.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:+10000000000"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-[var(--bg)] shadow-[0_18px_45px_rgba(184,132,63,.28)] transition hover:-translate-y-1 hover:bg-[#d39a52]"
          >
            Call Now
            <FaArrowRight className="transition group-hover:translate-x-1" />
          </a>

          <Link
            href="https://www.facebook.com/"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FaFacebookF />
            Message on Facebook
          </Link>
        </div>
      </motion.div>
    </section>
  );
}