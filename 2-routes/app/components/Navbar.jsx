import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-black text-white">
      
      {/* Logo */}
      <h3 className="text-xl font-bold tracking-wide">
        domore
      </h3>

      {/* Links */}
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-gray-300 transition">
          Home
        </Link>

        <Link href="/about" className="hover:text-gray-300 transition">
          About
        </Link>

        <Link href="/contact" className="hover:text-gray-300 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
