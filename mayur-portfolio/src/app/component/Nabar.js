"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black border-b border-gray-800">
      <div className="flex items-center justify-between md:justify-center px-6 md:px-10 py-5">

        {/* Desktop Menu (Centered) */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-white">
          <li><Link href="/" className="hover:opacity-60">HOME</Link></li>
          <li><Link href="/about" className="hover:opacity-60">ABOUT</Link></li>
          <li><Link href="/projects" className="hover:opacity-60">PROJECTS</Link></li>
          <li><Link href="/skills" className="hover:opacity-60">SKILLS</Link></li>
          <li><Link href="/contact" className="hover:opacity-60">CONTACT</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-white ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-4 text-center">
          <Link href="/" onClick={() => setOpen(false)} className="block text-white">
            HOME
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block text-white">
            ABOUT
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="block text-white">
            PROJECTS
          </Link>
          <Link href="/skills" onClick={() => setOpen(false)} className="block text-white">
            SKILLS
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block text-white">
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}
