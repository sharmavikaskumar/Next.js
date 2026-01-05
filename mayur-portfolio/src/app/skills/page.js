"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiKotlin,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiAndroid,
} from "react-icons/si";

export default function Skills() {
  return (
    <section className="min-h-screen bg-black py-28 text-white">
      <motion.div
        className="max-w-6xl mx-auto px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Heading */}
        <motion.div className="mb-20 text-center" variants={item}>
          <p className="text-sm tracking-widest text-gray-400 mb-4">
            SKILLS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I Use
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <motion.div
          className="grid md:grid-cols-2 gap-16"
          variants={container}
        >
          <SkillGroup title="Frontend">
            <Skill icon={<FaHtml5 />} name="HTML" />
            <Skill icon={<FaCss3Alt />} name="CSS" />
            <Skill icon={<FaJs />} name="JavaScript" />
          </SkillGroup>

          <SkillGroup title="Backend">
            <Skill icon={<SiMysql />} name="MySQL" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
          </SkillGroup>

          <SkillGroup title="Android">
            <Skill icon={<SiAndroid />} name="Android" />
            <Skill icon={<SiKotlin />} name="Kotlin" />
            <Skill icon={<FaJava />} name="Java" />
          </SkillGroup>

          <SkillGroup title="Tools & Database">
            <Skill icon={<SiFirebase />} name="Firebase" />
            <Skill icon={<FaGitAlt />} name="Git" />
            <Skill icon={<FaGithub />} name="GitHub" />
            <Skill icon={<SiPostman />} name="Postman" />
          </SkillGroup>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* 🔹 Skill Group */
function SkillGroup({ title, children }) {
  return (
    <motion.div variants={item}>
      <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-5">
        {children}
      </div>
    </motion.div>
  );
}

/* 🔹 Skill Pill */
function Skill({ icon, name }) {
  return (
    <motion.div
      variants={pill}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center gap-3 px-5 py-3 bg-[#111] rounded-full text-sm hover:bg-[#1a1a1a] transition cursor-pointer"
    >
      <span className="text-xl">{icon}</span>
      <span>{name}</span>
    </motion.div>
  );
}

/* 🔹 Animations */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

const pill = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
