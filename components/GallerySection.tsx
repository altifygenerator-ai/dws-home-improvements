"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const projects = [
  {
    title: "Interior Updates",
    text: "Clean improvements that help rooms feel finished and taken care of.",
    image: "/images/work-1.jpg",
  },
  {
    title: "Kitchen & Fixture Work",
    text: "Small upgrades, installs, repairs, and detail work around the home.",
    image: "/images/work-2.jpg",
  },
  {
    title: "Repairs & Upkeep",
    text: "Everyday projects handled with clear communication and clean results.",
    image: "/images/work-3.jpg",
  },
  {
    title: "Home Project Lists",
    text: "A simple way to knock out the jobs that keep getting pushed back.",
    image: "/images/work-4.jpg",
  },
];

export default function GallerySection() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[var(--bg)] px-5 py-24 md:px-8"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[var(--accent)]">
              Recent Work
            </p>

            <h2 className="font-heading mt-4 text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
              See the work for yourself.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Customers want to see real work before they call. This section
              gives DW&apos;s Home Improvements a clean place to show finished
              projects, repairs, updates, and home improvement work around the
              Sherman and Denison area.
            </p>
          </motion.div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Start Your Project
            <FaArrowRight className="transition group-hover:translate-x-1" />
          </motion.a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--bg-soft)] ${
                index === 0 ? "lg:min-h-[460px]" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={`${project.title} by DW's Home Improvements`}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="mb-4 inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--bg)]">
                  Project Highlight
                </span>

                <h3 className="font-heading text-4xl font-extrabold uppercase leading-none text-white md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-white/68">
                  {project.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}