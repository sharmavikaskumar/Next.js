import React from "react";

const Page = () => {
  return (
    <div className="min-h-screenr from-black via-gray-900 to-black text-white flex items-center justify-center px-6">
      
      {/* About Card */}
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 shadow-xl">
        
        <h1 className="text-4xl font-bold text-center mb-6">
          About This Page
        </h1>

        <p className="text-gray-300 text-center leading-relaxed mb-6">
          This project is built to showcase clean UI, scalable architecture,
          and performance-driven development using modern web technologies.
          Every component is designed with purpose, speed, and user experience
          in mind.
        </p>

        <div className="flex justify-center gap-6 mt-8 text-sm">
          <span className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">
            React
          </span>
          <span className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">
            Tailwind
          </span>
          <span className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">
            Performance
          </span>
        </div>

      </div>
    </div>
  );
};

export default Page;
