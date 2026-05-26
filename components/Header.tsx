"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[var(--bg)]/88 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-contain gap-3">
<div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--accent)]/40 bg-[var(--bg-soft)] shadow-[0_0_30px_rgba(184,132,63,0.25)]">
  <Image
    src="/images/about-work.jpg"
    alt="DW's Home Improvements logo"
    fill
    className="scale-[1.32] object-cover"
    priority
  />
</div>

          <div className="leading-none">
            <p className="font-heading text-xl font-extrabold uppercase tracking-wide text-white">
              DW&apos;s
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
              Home Improvements
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold uppercase tracking-[0.16em] text-white/70 transition hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+10000000000"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font800 text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:flex"
          >
            <FaPhoneAlt className="text-[var(--accent)]" />
            Call Now
          </a>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-[var(--bg)] shadow-[0_14px_35px_rgba(184,132,63,0.28)] transition hover:-translate-y-0.5 hover:bg-[#d39a52]"
          >
            Free Quote
            <FaArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}