export default function Projects() {
  return (
    <section className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-10">

        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm tracking-widest text-gray-400 mb-3">
            PROJECTS
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Card */}
          <div className="bg-[#111] rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition">
            <h3 className="text-2xl font-bold text-white mb-2">
              Doubt Desk – Q&A App
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              Kotlin · Firebase · AI API
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Student–Teacher Q&A Android application with Firebase
              authentication, realtime database, and AI-powered
              answer suggestions for faster responses.
            </p>

            <a
              href="https://github.com/mayurvare/doubt_desk"
              target="_blank"
              className="inline-block text-white font-medium border-b border-white hover:opacity-60 transition"
            >
              View Project
            </a>
          </div>

          {/* Card */}
          <div className="bg-[#111] rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition">
            <h3 className="text-2xl font-bold text-white mb-2">
              Weather App
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              Kotlin · Retrofit · REST API
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Real-time weather application with city search,
              live API integration, and clean Material UI design.
            </p>

            <a
              href="https://github.com/mayurvare/Weather_App"
              target="_blank"
              className="inline-block text-white font-medium border-b border-white hover:opacity-60 transition"
            >
              View Project
            </a>
          </div>

          {/* Card */}
          <div className="bg-[#111] rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-2">
              News App
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              Kotlin · Retrofit · Room DB
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              News application with offline caching using Room DB,
              search functionality, and favorites support.
            </p>

            <span className="text-sm text-gray-500">
              Android Application
            </span>
          </div>

          {/* Card */}
          <div className="bg-[#111] rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-2">
              Online Admission System
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              MERN · Razorpay · EmailJS
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Web-based admission portal with student registration,
              online fee payment, and automated email notifications.
            </p>

            <span className="text-sm text-gray-500">
              Web Project
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
