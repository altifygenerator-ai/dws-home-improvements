"use client";

import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaTools } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const items = [
  {
    icon: FaMapMarkerAlt,
    title: "Local Service",
    text: "Serving Sherman, Denison, and nearby North Texas areas.",
  },
  {
    icon: FaCheck,
    title: "Free Estimates",
    text: "Send project details and photos for a straightforward quote.",
  },
  {
    icon: FaTools,
    title: "Repairs & Updates",
    text: "Small fixes, home upgrades, maintenance, and improvement work.",
  },
  {
    icon: FaClock,
    title: "Easy Scheduling",
    text: "Simple communication and dependable service from start to finish.",
  },
];

export default function TrustBar() {
  return (
    <section className="relative z-20 -mt-16 px-5 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-white/10 bg-[var(--bg-soft)] p-4 shadow-[0_24px_80px_rgba(0,0,0,.3)] md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-[var(--accent)] text-[var(--bg)] shadow-[0_14px_30px_rgba(184,132,63,.24)]">
                <Icon />
              </div>

              <h3 className="font-heading text-2xl font-extrabold uppercase tracking-wide text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/62">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}