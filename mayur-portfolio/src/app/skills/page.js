"use client";

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
      <div className="max-w-6xl mx-auto px-10">

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-sm tracking-widest text-gray-400 mb-4">
            SKILLS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I Use
          </h2>
        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-16">

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

        </div>
      </div>
    </section>
  );
}

/* Group */
function SkillGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-5">
        {children}
      </div>
    </div>
  );
}

/* Skill pill */
function Skill({ icon, name }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-[#111] rounded-full text-sm hover:bg-[#1a1a1a] transition">
      <span className="text-xl text-white">{icon}</span>
      <span>{name}</span>
    </div>
  );
}
