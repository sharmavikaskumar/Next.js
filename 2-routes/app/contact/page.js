import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6">
      
      {/* Glass Card */}
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-10 max-w-xl w-full text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Build. Create. Domore.
        </h1>

        <p className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed">
          Crafting powerful digital experiences with clean code, scalable
          systems, and modern UI that actually converts.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition">
            View Work
          </button>
        </div>

      </div>
    </div>
  );
};

export default Page;
