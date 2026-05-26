import Link from "next/link";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--bg)] px-5 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
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
            <p className="font-heading text-xl font-extrabold uppercase tracking-wide">
              DW&apos;s
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
              Home Improvements
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold uppercase tracking-[0.16em] text-white/58 transition hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+10000000000"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label="Call DW's Home Improvements"
          >
            <FaPhoneAlt />
          </a>

          <Link
            href="https://www.facebook.com/"
            target="_blank"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label="Visit DW's Home Improvements on Facebook"
          >
            <FaFacebookF />
          </Link>
        </div>
      </div>

<div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
  <p>
    © <span>{new Date().getFullYear()}</span>{" "}
    <span>DW&apos;s Home Improvements. All rights reserved.</span>
  </p>

  <p>Sherman, Denison, and nearby North Texas areas.</p>
</div>
    </footer>
  );
}