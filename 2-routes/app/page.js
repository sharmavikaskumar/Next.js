import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-black to-black text-white flex items-center justify-center px-6">
      
      {/* Main Card */}
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 shadow-2xl text-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          NestJS First Class 🚀
        </h1>

        <p className="text-gray-300 mb-8 leading-relaxed">
          Welcome to your first NestJS class page. This is where powerful,
          scalable, and enterprise-grade backend development begins.
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm">
            TypeScript
          </span>
          <span className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm">
            Modular
          </span>
          <span className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm">
            Scalable
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold">
            Start Learning
          </button>
          <button className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition">
            View Docs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
