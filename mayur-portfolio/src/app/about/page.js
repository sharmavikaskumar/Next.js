"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <motion.div
        className="max-w-6xl mx-auto px-10 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Intro */}
        <motion.p
          variants={item}
          className="text-sm tracking-widest text-gray-400 mb-4"
        >
          HELLO
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          I’M MAYUR VARE
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-2xl text-gray-400 leading-relaxed mb-10"
        >
          Passionate Android Developer focused on building scalable,
          high-performance mobile applications. I work with Kotlin,
          Java, Firebase, and modern Android architecture components to
          deliver clean and user-friendly solutions.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="space-y-6 max-w-md"
          variants={container}
        >
          <motion.div variants={item} className="flex items-center justify-between border-b border-gray-700 pb-4">
            <span className="text-2xl font-bold">4+</span>
            <span className="text-gray-400">Month Experience</span>
          </motion.div>

          <motion.div variants={item} className="flex items-center justify-between border-b border-gray-700 pb-4">
            <span className="text-2xl font-bold">5+</span>
            <span className="text-gray-400">Completed Projects</span>
          </motion.div>

          <motion.div variants={item} className="flex items-center justify-between">
            <span className="text-2xl font-bold">100%</span>
            <span className="text-gray-400">Learning & Growth</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* Animation Variants */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
