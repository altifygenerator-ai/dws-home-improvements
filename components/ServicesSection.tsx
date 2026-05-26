"use client";

import { motion } from "framer-motion";
import {
  FaHammer,
  FaPaintRoller,
  FaTools,
  FaWrench,
  FaDoorOpen,
  FaHome,
} from "react-icons/fa";
import { MdOutlineHandyman, MdHomeRepairService } from "react-icons/md";

const services = [
  {
    icon: MdHomeRepairService,
    title: "Home Repairs",
    text: "General repairs around the house, from small fixes to the kind of projects that keep getting pushed off.",
  },
  {
    icon: FaHammer,
    title: "Interior Updates",
    text: "Clean updates that help rooms feel newer, sharper, and better taken care of without a full remodel.",
  },
  {
    icon: FaPaintRoller,
    title: "Painting & Touch Ups",
    text: "Fresh paint, patch work, trim touch-ups, and cleanup details that make a big difference.",
  },
  {
    icon: FaWrench,
    title: "Fixture Installs",
    text: "Help with lights, hardware, small installs, replacements, and finishing details around the home.",
  },
  {
    icon: FaDoorOpen,
    title: "Doors, Trim & Details",
    text: "Small carpentry, doors, trim, hardware, and the detail work that helps a home feel finished.",
  },
  {
    icon: MdOutlineHandyman,
    title: "Handyman Projects",
    text: "A reliable option for punch lists, odd jobs, rental upkeep, and homeowner project lists.",
  },
  {
    icon: FaTools,
    title: "Drywall & Patch Work",
    text: "Repairing damaged areas, patching walls, and getting surfaces ready for a cleaner finish.",
  },
  {
    icon: FaHome,
    title: "Property Upkeep",
    text: "Ongoing home maintenance and improvement work for homeowners, rentals, and small properties.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[var(--bg)] px-5 py-24 md:px-8"
    >
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[var(--accent)]">
            What We Do
          </p>

          <h2 className="font-heading mt-4 text-5xl font-extrabold uppercase leading-none text-white md:text-6xl">
            Home improvement work made simple.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Whether it&apos;s a repair, update, install, or punch list around
            the house, DW&apos;s Home Improvements gives homeowners a simple way
            to get projects handled without the runaround.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]/45 hover:bg-white/[0.07]"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent)]/15 text-xl text-[var(--accent)] transition group-hover:bg-[var(--accent)] group-hover:text-[var(--bg)]">
                  <Icon />
                </div>

                <h3 className="font-heading text-3xl font-extrabold uppercase leading-none text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/62">
                  {service.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}