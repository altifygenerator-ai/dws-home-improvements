import { FaPhoneAlt } from "react-icons/fa";

export default function StickyCallButton() {
  return (
    <a
      href="tel:+1XXXXXXXXXX"
      className="sticky-call-button fixed bottom-6 right-6 z-[99999] grid h-16 w-16 place-items-center rounded-full bg-[var(--accent)] text-black shadow-[0_18px_50px_rgba(0,0,0,.45)] ring-4 ring-white/20 transition hover:scale-105"
      aria-label="Call DW's Home Improvements"
    >
      <span className="sticky-call-pulse" />
      <FaPhoneAlt className="relative z-10 text-xl" />
    </a>
  );
}