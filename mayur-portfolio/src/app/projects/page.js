"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="min-h-screen bg-black py-24">
      <motion.div
        className="max-w-7xl mx-auto px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={container}>
          <motion.p
            className="text-sm tracking-widest text-gray-400 mb-3"
            variants={item}
          >
            PROJECTS
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white"
            variants={item}
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={container}
        >
          {/* Card */}
          <ProjectCard
            title="Doubt Desk – Q&A App"
            tech="Kotlin · Firebase · AI API"
            desc="Student–Teacher Q&A Android application with Firebase authentication, realtime database, and AI-powered answer suggestions for faster responses."
            link="https://github.com/mayurvare/doubt_desk"
          />

          <ProjectCard
            title="Weather App"
            tech="Kotlin · Retrofit · REST API"
            desc="Real-time weather application with city search, live API integration, and clean Material UI design."
            link="https://github.com/mayurvare/Weather_App"
          />

          <ProjectCard
            title="News App"
            tech="Kotlin · Retrofit · Room DB"
            desc="News application with offline caching using Room DB, search functionality, and favorites support."
            label="Android Application"
          />

          <ProjectCard
            title="Online Admission System"
            tech="MERN · Razorpay · EmailJS"
            desc="Web-based admission portal with student registration, online fee payment, and automated email notifications."
            label="Web Project"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* 🔹 Reusable Card */
function ProjectCard({ title, tech, desc, link, label }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-[#111] rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition"
    >
      <h3 className="text-2xl font-bold text-white mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mb-4">
        {tech}
      </p>

      <p className="text-gray-400 leading-relaxed mb-6">
        {desc}
      </p>

      {link ? (
        <a
          href={link}
          target="_blank"
          className="inline-block text-white font-medium border-b border-white hover:opacity-60 transition"
        >
          View Project
        </a>
      ) : (
        <span className="text-sm text-gray-500">
          {label}
        </span>
      )}
    </motion.div>
  );
}

/* 🔹 Animations */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
