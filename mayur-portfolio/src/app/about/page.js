export default function About() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-6xl mx-auto px-10 w-full">

        {/* Intro */}
        <p className="text-sm tracking-widest text-gray-400 mb-4">
          HELLO
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          I’M MAYUR VARE
        </h1>

        <p className="max-w-2xl text-gray-400 leading-relaxed mb-10">
          Passionate Android Developer focused on building scalable,
          high-performance mobile applications. I work with Kotlin,
          Java, Firebase, and modern Android architecture components to
          deliver clean and user-friendly solutions.
        </p>

        {/* Stats */}
        <div className="space-y-6 max-w-md">
          
          <div className="flex items-center justify-between border-b border-gray-700 pb-4">
            <span className="text-2xl font-bold">4+</span>
            <span className="text-gray-400">Month Experience</span>
          </div>

          <div className="flex items-center justify-between border-b border-gray-700 pb-4">
            <span className="text-2xl font-bold">5+</span>
            <span className="text-gray-400">Completed Projects</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">100%</span>
            <span className="text-gray-400">Learning & Growth</span>
          </div>

        </div>

      </div>
    </section>
  );
}
