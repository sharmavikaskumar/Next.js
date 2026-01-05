"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center">
      <div className="px-10 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[48px] md:text-[120px] font-extrabold leading-none text-white"
        >
          I'M AN <br />
          ANDROID <br />
          DEVELOPER
        </motion.h1>
      </div>
    </main>
  );
}
