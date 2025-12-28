"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="min-h-screen bg-black flex items-center">
      <div className="max-w-4xl mx-auto px-10 text-center">

        {/* Heading */}
        <p className="text-sm tracking-widest text-gray-400 mb-4">
          CONTACT
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I’m open to opportunities, internships, and collaborations.
          Feel free to connect with me or send a message directly.
        </p>

        {/* Contact Links */}
        <div className="flex justify-center gap-8 flex-wrap">

          {/* GitHub */}
          <a
            href="https://github.com/mayurvare"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 border border-gray-700 rounded-full text-white hover:bg-white hover:text-black transition"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mayur-vare-081951306"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 border border-gray-700 rounded-full text-white hover:bg-white hover:text-black transition"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:mayurvare404@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full hover:opacity-80 transition"
          >
            <MdEmail className="text-xl" />
            Send Message
          </a>

        </div>

      </div>
    </section>
  );
}
