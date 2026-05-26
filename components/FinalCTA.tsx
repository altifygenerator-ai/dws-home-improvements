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
        className="relative z-10 mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-7 shadow-[0_28px_90px_rgba(0,0,0,.34)] backdrop-blur-md lg:grid-cols-[0.9fr_1.1fr] md:p-12"
      >
        <div className="flex flex-col justify-center">
          <div className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-[var(--accent)] text-2xl text-[var(--bg)] shadow-[0_18px_45px_rgba(184,132,63,.28)]">
            <FaPhoneAlt />
          </div>

          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[var(--accent)]">
            Request A Quote
          </p>

          <h2 className="font-heading mt-4 max-w-3xl text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
            Need help with a project around the house?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Send over a few details about what you need done. Photos help too,
            especially for repairs, home updates, and improvement projects.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
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
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-black/20 p-5 md:p-7">
          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white">
                Name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.07] px-4 text-white outline-none transition placeholder:text-white/35 focus:border-[var(--accent)] focus:bg-white/[0.1]"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-white">
                Phone
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.07] px-4 text-white outline-none transition placeholder:text-white/35 focus:border-[var(--accent)] focus:bg-white/[0.1]"
                  placeholder="Best number to reach you"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-white">
              Project Type
              <select
                name="projectType"
                className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.07] px-4 text-white outline-none transition focus:border-[var(--accent)] focus:bg-white/[0.1]"
                defaultValue=""
              >
                <option value="" disabled className="bg-neutral-950">
                  What do you need help with?
                </option>
                <option className="bg-neutral-950">Home Repair</option>
                <option className="bg-neutral-950">Home Improvement</option>
                <option className="bg-neutral-950">Maintenance</option>
                <option className="bg-neutral-950">Remodel / Update</option>
                <option className="bg-neutral-950">Other</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-white">
              Project Details
              <textarea
                name="message"
                rows={6}
                className="resize-none rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[var(--accent)] focus:bg-white/[0.1]"
                placeholder="Tell us what needs done, where it is located, and any details that would help with the quote."
              />
            </label>

            <button
              type="submit"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-[var(--bg)] shadow-[0_18px_45px_rgba(184,132,63,.24)] transition hover:-translate-y-1 hover:bg-[#d39a52]"
            >
              Send Quote Request
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </button>

            <p className="text-center text-xs leading-5 text-white/45">
              For the fastest response, call or message directly. This form can
              be connected to email when the site is ready to go live.
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
}